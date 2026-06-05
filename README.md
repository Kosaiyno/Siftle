# Siftle

Siftle is a clean daily news app for fast-moving internet categories. It pulls fresh stories, filters them by category, archives daily snapshots on Shelby, and uses 0G Compute where deeper AI judgment is worth the cost.

Current categories:

- Crypto
- Sports
- Anime
- Tech

## What It Does

Siftle publishes a daily feed for each category and keeps the live feed fresh on a schedule.

The app supports:

- Fresh category feeds
- Today-only live feeds with older stories moved into archive
- Saved and archived story views
- Source links for every story
- On-demand AI summaries
- Story threads that connect related updates over time
- Shelby-backed daily archive snapshots
- 0G Compute-backed AI work with local fallbacks
- Arc Testnet wallet connection and USDC-backed prediction markets

## Arc Testnet Markets

Siftle uses prediction markets where verified news threads provide the evidence layer and Arc Testnet USDC provides collateral, gas, and settlement.

Current Arc integration:

- Arc Testnet chain ID `5042002`
- Arc RPC and explorer configuration
- WalletConnect support through Reown AppKit
- Arc Testnet USDC balance display
- Real Foundry contracts for market creation, Yes/No collateral, sellback, resolution, and redemption
- Per-market Arc contract addresses exposed to the browser through `dist/client-config.js`
- Frontend approve + buy flow for Arc Testnet USDC
- Frontend sell flow for open Yes/No shares before resolution
- On-chain market probability and volume reads from market pools

Arc Testnet USDC has no real financial value. These markets are testnet contracts for validating the product loop: thread evidence, wallet connection, USDC approval, buy/sell shares, and later resolution/redemption.

Create a public project ID at [Reown Cloud](https://cloud.reown.com/) and set `REOWN_PROJECT_ID` in `.env` to enable the wallet modal locally and in production.

The grant thesis is straightforward: Siftle turns verified, multi-day news threads into transparent evidence for stablecoin-settled prediction markets. Arc is a strong fit because it explicitly supports prediction markets, uses USDC for gas, and provides deterministic sub-second finality.

See [`contracts/README.md`](contracts/README.md) for the official Arc deployment flow.

Required market env variables:

```txt
ARC_TESTNET_RPC_URL=https://rpc.testnet.arc.network
ARC_TESTNET_USDC_ADDRESS=0x3600000000000000000000000000000000000000
REOWN_PROJECT_ID=
SIFTLE_MARKET_FACTORY_ADDRESS=
SIFTLE_MARKET_NEW_GLENN_ADDRESS=
SIFTLE_MARKET_STRATEGY_BTC_SALE_ADDRESS=
SIFTLE_MARKET_NBA_FINALS_ADDRESS=
SIFTLE_MARKET_RESOLVER=
ARC_DEPLOYER_PRIVATE_KEY=
```

Only public values are written into `dist/client-config.js`: the Reown project ID, USDC address, and market contract addresses. The deployer private key and resolver stay server/local only.

After changing market addresses, rebuild so the browser config updates:

```bash
npm run build
```

## Threads

Threads connect a current story to older related updates so readers can see how a topic has unfolded.

Thread behavior:

- A thread button appears when a story has at least one related past update.
- Threads are ordered newest first, with the latest/current update on top and older updates below.
- Thread topics are generated to describe the shared story, not just copied from one headline.
- Thread matching uses local candidate search first, then 0G Compute for stricter review when budget allows.
- Broad keyword overlap is not enough. Stories must share a specific actor, product, event, team, launch, dispute, outage, market catalyst, or direct continuation.

This is especially important for future prediction markets, where noisy or unrelated threads would create bad market context.

## 0G Compute Usage

Siftle is currently configured to use 0G in conserve mode.

Conserve mode is designed to manage compute spend:

- Automatic feed refresh does not summarize every article with 0G.
- Basic feed summaries use local fallback text by default.
- 0G summaries are generated on demand when the user opens or requests an AI summary.
- Thread review is capped per refresh so grouping cannot burn unlimited compute.
- 0G decisions and summaries are cached locally so repeated requests do not pay twice.

Useful defaults:

```txt
OG_USAGE_MODE=conserve
THREAD_REVIEW_BUDGET_PER_REFRESH=12
SUMMARY_TIMEOUT_MS=45000
REFRESH_INTERVAL_MINUTES=60
```

Set `OG_USAGE_MODE=full` only if you want automatic 0G summaries during feed generation.

## Shelby Archive

Shelby is the archive layer for Siftle.

Siftle stores daily category snapshots so old stories do not remain in today's feed. This lets the app keep the live feed fresh while preserving past updates for archive browsing and thread history.

Archived snapshots include:

- Date
- Category
- Stories
- Source links
- Local or 0G summaries
- Archive metadata

If Shelby is not configured, Siftle writes local archive files under `.siftle/archive` during development.

## News Sources

Siftle uses RSS feeds first, with NewsData.io and The Guardian available when API keys are configured.

Current source direction:

- Crypto: CoinDesk, Cointelegraph, Decrypt, The Block, CryptoSlate, Bitcoin Magazine, DL News, Blockworks
- Sports: football and NBA only for now, including ESPN soccer/NBA, BBC Football, The Guardian Football, UEFA, Sky Sports football, NBA RSS
- Anime: anime and manga news sources, including Anime News Network and related feeds
- Tech: company, product, AI, cloud, startup, platform, security, and major tech company news from sources such as The Verge, TechCrunch, Wired, Engadget, Ars Technica, ZDNet, InfoQ, GitHub Blog, VentureBeat, MIT Technology Review, and Bloomberg Technology

Sports is intentionally narrowed to football and NBA. Tech is intentionally filtered away from tutorials, personal dev posts, coupons, reviews, and low-value how-to content so it can produce better threads and future market candidates.

## Local Development

Install dependencies:

```bash
npm install
```

Build:

```bash
npm run build
```

Start local backend/frontend:

```bash
node scripts/serve.mjs
```

Open:

```txt
http://localhost:5173
```

## Environment

Create a `.env` file from `.env.example` and configure only the services you need.

Common variables:

```txt
PORT=5173
REFRESH_INTERVAL_MINUTES=60
MAX_ARTICLE_AGE_HOURS=36
RSS_ITEMS_PER_FEED=30

NEWSDATA_API_KEY=
GUARDIAN_API_KEY=

OG_RPC_URL=https://evmrpc.0g.ai
OG_COMPUTE_PROVIDER=
OG_COMPUTE_ENDPOINT=
OG_COMPUTE_API_KEY=
OG_COMPUTE_MODEL=zai-org/GLM-5-FP8
THREAD_OG_COMPUTE_PROVIDER=
THREAD_OG_COMPUTE_ENDPOINT=
THREAD_OG_COMPUTE_API_KEY=
THREAD_OG_COMPUTE_MODEL=deepseek-v4-flash
OG_USAGE_MODE=conserve
THREAD_REVIEW_BUDGET_PER_REFRESH=12
SUMMARY_TIMEOUT_MS=45000
THREAD_REVIEW_TIMEOUT_MS=90000
THREAD_PREP_CONCURRENCY=1
THREAD_REVIEW_CANDIDATE_LIMIT=5
THREAD_REVIEW_SAME_DAY_CANDIDATE_LIMIT=1
THREAD_REVIEW_CANDIDATES_PER_DAY=3

SHELBY_UPLOAD_URL=
SHELBY_API_KEY=
REQUIRE_SHELBY_UPLOAD=false

ARC_TESTNET_RPC_URL=https://rpc.testnet.arc.network
ARC_TESTNET_USDC_ADDRESS=0x3600000000000000000000000000000000000000
REOWN_PROJECT_ID=
SIFTLE_MARKET_FACTORY_ADDRESS=
SIFTLE_MARKET_NEW_GLENN_ADDRESS=
SIFTLE_MARKET_STRATEGY_BTC_SALE_ADDRESS=
SIFTLE_MARKET_NBA_FINALS_ADDRESS=
SIFTLE_MARKET_RESOLVER=
ARC_DEPLOYER_PRIVATE_KEY=
```

Fallback behavior:

- If news API keys are missing, RSS feeds still run.
- If real sources fail or return no fresh articles, mock stories are used only as a development fallback.
- If 0G is unavailable, Siftle falls back to local summaries and strict local thread matching.
- If Shelby is unavailable, snapshots are archived locally.

## API Endpoints

Useful local endpoints:

```txt
GET  /api/status
GET  /api/0g/status
GET  /api/feed?category=All
GET  /api/feed?category=Crypto
GET  /api/feed?category=Sports
GET  /api/feed?category=Anime
GET  /api/feed?category=Tech
GET  /api/thread?category=Crypto&sourceUrl=...
GET  /api/archive
GET  /api/archive?date=YYYY-MM-DD&category=Crypto
GET  /api/publish/status
POST /api/publish/refresh
POST /api/summary
POST /api/archive
```

`/api/0g/status` shows whether 0G is configured, whether it has succeeded recently, fallback counts, usage mode, and remaining thread-review budget.

## Product Direction

Siftle is becoming a news app built around developing storylines.

Near-term focus:

- Keep feeds fresh and credible
- Improve source quality per category
- Keep thread matching strict
- Use 0G Compute for high-value judgment, not wasteful background work
- Preserve daily history on Shelby

Prediction markets are live on Arc testnet for the current prototype markets. The next product step is market creation rules: deciding which verified threads deserve a market, generating clear resolution rules, and keeping market evidence synced to the original Siftle thread.
