import { redirect } from "next/navigation";
import { getCurrentUser } from "@/app/lib/session";
import { getStats } from "@/app/lib/db";

export default async function ControlPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  if (user.role !== "admin") redirect("/dashboard");

  const stats = getStats();

  return (
    <main className="evx-control-page">
      <section className="evx-shell">
        <div className="evx-panel">
          <div className="evx-panel-head">
            <div>
              <p className="evx-kicker">INTERNAL CONTROL</p>
              <h1 className="evx-dashboard-title">Owner control center</h1>
            </div>
            <span className="evx-pill">HIDDEN</span>
          </div>

          <p className="evx-hero-text">
            Hidden operational layer for member monitoring, role checks, access overview, and signup activity.
          </p>
        </div>

        <div className="evx-card-grid evx-card-grid-4">
          <div className="evx-mini-card">
            <p className="evx-kicker">TOTAL USERS</p>
            <h3>{stats.totalUsers}</h3>
          </div>
          <div className="evx-mini-card">
            <p className="evx-kicker">VERIFIED</p>
            <h3>{stats.verifiedUsers}</h3>
          </div>
          <div className="evx-mini-card">
            <p className="evx-kicker">FREE</p>
            <h3>{stats.freeUsers}</h3>
          </div>
          <div className="evx-mini-card">
            <p className="evx-kicker">PRO + ADMIN</p>
            <h3>{stats.proUsers + stats.adminUsers}</h3>
          </div>
        </div>

        <div className="evx-card-grid evx-card-grid-2">
          <div className="evx-mini-card evx-span-2">
            <p className="evx-kicker">RECENT USERS</p>
            <div style={{ overflowX: "auto", marginTop: 12 }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: "left", padding: "12px 8px" }}>Email</th>
                    <th style={{ textAlign: "left", padding: "12px 8px" }}>Role</th>
                    <th style={{ textAlign: "left", padding: "12px 8px" }}>Created</th>
                    <th style={{ textAlign: "left", padding: "12px 8px" }}>Last Login</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.recentUsers.map((u) => (
                    <tr key={u.id}>
                      <td style={{ padding: "12px 8px", color: "#dce8ff" }}>{u.email}</td>
                      <td style={{ padding: "12px 8px", color: "#8ecfff" }}>{u.role}</td>
                      <td style={{ padding: "12px 8px", color: "#96a8c5" }}>{new Date(u.createdAt).toLocaleString()}</td>
                      <td style={{ padding: "12px 8px", color: "#96a8c5" }}>{u.lastLoginAt ? new Date(u.lastLoginAt).toLocaleString() : "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}