import Link from "next/link";

export default function CryptoPage() {
  return (
    <main className="evx-page">
      <div className="evx-bg-grid" />
      <div className="evx-glow evx-glow-a" />
      <div className="evx-glow evx-glow-b" />
      <div className="evx-orbit evx-orbit-1" />
      <div className="evx-orbit evx-orbit-2" />

      <section className="evx-shell">
        <div className="evx-panel evx-panel-wide">
          <div className="evx-panel-head">
            <div>
              <p className="evx-kicker">CRYPTO ACCESS LAYERS</p>
              <h1 className="evx-dashboard-title">Choose how you want to enter.</h1>
            </div>
            <span className="evx-pill">ACTIVE SIDE</span>
          </div>

          <p className="evx-hero-text evx-hero-tight">
            One structured member entry for the active launch side. Start with Free
            Preview, then move deeper from inside your dashboard when needed.
          </p>

          <div className="evx-card-grid evx-card-grid-2 evx-plan-grid">
            <div className="evx-mini-card evx-plan-card">
              <p className="evx-kicker">FREE PREVIEW</p>
              <h3>Start free</h3>
              <p>
                Controlled introduction to the Evatrix crypto environment for users
                who want to inspect the platform before moving deeper.
              </p>

              <ul className="evx-list">
                <li>Limited signal visibility</li>
                <li>Selected crypto-side preview</li>
                <li>Entry-level evaluation flow</li>
              </ul>

              <Link
                href="/access"
                className="evx-button evx-button-primary evx-inline-btn"
              >
                Create Account
              </Link>
            </div>

            <div className="evx-mini-card evx-plan-card evx-plan-card-pro">
              <p className="evx-kicker">PRO ACCESS</p>
              <h3>$29 / month</h3>
              <p>
                Full crypto-side visibility for users who want deeper setup access,
                cleaner execution structure, and stronger signal coverage.
              </p>

              <ul className="evx-list">
                <li>Full crypto signal access</li>
                <li>Deeper setup visibility</li>
                <li>Cleaner execution workflow</li>
              </ul>

              <div className="evx-pro-note">
                <strong>Available after member setup</strong>
                <span>Start with one account, then unlock Pro from inside the dashboard.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}