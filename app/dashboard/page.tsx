import styles from "./dashboard.module.css";

const signalRows = [
  { symbol: "BTCUSDT", bias: "LONG", setup: "Trend Continuation", score: 91, status: "Monitoring" },
  { symbol: "SOLUSDT", bias: "LONG", setup: "Liquidity Reclaim", score: 88, status: "Queued" },
  { symbol: "ETHUSDT", bias: "SHORT", setup: "Failed Expansion", score: 84, status: "Watching" },
  { symbol: "LINKUSDT", bias: "LONG", setup: "Break + Retest", score: 82, status: "Waiting" },
];

export default function DashboardOverviewPage() {
  return (
    <div className={styles.overviewPage}>
      <section className={styles.overviewHero}>
        <div className={styles.heroTop}>
          <div className={styles.heroCopy}>
            <div className={styles.heroKicker}>Preview terminal</div>
            <h2 className={styles.heroTitle}>Market intelligence layer</h2>
            <p className={styles.heroSubtitle}>
              Signal visibility. Catalyst tracking. Execution-ready workflow.
            </p>
          </div>

          <div className={styles.heroActionsInline}>
            <button className={styles.heroGhost}>Observer</button>
            <button className={styles.heroPrimary}>Upgrade</button>
          </div>
        </div>

        <div className={styles.statStrip}>
          <div className={styles.statCell}>
            <span className={styles.statLabel}>Regime</span>
            <strong className={styles.statValue}>Expansion</strong>
            <small className={styles.statMeta}>Majors showing risk appetite</small>
          </div>

          <div className={styles.statCell}>
            <span className={styles.statLabel}>Queue</span>
            <strong className={styles.statValue}>12</strong>
            <small className={styles.statMeta}>3 high-conviction candidates</small>
          </div>

          <div className={styles.statCell}>
            <span className={styles.statLabel}>Catalyst</span>
            <strong className={styles.statValue}>04h 20m</strong>
            <small className={styles.statMeta}>Next monitored event window</small>
          </div>

          <div className={styles.statCell}>
            <span className={styles.statLabel}>Readiness</span>
            <strong className={styles.statValue}>92%</strong>
            <small className={styles.statMeta}>Scanner healthy, execution restricted</small>
          </div>
        </div>
      </section>

      <div className={styles.overviewMainGrid}>
        <section className={styles.overviewPanel}>
          <div className={styles.panelTop}>
            <h3>Snapshot</h3>
            <span>Operator view</span>
          </div>

          <div className={styles.snapshotGrid}>
            <article className={styles.snapshotItem}>
              <span className={styles.snapshotEyebrow}>Live signals</span>
              <strong>Selective flow</strong>
              <p>High-conviction names stay visible while weaker setups remain filtered.</p>
            </article>

            <article className={styles.snapshotItem}>
              <span className={styles.snapshotEyebrow}>Market pulse</span>
              <strong>Trend participation broadening</strong>
              <p>BTC, SOL, and selected beta names are leading directional strength.</p>
            </article>

            <article className={styles.snapshotItem}>
              <span className={styles.snapshotEyebrow}>News rail</span>
              <strong>Prepared for catalysts</strong>
              <p>Future news layer will connect exchange headlines and macro windows.</p>
            </article>

            <article className={styles.snapshotItem}>
              <span className={styles.snapshotEyebrow}>Execution</span>
              <strong>Restricted in preview</strong>
              <p>Visibility exists, but action remains protected behind access.</p>
            </article>
          </div>
        </section>

        <section className={styles.overviewPanel}>
          <div className={styles.panelTop}>
            <h3>Signal preview</h3>
            <span>Top monitored instruments</span>
          </div>

          <div className={styles.tableWrap}>
            <table className={styles.signalTable}>
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Bias</th>
                  <th>Setup</th>
                  <th>Score</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {signalRows.map((row) => (
                  <tr key={row.symbol}>
                    <td>{row.symbol}</td>
                    <td>{row.bias}</td>
                    <td>{row.setup}</td>
                    <td>{row.score}</td>
                    <td>{row.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <section className={styles.valueBand}>
        <div className={styles.valueCardBlue}>
          <span className={styles.valueLabel}>Premium path</span>
          <h3>Upgrade to full terminal access</h3>
          <p>Unlock deeper analytics, broader scanner access, and validation layers.</p>
        </div>

        <div className={styles.valueCardGreen}>
          <span className={styles.valueLabel}>Decision layer</span>
          <h3>Move from visibility to validated action</h3>
          <p>Open strategy validation, catalyst ranking, and execution-grade workflow.</p>
        </div>
      </section>

      <section className={styles.featureGrid}>
        <article className={styles.featureBox}>
          <strong>Live execution visibility</strong>
          <p>Track trade flow, RR development, and recent closed positioning.</p>
        </article>

        <article className={styles.featureBox}>
          <strong>Strategy-grade validation</strong>
          <p>Review performance, diagnostics, and structure before acting on a signal.</p>
        </article>

        <article className={styles.featureBox}>
          <strong>Radar diagnostics</strong>
          <p>Inspect clustering, timing edge, volatility behavior, and level structure.</p>
        </article>

        <article className={styles.featureBox}>
          <strong>Private workflow layer</strong>
          <p>Route filtered premium signals into a more operational terminal view.</p>
        </article>
      </section>
    </div>
  );
}