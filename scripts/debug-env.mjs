import * as dotenv from "dotenv";
dotenv.config();

console.log("SUPABASE_URL:", process.env.SUPABASE_URL);
console.log("SUPABASE_SERVICE_ROLE_KEY:", process.env.SUPABASE_SERVICE_ROLE_KEY ? "EXISTS (length: " + process.env.SUPABASE_SERVICE_ROLE_KEY.length + ")" : "NOT FOUND");
