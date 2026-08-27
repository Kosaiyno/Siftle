import "dotenv/config";

const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

if (!supabaseUrl || !supabaseServiceRoleKey) {
  console.error("ERROR: Supabase URL or Service Role Key is not configured in .env");
  process.exit(1);
}

async function supabaseRequest(path, options = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  const response = await fetch(`${supabaseUrl}/rest/v1/${path}`, {
    method: options.method || "GET",
    signal: controller.signal,
    headers: {
      apikey: supabaseServiceRoleKey,
      Authorization: `Bearer ${supabaseServiceRoleKey}`,
      "Content-Type": "application/json",
      ...(options.prefer ? { Prefer: options.prefer } : {})
    },
    body: options.body === undefined ? undefined : JSON.stringify(options.body)
  }).finally(() => clearTimeout(timeout));

  const text = await response.text();
  const data = text ? JSON.parse(text) : null;
  if (!response.ok) {
    throw new Error(`Supabase ${options.method || "GET"} ${path} failed: ${text || response.statusText}`);
  }
  return data;
}

async function supabaseDelete(path) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  const response = await fetch(`${supabaseUrl}/rest/v1/${path}`, {
    method: "DELETE",
    signal: controller.signal,
    headers: {
      apikey: supabaseServiceRoleKey,
      Authorization: `Bearer ${supabaseServiceRoleKey}`
    }
  }).finally(() => clearTimeout(timeout));

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`DELETE ${path} failed: ${text || response.statusText}`);
  }
}

async function run() {
  console.log("Fetching all active wallets from leaderboard...");
  try {
    const entries = await supabaseRequest("leaderboard_entries?select=wallet_address");
    const wallets = entries.map(e => e.wallet_address).filter(Boolean);
    
    if (wallets.length === 0) {
      console.log("No wallets found in leaderboard_entries. Preseason leaderboard is already clean!");
      return;
    }

    console.log(`Found ${wallets.length} active wallets. Initiating targeted deletes...`);

    const walletList = wallets.join(",");

    // 1. Delete resolved results
    console.log("Clearing resolved_results...");
    await supabaseDelete(`resolved_results?wallet_address=in.(${walletList})`);

    // 2. Delete division assignments
    console.log("Clearing season_division_assignments...");
    await supabaseDelete(`season_division_assignments?wallet_address=in.(${walletList})`);

    // 3. Delete leaderboard bonus events
    console.log("Clearing leaderboard_bonus_events...");
    await supabaseDelete(`leaderboard_bonus_events?wallet_address=in.(${walletList})`);

    // 4. Delete leaderboard entries
    console.log("Clearing leaderboard_entries...");
    await supabaseDelete(`leaderboard_entries?wallet_address=in.(${walletList})`);

    console.log("SUCCESS: Preseason leaderboard is now fully reset in Supabase!");
  } catch (error) {
    console.error(" targeted delete failed:", error.message);
  }
}

run();
