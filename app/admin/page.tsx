"use client";

import { useEffect, useMemo, useState } from "react";

type AdminTab =
  | "overview"
  | "users"
  | "packages"
  | "payments"
  | "access"
  | "activity"
  | "settings";

const ADMIN_USERNAME = "adminevatrix";
const ADMIN_PASSWORD = "evatrix2026";
const STORAGE_KEY = "evatrix_admin_auth";

function StatCard({
  title,
  value,
  note,
}: {
  title: string;
  value: string;
  note: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
      <div className="text-xs uppercase tracking-[0.22em] text-white/45">{title}</div>
      <div className="mt-3 text-3xl font-semibold text-white">{value}</div>
      <div className="mt-2 text-sm text-white/55">{note}</div>
    </div>
  );
}

function SectionCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          {subtitle ? <p className="mt-1 text-sm text-white/55">{subtitle}</p> : null}
        </div>
      </div>
      <div className="mt-5">{children}</div>
    </div>
  );
}

export default function AdminPage() {
  const [isReady, setIsReady] = useState(false);
  const [isAuthed, setIsAuthed] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [activeTab, setActiveTab] = useState<AdminTab>("overview");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "true") {
      setIsAuthed(true);
    }
    setIsReady(true);
  }, []);

  const navItems = useMemo(
    () => [
      { key: "overview", label: "Overview" },
      { key: "users", label: "Users" },
      { key: "packages", label: "Packages" },
      { key: "payments", label: "Payments" },
      { key: "access", label: "Access" },
      { key: "activity", label: "Activity" },
      { key: "settings", label: "Settings" },
    ] as { key: AdminTab; label: string }[],
    []
  );

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      localStorage.setItem(STORAGE_KEY, "true");
      setIsAuthed(true);
      setLoginError("");
      return;
    }

    setLoginError("Invalid admin credentials.");
  }

  function handleLogout() {
    localStorage.removeItem(STORAGE_KEY);
    setIsAuthed(false);
    setUsername("");
    setPassword("");
    setActiveTab("overview");
  }

  function renderContent() {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <StatCard title="Total Members" value="124" note="All registered accounts" />
              <StatCard title="Active Premium" value="28" note="Currently paid members" />
              <StatCard title="Free Preview" value="71" note="Observer / preview users" />
              <StatCard title="Expiring Soon" value="6" note="Ending within 7 days" />
            </div>

            <div className="grid gap-6 xl:grid-cols-[1.35fr_0.95fr]">
              <SectionCard
                title="Recent Members"
                subtitle="Latest registrations and current access status"
              >
                <div className="overflow-hidden rounded-2xl border border-white/10">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-white/[0.04] text-white/50">
                      <tr>
                        <th className="px-4 py-3 font-medium">User</th>
                        <th className="px-4 py-3 font-medium">Plan</th>
                        <th className="px-4 py-3 font-medium">Status</th>
                        <th className="px-4 py-3 font-medium">Joined</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10 text-white/80">
                      <tr>
                        <td className="px-4 py-3">alina@evatrix.com</td>
                        <td className="px-4 py-3">Pro Crypto</td>
                        <td className="px-4 py-3">Active</td>
                        <td className="px-4 py-3">2026-04-16</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">murat@evatrix.com</td>
                        <td className="px-4 py-3">Free Preview</td>
                        <td className="px-4 py-3">Active</td>
                        <td className="px-4 py-3">2026-04-15</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">nina@evatrix.com</td>
                        <td className="px-4 py-3">Pro Crypto</td>
                        <td className="px-4 py-3">Expiring</td>
                        <td className="px-4 py-3">2026-04-11</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </SectionCard>

              <SectionCard
                title="System Snapshot"
                subtitle="High-level owner view of platform availability"
              >
                <div className="space-y-3 text-sm text-white/75">
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                    <span>Crypto Signals</span>
                    <span className="text-emerald-300">Active</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                    <span>Forex Module</span>
                    <span className="text-amber-300">Locked</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                    <span>Preview Access</span>
                    <span className="text-emerald-300">Open</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                    <span>Payments</span>
                    <span className="text-emerald-300">Stable</span>
                  </div>
                </div>
              </SectionCard>
            </div>
          </div>
        );

      case "users":
        return (
          <SectionCard title="Users" subtitle="Manage members, roles, and visibility">
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/[0.04] text-white/50">
                  <tr>
                    <th className="px-4 py-3 font-medium">Email</th>
                    <th className="px-4 py-3 font-medium">Role</th>
                    <th className="px-4 py-3 font-medium">Package</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-white/80">
                  <tr>
                    <td className="px-4 py-3">alina@evatrix.com</td>
                    <td className="px-4 py-3">Member</td>
                    <td className="px-4 py-3">Pro Crypto</td>
                    <td className="px-4 py-3">Active</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">murat@evatrix.com</td>
                    <td className="px-4 py-3">Member</td>
                    <td className="px-4 py-3">Free Preview</td>
                    <td className="px-4 py-3">Active</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </SectionCard>
        );

      case "packages":
        return (
          <SectionCard title="Packages" subtitle="Track package distribution and member tiers">
            <div className="grid gap-4 md:grid-cols-3">
              <StatCard title="Free Preview" value="71" note="Observer tier users" />
              <StatCard title="Pro Crypto" value="28" note="Active premium accounts" />
              <StatCard title="Pro Auto" value="0" note="Not opened yet" />
            </div>
          </SectionCard>
        );

      case "payments":
        return (
          <SectionCard title="Payments" subtitle="Recent payment flow and subscription money trail">
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/[0.04] text-white/50">
                  <tr>
                    <th className="px-4 py-3 font-medium">User</th>
                    <th className="px-4 py-3 font-medium">Amount</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                    <th className="px-4 py-3 font-medium">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-white/80">
                  <tr>
                    <td className="px-4 py-3">alina@evatrix.com</td>
                    <td className="px-4 py-3">$29</td>
                    <td className="px-4 py-3">Paid</td>
                    <td className="px-4 py-3">2026-04-16</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </SectionCard>
        );

      case "access":
        return (
          <SectionCard title="Access Control" subtitle="Manual access and module state overview">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-white/80">
                Preview Access: <span className="text-emerald-300">Enabled</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-white/80">
                Pro Signals: <span className="text-emerald-300">Enabled</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-white/80">
                Pro Auto: <span className="text-amber-300">Closed</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-white/80">
                Forex Access: <span className="text-amber-300">Locked</span>
              </div>
            </div>
          </SectionCard>
        );

      case "activity":
        return (
          <SectionCard title="Activity" subtitle="Recent admin and member actions">
            <div className="space-y-3 text-sm text-white/75">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                2026-04-16 — New premium activation created for alina@evatrix.com
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                2026-04-16 — Admin login successful
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                2026-04-15 — Preview member murat@evatrix.com registered
              </div>
            </div>
          </SectionCard>
        );

      case "settings":
        return (
          <SectionCard title="Settings" subtitle="Administrative controls and future system options">
            <div className="space-y-3 text-sm text-white/75">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                Admin email notifications — pending
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                Billing provider integration — pending
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                RBAC / role-based permissions — phase 2
              </div>
            </div>
          </SectionCard>
        );

      default:
        return null;
    }
  }

  if (!isReady) {
    return (
      <main className="min-h-screen bg-[#070b11] text-white">
        <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6">
          <div className="text-sm text-white/60">Loading admin control panel...</div>
        </div>
      </main>
    );
  }

  if (!isAuthed) {
    return (
      <main className="min-h-screen bg-[#070b11] text-white">
        <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6">
          <div className="w-full max-w-md rounded-[28px] border border-white/10 bg-white/[0.03] p-8 shadow-2xl">
            <div className="text-xs uppercase tracking-[0.28em] text-cyan-300/70">Admin Login</div>
            <h1 className="mt-3 text-3xl font-semibold">Evatrix Control Access</h1>
            <p className="mt-2 text-sm text-white/55">
              Restricted owner area. Authorized administrative access only.
            </p>

            <form onSubmit={handleLogin} className="mt-8 space-y-4">
              <div>
                <label className="mb-2 block text-sm text-white/70">Username</label>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter admin username"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none placeholder:text-white/25"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/70">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none placeholder:text-white/25"
                />
              </div>

              {loginError ? (
                <div className="rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200">
                  {loginError}
                </div>
              ) : null}

              <button
                type="submit"
                className="w-full rounded-2xl bg-white px-4 py-3 font-medium text-black transition hover:opacity-90"
              >
                Enter Admin Panel
              </button>
            </form>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#070b11] text-white">
      <div className="mx-auto flex min-h-screen max-w-[1600px] gap-6 px-4 py-4 md:px-6 md:py-6">
        <aside className="sticky top-4 h-[calc(100vh-2rem)] w-[280px] shrink-0 overflow-hidden rounded-[32px] border border-white/10 bg-[#0b1118]">
          <div className="flex h-full flex-col">
            <div className="border-b border-white/10 px-5 py-5">
              <div className="text-[11px] uppercase tracking-[0.28em] text-cyan-300/70">
                Super Admin
              </div>
              <div className="mt-2 text-2xl font-semibold">Evatrix</div>
              <div className="mt-1 text-sm text-white/50">Control Panel</div>
            </div>

            <div className="flex-1 overflow-y-auto px-3 py-4">
              <nav className="space-y-2">
                {navItems.map((item) => {
                  const active = item.key === activeTab;
                  return (
                    <button
                      key={item.key}
                      onClick={() => setActiveTab(item.key)}
                      className={`w-full rounded-2xl px-4 py-3 text-left text-sm transition ${
                        active
                          ? "bg-white text-black"
                          : "bg-white/[0.03] text-white/75 hover:bg-white/[0.06]"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </nav>
            </div>

            <div className="border-t border-white/10 p-3">
              <button
                onClick={handleLogout}
                className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/80 transition hover:bg-white/[0.06]"
              >
                Logout
              </button>
            </div>
          </div>
        </aside>

        <section className="min-w-0 flex-1 rounded-[32px] border border-white/10 bg-[#0a0f15] p-5 md:p-6">
          <div className="mb-6 border-b border-white/10 pb-5">
            <div className="text-xs uppercase tracking-[0.24em] text-cyan-300/70">
              Owner Dashboard
            </div>
            <h1 className="mt-2 text-3xl font-semibold">
              {navItems.find((item) => item.key === activeTab)?.label}
            </h1>
            <p className="mt-2 max-w-3xl text-sm text-white/55">
              Central administrative interface for user access, plans, payments, visibility,
              and platform-level operational control.
            </p>
          </div>

          {renderContent()}
        </section>
      </div>
    </main>
  );
}