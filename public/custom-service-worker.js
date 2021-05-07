// Chrome's currently missing some useful cache methods,
// this polyfill adds them.
importScripts('./serviceworker-cache-polyfill.js');

// Here comes the install event!
// This only happens once, when the browser sees this
// version of the ServiceWorker for the first time.
self.addEventListener('install', function(event) {
  // We pass a promise to event.waitUntil to signal how 
  // long install takes, and if it failed
  event.waitUntil(
    // We open a cache…
    caches.open('IVRY-Cache-v1').then(function(cache) {
      // And add resources to it
      return cache.addAll([
        'index.html',
        'robots.txt',
        'favicon.ico',
        'icon192.svg',
        'icon512.svg',
        'manifest.json',
        'serviceworker-cache-pollyfill.js',
        'custom-service-worker.js',
        'http://ivry.tk/static/media/home.04b971e3.svg',
        'http://ivry.tk/static/media/learn.e9763d0f.svg',
        'http://ivry.tk/static/media/search.c2695fe2.svg',
        'http://ivry.tk/static/media/store.959bd9ff.svg'
      ]);
    })
  );
});

// The fetch event happens for the page request with the
// ServiceWorker's scope, and any request made within that
// page
self.addEventListener('fetch', function(event) {
  // Calling event.respondWith means we're in charge
  // of providing the response. We pass in a promise
  // that resolves with a response object
  event.respondWith(
    // First we look for something in the caches that
    // matches the request
    caches.match(event.request).then(function(response) {
      // If we get something, we return it, otherwise
      // it's null, and we'll pass the request to
      // fetch, which will use the network.
      return response || fetch(event.request);
    })
  );
});