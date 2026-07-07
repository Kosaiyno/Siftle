# Siftle: Micro-Monetized AI Sports Briefings

Siftle is a decentralized sports news platform designed to monetize micro-information. Its core offering is **AI Sports Briefings**—high-value, on-demand context summaries (covering transfer updates, lineup rumors, and match analysis) unbundled and sold for **0.0001 USDC** per briefing. By utilizing Circle's email-onboarded embedded wallets and the Arc L1 blockchain, Siftle enables sports fans to unlock premium insights instantly with sub-cent nanopayments.

As a secondary companion feature, Siftle integrates gamified **Prediction Markets** (Sports Options) directly below each story, allowing readers to immediately test their sports knowledge once they've read the briefing.

---

## 💡 The Problem & The Siftle Solution

### 1. The Ad-Bloated & Fluffy Sports Media Problem (Core Focus)
* **The Problem**: Mainstream sports blogs and news outlets are heavily bloated with massive walls of text, intrusive autoplay videos, pop-up banner ads, cookie consent dialogs, and clickbait slideshows designed to maximize ad impressions. Readers waste valuable minutes scrolling through fluff just to find a single piece of critical information (such as an injury update or a transfer negotiation status).
* **. The Solution**: Siftle's ingestion engine crawls news feeds, strips away all HTML bloat, trackers, and ads, and feeds the raw text directly into our AI pipeline. Siftle distills the story into an ultra-clean, structured 3-bullet briefing (**What Happened**, **Key Points**, and **Takeaway**). Readers get 100% of the factual value in under 10 seconds, ad-free.

### 2. The Subscription Paywall Problem vs. Context Unbundling
* **The Problem**: Traditional sports publishers lock high-quality content behind expensive monthly paywalls ($10–$20/month). Most readers only want quick context on a single headline and refuse to commit to recurring subscriptions.
* **The Solution**: Siftle unbundles sports journalism. Readers pay a microscopic fee (**$0.0001 USDC**) only for the specific news briefings they want to unlock, right when their interest is highest.

### 3. Integrated Sports Options (Secondary Feature)
* **The Setup**: Once readers have unlocked the AI Briefing and obtained full context, Siftle presents a secondary prediction market (Sports Options) tied to the headline, allowing them to trade on outcomes with sub-second, gas-free settlement on Arc L1.

---

## 📡 News Ingestion & Data Sources

Siftle runs a continuous background data ingestion engine to capture, category-filter, and cluster real-time sports updates:

1. **Sources**:
   * **Professional News APIs**: NewsData API and The Guardian API provide structured mainstream sports feeds.
   * **Niche RSS Feeds**: Real-time sports platforms, soccer news sites, and local outlets.
   * **Social Reporters**: Live signals from verified transfer reporters (e.g., Fabrizio Romano).
2. **Clustering & Threading**: The backend groups related updates into chronological stories. For example, a transfer saga will cluster the initial rumor, bid updates, medical tests, and the final signing.
3. **On-Chain Archiving (Shelby)**: Daily news snapshots are archived and pinned to the **Shelby Network** (on-chain storage) to maintain a decentralized, tamper-proof audit trail of the sports data feed.
4. **Primary AI Engine via 0G Compute**:
   * **The Setup**: Siftle uses the **0G Compute Network** (0G Foundation's decentralized AI inference compute network) as its primary LLM API. The backend interacts directly with 0G compute brokers to invoke deep learning models, processing article contexts and generating the structured AI Briefings.

---

## 📈 Growth & Funnel Strategy

Siftle uses social engagement to drive immediate app traffic and conversion:

1. **Twitter/X Daily Post Funnel**: Every day, Siftle exports highly visual briefing cards and posts key sports insights to Twitter/X.
2. **Stable Deep Links**: Instead of numeric identifiers that shift as the feed updates, Siftle uses stable, URL-friendly title slugs (e.g., `#story-switzerland-colombia-extra-time`).
3. **Immediate Conversion**:
   * If a user clicks the shared link and is logged in, they can unlock and generate the briefing instantly.
   * If they are not logged in or have an empty balance, the UI prompts them to authenticate via email OTP or fund their wallet.

---

## 🔄 User Onboarding, Funding & Briefing Flow

Here is the complete step-by-step user journey from sign-in to payment settlement:

```txt
[1. Email Sign-In] ────> [2. Claim Faucet USDC] ────> [3. Click Locked Briefing]
                                                               │
[5. Unlock Content] <──── [4. Verify & Settle payment] <───────┘
```

### 1. Seamless Onboarding (Sign-In)
* **The Flow**: The user enters their email on the Siftle client. The backend triggers a Resend/SMTP email containing a 6-digit One-Time Password (OTP).
* **The Wallet Creation**: Once the user enters the OTP, Siftle calls the **Circle Developer Stack** to automatically generate a secure, gas-free, contract-compatible embedded Web3 wallet for the user, requiring no passwords or seed phrases.

### 2. Account Funding (Testnet USDC Faucet)
* **The Flow**: In the Profile / Leaderboard screen, users can click the Faucet button to request testnet USDC.
* **The Settlement**: Siftle's faucet backend signs a gas-free transaction on the Arc L1 testnet and transfers **USDC** directly into the user's new Circle embedded wallet address, setting them up to buy briefings and place predictions.

### 3. Purchasing & Generating the Briefing
* **The Trigger**: The user clicks the **Unlock Briefing** button on a story. The client recognizes that the summary requires a payment of `0.0001 USDC` and calls the backend `/api/summary` endpoint which returns a `402 Payment Required` response.
* **The Gateway Execution**: The client triggers the Circle Web SDK to initiate a gasless transaction, paying `0.0001 USDC` to Siftle's Treasury Account on the Arc L1 chain.

### 4. Seller Payment Verification & Payout
* **The Verification**: The client sends the transaction hash (`txHash`) to Siftle's `/api/summary/unlock` endpoint.
* **The Validation**: The backend inspects the transaction directly on the Arc testnet via RPC, verifying:
  1. The transaction exists on-chain.
  2. The recipient is Siftle's configured treasury address.
  3. The transfer amount matches exactly (`0.0001 USDC`).
* **The Unlock**: Once verified, the backend logs the unlock state in the analytics cache, awards the user leaderboard points for the purchase, and returns a secure session `unlockToken`.
* **The Delivery**: The client resubmits the request to `/api/summary` with the `unlockToken`. The server calls the **0G Compute LLM API** to decrypt, summarize, and deliver the 3-bullet AI Briefing.

---

## 🔄 The x402 Briefing Payment Flow

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
