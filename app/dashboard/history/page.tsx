const historySummary = [
  {
    label: "Closed Trades",
    value: "248",
    sub: "Archived execution records across recent cycles",
  },
  {
    label: "Win Rate",
    value: "61.8%",
    sub: "Directional quality remains stable",
  },
  {
    label: "Net Realized PnL",
    value: "+12.4R",
    sub: "Fees and execution outcomes included",
  },
  {
    label: "Average Hold Time",
    value: "3h 18m",
    sub: "Balanced between fast and structured exits",
  },
];

const closedTrades = [
  {
    symbol: "BTCUSDT",
    side: "LONG",
    setup: "Liquidity Reclaim",
    entry: "62,180",
    exit: "63,605",
    pnl: "+2.31R",
    result: "TP2",
    duration: "4h 12m",
    closedAt: "Today · 14:22",
  },
  {
    symbol: "ETHUSDT",
    side: "LONG",
    setup: "EMA Pullback",
    entry: "3,128",
    exit: "3,189",
    pnl: "+1.08R",
    result: "TP1",
    duration: "1h 46m",
    closedAt: "Today · 12:08",
  },
  {
    symbol: "SOLUSDT",
    side: "SHORT",
    setup: "Pressure Reversal",
    entry: "143.02",
    exit: "144.26",
    pnl: "-1.00R",
    result: "SL",
    duration: "58m",
    closedAt: "Today · 10:51",
  },
  {
    symbol: "BNBUSDT",
    side: "LONG",
    setup: "Trend Continuation",
    entry: "579.10",
    exit: "589.60",
    pnl: "+1.72R",
    result: "TP1",
    duration: "2h 34m",
    closedAt: "Yesterday · 21:16",
  },
  {
    symbol: "XRPUSDT",
    side: "SHORT",
    setup: "Sweep Failure",
    entry: "0.6451",
    exit: "0.6369",
    pnl: "+1.24R",
    result: "Partial",
    duration: "2h 02m",
    closedAt: "Yesterday · 18:03",
  },
  {
    symbol: "ARUSDT",
    side: "LONG",
    setup: "HTF Reclaim",
    entry: "37.34",
    exit: "39.18",
    pnl: "+2.06R",
    result: "TP2",
    duration: "5h 27m",
    closedAt: "Yesterday · 14:40",
  },
  {
    symbol: "NEARUSDT",
    side: "LONG",
    setup: "Continuation Break",
    entry: "7.84",
    exit: "7.71",
    pnl: "-0.64R",
    result: "Manual Exit",
    duration: "36m",
    closedAt: "Yesterday · 11:12",
  },
];

const bestSetups = [
  "Liquidity Reclaim · 68% win rate · +6.4R net",
  "HTF Reclaim · 64% win rate · +4.9R net",
  "Trend Continuation · 62% win rate · +3.8R net",
];

const recentMistakes = [
  "Late short entries under thin liquidity reduced edge quality",
  "Two manual exits cut winning trades before TP progression",
  "Pressure-only setups underperformed without HTF confirmation",
];

const reviewNotes = [
  "Best session quality appeared during London–US overlap",
  "A-grade longs maintained strongest follow-through this week",
  "Weak-score setups should remain capped or filtered out",
];

function getSideStyles(side: string) {
  return side === "LONG"
    ? "text-emerald-300 bg-emerald-500/10 border border-emerald-400/20"
    : "text-rose-300 bg-rose-500/10 border border-rose-400/20";
}

function getResultStyles(result: string) {
  switch (result) {
    case "TP2":
      return "text-cyan-300 bg-cyan-500/10 border border-cyan-400/20";
    case "TP1":
      return "text-emerald-300 bg-emerald-500/10 border border-emerald-400/20";
    case "Partial":
      return "text-amber-300 bg-amber-500/10 border border-amber-400/20";
    case "SL":
      return "text-rose-300 bg-rose-500/10 border border-rose-400/20";
    case "Manual Exit":
      return "text-slate-300 bg-white/5 border border-white/10";
    default:
      return "text-slate-300 bg-white/5 border border-white/10";
  }
}

function getPnlStyles(pnl: string) {
  return pnl.trim().startsWith("-")
    ? "text-rose-300"
    : "text-emerald-300";
}

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.08),_transparent_28%),linear-gradient(180deg,_#0b1220_0%,_#0a0f1a_100%)] text-white">
      <div className="mx-auto w-full max-w-[1700px] px-6 py-6 xl:px-8">
        <div className="mb-6 flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 px-5 py-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-200/70">
              Review & Audit Terminal
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-white">
              Trade History
            </h1>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
              Closed trade review, realized outcomes, execution audit, and
              historical pattern intelligence for premium crypto operations.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
              <div className="text-[10px] uppercase tracking-[0.22em] text-slate-400">
                Period
              </div>
              <div className="mt-2 text-sm font-semibold text-white">
                Last 30 Days
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
              <div className="text-[10px] uppercase tracking-[0.22em] text-slate-400">
                Closed PnL
              </div>
              <div className="mt-2 text-sm font-semibold text-emerald-300">
                Positive
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
              <div className="text-[10px] uppercase tracking-[0.22em] text-slate-400">
                Review Mode
              </div>
              <div className="mt-2 text-sm font-semibold text-cyan-300">
                Active
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
              <div className="text-[10px] uppercase tracking-[0.22em] text-slate-400">
                Export Status
              </div>
              <div className="mt-2 text-sm font-semibold text-white">
                Ready
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-4 xl:grid-cols-4">
          {historySummary.map((card) => (
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
                  Closed Trade Archive
                </div>
                <div className="mt-2 text-xl font-semibold text-white">
                  Realized performance and execution review
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <button className="rounded-2xl border border-sky-400/20 bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-200">
                  All
                </button>
                <button className="rounded-2xl border border-white/10 bg-black/20 px-4 py-2 text-sm font-medium text-slate-300">
                  Winners
                </button>
                <button className="rounded-2xl border border-white/10 bg-black/20 px-4 py-2 text-sm font-medium text-slate-300">
                  Losers
                </button>
                <button className="rounded-2xl border border-white/10 bg-black/20 px-4 py-2 text-sm font-medium text-slate-300">
                  Export
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-[1180px] w-full">
                <thead>
                  <tr className="border-b border-white/10 text-left">
                    {[
                      "Symbol",
                      "Side",
                      "Setup",
                      "Entry",
                      "Exit",
                      "P&L",
                      "Result",
                      "Duration",
                      "Closed At",
                      "Review",
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
                  {closedTrades.map((trade) => (
                    <tr
                      key={trade.symbol + trade.closedAt}
                      className="border-b border-white/5 transition hover:bg-white/[0.03]"
                    >
                      <td className="px-5 py-4">
                        <div className="font-semibold text-white">{trade.symbol}</div>
                        <div className="mt-1 text-xs text-slate-400">
                          Closed execution
                        </div>
                      </td>

                      <td className="px-5 py-4">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getSideStyles(
                            trade.side
                          )}`}
                        >
                          {trade.side}
                        </span>
                      </td>

                      <td className="px-5 py-4">
                        <div className="font-medium text-slate-100">{trade.setup}</div>
                        <div className="mt-1 text-xs text-slate-400">
                          Strategy tracked
                        </div>
                      </td>

                      <td className="px-5 py-4 text-sm text-slate-200">
                        {trade.entry}
                      </td>
                      <td className="px-5 py-4 text-sm text-slate-200">
                        {trade.exit}
                      </td>
                      <td
                        className={`px-5 py-4 text-sm font-semibold ${getPnlStyles(
                          trade.pnl
                        )}`}
                      >
                        {trade.pnl}
                      </td>

                      <td className="px-5 py-4">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getResultStyles(
                            trade.result
                          )}`}
                        >
                          {trade.result}
                        </span>
                      </td>

                      <td className="px-5 py-4 text-sm text-slate-300">
                        {trade.duration}
                      </td>
                      <td className="px-5 py-4 text-sm text-slate-300">
                        {trade.closedAt}
                      </td>

                      <td className="px-5 py-4">
                        <button className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-xs font-semibold text-slate-200 transition hover:border-sky-400/20 hover:text-white">
                          Open
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
                Performance Snapshot
              </div>
              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Best Trade</span>
                  <span className="font-semibold text-cyan-300">+2.31R</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Worst Trade</span>
                  <span className="font-semibold text-rose-300">-1.00R</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Profit Factor</span>
                  <span className="font-semibold text-white">1.84</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Avg. Winner</span>
                  <span className="font-semibold text-emerald-300">+1.67R</span>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-5 shadow-[0_10px_40px_rgba(0,0,0,0.22)]">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                Best Setups
              </div>
              <div className="mt-4 space-y-3">
                {bestSetups.map((item) => (
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
                Execution Audit
              </div>
              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Fee Accounting</span>
                  <span className="font-semibold text-emerald-300">Included</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Funding Impact</span>
                  <span className="font-semibold text-slate-200">Tracked</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Manual Exits</span>
                  <span className="font-semibold text-amber-300">2</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Export Ready</span>
                  <span className="font-semibold text-cyan-300">Yes</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-5 shadow-[0_10px_40px_rgba(0,0,0,0.22)]">
            <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
              Best Performing Themes
            </div>
            <div className="mt-4 space-y-3">
              {bestSetups.map((item) => (
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
              Recent Mistakes
            </div>
            <div className="mt-4 space-y-3">
              {recentMistakes.map((item) => (
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
              Review Notes
            </div>
            <div className="mt-4 space-y-3">
              {reviewNotes.map((item) => (
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