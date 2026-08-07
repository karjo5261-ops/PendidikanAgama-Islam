const CACHE_NAME = "pai-anak-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Amiri&display=swap"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});