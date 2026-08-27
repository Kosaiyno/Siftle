#!/usr/bin/env node
/**
 * Arc Testnet Market Transaction Analyzer
 * Queries actual on-chain data for all Siftle market contracts
 * No analytics, no localStorage - only blockchain RPC data
 */

// Market addresses from .env and dist/client-config.js
const MARKETS = [
  { name: "Davies", address: "0xa8D7bd361e33aE4dd9638D3afA9f1f01f0018423" },
  { name: "Tonali", address: "0xB4F9E7a45aB1B4D26D71e32b67565cE875220615" },
  { name: "Guimaraes", address: "0xc83F2feA4b9cF25d074c4a8F26D13f26156b496B" },
  { name: "Mbappe vs Haaland", address: "0x1a88012C4a397085FB49cD00185Ce4E9cb0bB768" },
  { name: "England vs Panama", address: "0x0e7a9A2D2e9D7ef96E967bd89816d138829Cb73c" },
  { name: "Scotland", address: "0xb7315D790Ab4FbED3bD7B50477984F7aE6Eabf14" },
  { name: "One Piece", address: "0x6AC2CFa9112C40b9D4A2Bd9d49aC82859889057c" },
  { name: "Messi vs Ronaldo", address: "0x4aBc5E6Adcf26E35d70A2b38506896CEd8170a09" },
  { name: "Vinicius vs Japan", address: "0xa7886aF4C0D359bA16DD63017962D5CD125a5E7F" },
  { name: "Morocco vs Netherlands", address: "0x1c358D8f0cFBaF6Adb2c85Ebd16fcf8F8fa88B7d" },
  { name: "Paraguay vs Germany", address: "0xcC0A41d7B8Ae967c28e981F96BFc9c833B7B0e75" },
  { name: "Ivory Coast vs Norway", address: "0xA9ba7b00F60dc541c1C73917Aba92577F3d1A252" },
  { name: "Haaland vs Mbappe (2)", address: "0x74f77d841d1a3e664Ba6C70f13a6E93E95dEA9D9" },
  { name: "France vs Sweden", address: "0x18EF2D26ec18a4cd2835216E736a6655fFB8136D" },
  { name: "Spain vs Austria", address: "0x123580A3Af7E22a591a460E249346a3beeCEd930" },
  { name: "Ronaldo vs Croatia", address: "0xBccb9DC161C1260F3074752f4D1579a74bD86490" },
  { name: "Portugal vs Croatia", address: "0x18de1CD95b5c34cc5189e31510AD0C71123345cE" },
];

const RPC_URL = "https://5042002.rpc.thirdweb.com";
const CHAIN_ID = 5042002;

// Event signatures for SharesBought and SharesSold
const SHARES_BOUGHT_SIGNATURE = "0x7c19f7f49fa75f6e8b1d8f32e71b9e5e80b9e8f9e5b6f5e4d3c2b1a0f9e8d7c"; // Placeholder
const SHARES_SOLD_SIGNATURE = "0x6f3bf6f49fa75f6e8b1d8f32e71b9e5e80b9e8f9e5b6f5e4d3c2b1a0f9e8d7c";  // Placeholder

async function callRpc(method, params) {
  const postData = JSON.stringify({
    jsonrpc: "2.0",
    method,
    params,
    id: 1,
  });

  try {
    const response = await fetch(RPC_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: postData,
    });

    const data = await response.json();
    if (data.error) {
      throw new Error(data.error.message);
    }
    return data.result;
  } catch (e) {
    throw e;
  }
}

async function getLatestBlock() {
  const blockNumber = await callRpc("eth_blockNumber", []);
  return parseInt(blockNumber, 16);
}

async function getTransactionReceipt(txHash) {
  try {
    return await callRpc("eth_getTransactionReceipt", [txHash]);
  } catch (e) {
    return null;
  }
}

async function getTransactionByHash(txHash) {
  try {
    return await callRpc("eth_getTransactionByHash", [txHash]);
  } catch (e) {
    return null;
  }
}

async function getLogs(address, fromBlock, toBlock) {
  try {
    return await callRpc("eth_getLogs", [
      {
        address: address,
        fromBlock: "0x" + fromBlock.toString(16),
        toBlock: "0x" + toBlock.toString(16),
      },
    ]);
  } catch (e) {
    console.error(`Error getting logs for ${address}:`, e.message);
    return [];
  }
}

async function analyzeMarket(market, latestBlock) {
  console.log(`\n📊 Analyzing: ${market.name}`);
  console.log(`   Address: ${market.address}`);
  
  const maxBlockRange = 1000; // Thirdweb RPC limit
  const lookbackBlocks = 50000;
  let fromBlock = Math.max(0, latestBlock - lookbackBlocks);
  let toBlock = latestBlock;
  
  const allLogs = [];
  
  try {
    // Query in chunks of 1000 blocks
    while (fromBlock <= toBlock) {
      const chunkTo = Math.min(fromBlock + maxBlockRange - 1, toBlock);
      try {
        const logs = await getLogs(market.address, fromBlock, chunkTo);
        if (logs && logs.length > 0) {
          allLogs.push(...logs);
          console.log(`   ✓ Block ${fromBlock}-${chunkTo}: ${logs.length} logs`);
        }
      } catch (e) {
        console.log(`   ⚠️ Block ${fromBlock}-${chunkTo}: ${e.message.slice(0, 50)}`);
      }
      fromBlock = chunkTo + 1;
      // Rate limit
      await new Promise(r => setTimeout(r, 100));
    }
    
    if (!allLogs || allLogs.length === 0) {
      console.log("   ❌ No transactions found in last 50,000 blocks");
      return {
        address: market.address,
        name: market.name,
        totalTx: 0,
        successfulTx: 0,
        failedTx: 0,
        uniqueTraders: 0,
        txHashes: [],
      };
    }

    console.log(`   ✅ Found ${allLogs.length} total logs`);
    
    const txHashes = new Set();
    const uniqueTraders = new Set();
    let successCount = 0;
    let failCount = 0;

    for (const log of allLogs) {
      txHashes.add(log.transactionHash);
      
      // Extract trader addresses from log
      if (log.topics && log.topics.length > 0) {
        if (log.topics[1]) {
          const address = "0x" + log.topics[1].slice(-40);
          uniqueTraders.add(address);
        }
        if (log.topics[2]) {
          const address = "0x" + log.topics[2].slice(-40);
          uniqueTraders.add(address);
        }
      }
    }

    // Check receipt status for each transaction (with sampling to avoid rate limit)
    const sampleSize = Math.min(txHashes.size, 20);
    const sampleTxes = Array.from(txHashes).slice(0, sampleSize);
    
    for (const txHash of sampleTxes) {
      const receipt = await getTransactionReceipt(txHash);
      if (receipt) {
        const status = receipt.status === "0x1" ? 1 : 0;
        if (status === 1) {
          successCount++;
        } else {
          failCount++;
        }
      }
      await new Promise(r => setTimeout(r, 50));
    }

    return {
      address: market.address,
      name: market.name,
      totalTx: txHashes.size,
      successfulTx: successCount,
      failedTx: failCount,
      uniqueTraders: uniqueTraders.size,
      txHashes: Array.from(txHashes).slice(0, 3),
    };
  } catch (e) {
    console.error(`   ⚠️ Error analyzing:`, e.message);
    return {
      address: market.address,
      name: market.name,
      error: e.message,
    };
  }
}

async function main() {
  console.log("🔍 SIFTLE PRODUCTION MARKET ON-CHAIN ANALYSIS");
  console.log(`Arc Testnet: ${CHAIN_ID}`);
  console.log(`RPC: ${RPC_URL}`);
  console.log("=".repeat(80));

  try {
    const latestBlock = await getLatestBlock();
    console.log(`\n📦 Latest block: ${latestBlock}`);
    console.log(`Analyzing last 50,000 blocks (~${(50000 / 14).toFixed(0)} days at 14s/block)\n`);

    const results = [];
    for (const market of MARKETS) {
      const result = await analyzeMarket(market, latestBlock);
      results.push(result);
      // Rate limit - don't hammer the RPC
      await new Promise(r => setTimeout(r, 200));
    }

    // Summary
    console.log("\n" + "=".repeat(80));
    console.log("📊 SUMMARY TABLE");
    console.log("=".repeat(80));
    
    let totalAllMarkets = 0;
    let totalSuccessful = 0;
    let totalFailed = 0;
    let totalUnique = 0;

    console.log(
      "Market Name".padEnd(30) +
      "Total TX".padEnd(12) +
      "Success".padEnd(12) +
      "Failed".padEnd(12) +
      "Traders".padEnd(12)
    );
    console.log("-".repeat(80));

    for (const result of results) {
      if (result.error) {
        console.log(`${result.name.padEnd(30)} ERROR: ${result.error}`);
      } else {
        console.log(
          result.name.padEnd(30) +
          String(result.totalTx).padEnd(12) +
          String(result.successfulTx).padEnd(12) +
          String(result.failedTx).padEnd(12) +
          String(result.uniqueTraders).padEnd(12)
        );
        totalAllMarkets += result.totalTx;
        totalSuccessful += result.successfulTx;
        totalFailed += result.failedTx;
        totalUnique += result.uniqueTraders;
      }
    }

    console.log("-".repeat(80));
    console.log(
      "TOTAL".padEnd(30) +
      String(totalAllMarkets).padEnd(12) +
      String(totalSuccessful).padEnd(12) +
      String(totalFailed).padEnd(12) +
      String(totalUnique).padEnd(12)
    );

    console.log("\n" + "=".repeat(80));
    console.log("🎯 KEY FINDING");
    console.log("=".repeat(80));
    console.log(`Total on-chain transactions across all markets: ${totalAllMarkets}`);
    console.log(`Compare to claimed "722 trades": ${totalAllMarkets === 0 ? "❌ NO MATCH" : totalAllMarkets === 722 ? "✅ EXACT MATCH" : `⚠️ MISMATCH (${totalAllMarkets} vs 722)`}`);
    console.log(`Unique trader wallets found: ${totalUnique}`);
    
    // Detailed results
    console.log("\n" + "=".repeat(80));
    console.log("📋 DETAILED RESULTS");
    console.log("=".repeat(80));
    
    for (const result of results) {
      if (!result.error) {
        console.log(`\n${result.name} (${result.address})`);
        console.log(`  Total Transactions: ${result.totalTx}`);
        console.log(`  Successful: ${result.successfulTx}`);
        console.log(`  Failed: ${result.failedTx}`);
        console.log(`  Unique Traders: ${result.uniqueTraders}`);
        if (result.txHashes.length > 0) {
          console.log(`  Sample TX Hashes:`);
          result.txHashes.forEach(hash => {
            console.log(`    - ${hash}`);
          });
        }
      }
    }

  } catch (e) {
    console.error("Fatal error:", e);
    process.exit(1);
  }
}

main().catch(console.error);
