import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/molecules/Breadcrumbs";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Divider } from "@/components/atoms/Divider";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, graph, breadcrumbSchema } from "@/lib/schema";

const PAGE_URL = `${SITE_URL}/guider/`;

export const metadata: Metadata = {
  title: "Guider | Solskydd för Malmö — Bellevue Solskydd",
  description:
    "Saklig vägledning om solskydd: vilken produkt passar bäst, jämförelser och praktiska råd för fönster, fasader och uteplatser i Malmö.",
  alternates: { canonical: PAGE_URL },
};

const guides = [
  {
    title: "Markis eller zip screen — vad passar bäst?",
    excerpt:
      "Två utvändiga solskydd som löser samma problem på olika sätt. Vi går igenom skillnaderna i värme, vind, utsikt och estetik.",
    href: "/guider/markis-eller-zip-screen/",
    eyebrow: "Jämförelse",
  },
  {
    title: "Vilket solskydd passar bäst? En guide för Malmö",
    excerpt:
      "Översikt av alla våra produkter — invändiga och utvändiga — med fokus på vad som faktiskt fungerar i skånskt klimat.",
    href: "/guider/vilket-solskydd-passar-bast/",
    eyebrow: "Översikt",
  },
];

export default function GuiderPage() {
  const jsonLd = graph(
    breadcrumbSchema([
      { name: "Start", url: `${SITE_URL}/` },
      { name: "Guider", url: PAGE_URL },
    ])
  );

  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="mx-auto max-w-4xl px-6 lg:px-10 pt-16 md:pt-24 pb-24">
        <Breadcrumbs
          items={[
            { name: "Start", url: `${SITE_URL}/` },
            { name: "Guider", url: PAGE_URL },
          ]}
        />

        <div className="mt-10 mb-12">
          <Eyebrow>Guider</Eyebrow>
          <h1 className="heading-display text-5xl md:text-7xl mt-6 text-ink">
            Saklig vägledning.
          </h1>
          <Divider className="mt-7" />
          <p className="mt-7 body-copy text-ink-soft max-w-xl">
            Praktiska guider om solskydd — vad som funkar, vad som inte
            gör det, och hur valet ser ut för olika typer av fönster och
            fasader.
          </p>
        </div>

        <div className="space-y-4">
          {guides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group block rounded-premium border border-ink/10 bg-canvas-soft px-7 py-8 md:px-9 md:py-10 transition-all duration-500 ease-premium hover:-translate-y-1 hover:shadow-lift hover:border-ink/15"
            >
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-brand-green mb-3">
                {guide.eyebrow}
              </p>
              <h2 className="heading-section text-2xl md:text-3xl text-ink mb-3">
                {guide.title}
              </h2>
              <p className="body-copy text-ink-soft text-sm md:text-base mb-5">
                {guide.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-ink">
                Läs guiden
                <ArrowRight
                  size={14}
                  strokeWidth={1.6}
                  className="transition-transform duration-300 ease-premium group-hover:translate-x-1"
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
