const kpis = [
  { label: "Net Return", value: "+18.7%", tone: "emerald" },
  { label: "Win Rate", value: "61.8%", tone: "cyan" },
  { label: "Profit Factor", value: "1.84", tone: "white" },
  { label: "Max Drawdown", value: "-6.2%", tone: "amber" },
  { label: "Expectancy", value: "+0.42R", tone: "emerald" },
  { label: "Avg RR Realized", value: "1.67R", tone: "cyan" },
];

const monthlyRows = [
  { month: "Jan", pnl: "+3.2R", winRate: "58%", dd: "-2.1%", quality: "Stable" },
  { month: "Feb", pnl: "+1.8R", winRate: "54%", dd: "-3.4%", quality: "Choppy" },
  { month: "Mar", pnl: "+4.6R", winRate: "64%", dd: "-1.8%", quality: "Strong" },
  { month: "Apr", pnl: "+2.8R", winRate: "62%", dd: "-2.6%", quality: "Constructive" },
  { month: "May", pnl: "-0.7R", winRate: "46%", dd: "-4.1%", quality: "Defensive" },
  { month: "Jun", pnl: "+3.9R", winRate: "67%", dd: "-1.7%", quality: "Strong" },
];

const setupContribution = [
  { name: "Liquidity Reclaim", share: 36, result: "+6.4R" },
  { name: "EMA Pullback", share: 28, result: "+4.2R" },
  { name: "HTF Reclaim", share: 21, result: "+3.1R" },
  { name: "Pressure Reversal", share: 15, result: "+0.9R" },
];

const distribution = [
  { band: "TP2 / Extended Winners", count: 18, width: "72%" },
  { band: "TP1 / Clean Winners", count: 26, width: "84%" },
  { band: "Partial Exits", count: 11, width: "42%" },
  { band: "Manual Exits", count: 7, width: "26%" },
  { band: "Stop Loss", count: 22, width: "58%" },
];

const reviewNotes = [
  "Performance improves when trend families dominate and breadth remains constructive.",
  "Largest equity damage appears during mixed regimes with weak follow-through.",
  "Continuation setups outperform reversal logic in current market structure.",
];

function toneClass(tone: string) {
  if (tone === "emerald") return "text-emerald-300";
  if (tone === "cyan") return "text-cyan-300";
  if (tone === "amber") return "text-amber-300";
  return "text-white";
}

function pnlClass(value: string) {
  return value.startsWith("-") ? "text-rose-300" : "text-emerald-300";
}

function qualityClass(value: string) {
  if (value === "Strong") return "text-emerald-300";
  if (value === "Constructive" || value === "Stable") return "text-cyan-300";
  if (value === "Choppy" || value === "Defensive") return "text-amber-300";
  return "text-slate-300";
}

export default function PerformancePage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.08),_transparent_28%),linear-gradient(180deg,_#0b1220_0%,_#0a0f1a_100%)] text-white">
      <div className="mx-auto w-full max-w-[1700px] px-6 py-6 xl:px-8">
        <div className="mb-6 flex flex-col gap-4 rounded-[28px] border border-white/10 bg-white/[0.04] px-6 py-6">
          <div className="flex flex-col gap-3 xl:flex-row xl:items-end xl:justify-between">
            <div>
              <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-200/70">
                Performance Lab
              </div>
              <h1 className="text-[28px] font-semibold tracking-tight text-white">
                Performance
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
                Win rate, expectancy, drawdown behavior, monthly review, and
                outcome distribution for institutional-grade system evaluation.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <button className="rounded-full border border-sky-400/20 bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-200">
                30D
              </button>
              <button className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm font-medium text-slate-300">
                90D
              </button>
              <button className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm font-medium text-slate-300">
                YTD
              </button>
              <button className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm font-medium text-slate-300">
                Export
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 xl:grid-cols-6">
            {kpis.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4"
              >
                <div className="text-[10px] uppercase tracking-[0.22em] text-slate-400">
                  {item.label}
                </div>
                <div className={`mt-3 text-2xl font-semibold ${toneClass(item.tone)}`}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 2xl:grid-cols-[minmax(0,1.55fr)_380px]">
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1.2fr)_320px]">
              <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                      Equity Story
                    </div>
                    <div className="mt-2 text-lg font-semibold text-white">
                      Growth path and drawdown behavior
                    </div>
                  </div>
                  <div className="text-sm text-slate-400">Simulated display</div>
                </div>

                <div className="relative h-[260px] overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.8),rgba(2,6,23,0.9))] p-5">
                  <div className="absolute inset-x-0 top-8 border-t border-white/5" />
                  <div className="absolute inset-x-0 top-1/2 border-t border-white/5" />
                  <div className="absolute inset-x-0 bottom-10 border-t border-white/5" />

                  <svg viewBox="0 0 900 260" className="h-full w-full">
                    <path
                      d="M20 200 C 80 185, 120 190, 180 155 S 300 120, 360 135 S 470 85, 540 95 S 640 55, 710 72 S 805 36, 880 28"
                      fill="none"
                      stroke="rgba(56,189,248,0.9)"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <path
                      d="M20 210 C 80 198, 120 202, 180 176 S 300 142, 360 154 S 470 112, 540 121 S 640 79, 710 92 S 805 58, 880 46"
                      fill="none"
                      stroke="rgba(148,163,184,0.35)"
                      strokeWidth="2"
                      strokeDasharray="8 10"
                      strokeLinecap="round"
                    />
                  </svg>

                  <div className="absolute bottom-4 left-5 right-5 flex justify-between text-xs text-slate-500">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                  </div>
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                  Risk Ratios
                </div>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/5 pb-3 text-sm">
                    <span className="text-slate-400">Gross Profit</span>
                    <span className="font-semibold text-emerald-300">+24.8R</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-3 text-sm">
                    <span className="text-slate-400">Gross Loss</span>
                    <span className="font-semibold text-rose-300">-13.5R</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-3 text-sm">
                    <span className="text-slate-400">Sharpe-Style View</span>
                    <span className="font-semibold text-cyan-300">1.26</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-3 text-sm">
                    <span className="text-slate-400">Recovery Factor</span>
                    <span className="font-semibold text-white">3.01</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Avg Hold</span>
                    <span className="font-semibold text-white">3h 18m</span>
                  </div>
                </div>

                <div className="mt-6 rounded-3xl border border-white/10 bg-black/20 p-4">
                  <div className="text-xs uppercase tracking-[0.22em] text-slate-500">
                    Performance Read
                  </div>
                  <div className="mt-3 text-sm leading-6 text-slate-300">
                    The engine remains strongest when continuation families dominate and
                    macro stress does not distort intraday structure.
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                    Monthly Matrix
                  </div>
                  <div className="mt-2 text-lg font-semibold text-white">
                    Period-by-period review instead of flat history
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-[820px] w-full">
                  <thead>
                    <tr className="border-b border-white/10 text-left">
                      {["Month", "P&L", "Win Rate", "Drawdown", "Quality"].map((head) => (
                        <th
                          key={head}
                          className="px-4 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400"
                        >
                          {head}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {monthlyRows.map((row) => (
                      <tr
                        key={row.month}
                        className="border-b border-white/5 transition hover:bg-white/[0.03]"
                      >
                        <td className="px-4 py-4 font-semibold text-white">{row.month}</td>
                        <td className={`px-4 py-4 font-semibold ${pnlClass(row.pnl)}`}>
                          {row.pnl}
                        </td>
                        <td className="px-4 py-4 text-slate-200">{row.winRate}</td>
                        <td className="px-4 py-4 text-amber-300">{row.dd}</td>
                        <td className={`px-4 py-4 font-medium ${qualityClass(row.quality)}`}>
                          {row.quality}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
              <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                  Outcome Distribution
                </div>
                <div className="mt-4 space-y-4">
                  {distribution.map((item) => (
                    <div key={item.band}>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="text-slate-300">{item.band}</span>
                        <span className="font-semibold text-white">{item.count}</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/10">
                        <div
                          className="h-2 rounded-full bg-cyan-400"
                          style={{ width: item.width }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                  Setup Contribution
                </div>
                <div className="mt-4 space-y-4">
                  {setupContribution.map((item) => (
                    <div
                      key={item.name}
                      className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4"
                    >
                      <div className="flex items-center justify-between">
                        <div className="font-medium text-white">{item.name}</div>
                        <div className="font-semibold text-emerald-300">{item.result}</div>
                      </div>
                      <div className="mt-3 flex items-center gap-3">
                        <div className="h-2 flex-1 rounded-full bg-white/10">
                          <div
                            className="h-2 rounded-full bg-emerald-400"
                            style={{ width: `${item.share}%` }}
                          />
                        </div>
                        <div className="w-12 text-right text-sm text-slate-300">
                          {item.share}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                Performance State
              </div>
              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Current Regime Fit</span>
                  <span className="font-semibold text-emerald-300">Healthy</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Consistency</span>
                  <span className="font-semibold text-cyan-300">Improving</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Risk Drift</span>
                  <span className="font-semibold text-amber-300">Contained</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Equity Condition</span>
                  <span className="font-semibold text-white">Positive Slope</span>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                Review Notes
              </div>
              <div className="mt-4 space-y-3">
                {reviewNotes.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm leading-6 text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                Evaluation Policy
              </div>
              <div className="mt-4 space-y-3 text-sm text-slate-300">
                <p className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                  Performance should be judged by quality of returns, not only raw win rate.
                </p>
                <p className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                  Drawdown control remains as important as profit growth.
                </p>
                <p className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                  Monthly stability matters more than isolated explosive weeks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}