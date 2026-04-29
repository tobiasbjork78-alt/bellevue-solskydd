import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
  articleSchema,
  faqSchema,
  breadcrumbSchema,
} from "@/lib/schema";

const PAGE_URL = `${SITE_URL}/guider/vilket-solskydd-passar-bast/`;
const PAGE_TITLE =
  "Vilket solskydd passar bäst? En guide för Malmö | Bellevue Solskydd";
const PAGE_DESC =
  "Vilket solskydd är bäst för dina fönster? Vi går igenom invändiga och utvändiga lösningar med fokus på vad som faktiskt fungerar i Malmös klimat.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: PAGE_URL },
};

const faqs = [
  {
    question: "Kan jag kombinera flera typer av solskydd i samma rum?",
    answer:
      "Ja, och det är ofta den bästa lösningen. En zip screen utvändigt mot stark sol, en mörkläggande rullgardin innanför för natten, och persienner eller plissé för dagljusstyrning. Vi går igenom kombinationen vid hembesöket och föreslår vad som passar rummet och budgeten.",
  },
  {
    question: "Vad kostar det ungefär?",
    answer:
      "Priset varierar kraftigt med produkt, storlek, motorisering och tillval. En enkel rullgardin på ett vanligt fönster ligger i lägre prissegment, en motoriserad zip screen på ett stort glasparti i högre. Vi lämnar alltid en specificerad offert efter hembesöket — pris per fönster eller per produkt, inga klumpsummor.",
  },
  {
    question: "Hur lång leveranstid har ni?",
    answer:
      "Standardprodukter i lager kan ofta monteras inom 1–3 veckor från godkänd offert. Måttanpassade produkter med specialväv eller motor ligger på 3–6 veckor. Vi anger en konkret tidsplan i offerten.",
  },
];

export default function VilketSolskyddPassarBastPage() {
  const jsonLd = graph(
    breadcrumbSchema([
      { name: "Start", url: `${SITE_URL}/` },
      { name: "Guider", url: `${SITE_URL}/guider/` },
      { name: "Vilket solskydd passar bäst", url: PAGE_URL },
    ]),
    articleSchema({
      url: PAGE_URL,
      headline: "Vilket solskydd passar bäst? En guide för Malmö",
      description: PAGE_DESC,
      datePublished: "2026-04-29",
    }),
    faqSchema(faqs)
  );

  return (
    <>
      <JsonLd data={jsonLd} />
      <article className="mx-auto max-w-4xl px-6 lg:px-10 pt-16 md:pt-24 pb-16">
        <Breadcrumbs
          items={[
            { name: "Start", url: `${SITE_URL}/` },
            { name: "Guider", url: `${SITE_URL}/guider/` },
            { name: "Vilket solskydd passar bäst", url: PAGE_URL },
          ]}
        />

        <header className="mt-10 mb-10">
          <Eyebrow>Översikt</Eyebrow>
          <h1 className="heading-display text-5xl md:text-7xl mt-6 text-ink">
            Vilket solskydd passar bäst?
          </h1>
          <Divider className="mt-7" />
        </header>

        <AnswerBox>
          Det beror på fönstrets läge, vilket problem ni vill lösa, och
          om ni vill ha invändigt eller utvändigt skydd. Den här guiden
          går igenom valen — från värme och bländning till mörkläggning
          och uteplats — och vilken produkt som funkar bäst i respektive
          fall.
        </AnswerBox>

        <Section heading="Börja med problemet">
          <p>
            Det är lätt att börja med att titta på olika produkter och
            jämföra. Det går snabbare att börja med problemet ni vill
            lösa, och låta produktvalet följa.
          </p>
          <ul className="space-y-2 list-disc list-inside marker:text-brand-brass">
            <li>
              <strong className="font-medium text-ink">Värme</strong> —
              utvändigt skydd är effektivare. Solens energi stoppas innan
              den når glaset.
            </li>
            <li>
              <strong className="font-medium text-ink">Insyn</strong> —
              invändigt skydd som styrs i steg (persienn, plissé) eller
              fritt (rullgardin) är oftast tillräckligt.
            </li>
            <li>
              <strong className="font-medium text-ink">Mörkläggning</strong>{" "}
              — invändigt, mörkläggande väv med sidoskenor som stoppar
              ljusläckage.
            </li>
            <li>
              <strong className="font-medium text-ink">Bländning</strong>{" "}
              — invändigt med graderbar styrning. Persienner och plissé
              är typiska val.
            </li>
            <li>
              <strong className="font-medium text-ink">Uteplats</strong>{" "}
              — utvändigt: markis eller pergola.
            </li>
          </ul>
        </Section>

        <Section heading="Invändigt vs utvändigt — när passar vad?">
          <p>
            <strong className="font-medium text-ink">Utvändigt</strong>{" "}
            är effektivast mot värme, eftersom solenergin stoppas innan
            den passerar glaset. Det fungerar dock bara om fasaden tillåter
            installation och föreningen godkänner det. Utvändiga lösningar
            är också mer slittåliga än invändiga och kräver mindre
            uppmärksamhet i daglig drift.
          </p>
          <p>
            <strong className="font-medium text-ink">Invändigt</strong>{" "}
            är mer flexibelt och oftast enklare att installera. Lösningen
            blir närmare rummets inredning och kan styras direkt utan att
            behöva tänka på vind eller väder. Insyn, bländning och
            mörkläggning hanteras främst invändigt.
          </p>
        </Section>

        <Section heading="Produktöversikt">
          <ProductOverview
            name="Persienner"
            href="/persienner-malmo/"
            description="Lameller som vinklas i steg — flexibelt mot bländning och insyn. Klassiskt uttryck i hem och kontor; passar både stora och små fönster."
          />
          <ProductOverview
            name="Plisségardiner"
            href="/plissegardiner-malmo/"
            description="Plisserad väv som följer fönstrets form. Honeycomb-väv isolerar effektivt på vintern. Kan dras både uppifrån och nerifrån, och passar takfönster och oregelbundna former."
          />
          <ProductOverview
            name="Rullgardiner"
            href="/rullgardiner-malmo/"
            description="Stilrent invändigt skydd med jämn väv. Finns från transparent till helt mörkläggande blackout. Vanligt val i moderna lägenheter och sovrum."
          />
          <ProductOverview
            name="Markiser"
            href="/markiser-malmo/"
            description="Utvändig utfällbar duk. Skuggar uteplatsen och delar av fasaden. Bra på balkonger, terrasser och vid större fönster där utsikten ska behållas."
          />
          <ProductOverview
            name="Zip screen"
            href="/zip-screen-malmo/"
            description="Vindstabil utvändig screen som låser fast väven i sidoskenor. Stoppar värmen innan den når glaset — förstahandsval för stora glaspartier i västerläge."
          />
          <ProductOverview
            name="Pergola"
            href="/pergola-malmo/"
            description="Fast konstruktion med justerbara lameller eller markisväv. Skugga och regnskydd för uteplatsen — förlänger användbar säsong."
          />
        </Section>

        <Section heading="Malmö-specifikt">
          <p>
            <strong className="font-medium text-ink">Västerlägen och Öresundsvind</strong>{" "}
            — Malmö ligger nära kusten och vinden är ständigt en faktor.
            På fasader mot Öresund (Limhamn, Västra Hamnen, Bellevue)
            fungerar vindstabila lösningar bättre. Zip screen och
            kassettmarkiser med vindsensor är typiska val.
          </p>
          <p>
            <strong className="font-medium text-ink">Stora glaspartier i nybyggen</strong>{" "}
            — Områden som Hyllie, Västra Hamnen och Dockan har många
            lägenheter med stora söder- och västervända glaspartier. Där
            är utvändigt solskydd nästan en förutsättning för hanterbar
            inomhustemperatur sommartid.
          </p>
          <p>
            <strong className="font-medium text-ink">Äldre fastigheter</strong>{" "}
            — I Möllevången, Slottsstaden och centrala Malmö sitter ofta
            originalfönster med oregelbundna mått. Plissé och persienner
            är vanliga val här eftersom de kan måttanpassas till varje
            fönster individuellt.
          </p>
        </Section>

        <Section heading="Vår process">
          <ol className="space-y-5 list-none">
            <Step
              index="01"
              title="Rådgivning"
              body="Ni beskriver problemet — värme, insyn, bländning, mörkläggning, uteplats — och vi bokar in ett kostnadsfritt hembesök."
            />
            <Step
              index="02"
              title="Hembesök"
              body="Vi mäter på plats, går igenom väderstreck, vindexponering och hur rummen används. Vi visar vävprover i dagsljus."
            />
            <Step
              index="03"
              title="Specificerad offert"
              body="Pris per fönster eller produkt, med tydligt material- och tillvalsval. Inga klumpsummor."
            />
            <Step
              index="04"
              title="Montering"
              body="Egna montörer monterar, kalibrerar och kontrollerar funktionen — och städar efter sig."
            />
          </ol>
        </Section>

        <div className="mt-16 rounded-premium border border-ink/10 bg-canvas-soft px-7 py-8 md:px-9 md:py-10">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-brand-green mb-3">
            Vill du ha en personlig rekommendation?
          </p>
          <h2 className="heading-section text-2xl md:text-3xl text-ink mb-3">
            Få förslag på 60 sekunder.
          </h2>
          <p className="body-copy text-ink-soft mb-6 max-w-xl">
            Svara på fem korta frågor om dina fönster och vad du vill
            lösa, så får du en saklig rekommendation och kan boka
            hembesök direkt.
          </p>
          <Link
            href="/kostnadsfri-radgivning/"
            className="inline-flex items-center gap-2 rounded-full bg-brand-green px-6 py-3 text-ink-inverse font-medium transition-colors duration-300 ease-premium hover:bg-brand-green/90"
          >
            Starta rådgivningen
            <ArrowRight size={16} strokeWidth={1.6} />
          </Link>
        </div>

        <div className="mt-20">
          <Eyebrow>Vanliga frågor</Eyebrow>
          <h2 className="heading-section text-3xl md:text-4xl mt-5 text-ink">
            Frågor om val och process.
          </h2>
          <Divider className="mt-7 mb-4" />
          <div>
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                defaultOpen={index === 0}
              />
            ))}
          </div>
        </div>
      </article>

      <ConsultationCTA
        eyebrow="Lokal rådgivning"
        heading="Vi hjälper er välja rätt."
        body="Vi besöker fönstren, går igenom problemet ni vill lösa och föreslår en lösning som faktiskt fungerar i ert hus. Hembesök och offert är kostnadsfria."
      />
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

function ProductOverview({
  name,
  href,
  description,
}: {
  name: string;
  href: string;
  description: string;
}) {
  return (
    <div className="border-t border-ink/10 pt-6 mt-6 first:mt-0 first:pt-0 first:border-t-0">
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-2">
        <h3 className="heading-section text-xl md:text-2xl text-ink">
          {name}
        </h3>
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-sm font-medium text-brand-green hover:text-ink transition-colors"
        >
          Läs mer
          <ArrowRight size={14} strokeWidth={1.6} />
        </Link>
      </div>
      <p className="body-copy text-ink-soft">{description}</p>
    </div>
  );
}
