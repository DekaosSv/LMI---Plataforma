/**
 * LMI - Panel de Delegados de División Plata (admin_plata.js)
 * Permite a los delegados de División Plata:
 * 1. Iniciar sesión de forma segura con PIN personal de delegado.
 * 2. Guardar y registrar resultados en la nube (GitHub Pages) mediante la API de GitHub o servidor local.
 * 3. Firmar cada registro con su usuario (autoría y fecha/hora exacta).
 * 4. Respetar las fechas (jornadas) habilitadas/bloqueadas por la Administración Principal.
 * 5. Auditar el historial completo de registros de la división.
 * 6. Generar y descargar imágenes oficiales en PNG (Tabla, Goleadores, Asistidores y Pendientes).
 */

// =========================================================================
// MÓDULO DE AUTENTICACIÓN Y SEGURIDAD (PIN & SESIONES)
// =========================================================================
const PlataAuth = {
  session: null,

  init() {
    this.checkInviteUrl();
    this.updateTokenStatusUI();
    this.checkSession();
  },

  checkInviteUrl() {
    const hash = window.location.hash || '';
    if (hash.includes('invite=')) {
      const raw = hash.split('invite=')[1]?.split('&')[0];
      if (raw) {
        try {
          const token = atob(decodeURIComponent(raw)).trim();
          if (token && (token.startsWith('ghp_') || token.startsWith('github_pat_') || token.length > 20)) {
            localStorage.setItem('lmi_github_token', token);
            // Limpiar la URL para no dejar el token expuesto en la barra de direcciones
            if (window.history && window.history.replaceState) {
              window.history.replaceState(null, '', window.location.pathname);
            }
            console.log('Clave de autorización configurada exitosamente mediante enlace de invitación.');
            setTimeout(() => {
              PlataApp.showToast('🎉 ¡Clave de autorización configurada automáticamente desde la invitación!', 'success');
            }, 500);
          }
        } catch (e) {
          console.error('Error decodificando token de invitación:', e);
        }
      }
    }
  },

  populateLoginDelegates() {
    const selectEl = document.getElementById('login-delegate-select');
    if (!selectEl) return;

    selectEl.innerHTML = '';
    const delegates = PlataApp.getDelegatesList();

    if (delegates.length === 0) {
      const opt = document.createElement('option');
      opt.value = '';
      opt.textContent = 'No hay delegados activos configurados';
      selectEl.appendChild(opt);
      return;
    }

    delegates.forEach(del => {
      const opt = document.createElement('option');
      opt.value = del.id;
      opt.textContent = `👤 ${del.name}`;
      selectEl.appendChild(opt);
    });

    // Recordar última selección si existe
    const lastDelId = localStorage.getItem('lmi_last_delegate_id');
    if (lastDelId && delegates.some(d => d.id === lastDelId)) {
      selectEl.value = lastDelId;
    }
  },

  updateTokenStatusUI() {
    const token = localStorage.getItem('lmi_github_token');
    const activeBox = document.getElementById('login-token-status-active');
    const missingBox = document.getElementById('login-token-status-missing');
    const topbarTokenLbl = document.getElementById('lbl-topbar-token-status');

    const hasToken = token && (token.startsWith('ghp_') || token.startsWith('github_pat_') || token.length > 20);

    if (activeBox && missingBox) {
      if (hasToken) {
        activeBox.style.display = 'flex';
        missingBox.style.display = 'none';
      } else {
        activeBox.style.display = 'none';
        missingBox.style.display = 'block';
      }
    }

    if (topbarTokenLbl) {
      topbarTokenLbl.textContent = hasToken ? 'Conexión OK' : 'Sin Clave';
      topbarTokenLbl.style.color = hasToken ? '#34d399' : '#fca5a5';
    }
  },

  showTokenInputInLogin() {
    const activeBox = document.getElementById('login-token-status-active');
    const missingBox = document.getElementById('login-token-status-missing');
    if (activeBox) activeBox.style.display = 'none';
    if (missingBox) {
      missingBox.style.display = 'block';
      const input = document.getElementById('login-github-token-input');
      if (input) {
        input.value = localStorage.getItem('lmi_github_token') || '';
        input.focus();
      }
    }
  },

  checkSession() {
    const raw = sessionStorage.getItem('lmi_plata_session') || localStorage.getItem('lmi_plata_session');
    if (!raw) {
      this.showLoginOverlay();
      return false;
    }

    try {
      const sess = JSON.parse(raw);
      if (sess && sess.name) {
        this.session = sess;
        this.unlockApp(sess);
        return true;
      }
    } catch (e) {
      console.warn('Sesión corrupta o inválida:', e);
    }

    this.showLoginOverlay();
    return false;
  },

  submitLogin(event) {
    if (event) event.preventDefault();

    const delegateId = document.getElementById('login-delegate-select')?.value;
    const pin = document.getElementById('login-pin-input')?.value.trim();
    const errorBox = document.getElementById('login-error-alert');

    // Validar PIN
    let isValid = false;
    let delegateObj = null;

    const delegates = PlataApp.getDelegatesList();
    const target = delegates.find(d => d.id === delegateId);
    if (target && String(target.pin).trim() === pin) {
      isValid = true;
      delegateObj = target;
    }

    if (!isValid) {
      if (errorBox) {
        errorBox.textContent = '❌ PIN incorrecto. Por favor verifica tu clave con el Administrador.';
        errorBox.style.display = 'block';
      }
      return;
    }

    if (errorBox) errorBox.style.display = 'none';

    // Sesión exitosa
    const sessionData = {
      id: delegateObj.id,
      name: delegateObj.name,
      role: 'delegado',
      loginTime: Date.now()
    };

    localStorage.setItem('lmi_last_delegate_id', delegateObj.id);
    localStorage.setItem('lmi_plata_session', JSON.stringify(sessionData));
    this.session = sessionData;

    this.unlockApp(sessionData);
  },

  unlockApp(sessionData) {
    const overlay = document.getElementById('plata-auth-overlay');
    const appContainer = document.getElementById('plata-app-container');
    const topbarUser = document.getElementById('lbl-topbar-username');
    const sidebarUser = document.getElementById('lbl-sidebar-username');
    const signedLbl = document.getElementById('lbl-plata-author-signed');

    if (overlay) overlay.style.display = 'none';
    if (appContainer) appContainer.style.display = 'flex';

    PlataApp.currentUser = sessionData.name || 'Delegado Plata';
    if (topbarUser) topbarUser.textContent = sessionData.name;
    if (sidebarUser) sidebarUser.textContent = sessionData.name;
    if (signedLbl) signedLbl.textContent = sessionData.name;

    this.updateTokenStatusUI();
  },

  showLoginOverlay() {
    const overlay = document.getElementById('plata-auth-overlay');
    const appContainer = document.getElementById('plata-app-container');

    if (overlay) overlay.style.display = 'flex';
    if (appContainer) appContainer.style.display = 'none';

    this.populateLoginDelegates();
    this.updateTokenStatusUI();

    const pinInput = document.getElementById('login-pin-input');
    if (pinInput) {
      pinInput.value = '';
      setTimeout(() => pinInput.focus(), 150);
    }
  },

  logout() {
    sessionStorage.removeItem('lmi_plata_session');
    localStorage.removeItem('lmi_plata_session');
    this.session = null;
    this.showLoginOverlay();
    PlataApp.showToast('Sesión cerrada correctamente.', 'info');
  },

  toggleLoginPinVisibility() {
    const input = document.getElementById('login-pin-input');
    const icon = document.getElementById('icon-login-pin-eye');
    if (!input) return;
    if (input.type === 'password') {
      input.type = 'text';
      if (icon) icon.className = 'fa-solid fa-eye-slash';
    } else {
      input.type = 'password';
      if (icon) icon.className = 'fa-solid fa-eye';
    }
  },

  // Token Modal
  openTokenModal() {
    const modal = document.getElementById('modal-plata-token');
    const input = document.getElementById('modal-token-input');
    const testResult = document.getElementById('modal-token-test-result');
    if (modal) modal.style.display = 'flex';
    if (input) input.value = localStorage.getItem('lmi_github_token') || '';
    if (testResult) testResult.style.display = 'none';
  },

  closeTokenModal() {
    const modal = document.getElementById('modal-plata-token');
    if (modal) modal.style.display = 'none';
  },

  toggleModalTokenVisibility() {
    const input = document.getElementById('modal-token-input');
    const icon = document.getElementById('icon-modal-token-eye');
    if (!input) return;
    if (input.type === 'password') {
      input.type = 'text';
      if (icon) icon.className = 'fa-solid fa-eye-slash';
    } else {
      input.type = 'password';
      if (icon) icon.className = 'fa-solid fa-eye';
    }
  },

  saveTokenFromModal() {
    const input = document.getElementById('modal-token-input');
    const val = (input?.value || '').trim();
    if (val) {
      localStorage.setItem('lmi_github_token', val);
      PlataApp.showToast('Clave de autorización guardada en este dispositivo.', 'success');
    } else {
      localStorage.removeItem('lmi_github_token');
      PlataApp.showToast('Clave eliminada.', 'info');
    }
    this.updateTokenStatusUI();
    this.closeTokenModal();
  },

  async testCurrentToken() {
    const input = document.getElementById('modal-token-input');
    const token = (input?.value || localStorage.getItem('lmi_github_token') || '').trim();
    const resultBox = document.getElementById('modal-token-test-result');
    if (!token) {
      if (resultBox) {
        resultBox.style.display = 'block';
        resultBox.style.background = 'rgba(239, 68, 68, 0.2)';
        resultBox.style.color = '#fca5a5';
        resultBox.textContent = '❌ Por favor escribe tu clave antes de probar.';
      }
      return;
    }

    if (resultBox) {
      resultBox.style.display = 'block';
      resultBox.style.background = 'rgba(56, 189, 248, 0.15)';
      resultBox.style.color = '#38bdf8';
      resultBox.textContent = '⏳ Verificando conexión con el servidor oficial...';
    }

    try {
      const res = await fetch('https://api.github.com/repos/DekaosSv/LMI---Plataforma', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/vnd.github+json'
        }
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(`HTTP ${res.status}: ${err.message || 'Clave no autorizada'}`);
      }
      const data = await res.json();
      const perms = data.permissions || {};
      const canPush = perms.push || false;

      if (resultBox) {
        if (canPush) {
          resultBox.style.background = 'rgba(16, 185, 129, 0.2)';
          resultBox.style.color = '#34d399';
          resultBox.textContent = `✅ Clave válida con conexión activa y permisos de publicación.`;
        } else {
          resultBox.style.background = 'rgba(245, 158, 11, 0.2)';
          resultBox.style.color = '#fbbf24';
          resultBox.textContent = `⚠️ Conexión activa, pero la clave no cuenta con permisos de escritura.`;
        }
      }
    } catch (err) {
      if (resultBox) {
        resultBox.style.background = 'rgba(239, 68, 68, 0.2)';
        resultBox.style.color = '#fca5a5';
        resultBox.textContent = `❌ Error: ${err.message}`;
      }
    }
  }
};

// =========================================================================
// MÓDULO PRINCIPAL DE LA APLICACIÓN (PLATA APP)
// =========================================================================
const PlataApp = {
  apiBase: null,
  data: null,
  currentUser: 'Delegado Plata 1',
  currentJornada: 1,
  currentMatchId: null,
  currentMatch: null,
  matchEvents: [],
  activeExportTab: 'standings',

  // ==========================================
  // INICIALIZACIÓN
  // ==========================================
  async init() {
    console.log('Iniciando Panel de Delegados - División Plata...');
    this.setupEventListeners();
    await this.loadData();
    PlataAuth.init();
  },

  // ==========================================
  // CONECTIVIDAD & API LOCAL Y NUBE
  // ==========================================
  async getApiBase() {
    if (this.apiBase !== null) return this.apiBase;
    const candidates = [];
    if (window.location.protocol.startsWith('http')) {
      candidates.push('');
    }
    candidates.push('http://127.0.0.1:8000');
    candidates.push('http://localhost:8000');

    for (const base of candidates) {
      try {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 1200);
        const res = await fetch(`${base}/api/status`, { signal: controller.signal });
        clearTimeout(timer);
        if (res.ok) {
          this.apiBase = base;
          return base;
        }
      } catch (e) {}
    }
    this.apiBase = '';
    return '';
  },

  async loadData() {
    this.setStatus('Conectando...', 'connecting');
    try {
      const base = await this.getApiBase();
      if (base) {
        const res = await fetch(`${base}/api/data?t=${Date.now()}`);
        if (res.ok) {
          this.data = await res.json();
          window.lmiData = this.data;
          this.setStatus('Online (Servidor Local)', 'ready');
          this.onDataLoaded();
          return;
        }
      }
    } catch (err) {
      console.warn('Servidor local no disponible, cargando datos desde frontend:', err);
    }

    // Si estamos en GitHub Pages o web, intentar cargar data.js fresco sin caché
    try {
      const res = await fetch(`data.js?_t=${Date.now()}`, { cache: 'no-store' });
      if (res.ok) {
        const text = await res.text();
        const prefix = 'var INITIAL_LMI_DATA = ';
        const idx = text.indexOf(prefix);
        if (idx !== -1) {
          const jsonStart = idx + prefix.length;
          const jsonEnd = text.lastIndexOf(';\n\nif (typeof window');
          const jsonStr = jsonEnd !== -1 ? text.substring(jsonStart, jsonEnd).trim() : text.substring(jsonStart).trim().replace(/;$/, '');
          this.data = JSON.parse(jsonStr);
          window.lmiData = this.data;
          this.setStatus('Sincronizado', 'ready');
          this.onDataLoaded();
          return;
        }
      }
    } catch (fetchErr) {
      console.warn('Fetch fresco de data.js falló, usando script tag:', fetchErr);
    }

    if (window.lmiData) {
      this.data = window.lmiData;
      this.setStatus('Sincronizado', 'ready');
    } else {
      this.setStatus('Error de Conexión', 'error');
      this.showToast('No se pudieron cargar los datos de la liga.', 'error');
      return;
    }

    this.onDataLoaded();
  },

  // Serializador seguro idéntico al backend
  serializeDataJs(dataObj) {
    const copy = JSON.parse(JSON.stringify(dataObj));
    if (copy.ruletaConfig && copy.ruletaConfig.telegramBotToken) {
      copy.ruletaConfig.telegramBotToken = '';
    }
    const header = '// Base de datos unificada LMI Temporada 10\n\nvar INITIAL_LMI_DATA = ';
    const jsonStr = JSON.stringify(copy, null, 2);
    const footer = ";\n\nif (typeof window !== 'undefined') {\n  window.lmiData = INITIAL_LMI_DATA;\n}\n";
    return header + jsonStr + footer;
  },

  // Guardar directamente en GitHub mediante la API Git Data (Blobs & Commits)
  // Soporta archivos de cualquier tamaño (bypassa el límite de 1MB de Contents API)
  async saveToGitHub(token, dataObj, commitMessage, maxRetries = 3) {
    const owner = 'DekaosSv';
    const repo = 'LMI---Plataforma';
    const branch = 'main';
    const filePath = 'data.js';

    const fullContent = this.serializeDataJs(dataObj);

    const headers = {
      'Authorization': `Bearer ${token.trim()}`,
      'Accept': 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28'
    };

    // 1. Crear Blob con codificación UTF-8
    const blobRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/blobs`, {
      method: 'POST',
      headers: { ...headers, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: fullContent,
        encoding: 'utf-8'
      })
    });
    if (!blobRes.ok) {
      const err = await blobRes.json().catch(() => ({}));
      throw new Error(`Error al procesar datos en el servidor (${blobRes.status}): ${err.message || 'Fallo al procesar archivo'}`);
    }
    const blobData = await blobRes.json();
    const blobSha = blobData.sha;

    // Retry loop para Tree + Commit + Update Ref (resuelve conflictos concurrentes / non-fast-forward 422)
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        // 2. Obtener el commit actual de la rama main
        const refRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/ref/heads/${branch}?_t=${Date.now()}`, {
          headers,
          cache: 'no-store'
        });
        if (!refRes.ok) {
          const err = await refRes.json().catch(() => ({}));
          throw new Error(`Error de conexión con el servidor (${refRes.status}): ${err.message || 'Clave inválida o sin permisos'}`);
        }
        const refData = await refRes.json();
        const latestCommitSha = refData.object.sha;

        // 3. Crear Tree apuntando al nuevo blob de data.js
        const treeRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/trees`, {
          method: 'POST',
          headers: { ...headers, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            base_tree: latestCommitSha,
            tree: [
              {
                path: filePath,
                mode: '100644',
                type: 'blob',
                sha: blobSha
              }
            ]
          })
        });
        if (!treeRes.ok) {
          const err = await treeRes.json().catch(() => ({}));
          throw new Error(`Error creando Árbol Git (${treeRes.status}): ${err.message || 'Fallo de estructura'}`);
        }
        const treeData = await treeRes.json();
        const newTreeSha = treeData.sha;

        // 4. Crear Commit
        const commitRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/commits`, {
          method: 'POST',
          headers: { ...headers, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: commitMessage || `Registro División Plata por ${this.currentUser}`,
            tree: newTreeSha,
            parents: [latestCommitSha]
          })
        });
        if (!commitRes.ok) {
          const err = await commitRes.json().catch(() => ({}));
          throw new Error(`Error creando Commit (${commitRes.status}): ${err.message || 'Fallo al commitear'}`);
        }
        const commitData = await commitRes.json();
        const newCommitSha = commitData.sha;

        // 5. Actualizar la referencia refs/heads/main
        const updateRefRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/refs/heads/${branch}`, {
          method: 'PATCH',
          headers: { ...headers, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            sha: newCommitSha,
            force: false
          })
        });
        if (updateRefRes.ok) {
          return { success: true, commitSha: newCommitSha };
        }

        // Si falló por conflicto de referencia (422 o 409), reintentar
        const err = await updateRefRes.json().catch(() => ({}));
        if ((updateRefRes.status === 422 || updateRefRes.status === 409) && attempt < maxRetries) {
          console.warn(`Conflicto de publicación en main (422/409), reintentando intento ${attempt + 1}/${maxRetries}...`);
          await new Promise(r => setTimeout(r, 600 * attempt));
          continue;
        }

        throw new Error(`Error actualizando rama main (${updateRefRes.status}): ${err.message || 'Fallo al publicar'}`);
      } catch (err) {
        if (attempt >= maxRetries) throw err;
      }
    }
  },

  async getLatestRemoteData(token = null) {
    // 1. Intentar obtener datos directamente de la GitHub API (100% fresco, sin caché de CDN)
    if (token) {
      try {
        const owner = 'DekaosSv';
        const repo = 'LMI---Plataforma';
        const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/data.js?ref=main`, {
          headers: {
            'Authorization': `Bearer ${token.trim()}`,
            'Accept': 'application/vnd.github.raw+json',
            'X-GitHub-Api-Version': '2022-11-28'
          },
          cache: 'no-store'
        });
        if (res.ok) {
          const text = await res.text();
          const prefix = 'var INITIAL_LMI_DATA = ';
          const idx = text.indexOf(prefix);
          if (idx !== -1) {
            const jsonStart = idx + prefix.length;
            const endRegex = /;\s*(?:\r?\n)+\s*if\s*\(typeof window/;
            const match = text.substring(jsonStart).match(endRegex);
            let jsonStr = '';
            if (match && match.index !== undefined) {
              jsonStr = text.substring(jsonStart, jsonStart + match.index).trim();
            } else {
              jsonStr = text.substring(jsonStart).replace(/;\s*if\s*\(typeof window[\s\S]*$/, '').trim().replace(/;$/, '');
            }
            return JSON.parse(jsonStr);
          }
        }
      } catch (e) {
        console.warn('No se pudo obtener data.js vía GitHub API, usando CDN raw con cache-buster:', e);
      }
    }

    // 2. Fallback a raw CDN con timestamp único
    try {
      const res = await fetch(`https://raw.githubusercontent.com/DekaosSv/LMI---Plataforma/main/data.js?_t=${Date.now()}`, { cache: 'no-store' });
      if (res.ok) {
        const text = await res.text();
        const prefix = 'var INITIAL_LMI_DATA = ';
        const idx = text.indexOf(prefix);
        if (idx !== -1) {
          const jsonStart = idx + prefix.length;
          const endRegex = /;\s*(?:\r?\n)+\s*if\s*\(typeof window/;
          const match = text.substring(jsonStart).match(endRegex);
          let jsonStr = '';
          if (match && match.index !== undefined) {
            jsonStr = text.substring(jsonStart, jsonStart + match.index).trim();
          } else {
            jsonStr = text.substring(jsonStart).replace(/;\s*if\s*\(typeof window[\s\S]*$/, '').trim().replace(/;$/, '');
          }
          return JSON.parse(jsonStr);
        }
      }
    } catch (e) {
      console.warn('No se pudo descargar data.js remoto fresco:', e);
    }
    return null;
  },

  async mergeWithLatestRemote(matchId, serializedEvents, historyRecord, token = null) {
    const remoteData = await this.getLatestRemoteData(token);
    if (!remoteData) return this.data;

    // 1. Fusionar TODOS los partidos de fixtures.plata
    // Si un partido fue jugado en el servidor remoto O localmente, se conserva como jugado para NUNCA revertir resultados
    const remotePlata = (remoteData.fixtures && remoteData.fixtures.plata) || [];
    const localPlata = (this.data && this.data.fixtures && this.data.fixtures.plata) || [];

    localPlata.forEach(lJornada => {
      const rJornada = remotePlata.find(r => r.jornada === lJornada.jornada);
      if (rJornada && Array.isArray(lJornada.matches)) {
        lJornada.matches.forEach(lMatch => {
          const rMatch = (rJornada.matches || []).find(m => m.id === lMatch.id);
          if (rMatch) {
            if (lMatch.id === matchId && this.currentMatch) {
              // El partido que se está guardando en este momento tiene máxima prioridad
              rMatch.played = this.currentMatch.played;
              rMatch.annulled = !!this.currentMatch.annulled;
              rMatch.score1 = this.currentMatch.score1;
              rMatch.score2 = this.currentMatch.score2;
              rMatch.events = this.currentMatch.events || [];
              rMatch.registeredBy = this.currentMatch.registeredBy;
              rMatch.registeredAt = this.currentMatch.registeredAt;
            } else if (lMatch.played && !rMatch.played) {
              // Si localmente estaba jugado y en remoto no, conservar el jugado local
              rMatch.played = true;
              rMatch.annulled = !!lMatch.annulled;
              rMatch.score1 = lMatch.score1;
              rMatch.score2 = lMatch.score2;
              rMatch.events = lMatch.events || [];
              rMatch.registeredBy = lMatch.registeredBy;
              rMatch.registeredAt = lMatch.registeredAt;
            }
          }
        });
      }
    });

    // 2. Aplicar estadísticas del partido actual a los jugadores en remoteData
    if (Array.isArray(serializedEvents) && serializedEvents.length > 0 && Array.isArray(remoteData.players)) {
      serializedEvents.forEach(ev => {
        if (!ev.playerId) return;
        const player = remoteData.players.find(p => p.id === ev.playerId);
        if (!player) return;

        const cnt = parseInt(ev.count, 10) || 1;
        const evTeamId = ev.teamId || player.teamId;

        if (!player.statsByTeam) player.statsByTeam = {};
        if (evTeamId && !player.statsByTeam[evTeamId]) {
          player.statsByTeam[evTeamId] = {
            teamId: evTeamId,
            goals: 0, assists: 0,
            goals_liga: 0, assists_liga: 0,
            goals_champions: 0, assists_champions: 0,
            goals_estelar: 0, assists_estelar: 0
          };
        }
        const tEntry = evTeamId ? player.statsByTeam[evTeamId] : null;

        if (ev.type === 'gol') {
          player.goals = (player.goals || 0) + cnt;
          player.goals_liga = (player.goals_liga || 0) + cnt;
          if (tEntry) {
            tEntry.goals = (tEntry.goals || 0) + cnt;
            tEntry.goals_liga = (tEntry.goals_liga || 0) + cnt;
          }
        } else if (ev.type === 'asistencia') {
          player.assists = (player.assists || 0) + cnt;
          player.assists_liga = (player.assists_liga || 0) + cnt;
          if (tEntry) {
            tEntry.assists = (tEntry.assists || 0) + cnt;
            tEntry.assists_liga = (tEntry.assists_liga || 0) + cnt;
          }
        }
      });
    }

    // 3. Sincronizar matchHistory (mantener los remotos y agregar los locales que falten)
    if (!remoteData.matchHistory) remoteData.matchHistory = [];
    if (historyRecord) {
      const alreadyExists = remoteData.matchHistory.some(h => h.id === historyRecord.id || (h.fixtureMatchId === historyRecord.fixtureMatchId && h.timestamp === historyRecord.timestamp));
      if (!alreadyExists) {
        remoteData.matchHistory.unshift(historyRecord);
      }
    }
    // Preservar cualquier otro historial local que no estuviera en remoto
    if (Array.isArray(this.data && this.data.matchHistory)) {
      this.data.matchHistory.forEach(lh => {
        const inRemote = remoteData.matchHistory.some(rh => rh.id === lh.id || (rh.fixtureMatchId === lh.fixtureMatchId && rh.timestamp === lh.timestamp));
        if (!inRemote) {
          remoteData.matchHistory.push(lh);
        }
      });
      remoteData.matchHistory.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
    }

    this.data = remoteData;
    window.lmiData = remoteData;
    return remoteData;
  },

  // Guardado Inteligente: Local o Nube según entorno
  async saveData(customCommitMsg = null, silent = false) {
    if (!this.data) return false;

    const isLocal = window.location.protocol.startsWith('http:') && 
      (window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost');
    const githubToken = localStorage.getItem('lmi_github_token');

    // 1. Si está en servidor local con Python activo, guardar localmente
    if (isLocal) {
      try {
        const base = await this.getApiBase();
        if (base) {
          this.setStatus('Guardando local...', 'connecting');
          const res = await fetch(`${base}/api/save`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.data)
          });
          if (res.ok) {
            this.setStatus('Online (Guardado Local)', 'ready');
            if (!silent) {
              this.showToast('¡Datos guardados con éxito en data.js local!', 'success');
            }
            return true;
          }
        }
      } catch (err) {
        console.warn('Servidor local no respondió, intentando GitHub API...', err);
      }
    }

    // 2. Si no hay servidor local, guardar directamente en la nube
    if (!githubToken) {
      this.setStatus('Falta Autorización', 'error');
      this.showToast('⚠️ No se detectó la clave de autorización oficial. Abre la web usando el Enlace de Invitación oficial que te compartió el Administrador.', 'error');
      PlataAuth.openTokenModal();
      return false;
    }

    this.setStatus('Sincronizando con la web oficial...', 'connecting');
    if (!silent) {
      this.showToast('🚀 Sincronizando y publicando en la web...', 'info');
    }

    try {
      // Sincronizar y fusionar con los datos remotos más frescos de la plataforma para nunca sobreescribir otros registros
      const mId = this.currentMatchId || (this.currentMatch && this.currentMatch.id);
      if (mId) {
        await this.mergeWithLatestRemote(mId, this.lastSavedEvents || [], this.lastHistoryRecord || null, githubToken);
      }

      const defaultMsg = `Registro Jornada ${this.currentJornada}: ${this.currentMatch ? (this.currentMatch.team1Id + ' vs ' + this.currentMatch.team2Id) : 'División Plata'} [${this.currentUser}]`;
      const commitMsg = customCommitMsg || defaultMsg;
      const res = await this.saveToGitHub(githubToken, this.data, commitMsg);

      if (res && res.success) {
        this.setStatus('Sincronizado', 'ready');
        if (!silent) {
          this.showToast(`🎉 ¡Partido registrado por ${this.currentUser} y publicado en la web con éxito!`, 'success');
        }
        return true;
      }
    } catch (err) {
      console.error('Error guardando en la web oficial:', err);
      this.setStatus('Error de Publicación', 'error');
      this.showToast(`Error al publicar en la web: ${err.message}`, 'error');
      return false;
    }

    return false;
  },

  setStatus(text, state) {
    const badge = document.getElementById('plata-status-badge');
    const textEl = document.getElementById('plata-status-text');
    if (!badge || !textEl) return;
    textEl.textContent = text;
    badge.className = 'status-badge ' + (state || '');
  },

  showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.className = `toast show ${type}`;
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => {
      toast.className = 'toast';
    }, 4000);
  },

  getDelegatesList() {
    const cfg = (this.data && this.data.plataDelegatesConfig) ? this.data.plataDelegatesConfig : {};
    if (Array.isArray(cfg.delegates) && cfg.delegates.length > 0) {
      const defaultPins = ['1234', '5678', '9012'];
      return cfg.delegates
        .filter(d => d && (d.active !== false)) // Solo delegados activos
        .map((d, i) => {
          if (typeof d === 'string') {
            return { id: `del${i + 1}`, name: d, pin: defaultPins[i] || '1234', active: true };
          }
          return {
            id: d.id || `del_${i}`,
            name: d.name || `Delegado ${i + 1}`,
            pin: String(d.pin || '1234'),
            active: d.active !== false
          };
        });
    }
    return [
      { id: 'del1', name: 'Daniel', pin: '1234', active: true },
      { id: 'del2', name: 'Esteban Arturo', pin: '5678', active: true }
    ];
  },

  // ==========================================
  // CONFIGURACIÓN DE NAVEGACIÓN Y EVENTOS
  // ==========================================
  setupEventListeners() {
    // Nav buttons
    document.querySelectorAll('.admin-sidebar .nav-btn[data-view]').forEach(btn => {
      btn.addEventListener('click', () => {
        const viewId = btn.getAttribute('data-view');
        this.switchView(viewId);
      });
    });

    // Jornada select change
    const jSelect = document.getElementById('plata-jornada-select');
    if (jSelect) {
      jSelect.addEventListener('change', (e) => {
        this.currentJornada = parseInt(e.target.value, 10) || 1;
        this.onJornadaChange();
      });
    }

    // Fixture match select change
    const fSelect = document.getElementById('plata-fixture-match-select');
    if (fSelect) {
      fSelect.addEventListener('change', (e) => {
        this.onMatchSelected(e.target.value);
      });
    }

    // Historial filters
    const hJornadaFilter = document.getElementById('plata-history-jornada-filter');
    if (hJornadaFilter) {
      hJornadaFilter.addEventListener('change', () => this.renderMatchHistory());
    }
    const hAuthorFilter = document.getElementById('plata-history-author-filter');
    if (hAuthorFilter) {
      hAuthorFilter.addEventListener('change', () => this.renderMatchHistory());
    }
  },

  switchView(viewId) {
    document.querySelectorAll('.admin-sidebar .nav-btn[data-view]').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-view') === viewId);
    });

    document.querySelectorAll('.module-view').forEach(v => {
      v.classList.toggle('active', v.id === viewId);
    });

    if (viewId === 'view-plata-history') {
      this.renderMatchHistory();
    } else if (viewId === 'view-plata-exports') {
      this.renderActiveExport();
    }
  },

  // ==========================================
  // CARGA Y RENDERIZADO INICIAL
  // ==========================================
  onDataLoaded() {
    this.populateJornadasDropdown();
    this.onJornadaChange();
    this.populateHistoryFilters();
    this.renderMatchHistory();
    this.renderActiveExport();
    PlataAuth.populateLoginDelegates();
  },

  // ==========================================
  // VERIFICACIÓN DE FECHAS AUTORIZADAS
  // ==========================================
  isJornadaAllowed(jornadaNum) {
    if (!this.data || !this.data.plataDelegatesConfig) {
      return jornadaNum === 1; // Default: Solo Jornada 1
    }
    const cfg = this.data.plataDelegatesConfig;
    if (cfg.allowAllJornadas === true) return true;
    if (Array.isArray(cfg.allowedJornadas)) {
      return cfg.allowedJornadas.includes(jornadaNum);
    }
    return jornadaNum === 1;
  },

  getAllowedJornadasList() {
    if (!this.data || !this.data.plataDelegatesConfig) return [1];
    const cfg = this.data.plataDelegatesConfig;
    if (cfg.allowAllJornadas === true) {
      return Array.from({ length: 26 }, (_, i) => i + 1);
    }
    return Array.isArray(cfg.allowedJornadas) ? cfg.allowedJornadas : [1];
  },

  populateJornadasDropdown() {
    const sel = document.getElementById('plata-jornada-select');
    const pendingSel = document.getElementById('export-pending-jornada-select');
    if (!sel) return;

    sel.innerHTML = '';
    if (pendingSel) pendingSel.innerHTML = '';

    for (let j = 1; j <= 26; j++) {
      const allowed = this.isJornadaAllowed(j);
      const icon = allowed ? '🟢' : '🔒';
      const label = `${icon} Jornada ${j}${allowed ? '' : ' (Bloqueada)'}`;

      const opt = document.createElement('option');
      opt.value = j;
      opt.textContent = label;
      sel.appendChild(opt);

      if (pendingSel) {
        const pOpt = document.createElement('option');
        pOpt.value = j;
        pOpt.textContent = `Jornada ${j}`;
        pendingSel.appendChild(pOpt);
      }
    }

    sel.value = this.currentJornada;
  },

  updatePermissionBanner() {
    const bannerContainer = document.getElementById('plata-jornadas-permission-banner');
    if (!bannerContainer) return;

    const allowedList = this.getAllowedJornadasList();
    const isAll = (this.data?.plataDelegatesConfig?.allowAllJornadas === true) || (allowedList.length >= 26);

    if (isAll) {
      bannerContainer.innerHTML = `
        <div class="plata-banner-allowed">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <i class="fa-solid fa-lock-open" style="color: #34d399; font-size: 1.3rem;"></i>
            <div>
              <strong style="color: #34d399; font-size: 0.95rem;">Todas las Jornadas Habilitadas</strong>
              <div style="font-size: 0.8rem; color: #94a3b8;">La Administración Principal ha autorizado el registro libre de cualquier jornada (1 al 26).</div>
            </div>
          </div>
          <span class="badge" style="background: rgba(16, 185, 129, 0.25); color: #34d399; border: 1px solid #10b981; font-weight: 800;">Acceso Completo</span>
        </div>
      `;
    } else {
      const listStr = allowedList.length > 0 
        ? allowedList.map(j => `J${j}`).join(', ') 
        : 'Ninguna (Todas bloqueadas)';
      bannerContainer.innerHTML = `
        <div class="plata-banner-allowed" style="border-color: rgba(56, 189, 248, 0.4); background: linear-gradient(135deg, rgba(56, 189, 248, 0.12) 0%, rgba(15, 23, 42, 0.8) 100%);">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <i class="fa-solid fa-shield-halved" style="color: #38bdf8; font-size: 1.3rem;"></i>
            <div>
              <strong style="color: #38bdf8; font-size: 0.95rem;">Control de Fechas de la Administración</strong>
              <div style="font-size: 0.8rem; color: #cbd5e1;">
                Fechas autorizadas actualmente para registrar: <span style="color: #ffd100; font-weight: 800;">${listStr}</span>
              </div>
            </div>
          </div>
          <span class="badge" style="background: rgba(56, 189, 248, 0.25); color: #38bdf8; border: 1px solid #38bdf8; font-weight: 800;">${allowedList.length} Fechas Activas</span>
        </div>
      `;
    }
  },

  // ==========================================
  // CAMBIO DE JORNADA & CARGA DE PARTIDOS
  // ==========================================
  onJornadaChange() {
    this.updatePermissionBanner();

    const isAllowed = this.isJornadaAllowed(this.currentJornada);
    const blockedAlert = document.getElementById('plata-match-blocked-alert');
    const duelBox = document.getElementById('plata-duel-box');
    const authPill = document.getElementById('lbl-match-auth-pill');
    const btnSave = document.getElementById('btn-save-plata-match');

    if (!isAllowed) {
      if (blockedAlert) blockedAlert.style.display = 'flex';
      if (duelBox) {
        duelBox.style.opacity = '0.35';
        duelBox.style.pointerEvents = 'none';
      }
      if (authPill) {
        authPill.textContent = '🔒 Fecha Bloqueada';
        authPill.style.background = 'rgba(239, 68, 68, 0.2)';
        authPill.style.color = '#f87171';
        authPill.style.borderColor = '#ef4444';
      }
      if (btnSave) {
        btnSave.disabled = true;
        btnSave.title = 'Esta fecha está bloqueada por la administración principal';
      }
    } else {
      if (blockedAlert) blockedAlert.style.display = 'none';
      if (duelBox) {
        duelBox.style.opacity = '1';
        duelBox.style.pointerEvents = 'auto';
      }
      if (authPill) {
        authPill.textContent = '🟢 Fecha Autorizada';
        authPill.style.background = 'rgba(16, 185, 129, 0.2)';
        authPill.style.color = '#34d399';
        authPill.style.borderColor = '#10b981';
      }
      if (btnSave) {
        btnSave.disabled = false;
        btnSave.title = '';
      }
    }

    this.populateMatchesForCurrentJornada();
  },

  populateMatchesForCurrentJornada() {
    const matchSelect = document.getElementById('plata-fixture-match-select');
    const restingBanner = document.getElementById('plata-resting-banner');
    if (!matchSelect) return;

    matchSelect.innerHTML = '<option value="">-- Seleccionar Partido --</option>';

    const rounds = (this.data && this.data.fixtures) ? (this.data.fixtures.plata || []) : [];
    const currentRound = rounds.find(r => r.jornada === this.currentJornada);

    if (!currentRound || !currentRound.matches || currentRound.matches.length === 0) {
      const opt = document.createElement('option');
      opt.value = '';
      opt.textContent = 'No hay partidos programados para esta jornada';
      matchSelect.appendChild(opt);
      if (restingBanner) restingBanner.style.display = 'none';
      this.clearDuelBox();
      return;
    }

    // Descanso
    if (currentRound.descansa) {
      const restingTeam = this.getTeamById(currentRound.descansa);
      const restingName = restingTeam ? restingTeam.name : currentRound.descansa;
      if (restingBanner) {
        restingBanner.innerHTML = `<i class="fa-solid fa-bed"></i> <strong>Descansa en esta jornada:</strong> ${restingName}`;
        restingBanner.style.display = 'block';
      }
    } else if (restingBanner) {
      restingBanner.style.display = 'none';
    }

    // Partidos
    currentRound.matches.forEach(m => {
      const t1 = this.getTeamById(m.team1Id) || { name: m.team1Id };
      const t2 = this.getTeamById(m.team2Id) || { name: m.team2Id };
      const statusIcon = m.annulled ? `🚫 [ANULADO]` : (m.played ? `✅ [${m.score1} - ${m.score2}]` : '⏳ [Pendiente]');
      const authorTag = m.registeredBy ? ` • ${m.registeredBy}` : '';

      const opt = document.createElement('option');
      opt.value = m.id;
      opt.textContent = `${statusIcon} ${t1.name} vs ${t2.name}${authorTag}`;
      matchSelect.appendChild(opt);
    });

    // Seleccionar el primer partido automáticamente
    if (currentRound.matches.length > 0) {
      matchSelect.value = currentRound.matches[0].id;
      this.onMatchSelected(currentRound.matches[0].id);
    }
  },

  onMatchSelected(matchId) {
    if (!matchId) {
      this.clearDuelBox();
      return;
    }
    this.currentMatchId = matchId;
    const rounds = (this.data && this.data.fixtures) ? (this.data.fixtures.plata || []) : [];
    let target = null;
    for (const r of rounds) {
      target = (r.matches || []).find(m => m.id === matchId);
      if (target) break;
    }

    if (!target) {
      this.clearDuelBox();
      return;
    }

    this.currentMatch = target;
    const t1 = this.getTeamById(target.team1Id) || { id: target.team1Id, name: target.team1Id, logo: 'Logos Equipos/default.png' };
    const t2 = this.getTeamById(target.team2Id) || { id: target.team2Id, name: target.team2Id, logo: 'Logos Equipos/default.png' };

    // Duel box info
    document.getElementById('plata-t1-name').textContent = t1.name;
    document.getElementById('plata-t2-name').textContent = t2.name;
    document.getElementById('plata-t1-logo').src = t1.logo || 'Logos Equipos/default.png';
    document.getElementById('plata-t2-logo').src = t2.logo || 'Logos Equipos/default.png';

    const s1Input = document.getElementById('plata-score1');
    const s2Input = document.getElementById('plata-score2');
    const statusLabel = document.getElementById('plata-match-status-label');

    s1Input.value = (target.played && target.score1 !== null) ? target.score1 : 0;
    s2Input.value = (target.played && target.score2 !== null) ? target.score2 : 0;

    if (target.annulled) {
      const byUser = target.registeredBy ? ` por ${target.registeredBy}` : '';
      statusLabel.textContent = `🚫 PARTIDO ANULADO (0 Puntos para ambos)${byUser}`;
      statusLabel.style.color = '#f87171';
    } else if (target.played) {
      const byUser = target.registeredBy ? ` por ${target.registeredBy}` : '';
      statusLabel.textContent = `Partido Jugado (${target.score1}-${target.score2})${byUser}`;
      statusLabel.style.color = '#34d399';
    } else {
      statusLabel.textContent = 'Marcador Final (Pendiente de Registrar)';
      statusLabel.style.color = 'var(--text-muted)';
    }

    // Cargar eventos del partido
    this.matchEvents = [];
    if (target.events && Array.isArray(target.events)) {
      this.matchEvents = target.events.map(ev => ({
        id: 'ev_' + Math.random().toString(36).substr(2, 9),
        playerId: ev.playerId,
        teamId: ev.teamId || this.getPlayerTeamId(ev.playerId) || t1.id,
        type: ev.type || 'gol',
        count: ev.count || 1
      }));
    }

    this.renderEventsRows();
    this.validateEventsVsScores();
  },

  clearDuelBox() {
    this.currentMatchId = null;
    this.currentMatch = null;
    this.matchEvents = [];
    document.getElementById('plata-t1-name').textContent = 'Equipo Local';
    document.getElementById('plata-t2-name').textContent = 'Equipo Visitante';
    document.getElementById('plata-t1-logo').src = 'Logos Equipos/default.png';
    document.getElementById('plata-t2-logo').src = 'Logos Equipos/default.png';
    document.getElementById('plata-score1').value = 0;
    document.getElementById('plata-score2').value = 0;
    document.getElementById('plata-match-status-label').textContent = 'Sin Partido Seleccionado';
    this.renderEventsRows();
  },

  onScoreChange() {
    this.validateEventsVsScores();
  },

  // ==========================================
  // ESTUDIO DE EVENTOS (GOLES Y ASISTENCIAS POR EQUIPO)
  // ==========================================
  addEventRowForTeam(teamSide, type = 'gol') {
    if (!this.currentMatch) {
      this.showToast('Primero selecciona un partido para registrar eventos.', 'warning');
      return;
    }

    const teamId = teamSide === 'team2' ? this.currentMatch.team2Id : this.currentMatch.team1Id;
    const team = this.getTeamById(teamId);
    const teamPlayers = this.getPlayersByTeam(teamId);

    if (teamPlayers.length === 0) {
      this.showToast(`No hay jugadores registrados en la plantilla de ${team ? team.name : 'este equipo'}.`, 'error');
      return;
    }

    // Comprobar qué jugadores de este equipo ya tienen asignado este tipo de estadística
    const usedPlayerIds = new Set(
      this.matchEvents
        .filter(ev => ev.type === type && (ev.teamId === teamId || this.getPlayerTeamId(ev.playerId) === teamId))
        .map(ev => ev.playerId)
    );

    // Buscar el primer jugador libre para este tipo de evento
    const availablePlayer = teamPlayers.find(p => !usedPlayerIds.has(p.id));

    if (!availablePlayer) {
      this.showToast(`⚠️ Todos los jugadores disponibles de ${team ? team.name : 'este club'} ya tienen registrado un ${type === 'gol' ? 'gol' : 'asistencia'}. Modifica la cantidad en la fila existente en vez de duplicarla.`, 'warning');
      return;
    }

    this.matchEvents.push({
      id: 'ev_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
      playerId: availablePlayer.id,
      teamId: teamId,
      type: type,
      count: 1
    });

    this.renderEventsRows();
    this.validateEventsVsScores();
  },

  addEventRow(type = 'gol') {
    this.addEventRowForTeam('team1', type);
  },

  removeEventRow(evId) {
    this.matchEvents = this.matchEvents.filter(ev => ev.id !== evId);
    this.renderEventsRows();
    this.validateEventsVsScores();
  },

  updateEventType(evId, newType) {
    const ev = this.matchEvents.find(e => e.id === evId);
    if (!ev) return;

    // Verificar si el jugador ya tiene una fila de ese nuevo tipo
    const isDuplicate = this.matchEvents.some(e => e.id !== evId && e.playerId === ev.playerId && e.type === newType);
    if (isDuplicate) {
      const p = this.getPlayerById(ev.playerId);
      this.showToast(`⚠️ El jugador ${p ? p.name : ''} ya tiene registrado un ${newType === 'gol' ? 'gol' : 'asistencia'}. Modifica la cantidad en la fila existente.`, 'warning');
    }

    ev.type = newType;
    this.renderEventsRows();
    this.validateEventsVsScores();
  },

  updateEventPlayer(evId, newPlayerId) {
    const ev = this.matchEvents.find(e => e.id === evId);
    if (!ev) return;

    const isDuplicate = this.matchEvents.some(e => e.id !== evId && e.playerId === newPlayerId && e.type === ev.type);
    if (isDuplicate) {
      const p = this.getPlayerById(newPlayerId);
      this.showToast(`⚠️ El jugador ${p ? p.name : ''} ya tiene una fila de ${ev.type === 'gol' ? 'gol' : 'asistencia'}. Incrementa la cantidad en esa fila en lugar de agregar otra.`, 'warning');
    }

    ev.playerId = newPlayerId;
    ev.teamId = this.getPlayerTeamId(newPlayerId) || ev.teamId;
    this.renderEventsRows();
    this.validateEventsVsScores();
  },

  updateEventCount(evId, countStr) {
    const ev = this.matchEvents.find(e => e.id === evId);
    if (!ev) return;
    const count = Math.max(1, parseInt(countStr, 10) || 1);
    ev.count = count;
    this.validateEventsVsScores();
  },

  validateDuplicatePlayers() {
    const counts = {};
    this.matchEvents.forEach(ev => {
      if (ev.playerId) {
        const key = `${ev.playerId}_${ev.type}`;
        counts[key] = (counts[key] || 0) + 1;
      }
    });

    const duplicateKeys = new Set(Object.keys(counts).filter(k => counts[k] > 1));
    return duplicateKeys;
  },

  renderEventsRows() {
    const containerT1 = document.getElementById('plata-events-t1-container');
    const containerT2 = document.getElementById('plata-events-t2-container');
    const legacyContainer = document.getElementById('plata-events-container');

    if (!this.currentMatch) {
      if (containerT1) containerT1.innerHTML = '<p style="color: var(--text-muted); text-align: center; padding: 1.25rem; font-size: 0.8rem; margin: 0;">Selecciona un partido.</p>';
      if (containerT2) containerT2.innerHTML = '<p style="color: var(--text-muted); text-align: center; padding: 1.25rem; font-size: 0.8rem; margin: 0;">Selecciona un partido.</p>';
      if (legacyContainer) legacyContainer.innerHTML = '';
      return;
    }

    const t1 = this.getTeamById(this.currentMatch.team1Id) || { id: this.currentMatch.team1Id, name: 'Local', logo: 'Logos Equipos/default.png' };
    const t2 = this.getTeamById(this.currentMatch.team2Id) || { id: this.currentMatch.team2Id, name: 'Visitante', logo: 'Logos Equipos/default.png' };

    // Actualizar encabezados de tarjetas de equipos
    const t1NameEl = document.getElementById('plata-events-t1-name');
    const t2NameEl = document.getElementById('plata-events-t2-name');
    const t1BadgeEl = document.getElementById('plata-events-t1-badge');
    const t2BadgeEl = document.getElementById('plata-events-t2-badge');
    if (t1NameEl) t1NameEl.textContent = t1.name;
    if (t2NameEl) t2NameEl.textContent = t2.name;
    if (t1BadgeEl && t1.logo) t1BadgeEl.src = t1.logo;
    if (t2BadgeEl && t2.logo) t2BadgeEl.src = t2.logo;

    const t1Players = this.getPlayersByTeam(t1.id);
    const t2Players = this.getPlayersByTeam(t2.id);

    // Asegurar que cada evento tenga asignado id único y teamId correcto
    this.matchEvents.forEach(ev => {
      if (!ev.id) ev.id = 'ev_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5);
      if (!ev.teamId) ev.teamId = this.getPlayerTeamId(ev.playerId) || t1.id;
    });

    const duplicateKeys = this.validateDuplicatePlayers();

    const renderRowsForTeam = (teamId, teamPlayers, containerEl, emptyClass, emptyText) => {
      if (!containerEl) return;
      const teamEvents = this.matchEvents.filter(ev => {
        const evTeam = ev.teamId || this.getPlayerTeamId(ev.playerId);
        return evTeam === teamId;
      });

      if (teamEvents.length === 0) {
        containerEl.innerHTML = `
          <p style="color: var(--text-muted); text-align: center; padding: 1.25rem; font-size: 0.8rem; margin: 0;" class="${emptyClass}">
            ${emptyText}
          </p>
        `;
        return;
      }

      let html = '';
      teamEvents.forEach(ev => {
        const isGol = ev.type === 'gol';
        const typeBadgeBg = isGol ? 'rgba(56, 189, 248, 0.15)' : 'rgba(167, 139, 250, 0.15)';
        const typeBadgeColor = isGol ? '#38bdf8' : '#a78bfa';
        const typeIcon = isGol ? 'fa-futbol' : 'fa-hands-clapping';
        const isDuplicate = duplicateKeys.has(`${ev.playerId}_${ev.type}`);

        html += `
          <div style="display: flex; flex-direction: column; gap: 0.35rem; background: ${isDuplicate ? 'rgba(239, 68, 68, 0.12)' : 'rgba(15, 23, 42, 0.75)'}; padding: 0.65rem 0.8rem; border-radius: 8px; border: 1.5px solid ${isDuplicate ? '#ef4444' : 'var(--border-color)'};">
            <div style="display: flex; gap: 0.45rem; align-items: center; flex-wrap: wrap;">
              <!-- Badge de Tipo: Gol o Asistencia -->
              <div style="display: flex; align-items: center; gap: 0.3rem;">
                <span style="background: ${typeBadgeBg}; color: ${typeBadgeColor}; padding: 0.25rem 0.5rem; border-radius: 6px; font-weight: 800; font-size: 0.75rem; display: inline-flex; align-items: center; gap: 0.25rem;">
                  <i class="fa-solid ${typeIcon}"></i> ${isGol ? 'GOL' : 'ASIST'}
                </span>
                <select class="form-select form-select-sm" style="font-size: 0.74rem; padding: 0.2rem 0.35rem; font-weight: 700;" onchange="PlataApp.updateEventType('${ev.id}', this.value)">
                  <option value="gol" ${isGol ? 'selected' : ''}>Gol</option>
                  <option value="asistencia" ${!isGol ? 'selected' : ''}>Asistencia</option>
                </select>
              </div>

              <!-- Selector de Jugador (Exclusivo de este equipo) -->
              <div style="flex: 1; min-width: 170px;">
                <select class="form-select form-select-sm" style="width: 100%; font-weight: 700; font-size: 0.8rem; ${isDuplicate ? 'border-color: #ef4444; color: #fca5a5;' : ''}" onchange="PlataApp.updateEventPlayer('${ev.id}', this.value)">
                  ${teamPlayers.map(p => {
                    const isSelected = (p.id === ev.playerId);
                    const isUsedInOther = this.matchEvents.some(e => e.id !== ev.id && e.playerId === p.id && e.type === ev.type);
                    return `
                      <option value="${p.id}" ${isSelected ? 'selected' : ''} ${isUsedInOther && !isSelected ? 'disabled style="color: #ef4444;"' : ''}>
                        ${isUsedInOther && !isSelected ? '⚠️ (Ya asignado) ' : ''}${p.name} (${p.position || 'JUG'})
                      </option>
                    `;
                  }).join('')}
                </select>
              </div>

              <!-- Cantidad -->
              <div style="display: flex; align-items: center; gap: 0.25rem;">
                <label style="font-size: 0.72rem; color: #94a3b8; font-weight: 700;">Cant:</label>
                <input type="number" min="1" max="15" value="${ev.count || 1}" class="form-input form-input-sm" style="width: 52px; text-align: center; font-weight: 800; padding: 0.2rem;" onchange="PlataApp.updateEventCount('${ev.id}', this.value)">
              </div>

              <!-- Eliminar Fila -->
              <button type="button" class="btn btn-secondary btn-sm" style="padding: 0.3rem 0.5rem; color: #ef4444;" onclick="PlataApp.removeEventRow('${ev.id}')" title="Eliminar fila">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>

            ${isDuplicate ? `
              <div style="color: #f87171; font-size: 0.72rem; font-weight: 800; display: flex; align-items: center; gap: 0.35rem; margin-top: 0.15rem;">
                <i class="fa-solid fa-triangle-exclamation"></i> Jugador repetido con esta estadística. Aumenta la cantidad en una sola fila.
              </div>
            ` : ''}
          </div>
        `;
      });

      containerEl.innerHTML = html;
    };

    if (containerT1 && containerT2) {
      renderRowsForTeam(t1.id, t1Players, containerT1, 'events-empty-t1', 'Sin goles ni asistencias asignadas al local.');
      renderRowsForTeam(t2.id, t2Players, containerT2, 'events-empty-t2', 'Sin goles ni asistencias asignadas al visitante.');
    } else if (legacyContainer) {
      let legacyHtml = '';
      this.matchEvents.forEach(ev => {
        const isGol = ev.type === 'gol';
        legacyHtml += `
          <div style="display: flex; gap: 0.5rem; align-items: center; background: rgba(15, 23, 42, 0.6); padding: 0.65rem 0.85rem; border-radius: 8px;">
            <span>${isGol ? 'GOL' : 'ASISTENCIA'}</span>
            <span>${ev.playerId}</span>
            <span>Cant: ${ev.count || 1}</span>
            <button onclick="PlataApp.removeEventRow('${ev.id}')">Eliminar</button>
          </div>
        `;
      });
      legacyContainer.innerHTML = legacyHtml || '<p style="text-align: center; color: #94a3b8;">No hay eventos asignados.</p>';
    }
  },

  validateEventsVsScores() {
    const alertBox = document.getElementById('plata-goals-validation-alert');
    if (!alertBox || !this.currentMatch) return;

    const s1 = parseInt(document.getElementById('plata-score1')?.value, 10) || 0;
    const s2 = parseInt(document.getElementById('plata-score2')?.value, 10) || 0;

    let t1Goals = 0;
    let t2Goals = 0;
    const t1Id = this.currentMatch.team1Id;
    const t2Id = this.currentMatch.team2Id;

    this.matchEvents.forEach(ev => {
      if (ev.type === 'gol') {
        const pTeam = ev.teamId || this.getPlayerTeamId(ev.playerId);
        const cnt = parseInt(ev.count, 10) || 1;
        if (pTeam === t1Id) t1Goals += cnt;
        else if (pTeam === t2Id) t2Goals += cnt;
      }
    });

    const duplicateKeys = this.validateDuplicatePlayers();
    alertBox.style.display = 'block';

    if (duplicateKeys.size > 0) {
      alertBox.style.background = 'rgba(239, 68, 68, 0.15)';
      alertBox.style.border = '1px solid rgba(239, 68, 68, 0.45)';
      alertBox.style.color = '#fca5a5';
      alertBox.innerHTML = `
        <i class="fa-solid fa-triangle-exclamation"></i>
        <strong>Error de Jugadores Repetidos:</strong> Tienes futbolistas repetidos con la misma estadística. 
        Ajusta la cantidad en una sola fila para poder publicar en la web.
      `;
      return;
    }

    const isT1Match = (t1Goals === s1);
    const isT2Match = (t2Goals === s2);

    if (isT1Match && isT2Match) {
      alertBox.style.background = 'rgba(16, 185, 129, 0.15)';
      alertBox.style.border = '1px solid rgba(16, 185, 129, 0.4)';
      alertBox.style.color = '#34d399';
      alertBox.innerHTML = `
        <i class="fa-solid fa-circle-check"></i>
        <strong>Goles Verificados:</strong> Coinciden con el marcador (${t1Goals} local / ${t2Goals} visitante). Listo para publicar.
      `;
    } else {
      alertBox.style.background = 'rgba(245, 158, 11, 0.15)';
      alertBox.style.border = '1px solid rgba(245, 158, 11, 0.4)';
      alertBox.style.color = '#fbbf24';
      alertBox.innerHTML = `
        <i class="fa-solid fa-triangle-exclamation"></i>
        <strong>Aviso de Goles:</strong> Marcador indica (${s1} - ${s2}), pero se han asignado (${t1Goals} - ${t2Goals}) en estadísticas. 
        Si hubo autogol o no asignas todos los goles, aún puedes continuar.
      `;
    }
  },

  // ==========================================
  // VENTANA DE CONFIRMACIÓN PREVIA ANTES DE PUBLICAR
  // ==========================================
  openMatchConfirmModal(isAnulacion = false) {
    if (!this.currentMatch) return;
    const modal = document.getElementById('modal-plata-confirm-match');
    if (!modal) return;

    const t1 = this.getTeamById(this.currentMatch.team1Id);
    const t2 = this.getTeamById(this.currentMatch.team2Id);
    const s1 = parseInt(document.getElementById('plata-score1')?.value, 10) || 0;
    const s2 = parseInt(document.getElementById('plata-score2')?.value, 10) || 0;

    // Equipos
    const t1LogoEl = document.getElementById('modal-confirm-t1-logo');
    const t2LogoEl = document.getElementById('modal-confirm-t2-logo');
    const t1NameEl = document.getElementById('modal-confirm-t1-name');
    const t2NameEl = document.getElementById('modal-confirm-t2-name');
    const scoreDisp = document.getElementById('modal-confirm-score-display');
    const statusPill = document.getElementById('modal-confirm-status-pill');
    const jornadaBadge = document.getElementById('modal-confirm-jornada-badge');
    const authorEl = document.getElementById('modal-confirm-author');
    const anuladoAlert = document.getElementById('modal-confirm-anulado-alert');
    const statsWrapper = document.getElementById('modal-confirm-stats-wrapper');
    const statsSummary = document.getElementById('modal-confirm-stats-summary');
    const btnPublish = document.getElementById('btn-modal-confirm-publish');

    if (t1LogoEl) t1LogoEl.src = t1?.logo || 'Logos Equipos/default.png';
    if (t2LogoEl) t2LogoEl.src = t2?.logo || 'Logos Equipos/default.png';
    if (t1NameEl) t1NameEl.textContent = t1 ? t1.name : 'Local';
    if (t2NameEl) t2NameEl.textContent = t2 ? t2.name : 'Visitante';
    if (jornadaBadge) jornadaBadge.textContent = `Jornada ${this.currentJornada} • División Plata`;
    if (authorEl) authorEl.textContent = this.currentUser || 'Delegado Plata';

    if (isAnulacion) {
      if (scoreDisp) scoreDisp.textContent = '0 - 0';
      if (statusPill) {
        statusPill.textContent = 'ANULADO';
        statusPill.style.background = 'rgba(239, 68, 68, 0.2)';
        statusPill.style.color = '#f87171';
      }
      if (anuladoAlert) anuladoAlert.style.display = 'block';
      if (statsWrapper) statsWrapper.style.display = 'none';
      if (btnPublish) {
        btnPublish.innerHTML = '<i class="fa-solid fa-ban"></i> Aceptar y Publicar Anulación';
        btnPublish.style.background = 'linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)';
      }
    } else {
      if (scoreDisp) scoreDisp.textContent = `${s1} - ${s2}`;
      if (statusPill) {
        statusPill.textContent = 'Marcador Final';
        statusPill.style.background = 'rgba(16, 185, 129, 0.2)';
        statusPill.style.color = '#34d399';
      }
      if (anuladoAlert) anuladoAlert.style.display = 'none';
      if (statsWrapper) statsWrapper.style.display = 'block';
      if (btnPublish) {
        btnPublish.innerHTML = '<i class="fa-solid fa-cloud-arrow-up"></i> Aceptar y Publicar en la Web';
        btnPublish.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
      }

      // Desglosar estadísticas por equipo
      const buildTeamStatsHtml = (teamId, teamName) => {
        const teamEvents = this.matchEvents.filter(ev => {
          const evTeam = ev.teamId || this.getPlayerTeamId(ev.playerId);
          return evTeam === teamId;
        });

        const goles = teamEvents.filter(ev => ev.type === 'gol');
        const asistencias = teamEvents.filter(ev => ev.type === 'asistencia');

        let golesHtml = '<span style="color: #64748b; font-style: italic; font-size: 0.78rem;">Ninguno</span>';
        if (goles.length > 0) {
          golesHtml = goles.map(ev => {
            const p = this.getPlayerById(ev.playerId);
            const countStr = ev.count > 1 ? ` <strong>(x${ev.count})</strong>` : '';
            return `<div style="font-size: 0.8rem; color: #f1f5f9;"><i class="fa-solid fa-futbol" style="color: #38bdf8; font-size: 0.75rem;"></i> ${p ? p.name : 'Desconocido'}${countStr}</div>`;
          }).join('');
        }

        let asistHtml = '<span style="color: #64748b; font-style: italic; font-size: 0.78rem;">Ninguna</span>';
        if (asistencias.length > 0) {
          asistHtml = asistencias.map(ev => {
            const p = this.getPlayerById(ev.playerId);
            const countStr = ev.count > 1 ? ` <strong>(x${ev.count})</strong>` : '';
            return `<div style="font-size: 0.8rem; color: #cbd5e1;"><i class="fa-solid fa-hands-clapping" style="color: #a78bfa; font-size: 0.75rem;"></i> ${p ? p.name : 'Desconocido'}${countStr}</div>`;
          }).join('');
        }

        return `
          <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(148, 163, 184, 0.15); border-radius: 8px; padding: 0.75rem;">
            <div style="font-weight: 800; font-size: 0.82rem; color: #fff; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.35rem; margin-bottom: 0.5rem;">
              ${teamName}
            </div>
            <div style="margin-bottom: 0.5rem;">
              <div style="font-size: 0.7rem; font-weight: 800; color: #38bdf8; text-transform: uppercase; margin-bottom: 0.2rem;">Goles:</div>
              ${golesHtml}
            </div>
            <div>
              <div style="font-size: 0.7rem; font-weight: 800; color: #a78bfa; text-transform: uppercase; margin-bottom: 0.2rem;">Asistencias:</div>
              ${asistHtml}
            </div>
          </div>
        `;
      };

      if (statsSummary) {
        statsSummary.innerHTML = `
          ${buildTeamStatsHtml(t1 ? t1.id : this.currentMatch.team1Id, t1 ? t1.name : 'Local')}
          ${buildTeamStatsHtml(t2 ? t2.id : this.currentMatch.team2Id, t2 ? t2.name : 'Visitante')}
        `;
      }
    }

    modal.style.display = 'flex';
  },

  closeMatchConfirmModal() {
    const modal = document.getElementById('modal-plata-confirm-match');
    if (modal) modal.style.display = 'none';
  },

  // Disparado al pulsar el botón "Registrar y Guardar Partido"
  submitMatch() {
    if (!this.isJornadaAllowed(this.currentJornada)) {
      this.showToast('Esta jornada está bloqueada por el Administrador Principal. No se puede guardar.', 'error');
      return;
    }

    if (!this.currentMatch) {
      this.showToast('Por favor selecciona un partido para registrar.', 'error');
      return;
    }

    const duplicates = this.validateDuplicatePlayers();
    if (duplicates.size > 0) {
      this.showToast('No se puede continuar: Tienes futbolistas repetidos con la misma estadística. Modifica la cantidad en una sola fila en vez de duplicarla.', 'error');
      return;
    }

    this.pendingPublishType = 'normal';
    this.openMatchConfirmModal(false);
  },

  // Disparado al pulsar el botón "Anular Partido"
  anularMatch() {
    if (!this.isJornadaAllowed(this.currentJornada)) {
      this.showToast('Esta jornada está bloqueada por el Administrador Principal. No se puede anular.', 'error');
      return;
    }

    if (!this.currentMatch) {
      this.showToast('Por favor selecciona un partido para anular.', 'error');
      return;
    }

    this.pendingPublishType = 'anular';
    this.openMatchConfirmModal(true);
  },

  // Confirmación ejecutada desde la ventana modal
  async executeConfirmedPublish() {
    const btnPublish = document.getElementById('btn-modal-confirm-publish');
    if (btnPublish) {
      btnPublish.disabled = true;
      btnPublish.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Publicando...';
    }

    try {
      if (this.pendingPublishType === 'anular') {
        await this.executeAnulacion();
      } else {
        await this.executeSubmitMatch();
      }
    } finally {
      if (btnPublish) {
        btnPublish.disabled = false;
      }
      this.closeMatchConfirmModal();
    }
  },

  async executeSubmitMatch() {
    const s1 = parseInt(document.getElementById('plata-score1').value, 10) || 0;
    const s2 = parseInt(document.getElementById('plata-score2').value, 10) || 0;

    const t1 = this.getTeamById(this.currentMatch.team1Id);
    const t2 = this.getTeamById(this.currentMatch.team2Id);
    if (!t1 || !t2) {
      this.showToast('Error con los clubes del partido.', 'error');
      return;
    }

    // 1. Revertir estadísticas anteriores si el partido ya había sido jugado
    if (this.currentMatch.played && Array.isArray(this.currentMatch.events)) {
      this.currentMatch.events.forEach(ev => {
        if (!ev.playerId) return;
        const player = this.getPlayerById(ev.playerId);
        if (!player) return;

        const cnt = parseInt(ev.count, 10) || 1;
        const evTeamId = ev.teamId || player.teamId;

        if (ev.type === 'gol') {
          player.goals = Math.max(0, (player.goals || 0) - cnt);
          player.goals_liga = Math.max(0, (player.goals_liga || 0) - cnt);
          if (player.statsByTeam && player.statsByTeam[evTeamId]) {
            player.statsByTeam[evTeamId].goals = Math.max(0, (player.statsByTeam[evTeamId].goals || 0) - cnt);
            player.statsByTeam[evTeamId].goals_liga = Math.max(0, (player.statsByTeam[evTeamId].goals_liga || 0) - cnt);
          }
        } else if (ev.type === 'asistencia') {
          player.assists = Math.max(0, (player.assists || 0) - cnt);
          player.assists_liga = Math.max(0, (player.assists_liga || 0) - cnt);
          if (player.statsByTeam && player.statsByTeam[evTeamId]) {
            player.statsByTeam[evTeamId].assists = Math.max(0, (player.statsByTeam[evTeamId].assists || 0) - cnt);
            player.statsByTeam[evTeamId].assists_liga = Math.max(0, (player.statsByTeam[evTeamId].assists_liga || 0) - cnt);
          }
        }
      });
    }

    // 2. Serializar y aplicar los nuevos eventos a jugadores
    const serializedEvents = [];
    this.matchEvents.forEach(ev => {
      if (!ev.playerId) return;
      const player = this.getPlayerById(ev.playerId);
      const pName = player ? player.name : 'Desconocido';
      const cnt = parseInt(ev.count, 10) || 1;
      const evTeamId = ev.teamId || this.getPlayerTeamId(ev.playerId) || t1.id;

      serializedEvents.push({
        playerId: ev.playerId,
        playerName: pName,
        teamId: evTeamId,
        type: ev.type,
        count: cnt
      });

      if (player) {
        if (!player.statsByTeam) player.statsByTeam = {};
        if (!player.statsByTeam[evTeamId]) {
          player.statsByTeam[evTeamId] = {
            teamId: evTeamId,
            teamName: this.getTeamById(evTeamId)?.name || evTeamId,
            goals: 0, assists: 0,
            goals_liga: 0, assists_liga: 0,
            goals_champions: 0, assists_champions: 0,
            goals_estelar: 0, assists_estelar: 0
          };
        }
        const tEntry = player.statsByTeam[evTeamId];

        if (ev.type === 'gol') {
          player.goals = (player.goals || 0) + cnt;
          player.goals_liga = (player.goals_liga || 0) + cnt;
          tEntry.goals = (tEntry.goals || 0) + cnt;
          tEntry.goals_liga = (tEntry.goals_liga || 0) + cnt;
        } else if (ev.type === 'asistencia') {
          player.assists = (player.assists || 0) + cnt;
          player.assists_liga = (player.assists_liga || 0) + cnt;
          tEntry.assists = (tEntry.assists || 0) + cnt;
          tEntry.assists_liga = (tEntry.assists_liga || 0) + cnt;
        }
      }
    });

    const nowIso = new Date().toISOString();
    const delegateUser = this.currentUser || 'Delegado Plata';

    // 3. Actualizar el partido en fixtures.plata
    this.currentMatch.played = true;
    this.currentMatch.annulled = false;
    this.currentMatch.score1 = s1;
    this.currentMatch.score2 = s2;
    this.currentMatch.events = serializedEvents;
    this.currentMatch.registeredBy = delegateUser;
    this.currentMatch.registeredAt = nowIso;

    // 4. Agregar registro en historial de partidos para auditoría
    if (!this.data.matchHistory) this.data.matchHistory = [];

    const historyRecord = {
      id: `match_${Date.now()}`,
      timestamp: Date.now(),
      date: new Date().toLocaleDateString('es-MX', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
      competition: 'plata',
      jornada: this.currentJornada,
      fixtureMatchId: this.currentMatch.id,
      phase: `Jornada ${this.currentJornada}`,
      team1Id: t1.id,
      team1Name: t1.name,
      team1Logo: t1.logo || '',
      score1: s1,
      team2Id: t2.id,
      team2Name: t2.name,
      team2Logo: t2.logo || '',
      score2: s2,
      events: serializedEvents,
      registeredBy: delegateUser,
      registeredAt: nowIso
    };

    this.data.matchHistory.unshift(historyRecord);
    this.lastSavedEvents = serializedEvents;
    this.lastHistoryRecord = historyRecord;

    // 5. Guardar y publicar
    const ok = await this.saveData();
    if (ok) {
      this.populateMatchesForCurrentJornada();
      this.onMatchSelected(this.currentMatch.id);
      this.renderMatchHistory();
      this.renderActiveExport();
    }
  },

  async executeAnulacion() {
    const t1 = this.getTeamById(this.currentMatch.team1Id);
    const t2 = this.getTeamById(this.currentMatch.team2Id);
    const t1Name = t1 ? t1.name : this.currentMatch.team1Id;
    const t2Name = t2 ? t2.name : this.currentMatch.team2Id;

    // 1. Revertir estadísticas previas si el partido ya había sido jugado
    if (this.currentMatch.played && Array.isArray(this.currentMatch.events)) {
      this.currentMatch.events.forEach(ev => {
        if (!ev.playerId) return;
        const player = this.getPlayerById(ev.playerId);
        if (!player) return;

        const cnt = parseInt(ev.count, 10) || 1;
        const evTeamId = ev.teamId || player.teamId;

        if (ev.type === 'gol') {
          player.goals = Math.max(0, (player.goals || 0) - cnt);
          player.goals_liga = Math.max(0, (player.goals_liga || 0) - cnt);
          if (player.statsByTeam && player.statsByTeam[evTeamId]) {
            player.statsByTeam[evTeamId].goals = Math.max(0, (player.statsByTeam[evTeamId].goals || 0) - cnt);
            player.statsByTeam[evTeamId].goals_liga = Math.max(0, (player.statsByTeam[evTeamId].goals_liga || 0) - cnt);
          }
        } else if (ev.type === 'asistencia') {
          player.assists = Math.max(0, (player.assists || 0) - cnt);
          player.assists_liga = Math.max(0, (player.assists_liga || 0) - cnt);
          if (player.statsByTeam && player.statsByTeam[evTeamId]) {
            player.statsByTeam[evTeamId].assists = Math.max(0, (player.statsByTeam[evTeamId].assists || 0) - cnt);
            player.statsByTeam[evTeamId].assists_liga = Math.max(0, (player.statsByTeam[evTeamId].assists_liga || 0) - cnt);
          }
        }
      });
    }

    const nowIso = new Date().toISOString();
    const delegateUser = this.currentUser || 'Delegado Plata';

    // 2. Marcar como jugado y anulado
    this.currentMatch.played = true;
    this.currentMatch.annulled = true;
    this.currentMatch.score1 = 0;
    this.currentMatch.score2 = 0;
    this.currentMatch.events = [];
    this.currentMatch.registeredBy = delegateUser;
    this.currentMatch.registeredAt = nowIso;

    // 3. Registrar en historial de partidos para auditoría
    if (!this.data.matchHistory) this.data.matchHistory = [];

    const historyRecord = {
      id: `match_${Date.now()}`,
      timestamp: Date.now(),
      date: new Date().toLocaleDateString('es-MX', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
      competition: 'plata',
      jornada: this.currentJornada,
      fixtureMatchId: this.currentMatch.id,
      phase: `Jornada ${this.currentJornada}`,
      team1Id: t1 ? t1.id : this.currentMatch.team1Id,
      team1Name: t1Name,
      team1Logo: t1 ? t1.logo : '',
      score1: 0,
      team2Id: t2 ? t2.id : this.currentMatch.team2Id,
      team2Name: t2Name,
      team2Logo: t2 ? t2.logo : '',
      score2: 0,
      annulled: true,
      events: [],
      registeredBy: delegateUser,
      registeredAt: nowIso
    };

    this.data.matchHistory.unshift(historyRecord);
    this.lastSavedEvents = [];
    this.lastHistoryRecord = historyRecord;

    // 4. Guardar y publicar
    const commitMsg = `Anulación Jornada ${this.currentJornada}: ${t1Name} vs ${t2Name} [${delegateUser}]`;
    const ok = await this.saveData(commitMsg);
    if (ok) {
      this.populateMatchesForCurrentJornada();
      this.onMatchSelected(this.currentMatch.id);
      this.renderMatchHistory();
      this.renderActiveExport();
      this.showToast(`¡Partido entre ${t1Name} y ${t2Name} anulado! Registrado como jugado sin puntos.`, 'success');
    }
  },

  // ==========================================
  // HISTORIAL Y AUDITORÍA
  // ==========================================
  populateHistoryFilters() {
    const jFilter = document.getElementById('plata-history-jornada-filter');
    const aFilter = document.getElementById('plata-history-author-filter');
    if (!jFilter || !aFilter) return;

    // Jornadas
    jFilter.innerHTML = '<option value="all">Todas las Fechas</option>';
    for (let j = 1; j <= 26; j++) {
      const opt = document.createElement('option');
      opt.value = j;
      opt.textContent = `Jornada ${j}`;
      jFilter.appendChild(opt);
    }

    // Autores únicos
    const authors = new Set();
    authors.add('Delegado Plata 1');
    authors.add('Delegado Plata 2');
    authors.add('Delegado Plata 3');
    authors.add('Administrador Principal');

    if (this.data && Array.isArray(this.data.matchHistory)) {
      this.data.matchHistory.forEach(m => {
        if (m.registeredBy) authors.add(m.registeredBy);
      });
    }

    aFilter.innerHTML = '<option value="all">👤 Todos los Usuarios</option>';
    authors.forEach(auth => {
      const opt = document.createElement('option');
      opt.value = auth;
      opt.textContent = `👤 ${auth}`;
      aFilter.appendChild(opt);
    });
  },

  renderMatchHistory() {
    const tbody = document.getElementById('plata-history-tbody');
    const totalMatchesBadge = document.getElementById('lbl-history-total-matches');
    if (!tbody) return;

    const jFilter = document.getElementById('plata-history-jornada-filter')?.value || 'all';
    const aFilter = document.getElementById('plata-history-author-filter')?.value || 'all';

    let list = (this.data && Array.isArray(this.data.matchHistory))
      ? this.data.matchHistory.filter(m => {
          if (m.competition && m.competition.toLowerCase() === 'plata') return true;
          const t1 = this.getTeamById(m.team1Id);
          return t1 && (t1.division || '').toLowerCase() === 'plata';
        })
      : [];

    if (totalMatchesBadge) {
      totalMatchesBadge.textContent = `${list.length} Registros en Total`;
    }

    // Filtrar por jornada
    if (jFilter !== 'all') {
      const jNum = parseInt(jFilter, 10);
      list = list.filter(m => m.jornada === jNum);
    }

    // Filtrar por autor
    if (aFilter !== 'all') {
      list = list.filter(m => (m.registeredBy || '').toLowerCase() === aFilter.toLowerCase());
    }

    if (list.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="6" style="text-align: center; padding: 2.5rem; color: var(--text-muted);">
            <i class="fa-solid fa-clock-rotate-left" style="font-size: 2rem; margin-bottom: 0.5rem; display: block; opacity: 0.4;"></i>
            No se encontraron partidos registrados con los filtros seleccionados.
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = list.map(m => {
      const t1 = this.getTeamById(m.team1Id) || { name: m.team1Name || m.team1Id, logo: m.team1Logo || 'Logos Equipos/default.png' };
      const t2 = this.getTeamById(m.team2Id) || { name: m.team2Name || m.team2Id, logo: m.team2Logo || 'Logos Equipos/default.png' };

      // Events chips
      const events = Array.isArray(m.events) ? m.events : [];
      let eventsHtml = '';
      if (events.length === 0) {
        eventsHtml = '<span style="color: #64748b; font-size: 0.78rem;">Sin eventos asignados</span>';
      } else {
        eventsHtml = events.map(e => {
          const isGol = e.type === 'gol';
          const icon = isGol ? '⚽' : '👟';
          const color = isGol ? '#38bdf8' : '#a78bfa';
          const cnt = e.count > 1 ? ` (x${e.count})` : '';
          return `<span style="display: inline-block; font-size: 0.75rem; background: rgba(255,255,255,0.06); border-radius: 4px; padding: 0.15rem 0.4rem; margin: 0.1rem; color: ${color};">${icon} ${e.playerName || 'Jugador'}${cnt}</span>`;
        }).join('');
      }

      // Author Badge
      const author = m.registeredBy || 'Administrador Principal';
      const isMainAdmin = author.toLowerCase().includes('principal');
      const authorBg = isMainAdmin ? 'rgba(255, 209, 0, 0.15)' : 'rgba(56, 189, 248, 0.15)';
      const authorColor = isMainAdmin ? '#ffd100' : '#38bdf8';
      const authorBorder = isMainAdmin ? 'rgba(255, 209, 0, 0.35)' : 'rgba(56, 189, 248, 0.35)';

      const dateStr = m.date || (m.registeredAt ? new Date(m.registeredAt).toLocaleDateString('es-MX', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : 'Reciente');

      return `
        <tr>
          <td>
            <span class="badge" style="background: rgba(148, 163, 184, 0.2); color: #cbd5e1; border: 1px solid #94a3b8; font-weight: 800; font-size: 0.78rem;">
              Jornada ${m.jornada || 'N/A'}
            </span>
          </td>
          <td style="font-size: 0.82rem; color: #94a3b8; white-space: nowrap;">
            <i class="fa-regular fa-calendar" style="margin-right: 0.25rem;"></i> ${dateStr}
          </td>
          <td>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <img src="${t1.logo || 'Logos Equipos/default.png'}" style="width: 24px; height: 24px; object-fit: contain;" onerror="this.onerror=null;this.src='Logos Equipos/default.png'">
              <span style="font-weight: 700; font-size: 0.86rem;">${t1.name}</span>
              <span style="color: #64748b; font-size: 0.75rem; margin: 0 0.2rem;">vs</span>
              <img src="${t2.logo || 'Logos Equipos/default.png'}" style="width: 24px; height: 24px; object-fit: contain;" onerror="this.onerror=null;this.src='Logos Equipos/default.png'">
              <span style="font-weight: 700; font-size: 0.86rem;">${t2.name}</span>
            </div>
          </td>
          <td style="text-align: center;">
            ${m.annulled 
              ? `<span class="badge" style="background: rgba(239, 68, 68, 0.2); font-size: 0.82rem; font-weight: 900; padding: 0.35rem 0.65rem; border: 1.5px solid #ef4444; color: #f87171;">🚫 ANULADO</span>`
              : `<span class="badge" style="background: rgba(15, 23, 42, 0.9); font-size: 0.95rem; font-weight: 900; padding: 0.35rem 0.75rem; border: 1.5px solid #38bdf8; color: #fff;">${m.score1} - ${m.score2}</span>`
            }
          </td>
          <td style="max-width: 320px;">
            ${eventsHtml}
          </td>
          <td>
            <div style="display: flex; flex-direction: column; gap: 0.2rem;">
              <span class="badge" style="background: ${authorBg}; color: ${authorColor}; border: 1px solid ${authorBorder}; font-weight: 800; font-size: 0.78rem; display: inline-flex; align-items: center; gap: 0.35rem; width: fit-content;">
                <i class="fa-solid fa-user-check"></i> ${author}
              </span>
              ${m.registeredAt ? `<span style="font-size: 0.68rem; color: #64748b;"><i class="fa-regular fa-clock"></i> ${new Date(m.registeredAt).toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' })}</span>` : ''}
            </div>
          </td>
        </tr>
      `;
    }).join('');
  },

  // ==========================================
  // GENERADOR DE IMÁGENES (EXPORTACIÓN PNG)
  // ==========================================
  switchExportTab(tabName) {
    this.activeExportTab = tabName;

    ['standings', 'scorers', 'assists', 'pending'].forEach(t => {
      const pill = document.getElementById(`pill-export-${t}`);
      const card = document.getElementById(`card-export-${t}`);
      if (pill) pill.classList.toggle('active', t === tabName);
      if (card) card.style.display = (t === tabName) ? 'block' : 'none';
    });

    this.renderActiveExport();
  },

  renderActiveExport() {
    if (this.activeExportTab === 'standings') {
      this.renderStandingsExport();
    } else if (this.activeExportTab === 'scorers') {
      this.renderScorersExport();
    } else if (this.activeExportTab === 'assists') {
      this.renderAssistsExport();
    } else if (this.activeExportTab === 'pending') {
      this.renderPendingExportCard();
    }
  },

  // 1. Exportar Tabla de Posiciones
  renderStandingsExport() {
    const tbody = document.getElementById('export-standings-tbody');
    if (!tbody) return;

    const standings = this.calculateStandings('plata');
    if (standings.length === 0) {
      tbody.innerHTML = '<tr><td colspan="10" style="text-align: center; padding: 2rem; color: #64748b;">No hay equipos en División Plata</td></tr>';
      return;
    }

    tbody.innerHTML = standings.map((item, idx) => {
      const pos = idx + 1;
      let posColor = '#cbd5e1';
      let borderLeft = '3px solid transparent';
      let rowBg = (idx % 2 === 0) ? 'rgba(255,255,255,0.02)' : 'transparent';

      if (pos <= 2) {
        posColor = '#34d399';
        borderLeft = '3px solid #10b981';
        rowBg = 'rgba(16, 185, 129, 0.08)';
      } else if (pos <= 6) {
        posColor = '#facc15';
        borderLeft = '3px solid #eab308';
        rowBg = 'rgba(234, 179, 8, 0.05)';
      }

      return `
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06); background: ${rowBg};">
          <td style="padding: 0.65rem 0.5rem; text-align: center; font-weight: 900; color: ${posColor}; border-left: ${borderLeft};">
            ${pos}
          </td>
          <td style="padding: 0.65rem 0.5rem;">
            <div style="display: flex; align-items: center; gap: 0.6rem;">
              <img src="${item.team.logo || 'Logos Equipos/default.png'}" style="width: 24px; height: 24px; object-fit: contain;" onerror="this.onerror=null;this.src='Logos Equipos/default.png'">
              <span style="font-weight: 800; color: #fff;">${item.team.name}</span>
            </div>
          </td>
          <td style="padding: 0.65rem 0.5rem; text-align: center; color: #cbd5e1;">${item.pj}</td>
          <td style="padding: 0.65rem 0.5rem; text-align: center; color: #34d399; font-weight: 700;">${item.g}</td>
          <td style="padding: 0.65rem 0.5rem; text-align: center; color: #94a3b8;">${item.e}</td>
          <td style="padding: 0.65rem 0.5rem; text-align: center; color: #f87171;">${item.p}</td>
          <td style="padding: 0.65rem 0.5rem; text-align: center; color: #cbd5e1;">${item.gf}</td>
          <td style="padding: 0.65rem 0.5rem; text-align: center; color: #cbd5e1;">${item.gc}</td>
          <td style="padding: 0.65rem 0.5rem; text-align: center; font-weight: 700; color: ${item.dg > 0 ? '#34d399' : (item.dg < 0 ? '#f87171' : '#94a3b8')};">
            ${item.dg > 0 ? '+' : ''}${item.dg}
          </td>
          <td style="padding: 0.65rem 0.5rem; text-align: center; font-weight: 900; font-size: 1.05rem; color: #ffd100;">
            ${item.pts}
          </td>
        </tr>
      `;
    }).join('');
  },

  async downloadStandingsImage() {
    await this.captureAndDownload('export-container-standings', 'LMI_Division_Plata_Tabla_Posiciones.png');
  },

  // 2. Exportar Tabla de Goleadores
  renderScorersExport() {
    const container = document.getElementById('export-scorers-list');
    if (!container) return;

    const scorers = this.getLeaderboard('goals_liga', 'plata');
    if (scorers.length === 0) {
      container.innerHTML = '<div style="text-align: center; padding: 2rem; color: #64748b;">No hay goles registrados aún en División Plata.</div>';
      return;
    }

    container.innerHTML = scorers.map((p, idx) => {
      const pos = idx + 1;
      const isTop1 = pos === 1;
      const rankBg = isTop1 ? 'linear-gradient(135deg, #ffd100, #b8860b)' : 'rgba(255,255,255,0.08)';
      const rankColor = isTop1 ? '#000' : '#fff';

      return `
        <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.65rem 1rem; border-radius: 8px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06);">
          <div style="display: flex; align-items: center; gap: 0.85rem;">
            <div style="width: 32px; height: 32px; border-radius: 50%; background: ${rankBg}; color: ${rankColor}; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 0.88rem;">
              ${pos}
            </div>
            <img src="${p.displayTeamLogo || 'Logos Equipos/default.png'}" style="width: 28px; height: 28px; object-fit: contain;" onerror="this.onerror=null;this.src='Logos Equipos/default.png'">
            <div>
              <div style="display: flex; align-items: center; gap: 0.4rem;">
                <span style="font-weight: 800; font-size: 0.95rem; color: #fff;">${p.name}</span>
                <span style="font-size: 0.72rem; padding: 0.1rem 0.35rem; border-radius: 4px; background: #ef4444; color: #fff; font-weight: 800;">${p.position || 'DC'}</span>
              </div>
              <span style="font-size: 0.78rem; color: #94a3b8;">${p.displayTeamName}</span>
            </div>
          </div>
          <div style="text-align: right;">
            <span style="font-size: 1.3rem; font-weight: 900; color: #38bdf8;">${p.statValue}</span>
            <span style="font-size: 0.8rem; color: #94a3b8; font-weight: 700; margin-left: 0.2rem;">goles</span>
          </div>
        </div>
      `;
    }).join('');
  },

  async downloadScorersImage() {
    await this.captureAndDownload('export-container-scorers', 'LMI_Division_Plata_Goleadores_Top10.png');
  },

  // 3. Exportar Tabla de Asistidores
  renderAssistsExport() {
    const container = document.getElementById('export-assists-list');
    if (!container) return;

    const assists = this.getLeaderboard('assists_liga', 'plata');
    if (assists.length === 0) {
      container.innerHTML = '<div style="text-align: center; padding: 2rem; color: #64748b;">No hay asistencias registradas aún en División Plata.</div>';
      return;
    }

    container.innerHTML = assists.map((p, idx) => {
      const pos = idx + 1;
      const isTop1 = pos === 1;
      const rankBg = isTop1 ? 'linear-gradient(135deg, #a78bfa, #7c3aed)' : 'rgba(255,255,255,0.08)';
      const rankColor = '#fff';

      return `
        <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.65rem 1rem; border-radius: 8px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06);">
          <div style="display: flex; align-items: center; gap: 0.85rem;">
            <div style="width: 32px; height: 32px; border-radius: 50%; background: ${rankBg}; color: ${rankColor}; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 0.88rem;">
              ${pos}
            </div>
            <img src="${p.displayTeamLogo || 'Logos Equipos/default.png'}" style="width: 28px; height: 28px; object-fit: contain;" onerror="this.onerror=null;this.src='Logos Equipos/default.png'">
            <div>
              <div style="display: flex; align-items: center; gap: 0.4rem;">
                <span style="font-weight: 800; font-size: 0.95rem; color: #fff;">${p.name}</span>
                <span style="font-size: 0.72rem; padding: 0.1rem 0.35rem; border-radius: 4px; background: #8b5cf6; color: #fff; font-weight: 800;">${p.position || 'MC'}</span>
              </div>
              <span style="font-size: 0.78rem; color: #94a3b8;">${p.displayTeamName}</span>
            </div>
          </div>
          <div style="text-align: right;">
            <span style="font-size: 1.3rem; font-weight: 900; color: #a78bfa;">${p.statValue}</span>
            <span style="font-size: 0.8rem; color: #94a3b8; font-weight: 700; margin-left: 0.2rem;">asist.</span>
          </div>
        </div>
      `;
    }).join('');
  },

  async downloadAssistsImage() {
    await this.captureAndDownload('export-container-assists', 'LMI_Division_Plata_Asistidores_Top10.png');
  },

  // 4. Exportar Fechas Pendientes
  renderPendingExportCard() {
    const sel = document.getElementById('export-pending-jornada-select');
    const titleLbl = document.getElementById('export-pending-title-lbl');
    const badgeStatus = document.getElementById('export-pending-badge-status');
    const restingEl = document.getElementById('export-pending-resting');
    const grid = document.getElementById('export-pending-matches-grid');
    if (!grid) return;

    const jNum = parseInt(sel?.value, 10) || this.currentJornada || 1;

    if (titleLbl) {
      titleLbl.textContent = `DIVISIÓN PLATA • PARTIDOS DE LA JORNADA ${jNum}`;
    }

    const rounds = (this.data && this.data.fixtures) ? (this.data.fixtures.plata || []) : [];
    const r = rounds.find(round => round.jornada === jNum);

    if (!r || !r.matches || r.matches.length === 0) {
      grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #64748b;">No hay partidos configurados para esta fecha.</div>';
      if (restingEl) restingEl.style.display = 'none';
      return;
    }

    // Descanso
    if (r.descansa) {
      const restTeam = this.getTeamById(r.descansa);
      const restName = restTeam ? restTeam.name : r.descansa;
      if (restingEl) {
        restingEl.innerHTML = `💤 <strong>Descansa en esta jornada:</strong> ${restName}`;
        restingEl.style.display = 'block';
      }
    } else if (restingEl) {
      restingEl.style.display = 'none';
    }

    const pendingMatches = r.matches.filter(m => !m.played);
    if (badgeStatus) {
      badgeStatus.textContent = `${pendingMatches.length} de ${r.matches.length} Pendientes`;
      badgeStatus.style.color = pendingMatches.length === 0 ? '#34d399' : '#f59e0b';
    }

    grid.innerHTML = r.matches.map(m => {
      const t1 = this.getTeamById(m.team1Id) || { name: m.team1Id, logo: 'Logos Equipos/default.png' };
      const t2 = this.getTeamById(m.team2Id) || { name: m.team2Id, logo: 'Logos Equipos/default.png' };

      const isPlayed = m.played;
      const isAnnulled = !!m.annulled;
      const statusBadge = isAnnulled
        ? `<span style="padding: 0.25rem 0.6rem; border-radius: 99px; background: rgba(239, 68, 68, 0.2); border: 1px solid #ef4444; color: #f87171; font-weight: 800; font-size: 0.72rem;">🚫 ANULADO</span>`
        : (isPlayed
          ? `<span style="padding: 0.25rem 0.6rem; border-radius: 99px; background: rgba(16, 185, 129, 0.2); border: 1px solid #10b981; color: #34d399; font-weight: 800; font-size: 0.72rem;">JUGADO ${m.score1} - ${m.score2}</span>`
          : `<span style="padding: 0.25rem 0.6rem; border-radius: 99px; background: rgba(245, 158, 11, 0.2); border: 1px solid #f59e0b; color: #fbbf24; font-weight: 800; font-size: 0.72rem;">PENDIENTE</span>`);

      return `
        <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 1rem; display: flex; flex-direction: column; gap: 0.65rem;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 0.72rem; color: #94a3b8; font-weight: 700; text-transform: uppercase;">Encuentro Programado</span>
            ${statusBadge}
          </div>
          <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.35rem 0;">
            <div style="display: flex; align-items: center; gap: 0.6rem; flex: 1;">
              <img src="${t1.logo || 'Logos Equipos/default.png'}" style="width: 32px; height: 32px; object-fit: contain;" onerror="this.onerror=null;this.src='Logos Equipos/default.png'">
              <span style="font-weight: 800; font-size: 0.92rem; color: #fff;">${t1.name}</span>
            </div>
            <div style="padding: 0 0.85rem; font-weight: 900; color: #ffd100; font-size: 0.95rem;">
              VS
            </div>
            <div style="display: flex; align-items: center; gap: 0.6rem; flex: 1; justify-content: flex-end;">
              <span style="font-weight: 800; font-size: 0.92rem; color: #fff; text-align: right;">${t2.name}</span>
              <img src="${t2.logo || 'Logos Equipos/default.png'}" style="width: 32px; height: 32px; object-fit: contain;" onerror="this.onerror=null;this.src='Logos Equipos/default.png'">
            </div>
          </div>
        </div>
      `;
    }).join('');
  },

  async downloadPendingImage() {
    const sel = document.getElementById('export-pending-jornada-select');
    const jNum = parseInt(sel?.value, 10) || this.currentJornada || 1;
    await this.captureAndDownload('export-container-pending', `LMI_Division_Plata_Pendientes_Jornada_${jNum}.png`);
  },

  // Método de Captura con html2canvas
  async captureAndDownload(containerId, filename) {
    const target = document.getElementById(containerId);
    if (!target) {
      this.showToast('Contenedor de imagen no encontrado.', 'error');
      return;
    }

    this.showToast('Generando imagen de alta resolución...', 'info');

    const wrapperWidth = 1000;
    const targetWidth = Math.min(target.offsetWidth || 900, 950);

    const wrapper = document.createElement('div');
    wrapper.style.position = 'fixed';
    wrapper.style.top = '0';
    wrapper.style.left = '-15000px';
    wrapper.style.width = `${wrapperWidth}px`;
    wrapper.style.background = '#070d18';
    wrapper.style.zIndex = '-99999';
    wrapper.style.pointerEvents = 'none';

    const clone = target.cloneNode(true);
    clone.style.width = `${targetWidth}px`;
    clone.style.minWidth = `${targetWidth}px`;
    clone.style.maxWidth = `${targetWidth}px`;
    clone.style.margin = '0 auto';
    clone.style.boxSizing = 'border-box';
    clone.style.overflow = 'visible';

    clone.querySelectorAll('i').forEach(icon => {
      const cls = icon.className || '';
      let emoji = '⚽';
      if (cls.includes('fa-medal')) emoji = '🥈';
      else if (cls.includes('fa-trophy')) emoji = '🏆';
      else if (cls.includes('fa-hands-clapping')) emoji = '👟';
      else if (cls.includes('fa-clock')) emoji = '⏰';
      else if (cls.includes('fa-bed')) emoji = '💤';
      else if (cls.includes('fa-calendar')) emoji = '📅';

      const span = document.createElement('span');
      span.style.fontSize = '1.25rem';
      span.style.verticalAlign = 'middle';
      span.style.marginRight = '0.35rem';
      span.textContent = emoji;
      icon.parentNode.replaceChild(span, icon);
    });

    const origImgs = target.querySelectorAll('img');
    const cloneImgs = clone.querySelectorAll('img');
    cloneImgs.forEach((cImg, idx) => {
      try {
        const oImg = origImgs[idx] || document.querySelector(`img[src="${cImg.getAttribute('src')}"]`);
        if (oImg && oImg.complete && oImg.naturalWidth > 0) {
          const c = document.createElement('canvas');
          c.width = oImg.naturalWidth;
          c.height = oImg.naturalHeight;
          const ctx = c.getContext('2d');
          ctx.drawImage(oImg, 0, 0);
          cImg.src = c.toDataURL('image/png');
        }
      } catch (e) {}
    });

    wrapper.appendChild(clone);
    document.body.appendChild(wrapper);

    try {
      if (typeof html2canvas === 'undefined') {
        throw new Error('La librería html2canvas no está disponible.');
      }

      const canvasPromise = html2canvas(clone, {
        backgroundColor: '#070d18',
        scale: 2,
        useCORS: true,
        allowTaint: true,
        imageTimeout: 3000,
        logging: false,
        width: targetWidth,
        windowWidth: wrapperWidth
      });

      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('La generación de imagen tardó demasiado.')), 9000)
      );

      const canvas = await Promise.race([canvasPromise, timeoutPromise]);
      const dataUrl = canvas.toDataURL('image/png');

      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      this.showToast(`📸 Imagen "${filename}" descargada con éxito.`, 'success');
    } catch (err) {
      console.error('Error generando imagen:', err);
      this.showToast(`Error al generar imagen: ${err.message}`, 'error');
    } finally {
      if (wrapper && wrapper.parentNode) {
        document.body.removeChild(wrapper);
      }
    }
  },

  // ==========================================
  // MODAL DE PUBLICACIÓN EN LA WEB OFICIAL
  // ==========================================
  openDeployModal() {
    const modal = document.getElementById('modal-plata-deploy');
    if (modal) modal.style.display = 'flex';
  },

  closeDeployModal() {
    const modal = document.getElementById('modal-plata-deploy');
    if (modal) modal.style.display = 'none';
  },

  async runDeploy() {
    const consoleEl = document.getElementById('plata-deploy-console');
    const btn = document.getElementById('btn-run-plata-deploy');
    const msg = document.getElementById('plata-deploy-msg')?.value.trim() || `Registro partidos División Plata por ${this.currentUser}`;

    if (consoleEl) {
      consoleEl.style.display = 'block';
      consoleEl.textContent = '== INICIANDO PUBLICACIÓN EN PRODUCCIÓN ==\n';
    }

    if (btn) {
      btn.disabled = true;
      btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Publicando...';
    }

    try {
      const ok = await this.saveData(false);
      if (ok) {
        if (consoleEl) {
          consoleEl.textContent += '\n✓ Datos sincronizados con éxito.\n';
          consoleEl.textContent += '🎉 ¡PROCESO FINALIZADO CON ÉXITO!\nLos cambios se reflejarán en la web pública en 1-2 minutos.';
        }
      } else {
        throw new Error('No se pudo guardar la información.');
      }
    } catch (err) {
      console.error('Error en deploy:', err);
      if (consoleEl) consoleEl.textContent += `\n❌ ERROR: ${err.message}`;
    } finally {
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = '<i class="fa-solid fa-rocket"></i> Confirmar y Publicar';
      }
    }
  },

  // ==========================================
  // HELPERS DE DATOS Y ESTADÍSTICAS
  // ==========================================
  getTeamById(teamId) {
    if (!this.data || !this.data.teams || !teamId) return null;
    return this.data.teams.find(t => t.id === teamId || t.name === teamId);
  },

  getPlayerById(playerId) {
    if (!this.data || !this.data.players || !playerId) return null;
    return this.data.players.find(p => p.id === playerId);
  },

  getPlayerTeamId(playerId) {
    const p = this.getPlayerById(playerId);
    return p ? p.teamId : null;
  },

  getPlayersByTeam(teamId) {
    if (!this.data || !this.data.players || !teamId) return [];
    return this.data.players.filter(p => p.teamId === teamId);
  },

  calculateStandings(division = 'plata') {
    if (!this.data || !this.data.teams) return [];
    const divTeams = this.data.teams.filter(t => (t.division || 'oro') === division && !t.hidden && t.id !== 'brightonhovealbion' && t.id !== 'vascodagama');

    const stats = {};
    divTeams.forEach(t => {
      stats[t.id] = {
        team: t,
        pj: 0,
        g: 0,
        e: 0,
        p: 0,
        gf: 0,
        gc: 0,
        dg: 0,
        pts: 0
      };
    });

    const rounds = (this.data.fixtures && this.data.fixtures[division]) || [];
    rounds.forEach(r => {
      const matches = r.matches || [];
      matches.forEach(m => {
        if (m.played && m.score1 !== null && m.score2 !== null) {
          // Si el partido está anulado, se cuenta como jugado pero no suma puntos ni goles
          if (m.annulled) {
            if (stats[m.team1Id]) stats[m.team1Id].pj++;
            if (stats[m.team2Id]) stats[m.team2Id].pj++;
            return;
          }

          const s1 = parseInt(m.score1, 10);
          const s2 = parseInt(m.score2, 10);
          if (isNaN(s1) || isNaN(s2)) return;

          if (stats[m.team1Id]) {
            stats[m.team1Id].pj++;
            stats[m.team1Id].gf += s1;
            stats[m.team1Id].gc += s2;
            if (s1 > s2) {
              stats[m.team1Id].g++;
              stats[m.team1Id].pts += 3;
            } else if (s1 === s2) {
              stats[m.team1Id].e++;
              stats[m.team1Id].pts += 1;
            } else {
              stats[m.team1Id].p++;
            }
          }

          if (stats[m.team2Id]) {
            stats[m.team2Id].pj++;
            stats[m.team2Id].gf += s2;
            stats[m.team2Id].gc += s1;
            if (s2 > s1) {
              stats[m.team2Id].g++;
              stats[m.team2Id].pts += 3;
            } else if (s1 === s2) {
              stats[m.team2Id].e++;
              stats[m.team2Id].pts += 1;
            } else {
              stats[m.team2Id].p++;
            }
          }
        }
      });
    });

    const list = Object.values(stats);
    list.forEach(item => {
      item.dg = item.gf - item.gc;
    });

    list.sort((a, b) => {
      if (b.pts !== a.pts) return b.pts - a.pts;
      if (b.dg !== a.dg) return b.dg - a.dg;
      if (b.gf !== a.gf) return b.gf - a.gf;
      return (a.team.name || '').localeCompare(b.team.name || '');
    });

    return list;
  },

  getLeaderboard(statKey, filterDiv = 'plata') {
    if (!this.data || !this.data.players || !this.data.teams) return [];
    const allPlayers = this.data.players;
    const allTeams = this.data.teams;
    const list = [];

    allPlayers.forEach(p => {
      const sByTeam = p.statsByTeam || {};
      const teamEntries = Object.keys(sByTeam).length > 0 
        ? Object.entries(sByTeam) 
        : (p.teamId ? [[p.teamId, { [statKey]: p[statKey] || 0 }]] : []);

      teamEntries.forEach(([tId, s]) => {
        if (tId === 'brightonhovealbion' || tId === 'vascodagama') return;
        const t = allTeams.find(tm => tm.id === tId);
        if (!t || t.hidden || t.division === 'inactivo') return;
        const tDiv = t.division || 'oro';
        if (filterDiv && tDiv !== filterDiv) return;

        const val = s[statKey] || (tId === p.teamId ? (p[statKey] || 0) : 0);
        if (val > 0) {
          list.push({
            ...p,
            displayTeamId: t.id,
            displayTeamName: t.name,
            displayTeamLogo: t.logo,
            displayTeamDiv: tDiv,
            statValue: val
          });
        }
      });
    });

    return list.sort((a, b) => b.statValue - a.statValue).slice(0, 10);
  }
};

// Auto-arranque al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
  PlataApp.init();
});
