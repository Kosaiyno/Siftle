import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env variables
const loadEnv = () => {
  const envPath = 'C:\\Users\\user\\Desktop\\Siftle\\.env';
  if (!fs.existsSync(envPath)) {
    console.error("No .env file found!");
    return;
  }
  const lines = fs.readFileSync(envPath, 'utf8').split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const separator = trimmed.indexOf('=');
    if (separator === -1) continue;
    const key = trimmed.slice(0, separator).trim();
    const value = trimmed.slice(separator + 1).trim().replace(/^["']|["']$/g, '');
    process.env[key] = value;
  }
};

loadEnv();

const getThread0GConfig = () => {
  const apiKey = process.env.THREAD_ZERO_G_API_KEY || process.env.THREAD_OG_COMPUTE_API_KEY || process.env.ZERO_G_API_KEY || process.env.OG_COMPUTE_API_KEY;
  const model = process.env.THREAD_ZERO_G_MODEL || process.env.THREAD_OG_COMPUTE_MODEL || process.env.ZERO_G_MODEL || process.env.OG_COMPUTE_MODEL || "zai-org/GLM-5-FP8";
  const providerAddress = process.env.THREAD_OG_COMPUTE_PROVIDER || process.env.OG_COMPUTE_PROVIDER;
  const envEndpoint =
    process.env.THREAD_OG_COMPUTE_ENDPOINT ||
    process.env.THREAD_ZERO_G_ENDPOINT ||
    process.env.THREAD_OG_COMPUTE_URL ||
    process.env.THREAD_ZERO_G_URL ||
    process.env.OG_COMPUTE_ENDPOINT ||
    process.env.ZERO_G_ENDPOINT ||
    process.env.OG_COMPUTE_URL ||
    process.env.ZERO_G_URL;

  return {
    apiKey: apiKey ? String(apiKey).trim() : undefined,
    model: model ? String(model).trim() : "zai-org/GLM-5-FP8",
    providerAddress: providerAddress ? String(providerAddress).trim() : undefined,
    envEndpoint: envEndpoint ? String(envEndpoint).trim() : undefined
  };
};

const get0GEndpoint = (serviceUrl) => {
  const normalized = String(serviceUrl).replace(/\/$/, "");
  if (normalized.endsWith("/v1/proxy")) return normalized;
  return `${normalized}/v1/proxy`;
};

const storyForThreadReview = (story, role = "candidate") => ({
  id: role === "current" ? undefined : story.id,
  headline: story.headline || "",
  summary: story.summary || "",
  category: story.category || "",
  publishedAt: story.publishedAt || "",
  sourceUrl: story.sourceUrl || ""
});

const isSpecificThreadEvidence = (item) => {
  const actor = String(item?.shared_actor ?? "").trim();
  const event = String(item?.shared_event ?? "").trim();
  const whyRelated = String(item?.why_related ?? item?.reason ?? "").trim();
  const whyNotBroad = String(item?.why_not_broad ?? "").trim();
  const combined = `${actor} ${event} ${whyRelated} ${whyNotBroad}`.toLowerCase();
  const vagueValues = new Set(["", "same topic", "same category", "same company", "same actor", "same team", "same coin", "same sport", "related"]);

  if (vagueValues.has(actor.toLowerCase()) || vagueValues.has(event.toLowerCase())) return false;
  if (actor.length < 2 || event.length < 8 || whyRelated.length < 18 || whyNotBroad.length < 14) return false;
  if (!/\b(not|rather than|because|specific|direct|same event|same product|same launch|same dispute|same deal|same outage|same report|same match|same transfer|same investigation|same earnings|same holdings)\b/i.test(whyNotBroad)) {
    return false;
  }
  if (/\b(general|broad|category|industry|market|topic)\b/.test(combined) && !/\bnot\b/.test(whyNotBroad.toLowerCase())) {
    return false;
  }
  return true;
};

const runRealPromptTest = async () => {
  const config = getThread0GConfig();
  console.log("Thread 0G Config Resolved:", {
    apiKey: config.apiKey ? `${config.apiKey.substring(0, 15)}...` : "NONE",
    model: config.model,
    envEndpoint: config.envEndpoint
  });

  if (!config.apiKey || !config.envEndpoint) {
    console.error("Missing api key or endpoint!");
    return;
  }

  const endpoint = get0GEndpoint(config.envEndpoint);
  
  const story = {
    headline: "Polymarket UMA dispute resolves Strategy's bitcoin sale outcome",
    summary: "The Polymarket dispute regarding whether Strategy sold any bitcoin in June has been officially resolved by UMA voters after a challenge.",
    category: "Crypto",
    publishedAt: "2026-06-16T12:00:00Z",
    sourceUrl: "https://example.com/polymarket-uma-resolution"
  };

  const candidates = [
    {
      id: 0,
      headline: "Strategy sold $100M of Bitcoin treasury holdings, reports state",
      summary: "Treasury records confirm Strategy executed a sale of $100M worth of Bitcoin last night, marking its first major sale.",
      category: "Crypto",
      publishedAt: "2026-06-15T22:00:00Z",
      sourceUrl: "https://example.com/strategy-sells-bitcoin"
    },
    {
      id: 1,
      headline: "Kraken launches Bitcoin vault service for institutional clients",
      summary: "Kraken announced a new secure custody option for institutions looking to hold large amounts of Bitcoin.",
      category: "Crypto",
      publishedAt: "2026-06-14T15:00:00Z",
      sourceUrl: "https://example.com/kraken-bitcoin-vault"
    }
  ];

  try {
    const response = await fetch(`${endpoint}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.apiKey}`
      },
      body: JSON.stringify({
        model: config.model,
        messages: [
          {
            role: "system",
            content: [
              "You are Siftle's senior news-thread editor. Return ONLY valid JSON.",
              "Your job has two parts:",
              "1. Decide whether older candidate articles belong in the same developing story as the current article.",
              "2. Write the thread_topic by reading the current article plus the approved related articles and naming what the shared story is actually about.",
              "A Siftle thread is a timeline of meaningful developments over time, not a bundle of outlets repeating the same news.",
              "For every candidate, classify relationship as prior_development, material_follow_up, duplicate_coverage, or unrelated, then give structured evidence.",
              "Approve prior_development and material_follow_up articles involving the same main actor, product, token, team, series, company, dispute, launch, outage, lawsuit, transfer, match, market catalyst, or product rail.",
              "Treat a direct causal chain as one developing story: the initiating event, immediate reaction, dispute caused by it, official response, consequence, investigation, and later resolution may belong together.",
              "Example: Strategy's bitcoin sale, the Polymarket timing dispute caused by that sale, backlash over the market outcome, and the later UMA resolution form one developing timeline.",
              "Do not approve other Strategy treasury news or unrelated Polymarket platform news unless it directly continues that same catalyst.",
              "Some candidates include existing_thread_context from a previously 0G-reviewed timeline. Approve that candidate when the current article clearly continues the same root catalyst; Siftle will preserve the verified older timeline automatically.",
              "Reject duplicate_coverage: another outlet reporting substantially the same facts without a new development, even when the actor and event match.",
              "Same-day articles may only be approved as material_follow_up when they add a clearly new event, decision, result, response, consequence, or milestone.",
              "A valid displayed thread must include at least one approved article from an earlier calendar day than the current article.",
              "Keep the JSON concise. Do not output entries for rejected candidates; summarize rejections in reject_reason.",
              "Reject articles that are merely in the same category, about the same broad sport/coin/company/team/person/series, or share generic terms.",
              "For sports, same World Cup/league/coach/team is not enough without the same move/event/player/match.",
              "For crypto, approve product-rail follow-ups when they share a concrete actor plus product context such as Kraken Earn/Vault, Strategy bitcoin sale/Polymarket, MoneyGram MGUSD/Stellar, ETF outflows, or Mt. Gox transfers. Same coin or price movement alone is not enough.",
              "For crypto company treasury/mining stories, the same coin, holdings amount, revenue figure, or broad Bitcoin treasury theme is not enough. The stories must share the same company/entity and the same earnings, sale, holdings change, product, or regulatory event.",
              "For payments/card stories, Visa, card, tokenized, rewards, payments, launch, or API alone are broad terms. Different Visa card integrations from different companies are not the same thread unless they share the same company, product, card program, or direct partnership update.",
              "For anime/tech, same franchise/company/framework is not enough unless the update is a direct continuation.",
              "Thread topic rules: do not copy the full headline, do not include source names, do not use dates unless essential, do not use vague labels like 'latest updates', and do not make a market question. Use 4 to 9 words, title case, and name the actor plus the event/catalyst.",
              "Good topics: 'Blue Origin New Glenn Launchpad Probe', 'Kraken Earn / Bitcoin Vault Rollout', 'Liverpool Andoni Iraola Talks', 'Amazon Prime Day 2026 Dates', 'Microsoft Build Copilot Announcements'.",
              "Bad topics: 'Blue Origin plans to launch New Glenn again this year after explosion', 'June 23 / 2026', 'Latest Tech Updates', 'Premier League / World Cup'.",
              "Use the supplied fields only."
            ].join(" ")
          },
          {
            role: "user",
            content: JSON.stringify({
              current: storyForThreadReview(story, "current"),
              candidates: candidates.map(storyForThreadReview),
              required_output: {
                thread_topic:
                  "4-9 word title-case topic synthesized from the current article and approved related articles; name the shared actor and event/catalyst; empty string only if no approved same-story article",
                approved: [
                  {
                    id: 0,
                    same_story: true,
                    shared_actor: "specific company/person/team/product/franchise shared by both articles",
                    shared_event: "specific event/catalyst/update shared by both articles",
                    relationship: "prior_development | material_follow_up | duplicate_coverage | unrelated",
                    why_related: "brief evidence from both articles showing the same developing story",
                    why_not_broad: "brief note explaining why this is not merely same category/company/coin/team/theme",
                    confidence: 0.0,
                    reason: "brief reason tied to the same event"
                  }
                ],
                reject_reason: "brief note if few or no candidates are same story"
              },
              approval_rule:
                "Approve only relationship prior_development or material_follow_up, confidence at least 0.80, specific shared_actor and shared_event, evidence from both articles, and a clear explanation that it is not broad or duplicate coverage. The final approved set must include at least one article from an earlier calendar day. Reject same-day duplicate reports. Create thread_topic only after deciding which candidates are approved."
            })
          }
        ],
        temperature: 0,
        max_tokens: 900
      })
    });

    console.log("Response Status:", response.status);
    if (!response.ok) {
      const errText = await response.text();
      console.error("Error body:", errText);
      return;
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content ?? "";
    console.log("Raw LLM Response Content:\n", content);

    const jsonText = content.match(/\{[\s\S]*\}/)?.[0];
    if (!jsonText) {
      console.error("No JSON block found in response.");
      return;
    }

    const parsed = JSON.parse(jsonText);
    console.log("Parsed JSON:\n", JSON.stringify(parsed, null, 2));

    const approvals = Array.isArray(parsed?.approved) ? parsed.approved : [];
    console.log("\n--- Checking isSpecificThreadEvidence validation ---");
    for (const item of approvals) {
      const isValid = isSpecificThreadEvidence(item);
      console.log(`Candidate ${item.id}: isSpecificThreadEvidence = ${isValid}`);
      if (!isValid) {
        console.log("  actor:", item?.shared_actor, `(len ${item?.shared_actor?.length})`);
        console.log("  event:", item?.shared_event, `(len ${item?.shared_event?.length})`);
        console.log("  whyRelated:", item?.why_related || item?.reason, `(len ${(item?.why_related || item?.reason)?.length})`);
        console.log("  whyNotBroad:", item?.why_not_broad, `(len ${item?.why_not_broad?.length})`);
      }
    }
  } catch (err) {
    console.error("Failed:", err);
  }
};

runRealPromptTest();
