/* Cloudflare Web Analytics (cookie-free). Leave TOKEN empty to turn counting off. */
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
