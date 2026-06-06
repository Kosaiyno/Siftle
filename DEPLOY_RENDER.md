# Deploying the Siftle backend to Render (free tier)

Follow these steps to deploy the Node backend (`scripts/serve.mjs`) to Render.

1) Connect repo
   - Go to https://dashboard.render.com and sign in with GitHub.
   - Create a new service and select your `Siftle` repository, or let Render detect the
     `render.yaml` in the repo for an automatic configuration.

2) If creating manually, use these values
   - Service type: `Web Service`
   - Environment: `Node`
   - Build command: `npm ci`
   - Start command: `npm start`
   - Instance type / Plan: `Free` (or select the free instance)

3) Environment variables (DO NOT commit secrets to git)
   - `ZERO_G_API_KEY` or `OG_COMPUTE_API_KEY` (if using 0G compute)
   - `OG_COMPUTE_PROVIDER` and optionally `OG_COMPUTE_ENDPOINT`
   - `SHELBY_API_KEY`, `SHELBY_PRIVATE_KEY`, `SHELBY_ACCOUNT_ADDRESS`, `SHELBY_RPC_URL`, `SHELBY_ARCHIVE_PREFIX` (if you use Shelby archive features)
   - Optional: `APP_TIME_ZONE`, `MAX_ARTICLE_AGE_HOURS`, `RSS_ITEMS_PER_FEED`, `THREAD_HISTORY_WINDOW_HOURS`
   - Recommended for Shelby testnet: `THREAD_HISTORY_WINDOW_HOURS=48` to align threads with the current 48-hour blob expiration window.

4) Deploy and verify
   - Deploy the service and wait for Render to finish the build.
   - Visit `https://<your-service>.onrender.com/api/feed` to verify it returns JSON.

5) Point frontend to backend
   - In Vercel, add this Environment Variable before deploying the frontend:
     - `SIFTLE_API_BASE=https://<your-render-service>.onrender.com`
   - The build writes this into `dist/client-config.js`, and the browser uses it for `/api/feed`, `/api/archive`, and `/api/summary`.
   - In Render, optionally set:
     - `ALLOWED_ORIGIN=https://<your-vercel-app>.vercel.app`
     - If you leave it unset, the backend allows `*` for simple API access.

Alternative: Fly.io
   - If you prefer a persistent VM that stays warm, you can use Fly.io with the included `Dockerfile`.
   - Quick commands: `fly launch` (interactive) then `fly deploy`.

Notes
   - Do not put private keys or API secrets into `render.yaml` or repo files; use Render's dashboard to set env vars.
   - The included `Dockerfile` is optional — Render can build from source using `npm ci`.
