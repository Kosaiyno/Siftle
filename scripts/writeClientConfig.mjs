import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve(process.cwd());
const localEnv = existsSync(join(root, ".env"))
  ? Object.fromEntries(
      readFileSync(join(root, ".env"), "utf8")
        .split(/\r?\n/)
        .filter((line) => line && !line.trimStart().startsWith("#") && line.includes("="))
        .map((line) => {
          const separator = line.indexOf("=");
          return [line.slice(0, separator).trim(), line.slice(separator + 1).trim()];
        })
    )
  : {};
const publicValue = (name) => process.env[name] || localEnv[name] || "";
const apiBase = (publicValue("SIFTLE_API_BASE") || publicValue("PUBLIC_API_BASE_URL")).replace(/\/$/, "");
const reownProjectId = publicValue("REOWN_PROJECT_ID") || publicValue("WALLETCONNECT_PROJECT_ID");
const circleAppId = publicValue("CIRCLE_APP_ID");
const arcUsdcAddress = publicValue("ARC_TESTNET_USDC_ADDRESS");
let arcRpcUrl = publicValue("ARC_TESTNET_RPC_URL");
if (!arcRpcUrl || arcRpcUrl === "https://rpc.testnet.arc.network") {
  arcRpcUrl = "https://5042002.rpc.thirdweb.com";
}
const marketAddresses = {
  "wc-spain-austria-spread": publicValue("SIFTLE_MARKET_SPAIN_AUSTRIA_SPREAD_ADDRESS") || "0x123580A3Af7E22a591a460E249346a3beeCEd930",
  "wc-ronaldo-score-assist-croatia": publicValue("SIFTLE_MARKET_RONALDO_CROATIA_ADDRESS") || "0xBccb9DC161C1260F3074752f4D1579a74bD86490",
  "wc-portugal-croatia-extra-time": publicValue("SIFTLE_MARKET_PORTUGAL_CROATIA_EXTRA_TIME_ADDRESS") || "0x18de1CD95b5c34cc5189e31510AD0C71123345cE",
  "transfer-tonali-spurs": publicValue("SIFTLE_MARKET_TONALI_ADDRESS") || "0xB4F9E7a45aB1B4D26D71e32b67565cE875220615",
  "transfer-guimaraes-arsenal": publicValue("SIFTLE_MARKET_GUIMARAES_ADDRESS") || "0xc83F2feA4b9cF25d074c4a8F26D13f26156b496B"
};
const outputPath = join(root, "dist", "client-config.js");

mkdirSync(join(root, "dist"), { recursive: true });
writeFileSync(
  outputPath,
  [
    `window.SIFTLE_API_BASE = ${JSON.stringify(apiBase)};`,
    `window.REOWN_PROJECT_ID = ${JSON.stringify(reownProjectId)};`,
    `window.CIRCLE_APP_ID = ${JSON.stringify(circleAppId)};`,
    `window.ARC_TESTNET_USDC_ADDRESS = ${JSON.stringify(arcUsdcAddress)};`,
    `window.ARC_TESTNET_RPC_URL = ${JSON.stringify(arcRpcUrl)};`,
    `window.SIFTLE_MARKET_ADDRESSES = ${JSON.stringify(marketAddresses)};`,
    ""
  ].join("\n")
);
