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
  "wc-england-score-both-halves-drc": publicValue("SIFTLE_MARKET_ENGLAND_DRC_BOTH_HALVES_ADDRESS") || "0x226BfF2b5A5e4F5686cfB37FaD7Dd345CfD68e01",
  "wc-de-bruyne-score-assist-senegal": publicValue("SIFTLE_MARKET_DE_BRUYNE_SENEGAL_ADDRESS") || "0x3603A839044Cc187A5B564C1b413BB764E8dA4E1",
  "wc-usa-score-before-20-bosnia": publicValue("SIFTLE_MARKET_USA_BOSNIA_EARLY_GOAL_ADDRESS") || "0x1B890c4F066BC260cE3F0a8266303052080a0FB4",
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
    `window.SIFTLE_MARKET_ADDRESSES = ${JSON.stringify(marketAddresses)};`,
    ""
  ].join("\n")
);
