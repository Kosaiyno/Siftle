async function check() {
  console.log("Checking unlock-config...");
  try {
    const res = await fetch("http://localhost:5173/api/summary/unlock-config");
    console.log("Status:", res.status);
    console.log("Body:", await res.json());
  } catch (err) {
    console.error("Failed to connect:", err.message);
  }
}
check();
