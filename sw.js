// DeutschAL — Service Worker disabled
// Unregisters itself and clears all caches
self.addEventListener('install', function() { self.skipWaiting(); });
self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(keys.map(function(k) { return caches.delete(k); }));
    }).then(function() { self.clients.claim(); })
  );
});
self.addEventListener('fetch', function(e) {
  // No caching — pass through to network
  e.respondWith(fetch(e.request));
});
