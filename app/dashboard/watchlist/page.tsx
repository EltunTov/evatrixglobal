const watchlistData = [
  {
    symbol: "BTCUSDT",
    type: "Perpetual",
    bias: "LONG",
    setup: "Liquidity Build",
    price: "62,240",
    change: "+1.8%",
    structure: "Accumulation",
    readiness: "High",
    score: "88",
  },
  {
    symbol: "ETHUSDT",
    type: "Perpetual",
    bias: "LONG",
    setup: "EMA Compression",
    price: "3,135",
    change: "+1.2%",
    structure: "Trend Support",
    readiness: "Medium",
    score: "81",
  },
  {
    symbol: "SOLUSDT",
    type: "Perpetual",
    bias: "SHORT",
    setup: "Distribution",
    price: "143.10",
    change: "-0.9%",
    structure: "Weak Highs",
    readiness: "High",
    score: "85",
  },
  {
    symbol: "BNBUSDT",
    type: "Perpetual",
    bias: "LONG",
    setup: "Continuation Base",
    price: "581.20",
    change: "+2.4%",
    structure: "Strong Trend",
    readiness: "Very High",
    score: "91",
  },
  {
    symbol: "XRPUSDT",
    type: "Perpetual",
    bias: "SHORT",
    setup: "Sweep Zone",
    price: "0.6420",
    change: "-1.1%",
    structure: "Liquidity Grab",
    readiness: "Medium",
    score: "79",
  },
];

function biasStyle(bias: string) {
  return bias === "LONG"
    ? "text-emerald-300 bg-emerald-500/10 border border-emerald-400/20"
    : "text-rose-300 bg-rose-500/10 border border-rose-400/20";
}

function readinessStyle(r: string) {
  if (r === "Very High") return "text-cyan-300";
  if (r === "High") return "text-emerald-300";
  if (r === "Medium") return "text-amber-300";
  return "text-slate-300";
}

export default function WatchlistPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#0b1220,#0a0f1a)] text-white">
      <div className="mx-auto max-w-[1600px] px-6 py-6">

        {/* HEADER */}
        <div className="mb-6 rounded-3xl border border-white/10 bg-white/5 p-5">
          <div className="text-xs uppercase tracking-widest text-sky-300">
            Opportunity Radar
          </div>
          <h1 className="text-2xl font-semibold mt-2">
            Watchlist
          </h1>
          <p className="text-sm text-slate-400 mt-2">
            High-potential market candidates under observation before signal confirmation.
          </p>
        </div>

        {/* SUMMARY */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="card">
            <div className="text-xs text-slate-400">Tracked Assets</div>
            <div className="text-xl font-bold mt-2">32</div>
          </div>
          <div className="card">
            <div className="text-xs text-slate-400">High Readiness</div>
            <div className="text-xl font-bold mt-2 text-emerald-300">11</div>
          </div>
          <div className="card">
            <div className="text-xs text-slate-400">Trend Bias</div>
            <div className="text-xl font-bold mt-2 text-cyan-300">Bullish</div>
          </div>
          <div className="card">
            <div className="text-xs text-slate-400">Volatility</div>
            <div className="text-xl font-bold mt-2">Elevated</div>
          </div>
        </div>

        {/* TABLE */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] overflow-hidden">
          <div className="p-5 border-b border-white/10">
            <div className="text-sm text-slate-300">
              Pre-signal tracking layer (structure + liquidity + momentum)
            </div>
          </div>

          <table className="w-full min-w-[900px]">
            <thead>
              <tr className="text-left text-xs text-slate-400 border-b border-white/10">
                <th className="p-4">Symbol</th>
                <th>Bias</th>
                <th>Setup</th>
                <th>Structure</th>
                <th>Price</th>
                <th>24h</th>
                <th>Readiness</th>
                <th>Score</th>
              </tr>
            </thead>

            <tbody>
              {watchlistData.map((item) => (
                <tr
                  key={item.symbol}
                  className="border-b border-white/5 hover:bg-white/5 transition"
                >
                  <td className="p-4">
                    <div className="font-semibold">{item.symbol}</div>
                    <div className="text-xs text-slate-400">{item.type}</div>
                  </td>

                  <td>
                    <span className={`px-3 py-1 rounded-full text-xs ${biasStyle(item.bias)}`}>
                      {item.bias}
                    </span>
                  </td>

                  <td>{item.setup}</td>
                  <td className="text-slate-300">{item.structure}</td>
                  <td>{item.price}</td>

                  <td className={item.change.startsWith("-") ? "text-rose-400" : "text-emerald-400"}>
                    {item.change}
                  </td>

                  <td className={readinessStyle(item.readiness)}>
                    {item.readiness}
                  </td>

                  <td className="font-semibold text-cyan-300">
                    {item.score}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* INSIGHT PANEL */}
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="card">
            <div className="text-xs text-slate-400">Top Opportunity</div>
            <div className="mt-2">BNBUSDT</div>
            <div className="text-xs text-slate-500 mt-1">
              Strong continuation + liquidity support
            </div>
          </div>

          <div className="card">
            <div className="text-xs text-slate-400">Watch Focus</div>
            <div className="mt-2">BTC / ETH</div>
            <div className="text-xs text-slate-500 mt-1">
              Structure nearing breakout alignment
            </div>
          </div>

          <div className="card">
            <div className="text-xs text-slate-400">Risk Note</div>
            <div className="mt-2">Overextension</div>
            <div className="text-xs text-slate-500 mt-1">
              Avoid late entries on impulsive moves
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}