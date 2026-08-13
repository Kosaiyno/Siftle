import { createHash } from "node:crypto";

// Common Premier League, La Liga, Serie A, Bundesliga, UCL clubs
const KNOWN_CLUBS = [
  "Arsenal", "Aston Villa", "Chelsea", "Liverpool", "Manchester City", "Manchester United",
  "Newcastle", "Tottenham", "West Ham", "Brighton", "Brentford", "Crystal Palace",
  "Everton", "Fulham", "Leicester", "Nottingham Forest", "Wolves", "Bournemouth",
  "Real Madrid", "Barcelona", "Atletico Madrid", "Sevilla", "Real Sociedad", "Villarreal",
  "Bayern Munich", "Borussia Dortmund", "Bayer Leverkusen", "RB Leipzig",
  "PSG", "Paris Saint-Germain", "Monaco", "Marseille", "Lyon",
  "Inter Milan", "AC Milan", "Juventus", "Napoli", "Roma", "Lazio", "Atalanta",
  "Sporting CP", "Benfica", "Porto", "Ajax", "Galatasaray", "Fenerbahce"
];

// Common Managers
const KNOWN_MANAGERS = [
  "Mikel Arteta", "Pep Guardiola", "Erik ten Hag", "Enzo Maresca", "Arne Slot",
  "Ange Postecoglou", "Unai Emery", "Eddie Howe", "Carlo Ancelotti", "Hansi Flick",
  "Diego Simeone", "Xabi Alonso", "Vincent Kompany", "Luis Enrique", "Simone Inzaghi",
  "Thiago Motta", "Antonio Conte", "Jose Mourinho", "Jurgen Klopp", "Thomas Tuchel",
  "Ruben Amorim", "Mauricio Pochettino", "Julian Nagelsmann"
];

// Common Key Players & Transfer Targets
const KNOWN_PLAYERS = [
  "Cole Palmer", "Bukayo Saka", "Erling Haaland", "Kevin De Bruyne", "Phil Foden",
  "Mohamed Salah", "Virgil van Dijk", "Trent Alexander-Arnold", "Bruno Fernandes",
  "Marcus Rashford", "Kobbie Mainoo", "Son Heung-min", "Alexander Isak", "Declan Rice",
  "Martin Odegaard", "William Saliba", "Kylian Mbappe", "Vinicius Junior", "Jude Bellingham",
  "Rodrygo", "Lamine Yamal", "Robert Lewandowski", "Pedri", "Gavi", "Raphinha",
  "Harry Kane", "Jamal Musiala", "Florian Wirtz", "Victor Osimhen", "Lautaro Martinez",
  "Khvicha Kvaratskhelia", "Rafael Leao", "Lionel Messi", "Cristiano Ronaldo", "Neymar",
  "Romelu Lukaku", "Lukaku", "Josué Caicedo", "Josue Caicedo", "Caicedo",
  "João Palhinha", "Palhinha", "Breel Embolo", "Embolo", "Gabriel Martinelli",
  "Martinelli", "Ethan Nwaneri", "Nwaneri", "Myles Lewis-Skelly", "Lewis-Skelly",
  "Bradley Barcola", "Barcola", "Bruno Guimaraes", "Yan Diomande", "Diomande"
];

// Keywords indicating High Importance (Official / Confirmed / Major Milestone)
const HIGH_IMPORTANCE_KEYWORDS = [
  "official", "confirmed", "agreed", "signs", "signed", "deal done", "here we go",
  "completed", "sacked", "dismissed", "appointed", "named manager", "medical passed",
  "out for season", "acl injury", "surgery", "trophy", "champions", "final score",
  "red card", "hat-trick", "champions league"
];

// Keywords indicating Medium Importance (Talks / Bids / Statements)
const MEDIUM_IMPORTANCE_KEYWORDS = [
  "talks", "bid", "offer", "negotiating", "in talks", "clause", "personal terms",
  "press conference", "speaks on", "target", "monitoring", "close to", "interest",
  "injury update", "expected to miss", "lineup", "contract extension"
];

/**
 * Extract football entities (Clubs, Managers, Players) from text.
 */
export const extractEntities = (text) => {
  if (!text || typeof text !== "string") {
    return { clubs: [], managers: [], players: [] };
  }

  const clean = text.toLowerCase();
  const clubs = KNOWN_CLUBS.filter(club => {
    const clubRegex = new RegExp(`\\b${club.toLowerCase()}\\b`, "i");
    return clubRegex.test(clean);
  });

  const managers = KNOWN_MANAGERS.filter(manager => {
    const managerRegex = new RegExp(`\\b${manager.toLowerCase()}\\b`, "i");
    return managerRegex.test(clean);
  });

  const players = KNOWN_PLAYERS.filter(player => {
    const playerRegex = new RegExp(`\\b${player.toLowerCase()}\\b`, "i");
    return playerRegex.test(clean);
  });

  return { clubs, managers, players };
};

/**
 * Determine event importance level: "HIGH" | "MEDIUM" | "LOW"
 */
export const scoreImportance = (text, sourceCount = 1) => {
  const clean = (text || "").toLowerCase();
  
  if (sourceCount >= 3) return "HIGH";
  
  for (const kw of HIGH_IMPORTANCE_KEYWORDS) {
    if (clean.includes(kw)) return "HIGH";
  }
  
  for (const kw of MEDIUM_IMPORTANCE_KEYWORDS) {
    if (clean.includes(kw)) return "MEDIUM";
  }
  
  return "LOW";
};

const NAMED_ENTITIES = {
  "&quot;": '"', "&apos;": "'", "&amp;": "&", "&lt;": "<", "&gt;": ">",
  "&nbsp;": " ", "&ndash;": "-", "&mdash;": "—", "&hellip;": "...",
  "&lsquo;": "'", "&rsquo;": "'", "&ldquo;": '"', "&rdquo;": '"',
  "&scaron;": "š", "&Scaron;": "Š", "&eacute;": "é", "&Eacute;": "É",
  "&egrave;": "è", "&Egrave;": "È", "&ecirc;": "ê", "&Ecirc;": "Ê",
  "&aacute;": "á", "&Aacute;": "Á", "&agrave;": "à", "&Agrave;": "À",
  "&iacute;": "í", "&Iacute;": "Í", "&oacute;": "ó", "&Oacute;": "Ó",
  "&uacute;": "ú", "&Uacute;": "Ú", "&uuml;": "ü", "&Uuml;": "Ü",
  "&ouml;": "ö", "&Ouml;": "Ö", "&auml;": "ä", "&Auml;": "Ä",
  "&ntilde;": "ñ", "&Ntilde;": "Ñ", "&ccedil;": "ç", "&Ccedil;": "Ç",
  "&szlig;": "ß", "&euro;": "€", "&pound;": "£", "&copy;": "©"
};

/**
 * Decode HTML entities and sanitize raw strings.
 */
export const decodeHtmlEntities = (str) => {
  if (!str || typeof str !== "string") return "";
  let res = str
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8216;/g, "'")
    .replace(/&#8217;/g, "'")
    .replace(/&#8211;/g, "-")
    .replace(/&#8212;/g, "—")
    .replace(/&#8230;/g, "...")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, code) => String.fromCharCode(parseInt(code, 16)))
    .replace(/&[a-zA-Z]+;/g, (m) => NAMED_ENTITIES[m] || m)
    .replace(/&#[a-zA-Z0-9]*;?/g, "");
  return res;
};

/**
 * Clean and normalize a headline for human reading, stripping tweet artifacts.
 */
export const cleanHeadlineText = (raw) => {
  if (!raw) return "";
  let clean = decodeHtmlEntities(raw)
    .normalize("NFKD")
    .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}]/gu, "")
    .replace(/Fabrizio Romano\s*\(@FabrizioRomano\)/gi, "")
    .replace(/@[a-zA-Z0-9_]+/g, "")
    .replace(/#\w+/g, "")
    .replace(/^(?:official,?\s*exclusive\s*story\s*confirmed|deal done|here we go|confirmed|breaking news|breaking|official|exclusive|update|exclusive:)\s*[:\.\-]?\s*/gi, "")
    .replace(/^(?:deal done|breaking|official|exclusive|update)\s*[:\.\-]?\s*/gi, "")
    .replace(/\b(?:BR|NL|SK|PT|FR|XK|TR|BE|EC)\s+[A-Z][a-z]+/g, "")
    .replace(/\b(?:EC|FCB|CFC|MUFC|LFC|MCFC|AFCB|THFC|NUFC)\b/g, "")
    .replace(/(?:https?:\/\/\S+|read more.*$)/gi, "")
    .replace(/\s+/g, " ")
    .trim();

  // If the headline is multiple sentences, take only the first clean sentence
  const firstSentence = clean.split(/[.!?]\s+/)[0];
  clean = firstSentence || clean;

  if (clean.length > 0) {
    clean = clean.charAt(0).toUpperCase() + clean.slice(1);
  }
  return clean || raw;
};

export const formatAsReporterSentence = (title, summary, followedTerms = []) => {
  let text = (summary || title || "").trim();

  // If the summary is truncated (ends in ...) or is too short or is a double headline, use title
  const isTruncated = text.endsWith("...") || text.endsWith("…");
  const looksLikeRoundup = text.includes(" - ") || text.includes(" | ") || text.split(" ").length < 6;
  
  if (isTruncated || looksLikeRoundup || text.length < 25) {
    text = title || "";
  }

  // Handle case where text has multiple sentences joined together without punctuation
  // If we detect the title itself is clean and has fewer words/higher density, prefer the title!
  if (text.split(" ").length > 22 && title && title.split(" ").length < 15) {
    text = title;
  }

  // Strip prefixes
  text = text
    .replace(/^(?:transfer news live|breaking news|breaking|official|exclusive|update|report|gossip|rumor)\s*[:\.\-–—]?\s*/gi, "")
    .replace(/^(?:deal done|here we go|confirmed|agreed)\s*[:\.\-–—]?\s*/gi, "")
    .replace(/Fabrizio Romano\s*\(@FabrizioRomano\)/gi, "")
    .replace(/@[a-zA-Z0-9_]+/g, "")
    .replace(/#\w+/g, "")
    .replace(/\b(?:BR|NL|SK|PT|FR|XK|TR|BE|EC)\s+[A-Z][a-z]+/g, "")
    .replace(/\b(?:EC|FCB|CFC|MUFC|LFC|MCFC|AFCB|THFC|NUFC)\b/g, "")
    .replace(/\s+/g, " ")
    .trim();

  // Strip source suffixes
  text = text
    .replace(/\s*-\s*(?:tnt sports|sky sports|espn|bbc|daily mail|mirror|sun|the athletic|independent|guardian|reporter|exclusive)\s*$/gi, "")
    .trim();

  // Handle double-headline splits if multiple clauses are joined by commas/semicolons/while/as
  if (followedTerms && followedTerms.length > 0) {
    const clauses = text.split(/[,;]|\s+while\s+|\s+as\s+/i);
    if (clauses.length > 1) {
      for (const clause of clauses) {
        const cleanClause = clause.trim();
        const matches = followedTerms.some(term => cleanClause.toLowerCase().includes(term.toLowerCase()));
        if (matches && cleanClause.split(" ").length >= 4) {
          text = cleanClause;
          break;
        }
      }
    }
  } else {
    // Overall feed double-headline handling: take only the first main clause if substantial
    const clauses = text.split(/[,;]|\s+while\s+|\s+as\s+/i);
    if (clauses.length > 1 && clauses[0].trim().split(" ").length >= 6) {
      text = clauses[0].trim();
    }
  }

  // Conversational active voice mappings
  text = text
    .replace(/\bseals\b/i, "has sealed")
    .replace(/\bgives green light\b/i, "has given the green light")
    .replace(/\bagree deal\b/i, "have agreed a deal")
    .replace(/\bagreed deal\b/i, "have agreed a deal")
    .replace(/\bjoins\b/i, "has joined")
    .replace(/\bsigns\b/i, "has signed")
    .replace(/\bsigned\b/i, "has signed")
    .replace(/\bcompleted transfer\b/i, "has completed a transfer")
    .replace(/\bcompletes move\b/i, "has completed a move")
    .replace(/\bclose to agreeing\b/i, "is close to agreeing")
    .replace(/\bin talks to sign\b/i, "is in active talks to sign")
    .replace(/\breach agreement\b/i, "have reached an agreement")
    .replace(/\breached agreement\b/i, "have reached an agreement");

  // Clean trailing punctuation
  text = text.replace(/[,;:\-\s]+$/, "");

  // Capitalize first letter
  if (text.length > 0) {
    text = text.charAt(0).toUpperCase() + text.slice(1);
  }

  if (text && !text.endsWith(".")) {
    text += ".";
  }

  // Ensure strictly one sentence
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
  let firstSentence = sentences[0]?.trim() || text;
  if (!firstSentence.endsWith(".")) firstSentence += ".";

  return firstSentence;
};

/**
 * Extract exactly one concise, high-value sentence for the briefing body.
 */
export const extractOneSentenceSummary = (rawText, title) => {
  if (!rawText) return title || "";
  let clean = decodeHtmlEntities(rawText)
    .normalize("NFKD")
    .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}]/gu, "")
    .replace(/Fabrizio Romano\s*\(@FabrizioRomano\)/gi, "")
    .replace(/@[a-zA-Z0-9_]+/g, "")
    .replace(/#\w+/g, "")
    .replace(/^(?:official,?\s*exclusive\s*story\s*confirmed|deal done|here we go|confirmed|breaking news|breaking|official|exclusive|update|exclusive:)\s*[:\.\-]?\s*/gi, "")
    .replace(/^(?:deal done|breaking|official|exclusive|update)\s*[:\.\-]?\s*/gi, "")
    .replace(/\b(?:BR|NL|SK|PT|FR|XK|TR|BE|EC)\s+[A-Z][a-z]+/g, "")
    .replace(/\b(?:EC|FCB|CFC|MUFC|LFC|MCFC|AFCB|THFC|NUFC)\b/g, "")
    .replace(/(?:https?:\/\/\S+|read more.*$)/gi, "")
    .replace(/\s+/g, " ")
    .trim();

  const sentences = clean.match(/[^.!?]+[.!?]+/g) || [clean];
  let oneSentence = sentences[0]?.trim() || clean;
  if (!oneSentence.endsWith(".")) oneSentence += ".";
  if (oneSentence.length > 0) {
    oneSentence = oneSentence.charAt(0).toUpperCase() + oneSentence.slice(1);
  }
  return oneSentence;
};

/**
 * Clean and normalize a headline for similarity comparison.
 */
export const normalizeHeadlineForComparison = (headline) => {
  return (headline || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
};

/**
 * Calculate simple word overlap (Jaccard similarity) between two headlines.
 */
export const calculateHeadlineSimilarity = (h1, h2) => {
  const words1 = new Set(normalizeHeadlineForComparison(h1).split(" ").filter(w => w.length > 3));
  const words2 = new Set(normalizeHeadlineForComparison(h2).split(" ").filter(w => w.length > 3));
  
  if (words1.size === 0 || words2.size === 0) return 0;
  
  let intersection = 0;
  for (const w of words1) {
    if (words2.has(w)) intersection++;
  }
  
  const union = new Set([...words1, ...words2]).size;
  return union > 0 ? intersection / union : 0;
};

const isJournalismSource = (source) => {
  if (!source) return false;
  const s = source.toLowerCase();
  return !s.startsWith("@") && !s.includes("twitter") && !s.includes("tweet");
};

/**
 * Cluster raw news articles and tweets into distinct, deduplicated Football Events.
 */
export const clusterArticlesIntoEvents = (articles = []) => {
  const events = [];

  for (const article of articles) {
    const rawTitle = article.title || article.headline || "";
    const title = cleanHeadlineText(rawTitle);
    const rawContent = article.content || article.snippet || article.summary || "";
    const content = decodeHtmlEntities(rawContent)
      .replace(/(?:https?:\/\/\S+|read more.*$)/gi, "")
      .replace(/\(source:\s*@[^)]+\)/gi, "")
      .replace(/\s+/g, " ")
      .trim();
    const combinedText = `${rawTitle} ${content}`;
    const entities = extractEntities(combinedText);
    const pubDate = article.published_at || article.publishedAt || article.date || new Date().toISOString();
    const sourceName = article.source || "News";

    // Check if article belongs to an existing event
    let matchedEvent = null;
    for (const existingEvent of events) {
      // 1. Headline similarity check
      const sim = calculateHeadlineSimilarity(existingEvent.title, title);
      
      // 2. Shared entity overlap
      const sharedClubs = entities.clubs.filter(c => existingEvent.entities.clubs.includes(c));
      const sharedPlayers = entities.players.filter(p => existingEvent.entities.players.includes(p));
      const sharedManagers = entities.managers.filter(m => existingEvent.entities.managers.includes(m));
      
      const sharesPrimaryPlayer = sharedPlayers.length > 0 && (sim >= 0.10 || sharedClubs.length > 0);
      const sharesClubAndTopic = sharedClubs.length > 0 && (sim >= 0.18 || sharedManagers.length > 0);

      if (sim >= 0.32 || sharesPrimaryPlayer || sharesClubAndTopic) {
        matchedEvent = existingEvent;
        break;
      }
    }

    if (matchedEvent) {
      // Prefer clean journalism title over raw twitter handle
      if (isJournalismSource(sourceName) && !isJournalismSource(matchedEvent.primarySource)) {
        matchedEvent.title = title;
        matchedEvent.summary = extractOneSentenceSummary(content || rawTitle, title);
        matchedEvent.primarySource = sourceName;
      }

      // Append source to existing event
      matchedEvent.sources.push({
        source: sourceName,
        headline: rawTitle,
        url: article.url || article.sourceUrl || "",
        published_at: pubDate
      });
      // Merge entities
      matchedEvent.entities.clubs = Array.from(new Set([...matchedEvent.entities.clubs, ...entities.clubs]));
      matchedEvent.entities.managers = Array.from(new Set([...matchedEvent.entities.managers, ...entities.managers]));
      matchedEvent.entities.players = Array.from(new Set([...matchedEvent.entities.players, ...entities.players]));
      // Update last updated timestamp
      if (new Date(pubDate) > new Date(matchedEvent.last_updated_at)) {
        matchedEvent.last_updated_at = pubDate;
      }
      // Re-evaluate importance with new source count
      matchedEvent.importance = scoreImportance(`${matchedEvent.title} ${matchedEvent.summary}`, matchedEvent.sources.length);
    } else {
      // Create new event
      const eventId = `evt_${createHash("md5").update(title).digest("hex").slice(0, 10)}`;
      const importance = scoreImportance(combinedText, 1);

      events.push({
        id: eventId,
        title: title,
        summary: extractOneSentenceSummary(content || rawTitle, title),
        primarySource: sourceName,
        category: article.category || "Sports",
        importance: importance,
        entities: entities,
        sources: [{
          source: sourceName,
          headline: rawTitle,
          url: article.url || article.sourceUrl || "",
          published_at: pubDate
        }],
        first_seen_at: pubDate,
        last_updated_at: pubDate
      });
    }
  }

  // Sort events by importance (HIGH > MEDIUM > LOW) then by newest
  const importanceRank = { HIGH: 3, MEDIUM: 2, LOW: 1 };
  return events.sort((a, b) => {
    const rankDiff = (importanceRank[b.importance] || 0) - (importanceRank[a.importance] || 0);
    if (rankDiff !== 0) return rankDiff;
    return new Date(b.last_updated_at).getTime() - new Date(a.last_updated_at).getTime();
  });
};

/**
 * Compute the briefing time window based on last_briefing_at and new day rules.
 */
export const calculateBriefingTimeWindow = (lastBriefingAt) => {
  const now = new Date();
  const nowIso = now.toISOString();

  // Start of current day in UTC
  const startOfDay = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 0, 0, 0));
  const startOfDayIso = startOfDay.toISOString();

  if (!lastBriefingAt) {
    return { periodStart: startOfDayIso, periodEnd: nowIso, isNewDay: true };
  }

  const lastDate = new Date(lastBriefingAt);
  if (isNaN(lastDate.getTime())) {
    return { periodStart: startOfDayIso, periodEnd: nowIso, isNewDay: true };
  }

  // Check if last briefing was on a previous calendar day (UTC)
  const isPreviousDay = lastDate < startOfDay;
  if (isPreviousDay) {
    return { periodStart: startOfDayIso, periodEnd: nowIso, isNewDay: true };
  }

  // Same day delta briefing
  return { periodStart: lastDate.toISOString(), periodEnd: nowIso, isNewDay: false };
};

const ALIAS_DICTIONARY = {
  "mancity": ["manchester city", "man city", "mancity"],
  "man city": ["manchester city", "man city", "mancity"],
  "manchester city": ["manchester city", "man city", "mancity"],
  "manutd": ["manchester united", "man utd", "manutd"],
  "man utd": ["manchester united", "man utd", "manutd"],
  "manchester united": ["manchester united", "man utd", "manutd"],
  "chelsea": ["chelsea", "cfc", "chelsea fc"],
  "arsenal": ["arsenal", "gunners"],
  "liverpool": ["liverpool", "lfc"],
  "spurs": ["tottenham", "spurs", "tottenham hotspur"],
  "tottenham": ["tottenham", "spurs", "tottenham hotspur"],
  "real madrid": ["real madrid", "madrid", "real"],
  "barcelona": ["barcelona", "barca", "fcb"],
  "halland": ["haaland", "erling haaland"],
  "haaland": ["haaland", "erling haaland"],
  "palmer": ["cole palmer", "palmer"],
  "saka": ["bukayo saka", "saka"],
  "mbappe": ["kylian mbappe", "mbappe"]
};

export const expandSearchTerms = (list = []) => {
  const res = new Set();
  for (const item of list) {
    if (!item) continue;
    const low = item.toLowerCase().trim();
    res.add(low);
    const aliases = ALIAS_DICTIONARY[low] || [];
    for (const a of aliases) res.add(a);
  }
  return Array.from(res);
};

/**
 * Filter and rank events for a delta briefing based on time window and context.
 */
export const filterEventsForBriefing = (events = [], { periodStart, periodEnd, context = "overall", entities = {} }) => {
  const startTime = new Date(periodStart).getTime();
  const allFollowedTerms = expandSearchTerms([
    ...(entities.clubs || []),
    ...(entities.managers || []),
    ...(entities.players || [])
  ]);
  const hasFollowedPreferences = allFollowedTerms.length > 0;

  if (context === "personalized") {
    if (!hasFollowedPreferences) return [];

    return events.filter(event => {
      const eventTime = new Date(event.last_updated_at).getTime();
      if (eventTime < startTime && startTime > 0 && !isNaN(eventTime)) return false;

      // Strict matching: followed term must be explicitly mentioned in Title or Summary
      const combinedText = `${event.title || ""} ${event.summary || ""}`.toLowerCase();
      return allFollowedTerms.some(term => combinedText.includes(term));
    });
  }

  // Overall feed briefing
  return events.filter(event => {
    const eventTime = new Date(event.last_updated_at).getTime();
    if (eventTime < startTime && startTime > 0 && !isNaN(eventTime)) return false;
    return event.importance !== "LOW";
  });
};
