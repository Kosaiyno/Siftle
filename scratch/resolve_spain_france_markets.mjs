import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import "dotenv/config";

const root = "C:/Users/user/Desktop/Siftle";
const activePath = join(root, "data", "active_markets.json");
const historyPath = join(root, "data", "market_history.json");

const adminToken = process.env.SIFTLE_ADMIN_TOKEN || "";

const marketsToResolve = [
  { marketId: "wc-spain-france-qualify", winningOptionId: "spain" },
  { marketId: "wc-spain-france-first-half-result", winningOptionId: "spain-lead" },
  { marketId: "wc-spain-france-first-goal", winningOptionId: "spain" },
  { marketId: "wc-spain-france-shots-target", winningOptionId: "0-7" }
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
      console.log(`SUCCESS: Resolved ${marketId}. Payouts: ${result.autoPaidCount}, Failures: ${result.autoPaidFailures}`);
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
  // 1. Resolve all markets on-chain
  let allResolved = true;
  for (const item of marketsToResolve) {
    const ok = await resolveMarketOnChain(item);
    if (!ok) allResolved = false;
  }

  if (!allResolved) {
    console.warn("Not all markets were successfully resolved on-chain. Proceeding with database archive anyway.");
  }

  // 2. Perform local JSON database archiving
  if (existsSync(activePath)) {
    try {
      const activeMarkets = JSON.parse(readFileSync(activePath, "utf8"));
      const historyMarkets = existsSync(historyPath) ? JSON.parse(readFileSync(historyPath, "utf8")) : [];

      const resolvedList = activeMarkets.map((market) => {
        const resolution = marketsToResolve.find((r) => r.marketId === market.id);
        return {
          ...market,
          closes: "Resolved",
          resolvedWinningOptionId: resolution ? resolution.winningOptionId : undefined
        };
      });

      const updatedHistory = [...resolvedList, ...historyMarkets];
      writeFileSync(historyPath, JSON.stringify(updatedHistory, null, 2), "utf8");
      console.log(`Archived ${resolvedList.length} markets to market_history.json.`);

      // Clear active markets as they are all resolved now
      writeFileSync(activePath, JSON.stringify([], null, 2), "utf8");
      console.log("Cleared active_markets.json.");
    } catch (error) {
      console.error(`Local database archiving error: ${error.message}`);
    }
  }
}

run();
