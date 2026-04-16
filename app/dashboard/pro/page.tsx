"use client";

import styles from "../dashboard.module.css";

export default function ProSetupPage() {
  return (
    <main className={styles.page}>
      <div className={styles.gridBg} />
      <div className={styles.glowA} />
      <div className={styles.glowB} />
      <div className={styles.glowC} />

      <section className={styles.shell}>
        <div className={styles.card} style={{ padding: 22, marginBottom: 12 }}>
          <div className={styles.upgradeHeader}>PRO ACCESS PATH</div>
          <div className={styles.upgradeTitle} style={{ fontSize: "clamp(34px,4vw,58px)" }}>
            Continue into the Pro access process.
          </div>
          <p style={{ color: "#a5b8d5", maxWidth: 860, lineHeight: 1.7, margin: 0 }}>
            This path is reserved for members who want deeper crypto visibility, stronger
            execution structure, and expanded account access.
          </p>
        </div>

        <div className={styles.layout} style={{ gridTemplateColumns: "1.4fr 0.9fr", gridTemplateAreas: `"feed sidebar" "upgradeA upgradeA" "bottom bottom"` }}>
          <section className={`${styles.card} ${styles.feed}`} style={{ padding: 18 }}>
            <div className={styles.cardTitle}>PRO SETUP</div>

            <div style={{ display: "grid", gap: 14 }}>
              <label style={{ display: "grid", gap: 8 }}>
                <span style={{ color: "#dbe8ff", fontSize: 14 }}>Full name</span>
                <input
                  type="text"
                  placeholder="As written on your ID"
                  style={{
                    height: 52,
                    borderRadius: 14,
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.04)",
                    color: "#f4f8ff",
                    padding: "0 16px",
                    outline: "none",
                  }}
                />
              </label>

              <label style={{ display: "grid", gap: 8 }}>
                <span style={{ color: "#dbe8ff", fontSize: 14 }}>Phone number</span>
                <input
                  type="tel"
                  placeholder="+48 000 000 000"
                  style={{
                    height: 52,
                    borderRadius: 14,
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.04)",
                    color: "#f4f8ff",
                    padding: "0 16px",
                    outline: "none",
                  }}
                />
              </label>

              <label style={{ display: "grid", gap: 8 }}>
                <span style={{ color: "#dbe8ff", fontSize: 14 }}>Preferred Pro path</span>
                <select
                  style={{
                    height: 52,
                    borderRadius: 14,
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.04)",
                    color: "#f4f8ff",
                    padding: "0 16px",
                    outline: "none",
                  }}
                >
                  <option value="signals">Pro Signals</option>
                  <option value="auto">Pro Auto</option>
                </select>
              </label>

              <button className={styles.upgradeButtonGold} style={{ width: "fit-content", border: "none", cursor: "pointer" }}>
                Continue Upgrade
              </button>
            </div>
          </section>

          <aside className={`${styles.card} ${styles.sidebar}`}>
            <div className={styles.cardTitle}>WHAT HAPPENS NEXT</div>

            <div className={styles.infoBox}>
              <span>Step 1</span>
              <strong>Collect full name + phone</strong>
            </div>

            <div className={styles.infoBox}>
              <span>Step 2</span>
              <strong>Billing / payment activation</strong>
            </div>

            <div className={styles.infoBox}>
              <span>Step 3</span>
              <strong>Expanded dashboard access</strong>
            </div>
          </aside>

          <section className={`${styles.card} ${styles.upgradePanel}`} style={{ padding: 18 }}>
            <div className={styles.upgradeHeader}>NOTE</div>
            <div className={styles.upgradeTitle}>Keep the friction controlled</div>
            <p style={{ color: "#a5b8d5", lineHeight: 1.7, margin: 0 }}>
              Full name and phone are enough for this stage. Passport-level friction is unnecessary right now.
            </p>
          </section>

          <footer className={`${styles.card} ${styles.bottomTicker}`}>
            <div className={styles.bottomTickerLeft}>PRO STATUS</div>
            <div className={styles.bottomTickerCenter}>
              <span>FULL NAME REQUIRED</span>
              <span>PHONE REQUIRED</span>
              <span>PAYMENT PENDING</span>
            </div>
            <div />
          </footer>
        </div>
      </section>
    </main>
  );
}