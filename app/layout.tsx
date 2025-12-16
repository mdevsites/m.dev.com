"use client";

import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyButtons from "@/components/layout/StickyButtons";
import Script from "next/script";
import { useSearchParams, usePathname } from "next/navigation";
import { Suspense } from "react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

function LayoutContent({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const hideNav = searchParams.get("hideNav") === "true";
  const isDemo = pathname?.startsWith("/demos");

  return (
    <>
      {!hideNav && !isDemo && <Navbar />}
      <main>{children}</main>
      {!hideNav && !isDemo && <Footer />}
      {!hideNav && !isDemo && <StickyButtons />}

      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
            `}
          </Script>
        </>
      )}
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <head>
        <title>M.DEV - Tworzenie Stron Internetowych | Profesjonalne Strony WWW</title>
        <meta name="description" content="Tworzę nowoczesne strony internetowe dla firm. Responsywny design, szybka realizacja, konkurencyjne ceny. Skontaktuj się dla bezpłatnej wyceny!" />
        <meta name="keywords" content="tworzenie stron internetowych, strony www, web development, Next.js, React, strony firmowe" />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
      >
        <Suspense fallback={null}>
          <LayoutContent>{children}</LayoutContent>
        </Suspense>
      </body>
    </html>
  );
}
