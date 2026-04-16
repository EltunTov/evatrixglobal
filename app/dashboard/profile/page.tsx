const member = {
  initials: "ET",
  name: "Eltun T.",
  email: "eltun@evatrixglobal.com",
  memberId: "EVX-2048-7719",
  joinedAt: "16 Apr 2026",
  plan: "Pro Auto",
  status: "Active",
  region: "Global",
  workspace: "Crypto Global",
  language: "English",
};

const portfolioStats = [
  {
    label: "Portfolio Value",
    value: "$24,840",
    sub: "Across connected exchanges",
    tone: "white",
  },
  {
    label: "7D PnL",
    value: "+$1,284",
    sub: "+5.45% over last 7 days",
    tone: "emerald",
  },
  {
    label: "Active Exchanges",
    value: "2",
    sub: "1 live, 1 pending",
    tone: "cyan",
  },
  {
    label: "Live Positions",
    value: "3",
    sub: "2 long · 1 short",
    tone: "amber",
  },
];

const securityControls = [
  {
    title: "Password",
    value: "••••••••••••",
    hint: "Last updated 21 days ago",
    action: "Update",
    tone: "white",
  },
  {
    title: "2FA",
    value: "Enabled",
    hint: "Authenticator protected",
    action: "Manage",
    tone: "emerald",
  },
  {
    title: "Recovery",
    value: "Ready",
    hint: "Password reset available",
    action: "Reset",
    tone: "cyan",
  },
  {
    title: "Session Trust",
    value: "Verified",
    hint: "Primary device recognized",
    action: "Review",
    tone: "emerald",
  },
];

const exchanges = [
  {
    name: "Bybit",
    role: "Primary",
    apiState: "Connected",
    permissions: "Trade + Read",
    environment: "Mainnet",
    health: "Healthy",
    balance: "$18,420",
    weeklyPnl: "+$924",
    positions: "2 active",
  },
  {
    name: "Binance",
    role: "Secondary",
    apiState: "Connected",
    permissions: "Read Only",
    environment: "Mainnet",
    health: "Healthy",
    balance: "$6,420",
    weeklyPnl: "+$360",
    positions: "1 active",
  },
];

const accountMeta = [
  { label: "Plan Tier", value: "Pro Auto" },
  { label: "Access Layer", value: "Execution Enabled" },
  { label: "Workspace", value: "Crypto Global" },
  { label: "Language", value: "English" },
];

const accountNotes = [
  "Connected exchange balances and weekly PnL should be visible here once live feeds are active.",
  "API secrets must remain masked, while permissions and connection health stay visible.",
  "Profile should feel like an account command center, not a simple settings page.",
];

const supportControls = [
  "Forgot password and reset flow should always be accessible here.",
  "Exchange reconnect, API refresh, and permissions review should stay one click away.",
  "Billing, support, and membership controls should remain centralized around this account hub.",
];

function toneClass(tone: string) {
  if (tone === "emerald") return "text-emerald-300";
  if (tone === "cyan") return "text-cyan-300";
  if (tone === "amber") return "text-amber-300";
  return "text-white";
}

function pillClass(value: string) {
  if (value === "Connected" || value === "Healthy" || value === "Active") {
    return "text-emerald-300 bg-emerald-500/10 border border-emerald-400/20";
  }
  if (value === "Pending" || value === "Waiting") {
    return "text-amber-300 bg-amber-500/10 border border-amber-400/20";
  }
  if (value === "Read Only") {
    return "text-cyan-300 bg-cyan-500/10 border border-cyan-400/20";
  }
  return "text-slate-300 bg-white/5 border border-white/10";
}

function pnlClass(value: string) {
  return value.trim().startsWith("-") ? "text-rose-300" : "text-emerald-300";
}

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.08),_transparent_28%),linear-gradient(180deg,_#0b1220_0%,_#0a0f1a_100%)] text-white">
      <div className="mx-auto w-full max-w-[1720px] px-6 py-6 xl:px-8">
        <div className="mb-6 rounded-[32px] border border-white/10 bg-white/[0.04] p-6">
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-[360px_minmax(0,1fr)]">
            <div className="rounded-[28px] border border-white/10 bg-black/20 p-5">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-500/10 text-2xl font-semibold text-cyan-300">
                  {member.initials}
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.26em] text-sky-200/70">
                    Member Identity
                  </div>
                  <div className="mt-2 text-2xl font-semibold">{member.name}</div>
                </div>
              </div>

              <div className="mt-5 text-sm text-slate-300">{member.email}</div>

              <div className="mt-5 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Member ID</span>
                  <span className="font-medium text-slate-200">{member.memberId}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Joined</span>
                  <span className="font-medium text-slate-200">{member.joinedAt}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Plan</span>
                  <span className="font-medium text-cyan-300">{member.plan}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Status</span>
                  <span className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                    {member.status}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
              {portfolioStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[28px] border border-white/10 bg-black/20 p-5"
                >
                  <div className="text-[10px] uppercase tracking-[0.22em] text-slate-500">
                    {item.label}
                  </div>
                  <div className={`mt-3 text-[30px] font-semibold tracking-tight ${toneClass(item.tone)}`}>
                    {item.value}
                  </div>
                  <div className="mt-2 text-sm text-slate-400">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[300px_minmax(0,1fr)_360px]">
          <div className="space-y-6">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                Account Attributes
              </div>
              <div className="mt-4 grid grid-cols-1 gap-3">
                {accountMeta.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4"
                  >
                    <div className="text-[10px] uppercase tracking-[0.22em] text-slate-500">
                      {item.label}
                    </div>
                    <div className="mt-2 text-sm font-medium text-white">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                Account Notes
              </div>
              <div className="mt-4 space-y-3">
                {accountNotes.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm leading-6 text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                    Security & Access
                  </div>
                  <div className="mt-2 text-lg font-semibold text-white">
                    Account protection and recovery controls
                  </div>
                </div>
              </div>

              <div className="mt-5 space-y-4">
                {securityControls.map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-black/20 p-4 lg:flex-row lg:items-center lg:justify-between"
                  >
                    <div>
                      <div className="font-medium text-white">{item.title}</div>
                      <div className={`mt-2 text-lg font-semibold ${toneClass(item.tone)}`}>
                        {item.value}
                      </div>
                      <div className="mt-1 text-sm text-slate-400">{item.hint}</div>
                    </div>

                    <button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-400/20 hover:text-white">
                      {item.action}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                Support Controls
              </div>
              <div className="mt-4 grid grid-cols-1 gap-3 lg:grid-cols-3">
                {supportControls.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm leading-6 text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                Exchange Connections
              </div>
              <div className="mt-5 space-y-4">
                {exchanges.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-medium text-white">{item.name}</div>
                      <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${pillClass(item.apiState)}`}>
                        {item.apiState}
                      </span>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <div className="text-slate-500">Mode</div>
                        <div className="mt-1 text-slate-200">{item.role}</div>
                      </div>
                      <div>
                        <div className="text-slate-500">Permissions</div>
                        <div className="mt-1 text-slate-200">{item.permissions}</div>
                      </div>
                      <div>
                        <div className="text-slate-500">Environment</div>
                        <div className="mt-1 text-slate-200">{item.environment}</div>
                      </div>
                      <div>
                        <div className="text-slate-500">Health</div>
                        <div className="mt-1 text-emerald-300">{item.health}</div>
                      </div>
                      <div>
                        <div className="text-slate-500">Balance</div>
                        <div className="mt-1 text-white">{item.balance}</div>
                      </div>
                      <div>
                        <div className="text-slate-500">7D PnL</div>
                        <div className={`mt-1 ${pnlClass(item.weeklyPnl)}`}>{item.weeklyPnl}</div>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-sm text-slate-400">{item.positions}</div>
                      <div className="flex gap-2">
                        <button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200">
                          Manage
                        </button>
                        <button className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-200">
                          Refresh
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                Security Policy
              </div>
              <div className="mt-4 space-y-3 text-sm text-slate-300">
                <p className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                  API secrets should never be displayed in full; only masked state and permissions should be visible.
                </p>
                <p className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                  Connection health, portfolio value, and weekly performance should be readable without exposing sensitive material.
                </p>
                <p className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                  Profile should operate as the client’s account command center.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}