/*_____  ____   ____  _______   ____  ____   
 |_   _||_  _| |_  _||_   __ \ |_  _||_  _|  
   | |    \ \   / /    | |__) |  \ \  / /    
   | |     \ \ / /     |  __ /    \ \/ /     
  _| |_     \ ' /     _| |  \ \_  _|  |_     
 |_____|     \_/     |____| |___||______|
  Created by i1470s#0396 Welcome :)*/
  
const cacheName = 'OFFLINE';
const filestoCache = [
    '/',
    '/index.html',
    '/data/css/styles.css',
    '/js/app.js',
    '/data/images/icon.png'
  ]; 

// the event handler for the activate event
self.addEventListener('activate', e => self.clients.claim());

// the event handler for the install event 
// typically used to cache assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName)
    .then(cache => cache.addAll(filesToCache))
  );
});

// the fetch event handler, to intercept requests and serve all 
// static assets from the cache
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request)
    .then(response => response ? response : fetch(e.request))
  )
});