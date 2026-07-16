import { GatewayClient } from "@circle-fin/x402-batching/client";

const privateKey = process.env.X402_PRIVATE_KEY || "";
const targetUrl = process.env.X402_TARGET_URL || "http://localhost:4020/x402/ai-briefing?topic=Germany%20coach%20news";
const autoDeposit = process.env.X402_AUTO_DEPOSIT_USDC || "";

if (!/^0x[a-fA-F0-9]{64}$/.test(privateKey)) {
  console.error("Set X402_PRIVATE_KEY to an EOA private key funded with Arc Testnet USDC.");
  console.error("Circle Gateway nanopayments require an EOA signer; Circle Programmable Wallet/SCA signatures are not supported for this buyer flow.");
  process.exit(1);
}

const client = new GatewayClient({
  chain: "arcTestnet",
  privateKey,
  rpcUrl: process.env.ARC_TESTNET_RPC_URL || "https://5042002.rpc.thirdweb.com"
});

console.log(`Buyer: ${client.address}`);
console.log(`Target: ${targetUrl}`);

const before = await client.getBalances();
console.log(`Wallet USDC: ${before.wallet.formatted}`);
console.log(`Gateway available: ${before.gateway.formattedAvailable}`);

const support = await client.supports(targetUrl);
if (!support.supported) {
  console.error("Target does not advertise a compatible Circle Gateway x402 payment option.");
  console.error(support);
  process.exit(1);
}

const requiredPriceBaseUnits = support.price || 100n; // fallback to 0.0001 USDC

if (autoDeposit) {
  const currentAvailable = before.gateway?.available || 0n;
  if (currentAvailable < requiredPriceBaseUnits) {
    console.log(`Gateway available balance (${before.gateway.formattedAvailable}) is below required price (${support.priceFormatted || "0.0001"} USDC). Depositing ${autoDeposit} USDC...`);
    const deposit = await client.deposit(autoDeposit);
    console.log(`Deposit tx: ${deposit.depositTxHash}`);
    const warmed = await client.getBalances();
    console.log(`Gateway available after deposit: ${warmed.gateway.formattedAvailable}`);
  } else {
    console.log(`Gateway available balance (${before.gateway.formattedAvailable}) is sufficient. Skipping auto-deposit.`);
  }
}

const paid = await client.pay(targetUrl);
console.log(`Paid amount: ${paid.amount || "unknown"} USDC`);
console.log("Response:");
console.dir(paid.data, { depth: 8 });

const after = await client.getBalances();
console.log(`Gateway available after: ${after.gateway.formattedAvailable}`);
