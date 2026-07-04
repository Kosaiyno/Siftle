const API_BASE = "http://localhost:5173";

async function runTest() {
  console.log("1. Authenticating as basilkosi10@gmail.com...");
  const authRes = await fetch(`${API_BASE}/api/backend-wallet/auth`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "basilkosi10@gmail.com" })
  });

  if (!authRes.ok) {
    console.error("Auth failed:", await authRes.text());
    process.exit(1);
  }

  const authData = await authRes.json();
  console.log("Auth success. Session Token:", authData.sessionToken);
  console.log("User wallet address:", authData.walletAddress);
  console.log("User wallet balance:", authData.walletBalance, "USDC");

  console.log("\n2. Getting current AI briefing unlock configuration...");
  const configRes = await fetch(`${API_BASE}/api/summary/unlock-config`);
  const config = await configRes.json();
  console.log("Unlock Config:", config);

  console.log("\n3. Triggering AI Briefing Unlock (should invoke Gateway x402)...");
  const unlockRes = await fetch(`${API_BASE}/api/backend-wallet/summary/unlock`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      sessionToken: authData.sessionToken,
      treasuryAddress: config.treasuryAddress || "0x2f5fc4f223875b5F453C5534C50f926b114091B7",
      amountUsdc: Number(config.amountUsdc) || 0.001,
      sourceUrl: "https://example.com/sports-news-x402",
      topic: "Tonali negotiation status"
    })
  });

  const unlockData = await unlockRes.json();
  console.log("Unlock Response Status:", unlockRes.status);
  console.log("Unlock Response Body:", JSON.stringify(unlockData, null, 2));

  if (unlockRes.ok && unlockData.x402) {
    console.log("\nSUCCESS: AI Briefing was successfully unlocked using Gateway x402!");
  } else if (unlockRes.ok) {
    console.log("\nWARNING: AI Briefing unlocked but fell back to normal USDC transfer.");
  } else {
    console.log("\nERROR: Failed to unlock AI Briefing.");
  }
}

// Wait 1 second to ensure local server is fully up
setTimeout(() => {
  runTest().catch((err) => {
    console.error("Test execution failed:", err);
  });
}, 1000);
