// DeutschAL Service Worker v20
var CACHE = 'deutschal-v20';
var FILES = [
  './',
  'index.html',
  'style.css',
  'app.js',
  'data-modules.js',
  'data-vocab.js',
  'data-grammar.js',
  'data-state.js',
  'manifest.json',
  'og-image.png',
  'favicon.ico',
  'favicon-32x32.png',
  'favicon-16x16.png',
  'apple-touch-icon.png'
];

self.addEventListener('install', function(e) {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(function(c) {
      return c.addAll(FILES).catch(function() { return c.addAll(['./']); });
    })
  );
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE; }).map(function(k) { return caches.delete(k); })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(cached) {
      if (cached) return cached;
      return fetch(e.request).then(function(resp) {
        var clone = resp.clone();
        caches.open(CACHE).then(function(c) { c.put(e.request, clone); });
        return resp;
      }).catch(function() { return caches.match('./'); });
    })
  );
});
