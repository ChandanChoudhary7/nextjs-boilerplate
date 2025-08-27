import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("Loading...");
  const [settings, setSettings] = useState({
    apiEndpoint: "/api/nifty"
  });

  async function fetchData() {
    try {
      setStatus("Fetching...");
      const res = await fetch(settings.apiEndpoint);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      setData(json);
      setStatus("Live data updated");
    } catch (err) {
      console.error("Fetch failed:", err);
      setStatus("Error fetching data (showing cached/sample)");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", padding: 20 }}>
      <h1>Nifty 50 Tracker</h1>
      <p>Status: {status}</p>
      {data ? (
        <div>
          <p><b>Price:</b> {data.price}</p>
          <p><b>Previous Close:</b> {data.prevClose}</p>
          <p><b>Day High:</b> {data.dayHigh}</p>
          <p><b>Day Low:</b> {data.dayLow}</p>
          <p><b>Volume:</b> {data.volume}</p>
        </div>
      ) : (
        <p>No data yet</p>
      )}
      <button onClick={fetchData} style={{ marginTop: 20 }}>Refresh</button>
    </div>
  );
}
