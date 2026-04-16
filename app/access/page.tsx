"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AccessPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendCode() {
    setLoading(true);
    setMsg("");

    const res = await fetch("/api/auth/send-code", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    setLoading(false);

    if (!data.ok) {
      setMsg(data.error || "Failed to send code.");
      return;
    }

    setMsg("Verification code sent. Check your email.");
  }

  async function register(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, code, password }),
    });

    const data = await res.json();
    setLoading(false);

    if (!data.ok) {
      setMsg(data.error || "Registration failed.");
      return;
    }

    router.push("/dashboard");
  }

  return (
    <main className="evx-page">
      <div className="evx-bg-grid" />
      <div className="evx-glow evx-glow-a" />
      <div className="evx-glow evx-glow-b" />
      <div className="evx-orbit evx-orbit-1" />
      <div className="evx-orbit evx-orbit-2" />

      <section className="evx-shell evx-shell-access">
        <div className="evx-topline">
          <div className="evx-brand">
            <span className="evx-brand-badge">E</span>
            <div>
              <p className="evx-kicker">EVATRIX GLOBAL</p>
              <h1 className="evx-brand-title">Create Account</h1>
            </div>
          </div>

          <Link href="/login" className="evx-link-pill">
            Member Login
          </Link>
        </div>

        <div className="evx-access-layout">
          <div className="evx-panel evx-access-main">
            <div className="evx-panel-head">
              <p className="evx-kicker">MEMBER ENTRY</p>
              <span className="evx-pill">SECURE SETUP</span>
            </div>

            <h2 className="evx-hero-title evx-hero-title-access">
              Create your Evatrix member account.
            </h2>

            <p className="evx-hero-text">
              Start with your email, verify the code, create your password, and continue
              into the Free Preview dashboard.
            </p>

            <form className="evx-form" onSubmit={register}>
              <label className="evx-label">
                Email address
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="evx-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>

              <button type="button" className="evx-button evx-button-secondary" onClick={sendCode} disabled={loading}>
                {loading ? "Sending..." : "Send Verification Code"}
              </button>

              <label className="evx-label">
                Verification code
                <input
                  type="text"
                  placeholder="Enter 6-digit code"
                  className="evx-input"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
              </label>

              <label className="evx-label">
                Password
                <input
                  type="password"
                  placeholder="Create your password"
                  className="evx-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>

              <button type="submit" className="evx-button evx-button-primary" disabled={loading}>
                {loading ? "Please wait..." : "Continue to Dashboard"}
              </button>
            </form>

            {msg ? <p style={{ marginTop: 14, color: "#9fdcff" }}>{msg}</p> : null}

            <div className="evx-note">
              <span className="evx-note-dot" />
              <p>
                One account, one entry flow. Free Preview starts first. Pro access is
                unlocked later inside the dashboard.
              </p>
            </div>
          </div>

          <aside className="evx-mini-card evx-access-side">
            <p className="evx-kicker">HOW IT WORKS</p>
            <h3>Single entry. Layered access.</h3>
            <p>
              All members begin through one clean setup flow. After entry, the dashboard
              handles plan depth, upgrade movement, and future access controls.
            </p>

            <div className="evx-access-points">
              <div className="evx-access-point">
                <strong>Step 1</strong>
                <span>Email + verification code</span>
              </div>
              <div className="evx-access-point">
                <strong>Step 2</strong>
                <span>Create password</span>
              </div>
              <div className="evx-access-point">
                <strong>Step 3</strong>
                <span>Enter Free Dashboard</span>
              </div>
              <div className="evx-access-point">
                <strong>Step 4</strong>
                <span>Unlock Pro later if needed</span>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}