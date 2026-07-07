# Siftle: Micro-Monetized AI Sports Briefings & Prediction Markets

Siftle is a decentralized news and prediction platform for sports (specifically football) that leverages micro-information. By combining real-time news aggregation, gamified prediction markets (sports options), and on-demand AI briefings, Siftle enables sports fans to obtain contextual details and participate in prediction markets frictionlessly.

---

## 💡 The Problem

1. **High-Friction Paywalls**: Traditional publisher subscriptions ($10–$20/month) create a heavy barrier for casual readers. Most users only want context for a specific headline or prediction decision, rejecting monthly commitments.
2. **Scattered Sports Context**: Sports bettors and prediction market traders have to check dozens of news outlets, social posts, and forums to piece together context (such as lineup confirmations, injuries, or transfer progress) before placing a trade.
3. **Complex Crypto UX**: Traditional Web3 apps require users to manage seed phrases, fund wallets with volatile native tokens for gas fees, and wait for slow block times.

---

## 🛠️ The Solution

Siftle unbundles media monetization by enabling pay-per-read context:

* **Micro-Monetized AI Briefings**: Users unlock structured summaries (**What Happened**, **Key Points**, and **Takeaway**) for just **0.0001 USDC** at the exact moment they need it.
* **Circle Embedded Wallets**: Users sign up with just their email using One-Time Passwords (OTP). Behind the scenes, a secure embedded wallet is created instantly.
* **Arc L1 Settlement**: Transactions for prediction market shares and briefing payments settle in **under 500ms** with gas-free USDC transactions.
* **Unified Sports Feed**: We consolidate real-time articles, rumors, and announcements into chronological threads linked directly to prediction options.

---

## 📡 News Ingestion & Data Sources

Siftle runs a continuous background data ingestion engine to capture, category-filter, and cluster real-time sports updates:

1. **Sources**:
   * **Professional News APIs**: NewsData API and The Guardian API provide structured mainstream sports feeds.
   * **Niche RSS Feeds**: Real-time sports platforms, soccer news sites, and local outlets.
   * **Social Reporters**: Live signals from verified transfer reporters (e.g., Fabrizio Romano).
2. **Clustering & Threading**: The backend groups related updates into chronological stories. For example, a transfer saga will cluster the initial rumor, bid updates, medical tests, and the final signing.
3. **On-Chain Archiving (Shelby)**: Daily news snapshots are archived and pinned to the **Shelby Network** (on-chain storage) to maintain a decentralized, tamper-proof audit trail of the sports data feed.
4. **LLM Fallback (0G Compute)**: Decentralized **0G Compute** LLM services are used to process summaries and briefings when mainstream pipelines experience congestion.

---

## 📈 Growth & Funnel Strategy

Siftle uses social engagement to drive immediate app traffic and conversion:

1. **Twitter/X Daily Post Funnel**: Every day, Siftle exports highly visual briefing cards and posts key sports insights to Twitter/X.
2. **Stable Deep Links**: Instead of numeric identifiers that shift as the feed updates, Siftle uses stable, URL-friendly title slugs (e.g., `#story-switzerland-colombia-extra-time`).
3. **Immediate Conversion**:
   * If a user clicks the shared link and is logged in, they can unlock and generate the briefing instantly.
   * If they are not logged in or have an empty balance, the UI prompts them to authenticate via email OTP or fund their wallet.

---

## 🔄 The Payment Flow (x402 Protocol)

Siftle implements the x402 payment flow to authorize and verify micro-payments seamlessly:

```mermaid
sequenceDiagram
    autonumber
    actor User as Reader/Trader
    participant Client as Frontend UI
    participant Server as Node Backend (serve.mjs)
    participant Circle as Circle Wallet / Gateway
    participant Arc as Arc Testnet (L1)

    User->>Client: Clicks locked AI Briefing
    Client->>Server: POST /api/summary (requesting content)
    note over Server: Server checks unlock token
    Server-->>Client: HTTP 402 Payment Required (briefing locked)
    Client->>Circle: Initiates Circle Gateway transaction (0.0001 USDC)
    Circle->>Arc: Settles gasless USDC transfer to Siftle treasury
    Arc-->>Circle: Emits Transfer Event (receipt txHash)
    Client->>Server: POST /api/summary/unlock { walletAddress, sourceUrl, txHash }
    note over Server: Server verifies receipt & awards leaderboard bonus
    Server-->>Client: Returns unlockToken
    Client->>Server: POST /api/summary { unlockToken }
    Server-->>Client: Returns Decisive AI Briefing
```

1. **402 Locked State**: Requests to `/api/summary` fail with an HTTP `402 Payment Required` status if not paid.
2. **Gateway Payment**: The client initiates a `0.0001 USDC` gasless transfer to Siftle's treasury address on the Arc testnet.
3. **On-Chain Verification**: The backend verifies the transaction receipt on the Arc L1 chain and returns a secure `unlockToken`.
4. **Decryption**: The client resubmits the request with the `unlockToken` to obtain the summary.

---

## ⚙️ Environment Variables

Create a `.env` file at the root of the project to set up the environment:

```ini
PORT=5173
PUBLIC_API_BASE_URL=http://localhost:5173
SIFTLE_API_BASE=http://localhost:5173

# Database (Supabase)
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_PUBLIC_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Circle Developer Stack
CIRCLE_API_KEY=your_circle_api_key
CIRCLE_APP_ID=your_circle_app_id
RESEND_API_KEY=your_resend_api_key
RESEND_FROM=notifications@yourdomain.com

# Arc L1 Chain Config
ARC_TESTNET_RPC_URL=https://rpc.testnet.arc.network
ARC_TESTNET_USDC_ADDRESS=0x3600000000000000000000000000000000000000
ARC_DEPLOYER_PRIVATE_KEY=your_private_key
REOWN_PROJECT_ID=your_reown_project_id

# Treasury & Nanopayment Config
AI_BRIEFING_TREASURY_ADDRESS=your_treasury_address
AI_BRIEFING_UNLOCK_USDC=0.0001
X402_PRICE=0.0001

# 0G Compute Configuration
OG_RPC_URL=https://evmrpc.0g.ai
OG_COMPUTE_PROVIDER=your_provider
OG_COMPUTE_ENDPOINT=your_endpoint
OG_COMPUTE_API_KEY=your_api_key
OG_USAGE_MODE=conserve

# Feed Scrapers & Archiving
NEWSDATA_API_KEY=your_newsdata_key
GUARDIAN_API_KEY=your_guardian_key
SHELBY_UPLOAD_URL=your_shelby_upload_url
SHELBY_API_KEY=your_shelby_api_key
```

---

## 🛠️ Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Build Frontend Bundle
```bash
npm run build
```

### 3. Run Verification Tests
```bash
npm test
```

### 4. Start Local Server
```bash
npm start
```
The app will run locally at [http://localhost:5173](http://localhost:5173).

---

## 📡 API Reference

```txt
GET  /api/status               - Fetch health and connectivity status
GET  /api/markets              - Retrieve active Yes/No markets on Arc
GET  /api/feed                 - Ingest clustered news feed
GET  /api/market-thread        - Retrieve related news source updates
GET  /api/leaderboard/global   - Global ranking data
GET  /api/analytics/report     - Fetch briefing unlocks and volume stats
POST /api/summary/unlock       - Verify x402 payment transactions
POST /api/summary              - Fetch briefing content (throws 402 if locked)
POST /api/circle/auth/otp      - Trigger Circle OTP email authentication
POST /api/circle/auth/verify   - Verify OTP and generate wallet instance
```
