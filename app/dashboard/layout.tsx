"use client";

import EvatrixSiteLogo from "../components/evatrix-site-logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import styles from "./dashboard.module.css";


type NavItem = {
  href: string;
  label: string;
  icon: ReactNode;
  locked?: boolean;
};

const IconGrid = () => (
  <svg viewBox="0 0 24 24" className={styles.navSvg} aria-hidden="true">
    <rect x="4" y="4" width="6" height="6" rx="1.6" />
    <rect x="14" y="4" width="6" height="6" rx="1.6" />
    <rect x="4" y="14" width="6" height="6" rx="1.6" />
    <rect x="14" y="14" width="6" height="6" rx="1.6" />
  </svg>
);

const IconPulse = () => (
  <svg viewBox="0 0 24 24" className={styles.navSvg} aria-hidden="true">
    <path
      d="M3 12h4l2-4 3.5 8 2.2-5H21"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconHistory = () => (
  <svg viewBox="0 0 24 24" className={styles.navSvg} aria-hidden="true">
    <path
      d="M12 7v5l3 2"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M20 12a8 8 0 1 1-2.2-5.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M20 4v4h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const IconStar = () => (
  <svg viewBox="0 0 24 24" className={styles.navSvg} aria-hidden="true">
    <path
      d="M12 4.8l2.2 4.4 4.8.7-3.5 3.4.8 4.8L12 16l-4.3 2.1.8-4.8-3.5-3.4 4.8-.7z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

const IconNews = () => (
  <svg viewBox="0 0 24 24" className={styles.navSvg} aria-hidden="true">
    <rect x="4" y="5" width="16" height="14" rx="2.5" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M8 10h8M8 13h8M8 16h5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconSearch = () => (
  <svg viewBox="0 0 24 24" className={styles.navSvg} aria-hidden="true">
    <circle cx="11" cy="11" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M20 20l-4-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconBars = () => (
  <svg viewBox="0 0 24 24" className={styles.navSvg} aria-hidden="true">
    <path d="M5 18h3V9H5zm5 0h3V5h-3zm5 0h4v-7h-4z" />
  </svg>
);

const IconChart = () => (
  <svg viewBox="0 0 24 24" className={styles.navSvg} aria-hidden="true">
    <path d="M4 19h16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M6 15l3-3 3 2 5-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconShield = () => (
  <svg viewBox="0 0 24 24" className={styles.navSvg} aria-hidden="true">
    <path
      d="M12 3l7 3v5c0 4.8-2.8 8.1-7 10-4.2-1.9-7-5.2-7-10V6z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

const IconSpark = () => (
  <svg viewBox="0 0 24 24" className={styles.navSvg} aria-hidden="true">
    <path
      d="M12 4l1.8 4.2L18 10l-4.2 1.8L12 16l-1.8-4.2L6 10l4.2-1.8z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

const IconUser = () => (
  <svg viewBox="0 0 24 24" className={styles.navSvg} aria-hidden="true">
    <circle cx="12" cy="8" r="3.2" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M5 19c1.4-3 4-4.5 7-4.5s5.6 1.5 7 4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconCard = () => (
  <svg viewBox="0 0 24 24" className={styles.navSvg} aria-hidden="true">
    <rect x="3" y="6" width="18" height="12" rx="2.5" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M3 10h18" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const IconHelp = () => (
  <svg viewBox="0 0 24 24" className={styles.navSvg} aria-hidden="true">
    <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M9.8 9.2a2.5 2.5 0 1 1 3.7 2.2c-.9.5-1.5 1.1-1.5 2.1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="17.2" r="1" />
  </svg>
);

const IconLogout = () => (
  <svg viewBox="0 0 24 24" className={styles.navSvg} aria-hidden="true">
    <path d="M10 5H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M14 8l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 12H9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const LockIcon = () => (
  <svg viewBox="0 0 24 24" className={styles.lockSvg} aria-hidden="true">
    <rect x="6" y="11" width="12" height="9" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M9 11V8a3 3 0 1 1 6 0v3" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const navGroups: { title: string; items: NavItem[] }[] = [
  {
    title: "COMMAND",
    items: [
      { href: "/dashboard", label: "Overview", icon: <IconGrid /> },
      { href: "/dashboard/signals", label: "Live Signals", icon: <IconPulse /> },
      { href: "/dashboard/history", label: "Trade History", icon: <IconHistory /> },
      { href: "/dashboard/watchlist", label: "Watchlist", icon: <IconStar /> },
    ],
  },
  {
    title: "INTELLIGENCE",
    items: [
      { href: "/dashboard/pulse", label: "Market Pulse", icon: <IconPulse /> },
      { href: "/dashboard/news", label: "News & Catalysts", icon: <IconNews />, locked: true },
      { href: "/dashboard/scanner", label: "Symbol Scanner", icon: <IconSearch />, locked: true },
      { href: "/dashboard/strategy", label: "Strategy Intel", icon: <IconBars />, locked: true },
    ],
  },
  {
    title: "ANALYTICS",
    items: [
      { href: "/dashboard/performance", label: "Performance", icon: <IconChart />, locked: true },
      { href: "/dashboard/risk", label: "Risk Monitor", icon: <IconShield />, locked: true },
      { href: "/dashboard/execution", label: "Execution Readiness", icon: <IconSpark />, locked: true },
    ],
  },
  {
    title: "ACCOUNT",
    items: [
      { href: "/dashboard/profile", label: "Profile", icon: <IconUser /> },
      { href: "/dashboard/billing", label: "Billing", icon: <IconCard /> },
      { href: "/dashboard/help", label: "Help Center", icon: <IconHelp /> },
      { href: "/dashboard/logout", label: "Logout", icon: <IconLogout /> },
    ],
  },
];

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className={styles.appShell}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarInner}>
          <div className={styles.brandWrap}>
           <EvatrixSiteLogo />
          </div>
          <div className={styles.statusCard}>
            <span className={styles.statusDot} />
            <div>
              <strong>System Active</strong>
              <p>Crypto intelligence layer online</p>
            </div>
          </div>

          <nav className={styles.nav}>
            {navGroups.map((group) => (
              <div key={group.title} className={styles.navGroup}>
                <div className={styles.navGroupTitle}>{group.title}</div>

                <div className={styles.navItems}>
                  {group.items.map((item) => {
                    const active =
                      item.href === "/dashboard"
                        ? pathname === "/dashboard"
                        : item.href !== "/logout" && pathname.startsWith(item.href);

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={[
                          styles.navItem,
                          active ? styles.navItemActive : "",
                          item.locked ? styles.navItemLocked : "",
                        ].join(" ")}
                      >
                        <span className={styles.navLead}>{item.icon}</span>
                        <span className={styles.navLabel}>{item.label}</span>
                        {item.locked ? (
                          <span className={styles.navLock}>
                            <LockIcon />
                          </span>
                        ) : null}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>

          <div className={styles.sidebarFoot}>
            <div className={styles.systemMini}>
              <span className={styles.systemMiniDot} />
              <div>
                <strong>Scanner Active</strong>
                <p>Auto-refresh: 30s</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <main className={styles.mainArea}>
        <header className={styles.topbar}>
          <div>
            <div className={styles.topbarEyebrow}>PRIVATE TERMINAL</div>
            <h1 className={styles.topbarTitle}>Evatrix Control Center</h1>
          </div>

          <div className={styles.topbarActions}>
            <button className={styles.ghostButton}>Alerts</button>
            <button className={styles.ghostButton}>Workspace</button>
            <button className={styles.primaryButton}>Upgrade Access</button>
          </div>
        </header>

        <section className={styles.contentArea}>{children}</section>
      </main>
    </div>
  );
}