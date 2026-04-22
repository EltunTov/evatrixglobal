"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import EvatrixSiteLogo from "../components/evatrix-site-logo";

export default function SignupPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [errorText, setErrorText] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorText("");

    if (!email.trim() || !email.includes("@")) {
      setErrorText("Valid email address is required.");
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

      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        setErrorText(data.error || "Account creation failed.");
        return;
      }

      router.push("/dashboard");
      router.refresh();
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
            <div className="flex items-center">
              <EvatrixSiteLogo size="auth" />
            </div>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/64 md:text-base">
              Create a free Evatrix member account and enter the platform with
              limited preview visibility before upgrading access later.
            </p>

            <div className="mt-8 rounded-[28px] border border-cyan-400/20 bg-cyan-400/[0.08] p-6">
              <div className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                Free Preview Access
              </div>
              <div className="mt-4 text-2xl font-semibold">Member Entry</div>
              <div className="mt-2 text-white/70">No payment required</div>
              <p className="mt-4 text-sm leading-6 text-white/64">
                Users can enter the platform, review the environment, and access
                limited areas before moving into a paid access tier.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/72">
                Free account creation
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/72">
                Preview-first dashboard access
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/72">
                Upgrade to paid access later
              </div>
            </div>
          </section>

          <section className="rounded-[34px] border border-white/10 bg-[#081122]/90 p-8 md:p-10">
            <div className="text-xs uppercase tracking-[0.34em] text-cyan-400">
              Member Registration
            </div>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Open your free member account
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/62 md:text-base">
              Start with free access, then upgrade only when you want deeper
              signal visibility and premium workspace access.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-sm text-white/72">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/28"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/72">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Create your password"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 pr-24 text-white outline-none placeholder:text-white/28"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-xs text-cyan-300 transition hover:bg-white/10"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/72">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm your password"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 pr-24 text-white outline-none placeholder:text-white/28"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-xs text-cyan-300 transition hover:bg-white/10"
                  >
                    {showConfirmPassword ? "Hide" : "Show"}
                  </button>
                </div>
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
                {loading ? "Creating Account..." : "Create Free Account"}
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