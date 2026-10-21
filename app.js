'use strict';
(() => {
  const DATA = window.CIVICA_CONTENT;
  const EXTRA = window.CIVICA_EXTRAS;
  const glossaryItems = Object.entries(EXTRA.glossary);
  const glossaryAliases = glossaryItems.flatMap(([id,info])=>info.forms.map(word=>({word,id}))).sort((a,b)=>b.word.length-a.word.length);
  const glossaryPattern = new RegExp('(?<![\\p{L}])(' + glossaryAliases.map(a=>a.word.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|') + ')(?![\\p{L}])','giu');
  const STORAGE_KEY = 'civica-progress-v1';
  const app = document.getElementById('app');
  const live = document.getElementById('live-status');
  const iconPaths = {
    home:'<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10Z"/><path d="M9 21v-7h6v7"/>',
    book:'<path d="M3 5.5A2.5 2.5 0 0 1 5.5 3H21v17H5.5A2.5 2.5 0 0 1 3 17.5Z"/><path d="M3 17.5A2.5 2.5 0 0 1 5.5 15H21"/>',
    compass:'<circle cx="12" cy="12" r="10"/><path d="m16.2 7.8-2.8 5.6-5.6 2.8 2.8-5.6 5.6-2.8Z"/>',
    award:'<circle cx="12" cy="8" r="5"/><path d="m8.2 12-1 9 4.8-2.5 4.8 2.5-1-9"/>',
    sources:'<path d="M20 7h-9M20 12h-9M20 17h-9M3 7h3M3 12h3M3 17h3"/><rect x="2" y="2" width="20" height="20" rx="3"/>',
    settings:'<path d="M4 7h16M4 17h16M8 4v6M16 14v6"/>',
    arrow:'<path d="M5 12h14m-6-6 6 6-6 6"/>',
    back:'<path d="m12 19-7-7 7-7M5 12h14"/>',
    link:'<path d="M14 5h5v5M10 14 19 5"/><path d="M19 13v6H5V5h6"/>',
    shield:'<path d="M12 22c6-3 9-7 9-14l-9-5-9 5c0 7 3 11 9 14Z"/><path d="m8 12 3 3 5-6"/>',
    clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l4 2"/>',
    check:'<path d="m5 12 4 4L19 6"/>',
    search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
    speaker:'<path d="M5 9H2v6h3l5 4V5L5 9ZM14 9a4 4 0 0 1 0 6M17 6a8 8 0 0 1 0 12"/>',
    stop:'<rect x="5" y="5" width="14" height="14" rx="2"/>',
    stars:'<path d="m12 2 2.2 7.3L21 12l-6.8 2.7L12 22l-2.2-7.3L3 12l6.8-2.7L12 2Z"/>',
    info:'<circle cx="12" cy="12" r="10"/><path d="M12 11v6m0-10v.2"/>',
    copy:'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/>',
    download:'<path d="M12 3v12m-4-4 4 4 4-4M4 17v4h16v-4"/>',
    sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2m10-10h-2M4 12H2m17.1 7.1-1.4-1.4M6.3 6.3 4.9 4.9m14.2 0-1.4 1.4M6.3 17.7l-1.4 1.4"/>',
    moon:'<path d="M20.5 14.4A9 9 0 0 1 9.6 3.5a9 9 0 1 0 10.9 10.9Z"/>',
    pause:'<rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/>',
    play:'<path d="m8 5 12 7-12 7V5Z"/>',
    dictionary:'<path d="M4 19V5a2 2 0 0 1 2-2h14v17H6a2 2 0 0 1 0-4h14"/><path d="M9 8h7M9 12h5"/>',
    alert:'<path d="m12 3 10 18H2L12 3Z"/><path d="M12 9v5m0 3v.2"/>'
  };
  function icon(name, extra='') { return `<svg aria-hidden="true" ${extra} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">${iconPaths[name] || iconPaths.info}</svg>`; }
  function esc(value) { return String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
  function getLesson(id) { return DATA.lessons.find(l => l.id === id); }
  function loadState() {
    let raw = {};
    try { raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') || {}; } catch (_) { raw = {}; }
    const safeCompleted = {};
    if (raw.completed && typeof raw.completed === 'object' && !Array.isArray(raw.completed)) {
      DATA.lessons.forEach(l => {
        const saved = raw.completed[l.id];
        if (saved && Number.isInteger(saved.best) && saved.best >= 0 && saved.best <= l.questions.length) {
          safeCompleted[l.id] = { best:saved.best, attempts:Math.min(9999, Math.max(1, Number(saved.attempts) || 1)), updatedAt:String(saved.updatedAt || '') };
        }
      });
    }
    return {
      completed:safeCompleted,
      theme:['auto','light','dark'].includes(raw.theme) ? raw.theme : 'auto',
      easyMode:raw.easyMode === true,
      voiceKey:typeof raw.voiceKey==='string' ? raw.voiceKey.slice(0,220) : '',
      voiceRate:[0.75,0.85,1,1.15,1.3].includes(Number(raw.voiceRate)) ? Number(raw.voiceRate) : 0.85,
      textScale:['normal','large','xlarge'].includes(raw.textScale) ? raw.textScale : 'normal',
      contrast:raw.contrast === 'high' ? 'high' : 'normal'
    };
  }
  let state = loadState();
  let currentQuiz = null;
  let lastResult = null;
  const audio = {playing:false,paused:false,id:null,chunks:[],index:0,generation:0};
  let searchQuery = '';
  function saveState() { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (_) { announce('O navegador não permitiu salvar o progresso. Confira as configurações de armazenamento.'); } }
  function syncSettings() {
    document.documentElement.dataset.text = state.textScale;
    document.documentElement.dataset.contrast = state.contrast;
    const theme = state.theme==='auto' ? (window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : state.theme;
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content',theme==='dark'?'#121f1d':'#f7f8f4');
  }
  const norm = s=>String(s).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  const glossaryByForm = Object.fromEntries(glossaryAliases.map(({word,id})=>[norm(word),id]));
  function glossify(value) {
    const raw=String(value); let result=''; let position=0;
    glossaryPattern.lastIndex=0;
    for(const match of raw.matchAll(glossaryPattern)) {
      result+=esc(raw.slice(position,match.index));
      const term=match[0]; const key=glossaryByForm[norm(term)];
      result+=`<button type="button" class="gloss-term" data-action="glossary" data-term="${esc(key)}" aria-label="O que significa ${esc(term)}?">${esc(term)}<span class="gloss-mark" aria-hidden="true">?</span></button>`;
      position=match.index+term.length;
    }
    return result+esc(raw.slice(position));
  }
  function glossaryOpen(id,trigger) {
    const item=EXTRA.glossary[id]; if(!item)return;
    const dialog=document.getElementById('glossary-modal');if(!dialog)return;
    dialog.querySelector('#glossary-title').textContent=EXTRA.glossary[id].forms[0];
    dialog.querySelector('#glossary-definition').textContent=item.definition;
    const source=DATA.sources[item.sourceId];const link=dialog.querySelector('#glossary-source');
    link.href=source.url;link.textContent='Conferir: '+source.agency+' ↗';
    dialog.showModal();
  }
  function audioStatus(){return audio.playing?(audio.paused?'Pausado':'Reproduzindo'):'Parado';}
  function voiceOptions(){
    const voices=window.speechSynthesis?.getVoices()||[];
    const pts=voices.filter(v=>/^pt([_-]|$)/i.test(v.lang));
    return pts.length?pts:voices;
  }
  function voiceSelect(){const voices=voiceOptions();return `<select class="voice-select" id="voice-select" aria-label="Escolha uma voz de leitura"><option value="">Voz padrão do aparelho</option>${voices.map(v=>`<option value="${esc(v.name+'|'+v.lang)}" ${state.voiceKey===v.name+'|'+v.lang?'selected':''}>${esc(v.name)} (${esc(v.lang)})</option>`).join('')}</select>`;}
  function voiceSpeedSelect(){return `<select class="voice-select" id="voice-speed" aria-label="Velocidade da leitura">${[[0.75,'Bem devagar'],[0.85,'Devagar'],[1,'Normal'],[1.15,'Rápido'],[1.3,'Mais rápido']].map(([r,label])=>`<option value="${r}" ${state.voiceRate===r?'selected':''}>${label}</option>`).join('')}</select>`;}
  function audioControls(l){const supported='speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;return `<section class="voice-panel" aria-label="Leitura em voz alta"><div class="voice-title">${icon('speaker')} Ouvir a explicação <span class="tiny subtle" id="audio-state">${audioStatus()}</span></div><div class="audio-buttons"><button class="btn btn-secondary" data-action="audio-play" data-id="${esc(l.id)}" ${supported?'':'disabled'}>${icon('play')} ${audio.playing?'Recomeçar':'Ouvir'}</button><button class="btn btn-secondary" data-action="audio-pause" ${!audio.playing?'disabled':''}>${icon(audio.paused?'play':'pause')} ${audio.paused?'Continuar':'Pausar'}</button><button class="btn btn-secondary" data-action="audio-stop" ${!audio.playing?'disabled':''}>${icon('stop')} Parar</button></div><div class="voice-settings"><label>Voz ${voiceSelect()}</label><label>Velocidade ${voiceSpeedSelect()}</label></div><p class="tiny subtle">A qualidade depende das vozes instaladas no aparelho. O trecho narrado fica destacado quando possível.</p></section>`;}
  function miniComics(l){const ex=EXTRA.easy[l.id];return `<section class="card comics-section"><div class="eyebrow">Um exemplo para visualizar</div><h2>Entenda em quadrinhos</h2><p class="small subtle">Cenas ilustrativas e simplificadas, não são registros de acontecimentos reais.</p><div class="comic-grid">${ex.scenes.map(([emoji,caption],i)=>`<figure class="comic-panel"><div class="comic-art">${ex.comic?`<img src="./${ex.comic}${i+1}.${ex.comicExt||'webp'}" alt="Ilustração do quadro ${i+1}: ${esc(caption)}" loading="lazy" width="680" height="440">`:`<div class="comic-emoji" role="img" aria-label="Ilustração: ${esc(caption)}">${emoji}</div>`}<span class="comic-number" aria-hidden="true">${i+1}</span></div><figcaption>${glossify(caption)}</figcaption></figure>`).join('')}</div><p class="tiny subtle">Fontes e explicações completas estão disponíveis nesta aula, logo abaixo.</p></section>`;}

  function announce(message) { live.textContent = ''; setTimeout(() => { live.textContent = message; }, 20); }
  function computed() {
    const entries = Object.values(state.completed);
    const count = entries.length;
    const xp = entries.reduce((sum,e) => sum + 40 + e.best * 5, 0);
    const level = Math.floor(xp / 100) + 1;
    const levelXp = xp % 100;
    return { count, xp, level, levelXp, remaining:100-levelXp, percent:levelXp, total:DATA.lessons.length };
  }
  function badgeFor(level) {
    if (level >= 6) return 'Guardião do Conhecimento';
    if (level >= 4) return 'Explorador Cívico';
    if (level >= 2) return 'Cidadão Curioso';
    return 'Aprendiz Cívico';
  }
  const nav = [
    {hash:'#inicio',label:'Início',icon:'home'},
    {hash:'#aulas',label:'Aulas',icon:'book'},
    {hash:'#trilha-direitos',label:'Direitos',icon:'shield'},
    {hash:'#conquistas',label:'Meu nível',icon:'award'}
  ];
  function linkNav(entry, active, mobile=false) {
    return `<a class="${mobile?'':'nav-link '}${active?'active':''}" href="${entry.hash}" ${active?'aria-current="page"':''}>${icon(entry.icon)}<span>${esc(entry.label)}</span></a>`;
  }
  function chrome(main, active='#inicio') {
    return `<header class="site-header"><div class="shell header-inner">
      <a href="#inicio" class="brand" aria-label="Cívica — Página inicial"><img src="./assets/icon.svg" width="41" height="41" alt=""><span><span class="brand-title">cívica<span aria-hidden="true">.</span></span><small class="brand-line">Aprenda. Entenda. Participe.</small></span></a>
      <nav class="nav-links" aria-label="Navegação principal">${nav.map(n=>linkNav(n,n.hash===active)).join('')}<a class="nav-link ${active==='#fontes'?'active':''}" href="#fontes">${icon('sources')}<span>Fontes</span></a><a class="nav-link ${active==='#principios'?'active':''}" href="#principios">${icon('shield')}<span>Princípios</span></a></nav>
      <div class="header-actions"><button type="button" class="icon-btn" data-action="toggle-theme" aria-label="Alternar tema claro ou escuro" title="Alternar tema">${icon(document.documentElement.dataset.theme==='dark'?'sun':'moon')}</button><a class="icon-btn" href="#ajustes" aria-label="Ajustar letras e contraste" title="Acessibilidade">${icon('settings')}</a></div>
    </div></header>
    <main id="main-content" class="shell page" tabindex="-1">${main}</main>
    <footer class="footer"><div class="shell footer-inner"><span>© Cívica · Projeto educativo independente · Gratuito e sem anúncios</span><div class="footer-links"><a href="#fontes">Fontes oficiais</a><a href="#principios">Princípios</a><a href="#ouvidoria">Ouvidoria do Cívica</a><a href="#sobre">Sobre</a><a href="#ajustes">Acessibilidade</a></div></div></footer>
    <nav class="mobile-nav" aria-label="Navegação inferior">${nav.map(n=>linkNav(n,n.hash===active,true)).join('')}</nav>`;
  }
  function bar(percent,label='Progresso') {return `<div class="progress-track" role="progressbar" aria-label="${esc(label)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${percent}"><div class="progress-fill" style="width:${Math.min(100,Math.max(0,percent))}%"></div></div>`;}
  function progressPanel() {
    const s = computed();
    return `<section class="card progress-panel" aria-label="Seu progresso"><div class="mini-heading">${icon('award')} Minha jornada</div>
      <div class="level-line"><div><div class="small subtle">${esc(badgeFor(s.level))}</div><span class="level-big">Nível ${s.level}</span></div><span class="source-pill">${icon('stars')} ${s.xp} XP</span></div>
      ${bar(s.percent,'Progresso até o próximo nível')}<p class="small subtle" style="margin-top:8px">Faltam ${s.remaining} XP para o próximo nível.</p>
      <div class="stats-row"><div><span class="stat-big">${s.count}/${s.total}</span><span class="stat-label">Aulas concluídas</span></div><div><span class="stat-big">${s.count*3}</span><span class="stat-label">Questões praticadas</span></div></div>
    </section>`;
  }
  function sideInfo() {return `<section class="card side-info"><div class="mini-heading">${icon('shield')} Informação com origem</div><p>Toda aula traz referências oficiais. Você pode abrir os documentos e conferir por conta própria.</p><a class="inline-source small" href="#fontes" style="margin-top:12px">Biblioteca de fontes ${icon('arrow')}</a></section>`;}
  function lessonCard(l) {
    const done = !!state.completed[l.id];
    return `<a class="card lesson-card" href="#aula/${encodeURIComponent(l.id)}" aria-label="Aula ${l.number}: ${esc(l.title)}${done?', concluída':''}">
    <span class="lesson-badge" aria-hidden="true">${esc(l.icon)}</span><div class="lesson-card-main">
      <div class="meta"><span>${esc(l.category)}</span><span>·</span><span>${l.minutes} min</span>${done?'<span class="status">✓ Concluída</span>':''}</div>
      <h3>${esc(l.title)}</h3><p class="small subtle">${esc(l.subtitle)}</p></div><span class="arrow" aria-hidden="true">›</span></a>`;
  }
  function homePage() {
    const s = computed();
    const next = DATA.lessons.find(l => !state.completed[l.id]) || DATA.lessons[0];
    const introduction = s.count === 0;
    return `<div class="main-grid"><div class="main-stack">
      <section class="hero"><div><div class="eyebrow">★ Sua escola gratuita de cidadania</div>
        <h1>${introduction?'Entender política pode ser simples.':'Seu próximo passo começa aqui.'}</h1>
        <p>${introduction?'Aprenda um pouquinho por vez, faça desafios e descubra onde conferir cada informação. No seu ritmo, sem complicação.':'Você já começou sua jornada! Continue com outra lição curta e descubra uma nova habilidade para a vida real.'}</p>
        <a class="btn btn-primary" href="#aula/${encodeURIComponent(next.id)}">${introduction?'Começar minha primeira aula':'Continuar aprendendo'} ${icon('arrow')}</a>
      </div><div class="hero-art" aria-hidden="true"><div class="art-circle">📖</div><div class="spark"></div><div class="spark"></div></div></section>
      <section><div class="section-title"><div><div class="eyebrow">Escolha seu caminho</div><h2>O que você quer fazer?</h2></div></div>
        <div class="grid-2">
          <a href="#aulas" class="card quick-card"><span class="bubble" aria-hidden="true">🎓</span><span class="quick-title">Quero aprender</span><span class="quick-description">Aulas curtas, explicações fáceis e pequenos testes.</span><span class="quick-bottom">Ver todas as aulas ${icon('arrow')}</span></a>
          <a href="#trilha-direitos" class="card quick-card"><span class="bubble" aria-hidden="true">🛡️</span><span class="quick-title">Conhecer meus direitos</span><span class="quick-description">Aprenda direitos do dia a dia com exemplos e quadrinhos.</span><span class="quick-bottom">Descobrir direitos ${icon('arrow')}</span></a>
        </div><div class="right-now-link"><a href="#direitos">🧭 Preciso resolver algo? Ver ferramentas e serviços oficiais →</a></div></section>
      <section><div class="section-title"><div><div class="eyebrow">Pequenas vitórias</div><h2>${introduction?'Comece por estas aulas':'Suas próximas aulas'}</h2></div><a href="#aulas">Ver todas ${icon('arrow')}</a></div>
        <div class="lesson-list">${[...DATA.lessons.filter(l => !state.completed[l.id]),...DATA.lessons.filter(l => state.completed[l.id])].slice(0,3).map(lessonCard).join('')}</div>
      </section>
      <div class="editorial-teaser"><strong>🕊️ Independente de partidos e candidatos.</strong><p>Conheça nossas regras de neutralidade e peça revisão de qualquer conteúdo.</p><a class="btn btn-secondary" href="#principios">Ler princípios</a><a class="btn btn-secondary" href="#ouvidoria">Sugerir correção</a></div><div class="trust-box"><span class="trust-icon" aria-hidden="true">🔐</span><div><strong>Sem conta. Sem anúncios. Sem classificação de opiniões políticas.</strong><p>Seu progresso fica salvo apenas neste navegador. Cada aula pode ser estudada de graça.</p></div></div>
    </div><aside class="side-stack">${progressPanel()}${sideInfo()}</aside></div>`;
  }
  function lessonsPage() {
    return `<section class="section-top"><div class="eyebrow">Academia do Cidadão · Temporadas 1, 2 e 3</div><h1>Aprenda uma coisa por vez.</h1><p>São ${DATA.lessons.length} aulas rápidas para começar do zero. Você pode escolher o assunto que quiser. <a href="#trilha-direitos">Explore direitos das mulheres, crianças e pessoas idosas.</a></p></section>
      <div class="main-grid"><div><label class="sr-only" for="lesson-search">Pesquisar aula por assunto</label>
       <div class="search-box">${icon('search')}<input id="lesson-search" type="search" placeholder="Procure um tema: voto, gastos, direitos..." value="${esc(searchQuery)}" autocomplete="off"></div>
       <p class="search-count small subtle" id="search-count" aria-live="polite"></p><div class="lesson-list" id="lesson-list"></div>
      </div><aside class="side-stack">${progressPanel()}${sideInfo()}</aside></div>`;
  }
  function renderFilteredLessons() {
    const list = document.getElementById('lesson-list');
    const count = document.getElementById('search-count');
    if (!list) return;
    const normalize = s => String(s).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
    const q = normalize(searchQuery.trim());
    const lessons = DATA.lessons.filter(l => normalize([l.title,l.subtitle,l.category,l.intro].join(' ')).includes(q));
    list.innerHTML = lessons.length ? lessons.map(lessonCard).join('') : `<div class="card empty-state"><h3>Nenhuma aula encontrada.</h3><p>Tente um assunto diferente. Você também pode ver todas as aulas apagando a busca.</p></div>`;
    count.textContent = `${lessons.length} ${lessons.length===1?'aula encontrada':'aulas encontradas'}`;
  }
  function sourceLink(id) {
    const s = DATA.sources[id]; if (!s) return '';
    return `<a class="source-link" href="${esc(s.url)}" target="_blank" rel="noopener noreferrer" aria-label="Abrir fonte: ${esc(s.title)} (abre em nova aba)">${icon('sources')}<span style="flex:1"><strong>${esc(s.title)}</strong><small>${esc(s.agency)} · Fonte oficial · Abre em nova aba</small></span>${icon('link','class="right-icon"')}</a>`;
  }
  function lessonPage(l) {
    const easy=EXTRA.easy[l.id];
    return `<div class="quiz-shell" style="max-width:880px"><div class="breadcrumb"><button type="button" data-action="go" data-target="#aulas">${icon('back')} Todas as aulas</button><span aria-hidden="true">/</span><span>Aula ${l.number}</span></div>
      <section class="card lesson-cover"><div class="cover-icon" aria-hidden="true">${esc(l.icon)}</div><div><span class="chip">${esc(l.category)} · ${l.minutes} min</span><h1>${esc(l.title)}</h1><p>${glossify(l.subtitle)}</p></div></section>
      <section class="card story-card"><div class="section-title"><div><span class="eyebrow">Vamos entender</span><h2>${state.easyMode?'Explica bem fácil':'Explicação da aula'}</h2></div></div>
        <div class="mode-bar" role="group" aria-label="Escolher tipo de explicação"><button class="mode-choice" type="button" data-action="easy-mode" data-value="false" aria-pressed="${!state.easyMode}">Explicação normal</button><button class="mode-choice" type="button" data-action="easy-mode" data-value="true" aria-pressed="${state.easyMode}">💡 Explica bem fácil</button></div>
        <p class="tiny subtle glossary-hint">${icon('dictionary')} Palavra com <span class="underlined-hint">pontinhos</span> e ? Pode tocar para descobrir o significado, sem sair da aula.</p>
        ${state.easyMode?`<div class="easy-story"><p data-narration-index="0">${glossify(easy.summary)}</p><div class="example-box" data-narration-index="1"><strong>💬 Imagina assim…</strong><p>${glossify(easy.comparison)}</p></div></div>`:
        `<p data-narration-index="0">${glossify(l.intro)}</p><div class="fact-list">${l.facts.map((f,i)=>`<div class="fact" data-narration-index="${i+1}"><span class="fact-index">${i+1}</span><div><h3>${glossify(f.title)}</h3><p>${glossify(f.text)}</p></div></div>`).join('')}</div><div class="example-box" data-narration-index="${l.facts.length+1}"><strong>💡 Exemplo do dia a dia</strong><p>${glossify(l.example)}</p></div>`}
        ${audioControls(l)}
      </section>
      ${miniComics(l)}
      <section class="mission"><span style="font-size:1.65rem" aria-hidden="true">🧭</span><div><strong>Missão prática (opcional)</strong><p>${glossify(l.mission)}</p><p class="tiny subtle" style="margin-top:7px">A tarefa prática não é monitorada pelo aplicativo e não pede dados pessoais.</p></div></section>
      <section class="card source-section" aria-label="Fontes da aula"><h2>${icon('shield')} Confira as fontes</h2><p>Você pode conferir os documentos oficiais que fundamentam esta aula e a explicação simples.</p><p class="tiny subtle" style="margin:8px 0 12px">Revisão editorial da coleção: ${esc(DATA.updatedAt)}. Leis e procedimentos podem mudar; confirme informações atuais no órgão responsável.</p>${l.sourceIds.map(sourceLink).join('')}</section>
      <div class="review-box"><span>${icon('shield')} Viu alguma informação incompleta ou incorreta?</span><a href="#ouvidoria/${encodeURIComponent(l.id)}">Pedir revisão desta aula ${icon('arrow')}</a></div>
      <div class="btn-row" style="margin-top:20px"><button class="btn btn-primary" data-action="start-quiz" data-id="${esc(l.id)}">Fazer a miniprova · 3 perguntas ${icon('arrow')}</button><a href="#aulas" class="btn btn-secondary">Escolher outra aula</a></div>
      ${state.completed[l.id]?`<p class="small subtle" style="margin-top:12px">✓ Você já concluiu esta aula. Refazer a prova pode melhorar sua melhor pontuação, mas não duplica recompensas.</p>`:''}
    </div>`;
  }
  function quizPage(l) {
    if (!currentQuiz || currentQuiz.id !== l.id) {
      return `<div class="quiz-shell"><div class="card empty-state"><h2>Vamos começar sua prova?</h2><p>São três perguntas e você pode consultar as fontes sempre que quiser.</p><button class="btn btn-primary" data-action="start-quiz" data-id="${esc(l.id)}">Começar miniprova ${icon('arrow')}</button></div></div>`;
    }
    const q = l.questions[currentQuiz.index];
    const checked = currentQuiz.checked;
    const chosen = currentQuiz.selected;
    const good = chosen === q.correct;
    const source = DATA.sources[q.sourceId];
    return `<div class="quiz-shell"><div class="breadcrumb"><button data-action="go" data-target="#aula/${encodeURIComponent(l.id)}">${icon('back')} Voltar para a aula</button></div>
      <div class="quiz-step"><span>Miniprova: ${esc(l.title)}</span><strong>${currentQuiz.index+1} de ${l.questions.length}</strong></div>
      <div class="quiz-progress">${bar(Math.round(((currentQuiz.index+1)/l.questions.length)*100),'Andamento da miniprova')}</div>
      <section class="card quiz-card"><span class="eyebrow">Pergunta ${currentQuiz.index+1}</span><h1>${glossify(q.prompt)}</h1>
        <div class="answer-list" role="group" aria-label="Alternativas da pergunta">${q.options.map((option,i)=>{
          const classes=['answer'];
          if (chosen===i) classes.push('selected');
          if (checked && i===q.correct) classes.push('correct');
          if (checked && chosen===i && !good) classes.push('incorrect');
          return `<button type="button" class="${classes.join(' ')}" data-action="answer" data-index="${i}" aria-pressed="${chosen===i}" ${checked?'disabled':''}><span class="answer-letter">${'ABC'[i]}</span><span>${esc(option)}</span></button>`;
        }).join('')}</div>
        ${checked?`<div class="feedback ${good?'':'error'}" role="status"><strong>${good?'✓ Muito bem!':'↻ Boa tentativa. Veja a explicação:'}</strong><p>${glossify(q.why)}</p></div>`:''}
        <div class="quiz-sources"><a class="inline-source" href="${esc(source.url)}" target="_blank" rel="noopener noreferrer">${icon('sources')} Ver fonte oficial desta pergunta ${icon('link')}</a></div>
        <div class="btn-row">${checked ? `<button type="button" class="btn btn-primary" data-action="next-question">${currentQuiz.index===l.questions.length-1?'Ver meu resultado':'Próxima pergunta'} ${icon('arrow')}</button>` : `<button type="button" class="btn btn-primary" data-action="check-answer" ${chosen===null?'disabled':''}>Conferir resposta ${icon('check')}</button>`}</div>
      </section><p class="small subtle" style="margin-top:17px;text-align:center">Você pode errar sem perder XP já conquistado. O importante é aprender.</p></div>`;
  }
  function resultPage(l) {
    const stored = state.completed[l.id];
    if (!stored) return `<div class="card empty-state"><p>Esta aula ainda não foi concluída.</p><a class="btn btn-primary" href="#aula/${esc(l.id)}">Abrir aula</a></div>`;
    const result = lastResult && lastResult.id===l.id ? lastResult : {correct:stored.best,gain:0,improved:false};
    const total=l.questions.length; const s=computed();
    return `<div class="quiz-shell"><div class="card results-card"><div class="results-emoji" aria-hidden="true">🎉</div><div class="eyebrow">Miniprova concluída!</div><h1>Mais uma conquista na sua jornada.</h1><p>Você estudou um novo assunto e pode revisar sempre que quiser.</p>
      <div class="score-number">${result.correct}/${total}</div><p>respostas corretas nesta tentativa</p>
      <div class="rank-pill">${icon('stars')} ${result.gain>0?`+${result.gain} XP nesta tentativa`:'Progresso salvo ✓'} · Nível ${s.level}</div>
      <div class="notice" style="text-align:left;margin-top:16px"><strong>📚 A fonte continua disponível</strong>Você pode conferir os documentos oficiais na aula, inclusive depois de concluir a prova.</div>
      <div class="btn-row"><a class="btn btn-primary" href="#aulas">Continuar aprendendo ${icon('arrow')}</a><button class="btn btn-secondary" data-action="start-quiz" data-id="${esc(l.id)}">Refazer a prova</button><button class="btn btn-secondary" data-action="share">${icon('copy')} Compartilhar conquista</button></div>
    </div></div>`;
  }
  const tools = [
    {icon:'📊',title:'Consultar despesas federais',description:'Pesquise orçamento e despesas do governo federal no Portal da Transparência.',sourceId:'cgu_despesas',lesson:'orcamento'},
    {icon:'🏛️',title:'Ver gastos de deputados',description:'Consulte despesas de deputados federais na fonte oficial da Câmara.',sourceId:'camara_gastos',lesson:'gastos'},
    {icon:'📨',title:'Pedir uma informação',description:'Entenda como fazer pedidos federais de acesso à informação pelo Informa.BR.',sourceId:'cgu_informabr',lesson:'informacao'},
    {icon:'📣',title:'Registrar manifestação',description:'Encontre o Fala.BR para reclamações, sugestões e outras manifestações de ouvidoria.',sourceId:'cgu_ouvidoria',lesson:'ouvidoria'},
    {icon:'🗳️',title:'Consultar serviços eleitorais',description:'Veja informações oficiais do TSE sobre título e situação eleitoral.',sourceId:'tse_voto',lesson:'voto'},
    {icon:'🌱',title:'Participar do e-Cidadania',description:'Conheça ideias legislativas disponíveis para leitura e apoio.',sourceId:'senado_ecidadania',lesson:'participacao'}
  ];
  function toolsPage(){
    return `<section class="section-top"><div class="eyebrow">Cidadania em ação</div><h1>O que você precisa resolver?</h1><p>Use atalhos para órgãos oficiais. O Cívica explica cada ferramenta, mas não substitui portais do governo nem envia solicitações por você.</p></section>
      <div class="tool-grid">${tools.map(t=>{const s=DATA.sources[t.sourceId];return `<article class="card tool-card"><span class="tool-emoji" aria-hidden="true">${t.icon}</span><h3>${esc(t.title)}</h3><p>${esc(t.description)}</p><a class="btn btn-primary btn-full" href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">Abrir site oficial ${icon('link')}</a><a class="small inline-source" href="#aula/${t.lesson}">Aprender antes de acessar ${icon('arrow')}</a></article>`}).join('')}</div>
      <div class="notice" style="margin-top:20px"><strong>Atenção aos endereços.</strong>Portais federais não são responsáveis por todos os serviços municipais ou estaduais. Confira se o órgão escolhido é competente antes de enviar dados pessoais.</div>`;
  }
  function achievementsPage(){
    const s=computed();
    const rewards=[{limit:1,emoji:'🌱',name:'Primeira semente',description:'Concluir a primeira aula.'},{limit:3,emoji:'🔍',name:'Cidadão curioso',description:'Concluir 3 aulas.'},{limit:5,emoji:'📚',name:'Explorador do conhecimento',description:'Concluir 5 aulas.'},{limit:10,emoji:'🏆',name:'Primeira temporada',description:'Concluir 10 aulas.'},{limit:18,emoji:'🛡️',name:'Conhecedor de direitos',description:'Concluir 18 aulas.'}];
    return `<div class="section-top"><div class="eyebrow">Minha jornada</div><h1>Seu esforço merece ser visto.</h1><p>XP representa atividades de aprendizagem concluídas — não mede inteligência nem torna ninguém automaticamente certo numa discussão.</p></div>
      <div class="main-grid"><div class="main-stack"><section class="card padding-card"><div class="eyebrow">${esc(badgeFor(s.level))}</div><h2 style="margin:7px 0 14px">Nível ${s.level} · ${s.xp} XP</h2>${bar(s.percent,'Progresso do seu nível')}<p class="small subtle" style="margin-top:12px">Mais ${s.remaining} XP para alcançar o próximo nível.</p><div class="stats-row"><div><span class="stat-big">${s.count}</span><span class="stat-label">Aulas concluídas</span></div><div><span class="stat-big">${s.total-s.count}</span><span class="stat-label">Aulas para descobrir</span></div></div></section>
      <section><h2>Suas medalhas</h2><div class="achievements">${rewards.map(r=>`<div class="achievement ${s.count>=r.limit?'':'locked'}"><span class="emoji" aria-hidden="true">${s.count>=r.limit?r.emoji:'🔒'}</span><div><strong>${esc(r.name)}</strong><p>${esc(r.description)}</p><span class="tiny">${s.count>=r.limit?'✓ Conquistada':'Ainda não conquistada'}</span></div></div>`).join('')}</div></section>
      <button class="btn btn-primary" data-action="share">${icon('copy')} Compartilhar meu nível</button></div><aside class="side-stack">${sideInfo()}<section class="card side-info"><h3>Revisar também conta</h3><p>Você pode repetir qualquer aula e melhorar a pontuação sem punição por erros.</p><a class="inline-source small" href="#aulas" style="margin-top:12px">Ver aulas ${icon('arrow')}</a></section></aside></div>`;
  }
  function sourcesPage(){
    return `<section class="section-top"><div class="eyebrow">Biblioteca pública</div><h1>Confira cada informação.</h1><p>Estas são as fontes utilizadas nas duas temporadas de aulas. O conteúdo explicativo foi resumido; os links levam aos documentos e serviços originais.</p></section>
      <div class="notice" style="margin-bottom:18px"><strong>Última revisão editorial: ${DATA.updatedAt}</strong>Leis, regras e endereços podem mudar. Confira a publicação original antes de usar uma informação em decisões ou solicitações oficiais. Os links externos precisam de internet.</div>
      <div class="card source-section"><h2>Fontes oficiais das aulas</h2><p>Abra o documento ou portal que deseja conferir.</p>${Object.keys(DATA.sources).map(sourceLink).join('')}</div>`;
  }
  function settingsPage(){return `<section class="section-top"><div class="eyebrow">Para aprender com conforto</div><h1>Ajustes de acessibilidade</h1><p>Escolha como prefere ver e ouvir suas aulas. Suas opções ficam salvas neste navegador.</p></section>
    <section class="card padding-card"><h2>Aparência</h2><div class="setting-row"><span class="subtle small">Escolha o tema, ou acompanhe o tema do seu aparelho.</span><div class="segmented" role="group" aria-label="Tema de cores">${[['auto','Automático'],['light','Claro'],['dark','Escuro']].map(([v,name])=>`<button type="button" aria-pressed="${state.theme===v}" data-action="theme" data-value="${v}">${name}</button>`).join('')}</div></div>
    <h2 style="margin-top:25px">Tamanho das letras</h2><div class="setting-row"><span class="subtle small">Aumentar letras e espaços do conteúdo</span><div class="segmented" role="group" aria-label="Tamanho das letras">${[['normal','Normal'],['large','Grande'],['xlarge','Muito grande']].map(([v,name])=>`<button type="button" aria-pressed="${state.textScale===v}" data-action="text-size" data-value="${v}">${name}</button>`).join('')}</div></div>
    <h2 style="margin-top:25px">Contraste</h2><div class="setting-row"><span class="subtle small">Aumentar o contraste entre textos e fundos</span><div class="segmented" role="group" aria-label="Contraste">${[['normal','Padrão'],['high','Alto contraste']].map(([v,name])=>`<button type="button" aria-pressed="${state.contrast===v}" data-action="contrast" data-value="${v}">${name}</button>`).join('')}</div></div>
    <h2 style="margin-top:25px">Leitura em voz alta</h2><p class="small subtle">Escolha a voz e a velocidade. As vozes variam conforme o dispositivo; a qualidade não depende do Cívica.</p><div class="voice-settings voice-settings-wide"><label>Voz ${voiceSelect()}</label><label>Velocidade ${voiceSpeedSelect()}</label></div>
    <div class="notice" style="margin-top:22px"><strong>Explicação bem fácil e minidicionário</strong>Em cada aula, você pode alternar o tipo de explicação e tocar nas palavras pontilhadas para descobrir seu significado.</div></section>
    <section class="card padding-card" style="margin-top:18px"><h2>Seu progresso</h2><p class="small subtle" style="margin:10px 0">Suas respostas, XP e preferências ficam neste navegador. Para trocar de aparelho, exporte e importe seu arquivo.</p>
    <div class="btn-row"><button class="btn btn-secondary" data-action="export">${icon('download')} Exportar progresso</button><label class="btn btn-secondary" for="import-progress" style="cursor:pointer">${icon('book')} Importar progresso</label><input id="import-progress" type="file" accept="application/json,.json" class="sr-only" aria-label="Selecionar arquivo de progresso"></div>
    <div style="margin-top:24px"><button class="btn btn-secondary" data-action="reset">Apagar todo o progresso</button></div></section>`;}
  function aboutPage(){return `<section class="section-top"><div class="eyebrow">Sobre o projeto</div><h1>Uma escola de cidadania para todos.</h1><p>O Cívica nasce da ideia de que aprender como a sociedade funciona não deveria exigir experiência política, dinheiro nem paciência para navegar em sites difíceis.</p></section>
    <div class="main-stack" style="max-width:820px"><div class="card padding-card"><h2>O que defendemos</h2><div class="fact-list"><div class="fact"><span class="fact-index">1</span><div><h3>Acesso universal</h3><p>Conteúdo gratuito, sem publicidade e com linguagem clara, pensado especialmente em quem está começando.</p></div></div><div class="fact"><span class="fact-index">2</span><div><h3>Fontes rastreáveis</h3><p>Explicações e respostas apontam para documentos públicos, com data da revisão editorial e acesso aos links originais.</p></div></div><div class="fact"><span class="fact-index">3</span><div><h3>Independência política</h3><p>Sem endossar partidos, candidatos ou posições. As provas abordam fatos verificáveis e funcionamento institucional.</p></div></div><div class="fact"><span class="fact-index">4</span><div><h3>Privacidade</h3><p>Esta versão não pede nome, CPF, email ou cadastro. O progresso fica neste navegador e pode ser exportado ou apagado.</p></div></div></div></div>
    <div class="callout"><h3>O Cívica ainda está começando.</h3><p>A versão v0.4.0-alpha amplia a escola com 10 aulas sobre direitos das mulheres, crianças e pessoas idosas, totalizando 28 aulas e 84 perguntas. Mantém explicações bem fáceis, minidicionário e fontes oficiais. Ainda não consulta automaticamente políticos, processos judiciais ou despesas individuais. Seu conteúdo pode ser aperfeiçoado e deve passar por revisões editoriais contínuas.</p><a class="btn btn-primary" href="#aulas">Explorar aulas ${icon('arrow')}</a></div><div class="review-box"><strong>Nosso compromisso é público e revisável.</strong><p>Não recomendamos voto, partido ou candidato. Usamos critérios iguais ao apresentar direitos e instituições. Você pode questionar qualquer explicação.</p><a href="#principios">Ver constituição editorial</a><a href="#ouvidoria">Pedir revisão ou sugerir melhoria</a></div></div>`;}
  const RIGHTS = DATA.lessons.filter(l=>l.number>=11);
  const FEEDBACK_FORM_URL = typeof window.CIVICA_CONFIG?.feedbackFormUrl === 'string' && /^https:\/\/(docs\.google\.com\/forms\/|forms\.gle\/)/i.test(window.CIVICA_CONFIG.feedbackFormUrl) ? window.CIVICA_CONFIG.feedbackFormUrl : '';
  function rightsPathPage(){
    const groups=[
      {id:'mulheres',icon:'👩',title:'Direitos das mulheres',hint:'Consultas, maternidade, parto e segurança',lessons:RIGHTS.filter(l=>l.category==='Direitos das mulheres')},
      {id:'criancas',icon:'🧒',title:'Direitos das crianças',hint:'Escola, proteção e acompanhamento no hospital',lessons:RIGHTS.filter(l=>l.category==='Direitos das crianças')},
      {id:'idosos',icon:'👴',title:'Direitos da pessoa idosa',hint:'Prioridades, autonomia e proteção',lessons:RIGHTS.filter(l=>l.category==='Direitos da pessoa idosa')},
      {id:'cotidiano',icon:'🛡️',title:'Direitos do dia a dia',hint:'Compras, saúde, atendimento e serviços',lessons:RIGHTS.filter(l=>!['Direitos das mulheres','Direitos das crianças','Direitos da pessoa idosa'].includes(l.category))}
    ];
    const count=RIGHTS.filter(l=>state.completed[l.id]).length;
    return `<section class="section-top"><div class="eyebrow">Temporada 3 · Direitos para Todos</div><h1>Seus direitos, em palavras simples.</h1><p>Escolha uma situação da vida real. Aqui você encontra ${RIGHTS.length} aulas de direitos, com exemplos, explicações bem fáceis, quadrinhos, fontes oficiais e três perguntas por aula.</p></section>
      <div class="rights-intro card"><div class="rights-intro-icon">💛</div><div><h2>Você não precisa conhecer palavras difíceis.</h2><p>Toque nas palavras explicadas pelo dicionário. Use a narração se preferir ouvir. Nas situações de violência, procure os canais oficiais de proteção — a ouvidoria do Cívica não recebe denúncias.</p><p class="small subtle">${count} de ${RIGHTS.length} aulas concluídas nas trilhas de direitos.</p>${bar(count/RIGHTS.length*100,'Conclusão das trilhas de direitos')}</div></div>
      <nav class="family-jump" aria-label="Escolher tema de direitos">${groups.map(g=>`<a href="#trilha-direitos/${g.id}" data-family-group="${g.id}">${g.icon} ${g.title}</a>`).join('')}</nav>
      ${groups.map(g=>`<section class="rights-group" id="family-${g.id}" aria-label="${g.title}"><div class="section-title"><div><div class="eyebrow">${g.icon} ${g.hint}</div><h2>${g.title}</h2></div><span class="small subtle">${g.lessons.filter(l=>state.completed[l.id]).length}/${g.lessons.length} concluídas</span></div><div class="lesson-list">${g.lessons.map(lessonCard).join('')}</div></section>`).join('')}
      <div class="rights-next"><strong>Precisa de ajuda de verdade?</strong><p>Informação educativa não substitui atendimento de emergência, profissional ou serviço oficial. Consulte nossos canais de orientação.</p><a class="btn btn-secondary" href="#direitos">Abrir serviços oficiais ${icon('arrow')}</a></div>`;
  }
  function principlesPage(){
    const articles=[
      ['Sem partido de estimação','O Cívica não endossa candidatos, partidos ou campanhas e não sugere em quem votar.'],
      ['Mesmos critérios para todos','As regras de verificação e o rigor das evidências não mudam conforme o grupo político envolvido.'],
      ['Fato não é opinião','Identificamos o que é lei, procedimento, dado, interpretação, hipótese ou opinião; discordâncias não se transformam em gabarito partidário.'],
      ['Fontes em cada conteúdo','Cada aula e questão tem links de origem. Preferimos textos legais e órgãos competentes para regras e direitos.'],
      ['Explicar sem esconder limites','O modo bem fácil ajuda a entender, mas não apaga requisitos, exceções, prazos e mudanças da legislação.'],
      ['Direito de apontar erros','Qualquer pessoa pode pedir revisão, sugerir fonte, alertar sobre desatualização ou propor melhoria. A equipe avalia evidências; não prometemos alteração automática.'],
      ['Acessibilidade e dignidade','Linguagem simples sem infantilizar ninguém, letras maiores, áudio e navegação para diferentes públicos.'],
      ['Privacidade antes de tudo','Não exigimos cadastro, CPF, telefone ou preferência política. Progresso no próprio navegador; formulário externo é opcional e terá política própria.']
    ];
    return `<section class="section-top"><div class="eyebrow">Compromissos públicos · 21/10/2026</div><h1>Nossa constituição editorial.</h1><p>Estas são as regras do próprio Cívica. Elas não são uma lei e não substituem a Constituição brasileira. Servem para que você saiba como criamos e revisamos o material.</p></section>
      <div class="card padding-card editorial-articles">${articles.map(([title,detail],i)=>`<div class="editorial-article"><span class="editorial-article-number">Art. ${i+1}</span><div><h2>${esc(title)}</h2><p>${esc(detail)}</p></div></div>`).join('')}</div>
      <div class="card padding-card" style="margin-top:18px"><h2>Como avaliamos uma correção?</h2><p class="subtle">1. Registramos a alegação e a aula mencionada. 2. Conferimos o texto legal ou a fonte original, data e possíveis mudanças. 3. Corrigimos a explicação, quando necessário, e documentamos a alteração no histórico da próxima versão. 4. Se for uma interpretação contestada, deixamos isso claro e identificamos as fontes.</p><div class="btn-row" style="margin-top:16px"><a class="btn btn-primary" href="#ouvidoria">Pedir revisão ou dar opinião ${icon('arrow')}</a><a class="btn btn-secondary" href="#fontes">Ver biblioteca de fontes</a></div></div>`;
  }
  function feedbackPage(lessonId=''){
    const lesson=getLesson(lessonId);
    return `<section class="section-top"><div class="eyebrow">Ouvidoria do Cívica · opiniões e correções</div><h1>Sua voz ajuda a melhorar.</h1><p>Encontrou um erro? Não entendeu a aula? Tem uma sugestão? Toda pessoa pode pedir revisão — sem informar partido, telefone ou dados pessoais.</p></section>
      <div class="feedback-grid"><section class="card padding-card"><h2>Preparar mensagem</h2><p class="small subtle">Preencha apenas o que for necessário. O Cívica não envia dados automaticamente.</p><div class="feedback-fields"><label for="feedback-kind">O que você quer dizer?</label><select id="feedback-kind"><option value="Pedido de revisão">Pedir revisão de informação</option><option value="Sugestão de melhoria">Sugerir melhoria</option><option value="Dificuldade de acesso">Contar uma dificuldade de uso</option><option value="Opinião">Deixar uma opinião</option></select>
      <label for="feedback-lesson">Sobre qual aula? (opcional)</label><select id="feedback-lesson"><option value="">Assunto geral</option>${DATA.lessons.map(l=>`<option value="${esc(l.id)}" ${l.id===lessonId?'selected':''}>${esc(l.number+' · '+l.title)}</option>`).join('')}</select>
      <label for="feedback-text">Conte o que aconteceu ou precisa melhorar</label><textarea id="feedback-text" maxlength="1800" rows="6" placeholder="Exemplo: Na aula sobre viagens, o texto poderia explicar melhor quais ônibus participam do benefício."></textarea>
      <label for="feedback-reference">Fonte ou link para consultar (opcional)</label><input id="feedback-reference" type="url" maxlength="500" placeholder="https://..." inputmode="url">
      <p class="tiny subtle">Não escreva CPF, telefone, endereço, dados de saúde ou nomes de terceiros. Se quiser identificar um problema, descreva a situação sem expor pessoas.</p>
      <div class="btn-row"><button type="button" class="btn btn-primary" data-action="feedback-copy">Copiar mensagem ${icon('copy')}</button><button type="button" class="btn btn-secondary" data-action="feedback-download">Baixar como texto ${icon('download')}</button></div>
      <p class="small feedback-message" id="feedback-status" role="status"></p></div></section>
      <aside class="card padding-card"><h2>Como enviar?</h2>${FEEDBACK_FORM_URL?`<p>O formulário externo está disponível. Copie a mensagem ao lado e cole no campo de comentário.</p><a class="btn btn-primary btn-full" href="${esc(FEEDBACK_FORM_URL)}" target="_blank" rel="noopener noreferrer">Abrir Google Forms ${icon('link')}</a><p class="small subtle">Ao abrir o formulário, valem as regras de privacidade do Google e as opções definidas pelo responsável pelo formulário.</p>`:`<div class="no-send"><strong>Recebimento ainda não ativado.</strong><p>Por enquanto você pode copiar ou baixar sua mensagem, mas ela <strong>não é enviada ao criador</strong>. O formulário de recebimento precisa ser configurado antes da publicação da ouvidoria.</p></div>`}
      <p class="small subtle">Este canal trata de correções e opiniões sobre o aplicativo. <strong>Não é uma ouvidoria governamental</strong> nem serviço de emergência.</p><p><a href="#principios">Ler princípios editoriais ${icon('arrow')}</a></p></aside></div>`;
  }
  function feedbackText(){
    const kind=document.getElementById('feedback-kind')?.value||'Opinião';
    const lessonId=document.getElementById('feedback-lesson')?.value||'';
    const message=document.getElementById('feedback-text')?.value.trim()||'';
    const reference=document.getElementById('feedback-reference')?.value.trim()||'';
    if(message.length<10){document.getElementById('feedback-status').textContent='Escreva pelo menos 10 caracteres no seu comentário.';document.getElementById('feedback-text')?.focus();return null;}
    return `CÍVICA — FEEDBACK / REVISÃO\nTipo: ${kind}\nAssunto: ${getLesson(lessonId)?.title||'Geral'}\nComentário: ${message}\nFonte sugerida: ${reference||'Não informada'}\n`; 
  }
  async function copyFeedback(){const t=feedbackText();if(!t)return;try{await navigator.clipboard.writeText(t);document.getElementById('feedback-status').textContent='Mensagem copiada. Cole no formulário de contato, quando disponível.';}catch(_){document.getElementById('feedback-status').textContent='Não foi possível copiar. Use a opção Baixar como texto.';}}
  function downloadFeedback(){const t=feedbackText();if(!t)return;const url=URL.createObjectURL(new Blob([t],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='civica-sugestao-revisao.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1500);document.getElementById('feedback-status').textContent='Arquivo preparado. Isso não envia sua mensagem automaticamente.';}

  function route() {
    const hash = decodeURIComponent(location.hash.slice(1) || 'inicio');
    const [view,...rest] = hash.split('/'); const id=rest.join('/');
    return {view,id};
  }
  function clearHighlight(){document.querySelectorAll('[data-narration-index]').forEach(el=>el.classList.remove('reading-now'));}
  function highlightAudio(){clearHighlight();if(audio.playing&&!audio.paused)document.querySelector(`[data-narration-index="${audio.index}"]`)?.classList.add('reading-now');}
  function stopAudio(){audio.generation++;try{window.speechSynthesis?.cancel();}catch(_){}audio.playing=false;audio.paused=false;audio.id=null;audio.chunks=[];audio.index=0;clearHighlight();}
  function speechChunks(l){
    const e=EXTRA.easy[l.id];
    return state.easyMode?[e.summary,e.comparison]:[l.intro,...l.facts.map(f=>`${f.title}. ${f.text}`),l.example];
  }
  function narrateNext(gen){
    if(gen!==audio.generation||!audio.playing||audio.paused)return;
    if(audio.index>=audio.chunks.length){audio.playing=false;audio.id=null;clearHighlight();render();announce('Leitura concluída.');return;}
    const utterance=new SpeechSynthesisUtterance(audio.chunks[audio.index]);
    utterance.lang='pt-BR';utterance.rate=state.voiceRate;utterance.pitch=1;
    const voice=window.speechSynthesis.getVoices().find(v=>v.name+'|'+v.lang===state.voiceKey);
    if(voice) utterance.voice=voice;
    utterance.onend=()=>{if(gen!==audio.generation||!audio.playing)return;audio.index++;highlightAudio();narrateNext(gen);};
    utterance.onerror=(event)=>{if(gen!==audio.generation)return;if(event.error==='canceled'||event.error==='interrupted')return;stopAudio();render();announce('A leitura foi interrompida pelo navegador. Tente outra voz.');};
    highlightAudio();
    try{window.speechSynthesis.speak(utterance);}catch(_){stopAudio();render();announce('Não foi possível iniciar a leitura.');}
  }
  function audioPlay(id){
    if(!('speechSynthesis' in window)||!('SpeechSynthesisUtterance' in window)){announce('O aparelho não oferece leitura em voz alta neste navegador.');return;}
    const l=getLesson(id);if(!l)return;
    stopAudio();audio.id=id;audio.playing=true;audio.chunks=speechChunks(l);audio.index=0;
    const gen=audio.generation;render();narrateNext(gen);
  }
  function audioPause(){
    if(!audio.playing)return;
    try{if(audio.paused){window.speechSynthesis.resume();audio.paused=false;}else{window.speechSynthesis.pause();audio.paused=true;}}catch(_){announce('Pausa indisponível neste navegador.');return;}
    render();highlightAudio();
  }
  let lastRouteKey='';
  function render() {
    const r=route(); const key = `${r.view}/${r.id}`;
    if (key !== lastRouteKey) { stopAudio(); lastRouteKey=key; }
    syncSettings();
    let main,active='#inicio';
    if(r.view==='inicio') main=homePage();
    else if(r.view==='aulas'){main=lessonsPage();active='#aulas';}
    else if(r.view==='aula' && getLesson(r.id)){main=lessonPage(getLesson(r.id));active='#aulas';}
    else if(r.view==='quiz' && getLesson(r.id)){main=quizPage(getLesson(r.id));active='#aulas';}
    else if(r.view==='resultado' && getLesson(r.id)){main=resultPage(getLesson(r.id));active='#aulas';}
    else if(r.view==='trilha-direitos'){main=rightsPathPage();active='#trilha-direitos';}
    else if(r.view==='direitos'){main=toolsPage();active='#trilha-direitos';}
    else if(r.view==='principios'){main=principlesPage();active='#principios';}
    else if(r.view==='ouvidoria'){main=feedbackPage(r.id);active='#principios';}
    else if(r.view==='conquistas'){main=achievementsPage();active='#conquistas';}
    else if(r.view==='fontes'){main=sourcesPage();active='#fontes';}
    else if(r.view==='ajustes'){main=settingsPage();active='#ajustes';}
    else if(r.view==='sobre'){main=aboutPage();active='#sobre';}
    else {if (location.hash !== '#inicio') {location.replace('#inicio');return;}main=homePage();}
    app.innerHTML=chrome(main,active);
    if (r.view==='aulas') renderFilteredLessons();
    if (r.view==='trilha-direitos' && r.id) requestAnimationFrame(()=>document.getElementById('family-'+r.id)?.scrollIntoView({block:'start'}));
    highlightAudio();
    document.title = `${({inicio:'Início',aulas:'Aulas',aula:getLesson(r.id)?.title,quiz:'Miniprova',resultado:'Resultado',direitos:'Ferramentas', 'trilha-direitos':'Conheça Seus Direitos', principios:'Princípios', ouvidoria:'Ouvidoria',conquistas:'Meu nível',fontes:'Fontes',ajustes:'Ajustes',sobre:'Sobre'}[r.view]||'Cívica')} · Cívica`;
  }
  function navigate(hash){if(location.hash===hash){render();window.scrollTo({top:0,behavior:'instant'});}else location.hash=hash;}
  window.addEventListener('hashchange',()=>{render();window.scrollTo({top:0,behavior:'instant'});const heading=document.querySelector('#main-content h1');if(heading){heading.setAttribute('tabindex','-1');heading.focus({preventScroll:true});}});
  function beginQuiz(id) {const l=getLesson(id);if(!l)return;stopAudio();currentQuiz={id,index:0,selected:null,checked:false,correct:0};lastResult=null;navigate(`#quiz/${encodeURIComponent(id)}`);}
  function checkAnswer() {if(!currentQuiz||currentQuiz.checked||currentQuiz.selected===null)return;const l=getLesson(currentQuiz.id);if(currentQuiz.selected===l.questions[currentQuiz.index].correct)currentQuiz.correct++;currentQuiz.checked=true;render();announce(currentQuiz.selected===l.questions[currentQuiz.index].correct?'Resposta correta':'Resposta incorreta. Leia a explicação.');}
  function nextQuestion(){if(!currentQuiz || !currentQuiz.checked)return;const l=getLesson(currentQuiz.id);if(currentQuiz.index<l.questions.length-1){currentQuiz.index++;currentQuiz.checked=false;currentQuiz.selected=null;render();announce(`Pergunta ${currentQuiz.index+1} de ${l.questions.length}`);return;}
    const before=computed().xp;
    const previous=state.completed[l.id];
    const best=Math.max(previous?.best??0,currentQuiz.correct);
    state.completed[l.id]={best,attempts:(previous?.attempts||0)+1,updatedAt:new Date().toISOString().slice(0,10)};
    saveState();
    lastResult={id:l.id,correct:currentQuiz.correct,gain:computed().xp-before,improved:best>(previous?.best??-1)};
    currentQuiz=null;
    navigate(`#resultado/${encodeURIComponent(l.id)}`);
  }
  async function share(){const s=computed();const txt=`🏅 Sou nível ${s.level} (${badgeFor(s.level)}) no Cívica!\nJá concluí ${s.count} de ${s.total} aulas de cidadania.\nAprender política é aprender a participar.\nProjeto educativo gratuito, com fontes oficiais.`;
    try{await navigator.clipboard.writeText(txt);announce('Mensagem copiada! Cole no WhatsApp ou onde quiser.');}
    catch(_){const t=document.createElement('textarea');t.value=txt;t.style.position='fixed';t.style.opacity='0';document.body.appendChild(t);t.select();const ok=document.execCommand('copy');t.remove();announce(ok?'Mensagem copiada!':'Não foi possível copiar. Verifique a permissão do navegador.');}}
  function exportProgress(){const blob=new Blob([JSON.stringify({format:'civica-v1',exportedAt:new Date().toISOString(),progress:state},null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='civica-meu-progresso.json';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);announce('Arquivo de progresso preparado para baixar.');}
  async function importProgress(file){if(!file)return;try{if(file.size>100000)throw Error('Arquivo grande demais');const parsed=JSON.parse(await file.text());if(parsed.format!=='civica-v1'||!parsed.progress||typeof parsed.progress!=='object')throw Error('Formato inválido');if(!confirm('Importar este arquivo? O progresso salvo neste navegador será substituído.'))return;
      localStorage.setItem(STORAGE_KEY,JSON.stringify(parsed.progress));state=loadState();render();announce('Progresso importado com sucesso.');}
    catch(_){alert('Não foi possível importar. Selecione um arquivo de progresso exportado pelo Cívica.');}}
  app.addEventListener('input', e=>{if(e.target.id==='lesson-search'){searchQuery=e.target.value;renderFilteredLessons();}});
  app.addEventListener('change',e=>{
    if(e.target.id==='import-progress'){importProgress(e.target.files?.[0]);e.target.value='';}
    if(e.target.id==='voice-select'){state.voiceKey=e.target.value;saveState();announce('Voz selecionada. A próxima parte da narração usará esta voz.');}
    if(e.target.id==='voice-speed'){state.voiceRate=Number(e.target.value);saveState();announce('Velocidade de leitura atualizada.');}
  });
  const modal=document.getElementById('glossary-modal');
  modal?.querySelector('[data-close-glossary]')?.addEventListener('click',()=>modal.close());
  modal?.addEventListener('click',e=>{if(e.target===modal)modal.close();});
  window.matchMedia?.('(prefers-color-scheme: dark)').addEventListener?.('change',()=>{if(state.theme==='auto')render();});
  window.speechSynthesis?.addEventListener?.('voiceschanged',()=>{
    document.querySelectorAll('#voice-select').forEach(sel=>{sel.outerHTML=voiceSelect();});
  });
  app.addEventListener('click',e=>{
    const btn=e.target.closest('[data-action]');if(!btn)return;
    const act=btn.dataset.action;
    if(act==='go')navigate(btn.dataset.target);
    else if(act==='start-quiz')beginQuiz(btn.dataset.id);
    else if(act==='answer' && currentQuiz && !currentQuiz.checked){currentQuiz.selected=Number(btn.dataset.index);render();const answer=document.querySelector(`[data-action="answer"][data-index="${currentQuiz.selected}"]`);if(answer)answer.focus();}
    else if(act==='check-answer')checkAnswer();
    else if(act==='next-question')nextQuestion();
    else if(act==='share')share();
    else if(act==='audio-play')audioPlay(btn.dataset.id);
    else if(act==='audio-pause')audioPause();
    else if(act==='audio-stop'){stopAudio();render();announce('Leitura parada.');}
    else if(act==='easy-mode'){stopAudio();state.easyMode=btn.dataset.value==='true';saveState();render();announce(state.easyMode?'Explicação bem fácil ativada.':'Explicação normal ativada.');}
    else if(act==='glossary')glossaryOpen(btn.dataset.term,btn);
    else if(act==='theme'){state.theme=btn.dataset.value;saveState();render();announce('Tema atualizado.');}
    else if(act==='toggle-theme'){state.theme=document.documentElement.dataset.theme==='dark'?'light':'dark';saveState();render();announce(state.theme==='dark'?'Modo escuro':'Modo claro');}
    else if(act==='text-size'){state.textScale=btn.dataset.value;saveState();render();announce('Tamanho de letra atualizado.');}
    else if(act==='contrast'){state.contrast=btn.dataset.value;saveState();render();announce('Contraste atualizado.');}
    else if(act==='feedback-copy')copyFeedback();
    else if(act==='feedback-download')downloadFeedback();
    else if(act==='export')exportProgress();
    else if(act==='reset' && confirm('Apagar todas as aulas concluídas e os pontos deste navegador? Esta ação não pode ser desfeita.')){state.completed={};saveState();render();announce('Progresso apagado.');}
  });
  syncSettings();
  render();
  if('serviceWorker' in navigator && (location.protocol==='https:' || location.hostname==='localhost' || location.hostname==='127.0.0.1')){
    window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
  }
})();
