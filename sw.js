// バージョンを更新して古いキャッシュを全破棄
const CACHE_NAME = 'life-os-refresh-' + Date.now();

self.addEventListener('install', event => {
  // 待機時間をスキップして即座に有効化
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    // 既存の古いキャッシュをすべて削除
    caches.keys().then(keys => {
      return Promise.all(keys.map(k => caches.delete(k)));
    }).then(() => {
      // 開いているすべてのタブに即時適用
      return self.clients.claim();
    })
  );
});

// キャッシュを無視して必ず最新のサーバーから直接取得
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request, { cache: 'no-store' }).catch(() => {
      return caches.match(event.request);
    })
  );
});
