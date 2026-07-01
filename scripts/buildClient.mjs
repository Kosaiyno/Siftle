import { build } from "esbuild";
import { join, resolve } from "node:path";

const root = resolve(process.cwd());

const nodeShimsPlugin = {
  name: "node-shims",
  setup(build) {
    build.onResolve({ filter: /^stream$/ }, () => {
      return { path: join(root, "src", "streamShim.js") };
    });
    build.onResolve({ filter: /^crypto$/ }, () => {
      return { path: join(root, "src", "cryptoShim.js") };
    });
  }
};

await build({
  entryPoints: ["src/main.ts"],
  bundle: true,
  splitting: true,
  format: "esm",
  platform: "browser",
  target: ["es2020"],
  outdir: "dist",
  entryNames: "main",
  chunkNames: "chunks/[name]-[hash]",
  sourcemap: false,
  minify: true,
  plugins: [nodeShimsPlugin]
});
