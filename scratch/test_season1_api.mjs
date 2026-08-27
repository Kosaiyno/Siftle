import fetch from "node-fetch";

async function test() {
  try {
    const res = await fetch("http://localhost:5173/api/leaderboard/season1");
    console.log("Status Code:", res.status);
    console.log("Headers:", Object.fromEntries(res.headers.entries()));
    const bodyText = await res.text();
    console.log("Body length:", bodyText.length);
    try {
      const data = JSON.parse(bodyText);
      console.log("Is array:", Array.isArray(data));
      if (Array.isArray(data)) {
        console.log("Players count:", data.length);
        console.log("First player:", data[0]);
      } else {
        console.log("Parsed JSON:", data);
      }
    } catch (e) {
      console.error("Failed to parse JSON:", e.message);
      console.log("Raw response (first 200 chars):", bodyText.substring(0, 200));
    }
  } catch (err) {
    console.error("Fetch failed:", err);
  }
}

test();
