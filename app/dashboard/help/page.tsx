"use client";

import { useState } from "react";

const categories = [
  "Getting Started",
  "Billing",
  "Exchange Connection",
  "Live Signals",
  "Trade History",
  "Watchlist",
  "Market Pulse",
  "News & Catalysts",
  "Symbol Scanner",
  "Strategy Intel",
  "Risk & Execution",
  "Account & Security",
];

const faqItems = [
  {
    category: "Getting Started",
    question: "What should I do first after getting access?",
    answer:
      "Start with Profile and Billing, then review Watchlist, Market Pulse, and Live Signals. The recommended flow is: account setup → exchange connection → watchlist review → signal monitoring → execution readiness.",
  },
  {
    category: "Billing",
    question: "How do crypto payments work inside Evatrix?",
    answer:
      "Choose a plan, select the correct network, copy the payment address, send the exact amount, then submit your transaction hash (TXID). Access is activated after payment verification.",
  },
  {
    category: "Billing",
    question: "What happens if I send funds on the wrong network?",
    answer:
      "Payments sent on the wrong network may be permanently lost. Always confirm the selected network before sending. Use the exact address shown for the selected chain.",
  },
  {
    category: "Exchange Connection",
    question: "How do I connect my exchange account?",
    answer:
      "Go to Profile and use the exchange connection area. When live integration is active, you will connect Bybit or Binance with API credentials. Only masked status, permissions, and health should appear inside the dashboard.",
  },
  {
    category: "Exchange Connection",
    question: "Will my API secret be visible in the dashboard?",
    answer:
      "No. Secrets should never be displayed in full. Only connection health, permission scope, and exchange status should be visible.",
  },
  {
    category: "Live Signals",
    question: "What does the Live Signals page show?",
    answer:
      "Live Signals shows active setup flow, execution context, current signal state, and readiness visibility. It is the main terminal for signal monitoring, not the place where symbols are discovered for the first time.",
  },
  {
    category: "Trade History",
    question: "What is Trade History used for?",
    answer:
      "Trade History is for closed trade review, realized outcomes, execution audit, and historical evaluation. It helps users understand what already happened, not what may happen next.",
  },
  {
    category: "Watchlist",
    question: "How is Watchlist different from Live Signals?",
    answer:
      "Watchlist is the pre-signal observation layer. It contains strong candidates under monitoring before they become active signal opportunities.",
  },
  {
    category: "Market Pulse",
    question: "What is Market Pulse for?",
    answer:
      "Market Pulse shows market regime, breadth, volatility state, and directional context. It helps users understand whether the environment supports continuation, caution, or defensive behavior.",
  },
  {
    category: "News & Catalysts",
    question: "What does News & Catalysts track?",
    answer:
      "This page tracks macro windows, exchange headlines, sector catalysts, and event-sensitive news that may affect market behavior or signal quality.",
  },
  {
    category: "Symbol Scanner",
    question: "What does Symbol Scanner actually do?",
    answer:
      "Scanner is the ranked discovery layer. It screens the market universe, ranks symbols by quality and setup alignment, and promotes strong names toward Watchlist and later toward Signals.",
  },
  {
    category: "Strategy Intel",
    question: "Does Strategy Intel reveal the full strategy logic?",
    answer:
      "No. Strategy Intel is a transparency layer, not a source-code exposure layer. It explains setup families, market fit, and contribution without exposing proprietary execution logic.",
  },
  {
    category: "Risk & Execution",
    question: "What is the difference between Risk Monitor and Execution Readiness?",
    answer:
      "Risk Monitor shows exposure, drawdown pressure, concentration, and protection checks. Execution Readiness shows whether the system is operationally ready to trade, including connection, policy, and go/no-go state.",
  },
  {
    category: "Account & Security",
    question: "What can I manage from Profile?",
    answer:
      "Profile should show member identity, plan tier, security controls, connected exchanges, portfolio summary, and weekly account-level performance once integrations are live.",
  },
  {
    category: "Account & Security",
    question: "I forgot my password. What should I do?",
    answer:
      "Go to Profile, use the Recovery or Reset action, and follow the recovery flow. If the issue continues, submit a support request from the Help Center form below.",
  },
];

function groupByCategory() {
  return categories.map((category) => ({
    category,
    items: faqItems.filter((item) => item.category === category),
  }));
}

export default function HelpPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const grouped = groupByCategory();

  let runningIndex = -1;

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.08),_transparent_28%),linear-gradient(180deg,_#0b1220_0%,_#0a0f1a_100%)] text-white">
      <div className="mx-auto w-full max-w-[1720px] px-6 py-6 xl:px-8">
        <div className="mb-6 rounded-[32px] border border-white/10 bg-white/[0.04] p-6">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
            <div>
              <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-200/70">
                Support & Guidance Center
              </div>
              <h1 className="text-[28px] font-semibold tracking-tight text-white">
                Help Center
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
                Find step-by-step answers for billing, exchange setup, signals,
                watchlists, strategy visibility, risk controls, and account
                management.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                <div className="text-[10px] uppercase tracking-[0.22em] text-slate-500">
                  Knowledge Base
                </div>
                <div className="mt-2 text-sm font-semibold text-cyan-300">
                  Active
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                <div className="text-[10px] uppercase tracking-[0.22em] text-slate-500">
                  FAQ Coverage
                </div>
                <div className="mt-2 text-sm font-semibold text-white">
                  Core Dashboard
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                <div className="text-[10px] uppercase tracking-[0.22em] text-slate-500">
                  Support Mode
                </div>
                <div className="mt-2 text-sm font-semibold text-amber-300">
                  Manual Review
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                <div className="text-[10px] uppercase tracking-[0.22em] text-slate-500">
                  Contact Path
                </div>
                <div className="mt-2 text-sm font-semibold text-white">
                  Telegram Form
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[280px_minmax(0,1fr)_360px]">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5">
            <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
              Help Topics
            </div>
            <div className="mt-4 space-y-2">
              {categories.map((category) => (
                <div
                  key={category}
                  className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-200"
                >
                  {category}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {grouped.map((group) => {
              if (!group.items.length) return null;

              return (
                <div
                  key={group.category}
                  className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5"
                >
                  <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                    {group.category}
                  </div>

                  <div className="space-y-3">
                    {group.items.map((item) => {
                      runningIndex += 1;
                      const idx = runningIndex;
                      const isOpen = openIndex === idx;

                      return (
                        <div
                          key={item.question}
                          className="rounded-2xl border border-white/10 bg-black/20"
                        >
                          <button
                            type="button"
                            onClick={() => setOpenIndex(isOpen ? null : idx)}
                            className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left"
                          >
                            <span className="text-sm font-medium text-white">
                              {item.question}
                            </span>
                            <span className="text-slate-400">
                              {isOpen ? "−" : "+"}
                            </span>
                          </button>

                          {isOpen && (
                            <div className="border-t border-white/10 px-4 py-4 text-sm leading-6 text-slate-300">
                              {item.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="space-y-6">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                Still Need Help?
              </div>
              <div className="mt-2 text-lg font-semibold text-white">
                Send a support request
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                If you cannot find the answer above, send your issue with enough
                detail and we can reply manually until the automated support
                layer is live.
              </p>

              <div className="mt-5 space-y-4">
                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.22em] text-slate-500">
                    Telegram Username
                  </label>
                  <input
                    className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm text-slate-200 outline-none placeholder:text-slate-500"
                    placeholder="@yourhandle"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.22em] text-slate-500">
                    Topic
                  </label>
                  <input
                    className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm text-slate-200 outline-none placeholder:text-slate-500"
                    placeholder="Billing, signals, exchange connection..."
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.22em] text-slate-500">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm text-slate-200 outline-none placeholder:text-slate-500"
                    placeholder="Describe the issue clearly. Include what page you were on, what you expected, and what happened."
                  />
                </div>

                <button className="w-full rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90">
                  Submit Support Request
                </button>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                Help Center Policy
              </div>
              <div className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                <p className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                  Help content should explain system usage clearly without exposing protected logic.
                </p>
                <p className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                  Every major dashboard block should have at least one guided explanation here.
                </p>
                <p className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                  If a user cannot solve the issue from FAQ, manual support should remain available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}