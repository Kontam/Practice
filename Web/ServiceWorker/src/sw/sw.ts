declare const self: ServiceWorker;

self.addEventListener('install', function (event) {
  // Perform install steps
  console.log('sw.js');
});

self.addEventListener('fetch', function (event: any) {
  console.log(event);
  event.respondWith(
    caches.match(event.request).then(function (response) {
      console.log(response);
    })
  );
});

export {};
