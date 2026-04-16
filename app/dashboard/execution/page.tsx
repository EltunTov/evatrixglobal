const readinessSteps = [
  {
    title: "Exchange connection",
    desc: "Bybit / Binance API link and handshake state",
    state: "Pending",
  },
  {
    title: "Capital routing",
    desc: "Execution wallet and capital allocation visibility",
    state: "Ready",
  },
  {
    title: "Risk rules loaded",
    desc: "Position caps, loss-streak logic, and safety overrides",
    state: "Ready",
  },
  {
    title: "Execution engine",
    desc: "Order path, trigger logic, and promotion flow",
    state: "Standby",
  },
  {
    title: "News veto layer",
    desc: "Catalyst-sensitive blocking and event compression",
    state: "Planned",
  },
];

const executionChecks = [
  { name: "API Health", value: "Offline", tone: "rose" },
  { name: "Order Permissions", value: "Unchecked", tone: "amber" },
  { name: "Reduce-Only Safety", value: "Planned", tone: "cyan" },
  { name: "Position Sync", value: "Waiting", tone: "amber" },
];

const workflow = [
  "Scanner promotes only high-quality candidates.",
  "Watchlist keeps pre-signal names under structured monitoring.",
  "Signals confirm setup state before execution path opens.",
  "Execution only proceeds when readiness and risk layers are both green.",
];

const readinessPolicy = [
  "No execution should occur with partial API confidence.",
  "Readiness is operational, not cosmetic.",
  "Capital connection without rule enforcement is not true readiness.",
];

function stateClass(state: string) {
  if (state === "Ready") return "text-emerald-300 bg-emerald-500/10 border border-emerald-400/20";
  if (state === "Standby" || state === "Pending") return "text-amber-300 bg-amber-500/10 border border-amber-400/20";
  if (state === "Planned") return "text-cyan-300 bg-cyan-500/10 border border-cyan-400/20";
  return "text-slate-300 bg-white/5 border border-white/10";
}

function toneClass2(tone: string) {
  if (tone === "rose") return "text-rose-300";
  if (tone === "amber") return "text-amber-300";
  if (tone === "cyan") return "text-cyan-300";
  if (tone === "emerald") return "text-emerald-300";
  return "text-white";
}

export default function ExecutionPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#0b1220,#0a0f1a)] text-white">
      <div className="mx-auto w-full max-w-[1650px] px-6 py-6 xl:px-8">
        <div className="mb-6 rounded-[30px] border border-white/10 bg-white/[0.04] p-6">
          <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-200/70">
            Operational Readiness Layer
          </div>
          <h1 className="text-[28px] font-semibold tracking-tight">
            Execution Readiness
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">
            Operational checklist, API confidence, capital routing, and final
            execution gating before live trade deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1.15fr)_420px]">
          <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                  Readiness Path
                </div>
                <div className="mt-2 text-lg font-semibold text-white">
                  Sequential go-live preparation
                </div>
              </div>
              <div className="text-sm text-slate-400">Checklist view</div>
            </div>

            <div className="space-y-4">
              {readinessSteps.map((step, idx) => (
                <div
                  key={step.title}
                  className="relative rounded-2xl border border-white/10 bg-black/20 p-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-slate-200">
                      {idx + 1}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                          <div className="font-medium text-white">{step.title}</div>
                          <div className="mt-1 text-sm text-slate-400">{step.desc}</div>
                        </div>

                        <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${stateClass(step.state)}`}>
                          {step.state}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
                  Execution Workflow
                </div>
                <div className="mt-3 space-y-3">
                  {workflow.map((item) => (
                    <div key={item} className="text-sm leading-6 text-slate-200">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
                  Readiness Policy
                </div>
                <div className="mt-3 space-y-3">
                  {readinessPolicy.map((item) => (
                    <div key={item} className="text-sm leading-6 text-slate-200">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                Readiness Snapshot
              </div>
              <div className="mt-5 grid grid-cols-2 gap-4">
                {executionChecks.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <div className="text-[10px] uppercase tracking-[0.22em] text-slate-500">
                      {item.name}
                    </div>
                    <div className={`mt-3 text-lg font-semibold ${toneClass2(item.tone)}`}>
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                Go / No-Go State
              </div>
              <div className="mt-5 rounded-3xl border border-amber-400/20 bg-amber-500/10 p-5 text-center">
                <div className="text-xs uppercase tracking-[0.22em] text-amber-200/80">
                  Current Status
                </div>
                <div className="mt-3 text-3xl font-semibold text-amber-300">
                  STANDBY
                </div>
                <div className="mt-2 text-sm text-slate-300">
                  Core architecture prepared, exchange execution path not fully live yet.
                </div>
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                Integration Outlook
              </div>
              <div className="mt-4 space-y-4 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Bybit Execution</span>
                  <span className="font-semibold text-cyan-300">Planned</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Binance Support</span>
                  <span className="font-semibold text-cyan-300">Planned</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Auto Risk Gates</span>
                  <span className="font-semibold text-emerald-300">Ready</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Live Order Sync</span>
                  <span className="font-semibold text-amber-300">Pending</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}