import { uploadShelbySnapshot } from '../scripts/shelbyArchive.mjs';
import dotenv from 'dotenv';
import { resolve } from 'path';
import fs from 'fs';

dotenv.config({ path: resolve(process.cwd(), '.env') });

const testData = JSON.parse(fs.readFileSync(resolve(process.cwd(), '.siftle', 'archive', '2026-06-14-sports.json'), 'utf8'));

console.log("Starting Shelby upload test...");
uploadShelbySnapshot(testData)
  .then(res => {
    console.log("Upload succeeded!", res);
  })
  .catch(err => {
    console.error("Upload failed!");
    console.error(err);
  });
