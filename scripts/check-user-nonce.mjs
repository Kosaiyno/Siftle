import { JsonRpcProvider } from "ethers";

const provider = new JsonRpcProvider("https://rpc.testnet.arc.network", 5042002);
const address = "0x579c5215AEa56aa586164C7d2d2ae1DA5F865419";

async function check() {
  const transactionCount = await provider.getTransactionCount(address, "latest");
  const pendingTransactionCount = await provider.getTransactionCount(address, "pending");
  console.log("Address:", address);
  console.log("Transaction count (latest):", transactionCount);
  console.log("Transaction count (pending):", pendingTransactionCount);
  console.log("Difference (pending transactions):", pendingTransactionCount - transactionCount);
}

check().catch(console.error);
