// const CACHE_NAME = 'movie-gallery-cache';
// const urlsToCache = ['index.html', 'offline.html'];

// const self = this;

// // installation
// self.addEventListener('install', (event)=>{
//   event.waitUntil(
//     caches.open(CACHE_NAME)
//       .then((cache)=>{
//           console.log('open cache');
//           return cache.addAll(urlsToCache)
//       })
//   )
// })

// // listen for requests
// self.addEventListener('fetch', (event)=>{
//   event.respondWith(
//     caches.match(event.request)
//       .then(() => {
//                 return fetch(event.request) 
//                     .catch(() => caches.match('offline.html'))
//             })
//   )
// })

// // activate the SW
// self.addEventListener('activate', (event)=>{
//    const cacheWhitelist = [];
//    cacheWhitelist.push(CACHE_NAME);
//    event.waitUntil(
//      caches.keys()
//        .then((cachesName)=>{
//          if(!cacheWhitelist.includes(cachesName)){
//            return caches.delete(cachesName);
//          }
//        })
//      )
// })

const CACHE_NAME = "version-1";
const urlsToCache = [ '/', '/top-rated' ];

const self = this;

// Install SW
self.addEventListener('install', (event) => {
  console.log("install event")
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');

                return cache.addAll(urlsToCache);
            })
    )
});

// Listen for requests
self.addEventListener('fetch', (event) => {
  console.log("fetch event")
    event.respondWith(
        caches.match(event.request)
            .then(() => {
               console.log(" reuest event")
               console.log(event.request)
                return fetch(event.request) 
                    .catch(() => caches.match('/bundle.js'))
            })
    )
});

// Activate the SW
self.addEventListener('activate', (event) => {
  console.log("activated")
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if(!cacheWhitelist.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        ))
            
    )
});