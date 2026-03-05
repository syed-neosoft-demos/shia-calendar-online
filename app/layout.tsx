import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

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
  metadataBase: new URL("https://shia-calendar-online.vercel.app"),
  title: {
    default: "Shia Calendar Online | Islamic Dates & Events",
    template: "%s | Shia Calendar Online",
  },
  description: "Find accurate Shia Islamic calendar dates, Islamic events, and Hijri dates online. Your go-to Shia Calendar Online.",
  keywords: ["Shia Calendar Online", "Shia Calendar", "Islamic Calendar", "Hijri Calendar", "Shia Events", "Accurate Shia Calendar"],
  alternates: {
    canonical: "https://shia-calendar-online.vercel.app",
  },
  authors: [{ name: "Shia Calendar Online" }],
  creator: "Shia Calendar Online",
  openGraph: {
    title: "Shia Calendar Online | Islamic Dates & Events",
    description: "Find accurate Shia Islamic calendar dates, Islamic events, and Hijri dates online. Your go-to Shia Calendar Online.",
    url: "https://shia-calendar-online.vercel.app",
    siteName: "Shia Calendar Online",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/calendar.gif",
    shortcut: "/calendar.gif",
    apple: "/calendar.gif",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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