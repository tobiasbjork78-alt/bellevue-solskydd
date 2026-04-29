import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { StickyMobileCTA } from "@/components/sections/StickyMobileCTA";
import { Breadcrumbs } from "@/components/molecules/Breadcrumbs";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Divider } from "@/components/atoms/Divider";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, graph, breadcrumbSchema } from "@/lib/schema";

const PAGE_URL = `${SITE_URL}/om-oss/`;

export const metadata: Metadata = {
  title: "Om oss | Bellevue Solskydd Malmö",
  description:
    "Bellevue Solskydd är ett lokalt solskyddsföretag i Malmö med fokus på rådgivning, måttagning och egen montering.",
  alternates: { canonical: PAGE_URL },
};

export default function OmOssPage() {
  const jsonLd = graph(
    breadcrumbSchema([
      { name: "Start", url: `${SITE_URL}/` },
      { name: "Om oss", url: PAGE_URL },
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
              { name: "Om oss", url: PAGE_URL },
            ]}
          />

          <div className="mt-10 mb-10">
            <Eyebrow>Om Bellevue Solskydd</Eyebrow>
            <h1 className="heading-display text-5xl md:text-6xl mt-6 text-ink">
              Lokala specialister
              <br />
              <span className="text-brand-brass">i Malmö.</span>
            </h1>
            <Divider className="mt-7" />
          </div>

          <div className="rounded-premium border border-ink/10 bg-canvas-soft px-7 py-8 md:px-9 md:py-10">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-brand-green mb-3">
              Innehåll kommer snart
            </p>
            <h2 className="heading-section text-2xl md:text-3xl text-ink mb-3">
              Den fulla berättelsen kommer snart.
            </h2>
            <p className="body-copy text-ink-soft">
              Vi arbetar med att samla ihop bilder, fakta och referenser
              till en mer fyllig sida om Bellevue Solskydd. Tills vidare
              hittar du våra produkter, guider och kontaktuppgifter via
              menyn ovan.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3 text-sm text-ink-soft">
            <p>
              <span className="block text-xs font-medium uppercase tracking-[0.22em] text-brand-green mb-1">
                Telefon
              </span>
              <a
                href="tel:+46401811100"
                className="text-ink hover:text-brand-green transition-colors"
              >
                040-18 11 00
              </a>
            </p>
            <p>
              <span className="block text-xs font-medium uppercase tracking-[0.22em] text-brand-green mb-1">
                E-post
              </span>
              <a
                href="mailto:info@bellevuesolskydd.se"
                className="text-ink hover:text-brand-green transition-colors break-all"
              >
                info@bellevuesolskydd.se
              </a>
            </p>
            <p>
              <span className="block text-xs font-medium uppercase tracking-[0.22em] text-brand-green mb-1">
                Adress
              </span>
              <span className="text-ink">
                Satellitvägen 16
                <br />
                245 34 Staffanstorp
              </span>
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
