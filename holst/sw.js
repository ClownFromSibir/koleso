/* «Холст дня»: офлайн. Онлайн — свежие файлы, офлайн — сохранённая копия. */
const CACHE = "holst-v1";
const FILES = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith("holst-") && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request; if (req.method !== "GET") return;
  const url = new URL(req.url);
  const mine = url.origin === location.origin && url.pathname.startsWith(new URL("./", location).pathname);
  const font = /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  if (!mine && !font) return;
  e.respondWith(fetch(req, mine ? {cache: "no-cache"} : {}).then(res => {
      if (res && (res.ok || res.type === "opaque")) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    }).catch(() => caches.match(req, {ignoreSearch: true}).then(r => r || (req.mode === "navigate" ? caches.match("index.html") : undefined))));
});
