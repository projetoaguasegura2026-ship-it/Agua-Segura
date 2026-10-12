/* Service worker do Água Segura: guarda os arquivos no aparelho para abrir rápido e sem internet. */
const VERSAO = 'agua-segura-v1';
const ARQUIVOS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./img/banner.jpg",
  "./img/pingo-alerta.webp",
  "./img/pingo-apontando.png",
  "./img/pingo-apontando.webp",
  "./img/pingo-campeao.webp",
  "./img/pingo-cronometro.webp",
  "./img/pingo-dosador.webp",
  "./img/pingo-espiando.webp",
  "./img/pingo-faxina.webp",
  "./img/pingo-joinha.png",
  "./img/pingo-joinha.webp",
  "./img/pingo-ola.png",
  "./img/pingo-ola.webp",
  "./img/pingo-pensativo.png",
  "./img/pingo-pensativo.webp",
  "./img/pingo-prancheta.png",
  "./img/pingo-prancheta.webp",
  "./img/pingo-professor.png",
  "./img/pingo-professor.webp",
  "./img/icon-192.png",
  "./img/icon-512.png",
  "./img/icon-maskable-512.png",
  "./img/icon-180.png"
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSAO).then(c => Promise.all(ARQUIVOS.map(a => c.add(a).catch(() => {})))).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSAO).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const mesmoSite = url.origin === location.origin;
  const fonte = /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  if (!mesmoSite && !fonte) return;
  /* a página: tenta a rede primeiro (pega a versão nova) e cai no que está guardado */
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(r => { const c = r.clone(); caches.open(VERSAO).then(x => x.put('./index.html', c)); return r; })
      .catch(() => caches.match('./index.html')));
    return;
  }
  /* imagens, ícones e fontes: usa o que já tem e atualiza por trás */
  e.respondWith(caches.match(req).then(g => g || fetch(req).then(r => {
    if (r && (r.ok || r.type === 'opaque')) { const c = r.clone(); caches.open(VERSAO).then(x => x.put(req, c)); }
    return r;
  }).catch(() => g)));
});
