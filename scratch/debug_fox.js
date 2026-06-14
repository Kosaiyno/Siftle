const run = async () => {
  const url = "https://api.foxsports.com/v2/content/optimized-rss?partnerKey=MB0WeZf1p17c4gD0yFk7uQ==&size=30&tags=nba";
  const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0 SiftleBot/1.0" } });
  const xml = await res.text();
  console.log(xml.slice(0, 2000));
};
run();
