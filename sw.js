const V='vdm-v7';
const CORE=['./','index.html','manifest.webmanifest','icons/icon-192.png','icons/icon-512.png','icons/apple-touch-icon.png','icons/favicon-32.png',
'fonts/atkinson-hyperlegible-latin-400-normal.woff2','fonts/atkinson-hyperlegible-latin-700-normal.woff2','fonts/atkinson-hyperlegible-latin-400-italic.woff2'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(CORE.map(u=>new Request(u,{cache:'reload'})))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('vdm-')&&k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request, u=new URL(r.url); if(r.method!=='GET'||u.origin!==location.origin)return;
  if(u.pathname.includes('/trainer/'))return; // the Case Trainer has its own service worker
  if(r.mode==='navigate'){ // network first so updates arrive, cache fallback offline
    e.respondWith(fetch(r.url,{cache:'no-cache'}).then(res=>{const c=res.clone();caches.open(V).then(x=>x.put('index.html',c));return res}).catch(()=>caches.match('index.html')));return;}
  e.respondWith(caches.match(r).then(m=>m||fetch(r)));
});
