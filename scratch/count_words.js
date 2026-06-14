const rssFeeds = {
  Crypto: [
    "https://www.coindesk.com/arc/outboundfeeds/rss/",
    "https://cointelegraph.com/rss",
    "https://decrypt.co/feed",
    "https://bitcoinmagazine.com/.rss/full/",
    "https://www.newsbtc.com/feed/",
    "https://bitcoinist.com/feed/"
  ],
  Sports: [
    "https://feeds.bbci.co.uk/sport/football/rss.xml",
    "https://www.theguardian.com/football/rss",
    "https://www.skysports.com/rss/11095"
  ],
  Anime: [
    "https://myanimelist.net/rss/news.xml",
    "https://animecorner.me/feed/",
    "https://otakuusamagazine.com/feed/"
  ],
  Tech: [
    "https://www.theverge.com/rss/index.xml",
    "https://techcrunch.com/feed/",
    "https://www.engadget.com/rss.xml",
    "https://feeds.arstechnica.com/arstechnica/index",
    "https://www.zdnet.com/news/rss.xml",
    "https://www.infoq.com/feed/",
    "https://github.blog/feed/",
    "https://venturebeat.com/feed/"
  ]
};

const getLinkFromXml = (xml) => {
  const itemMatch = xml.match(/<item>[\s\S]*?<link>([\s\S]*?)<\/link>/i);
  if (itemMatch && itemMatch[1]) {
    return itemMatch[1].trim().replace(/<!\[CDATA\[([\s\S]*?)\]\]>/ig, "$1");
  }
  const entryMatch = xml.match(/<entry>[\s\S]*?<link[^>]*?href=["']([\s\S]*?)["']/i);
  if (entryMatch && entryMatch[1]) {
    return entryMatch[1].trim();
  }
  return null;
};

const cleanTextAndCountWords = (html) => {
  // Strip head, script, style, header, footer, nav to isolate core content
  let text = html
    .replace(/<head[\s\S]*?<\/head>/gi, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<header[\s\S]*?<\/header>/gi, "")
    .replace(/<footer[\s\S]*?<\/footer>/gi, "")
    .replace(/<nav[\s\S]*?<\/nav>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  
  const words = text.split(/\s+/).filter(w => w.length > 0);
  return words.length;
};

const run = async () => {
  console.log("Fetching and calculating word count for active sources...\n");
  
  for (const [category, urls] of Object.entries(rssFeeds)) {
    console.log(`=== Category: ${category} ===`);
    for (const feedUrl of urls) {
      try {
        const fRes = await fetch(feedUrl, {
          headers: { "User-Agent": "Mozilla/5.0 SiftleBot/1.0" },
          signal: AbortSignal.timeout(8000)
        });
        if (!fRes.ok) throw new Error(`Feed HTTP ${fRes.status}`);
        
        const xml = await fRes.text();
        const articleUrl = getLinkFromXml(xml);
        if (!articleUrl) throw new Error("Failed to parse article link");
        
        const aRes = await fetch(articleUrl, {
          headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
          },
          signal: AbortSignal.timeout(8000)
        });
        if (!aRes.ok) throw new Error(`Article HTTP ${aRes.status}`);
        
        const html = await aRes.text();
        const wordCount = cleanTextAndCountWords(html);
        
        const name = new URL(articleUrl).hostname.replace("www.", "");
        console.log(`  Source: ${name.padEnd(25)} | Words: ${String(wordCount).padStart(5)} | Link: ${articleUrl}`);
      } catch (err) {
        console.log(`  Source: ${feedUrl.padEnd(25)} | ERROR: ${err.message}`);
      }
    }
    console.log("");
  }
};

run();
