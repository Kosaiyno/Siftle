const marketsToResolve = [
  { marketId: "wc-argentina-england-qualify", winningOptionId: "argentina" },
  { marketId: "wc-messi-bellingham-rating", winningOptionId: "messi" },
  { marketId: "wc-argentina-england-shots-target", winningOptionId: "7-9" },
  { marketId: "wc-argentina-england-victory-method", winningOptionId: "argentina-regular" }
];

async function resolveMarket({ marketId, winningOptionId }) {
  console.log(`Resolving market: ${marketId} to option: ${winningOptionId}...`);
  try {
    const response = await fetch("http://localhost:5173/api/admin/option-market/resolve", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ marketId, winningOptionId })
    });
    const result = await response.json();
    if (response.ok) {
      console.log(`SUCCESS: resolved ${marketId}. Payouts: ${result.autoPaidCount}, Failures: ${result.autoPaidFailures}`);
    } else {
      console.error(`FAILED: ${marketId} - ${result.error || response.statusText}`);
    }
  } catch (error) {
    console.error(`ERROR: resolving ${marketId} - ${error.message}`);
  }
}

async function run() {
  for (const item of marketsToResolve) {
    await resolveMarket(item);
  }
}

run();
