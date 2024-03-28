// cache name
const cacheName = "offline-cache-v2";

// Call Install Event
self.addEventListener("install", (e) => {
  console.log("Service Worker Installed");
});

// Call Activate Event
self.addEventListener("activate", (e) => {
  console.log("Service Worker Activated");
  //   Remove unwanted caches
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            console.log("Service Worker clearing Old Cache");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Call Fetch Event
self.addEventListener("fetch", (e) => {
  console.log("Service Worker: Fetching");
  e.respondWith(
    fetch(e.request).then((res) => {
      // Make a copy/clone response
      const resClone = res.clone();
      // Open cache
      caches.open(cacheName).then((cache) => {
        // add response to cache
        cache.put(e.request, resClone);
      });
      return res;
    }).catch(err => caches.match(request).then(res => res))
  );
});
