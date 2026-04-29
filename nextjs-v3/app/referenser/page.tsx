import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { StickyMobileCTA } from "@/components/sections/StickyMobileCTA";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { Breadcrumbs } from "@/components/molecules/Breadcrumbs";
import { CaseStudyCard } from "@/components/molecules/CaseStudyCard";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Divider } from "@/components/atoms/Divider";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, graph, breadcrumbSchema, BUSINESS_ID } from "@/lib/schema";

const PAGE_URL = `${SITE_URL}/referenser/`;

export const metadata: Metadata = {
  title: "Referenser | Bellevue Solskydd Malmö",
  description:
    "Solskyddsprojekt vi genomfört i Malmö med omnejd — markiser, zip screen, persienner, plissé och pergola för villor, lägenheter och kontor.",
  alternates: { canonical: PAGE_URL },
};

const cases = [
  {
    title: "Zip screen mot västersolen",
    location: "Västra Hamnen, Malmö",
    productLabel: "Zip Screen",
    productColor: "zipscreen" as const,
    description:
      "Lägenhet med stora glaspartier mot Öresund. Vi installerade motoriserade zip screen-system med vindsensor och solautomatik på de tre största fönsterpartierna — vilket sänkte rumstemperaturen märkbart under sommaren.",
  },
  {
    title: "Pergola för förlängd uteplatssäsong",
    location: "Limhamn, Malmö",
    productLabel: "Pergola",
    productColor: "pergola" as const,
    description:
      "Villa nära havet där uteplatsen tidigare bara användes några sommarmånader. En lamellpergola med zip screen-sidor gjorde ytan användbar från april till oktober — och även på blåsiga sommardagar.",
  },
  {
    title: "Träpersienner i sekelskifteslägenhet",
    location: "Slottsstaden, Malmö",
    productLabel: "Persienner",
    productColor: "persienner" as const,
    description:
      "Renoverad sekelskifteslägenhet där originalfönstren skulle behållas. Vi måttanpassade träpersienner i basswood till alla rumsfönster — passande både originallisten och den modernare inredningen.",
  },
];

export default function ReferenserPage() {
  const collectionPage = {
    "@type": "CollectionPage",
    url: PAGE_URL,
    name: "Referenser — Bellevue Solskydd",
    inLanguage: "sv-SE",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": BUSINESS_ID },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: cases.map((c, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: c.title,
      })),
    },
  };

  const jsonLd = graph(
    breadcrumbSchema([
      { name: "Start", url: `${SITE_URL}/` },
      { name: "Referenser", url: PAGE_URL },
    ]),
    collectionPage
  );

  return (
    <>
      <JsonLd data={jsonLd} />
      <Header />
      <main className="flex-1 bg-canvas">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 pt-16 md:pt-24 pb-16">
          <Breadcrumbs
            items={[
              { name: "Start", url: `${SITE_URL}/` },
              { name: "Referenser", url: PAGE_URL },
            ]}
          />

          <div className="mt-10 mb-12">
            <Eyebrow>Referenser</Eyebrow>
            <h1 className="heading-display text-5xl md:text-7xl mt-6 text-ink">
              Projekt i Malmö
              <br />
              <span className="text-brand-brass">med omnejd.</span>
            </h1>
            <Divider className="mt-7" />
            <p className="mt-7 body-copy text-ink-soft max-w-xl">
              Ett urval av installationer vi utfört — från enskilda
              fönsterlösningar till hela uteplatser. Fler referensprojekt
              publiceras löpande.
            </p>
          </div>

          <div className="space-y-4">
            {cases.map((c) => (
              <CaseStudyCard key={c.title} {...c} />
            ))}
          </div>

          <p className="mt-12 body-copy text-ink-muted text-sm italic">
            Fler referensprojekt publiceras löpande. Bilder från
            installationer kommer i nästa fas.
          </p>
        </div>

        <ConsultationCTA
          eyebrow="Vill ni ha ett liknande resultat?"
          heading="Boka kostnadsfri rådgivning."
          body="Vi besöker fastigheten, mäter på plats och föreslår en lösning som matchar både huset och hur ni faktiskt använder det. Hembesök och offert är kostnadsfria."
        />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
