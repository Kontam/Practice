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
        return response;
      }
      return fetch(event.request);
    })
  );
});
