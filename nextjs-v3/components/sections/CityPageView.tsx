import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { StickyMobileCTA } from "@/components/sections/StickyMobileCTA";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { Breadcrumbs } from "@/components/molecules/Breadcrumbs";
import { AnswerBox } from "@/components/molecules/AnswerBox";
import { FAQItem } from "@/components/molecules/FAQItem";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Divider } from "@/components/atoms/Divider";
import { JsonLd } from "@/components/JsonLd";
import {
  SITE_URL,
  graph,
  localCityServiceSchema,
  faqSchema,
  breadcrumbSchema,
} from "@/lib/schema";

export type CityPageProduct = "persienner" | "markiser" | "plisse" | "rullgardiner";

type ProductMeta = {
  label: string;
  labelLower: string;
  malmoUrl: string;
  malmoLabel: string;
  category: "Invändigt solskydd" | "Utvändigt solskydd";
  overviewParagraphs: string[];
};

const PRODUCT_META: Record<CityPageProduct, ProductMeta> = {
  persienner: {
    label: "Persienner",
    labelLower: "persienner",
    malmoUrl: "/persienner-malmo/",
    malmoLabel: "persienner i Malmö",
    category: "Invändigt solskydd",
    overviewParagraphs: [
      "En persienn består av horisontella lameller som vinklas för att styra ljuset i steg. Det gör den till ett av de mest flexibla invändiga solskydden — full öppning på morgonen, vinklad mot eftermiddagssolen, helt stängd på kvällen.",
      "Lamellerna kommer i flera bredder och material. Smala lameller i aluminium ger ett fint, modernt uttryck och sköts enkelt; bredare lameller i trä eller bambu ger mer värme i rummet och passar representativa miljöer. Persienner kan styras manuellt eller motoriseras.",
    ],
  },
  markiser: {
    label: "Markiser",
    labelLower: "markiser",
    malmoUrl: "/markiser-malmo/",
    malmoLabel: "markiser i Malmö",
    category: "Utvändigt solskydd",
    overviewParagraphs: [
      "Markiser är utvändiga solskydd som monteras på fasaden eller i taket ovanför fönstret. När markisen är utfälld stoppas både direkt sol och uppvärmning av fasaden — det märks både på rumstemperaturen och på hur uteplatsen kan användas.",
      "Vanligast är terrass-, fönster- och korgmarkiser. Vävkvalitet, motorisering och vindsensor är de tre tillvalen som påverkar livslängd och daglig användning mest. På utsatta lägen rekommenderar vi alltid kassettmarkis med automatisk vindsensor.",
    ],
  },
  plisse: {
    label: "Plisségardiner",
    labelLower: "plissé",
    malmoUrl: "/plissegardiner-malmo/",
    malmoLabel: "plissé i Malmö",
    category: "Invändigt solskydd",
    overviewParagraphs: [
      "Plissé är en plisserad tygduk som dras ihop som ett dragspel. Eftersom väven är spänd mellan vajrar kan plissé placeras precis där du vill ha den i fönstret — uppifrån, nerifrån eller i båda riktningarna samtidigt.",
      "En enkelvikt plissé är prisvärd och passar de flesta vanliga fönster. Honeycomb-väv (dubbelväv) skapar isolerande luftceller mellan ruta och rumssida, vilket märks både sommar och vinter. Plissé fungerar även utmärkt på takfönster och oregelbundna former.",
    ],
  },
  rullgardiner: {
    label: "Rullgardiner",
    labelLower: "rullgardiner",
    malmoUrl: "/rullgardiner-malmo/",
    malmoLabel: "rullgardiner i Malmö",
    category: "Invändigt solskydd",
    overviewParagraphs: [
      "Rullgardin är förmodligen det mest stilrena invändiga solskyddet — en jämn väv som rullas upp eller ner. Du kan välja från transparenta screenvävar med utsikt utåt till mörkläggande blackout-väv för sovrum.",
      "På sovrum kombineras blackout-väv ofta med sidoskenor som stoppar ljusläckage längs karmen. På bredare partier delas rullgardinen i flera sektioner eller motoriseras för smidig drift. Kassett ovanför fönstret skyddar väven när rullgardinen är upprullad.",
    ],
  },
};

export type CityPageConfig = {
  product: CityPageProduct;
  citySlug: string;
  cityLabel: string;
  pageUrl: string;
  metadataTitle: string;
  metadataDescription: string;
  answerBox: string;
  whyParagraphs: string[];
  processIntro: string;
  faqs: Array<{ question: string; answer: string }>;
  ctaHeading: string;
  ctaBody: string;
};

export function CityPageView({ config }: { config: CityPageConfig }) {
  const product = PRODUCT_META[config.product];

  const breadcrumbItems = [
    { name: "Start", url: `${SITE_URL}/` },
    { name: `${product.label} Malmö`, url: `${SITE_URL}${product.malmoUrl}` },
    { name: `${product.label} ${config.cityLabel}`, url: config.pageUrl },
  ];

  const jsonLd = graph(
    breadcrumbSchema(breadcrumbItems),
    localCityServiceSchema(
      `${product.label} ${config.cityLabel}`,
      config.pageUrl,
      config.metadataDescription,
      config.cityLabel
    ),
    faqSchema(config.faqs)
  );

  return (
    <>
      <JsonLd data={jsonLd} />
      <Header />
      <main className="flex-1 bg-canvas">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 pt-16 md:pt-24 pb-16">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="mt-10 mb-10">
            <Eyebrow>{product.category}</Eyebrow>
            <h1 className="heading-display text-5xl md:text-7xl mt-6 text-ink">
              {product.label} i {config.cityLabel}
            </h1>
            <Divider className="mt-7" />
          </div>

          <AnswerBox>{config.answerBox}</AnswerBox>

          <Section
            heading={`Varför ${product.labelLower} i ${config.cityLabel}?`}
          >
            {config.whyParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Section>

          <Section heading={`Kort om ${product.labelLower}`}>
            {product.overviewParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p className="pt-2">
              <Link
                href={product.malmoUrl}
                className="inline-flex items-center gap-2 text-sm font-medium text-brand-green hover:text-ink transition-colors"
              >
                Läs mer om {product.malmoLabel} och hela södra Skåne
                <ArrowRight size={14} strokeWidth={1.6} />
              </Link>
            </p>
          </Section>

          <Section heading={`Så hjälper vi dig i ${config.cityLabel}`}>
            <p>{config.processIntro}</p>
            <ol className="space-y-5 list-none mt-2">
              <Step
                index="01"
                title="Vi bokar hembesök"
                body={`Du beskriver vad ni vill lösa. Vi bokar in ett tillfälle som passar och kör hem till er i ${config.cityLabel}.`}
              />
              <Step
                index="02"
                title="Måttagning på plats"
                body="Vi mäter alla fönster, går igenom väderstreck, väljer material och visar prover i ert ljus."
              />
              <Step
                index="03"
                title="Specificerad offert"
                body="Pris per fönster eller produkt, med tydligt material- och tillvalsval. Inga klumpsummor."
              />
              <Step
                index="04"
                title="Egna montörer"
                body={`Vi monterar i ${config.cityLabel} med våra egna montörer — ingen underentreprenör. Funktionstest och städning ingår.`}
              />
            </ol>
          </Section>

          <div className="mt-20">
            <Eyebrow>Vanliga frågor</Eyebrow>
            <h2 className="heading-section text-3xl md:text-4xl mt-5 text-ink">
              Frågor från {config.cityLabel}.
            </h2>
            <Divider className="mt-7 mb-4" />
            <div>
              {config.faqs.map((faq, index) => (
                <FAQItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  defaultOpen={index === 0}
                />
              ))}
            </div>
          </div>
        </div>

        <ConsultationCTA
          eyebrow={`${product.label} ${config.cityLabel}`}
          heading={config.ctaHeading}
          body={config.ctaBody}
        />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}

function Section({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-16">
      <h2 className="heading-section text-3xl md:text-4xl text-ink mb-6">
        {heading}
      </h2>
      <div className="body-copy text-ink-soft space-y-5 max-w-3xl">
        {children}
      </div>
    </section>
  );
}

function Step({
  index,
  title,
  body,
}: {
  index: string;
  title: string;
  body: string;
}) {
  return (
    <li className="flex gap-5">
      <span className="font-display text-2xl text-brand-brass tracking-tight w-12 shrink-0">
        {index}
      </span>
      <div>
        <h3 className="font-medium text-ink mb-1">{title}</h3>
        <p className="body-copy text-ink-soft">{body}</p>
      </div>
    </li>
  );
}
