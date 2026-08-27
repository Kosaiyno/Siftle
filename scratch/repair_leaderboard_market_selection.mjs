import { join } from "path";
import { existsSync, readFileSync, writeFileSync } from "fs";

const root = "C:/Users/user/Desktop/Siftle";
const envPath = join(root, ".env");
const analyticsPath = join(root, ".siftle", "analytics.json");
const transcriptPath = "C:/Users/user/AppData/Roaming/Code/User/workspaceStorage/d59648884a87f1c800999334e3f60d07/GitHub.copilot-chat/chat-session-resources/d7c2dd59-6d86-47b8-a0fb-2bfec59a18d2/call_qwbsRHh6ZyE01lzSClglFVYY__vscode-1783325204332/content.txt";
const restoreMarketIds = new Set([
  "wc-brazil-norway-qualify",
  "wc-brazil-norway-total-goals",
  "wc-de-bruyne-score-assist-senegal",
  "wc-mexico-england-qualify"
]);
const removeMarketIds = new Set([
  "wc-vozinha-saves-argentina",
  "wc-messi-impact-cape-verde",
  "wc-australia-egypt-first-event",
  "wc-colombia-ghana-halftime"
]);

let supabaseUrl = "";
let supabaseServiceKey = "";
if (existsSync(envPath)) {
  const envContent = readFileSync(envPath, "utf8");
  const urlMatch = envContent.match(/SUPABASE_URL\s*=\s*(.+)/);
  const keyMatch = envContent.match(/SUPABASE_SERVICE_ROLE_KEY\s*=\s*(.+)/);
  if (urlMatch) supabaseUrl = urlMatch[1].trim().replace(/["']/g, "");
  if (keyMatch) supabaseServiceKey = keyMatch[1].trim().replace(/["']/g, "");
}

async function supabaseRequest(path, options = {}) {
  const url = `${supabaseUrl}/rest/v1/${path}`;
  const headers = {
    apikey: supabaseServiceKey,
    Authorization: `Bearer ${supabaseServiceKey}`,
    "Content-Type": "application/json",
    Prefer: options.prefer || "return=representation",
    ...options.headers
  };
  const response = await fetch(url, {
    method: options.method || "GET",
    headers,
    body: options.body ? JSON.stringify(options.body) : undefined
  });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${await response.text()}`);
  }
  return response.json().catch(() => null);
}

function parseStatus(wins, losses) {
  return `${wins} win${wins === 1 ? "" : "s"}, ${losses} loss${losses === 1 ? "" : "es"}`;
}

function parseRestoreRows() {
  if (!existsSync(transcriptPath)) {
    throw new Error(`Transcript file not found: ${transcriptPath}`);
  }
  const lines = readFileSync(transcriptPath, "utf8").split(/\r?\n/);
  const rows = [];
  let currentWallet = "";

  for (const line of lines) {
    const walletMatch = line.match(/^(.*)\s(0x[a-f0-9]{40})$/i);
    if (walletMatch && !line.startsWith("  ")) {
      currentWallet = walletMatch[2].toLowerCase();
      continue;
    }
    const resultMatch = line.match(/^\s+(\S+)\s+->\s+(win|loss)\s+(\d+)(?:\s+switched)?$/i);
    if (!resultMatch || !currentWallet) continue;
    const marketId = resultMatch[1];
    if (!restoreMarketIds.has(marketId)) continue;
    rows.push({
      wallet_address: currentWallet,
      market_id: marketId,
      result: resultMatch[2].toLowerCase() === "win" ? "win" : "loss",
      points: Number(resultMatch[3]) || 0,
      switched: /\sswitched$/i.test(line)
    });
  }

  const deduped = new Map();
  for (const row of rows) {
    deduped.set(`${row.wallet_address}:${row.market_id}`, row);
  }
  return Array.from(deduped.values());
}

function repairLocalAnalytics(restoreRows) {
  if (!existsSync(analyticsPath)) return false;
  const raw = JSON.parse(readFileSync(analyticsPath, "utf8"));
  if (!raw.leaderboard) raw.leaderboard = {};
  if (!raw.leaderboard.resolvedResults) raw.leaderboard.resolvedResults = {};
  if (!raw.leaderboard.bonusEvents) raw.leaderboard.bonusEvents = {};
  let changed = false;

  Object.values(raw.leaderboard.resolvedResults || {}).forEach((resultsByMarket) => {
    if (!resultsByMarket || typeof resultsByMarket !== "object") return;
    for (const marketId of removeMarketIds) {
      if (resultsByMarket[marketId]) {
        delete resultsByMarket[marketId];
        changed = true;
      }
    }
  });

  for (const row of restoreRows) {
    if (!raw.leaderboard.resolvedResults[row.wallet_address]) {
      raw.leaderboard.resolvedResults[row.wallet_address] = {};
    }
    raw.leaderboard.resolvedResults[row.wallet_address][row.market_id] = {
      result: row.result,
      points: row.points,
      switched: Boolean(row.switched)
    };
    changed = true;
  }

  Object.values(raw.leaderboard.bonusEvents || {}).forEach((events) => {
    if (!events || typeof events !== "object") return;
    for (const bonusKey of Object.keys(events)) {
      if (Array.from(removeMarketIds).some((marketId) => bonusKey.includes(marketId))) {
        delete events[bonusKey];
        changed = true;
      }
    }
  });

  if (changed) {
    writeFileSync(analyticsPath, JSON.stringify(raw, null, 2), "utf8");
  }
  return changed;
}

async function main() {
  const restoreRows = parseRestoreRows();
  console.log(`Restoring ${restoreRows.length} resolved result rows.`);

  for (const marketId of removeMarketIds) {
    await supabaseRequest(`resolved_results?market_id=eq.${encodeURIComponent(marketId)}`, {
      method: "DELETE",
      prefer: "return=minimal"
    });
  }

  if (restoreRows.length > 0) {
    await supabaseRequest("resolved_results?on_conflict=wallet_address,market_id", {
      method: "POST",
      prefer: "resolution=merge-duplicates",
      body: restoreRows
    });
  }

  const [entries, results, bonuses] = await Promise.all([
    supabaseRequest("leaderboard_entries?select=wallet_address,first_activity_at,updated_at"),
    supabaseRequest("resolved_results?select=wallet_address,market_id,result,points,switched"),
    supabaseRequest("leaderboard_bonus_events?select=wallet_address,bonus_key,points")
  ]);

  const entryMap = new Map((entries || []).map((row) => [String(row.wallet_address || "").toLowerCase(), row]));
  const resultMap = new Map();
  for (const row of results || []) {
    const wallet = String(row.wallet_address || "").toLowerCase();
    if (!wallet) continue;
    if (!resultMap.has(wallet)) resultMap.set(wallet, []);
    resultMap.get(wallet).push(row);
  }

  const bonusMap = new Map();
  for (const row of bonuses || []) {
    const wallet = String(row.wallet_address || "").toLowerCase();
    if (!wallet) continue;
    bonusMap.set(wallet, (bonusMap.get(wallet) || 0) + (Number(row.points) || 0));
  }

  const wallets = new Set([
    ...Array.from(entryMap.keys()),
    ...Array.from(resultMap.keys()),
    ...Array.from(bonusMap.keys())
  ]);

  const nowIso = new Date().toISOString();
  const leaderboardRows = Array.from(wallets).map((wallet) => {
    const existing = entryMap.get(wallet) || {};
    const rows = resultMap.get(wallet) || [];
    let wins = 0;
    let losses = 0;
    let points = 0;
    for (const row of rows) {
      if (row.result === "win") {
        wins += 1;
        points += Number(row.points) || 0;
      } else {
        losses += 1;
      }
    }
    points += bonusMap.get(wallet) || 0;
    const status = parseStatus(wins, losses);
    return {
      wallet_address: existing.wallet_address || wallet,
      points,
      wins,
      losses,
      status,
      reported_points: points,
      reported_status: status,
      first_activity_at: existing.first_activity_at || existing.updated_at || nowIso,
      updated_at: nowIso
    };
  });

  await supabaseRequest("leaderboard_entries?on_conflict=wallet_address", {
    method: "POST",
    prefer: "resolution=merge-duplicates",
    body: leaderboardRows
  });

  const localChanged = repairLocalAnalytics(restoreRows);
  console.log(`Updated ${leaderboardRows.length} leaderboard rows.`);
  console.log(`Local analytics repaired: ${localChanged ? "yes" : "no"}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
