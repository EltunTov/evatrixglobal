const newsSummary = [
  {
    label: "Event Risk",
    value: "Moderate",
    sub: "Headline pressure is active but not disorderly",
  },
  {
    label: "High-Impact Events",
    value: "4",
    sub: "Catalysts worth elevated attention today",
  },
  {
    label: "Exchange Headlines",
    value: "7",
    sub: "Platform and listing-driven updates being tracked",
  },
  {
    label: "Sentiment Tone",
    value: "Constructive",
    sub: "Market narrative still favors selective continuation",
  },
];

const catalystBoard = [
  {
    title: "U.S. Macro Window Near Session Open",
    category: "Macro",
    impact: "High",
    urgency: "Now",
    assets: "BTC, ETH, majors",
    tone: "Volatility Risk",
    note: "Keep directional aggression controlled into macro-sensitive timing.",
  },
  {
    title: "BTC Breakout Narrative Holding Market Attention",
    category: "Market Narrative",
    impact: "High",
    urgency: "Active",
    assets: "BTC, high-beta alts",
    tone: "Bullish",
    note: "If BTC leadership holds, participation across majors may remain healthy.",
  },
  {
    title: "Exchange-Specific Listing / Product Headlines",
    category: "Exchange",
    impact: "Medium",
    urgency: "Watch",
    assets: "Selected alts",
    tone: "Catalyst Sensitive",
    note: "Fast repricing possible on isolated symbols with weak depth.",
  },
  {
    title: "AI / Infra Rotation Still Selective",
    category: "Sector",
    impact: "Medium",
    urgency: "Watch",
    assets: "AI, infra leaders",
    tone: "Constructive",
    note: "Momentum is present, but not broad enough to treat as universal strength.",
  },
  {
    title: "Perpetual Positioning Can Flip Intraday Bias",
    category: "Derivatives",
    impact: "High",
    urgency: "Active",
    assets: "BTC, ETH, SOL",
    tone: "Two-Way",
    note: "Funding, OI, and fast squeezes can distort lower-timeframe setups.",
  },
];

const macroItems = [
  "Macro event windows should remain visible around U.S. session transition",
  "Headline sensitivity increases when majors sit near breakout or reclaim levels",
  "Unexpected data or policy headlines can temporarily overpower clean structure",
];

const exchangeItems = [
  "Listing headlines can create isolated volatility spikes on low-depth alts",
  "Product launches, promotions, or platform-specific campaigns can shift flows",
  "Execution quality should remain stricter on symbols moving only from exchange noise",
];

const projectCatalysts = [
  "Token unlocks, roadmap milestones, and ecosystem launches belong in this layer",
  "Partnership and product announcements should be ranked by probable market effect",
  "Catalyst quality matters more than headline quantity",
];

const operatorNotes = [
  "Avoid chasing first candles on high-impact headlines without confirmation",
  "Use catalyst state as a quality filter, not as a blind entry trigger",
  "Best use-case: combine catalysts with pulse, watchlist, and live signal structure",
];

function impactStyle(impact: string) {
  if (impact === "High") {
    return "text-rose-300 bg-rose-500/10 border border-rose-400/20";
  }
  if (impact === "Medium") {
    return "text-amber-300 bg-amber-500/10 border border-amber-400/20";
  }
  return "text-slate-300 bg-white/5 border border-white/10";
}

function urgencyStyle(urgency: string) {
  if (urgency === "Now") {
    return "text-cyan-300 bg-cyan-500/10 border border-cyan-400/20";
  }
  if (urgency === "Active") {
    return "text-emerald-300 bg-emerald-500/10 border border-emerald-400/20";
  }
  if (urgency === "Watch") {
    return "text-amber-300 bg-amber-500/10 border border-amber-400/20";
  }
  return "text-slate-300 bg-white/5 border border-white/10";
}

function toneStyle(tone: string) {
  if (tone === "Bullish" || tone === "Constructive") {
    return "text-emerald-300";
  }
  if (tone === "Volatility Risk" || tone === "Two-Way") {
    return "text-amber-300";
  }
  if (tone === "Catalyst Sensitive") {
    return "text-cyan-300";
  }
  return "text-slate-300";
}

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.08),_transparent_28%),linear-gradient(180deg,_#0b1220_0%,_#0a0f1a_100%)] text-white">
      <div className="mx-auto w-full max-w-[1700px] px-6 py-6 xl:px-8">
        <div className="mb-6 flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 px-5 py-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-200/70">
              Event Intelligence Terminal
            </div>
            <h1 className="text-[28px] font-semibold tracking-tight text-white">
              News & Catalysts
            </h1>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
              Ranked event risk, catalyst windows, exchange headlines, and
              market-moving intelligence for professional crypto operations.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
              <div className="text-[10px] uppercase tracking-[0.22em] text-slate-400">
                Feed Status
              </div>
              <div className="mt-2 text-sm font-semibold text-emerald-300">
                Active
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
              <div className="text-[10px] uppercase tracking-[0.22em] text-slate-400">
                Risk Level
              </div>
              <div className="mt-2 text-sm font-semibold text-amber-300">
                Moderate
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
              <div className="text-[10px] uppercase tracking-[0.22em] text-slate-400">
                Macro Focus
              </div>
              <div className="mt-2 text-sm font-semibold text-white">
                Elevated
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
          {newsSummary.map((card) => (
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
                  Ranked Catalyst Board
                </div>
                <div className="mt-2 text-lg font-semibold text-white">
                  Events with direct trading relevance
                </div>
              </div>

              <div className="space-y-3 px-5 py-5">
                {catalystBoard.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4"
                  >
                    <div className="flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between">
                      <div className="min-w-0">
                        <div className="font-semibold text-white">{item.title}</div>
                        <div className="mt-1 text-sm text-slate-400">
                          {item.category} · {item.assets}
                        </div>
                        <div className="mt-3 text-sm text-slate-300">
                          {item.note}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 xl:justify-end">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${impactStyle(
                            item.impact
                          )}`}
                        >
                          {item.impact} Impact
                        </span>
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${urgencyStyle(
                            item.urgency
                          )}`}
                        >
                          {item.urgency}
                        </span>
                        <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold border border-white/10 bg-white/5 ${toneStyle(item.tone)}`}>
                          {item.tone}
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
                  Macro Windows
                </div>
                <div className="mt-4 space-y-3">
                  {macroItems.map((item) => (
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
                  Exchange Headlines
                </div>
                <div className="mt-4 space-y-3">
                  {exchangeItems.map((item) => (
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
                  Project Catalysts
                </div>
                <div className="mt-4 space-y-3">
                  {projectCatalysts.map((item) => (
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
                Catalyst Snapshot
              </div>
              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Immediate Risk</span>
                  <span className="font-semibold text-amber-300">Manageable</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Narrative Tone</span>
                  <span className="font-semibold text-emerald-300">Constructive</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Exchange Sensitivity</span>
                  <span className="font-semibold text-cyan-300">Elevated</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Noise Level</span>
                  <span className="font-semibold text-slate-200">Moderate</span>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-5 shadow-[0_10px_40px_rgba(0,0,0,0.22)]">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                Impact Distribution
              </div>
              <div className="mt-4 space-y-4">
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-slate-400">High Impact</span>
                    <span className="font-semibold text-white">38%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[38%] rounded-full bg-rose-400" />
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-slate-400">Medium Impact</span>
                    <span className="font-semibold text-white">44%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[44%] rounded-full bg-amber-400" />
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-slate-400">Low Impact</span>
                    <span className="font-semibold text-white">18%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[18%] rounded-full bg-slate-400" />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-5 shadow-[0_10px_40px_rgba(0,0,0,0.22)]">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                Operator Guidance
              </div>
              <div className="mt-4 space-y-3">
                {operatorNotes.map((item) => (
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
                Forward Integration
              </div>
              <div className="mt-4 space-y-4 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Binance News Feed</span>
                  <span className="font-semibold text-cyan-300">Planned</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Bybit Exchange Headlines</span>
                  <span className="font-semibold text-cyan-300">Planned</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Catalyst Calendar</span>
                  <span className="font-semibold text-emerald-300">Planned</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Bot News Filter</span>
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