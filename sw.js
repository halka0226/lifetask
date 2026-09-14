const CACHE_NAME = 'life-os-v2';

// インストール時に自分自身のフォルダ階層を取得して確実に保存
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      const scopeUrl = self.registration.scope; // 例: https://xxx.github.io/repo/
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

// 古いキャッシュを削除して最新化
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    ))
  );
  self.clients.claim();
});

// オフライン時は保存したデータから表示、オンラインなら通信
self.addEventListener('fetch', event => {
  // GASへのPOST通信などはキャッシュ除外
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        // 成功したファイルをキャッシュに追加しながら動く
        if (response && response.status === 200) {
          const resClone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, resClone));
        }
        return response;
      }).catch(() => {
        // オフラインで万が一個別ファイルがなくてもトップを返す
        return caches.match(self.registration.scope);
      });
    })
  );
});
