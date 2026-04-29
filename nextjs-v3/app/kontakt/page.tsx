import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { StickyMobileCTA } from "@/components/sections/StickyMobileCTA";
import { Breadcrumbs } from "@/components/molecules/Breadcrumbs";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Divider } from "@/components/atoms/Divider";
import { JsonLd } from "@/components/JsonLd";
import {
  SITE_URL,
  graph,
  contactPageSchema,
  breadcrumbSchema,
} from "@/lib/schema";
import { ContactForm } from "./ContactForm";

const PAGE_URL = `${SITE_URL}/kontakt/`;

export const metadata: Metadata = {
  title: "Kontakt | Bellevue Solskydd Malmö",
  description:
    "Kontakta Bellevue Solskydd i Malmö. Boka kostnadsfri rådgivning, ring 040-18 11 00 eller skicka ett meddelande.",
  alternates: { canonical: PAGE_URL },
};

export default function KontaktPage() {
  const jsonLd = graph(
    breadcrumbSchema([
      { name: "Start", url: `${SITE_URL}/` },
      { name: "Kontakt", url: PAGE_URL },
    ]),
    contactPageSchema(PAGE_URL)
  );

  return (
    <>
      <JsonLd data={jsonLd} />
      <Header />
      <main className="flex-1 bg-canvas">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 pt-16 md:pt-24 pb-24">
          <Breadcrumbs
            items={[
              { name: "Start", url: `${SITE_URL}/` },
              { name: "Kontakt", url: PAGE_URL },
            ]}
          />

          <div className="mt-10 mb-14">
            <Eyebrow>Kontakt</Eyebrow>
            <h1 className="heading-display text-5xl md:text-7xl mt-6 text-ink">
              Kontakta oss.
            </h1>
            <Divider className="mt-7" />
            <p className="mt-7 body-copy text-ink-soft max-w-xl">
              Boka rådgivning, ställ en fråga eller be om en offert. Vi
              svarar samma vardag.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-12">
            <aside className="md:col-span-4 space-y-10">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-brand-green mb-3">
                  Telefon
                </p>
                <a
                  href="tel:+46401811100"
                  className="heading-section text-2xl text-ink hover:text-brand-green transition-colors"
                >
                  040-18 11 00
                </a>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-brand-green mb-3">
                  E-post
                </p>
                <a
                  href="mailto:info@bellevuesolskydd.se"
                  className="heading-section text-xl text-ink hover:text-brand-green transition-colors break-all"
                >
                  info@bellevuesolskydd.se
                </a>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-brand-green mb-3">
                  Besöksadress
                </p>
                <p className="body-copy text-ink">
                  Satellitvägen 16
                  <br />
                  245 34 Staffanstorp
                </p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-brand-green mb-3">
                  Öppettider
                </p>
                <ul className="body-copy text-ink space-y-1">
                  <li className="flex justify-between gap-4">
                    <span>Mån–Tor</span>
                    <span className="text-ink-soft">08:00 – 17:00</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span>Fredag</span>
                    <span className="text-ink-soft">08:00 – 16:00</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span>Lördag–Söndag</span>
                    <span className="text-ink-soft">Stängt</span>
                  </li>
                </ul>
              </div>
            </aside>

            <div className="md:col-span-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
