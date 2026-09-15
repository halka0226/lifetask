// 1行目を v4 に変更
const CACHE_NAME = 'life-os-v4';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      const scopeUrl = self.registration.scope;
      const urlsToCache = [
        scopeUrl,
        scopeUrl + 'index.html',
        scopeUrl + 'style.css',
        scopeUrl + 'script.js'
      ];
      try {
        await cache.addAll(urlsToCache);
      } catch (e) {
        console.error('Cache install failed:', e);
      }
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (response && response.status === 200) {
          const resClone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, resClone));
        }
        return response;
      }).catch(() => {
        return caches.match(self.registration.scope);
      });
    })
  );
});
