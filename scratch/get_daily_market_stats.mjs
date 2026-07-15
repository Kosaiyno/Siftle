import { join } from "path";
import { existsSync, readFileSync } from "fs";
import "dotenv/config";

const root = "C:/Users/user/Desktop/Siftle";
const envPath = join(root, ".env");
const activePath = join(root, "data", "active_markets.json");

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
  if (!existsSync(activePath)) {
    console.error("No active_markets.json file found.");
    return;
  }

  const activeMarkets = JSON.parse(readFileSync(activePath, "utf8"));
  console.log(`Found ${activeMarkets.length} active daily markets in active_markets.json.`);

  for (const market of activeMarkets) {
    console.log("\n==================================================");
    console.log(`ID: ${market.id}`);
    console.log(`Question: ${market.question}`);
    console.log("--------------------------------------------------");

    try {
      const positions = await supabaseRequest(
        `option_market_positions?market_id=eq.${encodeURIComponent(market.id)}&select=wallet_address,option_id,option_label,amount_usdc`
      );

      if (!positions || positions.length === 0) {
        console.log("No positions placed yet on this market.");
        continue;
      }

      const traders = new Set();
      let totalVolume = 0;
      const optionPools = {};
      const optionLabels = {};

      // Initialize pools with defined options
      for (const opt of market.options) {
        optionPools[opt.id] = 0;
        optionLabels[opt.id] = opt.label;
      }

      for (const pos of positions) {
        traders.add(String(pos.wallet_address).toLowerCase());
        const amount = Number(pos.amount_usdc) || 0;
        totalVolume += amount;

        const optId = pos.option_id;
        optionPools[optId] = (optionPools[optId] || 0) + amount;
        if (pos.option_label) {
          optionLabels[optId] = pos.option_label;
        }
      }

      console.log(`Total Volume:  $${totalVolume.toFixed(2)} USDC`);
      console.log(`Total Traders: ${traders.size} unique wallets`);
      console.log("\nPool breakdown & implied probability:");
      
      for (const optId of Object.keys(optionPools)) {
        const poolVal = optionPools[optId];
        const pct = totalVolume > 0 ? (poolVal / totalVolume) * 100 : 0;
        const label = optionLabels[optId] || optId;
        console.log(`  * [${label}] (ID: ${optId}): $${poolVal.toFixed(2)} USDC (${pct.toFixed(1)}%)`);
      }

    } catch (error) {
      console.error(`Error loading positions for ${market.id}:`, error.message);
    }
  }
  console.log("==================================================\n");
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
