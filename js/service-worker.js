// Service Worker for caching assets
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('offline-v1').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/script.js',
                '/style.css'
                // Add other assets to cache here if needed
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});











// // Cache name
// const CACHE_NAME = 'offline-cache-v1';

// // Assets to cache
// const assetsToCache = [
//     '/',
//     '/index.html',
//     '/style.css',
//     '/script.js'
//     // Add more assets as needed
// ];

// // Install event
// self.addEventListener('install', event => {
//     event.waitUntil(
//         caches.open(CACHE_NAME)
//             .then(cache => cache.addAll(assetsToCache))
//     );
// });

// // Fetch event
// self.addEventListener('fetch', event => {
//     event.respondWith(
//         caches.match(event.request)
//             .then(response => response || fetch(event.request))
//             .catch(() => {
//                 // Handle fetch errors
//             })
//     );
// });
