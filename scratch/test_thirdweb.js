import { JsonRpcProvider } from "ethers";

const thirdwebUrl = "https://5042002.rpc.thirdweb.com";

async function run() {
  console.log("Testing connection to Thirdweb RPC via JsonRpcProvider...");
  const provider = new JsonRpcProvider(thirdwebUrl, 5042002);
  try {
    const blockNumber = await provider.getBlockNumber();
    console.log("SUCCESS! Block number:", blockNumber);
  } catch (err) {
    console.error("FAILED to connect to Thirdweb provider:", err);
  }
}

run();
