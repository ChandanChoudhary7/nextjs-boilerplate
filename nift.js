export default async function handler(req, res) {
  try {
    // Replace with your real data source or external API
    const niftyData = {
      index: "NIFTY 50",
      value: 19786.35,
      change: 125.40,
      percentChange: 0.64
    };

    res.status(200).json(niftyData);
  } catch (error) {
    console.error("Error fetching NIFTY data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
