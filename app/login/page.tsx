"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import EvatrixSiteLogo from "../components/evatrix-site-logo";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  async function login(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    try {
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
    } catch {
      setLoading(false);
      setMsg("Something went wrong. Please try again.");
    }
  }

  return (
    <main className="evx-page">
      <div className="evx-bg-grid" />
      <div className="evx-glow evx-glow-a" />
      <div className="evx-glow evx-glow-b" />

      <section className="evx-shell evx-shell-narrow">
        <div className="evx-topline">
          <div className="flex items-center">
            <EvatrixSiteLogo size="auth" />
          </div>

          <Link href="/signup" className="evx-link-pill">
            Sign Up
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
              <div style={{ position: "relative" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="evx-input"
                  style={{ paddingRight: "88px" }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  style={{
                    position: "absolute",
                    right: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    background: "rgba(255,255,255,0.05)",
                    color: "#7ddcff",
                    borderRadius: "10px",
                    padding: "6px 10px",
                    fontSize: "12px",
                    cursor: "pointer",
                  }}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </label>

            <div
              style={{
                marginTop: -6,
                marginBottom: 8,
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Link
                href="/forgot-password"
                style={{
                  fontSize: "14px",
                  color: "#7ddcff",
                  textDecoration: "none",
                }}
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="evx-button evx-button-primary"
              disabled={loading}
            >
              {loading ? "Please wait..." : "Continue"}
            </button>
          </form>

          {msg ? <p style={{ marginTop: 14, color: "#9fdcff" }}>{msg}</p> : null}

          <div
            style={{
              marginTop: 18,
              color: "rgba(255,255,255,0.58)",
              fontSize: "14px",
            }}
          >
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              style={{
                color: "#7ddcff",
                textDecoration: "none",
              }}
            >
              Sign up
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}