# Siftle — Season 1 User Feedback & Action Report

## 📣 Part 1: Feedback Received from Users (Season 1 Survey)

We distributed a feedback Google Form to our early user cohort around July 25th, 2026, to capture their experiences during Season 1. Across all respondents, users rated their willingness to join Season 2 at **4.8/5**. Here are the core comments and pain points they raised:

### 1. AI Briefings
* **Positive Sentiment:** 
  * *"How it compiled a whole article into a few sentences. Made it easy and fast to read."*
  * *"It made reading news practically fun and easy."*
* **Areas for Improvement:**
  * **Detail Level:** Users requested *"More detailed briefing"* rather than over-compressed summaries.
  * **Formatting:** Users requested *"Better formatting"* and suggested using *"different lines to summarise each sub-section of the whole news"* (a structured layout).

### 2. Prediction Markets
* **Positive Sentiment:**
  * Earning points and competing on the leaderboard.
  * Making predictions on football news.
* **Areas for Improvement:**
  * **Reward Claims:** Users requested the ability to *"claim winnings after the match concludes, not just points for the leaderboard."*
  * **Live Engagement:** High demand for *"Live match predictions"* while games are ongoing.
  * **Prediction History:** Users requested a dedicated *"Prediction history"* view to trace their past performance.
  * **Market Update Timing:** Users pointed out that markets currently upload late in the afternoon, requesting that we *"load the prediction markets of the day in the morning."*
  * **Market Status Separation:** Clearer separation between ongoing (active) and closed (resolved) markets.

---

## 🛠️ Part 2: What We Did (Implemented Fixes)

We went to work on localhost to address the immediate briefing, layout, and claiming pain points:

* **Detailed AI Briefing Layout & Formatting:**
  * We modified the text sanitization routines to preserve paragraph breaks (`\n\n`) and bullet points (`\n-`), allowing cards to render in distinct visual blocks.
  * We re-enforced strict grounding instructions (`"Stay strictly grounded in the supplied text"`) and expanded the backend scraper to ingest up to **18,000 characters** (preventing long articles from being cut off mid-sentence). The AI now writes fully developed, grounded sentences without generic fillers.
* **Direct Winnings Auto-Claims:**
  * We addressed the request to "claim winnings after the match concludes." Siftle now automatically processes contract settlements and pushes USDC rewards directly to the winners' developer-controlled wallets upon match finalization.
* **Portfolio & Market Separations (Open vs. History):**
  * We redesigned the portfolio view to add interactive tabs, separating active **Open Predictions** from the user's settled **Finalized Predictions (History)**.

---

## 🚀 Part 3: What We Plan to Do (Future Roadmap & Constraints)

Here is how we will address the remaining user requests when the new season launches:

* **Live Match In-Play Predictions:**
  * *User Request:* *"Live match predictions"* during matches.
  * *Plan:* We will pilot short-duration live prediction markets (e.g., during major Champions League matches) using real-time game websocket data. **This will be implemented as soon as we launch the upcoming Livescore and Matches section on Siftle.**
* **Winnings Alert Notifications:**
  * *User Request:* Instant alerts when a prediction turns out correct.
  * *Plan/Constraint:* Because Siftle is a web application (not a native mobile app), push notifications are restricted. To solve this, **we will implement web-based in-app notifications (toast banners or dashboard alert badges)** to instantly notify users of winnings once they visit Siftle.
* **Early-Morning Markets Cadence (8:00 AM):**
  * *User Request:* Load the day's markets in the morning.
  * *Comment/Constraint:* We cannot automate this process via a cron schedule because **we create and design our prediction markets manually** to maintain high quality, accurate target rules, and fair odds. We will keep creating them manually but optimize our workflow to get them live earlier in the day.
