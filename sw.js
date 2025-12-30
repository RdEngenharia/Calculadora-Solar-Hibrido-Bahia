// Nome do cache
const CACHE_NAME = 'calculadora-solar-hibrido-bahia-cache-v1';

// Arquivos que você quer armazenar offline (AJUSTADOS PARA O GITHUB PAGES)
const urlsToCache = [
  '/Calculadora-Solar-Hibrido-Bahia/',
  '/Calculadora-Solar-Hibrido-Bahia/index.html',
  '/Calculadora-Solar-Hibrido-Bahia/icon-192.png',
  '/Calculadora-Solar-Hibrido-Bahia/icon-512.png'
];

// Evento install
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        // Usamos cache.addAll para garantir que todos os itens sejam baixados
        return cache.addAll(urlsToCache);
      })
  );
});

// Evento activate
self.addEventListener('activate', event => {
  console.log('Service Worker ativado para Calculadora Solar Hibrido Bahia');
});

// Evento fetch (intercepta requisições)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
