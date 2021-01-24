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
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})