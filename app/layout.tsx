import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "./config";

const siteUrl = siteConfig.domain;
const logoUrl = `${siteUrl}${siteConfig.seo.logo}`;
const ogImageUrl = `${siteUrl}${siteConfig.seo.ogImage}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.seo.defaultTitle,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.seo.description,
  keywords: [...siteConfig.seo.keywords],
  applicationName: siteConfig.title,
  authors: [{ name: siteConfig.company.legalName }],
  creator: siteConfig.company.legalName,
  publisher: siteConfig.company.legalName,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteConfig.title,
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.description,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 1200,
        alt: `${siteConfig.title} logo`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.description,
    images: [ogImageUrl],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: siteConfig.seo.logo, type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: siteConfig.seo.logo }],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.company.legalName,
    alternateName: siteConfig.company.brandName,
    url: siteUrl,
    logo: logoUrl,
    image: logoUrl,
    description: siteConfig.seo.description,
    email: siteConfig.company.email,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.title,
    url: siteUrl,
    description: siteConfig.seo.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.company.legalName,
      logo: {
        "@type": "ImageObject",
        url: logoUrl,
      },
    },
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}