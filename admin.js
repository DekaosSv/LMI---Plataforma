/**
 * LMI Admin Hub - Controlador Principal
 * Gestión unificada de Liga Máster Internacional
 */

const AdminApp = {
  data: null,
  isDirty: false,
  selectedTeamId: null,
  matchEvents: [],
  plaintextMode: 'unified',
  cachedParsedPlayers: [],

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
    document.getElementById('btn-season-reset')?.addEventListener('click', () => this.openSeasonResetModal());

    // Matches Studio
    const compSelect = document.getElementById('match-competition');
    const phaseSelect = document.getElementById('match-phase');
    const chkCup = document.getElementById('lbl-chk-cup-bracket');
    
    compSelect.addEventListener('change', () => this.onCompetitionChange());
    phaseSelect.addEventListener('change', () => this.onPhaseChange());
    document.getElementById('match-jornada-select').addEventListener('change', () => this.onJornadaChange());
    document.getElementById('match-fixture-item-select').addEventListener('change', (e) => this.onFixtureMatchSelect(e.target.value));
    document.getElementById('btn-export-jornada-img').addEventListener('click', () => this.exportJornadaImage());
    document.getElementById('btn-export-copa-estelar-img')?.addEventListener('click', () => this.exportCopaEstelarImage());
    document.getElementById('btn-export-copa-estelar-img-admin')?.addEventListener('click', () => this.exportCopaEstelarImage());
    document.getElementById('copa-phase-filter-admin')?.addEventListener('change', (e) => this.onCopaPhaseFilterChange(e.target.value));
    document.getElementById('btn-draw-copa-estelar').addEventListener('click', () => this.drawCopaEstelar());
    document.getElementById('btn-gen-champions-fixture').addEventListener('click', () => this.generateChampionsFixture());
    document.getElementById('btn-gen-champions-playoffs')?.addEventListener('click', () => this.generateChampionsPlayoffs());
    document.getElementById('btn-export-champions-img')?.addEventListener('click', () => this.exportChampionsAdminImage());
    document.getElementById('btn-export-champions-img-admin')?.addEventListener('click', () => this.exportChampionsAdminImage());
    document.getElementById('btn-advance-bracket-team')?.addEventListener('click', () => this.openAdvanceTeamModal());
    document.getElementById('btn-advance-match-studio')?.addEventListener('click', () => {
      const comp = document.getElementById('match-competition')?.value;
      const phase = document.getElementById('match-phase')?.value;
      this.openAdvanceTeamModal(comp, phase);
    });
    document.getElementById('champions-phase-filter-admin')?.addEventListener('change', (e) => this.onChampionsPhaseFilterChange(e.target.value));
    document.getElementById('history-filter-select').addEventListener('change', () => this.renderMatchHistory());
    document.getElementById('btn-export-standings-oro')?.addEventListener('click', () => this.exportStandingsImage('oro'));
    document.getElementById('btn-export-standings-plata')?.addEventListener('click', () => this.exportStandingsImage('plata'));
    document.getElementById('btn-download-standings-img')?.addEventListener('click', () => this.exportStandingsImage());
    document.getElementById('btn-admin-tab-oro')?.addEventListener('click', () => this.switchAdminStandingsDivision('oro'));
    document.getElementById('btn-admin-tab-plata')?.addEventListener('click', () => this.switchAdminStandingsDivision('plata'));

    // Buscador y Filtro de Pendientes por Club
    document.getElementById('pending-filter-competition')?.addEventListener('change', () => this.onPendingFilterChange());
    document.getElementById('pending-filter-team')?.addEventListener('change', () => this.onPendingFilterChange());
    document.getElementById('pending-filter-status')?.addEventListener('change', () => this.onPendingFilterChange());
    document.getElementById('btn-clear-pending-filter')?.addEventListener('click', () => {
      const sel = document.getElementById('pending-filter-team');
      if (sel) sel.value = '';
      this.onPendingFilterChange();
    });

    document.getElementById('match-team1-select').addEventListener('change', (e) => this.onMatchTeamChange(1, e.target.value));
    document.getElementById('match-team2-select').addEventListener('change', (e) => this.onMatchTeamChange(2, e.target.value));
    
    // Auto-sincronizar goleadores y asistidores según marcador ingresado
    const score1Input = document.getElementById('match-score1');
    const score2Input = document.getElementById('match-score2');
    if (score1Input) {
      score1Input.addEventListener('input', () => this.syncEventsWithScores());
      score1Input.addEventListener('change', () => this.syncEventsWithScores());
    }
    if (score2Input) {
      score2Input.addEventListener('input', () => this.syncEventsWithScores());
      score2Input.addEventListener('change', () => this.syncEventsWithScores());
    }

    document.getElementById('btn-add-match-event').addEventListener('click', () => this.addMatchEventRow());
    document.getElementById('btn-apply-match').addEventListener('click', () => this.applyMatchResults());

    // Teams Studio
    document.getElementById('team-filter-division').addEventListener('change', (e) => this.populateTeamSelectorByDivision(e.target.value));
    document.getElementById('team-selector').addEventListener('change', (e) => this.onTeamSelected(e.target.value));
    document.getElementById('btn-open-create-club')?.addEventListener('click', () => this.openCreateClubModal());
    document.getElementById('btn-delete-team')?.addEventListener('click', () => this.deleteCurrentTeam());
    document.getElementById('btn-save-team-details').addEventListener('click', () => this.saveTeamDetails());
    document.getElementById('search-player-input').addEventListener('input', (e) => this.filterRosterTable(e.target.value));
    document.getElementById('btn-add-player-modal').addEventListener('click', () => this.openPlayerModal(null));
    document.getElementById('btn-open-plaintext-roster')?.addEventListener('click', () => this.openPlaintextRosterModal());
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
      'view-trophies': '<i class="fa-solid fa-award" style="color: var(--lmi-gold);"></i> Trofeos & Balón de Oro',
      'view-web-control': '<i class="fa-solid fa-sliders" style="color: #38bdf8;"></i> Centro de Control Web'
    };
    document.getElementById('topbar-page-title').innerHTML = titleMap[viewId] || 'Panel de Control';
    if (viewId === 'view-matches') {
      this.renderAdminStandings();
    }
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
    this.renderWebControlView();
    this.renderAdminStandings();
  },

  renderAll() {
    this.renderDashboard();
    this.populateTeamDropdowns();
    this.renderTopScorers();
    this.renderTeamsView();
    this.renderMarketView();
    this.renderTrophiesView();
    this.renderMatchHistory();
    this.renderWebControlView();
    this.renderAdminStandings();
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
        <td><span class="pos-badge pos-${p.position || 'MC'}">${p.position || 'MC'}</span></td>
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
    this.populatePendingFilterTeams();
    this.onCompetitionChange();
  },

  populateTeamSelectorByDivision(filterDiv = 'all', targetTeamId = null) {
    const sel = document.getElementById('team-selector');
    if (!sel || !this.data || !this.data.teams) return;
    const currentVal = targetTeamId || sel.value;
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
    const isFixtureComp = comp === 'oro' || comp === 'plata' || comp === 'champions';
    
    const jornadaSel = document.getElementById('match-jornada-select');
    const fixtureSel = document.getElementById('match-fixture-item-select');
    const phaseSel = document.getElementById('match-phase');
    const chkCup = document.getElementById('lbl-chk-cup-bracket');
    const jornadaWrapper = document.getElementById('jornada-card-wrapper');
    const copaWrapper = document.getElementById('copa-estelar-card-wrapper');
    const championsWrapper = document.getElementById('champions-card-wrapper');

    const btnAdvStudio = document.getElementById('btn-advance-match-studio');

    if (isFixtureComp) {
      if (jornadaSel) jornadaSel.style.display = 'inline-block';
      if (fixtureSel) fixtureSel.style.display = 'inline-block';
      if (jornadaWrapper) jornadaWrapper.style.display = 'block';
      if (copaWrapper) copaWrapper.style.display = 'none';
      if (championsWrapper) championsWrapper.style.display = 'none';
      if (phaseSel) phaseSel.style.display = 'none';
      if (chkCup) chkCup.style.display = 'none';
      if (btnAdvStudio) btnAdvStudio.style.display = 'none';

      this.populateJornadasForDivision(comp);
      this.populateMatchTeamsForCompetition(comp);
    } else if (comp === 'champions_ko') {
      if (jornadaSel) jornadaSel.style.display = 'none';
      if (fixtureSel) fixtureSel.style.display = 'none';
      if (jornadaWrapper) jornadaWrapper.style.display = 'none';
      if (copaWrapper) copaWrapper.style.display = 'none';
      if (championsWrapper) championsWrapper.style.display = 'block';
      if (phaseSel) phaseSel.style.display = 'inline-block';
      if (btnAdvStudio) btnAdvStudio.style.display = 'inline-flex';
      if (chkCup) {
        chkCup.style.display = 'flex';
        const spanText = chkCup.querySelector('span');
        if (spanText) spanText.textContent = 'Guardar este marcador en el cuadro oficial de Champions League';
      }

      this.populateMatchTeamsForCompetition(comp);
      this.onPhaseChange();
      this.renderChampionsAdminBracket();
    } else {
      // Copa Estelar
      if (jornadaSel) jornadaSel.style.display = 'none';
      if (fixtureSel) fixtureSel.style.display = 'none';
      if (jornadaWrapper) jornadaWrapper.style.display = 'none';
      if (copaWrapper) copaWrapper.style.display = 'block';
      if (championsWrapper) championsWrapper.style.display = 'none';
      if (phaseSel) phaseSel.style.display = 'inline-block';
      if (btnAdvStudio) btnAdvStudio.style.display = 'inline-flex';
      if (chkCup) {
        chkCup.style.display = 'flex';
        const spanText = chkCup.querySelector('span');
        if (spanText) spanText.textContent = 'Guardar este marcador en el cuadro oficial de Copa / Champions';
      }

      this.populateMatchTeamsForCompetition(comp);
      this.onPhaseChange();
      this.renderCopaEstelarAdminBracket();
    }
  },

  onPhaseChange() {
    const comp = document.getElementById('match-competition').value;
    if (comp !== 'estelar' && comp !== 'champions_ko') return;
    const phaseSel = document.getElementById('match-phase');
    if (!phaseSel) return;
    const phase = phaseSel.value;
    const matchArray = comp === 'champions_ko' ? (this.data.championsLeagueMatches || []) : (this.data.copaEstelarMatches || []);
    let targetMatch = matchArray.find(m => m.fase && m.fase.toLowerCase() === phase.toLowerCase());
    if (!targetMatch) {
      targetMatch = matchArray.find(m => m.fase && m.fase.toLowerCase().startsWith(phase.toLowerCase()));
    }
    if (targetMatch && this.data.teams) {
      const t1 = this.data.teams.find(t => t.name.toLowerCase() === (targetMatch.team1 || '').toLowerCase());
      const t2 = this.data.teams.find(t => t.name.toLowerCase() === (targetMatch.team2 || '').toLowerCase());
      if (t1) {
        document.getElementById('match-team1-select').value = t1.id;
        this.onMatchTeamChange(1, t1.id);
      }
      if (t2) {
        document.getElementById('match-team2-select').value = t2.id;
        this.onMatchTeamChange(2, t2.id);
      }
      const s1 = parseInt(targetMatch.score1, 10);
      const s2 = parseInt(targetMatch.score2, 10);
      document.getElementById('match-score1').value = !isNaN(s1) ? s1 : 0;
      document.getElementById('match-score2').value = !isNaN(s2) ? s2 : 0;
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
      const typeLabel = comp === 'champions' ? 'Fecha' : (r.type === 'ida' ? 'Ida' : 'Vuelta');
      const restTeam = r.restingTeamId ? this.getTeamById(r.restingTeamId) : null;
      const restText = restTeam ? ` • 💤 ${restTeam.name}` : '';
      opt.textContent = `${r.name} (${typeLabel})${restText}`;
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
        if ((foundMatch.score1 > 0 || foundMatch.score2 > 0)) {
          this.syncEventsWithScores();
        }
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
    } else if (comp === 'champions' || comp === 'champions_ko' || comp === 'estelar') {
      teams = teams.filter(t => t.id !== 'clubamerica' && t.id !== 'urawareddiamonds');
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

  populatePendingFilterTeams() {
    const sel = document.getElementById('pending-filter-team');
    if (!sel || !this.data || !this.data.teams) return;
    const currentVal = sel.value;
    sel.innerHTML = '<option value="">-- Elige un Club (ej. FC Barcelona) --</option>';

    // Ordenar alfabéticamente los clubes
    const sortedTeams = [...this.data.teams].sort((a, b) => (a.name || '').localeCompare(b.name || ''));
    sortedTeams.forEach(t => {
      const opt = document.createElement('option');
      opt.value = t.id;
      opt.textContent = `${t.name} (${(t.division || 'oro').toUpperCase()})`;
      sel.appendChild(opt);
    });

    if (currentVal && sortedTeams.some(t => t.id === currentVal)) {
      sel.value = currentVal;
    }
  },

  onPendingFilterChange() {
    const teamSelect = document.getElementById('pending-filter-team');
    const compFilter = document.getElementById('pending-filter-competition')?.value || 'all';
    const statusFilter = document.getElementById('pending-filter-status')?.value || 'pending';
    const resultsContainer = document.getElementById('pending-filter-results');
    if (!teamSelect || !resultsContainer) return;

    const teamId = teamSelect.value;
    if (!teamId) {
      resultsContainer.style.display = 'none';
      resultsContainer.innerHTML = '';
      return;
    }

    const team = this.getTeamById(teamId);
    if (!team) return;

    const matches = [];

    // 1. Champions League
    if (compFilter === 'all' || compFilter === 'champions') {
      const champRounds = (this.data && this.data.fixtures) ? (this.data.fixtures.champions || []) : [];
      champRounds.forEach(r => {
        const m = (r.matches || []).find(match => match.team1Id === teamId || match.team2Id === teamId);
        if (m) {
          const t1 = this.getTeamById(m.team1Id) || { name: m.team1Id, logo: 'Logos Equipos/default.png' };
          const t2 = this.getTeamById(m.team2Id) || { name: m.team2Id, logo: 'Logos Equipos/default.png' };
          matches.push({
            competition: 'champions',
            compName: 'Champions League',
            compColor: '#38bdf8',
            compBg: 'rgba(56, 189, 248, 0.15)',
            badgeText: `🏆 Champions • ${r.name || ('Fecha ' + r.jornada)}`,
            jornadaNumber: r.jornada,
            fechaLabel: r.name || `Fecha ${r.jornada}`,
            fixtureMatchId: m.id,
            phase: null,
            team1Id: m.team1Id,
            team1Name: t1.name,
            team1Logo: t1.logo || 'Logos Equipos/default.png',
            team2Id: m.team2Id,
            team2Name: t2.name,
            team2Logo: t2.logo || 'Logos Equipos/default.png',
            score1: m.score1,
            score2: m.score2,
            played: !!m.played
          });
        }
      });
    }

    // 2. Copa Estelar
    if (compFilter === 'all' || compFilter === 'estelar') {
      const copaMatches = this.data.copaEstelarMatches || [];
      copaMatches.forEach(m => {
        const t1Match = (m.team1 || '').toLowerCase() === team.name.toLowerCase();
        const t2Match = (m.team2 || '').toLowerCase() === team.name.toLowerCase();
        if (t1Match || t2Match) {
          const isPlayed = m.estado === 'Finalizado';
          const t1Obj = (this.data.teams || []).find(t => t.name.toLowerCase() === (m.team1 || '').toLowerCase()) || { name: m.team1, logo: 'Logos Equipos/default.png' };
          const t2Obj = (this.data.teams || []).find(t => t.name.toLowerCase() === (m.team2 || '').toLowerCase()) || { name: m.team2, logo: 'Logos Equipos/default.png' };
          matches.push({
            competition: 'estelar',
            compName: 'Copa Estelar',
            compColor: '#c084fc',
            compBg: 'rgba(192, 132, 252, 0.15)',
            badgeText: `⭐ Copa Estelar • ${m.fase}`,
            jornadaNumber: null,
            fechaLabel: m.fase,
            fixtureMatchId: null,
            phase: m.fase,
            team1Id: t1Obj.id || null,
            team1Name: m.team1,
            team1Logo: t1Obj.logo || 'Logos Equipos/default.png',
            team2Id: t2Obj.id || null,
            team2Name: m.team2,
            team2Logo: t2Obj.logo || 'Logos Equipos/default.png',
            score1: m.score1,
            score2: m.score2,
            played: isPlayed
          });
        }
      });
    }

    // 3. División Oro
    if (compFilter === 'all' || compFilter === 'oro') {
      const oroRounds = (this.data && this.data.fixtures) ? (this.data.fixtures.oro || []) : [];
      oroRounds.forEach(r => {
        const m = (r.matches || []).find(match => match.team1Id === teamId || match.team2Id === teamId);
        if (m) {
          const t1 = this.getTeamById(m.team1Id) || { name: m.team1Id, logo: 'Logos Equipos/default.png' };
          const t2 = this.getTeamById(m.team2Id) || { name: m.team2Id, logo: 'Logos Equipos/default.png' };
          matches.push({
            competition: 'oro',
            compName: 'División Oro',
            compColor: '#eab308',
            compBg: 'rgba(234, 179, 8, 0.15)',
            badgeText: `🥇 Oro • Jornada ${r.jornada}`,
            jornadaNumber: r.jornada,
            fechaLabel: `Jornada ${r.jornada}`,
            fixtureMatchId: m.id,
            phase: null,
            team1Id: m.team1Id,
            team1Name: t1.name,
            team1Logo: t1.logo || 'Logos Equipos/default.png',
            team2Id: m.team2Id,
            team2Name: t2.name,
            team2Logo: t2.logo || 'Logos Equipos/default.png',
            score1: m.score1,
            score2: m.score2,
            played: !!m.played
          });
        }
      });
    }

    // 4. División Plata
    if (compFilter === 'all' || compFilter === 'plata') {
      const plataRounds = (this.data && this.data.fixtures) ? (this.data.fixtures.plata || []) : [];
      plataRounds.forEach(r => {
        const m = (r.matches || []).find(match => match.team1Id === teamId || match.team2Id === teamId);
        if (m) {
          const t1 = this.getTeamById(m.team1Id) || { name: m.team1Id, logo: 'Logos Equipos/default.png' };
          const t2 = this.getTeamById(m.team2Id) || { name: m.team2Id, logo: 'Logos Equipos/default.png' };
          matches.push({
            competition: 'plata',
            compName: 'División Plata',
            compColor: '#94a3b8',
            compBg: 'rgba(148, 163, 184, 0.15)',
            badgeText: `🥈 Plata • Jornada ${r.jornada}`,
            jornadaNumber: r.jornada,
            fechaLabel: `Jornada ${r.jornada}`,
            fixtureMatchId: m.id,
            phase: null,
            team1Id: m.team1Id,
            team1Name: t1.name,
            team1Logo: t1.logo || 'Logos Equipos/default.png',
            team2Id: m.team2Id,
            team2Name: t2.name,
            team2Logo: t2.logo || 'Logos Equipos/default.png',
            score1: m.score1,
            score2: m.score2,
            played: !!m.played
          });
        }
      });
    }

    const totalMatches = matches.length;
    const pendingMatches = matches.filter(m => !m.played);
    const playedMatches = matches.filter(m => m.played);

    let displayMatches = matches;
    if (statusFilter === 'pending') {
      displayMatches = pendingMatches;
    } else if (statusFilter === 'played') {
      displayMatches = playedMatches;
    }

    resultsContainer.style.display = 'block';

    let html = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem; flex-wrap: wrap; gap: 0.5rem;">
        <div style="display: flex; align-items: center; gap: 0.65rem;">
          <img src="${team.logo || 'Logos Equipos/default.png'}" alt="" style="width: 28px; height: 28px; object-fit: contain;">
          <span style="font-size: 1rem; font-weight: 800; color: #fff;">${team.name}</span>
          <span class="badge" style="background: rgba(56, 189, 248, 0.2); color: #38bdf8; font-weight: 700; font-size: 0.78rem;">
            ${pendingMatches.length} Pendiente${pendingMatches.length === 1 ? '' : 's'}
          </span>
          <span class="badge" style="background: rgba(74, 222, 128, 0.15); color: #4ade80; font-weight: 700; font-size: 0.78rem;">
            ${playedMatches.length} Jugado${playedMatches.length === 1 ? '' : 's'}
          </span>
        </div>
        <div style="font-size: 0.8rem; color: #94a3b8;">
          Mostrando <strong>${displayMatches.length}</strong> de ${totalMatches} partidos
        </div>
      </div>
    `;

    if (displayMatches.length === 0) {
      const msg = statusFilter === 'pending'
        ? `¡Al día! ${team.name} no tiene partidos pendientes con los filtros actuales.`
        : `No se encontraron partidos para ${team.name} con los filtros seleccionados.`;
      html += `
        <div style="background: rgba(15, 23, 42, 0.6); border: 1px dashed rgba(255, 255, 255, 0.15); border-radius: 8px; padding: 1.5rem; text-align: center; color: var(--text-muted); font-size: 0.9rem;">
          <i class="fa-regular fa-calendar-check" style="font-size: 1.6rem; margin-bottom: 0.5rem; color: #38bdf8; display: block;"></i>
          ${msg}
        </div>
      `;
    } else {
      html += `<div class="pending-matches-grid">`;
      displayMatches.forEach(m => {
        const isCurrentTeam1 = (m.team1Id === teamId) || ((m.team1Name || '').toLowerCase() === team.name.toLowerCase());
        const isCurrentTeam2 = (m.team2Id === teamId) || ((m.team2Name || '').toLowerCase() === team.name.toLowerCase());

        const t1Display = isCurrentTeam1
          ? `<span style="color: #ffd100; font-weight: 800;">${this.escape(m.team1Name)}</span>`
          : `<span style="color: #cbd5e1;">${this.escape(m.team1Name)}</span>`;

        const t2Display = isCurrentTeam2
          ? `<span style="color: #ffd100; font-weight: 800;">${this.escape(m.team2Name)}</span>`
          : `<span style="color: #cbd5e1;">${this.escape(m.team2Name)}</span>`;

        const scoreText = m.played ? `${m.score1 !== null && m.score1 !== undefined ? m.score1 : ''} - ${m.score2 !== null && m.score2 !== undefined ? m.score2 : ''}` : 'vs';

        const statusBadge = m.played
          ? `<span style="font-size: 0.72rem; font-weight: 800; color: #4ade80; background: rgba(74, 222, 128, 0.15); padding: 0.15rem 0.45rem; border-radius: 4px;">✓ JUGADO (${m.score1} - ${m.score2})</span>`
          : `<span style="font-size: 0.72rem; font-weight: 800; color: #facc15; background: rgba(250, 204, 21, 0.15); padding: 0.15rem 0.45rem; border-radius: 4px;">⏳ PENDIENTE</span>`;

        const actionBtnLabel = m.played ? 'Cargar / Editar' : 'Cargar para Registrar';
        const actionBtnClass = m.played ? 'btn-secondary' : 'btn-primary';
        const actionBtnIcon = m.played ? 'fa-pen-to-square' : 'fa-bolt';

        const compArg = m.competition;
        const jArg = m.jornadaNumber !== null && m.jornadaNumber !== undefined ? m.jornadaNumber : 'null';
        const fixArg = m.fixtureMatchId ? `'${m.fixtureMatchId}'` : 'null';
        const phaseArg = m.phase ? `'${m.phase}'` : 'null';

        html += `
          <div class="pending-match-item ${m.played ? 'is-played' : 'is-pending'}">
            <div style="display: flex; justify-content: space-between; align-items: center; gap: 0.5rem;">
              <span class="badge" style="background: ${m.compBg}; color: ${m.compColor}; font-weight: 800; font-size: 0.75rem; letter-spacing: 0.3px;">
                ${m.badgeText}
              </span>
              ${statusBadge}
            </div>

            <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.4rem 0.2rem; font-size: 0.86rem;">
              <div style="display: flex; align-items: center; gap: 0.45rem; flex: 1; overflow: hidden;">
                <img src="${m.team1Logo}" alt="" style="width: 20px; height: 20px; object-fit: contain; flex-shrink: 0;" onerror="this.src='Logos Equipos/default.png'">
                <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${t1Display}</div>
              </div>
              <div style="padding: 0 0.5rem; font-weight: 900; color: ${m.played ? '#facc15' : 'var(--text-muted)'}; font-size: 0.9rem; flex-shrink: 0;">
                ${scoreText}
              </div>
              <div style="display: flex; align-items: center; gap: 0.45rem; flex: 1; justify-content: flex-end; overflow: hidden;">
                <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; text-align: right;">${t2Display}</div>
                <img src="${m.team2Logo}" alt="" style="width: 20px; height: 20px; object-fit: contain; flex-shrink: 0;" onerror="this.src='Logos Equipos/default.png'">
              </div>
            </div>

            <div style="display: flex; justify-content: flex-end; margin-top: 0.2rem;">
              <button class="btn ${actionBtnClass} btn-sm" onclick="AdminApp.loadMatchToRegister('${compArg}', ${jArg}, ${fixArg}, ${phaseArg})" style="font-size: 0.78rem; padding: 0.3rem 0.7rem; font-weight: 700;">
                <i class="fa-solid ${actionBtnIcon}"></i> ${actionBtnLabel}
              </button>
            </div>
          </div>
        `;
      });
      html += `</div>`;
    }

    resultsContainer.innerHTML = html;
  },

  loadMatchToRegister(comp, jornada, fixtureMatchId, phase) {
    if (!comp) return;

    // 1. Cambiar selector de competencia
    const compSelect = document.getElementById('match-competition');
    if (compSelect) {
      compSelect.value = comp;
      this.onCompetitionChange();
    }

    // 2. Cargar jornada y partido si es de fixture (champions, oro, plata)
    if (comp === 'oro' || comp === 'plata' || comp === 'champions') {
      if (jornada) {
        const jornadaSel = document.getElementById('match-jornada-select');
        if (jornadaSel) {
          jornadaSel.value = jornada;
          this.onJornadaChange();
        }
      }
      if (fixtureMatchId) {
        const fixtureSel = document.getElementById('match-fixture-item-select');
        if (fixtureSel) {
          fixtureSel.value = fixtureMatchId;
          this.onFixtureMatchSelect(fixtureMatchId);
        }
      }
    } else if (comp === 'estelar') {
      // 3. Cargar fase si es Copa Estelar
      if (phase) {
        const phaseSel = document.getElementById('match-phase');
        if (phaseSel) {
          phaseSel.value = phase;
          this.onPhaseChange();
        }
      }
    }

    // 4. Scroll fluido y animación de resalte al cuadro de duelo
    const duelBox = document.querySelector('.match-duel-box');
    if (duelBox) {
      duelBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
      duelBox.classList.remove('duel-box-glow');
      void duelBox.offsetWidth; // Forzar reflow para reiniciar animación
      duelBox.classList.add('duel-box-glow');
    }

    const compLabels = {
      'champions': 'Champions League',
      'estelar': 'Copa Estelar',
      'oro': 'División Oro',
      'plata': 'División Plata'
    };
    const cLabel = compLabels[comp] || comp;
    const fechaLabel = jornada ? `Fecha ${jornada}` : (phase || '');
    this.showToast(`⚡ Partido cargado: ${cLabel} (${fechaLabel}). Listo para registrar resultado y eventos.`, 'success');
  },

  renderJornadaCard(comp, jornadaNum) {
    const container = document.getElementById('jornada-matches-grid');
    const titleEl = document.getElementById('export-division-title');
    const descEl = document.getElementById('jornada-card-desc');
    const restingEl = document.getElementById('export-resting-container');
    const seasonEl = document.getElementById('export-season-badge');
    if (!container || !this.data || !this.data.fixtures) return;

    const divName = comp === 'oro' ? 'DIVISIÓN ORO' : (comp === 'plata' ? 'DIVISIÓN PLATA' : (comp === 'champions' ? 'UEFA CHAMPIONS LEAGUE' : 'TORNEO'));
    const rounds = this.data.fixtures[comp] || [];
    const round = rounds.find(r => r.jornada === jornadaNum);
    const legLabel = round && round.type === 'vuelta' ? 'VUELTA' : (comp === 'champions' ? 'FECHA ' + jornadaNum : 'IDA');

    if (titleEl) titleEl.textContent = `${divName} • JORNADA ${jornadaNum} (${legLabel})`;
    if (seasonEl) seasonEl.textContent = `${this.data.season || 'Temporada 12'} • eFootball`;

    const restingTeam = (round && round.restingTeamId) ? this.getTeamById(round.restingTeamId) : null;
    if (descEl) {
      if (restingTeam) {
        descEl.innerHTML = `Partidos programados para la Jornada ${jornadaNum} de ${divName}. <span style="display:inline-flex; align-items:center; gap:0.35rem; color:#facc15; font-weight:700;"><i class="fa-solid fa-moon"></i> Descansa: ${this.escape(restingTeam.name)}</span>`;
      } else {
        descEl.textContent = `Partidos programados para la Jornada ${jornadaNum} de ${divName}.`;
      }
    }

    if (restingEl) {
      if (restingTeam) {
        restingEl.style.display = 'block';
        restingEl.innerHTML = `
          <div style="display: flex; align-items: center; justify-content: center; gap: 0.65rem; padding: 0.65rem 1rem; background: rgba(250, 204, 21, 0.1); border: 1px dashed rgba(250, 204, 21, 0.4); border-radius: 8px;">
            <i class="fa-solid fa-bed" style="color: #facc15; font-size: 0.95rem;"></i>
            <span style="font-size: 0.85rem; color: #cbd5e1; font-weight: 600;">Descansa esta jornada:</span>
            <img src="${this.escape(restingTeam.logo || 'Logos Equipos/default.png')}" alt="" style="width: 24px; height: 24px; object-fit: contain;" onerror="this.src='Logos Equipos/default.png'">
            <strong style="color: #ffd100; font-size: 0.92rem;">${this.escape(restingTeam.name)}</strong>
          </div>
        `;
      } else {
        restingEl.style.display = 'none';
        restingEl.innerHTML = '';
      }
    }

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
            ${t1Logo ? `<img src="${this.escape(t1Logo)}" style="width: 30px; height: 30px; object-fit: contain;" onerror="this.src='Logos Equipos/default.png'">` : ''}
            <span style="font-weight: 700; font-size: 0.9rem; color: #fff;">${this.escape(t1Name)}</span>
          </div>

          <div style="font-weight: 900; font-size: 1.2rem; color: ${isPlayed ? 'var(--lmi-gold)' : 'var(--text-muted)'}; padding: 0 0.5rem; text-align: center; min-width: 55px;">
            ${scoreDisplay}
          </div>

          <div style="flex: 1; display: flex; align-items: center; justify-content: flex-end; gap: 0.5rem;">
            <span style="font-weight: 700; font-size: 0.9rem; color: #fff; text-align: right;">${this.escape(t2Name)}</span>
            ${t2Logo ? `<img src="${this.escape(t2Logo)}" style="width: 30px; height: 30px; object-fit: contain;" onerror="this.src='Logos Equipos/default.png'">` : ''}
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

    const unlockTimer = setTimeout(() => {
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = '<i class="fa-solid fa-camera"></i> <span>Exportar Jornada a Imagen (PNG)</span>';
      }
    }, 10000);

    // Clon limpio para renderizado sin cortes ni bloqueos
    const wrapper = document.createElement('div');
    wrapper.style.position = 'fixed';
    wrapper.style.left = '-9999px';
    wrapper.style.top = '0';
    wrapper.style.zIndex = '-100';
    wrapper.style.width = '960px';

    const clone = target.cloneNode(true);
    clone.style.width = '960px';
    clone.style.maxWidth = '960px';
    clone.style.boxSizing = 'border-box';
    clone.style.margin = '0';

    // 1. Reemplazar iconos font-awesome con emojis para evitar cuelgues de @font-face en html2canvas
    clone.querySelectorAll('i').forEach(icon => {
      const cls = icon.className || '';
      let emoji = '⚽';
      if (cls.includes('fa-trophy')) emoji = '🏆';
      else if (cls.includes('fa-bed') || cls.includes('fa-moon')) emoji = '💤';
      else if (cls.includes('fa-calendar')) emoji = '📅';
      const span = document.createElement('span');
      span.style.fontSize = '1.2rem';
      span.style.verticalAlign = 'middle';
      span.style.marginRight = '0.35rem';
      span.textContent = emoji;
      icon.parentNode.replaceChild(span, icon);
    });

    // 2. Pre-convertir imágenes ya renderizadas a Data URLs
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
        backgroundColor: '#090e1a',
        scale: 2,
        useCORS: true,
        allowTaint: true,
        imageTimeout: 3000,
        logging: false,
        width: 960,
        windowWidth: 960
      });

      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Tiempo de espera agotado al generar imagen.')), 9000)
      );

      const canvas = await Promise.race([canvasPromise, timeoutPromise]);
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
      clearTimeout(unlockTimer);
      wrapper.remove();
      btn.disabled = false;
      btn.innerHTML = '<i class="fa-solid fa-camera"></i> <span>Exportar Jornada a Imagen (PNG)</span>';
    }
  },

  onCopaPhaseFilterChange(phase) {
    this.renderCopaEstelarAdminBracket(phase);
  },

  renderCopaEstelarAdminBracket(phaseFilter = null) {
    const container = document.getElementById('copa-estelar-bracket-admin');
    if (!container || !this.data || !this.data.copaEstelarMatches) return;

    if (!phaseFilter) {
      phaseFilter = document.getElementById('copa-phase-filter-admin')?.value || 'all';
    }

    const subtitleEl = document.getElementById('copa-estelar-admin-subtitle');
    const phaseTitles = {
      'all': 'CUADRO OFICIAL DE ELIMINATORIAS (18 CLUBES)',
      'previa': 'RONDA PREVIA • RESULTADOS OFICIALES',
      'octavos': 'OCTAVOS DE FINAL (16 CLUBES) • RESULTADOS OFICIALES',
      'cuartos': 'CUARTOS DE FINAL (8 CLUBES) • RESULTADOS OFICIALES',
      'semis': 'SEMIFINALES (4 CLUBES) • RESULTADOS OFICIALES',
      'final': 'GRAN FINAL • PARTIDO POR EL TÍTULO'
    };
    if (subtitleEl) subtitleEl.textContent = phaseTitles[phaseFilter] || phaseTitles['all'];

    const matches = this.data.copaEstelarMatches;
    const teams = this.data.teams || [];

    const getTeamRow = (teamName, score) => {
      const isPlaceholder = !teamName || teamName.toLowerCase().startsWith('ganador');
      const teamObj = teams.find(t => t.name.toLowerCase() === (teamName || '').toLowerCase()) || { logo: 'Logos Equipos/default.png' };
      return `
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.38rem 0.6rem; background: #0f172a; border-radius: 6px; margin-bottom: 3px;">
          <div style="display: flex; align-items: center; gap: 0.55rem; max-width: 80%;">
            <img src="${teamObj.logo}" alt="" style="width: 22px; height: 22px; object-fit: contain;" onerror="this.src='Logos Equipos/default.png'">
            <span style="font-size: 0.86rem; color: ${isPlaceholder ? '#94a3b8' : '#ffffff'}; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${teamName || 'Por clasificar'}</span>
          </div>
          <span style="font-size: 0.95rem; font-weight: 900; color: #facc15;">${score !== undefined && score !== null ? score : ''}</span>
        </div>
      `;
    };

    const getMatchBox = (m) => {
      const isFinal = m.fase && (m.fase.toLowerCase() === 'final' || m.fase.toLowerCase().includes('gran final'));
      const advanceBtn = !isFinal ? `
        <button class="btn btn-secondary" onclick="AdminApp.openAdvanceTeamModal('estelar', '${m.fase}')" style="padding: 0.22rem 0.5rem; font-size: 0.73rem; font-weight: 700; width: 100%; margin-top: 0.4rem; justify-content: center; display: inline-flex; align-items: center; gap: 0.35rem; background: rgba(147, 51, 234, 0.15); border: 1px solid rgba(147, 51, 234, 0.35); color: #c084fc;" title="Pasar un equipo de esta llave a la siguiente fase (Sin rival asignado o por W.O.)">
          <i class="fa-solid fa-forward-step" style="color: #c084fc;"></i> Pasar a Siguiente Fase
        </button>
      ` : '';

      return `
        <div style="background: #1e293b; border: 1px solid rgba(147, 51, 234, 0.35); border-radius: 8px; padding: 0.6rem; margin: 0.4rem 0; width: 100%; box-shadow: 0 4px 10px rgba(0,0,0,0.2);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.35rem;">
            <span style="font-size: 0.72rem; font-weight: 800; color: #c084fc; text-transform: uppercase; letter-spacing: 0.5px;">${m.fase || ''}</span>
            ${m.estado ? `<span style="font-size: 0.65rem; font-weight: 800; padding: 0.1rem 0.35rem; border-radius: 3px; background: ${m.estado.toLowerCase() === 'finalizado' ? 'rgba(74, 222, 128, 0.2); color: #4ade80;' : 'rgba(250, 204, 21, 0.2); color: #facc15;'}">${m.estado}</span>` : ''}
          </div>
          ${getTeamRow(m.team1, m.score1)}
          ${getTeamRow(m.team2, m.score2)}
          ${advanceBtn}
        </div>
      `;
    };

    const previa = matches.filter(m => m.fase && (m.fase.toLowerCase().includes('previa') || m.fase.toLowerCase().includes('preliminar')));
    const octavos = matches.filter(m => m.fase && m.fase.toLowerCase().includes('octavos'));
    const cuartos = matches.filter(m => m.fase && m.fase.toLowerCase().includes('cuartos'));
    const semis = matches.filter(m => m.fase && m.fase.toLowerCase().includes('semifinal'));
    const finalM = matches.find(m => m.fase && m.fase.toLowerCase() === 'final');

    if (phaseFilter !== 'all') {
      container.style.display = 'grid';
      container.style.gridTemplateColumns = 'repeat(auto-fit, minmax(280px, 1fr))';
      container.style.gap = '1rem';
      container.style.overflowX = 'visible';

      if (phaseFilter === 'previa') {
        container.innerHTML = previa.length ? previa.map(getMatchBox).join('') : '<div style="color: var(--text-muted); text-align: center; grid-column: 1/-1; padding: 2rem;">No hay partidos de Ronda Previa registrados.</div>';
      } else if (phaseFilter === 'octavos') {
        container.innerHTML = octavos.length ? octavos.map(getMatchBox).join('') : '<div style="color: var(--text-muted); text-align: center; grid-column: 1/-1; padding: 2rem;">No hay partidos de Octavos de Final registrados.</div>';
      } else if (phaseFilter === 'cuartos') {
        container.innerHTML = cuartos.length ? cuartos.map(getMatchBox).join('') : '<div style="color: var(--text-muted); text-align: center; grid-column: 1/-1; padding: 2rem;">No hay partidos de Cuartos de Final registrados.</div>';
      } else if (phaseFilter === 'semis') {
        container.innerHTML = semis.length ? semis.map(getMatchBox).join('') : '<div style="color: var(--text-muted); text-align: center; grid-column: 1/-1; padding: 2rem;">No hay partidos de Semifinales registrados.</div>';
      } else if (phaseFilter === 'final') {
        container.style.display = 'flex';
        container.style.justifyContent = 'center';
        container.innerHTML = finalM ? `<div style="max-width: 440px; width: 100%;">${getMatchBox(finalM)}</div>` : '<div style="color: var(--text-muted); text-align: center; padding: 2rem;">No hay partido de Gran Final registrado aún.</div>';
      }
      return;
    }

    // Default: 'all' (Cuadro Completo)
    container.style.display = 'flex';
    container.style.gridTemplateColumns = '';
    container.style.justifyContent = 'space-between';
    container.style.gap = '1.25rem';
    container.style.overflowX = 'auto';

    let html = '';
    if (previa.length) {
      html += `<div style="flex: 1; min-width: 210px; display: flex; flex-direction: column; justify-content: space-around;">
        <h4 style="color: #c084fc; text-align: center; border-bottom: 2px solid #a855f7; padding-bottom: 0.4rem; font-size: 0.9rem;">Ronda Previa</h4>
        ${previa.map(getMatchBox).join('')}
      </div>`;
    }
    if (octavos.length) {
      html += `<div style="flex: 1; min-width: 220px; display: flex; flex-direction: column; justify-content: space-around;">
        <h4 style="color: #38bdf8; text-align: center; border-bottom: 2px solid #0284c7; padding-bottom: 0.4rem; font-size: 0.9rem;">Octavos de Final</h4>
        ${octavos.map(getMatchBox).join('')}
      </div>`;
    }
    if (cuartos.length) {
      html += `<div style="flex: 1; min-width: 220px; display: flex; flex-direction: column; justify-content: space-around;">
        <h4 style="color: #facc15; text-align: center; border-bottom: 2px solid #eab308; padding-bottom: 0.4rem; font-size: 0.9rem;">Cuartos de Final</h4>
        ${cuartos.map(getMatchBox).join('')}
      </div>`;
    }
    if (semis.length) {
      html += `<div style="flex: 1; min-width: 220px; display: flex; flex-direction: column; justify-content: space-around;">
        <h4 style="color: #f97316; text-align: center; border-bottom: 2px solid #ea580c; padding-bottom: 0.4rem; font-size: 0.9rem;">Semifinales</h4>
        ${semis.map(getMatchBox).join('')}
      </div>`;
    }
    if (finalM) {
      html += `<div style="flex: 1; min-width: 220px; display: flex; flex-direction: column; justify-content: center;">
        <h4 style="color: #ffd700; text-align: center; border-bottom: 2px solid #ffd700; padding-bottom: 0.4rem; font-size: 0.9rem;">Gran Final</h4>
        ${getMatchBox(finalM)}
      </div>`;
    }

    container.innerHTML = html;
  },

  async exportCopaEstelarImage() {
    const phaseFilter = document.getElementById('copa-phase-filter-admin')?.value || 'all';
    this.renderCopaEstelarAdminBracket(phaseFilter);

    const target = document.getElementById('copa-estelar-admin-export-container') || document.getElementById('copa-estelar-bracket-admin');
    if (!target) return;
    const btn = document.getElementById('btn-export-copa-estelar-img');
    const btnBar = document.getElementById('btn-export-copa-estelar-img-admin');

    const setBusy = (isBusy) => {
      [btn, btnBar].forEach(b => {
        if (!b) return;
        b.disabled = isBusy;
        b.innerHTML = isBusy 
          ? '<i class="fa-solid fa-spinner fa-spin"></i> Generando...' 
          : '<i class="fa-solid fa-camera" style="color: #c084fc;"></i> <span>Exportar a Imagen (PNG)</span>';
      });
    };

    setBusy(true);

    const unlockTimer = setTimeout(() => {
      setBusy(false);
    }, 10000);

    const isSinglePhase = phaseFilter !== 'all';
    const targetWidth = isSinglePhase ? 1100 : 1320;
    const wrapperWidth = targetWidth + 40;

    // 1. Crear clon aislado fuera de pantalla con ancho fijo
    const wrapper = document.createElement('div');
    wrapper.style.position = 'fixed';
    wrapper.style.top = '0';
    wrapper.style.left = '-12000px';
    wrapper.style.width = `${wrapperWidth}px`;
    wrapper.style.background = '#0c1220';
    wrapper.style.zIndex = '-99999';
    wrapper.style.pointerEvents = 'none';

    const clone = target.cloneNode(true);
    clone.style.width = `${targetWidth}px`;
    clone.style.minWidth = `${targetWidth}px`;
    clone.style.maxWidth = `${targetWidth}px`;
    clone.style.overflow = 'visible';
    clone.style.margin = '0 auto';
    clone.style.boxSizing = 'border-box';

    const innerBracket = clone.querySelector('#copa-estelar-bracket-admin') || clone;
    if (innerBracket) {
      innerBracket.style.overflow = 'visible';
      innerBracket.style.width = '100%';
      if (isSinglePhase) {
        if (phaseFilter === 'final') {
          innerBracket.style.display = 'flex';
          innerBracket.style.justifyContent = 'center';
        } else {
          innerBracket.style.display = 'grid';
          innerBracket.style.gridTemplateColumns = '1fr 1fr';
          innerBracket.style.gap = '1rem';
        }
      } else {
        innerBracket.style.display = 'flex';
        innerBracket.style.gap = '1.25rem';
        innerBracket.style.justifyContent = 'space-between';
      }
    }

    // 2. Reemplazar iconos para evitar cuelgues de @font-face en html2canvas
    clone.querySelectorAll('i').forEach(icon => {
      const cls = icon.className || '';
      let emoji = '⚽';
      if (cls.includes('fa-trophy')) emoji = '🏆';
      else if (cls.includes('fa-sitemap')) emoji = '🗺️';
      else if (cls.includes('fa-crown')) emoji = '👑';
      else if (cls.includes('fa-play')) emoji = '▶️';
      const span = document.createElement('span');
      span.style.fontSize = '1.25rem';
      span.style.verticalAlign = 'middle';
      span.style.marginRight = '0.35rem';
      span.textContent = emoji;
      icon.parentNode.replaceChild(span, icon);
    });

    // 3. Pre-convertir imágenes ya renderizadas a Data URLs
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
        backgroundColor: '#0c1220',
        scale: 2,
        useCORS: true,
        allowTaint: true,
        imageTimeout: 3000,
        logging: false,
        width: targetWidth,
        windowWidth: wrapperWidth
      });

      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('La generación de imagen tardó demasiado. Por favor, reintenta.')), 9000)
      );

      const canvas = await Promise.race([canvasPromise, timeoutPromise]);
      const dataUrl = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = dataUrl;
      const fileSuffix = isSinglePhase ? phaseFilter.toUpperCase() : 'Eliminatorias_Completo';
      a.download = `LMI_Copa_Estelar_${fileSuffix}_T11.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      this.showToast(`¡Imagen oficial de Copa Estelar (${isSinglePhase ? phaseFilter.toUpperCase() : 'Cuadro Completo'}) exportada con éxito!`, 'success');
    } catch (err) {
      console.error('Error exportando imagen de Copa Estelar:', err);
      this.showToast(`Error al exportar imagen: ${err.message}`, 'error');
    } finally {
      clearTimeout(unlockTimer);
      wrapper.remove();
      setBusy(false);
    }
  },

  onChampionsPhaseFilterChange(phase) {
    this.renderChampionsAdminBracket(phase);
  },

  renderChampionsAdminBracket(phaseFilter = null) {
    const container = document.getElementById('champions-bracket-admin');
    if (!container || !this.data || !this.data.championsLeagueMatches) return;

    if (!phaseFilter) {
      phaseFilter = document.getElementById('champions-phase-filter-admin')?.value || 'all';
    }

    const subtitleEl = document.getElementById('champions-admin-subtitle');
    const phaseTitles = {
      'all': 'CUADRO OFICIAL DE ELIMINATORIAS (TOP 8)',
      'cuartos': 'CUARTOS DE FINAL (8 CLUBES) • RESULTADOS OFICIALES',
      'semis': 'SEMIFINALES (4 CLUBES) • RESULTADOS OFICIALES',
      'final': 'GRAN FINAL • PARTIDO POR EL TÍTULO'
    };
    if (subtitleEl) subtitleEl.textContent = phaseTitles[phaseFilter] || phaseTitles['all'];

    const matches = this.data.championsLeagueMatches;
    const teams = this.data.teams || [];

    const getTeamRow = (teamName, score) => {
      const isPlaceholder = !teamName || teamName.toLowerCase().startsWith('ganador');
      const teamObj = teams.find(t => t.name.toLowerCase() === (teamName || '').toLowerCase()) || { logo: 'Logos Equipos/default.png' };
      return `
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.38rem 0.6rem; background: #0c1c38; border-radius: 6px; margin-bottom: 3px;">
          <div style="display: flex; align-items: center; gap: 0.55rem; max-width: 80%;">
            <img src="${teamObj.logo}" alt="" style="width: 22px; height: 22px; object-fit: contain;" onerror="this.src='Logos Equipos/default.png'">
            <span style="font-size: 0.86rem; color: ${isPlaceholder ? '#94a3b8' : '#ffffff'}; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${teamName || 'Por clasificar'}</span>
          </div>
          <span style="font-size: 0.95rem; font-weight: 900; color: #38bdf8;">${score !== undefined && score !== null ? score : ''}</span>
        </div>
      `;
    };

    const getMatchBox = (m) => {
      const isFinal = m.fase && (m.fase.toLowerCase() === 'final' || m.fase.toLowerCase().includes('gran final'));
      const advanceBtn = !isFinal ? `
        <button class="btn btn-secondary" onclick="AdminApp.openAdvanceTeamModal('champions_ko', '${m.fase}')" style="padding: 0.22rem 0.5rem; font-size: 0.73rem; font-weight: 700; width: 100%; margin-top: 0.4rem; justify-content: center; display: inline-flex; align-items: center; gap: 0.35rem; background: rgba(56, 189, 248, 0.15); border: 1px solid rgba(56, 189, 248, 0.35); color: #38bdf8;" title="Pasar un equipo de esta llave a la siguiente fase (Sin rival asignado o por W.O.)">
          <i class="fa-solid fa-forward-step" style="color: #38bdf8;"></i> Pasar a Siguiente Fase
        </button>
      ` : '';

      return `
        <div style="background: #0f274a; border: 1px solid rgba(56, 189, 248, 0.35); border-radius: 8px; padding: 0.6rem; margin: 0.4rem 0; width: 100%; box-shadow: 0 4px 10px rgba(0,0,0,0.25);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.35rem;">
            <span style="font-size: 0.72rem; font-weight: 800; color: #38bdf8; text-transform: uppercase; letter-spacing: 0.5px;">${m.fase || ''}</span>
            ${m.estado ? `<span style="font-size: 0.65rem; font-weight: 800; padding: 0.1rem 0.35rem; border-radius: 3px; background: ${m.estado.toLowerCase() === 'finalizado' ? 'rgba(74, 222, 128, 0.2); color: #4ade80;' : 'rgba(250, 204, 21, 0.2); color: #facc15;'}">${m.estado}</span>` : ''}
          </div>
          ${getTeamRow(m.team1, m.score1)}
          ${getTeamRow(m.team2, m.score2)}
          ${advanceBtn}
        </div>
      `;
    };

    const cuartos = matches.filter(m => m.fase && m.fase.toLowerCase().includes('cuartos'));
    const semis = matches.filter(m => m.fase && m.fase.toLowerCase().includes('semifinal'));
    const finalM = matches.find(m => m.fase && m.fase.toLowerCase() === 'final');

    if (phaseFilter !== 'all') {
      container.style.display = 'grid';
      container.style.gridTemplateColumns = 'repeat(auto-fit, minmax(280px, 1fr))';
      container.style.gap = '1rem';
      container.style.overflowX = 'visible';

      if (phaseFilter === 'cuartos') {
        container.innerHTML = cuartos.length ? cuartos.map(getMatchBox).join('') : '<div style="color: var(--text-muted); text-align: center; grid-column: 1/-1; padding: 2rem;">No hay partidos de Cuartos de Final registrados.</div>';
      } else if (phaseFilter === 'semis') {
        container.innerHTML = semis.length ? semis.map(getMatchBox).join('') : '<div style="color: var(--text-muted); text-align: center; grid-column: 1/-1; padding: 2rem;">No hay partidos de Semifinales registrados.</div>';
      } else if (phaseFilter === 'final') {
        container.style.display = 'flex';
        container.style.justifyContent = 'center';
        container.innerHTML = finalM ? `<div style="max-width: 440px; width: 100%;">${getMatchBox(finalM)}</div>` : '<div style="color: var(--text-muted); text-align: center; padding: 2rem;">No hay partido de Gran Final registrado aún.</div>';
      }
      return;
    }

    // Default: 'all' (Cuadro Completo)
    container.style.display = 'flex';
    container.style.gridTemplateColumns = '';
    container.style.justifyContent = 'space-between';
    container.style.gap = '1.25rem';
    container.style.overflowX = 'auto';

    let html = '';
    if (cuartos.length) {
      html += `<div style="flex: 1; min-width: 220px; display: flex; flex-direction: column; justify-content: space-around;">
        <h4 style="color: #38bdf8; text-align: center; border-bottom: 2px solid #0284c7; padding-bottom: 0.4rem; font-size: 0.9rem;">Cuartos de Final</h4>
        ${cuartos.map(getMatchBox).join('')}
      </div>`;
    }
    if (semis.length) {
      html += `<div style="flex: 1; min-width: 220px; display: flex; flex-direction: column; justify-content: space-around;">
        <h4 style="color: #60a5fa; text-align: center; border-bottom: 2px solid #3b82f6; padding-bottom: 0.4rem; font-size: 0.9rem;">Semifinales</h4>
        ${semis.map(getMatchBox).join('')}
      </div>`;
    }
    if (finalM) {
      html += `<div style="flex: 1; min-width: 220px; display: flex; flex-direction: column; justify-content: center;">
        <h4 style="color: #ffd700; text-align: center; border-bottom: 2px solid #ffd700; padding-bottom: 0.4rem; font-size: 0.9rem;">Gran Final</h4>
        ${getMatchBox(finalM)}
      </div>`;
    }

    container.innerHTML = html;
  },

  async exportChampionsAdminImage() {
    const phaseFilter = document.getElementById('champions-phase-filter-admin')?.value || 'all';
    this.renderChampionsAdminBracket(phaseFilter);

    const target = document.getElementById('champions-admin-export-container') || document.getElementById('champions-bracket-admin');
    if (!target) return;
    const btn = document.getElementById('btn-export-champions-img');
    const btnBar = document.getElementById('btn-export-champions-img-admin');

    const setBusy = (isBusy) => {
      [btn, btnBar].forEach(b => {
        if (!b) return;
        b.disabled = isBusy;
        b.innerHTML = isBusy 
          ? '<i class="fa-solid fa-spinner fa-spin"></i> Generando...' 
          : '<i class="fa-solid fa-camera" style="color: #38bdf8;"></i> <span>Exportar Llaves Champions</span>';
      });
    };

    setBusy(true);

    const unlockTimer = setTimeout(() => {
      setBusy(false);
    }, 10000);

    const isSinglePhase = phaseFilter !== 'all';
    const targetWidth = isSinglePhase ? 1100 : 1320;
    const wrapperWidth = targetWidth + 40;

    const wrapper = document.createElement('div');
    wrapper.style.position = 'fixed';
    wrapper.style.top = '0';
    wrapper.style.left = '-12000px';
    wrapper.style.width = `${wrapperWidth}px`;
    wrapper.style.background = '#050e1d';
    wrapper.style.zIndex = '-99999';
    wrapper.style.pointerEvents = 'none';

    const clone = target.cloneNode(true);
    clone.style.width = `${targetWidth}px`;
    clone.style.minWidth = `${targetWidth}px`;
    clone.style.maxWidth = `${targetWidth}px`;
    clone.style.overflow = 'visible';
    clone.style.margin = '0 auto';

    wrapper.appendChild(clone);
    document.body.appendChild(wrapper);

    try {
      if (typeof html2canvas === 'undefined') {
        throw new Error('html2canvas no está disponible.');
      }

      const canvas = await html2canvas(clone, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#050e1d',
        logging: false,
        width: targetWidth,
        windowWidth: wrapperWidth
      });

      const dataUrl = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = dataUrl;
      const fileSuffix = isSinglePhase ? phaseFilter.toUpperCase() : 'Eliminatorias_Top8';
      a.download = `LMI_Champions_League_${fileSuffix}_T11.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      this.showToast(`¡Imagen oficial de Champions League (${isSinglePhase ? phaseFilter.toUpperCase() : 'Cuadro Completo'}) exportada con éxito!`, 'success');
    } catch (err) {
      console.error('Error exportando imagen de Champions:', err);
      this.showToast(`Error al exportar imagen: ${err.message}`, 'error');
    } finally {
      clearTimeout(unlockTimer);
      wrapper.remove();
      setBusy(false);
    }
  },

  // ==================== TABLAS DE POSICIONES Y EXPORTACIÓN A IMAGEN ====================
  currentAdminStandingsDivision: 'oro',

  calculateDivisionStandings(division) {
    if (!this.data || !this.data.teams) return [];
    
    // Equipos activos de la división
    const divTeams = this.data.teams.filter(t => (t.division || 'oro') === division);
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
      (r.matches || []).forEach(m => {
        if (m.played && m.score1 !== null && m.score2 !== null) {
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
    list.forEach(item => { item.dg = item.gf - item.gc; });
    list.sort((a, b) => {
      if (b.pts !== a.pts) return b.pts - a.pts;
      if (b.dg !== a.dg) return b.dg - a.dg;
      if (b.gf !== a.gf) return b.gf - a.gf;
      return (a.team.name || '').localeCompare(b.team.name || '');
    });

    return list;
  },

  switchAdminStandingsDivision(division) {
    this.currentAdminStandingsDivision = division;
    const btnOro = document.getElementById('btn-admin-tab-oro');
    const btnPlata = document.getElementById('btn-admin-tab-plata');
    if (btnOro && btnPlata) {
      if (division === 'oro') {
        btnOro.classList.add('active');
        btnOro.style.background = 'linear-gradient(135deg, #d97706, #b45309)';
        btnOro.style.color = '#ffffff';
        btnPlata.classList.remove('active');
        btnPlata.style.background = 'transparent';
        btnPlata.style.color = '#94a3b8';
      } else {
        btnPlata.classList.add('active');
        btnPlata.style.background = 'linear-gradient(135deg, #475569, #334155)';
        btnPlata.style.color = '#ffffff';
        btnOro.classList.remove('active');
        btnOro.style.background = 'transparent';
        btnOro.style.color = '#94a3b8';
      }
    }
    this.renderAdminStandings(division);
  },

  renderAdminStandings(division) {
    const div = division || this.currentAdminStandingsDivision || 'oro';
    const standings = this.calculateDivisionStandings(div);
    const tbody = document.getElementById('admin-standings-tbody');
    const titleEl = document.getElementById('admin-standings-title');
    const subEl = document.getElementById('admin-standings-subtitle');
    const badgeEl = document.getElementById('admin-standings-badge');
    const legendEl = document.getElementById('admin-standings-legend');

    const isOro = div === 'oro';
    const divName = isOro ? 'DIVISIÓN ORO' : 'DIVISIÓN PLATA';
    const totalTeams = standings.length;

    if (titleEl) {
      titleEl.innerHTML = `LIGA MÁSTER INTERNACIONAL &bull; ${divName}`;
    }
    if (subEl) {
      subEl.innerHTML = `TABLA OFICIAL DE POSICIONES &bull; ${totalTeams} CLUBES`;
    }
    if (badgeEl) {
      badgeEl.textContent = `${totalTeams} CLUBES`;
      badgeEl.style.background = isOro ? 'rgba(217, 119, 6, 0.2)' : 'rgba(148, 163, 184, 0.2)';
      badgeEl.style.borderColor = isOro ? '#d97706' : '#94a3b8';
      badgeEl.style.color = isOro ? '#fde047' : '#e2e8f0';
    }

    if (!tbody) return;

    if (standings.length === 0) {
      tbody.innerHTML = '<tr><td colspan="10" style="text-align:center; padding: 2rem; color: #94a3b8;">No hay clubes registrados para esta división</td></tr>';
      return;
    }

    tbody.innerHTML = standings.map((item, idx) => {
      const pos = idx + 1;
      let posBadge = '';
      let rowBorderLeft = '4px solid transparent';
      let rowBg = idx % 2 === 0 ? 'rgba(255, 255, 255, 0.02)' : 'rgba(255, 255, 255, 0.04)';

      if (isOro) {
        if (pos === 1) {
          posBadge = `<span style="display:inline-flex; align-items:center; justify-content:center; width:28px; height:28px; border-radius:50%; font-weight:900; font-size:0.85rem; background:linear-gradient(135deg, #ffd700, #b8860b); color:#000; box-shadow:0 0 12px rgba(255,215,0,0.6);" title="1° Campeón">1</span>`;
          rowBorderLeft = '4px solid #ffd700';
          rowBg = 'rgba(255, 215, 0, 0.06)';
        } else if (pos >= totalTeams - 1) {
          // Últimos 2: Descenso directo (Rojo)
          posBadge = `<span style="display:inline-flex; align-items:center; justify-content:center; width:28px; height:28px; border-radius:50%; font-weight:800; font-size:0.85rem; background:rgba(239, 68, 68, 0.25); border:1px solid #ef4444; color:#f87171; box-shadow:0 0 8px rgba(239, 68, 68, 0.25);" title="Descenso Directo">${pos}</span>`;
          rowBorderLeft = '4px solid #ef4444';
          rowBg = 'rgba(239, 68, 68, 0.05)';
        } else if (pos === totalTeams - 2) {
          // Antepenúltimo: Repechaje (Naranja)
          posBadge = `<span style="display:inline-flex; align-items:center; justify-content:center; width:28px; height:28px; border-radius:50%; font-weight:800; font-size:0.85rem; background:rgba(249, 115, 22, 0.25); border:1px solid #f97316; color:#fb923c; box-shadow:0 0 8px rgba(249, 115, 22, 0.25);" title="Repechaje de Permanencia">${pos}</span>`;
          rowBorderLeft = '4px solid #f97316';
          rowBg = 'rgba(249, 115, 22, 0.05)';
        } else {
          posBadge = `<span style="display:inline-flex; align-items:center; justify-content:center; width:28px; height:28px; border-radius:50%; font-weight:700; font-size:0.85rem; background:rgba(255,255,255,0.08); color:#cbd5e1;">${pos}</span>`;
        }
      } else {
        // Plata
        if (pos === 1 || pos === 2) {
          // Primeros 2: Ascenso Directo (Verde)
          posBadge = `<span style="display:inline-flex; align-items:center; justify-content:center; width:28px; height:28px; border-radius:50%; font-weight:800; font-size:0.85rem; background:rgba(16, 185, 129, 0.25); border:1px solid #10b981; color:#4ade80; box-shadow:0 0 10px rgba(16, 185, 129, 0.35);" title="Ascenso Directo">${pos}</span>`;
          rowBorderLeft = '4px solid #10b981';
          rowBg = 'rgba(16, 185, 129, 0.05)';
        } else if (pos === 3) {
          // 3° lugar: Repechaje de Ascenso (Naranja)
          posBadge = `<span style="display:inline-flex; align-items:center; justify-content:center; width:28px; height:28px; border-radius:50%; font-weight:800; font-size:0.85rem; background:rgba(249, 115, 22, 0.25); border:1px solid #f97316; color:#fb923c; box-shadow:0 0 8px rgba(249, 115, 22, 0.25);" title="Repechaje de Ascenso">${pos}</span>`;
          rowBorderLeft = '4px solid #f97316';
          rowBg = 'rgba(249, 115, 22, 0.05)';
        } else {
          posBadge = `<span style="display:inline-flex; align-items:center; justify-content:center; width:28px; height:28px; border-radius:50%; font-weight:700; font-size:0.85rem; background:rgba(255,255,255,0.08); color:#cbd5e1;">${pos}</span>`;
        }
      }

      const dgFormatted = item.dg > 0 ? `+${item.dg}` : `${item.dg}`;
      const dgColor = item.dg > 0 ? '#4ade80' : (item.dg < 0 ? '#f87171' : '#94a3b8');

      return `
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06); border-left: ${rowBorderLeft}; background: ${rowBg};">
          <td style="padding: 0.65rem 0.5rem; text-align: center;">${posBadge}</td>
          <td style="padding: 0.65rem 0.85rem; text-align: left;">
            <div style="display: flex; align-items: center; gap: 0.65rem;">
              <img src="${this.escape(item.team.logo || 'Logos Equipos/default.png')}" alt="${this.escape(item.team.name)}" style="width: 26px; height: 26px; object-fit: contain; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));" onerror="this.src='Logos Equipos/default.png'">
              <span style="font-weight: 800; font-size: 0.92rem; color: #ffffff;">${this.escape(item.team.name)}</span>
            </div>
          </td>
          <td style="padding: 0.65rem 0.65rem; text-align: center; font-weight: 700; color: #cbd5e1;">${item.pj}</td>
          <td style="padding: 0.65rem 0.65rem; text-align: center; font-weight: 700; color: #ffffff;">${item.g}</td>
          <td style="padding: 0.65rem 0.65rem; text-align: center; font-weight: 700; color: #cbd5e1;">${item.e}</td>
          <td style="padding: 0.65rem 0.65rem; text-align: center; font-weight: 700; color: #cbd5e1;">${item.p}</td>
          <td style="padding: 0.65rem 0.65rem; text-align: center; font-weight: 700; color: #cbd5e1;">${item.gf}</td>
          <td style="padding: 0.65rem 0.65rem; text-align: center; font-weight: 700; color: #cbd5e1;">${item.gc}</td>
          <td style="padding: 0.65rem 0.65rem; text-align: center; font-weight: 800; color: ${dgColor};">${dgFormatted}</td>
          <td style="padding: 0.65rem 0.85rem; text-align: center; font-weight: 900; font-size: 1.05rem; color: #ffd100; background: rgba(255,209,0,0.05);">${item.pts}</td>
        </tr>
      `;
    }).join('');

    // Render legend
    if (legendEl) {
      if (isOro) {
        legendEl.innerHTML = `
          <div style="display: flex; gap: 1.5rem; flex-wrap: wrap; font-size: 0.8rem; color: #94a3b8; padding-top: 0.5rem;">
            <div style="display: flex; align-items: center; gap: 0.45rem;">
              <span style="width: 12px; height: 12px; border-radius: 3px; background: #ffd700; display: inline-block;"></span>
              <span>1° Campeón de División Oro</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.45rem;">
              <span style="width: 12px; height: 12px; border-radius: 3px; background: #f97316; display: inline-block;"></span>
              <span>${totalTeams - 2}° Repechaje de Permanencia</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.45rem;">
              <span style="width: 12px; height: 12px; border-radius: 3px; background: #ef4444; display: inline-block;"></span>
              <span>${totalTeams - 1}° y ${totalTeams}° Descenso Directo a División Plata</span>
            </div>
          </div>
        `;
      } else {
        legendEl.innerHTML = `
          <div style="display: flex; gap: 1.5rem; flex-wrap: wrap; font-size: 0.8rem; color: #94a3b8; padding-top: 0.5rem;">
            <div style="display: flex; align-items: center; gap: 0.45rem;">
              <span style="width: 12px; height: 12px; border-radius: 3px; background: #10b981; display: inline-block;"></span>
              <span>1° y 2° Ascenso Directo a División Oro</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.45rem;">
              <span style="width: 12px; height: 12px; border-radius: 3px; background: #f97316; display: inline-block;"></span>
              <span>3° Repechaje de Ascenso</span>
            </div>
          </div>
        `;
      }
    }
  },

  async exportStandingsImage(division) {
    const div = division || this.currentAdminStandingsDivision || 'oro';
    this.switchAdminStandingsDivision(div);

    const target = document.getElementById('standings-admin-export-container');
    if (!target) {
      this.showToast('No se encontró el contenedor de la tabla para exportar', 'error');
      return;
    }

    const isOro = div === 'oro';
    const divName = isOro ? 'Division_Oro' : 'Division_Plata';
    const seasonTag = (this.data && this.data.season ? this.data.season.replace(/\s+/g, '_') : 'Temporada_12');
    const filename = `LMI_Tabla_Posiciones_${divName}_${seasonTag}.png`;

    const btn = document.getElementById('btn-download-standings-img');
    const btnOro = document.getElementById('btn-export-standings-oro');
    const btnPlata = document.getElementById('btn-export-standings-plata');

    const setBusy = (isBusy) => {
      [btn, btnOro, btnPlata].forEach(b => {
        if (!b) return;
        b.disabled = isBusy;
        if (isBusy) {
          b.dataset.prevHtml = b.innerHTML;
          b.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Generando...';
        } else if (b.dataset.prevHtml) {
          b.innerHTML = b.dataset.prevHtml;
        }
      });
    };

    setBusy(true);
    const unlockTimer = setTimeout(() => setBusy(false), 10000);

    const targetWidth = 1000;
    const wrapperWidth = targetWidth + 40;
    const wrapper = document.createElement('div');
    wrapper.style.position = 'fixed';
    wrapper.style.top = '0';
    wrapper.style.left = '-12000px';
    wrapper.style.width = `${wrapperWidth}px`;
    wrapper.style.background = '#0c1220';
    wrapper.style.zIndex = '-99999';
    wrapper.style.pointerEvents = 'none';

    const clone = target.cloneNode(true);
    clone.style.width = `${targetWidth}px`;
    clone.style.minWidth = `${targetWidth}px`;
    clone.style.maxWidth = `${targetWidth}px`;
    clone.style.margin = '0 auto';
    clone.style.boxSizing = 'border-box';
    clone.style.overflow = 'visible';

    // 1. Reemplazar iconos con emojis o símbolos para evitar cuelgues de fuentes en html2canvas
    clone.querySelectorAll('i').forEach(icon => {
      const cls = icon.className || '';
      let emoji = '⚽';
      if (cls.includes('fa-trophy')) emoji = '🏆';
      else if (cls.includes('fa-medal')) emoji = '🥈';
      else if (cls.includes('fa-star')) emoji = '⭐';
      else if (cls.includes('fa-table')) emoji = '📊';
      const span = document.createElement('span');
      span.style.fontSize = '1.3rem';
      span.style.verticalAlign = 'middle';
      span.style.marginRight = '0.35rem';
      span.textContent = emoji;
      icon.parentNode.replaceChild(span, icon);
    });

    // 2. Pre-convertir imágenes ya cargadas a Data URLs
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
        setTimeout(() => reject(new Error('La generación de imagen tardó demasiado. Por favor, reintenta.')), 9000)
      );

      const canvas = await Promise.race([canvasPromise, timeoutPromise]);
      const dataUrl = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      this.showToast(`¡Tabla oficial de ${isOro ? 'División Oro' : 'División Plata'} exportada en imagen (PNG) con éxito!`, 'success');
    } catch (err) {
      console.error('Error exportando tabla a imagen:', err);
      this.showToast(`Error al exportar tabla: ${err.message}`, 'error');
    } finally {
      clearTimeout(unlockTimer);
      wrapper.remove();
      setBusy(false);
    }
  },

  async generateChampionsPlayoffs() {
    if (!this.data || !this.data.teams || !this.data.fixtures) return;
    if (!confirm('¿Deseas sincronizar las llaves de Cuartos de Final con los 8 clasificados oficiales de la tabla de Champions League (1° vs 8°, 2° vs 7°, 3° vs 6°, 4° vs 5°)?\\n\\nEsto actualizará el cuadro oficial de eliminatorias de Champions League.')) {
      return;
    }

    const eligible = this.data.teams.filter(t => t.id !== 'clubamerica' && t.id !== 'urawareddiamonds');
    const stats = {};
    eligible.forEach(t => {
      stats[t.id] = { team: t, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0 };
    });

    const rounds = (this.data.fixtures && this.data.fixtures.champions) || [];
    rounds.forEach(r => {
      (r.matches || []).forEach(m => {
        if (m.played && m.score1 !== null && m.score2 !== null) {
          const s1 = parseInt(m.score1, 10);
          const s2 = parseInt(m.score2, 10);
          if (isNaN(s1) || isNaN(s2)) return;
          const t1 = m.team1Id;
          const t2 = m.team2Id;
          if (stats[t1] && stats[t2]) {
            stats[t1].pj++;
            stats[t2].pj++;
            stats[t1].gf += s1;
            stats[t1].gc += s2;
            stats[t2].gf += s2;
            stats[t2].gc += s1;
            if (s1 > s2) {
              stats[t1].g++; stats[t1].pts += 3; stats[t2].p++;
            } else if (s1 === s2) {
              stats[t1].e++; stats[t1].pts += 1; stats[t2].e++; stats[t2].pts += 1;
            } else {
              stats[t2].g++; stats[t2].pts += 3; stats[t1].p++;
            }
          }
        }
      });
    });

    const standings = Object.values(stats);
    standings.forEach(item => { item.dg = item.gf - item.gc; });
    standings.sort((a, b) => {
      if (b.pts !== a.pts) return b.pts - a.pts;
      if (b.dg !== a.dg) return b.dg - a.dg;
      if (b.gf !== a.gf) return b.gf - a.gf;
      return (a.team.name || '').localeCompare(b.team.name || '');
    });

    if (standings.length < 8) {
      this.showToast('No hay suficientes clubes para formar el Top 8', 'error');
      return;
    }

    const t1 = standings[0].team.name;
    const t2 = standings[1].team.name;
    const t3 = standings[2].team.name;
    const t4 = standings[3].team.name;
    const t5 = standings[4].team.name;
    const t6 = standings[5].team.name;
    const t7 = standings[6].team.name;
    const t8 = standings[7].team.name;

    this.data.championsLeagueMatches = [
      { fase: 'Cuartos 1', team1: t1, score1: '', team2: t8, score2: '', estado: 'Pendiente' },
      { fase: 'Cuartos 2', team1: t2, score1: '', team2: t7, score2: '', estado: 'Pendiente' },
      { fase: 'Cuartos 3', team1: t3, score1: '', team2: t6, score2: '', estado: 'Pendiente' },
      { fase: 'Cuartos 4', team1: t4, score1: '', team2: t5, score2: '', estado: 'Pendiente' },
      { fase: 'Semifinal 1', team1: 'Ganador Cuartos 1', score1: '', team2: 'Ganador Cuartos 4', score2: '', estado: 'Pendiente' },
      { fase: 'Semifinal 2', team1: 'Ganador Cuartos 2', score1: '', team2: 'Ganador Cuartos 3', score2: '', estado: 'Pendiente' },
      { fase: 'Final', team1: 'Ganador Semifinal 1', score1: '', team2: 'Ganador Semifinal 2', score2: '', estado: 'Pendiente' }
    ];

    await this.saveData(true);
    this.onCompetitionChange();
    this.showToast('¡Eliminatorias de Champions League sincronizadas con el Top 8 (1° vs 8°, 2° vs 7°, 3° vs 6°, 4° vs 5°)!', 'success');
  },

  async drawCopaEstelar() {
    if (!this.data || !this.data.teams) return;
    if (!confirm('¿Deseas realizar un nuevo sorteo aleatorio oficial de la Copa Estelar para los 18 clubes (excluyendo Club América y Urawa Red Diamonds)?\\n\\nEsto reseteará los partidos de Copa Estelar a estado Pendiente con el nuevo cuadro sorteado.')) {
      return;
    }

    const eligibleTeams = this.data.teams.filter(t => t.id !== 'clubamerica' && t.id !== 'urawareddiamonds');
    if (eligibleTeams.length < 18) {
      this.showToast('No se encontraron suficientes equipos elegibles para el sorteo', 'error');
      return;
    }

    const shuffled = [...eligibleTeams].map(t => t.name).sort(() => Math.random() - 0.5);

    const matches = [
      { fase: 'Ronda Previa 1', team1: shuffled[0], score1: '', team2: shuffled[1], score2: '', estado: 'Pendiente' },
      { fase: 'Ronda Previa 2', team1: shuffled[2], score1: '', team2: shuffled[3], score2: '', estado: 'Pendiente' },
      { fase: 'Octavos 1', team1: 'Ganador Previa 1', score1: '', team2: shuffled[4], score2: '', estado: 'Pendiente' },
      { fase: 'Octavos 2', team1: 'Ganador Previa 2', score1: '', team2: shuffled[5], score2: '', estado: 'Pendiente' },
      { fase: 'Octavos 3', team1: shuffled[6], score1: '', team2: shuffled[7], score2: '', estado: 'Pendiente' },
      { fase: 'Octavos 4', team1: shuffled[8], score1: '', team2: shuffled[9], score2: '', estado: 'Pendiente' },
      { fase: 'Octavos 5', team1: shuffled[10], score1: '', team2: shuffled[11], score2: '', estado: 'Pendiente' },
      { fase: 'Octavos 6', team1: shuffled[12], score1: '', team2: shuffled[13], score2: '', estado: 'Pendiente' },
      { fase: 'Octavos 7', team1: shuffled[14], score1: '', team2: shuffled[15], score2: '', estado: 'Pendiente' },
      { fase: 'Octavos 8', team1: shuffled[16], score1: '', team2: shuffled[17], score2: '', estado: 'Pendiente' },
      { fase: 'Cuartos 1', team1: 'Ganador Octavos 1', score1: '', team2: 'Ganador Octavos 2', score2: '', estado: 'Pendiente' },
      { fase: 'Cuartos 2', team1: 'Ganador Octavos 3', score1: '', team2: 'Ganador Octavos 4', score2: '', estado: 'Pendiente' },
      { fase: 'Cuartos 3', team1: 'Ganador Octavos 5', score1: '', team2: 'Ganador Octavos 6', score2: '', estado: 'Pendiente' },
      { fase: 'Cuartos 4', team1: 'Ganador Octavos 7', score1: '', team2: 'Ganador Octavos 8', score2: '', estado: 'Pendiente' },
      { fase: 'Semifinal 1', team1: 'Ganador Cuartos 1', score1: '', team2: 'Ganador Cuartos 2', score2: '', estado: 'Pendiente' },
      { fase: 'Semifinal 2', team1: 'Ganador Cuartos 3', score1: '', team2: 'Ganador Cuartos 4', score2: '', estado: 'Pendiente' },
      { fase: 'Final', team1: 'Ganador Semifinal 1', score1: '', team2: 'Ganador Semifinal 2', score2: '', estado: 'Pendiente' }
    ];

    this.data.copaEstelarMatches = matches;
    await this.saveData(true);
    this.onCompetitionChange();
    this.showToast('¡Sorteo aleatorio oficial de Copa Estelar realizado con éxito!', 'success');
  },

  async generateChampionsFixture() {
    if (!this.data || !this.data.teams) return;
    if (!confirm('¿Deseas generar las 17 fechas oficiales de UEFA Champions League (1 partido contra cada club para los 18 equipos, excluyendo Club América y Urawa)?\\n\\nEsto regenerará el fixture oficial de Champions League.')) {
      return;
    }

    const eligible = this.data.teams.filter(t => t.id !== 'clubamerica' && t.id !== 'urawareddiamonds');
    const teamIds = eligible.map(t => t.id);
    const n = teamIds.length;
    if (n < 18) {
      this.showToast('No se encontraron los 18 clubes elegibles', 'error');
      return;
    }

    const roundsCount = n - 1;
    const matchesPerRound = n / 2;
    const fixed = teamIds[0];
    let rotating = teamIds.slice(1);

    const fixtures = [];
    for (let r = 0; r < roundsCount; r++) {
      const currentTeams = [fixed, ...rotating];
      const matches = [];
      for (let m = 0; m < matchesPerRound; m++) {
        let t1 = currentTeams[m];
        let t2 = currentTeams[n - 1 - m];
        if (m === 0 && r % 2 === 1) {
          const tmp = t1; t1 = t2; t2 = tmp;
        } else if (m > 0 && (r + m) % 2 === 1) {
          const tmp = t1; t1 = t2; t2 = tmp;
        }
        matches.push({
          id: `champions_j${r + 1}_m${m + 1}`,
          jornada: r + 1,
          team1Id: t1,
          team2Id: t2,
          score1: null,
          score2: null,
          played: false,
          events: []
        });
      }
      fixtures.push({
        jornada: r + 1,
        name: `Jornada ${r + 1}`,
        type: 'ida',
        matches: matches
      });
      rotating = [rotating[rotating.length - 1], ...rotating.slice(0, rotating.length - 1)];
    }

    if (!this.data.fixtures) this.data.fixtures = {};
    this.data.fixtures['champions'] = fixtures;

    await this.saveData(true);
    this.onCompetitionChange();
    this.showToast('¡Calendario oficial de Champions League (17 Jornadas) generado exitosamente!', 'success');
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
    this.syncEventsWithScores();
  },

  addMatchEventRow(initialData = null) {
    const team1Id = document.getElementById('match-team1-select').value;
    const team2Id = document.getElementById('match-team2-select').value;
    const team1 = this.getTeamById(team1Id);
    const team2 = this.getTeamById(team2Id);

    const targetTeamId = (initialData && initialData.teamId) ? initialData.teamId : team1Id;

    // Buscar jugador por defecto que aún no esté seleccionado para evitar repeticiones
    let defaultPlayerId = (initialData && initialData.playerId) ? initialData.playerId : '';
    if (!defaultPlayerId) {
      const usedIds = new Set(this.matchEvents.map(e => e.playerId).filter(Boolean));
      const teamPlayers = this.getPlayersByTeam(targetTeamId).slice().sort((a, b) => {
        const order = { 'DC': 1, 'SD': 2, 'SP': 3, 'ED': 4, 'EI': 5, 'MO': 6, 'MC': 7, 'MD': 8, 'MI': 9, 'MCD': 10, 'LD': 11, 'LI': 12, 'DEC': 13, 'PT': 14 };
        return (order[a.position] || 99) - (order[b.position] || 99);
      });
      const nonUsed = teamPlayers.find(p => !usedIds.has(p.id));
      defaultPlayerId = nonUsed ? nonUsed.id : (teamPlayers[0] ? teamPlayers[0].id : '');
    }

    const eventId = (initialData && initialData.id) ? initialData.id : `ev_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
    const eventObj = {
      id: eventId,
      teamId: targetTeamId,
      playerId: defaultPlayerId,
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
      <div style="flex: 3; display: flex; flex-direction: column;">
        <select class="form-select ev-player-select" style="width: 100%; padding: 0.5rem 0.75rem; font-size: 0.88rem;">
          <!-- Populated dynamically -->
        </select>
        <div class="duplicate-player-warning" style="display: none; color: #ef4444; font-size: 0.76rem; font-weight: 700; margin-top: 3px; align-items: center; gap: 4px;">
          <i class="fa-solid fa-triangle-exclamation"></i> ¡Jugador repetido! Ya está asignado en otra fila.
        </div>
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
      this.validateDuplicatePlayers();
    });

    playerSel.addEventListener('change', (e) => {
      eventObj.playerId = e.target.value;
      this.validateDuplicatePlayers();
    });

    goalsInput.addEventListener('input', (e) => {
      eventObj.goals = Math.max(0, parseInt(e.target.value, 10) || 0);
    });

    assistsInput.addEventListener('input', (e) => {
      eventObj.assists = Math.max(0, parseInt(e.target.value, 10) || 0);
    });

    this.validateDuplicatePlayers();
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
    this.validateDuplicatePlayers();
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

    this.validateDuplicatePlayers();
  },

  validateDuplicatePlayers() {
    // Contar ocurrencias de cada jugador en los eventos actuales
    const counts = {};
    this.matchEvents.forEach(e => {
      if (e.playerId) {
        counts[e.playerId] = (counts[e.playerId] || 0) + 1;
      }
    });

    const duplicateIds = new Set(
      Object.keys(counts).filter(id => counts[id] > 1)
    );

    // Actualizar advertencias visuales en cada fila
    document.querySelectorAll('.event-row').forEach(row => {
      const rowId = row.id.replace('row-', '');
      const eventObj = this.matchEvents.find(e => e.id === rowId);
      const playerSel = row.querySelector('.ev-player-select');
      const warningEl = row.querySelector('.duplicate-player-warning');
      const isDuplicate = eventObj && eventObj.playerId && duplicateIds.has(eventObj.playerId);

      if (warningEl) {
        warningEl.style.display = isDuplicate ? 'flex' : 'none';
      }
      if (playerSel) {
        if (isDuplicate) {
          playerSel.style.borderColor = '#ef4444';
          playerSel.style.backgroundColor = 'rgba(239, 68, 68, 0.08)';
          playerSel.style.color = '#fca5a5';
        } else {
          playerSel.style.borderColor = '';
          playerSel.style.backgroundColor = '';
          playerSel.style.color = '';
        }

        // Actualizar opciones para indicar si ya está seleccionado en otra fila
        const currentSelectedId = eventObj ? eventObj.playerId : '';
        Array.from(playerSel.options).forEach(opt => {
          if (!opt.value) return;
          const p = this.getPlayerById(opt.value);
          const baseName = p ? `${p.name} (${p.position || 'MC'})` : opt.textContent.replace(/^⚠️ \[Repetido\] /, '');
          const isUsedElsewhere = (counts[opt.value] || 0) > (opt.value === currentSelectedId ? 1 : 0);
          if (isUsedElsewhere) {
            opt.textContent = `⚠️ [Repetido] ${baseName}`;
            opt.style.color = '#ef4444';
            opt.style.fontWeight = '700';
          } else {
            opt.textContent = baseName;
            opt.style.color = '';
            opt.style.fontWeight = '';
          }
        });
      }
    });

    return duplicateIds;
  },

  syncEventsWithScores() {
    const score1Input = document.getElementById('match-score1');
    const score2Input = document.getElementById('match-score2');
    if (!score1Input || !score2Input) return;

    const team1Id = document.getElementById('match-team1-select')?.value;
    const team2Id = document.getElementById('match-team2-select')?.value;
    if (!team1Id || !team2Id) return;

    const desiredScore1 = Math.max(0, parseInt(score1Input.value, 10) || 0);
    const desiredScore2 = Math.max(0, parseInt(score2Input.value, 10) || 0);

    const syncTeam = (tId, desiredGoals) => {
      const teamPlayers = this.getPlayersByTeam(tId).slice().sort((a, b) => {
        const order = { 'DC': 1, 'SD': 2, 'SP': 3, 'ED': 4, 'EI': 5, 'MO': 6, 'MC': 7, 'MD': 8, 'MI': 9, 'MCD': 10, 'LD': 11, 'LI': 12, 'DEC': 13, 'PT': 14 };
        return (order[a.position] || 99) - (order[b.position] || 99);
      });

      let teamEvents = this.matchEvents.filter(e => e.teamId === tId);
      let currentGoals = teamEvents.reduce((s, e) => s + (parseInt(e.goals, 10) || 0), 0);

      // Si faltan goles, añadir filas asignando jugadores no repetidos
      while (currentGoals < desiredGoals) {
        const usedPlayerIds = new Set(this.matchEvents.map(e => e.playerId).filter(Boolean));
        const availablePlayer = teamPlayers.find(p => !usedPlayerIds.has(p.id)) || teamPlayers[0];
        const newEvent = {
          teamId: tId,
          playerId: availablePlayer ? availablePlayer.id : '',
          goals: 1,
          assists: 0
        };
        this.addMatchEventRow(newEvent);
        teamEvents = this.matchEvents.filter(e => e.teamId === tId);
        currentGoals += 1;
      }

      // Si sobran goles, reducir o eliminar filas sobrantes del equipo
      while (currentGoals > desiredGoals && teamEvents.length > 0) {
        const lastEv = teamEvents[teamEvents.length - 1];
        if (lastEv.goals > 1 && (currentGoals - desiredGoals) >= 1) {
          lastEv.goals -= 1;
          const row = document.getElementById(`row-${lastEv.id}`);
          if (row) {
            const gInput = row.querySelector('.ev-goals-input');
            if (gInput) gInput.value = lastEv.goals;
          }
          currentGoals -= 1;
        } else {
          currentGoals -= lastEv.goals;
          this.removeMatchEventRow(lastEv.id);
          teamEvents = this.matchEvents.filter(e => e.teamId === tId);
        }
      }
    };

    syncTeam(team1Id, desiredScore1);
    syncTeam(team2Id, desiredScore2);

    this.validateDuplicatePlayers();
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

    const duplicateIds = this.validateDuplicatePlayers();
    if (duplicateIds && duplicateIds.size > 0) {
      const dupNames = Array.from(duplicateIds).map(id => {
        const p = this.getPlayerById(id);
        return p ? p.name : id;
      }).join(', ');
      this.showToast(`No se puede guardar: El jugador ${dupNames} aparece repetido en más de una fila. Asigna jugadores diferentes o ajusta las cifras en una sola fila.`, 'error');
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
          else if (comp === 'champions' || comp === 'champions_ko') player.goals_champions = (player.goals_champions || 0) + goals;
          else if (comp === 'estelar') player.goals_estelar = (player.goals_estelar || 0) + goals;
          updatedStatsCount += goals;
        }

        if (assists > 0) {
          player.assists = (player.assists || 0) + assists;
          if (comp === 'oro' || comp === 'plata' || comp === 'liga') player.assists_liga = (player.assists_liga || 0) + assists;
          else if (comp === 'champions' || comp === 'champions_ko') player.assists_champions = (player.assists_champions || 0) + assists;
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

    // Actualizar cuadro si es Copa Estelar o Eliminatorias de Champions League
    if ((comp === 'estelar' || comp === 'champions_ko') && updateBracket) {
      const matchArray = comp === 'champions_ko' ? this.data.championsLeagueMatches : this.data.copaEstelarMatches;
      if (matchArray) {
        let targetMatch = matchArray.find(m => m.fase && m.fase.toLowerCase() === phase.toLowerCase());
        if (!targetMatch) {
          targetMatch = matchArray.find(m => m.fase && m.fase.toLowerCase().startsWith(phase.toLowerCase()));
        }
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

        // Auto-avanzar ganador al siguiente cruce
        if (score1 !== score2) {
          const winnerName = score1 > score2 ? team1.name : team2.name;
          const copaMapping = {
            'ronda previa 1': { phase: 'octavos 1', teamSlot: 'team1' },
            'ronda previa 2': { phase: 'octavos 2', teamSlot: 'team1' },
            'octavos 1': { phase: 'cuartos 1', teamSlot: 'team1' },
            'octavos 2': { phase: 'cuartos 1', teamSlot: 'team2' },
            'octavos 3': { phase: 'cuartos 2', teamSlot: 'team1' },
            'octavos 4': { phase: 'cuartos 2', teamSlot: 'team2' },
            'octavos 5': { phase: 'cuartos 3', teamSlot: 'team1' },
            'octavos 6': { phase: 'cuartos 3', teamSlot: 'team2' },
            'octavos 7': { phase: 'cuartos 4', teamSlot: 'team1' },
            'octavos 8': { phase: 'cuartos 4', teamSlot: 'team2' },
            'cuartos 1': { phase: 'semifinal 1', teamSlot: 'team1' },
            'cuartos 2': { phase: 'semifinal 1', teamSlot: 'team2' },
            'cuartos 3': { phase: 'semifinal 2', teamSlot: 'team1' },
            'cuartos 4': { phase: 'semifinal 2', teamSlot: 'team2' },
            'semifinal 1': { phase: 'final', teamSlot: 'team1' },
            'semifinal 2': { phase: 'final', teamSlot: 'team2' }
          };

          const champMapping = {
            'cuartos 1': { phase: 'semifinal 1', teamSlot: 'team1' },
            'cuartos 4': { phase: 'semifinal 1', teamSlot: 'team2' },
            'cuartos 2': { phase: 'semifinal 2', teamSlot: 'team1' },
            'cuartos 3': { phase: 'semifinal 2', teamSlot: 'team2' },
            'semifinal 1': { phase: 'final', teamSlot: 'team1' },
            'semifinal 2': { phase: 'final', teamSlot: 'team2' }
          };

          const mapping = comp === 'champions_ko' ? champMapping : copaMapping;
          const pLower = phase.toLowerCase();
          const targetKey = Object.keys(mapping).find(k => pLower.startsWith(k));
          const target = targetKey ? mapping[targetKey] : null;

          if (target) {
            const nextMatch = matchArray.find(m => m.fase && m.fase.toLowerCase().startsWith(target.phase));
            if (nextMatch) {
              nextMatch[target.teamSlot] = winnerName;
            }
          }
        }
      }
    }

    // Actualizar partido del fixture si es División Oro, Plata o Champions League
    let fixtureMatchId = null;
    let jornadaNumber = null;
    if (comp === 'oro' || comp === 'plata' || comp === 'champions') {
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
      phase: comp === 'estelar' ? phase : (jornadaNumber ? `Jornada ${jornadaNumber}` : ''),
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
    this.onPendingFilterChange();
    if (comp === 'oro' || comp === 'plata') {
      this.onJornadaChange();
    } else if (comp === 'estelar') {
      let targetFilter = 'all';
      const pl = phase.toLowerCase();
      if (pl.includes('previa') || pl.includes('preliminar')) targetFilter = 'previa';
      else if (pl.includes('octavos')) targetFilter = 'octavos';
      else if (pl.includes('cuartos')) targetFilter = 'cuartos';
      else if (pl.includes('semifinal') || pl.includes('semis')) targetFilter = 'semis';
      else if (pl.includes('final')) targetFilter = 'final';

      const filterSel = document.getElementById('copa-phase-filter-admin');
      if (filterSel) filterSel.value = targetFilter;
      this.renderCopaEstelarAdminBracket(targetFilter);
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
    this.renderAdminStandings();
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
      'champions': '<span style="color: #38bdf8; font-weight: 700;"><i class="fa-solid fa-star"></i> Champions (Liga)</span>',
      'champions_ko': '<span style="color: #38bdf8; font-weight: 800;"><i class="fa-solid fa-trophy"></i> Champions (Eliminatoria)</span>',
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
          } else if (match.competition === 'champions' || match.competition === 'champions_ko') {
            player.goals_champions = Math.max(0, (player.goals_champions || 0) - count);
          } else if (match.competition === 'estelar') {
            player.goals_estelar = Math.max(0, (player.goals_estelar || 0) - count);
          }
        } else if (ev.type === 'asistencia') {
          player.assists = Math.max(0, (player.assists || 0) - count);
          if (match.competition === 'oro' || match.competition === 'plata' || match.competition === 'liga') {
            player.assists_liga = Math.max(0, (player.assists_liga || 0) - count);
          } else if (match.competition === 'champions' || match.competition === 'champions_ko') {
            player.assists_champions = Math.max(0, (player.assists_champions || 0) - count);
          } else if (match.competition === 'estelar') {
            player.assists_estelar = Math.max(0, (player.assists_estelar || 0) - count);
          }
        }
        revertedCount += count;
      });
    }

    // Revertir fixture si aplica
    if (match.competition === 'oro' || match.competition === 'plata' || match.competition === 'champions') {
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
    this.onPendingFilterChange();
    if (match.competition === 'oro' || match.competition === 'plata') {
      this.onJornadaChange();
    }
    this.renderAdminStandings();

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

  openSeasonResetModal() {
    const modal = document.getElementById('modal-season-reset');
    if (modal) {
      modal.style.display = 'flex';
      const input = document.getElementById('reset-modal-season-name');
      if (input) input.value = 'Temporada 12';
    }
  },

  closeSeasonResetModal() {
    const modal = document.getElementById('modal-season-reset');
    if (modal) modal.style.display = 'none';
  },

  async executeSeasonReset() {
    const targetSeason = (document.getElementById('reset-modal-season-name')?.value || 'Temporada 12').trim();
    if (!targetSeason) {
      this.showToast('Ingresa un nombre para la nueva temporada', 'warning');
      return;
    }

    if (!confirm(`¿Confirmas reiniciar las estadísticas de temporada y torneos para comenzar ${targetSeason}?\n\n- Goles y asistencias de todos los jugadores pasarán a 0.\n- Partidos, marcadores y fixtures de la temporada se reiniciarán.\n- EL REGISTRO HISTÓRICO (Sala de Campeones y Balón de Oro) NO SE TOCARÁ.`)) {
      return;
    }

    // 1. Temporada
    this.data.season = targetSeason;
    this.ensureWebConfig();
    this.data.webConfig.seasonTitle = targetSeason;

    // 2. Reiniciar estadísticas individuales a 0 (solo temporada)
    let playersCount = 0;
    (this.data.players || []).forEach(p => {
      p.goals = 0;
      p.assists = 0;
      p.goals_liga = 0;
      p.assists_liga = 0;
      p.goals_champions = 0;
      p.assists_champions = 0;
      p.goals_estelar = 0;
      p.assists_estelar = 0;
      playersCount++;
    });

    // 3. Reiniciar torneos de la temporada
    // Copa Estelar
    (this.data.copaEstelarMatches || []).forEach(m => {
      m.score1 = null;
      m.score2 = null;
      m.estado = 'Pendiente';
      m.winner = null;
      m.played = false;
      m.events = [];
    });

    // Champions League
    (this.data.championsLeagueMatches || []).forEach(m => {
      m.score1 = null;
      m.score2 = null;
      m.estado = 'Pendiente';
      m.winner = null;
      m.played = false;
      m.events = [];
    });

    // Fixtures de Liga (Oro, Plata, Champions)
    if (this.data.fixtures) {
      ['oro', 'plata', 'champions'].forEach(comp => {
        const rounds = this.data.fixtures[comp] || [];
        rounds.forEach(r => {
          (r.matches || []).forEach(m => {
            m.played = false;
            m.score1 = null;
            m.score2 = null;
            m.events = [];
          });
        });
      });
    }

    // Limpiar historial de partidos de la temporada finalizada
    this.data.matchHistory = [];

    // 4. Actualizar interfaz y cerrar modal
    this.closeSeasonResetModal();

    const lblSeason = document.getElementById('lbl-season');
    if (lblSeason) lblSeason.textContent = targetSeason.replace(/Temporada\s*/i, 'T');
    const inputSeason = document.getElementById('web-config-season');
    if (inputSeason) inputSeason.value = targetSeason;

    this.renderDashboard();
    this.renderTopScorers();
    this.renderMatchHistory();
    this.renderTeamsView();
    this.renderWebControlView();
    if (document.getElementById('match-jornada-select')) {
      this.onJornadaChange();
    }

    // 5. Guardar inmediatamente
    await this.saveData(true);

    this.showToast(`¡${targetSeason} iniciada con éxito! Estadísticas de ${playersCount} jugadores y torneos reiniciados. Registro histórico 100% protegido.`, 'success');
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

  // ==================== GESTIÓN DE CLUBES (NUEVO / ELIMINAR) ====================
  openCreateClubModal() {
    document.getElementById('new-club-name').value = '';
    document.getElementById('new-club-shortname').value = '';
    document.getElementById('new-club-division').value = 'plata';
    document.getElementById('new-club-budget').value = '100000000';
    document.getElementById('new-club-manager').value = '';
    document.getElementById('new-club-stadium').value = '';
    document.getElementById('new-club-color1').value = '#3b82f6';
    document.getElementById('new-club-color2').value = '#ffffff';
    const lbl1 = document.getElementById('lbl-color1');
    const lbl2 = document.getElementById('lbl-color2');
    if (lbl1) lbl1.textContent = '#3b82f6';
    if (lbl2) lbl2.textContent = '#ffffff';
    document.getElementById('new-club-logo').value = '';
    document.getElementById('modal-create-club').style.display = 'flex';
  },

  closeCreateClubModal() {
    document.getElementById('modal-create-club').style.display = 'none';
  },

  updateDashboardStats() {
    this.renderDashboard();
  },

  async confirmCreateClub() {
    const nameInput = document.getElementById('new-club-name');
    const name = nameInput ? nameInput.value.trim() : '';
    if (!name) {
      this.showToast('Por favor, ingresa el nombre del club.', 'error');
      if (nameInput) nameInput.focus();
      return;
    }

    // Generar ID normalizado
    let id = name.toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]/g, '');
    if (!id) id = 'club_' + Date.now();

    if (this.data.teams.some(t => t.id === id)) {
      id = id + '_' + Math.floor(Math.random() * 1000);
    }

    const shortName = document.getElementById('new-club-shortname')?.value.trim().toUpperCase() || name.substring(0, 3).toUpperCase();
    const division = document.getElementById('new-club-division')?.value || 'plata';
    const budget = parseInt(document.getElementById('new-club-budget')?.value, 10) || 100000000;
    const manager = document.getElementById('new-club-manager')?.value.trim() || 'Por definir';
    const stadium = document.getElementById('new-club-stadium')?.value.trim() || 'Estadio Oficial';
    const c1 = document.getElementById('new-club-color1')?.value || '#3b82f6';
    const c2 = document.getElementById('new-club-color2')?.value || '#ffffff';
    let logo = document.getElementById('new-club-logo')?.value.trim();
    if (!logo) {
      logo = `Logos Equipos/${id}.png`;
    }

    const newTeam = {
      id: id,
      name: name,
      shortName: shortName,
      colors: {
        primary: c1,
        secondary: c2,
        bgGradient: `linear-gradient(135deg, ${c1} 0%, #000000 100%)`
      },
      stadium: stadium,
      manager: manager,
      budget: budget,
      initialBudget: budget,
      legendChangeNote: '',
      legendRemoveNote: '',
      leagueRank: this.data.teams.length + 1,
      logo: logo,
      division: division,
      stats: {
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDiff: 0,
        points: 0
      }
    };

    this.data.teams.push(newTeam);
    this.selectedTeamId = id;
    this.isDirty = true;
    this.closeCreateClubModal();

    // Actualizar selectores y vistas
    this.populateTeamSelectorByDivision('all', id);
    this.populateMarketAndModalTeams();
    this.populatePendingFilterTeams();
    this.renderDashboard();

    await this.saveData(true);
    this.showToast(`¡Club "${name}" creado exitosamente! Ahora puedes importarle su plantilla.`, 'success');
  },

  async deleteCurrentTeam() {
    if (!this.selectedTeamId) return;
    const team = this.getTeamById(this.selectedTeamId);
    if (!team) return;

    const countPlayers = this.getPlayersByTeam(this.selectedTeamId).length;
    const confirmMsg = `¿Estás seguro de que deseas eliminar al club "${team.name}" de la liga?\n\nEsta acción también dará de baja a sus ${countPlayers} jugadores registrados.`;
    if (!confirm(confirmMsg)) return;

    this.data.players = this.data.players.filter(p => p.teamId !== this.selectedTeamId);
    this.data.teams = this.data.teams.filter(t => t.id !== this.selectedTeamId);
    this.isDirty = true;

    this.selectedTeamId = this.data.teams[0]?.id || null;
    this.populateTeamSelectorByDivision('all');
    if (this.selectedTeamId) {
      this.onTeamSelected(this.selectedTeamId);
    }
    this.updateDashboardStats();

    await this.saveData(true);
    this.showToast(`Club "${team.name}" eliminado correctamente.`, 'info');
  },

  // ==================== IMPORTADOR DE PLANTILLAS PLAINTEXT ====================
  openPlaintextRosterModal() {
    if (!this.selectedTeamId) {
      this.showToast('Primero selecciona un club.', 'error');
      return;
    }
    const team = this.getTeamById(this.selectedTeamId);
    if (!team) return;

    document.getElementById('plaintext-modal-target-club').textContent = `${team.name} (${(team.division || 'ORO').toUpperCase()})`;
    document.getElementById('plaintext-input-unified').value = '';
    document.getElementById('plaintext-input-names').value = '';
    document.getElementById('plaintext-input-positions').value = '';
    this.setPlaintextMode('unified');
    this.onPlaintextInputChange();
    document.getElementById('modal-plaintext-roster').style.display = 'flex';
  },

  closePlaintextRosterModal() {
    document.getElementById('modal-plaintext-roster').style.display = 'none';
  },

  setPlaintextMode(mode) {
    this.plaintextMode = mode;
    const btnUni = document.getElementById('btn-mode-unified');
    const btnSplit = document.getElementById('btn-mode-split');
    const contUni = document.getElementById('plaintext-container-unified');
    const contSplit = document.getElementById('plaintext-container-split');

    if (mode === 'unified') {
      if (btnUni) {
        btnUni.style.background = 'rgba(255,209,0,0.15)';
        btnUni.style.color = 'var(--lmi-gold)';
        btnUni.style.borderColor = 'var(--lmi-gold)';
      }
      if (btnSplit) {
        btnSplit.style.background = '';
        btnSplit.style.color = '';
        btnSplit.style.borderColor = '';
      }
      if (contUni) contUni.style.display = 'block';
      if (contSplit) contSplit.style.display = 'none';
    } else {
      if (btnSplit) {
        btnSplit.style.background = 'rgba(255,209,0,0.15)';
        btnSplit.style.color = 'var(--lmi-gold)';
        btnSplit.style.borderColor = 'var(--lmi-gold)';
      }
      if (btnUni) {
        btnUni.style.background = '';
        btnUni.style.color = '';
        btnUni.style.borderColor = '';
      }
      if (contSplit) contSplit.style.display = 'block';
      if (contUni) contUni.style.display = 'none';
    }
    this.onPlaintextInputChange();
  },

  normalizePosition(rawPos) {
    if (!rawPos) return 'MC';
    const clean = rawPos.trim().toUpperCase().replace(/[^A-Z]/g, '');
    const map = {
      'POR': 'PT', 'GK': 'PT', 'PO': 'PT', 'ARQ': 'PT', 'PT': 'PT',
      'CT': 'CT', 'CB': 'CT', 'DFC': 'CT', 'C': 'CT', 'DF': 'CT',
      'LD': 'LD', 'RB': 'LD', 'LTD': 'LD',
      'LI': 'LI', 'LB': 'LI', 'LTI': 'LI',
      'MCD': 'MCD', 'DMF': 'MCD', 'DM': 'MCD', 'PVO': 'MCD', 'CD': 'MCD',
      'MC': 'MC', 'CMF': 'MC', 'CM': 'MC', 'CC': 'MC', 'MED': 'MC', 'VOL': 'MC',
      'MD': 'ID', 'RMF': 'ID', 'RM': 'ID', 'ID': 'ID', 'MDD': 'ID',
      'MI': 'II', 'LMF': 'II', 'LM': 'II', 'II': 'II', 'MDI': 'II',
      'MP': 'MP', 'AMF': 'MP', 'CAM': 'MP', 'MO': 'MP', 'AM': 'MP', 'MCO': 'MP',
      'EXD': 'ED', 'ED': 'ED', 'RWF': 'ED', 'RW': 'ED', 'EF': 'ED',
      'EXI': 'EI', 'EI': 'EI', 'LWF': 'EI', 'LW': 'EI', 'EL': 'EI',
      'SD': 'SD', 'SS': 'SD', 'SP': 'SD',
      'DC': 'DC', 'CF': 'DC', 'ST': 'DC', 'DL': 'DC', 'DEL': 'DC'
    };
    return map[clean] || (['PT','CT','LD','LI','MCD','MC','ID','II','MP','SD','ED','EI','DC'].includes(clean) ? clean : 'MC');
  },

  parsePlaintextRoster() {
    const parsed = [];
    if (this.plaintextMode === 'unified') {
      const text = document.getElementById('plaintext-input-unified')?.value || '';
      const lines = text.split(/\r?\n/)
        .map(l => l.trim())
        .filter(l => l.length > 0 && !l.startsWith('##') && !l.startsWith('---') && !l.startsWith('```'));
      
      const posStartRegex = /^(PT|POR|PO|GK|CT|CB|DFC|DF|LD|RB|LI|LB|MCD|DMF|DM|CD|MC|CMF|CM|MD|RMF|RM|MI|LMF|LM|ID|II|MP|MO|AMF|CAM|AM|EXD|ED|RWF|RW|EXI|EI|LWF|LW|SD|SS|DC|CF|ST|DL)[\s:\-]+(.+)$/i;
      const posEndRegex = /^(.+?)\s*[\(\[]\s*(PT|POR|PO|GK|CT|CB|DFC|DF|LD|RB|LI|LB|MCD|DMF|DM|CD|MC|CMF|CM|MD|RMF|RM|MI|LMF|LM|ID|II|MP|MO|AMF|CAM|AM|EXD|ED|RWF|RW|EXI|EI|LWF|LW|SD|SS|DC|CF|ST|DL)\s*[\)\]]$/i;

      lines.forEach(line => {
        let pos = 'MC';
        let name = line;

        const mStart = line.match(posStartRegex);
        if (mStart) {
          pos = this.normalizePosition(mStart[1]);
          name = mStart[2].trim();
        } else {
          const mEnd = line.match(posEndRegex);
          if (mEnd) {
            name = mEnd[1].trim();
            pos = this.normalizePosition(mEnd[2]);
          } else {
            const parts = line.split(/[\t]+/).map(p => p.trim()).filter(Boolean);
            if (parts.length >= 2) {
              if (/^(PT|POR|PO|GK|CT|CB|DFC|DF|LD|RB|LI|LB|MCD|DMF|DM|CD|MC|CMF|CM|MD|RMF|RM|MI|LMF|LM|ID|II|MP|MO|AMF|CAM|AM|EXD|ED|RWF|RW|EXI|EI|LWF|LW|SD|SS|DC|CF|ST|DL)$/i.test(parts[0])) {
                pos = this.normalizePosition(parts[0]);
                name = parts.slice(1).join(' ').trim();
              } else if (/^(PT|POR|PO|GK|CT|CB|DFC|DF|LD|RB|LI|LB|MCD|DMF|DM|CD|MC|CMF|CM|MD|RMF|RM|MI|LMF|LM|ID|II|MP|MO|AMF|CAM|AM|EXD|ED|RWF|RW|EXI|EI|LWF|LW|SD|SS|DC|CF|ST|DL)$/i.test(parts[parts.length - 1])) {
                pos = this.normalizePosition(parts[parts.length - 1]);
                name = parts.slice(0, -1).join(' ').trim();
              }
            }
          }
        }

        // Limpiar comillas o viñetas si las hubiese
        name = name.replace(/^[\s\-\*\•\d\.\)]+/, '').trim();

        if (name) {
          parsed.push({ name: name, position: pos });
        }
      });
    } else {
      const namesText = document.getElementById('plaintext-input-names')?.value || '';
      const posText = document.getElementById('plaintext-input-positions')?.value || '';
      const nameLines = namesText.split(/\r?\n/)
        .map(l => l.trim())
        .filter(l => l.length > 0 && !l.startsWith('##') && !l.startsWith('---') && !l.startsWith('```'));
      const posLines = posText.split(/\r?\n/)
        .map(l => l.trim())
        .filter(l => l.length > 0 && !l.startsWith('##') && !l.startsWith('---') && !l.startsWith('```'));

      nameLines.forEach((name, idx) => {
        const cleanName = name.replace(/^[\s\-\*\•\d\.\)]+/, '').trim();
        const rawPos = posLines[idx] || 'MC';
        if (cleanName) {
          parsed.push({
            name: cleanName,
            position: this.normalizePosition(rawPos)
          });
        }
      });
    }

    return parsed;
  },

  onPlaintextInputChange() {
    const parsed = this.parsePlaintextRoster();
    this.cachedParsedPlayers = parsed;
    this.renderPlaintextPreview(parsed);
  },

  renderPlaintextPreview(players) {
    const tbody = document.getElementById('plaintext-preview-tbody');
    const badge = document.getElementById('plaintext-preview-badge');
    const btnConfirm = document.getElementById('btn-confirm-import-plaintext');

    if (!tbody || !badge || !btnConfirm) return;

    if (!players || players.length === 0) {
      tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; color: var(--text-muted); padding: 1.5rem;">Pega texto en el cuadro superior para previsualizar.</td></tr>`;
      badge.textContent = '0 jugadores detectados';
      btnConfirm.disabled = true;
      return;
    }

    const ptCount = players.filter(p => p.position === 'PT').length;
    const fieldCount = players.length - ptCount;
    badge.innerHTML = `<strong>${players.length}</strong> jugadores detectados <span style="color: #60a5fa;">(${ptCount} PT, ${fieldCount} Campo)</span>`;
    btnConfirm.disabled = false;

    tbody.innerHTML = players.map((p, idx) => `
      <tr>
        <td style="color: var(--text-muted); font-size: 0.8rem; font-weight: 700;">${idx + 1}</td>
        <td><span class="pos-badge pos-${p.position}">${p.position}</span></td>
        <td style="font-weight: 700; color: #fff;">${this.escape(p.name)}</td>
        <td><span class="badge" style="background: rgba(255,255,255,0.08); font-size: 0.72rem; padding: 0.15rem 0.4rem; border-radius: 4px;">Normal</span></td>
      </tr>
    `).join('');
  },

  async applyPlaintextRoster() {
    if (!this.selectedTeamId) return;
    const team = this.getTeamById(this.selectedTeamId);
    if (!team) return;

    const playersToImport = this.cachedParsedPlayers;
    if (!playersToImport || playersToImport.length === 0) {
      this.showToast('No se han detectado jugadores para importar.', 'error');
      return;
    }

    const replaceExisting = document.getElementById('plaintext-chk-replace')?.checked;
    if (replaceExisting) {
      this.data.players = this.data.players.filter(p => p.teamId !== this.selectedTeamId);
    }

    const timestamp = Date.now();
    playersToImport.forEach((p, idx) => {
      const newPlayer = {
        id: `p_${timestamp}_${idx + 1}`,
        name: p.name,
        position: p.position || 'MC',
        teamId: this.selectedTeamId,
        goals: 0,
        assists: 0,
        goals_liga: 0,
        assists_liga: 0,
        goals_champions: 0,
        assists_champions: 0,
        goals_estelar: 0,
        assists_estelar: 0,
        cardType: 'Normal',
        isLegend: false
      };
      this.data.players.push(newPlayer);
    });

    this.isDirty = true;
    this.closePlaintextRosterModal();

    this.renderRosterTable();
    this.updateDashboardStats();

    await this.saveData(true);
    this.showToast(`¡Se importaron exitosamente ${playersToImport.length} jugadores a ${team.name}!`, 'success');
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
      tbody.innerHTML = `<tr><td colspan="9" style="text-align: center; color: var(--text-muted); padding: 2rem;">No hay jugadores que coincidan con la búsqueda.</td></tr>`;
      return;
    }

    players.forEach(p => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td style="font-weight: 700; color: #fff;">
          ${this.escape(p.name)}
          ${p.isLegend ? '<span style="color: var(--lmi-gold); font-size: 0.75rem; margin-left: 0.3rem;">★ Leyenda</span>' : ''}
        </td>
        <td><span class="pos-badge pos-${p.position || 'MC'}">${p.position || 'MC'}</span></td>
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
      price: 0,
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
      tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; color: var(--text-muted); padding: 2rem;">No hay movimientos de mercado registrados.</td></tr>`;
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
        <td style="font-weight: 700; color: var(--lmi-gold);">${this.formatMoney(m.price || 0)}</td>
        <td>
          <div style="display: flex; align-items: center; gap: 0.4rem;">
            <input type="number" min="1" max="10" value="${m.seasons || 1}" class="form-control" style="width: 58px; padding: 0.25rem 0.4rem; font-weight: 700; text-align: center;" onchange="AdminApp.quickUpdateMarketSeasons(${idx}, this.value)" title="Modificar temporadas del préstamo">
            <span style="font-size: 0.78rem; color: var(--text-muted);">${(m.seasons || 1) === 1 ? 'temp' : 'temps'}</span>
          </div>
        </td>
        <td style="color: var(--text-secondary); font-size: 0.85rem;">${this.escape(m.details || '')}</td>
        <td style="text-align: right; white-space: nowrap;">
          <div style="display: flex; gap: 0.35rem; justify-content: flex-end;">
            <button class="btn btn-secondary" style="padding: 0.35rem 0.65rem; font-size: 0.8rem;" onclick="AdminApp.openEditMarketModal(${idx})" title="Editar movimiento">
              <i class="fa-solid fa-pen"></i> Editar
            </button>
            <button class="btn btn-danger" style="padding: 0.35rem 0.65rem; font-size: 0.8rem;" onclick="AdminApp.deleteMarketMovement(${idx})" title="Eliminar">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </td>
      `;
      tbody.appendChild(tr);
    });
  },

  async quickUpdateMarketSeasons(idx, val) {
    if (!this.data.marketMovements || !this.data.marketMovements[idx]) return;
    const num = parseInt(val, 10) || 1;
    this.data.marketMovements[idx].seasons = num;
    this.markDirty();
    await this.saveData(true);
    this.showToast(`Temporadas de "${this.data.marketMovements[idx].player}" actualizadas a ${num}.`, 'success');
  },

  openEditMarketModal(index) {
    const m = this.data.marketMovements ? this.data.marketMovements[index] : null;
    if (!m) return;

    document.getElementById('edit-market-index').value = index;
    document.getElementById('edit-market-player').value = m.player || '';
    document.getElementById('edit-market-type').value = m.type || 'Fichaje';
    document.getElementById('edit-market-price').value = m.price !== undefined ? m.price : 0;
    document.getElementById('edit-market-seasons').value = m.seasons || 1;
    document.getElementById('edit-market-details').value = m.details || '';

    // Populate team selects
    const fromSel = document.getElementById('edit-market-from-team');
    const toSel = document.getElementById('edit-market-to-team');
    if (fromSel && toSel && this.data.teams) {
      const opts = '<option value="">(Sin club / Libre)</option>' + this.data.teams.map(t => `<option value="${t.id}">${t.name}</option>`).join('');
      fromSel.innerHTML = opts;
      toSel.innerHTML = opts;
      fromSel.value = m.fromTeamId || '';
      toSel.value = m.toTeamId || '';
    }

    const modal = document.getElementById('modal-edit-market');
    if (modal) modal.style.display = 'flex';
  },

  closeEditMarketModal() {
    const modal = document.getElementById('modal-edit-market');
    if (modal) modal.style.display = 'none';
  },

  async saveEditMarketModal() {
    const idx = parseInt(document.getElementById('edit-market-index').value, 10);
    if (isNaN(idx) || idx < 0 || !this.data.marketMovements || !this.data.marketMovements[idx]) return;

    const player = document.getElementById('edit-market-player').value.trim();
    if (!player) {
      this.showToast('El nombre del jugador es requerido.', 'error');
      return;
    }

    const type = document.getElementById('edit-market-type').value;
    const price = parseInt(document.getElementById('edit-market-price').value, 10) || 0;
    const fromTeamId = document.getElementById('edit-market-from-team').value;
    const toTeamId = document.getElementById('edit-market-to-team').value;
    const seasons = parseInt(document.getElementById('edit-market-seasons').value, 10) || 1;
    const details = document.getElementById('edit-market-details').value.trim();

    const fromTeam = this.getTeamById(fromTeamId);
    const toTeam = this.getTeamById(toTeamId);

    const m = this.data.marketMovements[idx];
    m.player = player;
    m.type = type;
    m.price = price;
    m.fromTeamId = fromTeamId;
    m.fromTeamName = fromTeam ? fromTeam.name : (fromTeamId ? fromTeamId : '');
    m.toTeamId = toTeamId;
    m.toTeamName = toTeam ? toTeam.name : (toTeamId ? toTeamId : '');
    m.seasons = seasons;
    m.details = details;

    this.closeEditMarketModal();
    this.renderMarketView();
    this.markDirty();
    await this.saveData(true);
    this.showToast(`Movimiento de "${player}" actualizado correctamente.`, 'success');
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
    if (!container) return;
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
      const imgPath = bdo.image || bdo.imagen || 'Balon de oro/vardy_balon_oro_t12.jpg';
      const descText = bdo.description || bdo.descripcion || '';
      const managerName = bdo.manager || bdo.dt || '';
      const trophiesText = bdo.trophies || bdo.titulos || '';

      const card = document.createElement('div');
      card.className = 'card';
      card.style.background = '#0b1324';
      card.style.border = '1px solid rgba(255, 209, 0, 0.3)';
      card.style.display = 'flex';
      card.style.flexDirection = 'column';
      card.style.gap = '0.85rem';
      card.style.position = 'relative';

      card.innerHTML = `
        <div style="position: relative; width: 100%; height: 210px; border-radius: var(--radius-md); overflow: hidden; background: #000;">
          <img src="${this.escape(imgPath)}" alt="${this.escape(playerName)}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='Sala de campeones/Balon de oro/trofeo_balon_oro.jpg'">
          <div style="position: absolute; top: 8px; right: 8px; background: rgba(0,0,0,0.75); border: 1px solid var(--lmi-gold); color: var(--lmi-gold); font-size: 0.75rem; font-weight: 800; padding: 0.2rem 0.6rem; border-radius: 99px;">
            ${this.escape(seasonName)}
          </div>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
          <div>
            <h3 style="font-size: 1.15rem; font-weight: 800; color: #fff; margin-bottom: 0.25rem;">${this.escape(playerName)}</h3>
            <span style="color: var(--lmi-gold); font-weight: 700; font-size: 0.85rem;"><i class="fa-solid fa-shield-halved"></i> ${this.escape(teamName)}</span>
            ${managerName ? `<span style="color: var(--text-muted); font-size: 0.78rem; display: block; margin-top: 0.2rem;"><i class="fa-solid fa-user-tie"></i> DT: ${this.escape(managerName)}</span>` : ''}
          </div>
        </div>

        <div style="display: flex; gap: 0.75rem; background: rgba(255,255,255,0.03); padding: 0.65rem; border-radius: var(--radius-md); font-size: 0.85rem;">
          <div style="flex: 1; text-align: center;">
            <span style="display: block; color: var(--text-muted); font-size: 0.75rem;">GOLES</span>
            <strong style="color: var(--lmi-gold); font-size: 1.1rem;">${goalsCount}</strong>
          </div>
          <div style="width: 1px; background: rgba(255,255,255,0.1);"></div>
          <div style="flex: 1; text-align: center;">
            <span style="display: block; color: var(--text-muted); font-size: 0.75rem;">ASISTENCIAS</span>
            <strong style="color: #60a5fa; font-size: 1.1rem;">${assistsCount}</strong>
          </div>
        </div>

        ${trophiesText ? `<div style="font-size: 0.8rem; color: var(--text-secondary);"><i class="fa-solid fa-trophy" style="color: var(--lmi-gold);"></i> ${this.escape(trophiesText)}</div>` : ''}
        ${descText ? `<p style="font-size: 0.8rem; color: var(--text-muted); line-height: 1.4; margin: 0;">${this.escape(descText)}</p>` : ''}

        <div style="display: flex; justify-content: flex-end; gap: 0.5rem; margin-top: auto; padding-top: 0.75rem; border-top: 1px solid var(--border-color);">
          <button class="btn btn-secondary" style="padding: 0.35rem 0.65rem; font-size: 0.8rem;" onclick="AdminApp.openBdoModal(${idx})">
            <i class="fa-solid fa-pen"></i> Editar
          </button>
          <button class="btn btn-danger" style="padding: 0.35rem 0.65rem; font-size: 0.8rem;" onclick="AdminApp.deleteBdo(${idx})">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      `;
      container.appendChild(card);
    });
  },

  openBdoModal(index = null) {
    const modal = document.getElementById('modal-bdo');
    const title = document.getElementById('modal-bdo-title');
    const idxInput = document.getElementById('bdo-modal-index');
    if (idxInput) idxInput.value = (index !== null && index !== undefined) ? index : -1;

    const setVal = (id, val) => { const el = document.getElementById(id); if (el) el.value = val; };

    if (index !== null && index !== undefined && this.data.balonOro && this.data.balonOro[index]) {
      const bdo = this.data.balonOro[index];
      if (title) title.innerHTML = '<i class="fa-solid fa-pen" style="color: var(--lmi-gold);"></i> Editar Ganador de Balón de Oro';
      setVal('bdo-modal-name', bdo.player || bdo.jugador || '');
      setVal('bdo-modal-club', bdo.team || bdo.club || '');
      setVal('bdo-modal-manager', bdo.manager || bdo.dt || '');
      setVal('bdo-modal-season', bdo.season || bdo.temporada || '');
      setVal('bdo-modal-goals', (bdo.goals !== undefined) ? bdo.goals : (bdo.goles || 0));
      setVal('bdo-modal-assists', (bdo.assists !== undefined) ? bdo.assists : (bdo.asistencias || 0));
      setVal('bdo-modal-image', bdo.image || bdo.imagen || '');
      setVal('bdo-modal-trophies', bdo.trophies || bdo.titulos || '');
      setVal('bdo-modal-desc', bdo.description || bdo.descripcion || '');
    } else {
      if (title) title.innerHTML = '<i class="fa-solid fa-award" style="color: var(--lmi-gold);"></i> Añadir Ganador de Balón de Oro';
      setVal('bdo-modal-name', '');
      setVal('bdo-modal-club', '');
      setVal('bdo-modal-manager', '');
      setVal('bdo-modal-season', 'Temporada 12');
      setVal('bdo-modal-goals', 0);
      setVal('bdo-modal-assists', 0);
      setVal('bdo-modal-image', 'Balon de oro/vardy_balon_oro_t12.jpg');
      setVal('bdo-modal-trophies', '');
      setVal('bdo-modal-desc', '');
    }

    if (modal) modal.style.display = 'flex';
  },

  closeBdoModal() {
    const modal = document.getElementById('modal-bdo');
    if (modal) modal.style.display = 'none';
  },

  async saveBdoFromModal() {
    const idxEl = document.getElementById('bdo-modal-index');
    const idx = idxEl ? parseInt(idxEl.value, 10) : -1;

    const getVal = (id) => { const el = document.getElementById(id); return el ? el.value.trim() : ''; };
    const jugador = getVal('bdo-modal-name');
    const club = getVal('bdo-modal-club');
    const dt = getVal('bdo-modal-manager');
    const temporada = getVal('bdo-modal-season');
    const goles = parseInt(getVal('bdo-modal-goals'), 10) || 0;
    const asistencias = parseInt(getVal('bdo-modal-assists'), 10) || 0;
    const imagen = getVal('bdo-modal-image') || 'Balon de oro/vardy_balon_oro_t12.jpg';
    const trofeos = getVal('bdo-modal-trophies');
    const descripcion = getVal('bdo-modal-desc');

    if (!jugador) {
      this.showToast('El nombre del jugador es requerido.', 'error');
      return;
    }

    // Auto match teamLogo
    let teamLogo = '';
    if (this.data && this.data.teams) {
      const matchTeam = this.data.teams.find(t => t.name.toLowerCase() === club.toLowerCase() || t.id === club.toLowerCase().replace(/\s+/g, ''));
      if (matchTeam) teamLogo = matchTeam.logo;
    }
    if (!teamLogo && club.toLowerCase().includes('como')) {
      teamLogo = 'Logos Equipos/como.webp';
    }

    const bdoObj = {
      id: (idx >= 0 && this.data.balonOro[idx]?.id) ? this.data.balonOro[idx].id : ('bdo-' + Date.now()),
      season: temporada,
      temporada: temporada,
      player: jugador,
      jugador: jugador,
      team: club,
      club: club,
      teamLogo: teamLogo,
      manager: dt,
      dt: dt,
      image: imagen,
      imagen: imagen,
      goals: goles,
      goles: goles,
      assists: asistencias,
      asistencias: asistencias,
      trophies: trofeos,
      titulos: trofeos,
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
    this.markDirty();
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
  },

  // ==================== AVANZAR EQUIPO EN CUADROS ELIMINATORIOS ====================
  openAdvanceTeamModal(comp = null, phase = null, teamName = null) {
    const modal = document.getElementById('modal-advance-bracket-team');
    if (!modal) return;

    if (!comp) {
      const currentComp = document.getElementById('match-competition')?.value;
      comp = (currentComp === 'estelar') ? 'estelar' : 'champions_ko';
    }

    const compSel = document.getElementById('advance-modal-competition');
    if (compSel) compSel.value = comp;

    this.populateAdvanceModalPhases(comp, phase, teamName);
    modal.style.display = 'flex';
  },

  closeAdvanceTeamModal() {
    const modal = document.getElementById('modal-advance-bracket-team');
    if (modal) modal.style.display = 'none';
  },

  populateAdvanceModalPhases(comp, selectedPhase = null, selectedTeam = null) {
    const phaseSel = document.getElementById('advance-modal-phase');
    const teamSel = document.getElementById('advance-modal-team');
    if (!phaseSel || !teamSel || !this.data) return;

    const matchArray = comp === 'champions_ko' ? (this.data.championsLeagueMatches || []) : (this.data.copaEstelarMatches || []);
    const nonFinalMatches = matchArray.filter(m => m.fase && m.fase.toLowerCase() !== 'final' && !m.fase.toLowerCase().includes('gran final'));

    phaseSel.innerHTML = '';
    nonFinalMatches.forEach(m => {
      const opt = document.createElement('option');
      opt.value = m.fase;
      const t1 = m.team1 || 'Por clasificar';
      const t2 = m.team2 || 'Por clasificar';
      opt.textContent = `${m.fase}: ${t1} vs ${t2}`;
      phaseSel.appendChild(opt);
    });

    if (selectedPhase && nonFinalMatches.some(m => m.fase.toLowerCase() === selectedPhase.toLowerCase())) {
      const found = nonFinalMatches.find(m => m.fase.toLowerCase() === selectedPhase.toLowerCase());
      if (found) phaseSel.value = found.fase;
    } else if (nonFinalMatches.length > 0) {
      phaseSel.value = nonFinalMatches[0].fase;
    }

    this.onAdvanceModalPhaseChange(selectedTeam);
  },

  onAdvanceModalPhaseChange(selectedTeam = null) {
    const compSel = document.getElementById('advance-modal-competition');
    const phaseSel = document.getElementById('advance-modal-phase');
    const teamSel = document.getElementById('advance-modal-team');
    const destInfo = document.getElementById('advance-modal-dest-info');
    if (!compSel || !phaseSel || !teamSel || !this.data) return;

    const comp = compSel.value;
    const phase = phaseSel.value;
    const matchArray = comp === 'champions_ko' ? (this.data.championsLeagueMatches || []) : (this.data.copaEstelarMatches || []);
    const match = matchArray.find(m => m.fase && m.fase.toLowerCase() === phase.toLowerCase());

    teamSel.innerHTML = '';
    if (match) {
      const teams = [match.team1, match.team2].filter(Boolean);
      teams.forEach(tName => {
        const isPlaceholder = tName.toLowerCase().startsWith('ganador') || tName.toLowerCase().startsWith('por ');
        const opt = document.createElement('option');
        opt.value = tName;
        opt.textContent = isPlaceholder ? `${tName} (Placeholder)` : tName;
        teamSel.appendChild(opt);
      });

      if (selectedTeam && teams.includes(selectedTeam)) {
        teamSel.value = selectedTeam;
      } else {
        const realTeam = teams.find(t => !t.toLowerCase().startsWith('ganador') && !t.toLowerCase().startsWith('por '));
        if (realTeam) teamSel.value = realTeam;
      }
    }

    const mapping = this.getBracketPhaseMapping(comp, phase);
    if (destInfo) {
      if (mapping) {
        destInfo.innerHTML = `El equipo avanzará a: <strong style="color: #38bdf8;">${mapping.phase.toUpperCase()}</strong> (como <em>${mapping.teamSlot === 'team1' ? 'Local' : 'Visitante'}</em>)`;
      } else {
        destInfo.innerHTML = `<span style="color: #fca5a5;">No se encontró fase siguiente para esta llave.</span>`;
      }
    }
  },

  getBracketPhaseMapping(comp, phase) {
    const copaMapping = {
      'ronda previa 1': { phase: 'octavos 1', teamSlot: 'team1' },
      'ronda previa 2': { phase: 'octavos 2', teamSlot: 'team1' },
      'octavos 1': { phase: 'cuartos 1', teamSlot: 'team1' },
      'octavos 2': { phase: 'cuartos 1', teamSlot: 'team2' },
      'octavos 3': { phase: 'cuartos 2', teamSlot: 'team1' },
      'octavos 4': { phase: 'cuartos 2', teamSlot: 'team2' },
      'octavos 5': { phase: 'cuartos 3', teamSlot: 'team1' },
      'octavos 6': { phase: 'cuartos 3', teamSlot: 'team2' },
      'octavos 7': { phase: 'cuartos 4', teamSlot: 'team1' },
      'octavos 8': { phase: 'cuartos 4', teamSlot: 'team2' },
      'cuartos 1': { phase: 'semifinal 1', teamSlot: 'team1' },
      'cuartos 2': { phase: 'semifinal 1', teamSlot: 'team2' },
      'cuartos 3': { phase: 'semifinal 2', teamSlot: 'team1' },
      'cuartos 4': { phase: 'semifinal 2', teamSlot: 'team2' },
      'semifinal 1': { phase: 'final', teamSlot: 'team1' },
      'semifinal 2': { phase: 'final', teamSlot: 'team2' }
    };

    const champMapping = {
      'cuartos 1': { phase: 'semifinal 1', teamSlot: 'team1' },
      'cuartos 4': { phase: 'semifinal 1', teamSlot: 'team2' },
      'cuartos 2': { phase: 'semifinal 2', teamSlot: 'team1' },
      'cuartos 3': { phase: 'semifinal 2', teamSlot: 'team2' },
      'semifinal 1': { phase: 'final', teamSlot: 'team1' },
      'semifinal 2': { phase: 'final', teamSlot: 'team2' }
    };

    const mapping = comp === 'champions_ko' ? champMapping : copaMapping;
    const pLower = (phase || '').toLowerCase();
    const targetKey = Object.keys(mapping).find(k => pLower.startsWith(k));
    return targetKey ? mapping[targetKey] : null;
  },

  async confirmAdvanceTeam() {
    const compSel = document.getElementById('advance-modal-competition');
    const phaseSel = document.getElementById('advance-modal-phase');
    const teamSel = document.getElementById('advance-modal-team');
    const reasonSel = document.getElementById('advance-modal-reason');
    if (!compSel || !phaseSel || !teamSel || !this.data) return;

    const comp = compSel.value;
    const phase = phaseSel.value;
    const teamName = teamSel.value;
    const reason = reasonSel ? reasonSel.value : 'Pase Directo';

    if (!teamName) {
      this.showToast('Selecciona un equipo para avanzar', 'error');
      return;
    }

    const mapping = this.getBracketPhaseMapping(comp, phase);
    if (!mapping) {
      this.showToast('No se encontró llave de destino para esta fase', 'error');
      return;
    }

    const matchArray = comp === 'champions_ko' ? this.data.championsLeagueMatches : this.data.copaEstelarMatches;
    const currentMatch = matchArray.find(m => m.fase && m.fase.toLowerCase() === phase.toLowerCase());
    if (!currentMatch) {
      this.showToast('No se encontró el partido actual', 'error');
      return;
    }

    const nextMatch = matchArray.find(m => m.fase && m.fase.toLowerCase().startsWith(mapping.phase.toLowerCase()));
    if (!nextMatch) {
      this.showToast(`No se encontró el partido de destino (${mapping.phase})`, 'error');
      return;
    }

    if (!confirm(`¿Confirmas avanzar a ${teamName} a ${mapping.phase.toUpperCase()} (${mapping.teamSlot === 'team1' ? 'Local' : 'Visitante'}) por ${reason}?`)) {
      return;
    }

    nextMatch[mapping.teamSlot] = teamName;

    currentMatch.estado = 'Finalizado';
    currentMatch.winner = teamName;
    if (currentMatch.team1 === teamName) {
      currentMatch.score1 = 'Pase';
      currentMatch.score2 = currentMatch.score2 || '-';
      if (!currentMatch.team2 || currentMatch.team2.toLowerCase().startsWith('ganador')) {
        currentMatch.team2 = 'Sin Rival (No jugaron)';
      }
    } else {
      currentMatch.score2 = 'Pase';
      currentMatch.score1 = currentMatch.score1 || '-';
      if (!currentMatch.team1 || currentMatch.team1.toLowerCase().startsWith('ganador')) {
        currentMatch.team1 = 'Sin Rival (No jugaron)';
      }
    }

    this.closeAdvanceTeamModal();

    if (comp === 'champions_ko') {
      this.renderChampionsAdminBracket();
    } else {
      this.renderCopaEstelarAdminBracket();
    }

    await this.saveData(true);
    this.showToast(`¡${teamName} avanzó con éxito a ${mapping.phase.toUpperCase()}!`, 'success');
  },

  // ==================== CENTRO DE CONTROL WEB ====================
  ensureWebConfig() {
    if (!this.data) return;
    if (!this.data.webConfig) {
      this.data.webConfig = {
        seasonTitle: this.data.season || 'Temporada 11',
        leagueSubtitle: 'Liga Máster Internacional • Fútbol Competitivo',
        bannerAnnouncement: {
          enabled: false,
          text: '¡Período de Renovaciones Abierto! Envía tu informe al administrador',
          type: 'info'
        },
        tabs: [
          { id: 'dashboard', label: 'Resumen', icon: 'fa-chart-pie', enabled: true },
          { id: 'posiciones', label: 'Clasificación', icon: 'fa-table-list', enabled: true },
          { id: 'stats', label: 'Estadísticas', icon: 'fa-chart-column', enabled: true },
          { id: 'teams', label: 'Equipos', icon: 'fa-shield-halved', enabled: true },
          { id: 'sala-campeones', label: 'Palmarés', icon: 'fa-crown', enabled: true },
          { id: 'copa-estelar', label: 'Copa Estelar', icon: 'fa-star', enabled: true },
          { id: 'uefa-champions', label: 'Champions League', icon: 'fa-trophy', enabled: true },
          { id: 'mercado', label: 'Mercado', icon: 'fa-arrow-right-arrow-left', enabled: true },
          { id: 'renovaciones', label: 'Renovaciones', icon: 'fa-calculator', enabled: true },
          { id: 'buscador', label: 'Buscador de Jugadores', icon: 'fa-magnifying-glass', enabled: true },
          { id: 'rules', label: 'Reglamento', icon: 'fa-book-open', enabled: true }
        ],
        calculatorSettings: {
          defaultRenovationPrice: 5000000,
          currencySymbol: '$',
          allowCustomPrices: true
        }
      };
    }
  },

  renderWebControlView() {
    if (!this.data) return;
    this.ensureWebConfig();
    const cfg = this.data.webConfig;

    // Campos generales
    const seasonInput = document.getElementById('web-config-season');
    if (seasonInput && document.activeElement !== seasonInput) {
      seasonInput.value = cfg.seasonTitle || this.data.season || '';
    }

    const subtitleInput = document.getElementById('web-config-subtitle');
    if (subtitleInput && document.activeElement !== subtitleInput) {
      subtitleInput.value = cfg.leagueSubtitle || '';
    }

    const bannerChk = document.getElementById('web-config-announcement-enabled');
    if (bannerChk) {
      bannerChk.checked = !!(cfg.bannerAnnouncement && cfg.bannerAnnouncement.enabled);
    }

    const bannerTxt = document.getElementById('web-config-announcement-text');
    if (bannerTxt && document.activeElement !== bannerTxt) {
      bannerTxt.value = (cfg.bannerAnnouncement && cfg.bannerAnnouncement.text) || '';
    }

    const bannerType = document.getElementById('web-config-announcement-type');
    if (bannerType) {
      bannerType.value = (cfg.bannerAnnouncement && cfg.bannerAnnouncement.type) || 'info';
    }

    // Contadores de clubes para generadores de fechas
    const oroCount = (this.data.teams || []).filter(t => (t.division || '').toLowerCase() === 'oro').length;
    const plataCount = (this.data.teams || []).filter(t => (t.division || '').toLowerCase() === 'plata').length;
    const elOro = document.getElementById('gen-oro-count');
    if (elOro) elOro.textContent = oroCount;
    const elPlata = document.getElementById('gen-plata-count');
    if (elPlata) elPlata.textContent = plataCount;

    const oroJornadasIda = oroCount % 2 === 0 ? oroCount - 1 : oroCount;
    const plataJornadasIda = plataCount % 2 === 0 ? plataCount - 1 : plataCount;
    const btnOroIda = document.getElementById('btn-gen-oro-ida');
    const btnOroDoble = document.getElementById('btn-gen-oro-doble');
    const btnPlataIda = document.getElementById('btn-gen-plata-ida');
    const btnPlataDoble = document.getElementById('btn-gen-plata-doble');
    if (btnOroIda) btnOroIda.innerHTML = `<i class="fa-solid fa-calendar-plus"></i> Generar Solo Ida (${oroJornadasIda} Jornadas)`;
    if (btnOroDoble) btnOroDoble.innerHTML = `<i class="fa-solid fa-calendar-days"></i> Ida y Vuelta (${oroJornadasIda * 2} Jornadas)`;
    if (btnPlataIda) btnPlataIda.innerHTML = `<i class="fa-solid fa-calendar-plus"></i> Generar Solo Ida (${plataJornadasIda} Jornadas)`;
    if (btnPlataDoble) btnPlataDoble.innerHTML = `<i class="fa-solid fa-calendar-days"></i> Ida y Vuelta (${plataJornadasIda * 2} Jornadas)`;

    // Renderizar tarjetas de pestañas
    const grid = document.getElementById('web-tabs-control-grid');
    if (!grid) return;
    grid.innerHTML = '';

    (cfg.tabs || []).forEach(tab => {
      const card = document.createElement('div');
      card.className = `web-tab-item ${tab.enabled ? 'active' : ''}`;
      card.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.6rem;">
          <div style="display: flex; align-items: center; gap: 0.6rem;">
            <div style="width: 32px; height: 32px; border-radius: 8px; background: rgba(56, 189, 248, 0.12); display: flex; align-items: center; justify-content: center; color: #38bdf8;">
              <i class="fa-solid ${tab.icon || 'fa-circle'}"></i>
            </div>
            <div>
              <div style="font-size: 0.88rem; font-weight: 700; color: #fff;">${this.escape(tab.label)}</div>
              <div style="font-size: 0.72rem; color: var(--text-muted); font-family: monospace;">#${tab.id}</div>
            </div>
          </div>
          <label class="lmi-switch">
            <input type="checkbox" ${tab.enabled ? 'checked' : ''} onchange="AdminApp.toggleWebTab('${tab.id}', this.checked)">
            <span class="lmi-slider"></span>
          </label>
        </div>
        <div style="display: flex; align-items: center; gap: 0.5rem; margin-top: 0.5rem;">
          <input type="text" class="form-control" style="font-size: 0.8rem; padding: 0.35rem 0.6rem; height: auto;" value="${this.escape(tab.label)}" placeholder="Nombre de pestaña" onchange="AdminApp.updateWebTabLabel('${tab.id}', this.value)">
        </div>
        <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 0.5rem; font-size: 0.75rem;">
          <span style="color: ${tab.enabled ? 'var(--lmi-green)' : 'var(--text-muted)'}; font-weight: 600;">
            <i class="fa-solid ${tab.enabled ? 'fa-eye' : 'fa-eye-slash'}"></i> ${tab.enabled ? 'Visible en la Web' : 'Oculta al Público'}
          </span>
        </div>
      `;
      grid.appendChild(card);
    });
  },

  toggleWebTab(tabId, enabled) {
    this.ensureWebConfig();
    const tab = (this.data.webConfig.tabs || []).find(t => t.id === tabId);
    if (tab) {
      tab.enabled = !!enabled;
      this.markDirty();
      this.renderWebControlView();
      this.showToast(`Pestaña "${tab.label}" ${tab.enabled ? 'activada' : 'desactivada'} en la web`, 'info');
    }
  },

  updateWebTabLabel(tabId, newLabel) {
    this.ensureWebConfig();
    const tab = (this.data.webConfig.tabs || []).find(t => t.id === tabId);
    if (tab && newLabel && newLabel.trim()) {
      tab.label = newLabel.trim();
      this.markDirty();
      this.renderWebControlView();
      this.showToast(`Nombre de pestaña actualizado a "${tab.label}"`, 'info');
    }
  },

  toggleAllWebTabs(enabled) {
    this.ensureWebConfig();
    (this.data.webConfig.tabs || []).forEach(t => {
      t.enabled = enabled;
    });
    this.markDirty();
    this.renderWebControlView();
    this.showToast(enabled ? 'Todas las pestañas de la web han sido activadas.' : 'Todas las pestañas han sido desactivadas.', 'info');
  },

  onWebConfigChange() {
    this.ensureWebConfig();
    const seasonInput = document.getElementById('web-config-season');
    if (seasonInput) {
      this.data.webConfig.seasonTitle = seasonInput.value.trim();
      this.data.season = seasonInput.value.trim();
    }

    const subtitleInput = document.getElementById('web-config-subtitle');
    if (subtitleInput) {
      this.data.webConfig.leagueSubtitle = subtitleInput.value.trim();
    }

    const bannerChk = document.getElementById('web-config-announcement-enabled');
    const bannerTxt = document.getElementById('web-config-announcement-text');
    const bannerType = document.getElementById('web-config-announcement-type');
    if (bannerChk && bannerTxt && bannerType) {
      this.data.webConfig.bannerAnnouncement = {
        enabled: bannerChk.checked,
        text: bannerTxt.value.trim(),
        type: bannerType.value
      };
    }
    this.markDirty();
  },

  buildRoundRobin(teamIds, twoLegs = false) {
    const teams = [...teamIds];
    const hasOdd = teams.length % 2 !== 0;
    if (hasOdd) {
      teams.push('__BYE__');
    }
    const n = teams.length;
    const roundsCount = n - 1;
    const matchesPerRound = n / 2;
    const fixed = teams[0];
    let rotating = teams.slice(1);

    const rounds = [];
    for (let r = 0; r < roundsCount; r++) {
      const current = [fixed, ...rotating];
      const matches = [];
      let restingTeamId = null;
      for (let m = 0; m < matchesPerRound; m++) {
        let t1 = current[m];
        let t2 = current[n - 1 - m];
        if (m === 0 && r % 2 === 1) {
          const tmp = t1; t1 = t2; t2 = tmp;
        } else if (m > 0 && (r + m) % 2 === 1) {
          const tmp = t1; t1 = t2; t2 = tmp;
        }
        if (t1 === '__BYE__') {
          restingTeamId = t2;
        } else if (t2 === '__BYE__') {
          restingTeamId = t1;
        } else {
          matches.push({
            id: `match_r${r + 1}_m${matches.length + 1}`,
            jornada: r + 1,
            team1Id: t1,
            team2Id: t2,
            score1: null,
            score2: null,
            played: false,
            events: []
          });
        }
      }
      const roundObj = {
        jornada: r + 1,
        name: `Jornada ${r + 1}`,
        type: 'ida',
        matches: matches
      };
      if (restingTeamId) roundObj.restingTeamId = restingTeamId;
      rounds.push(roundObj);
      rotating = [rotating[rotating.length - 1], ...rotating.slice(0, rotating.length - 1)];
    }

    if (twoLegs) {
      for (let r = 0; r < roundsCount; r++) {
        const idaRound = rounds[r];
        const vueltaMatches = idaRound.matches.map((m, idx) => ({
          id: `match_r${roundsCount + r + 1}_m${idx + 1}`,
          jornada: roundsCount + r + 1,
          team1Id: m.team2Id,
          team2Id: m.team1Id,
          score1: null,
          score2: null,
          played: false,
          events: []
        }));
        const vueltaRoundObj = {
          jornada: roundsCount + r + 1,
          name: `Jornada ${roundsCount + r + 1}`,
          type: 'vuelta',
          matches: vueltaMatches
        };
        if (idaRound.restingTeamId) vueltaRoundObj.restingTeamId = idaRound.restingTeamId;
        rounds.push(vueltaRoundObj);
      }
    }

    return rounds;
  },

  async generateDivisionFixture(divisionKey, twoLegs = false) {
    if (!this.data || !this.data.teams) return;
    const divName = divisionKey === 'oro' ? 'División Oro' : 'División Plata';
    const legText = twoLegs ? 'Ida y Vuelta' : 'Solo Ida';

    if (!confirm(`¿Deseas generar el calendario oficial de ${divName} (${legText})?\n\nEsto creará las fechas oficiales round-robin para todos los clubes de esta división y guardará los cambios.`)) {
      return;
    }

    const eligible = this.data.teams.filter(t => (t.division || '').toLowerCase() === divisionKey.toLowerCase());
    if (eligible.length < 2) {
      this.showToast(`No hay suficientes clubes en ${divName} para generar calendario`, 'error');
      return;
    }

    const teamIds = eligible.map(t => t.id);
    const fixtureRounds = this.buildRoundRobin(teamIds, twoLegs);

    // Formatear IDs oficiales
    fixtureRounds.forEach(round => {
      round.matches.forEach((m, idx) => {
        m.id = `${divisionKey}_j${round.jornada}_m${idx + 1}`;
      });
    });

    if (!this.data.fixtures) this.data.fixtures = {};
    this.data.fixtures[divisionKey] = fixtureRounds;

    await this.saveData(true);
    this.onCompetitionChange();
    this.showToast(`¡Calendario oficial de ${divName} (${fixtureRounds.length} Jornadas) generado y guardado exitosamente!`, 'success');
  }
};

// Auto-arranque al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
  AdminApp.init();
});
