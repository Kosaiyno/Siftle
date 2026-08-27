import 'dotenv/config';

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('ERROR: Supabase URL or Service Role Key is not configured in .env');
  process.exit(1);
}

async function supabaseRequest(path) {
  const url = `${supabaseUrl.trim()}/rest/v1/${path}`;
  const headers = {
    apikey: supabaseServiceKey.trim(),
    Authorization: `Bearer ${supabaseServiceKey.trim()}`,
    'Content-Type': 'application/json'
  };
  const response = await fetch(url, { headers });
  return response.json();
}

async function main() {
  console.log('=== GROUND TRUTH FROM SUPABASE ===\n');

  // 1. Unique email signups (from profiles where email is not null)
  const profiles = await supabaseRequest('profiles?select=wallet_address,email');
  const profilesWithEmail = profiles.filter(p => p.email && p.email.includes('@'));
  const uniqueEmails = profilesWithEmail.length;
  
  // 2. Unique wallets that have unlocked briefings (from ai_briefing_unlocks)
  const unlocks = await supabaseRequest('ai_briefing_unlocks?select=wallet_address');
  const uniqueUnlockingWallets = new Set((unlocks || []).map(u => u.wallet_address.toLowerCase())).size;

  // 3. Unique wallets that have traded (from option_market_positions)
  const positions = await supabaseRequest('option_market_positions?select=wallet_address');
  const uniqueTradingWallets = new Set((positions || []).map(p => p.wallet_address.toLowerCase())).size;

  // 4. Sum of all daily analytics events from analytics_daily
  const dailyRows = await supabaseRequest('analytics_daily?select=*');
  const totals = {
    app_open: 0,
    wallet_connect_start: 0,
    wallet_connect_success: 0,
    wallet_connect_failed: 0,
    sign_up: 0,
    market_view: 0,
    trade_drawer_open: 0,
    trade_attempt: 0,
    trade_buy_success: 0,
    trade_sell_success: 0,
    trade_failed: 0,
    claim_attempt: 0,
    claim_success: 0,
    claim_failed: 0,
    ai_unlock_attempt: 0,
    ai_unlock_success: 0,
    ai_unlock_failed: 0,
    view_summary: 0,
    open_source: 0
  };

  for (const row of dailyRows || []) {
    for (const key of Object.keys(totals)) {
      totals[key] += Number(row[key] || 0);
    }
  }

  console.log(`Unique Email Signups (in profiles): ${uniqueEmails}`);
  console.log(`Unique Wallets Unlocked Briefings: ${uniqueUnlockingWallets}`);
  console.log(`Unique Wallets Traded Markets: ${uniqueTradingWallets}`);
  console.log(`Total Connected Wallets (profiles count): ${profiles.length}`);
  console.log(`Total App Opens: ${totals.app_open}`);
  console.log(`Total Market Views: ${totals.market_view}`);
  console.log(`Total Briefing Unlocks (Events): ${totals.ai_unlock_success}`);
  console.log(`Total Unlocks (from unlocks table): ${unlocks.length}`);
  console.log(`Total Briefing Views (Events): ${totals.view_summary}`);
  console.log(`Total Wallet Connect Success (Events): ${totals.wallet_connect_success}`);
  console.log(`Total Trade Buys (Events): ${totals.trade_buy_success}`);
  console.log(`Total Trade Sells (Events): ${totals.trade_sell_success}`);
  console.log(`Total Claims (Events): ${totals.claim_success}`);
}

main().catch(console.error);
