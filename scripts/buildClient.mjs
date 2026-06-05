import { build } from "esbuild";

await build({
  entryPoints: ["src/main.ts"],
  bundle: true,
  format: "esm",
  platform: "browser",
  target: ["es2020"],
  outfile: "dist/main.js",
  sourcemap: false,
  minify: true
});
