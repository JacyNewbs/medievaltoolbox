/*
 * Visitor counting with Cloudflare Web Analytics.
 * Cookie-free: nothing is stored on the visitor's device, and no one is
 * tracked across sites. It counts page views, referring sites, countries,
 * browsers and devices, and page load speed.
 *
 * Every public page loads this one file, so the token only lives here.
 * To set it up: Cloudflare dashboard → Analytics & Logs → Web Analytics →
 * Add a site → medievaltoolbox.com. Choose the "manual" JavaScript snippet
 * and copy the token from it, i.e. the value after "token": in the snippet.
 * Paste it between the quotes below. Leave it empty to switch counting off.
 */
(function () {
  var TOKEN = "6695b4b0137b4043a838e75668d62c6a";
  if (!TOKEN) return;
  if (location.hostname !== "medievaltoolbox.com" && location.hostname !== "www.medievaltoolbox.com") return; // don't count local previews
  var s = document.createElement("script");
  s.defer = true;
  s.src = "https://static.cloudflareinsights.com/beacon.min.js";
  s.setAttribute("data-cf-beacon", JSON.stringify({ token: TOKEN }));
  document.head.appendChild(s);
})();
