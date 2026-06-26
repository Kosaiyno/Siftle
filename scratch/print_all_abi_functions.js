import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";
import dotenv from "dotenv";
dotenv.config();

const rpcUrl = process.env.SHELBY_RPC_URL || "https://api.shelbynet.shelby.xyz/shelby";
const network = rpcUrl.includes("shelby") ? Network.SHELBYNET : Network.TESTNET;

const aptos = new Aptos(new AptosConfig({
  network,
  fullnode: rpcUrl
}));

const contractAddress = "0x85fdb9a176ab8ef1d9d9c1b60d60b3924f0800ac1de1cc2085fb0b8bb4988e6a";

async function main() {
  console.log(`Fetching module ABI for ${contractAddress}::blob_metadata...`);
  const moduleInfo = await aptos.getAccountModule({
    accountAddress: contractAddress,
    moduleName: "blob_metadata"
  });
  
  console.log('--- All ABI Functions ---');
  const functions = moduleInfo.abi.exposed_functions;
  for (const f of functions) {
    console.log(`Function: ${f.name} (entry: ${f.is_entry}, visibility: ${f.visibility})`);
    console.log(`  Params:`, f.params);
    console.log(`  Return:`, f.return);
  }
}

main().catch(console.error);
