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
  const rows = await supabaseRequest('analytics_daily?select=*');
  const totals = {};
  for (const row of rows || []) {
    for (const [key, val] of Object.entries(row)) {
      if (key !== 'date_key' && key !== 'updated_at') {
        totals[key] = (totals[key] || 0) + Number(val || 0);
      }
    }
  }
  console.log(JSON.stringify(totals, null, 2));
}

main().catch(console.error);
