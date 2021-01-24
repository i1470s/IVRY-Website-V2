const assets = [
  "/",
  "/index.html",
  "/shop.html",
  "/services.html",
  "/tutorials.html",
  "/data/css/style.css",
  "/js/app.js",
  "/data/icon.png",
  "/data/icon-512.png"
];

const staticCacheName = 'IVRY';

self.addEventListener('install', event => {
  console.log('Attempting to install service worker and cache static assets');
  event.waitUntil(
    caches.open(staticCacheName)
    .then(cache => {
      return cache.addAll(assets);
    })
  );
});