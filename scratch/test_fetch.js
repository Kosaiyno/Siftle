import 'dotenv/config';

const urls = {
  circleApi: "https://api.circle.com/health",
  circleSandbox: "https://api-sandbox.circle.com/health",
  arcRpcPrimary: "https://rpc.testnet.arc.network",
  arcRpcFallback: "https://5042002.rpc.thirdweb.com",
  supabase: process.env.SUPABASE_URL || "https://example.supabase.co",
  shelby: "https://api.shelbynet.shelby.xyz"
};

async function testFetch(name, url) {
  try {
    console.log(`[TEST] Fetching ${name} (${url})...`);
    const res = await fetch(url, { method: 'GET', timeout: 5000 });
    console.log(`[SUCCESS] ${name} returned status ${res.status}`);
  } catch (err) {
    console.error(`[FAILURE] ${name} failed:`, err);
  }
}

async function run() {
  for (const [name, url] of Object.entries(urls)) {
    await testFetch(name, url);
    console.log('-----------------------------------');
  }
}

run();
