// バージョン識別子
const CACHE_NAME = 'life-os-offline-v1';

// オフライン時に必要なファイル一覧
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json'
];

// インストール時に基本アセットを保存
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// 古いバージョンのキャッシュを自動クリーンアップ
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// 🌟 ネットワーク優先（通信があれば最新版を取得、圏外ならキャッシュを開く）
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  // Googleスプレッドシート（GAS）への通信はキャッシュせず素通し
  if (event.request.url.includes('script.google.com')) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(networkResponse => {
        // 通信が成功したらキャッシュを最新内容で更新
        if (networkResponse && networkResponse.status === 200) {
          const resClone = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, resClone);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // オフライン（電波がない）時はキャッシュから画面を開く
        return caches.match(event.request).then(cachedResponse => {
          if (cachedResponse) return cachedResponse;
          // アドレス末尾のズレ対策（ルートへフォールバック）
          return caches.match('./') || caches.match('./index.html');
        });
      })
  );
});
