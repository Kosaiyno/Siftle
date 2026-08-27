import 'dotenv/config';

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('ERROR: Supabase URL or Service Role Key is not configured in .env');
  process.exit(1);
}

async function supabaseRequest(path, options = {}) {
  const url = `${supabaseUrl.trim()}/rest/v1/${path}`;
  const headers = {
    apikey: supabaseServiceKey.trim(),
    Authorization: `Bearer ${supabaseServiceKey.trim()}`,
    'Content-Type': 'application/json',
    ...options.headers
  };
  const response = await fetch(url, {
    method: options.method || 'GET',
    headers,
    body: options.body ? JSON.stringify(options.body) : undefined
  });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${await response.text()}`);
  }
  return response.json().catch(() => null);
}

async function main() {
  console.log('=== FETCHING LIVE ANALYTICS FROM SUPABASE ===\n');

  // 1. Profiles
  const profiles = await supabaseRequest('profiles?select=wallet_address,email');
  const uniqueEmails = profiles.filter(p => p.email).length;
  const uniqueWallets = profiles.length;

  console.log(`1. User Onboarding & Retention:`);
  console.log(`- Total Unique Email Signups: ${uniqueEmails}`);
  console.log(`- Total Unique Connected Wallets: ${uniqueWallets}`);

  // 2. Daily Analytics Aggregation
  const dailyAnalytics = await supabaseRequest('analytics_daily?select=*');
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

  for (const row of dailyAnalytics || []) {
    for (const key of Object.keys(totals)) {
      totals[key] += Number(row[key] || 0);
    }
  }

  console.log(`\n2. Engagement & Paywall Unlocks:`);
  console.log(`- App Opens / Page Views: ${totals.app_open}`);
  console.log(`- Market Detail Views: ${totals.market_view}`);
  console.log(`- AI Briefing Unlocks: ${totals.ai_unlock_success}`);
  console.log(`- Briefing Unlock Success Rate: ${totals.ai_unlock_attempt > 0 ? ((totals.ai_unlock_success / totals.ai_unlock_attempt) * 100).toFixed(1) + '%' : '100%'}`);
  console.log(`- Wallet Connection Success Rate: ${totals.wallet_connect_start > 0 ? ((totals.wallet_connect_success / totals.wallet_connect_start) * 100).toFixed(1) + '%' : '100%'}`);

  // 3. Trade and Volume Analytics
  const positions = await supabaseRequest('option_market_positions?select=market_id,wallet_address,amount_usdc');
  const uniqueTraders = new Set((positions || []).map(p => p.wallet_address.toLowerCase())).size;
  const totalVolume = (positions || []).reduce((sum, p) => sum + Number(p.amount_usdc || 0), 0);
  const totalBuyTrades = (positions || []).length;

  const resolvedMarkets = await supabaseRequest('option_market_resolutions?select=market_id');

  console.log(`\n3. USDC Volume & Trades:`);
  console.log(`- Total Unique Traders: ${uniqueTraders}`);
  console.log(`- Total USDC Trading Volume: $${totalVolume.toFixed(2)} USDC`);
  console.log(`- Total Trades Placed (Buy Success): ${totals.trade_buy_success || totalBuyTrades}`);
  console.log(`- Total Trades Sold (Sell Success): ${totals.trade_sell_success}`);
  console.log(`- Resolved Prediction Markets: ${resolvedMarkets ? resolvedMarkets.length : 0}`);
}

main().catch(console.error);
