const test=require('node:test');const assert=require('node:assert/strict');const fs=require('node:fs');const path=require('node:path');const vm=require('node:vm');
const root=path.join(__dirname,'..');
function mockRender(hash,progress='{}',form=''){
 const app={innerHTML:'',addEventListener(){}};
 const status={textContent:''};
 const dataset={};
 const dom={documentElement:{dataset},getElementById(id){if(id==='app')return app;if(id==='live-status')return status;return null},querySelectorAll(){return []},querySelector(){return null},title:''};
 const listeners={};const store={'civica-progress-v1':progress};
 const ctx={window:{addEventListener(n,cb){listeners[n]=cb},matchMedia(){return {matches:false,addEventListener(){}}}},document:dom,localStorage:{getItem(k){return store[k]||null},setItem(k,v){store[k]=v}},location:{hash},navigator:{},console,setTimeout(){},URL};
 vm.createContext(ctx);
 for(const file of ['content.js','extras.js','rights.js','config.js'])vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),ctx);
 if(form)ctx.window.CIVICA_CONFIG.feedbackFormUrl=form;
 vm.runInContext(fs.readFileSync(path.join(root,'app.js'),'utf8'),ctx);
 return {html:app.innerHTML,doc:dom,ctx};
}
test('renderiza página principal e trilha dos direitos',()=>{
 assert.match(mockRender('#inicio').html,/Conhecer meus direitos/);
 const {html}=mockRender('#trilha-direitos');
 assert.match(html,/Direitos que você talvez não conheça/);
 for(const str of ['direito-arrependimento','direito-viagem','direito-saude'])assert.ok(html.includes(str),str);
});
test('renderiza aula com HQ, bibliografia, revisão e modo fácil',()=>{
 const {html}=mockRender('#aula/direito-viagem');
 assert.equal((html.match(/quadrinhos-viagem-[1234]\.webp/g)||[]).length,4);
 assert.match(html,/Pedir revisão desta aula/);
 assert.match(html,/Fazer a miniprova/);
 assert.match(html,/Estatuto/);
});
test('renderiza princípios com oito artigos e ouvidoria sem envio falso',()=>{
 const {html}=mockRender('#principios');
 assert.equal((html.match(/editorial-article-number/g)||[]).length,8);
 const feed=mockRender('#ouvidoria/direito-viagem').html;
 assert.match(feed,/não é enviada ao criador/);
 assert.match(feed,/option value="direito-viagem" selected/);
 assert.doesNotMatch(feed,/Abrir Google Forms/);
});
test('Google Forms aparece quando link configurado e progresso antigo permanece',()=>{
 const feed=mockRender('#ouvidoria', '{}', 'https://forms.gle/Exemplo123').html;
 assert.match(feed,/Abrir Google Forms/);
 const legacy=JSON.stringify({completed:{cidade:{best:2,attempts:1,updatedAt:'2026-10-20'}}});
 const {html}=mockRender('#conquistas',legacy);
 assert.match(html,/1<\/span>/);
});
