const riskTiles = [
  { label: "Portfolio Risk", value: "2.8 / 10", tone: "amber" },
  { label: "Open Exposure", value: "18.4%", tone: "cyan" },
  { label: "Daily Drawdown", value: "-1.2%", tone: "emerald" },
  { label: "Risk State", value: "Controlled", tone: "emerald" },
];

const exposureRows = [
  { bucket: "BTC / Majors", value: "42%", cap: "50%", status: "Healthy" },
  { bucket: "ETH / Majors", value: "21%", cap: "35%", status: "Healthy" },
  { bucket: "High Beta Alts", value: "24%", cap: "25%", status: "Tight" },
  { bucket: "Reversal Trades", value: "13%", cap: "20%", status: "Safe" },
];

const activeRiskChecks = [
  {
    title: "Max risk per trade",
    current: "0.8%",
    rule: "Below 1.0%",
    state: "Pass",
  },
  {
    title: "Consecutive loss protection",
    current: "2 losses",
    rule: "Pause at 3",
    state: "Watch",
  },
  {
    title: "Cluster exposure",
    current: "Alt-heavy",
    rule: "Avoid concentration",
    state: "Watch",
  },
  {
    title: "Liquidity filter",
    current: "Enabled",
    rule: "Block thin markets",
    state: "Pass",
  },
];

const riskWarnings = [
  "High-beta alt exposure is approaching its soft concentration cap.",
  "Reversal setups should remain smaller when major-led trend pressure persists.",
  "Risk should compress automatically if three-loss streak protection triggers.",
];

const protectionLayers = [
  "Per-trade risk caps should stay below account damage thresholds.",
  "Drawdown control matters more than preserving trade frequency.",
  "Liquidity and news filters should veto otherwise attractive but fragile setups.",
];

const forwardRiskFeed = [
  "Bot loss-streak state",
  "Live position sizing",
  "Exchange margin state",
  "Catalyst-based risk compression",
];

function toneClass(tone: string) {
  if (tone === "emerald") return "text-emerald-300";
  if (tone === "cyan") return "text-cyan-300";
  if (tone === "amber") return "text-amber-300";
  return "text-white";
}

function statusClass(status: string) {
  if (status === "Healthy" || status === "Safe" || status === "Pass") {
    return "text-emerald-300 bg-emerald-500/10 border border-emerald-400/20";
  }
  if (status === "Tight" || status === "Watch") {
    return "text-amber-300 bg-amber-500/10 border border-amber-400/20";
  }
  return "text-rose-300 bg-rose-500/10 border border-rose-400/20";
}

export default function RiskPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#0b1220,#0a0f1a)] text-white">
      <div className="mx-auto w-full max-w-[1680px] px-6 py-6 xl:px-8">
        <div className="mb-6 grid grid-cols-1 gap-6 xl:grid-cols-[420px_minmax(0,1fr)]">
          <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6">
            <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-200/70">
              Risk Command Layer
            </div>
            <h1 className="mt-3 text-[28px] font-semibold tracking-tight">
              Risk Monitor
            </h1>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Exposure control, drawdown defense, concentration limits, and
              protective system checks for disciplined execution.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {riskTiles.map((item) => (
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

          <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                  Exposure Map
                </div>
                <div className="mt-2 text-lg font-semibold text-white">
                  Concentration and bucket stress
                </div>
              </div>
              <div className="text-sm text-slate-400">Live risk view</div>
            </div>

            <div className="space-y-4">
              {exposureRows.map((row) => (
                <div key={row.bucket} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <div>
                      <div className="font-medium text-white">{row.bucket}</div>
                      <div className="text-xs text-slate-400">Cap: {row.cap}</div>
                    </div>
                    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${statusClass(row.status)}`}>
                      {row.status}
                    </span>
                  </div>

                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-slate-400">Current share</span>
                    <span className="font-semibold text-white">{row.value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div
                      className="h-2 rounded-full bg-cyan-400"
                      style={{ width: row.value }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1.2fr)_420px]">
          <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6">
            <div className="mb-4">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                Active Protection Checks
              </div>
              <div className="mt-2 text-lg font-semibold text-white">
                Live system guardrails
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {activeRiskChecks.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-black/20 p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-medium text-white">{item.title}</div>
                      <div className="mt-2 text-sm text-slate-400">
                        Current: {item.current}
                      </div>
                      <div className="mt-1 text-sm text-slate-500">
                        Rule: {item.rule}
                      </div>
                    </div>
                    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${statusClass(item.state)}`}>
                      {item.state}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
                  Risk Warnings
                </div>
                <div className="mt-3 space-y-3">
                  {riskWarnings.map((item) => (
                    <div key={item} className="text-sm leading-6 text-slate-200">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
                  Protection Layers
                </div>
                <div className="mt-3 space-y-3">
                  {protectionLayers.map((item) => (
                    <div key={item} className="text-sm leading-6 text-slate-200">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
                  Forward Risk Feed
                </div>
                <div className="mt-3 space-y-3">
                  {forwardRiskFeed.map((item) => (
                    <div key={item} className="text-sm leading-6 text-slate-200">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6">
            <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
              Risk State Dial
            </div>
            <div className="mt-6 flex items-center justify-center">
              <div className="relative flex h-56 w-56 items-center justify-center rounded-full border-[14px] border-amber-400/30">
                <div className="absolute inset-3 rounded-full border border-white/10 bg-black/20" />
                <div className="relative z-10 text-center">
                  <div className="text-xs uppercase tracking-[0.22em] text-slate-400">
                    Current
                  </div>
                  <div className="mt-2 text-4xl font-semibold text-amber-300">
                    2.8
                  </div>
                  <div className="mt-1 text-sm text-slate-400">Controlled Risk</div>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Soft Alert Zone</span>
                <span className="font-semibold text-amber-300">4.0+</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Hard Risk Cut</span>
                <span className="font-semibold text-rose-300">6.5+</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Auto Compression</span>
                <span className="font-semibold text-cyan-300">Enabled</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}