import { join } from "path";
import { existsSync, readFileSync, writeFileSync } from "fs";

const root = "C:/Users/user/Desktop/Siftle";
const envPath = join(root, ".env");
const analyticsPath = join(root, ".siftle", "analytics.json");
const rolledBackMarketIds = [
  "wc-brazil-norway-qualify",
  "wc-brazil-norway-total-goals",
  "wc-de-bruyne-score-assist-senegal",
  "wc-mexico-england-qualify"
];

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

function parseStatus(points, wins, losses) {
  return `${wins} win${wins === 1 ? "" : "s"}, ${losses} loss${losses === 1 ? "" : "es"}`;
}

function scrubLocalAnalytics() {
  if (!existsSync(analyticsPath)) return false;
  const raw = JSON.parse(readFileSync(analyticsPath, "utf8"));
  const leaderboard = raw?.leaderboard;
  if (!leaderboard) return false;
  let changed = false;

  Object.values(leaderboard.resolvedResults || {}).forEach((resultsByMarket) => {
    if (!resultsByMarket || typeof resultsByMarket !== "object") return;
    for (const marketId of rolledBackMarketIds) {
      if (resultsByMarket[marketId]) {
        delete resultsByMarket[marketId];
        changed = true;
      }
    }
  });

  Object.values(leaderboard.bonusEvents || {}).forEach((events) => {
    if (!events || typeof events !== "object") return;
    Object.keys(events).forEach((bonusKey) => {
      if (rolledBackMarketIds.some((marketId) => bonusKey.includes(marketId))) {
        delete events[bonusKey];
        changed = true;
      }
    });
  });

  if (changed) {
    writeFileSync(analyticsPath, JSON.stringify(raw, null, 2), "utf8");
  }
  return changed;
}

async function main() {
  console.log("Cleaning rolled-back leaderboard markets...");
  const existingEntries = await supabaseRequest("leaderboard_entries?select=wallet_address,points,status,reported_points,reported_status,first_activity_at,updated_at");
  const bonusRows = await supabaseRequest("leaderboard_bonus_events?select=wallet_address,season_id,bonus_type,bonus_key,points,metadata,created_at");

  let deletedResults = 0;
  for (const marketId of rolledBackMarketIds) {
    const rows = await supabaseRequest(`resolved_results?market_id=eq.${encodeURIComponent(marketId)}&select=wallet_address,market_id`);
    if ((rows || []).length > 0) {
      await supabaseRequest(`resolved_results?market_id=eq.${encodeURIComponent(marketId)}`, {
        method: "DELETE",
        prefer: "return=representation"
      });
      deletedResults += rows.length;
    }
  }

  const removableBonuses = (bonusRows || []).filter((row) =>
    rolledBackMarketIds.some((marketId) => String(row.bonus_key || "").includes(marketId))
  );
  for (const row of removableBonuses) {
    await supabaseRequest(
      `leaderboard_bonus_events?wallet_address=eq.${encodeURIComponent(row.wallet_address)}&bonus_key=eq.${encodeURIComponent(row.bonus_key)}`,
      { method: "DELETE", prefer: "return=representation" }
    );
  }

  const [remainingResults, remainingBonuses] = await Promise.all([
    supabaseRequest("resolved_results?select=wallet_address,market_id,result,points,switched"),
    supabaseRequest("leaderboard_bonus_events?select=wallet_address,bonus_key,points")
  ]);

  const entryMap = new Map((existingEntries || []).map((row) => [String(row.wallet_address || "").toLowerCase(), row]));
  const wallets = new Set([
    ...Array.from(entryMap.keys()),
    ...(remainingResults || []).map((row) => String(row.wallet_address || "").toLowerCase()),
    ...(remainingBonuses || []).map((row) => String(row.wallet_address || "").toLowerCase())
  ].filter(Boolean));

  const resultsByWallet = new Map();
  for (const row of remainingResults || []) {
    const wallet = String(row.wallet_address || "").toLowerCase();
    if (!wallet) continue;
    if (!resultsByWallet.has(wallet)) resultsByWallet.set(wallet, []);
    resultsByWallet.get(wallet).push(row);
  }

  const bonusByWallet = new Map();
  for (const row of remainingBonuses || []) {
    const wallet = String(row.wallet_address || "").toLowerCase();
    if (!wallet) continue;
    bonusByWallet.set(wallet, (bonusByWallet.get(wallet) || 0) + (Number(row.points) || 0));
  }

  const nowIso = new Date().toISOString();
  const leaderboardRows = Array.from(wallets).map((wallet) => {
    const existing = entryMap.get(wallet) || {};
    const rows = resultsByWallet.get(wallet) || [];
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
    points += bonusByWallet.get(wallet) || 0;
    const status = parseStatus(points, wins, losses);
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

  const localChanged = scrubLocalAnalytics();

  console.log(`Deleted ${deletedResults} resolved result rows.`);
  console.log(`Deleted ${removableBonuses.length} bonus rows.`);
  console.log(`Updated ${leaderboardRows.length} leaderboard entry rows.`);
  console.log(`Local analytics cleaned: ${localChanged ? "yes" : "no"}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
