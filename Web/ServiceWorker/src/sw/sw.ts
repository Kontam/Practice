// declare const self: ServiceWorker;

const CHACHE_NAME = 'my-site-cachev1';
const urlsToCache = ['/images/junco.png'];

self.addEventListener('install', function (event: any) {
  // Perform install steps
  console.log('sw.js');
  event.waitUntil(
    caches.open(CHACHE_NAME).then((cache) => {
      console.log('opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function (event: any) {
  console.log(event);
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        console.log("cache hit", response);
        return response;
      }

      const fetchRequest = event.request.clone();

      return fetch(fetchRequest).then((response) => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        const responseToCache = response.clone();

        caches.open(CHACHE_NAME).then((cache) => {
          console.log("new cache", responseToCache);
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
});
