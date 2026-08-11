import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";

// Self-hosted (not next/font/google): the Google Fonts build-time fetch
// crashed on Vercel ("TypeError: Cannot read properties of null (reading
// '1')" in @next/font's loader) — a known fragility in fetching Google
// Fonts CSS during the build. Bundling the variable font files directly
// removes that network dependency entirely.
const ebGaramond = localFont({
  src: "./fonts/EBGaramond-Variable.ttf",
  weight: "400 800",
  variable: "--font-display",
  display: "swap",
});

const manrope = localFont({
  src: "./fonts/Manrope-Variable.ttf",
  weight: "200 800",
  variable: "--font-body",
  display: "swap",
});

const keywords = [
  "digital health systems Africa",
  "health information systems",
  "DHIS2 integration",
  "health systems strengthening",
  "health data interoperability",
  "health systems audit",
  "Nairobi health tech",
  "African health data",
];

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Resilient Health Systems for Africa`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords,
  authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Resilient Health Systems for Africa`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Resilient Health Systems for Africa`,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${ebGaramond.variable} ${manrope.variable}`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block"
          rel="stylesheet"
        />
        <JsonLd />
      </head>
      <body className="bg-background text-on-surface font-body selection:bg-primary-fixed-dim selection:text-on-primary-fixed">
        <Header />
        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
