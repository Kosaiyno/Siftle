import { readFileSync } from "node:fs";
import { join } from "node:path";
import dotenv from "dotenv";

const root = "C:/Users/user/Desktop/Siftle";
dotenv.config({ path: join(root, ".env") });

const supabaseUrl = process.env.SUPABASE_URL?.trim();
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();

if (!supabaseUrl || !supabaseKey) {
  console.error("Error: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is missing from .env");
  process.exit(1);
}

console.log("Supabase URL:", supabaseUrl);
console.log("Supabase Key length:", supabaseKey.length);

async function testDatabase() {
  console.log("\n--- Testing Supabase Database Connection ---");
  const tables = ["profiles", "analytics_daily", "leaderboard", "ai_briefing_unlocks"];
  for (const table of tables) {
    try {
      const res = await fetch(`${supabaseUrl}/rest/v1/${table}?limit=1`, {
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`
        }
      });
      const text = await res.text();
      console.log(`Table '${table}' status:`, res.status, res.statusText);
      if (res.ok) {
        console.log(`Table '${table}' sample row:`, text.slice(0, 150));
      } else {
        console.error(`Table '${table}' error response:`, text);
      }
    } catch (err) {
      console.error(`Table '${table}' fetch failed:`, err.message);
    }
  }
}

async function testStorage() {
  console.log("\n--- Testing Supabase Storage Connection ---");
  try {
    const res = await fetch(`${supabaseUrl}/storage/v1/bucket`, {
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`
      }
    });
    const text = await res.text();
    console.log("Storage buckets status:", res.status, res.statusText);
    if (res.ok) {
      const data = JSON.parse(text);
      console.log("Storage Buckets found:", JSON.stringify(data, null, 2));
    } else {
      console.error("Storage buckets error response:", text);
    }
  } catch (err) {
    console.error("Storage connection failed:", err.message);
  }
}

async function run() {
  await testDatabase();
  await testStorage();
}

run();
