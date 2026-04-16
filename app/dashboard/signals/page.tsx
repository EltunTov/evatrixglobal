const summaryCards = [
  {
    label: "Active Setups",
    value: "14",
    sub: "Watching high-quality live structures",
  },
  {
    label: "Triggered Today",
    value: "6",
    sub: "Setups moved into execution flow",
  },
  {
    label: "Average Conviction",
    value: "A",
    sub: "Session quality remains strong",
  },
  {
    label: "Execution Readiness",
    value: "78%",
    sub: "Manual-ready, API connection pending",
  },
];

const liveSignals = [
  {
    symbol: "BTCUSDT",
    direction: "LONG",
    setup: "Liquidity Reclaim",
    zone: "62,100 - 62,350",
    livePrice: "62,228",
    sl: "61,740",
    tp1: "62,980",
    tp2: "63,620",
    conviction: "A+",
    status: "Triggered",
    opened: "4m ago",
  },
  {
    symbol: "ETHUSDT",
    direction: "LONG",
    setup: "EMA Pullback",
    zone: "3,122 - 3,148",
    livePrice: "3,136",
    sl: "3,088",
    tp1: "3,188",
    tp2: "3,246",
    conviction: "A",
    status: "Armed",
    opened: "11m ago",
  },
  {
    symbol: "SOLUSDT",
    direction: "SHORT",
    setup: "Pressure Reversal",
    zone: "142.40 - 143.10",
    livePrice: "142.76",
    sl: "144.20",
    tp1: "140.85",
    tp2: "138.90",
    conviction: "B+",
    status: "Watching",
    opened: "18m ago",
  },
  {
    symbol: "BNBUSDT",
    direction: "LONG",
    setup: "Trend Continuation",
    zone: "578.00 - 581.20",
    livePrice: "580.40",
    sl: "572.80",
    tp1: "589.60",
    tp2: "598.10",
    conviction: "A",
    status: "Active",
    opened: "23m ago",
  },
  {
    symbol: "XRPUSDT",
    direction: "SHORT",
    setup: "Sweep Failure",
    zone: "0.6420 - 0.6460",
    livePrice: "0.6438",
    sl: "0.6512",
    tp1: "0.6368",
    tp2: "0.6294",
    conviction: "B",
    status: "Partial",
    opened: "31m ago",
  },
  {
    symbol: "ARUSDT",
    direction: "LONG",
    setup: "HTF Reclaim",
    zone: "37.20 - 37.85",
    livePrice: "37.44",
    sl: "36.68",
    tp1: "38.42",
    tp2: "39.26",
    conviction: "A+",
    status: "Watching",
    opened: "39m ago",
  },
];

const recentTriggered = [
  "BTCUSDT LONG moved into trigger range",
  "ETHUSDT LONG armed above reclaim zone",
  "BNBUSDT LONG entered active state",
];

const recentInvalidations = [
  "DOGEUSDT SHORT invalidated above session high",
  "AVAXUSDT LONG lost reclaim structure",
  "LINKUSDT SHORT rejected due to weak pressure",
];

const priorityWatch = [
  "ARUSDT · HTF reclaim with strong alignment",
  "ETCUSDT · Clean continuation structure",
  "NEARUSDT · Pressure build near breakout zone",
];

function getStatusStyles(status: string) {
  switch (status) {
    case "Watching":
      return "bg-white/5 text-slate-300 border border-white/10";
    case "Armed":
      return "bg-sky-500/10 text-sky-300 border border-sky-400/20";
    case "Triggered":
      return "bg-cyan-500/10 text-cyan-300 border border-cyan-400/20";
    case "Active":
      return "bg-emerald-500/10 text-emerald-300 border border-emerald-400/20";
    case "Partial":
      return "bg-amber-500/10 text-amber-300 border border-amber-400/20";
    case "Closed":
      return "bg-slate-500/10 text-slate-300 border border-slate-400/20";
    case "Invalidated":
      return "bg-rose-500/10 text-rose-300 border border-rose-400/20";
    default:
      return "bg-white/5 text-slate-300 border border-white/10";
  }
}

function getDirectionStyles(direction: string) {
  return direction === "LONG"
    ? "text-emerald-300 bg-emerald-500/10 border border-emerald-400/20"
    : "text-rose-300 bg-rose-500/10 border border-rose-400/20";
}

function getConvictionStyles(conviction: string) {
  if (conviction === "A+") {
    return "text-cyan-300 bg-cyan-500/10 border border-cyan-400/20";
  }
  if (conviction.startsWith("A")) {
    return "text-sky-300 bg-sky-500/10 border border-sky-400/20";
  }
  if (conviction.startsWith("B")) {
    return "text-amber-300 bg-amber-500/10 border border-amber-400/20";
  }
  return "text-slate-300 bg-white/5 border border-white/10";
}

export default function SignalsPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.08),_transparent_28%),linear-gradient(180deg,_#0b1220_0%,_#0a0f1a_100%)] text-white">
      <div className="mx-auto w-full max-w-[1700px] px-6 py-6 xl:px-8">
        <div className="mb-6 flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 px-5 py-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-200/70">
              Live Execution Terminal
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-white">
              Live Signals
            </h1>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
              Institutional-grade signal visibility, active setup flow, and
              execution context for premium crypto operations.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
              <div className="text-[10px] uppercase tracking-[0.22em] text-slate-400">
                Market Regime
              </div>
              <div className="mt-2 text-sm font-semibold text-emerald-300">
                Trend
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
              <div className="text-[10px] uppercase tracking-[0.22em] text-slate-400">
                Engine Status
              </div>
              <div className="mt-2 text-sm font-semibold text-cyan-300">
                Running
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
              <div className="text-[10px] uppercase tracking-[0.22em] text-slate-400">
                Flow
              </div>
              <div className="mt-2 text-sm font-semibold text-white">
                6 Active · 11 Pending
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
              <div className="text-[10px] uppercase tracking-[0.22em] text-slate-400">
                Last Sync
              </div>
              <div className="mt-2 text-sm font-semibold text-white">4s ago</div>
            </div>
          </div>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-4 xl:grid-cols-4">
          {summaryCards.map((card) => (
            <div
              key={card.label}
              className="rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-5 shadow-[0_10px_40px_rgba(0,0,0,0.22)]"
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                {card.label}
              </div>
              <div className="mt-3 text-3xl font-semibold tracking-tight text-white">
                {card.value}
              </div>
              <div className="mt-2 text-sm text-slate-300">{card.sub}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 2xl:grid-cols-[minmax(0,1.65fr)_380px]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] shadow-[0_10px_40px_rgba(0,0,0,0.22)]">
            <div className="flex flex-col gap-3 border-b border-white/10 px-5 py-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                  Active Signal Board
                </div>
                <div className="mt-2 text-xl font-semibold text-white">
                  Real-time setup and execution visibility
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <button className="rounded-2xl border border-sky-400/20 bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-200">
                  All Signals
                </button>
                <button className="rounded-2xl border border-white/10 bg-black/20 px-4 py-2 text-sm font-medium text-slate-300">
                  Active
                </button>
                <button className="rounded-2xl border border-white/10 bg-black/20 px-4 py-2 text-sm font-medium text-slate-300">
                  Triggered
                </button>
                <button className="rounded-2xl border border-white/10 bg-black/20 px-4 py-2 text-sm font-medium text-slate-300">
                  Watching
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-[1240px] w-full">
                <thead>
                  <tr className="border-b border-white/10 text-left">
                    {[
                      "Symbol",
                      "Direction",
                      "Setup",
                      "Entry Zone",
                      "Live Price",
                      "SL",
                      "TP1",
                      "TP2",
                      "Conviction",
                      "Status",
                      "Opened",
                      "Details",
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
                  {liveSignals.map((row) => (
                    <tr
                      key={row.symbol + row.opened}
                      className="border-b border-white/5 transition hover:bg-white/[0.03]"
                    >
                      <td className="px-5 py-4">
                        <div className="font-semibold text-white">{row.symbol}</div>
                        <div className="mt-1 text-xs text-slate-400">
                          Perpetual Futures
                        </div>
                      </td>

                      <td className="px-5 py-4">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getDirectionStyles(
                            row.direction
                          )}`}
                        >
                          {row.direction}
                        </span>
                      </td>

                      <td className="px-5 py-4">
                        <div className="font-medium text-slate-100">{row.setup}</div>
                        <div className="mt-1 text-xs text-slate-400">
                          Structure aligned
                        </div>
                      </td>

                      <td className="px-5 py-4 text-sm text-slate-200">
                        {row.zone}
                      </td>
                      <td className="px-5 py-4 text-sm font-medium text-white">
                        {row.livePrice}
                      </td>
                      <td className="px-5 py-4 text-sm text-slate-200">{row.sl}</td>
                      <td className="px-5 py-4 text-sm text-slate-200">{row.tp1}</td>
                      <td className="px-5 py-4 text-sm text-slate-200">{row.tp2}</td>

                      <td className="px-5 py-4">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getConvictionStyles(
                            row.conviction
                          )}`}
                        >
                          {row.conviction}
                        </span>
                      </td>

                      <td className="px-5 py-4">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyles(
                            row.status
                          )}`}
                        >
                          {row.status}
                        </span>
                      </td>

                      <td className="px-5 py-4 text-sm text-slate-300">
                        {row.opened}
                      </td>

                      <td className="px-5 py-4">
                        <button className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-xs font-semibold text-slate-200 transition hover:border-sky-400/20 hover:text-white">
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-5 shadow-[0_10px_40px_rgba(0,0,0,0.22)]">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                Top Setup
              </div>
              <div className="mt-3 text-xl font-semibold text-white">
                BTCUSDT LONG
              </div>
              <div className="mt-2 inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                A+ Conviction
              </div>
              <div className="mt-4 space-y-2 text-sm text-slate-300">
                <p>HTF alignment confirmed</p>
                <p>Liquidity reclaim remains valid</p>
                <p>Pressure profile supports continuation</p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-5 shadow-[0_10px_40px_rgba(0,0,0,0.22)]">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                Risk Exposure
              </div>
              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Open Longs</span>
                  <span className="font-semibold text-white">4</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Open Shorts</span>
                  <span className="font-semibold text-white">2</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Session Risk</span>
                  <span className="font-semibold text-amber-300">Medium</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Cluster Risk</span>
                  <span className="font-semibold text-emerald-300">Low</span>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-5 shadow-[0_10px_40px_rgba(0,0,0,0.22)]">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                Market Pressure
              </div>
              <div className="mt-4 space-y-4">
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-slate-400">Bullish Pressure</span>
                    <span className="font-semibold text-white">68%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[68%] rounded-full bg-cyan-400" />
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-slate-400">Bearish Pressure</span>
                    <span className="font-semibold text-white">32%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[32%] rounded-full bg-slate-400" />
                  </div>
                </div>
                <div className="pt-1 text-sm text-slate-300">
                  Regime remains supportive for directional continuation.
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-5 shadow-[0_10px_40px_rgba(0,0,0,0.22)]">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                Execution Readiness
              </div>
              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Exchange Linked</span>
                  <span className="font-semibold text-rose-300">No</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">API Status</span>
                  <span className="font-semibold text-rose-300">Offline</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Auto Execution</span>
                  <span className="font-semibold text-slate-200">Disabled</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Manual Mode</span>
                  <span className="font-semibold text-emerald-300">Enabled</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-5 shadow-[0_10px_40px_rgba(0,0,0,0.22)]">
            <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
              Recently Triggered
            </div>
            <div className="mt-4 space-y-3">
              {recentTriggered.map((item) => (
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
              Recent Invalidations
            </div>
            <div className="mt-4 space-y-3">
              {recentInvalidations.map((item) => (
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
              Priority Watch
            </div>
            <div className="mt-4 space-y-3">
              {priorityWatch.map((item) => (
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
    </div>
  );
}