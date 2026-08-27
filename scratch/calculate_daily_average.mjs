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
  const rows = await supabaseRequest('analytics_daily?select=date_key,ai_unlock_success');
  console.log('Daily unlocks:');
  let total = 0;
  let activeDays = 0;
  for (const row of rows || []) {
    const success = Number(row.ai_unlock_success || 0);
    console.log(`- ${row.date_key}: ${success}`);
    if (success > 0) {
      total += success;
      activeDays++;
    }
  }
  console.log(`\nTotal active days: ${activeDays}`);
  console.log(`Total unlocks: ${total}`);
  console.log(`Average unlocks per active day: ${(total / activeDays).toFixed(1)}`);
}

main().catch(console.error);
