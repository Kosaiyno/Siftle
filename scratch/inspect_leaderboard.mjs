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
  if (urlMatch) supabaseUrl = urlMatch[1].trim().replace(/['"]/g, "");
  if (keyMatch) supabaseServiceKey = keyMatch[1].trim().replace(/['"]/g, "");
}

async function supabaseRequest(path, options = {}) {
  const url = `${supabaseUrl}/rest/v1/${path}`;
  const headers = {
    "apikey": supabaseServiceKey,
    "Authorization": `Bearer ${supabaseServiceKey}`,
    "Content-Type": "application/json",
    "Prefer": options.prefer || "return=representation",
    ...options.headers
  };
  const response = await fetch(url, {
    method: options.method || "GET",
    headers,
    body: options.body ? JSON.stringify(options.body) : undefined
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`HTTP ${response.status}: ${text}`);
  }
  return response.json().catch(() => null);
}

async function main() {
  console.log("Fetching leaderboard standings...");
  try {
    const [entries, profiles] = await Promise.all([
      supabaseRequest("leaderboard_entries?select=*"),
      supabaseRequest("profiles?select=wallet_address,username")
    ]);

    const usernameMap = {};
    (profiles || []).forEach(p => {
      usernameMap[p.wallet_address.toLowerCase()] = p.username;
    });

    const leaderboard = (entries || []).map(e => {
      const addr = e.wallet_address.toLowerCase();
      const username = usernameMap[addr] || "Unknown";
      return {
        username,
        address: e.wallet_address,
        points: Number(e.points) || 0,
        status: e.status || "0 wins, 0 losses"
      };
    });

    // Sort by points descending
    leaderboard.sort((a, b) => b.points - a.points);

    console.log("\n--- CURRENT SIFTLE LEADERBOARD STANDINGS ---");
    leaderboard.forEach((trader, i) => {
      console.log(`${i + 1}. ${trader.username} (${trader.address}): ${trader.points} points (${trader.status})`);
    });

  } catch (err) {
    console.error("Failed to fetch leaderboard:", err);
  }
}

main();
