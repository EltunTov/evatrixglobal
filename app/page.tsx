"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { siteConfig } from "./config";

type Market = "crypto" | "forex";
type Lang = "EN" | "TR" | "RU" | "DE" | "ES";

const terminalStats = [
  { label: "Signal Grade", value: "A", sub: "High-conviction visibility" },
  { label: "Access Layer", value: "Pro", sub: "Premium crypto-side depth" },
  { label: "Status", value: "Live", sub: "Crypto launch side active" },
];

const featurePills = [
  "Crypto-first launch",
  "Execution-first visibility",
  "Global access structure",
  "Future-ready API path",
];

const memberBenefits = [
  "Structured signal presentation",
  "Execution-first workflow",
  "Premium visual environment",
  "Live performance review",
  "Scanner and watchlist layer",
  "Future exchange connection path",
];

const stepFlow = [
  {
    step: "01",
    title: "Choose Access",
    desc: "Start with controlled crypto access through the active launch layer.",
  },
  {
    step: "02",
    title: "Monitor with Structure",
    desc: "Track live setups, watchlists, market pulse, and risk visibility from one environment.",
  },
  {
    step: "03",
    title: "Trade with Clarity",
    desc: "Use stronger setup visibility and performance context to operate with more discipline.",
  },
];

export default function HomePage() {
  const [selectedMarket, setSelectedMarket] = useState<Market>("crypto");
  const [selectedLang, setSelectedLang] = useState<Lang>("EN");
  const [langOpen, setLangOpen] = useState(false);

  const languages = useMemo<Lang[]>(() => ["EN", "TR", "RU", "DE", "ES"], []);

  function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="relative min-h-screen">
        <LandingBackground />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 py-8">
          <header className="evx-landing-header">
            <div className="flex items-center gap-4">
              <EvatrixBrandMark />

              <div>
                <p className="text-[11px] uppercase tracking-[0.34em] text-white/45">
                  {siteConfig.title}
                </p>
                <h1 className="mt-1 text-[30px] font-semibold tracking-tight md:text-[36px]">
                  {siteConfig.name}
                </h1>
              </div>
            </div>

            <nav className="hidden items-center gap-3 xl:flex">
              {[
                ["Features", "features"],
                ["Showcase", "showcase"],
                ["Pricing", "pricing"],
                ["How It Works", "how-it-works"],
                ["Help", "help-strip"],
              ].map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/78 transition hover:border-cyan-400/30 hover:text-white"
                >
                  {label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <div className="relative">
                <button
                  onClick={() => setLangOpen((v) => !v)}
                  className="rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-sm text-white/90 transition hover:border-cyan-400/35 hover:bg-white/[0.08]"
                >
                  {selectedLang}
                </button>

                {langOpen && (
                  <div className="absolute right-0 top-14 z-30 min-w-[110px] rounded-2xl border border-white/10 bg-[#0a1023]/95 p-2 shadow-[0_0_40px_rgba(0,0,0,0.35)] backdrop-blur">
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setSelectedLang(lang);
                          setLangOpen(false);
                        }}
                        className={`block w-full rounded-xl px-3 py-2 text-left text-sm transition ${
                          selectedLang === lang
                            ? "bg-cyan-400/10 text-cyan-300"
                            : "text-white/75 hover:bg-white/5"
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/login"
                className="rounded-2xl border border-white/12 bg-white/5 px-5 py-3 text-sm text-white/90 transition hover:border-cyan-400/35 hover:bg-white/[0.08]"
              >
                Member Login
              </Link>
            </div>
          </header>

          <section className="grid items-center gap-10 py-10 lg:grid-cols-[0.92fr_1.08fr] lg:py-14">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.38em] text-cyan-400">
                {siteConfig.hero.kicker}
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-[1.01] tracking-tight md:text-7xl">
                {siteConfig.hero.title}
              </h2>

              <p className="mt-7 max-w-xl text-base leading-7 text-white/66 md:text-lg">
                {siteConfig.hero.subtitle}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {featurePills.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/72"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    setSelectedMarket("crypto");
                    scrollToSection("pricing");
                  }}
                  className="rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
                >
                  {siteConfig.hero.primaryCta}
                </button>

                <button
                  onClick={() => scrollToSection("showcase")}
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm text-white/90 transition hover:bg-white/[0.08]"
                >
                  {siteConfig.hero.secondaryCta}
                </button>
              </div>
            </div>

            <div className="relative">
              <HeroTerminal />
            </div>
          </section>

          <section className="mt-2 grid gap-6 md:grid-cols-2">
            <button
              onClick={() => {
                setSelectedMarket("crypto");
                scrollToSection("pricing");
              }}
              className={`relative overflow-hidden rounded-[32px] border p-8 text-left transition ${
                selectedMarket === "crypto"
                  ? "border-cyan-400/45 bg-cyan-400/[0.08] shadow-[0_0_80px_rgba(34,211,238,0.10)]"
                  : "border-white/10 bg-white/[0.04] hover:border-cyan-400/28 hover:bg-white/[0.06]"
              }`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_28%)]" />
              <div className="relative">
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-400">
                  Active market
                </p>
                <div className="mt-4 flex items-center justify-between gap-4">
                  <h3 className="text-3xl font-semibold">Crypto</h3>
                  <span className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-cyan-300">
                    Live
                  </span>
                </div>
                <p className="mt-5 max-w-xl text-sm leading-6 text-white/66">
                  Enter the active launch side and move directly into a cleaner
                  signal environment, structured pricing, and performance-led access.
                </p>
              </div>
            </button>

            <button
              onClick={() => setSelectedMarket("forex")}
              className={`relative overflow-hidden rounded-[32px] border p-8 text-left transition ${
                selectedMarket === "forex"
                  ? "border-white/20 bg-white/[0.06]"
                  : "border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.06]"
              }`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_30%)]" />
              <div className="relative">
                <p className="text-xs uppercase tracking-[0.35em] text-white/40">
                  Reserved market
                </p>
                <div className="mt-4 flex items-center justify-between gap-4">
                  <h3 className="text-3xl font-semibold">Forex</h3>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/45">
                    Closed
                  </span>
                </div>
                <p className="mt-5 max-w-xl text-sm leading-6 text-white/60">
                  Visible but intentionally closed. The forex layer will open
                  later through its own isolated rollout.
                </p>
              </div>
            </button>
          </section>

          <section id="pricing" className="mt-12 rounded-[34px] border border-white/10 bg-white/[0.04] p-6 md:p-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-400">
                  Crypto access pricing
                </p>
                <h3 className="mt-4 text-3xl font-semibold md:text-5xl">
                  Structured entry, clear duration, serious access.
                </h3>
                <p className="mt-4 max-w-3xl text-sm leading-6 text-white/62 md:text-base">
                  Start with a controlled launch tier and expand only when needed.
                  Pricing is crypto-first for the launch phase and built for clean onboarding.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/72">
                Launch phase: crypto billing only
              </div>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {siteConfig.pricing.map((plan) => (
                <div
                  key={plan.id}
                  className={`rounded-[28px] border p-6 ${
                    plan.featured
                      ? "border-cyan-400/30 bg-cyan-400/[0.08] shadow-[0_0_50px_rgba(34,211,238,0.08)]"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.34em] text-white/45">
                        {plan.label}
                      </p>
                      <h4 className="mt-3 text-2xl font-semibold">{plan.duration}</h4>
                    </div>

                    {plan.save && (
                      <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-cyan-300">
                        {plan.save}
                      </span>
                    )}
                  </div>

                  <div className="mt-5 text-5xl font-semibold tracking-tight">
                    {plan.price.split(" ")[0]}
                    <span className="ml-2 text-lg font-medium text-white/62">USDT</span>
                  </div>

                  <div className="mt-6 space-y-3 text-sm text-white/76">
                    {plan.points.map((point) => (
                      <div key={point} className="flex items-start gap-3">
                        <span className="mt-[2px] text-cyan-300">•</span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <button
                      onClick={() => scrollToSection("help-strip")}
                      className={`w-full rounded-2xl px-5 py-3 text-sm font-medium transition ${
                        plan.featured
                          ? "bg-cyan-400 text-black hover:opacity-90"
                          : "border border-white/12 bg-white/5 text-white hover:bg-white/[0.08]"
                      }`}
                    >
                      View Access
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="showcase" className="mt-14">
            <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-400">
                  Live performance showcase
                </p>
                <h3 className="mt-4 text-3xl font-semibold md:text-5xl">
                  Execution snapshots with cleaner review visibility.
                </h3>
                <p className="mt-4 max-w-3xl text-sm leading-6 text-white/62 md:text-base">
                  A curated view of trade outcomes, entry-to-exit structure, and realized
                  signal performance in a format built for clarity.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <MetricPill label="Win Rate" value={siteConfig.stats.winRate} />
                <MetricPill label="Closed Trades" value={siteConfig.stats.closedTrades} />
                <MetricPill label="Realized R" value={siteConfig.stats.realizedR} />
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.04] p-6">
              <div className="evx-showcase-marquee">
                <div className="evx-showcase-track">
                  {[...siteConfig.showcaseCards, ...siteConfig.showcaseCards].map((card, idx) => (
                    <div
                      key={`${card.symbol}-${idx}`}
                      className="w-[320px] shrink-0 rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(14,23,40,0.92),rgba(8,14,25,0.96))] p-5 shadow-[0_16px_50px_rgba(0,0,0,0.30)]"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <div className="text-sm font-semibold text-white">{card.symbol}</div>
                          <div className="mt-1 text-xs uppercase tracking-[0.22em] text-white/42">
                            {card.setup}
                          </div>
                        </div>

                        <span
                          className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${
                            card.side === "LONG"
                              ? "border border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
                              : "border border-rose-400/20 bg-rose-400/10 text-rose-300"
                          }`}
                        >
                          {card.side}
                        </span>
                      </div>

                      <div className="mt-5 text-5xl font-semibold tracking-tight text-cyan-300">
                        {card.rr}
                      </div>

                      <div className="mt-5 grid grid-cols-2 gap-4 text-sm">
                        <DataCell label="Entry" value={card.entry} />
                        <DataCell label="Exit" value={card.exit} />
                        <DataCell label="Stop" value={card.stop} />
                        <DataCell label="Duration" value={card.duration} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="features" className="mt-14 grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-8">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
                Platform direction
              </p>
              <h3 className="mt-4 text-3xl font-semibold md:text-4xl">
                Built as a controlled global access layer.
              </h3>
              <p className="mt-5 text-sm leading-7 text-white/62 md:text-base">
                Evatrix is structured to present signals with discipline, cleaner access,
                and a more serious execution environment. Crypto launches first so the
                live side stays focused and strong.
              </p>
              <p className="mt-5 text-sm leading-7 text-white/62 md:text-base">
                Forex stays visible but closed until its own rollout is ready. That separation
                protects the active crypto side instead of forcing everything into one noisy surface.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-8">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
                What members get
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {memberBenefits.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/72"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="how-it-works" className="mt-14 rounded-[34px] border border-white/10 bg-white/[0.04] p-8">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-400">
                How it works
              </p>
              <h3 className="mt-4 text-3xl font-semibold md:text-5xl">
                A simpler route into a stronger market environment.
              </h3>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {stepFlow.map((item) => (
                <div
                  key={item.step}
                  className="rounded-[26px] border border-white/10 bg-white/5 p-6"
                >
                  <div className="text-[11px] uppercase tracking-[0.28em] text-cyan-300">
                    {item.step}
                  </div>
                  <div className="mt-4 text-2xl font-semibold">{item.title}</div>
                  <p className="mt-4 text-sm leading-6 text-white/62">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="help-strip" className="mt-14">
            <div className="rounded-[34px] border border-cyan-400/20 bg-cyan-400/[0.07] p-8 shadow-[0_0_80px_rgba(34,211,238,0.06)]">
              <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
                    Need guidance?
                  </p>
                  <h3 className="mt-4 text-3xl font-semibold md:text-5xl">
                    Help, access, pricing, and workflow answers live in one place.
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-6 text-white/70 md:text-base">
                    Explore Help Center for billing, exchange connection, live signals,
                    watchlists, strategy visibility, risk controls, and account support.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 lg:justify-end">
                  <Link
                    href="/dashboard/help"
                    className="rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
                  >
                    Open Help Center
                  </Link>
                  <Link
                    href="/login"
                    className="rounded-2xl border border-white/12 bg-white/5 px-6 py-3 text-sm text-white/90 transition hover:bg-white/[0.08]"
                  >
                    Member Login
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <footer className="mt-14 rounded-[32px] border border-white/10 bg-white/[0.04] p-8">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="flex items-center gap-4">
                  <EvatrixBrandMark small />
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.32em] text-white/45">
                      {siteConfig.title}
                    </div>
                    <div className="mt-1 text-2xl font-semibold">{siteConfig.name}</div>
                  </div>
                </div>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/62">
                  Premium crypto signal intelligence, cleaner execution visibility,
                  and controlled access for disciplined market participants.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {[
                    `${siteConfig.stats.activePairs} active pairs`,
                    "Live analytics",
                    "Premium signal workflow",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/72"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-3">
                <FooterColumn
                  title="Platform"
                  items={["Features", "Showcase", "Pricing", "How It Works"]}
                />
                <FooterColumn
                  title="Account"
                  items={["Member Login", "Dashboard", "Help Center"]}
                />
                <FooterColumn
                  title="Legal"
                  items={siteConfig.footer.legal}
                />
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6 text-sm text-white/45">
              {siteConfig.footer.copyright}
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}

function EvatrixBrandMark({ small = false }: { small?: boolean }) {
  return (
    <div
      className={`relative flex items-center justify-center rounded-2xl border border-cyan-400/20 bg-white/5 shadow-[0_0_40px_rgba(34,211,238,0.12)] ${
        small ? "h-12 w-12" : "h-14 w-14"
      }`}
    >
      <div className="absolute inset-0 rounded-2xl bg-cyan-400/10 blur-xl" />
      <svg
        viewBox="0 0 64 64"
        className="relative h-9 w-9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32 5L54 13V30C54 43.2 45.6 54.2 32 59C18.4 54.2 10 43.2 10 30V13L32 5Z"
          stroke="#58E1FF"
          strokeWidth="3"
        />
        <path
          d="M18 39C22 34 26 31 30 31C34 31 37 34 40 34C44 34 47 30 50 24"
          stroke="#FFFFFF"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M17 42L17 25M24 39L24 21M31 35L31 18M38 37L38 24M45 31L45 19"
          stroke="#58E1FF"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function HeroTerminal() {
  return (
    <div className="relative mx-auto flex w-full max-w-[820px] items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.20),transparent_35%)] blur-2xl" />

      <div className="absolute left-0 top-12 z-20 rounded-2xl border border-white/10 bg-[#0b1328]/85 px-5 py-4 shadow-[0_0_40px_rgba(0,0,0,0.25)] backdrop-blur">
        <div className="text-sm font-medium text-white">24/7 Signal Flow</div>
        <div className="mt-1 text-xs text-white/55">Crypto-first launch path</div>
      </div>

      <div className="absolute right-0 top-12 z-20 rounded-2xl border border-white/10 bg-[#0b1328]/85 px-5 py-4 shadow-[0_0_40px_rgba(0,0,0,0.25)] backdrop-blur">
        <div className="text-sm font-medium text-white">Future API Layer</div>
        <div className="mt-1 text-xs text-white/55">Automation-ready direction</div>
      </div>

      <div className="absolute left-6 bottom-10 z-20 rounded-2xl border border-white/10 bg-[#0b1328]/85 px-5 py-4 shadow-[0_0_40px_rgba(0,0,0,0.25)] backdrop-blur">
        <div className="text-sm font-medium text-white">Performance Reviewed</div>
        <div className="mt-1 text-xs text-white/55">Signals tracked from entry to exit</div>
      </div>

      <div className="absolute right-10 bottom-10 z-20 rounded-2xl border border-white/10 bg-[#0b1328]/85 px-5 py-4 shadow-[0_0_40px_rgba(0,0,0,0.25)] backdrop-blur">
        <div className="text-sm font-medium text-white">Forex Reserved</div>
        <div className="mt-1 text-xs text-white/55">Separate rollout later</div>
      </div>

      <div className="relative z-10 mt-6 w-full max-w-[720px] rounded-[36px] border border-white/10 bg-[#081122]/90 p-4 shadow-[0_0_120px_rgba(34,211,238,0.10)] backdrop-blur">
        <div className="relative overflow-hidden rounded-[26px] border border-cyan-400/15 bg-[linear-gradient(180deg,#0b1730_0%,#08101f_100%)] p-4">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_26%)]" />
          <div className="absolute left-[18%] top-[8%] h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl" />
          <div className="absolute right-[12%] top-[10%] h-28 w-28 rounded-full bg-blue-500/10 blur-2xl" />

          <div className="relative mb-4 flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-cyan-300">
                Evatrix Terminal
              </div>
              <div className="mt-1 text-sm text-white/55">
                Institutional signal interface
              </div>
            </div>

            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-cyan-400/80" />
              <div className="h-3 w-3 rounded-full bg-white/25" />
              <div className="h-3 w-3 rounded-full bg-blue-400/60" />
            </div>
          </div>

          <div className="relative grid gap-4 lg:grid-cols-[1fr_0.34fr]">
            <div className="rounded-[22px] border border-white/8 bg-black/20 p-4">
              <div className="mb-3 flex items-center justify-between">
                <div className="text-sm font-medium text-white">BTC / USDT · 1H</div>
                <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-cyan-300">
                  Live
                </div>
              </div>

              <AnimatedCandles />
            </div>

            <div className="grid gap-4">
              {terminalStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[22px] border border-white/8 bg-white/[0.04] p-4"
                >
                  <div className="text-xs uppercase tracking-[0.22em] text-cyan-300">
                    {item.label}
                  </div>
                  <div className="mt-3 text-3xl font-semibold text-white">
                    {item.value}
                  </div>
                  <div className="mt-2 text-sm text-white/55">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-4 grid gap-4 md:grid-cols-3">
            {[
              "Live market structure",
              "Execution-first workflow",
              "Performance-aware review",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3 text-sm text-white/72"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AnimatedCandles() {
  const bars = [
    { h: 56, delay: "0s", x: 60, y: 150, color: "#22D3EE" },
    { h: 70, delay: "0.2s", x: 100, y: 130, color: "#FFFFFF" },
    { h: 60, delay: "0.4s", x: 140, y: 140, color: "#22D3EE" },
    { h: 82, delay: "0.6s", x: 180, y: 108, color: "#60A5FA" },
    { h: 66, delay: "0.8s", x: 220, y: 122, color: "#22D3EE" },
    { h: 88, delay: "1s", x: 260, y: 92, color: "#FFFFFF" },
    { h: 72, delay: "1.2s", x: 300, y: 104, color: "#22D3EE" },
    { h: 90, delay: "1.4s", x: 340, y: 84, color: "#60A5FA" },
    { h: 74, delay: "1.6s", x: 380, y: 98, color: "#22D3EE" },
    { h: 78, delay: "1.8s", x: 420, y: 90, color: "#FFFFFF" },
  ];

  return (
    <svg
      viewBox="0 0 520 250"
      className="h-[250px] w-full rounded-2xl border border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.12">
        {[...Array(10)].map((_, i) => (
          <line
            key={`h-${i}`}
            x1="0"
            y1={25 * i}
            x2="520"
            y2={25 * i}
            stroke="white"
            strokeWidth="1"
          />
        ))}
        {[...Array(11)].map((_, i) => (
          <line
            key={`v-${i}`}
            x1={52 * i}
            y1="0"
            x2={52 * i}
            y2="250"
            stroke="white"
            strokeWidth="1"
          />
        ))}
      </g>

      <path
        d="M20 182L60 170L95 144L130 154L165 122L205 130L245 110L285 120L325 96L360 106L400 90L440 96L500 66"
        stroke="#22D3EE"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="evx-line-flow"
      />

      <path
        d="M20 182L60 170L95 144L130 154L165 122L205 130L245 110L285 120L325 96L360 106L400 90L440 96L500 66"
        stroke="white"
        strokeOpacity="0.22"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {bars.map((bar, i) => (
        <g key={i} opacity="0.92">
          <line
            x1={bar.x}
            y1={bar.y - 18}
            x2={bar.x}
            y2={bar.y + bar.h}
            stroke={bar.color}
            strokeOpacity="0.6"
            strokeWidth="2"
            className="evx-candle-wick"
            style={{ animationDelay: bar.delay }}
          />
          <rect
            x={bar.x - 6}
            y={bar.y}
            width="12"
            height={bar.h}
            rx="2"
            fill={bar.color}
            fillOpacity="0.35"
            className="evx-candle-bar"
            style={{ animationDelay: bar.delay }}
          />
        </g>
      ))}
    </svg>
  );
}

function MetricPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center">
      <div className="text-[10px] uppercase tracking-[0.22em] text-white/42">
        {label}
      </div>
      <div className="mt-2 text-lg font-semibold text-cyan-300">{value}</div>
    </div>
  );
}

function DataCell({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.22em] text-white/42">
        {label}
      </div>
      <div className="mt-1 text-sm font-medium text-white">{value}</div>
    </div>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-[0.28em] text-white/42">
        {title}
      </div>
      <div className="mt-4 space-y-3 text-sm text-white/72">
        {items.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </div>
  );
}

function LandingBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#050816]" />
      <div className="absolute left-[-8%] top-[-10%] h-[28rem] w-[28rem] rounded-full bg-cyan-400/12 blur-3xl" />
      <div className="absolute right-[-6%] top-[4%] h-[24rem] w-[24rem] rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute left-[12%] bottom-[-8%] h-[22rem] w-[22rem] rounded-full bg-white/5 blur-3xl" />
      <div className="absolute right-[18%] bottom-[4%] h-[20rem] w-[20rem] rounded-full bg-cyan-400/6 blur-3xl" />

      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:42px_42px]" />
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.16)_45%,transparent_55%)]" />

      {[
        { left: "8%", top: "16%", text: "BTC / USDT" },
        { left: "20%", top: "26%", text: "ETH / USDT" },
        { left: "74%", top: "15%", text: "SOL / USDT" },
        { left: "81%", top: "28%", text: "XRP / USDT" },
        { left: "12%", top: "66%", text: "EUR / USD" },
        { left: "28%", top: "76%", text: "GBP / USD" },
        { left: "69%", top: "70%", text: "XAU / USD" },
        { left: "81%", top: "80%", text: "NAS100" },
      ].map((item) => (
        <div
          key={item.text}
          className="absolute text-[11px] uppercase tracking-[0.35em] text-white/10"
          style={{ left: item.left, top: item.top }}
        >
          {item.text}
        </div>
      ))}

      <svg
        className="absolute inset-0 h-full w-full opacity-[0.28]"
        viewBox="0 0 1600 2200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0 210C90 210 130 140 215 140C305 140 340 345 430 345C525 345 565 115 670 115C770 115 810 260 915 260C1020 260 1060 105 1165 105C1270 105 1310 205 1410 205C1490 205 1540 165 1600 165"
          stroke="url(#waveA)"
          strokeWidth="2.4"
          className="evx-bg-wave"
        />
        <path
          d="M0 720C85 720 130 625 220 625C310 625 350 830 445 830C535 830 585 555 685 555C790 555 830 675 935 675C1040 675 1080 510 1180 510C1270 510 1310 605 1400 605C1490 605 1540 560 1600 560"
          stroke="url(#waveB)"
          strokeWidth="2"
          className="evx-bg-wave"
        />
        <path
          d="M0 1260C90 1260 130 1175 220 1175C315 1175 355 1370 445 1370C540 1370 590 1115 690 1115C795 1115 835 1225 935 1225C1035 1225 1080 1070 1180 1070C1275 1070 1315 1170 1400 1170C1490 1170 1540 1130 1600 1130"
          stroke="url(#waveC)"
          strokeWidth="1.8"
          className="evx-bg-wave"
        />

        <defs>
          <linearGradient id="waveA" x1="0" y1="0" x2="1600" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="transparent" />
            <stop offset="0.2" stopColor="#22D3EE" />
            <stop offset="0.5" stopColor="#FFFFFF" />
            <stop offset="0.82" stopColor="#22D3EE" />
            <stop offset="1" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="waveB" x1="0" y1="0" x2="1600" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="transparent" />
            <stop offset="0.22" stopColor="#60A5FA" />
            <stop offset="0.52" stopColor="#FFFFFF" />
            <stop offset="0.82" stopColor="#22D3EE" />
            <stop offset="1" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="waveC" x1="0" y1="0" x2="1600" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="transparent" />
            <stop offset="0.22" stopColor="#FFFFFF" />
            <stop offset="0.52" stopColor="#22D3EE" />
            <stop offset="0.82" stopColor="#60A5FA" />
            <stop offset="1" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}