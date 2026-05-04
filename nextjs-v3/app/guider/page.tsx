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
    title: "Välja rätt invändigt solskydd",
    excerpt:
      "Tre frågor smalnar av valet mellan plissé, rullgardin, persienn och lamellgardin — fönstertyp, funktion och om motor önskas.",
    href: "/guider/valja-ratt-solskydd-inomhus/",
    eyebrow: "Översikt",
  },
  {
    title: "Vilket solskydd passar bäst? En guide för Malmö",
    excerpt:
      "Översikt av invändigt och utvändigt solskydd — vad som funkar i skånskt klimat och hur man väljer mellan kategorier.",
    href: "/guider/vilket-solskydd-passar-bast/",
    eyebrow: "Översikt",
  },
  {
    title: "Plisségardin eller rullgardin?",
    excerpt:
      "Positioneringsfrihet, isolering, motorisering och pris — vi pekar ut vilken som är rätt val för olika rum.",
    href: "/guider/plissegardin-eller-rullgardin/",
    eyebrow: "Jämförelse",
  },
  {
    title: "Rullgardin eller persienn?",
    excerpt:
      "Två klassiska invändiga solskydd. Skillnader i ljuskontroll, mörkläggning, motor och vad som passar olika rum.",
    href: "/guider/rullgardin-eller-persienn/",
    eyebrow: "Jämförelse",
  },
  {
    title: "Markis eller zip screen — vad passar bäst?",
    excerpt:
      "Två utvändiga solskydd som löser samma problem på olika sätt. Skillnader i värme, vind, utsikt och estetik.",
    href: "/guider/markis-eller-zip-screen/",
    eyebrow: "Jämförelse",
  },
  {
    title: "Solskydd för sovrum",
    excerpt:
      "Mörkläggning utan ljusgloria runt karmen. Vi går igenom blackout-rullgardin, mörkläggande plissé och hur sidoskenor täter kanterna.",
    href: "/guider/solskydd-sovrum/",
    eyebrow: "Tema",
  },
  {
    title: "Solskydd mot insyn",
    excerpt:
      "Tvåvägsplissé, vinklade persienner eller ljusfiltrerande rullgardin — så löser ni insynsfrågan utan att mörklägga.",
    href: "/guider/solskydd-insyn/",
    eyebrow: "Tema",
  },
  {
    title: "Solskydd mot värme",
    excerpt:
      "Sänk temperaturen vid fönstret. Vi går igenom isolerväv, vit baksida på blackout, och varför utvändigt slår invändigt.",
    href: "/guider/solskydd-varme/",
    eyebrow: "Tema",
  },
  {
    title: "Solskydd för kontor",
    excerpt:
      "Bländskydd vid skärmar, flamskyddade vävar för brandkrav och centraliserad styrning av fönsterrader.",
    href: "/guider/solskydd-kontor/",
    eyebrow: "Tema",
  },
  {
    title: "Motoriserat solskydd",
    excerpt:
      "Motion eller Eve-Motion? Skillnaden mellan Bluetooth + brygga och Thread/Matter direkt mot HomeKit och Google Home.",
    href: "/guider/motoriserat-solskydd/",
    eyebrow: "Tema",
  },
  {
    title: "Isolerande gardiner",
    excerpt:
      "Plissé med dubbelväv (honeycomb) — så fungerar luftcellernas isoleringseffekt åt båda håll, året runt.",
    href: "/guider/isolerande-gardiner/",
    eyebrow: "Tema",
  },
  {
    title: "Skötsel av invändigt solskydd",
    excerpt:
      "Praktiskt underhåll av rullgardiner, plissé, persienner och lamellgardiner — vad ni får göra och vad ni ska undvika.",
    href: "/guider/skotsel-invandigt-solskydd/",
    eyebrow: "Praktiskt",
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
