import { join } from "path";
import { existsSync, readFileSync } from "fs";

const root = "C:/Users/user/Desktop/Siftle";
const envPath = join(root, ".env");
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

const main = async () => {
  const [results, bonuses, entries, profiles] = await Promise.all([
    supabaseRequest("resolved_results?select=wallet_address,market_id,result,points,switched&order=wallet_address.asc,market_id.asc"),
    supabaseRequest("leaderboard_bonus_events?select=wallet_address,bonus_key,points&order=wallet_address.asc,bonus_key.asc"),
    supabaseRequest("leaderboard_entries?select=wallet_address,points,status,reported_points,reported_status&order=points.desc"),
    supabaseRequest("profiles?select=wallet_address,username")
  ]);

  const usernameMap = new Map((profiles || []).map((row) => [String(row.wallet_address || "").toLowerCase(), row.username || "Unknown"]));
  const byWallet = new Map();

  for (const row of results || []) {
    const wallet = String(row.wallet_address || "").toLowerCase();
    if (!wallet) continue;
    if (!byWallet.has(wallet)) byWallet.set(wallet, { results: [], bonus: 0 });
    byWallet.get(wallet).results.push(row);
  }

  for (const row of bonuses || []) {
    const wallet = String(row.wallet_address || "").toLowerCase();
    if (!wallet) continue;
    if (!byWallet.has(wallet)) byWallet.set(wallet, { results: [], bonus: 0 });
    byWallet.get(wallet).bonus += Number(row.points) || 0;
  }

  for (const entry of entries || []) {
    const wallet = String(entry.wallet_address || "").toLowerCase();
    const name = usernameMap.get(wallet) || "Unknown";
    const bundle = byWallet.get(wallet) || { results: [], bonus: 0 };
    const wins = bundle.results.filter((row) => row.result === "win");
    const losses = bundle.results.filter((row) => row.result !== "win");
    const resolvedPoints = wins.reduce((sum, row) => sum + (Number(row.points) || 0), 0);
    console.log(`\n${name} ${entry.wallet_address}`);
    console.log(`entry=${Number(entry.points) || 0} status=${entry.status} reported=${Number(entry.reported_points) || 0} reportedStatus=${entry.reported_status}`);
    console.log(`resolvedPoints=${resolvedPoints} wins=${wins.length} losses=${losses.length} bonus=${bundle.bonus}`);
    for (const row of bundle.results) {
      console.log(`  ${row.market_id} -> ${row.result} ${Number(row.points) || 0}${row.switched ? " switched" : ""}`);
    }
  }
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
