import { JsonRpcProvider, Contract, formatUnits } from "ethers";

const RPC_URL = "https://rpc.testnet.arc.network";
const USDC_ADDRESS = "0x3600000000000000000000000000000000000000";
const TREASURY_ADDRESS = "0x2f5fc4f223875b5F453C5534C50f926b114091B7";

const ERC20_ABI = [
  "event Transfer(address indexed from, address indexed to, uint256 value)"
];

async function main() {
  console.log("Connecting to Arc Testnet RPC...");
  const provider = new JsonRpcProvider(RPC_URL);
  const usdcContract = new Contract(USDC_ADDRESS, ERC20_ABI, provider);
  const filter = usdcContract.filters.Transfer(null, TREASURY_ADDRESS);
  
  const currentBlock = await provider.getBlockNumber();
  const totalBlocksToScan = 200000; // Scan the last 200,000 blocks (~2 days or more depending on block time)
  const chunkSize = 5000;
  
  let startBlock = Math.max(0, currentBlock - totalBlocksToScan);
  console.log(`Scanning USDC transfers from block ${startBlock} to ${currentBlock} in chunks of ${chunkSize}...`);
  
  const allEvents = [];
  
  for (let fromBlock = startBlock; fromBlock < currentBlock; fromBlock += chunkSize) {
    const toBlock = Math.min(currentBlock, fromBlock + chunkSize - 1);
    console.log(`Scanning block range: ${fromBlock} to ${toBlock}...`);
    try {
      const events = await usdcContract.queryFilter(filter, fromBlock, toBlock);
      if (events.length > 0) {
        allEvents.push(...events);
      }
    } catch (err) {
      console.error(`Error querying range ${fromBlock}-${toBlock}: ${err.message}`);
    }
  }

  console.log(`\nFound ${allEvents.length} total transactions in the scanned range.\n`);

  for (const event of allEvents) {
    const { from, to, value } = event.args;
    const txHash = event.transactionHash;
    const blockNumber = event.blockNumber;
    const formattedAmount = formatUnits(value, 6);
    
    console.log(`Block #${blockNumber} | Tx: ${txHash}`);
    console.log(`  From:   ${from}`);
    console.log(`  Amount: ${formattedAmount} USDC`);
    console.log("--------------------------------------------------");
  }
}

main().catch(console.error);
