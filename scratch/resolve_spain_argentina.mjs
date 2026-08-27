import fs from "node:fs";
import { join } from "node:path";
import "dotenv/config";

const root = "C:/Users/user/Desktop/Siftle";
const activePath = join(root, "data", "active_markets.json");
const historyPath = join(root, "data", "market_history.json");

const adminToken = process.env.SIFTLE_ADMIN_TOKEN || "";

const marketsToResolve = [
  { marketId: "wc-spain-argentina-champion", winningOptionId: "spain" },
  { marketId: "wc-spain-argentina-concede", winningOptionId: "neither-0-0" },
  { marketId: "wc-spain-argentina-yamal-assists", winningOptionId: "0-assists" },
  { marketId: "wc-spain-argentina-red-card", winningOptionId: "yes" },
  { marketId: "wc-spain-argentina-arg-cards", winningOptionId: "6-plus" },
  { marketId: "wc-spain-argentina-shots", winningOptionId: "spain" },
  { marketId: "wc-spain-argentina-rating-duel", winningOptionId: "yamal" },
  { marketId: "wc-spain-argentina-victory-method", winningOptionId: "either-et" },
  { marketId: "wc-spain-argentina-messi-goals", winningOptionId: "no-goals" },
  { marketId: "wc-spain-argentina-exact-score", winningOptionId: "draw" }
];

async function resolveMarketOnChain({ marketId, winningOptionId }) {
  console.log(`Resolving on-chain market: ${marketId} to option: ${winningOptionId}...`);
  try {
    const response = await fetch("http://localhost:5173/api/admin/option-market/resolve", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-siftle-admin-token": adminToken
      },
      body: JSON.stringify({ marketId, winningOptionId })
    });
    const result = await response.json();
    if (response.ok) {
      console.log(`SUCCESS: Resolved ${marketId}. Payouts: ${result.autoPaidCount || 0}, Failures: ${result.autoPaidFailures || 0}`);
      return true;
    } else {
      console.error(`FAILED: ${marketId} - ${result.error || response.statusText}`);
      return false;
    }
  } catch (error) {
    console.error(`ERROR resolving ${marketId}: ${error.message}`);
    return false;
  }
}

async function run() {
  console.log("Starting resolution for 10 Spain vs Argentina World Cup final markets...");
  
  // 1. Resolve all markets on-chain
  let allResolved = true;
  for (const item of marketsToResolve) {
    const ok = await resolveMarketOnChain(item);
    if (!ok) allResolved = false;
  }

  // 2. Perform local JSON database archiving
  if (fs.existsSync(activePath)) {
    try {
      const activeMarkets = JSON.parse(fs.readFileSync(activePath, "utf8"));
      const historyMarkets = fs.existsSync(historyPath) ? JSON.parse(fs.readFileSync(historyPath, "utf8")) : [];

      const resolvedList = activeMarkets.map((market) => {
        const resolution = marketsToResolve.find((r) => r.marketId === market.id);
        return {
          ...market,
          closes: "Resolved",
          resolvedWinningOptionId: resolution ? resolution.winningOptionId : undefined
        };
      });

      const updatedHistory = [...resolvedList, ...historyMarkets];
      fs.writeFileSync(historyPath, JSON.stringify(updatedHistory, null, 2), "utf8");
      console.log(`Archived ${resolvedList.length} markets to market_history.json.`);

      // Clear active markets as they are all resolved now
      fs.writeFileSync(activePath, JSON.stringify([], null, 2), "utf8");
      console.log("Cleared active_markets.json.");
    } catch (error) {
      console.error(`Local database archiving error: ${error.message}`);
    }
  }
}

run();
