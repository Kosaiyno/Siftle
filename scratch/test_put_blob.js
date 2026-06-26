import { Account, Ed25519PrivateKey, Network } from "@aptos-labs/ts-sdk";
import { ShelbyNodeClient } from "@shelby-protocol/sdk/node";
import { generateCommitments } from "@shelby-protocol/sdk/node";
import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config({ path: resolve(process.cwd(), '.env') });

const signer = Account.fromPrivateKey({
  privateKey: new Ed25519PrivateKey(process.env.SHELBY_PRIVATE_KEY)
});

const client = new ShelbyNodeClient({
  network: Network.SHELBYNET,
  apiKey: process.env.SHELBY_API_KEY,
  rpc: {
    baseUrl: process.env.SHELBY_RPC_URL,
    apiKey: process.env.SHELBY_API_KEY
  },
  indexer: {
    apiKey: process.env.SHELBY_API_KEY
  },
  orderless: true
});

const testData = {
  date: "2026-06-15",
  category: "TestCustom",
  generated_at: new Date().toISOString()
};

const blobName = `siftle/feeds/2026-06-15/testcustom.json`;
const blobData = new TextEncoder().encode(JSON.stringify(testData));

async function run() {
  console.log("Registering blob...");
  const provider = await client.getProvider();
  const commitments = await generateCommitments(provider, blobData);
  
  const existing = await client.coordination.getBlobMetadata({
    account: signer.accountAddress,
    name: blobName
  });
  
  if (!existing) {
    console.log("Blob not registered. Registering now...");
    const { transaction } = await client.coordination.registerBlob({
      account: signer,
      blobName,
      blobMerkleRoot: commitments.blob_merkle_root,
      size: blobData.length,
      expirationMicros: (Date.now() + 86400 * 1000) * 1000,
      config: provider.config
    });
    await client.coordination.aptos.waitForTransaction({
      transactionHash: transaction.hash
    });
    console.log("Registered!");
  } else {
    console.log("Already registered!");
  }
  
  console.log("Uploading data using putBlob...");
  await client.rpc.putBlob({
    account: signer.accountAddress,
    blobName,
    blobData
  });
  console.log("Done!");
}

run().catch(console.error);
