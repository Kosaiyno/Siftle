import { existsSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

import express from "express";
import { createGatewayMiddleware } from "@circle-fin/x402-batching/server";
import { Wallet } from "ethers";

const root = resolve(process.cwd());
const loadEnv = () => {
  const envPath = join(root, ".env");
  if (!existsSync(envPath)) return;

  const lines = readFileSync(envPath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const separator = trimmed.indexOf("=");
    if (separator === -1) continue;

    const key = trimmed.slice(0, separator).trim();
    const value = trimmed.slice(separator + 1).trim().replace(/^["']|["']$/g, "");
    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
};

loadEnv();

const port = Number(process.env.PORT || process.env.X402_PORT || 4020);
let sellerAddress = process.env.X402_SELLER_ADDRESS || process.env.ARC_DEPLOYER_ADDRESS || "";
if (!sellerAddress && process.env.ARC_DEPLOYER_PRIVATE_KEY) {
  try {
    sellerAddress = new Wallet(process.env.ARC_DEPLOYER_PRIVATE_KEY).address;
  } catch {
    sellerAddress = "";
  }
}
const calculateAutonomousUnlockPrice = (topic) => {
  const headline = String(topic || "").toLowerCase();
  let price = 0.000010; // base price: 10 units ($0.000010)

  const premiumKeywords = [
    "injury", "injured", "ruled out", "fracture", "torn", "acl", "hamstring",
    "transfer", "signing", "agreement", "medical", "here we go", "deal", "bid", "agree",
    "win", "defeat", "victory", "eliminate", "knockout", "semifinal", "semi-final", "final", "qualify",
    "champions league", "world cup", "mbappe", "yamal", "haaland", "kane", "bellingham"
  ];

  const mediumKeywords = [
    "lineup", "tactics", "preview", "weather", "kick-off", "kickoff", "stadium"
  ];

  let matchesPremium = 0;
  for (const kw of premiumKeywords) {
    if (headline.includes(kw)) matchesPremium++;
  }

  let matchesMedium = 0;
  for (const kw of mediumKeywords) {
    if (headline.includes(kw)) matchesMedium++;
  }

  if (matchesPremium > 0) {
    price += Math.min(0.0008, matchesPremium * 0.0002);
  } else if (matchesMedium > 0) {
    price += Math.min(0.0001, matchesMedium * 0.00005);
  }

  // Add deterministic headline hash variation (up to $0.000099 / 99 units)
  let hash = 0;
  for (let i = 0; i < headline.length; i++) {
    hash = (hash << 5) - hash + headline.charCodeAt(i);
    hash |= 0;
  }
  const variation = Math.abs(hash % 100) / 1000000;
  price = Number((price + variation).toFixed(6));

  return Math.min(0.001, Math.max(0.000001, price));
};

if (!/^0x[a-fA-F0-9]{40}$/.test(sellerAddress)) {
  console.error("Set X402_SELLER_ADDRESS to the EVM address that should receive x402 payments.");
  process.exit(1);
}

const app = express();
const gateway = createGatewayMiddleware({
  sellerAddress,
  facilitatorUrl: process.env.X402_FACILITATOR_URL || "https://gateway-api-testnet.circle.com",
  networks: ["eip155:5042002"]
});

app.get("/health", (_req, res) => {
  res.json({ ok: true, service: "siftle-x402-seller", price: "dynamic" });
});

app.get("/x402/ai-briefing", (req, res, next) => {
  const topic = String(req.query.topic || "World Cup market news").slice(0, 140);
  const storyPrice = calculateAutonomousUnlockPrice(topic);
  const priceStr = `$${storyPrice.toFixed(6)}`;
  gateway.require(priceStr)(req, res, next);
}, (req, res) => {
  const topic = String(req.query.topic || "World Cup market news").slice(0, 140);
  const paid = req.payment || {};
  console.log("[X402 SELLER] Paid AI briefing", {
    topic,
    paidBy: paid.payer || null,
    paidAmount: paid.amount || null,
    network: paid.network || null
  });
  res.json({
    service: "Siftle AI Briefing Agent",
    model: "local-smoke-test",
    topic,
    paidBy: paid.payer || null,
    paidAmount: paid.amount || null,
    network: paid.network || null,
    briefing: {
      whatHappened: `${topic} is being treated as a decision signal for readers and predictors.`,
      keyPoints: [
        "The user paid per AI briefing call instead of subscribing.",
        "The briefing transforms raw news into concise decision context.",
        "This local route demonstrates the RFB 02 pay-per-call agent flow."
      ],
      takeaway: "Siftle can monetize AI analysis per use with x402 nanopayments while keeping the existing product flow."
    }
  });
});

app.listen(port, () => {
  console.log(`Siftle x402 seller running on port ${port}`);
  console.log(`Paid endpoint: http://localhost:${port}/x402/ai-briefing?topic=Germany%20coach%20news`);
  console.log("Price: dynamic");
});
