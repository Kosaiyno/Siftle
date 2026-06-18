import { Account, Ed25519PrivateKey, Network } from "@aptos-labs/ts-sdk";
import { ShelbyNodeClient, generateCommitments } from "@shelby-protocol/sdk/node";

const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();

const normalizeNetwork = (value) => {
  const rpcUrl = String(process.env.SHELBY_RPC_URL || "").toLowerCase();
  const normalized = String(value || (rpcUrl.includes("shelby") ? "shelbynet" : "TESTNET")).toLowerCase();
  if (normalized === "shelbynet") return Network.SHELBYNET;
  if (normalized === "devnet") return Network.SHELBYNET;
  if (normalized === "local") return Network.LOCAL;
  return Network.TESTNET;
};

export const isShelbyArchiveConfigured = () =>
  Boolean(
    process.env.SHELBY_API_KEY &&
      process.env.SHELBY_PRIVATE_KEY &&
      process.env.SHELBY_ACCOUNT_ADDRESS &&
      process.env.SHELBY_RPC_URL
  );

const getSnapshotSlug = (generatedAt) => {
  if (!generatedAt) return "";
  return generatedAt.replace(/[:.]/g, "-");
};

export const getShelbyBlobName = (date, category, generatedAt) => {
  const prefix = (process.env.SHELBY_ARCHIVE_PREFIX || "siftle/feeds").replace(/^\/+|\/+$/g, "");
  const categorySlug = category.toLowerCase();
  const snapshotSlug = getSnapshotSlug(generatedAt);
  return snapshotSlug
    ? `${prefix}/${date}/${categorySlug}/${snapshotSlug}.json`
    : `${prefix}/${date}/${categorySlug}.json`;
};

const getExpirationMicros = () => {
  // Shelbynet enforces a 48-hour maximum blob expiration limit.
  // We cap the expiration to 47 hours to avoid timezone/clock skew rejections on-chain.
  const maxDurationMs = 47 * 60 * 60 * 1000;
  const retentionDays = Number(process.env.SHELBY_RETENTION_DAYS || 2);
  const durationMs = Math.min(maxDurationMs, Math.max(1, retentionDays) * 24 * 60 * 60 * 1000);
  return (Date.now() + durationMs) * 1000;
};

let shelbyClient;
let shelbySigner;

const getShelbyClient = () => {
  if (!isShelbyArchiveConfigured()) {
    throw new Error("Shelby archive config is incomplete");
  }

  if (!shelbySigner) {
    shelbySigner = Account.fromPrivateKey({
      privateKey: new Ed25519PrivateKey(process.env.SHELBY_PRIVATE_KEY)
    });
  }

  if (!shelbyClient) {
    shelbyClient = new ShelbyNodeClient({
      network: normalizeNetwork(process.env.SHELBY_NETWORK),
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
  }

  return { client: shelbyClient, signer: shelbySigner };
};

const readStreamToText = async (readable) => {
  const reader = readable.getReader();
  const chunks = [];

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    chunks.push(value);
  }

  const totalLength = chunks.reduce((sum, chunk) => sum + chunk.length, 0);
  const bytes = new Uint8Array(totalLength);
  let offset = 0;

  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.length;
  }

  return textDecoder.decode(bytes);
};

export const uploadShelbySnapshot = async (snapshot) => {
  const { client, signer } = getShelbyClient();
  const blobName = getShelbyBlobName(snapshot.date, snapshot.category, snapshot.generated_at);
  const blobData = textEncoder.encode(JSON.stringify(snapshot, null, 2));

  // Check if blob is already registered on-chain
  const existingBlobMetadata = await client.coordination.getBlobMetadata({
    account: signer.accountAddress,
    name: blobName
  });

  if (!existingBlobMetadata) {
    const provider = await client.getProvider();
    const blobCommitments = await generateCommitments(provider, blobData);
    
    const { transaction: pendingRegisterBlobTransaction } = await client.coordination.registerBlob({
      account: signer,
      blobName: blobName,
      blobMerkleRoot: blobCommitments.blob_merkle_root,
      size: blobData.length,
      expirationMicros: getExpirationMicros(),
      config: provider.config
    });

    await client.coordination.aptos.waitForTransaction({
      transactionHash: pendingRegisterBlobTransaction.hash,
      options: {
        timeoutSecs: 90
      }
    });
  }

  // Use rpc.putBlob directly to ensure a fresh, non-resumable upload and avoid 400 Bad Request resume errors
  await client.rpc.putBlob({
    account: signer.accountAddress,
    blobName: blobName,
    blobData: blobData
  });

  return {
    provider: "shelby",
    blob_name: blobName,
    account: signer.accountAddress.toString(),
    rpc_url: process.env.SHELBY_RPC_URL
  };
};

export const downloadShelbyBlob = async (blobName) => {
  const { client, signer } = getShelbyClient();
  const blob = await client.download({
    account: process.env.SHELBY_ACCOUNT_ADDRESS || signer.accountAddress,
    blobName
  });

  return {
    snapshot: JSON.parse(await readStreamToText(blob.readable)),
    archive: {
      provider: "shelby",
      blob_name: blobName,
      account: String(blob.account),
      content_length: blob.contentLength,
      rpc_url: process.env.SHELBY_RPC_URL
    }
  };
};

export const downloadShelbySnapshot = async (date, category) => {
  try {
    const files = await listShelbyArchiveFiles();
    const latest = files
      .filter((file) => file.date === date && file.categorySlug.toLowerCase() === category.toLowerCase())
      .sort((first, second) => {
        const firstTime = first.generated_at ? new Date(first.generated_at).getTime() : 0;
        const secondTime = second.generated_at ? new Date(second.generated_at).getTime() : 0;
        return secondTime - firstTime;
      })[0];

    if (latest?.blob_name) {
      return await downloadShelbyBlob(latest.blob_name);
    }
  } catch {
    // Fall back to the legacy daily blob path below.
  }

  return downloadShelbyBlob(getShelbyBlobName(date, category));
};

export const listShelbyArchiveFiles = async () => {
  const { client, signer } = getShelbyClient();
  const prefix = (process.env.SHELBY_ARCHIVE_PREFIX || "siftle/feeds").replace(/^\/+|\/+$/g, "");
  const account = process.env.SHELBY_ACCOUNT_ADDRESS || signer.accountAddress;
  const blobs = [];
  const limit = 200;

  for (let offset = 0; offset < 5000; offset += limit) {
    const page = await client.coordination.getAccountBlobs({
      account,
      pagination: { limit, offset }
    });

    blobs.push(...page);
    if (page.length < limit) break;
  }

  return blobs
    .filter((blob) => !blob.isDeleted && blob.blobNameSuffix?.startsWith(`${prefix}/`))
    .map((blob) => {
      const match =
        blob.blobNameSuffix.match(/\/(\d{4}-\d{2}-\d{2})\/([a-z]+)\.json$/i) ||
        blob.blobNameSuffix.match(/\/(\d{4}-\d{2}-\d{2})\/([a-z]+)\/([^/]+)\.json$/i);
      if (!match) return null;

      const [, date, categorySlug, snapshotSlug] = match;
      return {
        date,
        categorySlug,
        story_count: null,
        generated_at: snapshotSlug
          ? snapshotSlug.replace(/-(\d{3})Z$/, ".$1Z").replace(/T(\d{2})-(\d{2})-(\d{2})/, "T$1:$2:$3")
          : blob.creationMicros
            ? new Date(Number(blob.creationMicros) / 1000).toISOString()
            : null,
        storage: "shelby",
        blob_name: blob.blobNameSuffix,
        size: blob.size,
        expirationMicros: blob.expirationMicros ? Number(blob.expirationMicros) : null
      };
    })
    .filter(Boolean);
};

export const backupAnalyticsToShelby = async (analyticsData) => {
  const { client, signer } = getShelbyClient();
  const prefix = (process.env.SHELBY_ARCHIVE_PREFIX || "siftle/feeds").replace(/^\/+|\/+$/g, "");
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const blobName = `${prefix}/analytics/backup-${timestamp}.json`;
  const blobData = textEncoder.encode(JSON.stringify(analyticsData, null, 2));

  const provider = await client.getProvider();
  const blobCommitments = await generateCommitments(provider, blobData);
  
  const { transaction: pendingRegisterBlobTransaction } = await client.coordination.registerBlob({
    account: signer,
    blobName: blobName,
    blobMerkleRoot: blobCommitments.blob_merkle_root,
    size: blobData.length,
    expirationMicros: getExpirationMicros(),
    config: provider.config
  });

  await client.coordination.aptos.waitForTransaction({
    transactionHash: pendingRegisterBlobTransaction.hash,
    options: { timeoutSecs: 90 }
  });

  await client.rpc.putBlob({
    account: signer.accountAddress,
    blobName: blobName,
    blobData: blobData
  });

  return blobName;
};

export const restoreAnalyticsFromShelby = async () => {
  const { client, signer } = getShelbyClient();
  const prefix = (process.env.SHELBY_ARCHIVE_PREFIX || "siftle/feeds").replace(/^\/+|\/+$/g, "");
  const account = process.env.SHELBY_ACCOUNT_ADDRESS || signer.accountAddress;
  
  const limit = 100;
  const blobs = [];
  for (let offset = 0; offset < 2000; offset += limit) {
    const page = await client.coordination.getAccountBlobs({
      account,
      pagination: { limit, offset }
    });
    blobs.push(...page);
    if (page.length < limit) break;
  }

  const backupPrefix = `${prefix}/analytics/backup-`;
  const backups = blobs
    .filter((blob) => !blob.isDeleted && blob.blobNameSuffix?.startsWith(backupPrefix))
    .sort((a, b) => b.blobNameSuffix.localeCompare(a.blobNameSuffix));

  if (backups.length === 0) {
    return null;
  }

  const latestBackupName = backups[0].blobNameSuffix;
  const blob = await client.download({
    account,
    blobName: latestBackupName
  });

  const content = await readStreamToText(blob.readable);
  return JSON.parse(content);
};

export const extendShelbyBlobExpiration = async (blobName, newExpirationMicros) => {
  const { client, signer } = getShelbyClient();
  const SHELBY_DEPLOYER = "0x85fdb9a176ab8ef1d9d9c1b60d60b3924f0800ac1de1cc2085fb0b8bb4988e6a";

  const transaction = await client.coordination.aptos.transaction.build.simple({
    data: {
      function: `${SHELBY_DEPLOYER}::blob_metadata::increase_expiration_time`,
      functionArguments: [blobName, newExpirationMicros]
    },
    sender: signer.accountAddress
  });

  const pendingTx = await client.coordination.aptos.signAndSubmitTransaction({
    signer,
    transaction
  });

  await client.coordination.aptos.waitForTransaction({
    transactionHash: pendingTx.hash,
    options: {
      timeoutSecs: 90
    }
  });

  return pendingTx.hash;
};

