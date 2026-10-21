const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.join(__dirname,'..'); const c={window:{}};vm.createContext(c);
for(const f of ['content.js','extras.js','rights.js','families.js','config.js'])vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),c);
const data=c.window.CIVICA_CONTENT,extra=c.window.CIVICA_EXTRAS;
test('agora são 28 aulas e 84 questões, com IDs únicos, mantendo as antigas',()=>{
 assert.equal(data.lessons.length,28);assert.equal(data.lessons.reduce((n,l)=>n+l.questions.length,0),84);
 assert.equal(new Set(data.lessons.map(l=>l.id)).size,28);
 assert.equal(data.lessons.filter(l=>l.number>=19).length,10);
 for(const id of ['cidade','direito-viagem','mulher-acompanhante','crianca-hospital','idoso-protecao'])assert.ok(data.lessons.some(l=>l.id===id));
});
test('todas as 28 aulas têm 3 questões com respostas/fonte e explicação simples',()=>{
 for(const l of data.lessons){
  const e=extra.easy[l.id];assert.ok(e&&e.summary&&e.comparison&&e.scenes.length>=3,`falta modo simples ${l.id}`);
  assert.equal(l.questions.length,3,l.id);
  for(const src of l.sourceIds)assert.ok(data.sources[src],l.id+': '+src);
  for(const q of l.questions){assert.ok(q.prompt&&q.why);assert.equal(q.options.length,3);assert.ok(q.correct>=0&&q.correct<3);assert.ok(l.sourceIds.includes(q.sourceId),l.id);}
  if(e.comic)for(let i=1;i<=e.scenes.length;i++) assert.ok(fs.existsSync(path.join(root,e.comic+i+'.'+(e.comicExt||'webp'))),l.id);
 }
});
test('cada nova aula possui quatro artes ilustradas acessíveis via arquivos locais',()=>{
 for(const l of data.lessons.filter(l=>l.number>=19)){
  const e=extra.easy[l.id];assert.equal(e.scenes.length,4,l.id);assert.ok(e.comic,l.id);
  for(let i=1;i<=4;i++) assert.ok(fs.existsSync(path.join(root,e.comic+i+'.'+(e.comicExt||'webp'))),l.id+' quadro '+i);
 }
});
test('glossário mantém referências existentes e formas únicas',()=>{
 const forms=new Map();for(const [id,g] of Object.entries(extra.glossary)){
  assert.ok(g.definition&&data.sources[g.sourceId],id);
  for(const term of g.forms){const normalized=term.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();assert.ok(!forms.has(normalized),`forma repetida: ${term}, ${forms.get(normalized)} e ${id}`);forms.set(normalized,id);}
 }
});
test('PWA atualiza cache incluindo script novo, HQ e todas as artes',()=>{
 const sw=fs.readFileSync(path.join(root,'sw.js'),'utf8');assert.match(sw,/civica-v0\.5\.0-alpha/);
 assert.match(sw,/families\.js/);assert.match(sw,/quadrinhos-acompanhante-4.webp/);
 for(const l of data.lessons.filter(l=>l.number>=19))assert.ok(sw.includes(extra.easy[l.id].comic+'1.'+(extra.easy[l.id].comicExt||'webp')),l.id);
});
