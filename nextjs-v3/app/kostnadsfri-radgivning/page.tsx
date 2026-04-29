import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { StickyMobileCTA } from "@/components/sections/StickyMobileCTA";
import { Breadcrumbs } from "@/components/molecules/Breadcrumbs";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Divider } from "@/components/atoms/Divider";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, graph, breadcrumbSchema } from "@/lib/schema";
import { Wizard } from "./Wizard";

const PAGE_URL = `${SITE_URL}/kostnadsfri-radgivning/`;

export const metadata: Metadata = {
  title:
    "Hitta rätt solskydd — kostnadsfri rådgivning | Bellevue Solskydd",
  description:
    "Svara på 5 frågor och få en personlig rekommendation på vilket solskydd som passar dina fönster i Malmö.",
  alternates: { canonical: PAGE_URL },
};

export default function KostnadsfriRadgivningPage() {
  const jsonLd = graph(
    breadcrumbSchema([
      { name: "Start", url: `${SITE_URL}/` },
      { name: "Kostnadsfri rådgivning", url: PAGE_URL },
    ])
  );

  return (
    <>
      <JsonLd data={jsonLd} />
      <Header />
      <main className="flex-1 bg-canvas">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 pt-16 md:pt-24 pb-24">
          <Breadcrumbs
            items={[
              { name: "Start", url: `${SITE_URL}/` },
              { name: "Kostnadsfri rådgivning", url: PAGE_URL },
            ]}
          />

          <div className="mt-10 mb-10">
            <Eyebrow>Personlig rekommendation</Eyebrow>
            <h1 className="heading-display text-5xl md:text-6xl mt-6 text-ink">
              Hitta rätt solskydd
              <br />
              <span className="text-brand-brass">på 60 sekunder.</span>
            </h1>
            <Divider className="mt-7" />
            <p className="mt-7 body-copy text-ink-soft max-w-xl">
              Svara på fem korta frågor om dina fönster och vad du vill
              lösa. Du får en saklig rekommendation och kan boka
              kostnadsfri rådgivning direkt.
            </p>
          </div>

          <Wizard />
        </div>
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
