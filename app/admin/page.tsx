"use client";

import { useEffect, useMemo, useState } from "react";
import EvatrixSiteLogo from "../components/evatrix-site-logo";

type Role = "free" | "pro" | "admin";

type UserRecord = {
  id: string;
  email: string;
  role: Role;
  createdAt: string;
  updatedAt: string;
  verifiedAt: string | null;
  freeExpiresAt: string | null;
  proStartedAt: string | null;
  lastLoginAt: string | null;
};

type AdminStats = {
  totalUsers: number;
  freeUsers: number;
  proUsers: number;
  adminUsers: number;
  verifiedUsers: number;
  recentUsers: UserRecord[];
};

type AdminTab =
  | "overview"
  | "users"
  | "packages"
  | "payments"
  | "access"
  | "activity"
  | "settings";

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
      <div className="text-xs uppercase tracking-[0.22em] text-white/45">
        {title}
      </div>
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
          {subtitle ? (
            <p className="mt-1 text-sm text-white/55">{subtitle}</p>
          ) : null}
        </div>
      </div>
      <div className="mt-5">{children}</div>
    </div>
  );
}

function formatDate(value: string | null) {
  if (!value) return "-";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return "-";
  return d.toLocaleString();
}

export default function AdminPage() {
  const [isReady, setIsReady] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  const [activeTab, setActiveTab] = useState<AdminTab>("overview");
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [users, setUsers] = useState<UserRecord[]>([]);

  const navItems = useMemo(
    () =>
      [
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

  async function loadAdminData() {
    try {
      setLoading(true);
      setLoadError("");

      const overviewRes = await fetch("/api/admin/overview", {
        cache: "no-store",
      });

      const overviewData = await overviewRes.json();

      if (!overviewRes.ok || !overviewData?.ok) {
        setIsAuthorized(false);
        setLoading(false);
        setIsReady(true);
        return;
      }

      setStats(overviewData.stats);
      setUsers(overviewData.users || []);
      setIsAuthorized(true);
      setLoading(false);
      setIsReady(true);
    } catch {
      setLoadError("Admin panel failed to load.");
      setIsAuthorized(false);
      setLoading(false);
      setIsReady(true);
    }
  }

  useEffect(() => {
    loadAdminData();
  }, []);

  async function handleAdminLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginError("");

    try {
      setLoginLoading(true);

      const res = await fetch("/api/admin/access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok || !data?.ok) {
        setLoginError(data?.error || "Admin login failed.");
        setLoginLoading(false);
        return;
      }

      setUsername("");
      setPassword("");
      await loadAdminData();
    } catch {
      setLoginError("Admin login failed.");
    } finally {
      setLoginLoading(false);
    }
  }

  async function handleLogout() {
    try {
      await fetch("/api/admin/access", { method: "DELETE" });
    } catch {}

    setIsAuthorized(false);
    setStats(null);
    setUsers([]);
    setActiveTab("overview");
  }

  function renderContent() {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <StatCard
                title="Total Members"
                value={String(stats?.totalUsers ?? 0)}
                note="All registered accounts"
              />
              <StatCard
                title="Free Preview"
                value={String(stats?.freeUsers ?? 0)}
                note="Current free-access users"
              />
              <StatCard
                title="Premium Users"
                value={String(stats?.proUsers ?? 0)}
                note="Current paid/pro members"
              />
              <StatCard
                title="Admins"
                value={String(stats?.adminUsers ?? 0)}
                note="Privileged control accounts"
              />
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
                        <th className="px-4 py-3 font-medium">Email</th>
                        <th className="px-4 py-3 font-medium">Role</th>
                        <th className="px-4 py-3 font-medium">Verified</th>
                        <th className="px-4 py-3 font-medium">Joined</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10 text-white/80">
                      {(stats?.recentUsers || []).map((user) => (
                        <tr key={user.id}>
                          <td className="px-4 py-3">{user.email}</td>
                          <td className="px-4 py-3 uppercase">{user.role}</td>
                          <td className="px-4 py-3">
                            {user.verifiedAt ? "Yes" : "No"}
                          </td>
                          <td className="px-4 py-3">
                            {formatDate(user.createdAt)}
                          </td>
                        </tr>
                      ))}
                      {!stats?.recentUsers?.length && (
                        <tr>
                          <td
                            colSpan={4}
                            className="px-4 py-6 text-center text-white/45"
                          >
                            No users yet.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </SectionCard>

              <SectionCard
                title="System Snapshot"
                subtitle="Live owner view of platform availability"
              >
                <div className="space-y-3 text-sm text-white/75">
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                    <span>Verified Users</span>
                    <span className="text-emerald-300">
                      {stats?.verifiedUsers ?? 0}
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                    <span>Database</span>
                    <span className="text-emerald-300">Connected</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                    <span>Session Layer</span>
                    <span className="text-emerald-300">Active</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                    <span>Admin Gate</span>
                    <span className="text-cyan-300">Protected</span>
                  </div>
                </div>
              </SectionCard>
            </div>
          </div>
        );

      case "users":
        return (
          <SectionCard
            title="Users"
            subtitle="Live registered users from production database"
          >
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/[0.04] text-white/50">
                  <tr>
                    <th className="px-4 py-3 font-medium">Email</th>
                    <th className="px-4 py-3 font-medium">Role</th>
                    <th className="px-4 py-3 font-medium">Created</th>
                    <th className="px-4 py-3 font-medium">Last Login</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-white/80">
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td className="px-4 py-3">{user.email}</td>
                      <td className="px-4 py-3 uppercase">{user.role}</td>
                      <td className="px-4 py-3">{formatDate(user.createdAt)}</td>
                      <td className="px-4 py-3">
                        {formatDate(user.lastLoginAt)}
                      </td>
                    </tr>
                  ))}
                  {!users.length && (
                    <tr>
                      <td
                        colSpan={4}
                        className="px-4 py-6 text-center text-white/45"
                      >
                        No users found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </SectionCard>
        );

      case "packages":
        return (
          <SectionCard title="Packages" subtitle="Live membership distribution">
            <div className="grid gap-4 md:grid-cols-3">
              <StatCard
                title="Free Preview"
                value={String(stats?.freeUsers ?? 0)}
                note="Observer/free tier"
              />
              <StatCard
                title="Pro"
                value={String(stats?.proUsers ?? 0)}
                note="Paid members"
              />
              <StatCard
                title="Admin"
                value={String(stats?.adminUsers ?? 0)}
                note="Privileged accounts"
              />
            </div>
          </SectionCard>
        );

      case "payments":
        return (
          <SectionCard
            title="Payments"
            subtitle="Billing integration can be attached next"
          >
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-white/65">
              Payment layer is not wired yet. Core auth, database, and live user
              tracking are now the active production foundation.
            </div>
          </SectionCard>
        );

      case "access":
        return (
          <SectionCard
            title="Access Control"
            subtitle="Current production access state"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-white/80">
                Preview Access: <span className="text-emerald-300">Enabled</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-white/80">
                Database Auth: <span className="text-emerald-300">Enabled</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-white/80">
                Admin Session: <span className="text-emerald-300">Enabled</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-white/80">
                Admin Gate: <span className="text-emerald-300">Username + Password</span>
              </div>
            </div>
          </SectionCard>
        );

      case "activity":
        return (
          <SectionCard
            title="Activity"
            subtitle="Recent system-facing member behavior"
          >
            <div className="space-y-3 text-sm text-white/75">
              {(stats?.recentUsers || []).map((user) => (
                <div
                  key={user.id}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3"
                >
                  {user.email} registered at {formatDate(user.createdAt)}
                </div>
              ))}
              {!stats?.recentUsers?.length && (
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  No recent activity yet.
                </div>
              )}
            </div>
          </SectionCard>
        );

      case "settings":
        return (
          <SectionCard title="Settings" subtitle="Production foundation status">
            <div className="space-y-3 text-sm text-white/75">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                Neon database — connected
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                Vercel environment variables — active
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                Session signing — active
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                Admin gate — active
              </div>
            </div>
          </SectionCard>
        );

      default:
        return null;
    }
  }

  if (!isReady || loading) {
    return (
      <main className="min-h-screen bg-[#070b11] text-white">
        <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6">
          <div className="text-sm text-white/60">
            Loading admin control panel...
          </div>
        </div>
      </main>
    );
  }

  if (!isAuthorized) {
    return (
      <main className="min-h-screen bg-[#070b11] text-white">
        <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6">
          <div className="w-full max-w-md rounded-[28px] border border-white/10 bg-white/[0.03] p-8 shadow-2xl">
            <div className="mb-5 flex items-center">
              <EvatrixSiteLogo size="dashboard" className="mt-0" />
            </div>

            <div className="text-xs uppercase tracking-[0.28em] text-cyan-300/70">
              Admin Login
            </div>
            <h1 className="mt-3 text-3xl font-semibold">Evatrix Control Access</h1>
            <p className="mt-2 text-sm text-white/55">
              Enter admin username and password to open the owner dashboard.
            </p>

            <form onSubmit={handleAdminLogin} className="mt-8 space-y-4">
              <div>
                <label className="mb-2 block text-sm text-white/70">
                  Username
                </label>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter admin username"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none placeholder:text-white/25"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/70">
                  Password
                </label>
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

              {loadError ? (
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/70">
                  {loadError}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={loginLoading}
                className="w-full rounded-2xl bg-white px-4 py-3 font-medium text-black transition hover:opacity-90 disabled:opacity-60"
              >
                {loginLoading ? "Opening..." : "Enter Admin Panel"}
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
              <div className="mt-3 flex items-center">
                <EvatrixSiteLogo size="dashboard" className="mt-0" />
              </div>
              <div className="mt-2 text-sm text-white/50">Control Panel</div>
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
              Central administrative interface for live users, roles, access
              visibility, and production-side operational control.
            </p>
          </div>

          {renderContent()}
        </section>
      </div>
    </main>
  );
}