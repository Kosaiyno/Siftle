const feeds = [
  "https://basketball.realgm.com/rss/realgm_nba_wiretap.xml",
  "https://feeds.hoopshype.com/xml/rumors.xml",
  "https://www.videogameschronicle.com/category/news/feed/",
  "https://www.gamesindustry.biz/feed/news",
  "https://www.rockpapershotgun.com/feed",
  "https://www.dualshockers.com/feed/video-games/"
];

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

const testScrape = async (url) => {
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
      },
      signal: AbortSignal.timeout(8000)
    });
    if (!res.ok) return { ok: false, error: `HTTP ${res.status}` };
    
    const html = await res.text();
    if (html.includes("Just a moment...") || html.includes("cf-challenge") || html.includes("__cf_chl_opt") || html.includes("Cloudflare")) {
      return { ok: false, error: "Cloudflare blocked" };
    }
    
    if (html.length < 2000) return { ok: false, error: "Content too short" };
    
    // Count words
    let text = html
      .replace(/<head[\s\S]*?<\/head>/gi, "")
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .replace(/<style[\s\S]*?<\/style>/gi, "")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    const words = text.split(/\s+/).filter(w => w.length > 0);
    return { ok: true, size: html.length, words: words.length };
  } catch (err) {
    return { ok: false, error: err.message };
  }
};

const run = async () => {
  console.log("Testing New Candidate Feeds...\n");
  for (const url of feeds) {
    console.log(`Testing Feed: ${url}`);
    try {
      const fRes = await fetch(url, {
        headers: { "User-Agent": "Mozilla/5.0 SiftleBot/1.0" },
        signal: AbortSignal.timeout(8000)
      });
      if (!fRes.ok) throw new Error(`Feed HTTP ${fRes.status}`);
      
      const xml = await fRes.text();
      const articleUrl = getLinkFromXml(xml);
      if (!articleUrl) throw new Error("Could not parse article link");
      
      console.log(`  -> Found Article: ${articleUrl}`);
      const scrape = await testScrape(articleUrl);
      if (scrape.ok) {
        console.log(`  -> SUCCESS: Scraped ${scrape.words} words (${scrape.size} bytes)`);
      } else {
        console.log(`  -> FAILED: ${scrape.error}`);
      }
    } catch (err) {
      console.log(`  -> FAILED: ${err.message}`);
    }
    console.log("");
  }
};

run();
