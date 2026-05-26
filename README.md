# Siftle

Siftle is an AI-powered daily news feed app that summarizes trending stories and permanently archives them on Shelby.

## What Siftle Is

Siftle is a smart news feed for major daily trends. Users open the app, choose a category, and get a clean feed of the most important stories of the day.

Supported categories include:

- Crypto
- Sports
- Anime

Instead of endless scrolling through social media, Siftle gives users a focused daily view of what matters:

- Top trending stories for the day
- Short AI-generated summaries
- Main source links
- Explanations of why each topic is trending

Siftle is closer to a smart newspaper than a social media platform. It uses AI to filter, group, summarize, and rank major stories so users can quickly understand what the internet is discussing.

## What The App Does

Every day, Siftle:

1. Pulls news and trending topics from selected sources.
2. Groups duplicate or related stories together.
3. Uses AI to summarize each major trend.
4. Ranks the biggest stories.
5. Publishes daily category feeds.
6. Archives the day's feeds on Shelby.

Users can:

- Refresh feeds
- Browse categories
- View older daily feeds
- Search historical trends later

## Why Shelby Matters

Shelby is the archive and retrieval layer for Siftle.

The app constantly generates daily news snapshots, AI summaries, and trend metadata. Instead of deleting old feeds, Siftle stores them permanently on Shelby.

Over time, this creates:

- A historical trend database
- AI-generated daily newspapers
- Searchable archives of what the internet was discussing

## What Gets Stored On Shelby

### 1. Daily Feed Snapshots

The full daily feed for each category.

Example:

```json
{
  "date": "2026-05-25",
  "category": "sports",
  "top_stories": []
}
```

Purpose:

- Lets users revisit old feeds
- Creates permanent daily archives

### 2. AI Summaries

The AI-generated explanations for each trend.

Example:

```json
{
  "headline": "Election debate trends globally",
  "summary": "AI-generated summary...",
  "why_it_matters": "..."
}
```

Purpose:

- Stores the AI-generated intelligence layer
- Makes feeds easier to consume

### 3. Source And Trend Metadata

The original source links and ranking information.

Example:

```json
{
  "source": "BBC",
  "url": "https://example.com/story",
  "trend_score": 92,
  "mentions": 1400
}
```

Purpose:

- Shows where stories came from
- Explains why something was ranked as trending

## MVP News Sources

For the first MVP, Siftle should use free news APIs and RSS feeds before adding harder or more expensive social data sources.

Recommended starting stack:

- NewsData.io
- The Guardian Open Platform
- RSS feeds

Optional APIs for testing or extra coverage:

- Currents API
- GNews API

### NewsData.io

NewsData.io is a good fit for the basic Siftle MVP because it supports daily feeds, categories, global news, and simple API-based article fetching.

Best for:

- Daily feeds
- Categories
- Global news
- Simple MVP development

### Currents API

Currents API can be useful if the app needs more request volume or broad global news coverage across countries and languages.

Best for:

- More request volume
- Basic global news feeds

### GNews API

GNews API is useful for quick prototypes and testing because it provides clean JSON responses for current and historical news.

Best for:

- Testing
- Clean JSON responses
- Quick prototypes

### The Guardian Open Platform

The Guardian Open Platform is useful as a reliable source layer, especially for serious news categories.

Best for:

- Politics
- World news
- Source credibility

### RSS Feeds

RSS feeds are useful as a free fallback and additional source layer. They can help Siftle gather articles from selected publishers without depending only on paid APIs.

Best for:

- Free article ingestion
- Publisher-specific feeds
- Backup source coverage

## MVP Ingestion Pipeline

The recommended MVP flow is:

1. Fetch top articles daily from NewsData.io, The Guardian Open Platform, and RSS feeds.
2. Normalize all articles into one internal format.
3. Group articles by category.
4. Cluster duplicates and related stories.
5. Send headlines and descriptions to 0G Compute for AI summaries.
6. Rank stories by relevance, source count, freshness, and trend metadata.
7. Store the final daily feed snapshot on Shelby.

X should be avoided for the first MVP. Its API access, rate limits, and cost can make the early build harder. Later, X can be added as an extra social signal instead of the main news source.

## Integration Setup

Siftle now includes a local MVP backend in `scripts/serve.mjs`.

The backend exposes:

- `GET /api/feed?category=All`
- `POST /api/archive`

The feed endpoint:

1. Fetches niche RSS articles first for Crypto, Sports, and Anime.
2. Fetches articles from NewsData.io and The Guardian when API keys are configured.
3. Normalizes articles into Siftle's internal story format.
4. Removes obvious duplicate headlines.
5. Sends each story to 0G Compute for AI summaries when configured.
6. Falls back to local summaries if 0G is not configured.
7. Saves the daily snapshot locally during development.
8. Sends the snapshot to Shelby when `SHELBY_UPLOAD_URL` is configured.

Create a `.env` file from `.env.example`:

```txt
NEWSDATA_API_KEY=
GUARDIAN_API_KEY=
OG_RPC_URL=https://evmrpc.0g.ai
OG_COMPUTE_PROVIDER=
ZERO_G_API_KEY=
ZERO_G_MODEL=zai-org/GLM-5-FP8
OG_COMPUTE_API_KEY=
OG_COMPUTE_MODEL=zai-org/GLM-5-FP8
SHELBY_UPLOAD_URL=
SHELBY_API_KEY=
PORT=5173
MAX_ARTICLE_AGE_HOURS=72
```

Local development fallback:

- If no news API keys are set, Siftle uses mock stories.
- If no 0G key is set, Siftle creates local short summaries.
- If no Shelby endpoint is set, Siftle archives snapshots under `.siftle/archive`.
- `MAX_ARTICLE_AGE_HOURS` controls freshness filtering. The default is `72`, so stale RSS stories and undated items are not shown in the live feed.

## UI And Brand Direction

The Siftle interface should feel like a clean, soft, futuristic mobile news app.

Visual direction:

- Mostly white interface with soft blue and lavender shadows
- Electric blue, violet, and teal/green accent colors
- Main logo stored at `assets/Siftle_logo-removebg-preview.png`
- Dark navy headings with softer gray secondary text
- Rounded mobile-first layouts inspired by a polished phone UI
- Small category tabs with an active blue/violet gradient state
- White story cards with subtle borders and shadows
- Gradient square icons for categories and story types
- Bookmark actions for saved stories
- Orbit, radar, or signal motifs to suggest trend discovery
- Floating "key takeaways" style panels for AI-generated summaries

The brand should communicate:

- AI-curated daily briefs
- Clean feeds instead of endless scrolling
- Trend signals and source-backed summaries
- Calm, credible, technology-forward news discovery

## Feed UX Direction

The Siftle website should feel like a clean news-focused social feed. Users scroll through story posts, switch categories, save stories, and click any story to expand it.

Expected feed behavior:

- A continuous scrollable feed of trending stories
- Category tabs for Crypto, Sports, and Anime
- Story cards that show an image, source, time, headline, and category
- Clickable cards that open a separate story page
- Story pages with the image, headline, short AI summary, and source button
- Bookmark actions for saving stories
- Source links for opening the original article
- A calm interface that borrows the ease of social media without becoming a social network

## Niche Feed Strategy

Siftle should focus first on feeds that feel alive every day:

- Crypto
- Sports, especially football
- Anime

These ecosystems have constant updates, active communities, emotional engagement, and daily narratives. This makes them stronger than generic news categories for the first version of Siftle.

Priority source direction:

- Crypto: CryptoPanic, CoinDesk, Decrypt, The Block, DL News, Cointelegraph, project blogs, and RSS feeds
- Sports: ESPN, football-data.org, The Athletic headlines, FIFA/UEFA news, and football RSS feeds
- Anime: Anime News Network, MyAnimeList feeds, AniList APIs, Crunchyroll News, episode releases, trailers, manga announcements, studio news, and adaptation news

## Card Data Rules

Each feed card should make the story feel alive while keeping the data honest.

Real source fields:

- Headline
- Source name
- Source link
- Publish time
- Article image when provided by the source

AI-generated fields:

- Short summary

Fallback-only fields:

- Mock stories are only used when real sources fail or return no fresh articles.
- Category fallback images are only used when the source does not provide an image.

Removed from the first UI:

- Mention counts
- Trend scores
- Why it is trending

0G summary performance:

- Summaries are generated as one short neutral paragraph.
- 0G calls run in parallel for feed items.
- Summaries are cached locally under `.siftle/cache/summaries` so refreshing the same story does not call 0G again.

## Product Summary

Siftle is an AI-powered daily news feed app that summarizes trending stories and permanently archives them on Shelby.
