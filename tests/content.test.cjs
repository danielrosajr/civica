const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

const context = { window: {} };
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(__dirname,'..','content.js'),'utf8'),context);
const {lessons,sources,updatedAt} = context.window.CIVICA_CONTENT;

test('conteúdo inicial tem 10 aulas e 30 questões', () => {
  assert.equal(lessons.length,10);
  assert.equal(lessons.reduce((sum,l)=>sum+l.questions.length,0),30);
  assert.ok(updatedAt);
});
test('todas as aulas têm fontes oficiais e referências válidas', () => {
  const ids=new Set();
  for(const l of lessons){
    assert.ok(l.title && l.intro && l.mission);
    assert.ok(!ids.has(l.id),`duplicado: ${l.id}`); ids.add(l.id);
    assert.ok(l.sourceIds.length>0,`sem fonte: ${l.id}`);
    l.sourceIds.forEach(id=>assert.ok(sources[id],`fonte ausente ${id}`));
    assert.ok(l.facts.length>=3,`faltam fatos ${l.id}`);
    for(const q of l.questions){
      assert.equal(q.options.length,3,`3 alternativas: ${l.id}`);
      assert.ok(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<q.options.length);
      assert.ok(q.prompt && q.why && sources[q.sourceId]);
      assert.ok(l.sourceIds.includes(q.sourceId),`questão sem fonte na aula ${l.id}`);
      assert.equal(new Set(q.options).size,q.options.length);
    }
  }
});
test('cada fonte leva a um domínio HTTPS oficial', () => {
  const allowed=['senado.leg.br','camara.leg.br','tse.jus.br','gov.br','portaldatransparencia.gov.br','cnj.jus.br'];
  for(const [id,src] of Object.entries(sources)){
    const url=new URL(src.url);assert.equal(url.protocol,'https:',id);
    assert.ok(allowed.some(domain=>url.hostname===domain||url.hostname.endsWith('.'+domain)),`origem não aprovada: ${url.hostname}`);
    assert.ok(src.title && src.agency);
  }
});
