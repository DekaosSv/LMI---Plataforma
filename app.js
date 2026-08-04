// Motor de la Aplicación para la Liga Master Internacional (LMI) - Temporada 9

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
        { "fase": "Cuartos 1", "team1": "Bayern Leverkusen", "score1": "2", "team2": "Real Madrid", "score2": "1", "estado": "Finalizado" },
        { "fase": "Cuartos 2", "team1": "Como 1907", "score1": "0", "team2": "Wrexham", "score2": "1", "estado": "Finalizado" },
        { "fase": "Cuartos 3", "team1": "Inter de Milan", "score1": "2", "team2": "AC Milan", "score2": "0", "estado": "Finalizado" },
        { "fase": "Cuartos 4", "team1": "Bayern Leverkusen", "score1": "1", "team2": "Arsenal", "score2": "3", "estado": "Finalizado" },
        { "fase": "Semifinal 1", "team1": "Bayern Leverkusen", "score1": "1", "team2": "Wrexham", "score2": "0", "estado": "Finalizado" },
        { "fase": "Semifinal 2", "team1": "Inter de Milan", "score1": "2", "team2": "Arsenal", "score2": "0", "estado": "Finalizado" },
        { "fase": "Final", "team1": "Inter de Milan", "score1": "", "team2": "Arsenal", "score2": "", "estado": "Por Jugar" }
      ];
    }
    
    // Set default UEFA Champions League bracket if missing
    if (!lmiData.championsLeagueMatches) {
      lmiData.championsLeagueMatches = [
        { "fase": "Cuartos 1", "team1": "FC Barcelona", "score1": "2", "team2": "Real Madrid", "score2": "1", "estado": "Finalizado" },
        { "fase": "Cuartos 2", "team1": "AC Milan", "score1": "0", "team2": "Inter de Milan", "score2": "3", "estado": "Finalizado" },
        { "fase": "Cuartos 3", "team1": "Como 1907", "score1": "2", "team2": "Bayern Leverkusen", "score2": "1", "estado": "Finalizado" },
        { "fase": "Cuartos 4", "team1": "Arsenal", "score1": "1 (2)", "team2": "PSG", "score2": "1 (4)", "estado": "Finalizado" },
        { "fase": "Semifinal 1", "team1": "FC Barcelona", "score1": "1", "team2": "Inter de Milan", "score2": "3", "estado": "Finalizado" },
        { "fase": "Semifinal 2", "team1": "Como 1907", "score1": "2", "team2": "PSG", "score2": "0", "estado": "Finalizado" },
        { "fase": "Final", "team1": "Inter de Milan", "score1": "", "team2": "Como 1907", "score2": "", "estado": "Por Jugar" }
      ];
    }
  } else {
    console.error("INITIAL_LMI_DATA is not defined!");
  }
}

function saveDataToStorage() {
  localStorage.setItem('lmi_league_t9_v20', JSON.stringify(lmiData));
}

// UI Initialization & Navigation
let currentSearchPageSize = 24;

function initUI() {
  renderDashboard();
  renderStats();
  initTeamSelect();
  initRenovationSelect();
  initPlayerSearchUI();
  renderRules();
  
  // Render direct elimination brackets
  renderBracket('copa-estelar-bracket', lmiData.copaEstelarMatches);
  renderBracket('uefa-champions-bracket', lmiData.championsLeagueMatches);


}

function switchNav(navId) {
  currentNav = navId;
  document.querySelectorAll('.nav-link').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.page-section').forEach(sec => sec.classList.remove('active'));

  const activeBtn = document.querySelector(`.nav-link[onclick="switchNav('${navId}')"]`);
  if (activeBtn) activeBtn.classList.add('active');

  const activeSec = document.getElementById(`sec-${navId}`);
  if (activeSec) activeSec.classList.add('active');

  if (navId === 'dashboard') renderDashboard();
  if (navId === 'stats') renderStats();
  if (navId === 'teams') {
    const sel = document.getElementById('team-select');
    if (sel && sel.value) loadTeamHub(sel.value);
  }
  if (navId === 'renovaciones') {
    const sel = document.getElementById('renovation-team-select');
    if (sel && sel.value) loadRenovationsForTeam(sel.value);
  }
  if (navId === 'buscador') filterPlayersDatabase();
  if (navId === 'rules') renderRules();
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
  let payPercent = "100%";
  if (rank <= 5) payPercent = "50%";
  else if (rank <= 10) payPercent = "75%";

  const topScorer = teamPlayers.length > 0 ? [...teamPlayers].sort((a,b) => b.goals - a.goals)[0] : null;
  const topAssister = teamPlayers.length > 0 ? [...teamPlayers].sort((a,b) => b.assists - a.assists)[0] : null;

  statsBox.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; text-align: center; margin-bottom: 1.25rem;">
      <div style="background: var(--lmi-blue); border: 1px solid var(--lmi-blue); padding: 0.85rem; border-radius: var(--radius-md); color: #ffffff; box-shadow: var(--shadow-card);">
        <div style="font-size: 0.75rem; color: rgba(255,255,255,0.8); text-transform: uppercase; font-weight: 700; letter-spacing: 0.5px;">Posición Asignada</div>
        <div style="font-family: var(--font-heading); font-size: 1.8rem; font-weight: 800; color: var(--neon-gold); margin-top: 0.25rem;">#${rank}</div>
      </div>
      <div style="background: var(--lmi-blue); border: 1px solid var(--lmi-blue); padding: 0.85rem; border-radius: var(--radius-md); color: #ffffff; box-shadow: var(--shadow-card);">
        <div style="font-size: 0.75rem; color: rgba(255,255,255,0.8); text-transform: uppercase; font-weight: 700; letter-spacing: 0.5px;">Tasa de Renovación</div>
        <div style="font-family: var(--font-heading); font-size: 1.8rem; font-weight: 800; color: var(--neon-green); margin-top: 0.25rem;">${payPercent}</div>
      </div>
    </div>

    <h3 style="font-family: var(--font-heading); font-size: 1rem; color: var(--lmi-blue); margin-bottom: 0.8rem; border-top: 1px solid var(--border-color); padding-top: 1rem;">
      <i class="fa-solid fa-star"></i> Jugadores Destacados del Club
    </h3>

    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <!-- Máximo Goleador -->
      <div style="display: flex; flex-direction: column;">
        <!-- Detached Photo Container -->
        <div style="background: rgba(255, 255, 255, 0.9); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 0.75rem; text-align: center; margin-bottom: 0.4rem; display: flex; flex-direction: column; align-items: center; box-shadow: var(--shadow-card);">
          <div style="position: relative; width: 70px; height: 70px; border-radius: 50%; overflow: hidden; border: 3px solid var(--lmi-green); background: #f8fafc; display: flex; align-items: center; justify-content: center;">
            <img src="Imagenes/Jugadores/${topScorer ? normalizeSearchString(topScorer.name) : 'none'}.png" 
                 onerror="this.src='Imagenes/lmi logo original.jpg';" 
                 style="width: 100%; height: 100%; object-fit: cover;" 
                 alt="${topScorer ? topScorer.name : 'Ejemplo'}">
          </div>
          <div style="margin-top: 0.4rem; font-size: 0.7rem; font-weight: 700; color: var(--lmi-green); text-transform: uppercase; letter-spacing: 0.5px;">Foto Oficial</div>
        </div>

        <!-- Detail Card -->
        <div style="background: rgba(0, 168, 89, 0.05); border: 1px solid rgba(0, 168, 89, 0.15); border-radius: var(--radius-md); padding: 0.75rem 1rem; display: flex; align-items: center; justify-content: space-between; gap: 1rem;">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <div class="player-avatar" style="border-color: var(--lmi-green); background: rgba(0,168,89,0.15); width: 42px; height: 42px; display: flex; align-items: center; justify-content: center; border-radius: 50%; border: 2px solid;">
              <i class="fa-solid fa-futbol" style="color: var(--lmi-green); font-size: 1.1rem;"></i>
            </div>
            <div>
              <div style="font-size: 0.65rem; text-transform: uppercase; color: var(--lmi-green); font-weight: 700; letter-spacing: 0.5px;">Máximo Goleador</div>
              <div style="font-weight: 700; font-size: 0.95rem; color: var(--text-primary);">${topScorer ? topScorer.name : 'Sin datos'}</div>
              <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.15rem;"><span class="pos-badge pos-${topScorer ? topScorer.position : 'MC'}">${topScorer ? topScorer.position : '-'}</span></div>
            </div>
          </div>
          <div style="font-family: var(--font-heading); font-size: 1.3rem; font-weight: 700; color: var(--lmi-green); flex-shrink: 0;">
            ${topScorer ? topScorer.goals : 0} <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600;">goles</span>
          </div>
        </div>
      </div>

      <!-- Máximo Asistidor -->
      <div style="display: flex; flex-direction: column;">
        <!-- Detached Photo Container -->
        <div style="background: rgba(255, 255, 255, 0.9); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 0.75rem; text-align: center; margin-bottom: 0.4rem; display: flex; flex-direction: column; align-items: center; box-shadow: var(--shadow-card);">
          <div style="position: relative; width: 70px; height: 70px; border-radius: 50%; overflow: hidden; border: 3px solid var(--lmi-blue); background: #f8fafc; display: flex; align-items: center; justify-content: center;">
            <img src="Imagenes/Jugadores/${topAssister ? normalizeSearchString(topAssister.name) : 'none'}.png" 
                 onerror="this.src='Imagenes/lmi logo original.jpg';" 
                 style="width: 100%; height: 100%; object-fit: cover;" 
                 alt="${topAssister ? topAssister.name : 'Ejemplo'}">
          </div>
          <div style="margin-top: 0.4rem; font-size: 0.7rem; font-weight: 700; color: var(--lmi-blue); text-transform: uppercase; letter-spacing: 0.5px;">Foto Oficial</div>
        </div>

        <!-- Detail Card -->
        <div style="background: rgba(0, 51, 160, 0.05); border: 1px solid rgba(0, 51, 160, 0.15); border-radius: var(--radius-md); padding: 0.75rem 1rem; display: flex; align-items: center; justify-content: space-between; gap: 1rem;">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <div class="player-avatar" style="border-color: var(--lmi-blue); background: rgba(0,51,160,0.15); width: 42px; height: 42px; display: flex; align-items: center; justify-content: center; border-radius: 50%; border: 2px solid;">
              <i class="fa-solid fa-hands-clapping" style="color: var(--lmi-blue); font-size: 1.1rem;"></i>
            </div>
            <div>
              <div style="font-size: 0.65rem; text-transform: uppercase; color: var(--lmi-blue); font-weight: 700; letter-spacing: 0.5px;">Máximo Asistidor</div>
              <div style="font-weight: 700; font-size: 0.95rem; color: var(--text-primary);">${topAssister ? topAssister.name : 'Sin datos'}</div>
              <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.15rem;"><span class="pos-badge pos-${topAssister ? topAssister.position : 'MC'}">${topAssister ? topAssister.position : '-'}</span></div>
            </div>
          </div>
          <div style="font-family: var(--font-heading); font-size: 1.3rem; font-weight: 700; color: var(--lmi-blue); flex-shrink: 0;">
            ${topAssister ? topAssister.assists : 0} <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600;">asist.</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

// RENOVACIONES TEMPORADA 9 ENGINE
function initRenovationSelect() {
  const sel = document.getElementById('renovation-team-select');
  if (!sel) return;
  sel.innerHTML = lmiData.teams.map(t => `<option value="${t.id}">${t.name} (Posición #${t.leagueRank || 1})</option>`).join('');
  if (lmiData.teams.length > 0) {
    loadRenovationsForTeam(lmiData.teams[0].id);
  }
}

function loadRenovationsForTeam(teamId) {
  const team = lmiData.teams.find(t => t.id === teamId);
  if (!team) return;

  const rank = team.leagueRank || 1;
  let payFactor = 1.0;
  let pillClass = "discount-100";
  let payPercentText = "Pagan 100% de la Renovación";

  if (rank >= 1 && rank <= 5) {
    payFactor = 0.50;
    pillClass = "discount-50";
    payPercentText = "Pagan 50% (Posición 1 - 5)";
  } else if (rank >= 6 && rank <= 10) {
    payFactor = 0.75;
    pillClass = "discount-75";
    payPercentText = "Pagan 75% (Posición 6 - 10)";
  } else {
    payFactor = 1.00;
    pillClass = "discount-100";
    payPercentText = "Pagan 100% (Posición 11 - 16)";
  }

  // Render Discount Badge
  const badgeContainer = document.getElementById('renovation-discount-badge');
  badgeContainer.innerHTML = `
    <span style="font-size: 0.9rem; color: rgba(255, 255, 255, 0.85);">Posición #${rank} en Liga:</span>
    <span class="discount-pill ${pillClass}">
      <i class="fa-solid fa-percent"></i> ${payPercentText}
    </span>
  `;

  // Render Players Renewal Table
  const tbody = document.getElementById('renovation-tbody');
  const teamPlayers = lmiData.players.filter(p => p.teamId === teamId);

  // Check if team already has 1 selected legend
  const hasActiveLegend = teamPlayers.some(p => p.isLegend);

  if (!teamPlayers || teamPlayers.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; color: var(--text-muted);">Sin jugadores registrados en este club.</td></tr>`;
  } else {
    tbody.innerHTML = teamPlayers.map(p => {
      const priceVal = (p.price !== undefined && p.price !== null) ? p.price / 1000000 : 5;
      const isDisabled = hasActiveLegend && !p.isLegend;
      const isNotRenewed = priceVal === 0;

      return `
        <tr style="${isNotRenewed ? 'opacity: 0.7; background: rgba(231, 76, 60, 0.08);' : ''}">
          <td><span class="pos-badge pos-${p.position}">${p.position}</span></td>
          <td>
            <div style="display: flex; align-items: center; justify-content: space-between; gap: 0.5rem;">
              <div style="display: flex; align-items: center; gap: 0.5rem;">
                <span style="font-weight: 600; ${isNotRenewed ? 'text-decoration: line-through; color: var(--text-muted);' : ''}">${p.name}</span>
                ${isNotRenewed ? '<span class="badge" style="background: rgba(231, 76, 60, 0.2); color: #ff6b6b; border: 1px solid rgba(231, 76, 60, 0.4); font-size: 0.7rem; padding: 0.15rem 0.4rem; border-radius: 4px;">No Renovado</span>' : ''}
              </div>
              <div style="display: flex; gap: 0.3rem;">
                <a href="${getFichajesUrl(p.name)}" target="_blank" class="ext-link-btn ext-fcom">F.COM</a>
              </div>
            </div>
          </td>
          <td style="text-align: center;">
            <input type="checkbox" ${p.isLegend ? 'checked' : ''} ${isDisabled ? 'disabled' : ''} onchange="togglePlayerLegend('${p.id}', this.checked, '${teamId}')" title="${isDisabled ? 'Solo se permite 1 Leyenda o Épico por club' : 'Marcar si es Leyenda o Épico'}">
          </td>
          <td style="text-align: right;">
            <input type="number" class="form-control" style="width: 100px; display: inline-block; padding: 0.2rem 0.4rem; text-align: right;" value="${priceVal}" step="0.5" min="0" onchange="updatePlayerRenewalPrice('${p.id}', this.value)"> M
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

function updatePlayerRenewalPrice(playerId, newVal) {
  let val = parseFloat(newVal);
  if (isNaN(val) || val < 0) val = 1.0;
  else if (val > 0 && val <= 0.6) val = 1.0; // Rule: sueldos mayores a 0 y menores/iguales a 600k se cuentan como 1M
  
  const player = lmiData.players.find(p => p.id === playerId);
  if (player) {
    player.price = val * 1000000;
    saveDataToStorage();
    const sel = document.getElementById('renovation-team-select');
    if (sel && sel.value) loadRenovationsForTeam(sel.value);
  }
}

function togglePlayerLegend(playerId, isChecked, teamId) {
  const player = lmiData.players.find(p => p.id === playerId);
  if (!player) return;

  if (isChecked) {
    const existingLegend = lmiData.players.find(p => p.teamId === teamId && p.isLegend && p.id !== playerId);
    if (existingLegend) {
      showToast(`Cada equipo solo puede tener 1 Leyenda o Épico (${existingLegend.name} ya está marcado).`, "fa-triangle-exclamation");
      if (teamId) loadRenovationsForTeam(teamId);
      return;
    }
  }

  player.isLegend = isChecked;
  saveDataToStorage();
  if (teamId) loadRenovationsForTeam(teamId);
}

function recalculateRenovationTotals(teamId) {
  const team = lmiData.teams.find(t => t.id === teamId);
  if (!team) return;

  const rank = team.leagueRank || 1;
  let payFactor = 1.0;
  if (rank <= 5) payFactor = 0.50;
  else if (rank <= 10) payFactor = 0.75;

  const teamPlayers = lmiData.players.filter(p => p.teamId === teamId);
  let grossTotal = 0;

  teamPlayers.forEach(p => {
    let pVal = (p.price !== undefined && p.price !== null) ? p.price / 1000000 : 5.0;
    if (pVal > 0 && pVal <= 0.6) pVal = 1.0;
    grossTotal += pVal;
  });

  const finalTotal = grossTotal * payFactor;

  document.getElementById('renovation-subtotal').innerText = `$${grossTotal.toFixed(1)}M USD`;
  document.getElementById('renovation-percent-label').innerText = `${(payFactor * 100).toFixed(0)}% (Posición #${rank})`;
  document.getElementById('renovation-total-final').innerText = `$${finalTotal.toFixed(2)}M USD`;
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

  const rank = team.leagueRank || 1;
  let payPercentText = "100%";
  if (rank <= 5) payPercentText = "50%";
  else if (rank <= 10) payPercentText = "75%";

  const teamPlayers = lmiData.players.filter(p => p.teamId === sel.value);
  let summary = `📋 INFORME DE RENOVACIONES - TEMPORADA 9\n`;
  summary += `Club: ${team.name}\n`;
  summary += `Posición Oficial en Liga: #${rank} (${payPercentText} de pago)\n`;
  summary += `--------------------------------------------------\n`;
  
  let grossTotal = 0;
  let renewedCount = 0;
  let nonRenewedCount = 0;

  teamPlayers.forEach((p, idx) => {
    let pVal = (p.price !== undefined && p.price !== null) ? p.price / 1000000 : 5.0;
    if (pVal > 0 && pVal <= 0.6) pVal = 1.0;

    if (pVal === 0) {
      nonRenewedCount++;
      summary += `${idx + 1}. [${p.position}] ${p.name} - NO RENOVADO ($0M)${p.isLegend ? ' (Leyenda/Épico)' : ''}\n`;
    } else {
      renewedCount++;
      grossTotal += pVal;
      summary += `${idx + 1}. [${p.position}] ${p.name} - $${pVal.toFixed(1)}M${p.isLegend ? ' (Leyenda/Épico)' : ''}\n`;
    }
  });

  const payFactor = rank <= 5 ? 0.5 : (rank <= 10 ? 0.75 : 1.0);
  const finalTotal = grossTotal * payFactor;

  summary += `--------------------------------------------------\n`;
  if (nonRenewedCount > 0) {
    summary += `Jugadores Renovados: ${renewedCount} | No Renovados: ${nonRenewedCount}\n`;
  }
  summary += `Subtotal Bruto: $${grossTotal.toFixed(1)}M USD\n`;
  summary += `Porcentaje Aplicado: ${payPercentText}\n`;
  summary += `TOTAL A PAGAR: $${finalTotal.toFixed(2)}M USD\n`;

  if (team.legendChangeNote) summary += `\n📌 Cambio Leyenda: ${team.legendChangeNote}\n`;
  if (team.legendRemoveNote) summary += `📌 Elimino Leyenda: ${team.legendRemoveNote}\n`;

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
