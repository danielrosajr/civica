const test = require('node:test');
const assert = require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.join(__dirname,'..');
const context={window:{}};vm.createContext(context);
for(const f of ['content.js','extras.js'])vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),context);
const {easy,glossary}=context.window.CIVICA_EXTRAS;
const {lessons,sources}=context.window.CIVICA_CONTENT;
test('todas as aulas oferecem modo fácil e roteiro de quadrinhos',()=>{
  assert.equal(Object.keys(easy).length,lessons.length);
  for(const l of lessons){
    const x=easy[l.id];assert.ok(x,`sem explicação fácil ${l.id}`);
    assert.ok(x.summary.length>60 && x.comparison.length>40,`simplificação curta demais ${l.id}`);
    assert.ok(x.scenes.length>=3 && x.scenes.length<=4,`cenas inválidas ${l.id}`);
    x.scenes.forEach(scene=>assert.equal(scene.length,2));
    if(x.comic)for(let i=1;i<=x.scenes.length;i++)assert.ok(fs.existsSync(path.join(root,x.comic+i+'.webp')));
  }
});
test('glossário só aponta para referências existentes',()=>{
  const forms=new Map();
  for(const [id,def] of Object.entries(glossary)){
    assert.ok(def.definition.length>=35,id);
    assert.ok(sources[def.sourceId],`fonte ausente ${id}`);
    assert.ok(def.forms.length,id);
    for(const form of def.forms){
      const key=form.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
      assert.ok(!forms.has(key),`alias duplicado ${form}: ${forms.get(key)} e ${id}`);forms.set(key,id);
    }
  }
  assert.ok(forms.has('municipio')); assert.ok(forms.has('legislativo'));assert.ok(forms.has('orcamento'));
});
test('arquivos de publicação PWA e roteiros estão presentes',()=>{
  for(const pathName of ['index.html','app.js','content.js','extras.js','styles.css','sw.js','manifest.webmanifest','assets/icon-192.png','assets/icon-512.png']) assert.ok(fs.existsSync(path.join(root,pathName)),pathName);
  const sw=fs.readFileSync(path.join(root,'sw.js'),'utf8');
  assert.match(sw,/civica-v0\.5\.0-alpha/);assert.match(sw,/extras\.js/);
  const app=fs.readFileSync(path.join(root,'app.js'),'utf8');
  assert.match(app,/civica-progress-v1/);assert.match(app,/glossaryOpen/);assert.match(app,/voiceSpeedSelect/);
});
