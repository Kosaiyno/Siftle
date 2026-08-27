import * as dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

async function supabaseRequest(path) {
  const response = await fetch(`${supabaseUrl}/rest/v1/${path}`, {
    headers: {
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
      "Content-Type": "application/json"
    }
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch ${path}: ${await response.text()}`);
  }
  return response.json();
}

async function main() {
  try {
    console.log("Fetching profiles...");
    const profiles = await supabaseRequest("profiles?select=wallet_address,username");
    const profileMap = {};
    profiles.forEach(p => {
      if (p.wallet_address) {
        profileMap[p.wallet_address.toLowerCase()] = p.username;
      }
    });

    console.log("Fetching AI briefing unlocks for Season 1...");
    const unlocks = await supabaseRequest("ai_briefing_unlocks?select=wallet_address,date_key&created_at=lt.2026-07-20T00:00:00Z&limit=100000");
    console.log(`Fetched ${unlocks.length} unlock records.`);

    // Group by wallet and date_key
    const grouped = {};
    unlocks.forEach(u => {
      const wallet = (u.wallet_address || "").toLowerCase();
      const dateKey = u.date_key;
      if (!wallet || !dateKey) return;
      if (!grouped[wallet]) {
        grouped[wallet] = {};
      }
      grouped[wallet][dateKey] = (grouped[wallet][dateKey] || 0) + 1;
    });

    // Count daily target completions (>= 3 unlocks on a single day) per wallet
    const results = [];
    Object.keys(grouped).forEach(wallet => {
      let completedDays = 0;
      const days = grouped[wallet];
      const details = [];
      Object.keys(days).forEach(dateKey => {
        const count = days[dateKey];
        if (count >= 3) {
          completedDays++;
          details.push(`${dateKey} (${count} unlocks)`);
        }
      });

      results.push({
        wallet,
        username: profileMap[wallet] || wallet,
        completedDays,
        details
      });
    });

    // Sort by completedDays descending
    results.sort((a, b) => b.completedDays - a.completedDays);

    console.log("\n=== SEASON 1 DAILY TARGET COMPLETION (AT LEAST 3 UNLOCKS IN A SINGLE DAY) ===");
    console.table(results.map(r => ({
      Username: r.username,
      "Wallet Address": r.wallet,
      "Days Completed (>=3 unlocks)": r.completedDays
    })));
  } catch (err) {
    console.error("Error:", err);
  }
}

main();
