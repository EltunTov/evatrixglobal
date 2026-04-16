const scannerSummary = [
  {
    label: "Universe Scanned",
    value: "200",
    sub: "Perpetual markets screened in current cycle",
  },
  {
    label: "Qualified Symbols",
    value: "27",
    sub: "Symbols passing baseline structure and flow conditions",
  },
  {
    label: "Top Tier Setups",
    value: "8",
    sub: "Highest-ranked candidates with premium alignment",
  },
  {
    label: "Scan Latency",
    value: "5.2s",
    sub: "Current discovery cycle completion speed",
  },
];

const scannerRows = [
  {
    symbol: "BNBUSDT",
    market: "Perpetual",
    bias: "LONG",
    setup: "EMA+PB + LQ Sweep",
    score: "96",
    grade: "A+",
    tf: "2H",
    regime: "Trend",
    readiness: "Immediate",
    volume: "Strong",
  },
  {
    symbol: "BTCUSDT",
    market: "Perpetual",
    bias: "LONG",
    setup: "Liquidity Reclaim",
    score: "92",
    grade: "A",
    tf: "1H",
    regime: "Trend",
    readiness: "High",
    volume: "Strong",
  },
  {
    symbol: "ETHUSDT",
    market: "Perpetual",
    bias: "LONG",
    setup: "EMA Compression",
    score: "87",
    grade: "A-",
    tf: "1H",
    regime: "Supportive",
    readiness: "High",
    volume: "Healthy",
  },
  {
    symbol: "SOLUSDT",
    market: "Perpetual",
    bias: "SHORT",
    setup: "Pressure Reversal",
    score: "84",
    grade: "B+",
    tf: "30M",
    regime: "Mixed",
    readiness: "Watch",
    volume: "Healthy",
  },
  {
    symbol: "ARUSDT",
    market: "Perpetual",
    bias: "LONG",
    setup: "HTF Reclaim",
    score: "89",
    grade: "A-",
    tf: "4H",
    regime: "Trend",
    readiness: "High",
    volume: "Improving",
  },
  {
    symbol: "XRPUSDT",
    market: "Perpetual",
    bias: "SHORT",
    setup: "Sweep Failure",
    score: "78",
    grade: "B",
    tf: "30M",
    regime: "Range",
    readiness: "Watch",
    volume: "Neutral",
  },
];

const scanInsights = [
  "Highest quality remains concentrated in major-led continuation structures",
  "Short candidates need stronger pressure confirmation than longs in this regime",
  "Top-ranked names are cleaner when pulse and watchlist remain aligned",
];

const filterLogic = [
  "Score should remain the main ranking column for operator priority",
  "Timeframe grouping helps separate scalp-quality from swing-quality candidates",
  "Scanner output should later feed directly into watchlist and signals pipelines",
];

const operatorGuidance = [
  "Do not treat scanner hits as instant entries; this layer is discovery-first",
  "Best workflow: scanner → watchlist → signals → execution",
  "Volume and regime columns prevent overrating weak but flashy setups",
];

function biasStyle(bias: string) {
  return bias === "LONG"
    ? "text-emerald-300 bg-emerald-500/10 border border-emerald-400/20"
    : "text-rose-300 bg-rose-500/10 border border-rose-400/20";
}

function gradeStyle(grade: string) {
  if (grade === "A+") {
    return "text-cyan-300 bg-cyan-500/10 border border-cyan-400/20";
  }
  if (grade.startsWith("A")) {
    return "text-emerald-300 bg-emerald-500/10 border border-emerald-400/20";
  }
  if (grade.startsWith("B")) {
    return "text-amber-300 bg-amber-500/10 border border-amber-400/20";
  }
  return "text-slate-300 bg-white/5 border border-white/10";
}

function readinessStyle(readiness: string) {
  if (readiness === "Immediate") return "text-cyan-300";
  if (readiness === "High") return "text-emerald-300";
  if (readiness === "Watch") return "text-amber-300";
  return "text-slate-300";
}

export default function ScannerPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.08),_transparent_28%),linear-gradient(180deg,_#0b1220_0%,_#0a0f1a_100%)] text-white">
      <div className="mx-auto w-full max-w-[1700px] px-6 py-6 xl:px-8">
        <div className="mb-6 flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 px-5 py-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-200/70">
              Discovery & Ranking Terminal
            </div>
            <h1 className="text-[28px] font-semibold tracking-tight text-white">
              Symbol Scanner
            </h1>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
              Ranked scanner outputs, symbol discovery, setup grouping, and
              high-conviction market filtering for professional crypto operations.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
              <div className="text-[10px] uppercase tracking-[0.22em] text-slate-400">
                Scan Mode
              </div>
              <div className="mt-2 text-sm font-semibold text-emerald-300">
                Active
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
              <div className="text-[10px] uppercase tracking-[0.22em] text-slate-400">
                Ranking Logic
              </div>
              <div className="mt-2 text-sm font-semibold text-cyan-300">
                Score-Based
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
              <div className="text-[10px] uppercase tracking-[0.22em] text-slate-400">
                Market Scope
              </div>
              <div className="mt-2 text-sm font-semibold text-white">
                Crypto Perps
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
          {scannerSummary.map((card) => (
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
              <div className="flex flex-col gap-3 border-b border-white/10 px-5 py-5 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                    Ranked Scanner Board
                  </div>
                  <div className="mt-2 text-lg font-semibold text-white">
                    Top discovery outputs by quality and setup alignment
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <button className="rounded-2xl border border-sky-400/20 bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-200">
                    All
                  </button>
                  <button className="rounded-2xl border border-white/10 bg-black/20 px-4 py-2 text-sm font-medium text-slate-300">
                    Long
                  </button>
                  <button className="rounded-2xl border border-white/10 bg-black/20 px-4 py-2 text-sm font-medium text-slate-300">
                    Short
                  </button>
                  <button className="rounded-2xl border border-white/10 bg-black/20 px-4 py-2 text-sm font-medium text-slate-300">
                    Top Tier
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-[1100px] w-full">
                  <thead>
                    <tr className="border-b border-white/10 text-left">
                      {[
                        "Symbol",
                        "Bias",
                        "Setup",
                        "Score",
                        "Grade",
                        "TF",
                        "Regime",
                        "Readiness",
                        "Volume",
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
                    {scannerRows.map((row) => (
                      <tr
                        key={row.symbol}
                        className="border-b border-white/5 transition hover:bg-white/[0.03]"
                      >
                        <td className="px-5 py-4">
                          <div className="font-semibold text-white">{row.symbol}</div>
                          <div className="mt-1 text-xs text-slate-400">
                            {row.market}
                          </div>
                        </td>

                        <td className="px-5 py-4">
                          <span
                            className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${biasStyle(
                              row.bias
                            )}`}
                          >
                            {row.bias}
                          </span>
                        </td>

                        <td className="px-5 py-4">
                          <div className="font-medium text-slate-100">{row.setup}</div>
                          <div className="mt-1 text-xs text-slate-400">
                            Scanner-ranked candidate
                          </div>
                        </td>

                        <td className="px-5 py-4 text-sm font-semibold text-cyan-300">
                          {row.score}
                        </td>

                        <td className="px-5 py-4">
                          <span
                            className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${gradeStyle(
                              row.grade
                            )}`}
                          >
                            {row.grade}
                          </span>
                        </td>

                        <td className="px-5 py-4 text-sm text-slate-200">
                          {row.tf}
                        </td>
                        <td className="px-5 py-4 text-sm text-slate-300">
                          {row.regime}
                        </td>
                        <td
                          className={`px-5 py-4 text-sm font-semibold ${readinessStyle(
                            row.readiness
                          )}`}
                        >
                          {row.readiness}
                        </td>
                        <td className="px-5 py-4 text-sm text-slate-300">
                          {row.volume}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-5 shadow-[0_10px_40px_rgba(0,0,0,0.22)]">
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                  Scan Insights
                </div>
                <div className="mt-4 space-y-3">
                  {scanInsights.map((item) => (
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
                  Filter Logic
                </div>
                <div className="mt-4 space-y-3">
                  {filterLogic.map((item) => (
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
                  Operator Guidance
                </div>
                <div className="mt-4 space-y-3">
                  {operatorGuidance.map((item) => (
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
                Scanner Snapshot
              </div>
              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Top Score</span>
                  <span className="font-semibold text-cyan-300">96</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Long Candidates</span>
                  <span className="font-semibold text-emerald-300">17</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Short Candidates</span>
                  <span className="font-semibold text-amber-300">10</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Weak Pool</span>
                  <span className="font-semibold text-slate-200">Filtered</span>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-5 shadow-[0_10px_40px_rgba(0,0,0,0.22)]">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                Setup Distribution
              </div>
              <div className="mt-4 space-y-4">
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-slate-400">Trend Setups</span>
                    <span className="font-semibold text-white">46%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[46%] rounded-full bg-cyan-400" />
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-slate-400">Reclaim / Sweep</span>
                    <span className="font-semibold text-white">34%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[34%] rounded-full bg-emerald-400" />
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-slate-400">Pressure Reversal</span>
                    <span className="font-semibold text-white">20%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[20%] rounded-full bg-amber-400" />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-5 shadow-[0_10px_40px_rgba(0,0,0,0.22)]">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                Forward Integration
              </div>
              <div className="mt-4 space-y-4 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Bot Scanner Feed</span>
                  <span className="font-semibold text-emerald-300">Planned</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Watchlist Bridge</span>
                  <span className="font-semibold text-cyan-300">Planned</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Signal Promotion</span>
                  <span className="font-semibold text-cyan-300">Planned</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Multi-TF Ranking</span>
                  <span className="font-semibold text-slate-200">Pending</span>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-5 shadow-[0_10px_40px_rgba(0,0,0,0.22)]">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                Discovery Logic
              </div>
              <div className="mt-4 space-y-3 text-sm text-slate-300">
                <p className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                  The scanner should rank before it recommends.
                </p>
                <p className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                  Quality beats quantity; weak hits belong below operator attention.
                </p>
                <p className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                  Best candidates later promote into watchlist and live signal flow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}