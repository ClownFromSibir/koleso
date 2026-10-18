/* «Неделя 8»: офлайн-режим.
   Онлайн — всегда свежие файлы из сети (и копия в кэш), офлайн — последняя сохранённая копия. */
const CACHE = "n8-v9";
const FILES = ["nedelya.html","nedelya-data.js?v=9","nedelya-quests.js?v=9","nedelya-secret.js?v=9","nedelya-games.js?v=9",
               "nedelya.webmanifest","n8-icon-192.png","n8-icon-512.png"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith("n8-") && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const mine = url.origin === location.origin && /(nedelya|n8-)/.test(url.pathname);
  const font = /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  if (!mine && !font) return;
  e.respondWith(
    fetch(req, mine ? {cache: "no-cache"} : {}).then(res => {
      if (res && (res.ok || res.type === "opaque")) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    }).catch(() => caches.match(req, {ignoreSearch: !mine}).then(r => r || (req.mode === "navigate" ? caches.match("nedelya.html") : undefined)))
  );
});
