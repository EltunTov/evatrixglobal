"use client";

import Link from "next/link";
import { Suspense, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import EvatrixSiteLogo from "../components/evatrix-site-logo";

type PlanKey = "starter" | "pro" | "elite";

const planMap: Record<
  PlanKey,
  {
    label: string;
    duration: string;
    price: string;
    note: string;
  }
> = {
  starter: {
    label: "Starter Access",
    duration: "1 Month",
    price: "25 USDT",
    note: "Structured crypto signal access for disciplined launch-phase entry.",
  },
  pro: {
    label: "Pro Access",
    duration: "3 Months",
    price: "65 USDT",
    note: "Deeper visibility, stronger workflow context, and cleaner premium access.",
  },
  elite: {
    label: "Elite Access",
    duration: "6 Months",
    price: "115 USDT",
    note: "Extended premium access with longer-cycle operator structure.",
  },
};

function RegisterContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const rawPlan = searchParams.get("plan");
  const selectedPlan: PlanKey =
    rawPlan === "starter" || rawPlan === "pro" || rawPlan === "elite"
      ? rawPlan
      : "starter";

  const plan = useMemo(() => planMap[selectedPlan], [selectedPlan]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorText, setErrorText] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorText("");

    if (!email.trim()) {
      setErrorText("Email address is required.");
      return;
    }

    if (password.length < 6) {
      setErrorText("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorText("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      localStorage.setItem(
        "evatrix_pending_user",
        JSON.stringify({
          email,
          plan: selectedPlan,
          createdAt: new Date().toISOString(),
        })
      );

      router.push("/dashboard");
    } catch {
      setErrorText("Account creation failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="mx-auto flex min-h-screen max-w-[1280px] items-center px-6 py-10">
        <div className="grid w-full gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <section className="rounded-[34px] border border-white/10 bg-white/[0.04] p-8 md:p-10">
            <div className="flex items-center gap-4">
              <EvatrixSiteLogo />
            </div>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/64 md:text-base">
              Create your Evatrix access account and enter a cleaner signal
              environment built for disciplined operators.
            </p>

            <div className="mt-8 rounded-[28px] border border-cyan-400/20 bg-cyan-400/[0.08] p-6">
              <div className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                Selected Plan
              </div>
              <div className="mt-4 text-2xl font-semibold">{plan.label}</div>
              <div className="mt-2 text-white/70">
                {plan.duration} · {plan.price}
              </div>
              <p className="mt-4 text-sm leading-6 text-white/64">{plan.note}</p>
            </div>

            <div className="mt-8 space-y-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/72">
                Branded onboarding
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/72">
                Plan-aware account entry
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/72">
                Dashboard-ready access flow
              </div>
            </div>
          </section>

          <section className="rounded-[34px] border border-white/10 bg-[#081122]/90 p-8 md:p-10">
            <div className="text-xs uppercase tracking-[0.34em] text-cyan-400">
              Access Registration
            </div>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Open your member account
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/62 md:text-base">
              Use a valid email and secure password to create your access layer.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-sm text-white/72">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/28"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/72">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create your password"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/28"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/72">Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/28"
                />
              </div>

              {errorText ? (
                <div className="rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200">
                  {errorText}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-medium text-black transition hover:opacity-90 disabled:opacity-60"
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>
            </form>

            <div className="mt-6 text-sm text-white/52">
              Already have an account?{" "}
              <Link href="/login" className="text-cyan-300 hover:text-cyan-200">
                Member Login
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

function RegisterLoading() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="mx-auto flex min-h-screen max-w-[1280px] items-center justify-center px-6 py-10">
        <div className="text-sm text-white/60">Loading registration...</div>
      </div>
    </main>
  );
}

export default function RegisterPage() {
  return (
    <Suspense fallback={<RegisterLoading />}>
      <RegisterContent />
    </Suspense>
  );
}