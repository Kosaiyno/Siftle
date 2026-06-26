import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { join } from "node:path";
import { readFileSync, existsSync } from "node:fs";

// Load local .env manually since this is a ESM node script
const envPath = join(process.cwd(), ".env");
if (existsSync(envPath)) {
  const envConfig = dotenv ? null : {};
  const lines = readFileSync(envPath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const parts = line.split("=");
    if (parts.length >= 2 && !line.startsWith("#")) {
      process.env[parts[0].trim()] = parts.slice(1).join("=").trim();
    }
  }
}

const smtpHost = process.env.SMTP_HOST;
const smtpPort = Number(process.env.SMTP_PORT || 587);
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;

console.log("Testing SMTP connection with settings:");
console.log(`Host: ${smtpHost}`);
console.log(`Port: ${smtpPort}`);
console.log(`User: ${smtpUser}`);
console.log(`Pass: ${smtpPass ? "****" : "missing"}`);

if (!smtpHost || !smtpUser || !smtpPass) {
  console.error("Missing SMTP credentials in .env");
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: smtpPort === 465,
  auth: {
    user: smtpUser,
    pass: smtpPass
  },
  connectionTimeout: 10000, // 10 seconds timeout
  greetingTimeout: 10000,
  socketTimeout: 10000
});

console.log("Sending test mail...");
transporter.sendMail({
  from: `Siftle Test <${smtpUser}>`,
  to: smtpUser,
  subject: "SMTP Connection Test",
  text: "This is a test to verify if Siftle SMTP is configured correctly."
}).then((info) => {
  console.log("Email sent successfully!");
  console.log("Response:", info.response);
  process.exit(0);
}).catch((err) => {
  console.error("SMTP Error:", err);
  process.exit(1);
});
