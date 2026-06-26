import dotenv from "dotenv";
dotenv.config();

console.log("SHELBY_RPC_URL:", process.env.SHELBY_RPC_URL);
console.log("SHELBY_NETWORK:", process.env.SHELBY_NETWORK);
console.log("SHELBY_API_KEY:", process.env.SHELBY_API_KEY ? "SET" : "NOT SET");
console.log("SHELBY_ACCOUNT_ADDRESS:", process.env.SHELBY_ACCOUNT_ADDRESS);
console.log("SHELBY_ARCHIVE_PREFIX:", process.env.SHELBY_ARCHIVE_PREFIX);
