import { GatewayClient } from "@circle-fin/x402-batching/client";

const privateKey = "0x00e634be07b6cf8a7237cd8ab5965ec22cd3a8aba7d2c7104677a25469dd6aab"; // amandacherry703@gmail.com or we can check the user's private key
// Let's load the private key for amandacherry or basilkosi or the user
// Wait, the user's address is 0x579c5215aea56aa586164c7d2d2ae1da5f865419.
// Let's find this user in the local backend-wallet-users.json or database.
import { readFileSync } from "fs";
import { join } from "path";

const root = process.cwd();
const users = JSON.parse(readFileSync(join(root, ".siftle", "backend-wallet-users.json"), "utf8"));
const userKey = Object.keys(users).find(k => users[k].address.toLowerCase() === "0x579c5215aea56aa586164c7d2d2ae1da5f865419");
const user = users[userKey];

if (!user) {
  console.error("User 0x579c5215aea56aa586164c7d2d2ae1da5f865419 not found locally.");
  process.exit(1);
}

async function run() {
  const buyer = new GatewayClient({
    chain: "arcTestnet",
    privateKey: user.privateKey
  });
  console.log("Checking balances for user:", user.email, "address:", user.address);
  const balances = await buyer.getBalances();
  console.log("Balances:", JSON.stringify(balances, null, 2));
}

run().catch(console.error);
