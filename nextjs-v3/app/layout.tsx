import type { Metadata } from "next";
import { Fraunces, Geist } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bellevuesolskydd.se"),
  title: "Bellevue Solskydd",
  description: "Lokalt solskyddsföretag i Malmö.",
  openGraph: {
    siteName: "Bellevue Solskydd",
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${fraunces.variable} ${geist.variable}`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
