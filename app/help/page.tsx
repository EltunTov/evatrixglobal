import Link from "next/link";
import EvatrixSiteLogo from "../components/evatrix-site-logo";

const SUPPORT_EMAIL = "support@evatrixglobal.com";

const helpCards = [
  {
    title: "Access & Plans",
    text:
      "Evatrix launches with a crypto-first access structure. Public visitors can review platform positioning, pricing, and onboarding flow before entering the member environment.",
  },
  {
    title: "Login & Account",
    text:
      "Member access begins after registration and successful sign-in. Private dashboard tools, deeper workflow guidance, and operational help stay inside the authenticated area.",
  },
  {
    title: "Signals & Workflow",
    text:
      "Public pages explain the product direction. The deeper signal workflow, structure, and execution guidance live inside the dashboard help environment after login.",
  },
  {
    title: "Billing & Support",
    text:
      "For access questions, billing clarification, or account issues, members can use the internal dashboard help area. Public support remains available through direct email contact.",
  },
];

const quickAnswers = [
  {
    q: "What is this Help Center for?",
    a: "This public Help Center covers core platform questions for visitors, new users, and access-related inquiries. Full operational guidance stays inside the dashboard.",
  },
  {
    q: "Where is the full Help Center?",
    a: "The main Help Center is part of the member dashboard. It includes deeper answers around access, billing, workflow, signals, and account support.",
  },
  {
    q: "Do I need to log in to use Evatrix fully?",
    a: "Yes. Public pages explain the product and access structure, but the private dashboard is where members operate, review workflow, and access deeper guidance.",
  },
  {
    q: "How do I contact support?",
    a: "Use the support email below for public requests. Members should also use the dashboard help area for more structured account-side guidance.",
  },
];

export default function HelpPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[#050816]" />
        <div className="absolute left-[-8%] top-[-10%] h-[24rem] w-[24rem] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-[-6%] top-[6%] h-[20rem] w-[20rem] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:42px_42px]" />

        <div className="relative z-10 mx-auto w-full max-w-[1380px] px-4 pb-16 pt-4 md:px-6">
          <header className="sticky top-0 z-40 mb-8 border-b border-white/10 bg-[#08111f]/80 backdrop-blur-md">
            <div className="mx-auto flex h-[86px] w-full items-center justify-between">
              <div className="flex items-center">
                <EvatrixSiteLogo size="landing" />
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href="/"
                  className="rounded-2xl border border-white/12 bg-white/5 px-5 py-3 text-sm text-white/90 transition hover:border-cyan-400/35 hover:bg-white/[0.08]"
                >
                  Back to Site
                </Link>

                <Link
                  href="/login"
                  className="rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
                >
                  Member Login
                </Link>
              </div>
            </div>
          </header>

          <section className="rounded-[34px] border border-cyan-400/20 bg-cyan-400/[0.07] p-8 shadow-[0_0_80px_rgba(34,211,238,0.06)]">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
                 Support & Guidance
                </p>
                <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-tight md:text-6xl">
                  Public support, access guidance, and onboarding answers in one place.
                </h1>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/72 md:text-base">
                  This page is intentionally short. It gives visitors a clean overview
                  of access, support, and onboarding. The deeper operational help layer
                  remains inside the authenticated dashboard.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 lg:justify-end">
                <Link
                  href="/login"
                  className="rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
                >
                  Member Login
                </Link>

                <Link
                  href={`mailto:${SUPPORT_EMAIL}?subject=Evatrix%20Support%20Request`}
                  className="rounded-2xl border border-white/12 bg-white/5 px-6 py-3 text-sm text-white/90 transition hover:border-cyan-400/35 hover:bg-white/[0.08]"
                >
                  Email Support
                </Link>
              </div>
            </div>
          </section>

          <section className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-7">
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-400">
                What this page covers
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {helpCards.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[24px] border border-white/10 bg-white/5 p-5"
                  >
                    <h2 className="text-lg font-semibold text-white">{item.title}</h2>
                    <p className="mt-3 text-sm leading-6 text-white/66">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-7">
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-400">
                Support route
              </p>

              <h2 className="mt-4 text-2xl font-semibold md:text-3xl">
                Need direct assistance?
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/68 md:text-base">
                For access questions, account clarification, or public support requests,
                contact the Evatrix support desk directly. Dashboard members should also
                use the internal help environment for deeper workflow-side guidance.
              </p>

              <div className="mt-6 rounded-[24px] border border-white/10 bg-[#081122]/85 p-5">
                <div className="text-[11px] uppercase tracking-[0.28em] text-cyan-300">
                  Support Email
                </div>

                <a
                  href={`mailto:${SUPPORT_EMAIL}?subject=Evatrix%20Support%20Request`}
                  className="mt-3 block text-xl font-semibold text-white transition hover:text-cyan-300"
                >
                  {SUPPORT_EMAIL}
                </a>

                <p className="mt-3 text-sm leading-6 text-white/58">
                  Use this channel for public-side help, onboarding questions, billing
                  clarification, and account access issues.
                </p>
              </div>

              <div className="mt-5 rounded-[24px] border border-white/10 bg-white/5 p-5">
                <div className="text-[11px] uppercase tracking-[0.28em] text-cyan-300">
                  Member Note
                </div>
                <p className="mt-3 text-sm leading-6 text-white/62">
                  The full operational Help Center remains inside the dashboard. That
                  environment is intended for authenticated members and includes more
                  detailed platform-side guidance.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-10 rounded-[30px] border border-white/10 bg-white/[0.04] p-7">
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-400">
              Quick answers
            </p>

            <div className="mt-6 grid gap-4">
              {quickAnswers.map((item) => (
                <div
                  key={item.q}
                  className="rounded-[24px] border border-white/10 bg-[#081122]/80 p-5"
                >
                  <h3 className="text-lg font-semibold text-white">{item.q}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/66">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10 rounded-[30px] border border-cyan-400/20 bg-cyan-400/[0.06] p-7">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
                  Next step
                </p>
                <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
                  Continue with member access for the full Evatrix environment.
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">
                  Public information ends here by design. The deeper help, workflow,
                  and account-side guidance live inside the authenticated dashboard.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/login"
                  className="rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
                >
                  Member Login
                </Link>

                <Link
                  href="/register"
                  className="rounded-2xl border border-white/12 bg-white/5 px-6 py-3 text-sm text-white/90 transition hover:border-cyan-400/35 hover:bg-white/[0.08]"
                >
                  Create Account
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}