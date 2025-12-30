import { Inter, Outfit } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyButtons from "@/components/layout/StickyButtons";
import Script from "next/script";
import { Suspense } from "react";
import LayoutClient from "./layout-client";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import CookieConsent from "@/components/ui/CookieConsent";
import StructuredData from "@/components/seo/StructuredData";
import SmoothScroll from "@/components/ui/SmoothScroll";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

// Metadata configuration for SEO, Open Graph, and favicon
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.mdevsites.pl'),
  title: {
    default: "M.DEV - Tworzenie Stron Internetowych | Profesjonalne Strony WWW",
    template: "%s | M.DEV"
  },
  description: "Tworzę nowoczesne strony internetowe dla firm. Responsywny design, szybka realizacja, konkurencyjne ceny. Skontaktuj się dla bezpłatnej wyceny!",
  keywords: [
    "tworzenie stron internetowych",
    "strony www",
    "web development",
    "Next.js",
    "React",
    "strony firmowe",
    "portfolio",
    "web design",
    "programista",
    "developer"
  ],
  authors: [{ name: "M.DEV" }],
  creator: "M.DEV",
  publisher: "M.DEV",

  // Open Graph - dla social media i Google
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://m.dev",
    siteName: "M.DEV",
    title: "M.DEV - Tworzenie Profesjonalnych Stron Internetowych",
    description: "Tworzę nowoczesne strony internetowe dla firm. Responsywny design, szybka realizacja, konkurencyjne ceny.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "M.DEV - Profesjonalne Tworzenie Stron Internetowych",
      }
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "M.DEV - Tworzenie Stron Internetowych",
    description: "Tworzę nowoczesne strony internetowe dla firm. Responsywny design, szybka realizacja, konkurencyjne ceny.",
    images: ["/opengraph-image"],
  },

  // Dodatkowe meta tagi
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  verification: {
    google: "6WrMQY7U8lAfqyjAb3OWW98YJ1ldUv4r_e3LmuAaEIU",
  },
  icons: {
    icon: [
      { url: '/icon', sizes: 'any' },
    ],
    apple: [
      { url: '/icon' },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
      >
        <SmoothScroll>
          <StructuredData />
          <Suspense fallback={null}>
            <LayoutClient>
              {children}
            </LayoutClient>
          </Suspense>

          <CookieConsent />

          {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
            <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
          )}
        </SmoothScroll>
      </body>
    </html>
  );
}
