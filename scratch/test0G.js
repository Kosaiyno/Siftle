import { config } from "dotenv";
import fetch from "node-fetch"; // or just use global fetch if node is v18+
config();

const test = async () => {
  const apiKey = (process.env.THREAD_ZERO_G_API_KEY || process.env.THREAD_OG_COMPUTE_API_KEY || process.env.ZERO_G_API_KEY || process.env.OG_COMPUTE_API_KEY)?.trim();
  const model = (process.env.THREAD_ZERO_G_MODEL || process.env.THREAD_OG_COMPUTE_MODEL || process.env.ZERO_G_MODEL || process.env.OG_COMPUTE_MODEL || "zai-org/GLM-5-FP8")?.trim();
  const endpoint = (
    process.env.THREAD_OG_COMPUTE_ENDPOINT ||
    process.env.THREAD_ZERO_G_ENDPOINT ||
    process.env.THREAD_OG_COMPUTE_URL ||
    process.env.THREAD_ZERO_G_URL ||
    process.env.OG_COMPUTE_ENDPOINT ||
    process.env.ZERO_G_ENDPOINT ||
    process.env.OG_COMPUTE_URL ||
    process.env.ZERO_G_URL
  )?.trim();

  console.log("apiKey length:", apiKey?.length);
  console.log("model:", model);
  console.log("endpoint:", endpoint);

  const cleanEndpoint = endpoint.replace(/\/$/, "");
  const finalEndpoint = cleanEndpoint.endsWith("/v1/proxy") ? cleanEndpoint : `${cleanEndpoint}/v1/proxy`;
  console.log("finalEndpoint:", finalEndpoint);

  try {
    const response = await fetch(`${finalEndpoint}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model,
        messages: [
          {
            role: "system",
            content: "You are Siftle's senior news-thread editor. Return ONLY valid JSON."
          },
          {
            role: "user",
            content: "Ping"
          }
        ],
        temperature: 0,
        max_tokens: 50
      })
    });

    console.log("Response status:", response.status);
    const body = await response.text();
    console.log("Response body:", body);
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

test();
