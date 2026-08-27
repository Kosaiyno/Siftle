import { get } from "node:https";

const url = "https://api.shelbynet.aptoslabs.com/nocode/v1/public/alias/shelby/shelbynet/v1/graphql";

console.log(`Connecting to ${url}...`);
const req = get(url, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (e) => {
  console.error("HTTP GET Error:", e);
});

req.end();
