export const siteConfig = {
  name: "Evatrix",
  title: "Evatrix Global",
  description:
    "Institutional-grade crypto signal intelligence, execution visibility, and controlled market access.",
  domain: "https://evatrixglobal.com",
  launchMode: "crypto-first",
  forexEnabled: false,

  seo: {
    defaultTitle: "Evatrix Global",
    titleTemplate: "%s | Evatrix Global",
    description:
      "Institutional-grade crypto signal intelligence, execution visibility, and controlled market access.",
    keywords: [
      "Evatrix",
      "Evatrix Global",
      "crypto signals",
      "crypto intelligence",
      "trading signals",
      "market intelligence",
      "execution visibility",
      "crypto market analysis",
      "institutional-grade trading",
      "crypto trading platform",
    ],
    ogImage: "/brand/1000151293.png",
    logo: "/brand/1000151293.png",
  },

  company: {
    legalName: "Evatrix Global",
    brandName: "Evatrix",
    url: "https://evatrixglobal.com",
    email: "support@evatrixglobal.com",
  },

  hero: {
    kicker: "Global Market Intelligence",
    title: "Institutional-grade crypto signal intelligence for disciplined operators.",
    subtitle:
      "Evatrix is a premium access environment for traders who want cleaner signal visibility, stronger execution context, and a more serious market workflow.",
    primaryCta: "Explore Crypto",
    secondaryCta: "View Live Showcase",
  },

  stats: {
    winRate: "61.4%",
    closedTrades: "1,344",
    realizedR: "+245.4R",
    activePairs: "50+",
  },

  pricing: [
    {
      id: "starter",
      label: "Starter",
      duration: "1 Month",
      price: "25 USDT",
      save: null,
      featured: false,
      points: [
        "Structured crypto signal access",
        "Live market overview",
        "Watchlist and scanner visibility",
        "Controlled launch entry",
      ],
    },
    {
      id: "pro",
      label: "Pro",
      duration: "3 Months",
      price: "65 USDT",
      save: "Save 20%",
      featured: true,
      points: [
        "Deeper signal visibility",
        "Trade history and performance layer",
        "Execution-readiness context",
        "Cleaner premium workspace access",
      ],
    },
    {
      id: "elite",
      label: "Elite",
      duration: "6 Months",
      price: "115 USDT",
      save: "Save 33%",
      featured: false,
      points: [
        "Extended premium access",
        "Full crypto launch-side visibility",
        "Priority access structure",
        "Longer-cycle operator workflow",
      ],
    },
  ],

  showcaseCards: [
    {
      symbol: "BTCUSDT",
      side: "LONG",
      rr: "+2.31R",
      entry: "62,180",
      exit: "63,605",
      stop: "61,420",
      setup: "Liquidity Reclaim",
      duration: "4h 12m",
    },
    {
      symbol: "ETHUSDT",
      side: "LONG",
      rr: "+1.65R",
      entry: "3,265",
      exit: "3,327",
      stop: "3,224",
      setup: "EMA Pullback",
      duration: "2h 44m",
    },
    {
      symbol: "SOLUSDT",
      side: "SHORT",
      rr: "+1.42R",
      entry: "143.10",
      exit: "140.82",
      stop: "144.46",
      setup: "Pressure Fade",
      duration: "3h 08m",
    },
    {
      symbol: "BNBUSDT",
      side: "LONG",
      rr: "+2.04R",
      entry: "578.40",
      exit: "589.90",
      stop: "572.80",
      setup: "Trend Continuation",
      duration: "5h 21m",
    },
  ],

  footer: {
    legal: ["Terms", "Privacy", "Risk Disclosure", "Help Center"],
    copyright: "© 2026 Evatrix. All rights reserved.",
  },
} as const;