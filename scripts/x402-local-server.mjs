import express from "express";
import { createGatewayMiddleware } from "@circle-fin/x402-batching/server";

const port = Number(process.env.PORT || process.env.X402_PORT || 4020);
const sellerAddress = process.env.X402_SELLER_ADDRESS || process.env.ARC_DEPLOYER_ADDRESS || "";
const price = process.env.X402_PRICE || "$0.001";

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
  res.json({ ok: true, service: "siftle-x402-seller", price });
});

app.get("/x402/ai-briefing", gateway.require(price), (req, res) => {
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
  console.log(`Price: ${price}`);
});
