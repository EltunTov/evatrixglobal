const pulseSummary = [
  {
    label: "Market Regime",
    value: "Trend",
    sub: "Directional conditions remain supportive",
  },
  {
    label: "Risk Appetite",
    value: "Moderate Risk-On",
    sub: "Buy-side participation remains healthy",
  },
  {
    label: "Breadth",
    value: "67%",
    sub: "Tracked majors holding positive intraday structure",
  },
  {
    label: "Volatility State",
    value: "Elevated",
    sub: "Expansion active across key perpetual pairs",
  },
];

const marketBoard = [
  {
    asset: "BTC",
    price: "$109,840",
    change: "+1.24%",
    structure: "Trend Up",
    pressure: "Bullish",
    dominance: "Stable",
  },
  {
    asset: "ETH",
    price: "$2,354",
    change: "+0.88%",
    structure: "Trend Up",
    pressure: "Bullish",
    dominance: "Improving",
  },
  {
    asset: "SOL",
    price: "$143.10",
    change: "-0.92%",
    structure: "Mixed",
    pressure: "Balanced",
    dominance: "Neutral",
  },
  {
    asset: "BNB",
    price: "$624.20",
    change: "+1.51%",
    structure: "Trend Up",
    pressure: "Bullish",
    dominance: "Strong",
  },
  {
    asset: "XRP",
    price: "$1.41",
    change: "-0.64%",
    structure: "Range",
    pressure: "Balanced",
    dominance: "Weak",
  },
];

const sectorHeat = [
  {
    sector: "Majors",
    bias: "Bullish",
    flow: "Strong",
    note: "BTC and ETH continue to anchor directional sentiment",
  },
  {
    sector: "AI / Infra",
    bias: "Bullish",
    flow: "Improving",
    note: "Momentum rotation remains active across select leaders",
  },
  {
    sector: "Memes",
    bias: "Mixed",
    flow: "Unstable",
    note: "Fast spikes but weak persistence under volatility stress",
  },
  {
    sector: "Exchange Tokens",
    bias: "Bullish",
    flow: "Stable",
    note: "Cleaner participation with lower structural damage",
  },
];

const marketDrivers = [
  "BTC leadership remains intact and continues to support broader participation",
  "Alt rotation is present but selective rather than broad and aggressive",
  "Momentum quality improves when majors hold trend structure above session support",
];

const riskFlags = [
  "Late continuation entries remain vulnerable under elevated volatility",
  "Short setups are lower quality unless pressure and structure align together",
  "Fast headline-driven spikes may distort lower-timeframe conviction scores",
];

const catalystQueue = [
  "Macro calendar sensitivity should remain visible around U.S. session open",
  "Exchange-specific flows and perp positioning can rapidly shift short-term bias",
  "News and catalyst modules can later feed this layer directly for event awareness",
];

function changeStyle(change: string) {
  return change.startsWith("-") ? "text-rose-300" : "text-emerald-300";
}

function biasStyle(bias: string) {
  if (bias === "Bullish") {
    return "text-emerald-300 bg-emerald-500/10 border border-emerald-400/20";
  }
  if (bias === "Mixed") {
    return "text-amber-300 bg-amber-500/10 border border-amber-400/20";
  }
  if (bias === "Balanced") {
    return "text-slate-300 bg-white/5 border border-white/10";
  }
  return "text-rose-300 bg-rose-500/10 border border-rose-400/20";
}

function flowStyle(flow: string) {
  if (flow === "Strong" || flow === "Improving") return "text-cyan-300";
  if (flow === "Stable") return "text-emerald-300";
  if (flow === "Unstable") return "text-rose-300";
  return "text-slate-300";
}

export default function PulsePage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.08),_transparent_28%),linear-gradient(180deg,_#0b1220_0%,_#0a0f1a_100%)] text-white">
      <div className="mx-auto w-full max-w-[1700px] px-6 py-6 xl:px-8">
        <div className="mb-6 flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 px-5 py-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-200/70">
              Regime & Flow Terminal
            </div>
            <h1 className="text-[28px] font-semibold tracking-tight text-white">
              Market Pulse
            </h1>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
              Macro regime, directional context, internal market strength, and
              cross-asset pulse for high-conviction crypto operations.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
              <div className="text-[10px] uppercase tracking-[0.22em] text-slate-400">
                Session State
              </div>
              <div className="mt-2 text-sm font-semibold text-emerald-300">
                Active
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
              <div className="text-[10px] uppercase tracking-[0.22em] text-slate-400">
                Risk Mode
              </div>
              <div className="mt-2 text-sm font-semibold text-cyan-300">
                Controlled
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
              <div className="text-[10px] uppercase tracking-[0.22em] text-slate-400">
                Headline Sensitivity
              </div>
              <div className="mt-2 text-sm font-semibold text-white">
                Moderate
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
              <div className="text-[10px] uppercase tracking-[0.22em] text-slate-400">
                Refresh Cycle
              </div>
              <div className="mt-2 text-sm font-semibold text-white">Live</div>
            </div>
          </div>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-4 xl:grid-cols-4">
          {pulseSummary.map((card) => (
            <div
              key={card.label}
              className="rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-5 shadow-[0_10px_40px_rgba(0,0,0,0.22)]"
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                {card.label}
              </div>
              <div className="mt-3 text-[28px] font-semibold tracking-tight text-white">
                {card.value}
              </div>
              <div className="mt-2 text-sm text-slate-300">{card.sub}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 2xl:grid-cols-[minmax(0,1.55fr)_400px]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] shadow-[0_10px_40px_rgba(0,0,0,0.22)]">
              <div className="border-b border-white/10 px-5 py-5">
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                  Core Market Board
                </div>
                <div className="mt-2 text-lg font-semibold text-white">
                  Benchmark assets and directional state
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-[980px] w-full">
                  <thead>
                    <tr className="border-b border-white/10 text-left">
                      {[
                        "Asset",
                        "Price",
                        "24h",
                        "Structure",
                        "Pressure",
                        "Dominance",
                      ].map((head) => (
                        <th
                          key={head}
                          className="px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400"
                        >
                          {head}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {marketBoard.map((row) => (
                      <tr
                        key={row.asset}
                        className="border-b border-white/5 transition hover:bg-white/[0.03]"
                      >
                        <td className="px-5 py-4">
                          <div className="font-semibold text-white">{row.asset}</div>
                          <div className="mt-1 text-xs text-slate-400">
                            Market anchor
                          </div>
                        </td>
                        <td className="px-5 py-4 text-sm text-white">{row.price}</td>
                        <td
                          className={`px-5 py-4 text-sm font-semibold ${changeStyle(
                            row.change
                          )}`}
                        >
                          {row.change}
                        </td>
                        <td className="px-5 py-4 text-sm text-slate-200">
                          {row.structure}
                        </td>
                        <td className="px-5 py-4">
                          <span
                            className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${biasStyle(
                              row.pressure
                            )}`}
                          >
                            {row.pressure}
                          </span>
                        </td>
                        <td className="px-5 py-4 text-sm text-slate-300">
                          {row.dominance}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] shadow-[0_10px_40px_rgba(0,0,0,0.22)]">
              <div className="border-b border-white/10 px-5 py-5">
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                  Sector Heat
                </div>
                <div className="mt-2 text-lg font-semibold text-white">
                  Internal participation by theme
                </div>
              </div>

              <div className="space-y-3 px-5 py-5">
                {sectorHeat.map((row) => (
                  <div
                    key={row.sector}
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4"
                  >
                    <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                      <div>
                        <div className="font-semibold text-white">{row.sector}</div>
                        <div className="mt-1 text-sm text-slate-400">{row.note}</div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${biasStyle(
                            row.bias
                          )}`}
                        >
                          {row.bias}
                        </span>
                        <span
                          className={`inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold ${flowStyle(
                            row.flow
                          )}`}
                        >
                          {row.flow}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-5 shadow-[0_10px_40px_rgba(0,0,0,0.22)]">
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                  Market Drivers
                </div>
                <div className="mt-4 space-y-3">
                  {marketDrivers.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-200"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-5 shadow-[0_10px_40px_rgba(0,0,0,0.22)]">
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                  Risk Flags
                </div>
                <div className="mt-4 space-y-3">
                  {riskFlags.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-200"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-5 shadow-[0_10px_40px_rgba(0,0,0,0.22)]">
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                  Catalyst Queue
                </div>
                <div className="mt-4 space-y-3">
                  {catalystQueue.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-200"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-5 shadow-[0_10px_40px_rgba(0,0,0,0.22)]">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                Pulse Snapshot
              </div>
              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Trend Strength</span>
                  <span className="font-semibold text-cyan-300">72 / 100</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Participation</span>
                  <span className="font-semibold text-emerald-300">Healthy</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Short Pressure</span>
                  <span className="font-semibold text-amber-300">Contained</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Headline Risk</span>
                  <span className="font-semibold text-slate-200">Moderate</span>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-5 shadow-[0_10px_40px_rgba(0,0,0,0.22)]">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                Internal Breadth
              </div>
              <div className="mt-4 space-y-4">
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-slate-400">Bullish Breadth</span>
                    <span className="font-semibold text-white">67%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[67%] rounded-full bg-cyan-400" />
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-slate-400">Defensive Breadth</span>
                    <span className="font-semibold text-white">21%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[21%] rounded-full bg-slate-400" />
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-slate-400">Weak Breadth</span>
                    <span className="font-semibold text-white">12%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[12%] rounded-full bg-amber-400" />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-5 shadow-[0_10px_40px_rgba(0,0,0,0.22)]">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                Session Guidance
              </div>
              <div className="mt-4 space-y-3 text-sm text-slate-300">
                <p className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                  Favor continuation setups when majors keep intraday structure intact.
                </p>
                <p className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                  Reduce aggression if breadth weakens while volatility expands.
                </p>
                <p className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                  Treat headline-driven spikes as unstable until follow-through confirms.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-5 shadow-[0_10px_40px_rgba(0,0,0,0.22)]">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                Forward Integration
              </div>
              <div className="mt-4 space-y-4 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Bot Regime Feed</span>
                  <span className="font-semibold text-emerald-300">Planned</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Exchange Market Data</span>
                  <span className="font-semibold text-cyan-300">Planned</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">News & Catalysts</span>
                  <span className="font-semibold text-cyan-300">Planned</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Heatmap Engine</span>
                  <span className="font-semibold text-slate-200">Pending</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}