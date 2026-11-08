/**
 * =========================================================================
 * LMI RULETA CLOUD BRIDGE (Google Apps Script)
 * =========================================================================
 * Este script actúa como el servidor backend gratuito y 24/7 de la Ruleta LMI.
 * Permite que los DTs de cualquier club giren la ruleta desde sus casas en GitHub Pages.
 * 
 * ¿QUÉ HACE ESTE SCRIPT?
 * 1. Recibe la petición del DT con su Ticket Anti-Trampas (ej: CHE-PL-8921).
 * 2. Verifica en GitHub si el ticket existe y si está DISPONIBLE (si ya fue usado, lo rechaza).
 * 3. Selecciona el premio matemáticamente en el servidor de Google (imposible de alterar con F12).
 * 4. Quema el ticket (cambia su estado a USADO).
 * 5. Descuenta el costo del tiro e impacta el premio en el presupuesto del club.
 * 6. Hace un commit automático en GitHub modificando 'data.js' (recompila GitHub Pages).
 * 7. Envía notificación instantánea con formato Markdown a tu Telegram personal.
 * 8. Devuelve la casilla ganadora a la ruleta para que gire en pantalla.
 * 
 * INSTRUCCIONES DE INSTALACIÓN EN 3 MINUTOS:
 * 1. Entra a https://script.google.com/ con tu cuenta de Google y pulsa "Nuevo proyecto".
 * 2. Borra todo el código que aparezca y pega este archivo completo.
 * 3. En la constante CONFIG abajo, coloca tu GITHUB_TOKEN (Personal Access Token con permisos de repo).
 * 4. Haz clic en "Implementar" (arriba a la derecha) -> "Nueva implementación".
 * 5. Tipo: "Aplicación web".
 * 6. "Quién tiene acceso": SELECCIONA "Cualquier usuario" (Anyone).
 * 7. Pulsa "Implementar", autoriza los permisos y copia la URL que termina en /exec.
 * 8. Pega esa URL en el Admin Hub de LMI en la sección "Ruleta de la Fortuna -> Webhook URL".
 * ¡Listo! El sistema funcionará 24/7 sin necesidad de dejar tu PC encendida.
 */

const CONFIG = {
  // Repositorio de GitHub
  GITHUB_REPO: "DekaosSv/LMI---Plataforma",
  GITHUB_BRANCH: "main",
  GITHUB_FILE_PATH: "data.js",

  // Tu GitHub Personal Access Token (PAT).
  // Se genera en: GitHub -> Settings -> Developer settings -> Personal access tokens -> Tokens (classic) -> Generar con scope 'repo'.
  GITHUB_TOKEN: "PEGA_AQUI_TU_GITHUB_PAT",

  // Credenciales Telegram Sentinel
  TELEGRAM_BOT_TOKEN: "PEGA_AQUI_TU_TELEGRAM_BOT_TOKEN",
  TELEGRAM_CHAT_ID: "PEGA_AQUI_TU_TELEGRAM_CHAT_ID"
};

function doPost(e) {
  try {
    const rawData = e.postData ? e.postData.contents : "";
    const payload = JSON.parse(rawData);

    if (payload.action === "spin") {
      const result = handleSpin(payload);
      return ContentService.createTextOutput(JSON.stringify(result))
        .setMimeType(ContentService.MimeType.JSON);
    }

    return ContentService.createTextOutput(JSON.stringify({ success: false, message: "Acción no reconocida" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({ status: "online", service: "LMI Ruleta Bridge" }))
    .setMimeType(ContentService.MimeType.JSON);
}

function handleSpin(payload) {
  const ticketCode = (payload.ticket || "").trim().toUpperCase();
  const clubId = payload.clubId;
  const division = (payload.division || "oro").toLowerCase();

  // 1. Obtener data.js desde GitHub API
  const ghData = getGitHubFile(CONFIG.GITHUB_REPO, CONFIG.GITHUB_FILE_PATH, CONFIG.GITHUB_BRANCH);
  const dataJsContent = ghData.content;
  const sha = ghData.sha;

  // Extraer objeto JSON de data.js
  const prefix = "var INITIAL_LMI_DATA = ";
  const idx = dataJsContent.indexOf(prefix);
  if (idx === -1) throw new Error("No se encontró INITIAL_LMI_DATA en data.js");
  const jsonStart = dataJsContent.indexOf("{", idx);
  const jsonEnd = dataJsContent.lastIndexOf("};");
  const jsonString = dataJsContent.substring(jsonStart, jsonEnd + 1);
  const dataObj = JSON.parse(jsonString);

  // 2. Validar Ticket
  const tickets = dataObj.ruletaTickets || [];
  const foundTicket = tickets.find(t => (t.code || t.ticket || "").toUpperCase() === ticketCode);

  if (!foundTicket) {
    return { success: false, message: "El ticket " + ticketCode + " no existe o no fue emitido por la Administración." };
  }
  if (foundTicket.status === "USADO") {
    const usedAt = foundTicket.usedAt ? new Date(foundTicket.usedAt).toLocaleString() : "Previamente";
    const prevPrize = foundTicket.spinResult ? foundTicket.spinResult.name : "Premio previo";
    return { success: false, message: "Este ticket ya fue utilizado el " + usedAt + " (Resultado: " + prevPrize + "). No se permiten giros repetidos." };
  }
  if (foundTicket.division && foundTicket.division !== division) {
    return { success: false, message: "Este ticket pertenece a la División " + foundTicket.division.toUpperCase() + "." };
  }

  // 3. Determinar Casillas y Ganador (Matemática segura en servidor de Google)
  const cfg = dataObj.ruletaConfig || {};
  const cost = division === "oro" ? (cfg.costOro || 150) : (cfg.costPlata || 75);
  const items = division === "oro" ? (cfg.itemsOro || []) : (cfg.itemsPlata || []);
  if (items.length === 0) throw new Error("No hay casillas configuradas para la ruleta " + division);

  const winningIndex = Math.floor(Math.random() * items.length);
  const winner = items[winningIndex];

  // 4. Modificar Presupuesto y Finanzas del Club
  const club = (dataObj.teams || []).find(t => t.id === clubId);
  const currentBudgetM = club ? (club.budget ? Math.round(club.budget / 1000000) : (club.budgetDetails ? club.budgetDetails.presupuestoFinal : 0)) : 0;
  const netDelta = winner.delta;
  const newBudgetM = currentBudgetM + netDelta;

  if (club) {
    club.budget = newBudgetM * 1000000;
    if (club.budgetDetails) club.budgetDetails.presupuestoFinal = newBudgetM;
  }
  if (dataObj.teamBudgets && dataObj.teamBudgets[clubId]) {
    dataObj.teamBudgets[clubId].presupuestoFinal = newBudgetM;
  }

  // 5. Quemar Ticket
  foundTicket.status = "USADO";
  foundTicket.usedAt = new Date().toISOString();
  foundTicket.spinResult = {
    name: winner.name,
    val: winner.val,
    tag: winner.tag,
    delta: winner.delta
  };

  // 6. Registrar en Historial de la Liga
  if (!dataObj.ruletaHistory) dataObj.ruletaHistory = [];
  dataObj.ruletaHistory.unshift({
    id: "SPIN-" + Date.now(),
    ticketCode: ticketCode,
    teamId: clubId,
    teamName: club ? club.name : clubId,
    division: division,
    cost: cost,
    prize: winner,
    delta: netDelta,
    prevBudget: currentBudgetM,
    newBudget: newBudgetM,
    timestamp: new Date().toISOString()
  });

  // 7. Reconstruir data.js y commitear a GitHub
  const header = "// Base de datos unificada LMI Temporada 10\n\nvar INITIAL_LMI_DATA = ";
  const footer = ";\n\nif (typeof window !== 'undefined') {\n  window.lmiData = INITIAL_LMI_DATA;\n}\n";
  const updatedDataJs = header + JSON.stringify(dataObj, null, 2) + footer;

  commitGitHubFile(CONFIG.GITHUB_REPO, CONFIG.GITHUB_FILE_PATH, CONFIG.GITHUB_BRANCH, updatedDataJs, sha, "🎰 Ruleta LMI: " + (club ? club.name : clubId) + " (" + winner.name + ")");

  // 8. Enviar Alerta Inmediata a Telegram
  const signDelta = netDelta >= 0 ? "+" + netDelta : netDelta;
  sendTelegramMessage(CONFIG.TELEGRAM_BOT_TOKEN, CONFIG.TELEGRAM_CHAT_ID,
    "🎰 *NUEVO GIRO EN RULETA LMI (Remoto)*\n\n" +
    "🛡️ *Club:* " + (club ? club.name : clubId) + "\n" +
    "🏆 *Ruleta:* División " + division.toUpperCase() + " (-$" + cost + "M)\n" +
    "🎟️ *Ticket:* `" + ticketCode + "` *(Quemado)*\n" +
    "🎯 *Casilla:* " + winner.name + " (" + winner.val + ")\n" +
    "💼 *Detalle:* " + winner.desc + "\n" +
    "💰 *Balance Giro:* $" + signDelta + "M\n" +
    "🏦 *Nuevo Presupuesto:* $" + newBudgetM + "M USD\n" +
    "📅 *Fecha:* " + new Date().toLocaleString() + "\n" +
    "🔒 _Procesado y verificado en GitHub Pages_"
  );

  return {
    success: true,
    winningIndex: winningIndex,
    winner: winner,
    delta: netDelta,
    newBudget: newBudgetM,
    timestamp: new Date().toISOString()
  };
}

function getGitHubFile(repo, path, branch) {
  const url = "https://api.github.com/repos/" + repo + "/contents/" + path + "?ref=" + branch;
  const response = UrlFetchApp.fetch(url, {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + CONFIG.GITHUB_TOKEN,
      "User-Agent": "LMI-Ruleta-Bridge",
      "Accept": "application/vnd.github.v3+json"
    }
  });
  const data = JSON.parse(response.getContentText());
  const content = Utilities.newBlob(Utilities.base64Decode(data.content)).getDataAsString("UTF-8");
  return { content: content, sha: data.sha };
}

function commitGitHubFile(repo, path, branch, newContent, sha, commitMsg) {
  const url = "https://api.github.com/repos/" + repo + "/contents/" + path;
  const encoded = Utilities.base64Encode(Utilities.newBlob(newContent).getBytes());
  const payload = {
    message: commitMsg,
    content: encoded,
    sha: sha,
    branch: branch
  };
  UrlFetchApp.fetch(url, {
    method: "PUT",
    headers: {
      "Authorization": "Bearer " + CONFIG.GITHUB_TOKEN,
      "User-Agent": "LMI-Ruleta-Bridge",
      "Content-Type": "application/json",
      "Accept": "application/vnd.github.v3+json"
    },
    payload: JSON.stringify(payload)
  });
}

function sendTelegramMessage(token, chatId, text) {
  try {
    const url = "https://api.telegram.org/bot" + token + "/sendMessage";
    UrlFetchApp.fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      payload: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: "Markdown"
      })
    });
  } catch (err) {
    Logger.log("Error Telegram: " + err);
  }
}

