const assets = [
  "/",
  "/index.html",
  "/shop.html",
  "/services.html",
  "/tutorials.html",
  "/data/css/styles.css",
  "/js/app.js",
  "/data/images/icon.png",
  "/data/images/icon-192.png",
  "/data/images/icon-512.png",
  "/data/images/icon-640.png",
  "/data/images/icon-750.png",
  "/data/images/icon-1125.png",
  "/data/images/icon-1242.png",
  "/data/images/icon-1536.png",
  "/data/images/icon-1668.png",
  "/data/images/icon-2048.png"
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

const isIos = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test( userAgent );
}

const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

if (isIos() && !isInStandaloneMode()) {
  this.setState({ showInstallMessage: true });
}