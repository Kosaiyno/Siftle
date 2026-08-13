# Siftle Season 2 Optimization & Feedback Plan

This document maps out the feedback gathered from our Season 1 survey, details the optimizations we have implemented locally, and outlines the rollout roadmap for remaining features when the new season starts and prediction markets go live.

---

## 📋 Season 1 Feedback Summary

Our user survey highlighted a highly engaged audience (willingness to participate in Season 2 rated at **4.8/5**), but pointed out several immediate UX and functional bottlenecks:

1. **AI Briefings:** Bullet points were too short, lacked context, and sections were formatted as single blocks of flat text with no line breaks.
2. **Portfolio Tracking:** No way to easily differentiate active bets from settled history; both were displayed in a single long feed.
3. **Daily Cadence:** Prediction markets were uploaded too late in the afternoon, missing the peak morning engagement window.
4. **Winnings Settlement:** Desire for direct and clear USDC contract payouts upon match conclusion rather than just points.
5. **Live Action:** High demand for making predictions on live games while they are in progress.

---

## 🛠️ Implemented Optimizations (Ready on Localhost)

We have addressed the most critical user experience items (AI Briefing detail and Portfolio organization) directly in our local codebase:

### 1. High-Detail AI Briefings & Formatting
* **Formatting Preservation:** Modified the `cleanSummaryText` sanitization logic in [`scripts/serve.mjs`](file:///C:/Users/user/Desktop/Siftle/scripts/serve.mjs) and [`src/main.ts`](file:///C:/Users/user/Desktop/Siftle/src/main.ts) to replace `\s+` with `[^\S\r\n]+`. This preserves paragraph breaks (`\n\n`) and bullet breaks (`\n-`), allowing Siftle's card layout to display distinct visual blocks.
* **Context Expansion:** Adjusted Siftle's prompt version to `briefing-v5` and updated the AI instructions. The model can now utilize general context regarding player history, club status, and transfer backgrounds to augment brief or truncated feed stories (like RSS feeds cut off with `...`).
* **Detailed Fallbacks:** Expanded the local simulation fallback limits in `buildLocalStructuredBriefingParts` from 14–16 words to 50–80 words for detailed offline coverage.

### 2. Portfolio Tabs (Open vs. Finalized History)
* **Tab Controls:** Replaced the static spans on the Portfolio page with responsive, interactive button elements showing counts.
* **Layout Filtering:** Integrated `portfolioFilter` states so that active predictions and closed outcomes (serving as the user's prediction history log) are separated and filter dynamically on click.

---

## 🚀 Season 2 Rollout Roadmap (When Markets Go Live)

When Season 2 officially starts and smart contract prediction markets go live on the Arc Network, we will execute the following optimizations:

### 1. Automated Morning Market Loading (Priority: High)
* **Objective:** Ensure prediction markets are fully populated by **8:00 AM** daily.
* **Rollout Plan:** Set up a cron schedule on the Render backend using the existing `publish` framework to scrape sports feeds and deploy the day's active market contracts early in the morning rather than relying on manual afternoon triggers.

### 2. Native USDC Claims & Settlements (Priority: High)
* **Objective:** Allow users to redeem USDC winnings directly from concluded prediction contracts.
* **Rollout Plan:** Wire up the frontend claim buttons to trigger the redemption function on the deployed Arc Testnet contract factory. This will authorize sub-second USDC gasless transactions, depositing winnings directly back into the user's developer-controlled Circle wallet.

### 3. Live Match Predictions Pilot (Priority: Medium)
* **Objective:** Introduce live in-play prediction markets.
* **Rollout Plan:** Scope a pilot project for major matches (e.g., Champions League game of the week) using real-time sports feed websockets and automated, fast oracle settlements on the Arc L1 chain.
