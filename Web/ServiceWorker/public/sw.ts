import fs from 'fs';
console.log(fs);
self.addEventListener('install', function (event) {
  // Perform install steps
  console.log('sw.js');
});

self.addEventListener('fetch', function (event) {
  console.log(event);
});
