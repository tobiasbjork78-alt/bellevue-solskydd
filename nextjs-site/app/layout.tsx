import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Inter som singleton — används för både display (weight 200-300) och body
// (weight 400-500). Waldenburg är proprietär och kan inte laddas via
// next/font/google; Inter vid låg vikt är närmsta Google-font-approximation.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bellevuesolskydd.se"),
  title: "Bellevue Solskydd — Måttanpassade solskydd i Malmö, Lund och Staffanstorp",
  description:
    "Måttanpassade markiser, persienner och gardiner med montering och kostnadsfritt hembesök. Upp till 10 års garanti. Kvalitet sedan 1982.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={inter.variable}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
