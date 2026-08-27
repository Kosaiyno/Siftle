import fs from "node:fs";
import { join } from "node:path";
import "dotenv/config";

const root = "C:/Users/user/Desktop/Siftle";
const snapshotDir = join(root, "data", "season_snapshots");
const snapshotPath = join(snapshotDir, "season1_final.json");

const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

if (!supabaseUrl || !supabaseServiceRoleKey) {
  console.error("ERROR: Supabase URL or Service Role Key is not configured in .env");
  process.exit(1);
}

async function supabaseRequest(path, options = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  const response = await fetch(`${supabaseUrl}/rest/v1/${path}`, {
    method: options.method || "GET",
    signal: controller.signal,
    headers: {
      apikey: supabaseServiceRoleKey,
      Authorization: `Bearer ${supabaseServiceRoleKey}`,
      "Content-Type": "application/json",
      ...(options.prefer ? { Prefer: options.prefer } : {}),
      ...(options.headers || {})
    },
    body: options.body === undefined ? undefined : JSON.stringify(options.body)
  }).finally(() => clearTimeout(timeout));

  const text = await response.text();
  const data = text ? JSON.parse(text) : null;
  if (!response.ok) {
    throw new Error(`Supabase ${options.method || "GET"} ${path} failed: ${text || response.statusText}`);
  }
  return data;
}

const normalizeWalletAddress = (address = "") => {
  return String(address || "").trim().toLowerCase();
};

function parseStatus(statusStr = "") {
  const winsMatch = String(statusStr).match(/(\d+)\s+wins?/i);
  const lossesMatch = String(statusStr).match(/(\d+)\s+loss(?:es)?/i);
  return {
    wins: winsMatch ? Number(winsMatch[1]) || 0 : 0,
    losses: lossesMatch ? Number(lossesMatch[1]) || 0 : 0
  };
}

async function run() {
  console.log("Fetching Season 1 data from Supabase...");
  
  try {
    const [profiles, entries, results, unlocks] = await Promise.all([
      supabaseRequest("profiles?select=wallet_address,username"),
      supabaseRequest("leaderboard_entries?select=wallet_address,points,status,reported_points,reported_status"),
      supabaseRequest("resolved_results?select=wallet_address,market_id,result,points"),
      supabaseRequest("ai_briefing_unlocks?select=wallet_address,date_key")
    ]);

    console.log(`Retrieved:
      - ${profiles?.length || 0} profiles
      - ${entries?.length || 0} leaderboard entries
      - ${results?.length || 0} resolved trade results
      - ${unlocks?.length || 0} AI briefing unlocks
    `);

    // Build lookup maps
    const profileMap = new Map();
    (profiles || []).forEach(p => {
      const addr = normalizeWalletAddress(p.wallet_address);
      if (addr) profileMap.set(addr, p.username);
    });

    // Count trades per wallet
    const tradeCounts = new Map();
    const winCounts = new Map();
    const lossCounts = new Map();
    (results || []).forEach(r => {
      const addr = normalizeWalletAddress(r.wallet_address);
      if (!addr) return;
      tradeCounts.set(addr, (tradeCounts.get(addr) || 0) + 1);
      if (r.result === "win") {
        winCounts.set(addr, (winCounts.get(addr) || 0) + 1);
      } else {
        lossCounts.set(addr, (lossCounts.get(addr) || 0) + 1);
      }
    });

    // Count AI briefings unlocked per wallet
    const unlockCounts = new Map();
    (unlocks || []).forEach(u => {
      const addr = normalizeWalletAddress(u.wallet_address);
      if (!addr) return;
      unlockCounts.set(addr, (unlockCounts.get(addr) || 0) + 1);
    });

    // Map each leaderboard entry to snapshot record
    const snapshotRecords = (entries || []).map(entry => {
      const addr = normalizeWalletAddress(entry.wallet_address);
      const parsed = parseStatus(entry.status);
      const computedWins = winCounts.get(addr) || parsed.wins;
      const computedLosses = lossCounts.get(addr) || parsed.losses;

      return {
        wallet_address: addr,
        username: profileMap.get(addr) || "",
        points: Number(entry.points) || 0,
        wins: computedWins,
        losses: computedLosses,
        total_trades: tradeCounts.get(addr) || (computedWins + computedLosses),
        ai_briefing_unlocks: unlockCounts.get(addr) || 0
      };
    });

    // Sort by points descending (leaderboard ranking)
    snapshotRecords.sort((a, b) => b.points - a.points);

    // Save snapshot file
    fs.mkdirSync(snapshotDir, { recursive: true });
    fs.writeFileSync(snapshotPath, JSON.stringify(snapshotRecords, null, 2), "utf8");
    console.log(`\nSUCCESS: Season 1 snapshot saved to ${snapshotPath}`);

    // Print preview of the top 10 traders
    console.log("\n=== SEASON 1 FINAL LEADERBOARD PREVIEW ===");
    console.table(snapshotRecords.slice(0, 10).map((r, idx) => ({
      Rank: idx + 1,
      Username: r.username || "(anon)",
      Wallet: r.wallet_address.slice(0, 10) + "...",
      Points: r.points,
      Wins: r.wins,
      Losses: r.losses,
      Trades: r.total_trades,
      "AI Unlocks": r.ai_briefing_unlocks
    })));

  } catch (error) {
    console.error("Failed to compile Season 1 snapshot:", error.message);
  }
}

run();
