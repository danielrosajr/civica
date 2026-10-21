/* Cívica v0.3 — cache de instalação + atualização online de código e configuração */
const CACHE = 'civica-v0.3.0-alpha-1';
const APP_ASSETS = ['./','./index.html','./styles.css','./app.js','./content.js','./extras.js','./rights.js','./config.js','./manifest.webmanifest','./assets/icon.svg','./assets/icon-192.png','./assets/icon-512.png','./assets/quadrinhos-cidade-1.webp','./assets/quadrinhos-cidade-2.webp','./assets/quadrinhos-cidade-3.webp','./assets/quadrinhos-cidade-4.webp','./assets/quadrinhos-viagem-1.webp','./assets/quadrinhos-viagem-2.webp','./assets/quadrinhos-viagem-3.webp','./assets/quadrinhos-viagem-4.webp'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(APP_ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const request=event.request;
  const url=new URL(request.url);
  if(request.method!=='GET'||url.origin!==self.location.origin)return;
  if(request.mode==='navigate') {
    event.respondWith(fetch(request).then(res=>res.ok?res:caches.match('./index.html')).catch(()=>caches.match('./index.html')));
    return;
  }
  // Novos conteúdos e config.js precisam ser atualizados mesmo quando o app já está instalado.
  if(/\/(?:config|app|content|extras|rights)\.js$/.test(url.pathname) || /\/styles\.css$/.test(url.pathname)){
    event.respondWith((async()=>{
      try{
        const res=await fetch(request,{cache:'no-store'});
        if(res.ok){const cache=await caches.open(CACHE);await cache.put(request,res.clone());}
        return res;
      }catch(_){return await caches.match(request)||Response.error();}
    })());
    return;
  }
  event.respondWith(caches.match(request).then(hit=>hit||fetch(request)));
});
