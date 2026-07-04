import { GatewayClient } from "@circle-fin/x402-batching/client";
import { setDefaultResultOrder } from "node:dns";

setDefaultResultOrder("ipv4first");

const privateKey = "0xb0a272e63e66d5088de9ea171b94ba13dd48744f9b8ccb96548e4a9264d20860";
const targetUrl = "https://siftle-x402-seller.onrender.com/x402/ai-briefing?topic=Tonali%20negotiation%20status";

async function run() {
  const buyer = new GatewayClient({
    chain: "arcTestnet",
    privateKey
  });
  console.log("Checking support for targetUrl:", targetUrl);
  try {
    const support = await buyer.supports(targetUrl);
    console.log("Support response:", JSON.stringify(support, null, 2));
  } catch (err) {
    console.error("Support check failed:", err);
  }
}

run().catch(console.error);
