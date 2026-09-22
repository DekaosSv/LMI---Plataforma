/**
 * LMI Admin Hub - Controlador Principal
 * Gestión unificada de Liga Máster Internacional
 */

const AdminApp = {
  data: null,
  isDirty: false,
  selectedTeamId: null,
  matchEvents: [],

  // ==================== INICIALIZACIÓN ====================
  async init() {
    this.bindEvents();
    await this.loadData();
    this.initViews();
  },

  bindEvents() {
    // Navegación Sidebar
    document.querySelectorAll('.sidebar-nav .nav-btn[data-view]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const viewId = btn.getAttribute('data-view');
        this.switchView(viewId);
      });
    });

    // Botones de Guardar y Desplegar
    document.getElementById('btn-save-data').addEventListener('click', () => this.saveData());
    document.getElementById('btn-open-deploy').addEventListener('click', () => this.openDeployModal());
    document.getElementById('btn-quick-deploy').addEventListener('click', () => this.openDeployModal());
    document.getElementById('btn-run-deploy').addEventListener('click', () => this.runDeploy());
    document.getElementById('btn-export-backup').addEventListener('click', () => this.exportBackup());

    // Matches Studio
    const compSelect = document.getElementById('match-competition');
    const phaseSelect = document.getElementById('match-phase');
    const chkCup = document.getElementById('lbl-chk-cup-bracket');
    
    compSelect.addEventListener('change', () => this.onCompetitionChange());
    document.getElementById('match-jornada-select').addEventListener('change', () => this.onJornadaChange());
    document.getElementById('match-fixture-item-select').addEventListener('change', (e) => this.onFixtureMatchSelect(e.target.value));
    document.getElementById('btn-export-jornada-img').addEventListener('click', () => this.exportJornadaImage());
    document.getElementById('history-filter-select').addEventListener('change', () => this.renderMatchHistory());

    document.getElementById('match-team1-select').addEventListener('change', (e) => this.onMatchTeamChange(1, e.target.value));
    document.getElementById('match-team2-select').addEventListener('change', (e) => this.onMatchTeamChange(2, e.target.value));
    document.getElementById('btn-add-match-event').addEventListener('click', () => this.addMatchEventRow());
    document.getElementById('btn-apply-match').addEventListener('click', () => this.applyMatchResults());

    // Teams Studio
    document.getElementById('team-filter-division').addEventListener('change', (e) => this.populateTeamSelectorByDivision(e.target.value));
    document.getElementById('team-selector').addEventListener('change', (e) => this.onTeamSelected(e.target.value));
    document.getElementById('btn-save-team-details').addEventListener('click', () => this.saveTeamDetails());
    document.getElementById('search-player-input').addEventListener('input', (e) => this.filterRosterTable(e.target.value));
    document.getElementById('btn-add-player-modal').addEventListener('click', () => this.openPlayerModal(null));
    document.getElementById('btn-reset-club-stats').addEventListener('click', () => this.resetCurrentClubSeasonStats());

    // Player Modal
    document.getElementById('btn-save-player-modal').addEventListener('click', () => this.savePlayerFromModal());

    // Market Studio
    document.getElementById('btn-submit-market-movement').addEventListener('click', () => this.submitMarketMovement());

    // Balon de Oro Studio
    document.getElementById('btn-add-bdo-modal').addEventListener('click', () => this.openBdoModal(null));
    document.getElementById('btn-save-bdo-modal').addEventListener('click', () => this.saveBdoFromModal());
    document.getElementById('btn-add-champion-row').addEventListener('click', () => this.addChampionRow());

    // Advertencia de salida si hay cambios sin guardar
    window.addEventListener('beforeunload', (e) => {
      if (this.isDirty) {
        e.preventDefault();
        e.returnValue = 'Tienes cambios sin guardar en la base de datos.';
      }
    });
  },

  // ==================== CARGA Y GUARDADO ====================
  apiBase: null,

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
    this.setStatus('Cargando base de datos...', 'loading');
    const base = await this.getApiBase();
    try {
      const res = await fetch(`${base}/api/data`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      if (json.error) throw new Error(json.error);

      this.data = json;
      if (!this.data.balonOro) this.data.balonOro = [];
      if (!this.data.champions) this.data.champions = [];
      if (!this.data.marketMovements) this.data.marketMovements = [];
      if (!this.data.copaEstelarMatches) this.data.copaEstelarMatches = [];
      if (!this.data.championsLeagueMatches) this.data.championsLeagueMatches = [];
      if (!this.data.matchHistory) this.data.matchHistory = [];

      this.isDirty = false;
      this.updateDirtyIndicator();
      this.setStatus('Sincronizado', 'ready');
      this.renderAll();
      this.showToast('Base de datos conectada correctamente', 'success');
    } catch (err) {
      console.error('Error cargando /api/data:', err);
      // Fallback a INITIAL_LMI_DATA si existe en window
      if (typeof window.INITIAL_LMI_DATA !== 'undefined') {
        this.data = JSON.parse(JSON.stringify(window.INITIAL_LMI_DATA));
        this.renderAll();
        this.setStatus('Modo Lectura (Local)', 'warning');
        this.showToast('Servidor local no detectado, cargando datos locales de respaldo.', 'warning');
      } else {
        this.setStatus('Error de conexión', 'error');
        this.showToast('No se pudo conectar al servidor local admin_server.py. Ejecuta admin.bat.', 'error');
      }
    }
  },

  async saveData(silent = false) {
    if (!this.data) return;
    this.setStatus('Guardando...', 'loading');
    const base = await this.getApiBase();
    try {
      const res = await fetch(`${base}/api/save`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.data)
      });
      const result = await res.json();
      if (!res.ok || result.error) throw new Error(result.error || `HTTP ${res.status}`);

      this.isDirty = false;
      this.updateDirtyIndicator();
      this.setStatus('Guardado en data.js', 'ready');
      if (!silent) this.showToast('¡Datos guardados con éxito en data.js y Registro Balón de Oro!', 'success');
    } catch (err) {
      console.error('Error guardando:', err);
      this.setStatus('Error al guardar', 'error');
      this.showToast(`Error al guardar: ${err.message}`, 'error');
    }
  },

  markDirty() {
    this.isDirty = true;
    this.updateDirtyIndicator();
  },

  updateDirtyIndicator() {
    const indicator = document.getElementById('dirty-indicator');
    if (this.isDirty) {
      indicator.style.display = 'inline-flex';
      this.setStatus('Cambios pendientes', 'dirty');
    } else {
      indicator.style.display = 'none';
      this.setStatus('Sincronizado', 'ready');
    }
  },

  setStatus(text, type = 'ready') {
    const badge = document.getElementById('status-badge');
    const label = document.getElementById('status-text');
    label.textContent = text;
    
    badge.className = 'status-badge';
    if (type === 'dirty') {
      badge.style.color = 'var(--lmi-gold)';
      badge.style.borderColor = 'rgba(255, 209, 0, 0.4)';
    } else if (type === 'error') {
      badge.style.color = 'var(--lmi-red)';
      badge.style.borderColor = 'rgba(239, 68, 68, 0.4)';
    } else {
      badge.style.color = 'var(--lmi-green)';
      badge.style.borderColor = 'rgba(16, 185, 129, 0.3)';
    }
  },

  // ==================== VISTAS & RENDER ====================
  switchView(viewId) {
    document.querySelectorAll('.sidebar-nav .nav-btn[data-view]').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-view') === viewId);
    });

    document.querySelectorAll('.module-view').forEach(view => {
      view.classList.toggle('active', view.id === viewId);
    });

    // Actualizar título en topbar
    const titleMap = {
      'view-dashboard': '<i class="fa-solid fa-chart-pie"></i> Resumen General',
      'view-matches': '<i class="fa-solid fa-trophy" style="color: var(--lmi-gold);"></i> Registrar Partido',
      'view-teams': '<i class="fa-solid fa-shield-halved"></i> Clubes y Plantillas',
      'view-market': '<i class="fa-solid fa-arrow-right-arrow-left" style="color: #10b981;"></i> Mercado de Fichajes',
      'view-trophies': '<i class="fa-solid fa-award" style="color: var(--lmi-gold);"></i> Trofeos & Balón de Oro'
    };
    document.getElementById('topbar-page-title').innerHTML = titleMap[viewId] || 'Panel de Control';
  },

  initViews() {
    if (!this.data) return;
    this.renderDashboard();
    this.populateTeamDropdowns();
    this.renderTopScorers();
    this.renderTeamsView();
    this.renderMarketView();
    this.renderTrophiesView();
    this.renderMatchHistory();
  },

  renderAll() {
    this.renderDashboard();
    this.populateTeamDropdowns();
    this.renderTopScorers();
    this.renderTeamsView();
    this.renderMarketView();
    this.renderTrophiesView();
    this.renderMatchHistory();
  },

  // ==================== DASHBOARD ====================
  renderDashboard() {
    if (!this.data) return;
    document.getElementById('lbl-season').textContent = this.data.season || 'T10';
    document.getElementById('stat-teams-count').textContent = this.data.teams ? this.data.teams.length : 0;
    document.getElementById('stat-players-count').textContent = this.data.players ? this.data.players.length : 0;
    
    // Balon de oro widget
    if (this.data.balonOro && this.data.balonOro.length > 0) {
      const topBdo = this.data.balonOro[0];
      document.getElementById('stat-bdo-name').textContent = topBdo.jugador || 'Jamie Vardy';
    } else {
      document.getElementById('stat-bdo-name').textContent = 'N/A';
    }

    // Market movements count
    document.getElementById('stat-market-count').textContent = this.data.marketMovements ? this.data.marketMovements.length : 0;
  },

  renderTopScorers() {
    const tbody = document.getElementById('top-scorers-tbody');
    tbody.innerHTML = '';
    if (!this.data || !this.data.players) return;

    // Sort by total goals desc
    const sorted = [...this.data.players].sort((a, b) => (b.goals || 0) - (a.goals || 0)).slice(0, 5);
    sorted.forEach(p => {
      const team = this.getTeamById(p.teamId);
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td style="font-weight: 700;">${this.escape(p.name)}</td>
        <td>
          <span class="team-badge-sm">
            ${team && team.logo ? `<img src="${this.escape(team.logo)}" alt="">` : ''}
            <span>${team ? this.escape(team.name) : 'Libre'}</span>
          </span>
        </td>
        <td><span class="pos-badge">${p.position || 'MC'}</span></td>
        <td>${p.goals_liga || 0}</td>
        <td>${p.goals_champions || 0}</td>
        <td>${p.goals_estelar || 0}</td>
        <td style="font-weight: 800; color: var(--lmi-gold); font-size: 1.05rem;">${p.goals || 0}</td>
        <td>${p.assists || 0}</td>
      `;
      tbody.appendChild(tr);
    });
  },

  // ==================== MATCHES & STATS STUDIO ====================
  // ==================== MATCHES & STATS STUDIO ====================
  populateTeamDropdowns() {
    if (!this.data || !this.data.teams) return;
    this.populateTeamSelectorByDivision('all');
    this.populateMarketAndModalTeams();
    this.onCompetitionChange();
  },

  populateTeamSelectorByDivision(filterDiv = 'all') {
    const sel = document.getElementById('team-selector');
    if (!sel || !this.data || !this.data.teams) return;
    const currentVal = sel.value;
    sel.innerHTML = '';
    
    let teams = this.data.teams;
    if (filterDiv !== 'all') {
      teams = teams.filter(t => (t.division || 'oro') === filterDiv);
    }

    teams.forEach(t => {
      const opt = document.createElement('option');
      opt.value = t.id;
      opt.textContent = `${t.name} (${(t.division || 'oro').toUpperCase()})`;
      sel.appendChild(opt);
    });

    if (teams.length > 0) {
      const exists = teams.some(t => t.id === currentVal);
      const chosen = exists ? currentVal : teams[0].id;
      sel.value = chosen;
      this.onTeamSelected(chosen);
    }
  },

  populateMarketAndModalTeams() {
    const teams = this.data.teams || [];
    const fill = (id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const cur = el.value;
      el.innerHTML = '';
      teams.forEach(t => {
        const opt = document.createElement('option');
        opt.value = t.id;
        opt.textContent = t.name;
        el.appendChild(opt);
      });
      if (cur && teams.some(t => t.id === cur)) el.value = cur;
    };
    fill('market-from-team');
    fill('market-to-team');
    fill('player-modal-team');
  },

  onCompetitionChange() {
    const comp = document.getElementById('match-competition').value;
    const isDivision = comp === 'oro' || comp === 'plata';
    
    const jornadaSel = document.getElementById('match-jornada-select');
    const fixtureSel = document.getElementById('match-fixture-item-select');
    const phaseSel = document.getElementById('match-phase');
    const chkCup = document.getElementById('lbl-chk-cup-bracket');
    const jornadaWrapper = document.getElementById('jornada-card-wrapper');

    if (isDivision) {
      if (jornadaSel) jornadaSel.style.display = 'inline-block';
      if (fixtureSel) fixtureSel.style.display = 'inline-block';
      if (jornadaWrapper) jornadaWrapper.style.display = 'block';
      if (phaseSel) phaseSel.style.display = 'none';
      if (chkCup) chkCup.style.display = 'none';

      this.populateJornadasForDivision(comp);
      this.populateMatchTeamsForCompetition(comp);
    } else {
      if (jornadaSel) jornadaSel.style.display = 'none';
      if (fixtureSel) fixtureSel.style.display = 'none';
      if (jornadaWrapper) jornadaWrapper.style.display = 'none';
      if (phaseSel) phaseSel.style.display = 'inline-block';
      if (chkCup) chkCup.style.display = 'flex';

      this.populateMatchTeamsForCompetition('all');
    }
  },

  populateJornadasForDivision(comp) {
    const jornadaSel = document.getElementById('match-jornada-select');
    if (!jornadaSel || !this.data || !this.data.fixtures) return;

    const rounds = this.data.fixtures[comp] || [];
    jornadaSel.innerHTML = '';
    rounds.forEach(r => {
      const opt = document.createElement('option');
      opt.value = r.jornada;
      opt.textContent = `${r.name} (${r.type === 'ida' ? 'Ida' : 'Vuelta'})`;
      jornadaSel.appendChild(opt);
    });

    this.onJornadaChange();
  },

  onJornadaChange() {
    const comp = document.getElementById('match-competition').value;
    const jornadaNum = parseInt(document.getElementById('match-jornada-select').value, 10) || 1;
    const fixtureSel = document.getElementById('match-fixture-item-select');
    if (!fixtureSel || !this.data || !this.data.fixtures) return;

    fixtureSel.innerHTML = '<option value="">-- Cargar Partido de Jornada --</option>';
    const rounds = this.data.fixtures[comp] || [];
    const round = rounds.find(r => r.jornada === jornadaNum);

    if (round && round.matches) {
      round.matches.forEach(m => {
        const t1 = this.getTeamById(m.team1Id);
        const t2 = this.getTeamById(m.team2Id);
        const t1Name = t1 ? t1.name : m.team1Id;
        const t2Name = t2 ? t2.name : m.team2Id;

        const opt = document.createElement('option');
        opt.value = m.id;
        const scoreLabel = m.played ? ` [${m.score1} - ${m.score2}] ✓` : ' [Pendiente]';
        opt.textContent = `${t1Name} vs ${t2Name}${scoreLabel}`;
        fixtureSel.appendChild(opt);
      });
    }

    this.renderJornadaCard(comp, jornadaNum);
  },

  onFixtureMatchSelect(matchId) {
    if (!matchId) return;
    const comp = document.getElementById('match-competition').value;
    const rounds = (this.data && this.data.fixtures) ? (this.data.fixtures[comp] || []) : [];
    
    let foundMatch = null;
    for (const r of rounds) {
      foundMatch = r.matches.find(m => m.id === matchId);
      if (foundMatch) break;
    }
    if (!foundMatch) return;

    // Load team 1 and team 2
    const sel1 = document.getElementById('match-team1-select');
    const sel2 = document.getElementById('match-team2-select');
    sel1.value = foundMatch.team1Id;
    sel2.value = foundMatch.team2Id;
    this.onMatchTeamChange(1, foundMatch.team1Id);
    this.onMatchTeamChange(2, foundMatch.team2Id);

    // Score
    document.getElementById('match-score1').value = (foundMatch.score1 !== null) ? foundMatch.score1 : 0;
    document.getElementById('match-score2').value = (foundMatch.score2 !== null) ? foundMatch.score2 : 0;

    // Cargar eventos del partido si ya existen
    this.matchEvents = [];
    const container = document.getElementById('match-events-list');
    const emptyMsg = document.getElementById('match-events-empty');
    const header = document.getElementById('match-events-header');
    if (container) {
      container.querySelectorAll('.event-row').forEach(r => r.remove());
      if (foundMatch.events && foundMatch.events.length > 0) {
        const playerMap = {};
        foundMatch.events.forEach(ev => {
          const key = `${ev.teamId}_${ev.playerId}`;
          if (!playerMap[key]) {
            playerMap[key] = {
              teamId: ev.teamId,
              playerId: ev.playerId,
              goals: 0,
              assists: 0
            };
          }
          const isGoal = ev.type === 'gol' || ev.type === 'goal';
          if (isGoal) {
            playerMap[key].goals += (ev.count || 1);
          } else {
            playerMap[key].assists += (ev.count || 1);
          }
        });
        Object.values(playerMap).forEach(item => {
          this.addMatchEventRow(item);
        });
      } else {
        if (emptyMsg) emptyMsg.style.display = 'block';
        if (header) header.style.display = 'none';
      }
    }
  },

  populateMatchTeamsForCompetition(comp) {
    const sel1 = document.getElementById('match-team1-select');
    const sel2 = document.getElementById('match-team2-select');
    if (!sel1 || !sel2 || !this.data || !this.data.teams) return;

    let teams = this.data.teams;
    if (comp === 'oro') {
      teams = teams.filter(t => t.division === 'oro');
    } else if (comp === 'plata') {
      teams = teams.filter(t => t.division === 'plata');
    }

    const fill = (el, defaultIdx) => {
      el.innerHTML = '';
      teams.forEach((t, i) => {
        const opt = document.createElement('option');
        opt.value = t.id;
        opt.textContent = t.name;
        if (i === defaultIdx) opt.selected = true;
        el.appendChild(opt);
      });
    };

    fill(sel1, 0);
    fill(sel2, teams.length > 1 ? 1 : 0);

    if (teams[0]) this.onMatchTeamChange(1, teams[0].id);
    if (teams.length > 1) this.onMatchTeamChange(2, teams[1].id);
  },

  renderJornadaCard(comp, jornadaNum) {
    const container = document.getElementById('jornada-matches-grid');
    const titleEl = document.getElementById('export-division-title');
    const descEl = document.getElementById('jornada-card-desc');
    if (!container || !this.data || !this.data.fixtures) return;

    const divName = comp === 'oro' ? 'DIVISIÓN ORO' : (comp === 'plata' ? 'DIVISIÓN PLATA' : 'TORNEO');
    if (titleEl) titleEl.textContent = `${divName} • JORNADA ${jornadaNum}`;
    if (descEl) descEl.textContent = `Partidos programados para la Jornada ${jornadaNum} de ${divName}.`;

    const rounds = this.data.fixtures[comp] || [];
    const round = rounds.find(r => r.jornada === jornadaNum);
    container.innerHTML = '';

    if (!round || !round.matches || round.matches.length === 0) {
      container.innerHTML = '<p style="grid-column: 1/-1; color: var(--text-muted); text-align: center; padding: 1rem;">No hay partidos configurados para esta fecha.</p>';
      return;
    }

    round.matches.forEach(m => {
      const t1 = this.getTeamById(m.team1Id);
      const t2 = this.getTeamById(m.team2Id);
      const t1Name = t1 ? t1.name : m.team1Id;
      const t2Name = t2 ? t2.name : m.team2Id;
      const t1Logo = t1 && t1.logo ? t1.logo : '';
      const t2Logo = t2 && t2.logo ? t2.logo : '';

      const isPlayed = m.played;
      const scoreDisplay = isPlayed ? `${m.score1} - ${m.score2}` : 'VS';
      const badgeStyle = isPlayed
        ? 'background: rgba(16, 185, 129, 0.2); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.4);'
        : 'background: rgba(255, 209, 0, 0.15); color: var(--lmi-gold); border: 1px solid rgba(255, 209, 0, 0.3);';
      const statusText = isPlayed ? 'FINALIZADO' : 'PENDIENTE';

      const matchBox = document.createElement('div');
      matchBox.style.background = '#0d1629';
      matchBox.style.border = '1px solid var(--border-color)';
      matchBox.style.borderRadius = 'var(--radius-md)';
      matchBox.style.padding = '1rem';
      matchBox.style.display = 'flex';
      matchBox.style.flexDirection = 'column';
      matchBox.style.gap = '0.5rem';

      matchBox.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 0.72rem; font-weight: 800; padding: 0.15rem 0.5rem; border-radius: 99px; ${badgeStyle}">
            ${statusText}
          </span>
          <button class="btn btn-secondary" style="padding: 0.2rem 0.5rem; font-size: 0.75rem;" onclick="AdminApp.loadFixtureMatchToForm('${m.id}')" title="Cargar este partido en el marcador">
            <i class="fa-solid fa-pen-to-square"></i> Cargar
          </button>
        </div>

        <div style="display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; padding: 0.5rem 0;">
          <div style="flex: 1; display: flex; align-items: center; gap: 0.5rem;">
            ${t1Logo ? `<img src="${this.escape(t1Logo)}" style="width: 30px; height: 30px; object-fit: contain;">` : ''}
            <span style="font-weight: 700; font-size: 0.9rem; color: #fff;">${this.escape(t1Name)}</span>
          </div>

          <div style="font-weight: 900; font-size: 1.2rem; color: ${isPlayed ? 'var(--lmi-gold)' : 'var(--text-muted)'}; padding: 0 0.5rem; text-align: center; min-width: 55px;">
            ${scoreDisplay}
          </div>

          <div style="flex: 1; display: flex; align-items: center; justify-content: flex-end; gap: 0.5rem;">
            <span style="font-weight: 700; font-size: 0.9rem; color: #fff; text-align: right;">${this.escape(t2Name)}</span>
            ${t2Logo ? `<img src="${this.escape(t2Logo)}" style="width: 30px; height: 30px; object-fit: contain;">` : ''}
          </div>
        </div>
      `;

      container.appendChild(matchBox);
    });
  },

  loadFixtureMatchToForm(matchId) {
    const sel = document.getElementById('match-fixture-item-select');
    if (sel) {
      sel.value = matchId;
      this.onFixtureMatchSelect(matchId);
      this.showToast('Partido cargado en el marcador.', 'info');
      document.querySelector('.match-duel-box').scrollIntoView({ behavior: 'smooth' });
    }
  },

  async exportJornadaImage() {
    const target = document.getElementById('jornada-export-container');
    if (!target) return;
    const btn = document.getElementById('btn-export-jornada-img');
    const comp = document.getElementById('match-competition').value;
    const jornadaNum = document.getElementById('match-jornada-select').value;

    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Generando Imagen...';

    try {
      if (typeof html2canvas === 'undefined') {
        throw new Error('La librería html2canvas no está disponible.');
      }
      const canvas = await html2canvas(target, {
        backgroundColor: '#090e1a',
        scale: 2,
        useCORS: true
      });
      const dataUrl = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = `LMI_Jornada_${jornadaNum}_${comp.toUpperCase()}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      this.showToast('¡Imagen de la jornada exportada con éxito!', 'success');
    } catch (err) {
      console.error('Error exportando imagen:', err);
      this.showToast(`Error al exportar imagen: ${err.message}`, 'error');
    } finally {
      btn.disabled = false;
      btn.innerHTML = '<i class="fa-solid fa-camera"></i> <span>Exportar Jornada a Imagen (PNG)</span>';
    }
  },

  onMatchTeamChange(teamIndex, teamId) {
    const team = this.getTeamById(teamId);
    if (!team) return;
    const logoEl = document.getElementById(`match-team${teamIndex}-logo`);
    const nameEl = document.getElementById(`match-team${teamIndex}-name`);
    if (logoEl && team.logo) logoEl.src = team.logo;
    if (nameEl) nameEl.textContent = team.name;

    // Refresh player selects in existing match event rows
    this.refreshMatchEventPlayerDropdowns();
  },

  addMatchEventRow(initialData = null) {
    const team1Id = document.getElementById('match-team1-select').value;
    const team2Id = document.getElementById('match-team2-select').value;
    const team1 = this.getTeamById(team1Id);
    const team2 = this.getTeamById(team2Id);

    const eventId = (initialData && initialData.id) ? initialData.id : `ev_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
    const eventObj = {
      id: eventId,
      teamId: (initialData && initialData.teamId) ? initialData.teamId : team1Id,
      playerId: (initialData && initialData.playerId) ? initialData.playerId : '',
      goals: (initialData && typeof initialData.goals === 'number') ? initialData.goals : 1,
      assists: (initialData && typeof initialData.assists === 'number') ? initialData.assists : 0
    };
    this.matchEvents.push(eventObj);

    const container = document.getElementById('match-events-list');
    const emptyMsg = document.getElementById('match-events-empty');
    const header = document.getElementById('match-events-header');
    if (emptyMsg) emptyMsg.style.display = 'none';
    if (header) header.style.display = 'flex';

    const row = document.createElement('div');
    row.className = 'event-row';
    row.id = `row-${eventId}`;
    row.innerHTML = `
      <div style="flex: 2;">
        <select class="form-select ev-team-select" style="width: 100%; padding: 0.5rem 0.75rem; font-size: 0.88rem;">
          <option value="${team1Id}" ${eventObj.teamId === team1Id ? 'selected' : ''}>${team1 ? team1.name : 'Local'}</option>
          <option value="${team2Id}" ${eventObj.teamId === team2Id ? 'selected' : ''}>${team2 ? team2.name : 'Visitante'}</option>
        </select>
      </div>
      <div style="flex: 3;">
        <select class="form-select ev-player-select" style="width: 100%; padding: 0.5rem 0.75rem; font-size: 0.88rem;">
          <!-- Populated dynamically -->
        </select>
      </div>
      <div style="width: 105px; display: flex; justify-content: center;">
        <div class="ev-stat-box" title="Goles marcados por el jugador">
          <span style="font-size: 0.85rem;">⚽</span>
          <input type="number" min="0" max="15" value="${eventObj.goals}" class="ev-goals-input">
        </div>
      </div>
      <div style="width: 105px; display: flex; justify-content: center;">
        <div class="ev-stat-box" title="Asistencias dadas por el jugador">
          <span style="font-size: 0.85rem;">🎯</span>
          <input type="number" min="0" max="15" value="${eventObj.assists}" class="ev-assists-input">
        </div>
      </div>
      <div style="width: 44px; display: flex; justify-content: center;">
        <button class="btn btn-danger" style="padding: 0.45rem 0.65rem;" onclick="AdminApp.removeMatchEventRow('${eventId}')" title="Eliminar fila">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    `;

    container.appendChild(row);

    // Event listeners
    const teamSel = row.querySelector('.ev-team-select');
    const playerSel = row.querySelector('.ev-player-select');
    const goalsInput = row.querySelector('.ev-goals-input');
    const assistsInput = row.querySelector('.ev-assists-input');

    const populatePlayers = (tId, selectedPlayerId = null) => {
      playerSel.innerHTML = '<option value="">-- Seleccionar Jugador --</option>';
      const players = this.getPlayersByTeam(tId);
      players.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p.id;
        opt.textContent = `${p.name} (${p.position || 'MC'})`;
        if (selectedPlayerId && p.id === selectedPlayerId) {
          opt.selected = true;
        }
        playerSel.appendChild(opt);
      });
      if (selectedPlayerId && players.some(p => p.id === selectedPlayerId)) {
        playerSel.value = selectedPlayerId;
        eventObj.playerId = selectedPlayerId;
      } else if (players[0]) {
        playerSel.value = players[0].id;
        eventObj.playerId = players[0].id;
      } else {
        eventObj.playerId = '';
      }
    };

    populatePlayers(eventObj.teamId, eventObj.playerId);

    teamSel.addEventListener('change', (e) => {
      eventObj.teamId = e.target.value;
      populatePlayers(e.target.value);
    });

    playerSel.addEventListener('change', (e) => {
      eventObj.playerId = e.target.value;
    });

    goalsInput.addEventListener('input', (e) => {
      eventObj.goals = Math.max(0, parseInt(e.target.value, 10) || 0);
    });

    assistsInput.addEventListener('input', (e) => {
      eventObj.assists = Math.max(0, parseInt(e.target.value, 10) || 0);
    });
  },

  removeMatchEventRow(eventId) {
    this.matchEvents = this.matchEvents.filter(e => e.id !== eventId);
    const row = document.getElementById(`row-${eventId}`);
    if (row) row.remove();
    if (this.matchEvents.length === 0) {
      const emptyMsg = document.getElementById('match-events-empty');
      const header = document.getElementById('match-events-header');
      if (emptyMsg) emptyMsg.style.display = 'block';
      if (header) header.style.display = 'none';
    }
  },

  refreshMatchEventPlayerDropdowns() {
    const team1Id = document.getElementById('match-team1-select').value;
    const team2Id = document.getElementById('match-team2-select').value;
    const team1 = this.getTeamById(team1Id);
    const team2 = this.getTeamById(team2Id);

    document.querySelectorAll('.event-row').forEach(row => {
      const teamSel = row.querySelector('.ev-team-select');
      const playerSel = row.querySelector('.ev-player-select');
      if (!teamSel || !playerSel) return;

      const currentVal = teamSel.value;
      teamSel.innerHTML = `
        <option value="${team1Id}">${team1 ? team1.name : 'Local'}</option>
        <option value="${team2Id}">${team2 ? team2.name : 'Visitante'}</option>
      `;
      teamSel.value = (currentVal === team2Id) ? team2Id : team1Id;

      const currentPlayerVal = playerSel.value;
      playerSel.innerHTML = '<option value="">-- Seleccionar Jugador --</option>';
      const players = this.getPlayersByTeam(teamSel.value);
      players.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p.id;
        opt.textContent = `${p.name} (${p.position || 'MC'})`;
        playerSel.appendChild(opt);
      });
      if (currentPlayerVal && players.some(p => p.id === currentPlayerVal)) {
        playerSel.value = currentPlayerVal;
      } else if (players[0]) {
        playerSel.value = players[0].id;
      }
    });
  },

  async applyMatchResults() {
    const comp = document.getElementById('match-competition').value;
    const phase = document.getElementById('match-phase').value;
    const team1Id = document.getElementById('match-team1-select').value;
    const team2Id = document.getElementById('match-team2-select').value;
    const score1 = parseInt(document.getElementById('match-score1').value, 10) || 0;
    const score2 = parseInt(document.getElementById('match-score2').value, 10) || 0;
    const autoStats = document.getElementById('chk-auto-stats').checked;
    const updateBracket = document.getElementById('chk-cup-bracket').checked;

    if (team1Id === team2Id) {
      this.showToast('El equipo local y visitante no pueden ser el mismo', 'error');
      return;
    }

    const team1 = this.getTeamById(team1Id);
    const team2 = this.getTeamById(team2Id);

    // Actualizar estadísticas de jugadores
    let updatedStatsCount = 0;
    if (autoStats && this.matchEvents.length > 0) {
      this.matchEvents.forEach(ev => {
        if (!ev.playerId) return;
        const player = this.getPlayerById(ev.playerId);
        if (!player) return;

        const goals = parseInt(ev.goals, 10) || 0;
        const assists = parseInt(ev.assists, 10) || 0;

        if (goals > 0) {
          player.goals = (player.goals || 0) + goals;
          if (comp === 'oro' || comp === 'plata' || comp === 'liga') player.goals_liga = (player.goals_liga || 0) + goals;
          else if (comp === 'champions') player.goals_champions = (player.goals_champions || 0) + goals;
          else if (comp === 'estelar') player.goals_estelar = (player.goals_estelar || 0) + goals;
          updatedStatsCount += goals;
        }

        if (assists > 0) {
          player.assists = (player.assists || 0) + assists;
          if (comp === 'oro' || comp === 'plata' || comp === 'liga') player.assists_liga = (player.assists_liga || 0) + assists;
          else if (comp === 'champions') player.assists_champions = (player.assists_champions || 0) + assists;
          else if (comp === 'estelar') player.assists_estelar = (player.assists_estelar || 0) + assists;
          updatedStatsCount += assists;
        }
      });
    }

    // Serializar eventos para guardar en formato estándar compatible
    const serializedEvents = [];
    this.matchEvents.forEach(e => {
      if (!e.playerId) return;
      const player = this.getPlayerById(e.playerId);
      const pName = player ? player.name : 'Desconocido';
      const g = parseInt(e.goals, 10) || 0;
      const a = parseInt(e.assists, 10) || 0;

      if (g > 0) {
        serializedEvents.push({
          playerId: e.playerId,
          playerName: pName,
          teamId: e.teamId,
          type: 'gol',
          count: g
        });
      }
      if (a > 0) {
        serializedEvents.push({
          playerId: e.playerId,
          playerName: pName,
          teamId: e.teamId,
          type: 'asistencia',
          count: a
        });
      }
    });

    // Actualizar cuadro si es Copa / Champions
    if ((comp === 'champions' || comp === 'estelar') && updateBracket) {
      const matchArray = comp === 'champions' ? this.data.championsLeagueMatches : this.data.copaEstelarMatches;
      if (matchArray) {
        let targetMatch = matchArray.find(m => m.fase && m.fase.toLowerCase() === phase.toLowerCase());
        if (!targetMatch) {
          targetMatch = matchArray.find(m => 
            (m.team1 === team1.name && m.team2 === team2.name) ||
            (m.team1 === team2.name && m.team2 === team1.name)
          );
        }

        if (targetMatch) {
          targetMatch.team1 = team1.name;
          targetMatch.score1 = String(score1);
          targetMatch.team2 = team2.name;
          targetMatch.score2 = String(score2);
          targetMatch.estado = 'Finalizado';
        } else {
          matchArray.push({
            fase: phase,
            team1: team1.name,
            score1: String(score1),
            team2: team2.name,
            score2: String(score2),
            estado: 'Finalizado'
          });
        }
      }
    }

    // Actualizar partido del fixture si es División Oro o Plata
    let fixtureMatchId = null;
    let jornadaNumber = null;
    if (comp === 'oro' || comp === 'plata') {
      jornadaNumber = parseInt(document.getElementById('match-jornada-select').value, 10) || 1;
      fixtureMatchId = document.getElementById('match-fixture-item-select').value;
      const rounds = (this.data && this.data.fixtures) ? (this.data.fixtures[comp] || []) : [];
      let fMatch = null;
      if (fixtureMatchId) {
        for (const r of rounds) {
          fMatch = r.matches.find(m => m.id === fixtureMatchId);
          if (fMatch) break;
        }
      }
      if (!fMatch) {
        const r = rounds.find(rd => rd.jornada === jornadaNumber);
        if (r && r.matches) {
          fMatch = r.matches.find(m => (m.team1Id === team1.id && m.team2Id === team2.id) || (m.team1Id === team2.id && m.team2Id === team1.id));
        }
      }
      if (fMatch) {
        fixtureMatchId = fMatch.id;
        fMatch.played = true;
        fMatch.score1 = score1;
        fMatch.score2 = score2;
        fMatch.events = serializedEvents;
      }
    }

    // Guardar en el Historial de Partidos para poder auditar o deshacer
    const matchRecord = {
      id: `match_${Date.now()}`,
      timestamp: Date.now(),
      date: new Date().toLocaleDateString('es-MX', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
      competition: comp,
      jornada: jornadaNumber,
      fixtureMatchId: fixtureMatchId,
      phase: (comp === 'champions' || comp === 'estelar') ? phase : (jornadaNumber ? `Jornada ${jornadaNumber}` : ''),
      team1Id: team1.id,
      team1Name: team1.name,
      team1Logo: team1.logo || '',
      score1: score1,
      team2Id: team2.id,
      team2Name: team2.name,
      team2Logo: team2.logo || '',
      score2: score2,
      events: serializedEvents
    };
    if (!this.data.matchHistory) this.data.matchHistory = [];
    this.data.matchHistory.unshift(matchRecord);

    this.renderTopScorers();
    this.renderTeamsView();
    this.renderMatchHistory();
    if (comp === 'oro' || comp === 'plata') {
      this.onJornadaChange();
    }

    // Limpiar eventos y formulario
    this.matchEvents = [];
    const eventsList = document.getElementById('match-events-list');
    if (eventsList) {
      eventsList.innerHTML = `
        <p style="color: var(--text-muted); text-align: center; padding: 1.25rem;" id="match-events-empty">
          No hay eventos agregados. Haz clic en "Añadir Goleador / Asistente" si hubo anotaciones o pases de gol.
        </p>
      `;
    }
    const eventsHeader = document.getElementById('match-events-header');
    if (eventsHeader) eventsHeader.style.display = 'none';
    document.getElementById('match-score1').value = 0;
    document.getElementById('match-score2').value = 0;

    // Guardar inmediatamente en data.js
    await this.saveData(true);
    this.showToast(`¡Partido registrado y guardado exitosamente! ${team1.name} ${score1} - ${score2} ${team2.name}.`, 'success');
  },

  renderMatchHistory() {
    const tbody = document.getElementById('match-history-tbody');
    const badge = document.getElementById('lbl-matches-history-count');
    const filterSelect = document.getElementById('history-filter-select');
    if (!tbody) return;

    tbody.innerHTML = '';
    const filterVal = filterSelect ? filterSelect.value : 'all';
    let matches = this.data.matchHistory || [];
    
    if (filterVal !== 'all') {
      matches = matches.filter(m => m.competition === filterVal);
    }
    if (badge) badge.textContent = `${matches.length} partidos`;

    if (matches.length === 0) {
      tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 2rem;">No hay partidos registrados para esta selección.</td></tr>`;
      return;
    }

    const compLabels = {
      'oro': '<span style="color: var(--lmi-gold); font-weight: 800;"><i class="fa-solid fa-trophy"></i> Div. Oro</span>',
      'plata': '<span style="color: #cbd5e1; font-weight: 800;"><i class="fa-solid fa-medal"></i> Div. Plata</span>',
      'liga': '<span style="color: #60a5fa; font-weight: 700;">Liga LMI</span>',
      'champions': '<span style="color: #38bdf8; font-weight: 700;"><i class="fa-solid fa-star"></i> Champions</span>',
      'estelar': '<span style="color: #c084fc; font-weight: 700;"><i class="fa-solid fa-shield"></i> Copa Estelar</span>'
    };

    matches.forEach(m => {
      const compBadge = compLabels[m.competition] || m.competition;
      const phaseBadge = m.phase ? ` <span style="font-size: 0.75rem; color: var(--text-muted);">(${this.escape(m.phase)})</span>` : '';
      
      const eventsSummary = (m.events && m.events.length > 0)
        ? m.events.map(ev => `${ev.type === 'gol' ? '⚽' : '🎯'} <strong>${this.escape(ev.playerName)}</strong> (${ev.count})`).join(', ')
        : '<span style="color: var(--text-muted); font-size: 0.8rem;">Sin goleadores registrados</span>';

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${compBadge}${phaseBadge}</td>
        <td style="color: var(--text-muted); font-size: 0.82rem; white-space: nowrap;">${this.escape(m.date || '')}</td>
        <td>
          <div style="display: flex; align-items: center; gap: 0.5rem; font-weight: 700;">
            ${m.team1Logo ? `<img src="${this.escape(m.team1Logo)}" style="width: 20px; height: 20px; object-fit: contain;">` : ''}
            <span>${this.escape(m.team1Name)}</span>
            <span style="color: var(--text-muted); font-size: 0.8rem;">vs</span>
            ${m.team2Logo ? `<img src="${this.escape(m.team2Logo)}" style="width: 20px; height: 20px; object-fit: contain;">` : ''}
            <span>${this.escape(m.team2Name)}</span>
          </div>
        </td>
        <td style="text-align: center; font-weight: 900; font-size: 1.15rem; color: var(--lmi-gold); white-space: nowrap;">
          ${m.score1} - ${m.score2}
        </td>
        <td style="font-size: 0.85rem; line-height: 1.4;">${eventsSummary}</td>
        <td style="text-align: right; white-space: nowrap;">
          <button class="btn btn-danger" style="padding: 0.35rem 0.65rem; font-size: 0.8rem;" onclick="AdminApp.revertMatch('${m.id}')" title="Deshacer partido y revertir goles de jugadores">
            <i class="fa-solid fa-rotate-left"></i> Deshacer
          </button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  },

  async revertMatch(matchId) {
    if (!this.data || !this.data.matchHistory) return;
    const match = this.data.matchHistory.find(m => m.id === matchId);
    if (!match) return;

    const confirmMsg = `¿Estás seguro de deshacer este partido?\n\n${match.team1Name} ${match.score1} - ${match.score2} ${match.team2Name}\n\nSe restarán automáticamente los goles y asistencias asignados a los jugadores.`;
    if (!confirm(confirmMsg)) return;

    // Revertir goles y asistencias asignados
    let revertedCount = 0;
    if (match.events && match.events.length > 0) {
      match.events.forEach(ev => {
        if (!ev.playerId) return;
        const player = this.getPlayerById(ev.playerId);
        if (!player) return;

        const count = ev.count || 1;
        if (ev.type === 'gol') {
          player.goals = Math.max(0, (player.goals || 0) - count);
          if (match.competition === 'oro' || match.competition === 'plata' || match.competition === 'liga') {
            player.goals_liga = Math.max(0, (player.goals_liga || 0) - count);
          } else if (match.competition === 'champions') {
            player.goals_champions = Math.max(0, (player.goals_champions || 0) - count);
          } else if (match.competition === 'estelar') {
            player.goals_estelar = Math.max(0, (player.goals_estelar || 0) - count);
          }
        } else if (ev.type === 'asistencia') {
          player.assists = Math.max(0, (player.assists || 0) - count);
          if (match.competition === 'oro' || match.competition === 'plata' || match.competition === 'liga') {
            player.assists_liga = Math.max(0, (player.assists_liga || 0) - count);
          } else if (match.competition === 'champions') {
            player.assists_champions = Math.max(0, (player.assists_champions || 0) - count);
          } else if (match.competition === 'estelar') {
            player.assists_estelar = Math.max(0, (player.assists_estelar || 0) - count);
          }
        }
        revertedCount += count;
      });
    }

    // Revertir fixture si aplica
    if (match.competition === 'oro' || match.competition === 'plata') {
      const rounds = (this.data && this.data.fixtures) ? (this.data.fixtures[match.competition] || []) : [];
      for (const r of rounds) {
        const fm = r.matches.find(m => m.id === match.fixtureMatchId || ((m.team1Id === match.team1Id && m.team2Id === match.team2Id) || (m.team1Id === match.team2Id && m.team2Id === match.team1Id)));
        if (fm) {
          fm.played = false;
          fm.score1 = null;
          fm.score2 = null;
          fm.events = [];
          break;
        }
      }
    }

    // Eliminar del historial
    this.data.matchHistory = this.data.matchHistory.filter(m => m.id !== matchId);

    this.renderMatchHistory();
    this.renderTopScorers();
    this.renderTeamsView();
    if (match.competition === 'oro' || match.competition === 'plata') {
      this.onJornadaChange();
    }

    // Guardar inmediatamente en data.js
    await this.saveData(true);
    this.showToast(`Partido deshecho con éxito. Se restaron ${revertedCount} estadísticas de los jugadores.`, 'success');
  },

  resetCurrentClubSeasonStats() {
    if (!this.selectedTeamId) return;
    const team = this.getTeamById(this.selectedTeamId);
    if (!team) return;

    const confirmMsg = `¿Deseas reiniciar a CERO (0) todos los goles y asistencias de los jugadores de ${team.name}?\n\nUsa esta opción al comenzar una nueva temporada. Esta acción no se puede deshacer.`;
    if (!confirm(confirmMsg)) return;

    const players = this.getPlayersByTeam(this.selectedTeamId);
    players.forEach(p => {
      p.goals = 0;
      p.assists = 0;
      p.goals_liga = 0;
      p.assists_liga = 0;
      p.goals_champions = 0;
      p.assists_champions = 0;
      p.goals_estelar = 0;
      p.assists_estelar = 0;
    });

    this.markDirty();
    this.renderRosterTable();
    this.renderTopScorers();
    this.showToast(`Goles y asistencias de ${team.name} reiniciados a 0 para la nueva temporada.`, 'success');
  },

  // ==================== TEAMS & ROSTERS STUDIO ====================
  onTeamSelected(teamId) {
    this.selectedTeamId = teamId;
    const team = this.getTeamById(teamId);
    if (!team) return;

    document.getElementById('team-edit-manager').value = team.manager || '';
    document.getElementById('team-edit-stadium').value = team.stadium || '';
    document.getElementById('team-edit-budget').value = team.budget || 0;
    const divEl = document.getElementById('team-edit-division');
    if (divEl) divEl.value = team.division || 'oro';

    this.renderRosterTable();
  },

  async saveTeamDetails() {
    if (!this.selectedTeamId) return;
    const team = this.getTeamById(this.selectedTeamId);
    if (!team) return;

    team.manager = document.getElementById('team-edit-manager').value.trim();
    team.stadium = document.getElementById('team-edit-stadium').value.trim();
    team.budget = parseInt(document.getElementById('team-edit-budget').value, 10) || 0;
    
    const oldDiv = team.division || 'oro';
    const divEl = document.getElementById('team-edit-division');
    if (divEl) team.division = divEl.value;

    if (oldDiv !== team.division) {
      const curFilter = document.getElementById('team-filter-division') ? document.getElementById('team-filter-division').value : 'all';
      this.populateTeamSelectorByDivision(curFilter);
    }

    await this.saveData(true);
    this.showToast(`Datos actualizados y guardados para ${team.name}.`, 'success');
  },

  renderTeamsView() {
    if (!this.selectedTeamId && this.data && this.data.teams && this.data.teams[0]) {
      this.selectedTeamId = this.data.teams[0].id;
    }
    if (this.selectedTeamId) {
      this.onTeamSelected(this.selectedTeamId);
    }
  },

  renderRosterTable(filterText = '') {
    const tbody = document.getElementById('roster-tbody');
    tbody.innerHTML = '';
    if (!this.selectedTeamId || !this.data || !this.data.players) return;

    let players = this.getPlayersByTeam(this.selectedTeamId);
    document.getElementById('lbl-roster-count').textContent = `${players.length} jugadores`;

    if (filterText) {
      const q = filterText.toLowerCase();
      players = players.filter(p => p.name.toLowerCase().includes(q) || (p.position && p.position.toLowerCase().includes(q)));
    }

    if (players.length === 0) {
      tbody.innerHTML = `<tr><td colspan="10" style="text-align: center; color: var(--text-muted); padding: 2rem;">No hay jugadores que coincidan con la búsqueda.</td></tr>`;
      return;
    }

    players.forEach(p => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td style="font-weight: 700; color: #fff;">
          ${this.escape(p.name)}
          ${p.isLegend ? '<span style="color: var(--lmi-gold); font-size: 0.75rem; margin-left: 0.3rem;">★ Leyenda</span>' : ''}
        </td>
        <td><span class="pos-badge">${p.position || 'MC'}</span></td>
        <td>${this.formatMoney(p.price || 0)}</td>
        <td>${p.goals_liga || 0}</td>
        <td>${p.goals_champions || 0}</td>
        <td>${p.goals_estelar || 0}</td>
        <td style="font-weight: 800; color: var(--lmi-gold);">${p.goals || 0}</td>
        <td>${p.assists || 0}</td>
        <td>
          <span style="font-size: 0.75rem; padding: 0.2rem 0.5rem; border-radius: 4px; background: ${p.cardType === 'Leyenda' ? 'rgba(255,209,0,0.15)' : 'rgba(255,255,255,0.08)'}; color: ${p.cardType === 'Leyenda' ? 'var(--lmi-gold)' : 'var(--text-secondary)'}; font-weight: 700;">
            ${p.cardType || 'Normal'}
          </span>
        </td>
        <td style="text-align: right; white-space: nowrap;">
          <button class="btn btn-secondary" style="padding: 0.35rem 0.65rem; font-size: 0.8rem; margin-right: 0.3rem;" onclick="AdminApp.openPlayerModal('${p.id}')" title="Editar Jugador">
            <i class="fa-solid fa-pen"></i>
          </button>
          <button class="btn btn-secondary" style="padding: 0.35rem 0.65rem; font-size: 0.8rem; margin-right: 0.3rem;" onclick="AdminApp.quickTransferPlayer('${p.id}')" title="Traspasar a otro club">
            <i class="fa-solid fa-arrow-right-arrow-left"></i>
          </button>
          <button class="btn btn-danger" style="padding: 0.35rem 0.65rem; font-size: 0.8rem;" onclick="AdminApp.deletePlayer('${p.id}')" title="Dar de baja">
            <i class="fa-solid fa-trash"></i>
          </button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  },

  filterRosterTable(query) {
    this.renderRosterTable(query);
  },

  // ==================== PLAYER MODAL ====================
  openPlayerModal(playerId = null) {
    const modal = document.getElementById('modal-player');
    const title = document.getElementById('modal-player-title');
    const idInput = document.getElementById('player-modal-id');

    if (playerId) {
      const player = this.getPlayerById(playerId);
      if (!player) return;
      title.innerHTML = `<i class="fa-solid fa-user-pen"></i> Editar: ${this.escape(player.name)}`;
      idInput.value = player.id;

      document.getElementById('player-modal-name').value = player.name;
      document.getElementById('player-modal-pos').value = player.position || 'MC';
      document.getElementById('player-modal-team').value = player.teamId || this.selectedTeamId;
      document.getElementById('player-modal-price').value = player.price || 0;
      document.getElementById('player-modal-goals-liga').value = player.goals_liga || 0;
      document.getElementById('player-modal-goals-champ').value = player.goals_champions || 0;
      document.getElementById('player-modal-goals-estelar').value = player.goals_estelar || 0;
      document.getElementById('player-modal-assists').value = player.assists || 0;
      document.getElementById('player-modal-cardtype').value = player.cardType || 'Normal';
    } else {
      title.innerHTML = `<i class="fa-solid fa-user-plus"></i> Añadir Nuevo Jugador`;
      idInput.value = '';

      document.getElementById('player-modal-name').value = '';
      document.getElementById('player-modal-pos').value = 'MC';
      document.getElementById('player-modal-team').value = this.selectedTeamId || '';
      document.getElementById('player-modal-price').value = 5000000;
      document.getElementById('player-modal-goals-liga').value = 0;
      document.getElementById('player-modal-goals-champ').value = 0;
      document.getElementById('player-modal-goals-estelar').value = 0;
      document.getElementById('player-modal-assists').value = 0;
      document.getElementById('player-modal-cardtype').value = 'Normal';
    }

    modal.style.display = 'flex';
  },

  closePlayerModal() {
    document.getElementById('modal-player').style.display = 'none';
  },

  async savePlayerFromModal() {
    const id = document.getElementById('player-modal-id').value;
    const name = document.getElementById('player-modal-name').value.trim();
    if (!name) {
      this.showToast('El nombre del jugador es requerido', 'error');
      return;
    }

    const pos = document.getElementById('player-modal-pos').value;
    const teamId = document.getElementById('player-modal-team').value;
    const price = parseInt(document.getElementById('player-modal-price').value, 10) || 0;
    const gLiga = parseInt(document.getElementById('player-modal-goals-liga').value, 10) || 0;
    const gChamp = parseInt(document.getElementById('player-modal-goals-champ').value, 10) || 0;
    const gEstelar = parseInt(document.getElementById('player-modal-goals-estelar').value, 10) || 0;
    const assists = parseInt(document.getElementById('player-modal-assists').value, 10) || 0;
    const cardType = document.getElementById('player-modal-cardtype').value;

    const totalGoals = gLiga + gChamp + gEstelar;

    if (id) {
      // Editar existente
      const player = this.getPlayerById(id);
      if (player) {
        player.name = name;
        player.position = pos;
        player.teamId = teamId;
        player.price = price;
        player.goals_liga = gLiga;
        player.goals_champions = gChamp;
        player.goals_estelar = gEstelar;
        player.goals = totalGoals;
        player.assists = assists;
        player.cardType = cardType;
        player.isLegend = cardType === 'Leyenda';
      }
    } else {
      // Nuevo jugador
      const newId = `p_${Date.now()}`;
      const newPlayer = {
        id: newId,
        name: name,
        position: pos,
        teamId: teamId || this.selectedTeamId,
        price: price,
        goals_liga: gLiga,
        goals_champions: gChamp,
        goals_estelar: gEstelar,
        goals: totalGoals,
        assists: assists,
        cardType: cardType,
        isLegend: cardType === 'Leyenda'
      };
      this.data.players.push(newPlayer);
    }

    this.closePlayerModal();
    this.renderRosterTable();
    this.renderTopScorers();
    this.renderDashboard();
    await this.saveData(true);
    this.showToast(`Jugador ${name} guardado con éxito.`, 'success');
  },

  async deletePlayer(playerId) {
    const player = this.getPlayerById(playerId);
    if (!player) return;

    if (!confirm(`¿Estás seguro de eliminar a ${player.name} de la plantilla?`)) return;

    this.data.players = this.data.players.filter(p => p.id !== playerId);
    this.renderRosterTable();
    this.renderTopScorers();
    this.renderDashboard();
    await this.saveData(true);
    this.showToast(`Jugador ${player.name} eliminado.`, 'success');
  },

  async quickTransferPlayer(playerId) {
    const player = this.getPlayerById(playerId);
    if (!player) return;

    const teams = this.data.teams.filter(t => t.id !== player.teamId);
    const teamNames = teams.map((t, idx) => `${idx + 1}. ${t.name}`).join('\n');
    const input = prompt(`Traspasar a ${player.name}.\nElige el número del nuevo club:\n\n${teamNames}`);
    if (!input) return;

    const chosenIdx = parseInt(input.trim(), 10) - 1;
    if (isNaN(chosenIdx) || chosenIdx < 0 || chosenIdx >= teams.length) {
      this.showToast('Opción de club inválida.', 'error');
      return;
    }

    const newTeam = teams[chosenIdx];
    const oldTeam = this.getTeamById(player.teamId);
    player.teamId = newTeam.id;

    // Registrar en mercado automáticamente
    this.data.marketMovements.unshift({
      player: player.name,
      type: 'Fichaje',
      fromTeamId: oldTeam ? oldTeam.id : '',
      fromTeamName: oldTeam ? oldTeam.name : 'Libre',
      toTeamId: newTeam.id,
      toTeamName: newTeam.name,
      price: player.price || 0,
      seasons: 1,
      details: 'Traspaso directo de plantilla'
    });

    this.renderRosterTable();
    this.renderMarketView();
    await this.saveData(true);
    this.showToast(`${player.name} traspasado a ${newTeam.name}.`, 'success');
  },

  // ==================== MARKET STUDIO ====================
  renderMarketView() {
    const tbody = document.getElementById('market-tbody');
    tbody.innerHTML = '';
    if (!this.data || !this.data.marketMovements) return;

    const movements = this.data.marketMovements;
    document.getElementById('lbl-market-total').textContent = `${movements.length} movimientos`;

    if (movements.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-muted); padding: 2rem;">No hay movimientos de mercado registrados.</td></tr>`;
      return;
    }

    movements.forEach((m, idx) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td style="font-weight: 700; color: #fff;">${this.escape(m.player)}</td>
        <td>
          <span style="font-size: 0.78rem; font-weight: 700; padding: 0.2rem 0.55rem; border-radius: 4px; background: rgba(59, 130, 246, 0.15); color: #60a5fa;">
            ${this.escape(m.type || 'Fichaje')}
          </span>
        </td>
        <td>${this.escape(m.fromTeamName || '-')}</td>
        <td>${this.escape(m.toTeamName || '-')}</td>
        <td>${this.formatMoney(m.price || 0)}</td>
        <td style="color: var(--text-secondary); font-size: 0.85rem;">${this.escape(m.details || '')}</td>
        <td style="text-align: right;">
          <button class="btn btn-danger" style="padding: 0.35rem 0.65rem; font-size: 0.8rem;" onclick="AdminApp.deleteMarketMovement(${idx})">
            <i class="fa-solid fa-trash"></i>
          </button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  },

  submitMarketMovement() {
    const playerName = document.getElementById('market-player-name').value.trim();
    if (!playerName) {
      this.showToast('El nombre del jugador es requerido', 'error');
      return;
    }

    const type = document.getElementById('market-type').value;
    const price = parseInt(document.getElementById('market-price').value, 10) || 0;
    const fromTeamId = document.getElementById('market-from-team').value;
    const toTeamId = document.getElementById('market-to-team').value;
    const seasons = parseInt(document.getElementById('market-seasons').value, 10) || 1;
    const details = document.getElementById('market-details').value.trim();

    const fromTeam = this.getTeamById(fromTeamId);
    const toTeam = this.getTeamById(toTeamId);

    const autoTransfer = document.getElementById('market-auto-transfer-roster').checked;
    const autoBudget = document.getElementById('market-auto-adjust-budget').checked;

    // Crear movimiento
    const movement = {
      player: playerName,
      type: type,
      fromTeamId: fromTeamId,
      fromTeamName: fromTeam ? fromTeam.name : '',
      toTeamId: toTeamId,
      toTeamName: toTeam ? toTeam.name : '',
      price: price,
      seasons: seasons,
      details: details
    };
    this.data.marketMovements.unshift(movement);

    // Mover de plantilla
    if (autoTransfer) {
      const player = this.data.players.find(p => p.name.toLowerCase() === playerName.toLowerCase());
      if (player) {
        player.teamId = toTeamId;
      }
    }

    // Ajustar presupuestos
    if (autoBudget && price > 0) {
      if (toTeam) toTeam.budget = (toTeam.budget || 0) - price;
      if (fromTeam) fromTeam.budget = (fromTeam.budget || 0) + price;
    }

    this.markDirty();
    this.renderMarketView();
    this.renderTeamsView();
    this.renderDashboard();

    // Reset campos
    document.getElementById('market-player-name').value = '';
    document.getElementById('market-details').value = '';

    this.showToast(`Movimiento registrado: ${playerName} (${type}).`, 'success');
  },

  deleteMarketMovement(index) {
    if (!confirm('¿Eliminar este movimiento del historial de mercado?')) return;
    this.data.marketMovements.splice(index, 1);
    this.markDirty();
    this.renderMarketView();
    this.renderDashboard();
    this.showToast('Movimiento eliminado del historial.', 'success');
  },

  // ==================== TROPHIES & BALLON D'OR STUDIO ====================
  renderTrophiesView() {
    this.renderBdoCards();
    this.renderChampionsTable();
  },

  renderBdoCards() {
    const container = document.getElementById('bdo-cards-container');
    container.innerHTML = '';
    if (!this.data || !this.data.balonOro) return;

    if (this.data.balonOro.length === 0) {
      container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 2rem;">No hay registros de Balón de Oro guardados.</p>`;
      return;
    }

    this.data.balonOro.forEach((bdo, idx) => {
      const playerName = bdo.player || bdo.jugador || '';
      const teamName = bdo.team || bdo.club || '';
      const seasonName = bdo.season || bdo.temporada || 'Temporada 10';
      const goalsCount = (bdo.goals !== undefined) ? bdo.goals : (bdo.goles || 0);
      const assistsCount = (bdo.assists !== undefined) ? bdo.assists : (bdo.asistencias || 0);
      const imgPath = bdo.image || bdo.imagen || 'Balon de oro/vardybalonoro.jpg';
      const descText = bdo.description || bdo.descripcion || '';

      const card = document.createElement('div');
      card.className = 'card';
      card.style.background = '#0b1324';
      card.style.border = '1px solid rgba(255, 209, 0, 0.3)';
      card.style.display = 'flex';
      card.style.flexDirection = 'column';
      card.style.gap = '0.85rem';
      card.style.position = 'relative';

      card.innerHTML = `
        <div style="position: relative; width: 100%; height: 180px; border-radius: var(--radius-md); overflow: hidden; background: #000;">
          <img src="${this.escape(imgPath)}" alt="${this.escape(playerName)}" style="width: 100%; height: 100%; object-fit: cover;">
          <div style="position: absolute; top: 8px; right: 8px; background: rgba(0,0,0,0.75); border: 1px solid var(--lmi-gold); color: var(--lmi-gold); font-size: 0.75rem; font-weight: 800; padding: 0.2rem 0.6rem; border-radius: 99px;">
            ${this.escape(seasonName)}
          </div>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
          <div>
            <h3 style="font-size: 1.2rem; font-weight: 800; color: #fff;">${this.escape(playerName)}</h3>
            <span style="color: var(--lmi-gold); font-weight: 700; font-size: 0.85rem;">${this.escape(teamName)}</span>
          </div>
        </div>

        <div style="display: flex; gap: 0.75rem; background: rgba(255,255,255,0.03); padding: 0.65rem; border-radius: var(--radius-md); font-size: 0.85rem;">
          <div style="flex: 1; text-align: center;">
            <span style="display: block; color: var(--text-muted); font-size: 0.75rem;">GOLES</span>
            <strong style="color: var(--lmi-gold); font-size: 1.1rem;">${goalsCount}</strong>
          </div>
          <div style="width: 1px; background: rgba(255,255,255,0.1);"></div>
          <div style="flex: 1; text-align: center;">
        <div style="display: flex; gap: 1rem;">
          <img src="${img}" alt="${player}" style="width: 70px; height: 90px; object-fit: cover; border-radius: var(--radius-sm); border: 1px solid rgba(255, 209, 0, 0.4);" onerror="this.src='Sala de campeones/Balon de oro/trofeo_balon_oro.jpg'">
          <div style="flex: 1; min-width: 0;">
            <span class="badge" style="background: rgba(255,209,0,0.15); color: var(--lmi-gold); margin-bottom: 0.35rem; display: inline-block;">${season}</span>
            <h3 style="font-size: 1.05rem; font-weight: 800; color: #fff; margin-bottom: 0.2rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${player}</h3>
            <p style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 0.5rem;">${team}</p>
            <div style="display: flex; gap: 0.75rem; font-size: 0.8rem; color: var(--text-muted);">
              <span>⚽ <strong>${goals}</strong> G</span>
              <span>🎯 <strong>${assists}</strong> A</span>
            </div>
          </div>
        </div>
        <div style="display: flex; justify-content: flex-end; gap: 0.5rem; margin-top: 1rem; padding-top: 0.75rem; border-top: 1px solid var(--border-color);">
          <button class="btn btn-secondary" style="padding: 0.35rem 0.65rem; font-size: 0.8rem;" onclick="AdminApp.openBdoModal(${idx})">
            <i class="fa-solid fa-pen"></i> Editar
          </button>
          <button class="btn btn-danger" style="padding: 0.35rem 0.65rem; font-size: 0.8rem;" onclick="AdminApp.deleteBdo(${idx})">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      `;
      grid.appendChild(card);
    });
  },

  openBdoModal(index = null) {
    const modal = document.getElementById('modal-bdo');
    const title = document.getElementById('modal-bdo-title');
    const idxInput = document.getElementById('modal-bdo-idx');
    if (idxInput) idxInput.value = index !== null ? index : '';

    if (index !== null && this.data.balonOro && this.data.balonOro[index]) {
      const bdo = this.data.balonOro[index];
      if (title) title.innerHTML = '<i class="fa-solid fa-pen"></i> Editar Ganador de Balón de Oro';
      const setVal = (id, val) => { const el = document.getElementById(id); if (el) el.value = val; };
      setVal('bdo-temporada', bdo.season || bdo.temporada || '');
      setVal('bdo-jugador', bdo.player || bdo.jugador || '');
      setVal('bdo-club', bdo.team || bdo.club || '');
      setVal('bdo-dt', bdo.manager || bdo.dt || '');
      setVal('bdo-imagen', bdo.image || bdo.imagen || '');
      setVal('bdo-goles', bdo.goals !== undefined ? bdo.goals : (bdo.goles || 0));
      setVal('bdo-asistencias', bdo.assists !== undefined ? bdo.assists : (bdo.asistencias || 0));
      setVal('bdo-descripcion', bdo.description || bdo.descripcion || '');
    } else {
      if (title) title.innerHTML = '<i class="fa-solid fa-award"></i> Añadir Ganador de Balón de Oro';
      const setVal = (id, val) => { const el = document.getElementById(id); if (el) el.value = val; };
      setVal('bdo-temporada', 'Temporada 10');
      setVal('bdo-jugador', '');
      setVal('bdo-club', '');
      setVal('bdo-dt', '');
      setVal('bdo-imagen', 'Sala de campeones/Balon de oro/trofeo_balon_oro.jpg');
      setVal('bdo-goles', 0);
      setVal('bdo-asistencias', 0);
      setVal('bdo-descripcion', '');
    }

    if (modal) modal.style.display = 'flex';
  },

  closeBdoModal() {
    const modal = document.getElementById('modal-bdo');
    if (modal) modal.style.display = 'none';
  },

  async saveBdoFromModal() {
    const idxEl = document.getElementById('modal-bdo-idx');
    const idxStr = idxEl ? idxEl.value : '';
    const idx = idxStr !== '' ? parseInt(idxStr, 10) : -1;

    const getVal = (id) => { const el = document.getElementById(id); return el ? el.value.trim() : ''; };
    const temporada = getVal('bdo-temporada');
    const jugador = getVal('bdo-jugador');
    const club = getVal('bdo-club');
    const dt = getVal('bdo-dt');
    const imagen = getVal('bdo-imagen');
    const goles = parseInt(getVal('bdo-goles'), 10) || 0;
    const asistencias = parseInt(getVal('bdo-asistencias'), 10) || 0;
    const descripcion = getVal('bdo-descripcion');

    if (!jugador) {
      this.showToast('El nombre del jugador es requerido.', 'error');
      return;
    }

    const bdoObj = {
      season: temporada,
      temporada: temporada,
      player: jugador,
      jugador: jugador,
      team: club,
      club: club,
      manager: dt,
      dt: dt,
      image: imagen,
      imagen: imagen,
      goals: goles,
      goles: goles,
      assists: asistencias,
      asistencias: asistencias,
      description: descripcion,
      descripcion: descripcion
    };

    if (!this.data.balonOro) this.data.balonOro = [];

    if (idx >= 0 && this.data.balonOro[idx]) {
      this.data.balonOro[idx] = Object.assign(this.data.balonOro[idx], bdoObj);
    } else {
      this.data.balonOro.push(bdoObj);
    }

    this.closeBdoModal();
    this.renderBdoCards();
    this.renderDashboard();
    await this.saveData(true);
    this.showToast(`Registro de Balón de Oro guardado para ${jugador}.`, 'success');
  },

  async deleteBdo(index) {
    if (!confirm('¿Eliminar este registro de Balón de Oro?')) return;
    this.data.balonOro.splice(index, 1);
    this.renderBdoCards();
    this.renderDashboard();
    await this.saveData(true);
    this.showToast('Registro eliminado.', 'success');
  },

  renderChampionsTable() {
    const tbody = document.getElementById('champions-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';
    if (!this.data || !this.data.champions) return;

    if (this.data.champions.length === 0) {
      tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; color: var(--text-muted); padding: 2rem;">No hay campeones registrados.</td></tr>`;
      return;
    }

    this.data.champions.forEach((champ, idx) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td style="font-weight: 700; color: var(--lmi-gold);">${this.escape(champ.torneo || 'Liga LMI')}</td>
        <td style="font-weight: 800; color: #fff;">${this.escape(champ.ganador || '')}</td>
        <td>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <input type="number" min="1" max="99" value="${champ.cantidad || 1}" class="form-control" style="width: 70px; padding: 0.35rem 0.5rem;" onchange="AdminApp.updateChampionCount(${idx}, this.value)">
            <span>títulos</span>
          </div>
        </td>
        <td style="text-align: right;">
          <button class="btn btn-danger" style="padding: 0.35rem 0.65rem; font-size: 0.8rem;" onclick="AdminApp.deleteChampionRow(${idx})">
            <i class="fa-solid fa-trash"></i>
          </button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  },

  async updateChampionCount(index, val) {
    if (!this.data.champions[index]) return;
    this.data.champions[index].cantidad = parseInt(val, 10) || 1;
    await this.saveData(true);
  },

  async addChampionRow() {
    const torneo = prompt('Nombre del Torneo (ej: Liga LMI, Champions League, Copa Estelar):', 'Liga LMI');
    if (!torneo) return;
    const ganador = prompt('Nombre del Mánager / DT Campeón (sin arroba):');
    if (!ganador) return;
    const cantidad = parseInt(prompt('Cantidad de títulos ganados:', '1'), 10) || 1;

    if (!this.data.champions) this.data.champions = [];
    this.data.champions.push({
      torneo: torneo.trim(),
      ganador: ganador.trim().replace(/^@/, ''),
      cantidad: cantidad
    });

    this.renderChampionsTable();
    await this.saveData(true);
    this.showToast(`Campeón ${ganador} agregado.`, 'success');
  },

  async deleteChampionRow(index) {
    if (!confirm('¿Eliminar este registro de campeón?')) return;
    this.data.champions.splice(index, 1);
    this.renderChampionsTable();
    await this.saveData(true);
    this.showToast('Campeón eliminado.', 'success');
  },

  // ==================== MODAL: DEPLOY GIT ====================
  openDeployModal() {
    const modal = document.getElementById('modal-deploy');
    const consoleEl = document.getElementById('deploy-console');
    consoleEl.textContent = 'Listo para desplegar a GitHub Pages.\nPresiona "Iniciar Despliegue Ahora".';
    modal.style.display = 'flex';
  },

  closeDeployModal() {
    document.getElementById('modal-deploy').style.display = 'none';
  },

  async runDeploy() {
    const consoleEl = document.getElementById('deploy-console');
    const btn = document.getElementById('btn-run-deploy');
    const commitMsg = document.getElementById('deploy-commit-msg').value.trim() || 'Actualizacion LMI';

    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Desplegando...';
    consoleEl.textContent = '== INICIANDO DESPLIEGUE EN PRODUCCIÓN ==\nGuardando cambios locales primero...\n';

    try {
      // 1. Guardar primero
      await this.saveData(true);
      consoleEl.textContent += '✓ Archivos data.js y Registro Balon de Oro sincronizados.\n';
      consoleEl.textContent += 'Ejecutando: git add, commit y push...\n\n';

      // 2. Ejecutar Git en el servidor
      const base = await this.getApiBase();
      const res = await fetch(`${base}/api/deploy`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: commitMsg })
      });

      const result = await res.json();
      if (!res.ok || result.error) {
        throw new Error(result.error || result.output || 'Error en git push');
      }

      consoleEl.textContent += result.output || '✓ Git push ejecutado con éxito.\n';
      consoleEl.textContent += '\n====================================\n';
      consoleEl.textContent += '🚀 ¡DESPLIEGUE COMPLETADO CON ÉXITO!\n';
      consoleEl.textContent += 'Tus cambios estarán en vivo en GitHub Pages en 1-2 minutos.\n';

      this.showToast('¡Despliegue a producción completado!', 'success');
    } catch (err) {
      console.error('Error en deploy:', err);
      consoleEl.textContent += `\n❌ ERROR EN EL DESPLIEGUE:\n${err.message}\n`;
      this.showToast(`Error de despliegue: ${err.message}`, 'error');
    } finally {
      btn.disabled = false;
      btn.innerHTML = '<i class="fa-solid fa-cloud-arrow-up"></i> Iniciar Despliegue Ahora';
    }
  },

  exportBackup() {
    if (!this.data) return;
    const str = JSON.stringify(this.data, null, 2);
    const blob = new Blob([str], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `lmi_backup_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    this.showToast('Respaldo descargado como archivo JSON.', 'success');
  },

  // ==================== HELPERS & TOAST ====================
  getTeamById(id) {
    if (!this.data || !this.data.teams) return null;
    return this.data.teams.find(t => t.id === id) || null;
  },

  getPlayerById(id) {
    if (!this.data || !this.data.players) return null;
    return this.data.players.find(p => p.id === id) || null;
  },

  getPlayersByTeam(teamId) {
    if (!this.data || !this.data.players) return [];
    return this.data.players.filter(p => p.teamId === teamId);
  },

  formatMoney(amount) {
    return '$' + (amount || 0).toLocaleString('es-MX');
  },

  escape(str) {
    if (!str) return '';
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  },

  showToast(message, type = 'info') {
    const box = document.getElementById('toast-box');
    if (!box) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    
    let icon = '<i class="fa-solid fa-circle-info" style="color: #38bdf8;"></i>';
    if (type === 'success') {
      toast.style.borderLeftColor = 'var(--lmi-green)';
      icon = '<i class="fa-solid fa-circle-check" style="color: var(--lmi-green);"></i>';
    } else if (type === 'error') {
      toast.style.borderLeftColor = 'var(--lmi-red)';
      icon = '<i class="fa-solid fa-triangle-exclamation" style="color: var(--lmi-red);"></i>';
    } else if (type === 'warning') {
      toast.style.borderLeftColor = 'var(--lmi-gold)';
      icon = '<i class="fa-solid fa-triangle-exclamation" style="color: var(--lmi-gold);"></i>';
    }

    toast.innerHTML = `${icon}<span>${this.escape(message)}</span>`;
    box.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }
};

// Auto-arranque al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
  AdminApp.init();
});
