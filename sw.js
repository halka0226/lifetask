// 古いキャッシュを強制消去して自身を登録解除するスクリプト
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k))))
      .then(() => self.registration.unregister())
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  // 常にネットワーク（最新のサーバー）から直接読み込む
  event.respondWith(fetch(event.request));
});
