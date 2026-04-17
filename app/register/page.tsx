"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

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
    price: "60 USDT",
    note: "Deeper visibility, stronger workflow context, and cleaner premium access.",
  },
  elite: {
    label: "Elite Access",
    duration: "6 Months",
    price: "100 USDT",
    note: "Extended premium access with longer-cycle operator structure.",
  },
};

function EvatrixBrandMark() {
  return (
    <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-white/5 shadow-[0_0_40px_rgba(34,211,238,0.12)]">
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

export default function RegisterPage() {
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

      // Şimdilik demo/local akış:
      // Sonraki adımda bunu gerçek register API veya Supabase Auth'a bağlayacağız.
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
              <EvatrixBrandMark />
              <div>
                <p className="text-[11px] uppercase tracking-[0.34em] text-white/45">
                  Evatrix Global
                </p>
                <h1 className="mt-1 text-3xl font-semibold tracking-tight md:text-4xl">
                  Create Account
                </h1>
              </div>
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