// Here comes the install event!
// This only happens once, when the browser sees this
// importScripts('./serviceworker-cache-polyfill.js');

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
        'logo192.svg',
        'logo512.svg',
        'manifest.json',
        'serviceworker-cache-pollyfill.js',
        'custom-service-worker.js',
        '/static/media/user.16e7e939.svg',
        '/static/media/dm.2fb416eb.svg',
        '/static/media/home.b421c8ff.svg',
        '/static/media/learn.dc189a0a.svg',
        '/static/media/store.da682a9f.svg',
        '/static/media/search.b0434d0f.svg'
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