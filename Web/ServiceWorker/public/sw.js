"use strict";
// declare const self: ServiceWorker;
var CHACHE_NAME = 'my-site-cachev1';
var urlsToCache = ['/images/junco.png'];
self.addEventListener('install', function (event) {
    // Perform install steps
    console.log('sw.js');
    event.waitUntil(caches.open(CHACHE_NAME).then(function (cache) {
        console.log('opened cache');
        return cache.addAll(urlsToCache);
    }));
});
self.addEventListener('fetch', function (event) {
    console.log(event);
    event.respondWith(caches.match(event.request).then(function (response) {
        if (response) {
            console.log('cache hit', response);
            return response;
        }
        var fetchRequest = event.request.clone();
        return fetch(fetchRequest).then(function (response) {
            if (!response || response.status !== 200 || response.type !== 'basic') {
                return response;
            }
            var responseToCache = response.clone();
            caches.open(CHACHE_NAME).then(function (cache) {
                console.log('new cache', responseToCache);
                cache.put(event.request, responseToCache);
            });
            return response;
        });
    }));
});
