const plans = [
  {
    id: "starter",
    name: "Starter Access",
    price: "25",
    period: "/ 1 month",
    note: "Best for first access and initial platform onboarding.",
    badge: "Entry",
    recommended: false,
  },
  {
    id: "pro",
    name: "Quarterly Pro",
    price: "69",
    period: "/ 3 months",
    note: "Balanced plan for active users with better cost efficiency.",
    badge: "Best Value",
    recommended: true,
  },
  {
    id: "elite",
    name: "Elite Half-Year",
    price: "119",
    period: "/ 6 months",
    note: "Extended access for committed operators and lower renewal friction.",
    badge: "Premium",
    recommended: false,
  },
];

const networks = [
  {
    id: "trc20",
    icon: "🟢",
    name: "TRC20",
    desc: "Fast confirmation, low fee routing",
    address: "TANWFszT46UaLZCa75dAuWbuCkEXAMPLE01",
    recommended: true,
  },
  {
    id: "bep20",
    icon: "🟡",
    name: "BEP20",
    desc: "Alternative chain with broad wallet support",
    address: "0xBEP20ExampleWalletAddress0000000002",
    recommended: false,
  },
  {
    id: "erc20",
    icon: "🔵",
    name: "ERC20",
    desc: "Ethereum settlement with higher network fees",
    address: "0xERC20ExampleWalletAddress0000000003",
    recommended: false,
  },
];

const subscriptionState = {
  currentPlan: "Starter Access",
  status: "Awaiting Payment",
  startDate: "—",
  expiryDate: "—",
  daysLeft: "—",
};

const paymentHistory = [
  {
    date: "16 Apr 2026",
    plan: "Starter Access",
    amount: "25 USDT",
    network: "TRC20",
    status: "Pending",
  },
  {
    date: "—",
    plan: "—",
    amount: "—",
    network: "—",
    status: "No history",
  },
];

function planCardClass(recommended: boolean) {
  return recommended
    ? "border-cyan-400/30 bg-cyan-500/10 shadow-[0_0_0_1px_rgba(34,211,238,0.12)]"
    : "border-white/10 bg-white/[0.04]";
}

function badgeClass(label: string) {
  if (label === "Best Value") {
    return "text-cyan-300 bg-cyan-500/10 border border-cyan-400/20";
  }
  if (label === "Premium") {
    return "text-emerald-300 bg-emerald-500/10 border border-emerald-400/20";
  }
  return "text-slate-300 bg-white/5 border border-white/10";
}

function statusClass(status: string) {
  if (status === "Confirmed" || status === "Activated") {
    return "text-emerald-300 bg-emerald-500/10 border border-emerald-400/20";
  }
  if (status === "Pending" || status === "Awaiting Payment" || status === "Verifying") {
    return "text-amber-300 bg-amber-500/10 border border-amber-400/20";
  }
  if (status === "No history") {
    return "text-slate-300 bg-white/5 border border-white/10";
  }
  return "text-slate-300 bg-white/5 border border-white/10";
}

function networkCardClass(recommended: boolean) {
  return recommended
    ? "border-cyan-400/25 bg-cyan-500/10"
    : "border-white/10 bg-black/20";
}

export default function BillingPage() {
  const selectedPlan = plans[1];
  const selectedNetwork = networks[0];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.08),_transparent_28%),linear-gradient(180deg,_#0b1220_0%,_#0a0f1a_100%)] text-white">
      <div className="mx-auto w-full max-w-[1720px] px-6 py-6 xl:px-8">
        <div className="mb-6 rounded-[32px] border border-white/10 bg-white/[0.04] p-6">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
            <div>
              <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-200/70">
                Crypto Billing Terminal
              </div>
              <h1 className="text-[28px] font-semibold tracking-tight text-white">
                Billing
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
                Subscription control, crypto payment routing, verification flow,
                and account activation status for Evatrix members.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-200">
                Crypto Only
              </span>
              <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300">
                Manual Verification
              </span>
              <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300">
                Global Launch Mode
              </span>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
            Select Plan
          </div>

          <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-[28px] border p-5 transition ${planCardClass(plan.recommended)}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                      {plan.name}
                    </div>
                    <div className="mt-4 flex items-end gap-2">
                      <span className="text-5xl font-semibold tracking-tight text-white">
                        {plan.price}
                      </span>
                      <span className="pb-2 text-base text-slate-300">
                        USDT {plan.period}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${badgeClass(
                      plan.badge
                    )}`}
                  >
                    {plan.badge}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-300">{plan.note}</p>

                <div className="mt-5">
                  <button
                    className={`w-full rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                      plan.recommended
                        ? "border border-cyan-400/20 bg-cyan-500/15 text-cyan-100"
                        : "border border-white/10 bg-black/20 text-slate-200"
                    }`}
                  >
                    {plan.recommended ? "Selected Plan" : "Select Plan"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1.15fr)_420px]">
          <div className="space-y-6">
            <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                    Payment Terminal
                  </div>
                  <div className="mt-2 text-lg font-semibold text-white">
                    Currency, network, and transfer route
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-slate-500">
                    Currency
                  </div>
                  <div className="mt-2 text-sm font-semibold text-white">
                    USDT (Tether)
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
                <div>
                  <div className="mb-3 text-sm font-medium text-slate-300">
                    Select Network
                  </div>

                  <div className="space-y-3">
                    {networks.map((network) => (
                      <div
                        key={network.id}
                        className={`rounded-2xl border p-4 transition ${networkCardClass(
                          network.recommended
                        )}`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-3">
                            <div className="mt-0.5 text-lg">{network.icon}</div>
                            <div>
                              <div className="flex items-center gap-2">
                                <div className="font-semibold text-white">
                                  {network.name}
                                </div>
                                {network.recommended && (
                                  <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-300">
                                    Recommended
                                  </span>
                                )}
                              </div>
                              <div className="mt-1 text-sm text-slate-400">
                                {network.desc}
                              </div>
                            </div>
                          </div>

                          <div
                            className={`mt-1 h-4 w-4 rounded-full border ${
                              network.recommended
                                ? "border-cyan-300 bg-cyan-300"
                                : "border-white/20 bg-transparent"
                            }`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[28px] border border-white/10 bg-black/20 p-5">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.22em] text-slate-500">
                        Amount to Pay
                      </div>
                      <div className="mt-2 text-3xl font-semibold text-white">
                        {selectedPlan.price}.00 USDT
                      </div>
                      <div className="mt-1 text-sm text-slate-400">
                        {selectedNetwork.name} network
                      </div>
                    </div>

                    <div>
                      <div className="text-[10px] uppercase tracking-[0.22em] text-slate-500">
                        Wallet Address
                      </div>
                      <div className="mt-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-200 break-all">
                        {selectedNetwork.address}
                      </div>
                      <button className="mt-3 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-200">
                        Copy Address
                      </button>
                    </div>

                    <div className="rounded-2xl border border-amber-400/20 bg-amber-500/10 px-4 py-3 text-sm leading-6 text-amber-100">
                      Sending over the wrong network can result in permanent loss of funds.
                      Use the exact network selected above.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                    Payment Verification
                  </div>
                  <div className="mt-2 text-lg font-semibold text-white">
                    Submit transfer proof for activation
                  </div>
                </div>
                <span className="inline-flex rounded-full border border-amber-400/20 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-300">
                  Manual Review
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_220px_220px]">
                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.22em] text-slate-500">
                    Transaction Hash (TXID)
                  </label>
                  <input
                    className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm text-slate-200 outline-none placeholder:text-slate-500"
                    placeholder="Paste the transaction hash here..."
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.22em] text-slate-500">
                    Amount
                  </label>
                  <input
                    className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm text-slate-200 outline-none placeholder:text-slate-500"
                    placeholder="25.00"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.22em] text-slate-500">
                    Selected Plan
                  </label>
                  <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm font-medium text-white">
                    {selectedPlan.name}
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <button className="rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90">
                  Proceed to Verification
                </button>
                <button className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200">
                  Monitor Blockchain
                </button>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6">
              <div className="mb-4">
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                  Payment History
                </div>
                <div className="mt-2 text-lg font-semibold text-white">
                  Verification and billing records
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-[760px] w-full">
                  <thead>
                    <tr className="border-b border-white/10 text-left">
                      {["Date", "Plan", "Amount", "Network", "Status"].map((head) => (
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
                    {paymentHistory.map((row, idx) => (
                      <tr
                        key={`${row.date}-${idx}`}
                        className="border-b border-white/5"
                      >
                        <td className="px-4 py-4 text-sm text-slate-300">{row.date}</td>
                        <td className="px-4 py-4 text-sm text-slate-200">{row.plan}</td>
                        <td className="px-4 py-4 text-sm text-slate-200">{row.amount}</td>
                        <td className="px-4 py-4 text-sm text-slate-300">{row.network}</td>
                        <td className="px-4 py-4">
                          <span
                            className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${statusClass(
                              row.status
                            )}`}
                          >
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                Subscription State
              </div>
              <div className="mt-5 rounded-[28px] border border-white/10 bg-black/20 p-5">
                <div className="text-sm text-slate-400">Current Plan</div>
                <div className="mt-2 text-2xl font-semibold text-white">
                  {subscriptionState.currentPlan}
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-slate-400">Status</span>
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${statusClass(
                      subscriptionState.status
                    )}`}
                  >
                    {subscriptionState.status}
                  </span>
                </div>

                <div className="mt-5 space-y-4 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Start Date</span>
                    <span className="text-slate-200">{subscriptionState.startDate}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Expiry Date</span>
                    <span className="text-slate-200">{subscriptionState.expiryDate}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Days Left</span>
                    <span className="text-slate-200">{subscriptionState.daysLeft}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                Billing Logic
              </div>
              <div className="mt-4 space-y-3 text-sm text-slate-300">
                <p className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                  One selected network should map to one exact payment address.
                </p>
                <p className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                  Users submit TXID after payment and access is activated after verification.
                </p>
                <p className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                  This page should feel operational and trustworthy, not improvised.
                </p>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                Forward Integration
              </div>
              <div className="mt-4 space-y-4 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Unique Address Routing</span>
                  <span className="font-semibold text-cyan-300">Planned</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Auto TX Detection</span>
                  <span className="font-semibold text-cyan-300">Planned</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Instant Activation</span>
                  <span className="font-semibold text-amber-300">Pending</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Card Billing</span>
                  <span className="font-semibold text-slate-200">Later Phase</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}