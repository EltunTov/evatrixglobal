const strategySummary = [
  {
    label: "Active Families",
    value: "4",
    sub: "Core setup groups currently driving signal production",
  },
  {
    label: "Best Performing Family",
    value: "Liquidity Reclaim",
    sub: "Most consistent contribution in current market regime",
  },
  {
    label: "Regime Fit",
    value: "Trend-Biased",
    sub: "Current strategy stack favors directional continuation",
  },
  {
    label: "Logic Visibility",
    value: "Controlled",
    sub: "High-level transparency without exposing core IP",
  },
];

const strategyFamilies = [
  {
    family: "Liquidity Reclaim",
    role: "Continuation / Re-entry",
    fit: "Trend markets",
    contribution: "High",
    status: "Primary",
    note: "Performs best when higher-timeframe alignment and reclaim confirmation stay intact.",
  },
  {
    family: "EMA Pullback",
    role: "Trend continuation",
    fit: "Structured directional markets",
    contribution: "High",
    status: "Core",
    note: "Most stable when momentum cools without damaging bullish or bearish structure.",
  },
  {
    family: "Pressure Reversal",
    role: "Counter impulse reaction",
    fit: "Mixed / local exhaustion",
    contribution: "Medium",
    status: "Selective",
    note: "Needs stronger confluence than continuation families to remain premium-grade.",
  },
  {
    family: "HTF Reclaim",
    role: "Higher-timeframe confirmation",
    fit: "Swing-quality environments",
    contribution: "High",
    status: "Primary",
    note: "Used when broader structure validates cleaner continuation or recovery scenarios.",
  },
];

const intelligenceBlocks = [
  "Strategy families should be shown as capability groups, not exposed code logic",
  "Users need to understand how the engine behaves, not how to clone it",
  "Performance contribution matters more than indicator name-dropping",
];

const regimeNotes = [
  "Continuation families dominate when Market Pulse stays constructive",
  "Reversal logic should remain more selective under strong major-led trends",
  "Weak or fragmented breadth should reduce confidence in lower-quality families",
];

const operatorPrinciples = [
  "This page builds trust through structure, not through full disclosure",
  "Good strategy intel explains edge categories while protecting proprietary execution logic",
  "Best UX outcome: users understand why signals appear without reverse-engineering the engine",
];

function contributionStyle(value: string) {
  if (value === "High") return "text-emerald-300 bg-emerald-500/10 border border-emerald-400/20";
  if (value === "Medium") return "text-amber-300 bg-amber-500/10 border border-amber-400/20";
  return "text-slate-300 bg-white/5 border border-white/10";
}

function statusStyle(value: string) {
  if (value === "Primary") return "text-cyan-300 bg-cyan-500/10 border border-cyan-400/20";
  if (value === "Core") return "text-emerald-300 bg-emerald-500/10 border border-emerald-400/20";
  if (value === "Selective") return "text-amber-300 bg-amber-500/10 border border-amber-400/20";
  return "text-slate-300 bg-white/5 border border-white/10";
}

export default function StrategyPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.08),_transparent_28%),linear-gradient(180deg,_#0b1220_0%,_#0a0f1a_100%)] text-white">
      <div className="mx-auto w-full max-w-[1700px] px-6 py-6 xl:px-8">
        <div className="mb-6 flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 px-5 py-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-200/70">
              Strategy Intelligence Layer
            </div>
            <h1 className="text-[28px] font-semibold tracking-tight text-white">
              Strategy Intel
            </h1>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
              Strategy families, regime fit, contribution visibility, and
              intelligence-layer transparency without exposing proprietary execution logic.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
              <div className="text-[10px] uppercase tracking-[0.22em] text-slate-400">
                Disclosure Mode
              </div>
              <div className="mt-2 text-sm font-semibold text-emerald-300">
                Surface-Level
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
              <div className="text-[10px] uppercase tracking-[0.22em] text-slate-400">
                Core Logic
              </div>
              <div className="mt-2 text-sm font-semibold text-cyan-300">
                Protected
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
              <div className="text-[10px] uppercase tracking-[0.22em] text-slate-400">
                Optimization State
              </div>
              <div className="mt-2 text-sm font-semibold text-white">
                Active
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
              <div className="text-[10px] uppercase tracking-[0.22em] text-slate-400">
                Strategy Scope
              </div>
              <div className="mt-2 text-sm font-semibold text-white">
                Crypto Perps
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-4 xl:grid-cols-4">
          {strategySummary.map((card) => (
            <div
              key={card.label}
              className="rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-5 shadow-[0_10px_40px_rgba(0,0,0,0.22)]"
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                {card.label}
              </div>
              <div className="mt-3 text-[26px] font-semibold tracking-tight text-white">
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
                  Strategy Families
                </div>
                <div className="mt-2 text-lg font-semibold text-white">
                  High-level view of the engine’s active intelligence groups
                </div>
              </div>

              <div className="space-y-3 px-5 py-5">
                {strategyFamilies.map((item) => (
                  <div
                    key={item.family}
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4"
                  >
                    <div className="flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between">
                      <div className="min-w-0">
                        <div className="font-semibold text-white">{item.family}</div>
                        <div className="mt-1 text-sm text-slate-400">
                          {item.role} · {item.fit}
                        </div>
                        <div className="mt-3 text-sm text-slate-300">
                          {item.note}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 xl:justify-end">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${contributionStyle(
                            item.contribution
                          )}`}
                        >
                          {item.contribution} Contribution
                        </span>
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${statusStyle(
                            item.status
                          )}`}
                        >
                          {item.status}
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
                  Intelligence Logic
                </div>
                <div className="mt-4 space-y-3">
                  {intelligenceBlocks.map((item) => (
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
                  Regime Notes
                </div>
                <div className="mt-4 space-y-3">
                  {regimeNotes.map((item) => (
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
                  Operator Principles
                </div>
                <div className="mt-4 space-y-3">
                  {operatorPrinciples.map((item) => (
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
                Strategy Snapshot
              </div>
              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Current Dominant Family</span>
                  <span className="font-semibold text-cyan-300">Liquidity Reclaim</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Trend Sensitivity</span>
                  <span className="font-semibold text-emerald-300">High</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Reversal Usage</span>
                  <span className="font-semibold text-amber-300">Selective</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">IP Exposure</span>
                  <span className="font-semibold text-slate-200">Restricted</span>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-5 shadow-[0_10px_40px_rgba(0,0,0,0.22)]">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                Contribution Mix
              </div>
              <div className="mt-4 space-y-4">
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-slate-400">Continuation Families</span>
                    <span className="font-semibold text-white">52%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[52%] rounded-full bg-cyan-400" />
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-slate-400">Reclaim / Recovery</span>
                    <span className="font-semibold text-white">31%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[31%] rounded-full bg-emerald-400" />
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-slate-400">Reversal Logic</span>
                    <span className="font-semibold text-white">17%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[17%] rounded-full bg-amber-400" />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-5 shadow-[0_10px_40px_rgba(0,0,0,0.22)]">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                Disclosure Policy
              </div>
              <div className="mt-4 space-y-3 text-sm text-slate-300">
                <p className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                  Strategy identity can be visible without exposing decision code.
                </p>
                <p className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                  Trust is built through structured transparency, not source-level disclosure.
                </p>
                <p className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                  Users should understand edge families, not replicate them.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-5 shadow-[0_10px_40px_rgba(0,0,0,0.22)]">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                Forward Integration
              </div>
              <div className="mt-4 space-y-4 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Bot Family Attribution</span>
                  <span className="font-semibold text-emerald-300">Planned</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Setup Performance Feed</span>
                  <span className="font-semibold text-cyan-300">Planned</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Regime-Strategy Mapping</span>
                  <span className="font-semibold text-cyan-300">Planned</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Internal Logic Layer</span>
                  <span className="font-semibold text-slate-200">Protected</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}