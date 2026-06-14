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
const marketAddresses = {
  "new-glenn-2026": publicValue("SIFTLE_MARKET_NEW_GLENN_ADDRESS"),
  "strategy-bitcoin-sale": publicValue("SIFTLE_MARKET_STRATEGY_BTC_SALE_ADDRESS"),
  "nba-finals": publicValue("SIFTLE_MARKET_NBA_FINALS_ADDRESS"),
  "england-world-cup-opener": publicValue("SIFTLE_MARKET_ENGLAND_WORLD_CUP_OPENER_ADDRESS"),
  "neymar-world-cup-opener": publicValue("SIFTLE_MARKET_NEYMAR_WORLD_CUP_OPENER_ADDRESS"),
  "iran-world-cup-visas": publicValue("SIFTLE_MARKET_IRAN_WORLD_CUP_VISAS_ADDRESS")
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
    `window.SIFTLE_MARKET_ADDRESSES = ${JSON.stringify(marketAddresses)};`,
    ""
  ].join("\n")
);
