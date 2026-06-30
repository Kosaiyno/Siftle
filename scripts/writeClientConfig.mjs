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
  "wc-ivory-coast-eliminate-norway": publicValue("SIFTLE_MARKET_IVORY_COAST_NORWAY_ADDRESS") || "0xA9ba7b00F60dc541c1C73917Aba92577F3d1A252",
  "wc-haaland-outscore-mbappe": publicValue("SIFTLE_MARKET_HAALAND_MBAPPE_ADDRESS") || "0x74f77d841d1a3e664Ba6C70f13a6E93E95dEA9D9",
  "wc-france-sweden-spread": publicValue("SIFTLE_MARKET_FRANCE_SWEDEN_ADDRESS") || "0x18EF2D26ec18a4cd2835216E736a6655fFB8136D",
  "transfer-davies-realmadrid": publicValue("SIFTLE_MARKET_DAVIES_ADDRESS") || "0xa8D7bd361e33aE4dd9638D3afA9f1f01f0018423",
  "transfer-tonali-spurs": publicValue("SIFTLE_MARKET_TONALI_ADDRESS") || "0xB4F9E7a45aB1B4D26D71e32b67565cE875220615",
  "transfer-guimaraes-arsenal": publicValue("SIFTLE_MARKET_GUIMARAES_ADDRESS") || "0xc83F2feA4b9cF25d074c4a8F26D13f26156b496B",
  "wc-mbappe-haaland-goals": publicValue("SIFTLE_MARKET_MBAPPE_HAALAND_ADDRESS") || "0x1a88012C4a397085FB49cD00185Ce4E9cb0bB768",
  "wc-england-panama-spread": publicValue("SIFTLE_MARKET_ENGLAND_PANAMA_ADDRESS") || "0x0e7a9A2D2e9D7ef96E967bd89816d138829Cb73c",
  "wc-croatia-ghana-spread": publicValue("SIFTLE_MARKET_CROATIA_GHANA_ADDRESS") || "0x6e7A9A2D2e9D7ef96E967bd89816d138829Cb73c",
  "wc-scotland-qualification": publicValue("SIFTLE_MARKET_SCOTLAND_ADDRESS") || "0xb7315D790Ab4FbED3bD7B50477984F7aE6Eabf14",
  "manga-onepiece-1200": publicValue("SIFTLE_MARKET_ONE_PIECE_ADDRESS") || "0x6AC2CFa9112C40b9D4A2Bd9d49aC82859889057c",
  "wc-messi-ronaldo-16": publicValue("SIFTLE_MARKET_MESSI_RONALDO_ADDRESS") || "0x4aBc5E6Adcf26E35d70A2b38506896CEd8170a09"
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
