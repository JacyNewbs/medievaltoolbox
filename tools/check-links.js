#!/usr/bin/env node
/*
 * Medieval Toolbox link checker
 * -----------------------------
 * Reads fontes-data.js, checks every link in it, and writes a Markdown
 * report (link-report.md). Run by .github/workflows/check-links.yml every
 * week; you can also run it yourself:  node tools/check-links.js
 *
 * Options:
 *   --only=archive.org     check only links whose host contains this text
 *   --limit=50             stop after this many links (for quick tests)
 *   --out=link-report.md   where to write the report
 *
 * Exit code: 1 if any link is broken, 0 otherwise.
 *
 * How links are checked:
 *   - Internet Archive (archive.org/details/ID): asks the Archive's metadata
 *     API whether the item still exists and is not withdrawn ("dark").
 *   - HathiTrust (hdl.handle.net/2027/ID or babel.hathitrust.org): asks the
 *     HathiTrust catalogue API whether the volume still exists, and records
 *     its current access rights.
 *   - Everything else: requests the page (HEAD, then GET if HEAD is refused)
 *     and follows redirects. A 404/410 is "broken"; a redirect to a site's
 *     home page is flagged as "suspicious".
 *   - Sites that block automated visitors (403, 429, Cloudflare challenges)
 *     are reported as "couldn't check", never as broken.
 *
 * Requests are polite: at most 2 at a time per site, with a pause between
 * them, and an identifying User-Agent.
 */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const args = Object.fromEntries(
  process.argv.slice(2).map(a => { const m = a.match(/^--([^=]+)=?(.*)$/); return m ? [m[1], m[2] || true] : [a, true]; })
);
const OUT = path.resolve(ROOT, args.out || "link-report.md");
const DATA = path.resolve(ROOT, args.data || "fontes-data.js");
const IA_API = process.env.IA_API || "https://archive.org/metadata/";
const HT_API = process.env.HT_API || "https://catalog.hathitrust.org/api/volumes/brief/htid/";
const UA = "MedievalToolboxLinkChecker/1.0 (+https://medievaltoolbox.com)";
const TIMEOUT_MS = 30000;
const PER_HOST = 2;          // simultaneous requests per site
const PAUSE_MS = 1000;       // pause after each request to the same site

// HathiTrust rights codes that mean full view (in the US or worldwide)
const HT_FULL = new Set(["pd", "pdus", "cc-by", "cc-by-nd", "cc-by-nc-nd", "cc-by-nc", "cc-by-nc-sa", "cc-by-sa", "cc-zero", "cc-by-3.0", "cc-by-4.0", "cc-by-nc-4.0", "cc-by-nc-nd-4.0", "cc-by-nc-sa-4.0", "cc-by-nd-4.0", "cc-by-sa-4.0", "und-world", "ic-world"]);

// ---------- 1. Collect the links ----------
function loadRecords() {
  const ctx = { window: {} };
  vm.runInNewContext(fs.readFileSync(DATA, "utf8"), ctx, { filename: DATA });
  const recs = ctx.window.FONTES_RECORDS;
  if (!Array.isArray(recs)) throw new Error("fontes-data.js did not set window.FONTES_RECORDS");
  return recs;
}

function collectLinks(records) {
  const byUrl = new Map();
  const add = (url, where) => {
    if (!url || typeof url !== "string") return;
    if (!/^https?:\/\//i.test(url)) return;              // skip relative links to our own pages
    if (!byUrl.has(url)) byUrl.set(url, { url, where: [] });
    byUrl.get(url).where.push(where);
  };
  for (const r of records) {
    const card = { id: r.id, title: r.title };
    add(r.tnaUrl, { ...card, what: "TNA series " + (r.tnaCode || "") });
    for (const t of r.extraTna || []) add(t.url, { ...card, what: "TNA series " + (t.code || "") });
    for (const v of r.volumes || []) {
      add(v.tnaUrl, { ...card, what: (v.range || "") + " — TNA " + (v.tnaCode || "") });
      for (const l of v.links || []) add(l.url, { ...card, what: (v.range || "") + " — " + (l.label || l.type || "link") });
    }
  }
  return [...byUrl.values()];
}

// ---------- 2. Polite fetching ----------
const hostQueues = new Map();
function hostOf(u) { try { return new URL(u).host; } catch { return "?"; } }

function politely(host, fn) {
  let q = hostQueues.get(host);
  if (!q) { q = { active: 0, waiting: [] }; hostQueues.set(host, q); }
  return new Promise((resolve, reject) => {
    const run = async () => {
      q.active++;
      try { resolve(await fn()); } catch (e) { reject(e); }
      finally {
        await sleep(PAUSE_MS);
        q.active--;
        const next = q.waiting.shift();
        if (next) next();
      }
    };
    if (q.active < PER_HOST) run(); else q.waiting.push(run);
  });
}
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function request(url, method = "GET") {
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, { method, redirect: "follow", signal: ctl.signal, headers: { "User-Agent": UA, "Accept": "text/html,application/json;q=0.9,*/*;q=0.8" } });
    let body = "";
    if (method === "GET") { try { body = await res.text(); } catch { body = ""; } }
    return { status: res.status, finalUrl: res.url || url, headers: res.headers, body };
  } finally { clearTimeout(timer); }
}

// one retry after a network error or a 5xx
async function requestWithRetry(url, method) {
  try {
    const r = await request(url, method);
    if (r.status >= 500 && r.status !== 501) { await sleep(5000); return await request(url, method); }
    return r;
  } catch (e) {
    await sleep(5000);
    return await request(url, method);
  }
}

// ---------- 3. Checks ----------
// Each check returns { status: "ok" | "broken" | "suspicious" | "unchecked", note }
function looksBlocked(r) {
  if (r.status === 403 || r.status === 429) return true;
  if (r.status === 503 && /cloudflare|captcha|challenge/i.test(r.body || "")) return true;
  if (r.headers && r.headers.get && r.headers.get("cf-mitigated") === "challenge") return true;
  return false;
}

function iaIdentifier(u) {
  const m = u.match(/archive\.org\/(?:details|stream|download)\/([^\/?#]+)/i);
  return m ? decodeURIComponent(m[1]) : null;
}
function hathiId(u) {
  let m = u.match(/hdl\.handle\.net\/2027\/([^?#]+)/i);
  if (m) return decodeURIComponent(m[1]).replace(/\/$/, "");
  m = u.match(/babel\.hathitrust\.org\/cgi\/pt\?(?:[^#]*&)?id=([^&#]+)/i);
  return m ? decodeURIComponent(m[1]) : null;
}

async function checkArchive(link, id) {
  const r = await politely("archive.org-api", () => requestWithRetry(IA_API + encodeURIComponent(id), "GET"));
  if (r.status !== 200) return { status: "unchecked", note: "Archive API answered " + r.status };
  let j; try { j = JSON.parse(r.body); } catch { return { status: "unchecked", note: "Archive API gave an unreadable answer" }; }
  if (!j || !j.metadata || Object.keys(j).length === 0) return { status: "broken", note: "Item no longer exists on the Internet Archive" };
  if (j.is_dark) return { status: "broken", note: "Item has been withdrawn (dark) on the Internet Archive" };
  return { status: "ok" };
}

async function checkHathi(link, id) {
  const r = await politely("hathitrust-api", () => requestWithRetry(HT_API + encodeURIComponent(id) + ".json", "GET"));
  if (r.status !== 200) return { status: "unchecked", note: "HathiTrust API answered " + r.status };
  let j; try { j = JSON.parse(r.body); } catch { return { status: "unchecked", note: "HathiTrust API gave an unreadable answer" }; }
  const item = (j.items || []).find(i => i.htid === id) || (j.items || [])[0];
  if (!item) return { status: "broken", note: "Volume no longer found in HathiTrust" };
  const rights = item.rightsCode || item.usRightsString || "?";
  if (!HT_FULL.has(item.rightsCode) && item.usRightsString !== "Full view")
    return { status: "ok", note: "Limited (search-only) in the US — rights code " + rights + "; may still be viewable from the UK", rights };
  return { status: "ok", rights };
}

async function checkPage(link) {
  const host = hostOf(link.url);
  return politely(host, async () => {
    let r = await requestWithRetry(link.url, "HEAD");
    // many sites refuse or mishandle HEAD; fall back to GET
    if (r.status >= 400 || r.status === 0) r = await requestWithRetry(link.url, "GET");
    if (looksBlocked(r)) return { status: "unchecked", note: "Site blocks automated checks (" + r.status + ")" };
    if (r.status === 404 || r.status === 410) return { status: "broken", note: "Page not found (" + r.status + ")" };
    if (r.status >= 400) return { status: "broken", note: "Site answered " + r.status };
    // redirected to the home page = the page has probably gone
    try {
      const from = new URL(link.url), to = new URL(r.finalUrl);
      if (from.pathname.length > 1 && (to.pathname === "/" || to.pathname === "") && !to.search)
        return { status: "suspicious", note: "Redirects to the site's home page (" + to.href + ")" };
      if (from.host.replace(/^www\./, "") !== to.host.replace(/^www\./, ""))
        return { status: "ok", note: "Now redirects to " + to.host };
    } catch {}
    return { status: "ok" };
  });
}

async function check(link) {
  try {
    const ia = iaIdentifier(link.url);
    if (ia) return await checkArchive(link, ia);
    const ht = hathiId(link.url);
    if (ht) return await checkHathi(link, ht);
    return await checkPage(link);
  } catch (e) {
    const msg = e.name === "AbortError" ? "Timed out after " + TIMEOUT_MS / 1000 + "s" : (e.cause && e.cause.code) || e.message;
    return { status: "unchecked", note: "Couldn't connect: " + msg };
  }
}

// ---------- 4. Report ----------
function where(l) {
  return l.where.map(w => "`#" + w.id + "` " + w.title + " — " + w.what).join("<br>");
}
function writeReport(results, startedAt) {
  const groups = { broken: [], suspicious: [], unchecked: [], ok: [] };
  for (const x of results) groups[x.result.status].push(x);
  const limited = results.filter(x => x.result.rights && x.result.note);
  const mins = ((Date.now() - startedAt) / 60000).toFixed(1);
  const L = [];
  L.push("# Fontes link check — " + new Date().toISOString().slice(0, 10));
  L.push("");
  L.push(`Checked **${results.length}** links in ${mins} minutes: **${groups.broken.length} broken**, ${groups.suspicious.length} suspicious, ${groups.unchecked.length} couldn't be checked, ${groups.ok.length} fine.`);
  L.push("");
  L.push("Cards are listed by their id, so `#close-rolls` is https://medievaltoolbox.com/fontes.html#close-rolls. Fix links in `fontes-data.js`.");
  const table = (title, intro, rows) => {
    if (!rows.length) return;
    L.push("", "## " + title, "", intro, "", "| Link | Problem | Where it's used |", "|---|---|---|");
    for (const x of rows) L.push(`| ${x.url} | ${x.result.note || ""} | ${where(x)} |`);
  };
  table("Broken", "These need fixing.", groups.broken);
  table("Suspicious", "These load, but probably not the page intended. Worth a look.", groups.suspicious);
  table("Couldn't check", "The site blocked the checker or didn't answer. Usually fine; check by hand only if one keeps appearing.",
    groups.unchecked);
  if (limited.length) {
    L.push("", "<details><summary>HathiTrust volumes that are search-only in the US (" + limited.length + ")</summary>", "",
      "Not errors: these are often viewable from the UK. Listed so you can spot any that change.", "");
    for (const x of limited) L.push("- " + x.url + " — " + x.result.note);
    L.push("", "</details>");
  }
  fs.writeFileSync(OUT, L.join("\n") + "\n");
  return groups;
}

// ---------- main ----------
(async () => {
  const startedAt = Date.now();
  let links = collectLinks(loadRecords());
  if (args.only) links = links.filter(l => hostOf(l.url).includes(args.only));
  if (args.limit) links = links.slice(0, Number(args.limit));
  console.log(`Checking ${links.length} links from ${path.basename(DATA)}…`);
  let done = 0;
  const results = await Promise.all(links.map(async l => {
    const result = await check(l);
    done++;
    if (result.status !== "ok") console.log(`[${result.status}] ${l.url} — ${result.note || ""}`);
    if (done % 50 === 0) console.log(`  …${done}/${links.length}`);
    return { ...l, result };
  }));
  const g = writeReport(results, startedAt);
  console.log(`\nDone: ${g.broken.length} broken, ${g.suspicious.length} suspicious, ${g.unchecked.length} unchecked, ${g.ok.length} ok.`);
  console.log("Report written to " + path.relative(process.cwd(), OUT));
  process.exitCode = g.broken.length ? 1 : 0;
})().catch(e => { console.error(e); process.exitCode = 2; });
