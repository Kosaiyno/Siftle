import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve(process.cwd());
const apiBase = (process.env.SIFTLE_API_BASE || process.env.PUBLIC_API_BASE_URL || "").replace(/\/$/, "");
const outputPath = join(root, "dist", "client-config.js");

mkdirSync(join(root, "dist"), { recursive: true });
writeFileSync(outputPath, `window.SIFTLE_API_BASE = ${JSON.stringify(apiBase)};\n`);

