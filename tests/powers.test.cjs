const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const dir=path.join(__dirname,'..');
function seed(){const c={window:{}};vm.createContext(c);for(const f of ['content.js','extras.js','rights.js','families.js','powers.js','config.js'])vm.runInContext(fs.readFileSync(path.join(dir,f),'utf8'),c);return c.window;}
const all=seed(),data=all.CIVICA_CONTENT,extra=all.CIVICA_EXTRAS;
test('37 aulas e 111 perguntas, sendo 9 novas sobre poderes',()=>{
 assert.equal(data.lessons.length,37);assert.equal(data.lessons.reduce((n,l)=>n+l.questions.length,0),111);
 assert.equal(data.lessons.filter(l=>l.category==='Quem Pode o Quê?').length,9);
 assert.equal(new Set(data.lessons.map(l=>l.id)).size,data.lessons.length);
});
test('cada aula nova possui 3 questões com fontes e ilustrações reais',()=>{
 for(const l of data.lessons.filter(l=>l.number>=29)){
  assert.equal(l.questions.length,3);
  assert.ok(extra.easy[l.id]?.summary.length>50,l.id);
  assert.equal(extra.easy[l.id]?.scenes.length,4);
  assert.ok(l.sourceIds.every(id=>data.sources[id]?.url.startsWith('https://')),l.id);
  for(const q of l.questions){assert.equal(q.options.length,3);assert.ok(q.correct>=0&&q.correct<=2);assert.ok(data.sources[q.sourceId],l.id);}
  for(let i=1;i<=4;i++){const asset=extra.easy[l.id].comic+i+'.'+extra.easy[l.id].comicExt;assert.ok(fs.existsSync(path.join(dir,asset)),asset);}
 }
});
test('miniperfil local opcional, sem API, preserva chave de progresso',()=>{
 const app=fs.readFileSync(path.join(dir,'app.js'),'utf8');
 assert.match(app,/civica-progress-v1/);assert.match(app,/profile-stage/);assert.match(app,/profile-topic/);assert.match(app,/profile-clear/);assert.match(app,/suggestedLessons/);assert.match(app,/v0\.5\.0-alpha/);
 const index=fs.readFileSync(path.join(dir,'index.html'),'utf8');assert.match(index,/powers\.js/);
 const sw=fs.readFileSync(path.join(dir,'sw.js'),'utf8');assert.match(sw,/civica-v0\.5\.0-alpha/);assert.match(sw,/powers\.js/);
});
test('todos os assets do cache existem no pacote',()=>{
 const sw=fs.readFileSync(path.join(dir,'sw.js'),'utf8');const matches=sw.match(/const APP_ASSETS = (\[[^;]+\]);/);assert.ok(matches);
 const assets=JSON.parse(matches[1]);for(const entry of assets){if(entry==='./')continue;assert.ok(fs.existsSync(path.join(dir,entry)),entry);}
});
