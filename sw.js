// DeutschAL Service Worker v21 — Performance optimized
var CACHE = 'deutschal-v21';

// Critical files: cached immediately on install
var CRITICAL = [
  './',
  'index.html',
  'style.css',
  'app.js',
  'data-modules.js',
  'data-state.js',
  'manifest.json',
  'favicon.ico',
  'favicon-32x32.png',
  'apple-touch-icon.png'
];

// Non-critical: cached on first use
var LAZY = [
  'data-vocab.js',
  'data-grammar.js',
  'og-image.png',
  'favicon-16x16.png'
];

self.addEventListener('install', function(e) {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(function(c) {
      // Cache critical files, ignore errors on lazy ones
      return c.addAll(CRITICAL).catch(function() {
        return c.addAll(['./']);
      });
    })
  );
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE; })
            .map(function(k) { return caches.delete(k); })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(cached) {
      // Cache-first for JS/CSS (they're versioned via sw cache name)
      if (cached) return cached;
      // Network + cache for new requests
      return fetch(e.request).then(function(resp) {
        if (resp && resp.status === 200) {
          var clone = resp.clone();
          caches.open(CACHE).then(function(c) { c.put(e.request, clone); });
        }
        return resp;
      }).catch(function() {
        return caches.match('./');
      });
    })
  );
});
