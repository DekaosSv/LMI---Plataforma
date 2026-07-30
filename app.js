// App Engine for Liga Master Internacional (LMI) - Temporada 9

let lmiData = null;
let currentNav = 'dashboard';
// Secure Cryptographic PIN Storage (SHA-256 hash of '28100703')
const ADMIN_PIN_HASH = 'b050b14c930ce375e7faac42d2403474bb1c00bf12986fdf9b83c2dca25c7394';

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

// Storage Management
function loadDataFromStorage() {
  try {
    localStorage.removeItem('lmi_league_t9_v10');
    localStorage.removeItem('lmi_league_t9_v12');
  } catch (e) {}

  lmiData = JSON.parse(JSON.stringify(INITIAL_LMI_DATA));

  const saved = localStorage.getItem('lmi_league_t9_v15');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed && Array.isArray(parsed.players) && parsed.players.length > 50) {
        lmiData = parsed;
      }
    } catch (e) {
      console.error("Error loading saved data", e);
    }
  }
}

function saveDataToStorage() {
  localStorage.setItem('lmi_league_t9_v15', JSON.stringify(lmiData));
}

// UI Initialization & Navigation
let renderedSections = { dashboard: true };
let currentSearchPageSize = 24;

function initUI() {
  renderDashboard();
  initTeamSelect();
  initRenovationSelect();
  initPlayerSearchUI();
  updateAdminUI();
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
  if (navId === 'stats' && !renderedSections.stats) {
    renderStats();
    renderedSections.stats = true;
  }
  if (navId === 'teams') {
    const sel = document.getElementById('team-select');
    if (sel && sel.value) loadTeamHub(sel.value);
  }
  if (navId === 'renovaciones') {
    const sel = document.getElementById('renovation-team-select');
    if (sel && sel.value) loadRenovationsForTeam(sel.value);
  }
  if (navId === 'buscador') {
    if (!renderedSections.buscador) {
      filterPlayersDatabase();
      renderedSections.buscador = true;
    }
  }
  if (navId === 'rules' && !renderedSections.rules) {
    renderRules();
    renderedSections.rules = true;
  }
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

  const topScorers = [...lmiData.players].sort((a, b) => b.goals - a.goals).slice(0, 10);
  const topAssists = [...lmiData.players].sort((a, b) => b.assists - a.assists).slice(0, 10);

  goleadoresContainer.innerHTML = topScorers.map((p, idx) => {
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
        <div class="stat-value">${p.goals} <span style="font-size: 0.75rem; color: var(--text-muted);">goles</span></div>
      </div>
    `;
  }).join('');

  asistenciasContainer.innerHTML = topAssists.map((p, idx) => {
    const team = lmiData.teams.find(t => t.id === p.teamId) || { name: 'Libre', logo: '' };
    return `
      <div class="leader-row">
        <div class="leader-info">
          <div class="player-avatar" style="border-color: var(--neon-cyan);">${idx + 1}</div>
          <img src="${team.logo}" class="team-logo" alt="${team.name}">
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
      const editBtn = isAdminLoggedIn ? `
        <button class="btn-secondary" style="padding: 0.15rem 0.35rem; font-size: 0.7rem; margin-right: 0.3rem; border-color: rgba(0, 229, 255, 0.3);" onclick="openEditPlayerModal('${p.id}')">
          <i class="fa-solid fa-pen-to-square" style="color: var(--neon-cyan);"></i>
        </button>
      ` : '';

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
          <td style="text-align: right; color: var(--neon-gold); font-weight: 600;">
            ${editBtn}$${((p.price || 5000000) / 1000000).toFixed(1)}M
          </td>
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
      <div style="background: rgba(0,0,0,0.3); padding: 0.85rem; border-radius: var(--radius-md);">
        <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Posición Asignada</div>
        <div style="font-family: var(--font-heading); font-size: 1.8rem; font-weight: 700; color: var(--neon-gold);">#${rank}</div>
      </div>
      <div style="background: rgba(0,0,0,0.3); padding: 0.85rem; border-radius: var(--radius-md);">
        <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Tasa de Renovación</div>
        <div style="font-family: var(--font-heading); font-size: 1.8rem; font-weight: 700; color: var(--neon-green);">${payPercent}</div>
      </div>
    </div>

    <h3 style="font-family: var(--font-heading); font-size: 1rem; color: var(--neon-cyan); margin-bottom: 0.8rem; border-top: 1px solid var(--border-color); padding-top: 1rem;">
      <i class="fa-solid fa-star"></i> Jugadores Destacados del Club
    </h3>

    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
      <!-- Máximo Goleador -->
      <div style="background: rgba(0, 255, 136, 0.08); border: 1px solid rgba(0, 255, 136, 0.3); border-radius: var(--radius-md); padding: 0.75rem 1rem; display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <div class="player-avatar" style="border-color: var(--neon-green); background: rgba(0,255,136,0.2); width: 42px; height: 42px;">
            <i class="fa-solid fa-futbol" style="color: var(--neon-green); font-size: 1.1rem;"></i>
          </div>
          <div>
            <div style="font-size: 0.65rem; text-transform: uppercase; color: var(--neon-green); font-weight: 700;">Máximo Goleador</div>
            <div style="font-weight: 700; font-size: 0.95rem;">${topScorer ? topScorer.name : 'Sin datos'}</div>
            <div style="font-size: 0.75rem; color: var(--text-muted);"><span class="pos-badge pos-${topScorer ? topScorer.position : 'MC'}">${topScorer ? topScorer.position : '-'}</span></div>
          </div>
        </div>
        <div style="font-family: var(--font-heading); font-size: 1.3rem; font-weight: 700; color: var(--neon-green);">
          ${topScorer ? topScorer.goals : 0} <span style="font-size: 0.75rem; color: var(--text-muted);">goles</span>
        </div>
      </div>

      <!-- Máximo Asistidor -->
      <div style="background: rgba(0, 229, 255, 0.08); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: var(--radius-md); padding: 0.75rem 1rem; display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <div class="player-avatar" style="border-color: var(--neon-cyan); background: rgba(0,229,255,0.2); width: 42px; height: 42px;">
            <i class="fa-solid fa-hands-clapping" style="color: var(--neon-cyan); font-size: 1.1rem;"></i>
          </div>
          <div>
            <div style="font-size: 0.65rem; text-transform: uppercase; color: var(--neon-cyan); font-weight: 700;">Máximo Asistidor</div>
            <div style="font-weight: 700; font-size: 0.95rem;">${topAssister ? topAssister.name : 'Sin datos'}</div>
            <div style="font-size: 0.75rem; color: var(--text-muted);"><span class="pos-badge pos-${topAssister ? topAssister.position : 'MC'}">${topAssister ? topAssister.position : '-'}</span></div>
          </div>
        </div>
        <div style="font-family: var(--font-heading); font-size: 1.3rem; font-weight: 700; color: var(--neon-cyan);">
          ${topAssister ? topAssister.assists : 0} <span style="font-size: 0.75rem; color: var(--text-muted);">asist.</span>
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
    <span style="font-size: 0.9rem; color: var(--text-muted);">Posición #${rank} en Liga:</span>
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
      const priceVal = (p.price || 5000000) / 1000000;
      const isDisabled = hasActiveLegend && !p.isLegend;

      return `
        <tr>
          <td><span class="pos-badge pos-${p.position}">${p.position}</span></td>
          <td>
            <div style="display: flex; align-items: center; justify-content: space-between; gap: 0.5rem;">
              <span style="font-weight: 600;">${p.name}</span>
              <div style="display: flex; gap: 0.3rem;">
                <a href="https://www.transfermarkt.es/schnellsuche/ergebnis/schnellsuche?query=${encodeURIComponent(p.name)}" target="_blank" class="ext-link-btn ext-tm">TM</a>
                <a href="${getFichajesUrl(p.name)}" target="_blank" class="ext-link-btn ext-fcom">F.COM</a>
              </div>
            </div>
          </td>
          <td style="text-align: center;">
            <input type="checkbox" ${p.isLegend ? 'checked' : ''} ${isDisabled ? 'disabled' : ''} onchange="togglePlayerLegend('${p.id}', this.checked, '${teamId}')" title="${isDisabled ? 'Solo se permite 1 Leyenda o Épico por club' : 'Marcar si es Leyenda o Épico'}">
          </td>
          <td style="text-align: right;">
            <input type="number" class="form-control" style="width: 100px; display: inline-block; padding: 0.2rem 0.4rem; text-align: right;" value="${priceVal}" step="0.5" min="1" onchange="updatePlayerRenewalPrice('${p.id}', this.value)"> M
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
  if (isNaN(val) || val <= 0.6) val = 1.0; // Rule: sueldos de 600k o menores se cuentan como 1M
  
  const player = lmiData.players.find(p => p.id === playerId);
  if (player) {
    player.price = val * 1000000;
    saveDataToStorage();
    const sel = document.getElementById('renovation-team-select');
    if (sel) recalculateRenovationTotals(sel.value);
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
    let pVal = (p.price || 5000000) / 1000000;
    if (pVal <= 0.6) pVal = 1.0;
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
  teamPlayers.forEach((p, idx) => {
    let pVal = (p.price || 5000000) / 1000000;
    if (pVal <= 0.6) pVal = 1.0;
    grossTotal += pVal;
    summary += `${idx + 1}. [${p.position}] ${p.name} - $${pVal.toFixed(1)}M ${p.isLegend ? '(Leyenda/Épico)' : ''}\n`;
  });

  const payFactor = rank <= 5 ? 0.5 : (rank <= 10 ? 0.75 : 1.0);
  const finalTotal = grossTotal * payFactor;

  summary += `--------------------------------------------------\n`;
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

// Admin Operations
let isAdminLoggedIn = false;

function openAdminModal() {
  const modal = document.getElementById('modal-admin-login');
  const loginForm = modal.querySelector('form');
  const modalText = modal.querySelector('p');
  const dbTools = document.getElementById('admin-db-tools');

  if (isAdminLoggedIn) {
    if (loginForm) loginForm.style.display = 'none';
    if (modalText) modalText.innerHTML = '<strong>Modo Administrador Activo</strong>. Puedes realizar copias de seguridad (Exportar) o subir tu base de datos (Importar).';
    if (dbTools) dbTools.style.display = 'block';
  } else {
    if (loginForm) loginForm.style.display = 'block';
    if (modalText) modalText.innerHTML = 'Introduce el PIN de administrador para habilitar el modo edición.';
    if (dbTools) dbTools.style.display = 'none';
  }
  
  modal.classList.add('active');
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove('active');
}

async function handleAdminLogin(e) {
  e.preventDefault();
  const inputInput = document.getElementById('admin-pin-input');
  const inputVal = inputInput ? inputInput.value.trim() : '';
  
  if (!inputVal) return;

  const hashedInput = await sha256(inputVal);

  if (hashedInput === ADMIN_PIN_HASH) {
    isAdminLoggedIn = true;
    if (inputInput) inputInput.value = '';
    updateAdminUI();
    showToast("¡Modo Administrador activado con éxito!", "fa-circle-check");
    openAdminModal();
  } else {
    showToast("PIN incorrecto. Intenta de nuevo.", "fa-triangle-exclamation");
  }
}

function updateAdminUI() {
  const btn = document.querySelector('.admin-btn');
  const dbTools = document.getElementById('admin-db-tools');
  if (btn) {
    if (isAdminLoggedIn) {
      btn.innerHTML = `<i class="fa-solid fa-unlock"></i> Modo Admin`;
      btn.style.background = 'var(--neon-green)';
      btn.style.color = '#000';
      btn.style.borderColor = 'var(--neon-green)';
    }
  }
  if (dbTools) {
    dbTools.style.display = isAdminLoggedIn ? 'block' : 'none';
  }

  if (currentNav === 'teams') {
    const sel = document.getElementById('team-select');
    if (sel && sel.value) loadTeamHub(sel.value);
  }
}

// Database Export & Import Tools
function exportDatabaseJSON() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(lmiData, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `lmi_t9_database_backup_${new Date().toISOString().split('T')[0]}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast("Base de datos exportada en archivo JSON", "fa-download");
}

function triggerImportJSON() {
  document.getElementById('import-json-file').click();
}

function importDatabaseJSON(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const parsed = JSON.parse(e.target.result);
      if (parsed.teams && parsed.players) {
        lmiData = parsed;
        saveDataToStorage();
        initUI();
        showToast("¡Base de datos importada exitosamente!", "fa-circle-check");
        closeModal('modal-admin-login');
      } else {
        showToast("El archivo JSON no tiene la estructura válida de la LMI T9", "fa-triangle-exclamation");
      }
    } catch (err) {
      showToast("Error al leer el archivo JSON", "fa-triangle-exclamation");
    }
  };
  reader.readAsText(file);
}

function resetToInitialData() {
  if (confirm("¿Estás seguro de restablecer todos los datos a la configuración inicial de fábrica? Se borrarán los cambios locales.")) {
    localStorage.removeItem('lmi_league_t9_v12');
    localStorage.removeItem('lmi_league_t9_v10');
    loadDataFromStorage();
    initUI();
    showToast("Datos restablecidos a la configuración de fábrica", "fa-rotate-left");
    closeModal('modal-admin-login');
  }
}

// Customization Team Modal (Admin sets league rank here)
function openEditTeamModal() {
  if (!isAdminLoggedIn) {
    openAdminModal();
    return;
  }
  const sel = document.getElementById('team-select');
  if (!sel || !sel.value) return;

  const team = lmiData.teams.find(t => t.id === sel.value);
  if (!team) return;

  document.getElementById('modal-team-id').value = team.id;
  document.getElementById('modal-team-name').value = team.name;
  document.getElementById('modal-team-rank').value = team.leagueRank || 1;
  document.getElementById('modal-team-stadium').value = team.stadium;
  document.getElementById('modal-team-manager').value = team.manager;
  document.getElementById('modal-team-budget').value = team.budget || 100000000;

  document.getElementById('modal-edit-team').classList.add('active');
}

function handleSaveTeamCustomization(e) {
  e.preventDefault();
  const id = document.getElementById('modal-team-id').value;
  const team = lmiData.teams.find(t => t.id === id);
  if (!team) return;

  team.name = document.getElementById('modal-team-name').value;
  team.leagueRank = parseInt(document.getElementById('modal-team-rank').value);
  team.stadium = document.getElementById('modal-team-stadium').value;
  team.manager = document.getElementById('modal-team-manager').value;
  team.budget = parseFloat(document.getElementById('modal-team-budget').value);

  saveDataToStorage();
  closeModal('modal-edit-team');
  showToast("¡Personalización y posición del club guardadas!", "fa-circle-check");

  loadTeamHub(id);
  initRenovationSelect();
}

// Edit Player Modal Operations (13 official positions, no media/overall)
function openEditPlayerModal(playerId) {
  if (!isAdminLoggedIn) {
    openAdminModal();
    return;
  }
  const player = lmiData.players.find(p => p.id === playerId);
  if (!player) return;

  document.getElementById('modal-player-id').value = player.id;
  document.getElementById('modal-player-name').value = player.name;
  document.getElementById('modal-player-position').value = player.position || 'MC';
  document.getElementById('modal-player-goals').value = player.goals || 0;
  document.getElementById('modal-player-assists').value = player.assists || 0;
  document.getElementById('modal-player-price').value = player.price || 5000000;

  document.getElementById('modal-edit-player').classList.add('active');
}

function handleSavePlayer(e) {
  e.preventDefault();
  const id = document.getElementById('modal-player-id').value;
  const player = lmiData.players.find(p => p.id === id);
  if (!player) return;

  player.name = document.getElementById('modal-player-name').value;
  player.position = document.getElementById('modal-player-position').value;
  player.goals = parseInt(document.getElementById('modal-player-goals').value);
  player.assists = parseInt(document.getElementById('modal-player-assists').value);
  player.price = parseFloat(document.getElementById('modal-player-price').value);

  saveDataToStorage();
  closeModal('modal-edit-player');
  showToast(`¡Jugador ${player.name} actualizado!`, "fa-circle-check");

  loadTeamHub(player.teamId);
  renderStats();
  renderDashboard();
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
    return;
  }

  const sliced = filtered.slice(0, currentSearchPageSize);

  let html = sliced.map(p => {
    const team = lmiData.teams.find(t => t.id === p.teamId) || { name: 'Libre', logo: 'Logos Equipos/Real_Madrid.png' };
    const priceVal = (p.price || 5000000) / 1000000;

    return `
      <div class="card" style="margin-bottom: 0; background: rgba(18, 26, 43, 0.7); border-color: rgba(255,255,255,0.08); transition: transform 0.2s, border-color 0.2s;">
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

        <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 0.75rem; border-top: 1px solid rgba(255,255,255,0.08);">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <img src="${team.logo}" alt="${team.name}" loading="lazy" style="width: 24px; height: 24px; object-fit: contain;">
            <span style="font-size: 0.85rem; font-weight: 600; color: var(--text-muted);">${team.name}</span>
          </div>

          <div style="font-size: 0.8rem; text-align: right;">
            <span style="color: var(--neon-green); font-weight: 700;">${p.goals}G</span> &bull; 
            <span style="color: var(--neon-cyan); font-weight: 700;">${p.assists}A</span>
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
