const CACHE_NAME='life-app-v1';
const urlsToCache=['./','index.html','style.css','app.js','https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css','https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.0/chart.umd.min.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(urlsToCache)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(key=>key!==CACHE_NAME?caches.delete(key):null))));});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(response=>response||fetch(e.request)));});
