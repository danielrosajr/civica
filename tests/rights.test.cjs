const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root=path.join(__dirname,'..');
const context={window:{}};vm.createContext(context);
for(const f of ['content.js','extras.js','rights.js','config.js']) vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),context);
const {lessons,sources}=context.window.CIVICA_CONTENT;
const {easy,glossary}=context.window.CIVICA_EXTRAS;

test('18 aulas e 54 questões com oito direitos novos',()=>{
 assert.equal(lessons.length,18);
 assert.equal(lessons.reduce((n,l)=>n+l.questions.length,0),54);
 assert.equal(lessons.filter(l=>l.number>=11).length,8);
 assert.equal(new Set(lessons.map(l=>l.id)).size,18);
});
test('todas as novas aulas têm três perguntas, modo simples, quadrinhos e fontes',()=>{
 for(const l of lessons){
  assert.ok(easy[l.id]?.summary && easy[l.id]?.comparison,l.id);
  assert.ok(easy[l.id]?.scenes?.length>=3,l.id);
  assert.equal(l.questions.length,3,l.id);
  assert.ok(l.sourceIds.length,l.id);
  for(const id of l.sourceIds) assert.ok(sources[id],l.id+' '+id);
  for(const q of l.questions){assert.equal(q.options.length,3);assert.ok(l.sourceIds.includes(q.sourceId));assert.ok(q.correct>=0&&q.correct<3);}
 }
});
test('fontes HTTPS de órgãos verificáveis, glossário íntegro',()=>{
 const allowed=['planalto.gov.br','gov.br','procon.sc.gov.br','procon.itajai.sc.gov.br','senado.leg.br','camara.leg.br','tse.jus.br','portaldatransparencia.gov.br','cnj.jus.br'];
 for(const [id,src] of Object.entries(sources)){
  const u=new URL(src.url);assert.equal(u.protocol,'https:',id);
  assert.ok(allowed.some(d=>u.hostname===d||u.hostname.endsWith('.'+d)),id+' '+u.hostname);
 }
 for(const [id,g] of Object.entries(glossary)){assert.ok(g.forms.length&&g.definition&&sources[g.sourceId],id)}
});
test('modo PWA cobre os novos roteiros, config e artes',()=>{
 const sw=fs.readFileSync(path.join(root,'sw.js'),'utf8');
 for(const file of ['rights.js','config.js','quadrinhos-viagem-1.webp','quadrinhos-viagem-4.webp']){
  assert.match(sw,new RegExp(file.replace('.','\\.')));
 }
 assert.match(sw,/civica-v0\.4\.0-alpha/);
 assert.equal(context.window.CIVICA_CONFIG.feedbackFormUrl,'');
});
