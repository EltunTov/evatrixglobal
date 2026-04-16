"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  async function login(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    setLoading(false);

    if (!data.ok) {
      setMsg(data.error || "Login failed.");
      return;
    }

    router.push("/dashboard");
  }

  return (
    <main className="evx-page">
      <div className="evx-bg-grid" />
      <div className="evx-glow evx-glow-a" />
      <div className="evx-glow evx-glow-b" />

      <section className="evx-shell evx-shell-narrow">
        <div className="evx-topline">
          <div className="evx-brand">
            <span className="evx-brand-badge">E</span>
            <div>
              <p className="evx-kicker">EVATRIX GLOBAL</p>
              <h1 className="evx-brand-title">Member Login</h1>
            </div>
          </div>

          <Link href="/access" className="evx-link-pill">
            Create Account
          </Link>
        </div>

        <div className="evx-panel">
          <div className="evx-panel-head">
            <p className="evx-kicker">EXISTING MEMBERS</p>
            <span className="evx-pill">SECURE ENTRY</span>
          </div>

          <h2 className="evx-hero-title evx-hero-title-login">
            Access your Evatrix account.
          </h2>

          <p className="evx-hero-text">
            Continue with your registered email and password.
          </p>

          <form className="evx-form" onSubmit={login}>
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

            <label className="evx-label">
              Password
              <input
                type="password"
                placeholder="Enter your password"
                className="evx-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>

            <button type="submit" className="evx-button evx-button-primary" disabled={loading}>
              {loading ? "Please wait..." : "Continue"}
            </button>
          </form>

          {msg ? <p style={{ marginTop: 14, color: "#9fdcff" }}>{msg}</p> : null}
        </div>
      </section>
    </main>
  );
}