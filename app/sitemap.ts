import type { MetadataRoute } from "next";
import { siteConfig } from "./config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.domain;

  const routes = [
    "",
    "/login",
    "/signup",
    "/register",
    "/privacy",
    "/terms",
    "/risk-disclosure",
    "/help",
    "/access",
    "/crypto",
    "/forex",
  ];

  return routes.map((route) => ({
    url: new URL(route, baseUrl).toString(), // 🔥 TEK KRİTİK SATIR
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}