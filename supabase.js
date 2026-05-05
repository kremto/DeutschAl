// ═══════════════════════════════════════════════════════════════
// DeutschAL — Supabase Auth & Sync v2
// ═══════════════════════════════════════════════════════════════

const SUPABASE_URL = 'https://cfnjpezlwdbxbogkkovk.supabase.co';
const SUPABASE_KEY = 'sb_publishable_4fTv2nKfqhbKQWvwngnNmg_6FAqFreN';

// ── Detect OAuth callback immediately on script load ──────────
(function() {
  var hash = window.location.hash;
  if (hash && hash.includes('access_token')) {
    // Force landing screen before anything renders
    try { localStorage.setItem('deutschal_screen', 'landing'); } catch(e) {}
    // Clean the URL immediately
    window.history.replaceState(null, '', window.location.pathname);
  }
})();

// ── Supabase client (loaded via CDN in index.html) ────────────
var _sb = null;
function getSB() {
  if (!_sb && window.supabase) {
    _sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
  }
  return _sb;
}

// ── Auth State ────────────────────────────────────────────────
var AUTH = {
  user: null,
  session: null,

  // Initialize — check if user already logged in
  init: async function() {
    var sb = getSB();
    if (!sb) return;

    // Clean URL hash from Google OAuth redirect
    var isOAuthCallback = window.location.hash && 
      (window.location.hash.includes('access_token') || 
       window.location.hash.includes('error') ||
       window.location.hash === '#');
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
    // If OAuth callback, override saved screen to landing
    if (isOAuthCallback) {
      try { localStorage.setItem('deutschal_screen', 'landing'); } catch(e) {}
    }

    // Listen for auth state changes
    sb.auth.onAuthStateChange(function(event, session) {
      if (event === 'SIGNED_IN' && session) {
        AUTH.user = session.user;
        AUTH.session = session;
        updateAuthUI();
        SYNC.loadFromCloud().then(function() {
          if (typeof showScreen === 'function') {
            showScreen('landing');
          } else {
            window.pendingScreen = 'landing';
          }
          // Clear any saved screen that might be authScreen
          try { localStorage.setItem('deutschal_screen', 'landing'); } catch(e) {}
        });
      } else if (event === 'SIGNED_OUT') {
        AUTH.user = null;
        AUTH.session = null;
        AUTH.onLogout();
      }
    });

    // Check existing session
    var { data } = await sb.auth.getSession();
    if (data.session) {
      this.user = data.session.user;
      this.session = data.session;
      updateAuthUI();
      await SYNC.loadFromCloud();
    }
  },

  // Email + Password login
  loginEmail: async function(email, password) {
    var sb = getSB();
    var { data, error } = await sb.auth.signInWithPassword({ email, password });
    if (error) return { error: error.message };
    return { data };
  },

  // Email + Password register
  registerEmail: async function(email, password, name) {
    var sb = getSB();
    var { data, error } = await sb.auth.signUp({
      email, password,
      options: { data: { full_name: name } }
    });
    if (error) return { error: error.message };
    return { data };
  },

  // Google Sign-in
  loginGoogle: async function() {
    var sb = getSB();
    var { error } = await sb.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: 'https://deutschal.com/' }
    });
    if (error) return { error: error.message };
  },

  // Logout
  logout: async function() {
    var sb = getSB();
    await sb.auth.signOut();
  },

  // Reset password
  resetPassword: async function(email) {
    var sb = getSB();
    var { error } = await sb.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin + window.location.pathname + '?reset=true'
    });
    if (error) return { error: error.message };
    return { ok: true };
  },

  // Called after login — sync progress
  onLogin: async function() {
    try {
      updateAuthUI();
      await SYNC.loadFromCloud();
    } catch(e) {}
  },

  // Called after logout
  onLogout: function() {
    updateAuthUI();
  },

  isLoggedIn: function() {
    return !!this.user;
  },

  getName: function() {
    if (!this.user) return null;
    return this.user.user_metadata?.full_name ||
           this.user.user_metadata?.name ||
           this.user.email?.split('@')[0] || 'Përdorues';
  },

  getEmail: function() {
    return this.user?.email || '';
  }
};

// ── Cloud Sync ────────────────────────────────────────────────
var SYNC = {
  // Save progress to Supabase
  saveToCloud: async function() {
    if (!AUTH.isLoggedIn()) return;
    var sb = getSB();
    var progress = PROGRESS.getData();
    var { error } = await sb.from('user_progress').upsert({
      user_id: AUTH.user.id,
      progress: progress,
      updated_at: new Date().toISOString()
    }, { onConflict: 'user_id' });
    if (error) console.warn('Sync error:', error.message);
  },

  // Load progress from Supabase
  loadFromCloud: async function() {
    if (!AUTH.isLoggedIn()) return;
    var sb = getSB();
    var { data, error } = await sb
      .from('user_progress')
      .select('progress')
      .eq('user_id', AUTH.user.id)
      .single();
    if (error || !data) return;
    if (data.progress) {
      PROGRESS.save(data.progress);
      // Update in-memory state
      var pd = data.progress;
      if (pd.modulesCompleted) state.completedModules = pd.modulesCompleted;
    }
  }
};

// ── UI Updates ────────────────────────────────────────────────
function updateAuthUI() {
  var loginBtn = document.getElementById('authLoginBtn');
  var userBtn = document.getElementById('authUserBtn');
  var userName = document.getElementById('authUserName');

  if (AUTH.isLoggedIn()) {
    if (loginBtn) loginBtn.style.display = 'none';
    if (userBtn) userBtn.style.display = 'flex';
    if (userName) userName.textContent = AUTH.getName();
  } else {
    if (loginBtn) loginBtn.style.display = 'flex';
    if (userBtn) userBtn.style.display = 'none';
  }
}

// ── Auth Screen Render ─────────────────────────────────────────
function showAuthScreen(mode) {
  // mode: 'login' | 'register' | 'reset'
  window._authMode = mode || 'login';
  showScreen('authScreen');
  renderAuthScreen();
}

function renderAuthScreen() {
  var c = document.getElementById('authContent');
  if (!c) return;
  var mode = window._authMode || 'login';
  var isLogin = mode === 'login';
  var isRegister = mode === 'register';
  var isReset = mode === 'reset';

  c.innerHTML =
    '<div style="max-width:400px;margin:0 auto;padding:40px 20px">' +
      // Logo
      '<div style="text-align:center;margin-bottom:32px">' +
        '<div style="font-size:2.5rem;margin-bottom:8px">🇩🇪</div>' +
        '<div style="font-size:1.5rem;font-weight:800;color:var(--gold)">DeutschAL</div>' +
        '<div style="font-size:0.85rem;color:var(--text-muted);margin-top:4px">' +
          (isLogin ? 'Hyrje në llogari' : isRegister ? 'Krijo llogari falas' : 'Rivendos fjalëkalimin') +
        '</div>' +
      '</div>' +

      // Error/Success message area
      '<div id="authMsg" style="display:none;padding:12px;border-radius:8px;margin-bottom:16px;font-size:0.85rem;text-align:center"></div>' +

      // Google button (not on reset)
      (!isReset ?
        '<button onclick="handleGoogleAuth()" style="width:100%;padding:13px;border-radius:12px;border:1px solid var(--border);background:var(--surface2);color:var(--text);cursor:pointer;font-size:0.9rem;font-weight:500;display:flex;align-items:center;justify-content:center;gap:10px;margin-bottom:16px;font-family:DM Sans,sans-serif">' +
          '<svg width="18" height="18" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.36-8.16 2.36-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>' +
          (isLogin ? 'Hyrje me Google' : 'Regjistrim me Google') +
        '</button>' +
        '<div style="text-align:center;color:var(--text-muted);font-size:0.8rem;margin-bottom:16px">— ose me email —</div>' : '') +

      // Name field (register only)
      (isRegister ?
        '<input id="authName" type="text" placeholder="Emri juaj" style="width:100%;padding:13px;border-radius:12px;border:1px solid var(--border);background:var(--surface2);color:var(--text);font-size:0.9rem;margin-bottom:12px;font-family:DM Sans,sans-serif;box-sizing:border-box">' : '') +

      // Email
      '<input id="authEmail" type="email" placeholder="Email adresa" style="width:100%;padding:13px;border-radius:12px;border:1px solid var(--border);background:var(--surface2);color:var(--text);font-size:0.9rem;margin-bottom:12px;font-family:DM Sans,sans-serif;box-sizing:border-box">' +

      // Password (not on reset)
      (!isReset ?
        '<input id="authPassword" type="password" placeholder="Fjalëkalimi" style="width:100%;padding:13px;border-radius:12px;border:1px solid var(--border);background:var(--surface2);color:var(--text);font-size:0.9rem;margin-bottom:20px;font-family:DM Sans,sans-serif;box-sizing:border-box">' : '') +

      // Submit button
      '<button onclick="handleAuthSubmit()" class="btn" style="width:100%;padding:14px;font-size:1rem;margin-bottom:16px" id="authSubmitBtn">' +
        (isLogin ? 'Hyrje' : isRegister ? 'Krijo llogari' : 'Dërgo email rivendosjeje') +
      '</button>' +

      // Links
      '<div style="text-align:center;font-size:0.85rem;color:var(--text-muted)">' +
        (isLogin ?
          '<span>Nuk ke llogari? <button onclick="showAuthScreen(\'register\')" style="background:none;border:none;color:var(--gold);cursor:pointer;font-size:0.85rem;font-family:DM Sans,sans-serif">Regjistrohu</button></span>' +
          '<br><button onclick="showAuthScreen(\'reset\')" style="background:none;border:none;color:var(--text-muted);cursor:pointer;font-size:0.82rem;margin-top:8px;font-family:DM Sans,sans-serif;text-decoration:underline">Harrova fjalëkalimin</button>' :
          isRegister ?
          '<span>Ke llogari? <button onclick="showAuthScreen(\'login\')" style="background:none;border:none;color:var(--gold);cursor:pointer;font-size:0.85rem;font-family:DM Sans,sans-serif">Hyrje</button></span>' :
          '<button onclick="showAuthScreen(\'login\')" style="background:none;border:none;color:var(--gold);cursor:pointer;font-size:0.85rem;font-family:DM Sans,sans-serif">← Kthehu te hyrja</button>'
        ) +
      '</div>' +

      // Back to app
      '<div style="text-align:center;margin-top:24px">' +
        '<button onclick="showScreen(\'landing\')" style="background:none;border:none;color:var(--text-muted);cursor:pointer;font-size:0.8rem;font-family:DM Sans,sans-serif">Vazhdo pa llogari →</button>' +
      '</div>' +
    '</div>';
}

// ── Auth Handlers ──────────────────────────────────────────────
async function handleAuthSubmit() {
  var mode = window._authMode || 'login';
  var email = (document.getElementById('authEmail')?.value || '').trim();
  var password = document.getElementById('authPassword')?.value || '';
  var name = (document.getElementById('authName')?.value || '').trim();
  var msg = document.getElementById('authMsg');
  var btn = document.getElementById('authSubmitBtn');

  if (!email) { showAuthMsg('Shkruaj email adresën!', 'error'); return; }
  if (mode !== 'reset' && !password) { showAuthMsg('Shkruaj fjalëkalimin!', 'error'); return; }
  if (mode === 'register' && password.length < 6) { showAuthMsg('Fjalëkalimi duhet të ketë minimum 6 karaktere!', 'error'); return; }

  if (btn) { btn.disabled = true; btn.textContent = 'Duke u procesuar...'; }

  var result;
  if (mode === 'login') {
    result = await AUTH.loginEmail(email, password);
    if (result.error) {
      showAuthMsg('Email ose fjalëkalim i gabuar!', 'error');
    } else {
      showAuthMsg('Hyrja u krye me sukses! ✅', 'success');
      setTimeout(function() { showScreen('landing'); }, 1000);
    }
  } else if (mode === 'register') {
    result = await AUTH.registerEmail(email, password, name);
    if (result.error) {
      showAuthMsg(result.error, 'error');
    } else {
      showAuthMsg('Llogaria u krijua! Kontrollo emailin për konfirmim ✅', 'success');
    }
  } else if (mode === 'reset') {
    result = await AUTH.resetPassword(email);
    if (result.error) {
      showAuthMsg(result.error, 'error');
    } else {
      showAuthMsg('Email-i i rivendosjes u dërgua! Kontrollo inbox-in ✅', 'success');
    }
  }

  if (btn) { btn.disabled = false; btn.textContent = mode === 'login' ? 'Hyrje' : mode === 'register' ? 'Krijo llogari' : 'Dërgo email rivendosjeje'; }
}

async function handleGoogleAuth() {
  var result = await AUTH.loginGoogle();
  if (result?.error) showAuthMsg(result.error, 'error');
}

function showAuthMsg(text, type) {
  var msg = document.getElementById('authMsg');
  if (!msg) return;
  msg.style.display = 'block';
  msg.style.background = type === 'error' ? 'rgba(239,68,68,0.15)' : 'rgba(52,211,153,0.15)';
  msg.style.border = '1px solid ' + (type === 'error' ? '#ef4444' : '#34d399');
  msg.style.color = type === 'error' ? '#ef4444' : '#34d399';
  msg.textContent = text;
}

// ── User Profile Screen ────────────────────────────────────────
function showProfileScreen() {
  showScreen('profileScreen');
  renderProfileScreen();
}

function renderProfileScreen() {
  var c = document.getElementById('profileContent');
  if (!c) return;
  var pd = PROGRESS.getData();

  c.innerHTML =
    '<div style="max-width:500px;margin:0 auto;padding:24px 16px">' +
      // Avatar + name
      '<div style="text-align:center;margin-bottom:28px">' +
        '<div style="width:72px;height:72px;border-radius:50%;background:linear-gradient(135deg,var(--gold),#f97316);display:flex;align-items:center;justify-content:center;font-size:2rem;margin:0 auto 12px">' +
          AUTH.getName().charAt(0).toUpperCase() +
        '</div>' +
        '<div style="font-size:1.2rem;font-weight:700;color:var(--text)">' + AUTH.getName() + '</div>' +
        '<div style="font-size:0.85rem;color:var(--text-muted)">' + AUTH.getEmail() + '</div>' +
      '</div>' +

      // Stats
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:24px">' +
        statCard('📚', pd.modulesCompleted?.length || 0, 'Module') +
        statCard('🔥', pd.streak || 0, 'Ditë streak') +
        statCard('✅', pd.exercisesDone || 0, 'Ushtrime') +
        statCard('🎯', pd.quizzesDone || 0, 'Kuize') +
      '</div>' +

      // Sync button
      '<button onclick="syncProgress()" class="btn-outline" style="width:100%;padding:12px;margin-bottom:12px">☁️ Sinkronizo Progresin</button>' +

      // Logout
      '<button onclick="handleLogout()" style="width:100%;padding:12px;border-radius:12px;border:1px solid #ef4444;background:rgba(239,68,68,0.1);color:#ef4444;cursor:pointer;font-size:0.9rem;font-family:DM Sans,sans-serif">Dil nga llogaria</button>' +
    '</div>';
}

function statCard(icon, val, label) {
  return '<div style="background:var(--surface2);border-radius:12px;padding:16px;text-align:center">' +
    '<div style="font-size:1.5rem">' + icon + '</div>' +
    '<div style="font-size:1.4rem;font-weight:800;color:var(--text)">' + val + '</div>' +
    '<div style="font-size:0.78rem;color:var(--text-muted)">' + label + '</div>' +
  '</div>';
}

async function syncProgress() {
  var btn = event.target;
  btn.textContent = 'Duke sinkronizuar...';
  btn.disabled = true;
  await SYNC.saveToCloud();
  btn.textContent = '✅ U sinkronizua!';
  setTimeout(function() {
    btn.textContent = '☁️ Sinkronizo Progresin';
    btn.disabled = false;
  }, 2000);
}

async function handleLogout() {
  await AUTH.logout();
  showScreen('landing');
}

// ── Initialize on load ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  AUTH.init();
});
