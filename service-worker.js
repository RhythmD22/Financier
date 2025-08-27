// Service Worker for Financier PWA

const CACHE_NAME = 'financier-v1.0.0';
const urlsToCache = [
  '/Financier/',
  '/Financier/index.html',
  '/Financier/Goals%20%26%20Categories.html',
  '/Financier/Track%20Transactions.html',
  '/Financier/Analytics.html',
  '/Financier/Calculator.html',
  '/Financier/Money%20Tips.html',
  '/Financier/favicon.ico',
  '/Financier/PWA%20icon.png',
  '/Financier/navigation.js',
  '/Financier/styles.css'
];

// Install event - cache all static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - serve cached content when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});