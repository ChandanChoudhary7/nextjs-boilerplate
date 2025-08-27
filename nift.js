export default async function handler(req, res) {
  try {
    // Replace this with a real API call if you have one
    const payload = {
      price: 24567.45,
      prevClose: 24450.10,
      dayHigh: 24620.25,
      dayLow: 24390.80,
      volume: 125000000,
      timestamp: Date.now()
    };

    res.status(200).json(payload);
  } catch (err) {
    console.error("API error:", err);
    res.status(502).json({ error: "upstream_failed" });
  }
}
