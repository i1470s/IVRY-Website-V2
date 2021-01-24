const assets = [
  "/",
  "/index.html",
  "/shop.html",
  "/services.html",
  "/tutorials.html",
  "/data/css/style.css",
  "/data/js/app.js",
  "/data/icon.png",
  "/data/icon-512.png"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open('static')
    .then(function(cache) {
        return cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  );
});