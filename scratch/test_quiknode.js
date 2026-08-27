import { JsonRpcProvider } from "ethers";

const quiknodeUrl = "https://blue-multi-road.arc-testnet.quiknode.pro/9eb86bd68b10edbe6285636f26025c0f056baad5/";

async function run() {
  console.log("Testing connection to Quiknode RPC via JsonRpcProvider...");
  const provider = new JsonRpcProvider(quiknodeUrl, 5042002);
  try {
    const blockNumber = await provider.getBlockNumber();
    console.log("SUCCESS! Block number:", blockNumber);
  } catch (err) {
    console.error("FAILED to connect to Quiknode provider:", err);
  }
}

run();
