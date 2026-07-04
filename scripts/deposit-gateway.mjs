import { GatewayClient } from "@circle-fin/x402-batching/client";
import * as dotenv from "dotenv";
dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  console.error("Supabase config not found in env.");
  process.exit(1);
}

async function supabaseRequest(path) {
  const response = await fetch(`${supabaseUrl}/rest/v1/${path}`, {
    method: "GET",
    headers: {
      apikey: supabaseServiceRoleKey,
      Authorization: `Bearer ${supabaseServiceRoleKey}`,
      "Content-Type": "application/json"
    }
  });
  if (!response.ok) throw new Error(`Supabase error: ${response.statusText}`);
  return await response.json();
}

async function run() {
  const targetAddress = "0x579c5215aea56aa586164c7d2d2ae1da5f865419";
  console.log("Fetching user from Supabase...");
  const rows = await supabaseRequest(`backend_wallet_users?wallet_address=eq.${encodeURIComponent(targetAddress)}&select=email,wallet_address,private_key&limit=1`);
  const user = rows?.[0];
  if (!user) {
    console.error("User not found.");
    process.exit(1);
  }

  console.log("Depositing 0.05 USDC to Gateway for", user.email, "...");
  const buyer = new GatewayClient({
    chain: "arcTestnet",
    privateKey: user.private_key
  });

  const tx = await buyer.deposit("0.05");
  console.log("Deposit completed successfully! Tx:", tx);

  const balances = await buyer.getBalances();
  console.log("New Balances:", JSON.stringify(balances, (key, value) => typeof value === 'bigint' ? value.toString() : value, 2));
}

run().catch(console.error);
