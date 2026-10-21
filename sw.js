/* Cívica v0.5 — cache de instalação + atualização online de código e configuração */
const CACHE = 'civica-v0.5.0-alpha-1';
const APP_ASSETS = ["./", "./index.html", "./styles.css", "./app.js", "./content.js", "./extras.js", "./rights.js", "./families.js", "./config.js", "./manifest.webmanifest", "./assets/icon.svg", "./assets/icon-192.png", "./assets/icon-512.png", "./assets/quadrinhos-cidade-1.webp", "./assets/quadrinhos-cidade-2.webp", "./assets/quadrinhos-cidade-3.webp", "./assets/quadrinhos-cidade-4.webp", "./assets/quadrinhos-viagem-1.webp", "./assets/quadrinhos-viagem-2.webp", "./assets/quadrinhos-viagem-3.webp", "./assets/quadrinhos-viagem-4.webp", "./assets/quadrinhos-acompanhante-1.webp", "./assets/quadrinhos-acompanhante-2.webp", "./assets/quadrinhos-acompanhante-3.webp", "./assets/quadrinhos-acompanhante-4.webp", "./assets/quadrinhos-mulher-licenca-1.svg", "./assets/quadrinhos-mulher-licenca-2.svg", "./assets/quadrinhos-mulher-licenca-3.svg", "./assets/quadrinhos-mulher-licenca-4.svg", "./assets/quadrinhos-mulher-parto-1.svg", "./assets/quadrinhos-mulher-parto-2.svg", "./assets/quadrinhos-mulher-parto-3.svg", "./assets/quadrinhos-mulher-parto-4.svg", "./assets/quadrinhos-mulher-protecao-1.svg", "./assets/quadrinhos-mulher-protecao-2.svg", "./assets/quadrinhos-mulher-protecao-3.svg", "./assets/quadrinhos-mulher-protecao-4.svg", "./assets/quadrinhos-crianca-escola-1.svg", "./assets/quadrinhos-crianca-escola-2.svg", "./assets/quadrinhos-crianca-escola-3.svg", "./assets/quadrinhos-crianca-escola-4.svg", "./assets/quadrinhos-crianca-protecao-1.svg", "./assets/quadrinhos-crianca-protecao-2.svg", "./assets/quadrinhos-crianca-protecao-3.svg", "./assets/quadrinhos-crianca-protecao-4.svg", "./assets/quadrinhos-crianca-hospital-1.svg", "./assets/quadrinhos-crianca-hospital-2.svg", "./assets/quadrinhos-crianca-hospital-3.svg", "./assets/quadrinhos-crianca-hospital-4.svg", "./assets/quadrinhos-idoso-80-1.svg", "./assets/quadrinhos-idoso-80-2.svg", "./assets/quadrinhos-idoso-80-3.svg", "./assets/quadrinhos-idoso-80-4.svg", "./assets/quadrinhos-idoso-decidir-1.svg", "./assets/quadrinhos-idoso-decidir-2.svg", "./assets/quadrinhos-idoso-decidir-3.svg", "./assets/quadrinhos-idoso-decidir-4.svg", "./assets/quadrinhos-idoso-protecao-1.svg", "./assets/quadrinhos-idoso-protecao-2.svg", "./assets/quadrinhos-idoso-protecao-3.svg", "./assets/quadrinhos-idoso-protecao-4.svg", "./powers.js", "./assets/quadrinhos-poderes-cidade-2.webp", "./assets/quadrinhos-poderes-lei-2.webp", "./assets/quadrinhos-stf-poder-2.svg", "./assets/quadrinhos-senador-4.svg", "./assets/quadrinhos-poderes-lei-3.webp", "./assets/quadrinhos-deputado-federal-1.svg", "./assets/quadrinhos-senador-2.svg", "./assets/quadrinhos-deputado-estadual-2.svg", "./assets/quadrinhos-separacao-poderes-2.svg", "./assets/quadrinhos-deputado-estadual-3.svg", "./assets/quadrinhos-deputado-federal-2.svg", "./assets/quadrinhos-deputado-federal-3.svg", "./assets/quadrinhos-separacao-poderes-1.svg", "./assets/quadrinhos-primeira-dama-4.svg", "./assets/quadrinhos-presidente-limites-3.svg", "./assets/quadrinhos-separacao-poderes-3.svg", "./assets/quadrinhos-primeira-dama-1.svg", "./assets/quadrinhos-deputado-estadual-1.svg", "./assets/quadrinhos-senador-3.svg", "./assets/quadrinhos-primeira-dama-3.svg", "./assets/quadrinhos-separacao-poderes-4.svg", "./assets/quadrinhos-presidente-limites-2.svg", "./assets/quadrinhos-stf-poder-4.svg", "./assets/quadrinhos-poderes-cidade-1.webp", "./assets/quadrinhos-presidente-limites-1.svg", "./assets/quadrinhos-deputado-federal-4.svg", "./assets/quadrinhos-senador-1.svg", "./assets/quadrinhos-primeira-dama-2.svg", "./assets/quadrinhos-poderes-lei-4.webp", "./assets/quadrinhos-deputado-estadual-4.svg", "./assets/quadrinhos-poderes-cidade-3.webp", "./assets/quadrinhos-poderes-lei-1.webp", "./assets/quadrinhos-poderes-cidade-4.webp", "./assets/quadrinhos-stf-poder-1.svg", "./assets/quadrinhos-stf-poder-3.svg", "./assets/quadrinhos-presidente-limites-4.svg"];
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
  if(/\/(?:config|app|content|extras|rights|families|powers)\.js$/.test(url.pathname) || /\/styles\.css$/.test(url.pathname)){
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
