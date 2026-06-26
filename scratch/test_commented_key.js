import fs from "fs";

async function main() {
  const content = fs.readFileSync(".env", "utf8");
  const match = content.match(/#\s*THREAD_OG_COMPUTE_API_KEY\s*=\s*(\S+)/);
  if (!match) {
    console.error("Could not find commented THREAD_OG_COMPUTE_API_KEY in .env");
    return;
  }
  
  const apiKey = match[1].trim();
  const endpoint = "https://compute-network-22.integratenetwork.work/v1/proxy";
  const model = "deepseek-v4-flash";

  console.log("Testing THREAD compute endpoint with extracted key...");
  console.log("API Key Length:", apiKey.length);
  console.log("Endpoint:", endpoint);
  console.log("Model:", model);

  try {
    const response = await fetch(`${endpoint}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: "You are Siftle's senior editor." },
          { role: "user", content: "Ping" }
        ],
        max_tokens: 10
      })
    });

    console.log("Response status:", response.status);
    const text = await response.text();
    console.log("Response text:", text);
  } catch (err) {
    console.error("Test failed:", err);
  }
}

main();
