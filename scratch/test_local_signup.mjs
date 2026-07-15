import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = "C:/Users/user/Desktop/Siftle";
const otpPath = join(root, ".siftle", "otp.json");
const testEmail = `siftle_test_user_${Date.now()}@gmail.com`;

async function run() {
  console.log(`1. Requesting OTP for test email: ${testEmail}...`);
  const otpRes = await fetch("http://localhost:5173/api/circle/auth/otp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: testEmail })
  });

  const otpPayload = await otpRes.json();
  if (!otpRes.ok) {
    throw new Error(`OTP request failed: ${otpPayload.error || otpRes.statusText}`);
  }
  console.log("OTP requested successfully:", otpPayload);

  // Allow a brief moment for filesystem persistence
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("2. Reading generated OTP from local otp.json...");
  if (!existsSync(otpPath)) {
    throw new Error(`otp.json not found at ${otpPath}`);
  }

  const otpData = JSON.parse(readFileSync(otpPath, "utf8"));
  const cleanEmail = testEmail.trim().toLowerCase();
  const entry = otpData[cleanEmail];
  if (!entry || !entry.otp) {
    throw new Error(`No OTP entry found in JSON store for ${cleanEmail}. Entries: ${JSON.stringify(otpData)}`);
  }

  const otpCode = entry.otp;
  console.log(`Found OTP code for ${testEmail}: ${otpCode}`);

  console.log(`3. Sending verification request for ${testEmail} with code ${otpCode}...`);
  const verifyRes = await fetch("http://localhost:5173/api/circle/auth/verify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: testEmail, otp: otpCode })
  });

  const verifyPayload = await verifyRes.json();
  if (!verifyRes.ok) {
    throw new Error(`Verification failed: ${verifyPayload.error || verifyRes.statusText}`);
  }

  console.log("Verification SUCCESSFUL! Response payload:");
  console.log(JSON.stringify(verifyPayload, null, 2));
}

run().catch((error) => {
  console.error("Signup test FAILED:", error.message);
  process.exit(1);
});
