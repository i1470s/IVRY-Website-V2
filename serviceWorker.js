const IVRY = "IVRY"
const assets = [
  "/",
  "/index.html",
  "/shop.html",
  "/services.html",
  "/tutorials.html",
  "/data/css/style.css",
  "/data/js/app.js",
  "/data/icon.png"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(IVRY).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})