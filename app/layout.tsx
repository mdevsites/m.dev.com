import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyButtons from "@/components/layout/StickyButtons";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "M.DEV - Tworzenie Stron Internetowych | Profesjonalne Strony WWW",
  description: "Tworzę nowoczesne strony internetowe dla firm. Responsywny design, szybka realizacja, konkurencyjne ceny. Skontaktuj się dla bezpłatnej wyceny!",
  keywords: "tworzenie stron internetowych, strony www, web development, Next.js, React, strony firmowe",
  authors: [{ name: "M.DEV" }],
  openGraph: {
    title: "M.DEV - Profesjonalne Tworzenie Stron Internetowych",
    description: "Nowoczesne strony internetowe, które sprzedają. Responsywny design i najnowsze technologie.",
    type: "website",
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
        <Navbar />
        <main>{children}</main>
        <Footer />

        <StickyButtons />

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
      </body>
    </html>
  );
}
