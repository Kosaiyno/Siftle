# Siftle

Siftle is a live news and prediction app where readers pay tiny USDC amounts to unlock AI briefings, then use those briefings and source threads to make Arc testnet prediction-market calls.

The core product loop is simple:

1. Siftle finds fast-moving stories.
2. Readers open a market or story thread.
3. A locked AI briefing can be unlocked with a small Arc testnet USDC payment.
4. The briefing explains the story in three parts: **What happened**, **Key points**, and **Takeaway**.
5. Readers use that context to trade Yes/No markets, follow outcomes, claim payouts, and climb the leaderboard.

Siftle is built around the idea that news context can be sold in tiny units. Instead of a subscription or a large paywall, a reader can pay only when they want a specific AI briefing.

## What Siftle Does Now

Siftle currently combines:

- Live sports/news feeds
- Threaded source updates for developing stories
- Paid AI briefings unlocked with USDC
- Arc testnet prediction markets
- Circle wallet onboarding
- Yes/No shares with resolution and claiming
- Seasonal and global leaderboards
- Product analytics for opens, wallets, trades, claims, AI unlocks, and source clicks

The product is focused on high-interest sports markets first because they create clear, time-bound questions and natural user behavior: read, decide, predict, win or lose, come back.

## Paid AI Briefings

The AI briefing is Siftle's nanopayment layer.

Each locked briefing is a compact, structured explanation of a story or market context. A user pays a small USDC amount to unlock the briefing, and Siftle returns the same clean format every time:

### What Happened

A short explanation of the core event or market-moving update.

### Key Points

The facts that matter most: team news, player status, market context, recent updates, source signals, or anything else that changes how a user might think about the question.

### Takeaway

A direct final read on what the information means for the user.

This makes the AI output useful inside the prediction flow. The briefing is not generic summarization; it is paid decision support around a live event.

## Nanopayments

Siftle uses small USDC payments to unlock specific pieces of AI-generated context.

Why this matters:

- Readers do not need to subscribe before getting value.
- Each briefing can be priced independently.
- The app can monetize long-tail news context.
- AI-generated analysis becomes a pay-per-use product.
- The same pattern can later support publishers, creators, analysts, and source attribution.

The current implementation uses Arc testnet USDC for product validation. Testnet funds have no real financial value.

## Prediction Markets

Siftle markets are simple Yes/No questions tied to real events.

Users can:

- Connect a Circle wallet
- Claim testnet USDC
- Buy Yes or No shares
- Exit shares before resolution when the market is still open
- Claim after the market resolves if they are on the winning side
- Earn leaderboard points from resolved Daily markets

Markets are designed to be easy to understand:

- Winning side splits the final pool.
- Losing side funds the winning side.
- Resolved markets cannot be traded.
- Payout is shown as projected payout while the market is open.

## Leaderboard

Siftle turns prediction into a game layer.

The leaderboard tracks:

- Points
- Wins
- Losses
- Division ranking
- Global ranking

Daily market winners earn points only after the market resolves. This keeps leaderboard points tied to real outcomes, not just activity.

## Arc and Circle Usage

Siftle uses Circle and Arc for:

- Circle email wallet onboarding
- Arc testnet USDC balance display
- USDC approval and market trades
- Market resolution and claiming
- Paid AI briefing unlocks
- Testnet usage analytics around real product behavior

Current Arc configuration:

```txt
ARC_TESTNET_RPC_URL=https://rpc.testnet.arc.network
ARC_TESTNET_USDC_ADDRESS=0x3600000000000000000000000000000000000000
REOWN_PROJECT_ID=
ARC_DEPLOYER_PRIVATE_KEY=
```

Market addresses are exposed through `dist/client-config.js` after running:

```bash
npm run build
```

Private keys and service-role secrets must stay server-side only.

## AI and Source Threads

Siftle keeps source context attached to each story and market.

The app uses:

- RSS and configured news APIs for fresh stories
- Thread matching for related updates
- Local fallbacks when AI or external services are unavailable
- 0G Compute where deeper AI work is useful
- Cached summaries so repeat reads do not regenerate unnecessarily

The goal is not to flood users with AI text. The goal is to unlock one useful briefing at the moment the user needs context.

## Storage and Persistence

Siftle uses multiple layers:

- Supabase for leaderboard/profile persistence
- Local `.siftle` files for development caches and analytics fallback
- Shelby testnet archive support for feed snapshots
- Browser storage for wallet/session hints and local UI state

Supabase is the durable source for leaderboard data. Shelby is not used for critical leaderboard or market state because testnet storage can be wiped or expire.

## Local Development

Install dependencies:

```bash
npm install
```

Build:

```bash
npm run build
```

Run tests:

```bash
npm test
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

Create `.env` from `.env.example`.

Common variables:

```txt
PORT=5173
PUBLIC_API_BASE_URL=
SIFTLE_API_BASE=

SUPABASE_URL=
SUPABASE_ANON_PUBLIC_KEY=
SUPABASE_SERVICE_ROLE_KEY=

CIRCLE_API_KEY=
CIRCLE_APP_ID=
RESEND_API_KEY=
RESEND_FROM=

ARC_TESTNET_RPC_URL=https://rpc.testnet.arc.network
ARC_TESTNET_USDC_ADDRESS=0x3600000000000000000000000000000000000000
ARC_DEPLOYER_PRIVATE_KEY=
REOWN_PROJECT_ID=

AI_BRIEFING_TREASURY_ADDRESS=
AI_BRIEFING_UNLOCK_USDC=0.05

OG_RPC_URL=https://evmrpc.0g.ai
OG_COMPUTE_PROVIDER=
OG_COMPUTE_ENDPOINT=
OG_COMPUTE_API_KEY=
OG_USAGE_MODE=conserve

NEWSDATA_API_KEY=
GUARDIAN_API_KEY=
SHELBY_UPLOAD_URL=
SHELBY_API_KEY=
```

## Useful Endpoints

```txt
GET  /api/status
GET  /api/markets
GET  /api/feed?category=Sports
GET  /api/market-thread?id=...
GET  /api/leaderboard/global
GET  /api/leaderboard/division
GET  /api/analytics/report
GET  /api/summary/unlock-config

POST /api/analytics
POST /api/summary/unlock
POST /api/summary
POST /api/leaderboard/report
POST /api/circle/auth/otp
POST /api/circle/auth/verify
POST /api/circle/tx/contract-call
```

## Product Direction

Siftle is moving toward a paid-context marketplace for live events.

Near-term priorities:

- Make paid AI briefings fast and reliable
- Improve market creation and resolution workflow
- Keep onboarding simple for first-time wallet users
- Grow real user activity around daily markets
- Show clear analytics for signups, AI unlocks, trades, claims, and retention
- Package the product as a nanopayment use case for AI-generated news context

The thesis: if the smallest useful unit of news context can be priced, unlocked, and used immediately, AI briefings become a real product instead of a generic feature.
