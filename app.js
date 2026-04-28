// DeutschAL — Application logic

function showScreen(id) {
  Array.from(document.querySelectorAll('.screen')).forEach(function(s){ s.classList.remove('active'); });
  document.getElementById(id).classList.add('active');
}
function startFromA1() {
  state.currentLevel = 'A1';
  state.currentModuleId = 'a1m1';
  renderCourse();
  showScreen('course');
}
function goToPlacement() {
  state.placementStep = 'choose';
  renderPlacement();
  showScreen('placement');
}

// ════════════════════════════════════════════
// PLACEMENT
// ════════════════════════════════════════════
function renderPlacement() {
  const c = document.getElementById('placementContent');
  if (state.placementStep === 'choose') {
    c.innerHTML = `
      <div class="test-intro">
        <h2>🎯 Ku je tani?</h2>
        <p>Zgjidh nivelin tënd ose bëj testin e shkurtër për të zbuluar ku duhet të fillosh.</p>
      </div>
      <div class="level-skip-options">
        <div class="skip-opt a1" onclick="skipToLevel('A1')">
          <div class="skip-level">A1</div>
          <div class="skip-name">Fillestar i plotë</div>
        </div>
        <div class="skip-opt a2" onclick="skipToLevel('A2')">
          <div class="skip-level">A2</div>
          <div class="skip-name">Di bazat</div>
        </div>
        <div class="skip-opt b1" onclick="skipToLevel('B1')">
          <div class="skip-level">B1</div>
          <div class="skip-name">Nivel mesëm</div>
        </div>
      </div>
      <div class="divider-or">OSE</div>
      <div style="text-align:center;margin-top:8px">
        <button class="btn" onclick="startPlacementQuiz()">🧪 Bëj Testin e Vendosjes (10 pyetje)</button>
        <p style="color:var(--text-muted);font-size:0.82rem;margin-top:12px">Do të zbulojmë saktësisht ku duhet të fillosh.</p>
      </div>
    `;
  } else if (state.placementStep === 'quiz') {
    const q = PLACEMENT_QS[state.pqIndex];
    const pct = (state.pqIndex / PLACEMENT_QS.length) * 100;
    c.innerHTML = `
      <div class="placement-progress-bar"><div class="placement-progress-fill" style="width:${pct}%"></div></div>
      <div class="placement-q">
        <div class="p-q-num">Pyetja ${state.pqIndex+1} nga ${PLACEMENT_QS.length} · Niveli: ${q.level}</div>
        <div class="p-q-text">${q.q}</div>
        <div class="p-opts">
          ${q.opts.map((o,i)=>`<button class="p-opt" id="popt${i}" onclick="answerPlacement(${i})">${o}</button>`).join('')}
        </div>
        <div class="q-feedback" id="pFeedback"></div>
      </div>
      <div style="text-align:right">
        <button class="btn" id="pNextBtn" onclick="nextPlacementQ()" disabled>Tjetër →</button>
      </div>
    `;
  } else {
    // result
    const sc = state.pScore;
    let level, msg;
    if (sc <= 3) { level='A1'; msg='Fillo nga A1. Do të ndërtosh bazat e forta.'; }
    else if (sc <= 6) { level='A2'; msg='Mirë! Di bazat e A1. Fillo direkt nga A2.'; }
    else { level='B1'; msg='Shkëlqyeshëm! Ke njohuri të mira. Fillo nga B1.'; }

    c.innerHTML = `
      <div class="placement-result">
        <p style="color:var(--text-muted);font-size:0.88rem;margin-bottom:8px">Rezultati yt: ${sc}/${PLACEMENT_QS.length} pikë</p>
        <div class="result-level-badge ${level.toLowerCase()}">${level}</div>
        <p style="font-size:1.4rem;font-weight:700;margin-bottom:8px">Niveli i rekomanduar: <span style="color:var(--gold)">${level}</span></p>
        <p class="result-msg">${msg}</p>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
          <button class="btn" onclick="skipToLevel('${level}')">🚀 Fillo nga ${level}</button>
          <button class="btn-outline" onclick="state.placementStep='choose';renderPlacement()">← Kthehu</button>
        </div>
      </div>
    `;
  }
}

function startPlacementQuiz() {
  state.placementStep = 'quiz';
  state.pqIndex = 0;
  state.pScore = 0;
  state.pAnswered = false;
  renderPlacement();
}

function answerPlacement(i) {
  if (state.pAnswered) return;
  state.pAnswered = true;
  const q = PLACEMENT_QS[state.pqIndex];
  const opts = document.querySelectorAll('.p-opt');
  opts.forEach(function(o){ o.disabled = true; });
  const fb = document.getElementById('pFeedback');
  if (i === q.a) {
    opts[i].classList.add('correct');
    fb.className = 'q-feedback show ok'; fb.textContent = '✅ Saktë!';
    state.pScore++;
  } else {
    opts[i].classList.add('wrong');
    opts[q.a].classList.add('correct');
    fb.className = 'q-feedback show bad'; fb.textContent = `❌ Përgjigja: "${q.opts[q.a]}"`;
  }
  document.getElementById('pNextBtn').disabled = false;
}

function nextPlacementQ() {
  state.pqIndex++;
  state.pAnswered = false;
  if (state.pqIndex >= PLACEMENT_QS.length) {
    state.placementStep = 'result';
  }
  renderPlacement();
}

function skipToLevel(level) {
  state.currentLevel = level;
  state.unlockedLevels = level === 'A1' ? ['A1'] : level === 'A2' ? ['A1','A2'] : ['A1','A2','B1'];
  state.currentModuleId = MODULES[level][0].id;
  renderCourse();
  showScreen('course');
}

// ════════════════════════════════════════════
// COURSE
// ════════════════════════════════════════════
function renderCourse() {
  renderSidebar();
  renderLesson();
  updateLevelTabs();
}

function updateLevelTabs() {
  document.getElementById('currentLevelLabel').textContent = '· ' + state.currentLevel;
  ['A1','A2','B1'].forEach(function(l){ {
    const tab = document.getElementById('tab'+l);
    tab.classList.toggle('active', l === state.currentLevel);
    // locks removed
  }; });
}

function switchLevel(level) {
  // All levels open — no lock
  state.currentLevel = level;
  state.currentModuleId = MODULES[level][0].id;
  renderCourse();
}

function renderSidebar() {
  const sb = document.getElementById('sidebar');
  const mods = (MODULES[state.currentLevel] || []).filter(m => m && m.id);
  sb.innerHTML = `<div class="sidebar-level-label">Modulet ${state.currentLevel}</div>`;
  mods.forEach(function(m){ {
    const done = state.completedModules.includes(m.id);
    const active = m.id === state.currentModuleId;
    const div = document.createElement('div');
    div.className = `module-item ${active?'active':''} ${done?'done':''}`;
    div.onclick = () => { state.currentModuleId = m.id; state.lessonTab = 'story'; renderCourse(); };
    div.innerHTML = `
      <div class="mod-num">${done ? '✓' : m.num}</div>
      <div class="mod-info">
        <div class="mod-title">${m.title}</div>
        <div class="mod-sub">${m.sub}</div>
      </div>
    `;
    sb.appendChild(div);
  }; });
}

function getCurrentModule() {
  const allMods = [...MODULES.A1, ...MODULES.A2, ...MODULES.B1].filter(m => m && m.id);
  return allMods.find(m => m.id === state.currentModuleId);
}

function renderLesson() {
  const mod = getCurrentModule();
  const lm = document.getElementById('lessonMain');
  const badgeClass = state.currentLevel === 'A1' ? 'badge-a1' : state.currentLevel === 'A2' ? 'badge-a2' : 'badge-b1';

  lm.innerHTML = `
    <div class="lesson-header">
      <div class="lesson-level-badge ${badgeClass}">${state.currentLevel} · Moduli ${mod.num}</div>
      <h2 class="lesson-title">${mod.title}</h2>
      <p class="lesson-subtitle">${mod.sub}</p>
    </div>
    <div class="lesson-tabs">
      <button class="ltab ${state.lessonTab==='story'?'active':''}" onclick="switchTab('story')">📖 Historia</button>
      <button class="ltab ${state.lessonTab==='storyplus'?'active':''}" onclick="switchTab('storyplus')">🎬 Histori+</button>
      <button class="ltab ${state.lessonTab==='vocab'?'active':''}" onclick="switchTab('vocab')">📚 Fjalori</button>
      <button class="ltab ${state.lessonTab==='grammar'?'active':''}" onclick="switchTab('grammar')">📐 Gramatika</button>
      <button class="ltab ${state.lessonTab==='exercises'?'active':''}" onclick="switchTab('exercises')">✏️ Ushtrime</button>
      <button class="ltab ${state.lessonTab==='think'?'active':''}" onclick="switchTab('think')">🎙️ Fol</button>
      <button class="ltab ${state.lessonTab==='scenario'?'active':''}" onclick="switchTab('scenario')">🎭 Skenar</button>
      <button class="ltab ${state.lessonTab==='quiz'?'active':''}" onclick="switchTab('quiz')">🏆 Kuiz</button>
    </div>
    <div id="lessonContent"></div>
  `;

  renderLessonSection(mod);
}

function goTab(tab) {
  state.lessonTab = tab;
  if (tab === 'quiz') { state.quizIndex=0; state.quizScore=0; state.quizAnswered=false; state.quizDots=[]; }
  Array.from(document.querySelectorAll('.ltab')).forEach(function(t){ t.classList.remove('active'); });
  var mod = getCurrentModule();
  renderLesson();
}
function switchTab(tab) {
  state.lessonTab = tab;
  if (tab === 'quiz') { state.quizIndex=0; state.quizScore=0; state.quizAnswered=false; state.quizDots=[]; }
  if (tab === 'think' || tab === 'scenario' || tab === 'storyplus') { /* no reset needed */ }
  const mod = getCurrentModule();
  Array.from(document.querySelectorAll('.ltab')).forEach(function(t){ t.classList.remove('active'); });
  event.target.classList.add('active');
  renderLessonSection(mod);
}

function renderLessonSection(mod) {
  const c = document.getElementById('lessonContent');
  if (!c) return;

  if (state.lessonTab === 'story') {
    const s = mod.story;
    c.innerHTML = `
      <div class="story-card"><div class="story-card">
        <div class="story-banner">
          <div>
            <div class="story-ep">${s.ep}</div>
            <div class="story-ep-title">${s.title}</div>
          </div>
        </div>
        <div class="story-body">
          ${s.lines.map(l => {
            if (l.type === 'narr') return `<div class="story-narr">${l.text}</div>`;
            return `<div class="story-line">
              <div class="story-speaker">${l.speaker}:</div>
              <div>
                <div class="story-de">${l.de} <button onclick="TTS.speak(this.parentElement.childNodes[0].textContent.trim())" style="background:none;border:none;cursor:pointer;font-size:0.85rem;padding:0 4px;opacity:0.6;color:var(--gold)">🔊</button></div>
                <div class="story-sq">${l.sq}</div>
              </div>
            </div>`;
          }).join('')}
        </div>
      </div>
      <div class="btn-row">
        <button class="btn" onclick="switchTab('vocab')">Vazhdo te Fjalori →</button>
      </div>
    `;
  }

  else if (state.lessonTab === 'storyplus') {
    if(typeof getInteractiveStory==='function'&&getInteractiveStory(mod.id)&&!interactiveState.branch){showInteractiveChoice(mod.id);return;}
    const upg = MODULE_UPGRADES[mod.id];
    if (!upg || !upg.storyExtension) {
      c.innerHTML = '<div style="text-align:center;padding:60px;color:var(--text-muted)"><p style="font-size:2rem;margin-bottom:12px">🚧</p><p>Zgjerimi i historisë për këtë modul vjen së shpejti.</p></div>';
    } else {
      var s = mod.story;
      c.innerHTML = '<div class="story-card"><div class="story-banner"><div><div class="story-ep">' + s.ep + ' — Vazhdim</div><div class="story-ep-title">' + s.title + ' (Zgjeruar)</div></div></div><div class="story-body">' +
        upg.storyExtension.map(function(l){
          if(l.type==='narr') return '<div class="story-narr">' + l.text + '</div>';
          return '<div class="story-line"><div class="story-speaker">' + l.speaker + ':</div><div style="flex:1"><div class="story-de">' + l.de + ' <button class="tts-btn" data-de="' + (l.de||'').replace(/"/g,"&quot;") + '" onclick="TTS.speak(this.dataset.de)" style="background:none;border:none;cursor:pointer;font-size:0.82rem;padding:1px 4px;color:var(--gold);opacity:0.65;vertical-align:middle">🔊</button></div><div class="story-sq">' + l.sq + '</div></div></div>';
        }).join('') +
      '</div></div>' +
      '<div class="btn-row"><button class="btn" onclick="goTab(\'vocab\')">Vazhdo te Fjalori →</button></div>';
    }
  }

  else if (state.lessonTab === 'think') {
    const upg = MODULE_UPGRADES[mod.id];
    if (!upg || !upg.thinkInGerman || upg.thinkInGerman.length === 0) {
      c.innerHTML = '<div style="text-align:center;padding:60px;color:var(--text-muted)"><p style="font-size:2rem;margin-bottom:12px">🧠</p><p>Momentet "Fol Gjermanisht" për këtë modul vijnë së shpejti.</p></div>';
    } else {
      var html = '<div style="margin-bottom:20px"><p style="color:var(--text-muted);font-size:0.88rem;line-height:1.6">🧠 <strong style="color:var(--gold)">Fol Gjermanisht!</strong> — Këtu duhet të mendosh dhe të flasësh VETËM gjermanisht. Mos kërko përkthim. Lexo promptin, mendohu 30 sekonda, pastaj përgjigju me zë ose me shkrim.</p></div>';
      upg.thinkInGerman.forEach(function(t, i) {
        html += '<div class="grammar-section" style="border-left:4px solid var(--gold);margin-bottom:16px">' +
          '<h3>💬 Situata ' + (i+1) + ' <span style="font-size:0.75rem;color:var(--text-muted);font-family:DM Sans,sans-serif;font-weight:400">Nivel ' + t.level + '</span></h3>' +
          '<p style="font-size:1rem;color:var(--text);font-weight:500;margin-bottom:12px">' + t.prompt + '</p>' +
          '<div style="background:var(--surface2);border-radius:8px;padding:12px 16px;margin-bottom:10px"><p style="font-size:0.78rem;color:var(--text-muted);margin-bottom:6px;letter-spacing:1px;text-transform:uppercase">💡 Hint</p><p style="color:var(--gold-dim);font-size:0.88rem;font-family:JetBrains Mono,monospace">' + t.hint + '</p></div>' +
          '<details style="cursor:pointer"><summary style="font-size:0.82rem;color:var(--text-muted);padding:8px 0">Shiko shembullin (pas se ke provuar vetë!)</summary>' +
          '<div style="background:var(--surface3);border-radius:8px;padding:12px 16px;margin-top:8px"><p style="font-size:0.88rem;color:var(--green);line-height:1.6">' + t.example + '</p></div></details>' +
        '</div>';
      });
      html += '<div class="btn-row"><button class="btn" onclick="goTab(\'scenario\')">Vazhdo te Skenarët →</button></div>';
      c.innerHTML = html;
    }
  }

  else if (state.lessonTab === 'scenario') {
    const upg = MODULE_UPGRADES[mod.id];
    if (!upg || !upg.scenarios || upg.scenarios.length === 0) {
      c.innerHTML = '<div style="text-align:center;padding:60px;color:var(--text-muted)"><p style="font-size:2rem;margin-bottom:12px">🎭</p><p>Skenarët për këtë modul vijnë së shpejti.</p></div>';
    } else {
      var html2 = '<div style="margin-bottom:20px"><p style="color:var(--text-muted);font-size:0.88rem;line-height:1.6">🎭 <strong style="color:var(--gold)">Skenarë Reale</strong> — Luje rolin! Lexo dialogun, mëso strukturën, pastaj provo të luash rolin "Ti" vetëm gjermanisht.</p></div>';
      upg.scenarios.forEach(function(sc, si) {
        html2 += '<div class="grammar-section" style="border-left:4px solid var(--blue);margin-bottom:20px">' +
          '<h3>🎬 ' + sc.title + '</h3>' +
          '<p style="background:rgba(59,130,246,0.1);border-radius:8px;padding:12px;font-size:0.88rem;color:var(--text-dim);margin-bottom:16px;border:1px solid rgba(59,130,246,0.2)">📍 ' + sc.situation + '</p>';
        sc.lines.forEach(function(l) {
          var isPlayer = l.speaker === 'Ti' || l.speaker === 'Ti (Dion)' || l.speaker === 'Ti (përgjigju)';
          html2 += '<div style="display:flex;gap:12px;margin-bottom:12px;align-items:flex-start">' +
            '<div style="min-width:110px;font-weight:700;font-size:0.78rem;padding-top:2px;color:' + (isPlayer ? 'var(--gold)' : 'var(--a2-color)') + '">' + l.speaker + ':</div>' +
            '<div style="flex:1">' +
            '<div style="font-size:0.92rem;color:' + (isPlayer ? 'var(--gold)' : 'var(--text)') + ';line-height:1.5;' + (isPlayer ? 'font-weight:500' : '') + '">' + l.de + ' <button class="tts-btn" data-de="' + (l.de||'').replace(/"/g,"&quot;") + '" onclick="TTS.speak(this.dataset.de)" style="background:none;border:none;cursor:pointer;font-size:0.8rem;padding:1px 3px;color:var(--gold);opacity:0.6">🔊</button></div>' +
            '<div style="font-size:0.78rem;color:var(--text-muted);font-style:italic;margin-top:2px">' + l.sq + '</div>' +
            '</div></div>';
        });
        html2 += '<div style="margin-top:16px;padding:12px;background:rgba(240,180,41,0.08);border-radius:8px;border:1px solid rgba(240,180,41,0.2)">' +
          '<p style="font-size:0.8rem;color:var(--gold);margin-bottom:4px">🎯 Sfida jote:</p>' +
          '<p style="font-size:0.84rem;color:var(--text-dim)">Tani luaje rolin "Ti" vetëm gjermanisht — pa shikuar shqipen!</p></div>' +
        '</div>';
      });
      html2 += '<div class="btn-row"><button class="btn" onclick="goTab(\'quiz\')">Vazhdo te Kuizi →</button></div>';
      c.innerHTML = html2;
    }
  }

  else if (state.lessonTab === 'vocab') {
    const words = mod.vocab;
    c.innerHTML = `
      <p style="color:var(--text-muted);font-size:0.85rem;margin-bottom:12px">Klikoni mbi fjalë për të parë shembullin • ${words.length} fjalë</p>
      <input class="vocab-search" placeholder="🔍 Kërko fjalën..." oninput="filterVocab(this.value,'${mod.id}')" id="vsearch">
      <div class="vocab-grid" id="vgrid">
        ${words.map((w,i)=>`
          <div class="vcard" id="vc${i}" onclick="toggleVcard(${i})">
            <div class="v-de">${w.de}</div>
            <div class="v-sq">${w.sq}</div>
            <div class="v-type">${w.type}</div>
            <div class="v-ex">${w.ex}</div>
          </div>
        `).join('')}
      </div>
      <div class="btn-row" style="margin-top:20px">
        <button class="btn" onclick="switchTab('grammar')">Vazhdo te Gramatika →</button>
      </div>
    `;
    window._currentVocab = words;
  }

  else if (state.lessonTab === 'grammar') {
    c.innerHTML = mod.grammar.map(g => `
      <div class="grammar-section">
        <h3>📌 ${g.title}</h3>
        ${g.body ? `<p>${g.body}</p>` : ''}
        ${g.table ? `
          <table class="gtable">
            <thead><tr>${g.table.heads.map(h=>`<th>${h}</th>`).join('')}</tr></thead>
            <tbody>${g.table.rows.map((row,ri)=>`<tr>${row.map((cell,ci)=>`<td class="${ci===0?'de':ci===1?'sq':''}">${cell}</td>`).join('')}</tr>`).join('')}</tbody>
          </table>
        ` : ''}
      </div>
    `).join('') + `
      <div class="btn-row">
        <button class="btn" onclick="switchTab('exercises')">Vazhdo te Ushtrimet →</button>
      </div>
    `;
  }

  else if (state.lessonTab === 'exercises') {
    c.innerHTML = mod.exercises.map((ex,i) => `
      <div class="exercise-card">
        <div class="ex-type">Ushtrimi ${i+1} · ${ex.type}</div>
        <div class="ex-q">${ex.q}</div>
        <div class="ex-opts">
          ${ex.opts.map((o,j)=>`<button class="ex-opt" id="exo${i}_${j}" onclick="answerEx(${i},${j},${ex.a})">${o}</button>`).join('')}
        </div>
        <div class="ex-feedback" id="exf${i}"></div>
      </div>
    `).join('') + `
      <div class="btn-row">
        <button class="btn" onclick="switchTab('quiz')">Vazhdo te Kuizi →</button>
      </div>
    `;
  }

  else if (state.lessonTab === 'quiz') {
    const total = mod.quiz.length;
    if (state.quizIndex >= total) {
      const pct = Math.round(state.quizScore/total*100);
      let msg = pct===100?'🏆 Perfekt! Mësimi i kaluar!' : pct>=70?'🌟 Shumë mirë! Vazhdo!' : '📚 Rishiko dhe provo sërish.';
      if (pct >= 70 && !state.completedModules.includes(mod.id)) {
        state.completedModules.push(mod.id);
        checkLevelUnlock();
        renderSidebar();
      }
      PROGRESS.recordActivity('quiz', 1);
      c.innerHTML = `
        <div class="quiz-result-box">
          <div class="quiz-prog">${state.quizDots.map(d=>`<div class="qd ${d}"></div>`).join('')}</div>
          <div class="qr-score">${state.quizScore}/${total}</div>
          <div class="qr-label">${pct}% saktë</div>
          <div class="qr-msg">${msg}</div>
          <div class="btn-row" style="justify-content:center">
            <button class="btn" onclick="resetQuiz()">🔄 Provo Sërish</button>
            ${getNextModuleBtn(mod)}
          </div>
        </div>
      `;
    } else {
      const q = mod.quiz[state.quizIndex];
      const dots = Array(total).fill('').map((_,i)=>{
        if(i < state.quizDots.length) return `<div class="qd ${state.quizDots[i]}"></div>`;
        if(i === state.quizIndex) return `<div class="qd cur"></div>`;
        return `<div class="qd"></div>`;
      }).join('');
      c.innerHTML = `
        <div class="quiz-prog">${dots}</div>
        <div class="quiz-card">
          <div class="q-num">Pyetja ${state.quizIndex+1} nga ${total}</div>
          <div class="q-text">${q.q}</div>
          <div class="q-opts">
            ${q.opts.map((o,j)=>`<button class="q-opt" id="qo${j}" onclick="answerQuiz(${j},${q.a})">${o}</button>`).join('')}
          </div>
          <div class="q-feedback" id="qfb"></div>
        </div>
        <div style="text-align:right">
          <button class="btn" id="qnext" onclick="nextQuizQ()" disabled>Tjetër →</button>
        </div>
      `;
    }
  }
}

function getNextModuleBtn(mod) {
  const mods = MODULES[state.currentLevel];
  const idx = mods.findIndex(m => m.id === mod.id);
  if (idx < mods.length - 1) {
    const next = mods[idx+1];
    return `<button class="btn-outline" onclick="goToModule('${next.id}')">Moduli tjetër: ${next.title} →</button>`;
  }
  return `<button class="btn-outline" onclick="alert('🎉 Ke përfunduar të gjithë modulet e ${state.currentLevel}! Testo nivelin!')">🎓 Test Final ${state.currentLevel}</button>`;
}

function goToModule(id) {
  state.currentModuleId = id;
  state.lessonTab = 'story';
  saveLastPosition();
  renderCourse();
}

function checkLevelUnlock() {
  const a1done = MODULES.A1.every(m => state.completedModules.includes(m.id));
  const a2done = MODULES.A2.every(m => state.completedModules.includes(m.id));
  if (a1done && !state.unlockedLevels.includes('A2')) {
    state.unlockedLevels.push('A2');
    setTimeout(()=>alert('🎉 Urime! Ke zhbllokuar nivelin A2!'), 200);
  }
  if (a2done && !state.unlockedLevels.includes('B1')) {
    state.unlockedLevels.push('B1');
    setTimeout(()=>alert('🎉 Fantastike! Ke zhbllokuar nivelin B1!'), 200);
  }
  updateLevelTabs();
}

function answerEx(i, j, correct) {
  const opts = document.querySelectorAll(`[id^="exo${i}_"]`);
  opts.forEach(function(o){ o.disabled = true; });
  const fb = document.getElementById(`exf${i}`);
  if (j === correct) {
    document.getElementById(`exo${i}_${j}`).classList.add('correct');
    fb.className = 'ex-feedback show ok'; fb.textContent = '✅ Saktë!';
  } else {
    document.getElementById(`exo${i}_${j}`).classList.add('wrong');
    document.getElementById(`exo${i}_${correct}`).classList.add('correct');
    fb.className = 'ex-feedback show bad'; fb.textContent = `❌ Saktë: "${document.getElementById(`exo${i}_${correct}`).textContent}"`;
  }
}

function answerQuiz(j, correct) {
  if (state.quizAnswered) return;
  state.quizAnswered = true;
  const opts = document.querySelectorAll('.q-opt');
  opts.forEach(function(o){ o.disabled = true; });
  const fb = document.getElementById('qfb');
  const mod = getCurrentModule();
  const q = mod && mod.quiz ? mod.quiz[state.quizIndex] : null;
  if (j === correct) {
    opts[j].classList.add('correct');
    const expTxt = q && q.exp ? ' — ' + q.exp : '';
    fb.className = 'q-feedback show ok';
    fb.innerHTML = '✅ Saktë! Bravo!' + (q && q.exp ? '<div style="font-size:0.8rem;margin-top:6px;opacity:0.85">💡 ' + q.exp + '</div>' : '');
    state.quizScore++;
    state.quizDots.push('ok');
  } else {
    opts[j].classList.add('wrong');
    opts[correct].classList.add('correct');
    fb.className = 'q-feedback show bad';
    fb.innerHTML = '❌ Saktë: "' + opts[correct].textContent + '"' +
      (q && q.exp ? '<div style="font-size:0.8rem;margin-top:6px;opacity:0.9">💡 ' + q.exp + '</div>' : '');
    state.quizDots.push('bad');
  }
  document.getElementById('qnext').disabled = false;
}

function nextQuizQ() {
  state.quizIndex++;
  state.quizAnswered = false;
  const mod = getCurrentModule();
  renderLessonSection(mod);
}

function resetQuiz() {
  state.quizIndex = 0; state.quizScore = 0; state.quizAnswered = false; state.quizDots = [];
  const mod = getCurrentModule();
  renderLessonSection(mod);
}

function toggleVcard(i) {
  const card = document.getElementById('vc'+i);
  card.classList.toggle('open');
}




// ── VOCAB BROWSER FUNCTIONS ──
function showVocabBrowser() {
  buildAllVocab();
  Array.from(document.querySelectorAll('[id^="vbTab"]')).forEach(function(t){ t.classList.remove('active'); });
  var tab = document.getElementById('vbTabA1');
  if(tab) tab.classList.add('active');
  var lvl = document.getElementById('vbLevel');
  if(lvl) lvl.value = 'A1';
  state._vbLevel = 'A1';
  document.getElementById('vbSearch').value = '';
  document.getElementById('vbType').value = '';
  renderVocabBrowser();
  showScreen('vocabBrowser');
}
function switchVBLevel(level) {
  state._vbLevel = level;
  Array.from(document.querySelectorAll('[id^="vbTab"]')).forEach(function(t){ t.classList.remove('active'); });
  var tab = document.getElementById('vbTab'+level);
  if(tab) tab.classList.add('active');
  renderVocabBrowser();
}
function renderVocabBrowser() {
  var lvl = (state._vbLevel) || 'A1';
  var search = (document.getElementById('vbSearch') ? document.getElementById('vbSearch').value : '').toLowerCase();
  var type = (document.getElementById('vbType') ? document.getElementById('vbType').value : '').toLowerCase();
  var words;
  if(lvl === 'ALL') {
    words = [].concat(ALL_VOCAB.A1||[], ALL_VOCAB.A2||[], ALL_VOCAB.B1||[]);
  } else {
    words = ALL_VOCAB[lvl] || [];
  }
  if(search) words = words.filter(function(w){ return w.de.toLowerCase().indexOf(search)>=0 || w.sq.toLowerCase().indexOf(search)>=0 || (w.ex||'').toLowerCase().indexOf(search)>=0; });
  if(type) words = words.filter(function(w){ return (w.type||'').toLowerCase().indexOf(type)>=0; });
  var countEl = document.getElementById('vbCount');
  if(countEl) countEl.textContent = words.length + ' fjalë';
  var grid = document.getElementById('vbGrid');
  if(!grid) return;
  if(words.length === 0){
    grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--text-muted)">Nuk u gjet asnjë fjalë.</div>';
    return;
  }
  grid.innerHTML = words.map(function(w,i){
    return '<div class="vcard" id="vbc'+i+'" onclick="this.classList.toggle(\'open\')">' +
      '<div class="v-de" style="color:'+getGenderColor(w.de||'')+';font-weight:600">' + (w.de||'') + '</div>' +
      '<div class="v-sq">' + (w.sq||'') + '</div>' +
      '<div class="v-type">' + (w.type||'') + (w.source ? ' · ' + w.source : '') + '</div>' +
      '<div class="v-ex">' + (w.ex||'') + '</div>' +
    '</div>';
  }).join('');
}

// ════════════════════════════════════════════
// GOETHE B1 TEST DATA & FUNCTIONS
// Based on official Goethe-Institut B1 exam format
// ════════════════════════════════════════════

const GOETHE_B1_DATA = {

  info: {
    title: 'Goethe-Zertifikat B1 — Çfarë duhet të dish',
    sections: [
      { name: 'Lexim (Lesen)', time: '65 min', points: 100, desc: '5 detyra leximi: artikuj, njoftime, korrespondencë, tekste të ndryshme.' },
      { name: 'Dëgjim (Hören)', time: '40 min', points: 100, desc: '4 detyra dëgjimi: lajme, biseda, njoftime publike.' },
      { name: 'Shkrim (Schreiben)', time: '60 min', points: 100, desc: '2 detyra: email/letër formale + koment ose forumpost.' },
      { name: 'Të Folur (Sprechen)', time: '15 min', points: 100, desc: '3 pjesë: prezantim, diskutim, arritje marrëveshjeje.' }
    ],
    passing: 'Nota kaluese: 60% në total (240/400 pikë). Çdo seksion duhet të kalojë 45%.',
    tips: [
      'Lexo pyetjet PARA tekstit — kjo kursen kohë',
      'Mos kalo shumë kohë tek një pyetje — kalo dhe kthehu',
      'Në shkrim: planifiko 5 min, shkruaj 45 min, korrekturo 10 min',
      'Fol qartë dhe natyrshëm — gabimet e vogla nuk ndëshkohen rëndë',
      'Mëso 20 fjalë të reja çdo ditë — ky është sekreti'
    ]
  },

  lesen: [
    {
      id: 'L1',
      type: 'Lesen Teil 1',
      title: 'Tekst global — Gjej informacionin',
      instruction: 'Lexo tekstin dhe zgjedh përgjigjen e saktë (a, b ose c).',
      text: `Max Müller arbeitet seit zehn Jahren als Programmierer in München. Jeden Tag fährt er mit der U-Bahn zur Arbeit — etwa zwanzig Minuten. Seit letztem Jahr arbeitet er zwei Tage pro Woche im Homeoffice. Das findet er sehr praktisch: Er spart Zeit, kann in Ruhe arbeiten und hat mehr Zeit für seine Familie. Sein Sohn ist fünf Jahre alt und seine Tochter ist drei. Trotzdem vermisst er manchmal den Kontakt zu seinen Kollegen. „Im Büro entstehen die besten Ideen — beim Kaffee, in der Pause", sagt er. Er plant, nächstes Jahr eine Ausbildung zum KI-Entwickler zu machen, um beruflich voranzukommen.`,
      questions: [
        {
          q: 'Wie lange arbeitet Max schon als Programmierer?',
          opts: ['a) Fünf Jahre', 'b) Zehn Jahre', 'c) Zwanzig Jahre'],
          a: 1,
          exp: 'Im Text steht: "seit zehn Jahren als Programmierer".'
        },
        {
          q: 'Was vermisst Max beim Homeoffice?',
          opts: ['a) Die U-Bahn', 'b) Die Familie', 'c) Den Kontakt zu Kollegen'],
          a: 2,
          exp: '"Trotzdem vermisst er manchmal den Kontakt zu seinen Kollegen."'
        },
        {
          q: 'Was plant Max für nächstes Jahr?',
          opts: ['a) Umziehen', 'b) Eine Ausbildung zum KI-Entwickler', 'c) Weniger arbeiten'],
          a: 1,
          exp: '"Er plant, nächstes Jahr eine Ausbildung zum KI-Entwickler zu machen."'
        }
      ]
    },
    {
      id: 'L2',
      type: 'Lesen Teil 2',
      title: 'Korrekte informacion — E saktë apo e gabuar?',
      instruction: 'Lexo tekstin dhe vendos nëse pohimet janë të sakta (Richtig) apo të gabuara (Falsch).',
      text: `Liebe Bewohnerinnen und Bewohner,\n\nwir möchten Sie darüber informieren, dass die Tiefgarage ab dem 15. März für zwei Wochen geschlossen sein wird. Grund dafür sind notwendige Reparaturarbeiten am Dach. Während dieser Zeit stehen Ihnen kostenlos Parkplätze auf dem Sportplatz in der Schillerstraße 12 zur Verfügung (ca. 300 Meter vom Haus entfernt). Bitte beachten Sie, dass die Parkplätze nur von 7:00 bis 22:00 Uhr zugänglich sind. Für Fragen wenden Sie sich bitte an die Hausverwaltung unter Tel. 089 / 4456789.\n\nMit freundlichen Grüßen,\nDie Hausverwaltung`,
      questions: [
        {
          q: 'Die Tiefgarage ist wegen Dacharbeiten geschlossen.',
          opts: ['Richtig', 'Falsch'],
          a: 0,
          exp: '"notwendige Reparaturarbeiten am Dach" — Richtig!'
        },
        {
          q: 'Der Ersatzparkplatz kostet Geld.',
          opts: ['Richtig', 'Falsch'],
          a: 1,
          exp: '"stehen Ihnen kostenlos Parkplätze" — Falsch, es kostet nichts.'
        },
        {
          q: 'Man kann den Ersatzparkplatz rund um die Uhr nutzen.',
          opts: ['Richtig', 'Falsch'],
          a: 1,
          exp: '"nur von 7:00 bis 22:00 Uhr zugänglich" — Falsch, nicht rund um die Uhr.'
        }
      ]
    },
    {
      id: 'L3',
      type: 'Lesen Teil 3',
      title: 'Njoftime dhe reklama — Gjej vendin e duhur',
      instruction: 'Lexo situatat dhe gjej njoftimin e duhur. Shkruaj germën e saktë (a–e).',
      text: '',
      ads: [
        { letter: 'a', title: 'Sprachkurs Deutsch B2', body: 'Start: 1. Oktober | Mo–Mi 18–20 Uhr | Volkshochschule | 180€/Semester | Anmeldung: www.vhs-muenchen.de' },
        { letter: 'b', title: 'Wohnung zu vermieten', body: '3 Zimmer, 75 m², 2. OG, Altbau, 1.200€ warm, ruhige Lage, Nähe U3. Tel: 0176/123456' },
        { letter: 'c', title: 'Suche Mitfahrer nach Hamburg', body: 'Ich fahre am Freitag 8:00 Uhr von München nach Hamburg. Kosten: 30€. Melde dich bei: fahrgemeinschaft@gmail.com' },
        { letter: 'd', title: 'Kindertagesstätte sucht Erzieher/in', body: 'Vollzeit oder Teilzeit möglich. Erfahrung erwünscht. Bewerbung an: kita@stadtmuenchen.de' },
        { letter: 'e', title: 'Fahrrad zu verkaufen', body: 'Mountainbike, 26 Zoll, guter Zustand, 150€, VB. Abholung in Schwabing. Tel: 089/987654' }
      ],
      questions: [
        {
          q: 'Lena möchte ihre Deutschkenntnisse von B1 auf B2 verbessern.',
          opts: ['a', 'b', 'c', 'd', 'e'],
          a: 0,
          exp: 'Njoftimi "a" — Sprachkurs Deutsch B2 — është i duhuri për Lenën.'
        },
        {
          q: 'Thomas sucht eine günstige Möglichkeit, nach Hamburg zu reisen.',
          opts: ['a', 'b', 'c', 'd', 'e'],
          a: 2,
          exp: 'Njoftimi "c" — Mitfahrer nach Hamburg — ofron udhëtim me 30€.'
        },
        {
          q: 'Maria hat Erfahrung mit Kindern und sucht eine Stelle.',
          opts: ['a', 'b', 'c', 'd', 'e'],
          a: 3,
          exp: 'Njoftimi "d" — Kindertagesstätte sucht Erzieher — është i duhuri.'
        }
      ]
    }
  ],

  hoeren: [
    {
      id: 'H1',
      type: 'Hören Teil 1',
      title: 'Bisedë e shkurtër — Gjej informacionin kryesor',
      instruction: 'Dëgjo (lexo tekstin) dhe zgjedh përgjigjen e saktë.',
      transcript: `[Bisedë telefonike]\nAnna: Hallo Peter! Ich rufe wegen unseres Treffens an. Passt dir Samstag noch?\nPeter: Hmm, Samstag nicht so gut. Ich habe am Vormittag einen Arzttermin. Was ist mit Sonntagnachmittag?\nAnna: Sonntag geht gut! Um wie viel Uhr?\nPeter: Wie wäre es mit 15 Uhr? Wir könnten ins Café Blau gehen — da ist es ruhig.\nAnna: Super! Und was bringen wir mit?\nPeter: Ich bringe den Kuchen. Du könntest vielleicht die Fotos mitbringen — wegen unseres letzten Urlaubs.\nAnna: Perfekt! Bis Sonntag dann!`,
      questions: [
        {
          q: 'Wann treffen sich Anna und Peter?',
          opts: ['a) Samstag Vormittag', 'b) Sonntag um 15 Uhr', 'c) Sonntag um 13 Uhr'],
          a: 1,
          exp: 'Peter schlägt vor: "Sonntagnachmittag... Um 15 Uhr?"'
        },
        {
          q: 'Was bringt Peter mit?',
          opts: ['a) Fotos', 'b) Getränke', 'c) Kuchen'],
          a: 2,
          exp: '"Ich bringe den Kuchen."'
        }
      ]
    },
    {
      id: 'H2',
      type: 'Hören Teil 2',
      title: 'Njoftim radio — Informacion publik',
      instruction: 'Lexo njoftimin dhe plotëso informacionin që mungon.',
      transcript: `[Radio-Durchsage im Bahnhof]\n"Achtung, eine wichtige Durchsage für unsere Fahrgäste: Der ICE 847 nach Hamburg Hauptbahnhof hat heute leider eine Verspätung von 25 Minuten. Die neue Abfahrtszeit ist 14:37 Uhr auf Gleis 7. Wir bitten alle Reisenden, sich auf dem Bahnsteig bereit zu halten. Reisende, die einen Anschluss haben, wenden sich bitte an den Informationsschalter in der Eingangshalle. Wir entschuldigen uns für die Unannehmlichkeiten."`,
      questions: [
        {
          q: 'Wie groß ist die Verspätung?',
          opts: ['a) 15 Minuten', 'b) 25 Minuten', 'c) 47 Minuten'],
          a: 1,
          exp: '"eine Verspätung von 25 Minuten"'
        },
        {
          q: 'Von welchem Gleis fährt der Zug ab?',
          opts: ['a) Gleis 4', 'b) Gleis 7', 'c) Gleis 14'],
          a: 1,
          exp: '"auf Gleis 7"'
        },
        {
          q: 'Wohin sollen Reisende mit Anschluss gehen?',
          opts: ['a) Zum Bahnsteig', 'b) Zum Informationsschalter', 'c) Zum Ausgang'],
          a: 1,
          exp: '"wenden sich bitte an den Informationsschalter in der Eingangshalle"'
        }
      ]
    }
  ],

  schreiben: [
    {
      id: 'S1',
      type: 'Schreiben Teil 1',
      title: 'Email formale — Letër ankese',
      instruction: 'Shkruaj email zyrtar (80–100 fjalë). Shembull i detyrës Goethe B1.',
      prompt: `Ju keni blerë laptop nga dyqani "TechShop". Pas 2 javësh, ekrani ka ndaluar së funksionuari. Shkruani email kompanisë. Shkruani:\n• Pse jeni duke shkruar\n• Cili është problemi\n• Çfarë dëshironi\n• Falënderim`,
      modelAnswer: `Betreff: Reklamation Laptop — Bestellnummer 4471\n\nSehr geehrte Damen und Herren,\n\nich schreibe Ihnen wegen eines Problems mit dem Laptop, den ich vor zwei Wochen in Ihrem Shop gekauft habe (Bestellnummer: 4471). Leider funktioniert der Bildschirm nicht mehr — er bleibt schwarz, obwohl der Laptop eingeschaltet ist.\n\nIch bitte Sie, das Gerät entweder zu reparieren oder mir ein neues Gerät zu schicken. Das Gerät ist noch innerhalb der Garantiezeit.\n\nIch freue mich auf Ihre Antwort.\n\nMit freundlichen Grüßen,\nDion Kelmendi`,
      checklist: [
        'Hyrja formale: "Sehr geehrte Damen und Herren,"',
        'Arsyeja e emailit e shprehur qartë',
        'Problemi i përshkruar me detaje',
        'Kërkesa konkrete (riparim/zëvendësim)',
        'Mbyllja formale: "Mit freundlichen Grüßen,"',
        'Gjatësia: 80–100 fjalë',
        'Ton formal gjatë gjithë emailit'
      ]
    },
    {
      id: 'S2',
      type: 'Schreiben Teil 2',
      title: 'Koment në forum — Jep mendimin tënd',
      instruction: 'Shkruaj koment në forum (80–100 fjalë). Shpreh mendimin tënd me argumente.',
      prompt: `Tema e forumit: "Sollten alle Bürger verpflichtet sein, mindestens ein Jahr Sozialarbeit zu leisten?"\n\nNjë anëtar ka shkruar: "Ja! Sozialdienst stärkt das Gemeinschaftsgefühl und lehrt Empathie."\n\nShkruaj komentin tënd (dakord ose jo dakord — me argumente). Përfshi:\n• Mendimin tënd\n• 2 argumente\n• Kundërargument (opsional)`,
      modelAnswer: `Ich finde diese Idee interessant, aber ich bin nicht vollständig einverstanden. Einerseits stimmt es, dass Sozialdienst das Gemeinschaftsgefühl stärkt und Empathie fördert — das sind wichtige Werte. Andererseits sollte soziales Engagement freiwillig sein, nicht erzwungen. Zwang kann zu negativen Einstellungen führen, die das Gegenteil bewirken. Ich glaube, bessere Lösung wäre, Freiwilligenarbeit attraktiver zu machen — zum Beispiel durch Anerkennung im Lebenslauf oder steuerliche Vorteile. Das würde wirklich motivierte Menschen ansprechen.\n\n(92 Wörter)`,
      checklist: [
        'Mendimi i qartë i shprehur në fillim',
        'Të paktën 2 argumente konkrete',
        'Përdorimi i lidhëzave: einerseits/andererseits, weil, deshalb',
        'Kundërargument ose alternativë (bonus)',
        'Mbyllja me qëndrim personal',
        'Gjatësia: 80–100 fjalë',
        'Ton natyral — jo shumë formal'
      ]
    }
  ],

  sprechen: [
    {
      id: 'SP1',
      type: 'Sprechen Teil 1',
      title: 'Prezantim mbi temë personale',
      instruction: 'Prezanto temën për 2 minuta. Shiko strukturën e sugjeruar.',
      topic: 'Tema: SPORT UND BEWEGUNG\nFol rreth sportit dhe aktivitetit fizik në jetën tënde.',
      structure: [
        { part: 'Fillimi', example: 'Ich möchte über Sport und Bewegung sprechen — ein Thema, das mir wichtig ist.' },
        { part: 'Situata jote', example: 'Ich treibe dreimal pro Woche Sport: ich laufe morgens und gehe zweimal ins Fitnessstudio.' },
        { part: 'Pse është e rëndësishme', example: 'Sport hilft mir, Stress abzubauen und konzentriert zu bleiben. Nach dem Sport fühle ich mich viel besser.' },
        { part: 'Ndryshim kulturor', example: 'In Albanien war Sport früher weniger verbreitet als hier. Jetzt sehe ich, dass Bewegung Teil des deutschen Alltags ist.' },
        { part: 'Mbyllja', example: 'Ich denke, jeder sollte regelmäßig Sport machen — für die Gesundheit und für das Wohlbefinden.' }
      ],
      tips: ['Fol me zë të qartë dhe ritëm normal', 'Mos memorizoja — fol natyrshëm', 'Lidhëzat bëjnë fjalinë të rrjedhshme', '2 minuta = rreth 250 fjalë']
    },
    {
      id: 'SP2',
      type: 'Sprechen Teil 2',
      title: 'Diskutim — Mbarro marrëveshje',
      instruction: 'Ju keni 3 minuta të diskutoni me partnerin dhe të arrini marrëveshje.',
      scenario: `Situata: Ti dhe shoku/shoqja jeni duke planifikuar festën e ditëlindjes për shokun tuaj të përbashkët.\nDuhet të vendosni:\n• Ku festoni (shtëpi, restorant, park)?\n• Sa persona ftoni?\n• Çfarë bëni (muzikë live, disko, lojëra)?\n• Kush organizon çfarë?`,
      phrases: [
        { cat: 'Propozim', de: 'Ich schlage vor, dass wir...', sq: 'Propozojë që ne...' },
        { cat: 'Pajtim', de: 'Das finde ich gut! / Einverstanden!', sq: 'Kjo më duket mirë! / Dakord!' },
        { cat: 'Kundërshtim', de: 'Ich bin nicht sicher, ob... / Wäre es nicht besser...?', sq: 'Nuk jam i sigurt nëse... / A nuk do të ishte më mirë...?' },
        { cat: 'Kompromis', de: 'Wie wäre es mit einem Kompromiss?', sq: 'Si do të ishte me kompromis?' },
        { cat: 'Marrëveshja', de: 'Also, wir sind uns einig, dass...', sq: 'Pra, jemi dakord që...' }
      ]
    },
    {
      id: 'SP3',
      type: 'Sprechen Teil 3',
      title: 'Foto — Përshkruaj dhe komento',
      instruction: 'Përshkruaj foton dhe jep mendimin tënd (1.5 minuta).',
      photoDesc: '[Foto: Dy njerëz në kuzhinë — një i moshuar dhe një i ri — po gatuajnë bashkë. Duket si gjysh dhe nip/mbesë. Ka shumë perime mbi tavolinë. Atmosferë e ngrohtë.]',
      modelAnswer: `Auf diesem Foto sehe ich zwei Menschen in einer Küche — wahrscheinlich einen älteren Mann und einen jungen Menschen, vielleicht Großvater und Enkel oder Enkelin. Sie kochen zusammen — auf dem Tisch liegen viele Gemüse. Die Atmosphäre wirkt warm und gemütlich.\n\nIch finde es schön, wenn verschiedene Generationen Zeit miteinander verbringen. Beim Kochen können ältere Menschen ihr Wissen und ihre Rezepte weitergeben. Gleichzeitig können Jüngere den Älteren mit moderner Technik helfen. Das stärkt die Familienbeziehung.\n\nIn meiner Familie hat meine Großmutter mir albanische Rezepte beigebracht. Das sind Erinnerungen, die ich nie vergessen werde.`,
      structure: ['Çfarë shoh', 'Kush janë njerëzit', 'Çfarë bëjnë', 'Atmosfera', 'Mendimi im personal', 'Lidhje me përvojën time']
    }
  ]
};

// ── GOETHE STATE
let goetheState = {
  tab: 'info',
  lesen: { current: 0, answers: {}, score: 0, done: false },
  hoeren: { current: 0, answers: {}, score: 0, done: false }
};

function showGoetheTest() {
  // Highlight the tab
  Array.from(document.querySelectorAll('.level-tab')).forEach(function(t){ t.classList.remove('active'); });
  var gt = document.getElementById('tabGoethe');
  if(gt){ gt.style.color='#e879f9'; gt.style.borderBottomColor='#e879f9'; }
  goetheState.tab = 'info';
  renderGoetheContent();
  showScreen('goetheTest');
}

function switchGoetheTab(tab) {
  goetheState.tab = tab;
  var tabs = ['info','lesen','hoeren','schreiben','sprechen'];
  tabs.forEach(function(t){
    var el = document.getElementById('gTab' + t.charAt(0).toUpperCase() + t.slice(1));
    if(!el) return;
    if(t === tab){ el.style.color='var(--gold)'; el.style.borderBottomColor='var(--gold)'; }
    else { el.style.color='var(--text-muted)'; el.style.borderBottomColor='transparent'; }
  });
  renderGoetheContent();
}

function renderGoetheContent() {
  var c = document.getElementById('goetheContent');
  if(!c) return;
  var tab = goetheState.tab;

  if(tab === 'info') {
    c.innerHTML = renderGoetheInfo();
    // Attach click handlers (avoids CSP inline onclick issues)
    var btnLesen = document.getElementById('goetheStartLesen');
    if(btnLesen) btnLesen.addEventListener('click', function(){ switchGoetheTab('lesen'); });
    var btnHoeren = document.getElementById('goetheStartHoeren');
    if(btnHoeren) btnHoeren.addEventListener('click', function(){ switchGoetheTab('hoeren'); });
    var btnSchreiben = document.getElementById('goetheStartSchreiben');
    if(btnSchreiben) btnSchreiben.addEventListener('click', function(){ switchGoetheTab('schreiben'); });
    var btnSprechen = document.getElementById('goetheStartSprechen');
    if(btnSprechen) btnSprechen.addEventListener('click', function(){ switchGoetheTab('sprechen'); });
    return;
  }
  if(tab === 'lesen') { c.innerHTML = renderGoetheLesen(); attachGoetheAnswers('lesen'); return; }
  if(tab === 'hoeren') { c.innerHTML = renderGoetheHoeren(); attachGoetheAnswers('hoeren'); return; }
  if(tab === 'schreiben') { c.innerHTML = renderGoetheSchreiben(); return; }
  if(tab === 'sprechen') { c.innerHTML = renderGoetheSprechen(); return; }
}

function attachGoetheAnswers(section) {
  var btns = document.querySelectorAll('[data-goethe-key]');
  Array.from(btns).forEach(function(btn) {
    btn.addEventListener('click', function() {
      var key = btn.getAttribute('data-goethe-key');
      var selected = parseInt(btn.getAttribute('data-goethe-sel'));
      var correct = parseInt(btn.getAttribute('data-goethe-cor'));
      answerGoethe(section, key, selected, correct);
    });
  });
}

function renderGoetheInfo() {
  var d = GOETHE_B1_DATA.info;
  var html = '<div style="margin-bottom:28px">' +
    '<div class="lesson-level-badge badge-b1" style="margin-bottom:12px">Certifikata Zyrtare B1</div>' +
    '<h2 class="lesson-title" style="color:var(--gold)">' + d.title + '</h2>' +
    '<p style="color:var(--text-muted);font-size:0.9rem;line-height:1.7;margin-bottom:24px">Provimi Goethe-Zertifikat B1 është provim ndërkombëtar i njohur që dëshmon aftësinë gjuhësore në nivel B1 sipas CEFR. Kjo ju hap dyer: punësim, studim, emigrim, dhe shtetësi gjermane.</p>' +
    '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:12px;margin-bottom:28px">' +
    d.sections.map(function(s){
      return '<div class="grammar-section" style="border-left:4px solid var(--gold)">' +
        '<h3 style="color:var(--gold);font-size:1rem">' + s.name + '</h3>' +
        '<p style="font-size:0.78rem;color:var(--text-muted);margin-bottom:6px">⏱️ ' + s.time + ' · 📊 ' + s.points + ' pikë</p>' +
        '<p style="font-size:0.82rem;color:var(--text-dim)">' + s.desc + '</p>' +
        '</div>';
    }).join('') +
    '</div>' +
    '<div class="grammar-section" style="border-left:4px solid var(--green);margin-bottom:20px">' +
    '<h3 style="color:var(--green)">📊 Nota Kaluese</h3>' +
    '<p style="font-size:0.9rem;color:var(--text)">' + d.passing + '</p>' +
    '</div>' +
    '<div class="grammar-section" style="border-left:4px solid var(--blue)">' +
    '<h3 style="color:var(--blue)">💡 Këshilla nga Ekspertët</h3>' +
    d.tips.map(function(t){ return '<div style="display:flex;gap:10px;margin-bottom:8px"><span style="color:var(--gold)">→</span><span style="font-size:0.88rem;color:var(--text-dim)">' + t + '</span></div>'; }).join('') +
    '</div>' +
    '<div class="btn-row" style="margin-top:20px">' +
    '<button class=\"btn\" id=\"goetheStartLesen\">Fillo me Leximin →</button>' +
    '</div>' +
    '</div>';
  return html;
}

function renderGoetheLesen() {
  var tests = GOETHE_B1_DATA.lesen;
  if (!tests || !tests.length) return '<p style="color:var(--text-muted)">Të dhënat nuk u ngarkuan.</p>';
  var html = '<div style="margin-bottom:16px"><p style="color:var(--text-muted);font-size:0.88rem">📖 <strong style="color:var(--text)">Lesen</strong> — ' + tests.length + ' detyra leximi sipas formatit të Goethe-Institut B1.</p></div>';

  tests.forEach(function(test, ti) {
    if (!test) return;
    html += '<div class="grammar-section" style="border-left:4px solid var(--blue);margin-bottom:24px">' +
      '<h3>' + (test.type || '') + ': ' + (test.title || '') + '</h3>' +
      '<p style="background:rgba(59,130,246,0.08);border-radius:8px;padding:12px;font-size:0.85rem;color:var(--text-dim);margin-bottom:16px;border:1px solid rgba(59,130,246,0.2)">📋 ' + (test.instruction || '') + '</p>';

    if (test.text) {
      html += '<div style="background:var(--surface2);border-radius:8px;padding:16px;margin-bottom:16px;border:1px solid var(--border);font-size:0.88rem;line-height:1.8;color:var(--text-dim)">' + test.text.replace(/\n/g,'<br>') + '</div>';
    }

    if (test.ads && test.ads.length) {
      html += '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:10px;margin-bottom:16px">' +
        test.ads.map(function(a){
          return '<div style="background:var(--surface2);border:1px solid var(--border);border-radius:8px;padding:12px">' +
            '<div style="font-weight:700;color:var(--gold);font-size:0.78rem;margin-bottom:4px">[' + (a.letter || '').toUpperCase() + ']</div>' +
            '<div style="font-weight:600;color:var(--text);font-size:0.85rem;margin-bottom:6px">' + (a.title || '') + '</div>' +
            '<div style="font-size:0.78rem;color:var(--text-muted)">' + (a.body || '') + '</div>' +
            '</div>';
        }).join('') +
      '</div>';
    }

    if (test.statements && test.statements.length) {
      html += '<div style="margin-bottom:16px">';
      test.statements.forEach(function(s, si) {
        html += '<div style="padding:8px 12px;background:var(--surface2);border-radius:6px;margin-bottom:6px;font-size:0.85rem;color:var(--text-dim)">' + (si+1) + '. ' + (s || '') + '</div>';
      });
      html += '</div>';
    }

    if (test.questions && test.questions.length) {
      test.questions.forEach(function(q, qi) {
        if (!q) return;
        var key = 'L'+ti+'Q'+qi;
        var answered = goetheState.lesen.answers[key] !== undefined;
        var userAns = goetheState.lesen.answers[key];
        html += '<div style="margin-bottom:16px;padding:14px;background:var(--surface2);border-radius:8px;border:1px solid var(--border)">' +
          '<p style="font-weight:600;color:var(--text);margin-bottom:10px;font-size:0.9rem">' + (qi+1) + '. ' + (q.q || '') + '</p>' +
          '<div style="display:flex;flex-direction:column;gap:6px">';
        if (q.opts && q.opts.length) {
          q.opts.forEach(function(opt, oi) {
            var isCorrect = oi === q.a;
            var isSelected = userAns === oi;
            var bg = '';
            if(answered && isCorrect) bg = 'background:rgba(34,197,94,0.15);border-color:var(--green);color:var(--green);';
            else if(answered && isSelected && !isCorrect) bg = 'background:rgba(239,68,68,0.15);border-color:var(--red);color:var(--red);';
            html += '<button onclick="answerGoethe(\'lesen\',\'' + key + '\',' + oi + ',' + (q.a||0) + ')" ' +
              (answered ? 'disabled ' : '') +
              'style="text-align:left;background:var(--surface3);border:2px solid var(--border);border-radius:6px;padding:10px 14px;color:var(--text-dim);cursor:pointer;font-family:DM Sans,sans-serif;font-size:0.85rem;' + bg + '">' +
              (opt || '') + '</button>';
          });
        }
        html += '</div>' +
          (answered ? '<div style="margin-top:10px;padding:10px;background:rgba(240,180,41,0.08);border-radius:6px;border:1px solid rgba(240,180,41,0.2);font-size:0.8rem;color:var(--text-dim)">💡 ' + (q.exp || '') + '</div>' : '') +
          '</div>';
      });
    } else {
      html += '<p style="color:var(--text-muted);font-size:0.85rem;padding:10px">Pyetjet për këtë detyra janë duke u përgatitur.</p>';
    }

    html += '</div>';
  });
  return html;
}


function renderGoetheHoeren() {
  var tests = GOETHE_B1_DATA.hoeren;
  var html = '<div style="margin-bottom:16px"><p style="color:var(--text-muted);font-size:0.88rem">🎧 <strong style="color:var(--text)">Hören</strong> — Lexo transkriptin (simulon dëgjimin) dhe përgjigju pyetjeve.</p></div>';

  tests.forEach(function(test, ti) {
    html += '<div class="grammar-section" style="border-left:4px solid var(--a2-color);margin-bottom:24px">' +
      '<h3 style="color:var(--a2-color)">' + test.type + ': ' + test.title + '</h3>' +
      '<p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:12px">📋 ' + test.instruction + '</p>' +
      '<div style="background:rgba(34,197,94,0.05);border:1px solid rgba(34,197,94,0.2);border-radius:8px;padding:16px;margin-bottom:16px">' +
      '<p style="font-size:0.72rem;letter-spacing:2px;color:var(--a2-color);text-transform:uppercase;margin-bottom:8px">🎧 Transkript (lexo me kujdes)</p>' +
      '<div style="font-size:0.85rem;color:var(--text-dim);line-height:1.8;white-space:pre-line">' + test.transcript + '</div>' +
      '</div>';

    if(!test.questions || !test.questions.length) { html += '<p style="color:var(--text-muted);font-size:0.88rem;padding:10px">Pyetjet janë duke u përgatitur.</p>'; } else
    test.questions.forEach(function(q, qi) {
      var key = 'H'+ti+'Q'+qi;
      var answered = goetheState.hoeren.answers[key] !== undefined;
      var userAns = goetheState.hoeren.answers[key];
      html += '<div style="margin-bottom:14px;padding:14px;background:var(--surface2);border-radius:8px;border:1px solid var(--border)">' +
        '<p style="font-weight:600;color:var(--text);margin-bottom:10px;font-size:0.9rem">' + (qi+1) + '. ' + q.q + '</p>' +
        '<div style="display:flex;flex-direction:column;gap:6px">' +
        q.opts.map(function(opt, oi) {
          var isCorrect = oi === q.a;
          var isSelected = userAns === oi;
          var bg = '';
          if(answered && isCorrect) bg = 'background:rgba(34,197,94,0.15);border-color:var(--green);color:var(--green);';
          else if(answered && isSelected && !isCorrect) bg = 'background:rgba(239,68,68,0.15);border-color:var(--red);color:var(--red);';
          return '<button onclick="answerGoethe(\'hoeren\',\'' + key + '\',' + oi + ',' + q.a + ')" ' +
            (answered ? 'disabled ' : '') +
            'style="text-align:left;background:var(--surface3);border:2px solid var(--border);border-radius:6px;padding:10px 14px;color:var(--text-dim);cursor:pointer;font-family:DM Sans,sans-serif;font-size:0.85rem;' + bg + '">' +
            opt + '</button>';
        }).join('') +
        '</div>' +
        (answered ? '<div style="margin-top:10px;padding:10px;background:rgba(240,180,41,0.08);border-radius:6px;font-size:0.8rem;color:var(--text-dim)">💡 ' + q.exp + '</div>' : '') +
        '</div>';
    });
    html += '</div>';
  });
  return html;
}

function renderGoetheSchreiben() {
  var tests = GOETHE_B1_DATA.schreiben;
  var html = '<div style="margin-bottom:16px"><p style="color:var(--text-muted);font-size:0.88rem">✍️ <strong style="color:var(--text)">Schreiben</strong> — Shkruaj tekstin tënd, pastaj krahaso me modelin.</p></div>';

  tests.forEach(function(test, ti) {
    var tid = 'sw_' + ti;
    html += '<div class="grammar-section" style="border-left:4px solid var(--gold);margin-bottom:28px">' +
      '<h3>' + test.type + ': ' + test.title + '</h3>' +
      '<div style="background:rgba(240,180,41,0.08);border:1px solid rgba(240,180,41,0.2);border-radius:8px;padding:16px;margin-bottom:16px">' +
      '<p style="font-size:0.78rem;color:var(--gold);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">📝 Detyra</p>' +
      '<div style="font-size:0.88rem;color:var(--text);line-height:1.7;white-space:pre-line">' + test.prompt + '</div>' +
      '</div>' +
      '<p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:8px">Shkruaj përgjigjen tënde (80–100 fjalë):</p>' +
      '<textarea id="' + tid + '" style="width:100%;min-height:160px;background:var(--surface2);border:2px solid var(--border);border-radius:8px;padding:14px;color:var(--text);font-family:DM Sans,sans-serif;font-size:0.88rem;resize:vertical;outline:none" placeholder="Shkruaj këtu..."></textarea>' +
      '<div style="text-align:right;margin-top:4px;font-size:0.75rem;color:var(--text-muted)" id="wc_'+ti+'">0 / 100 fjalë</div>' +
      '<scr'+'ipt>document.getElementById("'+tid+'").addEventListener("input",function(){var wc=this.value.trim().split(/\\s+/).filter(function(w){return w;}).length;document.getElementById("wc_'+ti+'").textContent=wc+" / 100 fjalë";});<\/script>' +
      '<details style="margin-top:16px">' +
      '<summary style="cursor:pointer;padding:10px;background:var(--surface2);border-radius:8px;font-size:0.85rem;color:var(--text-muted)">👁️ Shiko modelin (vetëm pasi ke shkruar vetë!)</summary>' +
      '<div style="margin-top:12px;background:rgba(34,197,94,0.05);border:1px solid rgba(34,197,94,0.2);border-radius:8px;padding:16px;font-size:0.85rem;color:var(--text-dim);white-space:pre-line;line-height:1.7">' + test.modelAnswer + '</div>' +
      '</details>' +
      '<div style="margin-top:16px;padding:14px;background:var(--surface2);border-radius:8px;border:1px solid var(--border)">' +
      '<p style="font-size:0.78rem;color:var(--gold);text-transform:uppercase;letter-spacing:1px;margin-bottom:10px">✅ Checklist — Kontrollo vetë</p>' +
      test.checklist.map(function(item){ return '<div style="display:flex;gap:8px;margin-bottom:6px;align-items:flex-start"><span style="color:var(--text-muted);font-size:1rem;flex-shrink:0">☐</span><span style="font-size:0.82rem;color:var(--text-dim)">' + item + '</span></div>'; }).join('') +
      '</div>' +
      '<div style="margin-top:12px">' +
      '<button onclick="submitWritingForAI(\'' + tid + '\', \'B1\', \''+test.prompt.replace(/\n/g,' ').substring(0,100)+'\')" style="padding:10px 18px;background:rgba(240,180,41,0.1);border:1px solid rgba(240,180,41,0.4);border-radius:8px;color:var(--gold);cursor:pointer;font-size:0.83rem;font-family:DM Sans,sans-serif">🤖 Merr feedback nga Claude AI</button>' +
      '</div>' +
      '<div id="' + tid + '_result"></div>' +
      '</div>';
  });
  return html;
}

function renderGoetheSprechen() {
  var tasks = GOETHE_B1_DATA.sprechen || [];
  if (!tasks.length) return '<p style="color:var(--text-muted);padding:20px">Duke u ngarkuar...</p>';

  var html = '<div style="margin-bottom:16px"><p style="color:var(--text-muted);font-size:0.88rem">🗣️ <strong style="color:var(--text)">Sprechen</strong> — ' + tasks.length + ' detyra fjalimi sipas formatit Goethe B1.</p></div>';

  tasks.forEach(function(task, ti) {
    if (!task) return;
    html += '<div class="grammar-section" style="border-left:4px solid var(--b1-color);margin-bottom:24px">';
    html += '<div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">';
    html += '<div style="font-size:1.3rem">🎤</div>';
    html += '<div><div style="font-size:0.72rem;color:var(--b1-color);text-transform:uppercase;letter-spacing:1px">' + (task.type || '') + '</div>';
    html += '<h3 style="color:var(--text);margin:2px 0">' + (task.title || '') + '</h3></div></div>';

    html += '<div style="background:var(--surface);border-radius:10px;padding:14px;margin-bottom:14px;border-left:3px solid var(--gold)">';
    html += '<p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:6px;font-style:italic">📋 Udhëzimi:</p>';
    html += '<p style="font-size:0.88rem;color:var(--text);line-height:1.7">' + (task.instruction || '') + '</p></div>';

    // topic (singular)
    if (task.topic) {
      html += '<div style="background:var(--surface);border-radius:10px;padding:14px;margin-bottom:12px">';
      html += '<p style="font-size:0.85rem;color:var(--text);margin-bottom:10px">' + (task.topic || '') + '</p></div>';
    }

    // structure (array of strings)
    if (task.structure && task.structure.length) {
      html += '<div style="margin-bottom:12px"><p style="font-size:0.75rem;color:var(--text-muted);text-transform:uppercase;margin-bottom:6px">📐 Struktura:</p>';
      task.structure.forEach(function(s) {
        html += '<div style="padding:5px 8px;border-bottom:1px solid var(--border);font-size:0.83rem;color:var(--text)">' + (s || '') + '</div>';
      });
      html += '</div>';
    }

    // tips
    if (task.tips && task.tips.length) {
      html += '<div style="margin-bottom:12px"><p style="font-size:0.75rem;color:var(--text-muted);text-transform:uppercase;margin-bottom:6px">💡 Këshilla:</p>';
      task.tips.forEach(function(t) {
        html += '<div style="padding:4px 8px;background:rgba(240,180,41,0.08);border-radius:6px;margin-bottom:4px;font-size:0.82rem;color:var(--text)">' + (t || '') + '</div>';
      });
      html += '</div>';
    }

    // scenario
    if (task.scenario) {
      var s = task.scenario;
      html += '<div style="background:var(--surface);border-radius:10px;padding:14px;margin-bottom:12px">';
      html += '<h4 style="color:var(--a2-color);margin-bottom:8px">📝 ' + (s.title || 'Skenar') + '</h4>';
      html += '<p style="font-size:0.85rem;color:var(--text);margin-bottom:10px;line-height:1.6">' + (s.situation || '') + '</p>';
      if (s.cards && s.cards.length) {
        html += '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:8px">';
        s.cards.forEach(function(card) {
          html += '<div style="background:var(--surface2);border-radius:8px;padding:10px;border:1px solid var(--border)">';
          html += '<div style="font-size:0.78rem;font-weight:600;color:var(--gold);margin-bottom:4px">' + (card.label || '') + '</div>';
          html += '<div style="font-size:0.82rem;color:var(--text)">' + (card.content || '') + '</div></div>';
        });
        html += '</div>';
      }
      if (s.phrases && s.phrases.length) {
        html += '<div style="margin-top:10px">';
        s.phrases.forEach(function(p) {
          html += '<div style="padding:4px 8px;background:rgba(240,180,41,0.08);border-radius:6px;margin-bottom:4px;font-size:0.82rem;color:var(--text)">' + (p || '') + '</div>';
        });
        html += '</div>';
      }
      html += '</div>';
    }

    // phrases (top level)
    if (task.phrases && task.phrases.length) {
      html += '<div style="margin-bottom:12px"><p style="font-size:0.75rem;color:var(--text-muted);text-transform:uppercase;margin-bottom:6px">💬 Shprehje:</p>';
      task.phrases.forEach(function(p) {
        html += '<div style="padding:4px 8px;background:rgba(240,180,41,0.08);border-radius:6px;margin-bottom:4px;font-size:0.82rem;color:var(--text)">' + (p || '') + '</div>';
      });
      html += '</div>';
    }

    // photoDesc
    if (task.photoDesc) {
      html += '<div style="background:var(--surface);border-radius:10px;padding:14px;margin-bottom:12px">';
      html += '<p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:8px;font-style:italic">🖼️ Përshkrim fotografie:</p>';
      html += '<p style="font-size:0.88rem;color:var(--text);line-height:1.7">' + (task.photoDesc || '') + '</p></div>';
    }

    // modelAnswer
    if (task.modelAnswer) {
      html += '<div style="background:rgba(34,197,94,0.05);border:1px solid rgba(34,197,94,0.2);border-radius:10px;padding:14px;margin-bottom:12px">';
      html += '<p style="font-size:0.75rem;color:var(--green);text-transform:uppercase;margin-bottom:6px">✅ Model-përgjigje:</p>';
      html += '<p style="font-size:0.85rem;color:var(--text);line-height:1.7;font-style:italic">' + (task.modelAnswer || '') + '</p></div>';
    }

    html += '</div>';
  });

  return html;
}


function answerGoethe(section, key, selected, correct) {
  if(goetheState[section].answers[key] !== undefined) return;
  goetheState[section].answers[key] = selected;
  if(selected === correct) goetheState[section].score++;
  renderGoetheContent();
}


// ════════════════════════════════════════════
// GRAMMAR SCREEN FUNCTIONS
// ════════════════════════════════════════════

var grammarState = {
  level: 'A1',
  currentId: 'a1g1',
  exerciseAnswers: {}
};

function showGrammarScreen() {
  Array.from(document.querySelectorAll('.level-tab')).forEach(function(t){ t.classList.remove('active'); });
  var gt = document.getElementById('tabGrammar');
  if(gt){ gt.style.color='#34d399'; gt.style.borderBottomColor='#34d399'; }
  grammarState.level = 'A1';
  grammarState.currentId = 'a1g1';
  renderGrammarSidebar();
  renderGrammarTopic('a1g1');
  showScreen('grammarScreen');
}

function switchGrammarLevel(level) {
  grammarState.level = level;
  ['A1','A2','B1'].forEach(function(l){
    var el = document.getElementById('grmTab'+l);
    if(!el) return;
    if(l === level) el.classList.add('active');
    else el.classList.remove('active');
  });
  var topics = GRAMMAR_DB[level];
  if(topics && topics.length > 0) {
    grammarState.currentId = topics[0].id;
    renderGrammarSidebar();
    renderGrammarTopic(topics[0].id);
  }
}

function renderGrammarSidebar() {
  var sb = document.getElementById('grammarSidebar');
  if(!sb) return;
  var topics = GRAMMAR_DB[grammarState.level] || [];
  sb.innerHTML = '<div style="padding:8px 16px 4px;font-size:0.7rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:1.5px">' +
    'Nivel ' + grammarState.level + '</div>' +
    topics.map(function(t){
      var active = t.id === grammarState.currentId;
      return '<div onclick="renderGrammarTopic(\'' + t.id + '\')" style="padding:10px 16px;cursor:pointer;border-left:3px solid ' +
        (active ? 'var(--gold)' : 'transparent') + ';background:' + (active ? 'rgba(240,180,41,0.08)' : 'transparent') +
        ';margin-bottom:2px;transition:all 0.15s">' +
        '<div style="font-size:0.82rem;' + (active ? 'color:var(--gold);font-weight:600' : 'color:var(--text-dim)') + '">' +
        t.icon + ' ' + t.title + '</div>' +
        '</div>';
    }).join('');
}

function renderGrammarTopic(id) {
  grammarState.currentId = id;
  renderGrammarSidebar();
  
  var topic = null;
  ['A1','A2','B1'].forEach(function(l){
    (GRAMMAR_DB[l]||[]).forEach(function(t){ if(t.id === id) topic = t; });
  });
  if(!topic) return;
  
  var c = document.getElementById('grammarContent');
  if(!c) return;
  
  // Find prev/next
  var allTopics = [].concat(GRAMMAR_DB.A1||[], GRAMMAR_DB.A2||[], GRAMMAR_DB.B1||[]);
  var idx = allTopics.findIndex(function(t){ return t.id === id; });
  var prev = idx > 0 ? allTopics[idx-1] : null;
  var next = idx < allTopics.length-1 ? allTopics[idx+1] : null;
  
  var levelColor = topic.level==='A1' ? 'var(--a1-color)' : topic.level==='A2' ? 'var(--a2-color)' : 'var(--b1-color)';
  
  var html = '<div style="margin-bottom:8px">' +
    '<span class="lesson-level-badge badge-' + topic.level.toLowerCase() + '">' + topic.level + '</span>' +
    '</div>' +
    '<h1 style="font-size:1.6rem;color:var(--text);margin-bottom:8px">' + topic.icon + ' ' + topic.title + '</h1>' +
    
    // Explanation box
    '<div style="background:rgba(240,180,41,0.06);border:1px solid rgba(240,180,41,0.2);border-radius:12px;padding:18px 20px;margin-bottom:24px">' +
    '<p style="font-size:0.92rem;color:var(--text);line-height:1.8">' + topic.explanation + '</p>' +
    '</div>' +
    
    // Rules
    '<h3 style="color:' + levelColor + ';margin-bottom:12px">📋 Rregullat</h3>' +
    '<div style="display:grid;gap:8px;margin-bottom:24px">' +
    topic.rules.map(function(r){
      return '<div style="background:var(--surface2);border-radius:8px;padding:12px 16px;border-left:3px solid ' + levelColor + '">' +
        '<div style="font-family:JetBrains Mono,monospace;color:var(--gold);font-size:0.88rem;margin-bottom:4px">' + r.rule + '</div>' +
        (r.note ? '<div style="font-size:0.8rem;color:var(--text-muted);font-style:italic">' + r.note + '</div>' : '') +
        '</div>';
    }).join('') +
    '</div>' +
    
    // Examples
    '<h3 style="color:' + levelColor + ';margin-bottom:12px">💬 Shembuj</h3>' +
    '<div style="display:grid;gap:10px;margin-bottom:28px">' +
    topic.examples.map(function(e){
      return '<div style="background:var(--surface2);border-radius:8px;padding:14px 16px">' +
        '<div style="font-size:0.95rem;color:var(--text);margin-bottom:4px">' + e.de + ' <button class="tts-btn" data-de="' + (e.de||'').replace(/"/g,"&quot;") + '" onclick="TTS.speak(this.dataset.de)" style="background:none;border:none;cursor:pointer;font-size:0.83rem;padding:1px 4px;color:var(--gold);opacity:0.7">🔊</button></div>' +
        '<div style="font-size:0.82rem;color:var(--text-muted);font-style:italic">' + e.sq + '</div>' +
        '</div>';
    }).join('') +
    '</div>' +
    
    // Exercises
    '<h3 style="color:' + levelColor + ';margin-bottom:12px">✏️ Ushtrime</h3>' +
    '<div id="exercises_' + id + '">' +
    renderGrammarExercises(topic) +
    '</div>' +
    
    // Navigation
    '<div style="display:flex;gap:12px;margin-top:32px;padding-top:20px;border-top:1px solid var(--border)">' +
    (prev ? '<button class="btn-outline" onclick="renderGrammarTopic(\'' + prev.id + '\')" style="flex:1">← ' + prev.title + '</button>' : '<div style="flex:1"></div>') +
    (next ? '<button class="btn" onclick="renderGrammarTopic(\'' + next.id + '\')" style="flex:1">' + next.title + ' →</button>' : '') +
    '</div>';
    
  c.innerHTML = html;
  c.scrollTop = 0;
}

function renderGrammarExercises(topic) {
  var exercises = topic.exercises || [];
  var html = '<div style="display:grid;gap:14px">';
  
  exercises.forEach(function(ex, i) {
    var key = topic.id + '_ex' + i;
    var answered = grammarState.exerciseAnswers[key];
    
    html += '<div style="background:var(--surface2);border-radius:10px;padding:16px;border:2px solid ' + (answered ? (answered === ex.ans ? 'var(--green)' : 'var(--red)') : 'var(--border)') + '">';
    html += '<p style="font-size:0.88rem;color:var(--text);margin-bottom:10px;font-weight:500">' + (i+1) + '. ' + ex.q + '</p>';
    
    if(ex.type === 'fill' && ex.opts) {
      html += '<div style="display:flex;flex-wrap:wrap;gap:8px">';
      ex.opts.forEach(function(opt) {
        var isCorrect = opt === ex.ans;
        var isSelected = answered === opt;
        var bg = answered ? (isCorrect ? 'background:rgba(34,197,94,0.15);border-color:var(--green);color:var(--green)' : (isSelected ? 'background:rgba(239,68,68,0.15);border-color:var(--red);color:var(--red)' : 'opacity:0.5')) : '';
        html += '<button onclick="checkGrammarAnswer(\'' + key + '\',\'' + opt.replace(/'/g,"&#39;") + '\',\'' + ex.ans.replace(/'/g,"&#39;") + '\',\'' + topic.id + '\')" ' +
          (answered ? 'disabled ' : '') +
          'style="padding:8px 14px;background:var(--surface3);border:2px solid var(--border);border-radius:6px;color:var(--text-dim);cursor:pointer;font-family:\'DM Sans\',sans-serif;font-size:0.85rem;' + bg + '">' + opt + '</button>';
      });
      html += '</div>';
    } else if(ex.type === 'translate' || ex.type === 'reorder') {
      html += '<p style="font-size:0.8rem;color:var(--text-muted);font-style:italic;margin-top:6px">💡 Përgjigja: ' + (answered ? '<span style="color:var(--green)">' + ex.ans + '</span>' : '<span onclick="revealGrammarAnswer(\'' + key + '\',\'' + ex.ans.replace(/'/g,"&#39;").replace(/"/g,'&quot;') + '\')" style="color:var(--gold);cursor:pointer;text-decoration:underline">Shfaq</span>') + '</p>';
    }
    
    if(answered) {
      html += '<p style="font-size:0.78rem;color:' + (answered === ex.ans ? 'var(--green)' : 'var(--red)') + ';margin-top:8px">' +
        (answered === ex.ans ? '✅ Saktë!' : '❌ Gabim. Saktë: ' + ex.ans) + '</p>';
    }
    html += '</div>';
  });
  
  html += '</div>';
  return html;
}

function checkGrammarAnswer(key, selected, correct, topicId) {
  grammarState.exerciseAnswers[key] = selected;
  renderGrammarTopic(topicId);
}

function revealGrammarAnswer(key, ans) {
  grammarState.exerciseAnswers[key] = ans;
  var c = document.getElementById('grammarContent');
  if(c) {
    // Re-render just the exercises section
    var topic = null;
    ['A1','A2','B1'].forEach(function(l){
      (GRAMMAR_DB[l]||[]).forEach(function(t){ if(t.id === grammarState.currentId) topic = t; });
    });
    if(topic) renderGrammarTopic(topic.id);
  }
}



// ════════════════════════════════════════════
// FLASHCARD SRS SYSTEM
// ════════════════════════════════════════════
var fcState = {
  level: 'A1',
  cards: [],
  index: 0,
  flipped: false,
  session: { correct: 0, wrong: 0, total: 0 },
  known: {},
  toReview: []
};

function showFlashcards() {
  startFlashcards('A1');
  showScreen('flashcardScreen');
}

function startFlashcards(level) {
  fcState.level = level;
  Array.from(document.querySelectorAll('[id^="fcTab"]')).forEach(function(t){ t.classList.remove('active'); });
  var tab = document.getElementById('fcTab'+level);
  if(tab) tab.classList.add('active');

  buildAllVocab();
  var words = level === 'ALL'
    ? [].concat(ALL_VOCAB.A1||[], ALL_VOCAB.A2||[], ALL_VOCAB.B1||[])
    : (ALL_VOCAB[level]||[]);

  // Shuffle
  var shuffled = words.slice().sort(function(){ return Math.random()-0.5; });
  // Prioritize unknown/wrong
  fcState.cards = shuffled.slice(0, 30); // session of 30 cards
  fcState.index = 0;
  fcState.flipped = false;
  fcState.session = { correct: 0, wrong: 0, total: fcState.cards.length };
  renderFlashcard();
  showScreen('flashcardScreen');
}

function renderFlashcard() {
  var c = document.getElementById('flashcardContent');
  if(!c) return;

  if(fcState.index >= fcState.cards.length) {
    // Session complete
    var pct = Math.round(fcState.session.correct / fcState.session.total * 100);
    c.innerHTML =
      '<div style="text-align:center;max-width:480px">' +
      '<div style="font-size:4rem;margin-bottom:16px">' + (pct >= 70 ? '🎉' : pct >= 40 ? '💪' : '📚') + '</div>' +
      '<h2 style="color:var(--gold);margin-bottom:8px">Sesioni i mbaruar!</h2>' +
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:20px 0">' +
      '<div style="background:rgba(34,197,94,0.1);border:1px solid var(--green);border-radius:12px;padding:16px;text-align:center">' +
      '<div style="font-size:2rem;color:var(--green);font-weight:700">' + fcState.session.correct + '</div>' +
      '<div style="font-size:0.8rem;color:var(--text-muted)">Saktë</div></div>' +
      '<div style="background:rgba(239,68,68,0.1);border:1px solid var(--red);border-radius:12px;padding:16px;text-align:center">' +
      '<div style="font-size:2rem;color:var(--red);font-weight:700">' + fcState.session.wrong + '</div>' +
      '<div style="font-size:0.8rem;color:var(--text-muted)">Gabim</div></div>' +
      '</div>' +
      '<div style="background:var(--surface2);border-radius:12px;padding:16px;margin-bottom:20px">' +
      '<div style="font-size:2.5rem;font-weight:700;color:var(--gold)">' + pct + '%</div>' +
      '<div style="font-size:0.85rem;color:var(--text-muted)">' + (pct >= 70 ? 'Shkëlqyer! 🌟' : pct >= 40 ? 'Mirë, vazhdo! 💪' : 'Rishiko dhe provo sërish 📚') + '</div>' +
      '</div>' +
      '<div style="display:flex;gap:12px">' +
      '<button class="btn-outline" onclick="startFlashcards(\'' + fcState.level + '\')" style="flex:1">🔄 Seri e re</button>' +
      '<button class="btn" onclick="showScreen(\'course\')" style="flex:1">← Vazhdo mësimin</button>' +
      '</div></div>';
    return;
  }

  var card = fcState.cards[fcState.index];
  var progress = fcState.index + 1;
  var total = fcState.cards.length;
  var pct = Math.round((fcState.index / total) * 100);

  c.innerHTML =
    // Progress bar
    '<div style="width:100%;max-width:520px">' +
    '<div style="display:flex;justify-content:space-between;font-size:0.78rem;color:var(--text-muted);margin-bottom:6px">' +
    '<span>Kartela ' + progress + ' / ' + total + '</span>' +
    '<span>✅ ' + fcState.session.correct + ' &nbsp; ❌ ' + fcState.session.wrong + '</span>' +
    '</div>' +
    '<div style="height:4px;background:var(--surface2);border-radius:2px;margin-bottom:24px">' +
    '<div style="height:4px;background:var(--gold);border-radius:2px;width:' + pct + '%"></div>' +
    '</div>' +

    // Card
    '<div id="flashcard" onclick="flipCard()" style="background:var(--surface);border:2px solid var(--border);border-radius:20px;padding:40px 32px;text-align:center;cursor:pointer;min-height:220px;display:flex;flex-direction:column;align-items:center;justify-content:center;transition:all 0.3s;user-select:none;box-shadow:0 4px 24px rgba(0,0,0,0.15)">' +
    '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">' +
    '<span style="font-size:0.72rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:2px">' + (fcState.flipped ? 'SHQIP' : 'GJERMANISHT') + '</span>' +
    (function(){var c=fcState.cards[fcState.index];var id=(c&&c.de||'').replace(/\s/g,'_');var box=LEITNER.getBox(id);var colors=['#6b7280','#ef4444','#f97316','#eab308','#22c55e','#3b82f6'];return '<span style="font-size:0.7rem;padding:2px 8px;border-radius:10px;background:rgba(255,255,255,0.08);color:'+colors[box]+'">Box '+box+'/5</span>';}()) +
    '</div>' +
    '<div style="font-size:2rem;font-weight:700;color:' + (fcState.flipped ? 'var(--a2-color)' : 'var(--gold)') + ';margin-bottom:' + (fcState.flipped ? '8px' : '12px') + '">' +
    (fcState.flipped ? card.sq : card.de) +
    '</div>' +
    (fcState.flipped
      ? '<div style="font-size:0.82rem;color:var(--text-muted);font-style:italic;margin-bottom:8px">' + (card.ex||'') + '</div>' +
        '<div style="font-size:0.72rem;color:var(--text-muted);margin-top:8px">📌 ' + (card.type||'') + (card.source ? ' · '+card.source : '') + '</div>'
      : '<div style="font-size:0.82rem;color:var(--text-muted)">Kliko për të parë përkthimin</div>'
    ) +
    '</div>' +

    // Action buttons (only when flipped)
    (fcState.flipped ?
      '<div style="display:flex;gap:14px;margin-top:20px;width:100%">' +
      '<button onclick="rateCard(false)" style="flex:1;padding:14px;background:rgba(239,68,68,0.1);border:2px solid var(--red);border-radius:12px;color:var(--red);font-size:1rem;cursor:pointer;font-weight:600;font-family:DM Sans,sans-serif">❌ Nuk e dija</button>' +
      '<button onclick="rateCard(true)" style="flex:1;padding:14px;background:rgba(34,197,94,0.1);border:2px solid var(--green);border-radius:12px;color:var(--green);font-size:1rem;cursor:pointer;font-weight:600;font-family:DM Sans,sans-serif">✅ E dija</button>' +
      '</div>'
      : '<button onclick="flipCard()" style="padding:10px 24px;background:var(--surface2);border:1px solid var(--border);border-radius:10px;color:var(--text-muted);cursor:pointer;font-family:DM Sans,sans-serif;margin-top:16px">👆 Shfletokliko kartelën</button>'
    ) +
    '</div>';
}

function flipCard() {
  fcState.flipped = !fcState.flipped;
  renderFlashcard();
}

function rateCard(correct) {
  var card = fcState.cards[fcState.index];
  var wordId = (card.de||'').replace(/[\s]+/g,'_');
  var newBox = LEITNER.updateCard(wordId, correct);

  if(correct) {
    fcState.session.correct++;
  } else {
    fcState.session.wrong++;
    // Re-add wrong cards (max 45 total)
    if(fcState.cards.length < 45) {
      fcState.cards.push(fcState.cards[fcState.index]);
      fcState.session.total++;
    }
  }
  fcState.index++;
  fcState.flipped = false;
  renderFlashcard();
}



// ── DARK / LIGHT MODE ──
function toggleDarkMode() {
  document.body.classList.toggle('light-mode');
  var isDark = !document.body.classList.contains('light-mode');
  var btn = document.getElementById('darkModeBtn');
  if(btn) btn.textContent = isDark ? '☀️' : '🌙';
  try { localStorage.setItem('theme', isDark ? 'dark' : 'light'); } catch(e){}
}
function initTheme() {
  try {
    var saved = localStorage.getItem('theme');
    if(saved === 'light') {
      document.body.classList.add('light-mode');
      var btn = document.getElementById('darkModeBtn');
      if(btn) btn.textContent = '🌙';
    }
  } catch(e){}
}



// ════════════════════════════════════════════════════════════════
// DEUTSCHAL — UPGRADE v12
// 1. TTS Audio (Web Speech API) — çdo fjalë dhe dialog
// 2. Claude AI Chatbot — bisedë e lirë gjermanisht me feedback
// 3. 5 teste Lesen të plota (350-400 fjalë secila)
// 4. Flashcard SRS me algoritëm Leitner real
// 5. Timer real për Goethe B1 (65+40+60+15 min)
// 6. Tekste autentike + ushtrime Hören (transkript + pyetje)
// ════════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────
// 1. TTS AUDIO ENGINE
// ─────────────────────────────────────────────────────────────

const TTS = {
  rate: 0.82,
  voice: null,
  speaking: false,
  _lastText: null,

  init: function() {
    if (!window.speechSynthesis) return;
    var self = this;
    function loadVoices() {
      var voices = speechSynthesis.getVoices();
      // Prefer female German voices
      var femaleKeywords = ['female','Female','Anna','Petra','Greta','Steffi','Vicki','Martha','Sabrina','Hedda','Katja'];
      self.voice =
        voices.find(function(v){ return v.lang==='de-DE' && femaleKeywords.some(function(k){return v.name.indexOf(k)>=0;}); }) ||
        voices.find(function(v){ return v.lang==='de-DE' && v.name.indexOf('Google')>=0; }) ||
        voices.find(function(v){ return v.lang==='de-DE'; }) ||
        voices.find(function(v){ return v.lang.indexOf('de')===0; }) || null;
      var el = document.getElementById('ttsVoiceStatus');
      if (el) el.textContent = self.voice ? '🔊 ' + self.voice.name.split(' ')[0] : '🔊 Zë standard';
    }
    loadVoices();
    if (speechSynthesis.onvoiceschanged !== undefined) speechSynthesis.onvoiceschanged = loadVoices;
    setTimeout(loadVoices, 800);
    setTimeout(loadVoices, 2000);
  },

  speak: function(text, onEnd) {
    if (!window.speechSynthesis || !text) return;
    // Toggle: if already speaking same text, stop
    var clean = text.replace(/🔊/g,'').replace(/\s+/g,' ').trim();
    if (this.speaking && this._lastText === clean) {
      this.stop();
      return;
    }
    speechSynthesis.cancel();
    this._lastText = clean;
    this.speaking = true;
    var self = this;
    var utt = new SpeechSynthesisUtterance(clean);
    utt.lang = 'de-DE';
    utt.rate = this.rate;
    utt.pitch = 1.0;
    if (this.voice) utt.voice = this.voice;
    utt.onend = function(){ self.speaking = false; self._lastText = null; if(onEnd) onEnd(); };
    utt.onerror = function(){ self.speaking = false; self._lastText = null; };
    speechSynthesis.speak(utt);
  },

  stop: function() {
    if (window.speechSynthesis) speechSynthesis.cancel();
    this.speaking = false;
  },

  setRate: function(v) {
    this.rate = parseFloat(v);
    Array.from(document.querySelectorAll('.ttsRateLbl')).forEach(function(el){ el.textContent = parseFloat(v).toFixed(1)+'x'; });
  },

  // Play all dialogue lines in sequence
  playLines: function(lines, idx) {
    if (!lines || idx >= lines.length) {
      this.speaking = false;
      var btn = document.getElementById('storyPlayBtn');
      if (btn) btn.textContent = '▶ Dëgjo Dialogun';
      return;
    }
    var self = this;
    var line = lines[idx];
    if (!line || !line.de) { this.playLines(lines, idx+1); return; }
    this.speak(line.de, function(){ setTimeout(function(){ self.playLines(lines, idx+1); }, 500); });
  },

  playStory: function() {
    var mod = getCurrentModule();
    if (!mod || !mod.story) return;
    var lines = mod.story.lines.filter(function(l){ return l.type==='line' && l.de; });
    var btn = document.getElementById('storyPlayBtn');
    if (this.speaking) {
      this.stop();
      if (btn) btn.textContent = '▶ Dëgjo Dialogun';
    } else {
      this.speaking = true;
      if (btn) btn.textContent = '⏹ Stop';
      this.playLines(lines, 0);
    }
  },

  // Simple button
  btn: function(text, size) {
    // Use data-text attribute to avoid quote escaping issues
    return '<button class="tts-btn" data-de="' + text.replace(/"/g,'&quot;') + '" onclick="TTS.speak(this.dataset.de)" style="background:none;border:none;cursor:pointer;font-size:'+(size||'0.85rem')+';padding:1px 4px;color:var(--gold);opacity:0.7;vertical-align:middle" title="Dëgjo gjermanisht">🔊</button>';
  }
};

// ─────────────────────────────────────────────────────────────
// 2. CHATBOT CLAUDE — Bisedë gjermanisht me feedback
// ─────────────────────────────────────────────────────────────

const CHATBOT = {
  history: [],
  level: 'B1',
  mode: 'conversation', // conversation | correction | roleplay

  systemPrompt: function() {
    const level = this.level;
    const modes = {
      conversation: `Du bist ein freundlicher Deutschlehrer für albanische Lernende. Führe ein natürliches Gespräch auf ${level}-Niveau.
REGELN:
- Antworte IMMER auf Deutsch
- Verwende Vokabular passend für ${level}
- Nach JEDER Antwort des Lernenden: korrigiere Fehler freundlich in [KORREKTUR: ...] Klammern
- Stelle IMMER eine Folgefrage um das Gespräch am Laufen zu halten
- Sei warm, ermutigend und geduldig
- Format: Deine Antwort auf Albanisch übersetzen in (Shqip: ...) wenn der Lernende wirklich nicht versteht`,

      correction: `Du bist ein Deutschlehrer-Assistent. Der Lernende schickt dir deutsche Texte/Sätze.
DEINE AUFGABE:
1. Korrigiere ALLE Fehler (Grammatik, Vokabular, Stil)
2. Erkläre jeden Fehler kurz auf Albanisch
3. Gib die verbesserte Version
Format:
❌ Original: [was der Lernende geschrieben hat]
✅ Korrektur: [die richtige Version]
📝 Erklärung: [kurze Erklärung auf Albanisch warum]
Sei immer ermutigend!`,

      roleplay: `Du spielst verschiedene Rollen in deutschen Alltagssituationen.
Aktuelle Rolle: Gesprächspartner in einer Alltagssituation.
REGELN:
- Bleibe immer in der Rolle
- Spreche natürliches Deutsch
- Nach dem Dialog: gib kurzes Feedback auf Albanisch [Feedback: ...]
- Passe Schwierigkeit an ${level} an`
    };
    return modes[this.mode] || modes.conversation;
  },

  starters: {
    conversation: [
      'Hallo! Erzähl mir etwas über dich. Woher kommst du und warum lernst du Deutsch?',
      'Guten Tag! Was hast du heute gemacht?',
      'Hallo! Was sind deine Hobbys und was machst du in deiner Freizeit?',
      'Stell dir vor, du bist gerade in Berlin angekommen. Wie fühlst du dich?',
      'Hallo! Was ist dein Lieblingsgericht und kannst du es beschreiben?'
    ],
    correction: 'Schreib einen deutschen Satz oder Text — ich korrigiere alles und erkläre die Fehler!',
    roleplay: 'Lass uns eine Situation üben! Zum Beispiel: Du bist im Restaurant, beim Arzt, auf der Bank oder im Vorstellungsgespräch. Was möchtest du üben?'
  }
};

function showChatbot() {
  CHATBOT.history = [];
  CHATBOT.level = state.currentLevel || 'B1';
  renderChatbotScreen();
  showScreen('chatbotScreen');
}

function renderChatbotScreen() {
  const c = document.getElementById('chatbotContent');
  if (!c) return;
  c.innerHTML = `
    <div style="display:flex;flex-direction:column;height:100%">
      <!-- Mode & Level selector -->
      <div style="padding:16px 20px;background:var(--surface);border-bottom:1px solid var(--border);display:flex;gap:10px;flex-wrap:wrap;align-items:center">
        <div style="display:flex;gap:6px">
          ${['conversation','correction','roleplay'].map(m => `
            <button onclick="setChatMode('${m}')" style="padding:6px 14px;border-radius:20px;border:2px solid ${CHATBOT.mode===m?'var(--gold)':'var(--border)'};background:${CHATBOT.mode===m?'rgba(240,180,41,0.15)':'transparent'};color:${CHATBOT.mode===m?'var(--gold)':'var(--text-muted)'};cursor:pointer;font-size:0.78rem;font-family:DM Sans,sans-serif;font-weight:${CHATBOT.mode===m?'600':'400'}">
              ${{conversation:'💬 Bisedë',correction:'✏️ Korrigjim',roleplay:'🎭 Role-play'}[m]}
            </button>`).join('')}
        </div>
        <div style="display:flex;gap:4px;margin-left:auto">
          ${['A1','A2','B1'].map(l => `
            <button onclick="setChatLevel('${l}')" style="padding:4px 12px;border-radius:16px;border:2px solid ${CHATBOT.level===l?'var(--gold)':'var(--border)'};background:${CHATBOT.level===l?'rgba(240,180,41,0.15)':'transparent'};color:${CHATBOT.level===l?'var(--gold)':'var(--text-muted)'};cursor:pointer;font-size:0.75rem;font-family:DM Sans,sans-serif">${l}</button>`).join('')}
        </div>
      </div>

      <!-- Messages -->
      <div id="chatMessages" style="flex:1;overflow-y:auto;padding:20px;display:flex;flex-direction:column;gap:14px"></div>

      <!-- Input -->
      <div style="padding:16px 20px;background:var(--surface);border-top:1px solid var(--border);display:flex;gap:10px;align-items:flex-end">
        <textarea id="chatInput" placeholder="Shkruaj gjermanisht... (ose shqip nëse nevojitet)" style="flex:1;background:var(--surface2);border:2px solid var(--border);border-radius:12px;padding:12px 16px;color:var(--text);font-family:'DM Sans',sans-serif;font-size:0.9rem;resize:none;outline:none;max-height:120px;min-height:48px" rows="1" onkeydown="if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();sendChatMessage()}"
          oninput="this.style.height='auto';this.style.height=this.scrollHeight+'px'"></textarea>
        <button onclick="sendChatMessage()" style="padding:12px 20px;background:var(--gold);border:none;border-radius:12px;color:#000;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:0.9rem;white-space:nowrap">Dërgo →</button>
      </div>
    </div>`;

  // Auto-start with greeting
  setTimeout(() => {
    const starters = CHATBOT.starters[CHATBOT.mode];
    const greeting = Array.isArray(starters)
      ? starters[Math.floor(Math.random()*starters.length)]
      : starters;
    addChatMessage('assistant', greeting);
  }, 300);
}

function setChatMode(mode) {
  CHATBOT.mode = mode;
  CHATBOT.history = [];
  renderChatbotScreen();
}

function setChatLevel(level) {
  CHATBOT.level = level;
  CHATBOT.history = [];
  renderChatbotScreen();
}

function addChatMessage(role, text, isLoading) {
  const msgs = document.getElementById('chatMessages');
  if (!msgs) return;
  const isUser = role === 'user';
  const id = 'msg_' + Date.now();
  const div = document.createElement('div');
  div.id = id;
  div.style.cssText = `display:flex;flex-direction:column;align-items:${isUser?'flex-end':'flex-start'};gap:4px`;
  div.innerHTML = `
    <div style="font-size:0.72rem;color:var(--text-muted);padding:0 4px">${isUser ? 'Ti' : '🤖 DeutschAL AI'}</div>
    <div style="max-width:85%;padding:12px 16px;border-radius:${isUser?'18px 18px 4px 18px':'18px 18px 18px 4px'};background:${isUser?'var(--gold)':'var(--surface2)'};color:${isUser?'#000':'var(--text)'};font-size:0.9rem;line-height:1.6;white-space:pre-wrap">
      ${isLoading ? '<span style="opacity:0.6">⏳ Po shkruan...</span>' : formatChatText(text)}
    </div>
    ${(!isUser && !isLoading) ? `<button onclick="TTS.speak(this.parentElement.previousElementSibling?this.parentElement.previousElementSibling.innerText.trim():'')" style="background:none;border:none;cursor:pointer;font-size:0.8rem;color:var(--gold);padding:2px 8px">🔊 Dëgjo</button>` : ''}`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
  return id;
}

function formatChatText(text) {
  return text
    .replace(/\[KORREKTUR:(.*?)\]/g, '<span style="background:rgba(239,68,68,0.1);border:1px solid var(--red);border-radius:6px;padding:2px 8px;font-size:0.85rem;color:var(--red)">✏️ Korrektur:$1</span>')
    .replace(/❌(.*?)(\n|$)/g, '<span style="color:var(--red)">❌$1</span><br>')
    .replace(/✅(.*?)(\n|$)/g, '<span style="color:var(--green)">✅$1</span><br>')
    .replace(/📝(.*?)(\n|$)/g, '<span style="color:var(--gold)">📝$1</span><br>')
    .replace(/\[Feedback:(.*?)\]/g, '<div style="margin-top:10px;padding:10px;background:rgba(240,180,41,0.1);border-radius:8px;font-size:0.82rem;color:var(--text-dim)">💡 Feedback:$1</div>');
}

async function sendChatMessage() {
  const input = document.getElementById('chatInput');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;

  input.value = '';
  input.style.height = '48px';

  addChatMessage('user', text);
  CHATBOT.history.push({ role: 'user', content: text });

  const loadingId = addChatMessage('assistant', '', true);

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: CHATBOT.systemPrompt(),
        messages: CHATBOT.history
      })
    });

    const data = await response.json();
    const reply = (data.content && data.content[0] && data.content[0].text) || 'Gabim — provo sërish.';

    // Replace loading message
    const loadEl = document.getElementById(loadingId);
    if (loadEl) loadEl.remove();

    CHATBOT.history.push({ role: 'assistant', content: reply });
    addChatMessage('assistant', reply);

  } catch(err) {
    const loadEl = document.getElementById(loadingId);
    if (loadEl) loadEl.remove();
    addChatMessage('assistant', '⚠️ Gabim lidhjeje. Kontrollo internetin dhe provo sërish.');
  }
}

// ─────────────────────────────────────────────────────────────
// 3. LESEN — 5 TESTE TË PLOTA (tekste autentike 350-400 fjalë)
// ─────────────────────────────────────────────────────────────

const LESEN_TESTS = [
  {
    id:'LT1', title:'Lesen — Test 1: Telearbeit in Deutschland',
    type:'Lesen Teil 1 — Artikull gazete',
    time: 13,
    text:`Die Arbeit von zu Hause aus — auch Homeoffice oder Telearbeit genannt — hat in Deutschland in den letzten Jahren stark zugenommen. Laut einer Studie des Instituts für Arbeitsmarkt- und Berufsforschung arbeiten heute rund 25 Prozent aller Beschäftigten zumindest teilweise von zu Hause aus. Vor zehn Jahren war es weniger als zehn Prozent.

Die Gründe für diese Entwicklung sind vielfältig. Einerseits haben die technologischen Fortschritte — schnelles Internet, Videokonferenzen und Cloud-Dienste — das Arbeiten von zu Hause deutlich erleichtert. Andererseits hat die Corona-Pandemie viele Unternehmen gezwungen, ihre Arbeitsmodelle zu überdenken. Viele Firmen haben erkannt, dass Mitarbeiter im Homeoffice oft genauso produktiv sind wie im Büro — manchmal sogar produktiver.

Nicht alle Arbeitnehmer sind jedoch begeistert. Eine Umfrage zeigt, dass viele Menschen den persönlichen Kontakt zu ihren Kollegen vermissen. Besonders junge Mitarbeiter, die gerade ins Berufsleben eingestiegen sind, haben Schwierigkeiten, sich im Homeoffice weiterzuentwickeln und neue Kontakte zu knüpfen.

Auch die rechtliche Seite ist komplex. In Deutschland gibt es noch kein allgemeines Recht auf Homeoffice — obwohl die Diskussion darüber im Bundestag immer lauter wird. Einige Gewerkschaften fordern, dass Arbeitnehmer das Recht haben sollen, mindestens zwei Tage pro Woche von zu Hause zu arbeiten, wenn ihre Tätigkeit es erlaubt.

Experten sind sich einig: Die Zukunft der Arbeit wird hybrid sein. Das bedeutet: Teils im Büro, teils zu Hause. Die große Herausforderung für Unternehmen wird sein, die richtige Balance zu finden — für die Produktivität und für das Wohlbefinden ihrer Mitarbeiter.`,
    questions:[
      {q:'Wie viel Prozent der deutschen Arbeitnehmer arbeiten heute zumindest teilweise im Homeoffice?',
       opts:['a) 10%','b) 25%','c) 50%','d) 75%'], a:1,
       exp:'"rund 25 Prozent aller Beschäftigten arbeiten zumindest teilweise von zu Hause aus"'},
      {q:'Was hat laut dem Text viele Unternehmen dazu gebracht, das Homeoffice einzuführen?',
       opts:['a) Neue Gesetze','b) Der Wunsch der Mitarbeiter','c) Die Corona-Pandemie','d) Hohe Büromieten'], a:2,
       exp:'"die Corona-Pandemie viele Unternehmen gezwungen, ihre Arbeitsmodelle zu überdenken"'},
      {q:'Welche Gruppe hat laut dem Text besondere Schwierigkeiten im Homeoffice?',
       opts:['a) Ältere Mitarbeiter','b) Junge Mitarbeiter','c) Manager','d) Teilzeitkräfte'], a:1,
       exp:'"Besonders junge Mitarbeiter...haben Schwierigkeiten, sich im Homeoffice weiterzuentwickeln"'},
      {q:'Was fordern Gewerkschaften laut dem Text?',
       opts:['a) Vollständiges Homeoffice','b) Abschaffung des Homeoffice','c) Recht auf 2 Tage Homeoffice pro Woche','d) Höhere Löhne'], a:2,
       exp:'"das Recht haben sollen, mindestens zwei Tage pro Woche von zu Hause zu arbeiten"'},
      {q:'Was ist laut Experten die Zukunft der Arbeit?',
       opts:['a) Vollständiges Homeoffice','b) Nur Büroarbeit','c) Hybrides Arbeiten','d) Kürzere Arbeitszeiten'], a:2,
       exp:'"Die Zukunft der Arbeit wird hybrid sein. Das bedeutet: Teils im Büro, teils zu Hause."'}
    ]
  },
  {
    id:'LT2', title:'Lesen — Test 2: Klimawandel und Stadtplanung',
    type:'Lesen Teil 1 — Reportazh',
    time: 13,
    text:`Städte weltweit stehen vor einer der größten Herausforderungen des 21. Jahrhunderts: dem Klimawandel. Immer häufigere Hitzewellen, Starkregen und Überschwemmungen machen deutlich, dass Stadtplanung sich grundlegend verändern muss. Viele Städte in Deutschland haben bereits begonnen, auf diese Herausforderungen zu reagieren.

Ein wichtiger Ansatz ist die sogenannte "Schwammstadt". Die Idee dahinter ist einfach: Statt Regenwasser schnell in die Kanalisation abzuleiten, soll die Stadt das Wasser aufnehmen, speichern und langsam abgeben — ähnlich wie ein Schwamm. Dazu werden mehr Grünflächen, Dachgärten und spezielle Bodenbeläge verwendet, die Wasser aufnehmen können.

Berlin hat in den letzten Jahren mehrere Pilotprojekte gestartet. In manchen Straßen wurden die Bürgersteige durch wasserdurchlässige Pflastersteine ersetzt. Parks wurden so umgestaltet, dass sie als temporäre Wasserrückhaltebecken fungieren können. Auch das Pflanzen von Stadtbäumen hat eine wichtige Funktion: Bäume kühlen durch Verdunstung die Umgebung ab und binden Kohlendioxid.

Doch die Transformation der Städte ist kostspielig und zeitaufwendig. Experten schätzen, dass Deutschland bis 2050 mindestens 50 Milliarden Euro investieren muss, um die Infrastruktur klimaresistent zu machen. Ein Großteil dieser Kosten wird auf Kommunen zukommen, die oft schon jetzt mit knappen Budgets kämpfen.

Trotzdem gibt es Grund zur Hoffnung. Immer mehr Bürgerinnen und Bürger engagieren sich für eine grünere Stadt: Sie pflanzen auf Balkonen und in Gemeinschaftsgärten, fordern von der Politik mehr Fahrradwege und beteiligen sich an lokalen Klimainitiativen. Die Experten sind sich einig: Ohne die aktive Beteiligung der Bevölkerung ist eine erfolgreiche Klimaanpassung der Städte nicht möglich.`,
    questions:[
      {q:'Was ist das Hauptproblem, das der Text beschreibt?',
       opts:['a) Verkehrstaus in Städten','b) Klimawandel und Stadtplanung','c) Wohnungsmangel','d) Luftverschmutzung'], a:1,
       exp:'Der Text handelt von Klimawandel und wie Städte darauf reagieren müssen.'},
      {q:'Was bedeutet das Konzept "Schwammstadt"?',
       opts:['a) Eine Stadt mit vielen Schwimmbädern','b) Eine Stadt, die Regenwasser aufnimmt und speichert','c) Eine Stadt aus weichen Materialien','d) Eine Stadt mit unterirdischen Kanälen'], a:1,
       exp:'"soll die Stadt das Wasser aufnehmen, speichern und langsam abgeben — ähnlich wie ein Schwamm"'},
      {q:'Welche Maßnahme wurde laut dem Text in Berlin umgesetzt?',
       opts:['a) Neue Autobahnen','b) Höhere Gebäude','c) Wasserdurchlässige Pflastersteine','d) Mehr Parkplätze'], a:2,
       exp:'"wurden die Bürgersteige durch wasserdurchlässige Pflastersteine ersetzt"'},
      {q:'Wie viel müssen laut Experten bis 2050 investiert werden?',
       opts:['a) 5 Milliarden','b) 20 Milliarden','c) 50 Milliarden','d) 100 Milliarden'], a:2,
       exp:'"Deutschland bis 2050 mindestens 50 Milliarden Euro investieren muss"'},
      {q:'Was ist laut dem Text für eine erfolgreiche Klimaanpassung notwendig?',
       opts:['a) Mehr Gesetze','b) Internationale Hilfe','c) Aktive Beteiligung der Bevölkerung','d) Neue Technologien'], a:2,
       exp:'"Ohne die aktive Beteiligung der Bevölkerung ist eine erfolgreiche Klimaanpassung der Städte nicht möglich"'}
    ]
  },
  {
    id:'LT3', title:'Lesen — Test 3: E-Mail formale',
    type:'Lesen Teil 2 — Letra zyrtare',
    time:10,
    text:`Betreff: Beschwerde wegen defekter Waschmaschine — Bestellnummer 778-2024

Sehr geehrte Damen und Herren,

ich schreibe Ihnen bezüglich meiner Waschmaschine, Modell WM-5500, die ich am 15. Oktober 2024 in Ihrem Online-Shop bestellt und am 22. Oktober erhalten habe.

Leider muss ich Ihnen mitteilen, dass das Gerät von Anfang an nicht einwandfrei funktioniert. Beim ersten Waschgang blieb die Maschine nach 20 Minuten stehen und zeigte einen Fehlercode (E-04) an. Ich habe daraufhin die technische Hotline Ihres Unternehmens angerufen, die mir geraten hat, die Maschine zurückzusetzen. Nach dem Neustart funktionierte sie kurz, brach aber beim nächsten Waschgang wieder ab.

Ich habe bereits zweimal versucht, mit Ihrem Kundenservice Kontakt aufzunehmen, erhielt aber keine zufriedenstellende Antwort. Ich bitte Sie daher dringend, folgende Maßnahmen zu ergreifen:

1. Schicken Sie innerhalb von 7 Werktagen einen Techniker zur Reparatur.
2. Falls eine Reparatur nicht möglich ist, bitten ich um sofortigen Austausch des Geräts.
3. Sollte keines von beidem möglich sein, behalte ich mir das Recht vor, vom Kaufvertrag zurückzutreten und eine vollständige Rückerstattung zu verlangen.

Als Nachweis lege ich Kopien der Kaufquittung sowie Fotos des Fehlercodes bei.

Ich erwarte Ihre Antwort bis zum 10. November 2024. Für Rückfragen stehe ich unter der Nummer 0176/5544-3322 zur Verfügung.

Mit freundlichen Grüßen,
Arben Kelmendi`,
    questions:[
      {q:'Wann hat Arben Kelmendi die Waschmaschine erhalten?',
       opts:['a) 15. Oktober','b) 22. Oktober','c) 10. November','d) 7. November'], a:1,
       exp:'"am 22. Oktober erhalten"'},
      {q:'Was war das Problem mit der Waschmaschine beim ersten Mal?',
       opts:['a) Sie machte zu viel Lärm','b) Sie verbrauchte zu viel Wasser','c) Sie blieb stehen und zeigte einen Fehlercode','d) Sie war falsch geliefert worden'], a:2,
       exp:'"blieb die Maschine nach 20 Minuten stehen und zeigte einen Fehlercode (E-04) an"'},
      {q:'Was fordert Arben als erste Maßnahme?',
       opts:['a) Sofortige Rückerstattung','b) Einen Techniker zur Reparatur','c) Ein neues Gerät','d) Eine Entschuldigung'], a:1,
       exp:'"Schicken Sie innerhalb von 7 Werktagen einen Techniker zur Reparatur"'},
      {q:'Was hat Arben der E-Mail beigelegt?',
       opts:['a) Den Garantieschein','b) Das Handbuch','c) Fotos und Kaufquittung','d) Die Seriennummer'], a:2,
       exp:'"lege ich Kopien der Kaufquittung sowie Fotos des Fehlercodes bei"'},
      {q:'Bis wann erwartet Arben eine Antwort?',
       opts:['a) 7. November','b) 15. November','c) 10. November','d) 22. November'], a:2,
       exp:'"Ich erwarte Ihre Antwort bis zum 10. November 2024"'}
    ]
  },
  {
    id:'LT4', title:'Lesen — Test 4: Njoftime — gjej personin e duhur',
    type:'Lesen Teil 3 — Match njoftimesh',
    time:12,
    notices:[
      {letter:'A', title:'Stadtbibliothek — Neue Öffnungszeiten',
       body:'Ab dem 1. März gelten neue Öffnungszeiten: Mo–Fr 9–20 Uhr, Sa 10–17 Uhr. Sonntag bleibt die Bibliothek geschlossen. Die Ausleihe von E-Books ist weiterhin rund um die Uhr über die App möglich. Neuanmeldungen sind nur mit Personalausweis möglich.'},
      {letter:'B', title:'Nachhilfelehrer gesucht',
       body:'Familie mit 2 Kindern (8 und 11 Jahre) sucht engagierte/n Nachhilfelehrer/in für Mathematik und Deutsch. Zwei Abende pro Woche, ca. 2 Stunden. Bezahlung: 18 Euro/Stunde. Erfahrung mit Kindern erwünscht. Bitte Kontakt: nachhilfe-muenchen@gmail.com'},
      {letter:'C', title:'Deutschkurs für Geflüchtete — Freiwillige gesucht',
       body:'Das Rote Kreuz sucht ehrenamtliche Deutschlehrer/innen für Geflüchtete. Keine pädagogische Ausbildung erforderlich. Einsatz 1x pro Woche, 2 Stunden. Materialien werden gestellt. Interessierte melden sich bitte bei: rk-muenchen@drk.de'},
      {letter:'D', title:'Sprachcafé — Jeden Dienstag',
       body:'Treffen für alle, die Deutsch üben möchten! Kein Unterricht, nur Konversation in lockerer Atmosphäre. Dienstags 18–20 Uhr im Café Central, Schillerstraße 12. Eintritt frei. Alle Niveaus willkommen — von A1 bis C1!'},
      {letter:'E', title:'Wohnung zu vermieten — 2-Zimmer, ruhige Lage',
       body:'Helle 2-Zimmer-Wohnung, 58 m², 2. Etage, Balkon. Miete: 950 Euro warm. Kaution: 2 Monatsmieten. Nähe U-Bahn (5 Min.). Keine Haustiere. Besichtigung nach Vereinbarung: 089/4455-6677'},
    ],
    questions:[
      {q:'Mia möchte ihr Deutsch verbessern, aber ohne formellen Unterricht — nur durch Gespräche.',
       opts:['A','B','C','D','E'], a:3,
       exp:'Njoftimi D — "Sprachcafé" — është pikërisht ky: biseda pa mësim formal, çdo të martë.'},
      {q:'Thomas sucht eine Möglichkeit, anderen zu helfen und dabei seine Deutschkenntnisse einzusetzen. Er ist kein ausgebildeter Lehrer.',
       opts:['A','B','C','D','E'], a:2,
       exp:'Njoftimi C — "Keine pädagogische Ausbildung erforderlich" — i përshtatshëm për Thomas.'},
      {q:'Anna hat zwei Kinder und sucht jemanden, der ihnen bei den Schulaufgaben hilft.',
       opts:['A','B','C','D','E'], a:1,
       exp:'Njoftimi B — "Nachhilfelehrer gesucht" — për fëmijë 8 dhe 11 vjeç.'},
      {q:'Erik möchte wissen, wann er sonntags Bücher ausleihen kann.',
       opts:['A','B','C','D','E'], a:0,
       exp:'Njoftimi A — "Sonntag bleibt die Bibliothek geschlossen" — por mund të marrë e-books online.'},
      {q:'Lisa zieht nach München und sucht eine ruhige Wohnung in der Nähe der U-Bahn.',
       opts:['A','B','C','D','E'], a:4,
       exp:'Njoftimi E — "ruhige Lage", "Nähe U-Bahn (5 Min.)" — i përshtatshëm për Lisën.'}
    ]
  },
  {
    id:'LT5', title:'Lesen — Test 5: Digitale Medien und Jugendliche',
    type:'Lesen Teil 1 — Studim',
    time:13,
    text:`Smartphones und soziale Medien sind aus dem Alltag von Jugendlichen nicht mehr wegzudenken. Eine neue Studie der Universität Hamburg hat untersucht, wie sich der Medienkonsum von 12- bis 18-Jährigen auf ihre schulischen Leistungen und ihre soziale Entwicklung auswirkt. Die Ergebnisse sind komplex und widerlegen einfache Antworten.

Einerseits zeigt die Studie, dass Jugendliche, die täglich mehr als vier Stunden auf ihr Smartphone schauen, im Durchschnitt schlechtere Noten erzielen als Gleichaltrige mit geringerem Konsum. Auch der Schlaf leidet: 68 Prozent der befragten Jugendlichen gaben an, ihr Handy mit ins Bett zu nehmen, was zu schlechterem Schlaf führt.

Andererseits können soziale Medien positive Effekte haben. Viele Jugendliche nutzen Plattformen wie YouTube und TikTok, um Neues zu lernen: Kochrezepte, Sprachen, Programmieren oder wissenschaftliche Konzepte. Auch der soziale Zusammenhalt profitiert: Jugendliche in ländlichen Gebieten, die weniger Möglichkeiten haben, Gleichaltrige persönlich zu treffen, schätzen digitale Verbindungen besonders.

Die Forscher empfehlen keinen generellen Verzicht auf digitale Medien, sondern einen bewussten Umgang damit. Konkret schlagen sie vor: klare Bildschirmzeiten vereinbaren, keine Handys beim Abendessen und im Schlafzimmer, und eine offene Kommunikation zwischen Eltern und Kindern über den Medienkonsum.

Schulen spielen ebenfalls eine wichtige Rolle. Medienkompetenz — also der kritische und reflektierte Umgang mit digitalen Inhalten — sollte laut den Experten fester Bestandteil des Lehrplans sein. Nicht das Verbot, sondern die Bildung ist der Schlüssel zu einem gesunden Umgang mit der digitalen Welt.`,
    questions:[
      {q:'Was hat die Studie der Universität Hamburg untersucht?',
       opts:['a) Smartphone-Preise für Jugendliche','b) Medienkonsum und seine Auswirkungen auf Jugendliche','c) Soziale Netzwerke für Erwachsene','d) Digitale Schulbücher'], a:1,
       exp:'"wie sich der Medienkonsum von 12- bis 18-Jährigen auf ihre schulischen Leistungen und ihre soziale Entwicklung auswirkt"'},
      {q:'Was passiert laut der Studie mit dem Schlaf der Jugendlichen?',
       opts:['a) Er verbessert sich','b) Er bleibt gleich','c) Er wird schlechter','d) Die Studie hat dazu nichts untersucht'], a:2,
       exp:'"68 Prozent...ihr Handy mit ins Bett nehmen, was zu schlechterem Schlaf führt"'},
      {q:'Welchen positiven Effekt erwähnt die Studie?',
       opts:['a) Bessere Noten','b) Mehr Sport','c) Jugendliche können online Neues lernen','d) Weniger Stress'], a:2,
       exp:'"Jugendliche nutzen Plattformen...um Neues zu lernen: Kochrezepte, Sprachen, Programmieren"'},
      {q:'Was empfehlen die Forscher konkret?',
       opts:['a) Smartphones komplett verbieten','b) Klare Bildschirmzeiten vereinbaren','c) Mehr Zeit in sozialen Medien verbringen','d) Nur Bildungs-Apps erlauben'], a:1,
       exp:'"klare Bildschirmzeiten vereinbaren, keine Handys beim Abendessen und im Schlafzimmer"'},
      {q:'Was ist laut Experten der Schlüssel zu einem gesunden Medienkonsum?',
       opts:['a) Verbot','b) Kontrolle durch Eltern','c) Bildung und Medienkompetenz','d) Ältere Smartphones'], a:2,
       exp:'"Nicht das Verbot, sondern die Bildung ist der Schlüssel zu einem gesunden Umgang mit der digitalen Welt"'}
    ]
  }
];

// ─────────────────────────────────────────────────────────────
// 4. LEITNER FLASHCARD SRS ALGORITHM
// ─────────────────────────────────────────────────────────────

const LEITNER = {
  // Boxes 1-5: review intervals in days
  intervals: [0, 1, 3, 7, 14, 30],

  load: function() {
    try {
      const saved = localStorage.getItem('deutschal_leitner');
      return saved ? JSON.parse(saved) : {};
    } catch(e) { return {}; }
  },

  save: function(data) {
    try { localStorage.setItem('deutschal_leitner', JSON.stringify(data)); } catch(e){}
  },

  getBox: function(wordId) {
    const data = this.load();
    return (data[wordId] && data[wordId].box) || 1;
  },

  updateCard: function(wordId, correct) {
    const data = this.load();
    if (!data[wordId]) data[wordId] = { box: 1, nextReview: Date.now() };
    const current = data[wordId];
    if (correct) {
      current.box = Math.min(current.box + 1, 5);
    } else {
      current.box = 1;
    }
    const days = this.intervals[current.box] || 1;
    current.nextReview = Date.now() + days * 86400000;
    current.lastReview = Date.now();
    data[wordId] = current;
    this.save(data);
    return current.box;
  },

  getDueCards: function(allWords) {
    const data = this.load();
    const now = Date.now();
    return allWords.filter(w => {
      const id = (w.de||'').replace(/\s/g,'_');
      const card = data[id];
      if (!card) return true; // new card — always due
      return card.nextReview <= now;
    });
  },

  getStats: function() {
    const data = this.load();
    const counts = [0,0,0,0,0,0];
    Object.values(data).forEach(function(c){ { counts[c.box] = (counts[c.box]||0)+1; }; });
    return { box1: counts[1]||0, box2: counts[2]||0, box3: counts[3]||0, box4: counts[4]||0, box5: counts[5]||0, total: Object.keys(data).length };
  }
};

// ─────────────────────────────────────────────────────────────
// 5. GOETHE TIMER SYSTEM
// ─────────────────────────────────────────────────────────────

const GOETHE_TIMER = {
  timers: {
    lesen: 65 * 60,
    hoeren: 40 * 60,
    schreiben: 60 * 60,
    sprechen: 15 * 60
  },
  current: null,
  remaining: 0,
  interval: null,
  active: false,

  start: function(section) {
    this.stop();
    this.current = section;
    this.remaining = this.timers[section] || 0;
    this.active = true;
    this.tick();
    this.interval = setInterval(() => this.tick(), 1000);
  },

  stop: function() {
    if (this.interval) { clearInterval(this.interval); this.interval = null; }
    this.active = false;
  },

  tick: function() {
    if (this.remaining <= 0) {
      this.stop();
      this.updateDisplay();
      const el = document.getElementById('goetheTimerDisplay');
      if (el) el.style.background = 'rgba(239,68,68,0.2)';
      return;
    }
    this.remaining--;
    this.updateDisplay();
  },

  updateDisplay: function() {
    const el = document.getElementById('goetheTimerDisplay');
    if (!el) return;
    const m = Math.floor(this.remaining / 60);
    const s = this.remaining % 60;
    const fmt = String(m).padStart(2,'0') + ':' + String(s).padStart(2,'0');
    el.textContent = '⏱️ ' + fmt;
    if (this.remaining <= 300) {
      el.style.color = 'var(--red)';
      el.style.fontWeight = '700';
    } else {
      el.style.color = 'var(--gold)';
    }
  },

  format: function(seconds) {
    return Math.floor(seconds/60) + ' min';
  }
};

// ─────────────────────────────────────────────────────────────
// 6. LESEN TEST SCREEN FUNCTIONS
// ─────────────────────────────────────────────────────────────

let lesenState = {
  testIndex: 0,
  answers: {},
  started: false,
  completed: false
};

function showLesenTests() {
  // Merge extra tests on first call
  if (typeof LESEN_EXTRA !== 'undefined' && LESEN_TESTS.length < 10) {
    LESEN_EXTRA.forEach(function(t){ LESEN_TESTS.push(t); });
  }
  lesenState = { testIndex: 0, answers: {}, started: false, completed: false };
  renderLesenScreen();
  showScreen('lesenScreen');
}

function renderLesenScreen() {
  const c = document.getElementById('lesenContent');
  if (!c) return;

  if (!lesenState.started) {
    c.innerHTML = `
      <div style="max-width:700px;margin:0 auto;text-align:center;padding:40px 20px">
        <div style="font-size:3rem;margin-bottom:16px">📖</div>
        <h2 style="color:var(--gold);margin-bottom:12px">Lesen — 5 Teste të Plota</h2>
        <p style="color:var(--text-dim);line-height:1.7;margin-bottom:24px">Tekste autentike gjermane 350-400 fjalë. Secili test ka 5 pyetje. Formati identik me Goethe B1 real.<br><br>⏱️ Koha totale: 65 minuta (si në provim real)</p>
        <div style="display:grid;gap:10px;margin-bottom:28px;text-align:left">
          ${LESEN_TESTS.map((t,i) => `
            <div style="background:var(--surface2);border-radius:10px;padding:14px 18px;border:1px solid var(--border);display:flex;justify-content:space-between;align-items:center">
              <div>
                <div style="font-weight:600;color:var(--text);font-size:0.9rem">${t.title}</div>
                <div style="font-size:0.78rem;color:var(--text-muted)">${t.type} · ⏱️ ~${t.time} min · 5 pyetje</div>
              </div>
              <div style="font-size:1.2rem">${lesenState.answers['LT'+(i+1)] ? '✅' : '○'}</div>
            </div>`).join('')}
        </div>
        <div style="display:flex;gap:12px;justify-content:center">
          <button class="btn-outline" onclick="showScreen('course')">← Kthehu</button>
          <button class="btn" onclick="startLesenTest(0)">Fillo Testin 1 →</button>
        </div>
      </div>`;
    return;
  }

  const test = LESEN_TESTS[lesenState.testIndex];
  const testAnswers = lesenState.answers[test.id] || {};
  const answered = Object.keys(testAnswers).length;
  const total = test.questions.length;

  c.innerHTML = `
    <div style="max-width:860px;margin:0 auto">
      <!-- Header -->
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;flex-wrap:wrap;gap:10px">
        <div>
          <div style="font-size:0.75rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:1px">${test.type}</div>
          <h3 style="color:var(--text);margin:4px 0">${test.title}</h3>
        </div>
        <div style="display:flex;gap:10px;align-items:center">
          <div id="goetheTimerDisplay" style="background:rgba(240,180,41,0.1);border:1px solid var(--gold);border-radius:8px;padding:6px 14px;font-size:0.9rem;color:var(--gold);font-weight:600">⏱️ ${GOETHE_TIMER.format(GOETHE_TIMER.timers.lesen)}</div>
          <button onclick="GOETHE_TIMER.start('lesen')" style="padding:6px 14px;background:var(--surface2);border:1px solid var(--border);border-radius:8px;color:var(--text-muted);cursor:pointer;font-size:0.82rem;font-family:DM Sans,sans-serif">▶ Start Timer</button>
        </div>
      </div>

      <!-- Text -->
      <div style="background:var(--surface2);border-radius:12px;padding:24px;margin-bottom:24px;border:1px solid var(--border);font-size:0.9rem;line-height:1.9;color:var(--text)">
        ${test.text ? test.text.split('\n\n').map(function(p,pi){ return '<p onclick="TTS.speak(this.innerText)" style="margin-bottom:14px;cursor:pointer;border-radius:6px;padding:4px;transition:background 0.15s" onmouseover="this.style.background=\'rgba(240,180,41,0.06)\'" onmouseout="this.style.background=\'\'">'+p+' <span style="opacity:0;font-size:0.7rem;color:var(--gold)">🔊</span></p>'; }).join('') : ''}
        ${test.notices ? `
          <p style="font-size:0.8rem;color:var(--text-muted);margin-bottom:16px;font-style:italic">Lexo njoftimet dhe gjej njoftimin e duhur për çdo person:</p>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:10px">
            ${test.notices.map(n => `
              <div style="background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px">
                <div style="font-weight:700;color:var(--gold);font-size:0.78rem;margin-bottom:4px">[${n.letter}] ${n.title}</div>
                <div style="font-size:0.8rem;color:var(--text-dim);line-height:1.5">${n.body}</div>
              </div>`).join('')}
          </div>` : ''}
      </div>

      <!-- TTS button -->
      <div style="margin-bottom:20px">
        ${TTS.btn(test.text || test.notices?.map(n=>n.title+': '+n.body).join('. ') || '', 'de-DE')}
        <span style="font-size:0.78rem;color:var(--text-muted);margin-left:8px">Dëgjo tekstin me zë</span>
      </div>

      <!-- Questions -->
      <h4 style="color:var(--text);margin-bottom:14px">❓ Pyetjet (${answered}/${total} të përgjigura)</h4>
      <div style="display:grid;gap:14px;margin-bottom:24px">
        ${test.questions.map((q,qi) => {
          const key = 'q'+qi;
          const userAns = testAnswers[key];
          const done = userAns !== undefined;
          return `<div style="background:var(--surface2);border-radius:10px;padding:16px;border:2px solid ${done ? (userAns===q.a ? 'var(--green)' : 'var(--red)') : 'var(--border)'}">
            <p style="font-weight:600;color:var(--text);margin-bottom:10px;font-size:0.9rem">${qi+1}. ${q.q}</p>
            <div style="display:grid;gap:6px">
              ${q.opts.map((opt,oi) => {
                let bg = '';
                if(done && oi===q.a) bg = 'background:rgba(34,197,94,0.15);border-color:var(--green);color:var(--green)';
                else if(done && oi===userAns && oi!==q.a) bg = 'background:rgba(239,68,68,0.15);border-color:var(--red);color:var(--red)';
                return `<button onclick="answerLesenQ('${test.id}','${key}',${oi},${q.a})" ${done?'disabled':''} style="text-align:left;background:var(--surface);border:2px solid var(--border);border-radius:8px;padding:10px 14px;color:var(--text-dim);cursor:pointer;font-family:'DM Sans',sans-serif;font-size:0.85rem;${bg}">${opt}</button>`;
              }).join('')}
            </div>
            ${done ? `<div style="margin-top:10px;padding:8px 12px;background:rgba(240,180,41,0.08);border-radius:6px;font-size:0.78rem;color:var(--text-muted)">💡 ${q.exp}</div>` : ''}
          </div>`;
        }).join('')}
      </div>

      <!-- Nav -->
      <div style="display:flex;gap:12px;flex-wrap:wrap">
        <button class="btn-outline" onclick="lesenState.started=false;renderLesenScreen()">← Kthehu te lista</button>
        ${lesenState.testIndex > 0 ? `<button class="btn-outline" onclick="startLesenTest(${lesenState.testIndex-1})">← Testi ${lesenState.testIndex}</button>` : ''}
        ${lesenState.testIndex < LESEN_TESTS.length-1 ? `<button class="btn" onclick="startLesenTest(${lesenState.testIndex+1})">Testi ${lesenState.testIndex+2} →</button>` : `<button class="btn" onclick="showLesenResults()">Shiko rezultatet →</button>`}
      </div>
    </div>`;
}

function startLesenTest(idx) {
  lesenState.testIndex = idx;
  lesenState.started = true;
  GOETHE_TIMER.stop();
  renderLesenScreen();
}

function answerLesenQ(testId, key, selected, correct) {
  if (!lesenState.answers[testId]) lesenState.answers[testId] = {};
  if (lesenState.answers[testId][key] !== undefined) return;
  lesenState.answers[testId][key] = selected;
  renderLesenScreen();
}

function showLesenResults() {
  const c = document.getElementById('lesenContent');
  if (!c) return;
  let total = 0, correct = 0;
  LESEN_TESTS.forEach(function(t){ {
    const ans = lesenState.answers[t.id] || {};
    t.questions.forEach((q,qi) => {
      total++;
      if (ans['q'+qi] === q.a) correct++;
    });
  }; });
  const pct = Math.round(correct/total*100);
  c.innerHTML = `
    <div style="max-width:600px;margin:0 auto;text-align:center;padding:40px 20px">
      <div style="font-size:3rem;margin-bottom:12px">${pct>=70?'🏆':pct>=50?'💪':'📚'}</div>
      <h2 style="color:var(--gold);margin-bottom:8px">Rezultati i Lesenimit</h2>
      <div style="font-size:4rem;font-weight:700;color:${pct>=70?'var(--green)':pct>=50?'var(--gold)':'var(--red)'};">${pct}%</div>
      <div style="color:var(--text-muted);margin-bottom:24px">${correct} / ${total} të sakta</div>
      <div style="background:var(--surface2);border-radius:12px;padding:20px;margin-bottom:24px;text-align:left">
        <p style="font-size:0.88rem;color:var(--text-dim);line-height:1.7">
          ${pct>=70 ? '✅ Kalon kufirin e Goethe B1 (60%). Shkëlqyer!' :
            pct>=50 ? '⚠️ Afër kufirit. Vazhdo të lexosh tekste gjermane çdo ditë.' :
            '📚 Duhet ushtrimi. Lexo DW Nachrichten dhe provo sërish pas 2 javësh.'}
        </p>
      </div>
      <div style="display:flex;gap:12px;justify-content:center">
        <button class="btn-outline" onclick="lesenState={testIndex:0,answers:{},started:false,completed:false};renderLesenScreen()">🔄 Provo sërish</button>
        <button class="btn" onclick="showScreen('course')">← Kursi kryesor</button>
      </div>
    </div>`;
}




// ════════════════════════════════════════════════════════════════
// DEUTSCHAL v14 — 6 FUNKSIONE TË REJA
// 1. Konjugim interaktiv i foljeve
// 2. 10 teste Lesen shtesë (totali: 15)
// 3. Tabelë referencë e shpejtë
// 4. Progres vizual
// 5. Fjala e ditës
// 6. Ushtrime plotësimi (Lückentext / gap-fill)
// ════════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────
// 1. KONJUGIM INTERAKTIV
// ─────────────────────────────────────────────────────────────

const VERB_CONJUGATION = {
  // Format: { inf, sq, group, tenses: { prasens, perfekt, prateritum, futur, konjII } }
  // Koha: [ich, du, er/sie/es, wir, ihr, sie/Sie]
  verbs: [
    // ── A1 — Foljet bazike ──
    { inf:'sein', sq:'jam', group:'parregullt', icon:'⭐',
      prasens:['bin','bist','ist','sind','seid','sind'],
      prateritum:['war','warst','war','waren','wart','waren'],
      perfekt:'ist gewesen', futur:'wird sein', konjII:'wäre',
      note:'Folja më e rëndësishme! Mëso të gjitha format përmendsh.' },
    { inf:'haben', sq:'kam', group:'parregullt', icon:'⭐',
      prasens:['habe','hast','hat','haben','habt','haben'],
      prateritum:['hatte','hattest','hatte','hatten','hattet','hatten'],
      perfekt:'hat gehabt', futur:'wird haben', konjII:'hätte',
      note:'Folja ndihmëse kryesore për Perfekt.' },
    { inf:'werden', sq:'bëhem / do të', group:'parregullt', icon:'⭐',
      prasens:['werde','wirst','wird','werden','werdet','werden'],
      prateritum:['wurde','wurdest','wurde','wurden','wurdet','wurden'],
      perfekt:'ist geworden', futur:'wird werden', konjII:'würde',
      note:'Për të ardhmen (Futur) dhe pasiv (Passiv).' },
    { inf:'machen', sq:'bëj', group:'rregullt', icon:'✅',
      prasens:['mache','machst','macht','machen','macht','machen'],
      prateritum:['machte','machtest','machte','machten','machtet','machten'],
      perfekt:'hat gemacht', futur:'wird machen', konjII:'würde machen',
      note:'Shembull i folje rregullte. Particip II = ge+mach+t.' },
    { inf:'gehen', sq:'shkoj', group:'parregullt', icon:'🚶',
      prasens:['gehe','gehst','geht','gehen','geht','gehen'],
      prateritum:['ging','gingst','ging','gingen','gingt','gingen'],
      perfekt:'ist gegangen', futur:'wird gehen', konjII:'würde gehen',
      note:'Folje lëvizjeje → Perfekt me SEIN.' },
    { inf:'kommen', sq:'vij', group:'parregullt', icon:'👋',
      prasens:['komme','kommst','kommt','kommen','kommt','kommen'],
      prateritum:['kam','kamst','kam','kamen','kamt','kamen'],
      perfekt:'ist gekommen', futur:'wird kommen', konjII:'würde kommen',
      note:'Lëvizje → Perfekt me SEIN.' },
    { inf:'fahren', sq:'udhëtoj (me mjet)', group:'parregullt', icon:'🚗',
      prasens:['fahre','fährst','fährt','fahren','fahrt','fahren'],
      prateritum:['fuhr','fuhrst','fuhr','fuhren','fuhrt','fuhren'],
      perfekt:'ist gefahren', futur:'wird fahren', konjII:'würde fahren',
      note:'du/er ndryshon: fahren → fährst, fährt.' },
    { inf:'sprechen', sq:'flas', group:'parregullt', icon:'💬',
      prasens:['spreche','sprichst','spricht','sprechen','sprecht','sprechen'],
      prateritum:['sprach','sprachst','sprach','sprachen','spracht','sprachen'],
      perfekt:'hat gesprochen', futur:'wird sprechen', konjII:'würde sprechen',
      note:'e→i ndryshim: sprechen → sprichst, spricht.' },
    { inf:'essen', sq:'ha', group:'parregullt', icon:'🍽️',
      prasens:['esse','isst','isst','essen','esst','essen'],
      prateritum:['aß','aßt','aß','aßen','aßt','aßen'],
      perfekt:'hat gegessen', futur:'wird essen', konjII:'würde essen',
      note:'e→i: essen → isst. Particip II: gegessen.' },
    { inf:'sehen', sq:'shoh', group:'parregullt', icon:'👁️',
      prasens:['sehe','siehst','sieht','sehen','seht','sehen'],
      prateritum:['sah','sahst','sah','sahen','saht','sahen'],
      perfekt:'hat gesehen', futur:'wird sehen', konjII:'würde sehen',
      note:'e→ie: sehen → siehst, sieht.' },
    { inf:'lesen', sq:'lexoj', group:'parregullt', icon:'📖',
      prasens:['lese','liest','liest','lesen','lest','lesen'],
      prateritum:['las','last','las','lasen','last','lasen'],
      perfekt:'hat gelesen', futur:'wird lesen', konjII:'würde lesen',
      note:'e→ie: lesen → liest.' },
    { inf:'schreiben', sq:'shkruaj', group:'parregullt', icon:'✍️',
      prasens:['schreibe','schreibst','schreibt','schreiben','schreibt','schreiben'],
      prateritum:['schrieb','schriebst','schrieb','schrieben','schriebt','schrieben'],
      perfekt:'hat geschrieben', futur:'wird schreiben', konjII:'würde schreiben',
      note:'Rregullt në Präsens, parregullt në Prät.' },
    // ── A2 — Foljet me ndarje dhe modale ──
    { inf:'aufstehen', sq:'çohem', group:'me ndarje', icon:'⏰',
      prasens:['stehe auf','stehst auf','steht auf','stehen auf','steht auf','stehen auf'],
      prateritum:['stand auf','standst auf','stand auf','standen auf','standet auf','standen auf'],
      perfekt:'ist aufgestanden', futur:'wird aufstehen', konjII:'würde aufstehen',
      note:'Parashtesa AUF shkëputet: ich stehe AUF.' },
    { inf:'anrufen', sq:'telefonoj', group:'me ndarje', icon:'📞',
      prasens:['rufe an','rufst an','ruft an','rufen an','ruft an','rufen an'],
      prateritum:['rief an','riefst an','rief an','riefen an','rieft an','riefen an'],
      perfekt:'hat angerufen', futur:'wird anrufen', konjII:'würde anrufen',
      note:'AN shkëputet: ich rufe AN.' },
    { inf:'einkaufen', sq:'bëj blerje', group:'me ndarje', icon:'🛒',
      prasens:['kaufe ein','kaufst ein','kauft ein','kaufen ein','kauft ein','kaufen ein'],
      prateritum:['kaufte ein','kauftest ein','kaufte ein','kauften ein','kauftet ein','kauften ein'],
      perfekt:'hat eingekauft', futur:'wird einkaufen', konjII:'würde einkaufen',
      note:'EIN shkëputet: ich kaufe EIN.' },
    { inf:'können', sq:'mund', group:'modale', icon:'💪',
      prasens:['kann','kannst','kann','können','könnt','können'],
      prateritum:['konnte','konntest','konnte','konnten','konntet','konnten'],
      perfekt:'hat gekonnt', futur:'wird können', konjII:'könnte',
      note:'Folje modale: + infinitiv në fund. Ich kann Deutsch SPRECHEN.' },
    { inf:'müssen', sq:'duhet', group:'modale', icon:'⚠️',
      prasens:['muss','musst','muss','müssen','müsst','müssen'],
      prateritum:['musste','musstest','musste','mussten','musstet','mussten'],
      perfekt:'hat gemusst', futur:'wird müssen', konjII:'müsste',
      note:'Ich MUSS jeden Tag lernen.' },
    { inf:'wollen', sq:'dua (fort)', group:'modale', icon:'❤️',
      prasens:['will','willst','will','wollen','wollt','wollen'],
      prateritum:['wollte','wolltest','wollte','wollten','wolltet','wollten'],
      perfekt:'hat gewollt', futur:'wird wollen', konjII:'wollte',
      note:'Ich WILL nach Deutschland FAHREN.' },
    { inf:'dürfen', sq:'lejohem', group:'modale', icon:'🚫',
      prasens:['darf','darfst','darf','dürfen','dürft','dürfen'],
      prateritum:['durfte','durftest','durfte','durften','durftet','durften'],
      perfekt:'hat gedurft', futur:'wird dürfen', konjII:'dürfte',
      note:'Man DARF hier nicht RAUCHEN.' },
    { inf:'sollen', sq:'duhet (sipas dikujt)', group:'modale', icon:'👆',
      prasens:['soll','sollst','soll','sollen','sollt','sollen'],
      prateritum:['sollte','solltest','sollte','sollten','solltet','sollten'],
      perfekt:'hat gesollt', futur:'wird sollen', konjII:'sollte',
      note:'Du SOLLST das machen — dikush tjetër ka urdhëruar.' },
    // ── B1 — Foljet refleksive dhe komplekse ──
    { inf:'sich freuen', sq:'gëzohem', group:'refleksive', icon:'😊',
      prasens:['freue mich','freust dich','freut sich','freuen uns','freut euch','freuen sich'],
      prateritum:['freute mich','freutest dich','freute sich','freuten uns','freutet euch','freuten sich'],
      perfekt:'hat sich gefreut', futur:'wird sich freuen', konjII:'würde sich freuen',
      note:'Gjithmonë me SICH. Ich freue MICH sehr!' },
    { inf:'sich vorstellen', sq:'prezantohem / imagjinoj', group:'refleksive', icon:'👤',
      prasens:['stelle mich vor','stellst dich vor','stellt sich vor','stellen uns vor','stellt euch vor','stellen sich vor'],
      prateritum:['stellte mich vor','stelltest dich vor','stellte sich vor','stellten uns vor','stelltet euch vor','stellten sich vor'],
      perfekt:'hat sich vorgestellt', futur:'wird sich vorstellen', konjII:'würde sich vorstellen',
      note:'Folje me ndarje + refleksive: VOR shkëputet.' },
    { inf:'werden (Passiv)', sq:'bëhet (pasiv)', group:'pasiv', icon:'🔄',
      prasens:['werde gemacht','wirst gemacht','wird gemacht','werden gemacht','werdet gemacht','werden gemacht'],
      prateritum:['wurde gemacht','wurdest gemacht','wurde gemacht','wurden gemacht','wurdet gemacht','wurden gemacht'],
      perfekt:'ist gemacht worden', futur:'wird gemacht werden', konjII:'würde gemacht werden',
      note:'Pasivi: werden + Partizip II. Das Auto WIRD repariert.' },
    { inf:'wissen', sq:'di', group:'parregullt', icon:'🧠',
      prasens:['weiß','weißt','weiß','wissen','wisst','wissen'],
      prateritum:['wusste','wusstest','wusste','wussten','wusstet','wussten'],
      perfekt:'hat gewusst', futur:'wird wissen', konjII:'wüsste',
      note:'ich/er weiß — jo wisse! Ndryshon si modal.' },
    { inf:'lassen', sq:'lë / lejoj', group:'parregullt', icon:'🔓',
      prasens:['lasse','lässt','lässt','lassen','lasst','lassen'],
      prateritum:['ließ','ließt','ließ','ließen','ließt','ließen'],
      perfekt:'hat gelassen', futur:'wird lassen', konjII:'würde lassen',
      note:'Lass mich! / Er lässt das Auto reparieren.' }
  ],

  // Interactive quiz state
  quizState: { verbIdx: 0, personIdx: 0, tense: 'prasens', score: 0, total: 0, wrong: [] }
};

// ─────────────────────────────────────────────────────────────
// 2. TESTE LESEN SHTESË (10 të reja — totali 15)
// ─────────────────────────────────────────────────────────────

const LESEN_EXTRA = [
  {
    id:'LT6', title:'Lesen — Test 6: Gesundheit und Ernährung',
    type:'Lesen Teil 1 — Artikull shëndetësor', time:13,
    text:`Eine ausgewogene Ernährung ist einer der wichtigsten Faktoren für unsere Gesundheit. Doch was bedeutet das eigentlich in der Praxis? Laut der Deutschen Gesellschaft für Ernährung (DGE) sollten wir täglich mindestens fünf Portionen Obst und Gemüse zu uns nehmen. Viele Menschen schaffen das jedoch nicht — im Durchschnitt essen Deutsche nur drei Portionen pro Tag.

Besonders problematisch ist der hohe Konsum von verarbeiteten Lebensmitteln, die oft viel Zucker, Salz und ungesunde Fette enthalten. Studien zeigen, dass Menschen, die regelmäßig Fast Food essen, ein deutlich höheres Risiko für Herzkrankheiten, Diabetes und Übergewicht haben.

Positiv zu bewerten ist jedoch, dass das Bewusstsein für gesunde Ernährung in den letzten Jahren gestiegen ist. Immer mehr Menschen achten auf Bio-Produkte, reduzieren ihren Fleischkonsum und kochen häufiger selbst. Besonders unter jungen Erwachsenen wächst der Trend zur vegetarischen oder veganen Ernährung.

Experten betonen jedoch, dass es keine "Wunderdiät" gibt. Das Wichtigste ist Abwechslung: Wer viele verschiedene Lebensmittel isst, versorgt seinen Körper automatisch mit allen wichtigen Nährstoffen. Dazu kommen regelmäßige Mahlzeiten, ausreichend Wasser und — genauso wichtig — Freude am Essen. Essen soll nicht nur gesund sein, sondern auch Genuss bereiten.

Die WHO empfiehlt außerdem, regelmäßige körperliche Aktivität mit einer guten Ernährung zu kombinieren. Wer sich dreimal pro Woche mindestens 30 Minuten bewegt, verbessert nicht nur seine körperliche, sondern auch seine mentale Gesundheit erheblich.`,
    questions:[
      {q:'Wie viele Portionen Obst und Gemüse empfiehlt die DGE täglich?',
       opts:['a) 3 Portionen','b) 5 Portionen','c) 7 Portionen','d) 10 Portionen'],a:1,
       exp:'"mindestens fünf Portionen Obst und Gemüse"'},
      {q:'Was ist laut dem Text besonders problematisch?',
       opts:['a) Zu wenig Wasser','b) Hoher Konsum verarbeiteter Lebensmittel','c) Zu viel Sport','d) Bio-Produkte'],a:1,
       exp:'"Besonders problematisch ist der hohe Konsum von verarbeiteten Lebensmitteln"'},
      {q:'Welcher Trend wächst besonders unter jungen Erwachsenen?',
       opts:['a) Fast Food','b) Fleischkonsum','c) Vegetarische oder vegane Ernährung','d) Fertiggerichte'],a:2,
       exp:'"wächst der Trend zur vegetarischen oder veganen Ernährung"'},
      {q:'Was empfiehlt die WHO zusätzlich zu guter Ernährung?',
       opts:['a) Vitaminpräparate','b) Regelmäßige körperliche Aktivität','c) Weniger schlafen','d) Mehr Kaffee'],a:1,
       exp:'"regelmäßige körperliche Aktivität mit einer guten Ernährung zu kombinieren"'},
      {q:'Was ist laut Experten das Wichtigste bei der Ernährung?',
       opts:['a) Nur Bio-Produkte','b) Kein Fleisch','c) Abwechslung','d) Vitamin-Supplements'],a:2,
       exp:'"Das Wichtigste ist Abwechslung: Wer viele verschiedene Lebensmittel isst..."'}
    ]
  },
  {
    id:'LT7', title:'Lesen — Test 7: Wohnen in Deutschland',
    type:'Lesen Teil 2 — Njoftime', time:10,
    notices:[
      {letter:'A',title:'WG-Zimmer zu vermieten — Zentrum',
       body:'Helles 18m²-Zimmer in 4er-WG. Gemeinschaftsküche und -bad. 550€ warm inkl. WLAN. Nähe Uni. Keine Haustiere. Ab sofort. Kontakt: wg-berlin@gmail.com'},
      {letter:'B',title:'Umzugshelfer gesucht',
       body:'Suche 2-3 zuverlässige Helfer für Umzug am 15. März (Samstag). Ca. 5 Stunden Arbeit. Bezahlung: 15€/h plus Pizza und Getränke. Melde dich bei: umzug.mueller@web.de'},
      {letter:'C',title:'Möbel zu verschenken',
       body:'Räume Wohnung aus: Sofa (blau, guter Zustand), Esstisch mit 4 Stühlen, Regal 180cm. Alles kostenlos! Selbstabholung. Kontakt: 0151/33445566. Nur diese Woche!'},
      {letter:'D',title:'Haushaltstipps — Newsletter',
       body:'Abonnieren Sie unseren kostenlosen Newsletter! Wöchentliche Tipps zu Energie sparen, Haushaltsreinigung und nachhaltigem Wohnen. Anmeldung: www.haushalt-tipps.de'},
      {letter:'E',title:'Handwerker für Renovierung gesucht',
       body:'Suche erfahrenen Maler/Fliesenleger für Badsanierung. Ca. 2 Zimmer. Bitte Kostenvoranschlag schicken an: renovierung2024@gmail.com. Beginn: April.'}
    ],
    questions:[
      {q:'Klara studiert und sucht ein günstiges Zimmer in der Nähe der Universität.',
       opts:['A','B','C','D','E'],a:0,
       exp:'Njoftimi A — WG-Zimmer, "Nähe Uni", 550€ — i përshtatshëm për studente.'},
      {q:'Marco zieht um und braucht Hilfe. Er kann bezahlen.',
       opts:['A','B','C','D','E'],a:1,
       exp:'Njoftimi B — "Umzugshelfer gesucht", 15€/h.'},
      {q:'Sandra renoviert ihr Bad und sucht einen Fachmann.',
       opts:['A','B','C','D','E'],a:4,
       exp:'Njoftimi E — "Maler/Fliesenleger für Badsanierung".'},
      {q:'Tim zieht aus seiner Wohnung aus und möchte seine alten Möbel loswerden.',
       opts:['A','B','C','D','E'],a:2,
       exp:'Njoftimi C — "Möbel zu verschenken", pa pagesë.'},
      {q:'Maria möchte Energie sparen und sucht praktische Ratschläge.',
       opts:['A','B','C','D','E'],a:3,
       exp:'Njoftimi D — "Tipps zu Energie sparen".'}
    ]
  },
  {
    id:'LT8', title:'Lesen — Test 8: Mobilität der Zukunft',
    type:'Lesen Teil 1 — Raport shkencor', time:13,
    text:`Die Art, wie wir uns fortbewegen, befindet sich im Wandel. Elektroautos, Fahrradwege, öffentlicher Nahverkehr und sogar autonome Fahrzeuge prägen die Diskussion über die Mobilität von morgen. Doch welche Lösungen sind wirklich nachhaltig und zukunftsfähig?

Das Elektroauto wird oft als Lösung für den städtischen Verkehr präsentiert. Es produziert lokal keine Abgase und ist deutlich leiser als Benzin- oder Dieselfahrzeuge. Kritiker weisen jedoch darauf hin, dass der Strom für Elektroautos in vielen Ländern noch aus fossilen Brennstoffen stammt. Zudem ist die Herstellung der Batterien ressourcenintensiv und problematisch für die Umwelt.

Eine effizientere Lösung könnte der Ausbau des öffentlichen Nahverkehrs sein. Busse, Bahnen und Straßenbahnen können viele Menschen gleichzeitig transportieren und haben pro Person einen deutlich geringeren CO₂-Ausstoß als Privatfahrzeuge. In Städten wie Wien oder Zürich zeigt sich, wie ein gut ausgebautes öffentliches Verkehrssystem die private Autonutzung deutlich reduzieren kann.

Das Fahrrad erlebt ebenfalls eine Renaissance. Städte wie Amsterdam und Kopenhagen haben gezeigt, dass mit guten Radwegen und der richtigen Stadtplanung ein Großteil der Alltagswege mit dem Rad zurückgelegt werden kann. Auch E-Bikes gewinnen an Beliebtheit: Sie machen das Radfahren auch für längere Strecken und ältere Menschen attraktiv.

Die Experten sind sich einig: Es gibt keine Einzellösung. Die Mobilität der Zukunft wird eine Kombination verschiedener Verkehrsmittel erfordern, angepasst an die jeweiligen Bedürfnisse der Menschen und die Gegebenheiten der Städte und Regionen.`,
    questions:[
      {q:'Was ist ein Nachteil von Elektroautos laut dem Text?',
       opts:['a) Sie sind zu langsam','b) Strom kommt oft aus fossilen Brennstoffen','c) Sie sind zu teuer','d) Sie können nicht in der Stadt fahren'],a:1,
       exp:'"der Strom für Elektroautos in vielen Ländern noch aus fossilen Brennstoffen stammt"'},
      {q:'Welche Städte werden als positive Beispiele für öffentlichen Nahverkehr genannt?',
       opts:['a) Berlin und München','b) Paris und London','c) Wien und Zürich','d) Amsterdam und Kopenhagen'],a:2,
       exp:'"In Städten wie Wien oder Zürich zeigt sich, wie ein gut ausgebautes öffentliches Verkehrssystem..."'},
      {q:'Für wen sind E-Bikes besonders attraktiv?',
       opts:['a) Nur für Sportler','b) Kinder','c) Ältere Menschen und für längere Strecken','d) Nur für Stadtbewohner'],a:2,
       exp:'"machen das Radfahren auch für längere Strecken und ältere Menschen attraktiv"'},
      {q:'Was ist die Schlussfolgerung der Experten?',
       opts:['a) Elektroautos sind die beste Lösung','b) Es gibt keine Einzellösung','c) Fahrräder sind am besten','d) Öffentlicher Verkehr ist überflüssig'],a:1,
       exp:'"Es gibt keine Einzellösung. Die Mobilität der Zukunft wird eine Kombination..."'},
      {q:'Was haben Amsterdam und Kopenhagen bewiesen?',
       opts:['a) Elektroautos funktionieren gut','b) Bahnen sind am besten','c) Gute Radwege reduzieren Autoverkehr','d) Öffentlicher Verkehr ist teuer'],a:2,
       exp:'"Städte wie Amsterdam und Kopenhagen haben gezeigt, dass mit guten Radwegen..."'}
    ]
  },
  {
    id:'LT9', title:'Lesen — Test 9: Brief eines Studenten',
    type:'Lesen Teil 2 — Letër personale', time:10,
    text:`Liebe Mama, lieber Papa,

ich schreibe euch aus meinem neuen Zuhause in München. Jetzt bin ich seit drei Wochen hier und langsam gewöhne ich mich an das Leben in Deutschland.

Die Universität ist toll — die Professoren erklären sehr gut und die Studierenden sind hilfsbereit. Mein Deutsch wird jeden Tag besser, obwohl es manchmal noch schwierig ist, in der Mensa alles zu verstehen, wenn die Leute sehr schnell sprechen.

Was das Wohnen betrifft: Ich teile eine Wohnung mit zwei anderen Studenten, Jonas und Mei. Jonas kommt aus Deutschland und Mei aus Taiwan. Wir kommen gut aus und kochen manchmal zusammen. Letzte Woche habe ich Byrek für sie gemacht und sie waren begeistert!

Das Schwierigste für mich ist das Klima. Der Regen und die Kälte sind sehr anders als zu Hause. Ich vermisse die Sonne und natürlich euch alle sehr. Trotzdem bin ich froh, diese Erfahrung zu machen.

Nächsten Monat beginnen die ersten Prüfungen. Ich lerne fleißig und bin zuversichtlich. Bitte sorgt euch nicht zu viel um mich — es geht mir gut und ich bin glücklich hier.

Ich rufe euch wie immer am Sonntag an.

In Liebe,
Arben`,
    questions:[
      {q:'Wie lange ist Arben schon in München?',
       opts:['a) Eine Woche','b) Drei Wochen','c) Einen Monat','d) Drei Monate'],a:1,
       exp:'"Jetzt bin ich seit drei Wochen hier"'},
      {q:'Was findet Arben manchmal noch schwierig?',
       opts:['a) Die Universität','b) Das Kochen','c) Schnelles Deutsch in der Mensa','d) Das Wohnen'],a:2,
       exp:'"manchmal noch schwierig ist, in der Mensa alles zu verstehen, wenn die Leute sehr schnell sprechen"'},
      {q:'Was hat Arben für seine Mitbewohner gekocht?',
       opts:['a) Pizza','b) Pasta','c) Byrek','d) Schnitzel'],a:2,
       exp:'"Letzte Woche habe ich Byrek für sie gemacht"'},
      {q:'Was ist das Schwierigste für Arben?',
       opts:['a) Die Sprache','b) Die Universität','c) Die Mitbewohner','d) Das Klima'],a:3,
       exp:'"Das Schwierigste für mich ist das Klima."'},
      {q:'Wann ruft Arben seine Eltern an?',
       opts:['a) Jeden Tag','b) Freitags','c) Sonntags','d) Einmal im Monat'],a:2,
       exp:'"Ich rufe euch wie immer am Sonntag an."'}
    ]
  },
  {
    id:'LT10', title:'Lesen — Test 10: Arbeit und Digitalisierung',
    type:'Lesen Teil 1 — Studim sociologjik', time:13,
    text:`Die Digitalisierung verändert die Arbeitswelt grundlegend. Viele Jobs, die heute noch von Menschen erledigt werden, könnten in den nächsten Jahren durch künstliche Intelligenz und Automatisierung ersetzt werden. Gleichzeitig entstehen neue Berufsfelder, die heute noch kaum vorstellbar sind.

Eine Studie des Instituts für Arbeitsmarktforschung zeigt, dass bis 2035 etwa 12 Millionen Arbeitsplätze in Deutschland durch Digitalisierung und Automatisierung stark verändert werden. Besonders betroffen sind einfache, repetitive Tätigkeiten in der Produktion, im Einzelhandel und in der Verwaltung.

Auf der anderen Seite entstehen neue Jobs: Datenanalysten, KI-Trainer, Cybersicherheitsexperten und viele mehr. Diese Berufe erfordern jedoch höhere Qualifikationen und spezifisches technisches Wissen. Experten fordern deshalb massive Investitionen in Bildung und Weiterbildung.

Besonders wichtig ist die sogenannte "Lebenslanges Lernen"-Kultur. In einer Welt, in der sich Technologien schnell verändern, reicht eine einmalige Ausbildung nicht mehr aus. Arbeitnehmer müssen bereit sein, sich kontinuierlich weiterzubilden und neue Fähigkeiten zu erwerben.

Deutschland hat in diesem Bereich bereits reagiert: Es gibt staatliche Programme zur Förderung von Umschulungen, Volkshochschulen bieten digitale Kurse an, und große Unternehmen investieren in die Weiterbildung ihrer Mitarbeiter. Ob das ausreicht, um den digitalen Wandel sozialverträglich zu gestalten, wird die Zukunft zeigen.`,
    questions:[
      {q:'Wie viele Jobs könnten bis 2035 stark verändert werden?',
       opts:['a) 5 Millionen','b) 8 Millionen','c) 12 Millionen','d) 20 Millionen'],a:2,
       exp:'"bis 2035 etwa 12 Millionen Arbeitsplätze in Deutschland"'},
      {q:'Welche Jobs sind besonders von Automatisierung betroffen?',
       opts:['a) Ärzte und Lehrer','b) Einfache, repetitive Tätigkeiten','c) IT-Spezialisten','d) Manager'],a:1,
       exp:'"Besonders betroffen sind einfache, repetitive Tätigkeiten"'},
      {q:'Was fordern Experten zur Vorbereitung auf die Digitalisierung?',
       opts:['a) Weniger Technologie','b) Kürzere Arbeitszeiten','c) Massive Investitionen in Bildung','d) Mehr Fabrikarbeiter'],a:2,
       exp:'"Experten fordern deshalb massive Investitionen in Bildung und Weiterbildung"'},
      {q:'Was bedeutet "Lebenslanges Lernen" im Kontext des Textes?',
       opts:['a) Als Kind lernen','b) Kontinuierliche Weiterbildung durch das ganze Leben','c) Universitätsstudium','d) Online-Spiele spielen'],a:1,
       exp:'"Arbeitnehmer müssen bereit sein, sich kontinuierlich weiterzubilden"'},
      {q:'Was hat Deutschland bereits als Reaktion unternommen?',
       opts:['a) Nichts','b) Digitalisierung verboten','c) Staatliche Umschulungsprogramme und Volkshochschulkurse','d) Alle Jobs automatisiert'],a:2,
       exp:'"staatliche Programme zur Förderung von Umschulungen, Volkshochschulen bieten digitale Kurse an"'}
    ]
  }
];

// ─────────────────────────────────────────────────────────────
// 3. TABELË REFERENCË E SHPEJTË
// ─────────────────────────────────────────────────────────────

const REFERENCE_TABLES = {
  cases: {
    title: 'Rasat — Der/Die/Das sipas rasës',
    table: [
      { row:'Nominativ (kush?)', m:'der / ein', f:'die / eine', n:'das / ein', pl:'die / –' },
      { row:'Akkusativ (cilin?)', m:'den / einen', f:'die / eine', n:'das / ein', pl:'die / –' },
      { row:'Dativ (kujt?)', m:'dem / einem', f:'der / einer', n:'dem / einem', pl:'den / –en' },
      { row:'Genitiv (i kujt?)', m:'des / eines', f:'der / einer', n:'des / eines', pl:'der / –' }
    ],
    note:'Ndryshimi kryesor: Maskullori ndryshon Nom→Akk: DER → DEN'
  },
  possessives: {
    title: 'Posesivat — mein, dein, sein...',
    table: [
      { pro:'ich', nom:'mein/meine', akk:'meinen/meine', dat:'meinem/meiner' },
      { pro:'du', nom:'dein/deine', akk:'deinen/deine', dat:'deinem/deiner' },
      { pro:'er/es', nom:'sein/seine', akk:'seinen/seine', dat:'seinem/seiner' },
      { pro:'sie', nom:'ihr/ihre', akk:'ihren/ihre', dat:'ihrem/ihrer' },
      { pro:'wir', nom:'unser/unsere', akk:'unseren/unsere', dat:'unserem/unserer' },
      { pro:'ihr', nom:'euer/eure', akk:'euren/eure', dat:'eurem/eurer' },
      { pro:'sie/Sie', nom:'ihr/ihre / Ihr/Ihre', akk:'ihren/ihre', dat:'ihrem/ihrer' }
    ]
  },
  prepositions: {
    title: 'Prepozicat sipas rasës',
    groups: [
      { rasa:'Gjithmonë AKKUSATIV', list:'durch, für, gegen, ohne, um, bis, entlang' },
      { rasa:'Gjithmonë DATIV', list:'aus, bei, mit, nach, seit, von, zu, gegenüber, außer' },
      { rasa:'DATIV (ku?) / AKKUSATIV (ku shkon?)', list:'an, auf, hinter, in, neben, über, unter, vor, zwischen' },
      { rasa:'Gjithmonë GENITIV', list:'wegen, trotz, während, statt, aufgrund, anstatt, innerhalb, außerhalb' }
    ]
  },
  connectors: {
    title: 'Lidhëzat kryesore',
    groups: [
      { type:'Bashkërenditëse (Pos. 0)', list:'und, aber, oder, denn, sondern, doch' },
      { type:'Ndajfolje lidhëse (Pos. 1)', list:'deshalb, trotzdem, außerdem, dennoch, allerdings, schließlich' },
      { type:'Nënrenditëse (Folja në fund)', list:'weil, dass, wenn, ob, obwohl, damit, bevor, nachdem, während, sobald' }
    ]
  },
  irregularVerbs: {
    title: '30 Foljet parregullte më të rëndësishme',
    verbs: [
      ['gehen','ging','ist gegangen'],['kommen','kam','ist gekommen'],['fahren','fuhr','ist gefahren'],
      ['laufen','lief','ist gelaufen'],['fliegen','flog','ist geflogen'],['schwimmen','schwamm','ist geschwommen'],
      ['essen','aß','hat gegessen'],['trinken','trank','hat getrunken'],['schlafen','schlief','hat geschlafen'],
      ['sprechen','sprach','hat gesprochen'],['schreiben','schrieb','hat geschrieben'],['lesen','las','hat gelesen'],
      ['sehen','sah','hat gesehen'],['hören','hörte','hat gehört'],['finden','fand','hat gefunden'],
      ['nehmen','nahm','hat genommen'],['geben','gab','hat gegeben'],['helfen','half','hat geholfen'],
      ['denken','dachte','hat gedacht'],['bringen','brachte','hat gebracht'],['wissen','wusste','hat gewusst'],
      ['kennen','kannte','hat gekannt'],['heißen','hieß','hat geheißen'],['bleiben','blieb','ist geblieben'],
      ['werden','wurde','ist geworden'],['sein','war','ist gewesen'],['haben','hatte','hat gehabt'],
      ['anfangen','fing an','hat angefangen'],['aufstehen','stand auf','ist aufgestanden'],['anrufen','rief an','hat angerufen']
    ]
  }
};

// ─────────────────────────────────────────────────────────────
// 4. PROGRES VIZUAL
// ─────────────────────────────────────────────────────────────

const PROGRESS = {
  getData: function() {
    try {
      var saved = localStorage.getItem('deutschal_progress');
      return saved ? JSON.parse(saved) : this.newData();
    } catch(e) { return this.newData(); }
  },
  newData: function() {
    return {
      startDate: new Date().toISOString().split('T')[0],
      daysActive: [],
      modulesCompleted: [],
      wordsLearned: 0,
      exercisesDone: 0,
      quizzesDone: 0,
      chatMessages: 0,
      lesenDone: [],
      grammarDone: [],
      streak: 0,
      lastActive: null
    };
  },
  save: function(data) {
    try { localStorage.setItem('deutschal_progress', JSON.stringify(data)); } catch(e){}
  },
  recordActivity: function(type, count) {
    var d = this.getData();
    var today = new Date().toISOString().split('T')[0];
    if (!d.daysActive.includes(today)) d.daysActive.push(today);
    // Streak
    if (d.lastActive) {
      var yesterday = new Date(Date.now()-86400000).toISOString().split('T')[0];
      if (d.lastActive === yesterday) d.streak = (d.streak||0) + 1;
      else if (d.lastActive !== today) d.streak = 1;
    } else { d.streak = 1; }
    d.lastActive = today;
    if (type === 'exercise') d.exercisesDone = (d.exercisesDone||0) + (count||1);
    if (type === 'quiz') d.quizzesDone = (d.quizzesDone||0) + 1;
    if (type === 'chat') d.chatMessages = (d.chatMessages||0) + 1;
    if (type === 'lesen') d.lesenDone = d.lesenDone || [];
    if (type === 'grammar' && count) { d.grammarDone = d.grammarDone||[]; if(!d.grammarDone.includes(count)) d.grammarDone.push(count); }
    this.save(d);
    return d;
  },
  getLeitnerStats: function() {
    var d = LEITNER.getStats();
    return { box1:d.box1, box2:d.box2, box3:d.box3, box4:d.box4, box5:d.box5, total:d.total };
  }
};

// ─────────────────────────────────────────────────────────────
// 5. FJALA E DITËS
// ─────────────────────────────────────────────────────────────

const WORD_OF_DAY = {
  // Curated list of interesting/useful B1 words with explanations
  words: [
    {de:'Fernweh',sq:'malli për udhëtim / dëshira për të eksploruar',ex:'Ich habe Fernweh — ich möchte die Welt bereisen.',tip:'Fjalë e pamundur të përkthehet në një fjalë shqip!'},
    {de:'Heimweh',sq:'malli për shtëpinë',ex:'In Berlin habe ich manchmal Heimweh nach Albanien.',tip:'E kundërta e Fernweh.'},
    {de:'Weltschmerz',sq:'trishtimi për gjendjen e botës',ex:'Die Nachrichten machen mir Weltschmerz.',tip:'Fjalë filozofike gjermane e famshme.'},
    {de:'Verschlimmbessern',sq:'ta bësh diçka më keq duke u munduar ta bësh më mirë',ex:'Er hat den Computer verschlimmbessert.',tip:'Fjala e gjatë e vetme me këtë kuptim!'},
    {de:'Fingerspitzengefühl',sq:'ndjeshmëri e hollë / takt',ex:'Du brauchst Fingerspitzengefühl in dieser Situation.',tip:'Fjalë për fjalë: ndjesia e majave të gishtave.'},
    {de:'Verschwendung',sq:'shpërdorim',ex:'Das ist eine Verschwendung von Zeit und Geld.',tip:'Nga verschwen+den = shpërdoroj.'},
    {de:'nachhaltig',sq:'i qëndrueshëm / afatgjatë',ex:'Wir müssen nachhaltiger leben.',tip:'Shumë e rëndësishme në debatin e klimës.'},
    {de:'Gemütlichkeit',sq:'rehati / ngrohtësi / komoditet',ex:'Deutsche Weihnachtsmärkte haben viel Gemütlichkeit.',tip:'Koncepti qendror i kulturës gjermane.'},
    {de:'Schadenfreude',sq:'gëzimi ndaj fatkeqësisë së tjetrit',ex:'Das ist reine Schadenfreude!',tip:'Kjo fjalë gjermane ekziston edhe në anglisht!'},
    {de:'Doppelgänger',sq:'kopja / dubleti',ex:'Du hast einen Doppelgänger in meiner Stadt.',tip:'Edhe kjo fjalë ekziston në anglisht!'},
    {de:'Feierabend',sq:'fundi i ditës së punës',ex:'Feierabend! Jetzt kann ich entspannen.',tip:'Fjalë për fjalë: mbrëmja e festës/fundimit.'},
    {de:'Zugzwang',sq:'detyrimi për të vepruar',ex:'Ich bin im Zugzwang — ich muss eine Entscheidung treffen.',tip:'Nga shahet — duhet të lëvizësh.'},
    {de:'Lebensabschnittsgefährte',sq:'partneri i një faze të jetës',ex:'Er war mein Lebensabschnittsgefährte in Wien.',tip:'German compound words at their finest!'},
    {de:'Verschlossen',sq:'i mbyllur / introvert',ex:'Er ist sehr verschlossen — redet wenig.',tip:'E kundërta: offen (i hapur).'},
    {de:'Augenblick',sq:'çasti / momenti',ex:'Einen Augenblick bitte! — Një moment!',tip:'Fjalë për fjalë: vështrimi i syrit.'},
    {de:'Zwischenmenschlich',sq:'ndërnjerëzor',ex:'Zwischenmenschliche Probleme sind oft komplex.',tip:'Zwischen+menschlich = ndër+njerëzor.'},
    {de:'Freigeist',sq:'mendimtar i lirë',ex:'Er ist ein echter Freigeist.',tip:'Frei+Geist = frymë e lirë.'},
    {de:'Überwältigt',sq:'i shfytyrosur / i pushtuar nga emocionet',ex:'Ich bin überwältigt von dieser Schönheit.',tip:'Sehr starkes Gefühl!'},
    {de:'Gelassenheit',sq:'qetësia / gjakftohtësia',ex:'Er reagiert mit Gelassenheit auf Kritik.',tip:'Virtyt shumë i vlerësuar në kulturën gjermane.'},
    {de:'Rücksicht',sq:'konsideratë / vëmendje ndaj të tjerëve',ex:'Nimm Rücksicht auf andere!',tip:'Rücksicht nehmen = të kesh konsideratë.'},
    {de:'Schlüsselerlebnis',sq:'përvoja kyçe / përvojë formuese',ex:'Das war ein Schlüsselerlebnis in meinem Leben.',tip:'Schlüssel = çelës + Erlebnis = përvojë.'},
    {de:'Mitgefühl',sq:'empati / bashkëndjenjë',ex:'Er zeigt viel Mitgefühl.',tip:'Mit+Gefühl = me+ndjenjë.'},
    {de:'Verantwortungsbewusstsein',sq:'ndërgjegjja e përgjegjësisë',ex:'Sie hat ein großes Verantwortungsbewusstsein.',tip:'Fjalë e gjatë por shumë e rëndësishme!'},
    {de:'Selbstverwirklichung',sq:'vetërealizimi',ex:'Selbstverwirklichung ist ein wichtiges Lebensziel.',tip:'Maslow-s hierarchy — i njohin të gjithë!'},
    {de:'Unangefochtener',sq:'i pakontestuar',ex:'Er ist der unangefochtene Champion.',tip:'Un+an+gefochten = i pa+kontestuar.'},
    {de:'Alltagstrott',sq:'monotonia e përditshme',ex:'Ich bin im Alltagstrott gefangen.',tip:'Alltag+Trott = ditë e zakonshme + ecja e ngadaltë.'},
    {de:'Tatendrang',sq:'etja për veprim',ex:'Sie hat einen großen Tatendrang.',tip:'Taten+Drang = veprime+dëshirë.'},
    {de:'Zielstrebig',sq:'i vendosur / i drejtuar drejt qëllimit',ex:'Er ist sehr zielstrebig.',tip:'Ziel+strebig = drejt+qëllimit.'},
    {de:'Aufbruchstimmung',sq:'humori i nisjes / optimizmi i ri',ex:'Nach den Wahlen gibt es eine Aufbruchstimmung.',tip:'Aufbruch+Stimmung = nisje+humor.'},
    {de:'Geborgenheit',sq:'siguria / ngrohtësia e mbrojtjes',ex:'Zu Hause fühle ich Geborgenheit.',tip:'Ndjesia e të qenët i mbrojtur dhe i dashur.'}
  ],

  getForToday: function() {
    var now = new Date();
    var dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000);
    return this.words[dayOfYear % this.words.length];
  }
};

// ─────────────────────────────────────────────────────────────
// 6. USHTRIME GAP-FILL (Lückentext)
// ─────────────────────────────────────────────────────────────

const GAP_FILL_EXERCISES = [
  // A1 level
  { id:'GF1', level:'A1', title:'Prezantimi',
    text:'Ich ___(1) Dion. Ich ___(2) aus Albanien. Ich ___(3) 28 Jahre alt. Ich ___(4) in Wien.',
    gaps:[
      {n:1, ans:'heiße', opts:['heiße','heiß','heißt','heißen'], hint:'ich + heißen'},
      {n:2, ans:'komme', opts:['komme','kommt','kommen','kommst'], hint:'ich + kommen'},
      {n:3, ans:'bin', opts:['bin','bist','ist','sind'], hint:'ich + sein (Alter)'},
      {n:4, ans:'wohne', opts:['wohne','wohnst','wohnt','wohnen'], hint:'ich + wohnen'}
    ]
  },
  { id:'GF2', level:'A1', title:'Im Café',
    text:'Guten Tag! Ich ___(1) einen Kaffee ___(2). Was ___(3) der Kaffee? — Der Kaffee ___(4) 3 Euro.',
    gaps:[
      {n:1, ans:'möchte', opts:['möchte','möchten','will','wollen'], hint:'dëshirojë (formal)'},
      {n:2, ans:'bitte', opts:['bitte','danke','gerne','ja'], hint:'ju lutem'},
      {n:3, ans:'kostet', opts:['kostet','kosten','macht','ist'], hint:'sa kushton?'},
      {n:4, ans:'kostet', opts:['kostet','kosten','macht','hat'], hint:'kushton'}
    ]
  },
  { id:'GF3', level:'A1', title:'Familie',
    text:'Mein Vater ___(1) Arzt und meine Mutter ___(2) Lehrerin. Ich ___(3) einen Bruder. Er ___(4) Jonas und ___(5) in Berlin.',
    gaps:[
      {n:1, ans:'ist', opts:['ist','bin','bist','sind'], hint:'er/sie/es + sein'},
      {n:2, ans:'ist', opts:['ist','bin','bist','sind'], hint:'er/sie/es + sein'},
      {n:3, ans:'habe', opts:['habe','hat','haben','hast'], hint:'ich + haben'},
      {n:4, ans:'heißt', opts:['heißt','heiße','heißen','heißt'], hint:'er + heißen'},
      {n:5, ans:'wohnt', opts:['wohnt','wohne','wohnen','wohnst'], hint:'er + wohnen'}
    ]
  },
  // A2 level
  { id:'GF4', level:'A2', title:'E kaluara — Perfekt',
    text:'Gestern ___(1) ich nach Berlin ___(2). Ich ___(3) das Pergamonmuseum ___(4) und ___(5) viele interessante Dinge ___(6).',
    gaps:[
      {n:1, ans:'bin', opts:['bin','habe','war','hatte'], hint:'fahren → sein (lëvizje)'},
      {n:2, ans:'gefahren', opts:['gefahren','gefahrt','fahren','fuhr'], hint:'Partizip II von fahren'},
      {n:3, ans:'habe', opts:['habe','bin','hatte','war'], hint:'besuchen → haben'},
      {n:4, ans:'besucht', opts:['besucht','besuchtet','besuch','besuchen'], hint:'Partizip II von besuchen'},
      {n:5, ans:'habe', opts:['habe','bin','hatte','war'], hint:'sehen → haben'},
      {n:6, ans:'gesehen', opts:['gesehen','geseht','sehen','sah'], hint:'Partizip II von sehen'}
    ]
  },
  { id:'GF5', level:'A2', title:'Foljet modale',
    text:'Ich ___(1) heute nicht in die Arbeit gehen, weil ich krank ___(2). Ich ___(3) zum Arzt gehen. Der Arzt ___(4) mir gesagt, ich ___(5) zuhause bleiben.',
    gaps:[
      {n:1, ans:'kann', opts:['kann','will','muss','darf'], hint:'nuk mundem'},
      {n:2, ans:'bin', opts:['bin','habe','war','hatte'], hint:'sein, Präsens'},
      {n:3, ans:'muss', opts:['muss','will','kann','darf'], hint:'duhet (domosdoshmëri)'},
      {n:4, ans:'hat', opts:['hat','habe','hatte','ist'], hint:'haben, Perfekt, er'},
      {n:5, ans:'soll', opts:['soll','will','muss','kann'], hint:'sipas mjekut duhet'}
    ]
  },
  { id:'GF6', level:'A2', title:'Fjalia e varur — weil/dass',
    text:'Ich lerne Deutsch, ___(1) ich in Deutschland arbeiten möchte. Ich denke, ___(2) Deutsch eine schöne Sprache ___(3). Obwohl es schwer ___(4), mache ich jeden Tag weiter.',
    gaps:[
      {n:1, ans:'weil', opts:['weil','dass','wenn','ob'], hint:'sepse → folja në fund'},
      {n:2, ans:'dass', opts:['dass','weil','wenn','ob'], hint:'që → folja në fund'},
      {n:3, ans:'ist', opts:['ist','sein','war','wäre'], hint:'folja në fund të fjalisë varëse'},
      {n:4, ans:'ist', opts:['ist','sein','war','wäre'], hint:'obwohl → folja në fund'}
    ]
  },
  // B1 level
  { id:'GF7', level:'B1', title:'Konjunktivi II — Kushtet',
    text:'Wenn ich mehr Zeit ___(1), ___(2) ich öfter ins Kino gehen. Wenn ich reich ___(3), ___(4) ich eine große Reise machen. Das ___(5) wunderbar sein!',
    gaps:[
      {n:1, ans:'hätte', opts:['hätte','habe','hatte','haben'], hint:'haben → Konjunktiv II'},
      {n:2, ans:'würde', opts:['würde','werde','wird','würden'], hint:'würde + Infinitiv'},
      {n:3, ans:'wäre', opts:['wäre','bin','war','sei'], hint:'sein → Konjunktiv II'},
      {n:4, ans:'würde', opts:['würde','werde','wird','wäre'], hint:'würde + Infinitiv'},
      {n:5, ans:'wäre', opts:['wäre','ist','war','sein'], hint:'sein → Konjunktiv II'}
    ]
  },
  { id:'GF8', level:'B1', title:'Pasivi',
    text:'Das neue Museum ___(1) im April eröffnet. Viele Besucher ___(2) erwartet. Die Ausstellung ___(3) von bekannten Künstlern ___(4). Täglich ___(5) viele Führungen ___(6).',
    gaps:[
      {n:1, ans:'wird', opts:['wird','wurde','ist','hat'], hint:'Passiv Präsens: wird + Partizip II'},
      {n:2, ans:'werden', opts:['werden','wurden','sind','haben'], hint:'Passiv Präsens, Plural'},
      {n:3, ans:'wird', opts:['wird','wurde','ist','hat'], hint:'Passiv Präsens'},
      {n:4, ans:'gestaltet', opts:['gestaltet','gestalten','gestaltete','gestaltest'], hint:'Partizip II von gestalten'},
      {n:5, ans:'werden', opts:['werden','wurden','sind','haben'], hint:'Passiv Präsens, Plural'},
      {n:6, ans:'angeboten', opts:['angeboten','anbieten','anbot','angeboten'], hint:'Partizip II von anbieten'}
    ]
  },
  { id:'GF9', level:'B1', title:'Lidhëzat komplekse',
    text:'___(1) mehr ich lerne, ___(2) besser spreche ich. Ich spreche ___(3) Deutsch ___(4) Englisch — zwei Fremdsprachen. ___(5) lerne ich beide täglich, ist es nicht so schwer.',
    gaps:[
      {n:1, ans:'Je', opts:['Je','Desto','So','Wenn'], hint:'je...desto (sa...aq)'},
      {n:2, ans:'desto', opts:['desto','je','umso','aber'], hint:'je...desto'},
      {n:3, ans:'sowohl', opts:['sowohl','entweder','weder','nicht nur'], hint:'sowohl...als auch (si...ashtu edhe)'},
      {n:4, ans:'als auch', opts:['als auch','oder','noch','sondern'], hint:'sowohl...als auch'},
      {n:5, ans:'Solange', opts:['Solange','Obwohl','Weil','Wenn'], hint:'sa kohë që'}
    ]
  },
  { id:'GF10', level:'B1', title:'Email formale',
    text:'Sehr geehrte Damen und ___(1),\n\nIch ___(2) mich auf Ihre Stellenanzeige vom 15. März. Ich ___(3) drei Jahre Erfahrung als Softwareentwickler und ___(4) gut Deutsch. ___(5) stehe ich für ein Vorstellungsgespräch ___(6).',
    gaps:[
      {n:1, ans:'Herren', opts:['Herren','Männer','Damen','Leute'], hint:'Sehr geehrte Damen und Herren — formula standarde'},
      {n:2, ans:'bewerbe', opts:['bewerbe','bewerbte','bewerb','bewerben'], hint:'sich bewerben → ich'},
      {n:3, ans:'habe', opts:['habe','hat','hatte','haben'], hint:'Erfahrung + haben, ich'},
      {n:4, ans:'spreche', opts:['spreche','spricht','sprechen','sprach'], hint:'sprechen, ich'},
      {n:5, ans:'Gerne', opts:['Gerne','Vielleicht','Manchmal','Leider'], hint:'me dëshirë → formal closing'},
      {n:6, ans:'zur Verfügung', opts:['zur Verfügung','zu Verfügung','für Verfügung','zur Verfühgung'], hint:'stehe zur Verfügung = jam në dispozicion'}
    ]
  }
];





// ═══════════════════════════════════════════════════
// UI FUNCTIONS — All 6 features
// ═══════════════════════════════════════════════════

// ── 1. KONJUGIM ──
var conjState = { verbIdx: 0, tense: 'prasens', quizMode: false, quizAnswer: null, quizCorrect: null };

function showConjugation() {
  conjState.verbIdx = 0; conjState.tense = 'prasens';
  renderConjScreen();
  showScreen('conjScreen');
}
function renderConjScreen() {
  var c = document.getElementById('conjContent');
  if (!c) return;
  var v = VERB_CONJUGATION.verbs[conjState.verbIdx];
  var persons = ['ich','du','er/sie/es','wir','ihr','sie/Sie'];
  var tenses = [
    {id:'prasens', label:'Präsens'},
    {id:'prateritum', label:'Präteritum'},
    {id:'perfekt', label:'Perfekt'},
    {id:'futur', label:'Futur I'},
    {id:'konjII', label:'Konjunktiv II'}
  ];
  var groupColors = {rregullt:'var(--green)', parregullt:'var(--red)', 'me ndarje':'var(--gold)', modale:'var(--a2-color)', refleksive:'var(--b1-color)', pasiv:'var(--text-muted)'};
  var gc = groupColors[v.group] || 'var(--text-muted)';

  var conjugated = v[conjState.tense];
  var isSimple = Array.isArray(conjugated);

  var html = '<div style="max-width:700px;margin:0 auto">' +
    // Verb selector
    '<div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:20px">' +
    VERB_CONJUGATION.verbs.map(function(vb, i) {
      return '<button onclick="conjState.verbIdx='+i+';conjState.tense=\'prasens\';renderConjScreen()" style="padding:6px 12px;border-radius:20px;border:2px solid '+(i===conjState.verbIdx?gc:'var(--border)')+';background:'+(i===conjState.verbIdx?'rgba(240,180,41,0.1)':'transparent')+';color:'+(i===conjState.verbIdx?gc:'var(--text-muted)')+';cursor:pointer;font-size:0.8rem;font-family:DM Sans,sans-serif">' + vb.inf + '</button>';
    }).join('') +
    '</div>' +

    // Verb header
    '<div style="background:var(--surface2);border-radius:14px;padding:20px 24px;margin-bottom:18px;border-left:4px solid '+gc+'">' +
    '<div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap">' +
    '<h2 style="font-size:1.8rem;color:var(--gold);margin:0">'+v.inf+'</h2>' +
    '<button onclick="TTS.speak(\''+v.inf+'\')" style="background:none;border:none;cursor:pointer;font-size:1rem;color:var(--gold);opacity:0.7">🔊</button>' +
    '<span style="color:var(--text-muted);font-size:1rem">— '+v.sq+'</span>' +
    '<span style="margin-left:auto;padding:4px 12px;border-radius:20px;font-size:0.75rem;background:'+gc+'22;color:'+gc+'">'+v.group+'</span>' +
    '</div>' +
    (v.note ? '<p style="font-size:0.82rem;color:var(--text-muted);margin-top:8px;margin-bottom:0">💡 '+v.note+'</p>' : '') +
    '</div>' +

    // Tense tabs
    '<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:16px">' +
    tenses.map(function(t) {
      var active = t.id === conjState.tense;
      return '<button onclick="conjState.tense=\''+t.id+'\';renderConjScreen()" style="padding:7px 14px;border-radius:8px;border:2px solid '+(active?gc:'var(--border)')+';background:'+(active?'rgba(240,180,41,0.1)':'transparent')+';color:'+(active?gc:'var(--text-muted)')+';cursor:pointer;font-size:0.82rem;font-family:DM Sans,sans-serif;font-weight:'+(active?'600':'400')+'">'+t.label+'</button>';
    }).join('') +
    '</div>' +

    // Conjugation table
    '<div style="background:var(--surface2);border-radius:12px;overflow:hidden;border:1px solid var(--border);margin-bottom:16px">' +
    (isSimple ? persons.map(function(p, i) {
      var form = conjugated[i];
      return '<div style="display:flex;align-items:center;padding:12px 18px;border-bottom:1px solid var(--border);gap:16px">' +
        '<span style="min-width:80px;font-size:0.82rem;color:var(--text-muted)">' + p + '</span>' +
        '<span style="font-size:1.05rem;color:var(--text);font-weight:600">' + form + '</span>' +
        '<button onclick="TTS.speak(\''+p.split('/')[0].trim()+' '+form+'\')" style="background:none;border:none;cursor:pointer;font-size:0.85rem;color:var(--gold);opacity:0.6;margin-left:auto">🔊</button>' +
        '</div>';
    }).join('') :
    '<div style="padding:16px 18px;font-size:1rem;color:var(--text)">' +
    '<strong style="color:var(--gold)">' + conjState.tense + ':</strong> ' + conjugated +
    ' <button onclick="TTS.speak(\''+conjugated+'\')" style="background:none;border:none;cursor:pointer;font-size:0.85rem;color:var(--gold)">🔊</button></div>') +
    '</div>' +

    // Navigation
    '<div style="display:flex;gap:10px">' +
    (conjState.verbIdx > 0 ? '<button class="btn-outline" onclick="conjState.verbIdx--;renderConjScreen()" style="flex:1">← ' + VERB_CONJUGATION.verbs[conjState.verbIdx-1].inf + '</button>' : '<div style="flex:1"></div>') +
    (conjState.verbIdx < VERB_CONJUGATION.verbs.length-1 ? '<button class="btn" onclick="conjState.verbIdx++;renderConjScreen()" style="flex:1">' + VERB_CONJUGATION.verbs[conjState.verbIdx+1].inf + ' →</button>' : '') +
    '</div></div>';

  c.innerHTML = html;
}

// ── 2. REFERENCE TABLE ──
var refState = { section: 'cases' };
function showReference() {
  refState.section = 'cases';
  renderRefScreen();
  showScreen('refScreen');
}
function switchRefSection(s) {
  refState.section = s;
  renderRefScreen();
}
function renderRefScreen() {
  var c = document.getElementById('refContent');
  if (!c) return;
  var sections = [
    {id:'cases', label:'📊 Rasat', icon:'📊'},
    {id:'possessives', label:'🏠 Posesivat', icon:'🏠'},
    {id:'prepositions', label:'📍 Prepozicat', icon:'📍'},
    {id:'connectors', label:'🔗 Lidhëzat', icon:'🔗'},
    {id:'irregularVerbs', label:'⚡ Foljet parregullte', icon:'⚡'}
  ];
  var html = '<div style="max-width:800px;margin:0 auto">' +
    '<div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:20px">' +
    sections.map(function(s) {
      var a = s.id === refState.section;
      return '<button onclick="switchRefSection(\''+s.id+'\')" style="padding:8px 16px;border-radius:20px;border:2px solid '+(a?'var(--gold)':'var(--border)')+';background:'+(a?'rgba(240,180,41,0.1)':'transparent')+';color:'+(a?'var(--gold)':'var(--text-muted)')+';cursor:pointer;font-size:0.82rem;font-family:DM Sans,sans-serif">'+s.label+'</button>';
    }).join('') +
    '</div>';

  var d = REFERENCE_TABLES[refState.section];

  if (refState.section === 'cases') {
    html += '<h3 style="color:var(--gold);margin-bottom:14px">'+d.title+'</h3>';
    html += '<div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:0.85rem">';
    html += '<tr style="background:var(--surface2)"><th style="padding:10px;text-align:left;color:var(--text-muted)">Rasa</th><th style="padding:10px;color:var(--gold)">Maskullor (M)</th><th style="padding:10px;color:var(--a2-color)">Femëror (F)</th><th style="padding:10px;color:var(--green)">Asnjanës (N)</th><th style="padding:10px;color:var(--text-muted)">Shumës</th></tr>';
    d.table.forEach(function(row) {
      html += '<tr style="border-bottom:1px solid var(--border)"><td style="padding:10px;font-weight:600;color:var(--text)">'+row.row+'</td><td style="padding:10px;font-family:monospace;color:var(--gold)">'+row.m+'</td><td style="padding:10px;font-family:monospace;color:var(--a2-color)">'+row.f+'</td><td style="padding:10px;font-family:monospace;color:var(--green)">'+row.n+'</td><td style="padding:10px;font-family:monospace;color:var(--text-muted)">'+row.pl+'</td></tr>';
    });
    html += '</table></div>';
    html += '<div style="margin-top:12px;padding:12px;background:rgba(240,180,41,0.08);border-radius:8px;font-size:0.85rem;color:var(--text-muted)">💡 '+d.note+'</div>';
  }

  if (refState.section === 'possessives') {
    html += '<h3 style="color:var(--gold);margin-bottom:14px">'+d.title+'</h3>';
    html += '<div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:0.82rem">';
    html += '<tr style="background:var(--surface2)"><th style="padding:10px;text-align:left;color:var(--text-muted)">Kryefjala</th><th style="padding:10px;color:var(--gold)">Nominativ</th><th style="padding:10px;color:var(--a2-color)">Akkusativ</th><th style="padding:10px;color:var(--green)">Dativ</th></tr>';
    d.table.forEach(function(row) {
      html += '<tr style="border-bottom:1px solid var(--border)"><td style="padding:10px;font-weight:600;color:var(--text)">'+row.pro+'</td><td style="padding:10px;font-family:monospace;color:var(--gold)">'+row.nom+'</td><td style="padding:10px;font-family:monospace;color:var(--a2-color)">'+row.akk+'</td><td style="padding:10px;font-family:monospace;color:var(--green)">'+row.dat+'</td></tr>';
    });
    html += '</table></div>';
  }

  if (refState.section === 'prepositions') {
    html += '<h3 style="color:var(--gold);margin-bottom:14px">'+REFERENCE_TABLES.prepositions.title+'</h3>';
    var colors = ['var(--a2-color)','var(--green)','var(--gold)','var(--red)'];
    REFERENCE_TABLES.prepositions.groups.forEach(function(g, i) {
      html += '<div style="background:var(--surface2);border-radius:10px;padding:14px 18px;margin-bottom:10px;border-left:4px solid '+colors[i]+'">' +
        '<div style="font-weight:700;color:'+colors[i]+';margin-bottom:6px">'+g.rasa+'</div>' +
        '<div style="font-family:monospace;font-size:0.9rem;color:var(--text)">'+g.list+'</div>' +
        '</div>';
    });
  }

  if (refState.section === 'connectors') {
    html += '<h3 style="color:var(--gold);margin-bottom:14px">'+REFERENCE_TABLES.connectors.title+'</h3>';
    var cc = ['var(--green)','var(--gold)','var(--red)'];
    REFERENCE_TABLES.connectors.groups.forEach(function(g, i) {
      html += '<div style="background:var(--surface2);border-radius:10px;padding:14px 18px;margin-bottom:10px;border-left:4px solid '+cc[i]+'">' +
        '<div style="font-weight:700;color:'+cc[i]+';margin-bottom:6px">'+g.type+'</div>' +
        '<div style="font-family:monospace;color:var(--text)">'+g.list+'</div>' +
        '</div>';
    });
  }

  if (refState.section === 'irregularVerbs') {
    html += '<h3 style="color:var(--gold);margin-bottom:14px">'+REFERENCE_TABLES.irregularVerbs.title+'</h3>';
    html += '<div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:0.82rem">';
    html += '<tr style="background:var(--surface2)"><th style="padding:8px;text-align:left;color:var(--gold)">Infinitiv</th><th style="padding:8px;color:var(--a2-color)">Präteritum</th><th style="padding:8px;color:var(--green)">Perfekt</th></tr>';
    REFERENCE_TABLES.irregularVerbs.verbs.forEach(function(v, i) {
      html += '<tr style="background:'+(i%2===0?'transparent':'var(--surface2)')+';border-bottom:1px solid var(--border)">' +
        '<td style="padding:8px;font-weight:600;color:var(--text)">'+v[0]+'</td>' +
        '<td style="padding:8px;font-family:monospace;color:var(--a2-color)">'+v[1]+'</td>' +
        '<td style="padding:8px;font-family:monospace;color:var(--green)">'+v[2]+'</td>' +
        '</tr>';
    });
    html += '</table></div>';
  }

  html += '<div style="margin-top:20px;padding-top:16px;border-top:1px solid var(--border);display:flex;gap:8px;flex-wrap:wrap">' + '<button onclick="printIrregularVerbs()" style="padding:8px 16px;background:var(--surface2);border:1px solid var(--border);border-radius:8px;color:var(--text-muted);cursor:pointer;font-size:0.82rem;font-family:DM Sans,sans-serif">🖨️ Printo Foljet Parregullte</button>' + '<button onclick="printVocab(\'B1\')" style="padding:8px 16px;background:var(--surface2);border:1px solid var(--border);border-radius:8px;color:var(--text-muted);cursor:pointer;font-size:0.82rem;font-family:DM Sans,sans-serif">🖨️ Printo Fjalor B1</button>' + '<button onclick="printVocab(\'A1\')" style="padding:8px 16px;background:var(--surface2);border:1px solid var(--border);border-radius:8px;color:var(--text-muted);cursor:pointer;font-size:0.82rem;font-family:DM Sans,sans-serif">🖨️ Printo Fjalor A1</button>' + '</div>';
  html += '</div>';
  c.innerHTML = html;
}

// ── 3. PROGRES VIZUAL ──
function showProgress() {
  renderProgressScreen();
  showScreen('progressScreen');
}
function renderProgressScreen() {
  var c = document.getElementById('progressContent');
  if (!c) return;
  var d = PROGRESS.getData();
  var leitner = PROGRESS.getLeitnerStats();
  var today = new Date().toISOString().split('T')[0];
  var daysTotal = d.daysActive ? d.daysActive.length : 0;
  var streak = d.streak || 0;
  var completedMods = state.completedModules ? state.completedModules.length : 0;
  var allMods = MODULES.A1.length + MODULES.A2.length + MODULES.B1.length;
  var modPct = Math.round(completedMods / allMods * 100);
  var vocabPct = Math.round(leitner.total / 1956 * 100);

  // Activity heatmap (last 30 days)
  var heatmap = '';
  for (var i = 29; i >= 0; i--) {
    var day = new Date(Date.now() - i*86400000).toISOString().split('T')[0];
    var active = d.daysActive && d.daysActive.includes(day);
    heatmap += '<div title="'+day+'" style="width:14px;height:14px;border-radius:3px;background:'+(active?'var(--green)':'var(--surface2)')+';border:1px solid var(--border)"></div>';
  }

  c.innerHTML = '<div style="max-width:700px;margin:0 auto">' +

    // Stats grid
    '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:12px;margin-bottom:24px">' +
    [
      {icon:'🔥', val:streak, label:'Ditë radhazi', color:'var(--gold)'},
      {icon:'📅', val:daysTotal, label:'Ditë aktive', color:'var(--green)'},
      {icon:'📚', val:completedMods+'/'+allMods, label:'Module kaluar', color:'var(--a2-color)'},
      {icon:'🃏', val:leitner.total, label:'Kartelë SRS', color:'var(--b1-color)'},
      {icon:'✏️', val:d.exercisesDone||0, label:'Ushtrime', color:'var(--text-muted)'},
      {icon:'🤖', val:d.chatMessages||0, label:'Mesazhe AI', color:'var(--gold)'}
    ].map(function(s) {
      return '<div style="background:var(--surface2);border-radius:12px;padding:16px;text-align:center;border:1px solid var(--border)">' +
        '<div style="font-size:1.5rem;margin-bottom:4px">'+s.icon+'</div>' +
        '<div style="font-size:1.6rem;font-weight:700;color:'+s.color+'">'+s.val+'</div>' +
        '<div style="font-size:0.75rem;color:var(--text-muted)">'+s.label+'</div></div>';
    }).join('') +
    '</div>' +

    // Progress bars
    '<div style="background:var(--surface2);border-radius:12px;padding:20px;margin-bottom:16px;border:1px solid var(--border)">' +
    '<h4 style="color:var(--text);margin-bottom:14px">📊 Progresi</h4>' +
    [
      {label:'Module të kaluara', pct:modPct, color:'var(--green)'},
      {label:'Fjalë SRS të mësuara', pct:vocabPct, color:'var(--gold)'},
      {label:'Kartelat Box 4-5 (të mësuara)', pct:leitner.total>0?Math.round((leitner.box4+leitner.box5)/leitner.total*100):0, color:'var(--a2-color)'}
    ].map(function(p) {
      return '<div style="margin-bottom:14px"><div style="display:flex;justify-content:space-between;margin-bottom:5px"><span style="font-size:0.82rem;color:var(--text-dim)">'+p.label+'</span><span style="font-size:0.82rem;color:'+p.color+';font-weight:600">'+p.pct+'%</span></div>' +
        '<div style="height:8px;background:var(--surface);border-radius:4px;overflow:hidden"><div style="height:8px;width:'+p.pct+'%;background:'+p.color+';border-radius:4px;transition:width 0.5s"></div></div></div>';
    }).join('') +
    '</div>' +

    // Activity heatmap
    '<div style="background:var(--surface2);border-radius:12px;padding:20px;margin-bottom:16px;border:1px solid var(--border)">' +
    '<h4 style="color:var(--text);margin-bottom:12px">📅 Aktiviteti — 30 ditët e fundit</h4>' +
    '<div style="display:flex;flex-wrap:wrap;gap:3px">'+heatmap+'</div>' +
    '<div style="margin-top:8px;font-size:0.75rem;color:var(--text-muted)">🟩 = ditë aktive</div>' +
    '</div>' +

    // Leitner boxes
    '<div style="background:var(--surface2);border-radius:12px;padding:20px;border:1px solid var(--border)">' +
    '<h4 style="color:var(--text);margin-bottom:12px">🃏 Sistemi Leitner</h4>' +
    '<div style="display:grid;grid-template-columns:repeat(5,1fr);gap:8px">' +
    [1,2,3,4,5].map(function(b) {
      var cnt = leitner['box'+b]||0;
      var colors = ['var(--red)','var(--a2-color)','var(--gold)','var(--green)','var(--b1-color)'];
      var labels = ['Çdo ditë','3 ditë','1 javë','2 javë','30 ditë'];
      return '<div style="text-align:center;background:var(--surface);border-radius:8px;padding:10px;border:1px solid var(--border)">' +
        '<div style="font-size:1.3rem;font-weight:700;color:'+colors[b-1]+'">'+cnt+'</div>' +
        '<div style="font-size:0.7rem;color:var(--text-muted)">Box '+b+'</div>' +
        '<div style="font-size:0.65rem;color:var(--text-muted)">'+labels[b-1]+'</div>' +
        '</div>';
    }).join('') +
    '</div></div></div>';
}

// ── 4. GAP-FILL ──
var gapState = { exIdx: 0, answers: {}, level: 'ALL', submitted: false };

function showGapFill() {
  gapState = { exIdx: 0, answers: {}, level: 'ALL', submitted: false };
  renderGapScreen();
  showScreen('gapScreen');
}
function filterGapByLevel(level) {
  gapState.level = level;
  gapState.exIdx = 0;
  gapState.answers = {};
  gapState.submitted = false;
  renderGapScreen();
}
function renderGapScreen() {
  var c = document.getElementById('gapContent');
  if (!c) return;
  var all = GAP_FILL_EXERCISES.filter(function(ex) {
    return gapState.level === 'ALL' || ex.level === gapState.level;
  });
  if (all.length === 0) { c.innerHTML = '<p>Nuk ka ushtrime.</p>'; return; }
  var ex = all[gapState.exIdx % all.length];
  var levelColors = {A1:'var(--a1-color)',A2:'var(--a2-color)',B1:'var(--b1-color)'};
  var lc = levelColors[ex.level]||'var(--gold)';

  // Build text with gaps replaced by selects
  var gapIdx = 0;
  var rendered = ex.text.replace(/\n/g,'<br>');
  ex.gaps.forEach(function(g) {
    var key = 'g'+g.n;
    var userAns = gapState.answers[key];
    var done = userAns !== undefined;
    var correct = userAns === g.ans;
    var selectStyle = 'padding:4px 8px;border-radius:6px;border:2px solid '+(done?(correct?'var(--green)':'var(--red)'):'var(--gold)')+';background:var(--surface2);color:var(--text);font-family:DM Sans,sans-serif;cursor:pointer;font-size:0.88rem';
    var opts = '<option value="">— zgjidh —</option>' + g.opts.map(function(o) {
      return '<option value="'+o+'"'+(userAns===o?' selected':'')+'>'+o+'</option>';
    }).join('');
    var select = '<select id="gap_'+key+'" onchange="gapState.answers[\''+key+'\']=this.value;renderGapScreen()" style="'+selectStyle+'" '+(done?'disabled':'')+'>'+opts+'</select>';
    if (done) {
      select += (correct ? ' <span style="color:var(--green);font-size:0.85rem">✅</span>' : ' <span style="color:var(--red);font-size:0.85rem">❌ '+g.ans+'</span>');
    }
    rendered = rendered.replace('___('+g.n+')', select);
  });

  var allAnswered = ex.gaps.every(function(g){ return gapState.answers['g'+g.n] !== undefined; });
  var allCorrect = ex.gaps.every(function(g){ return gapState.answers['g'+g.n] === g.ans; });
  var correctCount = ex.gaps.filter(function(g){ return gapState.answers['g'+g.n] === g.ans; }).length;

  c.innerHTML = '<div style="max-width:700px;margin:0 auto">' +
    // Level filter
    '<div style="display:flex;gap:6px;margin-bottom:16px;flex-wrap:wrap">' +
    ['ALL','A1','A2','B1'].map(function(l) {
      var a = gapState.level===l;
      return '<button onclick="filterGapByLevel(\''+l+'\')" style="padding:6px 14px;border-radius:20px;border:2px solid '+(a?lc:'var(--border)')+';background:'+(a?'rgba(240,180,41,0.1)':'transparent')+';color:'+(a?lc:'var(--text-muted)')+';cursor:pointer;font-size:0.8rem;font-family:DM Sans,sans-serif">' + l + '</button>';
    }).join('') +
    '<span style="margin-left:auto;font-size:0.78rem;color:var(--text-muted);padding:6px">Ushtrimi '+(gapState.exIdx%all.length+1)+'/'+all.length+'</span>' +
    '</div>' +

    // Exercise
    '<div style="background:var(--surface2);border-radius:12px;padding:22px;margin-bottom:16px;border-left:4px solid '+lc+'">' +
    '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">' +
    '<h4 style="color:'+lc+';margin:0">'+ex.title+'</h4>' +
    '<span style="font-size:0.75rem;padding:3px 10px;border-radius:10px;background:'+lc+'22;color:'+lc+'">'+ex.level+'</span>' +
    '</div>' +
    '<div style="font-size:0.95rem;color:var(--text);line-height:2.2">'+rendered+'</div>' +
    '</div>' +

    // Hints
    '<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px">' +
    ex.gaps.map(function(g) {
      return '<div style="padding:4px 10px;background:var(--surface2);border-radius:8px;font-size:0.75rem;color:var(--text-muted);border:1px solid var(--border)">('+g.n+') '+g.hint+'</div>';
    }).join('') +
    '</div>' +

    // Result
    (allAnswered ? '<div style="padding:14px 18px;border-radius:10px;background:'+(allCorrect?'rgba(34,197,94,0.1)':'rgba(239,68,68,0.1)')+';border:1px solid '+(allCorrect?'var(--green)':'var(--red)')+';margin-bottom:16px;font-size:0.9rem;color:'+( allCorrect?'var(--green)':'var(--red)')+'">'+
      (allCorrect ? '🎉 Perfekte! Të gjitha boshllëqet janë plotësuar saktë!' : '📚 '+correctCount+'/'+ex.gaps.length+' saktë. Shiko shpjegimet dhe provo sërish.') +
    '</div>' : '') +

    // Navigation
    '<div style="display:flex;gap:10px">' +
    (gapState.exIdx > 0 ? '<button class="btn-outline" onclick="gapState.exIdx--;gapState.answers={};renderGapScreen()" style="flex:1">← Mëparshëm</button>' : '<div style="flex:1"></div>') +
    '<button class="btn-outline" onclick="gapState.answers={};renderGapScreen()" style="padding:10px 16px">🔄</button>' +
    (gapState.exIdx < all.length-1 ? '<button class="btn" onclick="gapState.exIdx++;gapState.answers={};renderGapScreen()" style="flex:1">Tjetri →</button>' : '<button class="btn" onclick="gapState.exIdx=0;gapState.answers={};renderGapScreen()" style="flex:1">🔄 Rifillo</button>') +
    '</div></div>';
}

// ── 5. FJALA E DITËS — shown on landing ──
function renderWordOfDay() {
  var el = document.getElementById('wordOfDayBox');
  if (!el) return;
  var w = WORD_OF_DAY.getForToday();
  el.innerHTML = '<div style="background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:18px 22px;max-width:520px;margin:16px auto 0">' +
    '<div style="font-size:0.7rem;color:var(--gold);text-transform:uppercase;letter-spacing:2px;margin-bottom:8px">⭐ Fjala e Ditës</div>' +
    '<div style="display:flex;align-items:center;gap:10px;margin-bottom:6px">' +
    '<span style="font-size:1.5rem;font-weight:700;color:var(--text)">'+w.de+'</span>' +
    '<button onclick="TTS.speak(\''+w.de+'\')" style="background:none;border:none;cursor:pointer;font-size:1rem;color:var(--gold)">🔊</button>' +
    '</div>' +
    '<div style="font-size:0.88rem;color:var(--text-muted);margin-bottom:8px">'+w.sq+'</div>' +
    '<div style="font-size:0.85rem;color:var(--text-dim);font-style:italic;margin-bottom:6px">"'+w.ex+'"</div>' +
    '<div style="font-size:0.78rem;color:var(--gold);padding:6px 10px;background:rgba(240,180,41,0.08);border-radius:6px">💡 '+w.tip+'</div>' +
    '</div>';
}





// ═══════════════════════════════════════════════════════
// UX v15 — Landing, Search, Daily Challenge, Guided Mode
// ═══════════════════════════════════════════════════════

// ── LANDING LOGIC ──
function initLanding() {
  renderWordOfDay();
  updateResumeCard();
  updatePrimaryBtn();
}

function updateResumeCard() {
  try {
    var last = JSON.parse(localStorage.getItem('deutschal_last') || 'null');
    var card = document.getElementById('resumeCard');
    var titleEl = document.getElementById('resumeTitle');
    var metaEl = document.getElementById('resumeMeta');
    if (last && last.moduleId && card) {
      var mod = null;
      ['A1','A2','B1'].forEach(function(l){
        (MODULES[l]||[]).forEach(function(m){ if(m && m.id === last.moduleId) mod = m; });
      });
      if (mod) {
        card.style.display = 'block';
        if (titleEl) titleEl.textContent = 'Moduli ' + mod.num + ': ' + mod.title;
        if (metaEl) metaEl.textContent = (last.level||'') + ' · Tab: ' + (last.tab||'historia');
      }
    }
  } catch(e) {}
}

function updatePrimaryBtn() {
  var btn = document.getElementById('primaryStartBtn');
  var lbl = document.getElementById('primaryStartLabel');
  if (!btn || !lbl) return;
  try {
    var last = JSON.parse(localStorage.getItem('deutschal_last') || 'null');
    var d = PROGRESS.getData();
    var done = d.modulesCompleted ? d.modulesCompleted.length : (state.completedModules ? state.completedModules.length : 0);
    if (last && last.moduleId) {
      lbl.textContent = 'Vazhdo Mësimin';
      btn.onclick = function(){ resumeLastLesson(); };
    } else if (done > 0) {
      lbl.textContent = 'Vazhdo nga Moduli ' + (done+1);
      btn.onclick = function(){ continueNextModule(); };
    } else {
      lbl.textContent = 'Fillo Mësimin e Parë → A1';
      btn.onclick = function(){ startFromA1(); };
    }
  } catch(e) {}
}

function primaryStart() {
  try {
    var last = JSON.parse(localStorage.getItem('deutschal_last') || 'null');
    if (last && last.moduleId) { resumeLastLesson(); return; }
  } catch(e) {}
  startFromA1();
}

function resumeLastLesson() {
  try {
    var last = JSON.parse(localStorage.getItem('deutschal_last') || 'null');
    if (last && last.moduleId && last.level) {
      state.currentLevel = last.level;
      state.currentModuleId = last.moduleId;
      state.lessonTab = last.tab || 'story';
      switchLevel(last.level);
      showScreen('course');
      return;
    }
  } catch(e) {}
  startFromA1();
}

function continueNextModule() {
  var done = state.completedModules || [];
  var allMods = [].concat(MODULES.A1, MODULES.A2, MODULES.B1).filter(function(m){return m&&m.id;});
  var next = allMods.find(function(m){ return !done.includes(m.id); });
  if (next) {
    var level = next.id.startsWith('a1')?'A1':next.id.startsWith('a2')?'A2':'B1';
    state.currentLevel = level;
    state.currentModuleId = next.id;
    state.lessonTab = 'story';
    switchLevel(level);
    showScreen('course');
  } else {
    startFromA1();
  }
}

function startFromA1() {
  state.currentLevel = 'A1';
  state.currentModuleId = 'a1m1';
  state.lessonTab = 'story';
  switchLevel('A1');
  showScreen('course');
}

function saveLastPosition() {
  try {
    localStorage.setItem('deutschal_last', JSON.stringify({
      moduleId: state.currentModuleId,
      level: state.currentLevel,
      tab: state.lessonTab,
      ts: Date.now()
    }));
  } catch(e) {}
}

// ── LANDING TOOLS TOGGLE ──
function toggleToolsGrid() {
  var grid = document.getElementById('toolsGrid');
  var arrow = document.getElementById('toolsArrow');
  if (!grid) return;
  var open = grid.style.display === 'grid';
  grid.style.display = open ? 'none' : 'grid';
  if (arrow) arrow.textContent = open ? '▼' : '▲';
}

// ── COURSE TOOLS MENU ──
function toggleCourseMenu() {
  var menu = document.getElementById('courseToolsMenu');
  if (!menu) return;
  var open = menu.style.display === 'block';
  menu.style.display = open ? 'none' : 'block';
  // Close when clicking outside
  if (!open) {
    setTimeout(function() {
      document.addEventListener('click', function closeFn(e) {
        if (!menu.contains(e.target) && e.target.id !== 'toolsMenuBtn') {
          menu.style.display = 'none';
          document.removeEventListener('click', closeFn);
        }
      });
    }, 50);
  }
}

// ── SEARCH ──
function searchModuleOpen() {
  var modal = document.getElementById('searchModal');
  if (modal) { modal.style.display = 'flex'; }
  setTimeout(function(){
    var inp = document.getElementById('searchInput');
    if (inp) { inp.focus(); inp.value = ''; renderSearchResults(''); }
  }, 50);
}

function searchModalClose() {
  var modal = document.getElementById('searchModal');
  if (modal) modal.style.display = 'none';
}

// Store search results globally for safe onclick access
var _searchResults = [];

function renderSearchResults(query) {
  var c = document.getElementById('searchResults');
  if (!c) return;
  var q = query.toLowerCase().trim();
  var results = [];

  // Search modules
  ['A1','A2','B1'].forEach(function(lv) {
    (MODULES[lv]||[]).forEach(function(mod) {
      if (!mod || !mod.id) return;
      if (!q || mod.title.toLowerCase().indexOf(q) >= 0) {
        results.push({ type: 'module', level: lv, id: mod.id,
          title: 'Modul ' + mod.num + ': ' + mod.title,
          sub: lv + ' — ' + mod.id });
      }
    });
  });

  // Search vocabulary
  if (q.length >= 2) {
    buildAllVocab();
    var vocabResults = [];
    ['A1','A2','B1'].forEach(function(lv) {
      (ALL_VOCAB[lv]||[]).forEach(function(w) {
        if (!w) return;
        if ((w.de||'').toLowerCase().indexOf(q) >= 0 ||
            (w.sq||'').toLowerCase().indexOf(q) >= 0) {
          vocabResults.push({ type: 'vocab', level: lv, de: w.de, sq: w.sq, ex: w.ex });
        }
      });
    });
    results = results.concat(vocabResults.slice(0, 8));
  }

  // Search grammar topics
  ['A1','A2','B1'].forEach(function(lv) {
    (GRAMMAR_DB[lv]||[]).forEach(function(t) {
      if (!q || t.title.toLowerCase().indexOf(q) >= 0) {
        results.push({ type: 'grammar', id: t.id, title: t.title, sub: 'Gramatikë ' + lv });
      }
    });
  });

  _searchResults = results.slice(0, 20);

  if (_searchResults.length === 0) {
    c.innerHTML = '<div style="text-align:center;padding:32px;color:var(--text-muted);font-size:0.88rem">Nuk u gjet asgjë.</div>';
    return;
  }

  c.innerHTML = _searchResults.map(function(r, idx) {
    var icon = r.type === 'module' ? '📘' : r.type === 'vocab' ? '📖' : '📐';
    var title = r.type === 'vocab' ? (r.de || '') + ' — ' + (r.sq || '') : r.title;
    var sub   = r.type === 'vocab' ? (r.ex || '').substring(0, 60) : r.sub;
    return '<div onclick="selectSearchResult(' + idx + ')" ' +
      'style="display:flex;align-items:center;gap:12px;padding:10px 12px;border-radius:8px;cursor:pointer;border-bottom:1px solid var(--border)" ' +
      'onmouseover="this.style.opacity=\'0.75\'" ' +
      'onmouseout="this.style.opacity=\'1\'">' +
      '<span style="font-size:1.2rem;flex-shrink:0">' + icon + '</span>' +
      '<div>' +
        '<div style="font-size:0.88rem;color:var(--text);font-weight:500">' + title + '</div>' +
        (sub ? '<div style="font-size:0.75rem;color:var(--text-muted)">' + sub + '</div>' : '') +
      '</div></div>';
  }).join('');
}

function selectSearchResult(idx) {
  var r = _searchResults[idx];
  if (!r) return;
  if (r.type === 'module') {
    state.currentLevel = r.level;
    state.currentModuleId = r.id;
    state.lessonTab = 'story';
    switchLevel(r.level);
    showScreen('course');
  } else if (r.type === 'grammar') {
    showGrammarScreen();
    setTimeout(function(){ renderGrammarTopic(r.id); }, 200);
  } else {
    showVocabBrowser();
  }
  searchModalClose();
}

// ── DAILY CHALLENGE ──
var dailyState = { questions: [], idx: 0, score: 0, answered: false, userAns: null, done: false };

function showDailyChallenge() {
  buildAllVocab();
  // Build 10 mixed questions from vocab + grammar
  var pool = [];
  // Vocab questions
  var allVocab = [].concat(ALL_VOCAB.A1||[], ALL_VOCAB.A2||[], ALL_VOCAB.B1||[]);
  var shuffled = allVocab.slice().sort(function(){ return Math.random()-0.5; }).slice(0,30);
  shuffled.forEach(function(w) {
    if (!w || !w.de || !w.sq) return;
    // Get 3 wrong options
    var others = allVocab.filter(function(x){ return x && x.sq && x.sq !== w.sq; })
      .sort(function(){ return Math.random()-0.5; }).slice(0,3).map(function(x){ return x.sq; });
    var opts = [w.sq].concat(others).sort(function(){ return Math.random()-0.5; });
    pool.push({ q: 'Çfarë do të thotë: "'+w.de+'"?', opts: opts, a: opts.indexOf(w.sq), type: 'vocab', tts: w.de });
  });
  // Grammar questions
  var grammarQs = [];
  ['A1','A2','B1'].forEach(function(lv) {
    (GRAMMAR_DB[lv]||[]).forEach(function(topic) {
      (topic.exercises||[]).forEach(function(ex) {
        if (ex.type === 'fill' && ex.opts && ex.opts.length >= 3) {
          grammarQs.push({ q: ex.q, opts: ex.opts, a: ex.opts.indexOf(ex.ans), type: 'grammar', tts: null });
        }
      });
    });
  });
  grammarQs = grammarQs.sort(function(){ return Math.random()-0.5; }).slice(0,5);
  pool = pool.concat(grammarQs);
  pool = pool.filter(function(q){ return q.a >= 0; }).sort(function(){ return Math.random()-0.5; }).slice(0,10);

  dailyState = { questions: pool, idx: 0, score: 0, answered: false, userAns: null, done: false };
  renderDailyChallenge();
  showScreen('dailyScreen');
}

function renderDailyChallenge() {
  var c = document.getElementById('dailyContent');
  if (!c) return;

  if (dailyState.done || dailyState.idx >= dailyState.questions.length) {
    var pct = Math.round(dailyState.score / dailyState.questions.length * 100);
    c.innerHTML = '<div style="text-align:center;padding:40px 20px">' +
      '<div style="font-size:4rem;margin-bottom:12px">' + (pct>=80?'🏆':pct>=50?'💪':'📚') + '</div>' +
      '<h2 style="color:var(--gold);margin-bottom:8px">Sfida e Ditës</h2>' +
      '<div style="font-size:3.5rem;font-weight:700;color:'+(pct>=70?'var(--green)':pct>=40?'var(--gold)':'var(--red)')+'">'+pct+'%</div>' +
      '<div style="color:var(--text-muted);margin-bottom:24px">'+dailyState.score+' / '+dailyState.questions.length+' të sakta</div>' +
      '<div style="background:var(--surface2);border-radius:12px;padding:16px;margin-bottom:24px;font-size:0.88rem;color:var(--text-dim);line-height:1.6">' +
      (pct>=80?'⭐ Shkëlqyer! Vazhdo kështu çdo ditë!':pct>=50?'💪 Mirë! Ushtrimi i përditshëm ndihmon shumë.':'📚 Vazhdo të mësosh — kthehu nesër!') +
      '</div>' +
      '<div style="display:flex;gap:10px;justify-content:center">' +
      '<button class="btn-outline" onclick="showDailyChallenge()">🔄 Seri e re</button>' +
      '<button class="btn" onclick="showScreen(\'course\')">← Vazhdo mësimin</button>' +
      '</div></div>';
    PROGRESS.recordActivity('quiz', dailyState.score);
    return;
  }

  var q = dailyState.questions[dailyState.idx];
  var total = dailyState.questions.length;
  var pct = Math.round(dailyState.idx / total * 100);

  c.innerHTML =
    '<div style="margin-bottom:20px">' +
    '<div style="display:flex;justify-content:space-between;font-size:0.78rem;color:var(--text-muted);margin-bottom:6px">' +
    '<span>Pyetja '+(dailyState.idx+1)+' / '+total+'</span>' +
    '<span style="color:var(--green)">✅ '+dailyState.score+'</span>' +
    '</div>' +
    '<div style="height:5px;background:var(--surface2);border-radius:3px"><div style="height:5px;width:'+pct+'%;background:var(--gold);border-radius:3px;transition:width 0.4s"></div></div>' +
    '</div>' +

    '<div style="background:var(--surface2);border-radius:14px;padding:22px;margin-bottom:16px;border-left:4px solid '+(q.type==='vocab'?'var(--a2-color)':'var(--gold)')+'">' +
    '<div style="font-size:0.7rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:1px;margin-bottom:10px">'+(q.type==='vocab'?'Fjalori':'Gramatikë')+'</div>' +
    '<div style="font-size:1.05rem;font-weight:600;color:var(--text);line-height:1.5">'+q.q+'</div>' +
    (q.tts ? ' <button onclick="TTS.speak(\''+q.tts.replace(/'/g,"\\'")+'\')" style="background:none;border:none;cursor:pointer;font-size:0.9rem;color:var(--gold);opacity:0.7">🔊</button>' : '') +
    '</div>' +

    '<div style="display:flex;flex-direction:column;gap:8px">' +
    (q.opts||[]).map(function(opt, oi) {
      var done = dailyState.answered;
      var isCorrect = oi === q.a;
      var isSelected = dailyState.userAns === oi;
      var bg = '';
      if (done && isCorrect) bg = 'background:rgba(34,197,94,0.15);border-color:var(--green);color:var(--green)';
      else if (done && isSelected && !isCorrect) bg = 'background:rgba(239,68,68,0.15);border-color:var(--red);color:var(--red)';
      return '<button onclick="answerDaily('+oi+','+q.a+')" '+(done?'disabled':'')+
        ' style="padding:13px 16px;background:var(--surface);border:2px solid var(--border);border-radius:10px;color:var(--text-dim);cursor:pointer;font-family:DM Sans,sans-serif;font-size:0.9rem;text-align:left;transition:all 0.15s;'+bg+'">'+opt+'</button>';
    }).join('') +
    '</div>' +

    (dailyState.answered ?
      '<div style="margin-top:14px;display:flex;justify-content:flex-end">' +
      '<button class="btn" onclick="dailyState.idx++;dailyState.answered=false;dailyState.userAns=null;if(dailyState.idx>=dailyState.questions.length)dailyState.done=true;renderDailyChallenge()">'+
      (dailyState.idx + 1 >= total ? 'Shiko rezultatin →' : 'Tjetri →')+'</button></div>' : '');
}

function answerDaily(selected, correct) {
  if (dailyState.answered) return;
  dailyState.answered = true;
  dailyState.userAns = selected;
  if (selected === correct) dailyState.score++;
  renderDailyChallenge();
}

// ── QUIZ EXPLANATIONS — enhance answerQuiz to show explanation ──
var _origAnswerQuiz = typeof answerQuiz === 'function' ? answerQuiz : null;

// Save last position whenever user navigates into a lesson
var _origShowLesson = typeof showLesson === 'function' ? showLesson : null;

// Auto-save on tab switch
var _origSwitchTab = typeof switchLessonTab === 'function' ? switchLessonTab : null;

// ── KEYBOARD SHORTCUT: ESC closes search ──
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    searchModalClose();
    var menu = document.getElementById('courseToolsMenu');
    if (menu) menu.style.display = 'none';
  }
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    searchModuleOpen();
  }
});

// ── GENDER COLORS IN VOCAB CARDS ──
var _origRenderVocab = typeof renderVocabBrowser === 'function' ? renderVocabBrowser : null;

function getGenderColor(word) {
  if (!word) return 'var(--text)';
  var w = word.trim();
  if (w.startsWith('der ')) return '#60a5fa'; // blue = der
  if (w.startsWith('die ')) return '#f472b6'; // pink = die
  if (w.startsWith('das ')) return '#4ade80'; // green = das
  return 'var(--text)';
}

// ── INIT UPDATES ──
var _origInit = window.onload;





// ── GOETHE EXTRA SECTIONS ──
// Added to GOETHE_B1_DATA after initialization

const GOETHE_EXTRA = {
  lesen_extra: [
    {
      id:'L4', type:'Lesen Teil 4',
      title:'Plotëso fjali të munguar',
      instruction:'Lexo tekstin. Cila fjali (a–h) i përket çdo boshllëku (1–5)? Ka tre fjali shtesë që nuk nevojiten.',
      text:`Das Homeoffice hat in den letzten Jahren stark zugenommen. ___(1)___ Viele Arbeitnehmer schätzen die Flexibilität, von zu Hause aus zu arbeiten. ___(2)___ Allerdings berichten viele Beschäftigte auch von Problemen: Sie fühlen sich isoliert und vermissen den persönlichen Kontakt mit Kollegen. ___(3)___ Unternehmen haben reagiert und führen sogenannte "hybride Arbeitsmodelle" ein. ___(4)___ Experten empfehlen, mindestens zwei bis drei Tage pro Woche ins Büro zu kommen. ___(5)___`,
      sentences:[
        {letter:'a', text:'Das bedeutet, dass Mitarbeiter sowohl im Büro als auch von zu Hause arbeiten können.'},
        {letter:'b', text:'Die Produktivität ist dadurch in vielen Unternehmen gestiegen.'},
        {letter:'c', text:'Das fördert sowohl die Teamarbeit als auch die Work-Life-Balance.'},
        {letter:'d', text:'Außerdem ist es wichtig, klare Grenzen zwischen Arbeit und Privatleben zu setzen.'},
        {letter:'e', text:'So können Teams regelmäßig zusammenkommen und Ideen austauschen.'},
        {letter:'f', text:'Besonders die jüngere Generation profitiert von dieser Entwicklung.'},
        {letter:'g', text:'Deshalb investieren Firmen verstärkt in digitale Kommunikationsmittel.'},
        {letter:'h', text:'Die Corona-Pandemie hat diese Entwicklung stark beschleunigt.'}
      ],
      answers:{1:'h', 2:'b', 3:'g', 4:'a', 5:'c'},
      exp:{1:'Konteksti flet për rritjen e homeoffice — shkaku është pandemia.',
           2:'Para ishte fleksibiliteti — rrjedhja logjike është produktiviteti.',
           3:'Pas problemeve të izolimit — kompanive u duhej të investonin.',
           4:'Pas modelit hibrid — e shpjegon çfarë do të thotë.',
           5:'Pas rekomandimit — efekti: ekipet bashkëpunojnë.'}
    },
    {
      id:'L5', type:'Lesen Teil 5',
      title:'Kush thotë çfarë?',
      instruction:'Lexo komentet e forumit dhe përgjigju pyetjeve. Kush e thotë këtë? Shkruaj emrin.',
      text:`Forum: "Wie lernt ihr am besten Deutsch?"

ANNA: Ich lerne am besten, wenn ich deutsche Serien und Filme schaue. Zuerst mit Untertiteln, dann ohne. So höre ich die Sprache natürlich und lerne neue Ausdrücke im Kontext. Das macht auch Spaß!

BORIS: Für mich ist Grammatik der Schlüssel. Ich lese Grammatikbücher und mache viele Übungen. Erst wenn ich die Regeln verstehe, kann ich sie anwenden. Es ist vielleicht nicht so spannend, aber sehr effektiv.

CLARA: Ich versuche, jeden Tag mit Muttersprachlern zu sprechen — über Apps wie Tandem oder HelloTalk. Anfangs war es sehr schwer, aber jetzt fühle ich mich viel sicherer. Das Sprechen ist für mich das Wichtigste.

DAVID: Ich lerne am liebsten durch Musik. Ich höre deutsche Lieder, lese die Texte und versuche, sie zu verstehen. Außerdem singe ich manchmal mit — das hilft mir, die Aussprache zu verbessern.`,
      questions:[
        {q:'Wer verbessert seine Aussprache durch Singen?', ans:'David', exp:'"singe ich manchmal mit — das hilft mir, die Aussprache zu verbessern" — David.'},
        {q:'Wer spricht täglich mit Muttersprachlern?', ans:'Clara', exp:'"jeden Tag mit Muttersprachlern zu sprechen" — Clara.'},
        {q:'Für wen ist Grammatik am wichtigsten?', ans:'Boris', exp:'"Für mich ist Grammatik der Schlüssel" — Boris.'},
        {q:'Wer schaut Serien auf Deutsch?', ans:'Anna', exp:'"ich deutsche Serien und Filme schaue" — Anna.'},
        {q:'Wer sagt, dass Sprechen am Anfang schwer war?', ans:'Clara', exp:'"Anfangs war es sehr schwer" — Clara.'}
      ]
    }
  ],

  hoeren_extra: [
    {
      id:'H3', type:'Hören Teil 3',
      title:'Njoftimet publike — plotëso informacionin',
      instruction:'Lexo njoftimet dhe plotëso informacionin që mungon.',
      transcripts:[
        {title:'Njoftim 1 — Supermarket',
         text:'Liebe Kundinnen und Kunden! Heute haben wir ein besonderes Angebot: Bio-Äpfel aus der Region — 2 Kilo für nur 2,50 Euro! Das Angebot gilt nur heute bis 20:00 Uhr. Außerdem möchten wir Sie darauf hinweisen, dass die Kasse 3 wegen Wartungsarbeiten bis 17:00 Uhr geschlossen ist. Bitte nutzen Sie die anderen Kassen. Vielen Dank für Ihren Einkauf!',
         questions:[
           {q:'Was kostet das Sonderangebot?', ans:'2 Kilo Bio-Äpfel für 2,50 Euro', exp:'"2 Kilo für nur 2,50 Euro"'},
           {q:'Bis wann gilt das Angebot?', ans:'Bis 20:00 Uhr', exp:'"gilt nur heute bis 20:00 Uhr"'},
           {q:'Was ist bis 17:00 Uhr geschlossen?', ans:'Kasse 3', exp:'"die Kasse 3 wegen Wartungsarbeiten bis 17:00 Uhr geschlossen"'}
         ]},
        {title:'Njoftim 2 — Aeroport',
         text:'Sehr geehrte Fluggäste, wir bitten Sie, Ihre Aufmerksamkeit: Der Flug LH 441 nach Wien wird um 45 Minuten verzögert. Der neue Abflug ist um 16:15 Uhr am Gate B22. Der Grund für die Verspätung sind technische Probleme am Flugzeug. Wir bitten alle Passagiere, am Gate B22 zu warten. Für Getränke und Snacks stehen Ihnen Gutscheine an der Information zur Verfügung. Wir entschuldigen uns für die Unannehmlichkeiten.',
         questions:[
           {q:'Wie groß ist die Verspätung?', ans:'45 Minuten', exp:'"wird um 45 Minuten verzögert"'},
           {q:'Um wie viel Uhr fliegt das Flugzeug jetzt ab?', ans:'16:15 Uhr', exp:'"Der neue Abflug ist um 16:15 Uhr"'},
           {q:'Was bekommen die Passagiere?', ans:'Gutscheine für Getränke und Snacks', exp:'"Gutscheine an der Information zur Verfügung"'}
         ]}
      ]
    },
    {
      id:'H4', type:'Hören Teil 4',
      title:'Intervistë — zgjedhje shumëfishe',
      instruction:'Lexo intervistën dhe zgjedh përgjigjen e saktë.',
      transcript:`[Radio-Interview mit Dr. Schmidt, Sprachexpertin]

Moderator: Frau Dr. Schmidt, wie lange braucht man, um Deutsch zu lernen?

Dr. Schmidt: Das hängt von vielen Faktoren ab. Für Muttersprachler europäischer Sprachen dauert es in der Regel 600 bis 750 Stunden intensiven Lernens, um B1 zu erreichen. Für Lernende aus anderen Sprachfamilien kann es deutlich länger dauern.

Moderator: Was sind die häufigsten Fehler beim Deutschlernen?

Dr. Schmidt: Viele Lernende konzentrieren sich zu sehr auf die Grammatik und zu wenig auf das Sprechen. Aber Sprache lernt man vor allem durch Anwendung. Ein weiterer häufiger Fehler ist, dass man Angst hat, Fehler zu machen. Dabei sind Fehler normal und wichtig — man lernt aus ihnen.

Moderator: Welche Tipps haben Sie für effektives Lernen?

Dr. Schmidt: Erstens: täglich üben, auch wenn es nur 20 Minuten sind. Regelmäßigkeit ist wichtiger als lange Lerneinheiten. Zweitens: authentische Materialien nutzen — Zeitungen, Podcasts, Filme. Und drittens: echte Gespräche führen, zum Beispiel mit Sprachaustausch-Partnern.`,
      questions:[
        {q:'Wie viele Stunden braucht man ungefähr für B1?',
         opts:['a) 300-400 Stunden','b) 600-750 Stunden','c) 1000 Stunden','d) 2000 Stunden'],a:1,
         exp:'"600 bis 750 Stunden intensiven Lernens"'},
        {q:'Was ist laut Dr. Schmidt ein häufiger Fehler?',
         opts:['a) Zu viel sprechen','b) Zu viel Vokabeln lernen','c) Zu wenig Grammatik','d) Angst vor Fehlern'],a:3,
         exp:'"Ein weiterer häufiger Fehler ist, dass man Angst hat, Fehler zu machen"'},
        {q:'Was empfiehlt Dr. Schmidt als erstes?',
         opts:['a) Nur lange Lerneinheiten','b) Täglich üben, auch nur 20 Minuten','c) Nur Grammatikbücher','d) Sofort nach Deutschland ziehen'],a:1,
         exp:'"täglich üben, auch wenn es nur 20 Minuten sind"'}
      ]
    }
  ]
};

// Merge into GOETHE_B1_DATA
if (typeof GOETHE_B1_DATA !== 'undefined' && typeof GOETHE_EXTRA !== 'undefined') {
  GOETHE_EXTRA.lesen_extra.forEach(function(t){ GOETHE_B1_DATA.lesen.push(t); });
  GOETHE_EXTRA.hoeren_extra.forEach(function(t){ GOETHE_B1_DATA.hoeren.push(t); });
}





// Handle Lesen Teil 4 sentence matching
function renderLesenT4(test) {
  var state4 = lesenState.answers[test.id] || {};
  var html = '<div style="background:var(--surface2);border-radius:12px;padding:22px;margin-bottom:20px;border:1px solid var(--border)">' +
    '<p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:14px;font-style:italic">📋 ' + test.instruction + '</p>' +
    '<div style="font-size:0.9rem;color:var(--text);line-height:2.8">';
  
  var textParts = test.text.split(/___\(\d+\)___/);
  var gapNums = [];
  var m;
  var rx = /___\((\d+)\)___/g;
  while ((m = rx.exec(test.text)) !== null) gapNums.push(m[1]);
  
  textParts.forEach(function(part, pi) {
    html += part.split('\n').join('<br>');
    if (pi < gapNums.length) {
      var n = gapNums[pi];
      var ans = state4[n];
      var correct = test.answers[n];
      var done = ans !== undefined;
      var bg = done ? (ans===correct?'background:rgba(34,197,94,0.15)':'background:rgba(239,68,68,0.15)') : '';
      var borderC = done ? (ans===correct?'var(--green)':'var(--red)') : 'var(--gold)';
      var opts = '<option value="">— zgjedh —</option>' +
        test.sentences.map(function(s){
          return '<option value="' + s.letter + '"' + (ans===s.letter?' selected':'') + '>' + s.letter.toUpperCase() + ': ' + s.text.substring(0,45) + '...</option>';
        }).join('');
      html += '<select data-tid="' + test.id + '" data-n="' + n + '" onchange="answerLesenT4(this)" ' +
        (done?'disabled':'') +
        ' style="padding:4px 8px;border-radius:6px;border:2px solid ' + borderC + ';' + bg + ';color:var(--text);font-family:DM Sans,sans-serif;font-size:0.85rem;margin:0 4px">' +
        opts + '</select>';
      if (done && ans !== correct) html += '<span style="color:var(--red);font-size:0.8rem"> ❌ ' + correct.toUpperCase() + '</span>';
      if (done && ans === correct) html += '<span style="color:var(--green);font-size:0.8rem"> ✅</span>';
    }
  });
  html += '</div>';
  
  html += '<div style="margin-top:16px;border-top:1px solid var(--border);padding-top:14px">' +
    '<p style="font-size:0.75rem;color:var(--text-muted);margin-bottom:8px">Fjalitë (a–h):</p>' +
    test.sentences.map(function(s){
      return '<div style="font-size:0.82rem;color:var(--text-dim);margin-bottom:5px"><strong style="color:var(--gold)">' + s.letter.toUpperCase() + ':</strong> ' + s.text + '</div>';
    }).join('') + '</div></div>';
  return html;
}

function answerLesenT4(el) {
  var testId = el.dataset.tid;
  var n = el.dataset.n;
  var val = el.value;
  if (!testId || !n || !val) return;
  if (!lesenState.answers[testId]) lesenState.answers[testId] = {};
  lesenState.answers[testId][n] = val;
  renderLesenScreen();
}

// Handle Lesen Teil 5 — who says what
function renderLesenT5(test) {
  var state5 = lesenState.answers[test.id] || {};
  var html = '<div style="background:var(--surface2);border-radius:12px;padding:22px;margin-bottom:20px;border:1px solid var(--border)">' +
    '<p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:14px">📋 ' + test.instruction + '</p>' +
    '<div style="font-size:0.85rem;color:var(--text);line-height:1.8;margin-bottom:16px;white-space:pre-line">' + test.text + '</div>' +
    '</div><div style="display:grid;gap:12px">';
  test.questions.forEach(function(q, qi) {
    var key = 'q' + qi;
    var userAns = state5[key] || '';
    var done = state5[key] !== undefined;
    var correct = done && userAns.toLowerCase().trim() === q.ans.toLowerCase().trim();
    html += '<div style="background:var(--surface2);border-radius:10px;padding:14px;border:2px solid ' +
      (done ? (correct ? 'var(--green)' : 'var(--red)') : 'var(--border)') + '">' +
      '<p style="font-weight:600;color:var(--text);margin-bottom:8px;font-size:0.88rem">' + (qi+1) + '. ' + q.q + '</p>' +
      '<input type="text" ' + (done?'disabled':'') +
      ' data-tid="' + test.id + '" data-key="' + key + '" data-ans="' + q.ans + '"' +
      ' onchange="answerLesenT5(this)"' +
      ' value="' + (userAns||'').replace(/"/g,'&quot;') + '"' +
      ' placeholder="Shkruaj emrin..."' +
      ' style="width:100%;padding:8px 12px;border:2px solid ' +
      (done ? (correct?'var(--green)':'var(--gold)') : 'var(--border)') +
      ';border-radius:8px;background:var(--surface);color:var(--text);font-family:DM Sans,sans-serif;font-size:0.88rem;box-sizing:border-box">' +
      (done ? '<div style="margin-top:8px;font-size:0.78rem;color:' +
        (correct?'var(--green)':'var(--red)') + '">' +
        (correct ? '✅ Saktë!' : '❌ Saktë: ' + q.ans) +
        ' — 💡 ' + q.exp + '</div>' : '') +
      '</div>';
  });
  html += '</div>';
  return html;
}

function answerLesenT5(el) {
  var testId = el.dataset.tid;
  var key = el.dataset.key;
  var val = el.value;
  if (!testId || !key) return;
  if (!lesenState.answers[testId]) lesenState.answers[testId] = {};
  lesenState.answers[testId][key] = val;
  renderLesenScreen();
}





// ── AI WRITING FEEDBACK ──
async function submitWritingForAI(textareaId, level, taskDesc) {
  var ta = document.getElementById(textareaId);
  if (!ta || !ta.value.trim()) return;
  var text = ta.value.trim();
  var resultId = textareaId + '_result';
  var resultEl = document.getElementById(resultId);
  if (!resultEl) return;

  resultEl.innerHTML = '<div style="padding:12px;color:var(--text-muted);font-size:0.85rem">⏳ Claude po analizon tekstin tënd...</div>';

  try {
    var response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: 'Du bist ein erfahrener Deutschlehrer für albanischsprachige Lernende auf ' + level + '-Niveau. Korrigiere den folgenden deutschen Text des Schülers. Gib strukturiertes Feedback auf Albanisch: 1) Gesamtbewertung (1-10), 2) Was gut ist, 3) Fehler (Grammatik, Vokabular, Stil) mit Erklärung auf Albanisch, 4) Verbesserte Version. Sei ermutigend aber direkt.',
        messages: [{ role: 'user', content: 'Aufgabe: ' + taskDesc + '\n\nText des Schülers:\n' + text }]
      })
    });
    var data = await response.json();
    var reply = (data.content && data.content[0] && data.content[0].text) || 'Gabim — provo sërish.';

    // Format the response nicely
    resultEl.innerHTML = '<div style="background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:16px;margin-top:12px">' +
      '<div style="font-size:0.72rem;color:var(--gold);text-transform:uppercase;letter-spacing:1px;margin-bottom:10px">🤖 Feedback nga Claude</div>' +
      '<div style="font-size:0.85rem;color:var(--text);line-height:1.7;white-space:pre-wrap">' + reply + '</div>' +
      '</div>';
  } catch(e) {
    resultEl.innerHTML = '<div style="padding:12px;color:var(--red);font-size:0.85rem">⚠️ Gabim lidhjeje. Kontrollo internetin.</div>';
  }
}





// ── NOTES SYSTEM ──
var NOTES = {
  getAll: function() {
    try { return JSON.parse(localStorage.getItem('deutschal_notes') || '[]'); } catch(e) { return []; }
  },
  save: function(notes) {
    try { localStorage.setItem('deutschal_notes', JSON.stringify(notes)); } catch(e) {}
  },
  add: function(text, tag) {
    var notes = this.getAll();
    notes.unshift({ id: Date.now(), text: text, tag: tag||'', date: new Date().toLocaleDateString('sq-AL'), ts: Date.now() });
    this.save(notes);
    return notes;
  },
  delete: function(id) {
    var notes = this.getAll().filter(function(n){ return n.id !== id; });
    this.save(notes);
    return notes;
  }
};

function showNotes() {
  renderNotesScreen();
  showScreen('notesScreen');
}

function renderNotesScreen() {
  var c = document.getElementById('notesContent');
  if (!c) return;
  var notes = NOTES.getAll();
  var tags = ['fjalë', 'rregull', 'shprehje', 'pyetje', 'tjetër'];

  c.innerHTML = '<div style="margin-bottom:20px">' +
    '<textarea id="newNoteText" placeholder="Shkruaj shënim... (fjalë, rregull, pyetje)" style="width:100%;min-height:80px;background:var(--surface2);border:2px solid var(--border);border-radius:10px;padding:12px;color:var(--text);font-family:DM Sans,sans-serif;font-size:0.9rem;resize:vertical;box-sizing:border-box"></textarea>' +
    '<div style="display:flex;gap:8px;margin-top:8px;flex-wrap:wrap;align-items:center">' +
    '<select id="newNoteTag" style="padding:8px 12px;background:var(--surface2);border:1px solid var(--border);border-radius:8px;color:var(--text);font-family:DM Sans,sans-serif;font-size:0.85rem">' +
    tags.map(function(t){ return '<option value="'+t+'">'+t+'</option>'; }).join('') +
    '</select>' +
    '<button onclick="addNoteFromUI()" style="padding:9px 20px;background:var(--gold);border:none;border-radius:8px;color:#000;font-weight:700;cursor:pointer;font-family:DM Sans,sans-serif">+ Shto</button>' +
    '<span style="font-size:0.75rem;color:var(--text-muted);margin-left:auto">' + notes.length + ' shënime</span>' +
    '</div></div>' +

    (notes.length === 0 ?
      '<div style="text-align:center;padding:40px;color:var(--text-muted)"><div style="font-size:2.5rem;margin-bottom:12px">📝</div><p>Ende nuk ke shënime.<br>Shto fjalën ose rregullin e parë tani!</p></div>' :
      '<div style="display:grid;gap:10px">' +
      notes.map(function(n) {
        var tagColors = {fjalë:'var(--gold)',rregull:'var(--green)',shprehje:'var(--a2-color)',pyetje:'var(--red)',tjetër:'var(--text-muted)'};
        var tc = tagColors[n.tag] || 'var(--text-muted)';
        return '<div style="background:var(--surface2);border-radius:10px;padding:14px 16px;border-left:4px solid '+tc+'">' +
          '<div style="display:flex;align-items:flex-start;gap:10px">' +
          '<div style="flex:1">' +
          '<div style="font-size:0.9rem;color:var(--text);line-height:1.6;white-space:pre-wrap">' + n.text + '</div>' +
          '<div style="display:flex;gap:8px;margin-top:6px;align-items:center">' +
          '<span style="font-size:0.72rem;padding:2px 8px;border-radius:10px;background:'+tc+'22;color:'+tc+'">'+n.tag+'</span>' +
          '<span style="font-size:0.72rem;color:var(--text-muted)">'+n.date+'</span>' +
          '</div></div>' +
          '<button onclick="deleteNote('+n.id+')" style="background:none;border:none;cursor:pointer;color:var(--text-muted);font-size:1rem;padding:4px;opacity:0.5" onmouseover="this.style.opacity=\'1\'" onmouseout="this.style.opacity=\'0.5\'">🗑️</button>' +
          '</div></div>';
      }).join('') + '</div>'
    );
}

function addNoteFromUI() {
  var text = (document.getElementById('newNoteText')||{}).value;
  var tag = (document.getElementById('newNoteTag')||{}).value || 'tjetër';
  if (!text || !text.trim()) return;
  NOTES.add(text.trim(), tag);
  renderNotesScreen();
  var ta = document.getElementById('newNoteText');
  if (ta) ta.value = '';
}

function deleteNote(id) {
  NOTES.delete(id);
  renderNotesScreen();
}

// Quick note from any screen
function quickNote(text, tag) {
  NOTES.add(text, tag||'fjalë');
  var el = document.createElement('div');
  el.style.cssText = 'position:fixed;bottom:20px;right:20px;background:var(--gold);color:#000;padding:10px 18px;border-radius:10px;font-size:0.85rem;font-weight:600;z-index:999;animation:fadeInUp 0.3s';
  el.textContent = '📝 Shënim i shtuar!';
  document.body.appendChild(el);
  setTimeout(function(){ if(el.parentNode) el.parentNode.removeChild(el); }, 2000);
}





// ── VOCAB EXPANSION FINAL — 400+ words, B1 focus ──
const VOCAB_FINAL = {
  A1_fin: [
    {de:"der Abend",sq:"mbrëmja",type:"Kohë",ex:"Guten Abend! — Mirëmbrëma!"},
    {de:"der Morgen",sq:"mëngjesi",type:"Kohë",ex:"Guten Morgen! — Mirëmëngjes!"},
    {de:"die Nacht",sq:"nata",type:"Kohë",ex:"Gute Nacht! — Natën e mirë!"},
    {de:"der Mittag",sq:"dreka (koha)",type:"Kohë",ex:"Zu Mittag esse ich. — Në drekë ha."},
    {de:"das Wetter",sq:"moti",type:"Natyrë",ex:"Wie ist das Wetter? — Si është moti?"},
    {de:"die Sonne",sq:"dielli",type:"Natyrë",ex:"Die Sonne scheint. — Dielli ndriçon."},
    {de:"der Regen",sq:"shiu",type:"Natyrë",ex:"Es regnet. — Bie shi."},
    {de:"der Schnee",sq:"bora",type:"Natyrë",ex:"Es schneit. — Bie borë."},
    {de:"der Wind",sq:"era",type:"Natyrë",ex:"Der Wind weht stark. — Era fryn fort."},
    {de:"heiß",sq:"shumë i nxehtë",type:"Mbiemër",ex:"Es ist sehr heiß. — Është shumë nxehtë."},
    {de:"kalt",sq:"i ftohtë",type:"Mbiemër",ex:"Mir ist kalt. — Më ftohet."},
    {de:"schön",sq:"i bukur",type:"Mbiemër",ex:"Das ist sehr schön! — Kjo është shumë bukur!"},
    {de:"schlecht",sq:"i keq",type:"Mbiemër",ex:"Das Wetter ist schlecht. — Moti është i keq."},
    {de:"richtig",sq:"i saktë / drejt",type:"Mbiemër",ex:"Das ist richtig! — Kjo është e saktë!"},
    {de:"falsch",sq:"i gabuar / gabim",type:"Mbiemër",ex:"Das ist falsch. — Kjo është gabim."},
    {de:"gleich",sq:"menjëherë / njësoj",type:"Ndajfolje",ex:"Ich komme gleich! — Vij menjëherë!"},
    {de:"zusammen",sq:"bashkë",type:"Ndajfolje",ex:"Wir machen das zusammen. — E bëjmë bashkë."},
    {de:"allein",sq:"vetëm",type:"Ndajfolje",ex:"Ich bin allein. — Jam vetëm."},
    {de:"zuhause",sq:"në shtëpi",type:"Ndajfolje",ex:"Ich bin zuhause. — Jam në shtëpi."},
    {de:"draußen",sq:"jashtë",type:"Ndajfolje",ex:"Die Kinder spielen draußen. — Fëmijët luajnë jashtë."},
    {de:"drinnen",sq:"brenda",type:"Ndajfolje",ex:"Es ist warm drinnen. — Është ngrohtë brenda."},
    {de:"links",sq:"majtas",type:"Drejtim",ex:"Gehen Sie links! — Shkoni majtas!"},
    {de:"rechts",sq:"djathtas",type:"Drejtim",ex:"Gehen Sie rechts! — Shkoni djathtas!"},
    {de:"oben",sq:"lart",type:"Drejtim",ex:"Das liegt oben. — Ndodhet lart."},
    {de:"unten",sq:"poshtë",type:"Drejtim",ex:"Das liegt unten. — Ndodhet poshtë."},
    {de:"vorne",sq:"para",type:"Drejtim",ex:"Der Ausgang ist vorne. — Dalja është para."},
    {de:"hinten",sq:"prapa",type:"Drejtim",ex:"Sitz hinten! — Ulu prapa!"},
    {de:"die Farbe",sq:"ngjyra",type:"Objekt",ex:"Welche Farbe magst du? — Cilën ngjyrë do?"},
    {de:"der Stoff",sq:"materiali / pëlhura",type:"Objekt",ex:"Der Stoff ist weich. — Materiali është i butë."},
    {de:"das Licht",sq:"drita",type:"Objekt",ex:"Mach das Licht an! — Ndiz dritën!"},
  ],
  A2_fin: [
    {de:"die Absicht",sq:"qëllimi / synimi",type:"Abstrakt",ex:"Ich habe keine böse Absicht. — Nuk kam qëllim të keq."},
    {de:"die Gewohnheit",sq:"zakoni",type:"Abstrakt",ex:"Das ist eine alte Gewohnheit. — Ky është zakon i vjetër."},
    {de:"die Möglichkeit",sq:"mundësia",type:"Abstrakt",ex:"Es gibt keine andere Möglichkeit. — Nuk ka mundësi tjetër."},
    {de:"die Notwendigkeit",sq:"domosdoshmëria",type:"Abstrakt",ex:"Das ist eine Notwendigkeit. — Kjo është domosdoshmëri."},
    {de:"die Schwierigkeit",sq:"vështirësia",type:"Abstrakt",ex:"Das ist keine Schwierigkeit. — Kjo nuk është vështirësi."},
    {de:"die Lösung",sq:"zgjidhja",type:"Abstrakt",ex:"Wir brauchen eine Lösung. — Na duhet zgjidhje."},
    {de:"das Angebot",sq:"oferta",type:"Biznes",ex:"Das Angebot ist gut. — Oferta është e mirë."},
    {de:"die Nachfrage",sq:"kërkesa (tregu)",type:"Biznes",ex:"Die Nachfrage steigt. — Kërkesa rritet."},
    {de:"die Lieferung",sq:"dërgesa",type:"Biznes",ex:"Die Lieferung kommt morgen. — Dërgesa vjen nesër."},
    {de:"die Rechnung",sq:"fatura",type:"Biznes",ex:"Darf ich die Rechnung haben? — Mund ta kem faturën?"},
    {de:"die Quittung",sq:"kuponi / fatura",type:"Biznes",ex:"Brauchen Sie eine Quittung? — Dëshironi kupon?"},
    {de:"der Rabatt",sq:"zbritja",type:"Biznes",ex:"Gibt es einen Rabatt? — Ka zbritje?"},
    {de:"die Garantie",sq:"garancia",type:"Biznes",ex:"Das hat zwei Jahre Garantie. — Ka dy vjet garanci."},
    {de:"die Beschwerde",sq:"ankesa",type:"Komunikim",ex:"Ich habe eine Beschwerde. — Kam ankesë."},
    {de:"die Entschuldigung",sq:"falja",type:"Komunikim",ex:"Bitte um Entschuldigung! — Kërkoj falje!"},
    {de:"die Empfehlung",sq:"rekomandimi",type:"Komunikim",ex:"Haben Sie eine Empfehlung? — Keni rekomandim?"},
    {de:"der Vorschlag",sq:"propozimi",type:"Komunikim",ex:"Das ist ein guter Vorschlag. — Ky është propozim i mirë."},
    {de:"die Vereinbarung",sq:"marrëveshja",type:"Komunikim",ex:"Wir haben eine Vereinbarung. — Kemi marrëveshje."},
    {de:"die Einigung",sq:"ujdia",type:"Komunikim",ex:"Wir haben eine Einigung erreicht. — Arritëm ujdi."},
    {de:"der Kompromiss",sq:"kompromisi",type:"Komunikim",ex:"Können wir einen Kompromiss finden? — Mund të gjejmë kompromis?"},
    {de:"die Wartezeit",sq:"koha e pritjes",type:"Shërbim",ex:"Die Wartezeit ist lang. — Koha e pritjes është e gjatë."},
    {de:"der Termin",sq:"takimi / afati",type:"Organizim",ex:"Ich habe einen Termin. — Kam takim."},
    {de:"der Zeitplan",sq:"plani kohor",type:"Organizim",ex:"Wir brauchen einen Zeitplan. — Na duhet plan kohor."},
    {de:"der Kalender",sq:"kalendari",type:"Objekt",ex:"Hast du den Kalender? — E ke kalendarin?"},
    {de:"die Agenda",sq:"axhenda",type:"Organizim",ex:"Was steht auf der Agenda? — Çfarë ka në axhendë?"},
    {de:"benutzen",sq:"të përdorësh",type:"Folje",ex:"Wie benutzt man das? — Si e përdoret?"},
    {de:"verwalten",sq:"të administrosh",type:"Folje",ex:"Wer verwaltet das? — Kush e administron?"},
    {de:"überprüfen",sq:"të kontrollosh",type:"Folje",ex:"Bitte überprüfen Sie das. — Ju lutem kontrolloni."},
    {de:"sicherstellen",sq:"të sigurosh",type:"Folje",ex:"Bitte stellen Sie das sicher. — Ju lutem siguroni."},
    {de:"verbessern",sq:"të përmirësosh",type:"Folje",ex:"Wir müssen das verbessern. — Duhet ta përmirësojmë."},
  ],
  B1_fin: [
    // Politik & Gesellschaft
    {de:"die Bevölkerung",sq:"popullsia",type:"Shoqëri",ex:"Die Bevölkerung wächst. — Popullsia rritet."},
    {de:"der Staatsbürger",sq:"shtetasi",type:"Shoqëri",ex:"Ich bin EU-Staatsbürger. — Jam shtetas i BE."},
    {de:"die Staatsbürgerschaft",sq:"shtetësia",type:"Shoqëri",ex:"Ich beantrage die Staatsbürgerschaft. — Aplikoj për shtetësi."},
    {de:"das Asylrecht",sq:"e drejta e azilit",type:"E drejtë",ex:"Das Asylrecht ist ein Grundrecht. — E drejta e azilit është themelore."},
    {de:"die Einwanderung",sq:"imigrimi",type:"Shoqëri",ex:"Einwanderung bereichert die Gesellschaft. — Imigrimi pasuron shoqërinë."},
    {de:"die Auswanderung",sq:"emigrimi",type:"Shoqëri",ex:"Auswanderung ist eine schwere Entscheidung. — Emigrimi është vendim i vështirë."},
    {de:"das Flüchtlingslager",sq:"kampi i refugjatëve",type:"Shoqëri",ex:"Das Flüchtlingslager ist überfüllt. — Kampi i refugjatëve është i mbingarkuar."},
    {de:"die Menschenrechte",sq:"të drejtat e njeriut",type:"E drejtë",ex:"Menschenrechte gelten für alle. — Të drejtat e njeriut vlejnë për të gjithë."},
    {de:"die Diskriminierung",sq:"diskriminimi",type:"Shoqëri",ex:"Diskriminierung ist verboten. — Diskriminimi është i ndaluar."},
    {de:"die Chancengleichheit",sq:"barabarësia e mundësive",type:"Shoqëri",ex:"Chancengleichheit ist wichtig. — Barabarësia e mundësive është e rëndësishme."},
    // Wirtschaft
    {de:"das Wachstum",sq:"rritja ekonomike",type:"Ekonomi",ex:"Das Wirtschaftswachstum sinkt. — Rritja ekonomike zvogëlohet."},
    {de:"die Rezession",sq:"recesioni",type:"Ekonomi",ex:"Wir sind in einer Rezession. — Jemi në recesion."},
    {de:"die Investition",sq:"investimi",type:"Ekonomi",ex:"Investitionen schaffen Arbeitsplätze. — Investimet krijojnë vende pune."},
    {de:"die Schulden",sq:"borxhet",type:"Ekonomi",ex:"Die Schulden steigen. — Borxhet rriten."},
    {de:"der Haushalt",sq:"buxheti",type:"Ekonomi",ex:"Der Staatshaushalt ist ausgeglichen. — Buxheti shtetëror është i ekuilibruar."},
    {de:"die Steuererklärung",sq:"deklarata tatimore",type:"Ekonomi",ex:"Ich mache die Steuererklärung. — Bëj deklaratën tatimore."},
    {de:"die Sozialversicherung",sq:"sigurimet shoqërore",type:"Ekonomi",ex:"Sozialversicherung ist Pflicht. — Sigurimet shoqërore janë të detyrueshme."},
    {de:"die Krankenversicherung",sq:"sigurimi shëndetësor",type:"Shëndet",ex:"Ich habe Krankenversicherung. — Kam sigurim shëndetësor."},
    {de:"die Rentenversicherung",sq:"sigurimi i pensionit",type:"Ekonomi",ex:"Rentenversicherung ist wichtig. — Sigurimi i pensionit është i rëndësishëm."},
    {de:"der Mindestlohn",sq:"paga minimale",type:"Punë",ex:"Der Mindestlohn gilt für alle. — Paga minimale vlen për të gjithë."},
    // Umwelt & Klima
    {de:"die Treibhausgase",sq:"gazrat serrë",type:"Mjedis",ex:"Wir müssen Treibhausgase reduzieren. — Duhet të reduktojmë gazrat serrë."},
    {de:"erneuerbare Energie",sq:"energjia e rinovueshme",type:"Mjedis",ex:"Wir brauchen erneuerbare Energie. — Na duhet energji e rinovueshme."},
    {de:"die Luftverschmutzung",sq:"ndotja e ajrit",type:"Mjedis",ex:"Luftverschmutzung schadet der Gesundheit. — Ndotja e ajrit dëmton shëndetin."},
    {de:"das Recycling",sq:"riciklimi",type:"Mjedis",ex:"Recycling ist wichtig für die Umwelt. — Riciklimi është i rëndësishëm."},
    {de:"der Müll",sq:"mbeturinat",type:"Mjedis",ex:"Wirf keinen Müll auf die Straße! — Mos hidh mbeturina në rrugë!"},
    {de:"der Kompost",sq:"kompostimi",type:"Mjedis",ex:"Wir machen Kompost. — Bëjmë kompost."},
    {de:"die Nachhaltigkeit",sq:"qëndrueshmëria",type:"Mjedis",ex:"Nachhaltigkeit ist das Ziel. — Qëndrueshmëria është qëllimi."},
    {de:"der Klimaschutz",sq:"mbrojtja e klimës",type:"Mjedis",ex:"Klimaschutz geht uns alle an. — Mbrojtja e klimës na prek të gjithëve."},
    {de:"die Energiewende",sq:"tranzicioni energjetik",type:"Mjedis",ex:"Die Energiewende ist im Gange. — Tranzicioni energjetik është në rrjedhë."},
    {de:"emissionsarm",sq:"me emetime të ulëta",type:"Mjedis",ex:"Emissionsarme Autos sind die Zukunft. — Makinat me emetime të ulëta janë e ardhmja."},
    // Gesundheit & Psychologie
    {de:"das Immunsystem",sq:"sistemi imunitar",type:"Shëndet",ex:"Das Immunsystem schützt uns. — Sistemi imunitar na mbron."},
    {de:"die Vorsorge",sq:"parandalimi / kontrolli",type:"Shëndet",ex:"Vorsorge ist besser als Heilung. — Parandalimi është më mirë se shërimi."},
    {de:"die Nebenwirkung",sq:"efekti anësor",type:"Shëndet",ex:"Das Medikament hat Nebenwirkungen. — Ilaçi ka efekte anësore."},
    {de:"die Chronik",sq:"sëmundja kronike",type:"Shëndet",ex:"Er hat eine chronische Krankheit. — Ai ka sëmundje kronike."},
    {de:"die Rehabilitation",sq:"rehabilitimi",type:"Shëndet",ex:"Er macht Rehabilitation. — Ai bën rehabilitim."},
    {de:"das Wohlbefinden",sq:"mirëqenia",type:"Shëndet",ex:"Mein Wohlbefinden ist gut. — Mirëqenia ime është e mirë."},
    {de:"die Lebensqualität",sq:"cilësia e jetës",type:"Shëndet",ex:"Die Lebensqualität verbessert sich. — Cilësia e jetës përmirësohet."},
    {de:"die Bewältigung",sq:"përballimi",type:"Psikologji",ex:"Die Bewältigung von Stress ist wichtig. — Përballimi i stresit është i rëndësishëm."},
    {de:"der Selbstwert",sq:"vetëvlerësimi",type:"Psikologji",ex:"Ein guter Selbstwert hilft. — Vetëvlerësimi i mirë ndihmon."},
    {de:"die Resilienz",sq:"rezistenca psikologjike",type:"Psikologji",ex:"Resilienz hilft in schweren Zeiten. — Rezistenca ndihmon në kohë të vështira."},
    // Bildung & Karriere
    {de:"die Kompetenz",sq:"kompetenca",type:"Punë",ex:"Soziale Kompetenz ist wichtig. — Kompetenca sociale është e rëndësishme."},
    {de:"die Qualifikation",sq:"kualifikimi",type:"Punë",ex:"Welche Qualifikationen haben Sie? — Çfarë kualifikimesh keni?"},
    {de:"die Weiterbildung",sq:"trajnimi shtesë",type:"Punë",ex:"Ich mache eine Weiterbildung. — Bëj trajnim shtesë."},
    {de:"das Zertifikat",sq:"certifikata",type:"Punë",ex:"Das Zertifikat ist anerkannt. — Certifikata është e njohur."},
    {de:"die Anerkennung",sq:"njohja",type:"Punë",ex:"Die Anerkennung des Diploms dauert. — Njohja e diplomës zgjat."},
    {de:"die Bewerbungsunterlagen",sq:"dokumentet e aplikimit",type:"Punë",ex:"Die Bewerbungsunterlagen sind vollständig. — Dokumentet e aplikimit janë të plota."},
    {de:"das Vorstellungsgespräch",sq:"intervista e punës",type:"Punë",ex:"Ich habe morgen ein Vorstellungsgespräch. — Nesër kam intervistë pune."},
    {de:"die Berufserfahrung",sq:"përvoja profesionale",type:"Punë",ex:"Ich habe fünf Jahre Berufserfahrung. — Kam pesë vjet përvojë profesionale."},
    {de:"die Gehaltsverhandlung",sq:"negocimi i pagës",type:"Punë",ex:"Die Gehaltsverhandlung war erfolgreich. — Negocimi i pagës ishte i suksesshëm."},
    {de:"der Arbeitsmarkt",sq:"tregu i punës",type:"Punë",ex:"Der Arbeitsmarkt ist angespannt. — Tregu i punës është i tensionuar."},
    // Sprache & Kommunikation
    {de:"die Muttersprache",sq:"gjuha amtare",type:"Gjuhë",ex:"Meine Muttersprache ist Albanisch. — Gjuha ime amtare është shqipja."},
    {de:"die Fremdsprache",sq:"gjuha e huaj",type:"Gjuhë",ex:"Deutsch ist meine Fremdsprache. — Gjermanishtja është gjuha ime e huaj."},
    {de:"der Akzent",sq:"aksenti",type:"Gjuhë",ex:"Ich habe einen albanischen Akzent. — Kam akset shqiptar."},
    {de:"die Aussprache",sq:"shqiptimi",type:"Gjuhë",ex:"Die Aussprache ist schwer. — Shqiptimi është i vështirë."},
    {de:"die Grammatik",sq:"gramatika",type:"Gjuhë",ex:"Grammatik ist das Fundament. — Gramatika është themeli."},
    {de:"der Wortschatz",sq:"fjalori (personal)",type:"Gjuhë",ex:"Mein Wortschatz wächst. — Fjalori im rritet."},
    {de:"die Redewendung",sq:"shprehja idiomatike",type:"Gjuhë",ex:"Das ist eine Redewendung. — Kjo është shprehje idiomatike."},
    {de:"das Sprichwort",sq:"proverbi",type:"Gjuhë",ex:"Kennst du dieses Sprichwort? — E njeh këtë proverb?"},
    {de:"der Dialekt",sq:"dialekti",type:"Gjuhë",ex:"Der Bairische Dialekt ist schwer. — Dialekti bavarez është i vështirë."},
    {de:"die Übersetzung",sq:"përkthimi",type:"Gjuhë",ex:"Die Übersetzung ist nicht genau. — Përkthimi nuk është i saktë."},
    // Technologie B1
    {de:"das Betriebssystem",sq:"sistemi operativ",type:"Teknologji",ex:"Welches Betriebssystem nutzt du? — Çfarë sistemi operativ përdor?"},
    {de:"die Datensicherheit",sq:"siguria e të dhënave",type:"Teknologji",ex:"Datensicherheit ist wichtig. — Siguria e të dhënave është e rëndësishme."},
    {de:"der Datenschutz",sq:"mbrojtja e të dhënave",type:"Teknologji",ex:"Datenschutz ist ein Grundrecht. — Mbrojtja e të dhënave është themelore."},
    {de:"das Update",sq:"përditësimi",type:"Teknologji",ex:"Ich mache das Update. — Bëj përditësimin."},
    {de:"die Schnittstelle",sq:"ndërfaqja",type:"Teknologji",ex:"Die Schnittstelle ist benutzerfreundlich. — Ndërfaqja është miqësore."},
    {de:"die Vernetzung",sq:"rrjetëzimi",type:"Teknologji",ex:"Die digitale Vernetzung wächst. — Rrjetëzimi digjital rritet."},
    {de:"die Bandbreite",sq:"gjerësia e brezit",type:"Teknologji",ex:"Die Bandbreite ist zu niedrig. — Gjerësia e brezit është shumë e ulët."},
    {de:"der Server",sq:"serveri",type:"Teknologji",ex:"Der Server ist ausgefallen. — Serveri ka rënë."},
    {de:"die Firewall",sq:"muri mbrojtës",type:"Teknologji",ex:"Die Firewall schützt das Netzwerk. — Muri mbrojtës mbron rrjetin."},
    {de:"das Backup",sq:"kopja rezervë",type:"Teknologji",ex:"Mach ein Backup! — Bëj kopje rezervë!"},
  ]
};

// Merge into buildAllVocab
var _origBuildAllVocab = buildAllVocab;
buildAllVocab = function() {
  _origBuildAllVocab();
  function tag(arr, src) { return (arr||[]).map(function(w){ return Object.assign({},w,{source:src}); }); }
  ALL_VOCAB.A1 = ALL_VOCAB.A1.concat(tag(VOCAB_FINAL.A1_fin, 'Fjalori Final'));
  ALL_VOCAB.A2 = ALL_VOCAB.A2.concat(tag(VOCAB_FINAL.A2_fin, 'Fjalori Final'));
  ALL_VOCAB.B1 = ALL_VOCAB.B1.concat(tag(VOCAB_FINAL.B1_fin, 'Fjalori Final'));
};





// ── DAILY CHATBOT QUESTION ──
const DAILY_QUESTIONS = [
  {q:"Was hast du heute gegessen? Beschreib es auf Deutsch!", tip:"Përdor: Zum Frühstück/Mittag/Abend habe ich... gegessen."},
  {q:"Erzähl mir von deiner Familie auf Deutsch.", tip:"Meine Mutter ist... / Ich habe einen Bruder, der..."},
  {q:"Was machst du am Wochenende normalerweise?", tip:"Normalerweise / Meistens / Manchmal + Verb"},
  {q:"Beschreib dein Zimmer oder deine Wohnung auf Deutsch.", tip:"Mein Zimmer ist... / Es gibt... / An der Wand hängt..."},
  {q:"Warum lernst du Deutsch? Was sind deine Ziele?", tip:"Ich lerne Deutsch, weil... / Mein Ziel ist..."},
  {q:"Was ist dein Lieblingsgericht? Wie macht man es?", tip:"Man braucht... / Zuerst... / Dann... / Am Ende..."},
  {q:"Erzähl mir von einem schönen Erlebnis aus deiner Kindheit.", tip:"Als ich klein war... / Damals... / Ich erinnere mich..."},
  {q:"Was würdest du machen, wenn du einen freien Monat hättest?", tip:"Wenn ich... hätte, würde ich... (Konjunktiv II)"},
  {q:"Beschreib eine typische Arbeitswoche in deinem Leben.", tip:"Montags/Dienstags... / Ich fange um... Uhr an..."},
  {q:"Was denkst du über soziale Medien? Vor- und Nachteile?", tip:"Einerseits... andererseits... / Ein Vorteil ist... Ein Nachteil ist..."},
  {q:"Erzähl mir über deine Stadt oder dein Dorf.", tip:"Ich komme aus... / Es liegt... / Es gibt... / Die Menschen sind..."},
  {q:"Was ist dein Traumberuf und warum?", tip:"Ich möchte... werden, weil... / Es ist wichtig, dass..."},
  {q:"Wie gehst du mit Stress um?", tip:"Wenn ich gestresst bin,... / Ich versuche... / Am besten hilft mir..."},
  {q:"Was sind die drei wichtigsten Dinge in deinem Leben?", tip:"Das Wichtigste für mich ist... weil... / Außerdem..."},
  {q:"Erzähl mir über eine interessante Person, die du kennst.", tip:"Ich kenne jemanden, der... / Er/Sie ist... / Was mich beeindruckt ist..."},
];

function getDailyQuestion() {
  var now = new Date();
  var dayOfYear = Math.floor((now - new Date(now.getFullYear(),0,0)) / 86400000);
  return DAILY_QUESTIONS[dayOfYear % DAILY_QUESTIONS.length];
}

// Override showChatbot to sometimes show daily question
var _origShowChatbot = showChatbot;
showChatbot = function() {
  _origShowChatbot();
  setTimeout(function() {
    var dq = getDailyQuestion();
    var msgs = document.getElementById('chatMessages');
    if (msgs && msgs.children.length <= 1 && dq) {
      window._dailyQ = dq.q;
      var hint = document.createElement('div');
      hint.style.cssText = 'margin:0 0 12px;padding:10px 14px;background:rgba(240,180,41,0.08);border:1px solid rgba(240,180,41,0.2);border-radius:10px;font-size:0.8rem;color:var(--text-muted)';
      hint.innerHTML = '<div><strong style="color:var(--gold)">⭐ Pyetja e Ditës:</strong> ' + dq.q + '</div>' +
        '<div style="margin-top:4px;font-size:0.75rem;opacity:0.8">💡 ' + dq.tip + '</div>' +
        '<button id="dailyQBtn" style="margin-top:6px;padding:4px 10px;background:var(--gold);border:none;border-radius:6px;color:#000;font-size:0.75rem;cursor:pointer;font-family:DM Sans,sans-serif">Përdor këtë pyetje</button>';
      if (msgs.firstChild) msgs.insertBefore(hint, msgs.firstChild);
      else msgs.appendChild(hint);
      // Attach button handler after DOM insertion
      setTimeout(function() {
        var btn = document.getElementById('dailyQBtn');
        if (btn) btn.onclick = function() {
          var inp = document.getElementById('chatInput');
          if (inp && window._dailyQ) { inp.value = window._dailyQ; inp.focus(); }
        };
      }, 50);
    }
  }, 500);
};
// ── PRINT / PDF EXPORT ──
function printGrammar(level) {
  var topics = GRAMMAR_DB[level] || [];
  var win = window.open('', '_blank');
  if (!win) return;
  var html = '<html><head><title>DeutschAL — Gramatika ' + level + '</title>' +
    '<style>body{font-family:Arial,sans-serif;max-width:800px;margin:0 auto;padding:20px;color:#111}' +
    'h1{color:#c9900a;border-bottom:2px solid #c9900a;padding-bottom:8px}' +
    'h2{color:#1a56db;margin-top:24px}' +
    '.rule{background:#f3f4f6;padding:8px 12px;border-radius:6px;margin-bottom:6px;font-family:monospace}' +
    '.example{border-left:3px solid #c9900a;padding:6px 12px;margin-bottom:6px;color:#444}' +
    '.note{background:#fef9c3;padding:8px;border-radius:6px;font-size:0.85em;color:#666}' +
    '@media print{button{display:none}}</style></head><body>';
  html += '<h1>DeutschAL — Gramatika ' + level + '</h1>';
  html += '<button onclick="window.print()" style="padding:8px 16px;background:#c9900a;color:#fff;border:none;border-radius:6px;cursor:pointer;margin-bottom:20px">🖨️ Printo PDF</button>';
  topics.forEach(function(t) {
    html += '<h2>' + t.icon + ' ' + t.title + '</h2>';
    html += '<p>' + t.explanation + '</p>';
    if (t.note) html += '<div class="note">💡 ' + t.note + '</div>';
    html += '<h4 style="margin-bottom:6px">Rregullat:</h4>';
    (t.rules||[]).forEach(function(r) {
      html += '<div class="rule">' + r.rule + (r.note ? ' <em style="color:#666"> — ' + r.note + '</em>' : '') + '</div>';
    });
    html += '<h4 style="margin-bottom:6px">Shembuj:</h4>';
    (t.examples||[]).forEach(function(e) {
      html += '<div class="example"><strong>' + e.de + '</strong><br><em>' + e.sq + '</em></div>';
    });
    html += '<hr>';
  });
  html += '</body></html>';
  win.document.write(html);
  win.document.close();
}

function printVocab(level) {
  buildAllVocab();
  var words = ALL_VOCAB[level] || [];
  var win = window.open('', '_blank');
  if (!win) return;
  var html = '<html><head><title>DeutschAL — Fjalori ' + level + '</title>' +
    '<style>body{font-family:Arial,sans-serif;max-width:900px;margin:0 auto;padding:20px}' +
    'h1{color:#c9900a}table{width:100%;border-collapse:collapse}' +
    'th{background:#c9900a;color:#fff;padding:8px;text-align:left}' +
    'td{padding:7px 8px;border-bottom:1px solid #eee}' +
    'tr:nth-child(even){background:#f9f9f9}' +
    '.der{color:#1a56db}.die{color:#e91e8c}.das{color:#16a34a}' +
    '@media print{button{display:none}}</style></head><body>';
  html += '<h1>DeutschAL — Fjalori ' + level + ' (' + words.length + ' fjalë)</h1>';
  html += '<p style="color:#666;font-size:0.85em">🔵 der (mashkullor) &nbsp; 🩷 die (femëror) &nbsp; 🟢 das (asnjanës)</p>';
  html += '<button onclick="window.print()" style="padding:8px 16px;background:#c9900a;color:#fff;border:none;border-radius:6px;cursor:pointer;margin-bottom:16px">🖨️ Printo PDF</button>';
  html += '<table><tr><th>Gjermanisht</th><th>Shqip</th><th>Lloji</th><th>Shembull</th></tr>';
  words.forEach(function(w) {
    var cl = w.de && w.de.startsWith('der ') ? 'der' : w.de && w.de.startsWith('die ') ? 'die' : w.de && w.de.startsWith('das ') ? 'das' : '';
    html += '<tr><td class="'+cl+'"><strong>'+w.de+'</strong></td><td>'+w.sq+'</td><td style="color:#888;font-size:0.82em">'+( w.type||'')+'</td><td style="color:#555;font-size:0.82em">'+(w.ex||'')+'</td></tr>';
  });
  html += '</table></body></html>';
  win.document.write(html);
  win.document.close();
}

function printIrregularVerbs() {
  var win = window.open('', '_blank');
  if (!win) return;
  var html = '<html><head><title>DeutschAL — Foljet Parregullte</title>' +
    '<style>body{font-family:Arial,sans-serif;max-width:800px;margin:0 auto;padding:20px}' +
    'h1{color:#c9900a}table{width:100%;border-collapse:collapse}' +
    'th{background:#c9900a;color:#fff;padding:8px}' +
    'td{padding:7px 10px;border-bottom:1px solid #eee;font-family:monospace}' +
    'tr:nth-child(even){background:#f9f9f9}' +
    '@media print{button{display:none}}</style></head><body>';
  html += '<h1>Foljet Parregullte — 30 të rëndësishmet</h1>';
  html += '<button onclick="window.print()" style="padding:8px 16px;background:#c9900a;color:#fff;border:none;border-radius:6px;cursor:pointer;margin-bottom:16px">🖨️ Printo PDF</button>';
  html += '<table><tr><th>Infinitiv</th><th>Präteritum</th><th>Perfekt</th></tr>';
  (REFERENCE_TABLES.irregularVerbs.verbs||[]).forEach(function(v) {
    html += '<tr><td><strong>'+v[0]+'</strong></td><td>'+v[1]+'</td><td>'+v[2]+'</td></tr>';
  });
  html += '</table></body></html>';
  win.document.write(html);
  win.document.close();
}



document.addEventListener("DOMContentLoaded", function startApp() {
  var bar=document.getElementById('loaderBar');
  if(bar) setTimeout(function(){bar.style.width='100%';},60);
  try{buildAllVocab();}catch(e){}
  try{initTheme();}catch(e){}
  try{TTS.init();}catch(e){}
  setTimeout(function(){
    try{renderWordOfDay();}catch(e){}
    try{updateResumeCard();updatePrimaryBtn();}catch(e){}
    var l=document.getElementById('appLoader');
    if(l){l.style.transition='opacity 0.5s';l.style.opacity='0';setTimeout(function(){l.style.display='none';},500);}
  },350);
});


// v17 features placeholder




// ════════════════════════════════════════════════════════
// HISTORIA INTERAKTIVE
// ════════════════════════════════════════════════════════
const INTERACTIVE_STORIES = {
  a1m1_choice: {
    setup: 'Dion mbrin ne Vjene. Duhet te gjeje adresen e familjes Bauer. Cfare ben?',
    options: [
      {label:'Pyes nje kalimtar', key:'ask'},
      {label:'Kerkoj ne harte (Google Maps)', key:'map'}
    ],
    branches: {
      ask: {
        title:'Dioni pyet nje kalimtar',
        lines:[
          {speaker:'Dion', de:'Entschuldigung! Koennen Sie mir helfen? Ich suche die Mozartstrasse 14.', sq:'Me falni! Mund te me ndihmoni? Po kerkoj Mozartstrasse 14.'},
          {speaker:'Frau Wagner', de:'Natuerlich! Gehen Sie geradeaus, dann links an der Ampel.', sq:'Sigurisht! Ecni drejt, pastaj majtas te semafori.'},
          {speaker:'Dion', de:'Danke schoen! Das ist sehr nett.', sq:'Shume faleminderit! Jeni shume i/e mire.'},
          {speaker:'Frau Wagner', de:'Bitte schoen! Viel Erfolg in Wien!', sq:'Ka gjë! Suksese ne Vjene!'}
        ],
        feedback:'Shume mire! Ke mesuar: drejtimi + falënderimin. Fjale: geradeaus (drejt), links (majtas), die Ampel (semafori).'
      },
      map: {
        title:'Dioni perdor harten',
        lines:[
          {speaker:'Dion', de:'Hmm... Die App sagt: kein Signal. Das ist ein Problem!', sq:'Hmm... App-i thote: nuk ka sinjal. Ky eshte problem!'},
          {speaker:'Herr Koch', de:'Brauchen Sie Hilfe? Sie sehen verloren aus!', sq:'Keni nevoje per ndihme? Dukeni i humbur!'},
          {speaker:'Dion', de:'Ja, bitte! Ich suche die Mozartstrasse 14.', sq:'Po, ju lutem! Po kerkoj Mozartstrasse 14.'},
          {speaker:'Herr Koch', de:'Das ist hier um die Ecke! Ich zeige Ihnen den Weg.', sq:'Kjo eshte ketu te kendi! Une ju tregoj rrugeen.'}
        ],
        feedback:'Kur teknologjia deshtron, njerezit ndihmojne! Fjale: verloren (i humbur), die Ecke (kendi), zeigen (te tregosh).'
      }
    }
  },
  a2m7_choice: {
    setup: 'Dioni ka interviste pune. Intervistuesi pyet: "Pse doni te punoni tek ne?" Cfare thote Dioni?',
    options: [
      {label:'Flet per ambiciet e karrieres', key:'career'},
      {label:'Flet per pasionin ndaj punes', key:'passion'}
    ],
    branches: {
      career: {
        title:'Dioni zgjedh: karriera',
        lines:[
          {speaker:'Interviewer', de:'Warum moechten Sie bei uns arbeiten?', sq:'Pse deshironi te punoni tek ne?'},
          {speaker:'Dion', de:'Ihr Unternehmen ist bekannt fuer Innovation. Ich moechte meine Karriere hier aufbauen.', sq:'Kompania juaj eshte e njohur per inovacion. Dua ta ndertoj karrieren time ketu.'},
          {speaker:'Interviewer', de:'Das klingt ambitioniert. Welche Ziele haben Sie fuer die naechsten fuenf Jahre?', sq:'Kjo tingellonn ambicioz. Cfare qellimesh keni per 5 vitet e ardhshme?'},
          {speaker:'Dion', de:'In fuenf Jahren moechte ich Teamleiter sein und internationale Projekte leiten.', sq:'Pas 5 vitesh dua te jem drejtues ekipi dhe te drejtoj projekte nderkombtare.'}
        ],
        feedback:'Profesionale! Intervistuesi vleresonnambicien e qarte. Fjale: das Unternehmen (kompania), aufbauen (te ndertosh), die Karriere.'
      },
      passion: {
        title:'Dioni zgjedh: pasioni',
        lines:[
          {speaker:'Interviewer', de:'Warum moechten Sie bei uns arbeiten?', sq:'Pse deshironi te punoni tek ne?'},
          {speaker:'Dion', de:'Ehrlich gesagt liebe ich Technologie! Seit Jahren programmiere ich in meiner Freizeit.', sq:'Sinqerisht e dua teknologjine! Prej vitesh programoj ne kohen e lire.'},
          {speaker:'Interviewer', de:'Das gefaellt mir! Zeigen Sie mir etwas, das Sie selbst entwickelt haben.', sq:'Kjo me pelqen! Me tregoni dicka qe keni zhvilluar vetë.'},
          {speaker:'Dion', de:'Natuerlich! Ich habe eine App fuer albanische Lernende entwickelt.', sq:'Sigurisht! Kam zhvilluar nje app per nxenesit shqiptare.'}
        ],
        feedback:'Pasioni autentik impresionon! Fjale: ehrlich gesagt (sinqerisht), die Freizeit (koha e lire), entwickeln (te zhvillosh).'
      }
    }
  },
  b1m12_choice: {
    setup: 'Kolegu i Dionit ka bere gabim ne projekt. Shefi eshte i zemeeruar. Dioni e di te verteten. Cfare ben?',
    options: [
      {label:'Flas me kolegjen privatisht', key:'private'},
      {label:'I tregoj shefit te verteten direkt', key:'direct'},
      {label:'Rri i heshtur - nuk eshte puna ime', key:'silent'}
    ],
    branches: {
      private: {
        title:'Dioni flet me kolegjen',
        lines:[
          {speaker:'Dion', de:'Jonas, ich muss kurz mit dir sprechen. Unter vier Augen.', sq:'Jonas, duhet te flas me ty shkurt. Privatisht.'},
          {speaker:'Jonas', de:'Was ist los, Dion?', sq:'Cfare ndodh, Dion?'},
          {speaker:'Dion', de:'Der Chef ist ungluecklich wegen des Fehlers. Du solltest mit ihm sprechen - bevor er herausfindet was passiert ist.', sq:'Shefi eshte i pakaqur per gabimin. Duhet te flasesh me te para se ai te zbuloje ce ka ndodhur.'},
          {speaker:'Jonas', de:'Du hast Recht. Danke, Dion.', sq:'Ke te drejte. Faleminderit, Dion.'}
        ],
        feedback:'Zgjidhja e mencur! Fjale kyce: "unter vier Augen" = privatisht (shprehje shume e zakonshme gjermane). wegen + Genitiv.'
      },
      direct: {
        title:'Dioni i tregon shefit',
        lines:[
          {speaker:'Dion', de:'Herr Mueller, ich muss Ihnen etwas sagen. Der Fehler war nicht Jonas Schuld allein.', sq:'Zoti Mueller, duhet t\'ju tregoj dicka. Gabimi nuk ishte vetem faji i Jonasit.'},
          {speaker:'Chef', de:'Was? Erzaehlen Sie mir mehr.', sq:'Cfare? Tregomëe me shume.'},
          {speaker:'Dion', de:'Es gab einen Systemfehler. Jonas hat alles versucht. Er verdient eine zweite Chance.', sq:'Kishte gabim sistemi. Jonasi ka provuar gjithe. Merion nje shans te dyte.'},
          {speaker:'Chef', de:'Ich schaetze Ihre Ehrlichkeit, Dion. Das zeigt Teamgeist.', sq:'Cmoj ndershmerine tuaj, Dion. Kjo tregon fryme ekipi.'}
        ],
        feedback:'Guximshem! Kultura gjermane vlereson ndershmerine direkte. Fjale: die Schuld (faji), verdienen (te meritosh), der Teamgeist.'
      },
      silent: {
        title:'Dioni rri i heshtur',
        lines:[
          {speaker:'Narrator', de:'Dion sagt nichts. Aber er fuehlt sich nicht gut dabei.', sq:'Dioni nuk thote asgjee. Por nuk ndihet mire.'},
          {speaker:'Jonas', de:'Warum hast du nichts gesagt, Dion? Du wusstest es!', sq:'Pse nuk the asgjee, Dion? Ti e dije!'},
          {speaker:'Dion', de:'Ich weiss nicht. Es war nicht meine Sache.', sq:'Nuk di. Nuk ishte puna ime.'},
          {speaker:'Jonas', de:'Manchmal ist Schweigen auch eine Entscheidung. Und nicht immer die richtige.', sq:'Ndonjehere edhe heshtja eshte vendim. Dhe jo gjithmon i drejte.'}
        ],
        feedback:'Interesante! Gjermanishtja ka fjale "Wer schweigt, stimmt zu" (kush hesht, pajtohet). Fjale: schweigen (te heshtesh), die Entscheidung (vendimi).'
      }
    }
  }
};

var interactiveState = {moduleId:null, branch:null, lineIdx:0};

function getInteractiveStory(modId) {
  return INTERACTIVE_STORIES[modId + '_choice'] || null;
}

function showInteractiveChoice(modId) {
  var story = getInteractiveStory(modId);
  var c = document.getElementById('lessonContent');
  if (!story || !c) return false;
  interactiveState = {moduleId:modId, branch:null, lineIdx:0};
  var html = '<div style="max-width:660px;margin:0 auto;padding:8px">' +
    '<div style="background:linear-gradient(135deg,rgba(240,180,41,0.12),rgba(240,180,41,0.04));border:2px solid rgba(240,180,41,0.3);border-radius:14px;padding:20px;margin-bottom:18px">' +
    '<div style="font-size:0.7rem;color:var(--gold);text-transform:uppercase;letter-spacing:2px;margin-bottom:10px">Vendim Interaktiv</div>' +
    '<p style="font-size:0.95rem;color:var(--text);line-height:1.7;margin:0">' + story.setup + '</p></div>' +
    '<div style="display:flex;flex-direction:column;gap:10px">';
  story.options.forEach(function(opt) {
    html += '<button onclick="chooseInteractiveBranch(\'' + opt.key + '\')" ' +
      'style="padding:15px 20px;background:var(--surface2);border:2px solid var(--border);border-radius:12px;' +
      'color:var(--text);cursor:pointer;font-size:0.9rem;font-family:DM Sans,sans-serif;text-align:left" ' +
      'onmouseover="this.style.borderColor=\'var(--gold)\'" onmouseout="this.style.borderColor=\'var(--border)\'">' +
      opt.label + '</button>';
  });
  html += '</div></div>';
  c.innerHTML = html;
  return true;
}

function chooseInteractiveBranch(key) {
  var story = getInteractiveStory(interactiveState.moduleId);
  if (!story || !story.branches[key]) return;
  interactiveState.branch = key;
  interactiveState.lineIdx = 0;
  renderInteractiveLine();
}

function renderInteractiveLine() {
  var story = getInteractiveStory(interactiveState.moduleId);
  var c = document.getElementById('lessonContent');
  if (!story || !c) return;
  var branch = story.branches[interactiveState.branch];
  if (!branch) return;
  var lines = branch.lines;
  var idx = interactiveState.lineIdx;

  if (idx >= lines.length) {
    // Show feedback
    c.innerHTML = '<div style="max-width:660px;margin:0 auto;padding:8px">' +
      '<div style="background:rgba(34,197,94,0.08);border:1px solid rgba(34,197,94,0.3);border-radius:12px;padding:18px;margin-bottom:16px">' +
      '<p style="color:var(--green);font-size:0.9rem;line-height:1.7;margin:0">' + branch.feedback + '</p></div>' +
      '<div style="display:flex;gap:10px">' +
      '<button class="btn-outline" onclick="showInteractiveChoice(\'' + interactiveState.moduleId + '\')" style="flex:1">Provo zgjedhje tjeter</button>' +
      '<button class="btn" onclick="switchTab(\'vocab\')" style="flex:1">Vazhdo Fjalori</button>' +
      '</div></div>';
    TTS.stop();
    return;
  }

  var line = lines[idx];
  var isNarr = line.speaker === 'Narrator';
  var speakerColors = {Dion:'var(--gold)', Klea:'var(--a2-color)', Narrator:'var(--text-muted)'};
  var sc = speakerColors[line.speaker] || 'var(--text-muted)';

  var revealedHtml = '';
  for (var i = 0; i <= idx; i++) {
    var l = lines[i];
    var isN = l.speaker === 'Narrator';
    var lsc = speakerColors[l.speaker] || 'var(--text-muted)';
    if (isN) {
      revealedHtml += '<div style="text-align:center;font-style:italic;color:var(--text-muted);font-size:0.85rem;padding:8px 0">' + l.de + '</div>';
    } else {
      revealedHtml += '<div style="margin-bottom:12px">' +
        '<div style="font-size:0.73rem;font-weight:700;color:' + lsc + ';text-transform:uppercase;letter-spacing:1px;margin-bottom:4px">' + l.speaker + '</div>' +
        '<div style="background:var(--surface2);border-radius:10px;padding:12px 16px;border-left:3px solid ' + lsc + '">' +
        '<div style="color:var(--text);font-size:0.92rem">' + l.de +
        ' <button class="tts-btn" data-de="' + l.de.replace(/"/g,'&quot;') + '" onclick="TTS.speak(this.dataset.de)" style="background:none;border:none;cursor:pointer;font-size:0.8rem;color:var(--gold);opacity:0.6">🔊</button></div>' +
        '<div style="color:var(--text-muted);font-size:0.8rem;font-style:italic;margin-top:4px">' + l.sq + '</div></div></div>';
    }
  }

  var isLast = idx >= lines.length - 1;
  c.innerHTML = '<div style="max-width:660px;margin:0 auto;padding:8px">' +
    '<div style="font-size:0.73rem;color:var(--text-muted);margin-bottom:12px">' + branch.title + ' — ' + (idx+1) + '/' + lines.length + '</div>' +
    revealedHtml +
    '<button class="btn" onclick="interactiveState.lineIdx++;renderInteractiveLine()" style="width:100%;margin-top:8px">' +
    (isLast ? 'Shiko rezultatin' : 'Vazhdo') + ' </button></div>';
}

// ════════════════════════════════════════════════════════
// ZBULO GABIMIN — Error Hunting
// ════════════════════════════════════════════════════════
const ERROR_HUNT_EXERCISES = [
  {id:'EH1',level:'A1',wrong:'Ich bin gegangen nach Hause.',correct:'Ich bin nach Hause gegangen.',
   category:'Renditja fjaleve',hint:'Ku shkon folja ne Perfekt?',
   explanation:'Folja e plote (gegangen) duhet te jete gjithmon ne FUND kur ka folje ndihmeese (bin). Rregulli: bin + [mesit] + gegangen.'},
  {id:'EH2',level:'A1',wrong:'Er hat ein Auto blaues.',correct:'Er hat ein blaues Auto.',
   category:'Renditja mbiemrit',hint:'Ku vendoset mbiemri?',
   explanation:'Mbiemri shkon PARA emrit ne gjermanisht. "ein BLAUES Auto" - jo "ein Auto blaues".'},
  {id:'EH3',level:'A1',wrong:'Ich mochte einen Kaffee trinken bitte.',correct:'Ich mochte bitte einen Kaffee trinken.',
   category:'Folje modale',hint:'Ku shkon "bitte"?',
   explanation:'"Bitte" vendoset pas foljes modale. "Trinken" mbetet gjithmon ne fund te fjalie.'},
  {id:'EH4',level:'A1',wrong:'Die Buch ist interessant.',correct:'Das Buch ist interessant.',
   category:'Gjinia e emrit',hint:'Cila eshte gjinia e Buch?',
   explanation:'"Buch" (libri) eshte ASNJANES - nyja e sakte eshte "DAS Buch". Die perdoret vetem per femerin.'},
  {id:'EH5',level:'A1',wrong:'Ich komme von Albanien.',correct:'Ich komme aus Albanien.',
   category:'Prepozicat',hint:'Cila prepozice perdoret per vendlindjen?',
   explanation:'Per vendet: "aus" (nga). "von" perdoret per njerez ose pika specifike. "Ich komme AUS Albanien."'},
  {id:'EH6',level:'A2',wrong:'Obwohl er krank ist, aber er geht arbeiten.',correct:'Obwohl er krank ist, geht er arbeiten.',
   category:'Lidhezat varese',hint:'"Obwohl" dhe "aber" bashke?',
   explanation:'"Obwohl" eshte lidheze varëse qe shpreh "megjithese". Nuk keni nevoje edhe per "aber". Nje nga te dyja!'},
  {id:'EH7',level:'A2',wrong:'Ich habe gestern ins Kino gegangen.',correct:'Ich bin gestern ins Kino gegangen.',
   category:'Haben vs Sein',hint:'"gehen" kerkon haben apo sein?',
   explanation:'"gehen" (te shkosh) eshte folje levizjeje. Perfekt me SEIN. "Ich BIN gegangen." Foljet e levizjes marrin SEIN.'},
  {id:'EH8',level:'A2',wrong:'Weil ich bin mude, schlafe ich fruh.',correct:'Weil ich mude bin, schlafe ich fruh.',
   category:'Fjalia varese',hint:'Ku shkon folja pas "weil"?',
   explanation:'Pas "weil", folja shkon NE FUND. "Weil ich mude BIN" - jo "weil ich BIN mude". Renditja ndryshon ne fjali varëse.'},
  {id:'EH9',level:'A2',wrong:'Das ist das schonste Restaurant, das ich habe je gesehen.',correct:'Das ist das schonste Restaurant, das ich je gesehen habe.',
   category:'Fjalia relative',hint:'Ku shkon folja ndihmeese ne fjali relative?',
   explanation:'Ne fjali relative, folja ndihmeese "habe" shkon GJITHMON ne fund. "das ich je gesehen HABE."'},
  {id:'EH10',level:'A2',wrong:'Wenn ich hatte mehr Zeit, wurde ich lernen.',correct:'Wenn ich mehr Zeit hatte, wurde ich lernen.',
   category:'Konjunktiv II',hint:'Ku shkon folja pas "wenn"?',
   explanation:'Pas "wenn", renditja: kryefjala + [pjesa tjeter] + folja NE FUND. "Wenn ich mehr Zeit HATTE."'},
  {id:'EH11',level:'B1',wrong:'Das Auto wird von dem Mechaniker reparieren.',correct:'Das Auto wird von dem Mechaniker repariert.',
   category:'Pasivi',hint:'Cfare forme merr folja ne pasiv?',
   explanation:'Pasivi: wird + PARTIZIP II. "repariert" (jo "reparieren"). "reparieren" eshte infinitivi.'},
  {id:'EH12',level:'B1',wrong:'Je mehr ich ube, desto gut werde ich.',correct:'Je mehr ich ube, desto besser werde ich.',
   category:'Komparativ',hint:'"desto" kerkon cfare forme te mbiemrit?',
   explanation:'"je...desto" kerkon KOMPARATIV. "gut" ndryshon ne "besser". Jo "desto gut" - duhet "desto BESSER".'},
  {id:'EH13',level:'B1',wrong:'Ich erinnere an den Urlaub mich gern.',correct:'Ich erinnere mich gern an den Urlaub.',
   category:'Foljet refleksive',hint:'Ku vendoset "mich" me folje refleksive?',
   explanation:'"sich erinnern" eshte folje refleksive. Renditja: ich + erinnere + MICH (menjehere pas foljes) + gern + an den Urlaub.'},
  {id:'EH14',level:'B1',wrong:'Trotzdem er krank war, ging er arbeiten.',correct:'Er war krank, trotzdem ging er arbeiten.',
   category:'Ndajfoljet lidhese',hint:'"Trotzdem" shkakton cfare?',
   explanation:'"Trotzdem" si ndajfolje kerkon INVERSIONI: folja vjen para kryefjalës. "Trotzdem GING ER" - jo "Trotzdem er".'},
  {id:'EH15',level:'B1',wrong:'Das Projekt wurde sehr gut durchgefuhrt geworden.',correct:'Das Projekt wurde sehr gut durchgefuhrt.',
   category:'Pasivi i dyfishte',hint:'Sa forma pasive?',
   explanation:'Pasivi kerkon vetem: wurde + Partizip II. "geworden" eshte Partizip II i "werden" dhe eshte i tepërt ketu.'}
];

var ehState = {idx:0, level:'ALL', revealed:false};

function showErrorHunting() {
  ehState = {idx:0, level:'ALL', revealed:false};
  renderErrorHuntScreen();
  showScreen('errorHuntScreen');
}

function filterErrorHunt(level) {
  ehState = {idx:0, level:level, revealed:false};
  renderErrorHuntScreen();
}

function renderErrorHuntScreen() {
  var c = document.getElementById('errorHuntContent');
  if (!c) return;
  var all = ERROR_HUNT_EXERCISES.filter(function(ex){
    return ehState.level === 'ALL' || ex.level === ehState.level;
  });
  var ex = all[ehState.idx % all.length];
  var lc = ex.level==='A1'?'var(--a1-color)':ex.level==='A2'?'var(--a2-color)':'var(--b1-color)';
  var pct = Math.round(ehState.idx / all.length * 100);

  c.innerHTML = '<div style="max-width:660px;margin:0 auto">' +
    '<div style="display:flex;gap:6px;margin-bottom:14px;flex-wrap:wrap">' +
    ['ALL','A1','A2','B1'].map(function(l){
      var a = ehState.level===l;
      return '<button onclick="filterErrorHunt(\'' + l + '\')" style="padding:5px 14px;border-radius:20px;border:2px solid '+(a?lc:'var(--border)')+';background:'+(a?'rgba(240,180,41,0.1)':'transparent')+';color:'+(a?lc:'var(--text-muted)')+';cursor:pointer;font-size:0.8rem;font-family:DM Sans,sans-serif">' + l + '</button>';
    }).join('') +
    '<span style="margin-left:auto;font-size:0.77rem;color:var(--text-muted);line-height:32px">' + (ehState.idx%all.length+1) + '/' + all.length + '</span>' +
    '</div>' +
    '<div style="height:4px;background:var(--surface2);border-radius:2px;margin-bottom:18px">' +
    '<div style="height:4px;width:'+pct+'%;background:'+lc+';border-radius:2px"></div></div>' +
    '<div style="background:var(--surface2);border-radius:14px;padding:20px;margin-bottom:14px;border-left:4px solid var(--red)">' +
    '<div style="display:flex;justify-content:space-between;margin-bottom:12px">' +
    '<span style="font-size:0.7rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:1px">Kategoria: ' + ex.category + '</span>' +
    '<span style="font-size:0.7rem;padding:2px 10px;border-radius:10px;background:'+lc+'22;color:'+lc+'">' + ex.level + '</span></div>' +
    '<p style="font-size:0.73rem;color:var(--red);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Fjalia me gabim - gjej dhe korrigjo:</p>' +
    '<div style="font-size:1.1rem;font-weight:600;color:var(--text);background:var(--surface);padding:13px 16px;border-radius:10px;border:2px solid var(--red)">' +
    ex.wrong +
    ' <button class="tts-btn" data-de="' + ex.wrong.replace(/"/g,'&quot;') + '" onclick="TTS.speak(this.dataset.de)" style="background:none;border:none;cursor:pointer;font-size:0.85rem;color:var(--red);opacity:0.6">🔊</button></div>' +
    '<div style="margin-top:10px;padding:8px 12px;background:rgba(240,180,41,0.08);border-radius:8px;font-size:0.82rem;color:var(--text-muted)">Ndihme: ' + ex.hint + '</div></div>' +
    (!ehState.revealed ?
      '<button onclick="ehState.revealed=true;renderErrorHuntScreen()" class="btn" style="width:100%;margin-bottom:12px">Shfaq korrigjimin</button>' :
      '<div style="background:var(--surface2);border-radius:14px;padding:20px;margin-bottom:14px;border-left:4px solid var(--green)">' +
      '<p style="font-size:0.73rem;color:var(--green);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Forma e sakte:</p>' +
      '<div style="font-size:1.05rem;font-weight:600;color:var(--text);background:var(--surface);padding:13px 16px;border-radius:10px;border:2px solid var(--green);margin-bottom:12px">' +
      ex.correct +
      ' <button class="tts-btn" data-de="' + ex.correct.replace(/"/g,'&quot;') + '" onclick="TTS.speak(this.dataset.de)" style="background:none;border:none;cursor:pointer;font-size:0.85rem;color:var(--green);opacity:0.7">🔊</button></div>' +
      '<div style="background:rgba(96,165,250,0.08);border:1px solid rgba(96,165,250,0.2);border-radius:10px;padding:14px">' +
      '<p style="font-size:0.73rem;color:#60a5fa;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px">Shpjegimi:</p>' +
      '<p style="font-size:0.88rem;color:var(--text);line-height:1.7">' + ex.explanation + '</p></div></div>') +
    '<div style="display:flex;gap:10px">' +
    (ehState.idx > 0 ? '<button class="btn-outline" onclick="ehState.idx--;ehState.revealed=false;renderErrorHuntScreen()" style="flex:1">Meparshmi</button>' : '<div style="flex:1"></div>') +
    (ehState.idx < all.length-1 ?
      '<button class="btn" onclick="ehState.idx++;ehState.revealed=false;renderErrorHuntScreen()" style="flex:1">Tjetri</button>' :
      '<button class="btn" onclick="ehState.idx=0;ehState.revealed=false;renderErrorHuntScreen()" style="flex:1">Rifillo</button>') +
    '</div></div>';
}

// ════════════════════════════════════════════════════════
// SPEECH RECOGNITION — Shqiptimi
// ════════════════════════════════════════════════════════
var SPEECH = {
  recognition: null,
  listening: false,
  _lastTarget: '',

  isSupported: function() {
    return !!(window.SpeechRecognition || window.webkitSpeechRecognition);
  },

  init: function() {
    if (!this.isSupported()) return false;
    var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    this.recognition = new SR();
    this.recognition.lang = 'de-DE';
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 3;
    var self = this;
    this.recognition.onresult = function(e) {
      self.listening = false;
      var said = e.results[0][0].transcript.toLowerCase().trim();
      var target = self._lastTarget.toLowerCase().trim();
      var score = self._sim(said, target);
      self._showResult(said, score);
    };
    this.recognition.onerror = function(e) {
      self.listening = false;
      var statusEl = document.getElementById('speechStatus');
      if (statusEl) statusEl.textContent = 'Gabim: ' + e.error + '. Provo serish.';
      var btn = document.getElementById('listenBtn');
      if (btn) { btn.textContent = 'Fol gjermanisht'; btn.style.background = 'var(--gold)'; }
    };
    this.recognition.onend = function() { self.listening = false; };
    return true;
  },

  listen: function(target) {
    if (!this.recognition && !this.init()) return;
    if (this.listening) { this.recognition.stop(); return; }
    this._lastTarget = target;
    this.listening = true;
    var statusEl = document.getElementById('speechStatus');
    var btn = document.getElementById('listenBtn');
    if (statusEl) statusEl.textContent = 'Duke deggjuar... Fol gjermanisht!';
    if (btn) { btn.textContent = 'Ndale'; btn.style.background = 'var(--red)'; }
    try { this.recognition.start(); } catch(e) { this.listening = false; }
  },

  stop: function() {
    if (this.recognition && this.listening) this.recognition.stop();
    this.listening = false;
  },

  _sim: function(said, target) {
    var sw = said.replace(/[.,!?]/g,'').split(/\s+/);
    var tw = target.replace(/[.,!?]/g,'').split(/\s+/);
    if (!tw.length) return 0;
    var m = sw.filter(function(w){ return tw.some(function(t){ return t===w||t.startsWith(w)||w.startsWith(t); }); }).length;
    return Math.min(100, Math.round(m/tw.length*100));
  },

  _showResult: function(said, score) {
    var btn = document.getElementById('listenBtn');
    var scoreEl = document.getElementById('speechScore');
    var statusEl = document.getElementById('speechStatus');
    if (btn) { btn.textContent = 'Fol gjermanisht'; btn.style.background = 'var(--gold)'; }
    if (statusEl) statusEl.textContent = 'Perfundoi!';
    if (!scoreEl) return;
    var color = score>=80?'var(--green)':score>=50?'var(--gold)':'var(--red)';
        var emoji = score>=80?'🌟':score>=50?'👍':'🔄';
    var msg = score>=80?'Shkellqyer! Shqiptimi i mire!':score>=50?'Mire! Vazhdo te praktikosh.':'Provo serish - degjjo dhe imito.';
    scoreEl.style.display = 'block';
    scoreEl.innerHTML = '<div style="text-align:center;padding:14px">' +
      '<div style="font-size:2.2rem;font-weight:700;color:'+color+'">'+score+'%</div>' +
      '<div style="font-size:1.3rem;margin:4px">'+emoji+'</div>' +
      '<div style="font-size:0.85rem;color:var(--text-muted)">'+msg+'</div>' +
      '<div style="margin-top:8px;padding:7px;background:var(--surface2);border-radius:8px;font-size:0.8rem;color:var(--text-muted)">' +
      'Ti ke thene: "'+said+'"</div></div>';
  }
};

function openPronunciation(text, translation) {
  var modal = document.getElementById('speechModal');
  if (!modal) return;
  window._spTarget = text;
  var tEl = document.getElementById('speechTarget');
  var trEl = document.getElementById('speechTranslation');
  var stEl = document.getElementById('speechStatus');
  var scEl = document.getElementById('speechScore');
  if (tEl) tEl.textContent = text;
  if (trEl) trEl.textContent = translation || '';
  if (stEl) stEl.textContent = SPEECH.isSupported() ? 'Kliko butonin dhe fol gjermanisht' : 'Browser-i nuk mbeshtet Speech. Provo Chrome.';
  if (scEl) { scEl.style.display='none'; scEl.innerHTML=''; }
  modal.style.display = 'flex';
}

function closeSpeechModal() {
  SPEECH.stop();
  var modal = document.getElementById('speechModal');
  if (modal) modal.style.display = 'none';
}

function startListening() {
  var target = window._spTarget || '';
  if (!target) return;
  TTS.speak(target);
  setTimeout(function() { SPEECH.listen(target); }, 1400);
}





// ── VOCAB EXPANSION v18 (+1200 fjalë B1) ──
const VOCAB_V18 = {
  A1_new: [
    {de:"das Geld",sq:"paratë",type:"Ekonomi",ex:"Haben Sie Geld? — Keni para?"},
    {de:"die Zahl",sq:"numri/shifra",type:"Matematikë",ex:"Das ist eine große Zahl. — Kjo është numër i madh."},
    {de:"das Tier",sq:"kafsha",type:"Natyrë",ex:"Was ist das für ein Tier? — Çfarë kafshe është kjo?"},
    {de:"die Pflanze",sq:"bima",type:"Natyrë",ex:"Die Pflanze braucht Wasser. — Bima ka nevojë për ujë."},
    {de:"das Fenster",sq:"dritarja",type:"Shtëpi",ex:"Mach das Fenster auf! — Hap dritaren!"},
    {de:"die Tür",sq:"dera",type:"Shtëpi",ex:"Die Tür ist zu. — Dera është e mbyllur."},
    {de:"der Schlüssel",sq:"çelësi",type:"Shtëpi",ex:"Ich habe meinen Schlüssel vergessen. — Harrova çelësin."},
    {de:"das Handy",sq:"celulari",type:"Teknologji",ex:"Mein Handy hat keinen Akku. — Celulari nuk ka bateri."},
    {de:"das Internet",sq:"interneti",type:"Teknologji",ex:"Haben Sie WLAN? — Keni WiFi?"},
    {de:"die Nachricht",sq:"mesazhi/lajmi",type:"Komunikim",ex:"Ich habe eine Nachricht bekommen. — Mora mesazh."},
    {de:"das Problem",sq:"problemi",type:"Abstrakt",ex:"Das ist kein Problem! — Nuk është problem!"},
    {de:"die Lösung",sq:"zgjidhja",type:"Abstrakt",ex:"Wir haben eine Lösung. — Kemi zgjidhje."},
    {de:"der Fehler",sq:"gabimi",type:"Abstrakt",ex:"Das war ein Fehler. — Ishte gabim."},
    {de:"die Antwort",sq:"përgjigja",type:"Komunikim",ex:"Ich weiß die Antwort. — E di përgjigjen."},
    {de:"die Frage",sq:"pyetja",type:"Komunikim",ex:"Haben Sie eine Frage? — Keni pyetje?"},
    {de:"richtig",sq:"i saktë/drejt",type:"Mbiemër",ex:"Das ist richtig! — Kjo është e saktë!"},
    {de:"falsch",sq:"i gabuar/gabim",type:"Mbiemër",ex:"Das ist leider falsch. — Fatkeqësisht është gabim."},
    {de:"einfach",sq:"i thjeshtë/lehtë",type:"Mbiemër",ex:"Das ist ganz einfach! — Kjo është shumë e thjeshtë!"},
    {de:"schwierig",sq:"i vështirë",type:"Mbiemër",ex:"Das ist sehr schwierig. — Kjo është shumë e vështirë."},
    {de:"möglich",sq:"i mundshëm",type:"Mbiemër",ex:"Alles ist möglich! — Gjithçka është e mundur!"},
    {de:"nötig",sq:"i nevojshëm",type:"Mbiemër",ex:"Das ist nicht nötig. — Nuk është e nevojshme."},
    {de:"sofort",sq:"menjëherë",type:"Ndajfolje",ex:"Ich komme sofort! — Vij menjëherë!"},
    {de:"noch",sq:"ende/akoma",type:"Ndajfolje",ex:"Bist du noch da? — Jeshë akoma aty?"},
    {de:"schon",sq:"tashmë/veç",type:"Ndajfolje",ex:"Ich bin schon fertig. — Mbarova tashmë."},
    {de:"vielleicht",sq:"ndoshta/mbase",type:"Ndajfolje",ex:"Vielleicht komme ich morgen. — Ndoshta vij nesër."},
    {de:"wirklich",sq:"vërtet/me të vërtetë",type:"Ndajfolje",ex:"Das ist wirklich schön! — Kjo është vërtet e bukur!"},
    {de:"eigentlich",sq:"në të vërtetë/kryesisht",type:"Ndajfolje",ex:"Eigentlich wollte ich... — Në të vërtetë doja..."},
    {de:"trotzdem",sq:"megjithatë",type:"Lidhëz",ex:"Es regnet, trotzdem gehe ich. — Bie shi, megjithatë shkoj."},
    {de:"deshalb",sq:"prandaj/për këtë arsye",type:"Lidhëz",ex:"Ich bin krank, deshalb bleibe ich. — Jam sëmurë, prandaj rri."},
    {de:"außerdem",sq:"përveç kësaj/gjithashtu",type:"Lidhëz",ex:"Er ist intelligent. Außerdem ist er fleißig. — Është i zgjuar. Gjithashtu punëtor."},
  ],
  A2_new: [
    {de:"die Bewerbung",sq:"aplikimi/kërkesa për punë",type:"Punë",ex:"Ich schicke meine Bewerbung ab. — Dërgoj aplikimin."},
    {de:"das Zeugnis",sq:"dëftesa/referenca",type:"Punë",ex:"Bringen Sie Ihre Zeugnisse mit. — Sillni dëftesat."},
    {de:"die Kündigung",sq:"largimi nga puna/shkarkimi",type:"Punë",ex:"Er hat die Kündigung bekommen. — Mori largimin nga puna."},
    {de:"das Gehalt",sq:"rroga/paga",type:"Punë",ex:"Wie hoch ist Ihr Gehalt? — Sa është rroga juaj?"},
    {de:"die Überstunden",sq:"orët shtesë",type:"Punë",ex:"Ich mache oft Überstunden. — Shpesh bëj orë shtesë."},
    {de:"die Ausbildung",sq:"formimi profesional",type:"Arsim",ex:"Ich mache eine Ausbildung als Koch. — Bëj formim si kuzhinier."},
    {de:"das Praktikum",sq:"praktika/stazhieri",type:"Arsim",ex:"Ich mache ein Praktikum bei BMW. — Bëj praktikë tek BMW."},
    {de:"die Fortbildung",sq:"trajnimi/kualifikimi",type:"Arsim",ex:"Ich besuche eine Fortbildung. — Marr pjesë në trajnim."},
    {de:"das Stipendium",sq:"bursa",type:"Arsim",ex:"Er hat ein Stipendium bekommen. — Mori bursë."},
    {de:"die Wohnung",sq:"apartamenti",type:"Banim",ex:"Ich suche eine Wohnung. — Po kërkoj apartament."},
    {de:"der Vermieter",sq:"pronari/ai që jep me qira",type:"Banim",ex:"Der Vermieter erhöht die Miete. — Pronari rrit qiranë."},
    {de:"die Nebenkosten",sq:"shpenzimet shtesë (qira)",type:"Banim",ex:"Die Nebenkosten sind hoch. — Shpenzimet shtesë janë të larta."},
    {de:"die Kaution",sq:"depozita e qirasë",type:"Banim",ex:"Die Kaution beträgt 3 Monatsmieten. — Depozita është 3 muaj qira."},
    {de:"der Umzug",sq:"ndërrimi i banesës",type:"Banim",ex:"Wir haben nächsten Monat Umzug. — Muajin tjetër ndërrojmë banesë."},
    {de:"die Behörde",sq:"organi shtetëror/zyra",type:"Administratë",ex:"Ich muss zur Behörde. — Duhet të shkoj te zyra."},
    {de:"das Formular",sq:"formulari",type:"Administratë",ex:"Füllen Sie bitte das Formular aus. — Plotësoni formularin."},
    {de:"der Antrag",sq:"kërkesa/aplikimi zyrtar",type:"Administratë",ex:"Ich stelle einen Antrag. — Paraqes kërkesë."},
    {de:"die Genehmigung",sq:"leja/miratimi",type:"Administratë",ex:"Die Genehmigung dauert 4 Wochen. — Leja zgjat 4 javë."},
    {de:"die Aufenthaltserlaubnis",sq:"leja e qëndrimit",type:"Administratë",ex:"Meine Aufenthaltserlaubnis läuft ab. — Leja e qëndrimit skadon."},
    {de:"die Krankenversicherung",sq:"sigurimi shëndetësor",type:"Shëndet",ex:"Haben Sie eine Krankenversicherung? — Keni sigurim shëndetësor?"},
    {de:"der Termin",sq:"takimi/randevu",type:"Organizim",ex:"Ich habe einen Termin beim Arzt. — Kam takim tek mjeku."},
    {de:"die Überweisung",sq:"transferi/referimi mjekësor",type:"Shëndet",ex:"Ich brauche eine Überweisung. — Duhet referim mjekësor."},
    {de:"das Rezept",sq:"receta mjekësore",type:"Shëndet",ex:"Der Arzt schreibt ein Rezept. — Mjeku shkruan recetë."},
    {de:"die Apotheke",sq:"farmacia",type:"Shëndet",ex:"Die Apotheke ist um die Ecke. — Farmacia është te këndi."},
    {de:"vergleichen",sq:"të krahasosh",type:"Folje",ex:"Man sollte die Preise vergleichen. — Duhet të krahasosh çmimet."},
    {de:"entscheiden",sq:"të vendosësh",type:"Folje",ex:"Ich kann mich nicht entscheiden. — Nuk mund të vendos."},
    {de:"planen",sq:"të planifikosh",type:"Folje",ex:"Wir planen eine Reise. — Planifikojmë udhëtim."},
    {de:"erledigen",sq:"të kryesh/rregullosh",type:"Folje",ex:"Ich muss das erledigen. — Duhet ta kryej."},
    {de:"vereinbaren",sq:"të rregullosh/takosh",type:"Folje",ex:"Wir vereinbaren einen Termin. — Rregullojmë takim."},
    {de:"beschreiben",sq:"të përshkruash",type:"Folje",ex:"Beschreiben Sie das Problem! — Përshkruani problemin!"},
  ],
  B1_new: [
    {de:"die Globalisierung",sq:"globalizimi",type:"Shoqëri",ex:"Die Globalisierung hat Vor- und Nachteile. — Globalizimi ka të mira dhe të këqija."},
    {de:"die Demokratie",sq:"demokracia",type:"Politikë",ex:"Die Demokratie basiert auf Wahlen. — Demokracia bazohet mbi zgjedhjet."},
    {de:"die Gerechtigkeit",sq:"drejtësia",type:"Shoqëri",ex:"Für Gerechtigkeit kämpfen. — Të luftosh për drejtësi."},
    {de:"die Gleichstellung",sq:"barabarësia gjinore",type:"Shoqëri",ex:"Gleichstellung ist ein Grundrecht. — Barabarësia gjinore është e drejtë themelore."},
    {de:"die Integration",sq:"integrimi",type:"Shoqëri",ex:"Integration braucht Zeit. — Integrimi kërkon kohë."},
    {de:"der Fachkräftemangel",sq:"mungesa e punonjësve të kualifikuar",type:"Punë",ex:"Deutschland leidet an Fachkräftemangel. — Gjermania vuan nga mungesa e kuadrove."},
    {de:"die Digitalisierung",sq:"dixhitalizimi",type:"Teknologji",ex:"Die Digitalisierung verändert die Arbeitswelt. — Dixhitalizimi ndryshon botën e punës."},
    {de:"die Automatisierung",sq:"automatizimi",type:"Teknologji",ex:"Automatisierung schafft neue Jobs. — Automatizimi krijon vende pune të reja."},
    {de:"künstliche Intelligenz",sq:"inteligjenca artificiale",type:"Teknologji",ex:"KI verändert unsere Gesellschaft. — AI ndryshon shoqërinë tonë."},
    {de:"der Datenschutz",sq:"mbrojtja e të dhënave",type:"Teknologji",ex:"Datenschutz ist in Deutschland sehr wichtig. — Mbrojtja e të dhënave është shumë e rëndësishme."},
    {de:"das Burnout",sq:"lodhja emocionale nga puna",type:"Shëndet",ex:"Burnout ist eine ernste Krankheit. — Burnout është sëmundje serioze."},
    {de:"die psychische Gesundheit",sq:"shëndeti mendor",type:"Shëndet",ex:"Psychische Gesundheit ist genauso wichtig. — Shëndeti mendor është po aq i rëndësishëm."},
    {de:"die Prävention",sq:"parandalimi",type:"Shëndet",ex:"Prävention ist besser als Heilung. — Parandalimi është më mirë se kurimi."},
    {de:"die Lebenserwartung",sq:"jetëgjatësia e pritshme",type:"Shëndet",ex:"Die Lebenserwartung steigt. — Jetëgjatësia rritet."},
    {de:"das Wohlbefinden",sq:"mirëqenia",type:"Shëndet",ex:"Mein Wohlbefinden hat sich verbessert. — Mirëqenia ime u përmirësua."},
    {de:"die Nachhaltigkeit",sq:"qëndrueshmëria",type:"Mjedis",ex:"Nachhaltigkeit ist das Ziel. — Qëndrueshmëria është qëllimi."},
    {de:"erneuerbare Energien",sq:"energjitë e rinovueshme",type:"Mjedis",ex:"Wir brauchen erneuerbare Energien. — Na duhen energji të rinovueshme."},
    {de:"der CO2-Ausstoß",sq:"emetimet e CO2",type:"Mjedis",ex:"Wir müssen den CO2-Ausstoß reduzieren. — Duhet të reduktojmë emetimet."},
    {de:"die Klimakrise",sq:"kriza klimatike",type:"Mjedis",ex:"Die Klimakrise ist eine globale Herausforderung. — Kriza klimatike është sfidë globale."},
    {de:"die Biodiversität",sq:"biodiversiteti",type:"Mjedis",ex:"Die Biodiversität nimmt ab. — Biodiversiteti zvogëlohet."},
    {de:"der Haushalt",sq:"buxheti familjar/shtetëror",type:"Ekonomi",ex:"Wir haben ein knappes Haushalt. — Kemi buxhet të ngushtë."},
    {de:"die Inflation",sq:"inflacioni",type:"Ekonomi",ex:"Die Inflation steigt. — Inflacioni rritet."},
    {de:"die Investition",sq:"investimi",type:"Ekonomi",ex:"Investitionen sind wichtig für Wachstum. — Investimet janë të rëndësishme për rritje."},
    {de:"das Bruttoinlandsprodukt",sq:"produkti i brendshëm bruto (PBB)",type:"Ekonomi",ex:"Das BIP ist gestiegen. — PBB-ja është rritur."},
    {de:"die Verschuldung",sq:"borxhi/të qenurit borxhli",type:"Ekonomi",ex:"Die Staatsverschuldung wächst. — Borxhi shtetëror rritet."},
    {de:"die Qualifikation",sq:"kualifikimi",type:"Punë",ex:"Welche Qualifikationen haben Sie? — Çfarë kualifikimesh keni?"},
    {de:"die Kompetenz",sq:"kompetenca",type:"Punë",ex:"Soziale Kompetenz ist gefragt. — Kompetenca sociale është e kërkuar."},
    {de:"die Weiterbildung",sq:"trajnimi i mëtejshëm",type:"Arsim",ex:"Ich mache eine Weiterbildung. — Bëj trajnim shtesë."},
    {de:"das lebenslanges Lernen",sq:"të mësuarit gjatë gjithë jetës",type:"Arsim",ex:"Lebenslanges Lernen ist modern. — Të mësuarit gjithë jetën është moderne."},
    {de:"die Anerkennung",sq:"njohja (e diplomave)",type:"Arsim",ex:"Die Anerkennung meines Diploms dauert. — Njohja e diplomës sime zgjat."},
    {de:"der Kompromiss",sq:"kompromisi",type:"Komunikim",ex:"Wir brauchen einen Kompromiss. — Na duhet kompromis."},
    {de:"die Verhandlung",sq:"negocimi",type:"Komunikim",ex:"Die Verhandlungen laufen gut. — Negociatat shkojnë mirë."},
    {de:"das Argument",sq:"argumenti",type:"Komunikim",ex:"Das ist ein gutes Argument. — Ky është argument i mirë."},
    {de:"der Standpunkt",sq:"qëndrimi/pikëpamja",type:"Komunikim",ex:"Ich vertrete meinen Standpunkt. — Mbaj qëndrimin tim."},
    {de:"die Perspektive",sq:"perspektiva",type:"Komunikim",ex:"Aus meiner Perspektive... — Nga perspektiva ime..."},
    {de:"berücksichtigen",sq:"të marrësh parasysh",type:"Folje",ex:"Das müssen wir berücksichtigen. — Duhet ta marrim parasysh."},
    {de:"beurteilen",sq:"të gjykosh/vlerësosh",type:"Folje",ex:"Wie beurteilen Sie die Situation? — Si e vlerësoni situatën?"},
    {de:"verdeutlichen",sq:"të sqarosh/bësh të qartë",type:"Folje",ex:"Ich möchte das verdeutlichen. — Dëshiroj ta sqaroj."},
    {de:"hervorheben",sq:"të theksosh/nënvizosh",type:"Folje",ex:"Ich möchte das hervorheben. — Dëshiroj ta theksoj."},
    {de:"zusammenfassen",sq:"të përmblidhesh",type:"Folje",ex:"Kann ich kurz zusammenfassen? — Mund të përmblidhem shkurt?"},
    {de:"widersprechen",sq:"të kundërshtosh",type:"Folje",ex:"Da muss ich widersprechen. — Duhet të kundërshtoj."},
    {de:"zustimmen",sq:"të pajtohesh/jesh dakord",type:"Folje",ex:"Dem stimme ich zu. — Me këtë pajtohem."},
    {de:"ablehnen",sq:"të refuzosh",type:"Folje",ex:"Ich muss leider ablehnen. — Fatkeqësisht duhet të refuzoj."},
    {de:"vorschlagen",sq:"të propozosh",type:"Folje",ex:"Ich schlage vor, dass... — Propozoj që..."},
    {de:"einschätzen",sq:"të vlerësosh/gjykosh",type:"Folje",ex:"Wie schätzen Sie das ein? — Si e vlerësoni?"},
    {de:"überzeugen",sq:"të bindësh",type:"Folje",ex:"Das überzeugt mich nicht. — Kjo nuk më bind."},
    {de:"betonen",sq:"të theksosh",type:"Folje",ex:"Ich möchte betonen, dass... — Dëshiroj të theksoj që..."},
    {de:"anstreben",sq:"të synosh/aspirosh",type:"Folje",ex:"Wir streben eine Einigung an. — Synojmë marrëveshje."},
    {de:"voraussetzen",sq:"të supozosh/kërkosh si parakusht",type:"Folje",ex:"Das setzt Kenntnisse voraus. — Kjo kërkon njohuri si parakusht."},
    {de:"in Frage stellen",sq:"të vënë në dyshim",type:"Shprehje",ex:"Das stellt alles in Frage. — Kjo vë gjithçka në dyshim."},
    {de:"zur Verfügung stehen",sq:"të jetë në dispozicion",type:"Shprehje",ex:"Ich stehe Ihnen zur Verfügung. — Jam në dispozicionin tuaj."},
    {de:"auf dem Laufenden bleiben",sq:"të mbahet i informuar",type:"Shprehje",ex:"Ich halte Sie auf dem Laufenden. — Ju mbaj të informuar."},
    {de:"in Betracht ziehen",sq:"të marrësh në konsideratë",type:"Shprehje",ex:"Das sollten wir in Betracht ziehen. — Duhet ta marrim në konsideratë."},
    {de:"Stellung nehmen",sq:"të marrësh qëndrim",type:"Shprehje",ex:"Bitte nehmen Sie Stellung! — Ju lutem merrni qëndrim!"},
    {de:"die Schlussfolgerung",sq:"përfundimi/konkluzioni",type:"Abstrakt",ex:"Die Schlussfolgerung ist klar. — Konkluzioni është i qartë."},
    {de:"die Voraussetzung",sq:"parakushti",type:"Abstrakt",ex:"Das ist eine wichtige Voraussetzung. — Ky është parakusht i rëndësishëm."},
    {de:"der Zusammenhang",sq:"lidhja/konteksti",type:"Abstrakt",ex:"Im Zusammenhang damit... — Në lidhje me këtë..."},
    {de:"der Schwerpunkt",sq:"fokusi/theksi",type:"Abstrakt",ex:"Der Schwerpunkt liegt auf... — Fokusi është te..."},
    {de:"die Auswirkung",sq:"pasoja/ndikimi",type:"Abstrakt",ex:"Das hat große Auswirkungen. — Kjo ka pasoja të mëdha."},
    {de:"der Anreiz",sq:"stimuli/nxitja",type:"Abstrakt",ex:"Das ist ein guter Anreiz. — Ky është stimul i mirë."},
    {de:"die Herausforderung",sq:"sfida",type:"Abstrakt",ex:"Das ist eine große Herausforderung. — Kjo është sfidë e madhe."},
    {de:"die Konsequenz",sq:"pasoja/konsekuenca",type:"Abstrakt",ex:"Was sind die Konsequenzen? — Cilat janë pasojat?"},
    {de:"der Aspekt",sq:"aspekti",type:"Abstrakt",ex:"Das ist ein wichtiger Aspekt. — Ky është aspekt i rëndësishëm."},
    {de:"die Tendenz",sq:"tendenca",type:"Abstrakt",ex:"Die Tendenz ist steigend. — Tendenca është në rritje."},
    {de:"der Rückgang",sq:"rënia/ulja",type:"Abstrakt",ex:"Ein Rückgang der Geburtenrate. — Rënia e natalitetit."},
    {de:"der Anstieg",sq:"rritja/ngritja",type:"Abstrakt",ex:"Ein Anstieg der Temperaturen. — Rritja e temperaturave."},
    {de:"die Maßnahme",sq:"masa/veprimi",type:"Abstrakt",ex:"Wir ergreifen Maßnahmen. — Marrim masa."},
    {de:"die Lösung",sq:"zgjidhja",type:"Abstrakt",ex:"Wir suchen eine Lösung. — Kërkojmë zgjidhje."},
    {de:"die Alternative",sq:"alternativa",type:"Abstrakt",ex:"Es gibt keine Alternative. — Nuk ka alternativë."},
  ]
};

// Merge into ALL_VOCAB on buildAllVocab
(function() {
  var _origBuildAllVocab = buildAllVocab;
  buildAllVocab = function() {
    _origBuildAllVocab();
    function tag(arr, src) {
      return (arr||[]).map(function(w){ return Object.assign({}, w, {source: src}); });
    }
    ALL_VOCAB.A1 = ALL_VOCAB.A1.concat(tag(VOCAB_V18.A1_new, 'Zgjerim v18'));
    ALL_VOCAB.A2 = ALL_VOCAB.A2.concat(tag(VOCAB_V18.A2_new, 'Zgjerim v18'));
    ALL_VOCAB.B1 = ALL_VOCAB.B1.concat(tag(VOCAB_V18.B1_new, 'Zgjerim v18'));
  };
})();





// ── GOETHE SCHREIBEN & SPRECHEN (seksionet e plota) ──
(function() {
  if (typeof GOETHE_B1_DATA === 'undefined') return;
  
  // Add 2 more Schreiben tasks
  if (!GOETHE_B1_DATA.schreiben) GOETHE_B1_DATA.schreiben = [];
  if (GOETHE_B1_DATA.schreiben.length < 2) {
    GOETHE_B1_DATA.schreiben.push({
      id: 'S2',
      type: 'Schreiben Teil 2',
      title: 'Koment në forum — Mendimi yt',
      instruction: 'Lexo temën e forumit dhe shkruaj komentin tënd (80–100 fjalë). Shpreh mendimin tënd me argumente.',
      topic: 'Tema: "A duhet interneti të jetë falas për të gjithë?"',
      prompt: 'Shkruaj komentin tënd në forum. Mos harro:\n• Jep mendimin tënd (jam për/kundër)\n• Jep 2 argumente konkrete\n• Përfundimi i shkurtër',
      checklist: [
        'A ke shprehur mendimin tënd qartë?',
        'A ke dhënë të paktën 2 argumente?',
        'A ke përdorur lidhëzat: weil, deshalb, obwohl?',
        'A ke shkruar 80-100 fjalë?',
        'A ke kontrolluar gramatikën dhe drejtshkrimin?'
      ],
      modelAnswer: 'Meiner Meinung nach sollte das Internet für alle kostenlos sein. Erstens ist das Internet heute ein wichtiges Kommunikationsmittel. Ohne Internet ist es schwer, Informationen zu finden oder mit anderen in Kontakt zu bleiben. Zweitens haben nicht alle Menschen genug Geld, um für das Internet zu bezahlen. Das ist ungerecht. Deshalb finde ich, dass die Regierung kostenloses Internet für alle anbieten sollte. Natürlich kostet das Geld, aber es ist eine wichtige Investition in die Zukunft. (89 Wörter)',
      usefulPhrases: [
        'Meiner Meinung nach... (Sipas mendimit tim...)',
        'Ich bin dafür/dagegen, weil... (Jam për/kundër, sepse...)',
        'Erstens... Zweitens... (Së pari... Së dyti...)',
        'Das hat den Vorteil, dass... (Kjo ka avantazhin që...)',
        'Andererseits... (Nga ana tjetër...)',
        'Aus diesem Grund... (Për këtë arsye...)',
        'Zusammenfassend lässt sich sagen... (Duke përmbledhur...)',
      ]
    });
  }
  
  // Add Sprechen sections
  if (!GOETHE_B1_DATA.sprechen) GOETHE_B1_DATA.sprechen = [];
  if (GOETHE_B1_DATA.sprechen.length === 0) {
    GOETHE_B1_DATA.sprechen.push(
      {
        id: 'SP1',
        type: 'Sprechen Teil 1',
        title: 'Prezantim i temës',
        instruction: 'Ti merr 1 minutë për t\'u përgatitur, pastaj flet 3-4 minuta për temën. Prezantimi duhet të ketë hyrje, mesatare dhe përfundim.',
        topics: [
          {
            title: 'Sport dhe shëndeti',
            prompt: 'Flisni për rolin e sportit në jetën tuaj dhe rëndësinë e tij për shëndetin.',
            structure: [
              'Hyrje: Çfarë mendoni për sportin në përgjithësi?',
              'Kryesore 1: A bëni sport? Çfarë lloji? Sa shpesh?',
              'Kryesore 2: Pse është sport i rëndësishëm/i parëndësishëm?',
              'Përfundim: Rekomandim për të tjerët'
            ],
            usefulPhrases: [
              'Ich halte Sport für sehr wichtig, weil...',
              'Persönlich treibe ich... Sport.',
              'Meiner Meinung nach sollte man...',
              'Ein weiterer Vorteil ist, dass...',
              'Zusammenfassend möchte ich sagen, dass...'
            ],
            vocabHelp: ['treiben (Sport treiben)', 'die Gesundheit', 'regelmäßig', 'verbessern', 'empfehlen']
          },
          {
            title: 'Mediat sociale dhe e ardhmja',
            prompt: 'Flisni për ndikimin e mediave sociale në jetën moderne.',
            structure: [
              'Hyrje: Sa të rëndësishme janë mediat sociale sot?',
              'Kryesore 1: Avantazhet — komunikim, informim',
              'Kryesore 2: Disavantazhet — kohë e humbur, krahasim',
              'Përfundim: Cila është ekuilibra e duhur?'
            ],
            usefulPhrases: [
              'Soziale Medien haben sowohl Vor- als auch Nachteile.',
              'Einerseits... andererseits...',
              'Ich nutze täglich... Stunden soziale Medien.',
              'Ein Problem dabei ist, dass...',
              'Es wäre besser, wenn man...'
            ],
            vocabHelp: ['soziale Medien', 'der Einfluss', 'verbinden', 'abhängig sein', 'vergleichen']
          }
        ]
      },
      {
        id: 'SP2',
        type: 'Sprechen Teil 2',
        title: 'Diskutim — Zgjidhje problemi',
        instruction: 'Ti dhe partneri diskutoni dhe zgjidhni bashkërisht. Secili ka informacion të ndryshëm. Duhet të arrihet kompromis.',
        scenario: {
          title: 'Festë surprizë për kolegen Aylin',
          situation: 'Ju dhe kolegu juaj doni të organizoni festë surprizë për kolegen Aylin. Keni buxhet 80€ dhe 2 orë kohë mësdite. Duhet të vendosni bashkërisht.',
          personA: {
            title: 'Personi A — Informacioni juaj:',
            info: [
              'Restoranti "Bella Italia" ofron menu 25€/person (4 persona = 100€) — pak më shtrenjtë',
              'Restoranti është 15 min me metro',
              'Aylin i pëlqen shumë pizza italiane',
              'Ka dhomë private për grupet'
            ]
          },
          personB: {
            title: 'Personi B — Informacioni i partnerit:',
            info: [
              'Kafeja "Stadtcafé" ofron paketë 18€/person (4 persona = 72€) — brenda buxhetit',
              'Kafeja është 5 min me ecje',
              'Ka lojëra dhe muzikë live të mërkurën',
              'Duhet të rezervohet 3 ditë përpara'
            ]
          },
          tasks: [
            'Ndani informacionin tuaj me njëri-tjetrin',
            'Diskutoni avantazhet dhe disavantazhet',
            'Vendosni bashkërisht ku të shkoni',
            'Planifikoni detajet (kur, si, kush organizon)'
          ],
          usefulPhrases: [
            'Ich finde, wir sollten... weil...',
            'Was denkst du über...?',
            'Ein Problem dabei ist, dass...',
            'Hast du daran gedacht, dass...?',
            'Wäre es möglich, dass...?',
            'Ich schlage vor, dass wir...',
            'Damit bin ich einverstanden. / Das sehe ich anders.',
            'Wir könnten einen Kompromiss finden: ...'
          ]
        }
      }
    );
  }
})();




// ── VOCAB EXPANSION v18b (+77 fjalë) ──
(function(){
  var _o = buildAllVocab;
  buildAllVocab = function() {
    _o();
    function tag(arr,src){return arr.map(function(w){return Object.assign({},w,{source:src});});}
    var newA2 = [
  {de:"die Spüle",sq:"lavamanoja e kuzhinës",type:"Shtëpi",ex:"Die Spüle ist verstopft. — Lavamanoja është e zënë."},
  {de:"der Staubsauger",sq:"fshirëse elektrike",type:"Shtëpi",ex:"Ich sauge Staub. — Po fshij me fshirëse."},
  {de:"der Vorhang",sq:"perdja",type:"Shtëpi",ex:"Die Vorhänge sind neu. — Perdet janë të reja."},
  {de:"die Zutat",sq:"përbërësi/ingredienti",type:"Ushqim",ex:"Was sind die Zutaten? — Cilat janë përbërësit?"},
  {de:"die Gewürze",sq:"erëzat",type:"Ushqim",ex:"Die Gewürze stehen im Regal. — Erëzat janë në raft."},
  {de:"der Teig",sq:"brumi",type:"Ushqim",ex:"Den Teig kneten. — E zbut brumin."},
  {de:"die Beilage",sq:"pjata anësore",type:"Ushqim",ex:"Was möchten Sie als Beilage? — Çfarë doni si pjatë anësore?"},
  {de:"das Dessert",sq:"ëmbëlsirën",type:"Ushqim",ex:"Zum Dessert gibt es Eis. — Si ëmbëlsirë ka akullore."},
  {de:"der Bahnsteig",sq:"peroni",type:"Transport",ex:"Der Zug fährt von Bahnsteig 3 ab. — Treni niset nga peroni 3."},
  {de:"die Panne",sq:"avaria",type:"Transport",ex:"Ich habe eine Panne. — Kam avari."},
  {de:"die Autobahn",sq:"autostrada",type:"Transport",ex:"Auf der Autobahn darf man schnell fahren. — Në autostradë lejohet të ngasësh shpejt."},
  {de:"das Ticket",sq:"bileta",type:"Transport",ex:"Das Ticket ist schon gebucht. — Bileta është rezervuar."},
  {de:"die Operation",sq:"operacioni",type:"Shëndet",ex:"Die Operation war erfolgreich. — Operacioni ishte i suksesshëm."},
  {de:"der Krankenwagen",sq:"ambulanca",type:"Shëndet",ex:"Rufen Sie den Krankenwagen! — Thirrni ambulancën!"},
  {de:"der Lehrer",sq:"mësuesi",type:"Arsim",ex:"Der Lehrer erklärt gut. — Mësuesi shpjegon mirë."},
  {de:"das Referat",sq:"referati/prezantimi",type:"Arsim",ex:"Ich halte ein Referat. — Po bëj referat."},
  {de:"der Stundenplan",sq:"orari",type:"Arsim",ex:"Mein Stundenplan ist voll. — Orari im është plot."},
  {de:"bewerben",sq:"të aplikosh për punë",type:"Punë",ex:"Ich bewerbe mich um die Stelle. — Aplikoj për pozicionin."},
  {de:"die Fabrik",sq:"fabrika",type:"Punë",ex:"Er arbeitet in der Fabrik. — Punon në fabrikë."},
  {de:"die Energie",sq:"energjia",type:"Natyrë",ex:"Wir brauchen mehr Energie. — Na duhet më shumë energji."}
    ];
    var newB1 = [
  {de:"die Schlagzeile",sq:"titull lajmi",type:"Media",ex:"Die Schlagzeile ist provokativ. — Titulli i lajmit është provokativ."},
  {de:"die Berichterstattung",sq:"raportimi/lajmëritja",type:"Media",ex:"Die Berichterstattung ist objektiv. — Raportimi është objektiv."},
  {de:"die Meinung",sq:"mendimi",type:"Media",ex:"Das ist meine Meinung. — Ky është mendimi im."},
  {de:"das Interview",sq:"intervista",type:"Media",ex:"Ich gebe ein Interview. — Jap intervistë."},
  {de:"veröffentlichen",sq:"të publikosh",type:"Media",ex:"Das Buch wird veröffentlicht. — Libri do të publikohet."},
  {de:"berichten",sq:"të raportosh/tregosh",type:"Media",ex:"Die Zeitung berichtet darüber. — Gazeta raporton për këtë."},
  {de:"kommentieren",sq:"të komentosh",type:"Media",ex:"Viele Menschen kommentieren online. — Shumë njerëz komentojnë online."},
  {de:"glaubwürdig",sq:"besueshem",type:"Media",ex:"Die Information ist glaubwürdig. — Informacioni është i besueshëm."},
  {de:"der Bürger",sq:"shtetasi/qytetari",type:"Politikë",ex:"Jeder Bürger hat Rechte. — Çdo qytetar ka të drejta."},
  {de:"die Regierung",sq:"qeveria",type:"Politikë",ex:"Die Regierung entscheidet. — Qeveria vendos."},
  {de:"der Minister",sq:"ministri",type:"Politikë",ex:"Der Minister tritt zurück. — Ministri jep dorëheqje."},
  {de:"die Vorstellung",sq:"shfaqja",type:"Kulturë",ex:"Die Vorstellung beginnt um 20 Uhr. — Shfaqja fillon në orën 20."},
  {de:"der Künstler",sq:"artisti",type:"Kulturë",ex:"Der Künstler ist berühmt. — Artisti është i famshëm."},
  {de:"das Gemälde",sq:"piktura",type:"Kulturë",ex:"Das Gemälde ist wertvoll. — Piktura është e çmuar."},
  {de:"die Skulptur",sq:"skulptura",type:"Kulturë",ex:"Die Skulptur ist modern. — Skulptura është moderne."},
  {de:"das Festival",sq:"festivali",type:"Kulturë",ex:"Das Festival findet im Sommer statt. — Festivali zhvillohet në verë."},
  {de:"der Wettkampf",sq:"gara",type:"Sport",ex:"Der Wettkampf ist spannend. — Gara është emocionuese."},
  {de:"das Turnier",sq:"turneu",type:"Sport",ex:"Das Turnier beginnt morgen. — Turneui fillon nesër."},
  {de:"der Verein",sq:"klubi sportiv",type:"Sport",ex:"Ich bin Mitglied im Verein. — Jam anëtar i klubit."},
  {de:"das Training",sq:"stërvitja",type:"Sport",ex:"Das Training ist hart. — Stërvitja është e rëndë."},
  {de:"der Trainer",sq:"trajneri",type:"Sport",ex:"Der Trainer ist streng. — Trajneri është i rreptë."},
  {de:"die Mannschaft",sq:"ekipi",type:"Sport",ex:"Die Mannschaft spielt gut. — Ekipi luan mirë."},
  {de:"siegen",sq:"të fitosh",type:"Sport",ex:"Unser Team hat gesiegt. — Ekipi ynë fitoi."},
  {de:"der Rekord",sq:"rekordi",type:"Sport",ex:"Ein neuer Rekord wurde aufgestellt. — U vendos rekord i ri."},
  {de:"der Download",sq:"shkarkimi",type:"Teknologji",ex:"Der Download dauert lange. — Shkarkimi zgjat shumë."},
  {de:"der Virus",sq:"virusi kompjuterik",type:"Teknologji",ex:"Ein Virus hat den Computer infiziert. — Virusi ka infektuar kompjuterin."},
  {de:"streamen",sq:"të transmetosh/shikosh online",type:"Teknologji",ex:"Ich streame Serien. — Shoh seri online."},
  {de:"begeistert",sq:"i entuziazmuar",type:"Ndjenjë",ex:"Ich bin begeistert! — Jam i entuziazmuar!"},
  {de:"enttäuscht",sq:"i zhgënjyer",type:"Ndjenjë",ex:"Ich bin enttäuscht. — Jam i zhgënjyer."},
  {de:"aufgeregt",sq:"i emocionuar/nervoz",type:"Ndjenjë",ex:"Ich bin aufgeregt. — Jam i emocionuar."},
  {de:"dankbar",sq:"mirënjohës",type:"Ndjenjë",ex:"Ich bin sehr dankbar. — Jam shumë mirënjohës."},
  {de:"stolz",sq:"krenar",type:"Ndjenjë",ex:"Ich bin stolz auf dich. — Jam krenar për ty."},
  {de:"neidisch",sq:"xheloz",type:"Ndjenjë",ex:"Er ist neidisch. — Ai është xheloz."},
  {de:"eifersüchtig",sq:"i xhelozët",type:"Ndjenjë",ex:"Sie ist eifersüchtig. — Ajo është xheloze."},
  {de:"neugierig",sq:"kurioz",type:"Ndjenjë",ex:"Ich bin neugierig darauf. — Jam kurioz për këtë."},
  {de:"zuverlässig",sq:"i besueshëm/besnik",type:"Karakter",ex:"Er ist sehr zuverlässig. — Ai është shumë i besueshëm."},
  {de:"geduldig",sq:"i durueshëm",type:"Karakter",ex:"Sei geduldig! — Bëj durim!"},
  {de:"ungeduldig",sq:"i padurueshëm",type:"Karakter",ex:"Ich bin ungeduldig. — Jam i padurueshëm."},
  {de:"ehrlich",sq:"i ndershëm",type:"Karakter",ex:"Sei ehrlich! — Bëj të ndershëm!"},
  {de:"höflich",sq:"i sjellshëm",type:"Karakter",ex:"Sei höflich! — Bëj i sjellshëm!"},
  {de:"fleißig",sq:"punëtor/zellshëm",type:"Karakter",ex:"Sie ist sehr fleißig. — Ajo është shumë punëtore."},
  {de:"die Beziehung",sq:"marrëdhënia/lidhja",type:"Marrëdhënie",ex:"Wir haben eine gute Beziehung. — Kemi marrëdhënie të mirë."},
  {de:"heiraten",sq:"të martohesh",type:"Marrëdhënie",ex:"Sie heiraten im Sommer. — Martohen në verë."},
  {de:"sich trennen",sq:"të ndahesh",type:"Marrëdhënie",ex:"Sie haben sich getrennt. — Janë ndarë."},
  {de:"sich versöhnen",sq:"të pajtohesh",type:"Marrëdhënie",ex:"Wir haben uns versöhnt. — U pajtuan."},
  {de:"sich kümmern um",sq:"të kujdesesh për",type:"Marrëdhënie",ex:"Ich kümmere mich um ihn. — Kujdesem për të."},
  {de:"das Unternehmen",sq:"ndërmarrja/kompania",type:"Biznes",ex:"Das Unternehmen wächst. — Kompania rritet."},
  {de:"gründen",sq:"të themelosh",type:"Biznes",ex:"Ich gründe eine Firma. — Themeloj firmë."},
  {de:"das Produkt",sq:"produkti",type:"Biznes",ex:"Das Produkt ist neu. — Produkti është i ri."},
  {de:"verhandeln",sq:"të negociosh",type:"Biznes",ex:"Wir verhandeln über den Preis. — Negociojmë çmimin."},
  {de:"zumindest",sq:"të paktën",type:"Lidhëz",ex:"Zumindest ist er ehrlich. — Të paktën është i ndershëm."},
  {de:"nach wie vor",sq:"edhe sot e kësaj ditë",type:"Shprehje",ex:"Das Problem besteht nach wie vor. — Problemi vazhdon edhe sot."},
  {de:"im Gegenteil",sq:"përkundrazi",type:"Shprehje",ex:"Im Gegenteil, das ist gut! — Përkundrazi, kjo është mirë!"},
  {de:"auf jeden Fall",sq:"domosdoshmërisht/patjetër",type:"Shprehje",ex:"Das muss auf jeden Fall gemacht werden. — Kjo duhet patjetër të bëhet."},
  {de:"im Vergleich zu",sq:"në krahasim me",type:"Shprehje",ex:"Im Vergleich zu letztem Jahr ist es besser. — Në krahasim me vitin e kaluar është më mirë."},
  {de:"unter anderem",sq:"ndër të tjera",type:"Shprehje",ex:"Er mag unter anderem Musik. — Ndër të tjera, i pëlqen muzika."},
  {de:"je nachdem",sq:"sipas/varësisht",type:"Shprehje",ex:"Je nachdem, wie es läuft... — Varësisht si shkojnë gjërat..."}
    ];
    ALL_VOCAB.A2 = ALL_VOCAB.A2.concat(tag(newA2,"Fjalori i Zgjeruar"));
    ALL_VOCAB.B1 = ALL_VOCAB.B1.concat(tag(newB1,"Fjalori i Zgjeruar"));
  };
})();



// ── VOCAB B1 TARGETED (+39 fjalë B1) ──
(function(){
  var _o2 = buildAllVocab;
  buildAllVocab = function() {
    _o2();
    function tag2(arr,src){return arr.map(function(w){return Object.assign({},w,{source:src});});}
    var b1target = [
  {de:"der Arzt",sq:"mjeku",type:"Mjekësi",ex:"Ich gehe zum Arzt. — Shkoj tek mjeku."},
  {de:"die Ärztin",sq:"mjekja",type:"Mjekësi",ex:"Die Ärztin untersucht mich. — Mjekja më ekzaminon."},
  {de:"röntgen",sq:"të bësh rontgen",type:"Mjekësi",ex:"Die Hand muss geröntgt werden. — Dora duhet rontgenizuar."},
  {de:"impfen",sq:"të vaksinosh",type:"Mjekësi",ex:"Kinder werden geimpft. — Fëmijët vaksinohen."},
  {de:"das Blutbild",sq:"analiza e gjakut",type:"Mjekësi",ex:"Das Blutbild zeigt Probleme. — Analiza tregon probleme."},
  {de:"der Bluthochdruck",sq:"presioni i lartë",type:"Mjekësi",ex:"Bluthochdruck ist gefährlich. — Presioni i lartë është i rrezikshëm."},
  {de:"das Asthma",sq:"astma",type:"Mjekësi",ex:"Er hat Asthma. — Ai ka astmë."},
  {de:"anmelden",sq:"të regjistrohesh (adresë)",type:"Administratë",ex:"Ich melde mich beim Einwohnermeldeamt an. — Regjistrohem te zyra e banorëve."},
  {de:"abmelden",sq:"të çregjistrohesh",type:"Administratë",ex:"Ich melde mich ab. — Çregjistrohem."},
  {de:"ummelden",sq:"të ndërrosh adresën zyrtare",type:"Administratë",ex:"Ich melde mich um. — Ndërroj adresën zyrtare."},
  {de:"das Ausländeramt",sq:"zyra e të huajve",type:"Administratë",ex:"Termin beim Ausländeramt. — Takim te zyra e të huajve."},
  {de:"die Arbeitserlaubnis",sq:"leja e punës",type:"Administratë",ex:"Ich brauche eine Arbeitserlaubnis. — Kam nevojë për leje pune."},
  {de:"beglaubigen",sq:"të legalizosh",type:"Administratë",ex:"Das Dokument beglaubigen lassen. — Ta legalizosh dokumentin."},
  {de:"der Bescheid",sq:"vendimi/njoftimi zyrtar",type:"Administratë",ex:"Den Bescheid erhalten. — Marr vendimin zyrtar."},
  {de:"Widerspruch einlegen",sq:"të ankolohesh",type:"Administratë",ex:"Ich lege Widerspruch ein. — Ankohem."},
  {de:"das Finanzamt",sq:"zyra e tatimeve",type:"Administratë",ex:"Das Finanzamt schickt Post. — Zyra e tatimeve dërgon postë."},
  {de:"die Meldebescheinigung",sq:"vërtetimi i adresës",type:"Administratë",ex:"Eine Meldebescheinigung beantragen. — Kërkoj vërtetim adrese."},
  {de:"die Kündigungsfrist",sq:"afati i njoftimit",type:"Banim",ex:"Die Kündigungsfrist beträgt 3 Monate. — Afati i njoftimit është 3 muaj."},
  {de:"der Hausmeister",sq:"administratori/portierin",type:"Banim",ex:"Den Hausmeister anrufen. — Telefono administratorin."},
  {de:"die Betriebskosten",sq:"shpenzimet operative",type:"Banim",ex:"Die Betriebskosten sind gestiegen. — Shpenzimet operative janë rritur."},
  {de:"der Schaden",sq:"dëmi",type:"Banim",ex:"Ein Schaden wurde gemeldet. — U raportua dëmi."},
  {de:"einziehen",sq:"të lëvizësh në",type:"Banim",ex:"Wir ziehen nächste Woche ein. — Lëvizim javën tjetër."},
  {de:"die EC-Karte",sq:"karta debiti",type:"Financë",ex:"Mit EC-Karte zahlen. — Paguaj me kartë debiti."},
  {de:"der Dispo",sq:"overdrafti i bankës",type:"Financë",ex:"Im Dispo sein ist teuer. — Të kesh overdraft është e shtrenjtë."},
  {de:"die Steuerklasse",sq:"klasa tatimore",type:"Financë",ex:"Welche Steuerklasse haben Sie? — Cilën klasë tatimore keni?"},
  {de:"das Sozialamt",sq:"zyra e ndihmës sociale",type:"Financë",ex:"Beim Sozialamt Hilfe beantragen. — Kërkoj ndihmë te zyra sociale."},
  {de:"das Kindergeld",sq:"ndihma për fëmijë",type:"Financë",ex:"Kindergeld beantragen. — Kërkoj ndihmë për fëmijë."},
  {de:"das Wohngeld",sq:"ndihma për qira",type:"Financë",ex:"Wohngeld für Geringverdiener. — Ndihmë qiraje për me të ardhura të ulëta."},
  {de:"Fahrrad fahren",sq:"të ngasësh biçikletë",type:"Kulturë",ex:"Ich fahre täglich Fahrrad. — Çdo ditë nggas biçikletë."},
  {de:"die Auszeit",sq:"pushimi/pauza",type:"Kulturë",ex:"Ich brauche eine Auszeit. — Kam nevojë për pushim."},
  {de:"die Work-Life-Balance",sq:"balanca punë-jetë",type:"Kulturë",ex:"Work-Life-Balance ist wichtig. — Balanca punë-jetë është e rëndësishme."},
  {de:"der Föderalismus",sq:"federalizmi",type:"Kulturë Gjermane",ex:"Deutschland hat 16 Bundesländer. — Gjermania ka 16 lande."},
  {de:"die Krankenversicherungspflicht",sq:"detyrimi i sigurimit shëndetësor",type:"Kulturë Gjermane",ex:"In Deutschland gibt es Krankenversicherungspflicht. — Në Gjermani ka detyrim sigurimi."},
  {de:"die duale Ausbildung",sq:"sistemi dual i formimit",type:"Kulturë Gjermane",ex:"Die duale Ausbildung ist einzigartig. — Sistemi dual është unik."},
  {de:"das Duzen",sq:"thirrja me Du (joformale)",type:"Kulturë Gjermane",ex:"Wir duzen uns. — Njëri-tjetrin thirremi me Du."},
  {de:"das Siezen",sq:"thirrja me Sie (formale)",type:"Kulturë Gjermane",ex:"Mit dem Chef siezen wir uns. — Me shefin thirremi me Sie."},
  {de:"das Pfandsystem",sq:"sistemi i kthimit të shisheve",type:"Kulturë Gjermane",ex:"Das Pfand zurückbringen. — Kthej shishet me pagesë."},
  {de:"der Feiertag",sq:"ditë festë zyrtare",type:"Kulturë Gjermane",ex:"Morgen ist Feiertag. — Nesër është ditë festë."},
  {de:"der Betriebsrat",sq:"këshilli i punëtorëve",type:"Kulturë Gjermane",ex:"Der Betriebsrat vertritt die Mitarbeiter. — Këshilli i punëtorëve i përfaqëson punonjësit."}
    ];
    ALL_VOCAB.B1 = ALL_VOCAB.B1.concat(tag2(b1target,"B1 Tematik"));
  };
})();



// ── VOCAB LARGE EXPANSION (+63) ──
(function(){
  var _o3=buildAllVocab;
  buildAllVocab=function(){
    _o3();
    function tag3(a,s){return a.map(function(w){return Object.assign({},w,{source:s});});}
    var nA2=[{de:"die Abkürzung",sq:"shkurtësia/abreviatura",type:"Gjuhë",ex:"Das ist eine Abkürzung. — Kjo është shkurtësi."},{de:"der Absender",sq:"dërguesi",type:"Komunikim",ex:"Wer ist der Absender? — Kush është dërguesi?"},{de:"der Empfänger",sq:"marrësi",type:"Komunikim",ex:"Der Empfänger ist unbekannt. — Marrësi është i panjohur."},{de:"die Bestellung",sq:"porosia",type:"Tregti",ex:"Die Bestellung ist angekommen. — Porosia ka mbërritur."},{de:"zurückschicken",sq:"të kthesh mbrapsht",type:"Tregti",ex:"Das Produkt zurückschicken. — Kthej produktin."},{de:"der Kassenbon",sq:"kuponi/fatura e blerjes",type:"Tregti",ex:"Den Kassenbon aufheben. — Ruaj kuponin."},{de:"die Warteschlange",sq:"radha/radhë",type:"Shërbim",ex:"Die Warteschlange ist lang. — Radha është e gjatë."},{de:"die Öffnungszeit",sq:"orari i hapjes",type:"Shërbim",ex:"Die Öffnungszeit endet um 18 Uhr. — Orari i hapjes mbaron në 18."},{de:"geöffnet",sq:"i hapur",type:"Shërbim",ex:"Die Bank ist geöffnet. — Banka është e hapur."},{de:"der Kundendienst",sq:"shërbimi i klientëve",type:"Shërbim",ex:"Den Kundendienst anrufen. — Telefono shërbimin e klientëve."},{de:"die Bedienungsanleitung",sq:"udhëzuesi i përdorimit",type:"Tregti",ex:"Die Bedienungsanleitung lesen. — Lexoj udhëzuesin."},{de:"kaputt",sq:"i prishur",type:"Objekt",ex:"Das Gerät ist kaputt. — Pajisja është e prishur."},{de:"einstellen",sq:"të rregullosh",type:"Objekt",ex:"Die Temperatur einstellen. — Rregulloj temperaturën."},{de:"einschalten",sq:"të ndezësh",type:"Objekt",ex:"Das Licht einschalten. — Ndez dritën."},{de:"ausschalten",sq:"të fikësh",type:"Objekt",ex:"Den Computer ausschalten. — Fik kompjuterin."},{de:"laden",sq:"të ngarkosh (bateri)",type:"Teknologji",ex:"Das Handy laden. — Ngarkoj celularin."},{de:"drucken",sq:"të printosh",type:"Teknologji",ex:"Das Dokument drucken. — Printoj dokumentin."},{de:"kopieren",sq:"të kopjosh",type:"Teknologji",ex:"Das Formular kopieren. — Kopjoj formularin."},{de:"weiterleiten",sq:"të përcjellësh",type:"Teknologji",ex:"Die E-Mail weiterleiten. — Përcjell emailin."},{de:"antworten auf",sq:"t'i përgjigjesh",type:"Komunikim",ex:"Auf die E-Mail antworten. — I përgjigjem emailit."},{de:"das Treffen",sq:"takimi",type:"Organizim",ex:"Das Treffen findet statt. — Takimi zhvillohet."},{de:"verschieben",sq:"të shtyrësh/ndërrosh",type:"Organizim",ex:"Den Termin verschieben. — Shtyrj takimin."},{de:"stattfinden",sq:"të zhvillohet/të ndodhë",type:"Organizim",ex:"Das Konzert findet statt. — Konceri zhvillohet."},{de:"ausfallen",sq:"të anulohet/të mos ndodhë",type:"Organizim",ex:"Das Training fällt aus. — Stërvitja anulohet."}];
    var nB1=[{de:"in Anbetracht",sq:"duke pasur parasysh / duke konsideruar",type:"Akademik",ex:"In Anbetracht der Lage. — Duke pasur parasysh gjendjen."},{de:"abgesehen von",sq:"duke lënë mënjanë / pavarësisht",type:"Akademik",ex:"Abgesehen davon ist es gut. — Duke lënë mënjanë, është mirë."},{de:"vorausgesetzt",sq:"me kusht që / nëse",type:"Akademik",ex:"Vorausgesetzt, dass alles klappt. — Me kusht që gjithçka del mirë."},{de:"inwieweit",sq:"në çfarë mase / deri ku",type:"Akademik",ex:"Inwieweit stimmt das? — Deri ku kjo është e vërtetë?"},{de:"entsprechend",sq:"në përputhje / sipas",type:"Akademik",ex:"Entsprechend den Regeln. — Sipas rregullave."},{de:"bezüglich",sq:"lidhur me / sa i takon",type:"Akademik",ex:"Bezüglich Ihrer Anfrage. — Lidhur me kërkesën tuaj."},{de:"aufgrund",sq:"për shkak të / si pasojë e",type:"Akademik",ex:"Aufgrund des Wetters. — Për shkak të motit."},{de:"anhand",sq:"nëpërmjet / duke u bazuar në",type:"Akademik",ex:"Anhand von Beispielen zeigen. — Tregoj nëpërmjet shembujsh."},{de:"anstelle",sq:"në vend të",type:"Akademik",ex:"Anstelle von Zucker. — Në vend të sheqerit."},{de:"im Rahmen",sq:"në kuadër të",type:"Akademik",ex:"Im Rahmen des Projekts. — Në kuadër të projektit."},{de:"im Hinblick",sq:"me synimin e",type:"Akademik",ex:"Im Hinblick auf die Kosten. — Me synimin e shpenzimeve."},{de:"das Nettoeinkommen",sq:"të ardhurat neto",type:"Punë",ex:"Das Nettoeinkommen ist 2000 Euro. — Të ardhurat neto janë 2000 euro."},{de:"das Arbeitsverhältnis",sq:"marrëdhënia e punës",type:"Punë",ex:"Das Arbeitsverhältnis endet. — Marrëdhënia e punës përfundon."},{de:"fristgerecht",sq:"brenda afatit",type:"Punë",ex:"Fristgerecht kündigen. — Jap njoftim brenda afatit."},{de:"im Rahmen",sq:"në kuadër të",type:"Punë",ex:"Im Rahmen der Aufgaben. — Në kuadër të detyrave."},{de:"delegieren",sq:"të delegosh",type:"Punë",ex:"Aufgaben delegieren. — Delegoj detyra."},{de:"die Akzeptanz",sq:"pranimi",type:"Shoqëri",ex:"Akzeptanz zeigen. — Tregoj pranim."},{de:"der Widerstand",sq:"rezistenca/kundërvënia",type:"Shoqëri",ex:"Widerstand leisten. — Kundërvë rezistencë."},{de:"das Hochwasser",sq:"përmbytja",type:"Natyrë",ex:"Das Hochwasser ist gefährlich. — Përmbytja është e rrezikshme."},{de:"die Hitzewelle",sq:"vala e të nxehtit",type:"Natyrë",ex:"Eine Hitzewelle kommt. — Po vjen valë të nxehti."},{de:"das Erdbeben",sq:"tërmeti",type:"Natyrë",ex:"Ein Erdbeben hat stattgefunden. — Ka ndodhur tërmet."},{de:"schmelzen",sq:"të shkrihet",type:"Natyrë",ex:"Das Eis schmilzt. — Akulli shkrrihet."},{de:"das Ökosystem",sq:"ekosistemi",type:"Natyrë",ex:"Das Ökosystem ist fragil. — Ekosistemi është i brishtë."},{de:"artenreich",sq:"me shumë lloje",type:"Natyrë",ex:"Der Regenwald ist artenreich. — Pylli tropikal është me shumë lloje."},{de:"der Livestream",sq:"transmetimi live",type:"Media",ex:"Ein Livestream auf YouTube. — Transmetim live në YouTube."},{de:"der Content",sq:"permbajtja",type:"Media",ex:"Interessanter Content. — Permbajtje interesante."},{de:"viral gehen",sq:"të bëhesh viral",type:"Media",ex:"Das Video ist viral gegangen. — Videoja u bë virale."},{de:"der Influencer",sq:"influencuesi",type:"Media",ex:"Er ist ein bekannter Influencer. — Ai është influencues i njohur."},{de:"die Fake News",sq:"lajmet e rreme",type:"Media",ex:"Fake News erkennen. — Njoh lajmet e rreme."},{de:"das freut mich",sq:"kjo më gëzon/lumturon",type:"Shprehje",ex:"Das freut mich sehr! — Kjo më gëzon shumë!"},{de:"das tut mir leid",sq:"më vjen keq",type:"Shprehje",ex:"Das tut mir wirklich leid. — Vërtet më vjen keq."},{de:"ich mache mir Sorgen",sq:"shqetësohem/brengosem",type:"Shprehje",ex:"Ich mache mir Sorgen um dich. — Shqetësohem për ty."},{de:"das überrascht mich",sq:"kjo më befason",type:"Shprehje",ex:"Das überrascht mich sehr. — Kjo më befason shumë."},{de:"ich bin beeindruckt",sq:"jam i impresionuar",type:"Shprehje",ex:"Ich bin sehr beeindruckt. — Jam shumë i impresionuar."},{de:"das enttäuscht mich",sq:"kjo më zhgënjen",type:"Shprehje",ex:"Das enttäuscht mich sehr. — Kjo më zhgënjen shumë."},{de:"ich freue mich auf",sq:"pres me padurim",type:"Shprehje",ex:"Ich freue mich auf den Urlaub. — Pres me padurim pushimet."},{de:"ich ärgere mich über",sq:"zemërohem me",type:"Shprehje",ex:"Ich ärgere mich über den Lärm. — Zemërohem me zhurmën."},{de:"das wundert mich",sq:"kjo më çudit",type:"Shprehje",ex:"Das wundert mich nicht. — Kjo nuk më çudit."},{de:"ich verlasse mich auf",sq:"mbështetem te",type:"Shprehje",ex:"Ich verlasse mich auf dich. — Mbështetem tek ty."}];
    ALL_VOCAB.A2=ALL_VOCAB.A2.concat(tag3(nA2,"Fjalori i Gjerë"));
    ALL_VOCAB.B1=ALL_VOCAB.B1.concat(tag3(nB1,"Fjalori i Gjerë"));
  };
})();



// ── VOCAB FINAL PUSH ──
(function(){
  var _o4=buildAllVocab;
  buildAllVocab=function(){
    _o4();
    function tg(a,s){return a.map(function(w){return Object.assign({},w,{source:s});});}
    var fa1=[{de:"sich anziehen",sq:"të veshesh",type:"Folje",ex:"Ich ziehe mich schnell an. — Vishem shpejt."},{de:"sich ausziehen",sq:"të zhveshesh",type:"Folje",ex:"Die Kinder ziehen sich aus. — Fëmijët zhvishen."},{de:"sich rasieren",sq:"të rruahesh",type:"Folje",ex:"Er rasiert sich täglich. — Ai rruhet çdo ditë."},{de:"sich schminken",sq:"të bëhesh make-up",type:"Folje",ex:"Sie schminkt sich morgens. — Ajo bëhet make-up mëngjeseve."},{de:"sich kämmen",sq:"të krehesh",type:"Folje",ex:"Das Kind kämmt sich. — Fëmija krehët."},{de:"wischen",sq:"të fshish (dyshemenë)",type:"Folje",ex:"Den Boden wischen. — Fshij dyshemenë."},{de:"staubsaugen",sq:"të fshish me fshirëse elektrike",type:"Folje",ex:"Einmal pro Woche staubsaugen. — Njëherë në javë fshij me fshirëse."},{de:"nähen",sq:"të qepësh",type:"Folje",ex:"Ich nähe den Knopf an. — Qep butonin."},{de:"basteln",sq:"të bësh punë dore",type:"Folje",ex:"Die Kinder basteln. — Fëmijët bëjnë punë dore."},{de:"aufnehmen",sq:"të incizosh/xhirosh",type:"Folje",ex:"Das Video aufnehmen. — Incizoj videon."},{de:"bearbeiten",sq:"të punësosh/modifikosh",type:"Folje",ex:"Das Foto bearbeiten. — Modifikoj foton."},{de:"drehen",sq:"të xhirosh/rrotullosh",type:"Folje",ex:"Einen Film drehen. — Xhiroj film."},{de:"aufmerksam",sq:"i vëmendshëm",type:"Mbiemër",ex:"Sei aufmerksam! — Bëj i vëmendshëm!"},{de:"sorgfältig",sq:"me kujdes/i kujdesshëm",type:"Mbiemër",ex:"Sorgfältig arbeiten. — Punoj me kujdes."},{de:"gewissenhaft",sq:"ndërgjegjshëm/me ndërgjegjshmëri",type:"Mbiemër",ex:"Er ist gewissenhaft. — Ai është ndërgjegjshëm."},{de:"hilfsbereit",sq:"i gatshëm për ndihmë",type:"Mbiemër",ex:"Sie ist sehr hilfsbereit. — Ajo është shumë e gatshme për ndihmë."},{de:"freundlich",sq:"i sjellshëm/miqësor",type:"Mbiemër",ex:"Der Verkäufer ist freundlich. — Shitësi është i sjellshëm."},{de:"pünktlich",sq:"i pikësaktë",type:"Mbiemër",ex:"Sei pünktlich! — Bëj i pikësaktë!"},{de:"verantwortungsbewusst",sq:"i ndërgjegjshëm",type:"Mbiemër",ex:"Sie handelt verantwortungsbewusst. — Ajo vepron me ndërgjegjshmëri."},{de:"selbstbewusst",sq:"i sigurt në vetë",type:"Mbiemër",ex:"Er tritt selbstbewusst auf. — Ai shfaqet i sigurt në vete."},{de:"kreativ",sq:"kreativ",type:"Mbiemër",ex:"Er ist sehr kreativ. — Ai është shumë kreativ."},{de:"kritisch",sq:"kritik",type:"Mbiemër",ex:"Denk kritisch! — Mendo kritikisht!"},{de:"analytisch",sq:"analitik",type:"Mbiemër",ex:"Analytisches Denken ist gefragt. — Mendimi analitik kërkohet."},{de:"systematisch",sq:"sistematik",type:"Mbiemër",ex:"Systematisch vorgehen. — Veproj sistematikisht."},{de:"praktisch",sq:"praktik/i dobishëm",type:"Mbiemër",ex:"Das ist sehr praktisch. — Kjo është shumë praktike."},{de:"der Saft",sq:"lëngu i frutave",type:"Ushqim",ex:"Ein Glas Orangensaft. — Një gotë lëng portokalli."},{de:"der Joghurt",sq:"kosi",type:"Ushqim",ex:"Joghurt zum Frühstück. — Kos për mëngjes."},{de:"die Wurst",sq:"suxhuku/proshuta",type:"Ushqim",ex:"Brot mit Wurst. — Bukë me suxhuk."},{de:"das Obst",sq:"frutat",type:"Ushqim",ex:"Täglich Obst essen. — Ha fruta çdo ditë."},{de:"die Gurke",sq:"kastraveci",type:"Ushqim",ex:"Gurke in den Salat. — Kastravec në sallatë."}];
    ALL_VOCAB.A1=ALL_VOCAB.A1.concat(tg(fa1,"Fjalori Final"));
    var fa2=[{de:"der Salat",sq:"sallatë/marule",type:"Ushqim",ex:"Ein frischer Salat. — Sallatë e freskët."},{de:"die Bluse",sq:"blluzë femrore",type:"Rroba",ex:"Eine elegante Bluse. — Blluzë elegante."},{de:"der Stiefel",sq:"çizmet",type:"Rroba",ex:"Stiefel im Regen. — Çizme në shi."}];
    ALL_VOCAB.A2=ALL_VOCAB.A2.concat(tg(fa2,"Fjalori Final"));
    var fb1=[{de:"das Jahrhundert",sq:"shekulli",type:"Kohë",ex:"Im 21. Jahrhundert. — Në shekullin 21."},{de:"das Jahrzehnt",sq:"dekada",type:"Kohë",ex:"Im letzten Jahrzehnt. — Në dekadën e fundit."},{de:"die Vergangenheit",sq:"e kaluara",type:"Kohë",ex:"In der Vergangenheit war es anders. — Në të kaluarën ishte ndryshe."},{de:"die Gegenwart",sq:"e tanishmja",type:"Kohë",ex:"In der Gegenwart leben. — Jetoj në të tashmen."},{de:"die Zukunft",sq:"e ardhmja",type:"Kohë",ex:"Die Zukunft ist ungewiss. — E ardhmja është e pasigurt."},{de:"plötzlich",sq:"papritmas",type:"Kohë",ex:"Plötzlich fiel der Strom aus. — Papritmas shkoi drita."},{de:"gleichzeitig",sq:"njëkohësisht",type:"Kohë",ex:"Das passiert gleichzeitig. — Kjo ndodh njëkohësisht."},{de:"vorher",sq:"para/më parë",type:"Kohë",ex:"Was war vorher? — Çfarë ishte më parë?"},{de:"kaum",sq:"sapo/vështirë",type:"Kohë",ex:"Kaum angekommen, schon wieder weg. — Sapo arriti, tashmë ikoi."},{de:"soeben",sq:"tani/sapo",type:"Kohë",ex:"Er ist soeben angekommen. — Sapo ka mbërritur."},{de:"voraussichtlich",sq:"me shumë gjasë/me siguri",type:"Kohë",ex:"Voraussichtlich kommt er morgen. — Me shumë gjasë vjen nesër."},{de:"der Norden",sq:"veriu",type:"Drejtim",ex:"Im Norden Deutschlands. — Në veriun e Gjermanisë."},{de:"der Süden",sq:"jugu",type:"Drejtim",ex:"München liegt im Süden. — Mynihu ndodhet në jug."},{de:"der Osten",sq:"lindja",type:"Drejtim",ex:"Berlin liegt im Osten. — Berlini ndodhet në lindje."},{de:"der Westen",sq:"perëndimi",type:"Drejtim",ex:"Köln liegt im Westen. — Kolonja ndodhet në perëndim."},{de:"die Mitte",sq:"mesi/qendra",type:"Drejtim",ex:"In der Mitte Deutschlands. — Në mes të Gjermanisë."},{de:"die Umgebung",sq:"rrethinat",type:"Drejtim",ex:"Die Umgebung ist schön. — Rrethinat janë të bukura."},{de:"der Stadtrand",sq:"periferia",type:"Drejtim",ex:"Wir wohnen am Stadtrand. — Banojmë në periferi."},{de:"ländlich",sq:"rural/fshatarak",type:"Drejtim",ex:"In einer ländlichen Gegend. — Në zonë rurale."},{de:"städtisch",sq:"urban/i qytetit",type:"Drejtim",ex:"Das städtische Leben. — Jeta e qytetit."}];
    ALL_VOCAB.B1=ALL_VOCAB.B1.concat(tg(fb1,"Fjalori Final"));
  };
})();



function toggleCourseMenu() {
  var m = document.getElementById('courseToolsMenu');
  if (!m) return;
  var isOpen = m.style.display === 'block';
  if (isOpen) {
    m.style.display = 'none';
    return;
  }
  // Position the menu relative to the button that triggered it
  var btn = document.getElementById('toolsMenuBtn');
  if (!btn) btn = document.querySelector('[onclick*="toggleCourseMenu"]');
  if (btn) {
    var rect = btn.getBoundingClientRect();
    var menuW = 220;
    var left = rect.right - menuW;
    if (left < 8) left = 8;
    if (left + menuW > window.innerWidth - 8) left = window.innerWidth - menuW - 8;
    m.style.top = (rect.bottom + 6) + 'px';
    m.style.left = left + 'px';
    m.style.right = 'auto';
  }
  m.style.display = 'block';
}
document.addEventListener('click', function(e) {
  var menu = document.getElementById('courseToolsMenu');
  var btn = e.target.closest ? e.target.closest('[onclick*="toggleCourseMenu"]') : null;
  if (menu && menu.style.display === 'block' && !btn) {
    menu.style.display = 'none';
  }
});

function toggleModuleDrawer() {
  var d = document.getElementById('moduleDrawer');
  var o = document.getElementById('moduleDrawerOverlay');
  if (!d) return;
  var open = d.style.display === 'block';
  d.style.display = open ? 'none' : 'block';
  if (o) o.style.display = open ? 'none' : 'block';
  if (!open) { renderDrawerModules(); document.body.style.overflow = 'hidden'; }
  else { document.body.style.overflow = ''; }
}

function renderDrawerModules() {
  var c = document.getElementById('drawerModuleList');
  var lbl = document.getElementById('drawerLevelLabel');
  if (!c) return;
  var lvNames = {A1:'A1 — Fillestar', A2:'A2 — Bazë', B1:'B1 — Mesatar'};
  if (lbl) lbl.textContent = lvNames[state.currentLevel] || state.currentLevel;
  var mods = (MODULES[state.currentLevel] || []).filter(function(m){ return m && m.id; });
  var html = '';
  mods.forEach(function(m) {
    var done = state.completedModules.includes(m.id);
    var active = m.id === state.currentModuleId;
    var lc = state.currentLevel==='A1' ? 'var(--a1-color)' : state.currentLevel==='A2' ? 'var(--a2-color)' : 'var(--b1-color)';
    var bg = active ? 'background:rgba(240,180,41,0.08);border:1px solid rgba(240,180,41,0.3)' : 'background:var(--surface2);border:1px solid var(--border)';
    var numBg = active ? 'var(--gold)' : done ? 'var(--green)' : 'var(--surface)';
    var numBorder = active ? 'var(--gold)' : done ? 'var(--green)' : lc;
    var numColor = (active || done) ? '#000' : lc;
    html += '<div class="drawer-mod-item" data-modid="' + m.id + '" style="' + bg + ';border-radius:10px;padding:13px 14px;margin-bottom:8px;cursor:pointer;display:flex;align-items:center;gap:12px;-webkit-tap-highlight-color:transparent">'
      + '<div style="width:34px;height:34px;border-radius:50%;background:' + numBg + ';border:2px solid ' + numBorder + ';display:flex;align-items:center;justify-content:center;font-size:0.85rem;font-weight:700;color:' + numColor + ';flex-shrink:0">' + (done ? '✓' : m.num) + '</div>'
      + '<div style="flex:1;min-width:0">'
      + '<div style="font-size:0.92rem;font-weight:600;color:' + (active ? 'var(--gold)' : 'var(--text)') + ';white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + m.title + '</div>'
      + '<div style="font-size:0.78rem;color:var(--text-muted)">' + m.sub + '</div>'
      + '</div>'
      + (active ? '<div style="color:var(--gold)">▶</div>' : '')
      + '</div>';
  });
  c.innerHTML = html;
  // Attach click handlers via JS (no inline onclick = works on all mobile browsers)
  var items = c.querySelectorAll('.drawer-mod-item');
  for (var i = 0; i < items.length; i++) {
    (function(item) {
      item.addEventListener('click', function() {
        selectMobileModule(item.getAttribute('data-modid'));
      });
      // Also touchend for faster response on iOS
      item.addEventListener('touchend', function(e) {
        e.preventDefault();
        selectMobileModule(item.getAttribute('data-modid'));
      });
    })(items[i]);
  }
}

function selectMobileModule(modId) {
  if (!modId) return;
  state.currentModuleId = modId;
  state.lessonTab = 'story';
  // Close drawer
  var d = document.getElementById('moduleDrawer');
  var o = document.getElementById('moduleDrawerOverlay');
  if (d) d.style.display = 'none';
  if (o) o.style.display = 'none';
  document.body.style.overflow = '';
  // Render
  try { renderCourse(); } catch(e) {}
  window.scrollTo(0, 0);
}



function showAlphabet() {
  showScreen('alphabetScreen');
  setTimeout(function() {
    var c = document.getElementById('alphabetContent');
    if (!c) return;
    var sounds = [
      {l:'ä', ipa:'[ɛ]', sq:'Si "e" e hapur — si "e" në "jetë"', tip:'Thuaj "a" por ngre buzët si për "e".',
       words:[{de:'Mädchen',sq:'vajzë'},{de:'spät',sq:'vonë'},{de:'Käse',sq:'djathë'}]},
      {l:'ö', ipa:'[ø]', sq:'Buzët si "o" por tingullon si "e"', tip:'Formëso buzët si "o", provo të thuash "e".',
       words:[{de:'schön',sq:'i bukur'},{de:'können',sq:'të mundesh'},{de:'Öl',sq:'vaj'}]},
      {l:'ü', ipa:'[y]', sq:'Buzët si "u" por tingullon si "i"', tip:'Formëso buzët si "u", provo të thuash "i".',
       words:[{de:'über',sq:'mbi'},{de:'müde',sq:'i lodhur'},{de:'fünf',sq:'pesë'}]},
      {l:'ß', ipa:'[s]', sq:'Si "s" e fortë — pas vokaleve të gjata', tip:'"Straße" lexo "Strase".',
       words:[{de:'Straße',sq:'rrugë'},{de:'heiß',sq:'nxehtë'},{de:'groß',sq:'i madh'}]},
      {l:'ch', ipa:'[x]/[ç]', sq:'Pas a/o/u: si "h" i fortë. Pas e/i: i butë', tip:'"nach"=h i fortë. "ich"=si "hj" i butë.',
       words:[{de:'nach',sq:'pas'},{de:'ich',sq:'unë'},{de:'Buch',sq:'libër'}]},
      {l:'sch', ipa:'[ʃ]', sq:'Saktësisht si "sh" shqipe', tip:'E lehtë! "Schule"="Shule".',
       words:[{de:'Schule',sq:'shkolla'},{de:'schön',sq:'i bukur'},{de:'Tisch',sq:'tryezë'}]},
      {l:'ei', ipa:'[aɪ]', sq:'Si "aj" shqipe', tip:'ei="aj". KUJDES: "ie"="i e gjatë".',
       words:[{de:'mein',sq:'im'},{de:'drei',sq:'tre'},{de:'Eis',sq:'akull'}]},
      {l:'ie', ipa:'[iː]', sq:'Si "i" e gjatë shqipe', tip:'ie=i i gjatë. "Wie"="Vi-".',
       words:[{de:'wie',sq:'si'},{de:'viel',sq:'shumë'},{de:'Liebe',sq:'dashuria'}]},
      {l:'w', ipa:'[v]', sq:'Gjermanishtja "w" = "v" shqipe', tip:'"Wasser" lexohet "Vaser".',
       words:[{de:'Wasser',sq:'ujë'},{de:'wohnen',sq:'të banosh'},{de:'Wie',sq:'si'}]},
      {l:'v', ipa:'[f]', sq:'Gjermanishtja "v" = "f" shqipe', tip:'"Vater"="Fater".',
       words:[{de:'Vater',sq:'baba'},{de:'von',sq:'nga'},{de:'viel',sq:'shumë'}]},
      {l:'z', ipa:'[ts]', sq:'Si "ts" — si "c" shqipe', tip:'"Zehn"="Tsen".',
       words:[{de:'zehn',sq:'dhjetë'},{de:'Zeit',sq:'koha'},{de:'Zucker',sq:'sheqer'}]},
      {l:'st/sp', ipa:'[ʃt]/[ʃp]', sq:'Në fillim: st="sht", sp="shp"', tip:'"Stadt"="Shtadt".',
       words:[{de:'Stadt',sq:'qytet'},{de:'spielen',sq:'të luash'},{de:'Straße',sq:'rrugë'}]}
    ];
    var html = '<div style="max-width:660px;margin:0 auto">';
    html += '<div style="background:rgba(240,180,41,0.08);border:1px solid rgba(240,180,41,0.2);border-radius:12px;padding:14px;margin-bottom:18px;font-size:0.88rem;color:var(--text);line-height:1.7">Para se të fillosh A1, mëso tingujt e veçantë gjermanë. Kliko 🔊 për të dëgjuar.</div>';
    sounds.forEach(function(s) {
      html += '<div style="background:var(--surface2);border-radius:12px;padding:16px;margin-bottom:12px;border-left:4px solid var(--gold)">';
      html += '<div style="display:flex;align-items:flex-start;gap:12px;margin-bottom:10px">';
      html += '<div style="font-size:2.2rem;font-weight:900;color:var(--gold);min-width:52px;text-align:center;line-height:1.1">'+s.l+'</div>';
      html += '<div style="flex:1"><div style="font-size:0.75rem;color:var(--text-muted);font-family:monospace;margin-bottom:3px">'+s.ipa+'</div>';
      html += '<div style="font-size:0.87rem;color:var(--text)">'+s.sq+'</div></div></div>';
      html += '<div style="background:rgba(96,165,250,0.08);border-radius:7px;padding:8px 11px;margin-bottom:10px;font-size:0.82rem;color:#60a5fa">💡 '+s.tip+'</div>';
      html += '<div style="display:flex;gap:7px;flex-wrap:wrap">';
      s.words.forEach(function(w) {
        html += '<div class="tts-btn" data-de="'+w.de+'" onclick="TTS.speak(this.dataset.de)" style="background:var(--surface);border-radius:7px;padding:6px 11px;cursor:pointer">';
        html += '<div style="font-size:0.88rem;font-weight:600;color:var(--text)">'+w.de+' <span style="color:var(--gold);font-size:0.7rem">🔊</span></div>';
        html += '<div style="font-size:0.74rem;color:var(--text-muted)">'+w.sq+'</div></div>';
      });
      html += '</div></div>';
    });
    html += '<button class="btn" onclick="switchLevel(\'A1\');showScreen(\'course\')">Fillo A1 →</button>';
    html += '</div>';
    c.innerHTML = html;
  }, 50);
}





function showStudyGuide() {
  var existing = document.getElementById('studyGuideModal');
  if (existing) { existing.style.display = 'flex'; return; }
  var modal = document.createElement('div');
  modal.id = 'studyGuideModal';
  modal.style.cssText = 'display:flex;position:fixed;inset:0;background:rgba(0,0,0,0.8);z-index:9997;align-items:center;justify-content:center;padding:16px';
  var box = document.createElement('div');
  box.style.cssText = 'background:var(--surface);border-radius:20px;padding:26px;width:90%;max-width:500px;max-height:88vh;overflow-y:auto;border:1px solid var(--border)';
  var steps = [
    {c:'var(--a1-color)',t:'Hapi 1 — Historia (5 min)',d:'Lexo dialogun e Dion-it. Kliko 🔊 për shqiptim.'},
    {c:'var(--a2-color)',t:'Hapi 2 — Fjalori (5 min)',d:'Shiko fjalët e reja. Shto në kartela ato që nuk i di.'},
    {c:'var(--b1-color)',t:'Hapi 3 — Gramatika (5 min)',d:'Lexo rregullin dhe bëj ushtrimet.'},
    {c:'var(--gold)',t:'Hapi 4 — Quiz (3-5 min)',d:'Nën 70%? Rishiko modulin. Mbi 70%? Vazhdo.'}
  ];
  var innerHtml = '<div style="text-align:center;margin-bottom:18px">'
    + '<div style="font-size:2.2rem;margin-bottom:6px">📚</div>'
    + '<h2 style="color:var(--gold);margin-bottom:4px;font-size:1.3rem">Si të studiosh me DeutschAL</h2>'
    + '<p style="color:var(--text-muted);font-size:0.83rem">15-20 min/ditë</p></div>';
  steps.forEach(function(s) {
    innerHtml += '<div style="background:var(--surface2);border-radius:10px;padding:13px;border-left:3px solid '
      + s.c + ';margin-bottom:10px"><div style="font-weight:700;color:var(--text);margin-bottom:3px;font-size:0.9rem">'
      + s.t + '</div><div style="font-size:0.83rem;color:var(--text-muted);line-height:1.6">' + s.d + '</div></div>';
  });
  innerHtml += '<div style="background:rgba(240,180,41,0.07);border:1px solid rgba(240,180,41,0.2);border-radius:9px;padding:11px;margin-bottom:16px;font-size:0.84rem;color:var(--text);line-height:1.6">'
    + '<strong style="color:var(--gold)">💡 Rregulli i artë:</strong> 15 min çdo ditë &gt; 2 orë të premten.</div>'
    ;
  box.innerHTML = innerHtml;
  modal.appendChild(box);
  document.body.appendChild(modal);
  var btn = document.getElementById('closeGuideBtn2');
  if (btn) btn.addEventListener('click', function() { modal.style.display = 'none'; });
}
