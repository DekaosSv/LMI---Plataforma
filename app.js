// Motor de la Aplicación para la Liga Master Internacional (LMI) - Temporada 10

var lmiData = null;
var currentNav = 'dashboard';


// Inicialización de la Aplicación
document.addEventListener('DOMContentLoaded', () => {
  loadDataFromStorage();
  initUI();
});

// Funciones Auxiliares Globales
async function sha256(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getFichajesUrl(name) {
  if (!name) return 'https://www.fichajes.com/';
  const slug = name.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, '-');
  return `https://www.fichajes.com/jugador/${slug}/`;
}

// Gestión del Almacenamiento Local
function loadDataFromStorage() {
  try {
    localStorage.clear();
  } catch (e) {}

  if (typeof INITIAL_LMI_DATA !== 'undefined') {
    lmiData = JSON.parse(JSON.stringify(INITIAL_LMI_DATA));
    
    // Set default Copa Estelar bracket if missing
    if (!lmiData.copaEstelarMatches) {
      lmiData.copaEstelarMatches = [
        { "fase": "Cuartos 1", "team1": "Por definir", "score1": "", "team2": "Por definir", "score2": "", "estado": "Por Jugar" },
        { "fase": "Cuartos 2", "team1": "Por definir", "score1": "", "team2": "Por definir", "score2": "", "estado": "Por Jugar" },
        { "fase": "Cuartos 3", "team1": "Por definir", "score1": "", "team2": "Por definir", "score2": "", "estado": "Por Jugar" },
        { "fase": "Cuartos 4", "team1": "Por definir", "score1": "", "team2": "Por definir", "score2": "", "estado": "Por Jugar" },
        { "fase": "Semifinal 1", "team1": "Por definir", "score1": "", "team2": "Por definir", "score2": "", "estado": "Por Jugar" },
        { "fase": "Semifinal 2", "team1": "Por definir", "score1": "", "team2": "Por definir", "score2": "", "estado": "Por Jugar" },
        { "fase": "Final", "team1": "Por definir", "score1": "", "team2": "Por definir", "score2": "", "estado": "Por Jugar" }
      ];
    }
    
    // Set default UEFA Champions League bracket if missing
    if (!lmiData.championsLeagueMatches) {
      lmiData.championsLeagueMatches = [
        { "fase": "Cuartos 1", "team1": "Por definir", "score1": "", "team2": "Por definir", "score2": "", "estado": "Por Jugar" },
        { "fase": "Cuartos 2", "team1": "Por definir", "score1": "", "team2": "Por definir", "score2": "", "estado": "Por Jugar" },
        { "fase": "Cuartos 3", "team1": "Por definir", "score1": "", "team2": "Por definir", "score2": "", "estado": "Por Jugar" },
        { "fase": "Cuartos 4", "team1": "Por definir", "score1": "", "team2": "Por definir", "score2": "", "estado": "Por Jugar" },
        { "fase": "Semifinal 1", "team1": "Por definir", "score1": "", "team2": "Por definir", "score2": "", "estado": "Por Jugar" },
        { "fase": "Semifinal 2", "team1": "Por definir", "score1": "", "team2": "Por definir", "score2": "", "estado": "Por Jugar" },
        { "fase": "Final", "team1": "Por definir", "score1": "", "team2": "Por definir", "score2": "", "estado": "Por Jugar" }
      ];
    }
  } else {
    console.error("INITIAL_LMI_DATA is not defined!");
  }
}

function saveDataToStorage() {
  localStorage.setItem('lmi_league_t10_v20', JSON.stringify(lmiData));
}

// UI Initialization & Navigation
let currentSearchPageSize = 24;

function initUI() {
  renderDashboard();
  renderStats();
  initTeamSelect();
  initRenovationSelect();
  initPlayerSearchUI();
  initMarketUI();
  renderRules();
  
  // Render direct elimination brackets
  renderBracket('copa-estelar-bracket', lmiData.copaEstelarMatches);
  renderBracket('uefa-champions-bracket', lmiData.championsLeagueMatches);

  // Initialize Balon de Oro Gallery
  initBalonOro();

  // Dynamic clubs count updater
  updateDynamicClubsCounts();

  // Initialize Posiciones & Fixtures
  initWebPosiciones();
}

function switchNav(navId) {
  if (navId === 'renovaciones' || navId === 'rules') {
    navId = 'dashboard';
  }
  currentNav = navId;
  document.querySelectorAll('.nav-link').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.page-section').forEach(sec => sec.classList.remove('active'));

  const activeBtn = document.querySelector(`.nav-link[onclick="switchNav('${navId}')"]`);
  if (activeBtn) activeBtn.classList.add('active');

  const activeSec = document.getElementById(`sec-${navId}`);
  if (activeSec) activeSec.classList.add('active');

  if (navId === 'dashboard') renderDashboard();
  if (navId === 'posiciones') renderWebPosiciones();
  if (navId === 'stats') renderStats();
  if (navId === 'teams') {
    const sel = document.getElementById('team-select');
    if (sel && sel.value) loadTeamHub(sel.value);
  }
  if (navId === 'mercado') renderMercado();
  if (navId === 'renovaciones') {
    const sel = document.getElementById('renovation-team-select');
    if (sel && sel.value) loadRenovationsForTeam(sel.value);
  }
  if (navId === 'buscador') filterPlayersDatabase();
  if (navId === 'rules') renderRules();
  if (navId === 'sala-campeones') renderSalaCampeones();
  if (navId === 'balon-oro') renderBalonOro();
}

// Render Dashboard
function renderDashboard() {
  // Top Scorers Preview
  const scorersContainer = document.getElementById('dashboard-top-scorers');
  const topPlayers = [...lmiData.players].sort((a, b) => b.goals - a.goals).slice(0, 5);

  scorersContainer.innerHTML = topPlayers.map((p, idx) => {
    const team = lmiData.teams.find(t => t.id === p.teamId) || { name: 'Libre', logo: '' };
    return `
      <div class="leader-row">
        <div class="leader-info">
          <div class="player-avatar">${idx + 1}</div>
          <img src="${team.logo}" class="team-logo" alt="${team.name}" style="width: 28px; height: 28px;">
          <div>
            <div class="player-name">${p.name}</div>
            <div class="player-meta">${team.name} &bull; <span class="pos-badge pos-${p.position}">${p.position}</span></div>
          </div>
        </div>
        <div class="stat-value">${p.goals} <span style="font-size: 0.75rem; color: var(--text-muted);">goles</span></div>
      </div>
    `;
  }).join('');

  // Top Assists Preview
  const assistsContainer = document.getElementById('dashboard-top-assists');
  const topAssists = [...lmiData.players].sort((a, b) => b.assists - a.assists).slice(0, 5);

  assistsContainer.innerHTML = topAssists.map((p, idx) => {
    const team = lmiData.teams.find(t => t.id === p.teamId) || { name: 'Libre', logo: '' };
    return `
      <div class="leader-row">
        <div class="leader-info">
          <div class="player-avatar" style="border-color: var(--neon-cyan);">${idx + 1}</div>
          <img src="${team.logo}" class="team-logo" alt="${team.name}" style="width: 28px; height: 28px;">
          <div>
            <div class="player-name">${p.name}</div>
            <div class="player-meta">${team.name} &bull; <span class="pos-badge pos-${p.position}">${p.position}</span></div>
          </div>
        </div>
        <div class="stat-value" style="color: var(--neon-cyan);">${p.assists} <span style="font-size: 0.75rem; color: var(--text-muted);">asist.</span></div>
      </div>
    `;
  }).join('');
}

// Render Stats Page
function renderStats() {
  const goleadoresContainer = document.getElementById('full-goleadores-list');
  const asistenciasContainer = document.getElementById('full-asistencias-list');

  const tSel = document.getElementById('stats-tournament-select');
  const tournament = tSel ? tSel.value : 'liga';

  let goalsKey = 'goals_liga';
  let assistsKey = 'assists_liga';
  let statLabelGoals = 'goles';
  let statLabelAssists = 'asist.';

  if (tournament === 'copa') {
    goalsKey = 'goals_estelar';
    assistsKey = 'assists_estelar';
  } else if (tournament === 'champions') {
    goalsKey = 'goals_champions';
    assistsKey = 'assists_champions';
  }

  const topScorers = [...lmiData.players]
    .filter(p => p[goalsKey] > 0)
    .sort((a, b) => b[goalsKey] - a[goalsKey])
    .slice(0, 10);

  const topAssists = [...lmiData.players]
    .filter(p => p[assistsKey] > 0)
    .sort((a, b) => b[assistsKey] - a[assistsKey])
    .slice(0, 10);

  goleadoresContainer.innerHTML = topScorers.length === 0 ? '<div style="padding: 1.5rem; text-align: center; color: var(--text-muted);">Sin goles registrados aún en este torneo</div>' : topScorers.map((p, idx) => {
    const team = lmiData.teams.find(t => t.id === p.teamId) || { name: 'Libre', logo: '' };
    return `
      <div class="leader-row">
        <div class="leader-info">
          <div class="player-avatar">${idx + 1}</div>
          <img src="${team.logo}" class="team-logo" alt="${team.name}">
          <div>
            <div class="player-name">${p.name}</div>
            <div class="player-meta">${team.name} &bull; <span class="pos-badge pos-${p.position}">${p.position}</span></div>
          </div>
        </div>
        <div class="stat-value">${p[goalsKey]} <span style="font-size: 0.75rem; color: var(--text-muted);">${statLabelGoals}</span></div>
      </div>
    `;
  }).join('');

  asistenciasContainer.innerHTML = topAssists.length === 0 ? '<div style="padding: 1.5rem; text-align: center; color: var(--text-muted);">Sin asistencias registradas aún en este torneo</div>' : topAssists.map((p, idx) => {
    const team = lmiData.teams.find(t => t.id === p.teamId) || { name: 'Libre', logo: '' };
    return `
      <div class="leader-row">
        <div class="leader-info">
          <div class="player-avatar" style="border-color: var(--lmi-blue); color: var(--lmi-blue);">${idx + 1}</div>
          <img src="${team.logo}" class="team-logo" alt="${team.name}">
          <div>
            <div class="player-name">${p.name}</div>
            <div class="player-meta">${team.name} &bull; <span class="pos-badge pos-${p.position}">${p.position}</span></div>
          </div>
        </div>
        <div class="stat-value" style="color: var(--lmi-blue);">${p[assistsKey]} <span style="font-size: 0.75rem; color: var(--text-muted);">${statLabelAssists}</span></div>
      </div>
    `;
  }).join('');
}

// Render Bracket dynamically
function renderBracket(containerId, matches) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (!matches || matches.length === 0) {
    container.innerHTML = `<div style="text-align: center; width: 100%; color: var(--text-muted); padding: 2rem;">No hay partidos registrados para esta fase.</div>`;
    return;
  }

  const normalizedTeams = lmiData.teams.map(t => ({
    ...t,
    normName: normalizeSearchString(t.name)
  }));

  // Group matches by phase
  const cuartos = matches.filter(m => m.fase.toLowerCase().includes('cuartos'));
  const semifinales = matches.filter(m => m.fase.toLowerCase().includes('semifinal'));
  const finalMatch = matches.find(m => m.fase.toLowerCase() === 'final');

  // helper function to render a team row in match box
  const getTeamRowHtml = (teamName, score, isWinner, isOpponentWinner) => {
    const normSearchName = normalizeSearchString(teamName);
    const teamObj = normalizedTeams.find(t => t.normName === normSearchName) || { logo: 'Imagenes/lmi logo original.jpg' };
    const nameStyle = isWinner ? 'font-weight: 700; color: var(--text-primary);' : (isOpponentWinner ? 'color: var(--text-muted);' : 'color: var(--text-primary);');
    const scoreStyle = isWinner ? 'font-weight: 700; color: var(--lmi-blue);' : 'color: var(--text-muted);';
    return `
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.35rem 0.5rem; ${isOpponentWinner ? 'opacity: 0.75;' : ''}">
        <div style="display: flex; align-items: center; gap: 0.5rem; max-width: 80%;">
          <img src="${teamObj.logo}" alt="${teamName}" style="width: 20px; height: 20px; object-fit: contain;">
          <span style="font-size: 0.85rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; ${nameStyle}">${teamName || 'Por clasificar'}</span>
        </div>
        <span style="font-family: var(--font-heading); font-size: 0.85rem; ${scoreStyle}">${score !== undefined ? score : ''}</span>
      </div>
    `;
  };

  const getMatchBoxHtml = (match) => {
    const score1Str = String(match.score1 || '');
    const score2Str = String(match.score2 || '');
    const isFinished = match.estado.toLowerCase() === 'finalizado';
    
    // Determine winner
    let isT1Winner = false;
    let isT2Winner = false;
    if (isFinished) {
      const getNumericVal = (valStr) => {
        const clean = valStr.replace(/[^\d]/g, '');
        return parseInt(clean) || 0;
      };
      const n1 = getNumericVal(score1Str);
      const n2 = getNumericVal(score2Str);
      if (n1 > n2) isT1Winner = true;
      else if (n2 > n1) isT2Winner = true;
    }

    return `
      <div style="background: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 0.4rem 0.25rem; box-shadow: 0 2px 4px rgba(0,0,0,0.02); margin: 0.5rem 0; width: 100%;">
        ${getTeamRowHtml(match.team1, match.score1, isT1Winner, isT2Winner)}
        <div style="border-top: 1px solid rgba(0,0,0,0.05); margin: 0.15rem 0;"></div>
        ${getTeamRowHtml(match.team2, match.score2, isT2Winner, isT1Winner)}
      </div>
    `;
  };

  // Render Cuartos Column
  let cuartosHtml = `
    <div style="flex: 1; min-width: 220px; display: flex; flex-direction: column; justify-content: space-around; gap: 1rem;">
      <h3 style="font-family: var(--font-heading); font-size: 0.95rem; text-align: center; color: var(--lmi-blue); border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem; margin-bottom: 0.5rem;"><i class="fa-solid fa-gamepad"></i> Cuartos de Final</h3>
      ${cuartos.map(getMatchBoxHtml).join('')}
    </div>
  `;

  // Render Semifinal Column
  let semifinalHtml = `
    <div style="flex: 1; min-width: 220px; display: flex; flex-direction: column; justify-content: space-around; gap: 1.5rem;">
      <h3 style="font-family: var(--font-heading); font-size: 0.95rem; text-align: center; color: var(--lmi-blue); border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem; margin-bottom: 0.5rem;"><i class="fa-solid fa-shield"></i> Semifinales</h3>
      ${semifinales.map(getMatchBoxHtml).join('')}
    </div>
  `;

  // Render Final Column
  let finalHtml = '';
  if (finalMatch) {
    const isFinished = finalMatch.estado.toLowerCase() === 'finalizado';
    const score1Str = String(finalMatch.score1 || '');
    const score2Str = String(finalMatch.score2 || '');
    
    // Determine winner
    let isT1Winner = false;
    let isT2Winner = false;
    let championName = '';
    let championLogo = '';
    
    if (isFinished) {
      const getNumericVal = (valStr) => {
        const clean = valStr.replace(/[^\d]/g, '');
        return parseInt(clean) || 0;
      };
      const n1 = getNumericVal(score1Str);
      const n2 = getNumericVal(score2Str);
      if (n1 > n2) { isT1Winner = true; championName = finalMatch.team1; }
      else if (n2 > n1) { isT2Winner = true; championName = finalMatch.team2; }
      
      const champTeam = normalizedTeams.find(t => t.normName === normalizeSearchString(championName)) || { logo: 'Imagenes/lmi logo original.jpg' };
      championLogo = champTeam.logo;
    }

    const t1Obj = normalizedTeams.find(t => t.normName === normalizeSearchString(finalMatch.team1)) || { logo: 'Imagenes/lmi logo original.jpg' };
    const t2Obj = normalizedTeams.find(t => t.normName === normalizeSearchString(finalMatch.team2)) || { logo: 'Imagenes/lmi logo original.jpg' };

    let finalGraphicHtml = '';
    if (isFinished) {
      // Champion! Show only the champion logo
      finalGraphicHtml = `
        <div style="background: linear-gradient(135deg, rgba(255, 209, 0, 0.15) 0%, rgba(0, 168, 89, 0.1) 100%); border: 2px solid var(--lmi-yellow); border-radius: var(--radius-lg); padding: 1.25rem; box-shadow: 0 8px 20px rgba(255, 209, 0, 0.15); text-align: center;">
          <i class="fa-solid fa-trophy" style="font-size: 2.5rem; color: var(--lmi-yellow); margin-bottom: 0.75rem; display: inline-block; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));"></i>
          <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; font-weight: 800; letter-spacing: 1px; margin-bottom: 0.5rem;">¡CAMPEÓN OFICIAL!</div>
          <img src="${championLogo}" alt="${championName}" style="width: 70px; height: 70px; object-fit: contain; margin-bottom: 0.75rem; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.15));">
          <div style="font-size: 1.25rem; font-weight: 800; color: var(--lmi-blue); line-height: 1.2;">${championName}</div>
          <div style="font-size: 0.85rem; font-weight: 700; color: var(--lmi-green); margin-top: 0.5rem;">Marcador: ${finalMatch.score1} - ${finalMatch.score2}</div>
        </div>
      `;
    } else {
      // By play! Show both team logos next to each other
      finalGraphicHtml = `
        <div style="background: linear-gradient(135deg, rgba(255, 209, 0, 0.05) 0%, rgba(0, 51, 160, 0.03) 100%); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 1.25rem; box-shadow: 0 4px 12px rgba(0,0,0,0.03); text-align: center;">
          <i class="fa-solid fa-trophy" style="font-size: 2.2rem; color: #cbd5e1; margin-bottom: 0.75rem;"></i>
          <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700; letter-spacing: 0.5px; margin-bottom: 0.75rem;">Gran Final</div>
          
          <div style="display: flex; align-items: center; justify-content: center; gap: 1rem; margin-bottom: 0.75rem;">
            <div style="text-align: center; width: 75px;">
              <img src="${t1Obj.logo}" alt="${finalMatch.team1}" style="width: 42px; height: 42px; object-fit: contain; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));">
              <div style="font-size: 0.7rem; font-weight: 700; margin-top: 0.25rem; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">${finalMatch.team1 || 'Por Clasificar'}</div>
            </div>
            
            <span style="font-size: 0.85rem; font-weight: 800; color: var(--text-muted);">VS</span>
            
            <div style="text-align: center; width: 75px;">
              <img src="${t2Obj.logo}" alt="${finalMatch.team2}" style="width: 42px; height: 42px; object-fit: contain; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));">
              <div style="font-size: 0.7rem; font-weight: 700; margin-top: 0.25rem; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">${finalMatch.team2 || 'Por Clasificar'}</div>
            </div>
          </div>
          
          <span style="display: inline-block; background: var(--lmi-blue); color: #ffffff; padding: 0.25rem 0.75rem; border-radius: var(--radius-pill); font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Por Jugar</span>
        </div>
      `;
    }

    finalHtml = `
      <div style="flex: 1; min-width: 220px; display: flex; flex-direction: column; justify-content: center; gap: 1rem;">
        <h3 style="font-family: var(--font-heading); font-size: 0.95rem; text-align: center; color: var(--lmi-yellow); border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem; margin-bottom: 0.5rem;"><i class="fa-solid fa-crown"></i> Gran Final</h3>
        ${finalGraphicHtml}
      </div>
    `;
  }

  container.innerHTML = cuartosHtml + semifinalHtml + finalHtml;
}

// Team Hub
function initTeamSelect() {
  const sel = document.getElementById('team-select');
  if (!sel) return;
  sel.innerHTML = lmiData.teams.map(t => `<option value="${t.id}">${t.name}</option>`).join('');
  if (lmiData.teams.length > 0) {
    loadTeamHub(lmiData.teams[0].id);
  }
}

function loadTeamHub(teamId) {
  const team = lmiData.teams.find(t => t.id === teamId);
  if (!team) return;

  const headerBox = document.getElementById('team-hub-header');
  const rosterTbody = document.getElementById('team-roster-tbody');
  const statsBox = document.getElementById('team-hub-stats-box');

  const bgStyle = team.colors.bgGradient || `linear-gradient(135deg, ${team.colors.primary} 0%, #050515 100%)`;
  headerBox.style.background = bgStyle;
  headerBox.style.borderColor = team.colors.secondary || 'var(--border-color)';

  headerBox.innerHTML = `
    <div class="team-hub-info">
      <img src="${team.logo}" class="team-logo-lg" alt="${team.name}" style="width: 90px; height: 90px;">
      <div class="team-hub-details">
        <span class="hero-tag" style="background: rgba(0, 255, 136, 0.2); border-color: var(--neon-green); color: var(--neon-green);">
          Posición Oficial en Liga: #${team.leagueRank || 1}
        </span>
        <h2 style="color: ${team.colors.secondary || '#fff'}">${team.name}</h2>
        <div class="team-hub-meta">
          <span><i class="fa-solid fa-stadium"></i> ${team.stadium}</span>
          <span><i class="fa-solid fa-user-tie"></i> DT: ${team.manager}</span>
        </div>
      </div>
    </div>

    <div class="team-hub-budget">
      <div class="budget-label">Presupuesto del Club</div>
      <div class="budget-amount">$${((team.budget || 100000000) / 1000000).toFixed(1)}M USD</div>
    </div>
  `;

  // Roster rendering (with 13 positions, TM and F.COM links)
  const teamPlayers = lmiData.players.filter(p => p.teamId === teamId);
  if (!teamPlayers || teamPlayers.length === 0) {
    rosterTbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-muted);">Sin jugadores registrados en plantilla.</td></tr>`;
  } else {
    rosterTbody.innerHTML = teamPlayers.map(p => {
      return `
        <tr>
          <td><span class="pos-badge pos-${p.position}">${p.position}</span></td>
          <td>
            <div style="display: flex; align-items: center; justify-content: space-between; gap: 0.5rem;">
              <span style="font-weight: 600;">${p.name}</span>
              <div style="display: flex; gap: 0.3rem;">
                <a href="https://www.transfermarkt.es/schnellsuche/ergebnis/schnellsuche?query=${encodeURIComponent(p.name)}" target="_blank" class="ext-link-btn ext-tm" title="Buscar en Transfermarkt">TM</a>
                <a href="${getFichajesUrl(p.name)}" target="_blank" class="ext-link-btn ext-fcom" title="Buscar perfil en Fichajes.com">F.COM</a>
              </div>
            </div>
          </td>
          <td style="text-align: center; font-weight: 700;">${p.goals}</td>
          <td style="text-align: center; font-weight: 700;">${p.assists}</td>
        </tr>
      `;
    }).join('');
  }

  // Club Stats Box & Top Club Performers
  const rank = team.leagueRank || 1;

  const topScorer = teamPlayers.length > 0 ? [...teamPlayers].sort((a,b) => b.goals - a.goals)[0] : null;
  const topAssister = teamPlayers.length > 0 ? [...teamPlayers].sort((a,b) => b.assists - a.assists)[0] : null;

  // Partidos Pendientes de este Club en su división
  const divRounds = (lmiData && lmiData.fixtures && lmiData.fixtures[team.division || 'oro']) || [];
  const pendingMatches = [];
  divRounds.forEach(r => {
    (r.matches || []).forEach(m => {
      if (!m.played && (m.team1Id === team.id || m.team2Id === team.id)) {
        const isHome = m.team1Id === team.id;
        const opponentId = isHome ? m.team2Id : m.team1Id;
        const opponent = (lmiData.teams || []).find(t => t.id === opponentId) || { name: opponentId, logo: 'Logos Equipos/default.png' };
        pendingMatches.push({
          jornada: r.jornada,
          name: r.name,
          type: r.type,
          isHome: isHome,
          opponent: opponent
        });
      }
    });
  });

  let pendingMatchesHtml = '';
  if (pendingMatches.length === 0) {
    pendingMatchesHtml = `
      <div style="background: #ecfdf5; border: 1.5px dashed #a7f3d0; border-radius: var(--radius-md); padding: 1.25rem; text-align: center;">
        <i class="fa-solid fa-circle-check" style="color: #059669; font-size: 1.6rem; margin-bottom: 0.5rem;"></i>
        <div style="font-weight: 800; color: #065f46; font-size: 0.98rem;">¡Sin partidos pendientes!</div>
        <p style="font-size: 0.82rem; color: #047857; margin-top: 0.25rem;">Este club ya disputó todos sus partidos de la temporada regular.</p>
      </div>
    `;
  } else {
    pendingMatchesHtml = `
      <div style="display: flex; flex-direction: column; gap: 0.6rem; max-height: 290px; overflow-y: auto; padding-right: 4px;">
        ${pendingMatches.map(pm => {
          const conditionBadge = pm.isHome
            ? `<span style="font-size: 0.7rem; font-weight: 800; background: #e0f2fe; color: #0369a1; border: 1px solid #7dd3fc; padding: 0.15rem 0.5rem; border-radius: 4px;">LOCAL</span>`
            : `<span style="font-size: 0.7rem; font-weight: 800; background: #f3e8ff; color: #7e22ce; border: 1px solid #d8b4fe; padding: 0.15rem 0.5rem; border-radius: 4px;">VISITANTE</span>`;

          return `
            <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: var(--radius-sm); padding: 0.65rem 0.85rem; display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; transition: all 0.2s;" onmouseover="this.style.borderColor='var(--lmi-blue)'; this.style.background='#f1f5f9'" onmouseout="this.style.borderColor='#cbd5e1'; this.style.background='#f8fafc'">
              <div style="display: flex; align-items: center; gap: 0.65rem; min-width: 0;">
                <img src="${escapeHTML(pm.opponent.logo)}" alt="${escapeHTML(pm.opponent.name)}" style="width: 28px; height: 28px; object-fit: contain; flex-shrink: 0;" onerror="this.src='Logos Equipos/default.png'">
                <div style="min-width: 0;">
                  <div style="font-size: 0.7rem; color: #64748b; font-weight: 700; text-transform: uppercase;">Jornada ${pm.jornada} (${pm.type === 'vuelta' ? 'Vuelta' : 'Ida'})</div>
                  <div style="font-weight: 800; font-size: 0.92rem; color: #0f172a; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">vs ${escapeHTML(pm.opponent.name)}</div>
                </div>
              </div>
              <div style="display: flex; align-items: center; gap: 0.4rem; flex-shrink: 0;">
                ${conditionBadge}
                <span style="font-size: 0.68rem; font-weight: 800; background: #fef3c7; color: #92400e; border: 1px solid #fcd34d; padding: 0.15rem 0.5rem; border-radius: 99px;">PENDIENTE</span>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  statsBox.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; text-align: center; margin-bottom: 1.25rem;">
      <div style="background: var(--lmi-blue); border: 1px solid var(--lmi-blue); padding: 0.85rem; border-radius: var(--radius-md); color: #ffffff; box-shadow: var(--shadow-card);">
        <div style="font-size: 0.75rem; color: rgba(255,255,255,0.85); text-transform: uppercase; font-weight: 700; letter-spacing: 0.5px;">Posición Asignada</div>
        <div style="font-family: var(--font-heading); font-size: 1.8rem; font-weight: 800; color: #fde047; margin-top: 0.25rem;">#${rank}</div>
      </div>
      <div style="background: var(--lmi-blue); border: 1px solid var(--lmi-blue); padding: 0.85rem; border-radius: var(--radius-md); color: #ffffff; box-shadow: var(--shadow-card);">
        <div style="font-size: 0.75rem; color: rgba(255,255,255,0.85); text-transform: uppercase; font-weight: 700; letter-spacing: 0.5px;">Jugadores en Plantilla</div>
        <div style="font-family: var(--font-heading); font-size: 1.8rem; font-weight: 800; color: #4ade80; margin-top: 0.25rem;">${teamPlayers.length}</div>
      </div>
    </div>

    <!-- Partidos Pendientes de este Club -->
    <div style="margin-bottom: 1.25rem; border-top: 1px solid var(--border-color); padding-top: 1rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
        <h3 style="font-family: var(--font-heading); font-size: 1rem; font-weight: 800; color: #0f172a; display: flex; align-items: center; gap: 0.45rem;">
          <i class="fa-solid fa-clock-rotate-left" style="color: #d97706;"></i> Partidos Pendientes (${pendingMatches.length})
        </h3>
        <span style="font-size: 0.75rem; font-weight: 800; color: #475569; text-transform: uppercase; background: #f1f5f9; padding: 0.2rem 0.55rem; border-radius: 4px; border: 1px solid #cbd5e1;">
          ${team.division === 'plata' ? 'División Plata' : 'División Oro'}
        </span>
      </div>
      ${pendingMatchesHtml}
    </div>

    <!-- Jugadores Destacados (Líderes) -->
    <h3 style="font-family: var(--font-heading); font-size: 1rem; font-weight: 800; color: #0f172a; margin-bottom: 0.75rem; border-top: 1px solid var(--border-color); padding-top: 1rem; display: flex; align-items: center; gap: 0.45rem;">
      <i class="fa-solid fa-star" style="color: #d97706;"></i> Líderes del Club
    </h3>

    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
      <!-- Máximo Goleador Card -->
      <div style="background: #ecfdf5; border: 1.5px solid #a7f3d0; border-radius: var(--radius-md); padding: 0.85rem 1rem; display: flex; align-items: center; justify-content: space-between; gap: 1rem; box-shadow: 0 2px 5px rgba(0,0,0,0.03);">
        <div style="display: flex; align-items: center; gap: 0.75rem; min-width: 0;">
          <div class="player-avatar" style="border-color: #059669; background: #d1fae5; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; border-radius: 50%; border: 2px solid; flex-shrink: 0;">
            <i class="fa-solid fa-futbol" style="color: #059669; font-size: 1.05rem;"></i>
          </div>
          <div style="min-width: 0;">
            <div style="font-size: 0.68rem; text-transform: uppercase; color: #047857; font-weight: 800; letter-spacing: 0.5px;">Máximo Goleador</div>
            <div style="font-weight: 800; font-size: 1rem; color: #0f172a; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${topScorer ? escapeHTML(topScorer.name) : 'Sin datos'}</div>
            <div style="font-size: 0.72rem; color: #475569; margin-top: 0.15rem;"><span class="pos-badge pos-${topScorer ? topScorer.position : 'MC'}">${topScorer ? topScorer.position : '-'}</span></div>
          </div>
        </div>
        <div style="font-family: var(--font-heading); font-size: 1.35rem; font-weight: 900; color: #059669; flex-shrink: 0; text-align: right;">
          ${topScorer ? topScorer.goals : 0} <span style="font-size: 0.75rem; color: #475569; font-weight: 700;">goles</span>
        </div>
      </div>

      <!-- Máximo Asistidor Card -->
      <div style="background: #f0f9ff; border: 1.5px solid #bae6fd; border-radius: var(--radius-md); padding: 0.85rem 1rem; display: flex; align-items: center; justify-content: space-between; gap: 1rem; box-shadow: 0 2px 5px rgba(0,0,0,0.03);">
        <div style="display: flex; align-items: center; gap: 0.75rem; min-width: 0;">
          <div class="player-avatar" style="border-color: #0284c7; background: #e0f2fe; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; border-radius: 50%; border: 2px solid; flex-shrink: 0;">
            <i class="fa-solid fa-hands-clapping" style="color: #0284c7; font-size: 1.05rem;"></i>
          </div>
          <div style="min-width: 0;">
            <div style="font-size: 0.68rem; text-transform: uppercase; color: #0369a1; font-weight: 800; letter-spacing: 0.5px;">Máximo Asistidor</div>
            <div style="font-weight: 800; font-size: 1rem; color: #0f172a; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${topAssister ? escapeHTML(topAssister.name) : 'Sin datos'}</div>
            <div style="font-size: 0.72rem; color: #475569; margin-top: 0.15rem;"><span class="pos-badge pos-${topAssister ? topAssister.position : 'MC'}">${topAssister ? topAssister.position : '-'}</span></div>
          </div>
        </div>
        <div style="font-family: var(--font-heading); font-size: 1.35rem; font-weight: 900; color: #0284c7; flex-shrink: 0; text-align: right;">
          ${topAssister ? topAssister.assists : 0} <span style="font-size: 0.75rem; color: #475569; font-weight: 700;">asist.</span>
        </div>
      </div>
    </div>
  `;
}

// RENOVACIONES TEMPORADA 10 ENGINE
function initRenovationSelect() {
  const sel = document.getElementById('renovation-team-select');
  if (!sel) return;
  sel.innerHTML = lmiData.teams.map(t => `<option value="${t.id}">${t.name} (Presupuesto: $${((t.budget || 100000000) / 1000000).toFixed(1)}M)</option>`).join('');
  if (lmiData.teams.length > 0) {
    loadRenovationsForTeam(lmiData.teams[0].id);
  }
}

function loadRenovationsForTeam(teamId) {
  const team = lmiData.teams.find(t => t.id === teamId);
  if (!team) return;

  const teamBudgetM = ((team.budget || 100000000) / 1000000);

  // Render Budget Badge
  const badgeContainer = document.getElementById('renovation-discount-badge');
  badgeContainer.innerHTML = `
    <span style="font-size: 0.9rem; color: rgba(255, 255, 255, 0.85);">Presupuesto Club:</span>
    <span class="discount-pill discount-50" style="background: rgba(255, 215, 0, 0.2); color: #ffd700; border-color: rgba(255, 215, 0, 0.4);">
      <i class="fa-solid fa-wallet"></i> $${teamBudgetM.toFixed(1)}M USD
    </span>
  `;

  // Render Players Renewal Table
  const tbody = document.getElementById('renovation-tbody');
  const teamPlayers = lmiData.players.filter(p => p.teamId === teamId);

  if (!teamPlayers || teamPlayers.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; color: var(--text-muted);">Sin jugadores registrados en este club.</td></tr>`;
  } else {
    tbody.innerHTML = teamPlayers.map(p => {
      const priceVal = (p.price !== undefined && p.price !== null) ? p.price / 1000000 : 5;
      const isNotRenewed = priceVal === 0;
      const cardType = p.cardType || (p.isLegend ? 'Epico' : 'Normal');

      return `
        <tr id="renovation-row-${p.id}" style="${isNotRenewed ? 'opacity: 0.7; background: rgba(231, 76, 60, 0.08);' : ''}">
          <td><span class="pos-badge pos-${p.position}">${p.position}</span></td>
          <td>
            <div style="display: flex; align-items: center; justify-content: space-between; gap: 0.5rem;">
              <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
                <span id="player-name-${p.id}" style="font-weight: 600; ${isNotRenewed ? 'text-decoration: line-through; color: var(--text-muted);' : ''}">${p.name}</span>
                <span id="player-status-badge-${p.id}">
                  ${isNotRenewed ? '<span class="badge" style="background: rgba(231, 76, 60, 0.2); color: #ff6b6b; border: 1px solid rgba(231, 76, 60, 0.4); font-size: 0.7rem; padding: 0.15rem 0.4rem; border-radius: 4px;">No Renovado</span>' : ''}
                </span>
                ${cardType === 'Epico' ? '<span class="badge" style="background: rgba(255, 215, 0, 0.15); color: #ffd700; border: 1px solid rgba(255, 215, 0, 0.4); font-size: 0.7rem; padding: 0.15rem 0.45rem; border-radius: 4px; font-weight: 700;"><i class="fa-solid fa-crown"></i> ÉPICO</span>' : ''}
                ${cardType === 'Big Time' ? '<span class="badge" style="background: rgba(0, 229, 255, 0.15); color: #00e5ff; border: 1px solid rgba(0, 229, 255, 0.4); font-size: 0.7rem; padding: 0.15rem 0.45rem; border-radius: 4px; font-weight: 700;"><i class="fa-solid fa-bolt"></i> BIG TIME</span>' : ''}
              </div>
              <div style="display: flex; gap: 0.3rem;">
                <a href="${getFichajesUrl(p.name)}" target="_blank" class="ext-link-btn ext-fcom">F.COM</a>
              </div>
            </div>
          </td>
          <td style="text-align: center;">
            <select class="form-control card-type-select" onchange="changePlayerCardType('${p.id}', this.value, '${teamId}')" style="display: inline-block; width: auto; font-size: 0.8rem; font-weight: 700; padding: 0.25rem 0.5rem; border-radius: 6px; text-align: center; cursor: pointer; ${
              cardType === 'Epico' 
                ? 'background: rgba(255, 215, 0, 0.18); color: #ffd700; border: 1px solid rgba(255, 215, 0, 0.5);' 
                : cardType === 'Big Time' 
                  ? 'background: rgba(0, 229, 255, 0.18); color: #00e5ff; border: 1px solid rgba(0, 229, 255, 0.5);' 
                  : 'background: rgba(255, 255, 255, 0.06); color: rgba(255, 255, 255, 0.75); border: 1px solid rgba(255, 255, 255, 0.15);'
            }">
              <option value="Normal" ${cardType === 'Normal' ? 'selected' : ''} style="background: #111827; color: #ffffff;">Normal</option>
              <option value="Epico" ${cardType === 'Epico' ? 'selected' : ''} style="background: #111827; color: #ffd700; font-weight: 700;">⭐ Épico</option>
              <option value="Big Time" ${cardType === 'Big Time' ? 'selected' : ''} style="background: #111827; color: #00e5ff; font-weight: 700;">⚡ Big Time</option>
            </select>
          </td>
          <td style="text-align: right; white-space: nowrap;">
            <input 
              type="text" 
              inputmode="decimal" 
              id="renovation-input-${p.id}"
              class="form-control renewal-val-input" 
              style="width: 95px; display: inline-block; padding: 0.2rem 0.4rem; text-align: right; font-weight: 700;" 
              value="${(priceVal % 1 === 0) ? priceVal.toFixed(0) : priceVal.toFixed(1)}" 
              onkeydown="handleRenewalPriceKeydown(event)"
              oninput="handleRenewalPriceInput(this, '${p.id}', '${teamId}')"
              onpaste="handleRenewalPricePaste(event, this, '${p.id}', '${teamId}')"
              onblur="handleRenewalPriceBlur(this, '${p.id}', '${teamId}')"
              autocomplete="off"
            > M
          </td>
        </tr>
      `;
    }).join('');
  }

  // Load Notes
  document.getElementById('renovation-note-change').value = team.legendChangeNote || '';
  document.getElementById('renovation-note-remove').value = team.legendRemoveNote || '';

  recalculateRenovationTotals(teamId);
}

// Keydown: rechazar de inmediato teclas de negativos '-', exponente 'e', signo '+' y letras o símbolos
function handleRenewalPriceKeydown(e) {
  const allowedKeys = ['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'];
  if (allowedKeys.includes(e.key)) return;
  if (e.ctrlKey || e.metaKey) return;
  
  // Bloquear '-' (negativos), '+', 'e', 'E' y cualquier letra o caracter especial
  if (!/^[0-9.]$/.test(e.key)) {
    e.preventDefault();
    return;
  }
  // Bloquear múltiples puntos decimales
  if (e.key === '.' && e.target.value.includes('.')) {
    e.preventDefault();
    return;
  }
}

// Paste: interceptar y desinfectar texto pegado
function handleRenewalPricePaste(e, input, playerId, teamId) {
  e.preventDefault();
  const pasted = (e.clipboardData || window.clipboardData).getData('text') || '';
  let clean = pasted.replace(/[^0-9.]/g, '');
  const parts = clean.split('.');
  if (parts.length > 2) {
    clean = parts[0] + '.' + parts.slice(1).join('');
  }
  input.value = clean;
  handleRenewalPriceInput(input, playerId, teamId);
}

// Input: sanitización en tiempo real y cálculo sin perder foco
function handleRenewalPriceInput(input, playerId, teamId) {
  let clean = input.value.replace(/[^0-9.]/g, '');
  const parts = clean.split('.');
  if (parts.length > 2) {
    clean = parts[0] + '.' + parts.slice(1).join('');
  }
  if (input.value !== clean) {
    input.value = clean;
  }

  if (clean !== '') {
    const val = parseFloat(clean);
    if (!isNaN(val) && val >= 0) {
      const player = lmiData.players.find(p => p.id === playerId);
      if (player) {
        player.price = val * 1000000;
        recalculateRenovationTotals(teamId);
        updateRowVisualsForRenewal(playerId, val);
      }
    }
  }
}

// Blur: formateo final y guardado
function handleRenewalPriceBlur(input, playerId, teamId) {
  let clean = input.value.replace(/[^0-9.]/g, '').trim();
  if (clean === '' || isNaN(parseFloat(clean))) {
    clean = '0';
  }
  let val = parseFloat(clean);
  if (val < 0) val = 0;
  input.value = (val % 1 === 0) ? val.toFixed(0) : val.toFixed(1);

  const player = lmiData.players.find(p => p.id === playerId);
  if (player) {
    player.price = val * 1000000;
    saveDataToStorage();
    recalculateRenovationTotals(teamId);
    updateRowVisualsForRenewal(playerId, val);
  }
}

// Actualización visual en vivo de fila (tachado si 0 / no renovado) sin recargar la tabla
function updateRowVisualsForRenewal(playerId, val) {
  const nameEl = document.getElementById(`player-name-${playerId}`);
  const statusEl = document.getElementById(`player-status-badge-${playerId}`);
  const trEl = document.getElementById(`renovation-row-${playerId}`);
  const isNotRenewed = (val === 0);

  if (nameEl) {
    nameEl.style.textDecoration = isNotRenewed ? 'line-through' : 'none';
    nameEl.style.color = isNotRenewed ? 'var(--text-muted)' : 'inherit';
  }
  if (statusEl) {
    statusEl.innerHTML = isNotRenewed 
      ? '<span class="badge" style="background: rgba(231, 76, 60, 0.2); color: #ff6b6b; border: 1px solid rgba(231, 76, 60, 0.4); font-size: 0.7rem; padding: 0.15rem 0.4rem; border-radius: 4px;">No Renovado</span>' 
      : '';
  }
  if (trEl) {
    trEl.style.opacity = isNotRenewed ? '0.7' : '1';
    trEl.style.background = isNotRenewed ? 'rgba(231, 76, 60, 0.08)' : '';
  }
}

// Cambiar tipo de carta de jugador
function changePlayerCardType(playerId, newType, teamId) {
  const player = lmiData.players.find(p => p.id === playerId);
  if (!player) return;

  player.cardType = newType;
  player.isLegend = (newType === 'Epico' || newType === 'Big Time');
  saveDataToStorage();
  loadRenovationsForTeam(teamId);
}

function recalculateRenovationTotals(teamId) {
  const team = lmiData.teams.find(t => t.id === teamId);
  if (!team) return;

  const teamPlayers = lmiData.players.filter(p => p.teamId === teamId);
  let totalRenovations = 0;

  teamPlayers.forEach(p => {
    let pVal = (p.price !== undefined && p.price !== null) ? p.price / 1000000 : 5.0;
    if (pVal > 0 && pVal <= 0.6) pVal = 1.0;
    totalRenovations += pVal;
  });

  const teamBudgetM = ((team.budget || 100000000) / 1000000);
  const remainingBudgetM = teamBudgetM - totalRenovations;

  const teamBudgetEl = document.getElementById('renovation-team-budget');
  const totalFinalEl = document.getElementById('renovation-total-final');
  const remainingEl = document.getElementById('renovation-budget-remaining');

  if (teamBudgetEl) teamBudgetEl.innerText = `$${teamBudgetM.toFixed(1)}M USD`;
  if (totalFinalEl) totalFinalEl.innerText = `-$${totalRenovations.toFixed(1)}M USD`;
  if (remainingEl) {
    remainingEl.innerText = `$${remainingBudgetM.toFixed(1)}M USD`;
    remainingEl.style.color = remainingBudgetM >= 0 ? 'var(--lmi-green)' : '#ff6b6b';
  }
}

function saveRenovationNotes() {
  const sel = document.getElementById('renovation-team-select');
  if (!sel || !sel.value) return;

  const team = lmiData.teams.find(t => t.id === sel.value);
  if (team) {
    team.legendChangeNote = document.getElementById('renovation-note-change').value;
    team.legendRemoveNote = document.getElementById('renovation-note-remove').value;
    saveDataToStorage();
    showToast("Notas de renovación guardadas", "fa-circle-check");
  }
}

function exportRenewalReport() {
  const sel = document.getElementById('renovation-team-select');
  if (!sel || !sel.value) return;

  const team = lmiData.teams.find(t => t.id === sel.value);
  if (!team) return;

  const teamPlayers = lmiData.players.filter(p => p.teamId === sel.value);
  let summary = `📋 INFORME DE RENOVACIONES - TEMPORADA 10\n`;
  summary += `Club: ${team.name}\n`;
  summary += `--------------------------------------------------\n`;
  
  let totalRenovations = 0;
  let renewedCount = 0;
  let nonRenewedCount = 0;

  teamPlayers.forEach((p, idx) => {
    let pVal = (p.price !== undefined && p.price !== null) ? p.price / 1000000 : 5.0;
    if (pVal > 0 && pVal <= 0.6) pVal = 1.0;

    let typeText = "";
    if (p.cardType === 'Epico') typeText = ' (Épico)';
    else if (p.cardType === 'Big Time') typeText = ' (Big Time)';
    else if (p.isLegend) typeText = ' (Leyenda)';

    if (pVal === 0) {
      nonRenewedCount++;
      summary += `${idx + 1}. [${p.position}] ${p.name} - NO RENOVADO ($0M)${typeText}\n`;
    } else {
      renewedCount++;
      totalRenovations += pVal;
      summary += `${idx + 1}. [${p.position}] ${p.name} - $${pVal.toFixed(1)}M${typeText}\n`;
    }
  });

  const teamBudgetM = ((team.budget || 100000000) / 1000000);
  const remainingBudgetM = teamBudgetM - totalRenovations;

  summary += `--------------------------------------------------\n`;
  if (nonRenewedCount > 0) {
    summary += `Jugadores Renovados: ${renewedCount} | No Renovados: ${nonRenewedCount}\n`;
  }
  summary += `Presupuesto del Club: $${teamBudgetM.toFixed(1)}M USD\n`;
  summary += `Total Renovaciones: -$${totalRenovations.toFixed(1)}M USD\n`;
  summary += `Presupuesto Restante: $${remainingBudgetM.toFixed(1)}M USD\n`;

  if (team.legendChangeNote) summary += `\n📌 Cambio Leyenda / Épico / Big Time: ${team.legendChangeNote}\n`;
  if (team.legendRemoveNote) summary += `📌 Elimino Leyenda / Épico / Big Time: ${team.legendRemoveNote}\n`;

  navigator.clipboard.writeText(summary).then(() => {
    showToast("¡Resumen copiado al portapapeles!", "fa-copy");
  }).catch(() => {
    alert(summary);
  });
}

// Rules Page
function renderRules() {
  const container = document.getElementById('rules-content');
  if (!container) return;
  container.innerHTML = lmiData.rules.map(cat => `
    <div class="rule-category">
      <div class="rule-cat-title"><i class="fa-solid fa-gavel"></i> ${cat.category}</div>
      <ul class="rule-list">
        ${cat.items.map(item => `<li class="rule-item">${item}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

// Toast Notifications
function showToast(message, iconClass = "fa-info-circle") {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid ${iconClass}" style="color: var(--neon-green);"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// BUSCADOR BD ENGINE
function initPlayerSearchUI() {
  const teamSel = document.getElementById('player-search-team-filter');
  if (!teamSel) return;
  
  teamSel.innerHTML = `
    <option value="">Todos los Equipos</option>
    ${lmiData.teams.map(t => `<option value="${t.id}">${t.name}</option>`).join('')}
  `;

  filterPlayersDatabase();
}

function normalizeSearchString(str) {
  if (!str) return '';
  return str.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");
}

function filterPlayersDatabase(resetLimit = true) {
  const queryInput = document.getElementById('player-search-input');
  const posFilter = document.getElementById('player-search-pos-filter');
  const teamFilter = document.getElementById('player-search-team-filter');
  const resultsContainer = document.getElementById('player-search-results-grid');
  const countBadge = document.getElementById('search-count-badge');

  if (!resultsContainer) return;

  if (resetLimit) {
    currentSearchPageSize = 24;
  }

  const rawQuery = queryInput ? queryInput.value.trim() : '';
  const normQuery = normalizeSearchString(rawQuery);
  const selectedPos = posFilter ? posFilter.value : '';
  const selectedTeam = teamFilter ? teamFilter.value : '';

  let filtered = lmiData.players.filter(p => {
    // 1. Position Filter
    if (selectedPos && p.position !== selectedPos) return false;
    
    // 2. Team Filter
    if (selectedTeam && p.teamId !== selectedTeam) return false;

    // 3. Search Query (Exact & Approximate Fuzzy Matching)
    if (normQuery) {
      const normPlayerName = normalizeSearchString(p.name);
      if (!normPlayerName.includes(normQuery)) return false;
    }

    return true;
  });

  if (countBadge) {
    countBadge.innerText = `${filtered.length} Jugadores Encontrados`;
  }

  if (filtered.length === 0) {
    resultsContainer.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-muted); background: rgba(0,0,0,0.3); border-radius: var(--radius-md);">
        <i class="fa-solid fa-user-slash" style="font-size: 2.5rem; margin-bottom: 1rem; color: var(--neon-gold);"></i>
        <h3>No se encontraron jugadores</h3>
        <p style="font-size: 0.85rem; margin-top: 0.5rem;">Intenta buscar por otro nombre o limpia los filtros de búsqueda.</p>
      </div>
    `;
  } else {
    const sliced = filtered.slice(0, currentSearchPageSize);

    let html = sliced.map(p => {
      const team = lmiData.teams.find(t => t.id === p.teamId) || { name: 'Libre', logo: 'Logos Equipos/Real_Madrid.png' };
      const priceVal = (p.price || 5000000) / 1000000;

      return `
        <div class="card" style="margin-bottom: 0; background: var(--lmi-blue); border-color: var(--lmi-blue); box-shadow: var(--shadow-card); transition: transform 0.2s, border-color 0.2s;">
          <div style="display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 0.75rem;">
            <div style="display: flex; align-items: center; gap: 0.6rem;">
              <span class="pos-badge pos-${p.position}">${p.position}</span>
              <span style="font-weight: 700; font-size: 1.05rem; color: #fff;">${p.name}</span>
            </div>
            <div style="display: flex; gap: 0.3rem;">
              <a href="https://www.transfermarkt.es/schnellsuche/ergebnis/schnellsuche?query=${encodeURIComponent(p.name)}" target="_blank" class="ext-link-btn ext-tm" title="Buscar en Transfermarkt">TM</a>
              <a href="${getFichajesUrl(p.name)}" target="_blank" class="ext-link-btn ext-fcom" title="Buscar perfil en Fichajes.com">F.COM</a>
            </div>
          </div>

          <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 0.75rem; border-top: 1px solid rgba(255,255,255,0.15);">
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <img src="${team.logo}" alt="${team.name}" loading="lazy" style="width: 24px; height: 24px; object-fit: contain;">
              <span style="font-size: 0.85rem; font-weight: 600; color: #ffffff;">${team.name}</span>
            </div>

            <div style="font-size: 0.8rem; text-align: right;">
              <span style="color: #00ff88; font-weight: 700;">${p.goals}G</span> &bull; 
              <span style="color: #00e5ff; font-weight: 700;">${p.assists}A</span>
            </div>
          </div>
        </div>
      `;
    }).join('');

    if (filtered.length > currentSearchPageSize) {
      const remaining = filtered.length - currentSearchPageSize;
      html += `
        <div style="grid-column: 1 / -1; text-align: center; margin-top: 1rem;">
          <button class="btn-primary" onclick="loadMoreSearchResults()" style="padding: 0.7rem 1.8rem; font-size: 0.95rem;">
            <i class="fa-solid fa-angles-down"></i> Mostrar más (${remaining} restantes)
          </button>
        </div>
      `;
    }

    resultsContainer.innerHTML = html;
  }

  // Renderizado dinámico de Jugadores No Renovados
  const nonRenewedContainer = document.getElementById('non-renewed-container');
  const nonRenewedGrid = document.getElementById('non-renewed-list-grid');
  const nonRenewedCountBadge = document.getElementById('non-renewed-count-badge');

  if (nonRenewedContainer && nonRenewedGrid) {
    if (selectedTeam) {
      nonRenewedContainer.style.display = 'none';
    } else {
      const filteredNonRenewed = (lmiData.nonRenewedPlayers || []).filter(p => {
        // 1. Filtro de Posición
        if (selectedPos && p.position !== selectedPos) return false;
        // 2. Filtro de Búsqueda de Texto
        if (normQuery) {
          const normPlayerName = normalizeSearchString(p.name);
          if (!normPlayerName.includes(normQuery)) return false;
        }
        return true;
      });

      if (filteredNonRenewed.length > 0) {
        nonRenewedContainer.style.display = 'block';
        if (nonRenewedCountBadge) {
          nonRenewedCountBadge.innerText = `${filteredNonRenewed.length} Jugadores`;
        }
        nonRenewedGrid.innerHTML = filteredNonRenewed.map(p => `
          <div style="background: var(--lmi-blue); border: 1px solid rgba(231, 76, 60, 0.3); border-radius: var(--radius-sm); padding: 0.75rem 1rem; display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; box-shadow: var(--shadow-card);">
            <div style="display: flex; align-items: center; gap: 0.6rem;">
              <span class="pos-badge pos-${p.position}">${p.position}</span>
              <span style="font-weight: 700; color: #fff; font-size: 0.95rem;">${p.name}</span>
            </div>
            <div style="display: flex; gap: 0.3rem;">
              <a href="https://www.transfermarkt.es/schnellsuche/ergebnis/schnellsuche?query=${encodeURIComponent(p.name)}" target="_blank" class="ext-link-btn ext-tm" style="padding: 0.2rem 0.4rem; font-size: 0.75rem;" title="Buscar en Transfermarkt">TM</a>
              <a href="https://www.fichajes.com/schnellsuche?query=${encodeURIComponent(p.name)}" target="_blank" class="ext-link-btn ext-fcom" style="padding: 0.2rem 0.4rem; font-size: 0.75rem;" title="Buscar perfil en Fichajes.com">F.COM</a>
            </div>
          </div>
        `).join('');
      } else {
        nonRenewedContainer.style.display = 'none';
      }
    }
  }
}

function loadMoreSearchResults() {
  currentSearchPageSize += 24;
  filterPlayersDatabase(false);
}

function resetPlayerSearchFilters() {
  const queryInput = document.getElementById('player-search-input');
  const posFilter = document.getElementById('player-search-pos-filter');
  const teamFilter = document.getElementById('player-search-team-filter');

  if (queryInput) queryInput.value = '';
  if (posFilter) posFilter.value = '';
  if (teamFilter) teamFilter.value = '';

  filterPlayersDatabase();
}

// --- MERCADO DE FICHAJES ENGINE ---

function initMarketUI() {
  const sel = document.getElementById('market-team-select');
  if (!sel) return;
  if (lmiData && lmiData.teams) {
    sel.innerHTML = lmiData.teams.map(t => `<option value="${t.id}">${t.name}</option>`).join('');
  }
}

function switchMarketTab(tabId) {
  // Update buttons
  document.querySelectorAll('.market-tabs .btn-tab').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(`btn-tab-${tabId}`);
  if (activeBtn) activeBtn.classList.add('active');

  // Update tabs visibility
  document.querySelectorAll('.market-tab-content').forEach(content => {
    content.classList.remove('active');
    content.style.display = 'none';
  });
  const activeContent = document.getElementById(`market-tab-${tabId}`);
  if (activeContent) {
    activeContent.classList.add('active');
    activeContent.style.display = 'block';
  }
}

function renderMercado() {
  const movements = lmiData.marketMovements || [];

  // 1. Calculate and render general stats
  let totalInvested = 0;
  let recordTransfer = { player: 'Ninguno', price: 0, dest: '' };
  let activeLoansCount = 0;

  movements.forEach(m => {
    const isFichaje = m.type.toLowerCase().includes('fichaje') || m.type.toLowerCase().includes('compra') || m.type.toLowerCase().includes('venta');
    const isPrestamoCosto = m.type.toLowerCase().includes('costo');
    const isAnyPrestamo = m.type.toLowerCase().includes('préstamo') || m.type.toLowerCase().includes('prestamo');
    
    if (isFichaje || isPrestamoCosto) {
      totalInvested += m.price || 0;
    }
    
    if (isFichaje && m.price > recordTransfer.price) {
      recordTransfer = { player: m.player, price: m.price, dest: m.toTeamName || 'Liga' };
    }
    
    if (isAnyPrestamo) {
      activeLoansCount++;
    }
  });

  const statsRow = document.getElementById('market-stats-row');
  if (statsRow) {
    statsRow.innerHTML = `
      <div class="market-stat-card">
        <div class="market-stat-icon" style="background: rgba(0, 51, 160, 0.12); color: var(--lmi-blue);">
          <i class="fa-solid fa-people-arrows"></i>
        </div>
        <div class="market-stat-info">
          <span class="market-stat-label">Préstamos Activos</span>
          <span class="market-stat-value">${activeLoansCount} Jugadores</span>
        </div>
      </div>
    `;
  }

  // 2. Select initial team if empty
  const sel = document.getElementById('market-team-select');
  if (sel) {
    if (!sel.value && lmiData.teams && lmiData.teams.length > 0) {
      sel.value = lmiData.teams[0].id;
    }
    loadMarketForTeam(sel.value);
  }

  // 3. Render list tabs
  renderMarketRecords();
  renderMarketPrestamos();
  switchMarketTab('prestamos');
}

function getMovementBadge(type) {
  const norm = type.toLowerCase();
  let badgeClass = 'badge-fichaje';
  if (norm.includes('intercambio')) badgeClass = 'badge-intercambio';
  else if (norm.includes('costo')) badgeClass = 'badge-prestamo-costo';
  else if (norm.includes('préstamo') || norm.includes('prestamo')) badgeClass = 'badge-prestamo';
  else if (norm.includes('regreso')) badgeClass = 'badge-regreso';
  else if (norm.includes('baja') || norm.includes('no renov')) badgeClass = 'badge-baja';
  
  return `<span class="badge-movement ${badgeClass}">${type}</span>`;
}

function renderTeamWithLogo(teamId, teamName) {
  if (!teamName) return '<span style="color: var(--text-muted); font-style: italic;">Sin Equipo</span>';
  if (!teamId) return `<span style="color: var(--text-muted); font-weight: 500;">${teamName}</span>`;
  
  const team = lmiData.teams.find(t => t.id === teamId);
  if (team) {
    return `
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <img src="${team.logo}" alt="${team.name}" style="width: 20px; height: 20px; object-fit: contain;">
        <span style="font-weight: 600;">${team.name}</span>
      </div>
    `;
  }
  return `<span style="color: var(--text-muted); font-weight: 500;">${teamName}</span>`;
}

function loadMarketForTeam(teamId) {
  if (!teamId) return;
  const movements = lmiData.marketMovements || [];
  
  // Altas: where destination team matches teamId
  const altas = movements.filter(m => m.toTeamId === teamId);
  // Bajas: where origin team matches teamId
  const bajas = movements.filter(m => m.fromTeamId === teamId);

  // Update counts
  const altasBadge = document.getElementById('altas-count-badge');
  const bajasBadge = document.getElementById('bajas-count-badge');
  if (altasBadge) altasBadge.innerText = altas.length;
  if (bajasBadge) bajasBadge.innerText = bajas.length;

  // Altas table rendering
  const altasTbody = document.getElementById('market-altas-tbody');
  if (altasTbody) {
    if (altas.length === 0) {
      altasTbody.innerHTML = `<tr><td colspan="4" style="text-align: center; color: var(--text-muted); padding: 1.5rem;">Sin altas registradas.</td></tr>`;
    } else {
      altasTbody.innerHTML = altas.map(m => {
        const seasonsText = m.seasons ? ` (${m.seasons} Temp.)` : '';
        const priceVal = m.price > 0 ? `$${m.price.toFixed(1)}M USD` : 'Gratis';
        let displayType = m.type;
        if (displayType.toLowerCase() === 'venta') {
          displayType = 'Compra';
        }
        return `
          <tr>
            <td><strong style="color: var(--text-primary);">${m.player}</strong></td>
            <td>${getMovementBadge(displayType)}</td>
            <td>${renderTeamWithLogo(m.fromTeamId, m.fromTeamName)}</td>
            <td style="text-align: right; font-weight: 700; color: var(--lmi-green);">${priceVal}${seasonsText}</td>
          </tr>
        `;
      }).join('');
    }
  }

  // Bajas table rendering
  const bajasTbody = document.getElementById('market-bajas-tbody');
  if (bajasTbody) {
    if (bajas.length === 0) {
      bajasTbody.innerHTML = `<tr><td colspan="4" style="text-align: center; color: var(--text-muted); padding: 1.5rem;">Sin bajas registradas.</td></tr>`;
    } else {
      bajasTbody.innerHTML = bajas.map(m => {
        const priceVal = m.price > 0 ? `$${m.price.toFixed(1)}M USD` : 'Gratis';
        let displayType = m.type;
        if (displayType.toLowerCase() === 'compra') {
          displayType = 'Venta';
        }
        return `
          <tr>
            <td><strong style="color: var(--text-primary);">${m.player}</strong></td>
            <td>${getMovementBadge(displayType)}</td>
            <td>${renderTeamWithLogo(m.toTeamId, m.toTeamName)}</td>
            <td style="text-align: right; font-weight: 700; color: #ef4444;">${priceVal}</td>
          </tr>
        `;
      }).join('');
    }
  }
}

function renderMarketRecords() {
  const tbody = document.getElementById('market-records-tbody');
  if (!tbody) return;

  const movements = lmiData.marketMovements || [];
  
  // Filter for Fichajes or Intercambios, sorted by price descending
  const records = movements
    .filter(m => {
      const typeLower = m.type.toLowerCase();
      return typeLower.includes('fichaje') || typeLower.includes('compra') || typeLower.includes('intercambio') || typeLower.includes('venta');
    })
    .sort((a, b) => (b.price || 0) - (a.price || 0));

  if (records.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-muted); padding: 2rem;">No hay transferencias registradas en esta categoría.</td></tr>`;
    return;
  }

  tbody.innerHTML = records.map((m, idx) => {
    const isTop3 = idx < 3;
    const rankStyle = isTop3 ? 'font-weight: 800; color: var(--neon-gold); font-size: 1.1rem;' : 'color: var(--text-dim);';
    const rowBg = isTop3 ? 'background: rgba(255, 209, 0, 0.03);' : '';
    
    return `
      <tr style="${rowBg}">
        <td style="text-align: center; ${rankStyle}">#${idx + 1}</td>
        <td><strong style="color: var(--text-primary);">${m.player}</strong></td>
        <td>${renderTeamWithLogo(m.fromTeamId, m.fromTeamName)}</td>
        <td style="text-align: center; color: var(--text-muted); font-size: 0.8rem;"><i class="fa-solid fa-arrow-right"></i></td>
        <td>${renderTeamWithLogo(m.toTeamId, m.toTeamName)}</td>
        <td style="text-align: right; font-family: var(--font-heading); font-weight: 800; color: var(--lmi-green); font-size: 1.05rem;">
          $${(m.price || 0).toFixed(1)}M USD
        </td>
        <td style="font-size: 0.8rem; color: var(--text-muted); font-style: italic;">
          ${m.details || '-'}
        </td>
      </tr>
    `;
  }).join('');
}

function renderMarketPrestamos() {
  const tbody = document.getElementById('market-prestamos-tbody');
  if (!tbody) return;

  const movements = lmiData.marketMovements || [];
  
  // Filter for loans
  const prestamos = movements.filter(m => {
    const typeLower = m.type.toLowerCase();
    return typeLower.includes('préstamo') || typeLower.includes('prestamo');
  });

  if (prestamos.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-muted); padding: 2rem;">No hay préstamos activos registrados.</td></tr>`;
    return;
  }

  tbody.innerHTML = prestamos.map(m => {
    const priceVal = m.price > 0 ? `$${m.price.toFixed(1)}M USD` : 'Gratis';
    const seasonsVal = m.seasons ? `${m.seasons} ${m.seasons === 1 ? 'temporada' : 'temporadas'}` : 'No especificado';
    
    return `
      <tr>
        <td><strong style="color: var(--text-primary);">${m.player}</strong></td>
        <td>${renderTeamWithLogo(m.fromTeamId, m.fromTeamName)}</td>
        <td style="text-align: center; color: var(--text-muted); font-size: 0.8rem;"><i class="fa-solid fa-arrow-right"></i></td>
        <td>${renderTeamWithLogo(m.toTeamId, m.toTeamName)}</td>
        <td style="text-align: center; font-weight: 700; color: var(--lmi-blue);">${seasonsVal}</td>
        <td style="text-align: right; font-weight: 700; color: var(--lmi-green);">${priceVal}</td>
        <td style="font-size: 0.8rem; color: var(--text-muted);">${m.details || '-'}</td>
      </tr>
    `;
  }).join('');
}

// Render Sala de Campeones / Trofeos
function renderSalaCampeones() {
  const container = document.getElementById('champions-gallery-grid');
  if (!container) return;

  const champions = lmiData.champions || [];

  // Torneos definidos y sus metadatos
  const tournaments = [
    {
      id: "liga",
      name: "Liga LMI",
      excelName: "Liga LMI",
      image: "Sala de campeones/Liga.png",
      icon: "fa-solid fa-trophy",
      badgeColor: "#ffd100"
    },
    {
      id: "champions",
      name: "UEFA Champions League",
      excelName: "Champions League",
      image: "Sala de campeones/Uefa Champions League.png",
      icon: "fa-solid fa-star",
      badgeColor: "#0033a0"
    },
    {
      id: "copa",
      name: "Copa Estelar",
      excelName: "Copa Estelar",
      image: "Sala de campeones/Copa estelar.png",
      icon: "fa-solid fa-circle-nodes",
      badgeColor: "#7c3aed"
    }
  ];

  let html = "";

  tournaments.forEach(t => {
    // Filter and sort winners for this tournament
    const winners = champions
      .filter(c => c.torneo.toLowerCase().includes(t.id) || c.torneo.toLowerCase().includes(t.excelName.toLowerCase()))
      .sort((a, b) => b.cantidad - a.cantidad);

    let listHtml = "";
    if (winners.length === 0) {
      listHtml = `<li class="champion-item" style="justify-content: center;"><span class="champion-name" style="color: var(--text-muted);">Aún no hay campeones registrados</span></li>`;
    } else {
      winners.forEach((w, index) => {
        let medal = "";
        if (index === 0) medal = "🥇";
        else if (index === 1) medal = "🥈";
        else if (index === 2) medal = "🥉";
        else medal = "👑";

        let trophiesStr = "";
        for (let i = 0; i < w.cantidad; i++) {
          trophiesStr += "🏆";
        }

        const cleanName = (w.ganador || '').replace(/^@+/, '').trim();
        listHtml += `
          <li class="champion-item">
            <div class="champion-rank">
              <span class="champion-badge-icon">${medal}</span>
              <span class="champion-name">${cleanName}</span>
            </div>
            <div class="champion-trophies-container">
              <span class="champion-trophies-emojis">${trophiesStr}</span>
              <span class="trophy-badge">${w.cantidad} ${w.cantidad === 1 ? 'Título' : 'Títulos'}</span>
            </div>
          </li>
        `;
      });
    }

    html += `
      <div class="tournament-card">
        <div class="tournament-image-wrapper">
          <img src="${t.image}" alt="${t.name}" class="tournament-header-image">
          <div class="tournament-image-overlay"></div>
        </div>
        <div class="tournament-body">
          <h2 class="tournament-title"><i class="${t.icon}" style="color: ${t.badgeColor}"></i> ${t.name}</h2>
          <ul class="champion-list">
            ${listHtml}
          </ul>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// ==========================================
// BALÓN DE ORO - GALERÍA DE GANADORES LMI
// ==========================================

function initBalonOro() {
  populateBalonSeasonFilter();
}

function populateBalonSeasonFilter() {
  const filterSelect = document.getElementById('balon-season-filter');
  if (!filterSelect) return;

  const currentVal = filterSelect.value || 'all';
  const winners = lmiData.balonOro || [];
  const seasons = Array.from(new Set(winners.map(w => w.season))).filter(Boolean);

  filterSelect.innerHTML = `
    <option value="all">Todas las Temporadas (${winners.length})</option>
    ${seasons.map(s => {
      const count = winners.filter(w => w.season === s).length;
      return `<option value="${s}" ${s === currentVal ? 'selected' : ''}>${s} (${count})</option>`;
    }).join('')}
  `;
}

function renderBalonOro() {
  const container = document.getElementById('balon-oro-gallery-grid');
  if (!container) return;

  populateBalonSeasonFilter();

  const seasonFilter = document.getElementById('balon-season-filter')?.value || 'all';
  let winners = lmiData.balonOro || [];

  if (seasonFilter !== 'all') {
    winners = winners.filter(w => (w.season || '').toLowerCase() === seasonFilter.toLowerCase());
  }

  if (winners.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1.5rem; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px dashed rgba(255,209,0,0.3);">
        <i class="fa-solid fa-award" style="font-size: 3.5rem; color: #ffd100; margin-bottom: 1rem; opacity: 0.8;"></i>
        <h3 style="font-family: var(--font-heading); color: var(--text-primary); margin-bottom: 0.5rem;">No se encontraron ganadores</h3>
        <p style="color: var(--text-muted); max-width: 420px; margin: 0 auto;">No hay registros de Balón de Oro disponibles para la temporada seleccionada.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = winners.map(w => {
    const goalsPill = (w.goals !== undefined && w.goals !== null && w.goals > 0)
      ? `<span class="balon-stat-pill"><i class="fa-solid fa-futbol"></i> <strong>${w.goals}</strong> Goles</span>`
      : '';
    const assistsPill = (w.assists !== undefined && w.assists !== null && w.assists > 0)
      ? `<span class="balon-stat-pill"><i class="fa-solid fa-shoe-prints"></i> <strong>${w.assists}</strong> Asist.</span>`
      : '';
    const trophiesBox = w.trophies
      ? `<div class="balon-trophies-box"><i class="fa-solid fa-trophy"></i> <span>${w.trophies}</span></div>`
      : '';
    const descText = w.description
      ? `<p class="balon-card-desc">${w.description}</p>`
      : '';

    const imgSrc = w.image || 'Sala de campeones/Balon de oro/trofeo_balon_oro.jpg';
    const teamLogoHtml = w.teamLogo
      ? `<img src="${w.teamLogo}" alt="${w.team || ''}" class="balon-club-logo" onerror="this.style.display='none'">`
      : '<i class="fa-solid fa-shield-halved" style="color: var(--text-muted); font-size: 0.9rem;"></i>';

    return `
      <div class="balon-card" id="bdo-card-${w.id}" onclick="openBalonOroLightbox('${w.id}')" title="Haz clic para ver detalles y foto completa">
        <div class="balon-card-img-wrapper">
          <img src="${imgSrc}" alt="${w.player}" class="balon-card-img" onerror="this.src='Sala de campeones/Balon de oro/trofeo_balon_oro.jpg'">
          <div class="balon-img-overlay"></div>
          <span class="balon-season-badge-tag"><i class="fa-solid fa-crown"></i> ${w.season || 'Edición LMI'}</span>
          <div class="balon-zoom-hint" title="Ver detalles"><i class="fa-solid fa-expand"></i></div>
        </div>
        <div class="balon-card-body">
          <div class="balon-card-title-group">
            <span class="balon-player-name">${w.player}</span>
            <div class="balon-card-club-row">
              ${teamLogoHtml}
              <strong>${w.team || 'Club LMI'}</strong>
              <span style="color: var(--text-muted);">•</span>
              <span class="balon-manager-tag"><i class="fa-solid fa-user-tie"></i> DT: ${w.manager || '-'}</span>
            </div>
          </div>

          ${(goalsPill || assistsPill) ? `<div class="balon-stats-row">${goalsPill}${assistsPill}</div>` : ''}
          ${trophiesBox}
          ${descText}

          <div class="balon-card-hint">
            <i class="fa-solid fa-circle-info"></i> Toca la tarjeta para ver en grande
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function filterBalonOro() {
  renderBalonOro();
}

function openBalonOroLightbox(id) {
  const winner = (lmiData.balonOro || []).find(w => String(w.id) === String(id));
  if (!winner) return;

  const modal = document.getElementById('balon-oro-lightbox');
  if (!modal) return;

  document.getElementById('bdo-lightbox-img').src = winner.image || 'Sala de campeones/Balon de oro/trofeo_balon_oro.jpg';
  document.getElementById('bdo-lightbox-season').textContent = winner.season || 'Edición Especial';
  document.getElementById('bdo-lightbox-player').textContent = winner.player;
  document.getElementById('bdo-lightbox-club-name').textContent = winner.team || 'LMI';
  document.getElementById('bdo-lightbox-manager').textContent = winner.manager || '-';

  const logoEl = document.getElementById('bdo-lightbox-club-logo');
  if (winner.teamLogo) {
    logoEl.src = winner.teamLogo;
    logoEl.style.display = 'inline-block';
  } else {
    logoEl.style.display = 'none';
  }

  // Stats
  const statsBox = document.getElementById('bdo-lightbox-stats');
  let statsHtml = '';
  if (winner.goals !== undefined && winner.goals !== null) {
    statsHtml += `<span class="balon-stat-pill" style="font-size: 0.88rem; padding: 0.4rem 0.85rem;"><i class="fa-solid fa-futbol"></i> <strong>${winner.goals}</strong> Goles</span>`;
  }
  if (winner.assists !== undefined && winner.assists !== null) {
    statsHtml += `<span class="balon-stat-pill" style="font-size: 0.88rem; padding: 0.4rem 0.85rem;"><i class="fa-solid fa-shoe-prints"></i> <strong>${winner.assists}</strong> Asistencias</span>`;
  }
  statsBox.innerHTML = statsHtml;

  // Trophies
  const trophiesBox = document.getElementById('bdo-lightbox-trophies-box');
  if (winner.trophies) {
    document.getElementById('bdo-lightbox-trophies').textContent = winner.trophies;
    trophiesBox.style.display = 'block';
  } else {
    trophiesBox.style.display = 'none';
  }

  // Description
  document.getElementById('bdo-lightbox-desc').textContent = winner.description || 'Máximo galardón individual entregado por su destacado desempeño en la temporada.';

  modal.style.display = 'flex';
}

function closeBalonOroLightbox() {
  const modal = document.getElementById('balon-oro-lightbox');
  if (modal) modal.style.display = 'none';
}

// Make functions globally available
window.switchMarketTab = switchMarketTab;
window.loadMarketForTeam = loadMarketForTeam;
window.renderSalaCampeones = renderSalaCampeones;
window.renderBalonOro = renderBalonOro;
window.filterBalonOro = filterBalonOro;
window.openBalonOroLightbox = openBalonOroLightbox;
window.closeBalonOroLightbox = closeBalonOroLightbox;

// ==========================================
// SECCIÓN POSICIONES Y FIXTURE (ORO & PLATA)
// ==========================================

var currentWebDivision = 'oro';

function updateDynamicClubsCounts() {
  if (!lmiData || !lmiData.teams) return;
  const oroCount = lmiData.teams.filter(t => (t.division || 'oro') === 'oro').length;
  const plataCount = lmiData.teams.filter(t => t.division === 'plata').length;
  const totalCount = lmiData.teams.length;

  // Header division bar
  const lblBarOro = document.getElementById('lbl-bar-count-oro');
  if (lblBarOro) lblBarOro.textContent = oroCount;

  const lblBarPlata = document.getElementById('lbl-bar-count-plata');
  if (lblBarPlata) lblBarPlata.textContent = plataCount;

  const lblBarTotal = document.getElementById('lbl-bar-count-total');
  if (lblBarTotal) lblBarTotal.textContent = totalCount;

  // Posiciones tabs
  const lblTabOro = document.getElementById('lbl-tab-count-oro');
  if (lblTabOro) lblTabOro.textContent = oroCount;

  const lblTabPlata = document.getElementById('lbl-tab-count-plata');
  if (lblTabPlata) lblTabPlata.textContent = plataCount;

  // Standings badge
  const badgeEl = document.getElementById('lbl-web-division-badge');
  if (badgeEl) {
    const currentCount = currentWebDivision === 'oro' ? oroCount : plataCount;
    badgeEl.textContent = `${currentCount} CLUBES`;
  }
}

function initWebPosiciones() {
  updateDynamicClubsCounts();
  switchWebDivision(currentWebDivision);
}

function renderWebPosiciones() {
  updateDynamicClubsCounts();
  renderWebStandings();
  populateWebJornadas();
}

function switchWebDivision(div) {
  currentWebDivision = div;
  
  const tabOro = document.getElementById('tab-web-oro');
  const tabPlata = document.getElementById('tab-web-plata');
  const titleEl = document.getElementById('web-standings-card-title');
  const badgeEl = document.getElementById('lbl-web-division-badge');

  const isOro = div === 'oro';
  const oroCount = (lmiData && lmiData.teams) ? lmiData.teams.filter(t => (t.division || 'oro') === 'oro').length : 8;
  const plataCount = (lmiData && lmiData.teams) ? lmiData.teams.filter(t => t.division === 'plata').length : 12;

  if (tabOro && tabPlata) {
    if (isOro) {
      tabOro.classList.add('active');
      tabOro.style.background = '#fef3c7';
      tabOro.style.borderColor = '#d97706';
      tabOro.style.color = '#92400e';
      tabOro.style.boxShadow = '0 2px 8px rgba(217, 119, 6, 0.2)';

      tabPlata.classList.remove('active');
      tabPlata.style.background = '#ffffff';
      tabPlata.style.borderColor = '#cbd5e1';
      tabPlata.style.color = '#334155';
      tabPlata.style.boxShadow = 'none';
    } else {
      tabPlata.classList.add('active');
      tabPlata.style.background = '#e2e8f0';
      tabPlata.style.borderColor = '#475569';
      tabPlata.style.color = '#0f172a';
      tabPlata.style.boxShadow = '0 2px 8px rgba(71, 85, 105, 0.2)';

      tabOro.classList.remove('active');
      tabOro.style.background = '#ffffff';
      tabOro.style.borderColor = '#cbd5e1';
      tabOro.style.color = '#334155';
      tabOro.style.boxShadow = 'none';
    }
  }

  if (titleEl) {
    const iconColor = isOro ? '#b45309' : '#475569';
    titleEl.innerHTML = `<i class="fa-solid fa-table-list" style="color: ${iconColor};"></i> Tabla de Posiciones Tradicional &bull; División ${isOro ? 'Oro' : 'Plata'}`;
  }

  if (badgeEl) {
    const count = isOro ? oroCount : plataCount;
    badgeEl.textContent = `${count} CLUBES`;
    if (isOro) {
      badgeEl.style.color = '#92400e';
      badgeEl.style.borderColor = '#d97706';
      badgeEl.style.background = '#fef3c7';
    } else {
      badgeEl.style.color = '#0f172a';
      badgeEl.style.borderColor = '#64748b';
      badgeEl.style.background = '#f1f5f9';
    }
  }

  updateDynamicClubsCounts();
  renderWebStandings();
  populateWebJornadas();
}

function calculateStandings(division) {
  if (!lmiData || !lmiData.teams) return [];
  
  const divTeams = lmiData.teams.filter(t => (t.division || 'oro') === division);
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

  const rounds = (lmiData.fixtures && lmiData.fixtures[division]) || [];
  rounds.forEach(r => {
    const matches = r.matches || [];
    matches.forEach(m => {
      if (m.played && m.score1 !== null && m.score2 !== null) {
        const s1 = parseInt(m.score1, 10);
        const s2 = parseInt(m.score2, 10);
        if (isNaN(s1) || isNaN(s2)) return;

        if (!stats[m.team1Id]) {
          const found = lmiData.teams.find(t => t.id === m.team1Id);
          if (found) stats[m.team1Id] = { team: found, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0 };
        }
        if (!stats[m.team2Id]) {
          const found = lmiData.teams.find(t => t.id === m.team2Id);
          if (found) stats[m.team2Id] = { team: found, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, dg: 0, pts: 0 };
        }

        if (stats[m.team1Id] && stats[m.team2Id]) {
          stats[m.team1Id].pj++;
          stats[m.team2Id].pj++;
          stats[m.team1Id].gf += s1;
          stats[m.team1Id].gc += s2;
          stats[m.team2Id].gf += s2;
          stats[m.team2Id].gc += s1;

          if (s1 > s2) {
            stats[m.team1Id].g++;
            stats[m.team1Id].pts += 3;
            stats[m.team2Id].p++;
          } else if (s1 === s2) {
            stats[m.team1Id].e++;
            stats[m.team1Id].pts += 1;
            stats[m.team2Id].e++;
            stats[m.team2Id].pts += 1;
          } else {
            stats[m.team2Id].g++;
            stats[m.team2Id].pts += 3;
            stats[m.team1Id].p++;
          }
        }
      }
    });
  });

  const list = Object.values(stats);
  list.forEach(item => {
    item.dg = item.gf - item.gc;
  });

  // Sort by PTS desc, DG desc, GF desc, Name asc
  list.sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts;
    if (b.dg !== a.dg) return b.dg - a.dg;
    if (b.gf !== a.gf) return b.gf - a.gf;
    return (a.team.name || '').localeCompare(b.team.name || '');
  });

  return list;
}

function renderWebStandings() {
  const tbody = document.getElementById('web-standings-tbody');
  if (!tbody) return;

  const standings = calculateStandings(currentWebDivision);
  if (standings.length === 0) {
    tbody.innerHTML = `<tr><td colspan="10" style="text-align: center; padding: 2rem; color: var(--text-muted);">No hay equipos configurados en esta división.</td></tr>`;
    return;
  }

  const isOro = currentWebDivision === 'oro';

  tbody.innerHTML = standings.map((item, idx) => {
    const pos = idx + 1;
    let posBadge = `<span style="display:inline-block; width:26px; height:26px; line-height:26px; text-align:center; border-radius:50%; font-weight:800; font-size:0.85rem; background:rgba(255,255,255,0.06); color:var(--text-muted);">${pos}</span>`;
    
    if (pos === 1) {
      posBadge = `<span style="display:inline-block; width:26px; height:26px; line-height:26px; text-align:center; border-radius:50%; font-weight:800; font-size:0.85rem; background:linear-gradient(135deg, #ffd700, #b8860b); color:#000; box-shadow:0 0 10px rgba(255,215,0,0.5);" title="Líder">${pos}</span>`;
    } else if (pos <= (isOro ? 3 : 4)) {
      posBadge = `<span style="display:inline-block; width:26px; height:26px; line-height:26px; text-align:center; border-radius:50%; font-weight:800; font-size:0.85rem; background:rgba(0, 168, 89, 0.2); border:1px solid var(--lmi-green); color:var(--lmi-green);">${pos}</span>`;
    }

    const dgFormatted = item.dg > 0 ? `+${item.dg}` : `${item.dg}`;
    const dgColor = item.dg > 0 ? 'var(--lmi-green)' : (item.dg < 0 ? '#ef4444' : 'var(--text-muted)');

    return `
      <tr style="border-bottom: 1px solid rgba(255,255,255,0.05); transition: background 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.03)'" onmouseout="this.style.background='transparent'">
        <td style="padding: 0.85rem 1rem; text-align: center;">${posBadge}</td>
        <td style="padding: 0.85rem 1rem; text-align: left;">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <img src="${escapeHTML(item.team.logo)}" alt="${escapeHTML(item.team.name)}" style="width: 28px; height: 28px; object-fit: contain; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));" onerror="this.src='Logos Equipos/default.png'">
            <span style="font-weight: 700; font-size: 0.95rem; color: var(--text-primary);">${escapeHTML(item.team.name)}</span>
          </div>
        </td>
        <td style="padding: 0.85rem 0.75rem; text-align: center; font-weight: 600; color: var(--text-secondary);">${item.pj}</td>
        <td style="padding: 0.85rem 0.75rem; text-align: center; font-weight: 600; color: var(--text-primary);">${item.g}</td>
        <td style="padding: 0.85rem 0.75rem; text-align: center; font-weight: 600; color: var(--text-secondary);">${item.e}</td>
        <td style="padding: 0.85rem 0.75rem; text-align: center; font-weight: 600; color: var(--text-secondary);">${item.p}</td>
        <td style="padding: 0.85rem 0.75rem; text-align: center; font-weight: 600; color: var(--text-secondary);">${item.gf}</td>
        <td style="padding: 0.85rem 0.75rem; text-align: center; font-weight: 600; color: var(--text-secondary);">${item.gc}</td>
        <td style="padding: 0.85rem 0.75rem; text-align: center; font-weight: 700; color: ${dgColor};">${dgFormatted}</td>
        <td style="padding: 0.85rem 1rem; text-align: center; font-weight: 900; font-size: 1.05rem; color: var(--lmi-gold); background: rgba(255,209,0,0.04);">${item.pts}</td>
      </tr>
    `;
  }).join('');
}

function populateWebJornadas() {
  const sel = document.getElementById('web-jornada-select');
  if (!sel) return;

  const rounds = (lmiData && lmiData.fixtures && lmiData.fixtures[currentWebDivision]) || [];
  if (rounds.length === 0) {
    sel.innerHTML = '<option value="">Sin Jornadas</option>';
    onWebJornadaSelectChange();
    return;
  }

  const prevValue = parseInt(sel.value, 10);
  sel.innerHTML = rounds.map(r => {
    const roundLabel = r.type === 'ida' ? 'Ida' : 'Vuelta';
    return `<option value="${r.jornada}">Jornada ${r.jornada} (${roundLabel})</option>`;
  }).join('');

  const jornadas = rounds.map(r => r.jornada);
  if (prevValue && jornadas.includes(prevValue)) {
    sel.value = prevValue;
  } else {
    sel.value = jornadas[0];
  }

  onWebJornadaSelectChange();
}

function onWebJornadaSelectChange() {
  const sel = document.getElementById('web-jornada-select');
  const grid = document.getElementById('web-jornada-matches-grid');
  const subTitle = document.getElementById('web-export-sub');
  if (!sel || !grid) return;

  const jornadaNum = parseInt(sel.value, 10);
  if (!jornadaNum) {
    grid.innerHTML = '<div style="grid-column: 1 / -1; text-align: center; color: var(--text-muted); padding: 2rem;">Selecciona una jornada</div>';
    return;
  }

  const rounds = (lmiData && lmiData.fixtures && lmiData.fixtures[currentWebDivision]) || [];
  const round = rounds.find(r => r.jornada === jornadaNum);
  const matches = round ? (round.matches || []) : [];

  const roundLabel = (round && round.type === 'vuelta') ? 'VUELTA' : 'IDA';
  if (subTitle) {
    subTitle.innerHTML = `DIVISIÓN ${currentWebDivision.toUpperCase()} &bull; JORNADA ${jornadaNum} (${roundLabel})`;
    subTitle.style.color = '#facc15';
    subTitle.style.fontWeight = '900';
  }

  if (matches.length === 0) {
    grid.innerHTML = '<div style="grid-column: 1 / -1; text-align: center; color: #94a3b8; padding: 2rem; font-weight: 700;">No hay partidos para esta jornada</div>';
    return;
  }

  grid.innerHTML = matches.map((m, idx) => {
    const t1 = (lmiData.teams || []).find(t => t.id === m.team1Id) || { name: m.team1Id, logo: 'Logos Equipos/default.png' };
    const t2 = (lmiData.teams || []).find(t => t.id === m.team2Id) || { name: m.team2Id, logo: 'Logos Equipos/default.png' };

    const isPlayed = m.played && m.score1 !== null && m.score2 !== null;
    const scoreDisplay = isPlayed 
      ? `<span style="font-size: 1.45rem; font-weight: 900; color: #fde047; letter-spacing: 2px;">${m.score1} - ${m.score2}</span>`
      : `<span style="font-size: 1.15rem; font-weight: 900; color: #ffffff; letter-spacing: 2px;">VS</span>`;

    const statusPill = isPlayed
      ? `<span style="font-size: 0.74rem; font-weight: 800; text-transform: uppercase; padding: 0.25rem 0.65rem; border-radius: 99px; background: rgba(16, 185, 129, 0.25); color: #4ade80; border: 1px solid #10b981; letter-spacing: 0.5px; text-shadow: 0 1px 2px rgba(0,0,0,0.5);">Finalizado</span>`
      : `<span style="font-size: 0.74rem; font-weight: 800; text-transform: uppercase; padding: 0.25rem 0.65rem; border-radius: 99px; background: rgba(245, 158, 11, 0.25); color: #fde047; border: 1px solid #f59e0b; letter-spacing: 0.5px; text-shadow: 0 1px 2px rgba(0,0,0,0.5);">Pendiente</span>`;

    const statsBtn = isPlayed
      ? `<span class="card-stats-btn" title="Clic para ver estadísticas del partido"><i class="fa-solid fa-chart-column"></i> Ficha</span>`
      : '';

    return `
      <div class="web-fixture-card" onclick="openMatchDetailsModal('${currentWebDivision}', ${jornadaNum}, '${m.id}')" title="Clic para ver detalles del partido">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.65rem;">
          <span style="font-size: 0.78rem; font-weight: 700; color: #cbd5e1; display: flex; align-items: center; gap: 0.4rem;">
            <i class="fa-solid fa-futbol" style="color: #facc15;"></i> Partido #${idx + 1}
          </span>
          <div style="display: flex; align-items: center; gap: 0.45rem;">
            ${statsBtn}
            ${statusPill}
          </div>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; gap: 0.75rem;">
          <!-- Local -->
          <div style="display: flex; align-items: center; gap: 0.65rem; min-width: 0;">
            <img src="${escapeHTML(t1.logo)}" alt="${escapeHTML(t1.name)}" style="width: 36px; height: 36px; object-fit: contain; flex-shrink: 0; filter: drop-shadow(0 2px 5px rgba(0,0,0,0.6));" onerror="this.src='Logos Equipos/default.png'">
            <span style="font-weight: 800; font-size: 0.95rem; color: #ffffff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${escapeHTML(t1.name)}">${escapeHTML(t1.name)}</span>
          </div>

          <!-- Marcador / VS -->
          <div style="text-align: center; min-width: 68px; padding: 0.38rem 0.75rem; background: #020617; border-radius: var(--radius-sm); border: 1px solid rgba(255,255,255,0.25);">
            ${scoreDisplay}
          </div>

          <!-- Visita -->
          <div style="display: flex; align-items: center; justify-content: flex-end; gap: 0.65rem; min-width: 0;">
            <span style="font-weight: 800; font-size: 0.95rem; color: #ffffff; text-align: right; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${escapeHTML(t2.name)}">${escapeHTML(t2.name)}</span>
            <img src="${escapeHTML(t2.logo)}" alt="${escapeHTML(t2.name)}" style="width: 36px; height: 36px; object-fit: contain; flex-shrink: 0; filter: drop-shadow(0 2px 5px rgba(0,0,0,0.6));" onerror="this.src='Logos Equipos/default.png'">
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Modal de Ficha Técnica / Estadísticas del Partido
function openMatchDetailsModal(division, jornadaNum, matchId) {
  const rounds = (lmiData && lmiData.fixtures && lmiData.fixtures[division]) || [];
  const round = rounds.find(r => r.jornada === jornadaNum);
  if (!round || !round.matches) return;

  const m = round.matches.find(match => match.id === matchId);
  if (!m) return;

  const t1 = (lmiData.teams || []).find(t => t.id === m.team1Id) || { name: m.team1Id, logo: 'Logos Equipos/default.png' };
  const t2 = (lmiData.teams || []).find(t => t.id === m.team2Id) || { name: m.team2Id, logo: 'Logos Equipos/default.png' };

  const isPlayed = m.played && m.score1 !== null && m.score2 !== null;

  // Badges
  const divBadge = document.getElementById('mm-badge-division');
  const jorBadge = document.getElementById('mm-badge-jornada');
  if (divBadge) divBadge.textContent = `DIVISIÓN ${division.toUpperCase()}`;
  if (jorBadge) jorBadge.textContent = `JORNADA ${jornadaNum}`;

  // Logos y Nombres
  const homeLogo = document.getElementById('mm-home-logo');
  const homeName = document.getElementById('mm-home-name');
  const awayLogo = document.getElementById('mm-away-logo');
  const awayName = document.getElementById('mm-away-name');
  if (homeLogo) homeLogo.src = t1.logo || 'Logos Equipos/default.png';
  if (homeName) homeName.textContent = t1.name;
  if (awayLogo) awayLogo.src = t2.logo || 'Logos Equipos/default.png';
  if (awayName) awayName.textContent = t2.name;

  // Marcador y estado
  const scoreDisp = document.getElementById('mm-score-display');
  const statusPill = document.getElementById('mm-status-pill');
  if (scoreDisp) scoreDisp.textContent = isPlayed ? `${m.score1} - ${m.score2}` : 'VS';
  if (statusPill) {
    statusPill.textContent = isPlayed ? 'FINALIZADO' : 'PENDIENTE';
    statusPill.style.background = isPlayed ? 'rgba(16, 185, 129, 0.2)' : 'rgba(245, 158, 11, 0.2)';
    statusPill.style.color = isPlayed ? '#4ade80' : '#fde047';
    statusPill.style.borderColor = isPlayed ? '#10b981' : '#f59e0b';
  }

  // Eventos de Goles y Asistencias
  const gridContainer = document.getElementById('mm-grid-container');
  const homeEventsCol = document.getElementById('mm-home-events-col');
  const awayEventsCol = document.getElementById('mm-away-events-col');
  const noEventsMsg = document.getElementById('mm-no-events-msg');

  const events = m.events || [];
  const homeEvents = events.filter(e => e.teamId === m.team1Id);
  const awayEvents = events.filter(e => e.teamId === m.team2Id);

  const renderTeamEvents = (teamEvents, teamName) => {
    const goals = teamEvents.filter(e => e.type === 'gol' || e.type === 'goal');
    const assists = teamEvents.filter(e => e.type === 'asistencia' || e.type === 'assist');

    let html = '';

    // Goles
    html += `
      <div>
        <div class="match-event-section-title" style="color: #60a5fa;">
          <span>⚽ Goles</span>
        </div>
    `;
    if (goals.length > 0) {
      goals.forEach(g => {
        html += `
          <div class="match-event-item">
            <span class="match-event-item-name">${escapeHTML(g.playerName)}</span>
            ${g.count > 1 ? `<span class="match-event-count-badge">${g.count} goles</span>` : ''}
          </div>
        `;
      });
    } else {
      html += `<div class="match-modal-empty-stat">Sin goles anotados</div>`;
    }
    html += `</div>`;

    // Asistencias
    html += `
      <div>
        <div class="match-event-section-title" style="color: #f43f5e;">
          <span>🎯 Asistencias</span>
        </div>
    `;
    if (assists.length > 0) {
      assists.forEach(a => {
        html += `
          <div class="match-event-item">
            <span class="match-event-item-name">${escapeHTML(a.playerName)}</span>
            ${a.count > 1 ? `<span class="match-event-count-badge" style="background: rgba(244,63,94,0.2); color: #fb7185; border-color: rgba(244,63,94,0.4);">${a.count} asist.</span>` : ''}
          </div>
        `;
      });
    } else {
      html += `<div class="match-modal-empty-stat">Sin asistencias registradas</div>`;
    }
    html += `</div>`;

    return html;
  };

  if (isPlayed) {
    if (events.length > 0) {
      if (gridContainer) gridContainer.style.display = 'grid';
      if (noEventsMsg) noEventsMsg.style.display = 'none';
      if (homeEventsCol) homeEventsCol.innerHTML = renderTeamEvents(homeEvents, t1.name);
      if (awayEventsCol) awayEventsCol.innerHTML = renderTeamEvents(awayEvents, t2.name);
    } else {
      if (gridContainer) gridContainer.style.display = 'none';
      if (noEventsMsg) {
        noEventsMsg.style.display = 'block';
        noEventsMsg.innerHTML = '<i class="fa-solid fa-circle-info" style="color: #facc15; margin-right: 0.4rem;"></i> Partido finalizado sin desglose individual de goleadores ni asistencias.';
      }
    }
  } else {
    if (gridContainer) gridContainer.style.display = 'none';
    if (noEventsMsg) {
      noEventsMsg.style.display = 'block';
      noEventsMsg.innerHTML = '<i class="fa-solid fa-clock" style="color: #fde047; margin-right: 0.4rem;"></i> Este partido aún no ha sido disputado.';
    }
  }

  const modal = document.getElementById('match-details-modal');
  if (modal) modal.style.display = 'flex';
}

function closeMatchDetailsModal() {
  const modal = document.getElementById('match-details-modal');
  if (modal) modal.style.display = 'none';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeMatchDetailsModal();
  }
});

// Window bindings
window.switchWebDivision = switchWebDivision;
window.renderWebStandings = renderWebStandings;
window.populateWebJornadas = populateWebJornadas;
window.onWebJornadaSelectChange = onWebJornadaSelectChange;
window.renderWebPosiciones = renderWebPosiciones;
window.openMatchDetailsModal = openMatchDetailsModal;
window.closeMatchDetailsModal = closeMatchDetailsModal;



