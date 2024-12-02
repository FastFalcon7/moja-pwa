const CACHE_NAME = 'pwa-cache-v1';
const urlsToCache = [
  '/',                 // Hlavná stránka
  '/index.html',       // HTML
  '/css/styles.css',   // CSS
  '/js/script.js',     // JavaScript
  '/manifest.json',    // Manifest
  '/assets/icon-192x192.png', // Ikona
  '/assets/icon-512x512.png'  // Ikona
];

// Inštalácia service workera
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Aktivácia a čistenie starých cache
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetchovanie dát
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
