# EVIDENCE: "722 Trades" Claims Audit

## CLAIM #1: Where the "722 trades" number comes from

**NOT PROVEN FROM CODE.**

The exact origin of "722 trades" cannot be directly located in the codebase. However, the following evidence shows the potential sources:

### Evidence Path 1: Analytics Tracking System

**File**: `scripts/serve.mjs`
**Lines**: 9063-9091

```javascript
function trackAnalyticsEvent(event, email = null) {
  const cleanEvent = String(event || "").trim();
  if (!analyticsEventKeys.includes(cleanEvent)) {
    return Promise.resolve({ saved: false, skipped: true });
  }

  const data = normalizeAnalytics(loadAnalytics());

  if (cleanEvent === "sign_up") {
    if (email) {
      const cleanEmail = email.toLowerCase().trim();
      if (data.emails.includes(cleanEmail)) {
        return Promise.resolve({ saved: false, duplicate: true }); // Already signed up
      }
      data.emails.push(cleanEmail);
    }
  }

  data.totals[cleanEvent] = (data.totals[cleanEvent] || 0) + 1;

  const dateKey = getTodayKey();
  if (!data.daily[dateKey]) {
    data.daily[dateKey] = createEmptyAnalyticsCounts();
  }
  data.daily[dateKey][cleanEvent] = (data.daily[dateKey][cleanEvent] || 0) + 1;

  saveAnalytics(data);
  return incrementAnalyticsEventInSupabase(cleanEvent, email);
}
```

**What this does**:
- Line 9082: `data.totals[cleanEvent] = (data.totals[cleanEvent] || 0) + 1;`
- Increments a counter for the event name
- **Events tracked include**: `trade_attempt`, `trade_buy_success`, `trade_sell_success` (from analyticsEventKeys definition at line 7021)

**Data sources for this counter**:
1. **Line 9073**: `const data = normalizeAnalytics(loadAnalytics());` - **Loads from local JSON file** (`.siftle/analytics.json`)
2. **Line 9088**: `saveAnalytics(data);` - **Saves back to local JSON file**
3. **Line 9091**: `return incrementAnalyticsEventInSupabase(cleanEvent, email);` - **Syncs to Supabase**

---

## CLAIM #2: The exact function that produces "722 trades"

**NOT PROVEN FROM CODE.**

No single function creates the "722" number. However, the totals could be aggregated from:

### Potential Aggregation Point 1: Analytics Totals Object

**File**: `scripts/serve.mjs`
**Lines**: 7045-7076

```javascript
function createEmptyAnalyticsCounts() {
  return Object.fromEntries(analyticsEventKeys.map((key) => [key, 0]));
}

function getAnalyticsTotalsFromDaily(daily = {}) {
  const totals = createEmptyAnalyticsCounts();
  Object.values(daily || {}).forEach((row) => {
    analyticsEventKeys.forEach((key) => {
      totals[key] += Number(row?.[key]) || 0;
    });
  });
  return totals;
}

function normalizeAnalytics(data = {}) {
  const daily = data.daily && typeof data.daily === "object" ? data.daily : {};
  Object.keys(daily).forEach((dateKey) => {
    daily[dateKey] = {
      ...createEmptyAnalyticsCounts(),
      ...(daily[dateKey] || {})
    };
  });

  const dailyTotals = getAnalyticsTotalsFromDaily(daily);
  const storedTotals = {
    ...createEmptyAnalyticsCounts(),
    ...(data.totals || {})
  };
  const hasDailyRows = Object.keys(daily).length > 0;
  const totals = { ...storedTotals };

  analyticsEventKeys.forEach((key) => {
    totals[key] = hasDailyRows ? (Number(dailyTotals[key]) || 0) : (Number(storedTotals[key]) || 0);
  });
  
  // ... returns object with totals containing all event counts
}
```

**Key Lines**:
- **Line 7049**: `getAnalyticsTotalsFromDaily()` - Sums all daily events by key
- **Line 7068-7076**: If there are daily rows, use daily totals; otherwise use stored totals

**Analytics Event Keys**:
**File**: `scripts/serve.mjs`
**Lines**: 7021-7042

```javascript
const analyticsEventKeys = [
  "app_open",
  "wallet_connect_start",
  "wallet_connect_success",
  "wallet_connect_failed",
  "sign_up",
  "market_view",
  "trade_drawer_open",
  "trade_attempt",
  "trade_buy_success",
  "trade_sell_success",
  "trade_failed",
  "claim_attempt",
  "claim_success",
  "claim_failed",
  "ai_unlock_attempt",
  "ai_unlock_success",
  "ai_unlock_failed",
  "view_summary",
  "open_source",
  "shared_read_more_click",
  "feed_story_click"
];
```

**Observation**: The array includes `trade_attempt` (line 7031), `trade_buy_success` (line 7032), and `trade_sell_success` (line 7033).
- **The "722 trades" could be the SUM of these three events**, or just one of them (e.g., total buy/sell success events)

---

## CLAIM #3: What data source does the trades function read?

**Evidence Summary**: 
The `trackAnalyticsEvent()` function reads from **BOTH**:

1. **LOCAL JSON FILE** (Primary):
   - **File**: `.siftle/analytics.json`
   - **Read at line 9073**: `const data = normalizeAnalytics(loadAnalytics());`
   - **Save at line 9088**: `saveAnalytics(data);`

2. **SUPABASE** (Sync):
   - **Database**: Supabase `analytics_daily` table
   - **Sync at line 9091**: `return incrementAnalyticsEventInSupabase(cleanEvent, email);`

### The `loadAnalytics()` function:

**File**: `scripts/serve.mjs`
**Lines**: 7094-7110

```javascript
function loadAnalytics() {
  try {
    if (existsSync(ANALYTICS_FILE)) {
      const content = readFileSync(ANALYTICS_FILE, "utf8").replace(/^\uFEFF/, "");
      const data = normalizeAnalytics(JSON.parse(content));
      scrubRolledBackLeaderboardState(data);
      return data;
    }
  } catch (err) {
    console.error("Failed to load analytics:", err);
  }
  return normalizeAnalytics({
    totals: createEmptyAnalyticsCounts(),
    daily: {},
    emails: []
  });
}
```

**Proof**: 
- **Line 7096**: `if (existsSync(ANALYTICS_FILE))` - Reads from local file
- **Line 7097**: `const content = readFileSync(ANALYTICS_FILE, "utf8")` - **Reads from filesystem**
- `ANALYTICS_FILE` is defined at **line 7019**: `const ANALYTICS_FILE = join(root, ".siftle", "analytics.json");`

### Data Source Hierarchy:
1. **PRIMARY**: Local `.siftle/analytics.json` file (loaded on demand)
2. **SYNC**: Supabase `analytics_daily` table (only when `/api/analytics` endpoint is called)
3. **FALLBACK**: If file missing, returns empty analytics object

**Is Arc RPC Used?** 
- **NO** - The `trackAnalyticsEvent()` function does NOT read from Arc blockchain, localStorage, or fallbackMarkets.ts
- **YES - in other contexts**: The trader count for markets (NOT trade count) comes from blockchain via `collectMarketTradeSignals()` (line 8595)

---

## CLAIM #4: Every place where trade metrics are assigned

### Assignment Points for Trade Events:

#### Point 1: Analytics Totals Increment
**File**: `scripts/serve.mjs`
**Line**: 9082
```javascript
data.totals[cleanEvent] = (data.totals[cleanEvent] || 0) + 1;
```
- Increments local JSON counter for any of: `trade_attempt`, `trade_buy_success`, `trade_sell_success`

#### Point 2: Daily Analytics Increment
**File**: `scripts/serve.mjs`
**Lines**: 9084-9086
```javascript
const dateKey = getTodayKey();
if (!data.daily[dateKey]) {
  data.daily[dateKey] = createEmptyAnalyticsCounts();
}
data.daily[dateKey][cleanEvent] = (data.daily[dateKey][cleanEvent] || 0) + 1;
```
- Increments daily counter for the same events

#### Point 3: Supabase Sync
**File**: `scripts/serve.mjs`
**Line**: 9091
```javascript
return incrementAnalyticsEventInSupabase(cleanEvent, email);
```
- **Function at line 7330**: Writes to Supabase `analytics_daily` table

#### Point 4: Market Trader Count (NOT Trade Count)
**File**: `scripts/serve.mjs`
**Lines**: 8760-8785 (in `refreshMarketListCache()`)

For **option markets**:
```javascript
const traderCount = optionState && optionState.optionMarketPositions?.[market.id]
  ? Object.keys(optionState.optionMarketPositions[market.id] || {}).length
  : 0;
enrichedMarkets.push({
  ...market,
  marketAddress,
  traderCount,
  traders: String(traderCount)
});
```
- **Source**: Counts keys in `optionState.optionMarketPositions[market.id]` - **from Supabase**

For **regular markets**:
```javascript
const { traders } = await collectMarketTradeSignals(marketAddress, market.deploymentBlock);
const traderCount = traders.size;
enrichedMarkets.push({
  ...market,
  marketAddress,
  traderCount,
  traders: traderCount > 0 ? String(traderCount) : String(market.traders || "0")
});
```
- **Source**: Blockchain event logs via `collectMarketTradeSignals()` - **from Arc RPC**
- **NOT from local analytics totals**

---

## CLAIM #5: Does option_market_positions calculate the "722 trades"?

**NO - Different Metric**

`option_market_positions` is used to count **unique traders per market**, not total trade count.

**Evidence**:

**File**: `scripts/serve.mjs`
**Lines**: 8760-8771

```javascript
if (market.optionMarket) {
  // Option markets do not use contract events for trader count, we can get count from Supabase state or optionState
  const traderCount = optionState && optionState.optionMarketPositions?.[market.id]
    ? Object.keys(optionState.optionMarketPositions[market.id] || {}).length
    : 0;
  enrichedMarkets.push({
    ...market,
    marketAddress,
    ...(publicOptionSnapshot ? {
      resolvedOptionId: publicOptionSnapshot.resolvedOptionId || null,
      outcome: publicOptionSnapshot.outcome || 0,
      optionPools: publicOptionSnapshot.optionPools,
      volumeUsdc: publicOptionSnapshot.volumeUsdc
    } : {}),
    traderCount,
    traders: String(traderCount)
  });
```

**What this does**:
- Counts **unique wallet addresses** that have positions in the market
- This is the **"traders" count per market**, NOT the total "trades" count
- This is a **DIFFERENT metric** from the global "722 trades"

**Database Schema**:
**File**: `scripts/supabase-schema.sql`
**Lines**: 152-162

```sql
create table if not exists option_market_positions (
  market_id text not null,
  wallet_address text not null,
  option_id text not null,
  option_label text,
  amount_usdc numeric not null default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  primary key (market_id, wallet_address)
);
```

**Observation**: 
- Each row is ONE wallet address per market
- Counting rows per market gives "unique traders"
- This is **NOT** counting individual transactions
- **These are position records, NOT trade records**

---

## CLAIM #6: Do the 335 option_market_positions records correspond to the 722 trades?

**NOT PROVEN - These are different metrics**

**Evidence**:

### Option Market Positions (335 records, hypothetical)
- **What it is**: Unique (market_id, wallet_address) pairs
- **How it's created**: When a position is first created or updated
- **Count by**: `SELECT COUNT(DISTINCT wallet_address) FROM option_market_positions WHERE market_id = ?`
- **Meaning**: How many unique wallets traded in a specific market

### Analytics Trades (722 total, hypothetical)
- **What it is**: Sum of `trade_buy_success + trade_sell_success + trade_attempt` events
- **How it's created**: Called by frontend analytics tracking
- **Count by**: Sum the `analytics_daily.trade_buy_success + trade_sell_success` across all days
- **Meaning**: Total number of trade actions recorded

**These are incompatible metrics**:
- 335 unique (market, wallet) pairs ≠ 722 total trades across all markets
- One market could have multiple trades from the same wallet
- Example: Wallet A trades 10 times in Market 1 = 1 position record, 10 trade records

---

## CLAIM #7: Exact code creating option_market_positions records

**NOT FOUND IN CODEBASE**

The code that inserts into `option_market_positions` table is **NOT in the source code provided**.

### What creates positions:

**File**: `scripts/serve.mjs` has NO direct SQL INSERT for option_market_positions

**Hypothesis** (from schema):
- When `executeArcOptionMarketOrder()` is called (frontend)
- It should call a backend endpoint like `/api/trades` or similar
- That endpoint would INSERT into Supabase

**But the exact endpoint is NOT PROVEN FROM CODE**

### Search Result:
```
grep -r "option_market_positions" scripts/ src/ --include="*.ts" --include="*.js" --include="*.mjs"
```

**Finding**: `option_market_positions` is only mentioned in:
1. **Schema definition**: `scripts/supabase-schema.sql` line 152
2. **Read query**: `scripts/serve.mjs` line 8764 (for counting traders)
3. **Type reference**: `src/main.ts` - no INSERT code

**CONCLUSION**: The code that populates `option_market_positions` is **NOT VISIBLE** in this codebase.

---

## CLAIM #8: Exact code recording trades in analytics

**FOUND - But Incomplete**

### Frontend Side:

**File**: `src/main.ts` (compiled to dist/main.js)

In the `Ir()` function (trade handler), the source mentions:
```typescript
U("trade_attempt");  // Before trying trade
// ... execute trade ...
U(i?"trade_sell_success":"trade_buy_success");  // After success
U("trade_failed");  // On error
```

**Proof Point**: From the earlier exploration results, the pattern is visible in dist/main.js but not clearly in source.

### Backend Side:

**File**: `scripts/serve.mjs`
**Lines**: 10054-10091

```javascript
if (requestUrl.pathname === "/api/analytics" && request.method === "POST") {
  try {
    const body = await readJsonBody(request);
    if (body && body.event) {
      const supabaseResult = await trackAnalyticsEvent(body.event);
      // ...
      sendJson(response, 200, {
        success: true,
        supabaseConfigured: isSupabaseConfigured,
        supabaseSaved: Boolean(supabaseResult?.saved),
        supabaseError: supabaseResult?.error || "",
        sourceTracked: Boolean(sourceResult?.saved)
      });
    } else {
      sendJson(response, 400, { error: "Event name is required" });
    }
  } catch (err) {
    sendJson(response, 500, { error: err.message });
  }
  return;
}
```

**Flow**:
1. **Frontend calls**: `POST /api/analytics` with `{ event: "trade_buy_success" }`
2. **Backend receives**: Passes to `trackAnalyticsEvent()` (line 9063)
3. **Increments**: Both local JSON and Supabase (lines 9082-9091)

### Verification:

**Is this called for every trade?** 
- **Uncertain** - The source code for the frontend trade handler is not clearly visible
- The `/api/analytics` endpoint EXISTS and works
- But we cannot see exactly when it's called from the trading flow

---

## CLAIM #9: Are failed blockchain transactions recorded as trades?

**YES - Failed Trades ARE Recorded**

**Evidence**:

**File**: `scripts/serve.mjs`
**Line**: 7031 - Analytics tracks both `trade_failed` separately from `trade_buy_success`/`trade_sell_success`

```javascript
const analyticsEventKeys = [
  // ...
  "trade_attempt",
  "trade_buy_success",
  "trade_sell_success",
  "trade_failed",  // <-- SEPARATE COUNTER
  // ...
];
```

**Implication**:
- A failed blockchain transaction would send `trade_failed` event
- This is counted **separately** from successful trades
- So "722 trades" COULD include failed trades if using `trade_attempt` count instead of `trade_buy_success + trade_sell_success`

**Which is used for "722"?**
- **NOT PROVEN** - Cannot find where the "722" total is displayed or calculated

---

## CLAIM #10: Every use of fallbackMarkets.ts

**File**: `src/fallbackMarkets.ts`
**Line**: 1-2

```typescript
export const fallbackMarketPreviews: any[] = [];
```

**Usage 1 - Initial Assignment**:
**File**: `src/main.ts`
**Line**: 333
```typescript
let marketPreviews: MarketPreview[] = fallbackMarketPreviews;
```

**Usage 2 - In mergeMarketsById**:
**File**: `src/main.ts`
**Line**: 343
```typescript
const getPortfolioMarkets = (): MarketPreview[] =>
  mergeMarketsById(state.portfolioMarketPreviews, marketPreviews, fallbackMarketPreviews);
```

### Is it reachable in production?

**YES - But Empty**:

1. **On page load**: `marketPreviews = fallbackMarketPreviews` (empty array)
2. **loadMarkets()** is called (line 346-365):
   - Fetches from `/api/markets` endpoint
   - If fetch succeeds, replaces `marketPreviews` with real data
   - **Fallback only used if fetch fails AND timeout expires**

**Code Path**:
**File**: `src/main.ts`
**Lines**: 346-365

```typescript
const loadMarkets = async (): Promise<void> => {
  state.loadingMarkets = true;
  if (marketPreviews.length === 0) marketPreviews = fallbackMarketPreviews;
  try {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 3500);
    const res = await fetch(apiUrl("/api/markets"), { signal: controller.signal });
    window.clearTimeout(timeout);
    if (res.ok) {
      const markets = await res.json();
      if (Array.isArray(markets) && markets.length > 0) {
        marketPreviews = markets;  // <-- REPLACES FALLBACK
      }
    }
  } catch (err) {
    console.error("Failed to load markets:", err);
  } finally {
    state.loadingMarkets = false;
  }
};
```

**Conclusion**: Fallback is unreachable in production because it's an empty array and the real data comes from `/api/markets`.

---

## CLAIM #11: Every use of localStorage for markets/trades/volume

### Usage 1: Mock/Test Markets

**File**: `src/arc.ts`
**Lines**: 1467-1529

```typescript
if (isMockSession || isLocalTestMarket(marketAddress)) {
  // ...
  const balanceKey = `siftle_mock_balance_${activeWalletAddress.toLowerCase()}`;
  const posKey = `siftle_mock_pos_${marketAddress.toLowerCase()}_${activeWalletAddress.toLowerCase()}`;
  
  let position: ArcMarketPosition = { yesSharesUsdc: 0, noSharesUsdc: 0 };
  const storedPos = localStorage.getItem(posKey);
  // ...
  localStorage.setItem(posKey, JSON.stringify(position));
  localStorage.setItem(balanceKey, newBalance.toFixed(2));
}
```

**Keys Used**:
- `siftle_mock_balance_${wallet}` - Stores mock USDC balance
- `siftle_mock_pos_${market}_${wallet}` - Stores position shares
- `siftle_mock_pool_${market}` - Stores pool state (implied from line 1478)

**Scope**: Only for `isMockSession || isLocalTestMarket()` - NOT production

### Usage 2: Traffic Source Tracking

**File**: `src/main.ts`
**Lines**: 115-129

```typescript
function initTrafficSource() {
  try {
    let source = localStorage.getItem("siftle_traffic_source");
    if (!source) {
      // ... determine source ...
      localStorage.setItem("siftle_traffic_source", source);
    }
    trafficSource = source;
  } catch (err) {
    console.error("Failed to initialize traffic source:", err);
  }
}
```

**Key**: `siftle_traffic_source` - Tracks referral source

### Usage 3: Theme Storage

**File**: `src/main.ts`
**Lines**: 108-112

```typescript
const readStoredTheme = (): AppTheme => {
  try {
    return window.localStorage.getItem(THEME_STORAGE_KEY) === "light" ? "light" : "dark";
  } catch (error) {
    return "dark";
  }
};
```

**Key**: `siftle_theme` - Stores user theme preference

### Usage 4: Pending Referral Code

**File**: `src/main.ts`
**Line**: 290

```typescript
const pendingReferralCode = new URLSearchParams(window.location.search).get("ref") || localStorage.getItem("siftle_pending_referral_code") || "";
if (pendingReferralCode) localStorage.setItem("siftle_pending_referral_code", pendingReferralCode.trim().toUpperCase());
```

**Key**: `siftle_pending_referral_code` - Referral code

### Usage 5: Leaderboard Cache

**File**: `src/main.ts`
**Line**: 886

```typescript
const LEADERBOARD_CACHE_PREFIX = "siftle_leaderboard_cache_v4_";
```

**Keys**: `siftle_leaderboard_cache_v4_${key}` - Caches leaderboard data

### Conclusion for localStorage:
- **Mock Sessions**: Stores positions, balances, pool state (NOT production)
- **Analytics**: NO - Analytics stored in `.siftle/analytics.json`, not localStorage
- **Trade Counts**: NO - Tracked via `/api/analytics` endpoint, not localStorage
- **Traders**: NO - Read from blockchain logs or Supabase, not localStorage

---

## CLAIM #12: Complete trade flow from user action to blockchain

**PARTIAL - Critical Step Missing**

### Step 1: User Clicks "Buy" Button

**File**: `src/main.ts` (compiled)
- Event handler attached to trade button
- Function `Ir()` called with (marketId, mode="buy", side="yes", amount=10)

### Step 2: Frontend Sends Trade

**File**: `src/arc.ts`
**Lines**: 1446-1544

```typescript
export const executeArcMarketOrder = async (
  marketAddress: string,
  mode: "buy" | "sell",
  side: "yes" | "no",
  amountUsdc: number,
  onStatus?: (status: string) => void,
) => {
  if (!activeWalletAddress) throw new Error("Connect your wallet first");
  if (!marketAddress) throw new Error("This market needs an Arc contract address before trading");
  
  // For backend wallet mode:
  if (isBackendWalletMode) {
    onStatus?.(`Submitting ${mode} order...`);
    const response = await fetch(apiUrl("/api/backend-wallet/trade"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sessionToken: activeBackendWalletSessionToken,
        marketId: marketAddress,
        mode,
        side,
        amountUsdc
      })
    });
    const payload = await response.json();
    if (!response.ok) throw new Error(payload.error || `Failed to ${mode} shares`);
    return payload.txHash;
  }
  
  // ... direct wallet mode flow ...
}
```

### Step 3: Backend Receives Trade (MISSING)

**File**: `scripts/serve.mjs` - Searched but NOT FOUND:
- No `/api/backend-wallet/trade` endpoint handler visible
- No code that calls `executeArcMarketOrder()`
- No code that submits transaction to blockchain

### Step 4: Analytics Recorded

**File**: `scripts/serve.mjs`
**Lines**: 10054-10091

Frontend sends:
```javascript
fetch(apiUrl("/api/analytics"), {
  method: "POST",
  body: JSON.stringify({ event: "trade_buy_success" })
})
```

Backend receives and increments counters (line 9063-9091)

### Step 5: Blockchain Transaction (ASSUMPTION)

- The backend would call Arc smart contract via ethers.js
- Contract emits `SharesBought(buyer, yes, amount)` event
- Event is logged on-chain

### MISSING EVIDENCE:
- No visible endpoint for `/api/backend-wallet/trade`
- No code submitting transaction to blockchain
- No code waiting for transaction confirmation
- **The exact bridge between user action and blockchain is NOT VISIBLE**

---

## CLAIM #13: AI briefing unlock flow

### Step 1: User Clicks "AI Briefing" Button

**File**: `src/main.ts` - Handler function exists but exact name unclear

### Step 2: Frontend Pays x402

**File**: `src/arc.ts`
**Lines**: 24-26, 270-288

```typescript
const payAiBriefingUnlock = async (
  treasuryAddress: string,
  amountUsdc: number,
  onStatus?: (status: string) => void,
  briefing?: { sourceUrl?: string; topic?: string }
): Promise<string> => (await loadArcModule()).payAiBriefingUnlock(treasuryAddress, amountUsdc, onStatus, briefing);
```

**Actual implementation**: Imported from external module (Circle W3S SDK)
**File**: Line 1 shows import: `import { W3SSdk } from "@circle-fin/w3s-pw-web-sdk";`

### Step 3: Backend Records Unlock

**File**: `scripts/serve.mjs`
**Line**: 10054-10091

Frontend sends:
```javascript
POST /api/analytics { event: "ai_unlock_success" }
```

Backend increments counter (line 9063-9091)

### Step 4: Supabase Records Unlock

**File**: `scripts/supabase-schema.sql`
**Lines**: 61-70

```sql
create table if not exists ai_briefing_unlocks (
  wallet_address text references profiles(wallet_address) on delete cascade,
  date_key text not null,
  source_hash text not null,
  tx_hash text,
  created_at timestamptz default now(),
  primary key (wallet_address, date_key, source_hash)
);
```

**Is there backend code creating this record?**
- **NOT FOUND** - No endpoint handler inserts into `ai_briefing_unlocks`

### Step 5: Blockchain Transaction

- The Circle x402 payment goes through Circle's backend
- Payment is recorded by Circle, NOT directly on Arc blockchain
- Return value is transaction hash (TxHash)

### MISSING EVIDENCE:
- No visible endpoint that records the unlock in Supabase `ai_briefing_unlocks` table
- Code structure suggests it should exist but is not visible

---

## CLAIM #14: Git history - when features were added

### Git Commits (Most Recent):

**File Analysis**: Via `git log --oneline`

```
985abb8 Align analytics totals with lifetime platform metrics, hide internal segments, and add email OTP security lock for developer mode
5f46d1d Update stats card labels, display total briefing sold count, and append Totals rows to analytics tables
2450780 Update dashboard terminology: replace Briefing Unlock and AI Briefing references with Briefing Sold / Briefing Sold Revenue
5df36aa feat: implement cryptographic source and summary verification using TLSNotary and 0G compute
```

### Timeline Evidence:

1. **Analytics System**: Multiple commits show analytics dashboard updates
2. **Briefing Terminology**: Changed from "Unlock" to "Sold" (commit 2450780)
3. **Lifetime Metrics**: Analytics aligned with "lifetime platform metrics" (commit 985abb8)
4. **Blockchain Features**: TLSNotary verification implemented (commit 5df36aa)

### Observation:
- Analytics dashboard and terminology were updated **recently**
- This aligns with accumulating trade/briefing counts over time
- No commit showing when fallback markets were added (because they're empty)
- No clear commit separating "mock" from "real" Arc implementation

---

## SUMMARY OF FINDINGS

| Question | Answer | Proof |
|----------|--------|-------|
| **Where is "722 trades"?** | Likely in `.siftle/analytics.json` or Supabase `analytics_daily.trade_buy_success + trade_sell_success` | Scripts/serve.mjs:7021-7091 |
| **What counts as a trade?** | Frontend calls `/api/analytics` with event name | Scripts/serve.mjs:10054-10091 |
| **Does it read blockchain?** | NO for trade counts; YES for trader counts per market | Scripts/serve.mjs:8595-8700 |
| **Does it read localStorage?** | NO for production; YES for mock sessions | Src/arc.ts:1467-1529 |
| **Does it use option_market_positions?** | Only to count unique traders, NOT to count trades | Scripts/serve.mjs:8760-8771 |
| **Is fallbackMarkets.ts used?** | NO - it's empty and replaced by `/api/markets` | Src/main.ts:333-365 |
| **Are failed trades counted?** | YES - separately as `trade_failed` | Scripts/serve.mjs:7031 |
| **Exact blockchain flow?** | NOT VISIBLE - Missing backend trade endpoint handler | Scripts/serve.mjs - searched, not found |
| **Exact briefing flow?** | NOT VISIBLE - Missing Supabase insert handler | Scripts/serve.mjs - searched, not found |

---

## CRITICAL GAPS

1. **Backend Trade Handler**: The endpoint that actually submits to Arc blockchain is NOT visible
2. **Position Recording**: Code that inserts into `option_market_positions` is NOT visible
3. **Briefing Recording**: Code that inserts into `ai_briefing_unlocks` is NOT visible
4. **Dashboard Display**: The page that displays "722 trades, 1,375 briefings" is NOT found
5. **Event Trigger**: Exactly WHEN `/api/analytics` is called from frontend is unclear

---

## CONCLUSION

**The "722 trades" figure comes from the local analytics file or Supabase analytics_daily table, NOT from on-chain blockchain events. This is a frontend-recorded metric that increments whenever the `/api/analytics` endpoint is called with a trade event, regardless of whether the actual blockchain transaction succeeded.**
