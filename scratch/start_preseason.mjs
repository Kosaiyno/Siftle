import fs from "node:fs";
import { join } from "node:path";
import "dotenv/config";

const root = "C:/Users/user/Desktop/Siftle";
const analyticsFile = join(root, ".siftle", "analytics.json");
const backupFile = join(root, ".siftle", "analytics_season1_backup.json");

const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

if (!supabaseUrl || !supabaseServiceRoleKey) {
  console.error("ERROR: Supabase URL or Service Role Key is not configured in .env");
  process.exit(1);
}

async function supabaseDelete(path) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  const response = await fetch(`${supabaseUrl}/rest/v1/${path}`, {
    method: "DELETE",
    signal: controller.signal,
    headers: {
      apikey: supabaseServiceRoleKey,
      Authorization: `Bearer ${supabaseServiceRoleKey}`
    }
  }).finally(() => clearTimeout(timeout));

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`DELETE ${path} failed: ${text || response.statusText}`);
  }
  console.log(`Successfully deleted matching rows from: ${path}`);
}

async function run() {
  console.log("=== STARTING PRESEASON LEADERBOARD RESET ===");

  // 1. Backup local analytics file
  if (fs.existsSync(analyticsFile)) {
    try {
      fs.copyFileSync(analyticsFile, backupFile);
      console.log(`Backed up local analytics file to ${backupFile}`);

      // Reset local state
      const content = fs.readFileSync(analyticsFile, "utf8").replace(/^\uFEFF/, "");
      const data = JSON.parse(content);
      
      data.leaderboard = {
        traders: {},
        resolvedResults: {},
        lastComputedAt: new Date().toISOString(),
        divisionAssignments: {},
        bonusEvents: {},
        referrals: {}
      };
      data.optionMarkets = {};

      fs.writeFileSync(analyticsFile, JSON.stringify(data, null, 2), "utf8");
      console.log("Cleared active leaderboard data and active markets in local analytics.json.");
    } catch (err) {
      console.error("Local reset failed:", err.message);
    }
  } else {
    console.log("No local analytics.json found to reset.");
  }

  // 2. Reset Supabase tables
  try {
    console.log("\nClearing active records from Supabase...");
    
    // Clear resolved results (wins/losses of Season 1)
    await supabaseDelete("resolved_results?wallet_address=neq.0");
    
    // Clear division assignments
    await supabaseDelete("season_division_assignments?wallet_address=neq.0");

    // Clear leaderboard bonus events (referral win bonuses, daily briefing bonuses)
    await supabaseDelete("leaderboard_bonus_events?wallet_address=neq.0");

    // Clear active leaderboard entries (reset points to 0)
    await supabaseDelete("leaderboard_entries?wallet_address=neq.0");

    console.log("\nSUCCESS: Supabase database cleared for the Preseason!");
    console.log("Referral codes, user profiles, and referral bonds remain intact.");
  } catch (error) {
    console.error("Supabase reset failed:", error.message);
  }
}

run();
