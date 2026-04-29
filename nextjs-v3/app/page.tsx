import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { HeroArchitectural } from "@/components/sections/HeroArchitectural";
import { LocalProofSection } from "@/components/sections/LocalProofSection";
import { ProductCategoryGrid } from "@/components/sections/ProductCategoryGrid";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { Footer } from "@/components/sections/Footer";
import { StickyMobileCTA } from "@/components/sections/StickyMobileCTA";
import { RevealProvider } from "@/components/RevealProvider";
import { JsonLd } from "@/components/JsonLd";
import { siteGraph, SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title:
    "Solskydd Malmö | Markiser, persienner, plissé & rullgardiner — Bellevue Solskydd",
  description:
    "Lokalt solskyddsföretag i Malmö. Markiser, persienner, plissegardiner, rullgardiner, zip screen och pergola — från rådgivning till montering.",
  alternates: {
    canonical: `${SITE_URL}/`,
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={siteGraph()} />
      <RevealProvider />
      <Header />
      <main className="flex-1">
        <HeroArchitectural />
        <LocalProofSection />
        <ProductCategoryGrid />
        <ConsultationCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
