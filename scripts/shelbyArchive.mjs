import { Account, Ed25519PrivateKey, Network } from "@aptos-labs/ts-sdk";
import { ShelbyNodeClient } from "@shelby-protocol/sdk/node";

const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();

const normalizeNetwork = (value = "TESTNET") => {
  const normalized = value.toLowerCase();
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
  const retentionDays = Number(process.env.SHELBY_RETENTION_DAYS || 365);
  const durationMs = Math.max(1, retentionDays) * 24 * 60 * 60 * 1000;
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

  await client.upload({
    signer,
    blobData,
    blobName,
    expirationMicros: getExpirationMicros()
  });

  return {
    provider: "shelby",
    blob_name: blobName,
    account: signer.accountAddress.toString(),
    rpc_url: process.env.SHELBY_RPC_URL
  };
};

const downloadShelbyBlob = async (blobName) => {
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
  const blobs = await client.coordination.getAccountBlobs({
    account: process.env.SHELBY_ACCOUNT_ADDRESS || signer.accountAddress,
    pagination: { limit: 200, offset: 0 }
  });

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
        size: blob.size
      };
    })
    .filter(Boolean);
};
