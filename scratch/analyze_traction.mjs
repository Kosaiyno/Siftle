import fs from 'fs';
import { join } from 'path';

const root = 'C:/Users/user/Desktop/Siftle';
const analyticsFile = join(root, '.siftle', 'analytics.json');
const backupFile = join(root, '.siftle', 'analytics_season1_backup.json');

const getJson = (path) => {
  if (!fs.existsSync(path)) return {};
  try {
    return JSON.parse(fs.readFileSync(path, 'utf8'));
  } catch (e) {
    return {};
  }
};

const current = getJson(analyticsFile);
const backup = getJson(backupFile);

console.log('=== CURRENT (PRESEASON) TOTALS ===');
console.log(JSON.stringify(current.totals, null, 2));

console.log('\n=== SEASON 1 BACKUP TOTALS ===');
console.log(JSON.stringify(backup.totals, null, 2));

// Combine totals
const combined = {};
const allKeys = new Set([
  ...Object.keys(current.totals || {}),
  ...Object.keys(backup.totals || {})
]);

for (const key of allKeys) {
  combined[key] = (current.totals?.[key] || 0) + (backup.totals?.[key] || 0);
}

console.log('\n=== COMBINED LIFETIME TOTALS ===');
console.log(JSON.stringify(combined, null, 2));

// Email signups count
const usersPath = join(root, '.siftle', 'backend-wallet-users.json');
const users = getJson(usersPath);
const userCount = users ? Object.keys(users).length : 0;
console.log(`\nRegistered OTP Users: ${userCount}`);
