import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const siteUrl = "https://shia-calendar-online.vercel.app";
const siteName = "Shia Calendar Online";
const authorName = "Syed Hasnain Mehadi";
const authorUrl = "https://www.linkedin.com/in/syed-hasnain-mehadi";
const siteDescription =
  "Use Shia Calendar Online to check Hijri dates, Shia Islamic events, martyrdoms, celebrations, and important Ahlul Bayt occasions.";
const siteKeywords = [
  "Shia Calendar Online",
  "Shia Calendar",
  "Shia Islamic Calendar",
  "Hijri Calendar",
  "Islamic Calendar",
  "Shia Events",
  "Ahlul Bayt Events",
  "Muharram Calendar",
  "Ashura Date",
  "Arbaeen Date",
  "Ramadan Calendar",
];

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: "Shia Calendar Online | Hijri Dates & Shia Islamic Events",
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: siteKeywords,
  authors: [{ name: authorName, url: authorUrl }],
  creator: authorName,
  publisher: authorName,
  category: "religion",
  alternates: {
    canonical: siteUrl,
  },
  manifest: "/manifest.webmanifest",
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
  openGraph: {
    title: "Shia Calendar Online | Hijri Dates & Shia Islamic Events",
    description: siteDescription,
    url: siteUrl,
    siteName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Shia Calendar Online Hijri dates and Shia Islamic events",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shia Calendar Online | Hijri Dates & Shia Islamic Events",
    description: siteDescription,
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/calendar.gif",
    shortcut: "/calendar.gif",
    apple: "/calendar.gif",
  },
  verification: {
    google: "pyScrXQ2vkiMkpMuQ6BdvCQqnhis8y2cXfTw6QsrR6E",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#author`,
      name: authorName,
      url: authorUrl,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description: siteDescription,
      inLanguage: "en",
      author: {
        "@id": `${siteUrl}/#author`,
      },
      publisher: {
        "@id": `${siteUrl}/#author`,
      },
    },
    {
      "@type": "WebApplication",
      "@id": `${siteUrl}/#webapp`,
      name: siteName,
      url: siteUrl,
      description: siteDescription,
      applicationCategory: "ReferenceApplication",
      operatingSystem: "Any",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      creator: {
        "@id": `${siteUrl}/#author`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        {/* Google Adsense */}
        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1234567890123456"
          crossOrigin="anonymous"
        />

        <Analytics />
        {children}
      </body>
    </html>
  );
}
