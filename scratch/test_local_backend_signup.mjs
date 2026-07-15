import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = "C:/Users/user/Desktop/Siftle";
const verificationCodesPath = join(root, ".siftle", "verification-codes.json");
const testEmail = `siftle_backend_test_user_${Date.now()}@gmail.com`;

async function run() {
  console.log(`1. Requesting Backend Wallet code for: ${testEmail}...`);
  const reqRes = await fetch("http://localhost:5173/api/backend-wallet/auth/request-code", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: testEmail })
  });

  const reqPayload = await reqRes.json();
  if (!reqRes.ok) {
    throw new Error(`Request code failed: ${reqPayload.error || reqRes.statusText}`);
  }
  console.log("Code requested successfully:", reqPayload);

  // Allow a brief moment for filesystem persistence
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("2. Reading generated code from local verification-codes.json...");
  if (!existsSync(verificationCodesPath)) {
    throw new Error(`verification-codes.json not found at ${verificationCodesPath}`);
  }

  const codesData = JSON.parse(readFileSync(verificationCodesPath, "utf8"));
  const cleanEmail = testEmail.trim().toLowerCase();
  const entry = codesData[cleanEmail];
  if (!entry || !entry.code) {
    throw new Error(`No verification code found in JSON store for ${cleanEmail}. Entries: ${JSON.stringify(codesData)}`);
  }

  const generatedCode = entry.code;
  console.log(`Found generated code for ${testEmail}: ${generatedCode}`);

  console.log(`3. Submitting verification request to backend-wallet auth...`);
  const authRes = await fetch("http://localhost:5173/api/backend-wallet/auth", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: testEmail, code: generatedCode })
  });

  const authPayload = await authRes.json();
  if (!authRes.ok) {
    throw new Error(`Auth failed: ${authPayload.error || authRes.statusText}`);
  }

  console.log("Backend Wallet Auth SUCCESSFUL! Response payload:");
  console.log(JSON.stringify(authPayload, null, 2));
}

run().catch((error) => {
  console.error("Backend Wallet signup test FAILED:", error.message);
  process.exit(1);
});
