import type { Metadata } from "next";
import Link from "next/link";
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

const PAGE_URL = `${SITE_URL}/guider/rullgardin-eller-persienn/`;
const PAGE_TITLE =
  "Rullgardin eller persienn — så väljer du rätt | Bellevue Solskydd";
const PAGE_DESC =
  "Två klassiska invändiga solskydd för fönster i Malmö-bostäder. Vi går igenom skillnaderna i ljuskontroll, mörkläggning, motorisering och vad som passar olika rum.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: PAGE_URL },
};

const faqs = [
  {
    question: "Vilken sköts enklast i längden?",
    answer:
      "Rullgardinens släta vävyta är snabbast att damma av eller torka över. Persienner kräver att lamellerna stängs och dammas i flera vridningar — det går snabbt men är fler steg. Mellanglaspersienn slipper rengöring helt eftersom lamellerna sitter mellan glasen.",
  },
  {
    question: "Tål båda fukten i ett badrum?",
    answer:
      "Aluminiumpersienner tål badrummens kondens utan problem och är ofta det första valet där. Rullgardiner kan användas men kräver fukttålig väv — vi specificerar tydligt vilka vävar i sortimentet som klarar miljön.",
  },
  {
    question: "Är det stor prisskillnad?",
    answer:
      "På standardstorlek och enkelutförande ligger en rullgardin med kulkedja och en aluminiumpersienn i samma prisklass. Skillnaden uppstår vid tillval. Motoriserad rullgardin är dyrare än manuell — persienner manövreras alltid manuellt. Specialvävar och blackout med sidoskenor på rullgardin pressar upp priset; mellanglas och 30-färgs lameller på persienn höjer marginellt.",
  },
  {
    question: "Vilken passar bäst i hemmakontoret?",
    answer:
      "Vid skärmarbete: rullgardin med screenväv. Den dämpar bländning utan att slå av rummet helt. Persienn fungerar också men kräver mer manuell justering under dagen för att hålla rätt vinkel. Vid videomöten med kontrollerat ljus är blackout-rullgardin enklast.",
  },
  {
    question: "Var hjälper ni att välja?",
    answer:
      "Vi gör hembesök i Malmö, Lund, Staffanstorp, Vellinge, Lomma, Kävlinge, Trelleborg och Skanör-Falsterbo. Hembesöket är kostnadsfritt även om ni inte bestämmer er — vi mäter, visar prover och lämnar specificerad offert på plats. Ring 040-18 11 00.",
  },
];

export default function RullgardinEllerPersiennGuide() {
  const jsonLd = graph(
    breadcrumbSchema([
      { name: "Start", url: `${SITE_URL}/` },
      { name: "Guider", url: `${SITE_URL}/guider/` },
      { name: "Rullgardin eller persienn", url: PAGE_URL },
    ]),
    articleSchema({
      url: PAGE_URL,
      headline: "Rullgardin eller persienn — så väljer du rätt",
      description: PAGE_DESC,
      datePublished: "2026-05-04",
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
            { name: "Rullgardin eller persienn", url: PAGE_URL },
          ]}
        />

        <header className="mt-10 mb-10">
          <Eyebrow>Jämförelse</Eyebrow>
          <h1 className="heading-display text-5xl md:text-7xl mt-6 text-ink">
            Rullgardin eller persienn?
          </h1>
          <Divider className="mt-7" />
        </header>

        <AnswerBox>
          Båda är klassiska invändiga solskydd som löser samma problem på
          olika sätt. Rullgardinen styr ljus genom vävvalet — blackout för
          mörker, screen för bländskydd, ljusfiltrerande för mjukt
          dagsljus. Persiennen styr ljuset genom vinkeln på sina
          aluminiumlameller — fri sikt på dagen, lutning mot taket vid
          eftermiddagssol, stängd vid kvällsljus. Rullgardinen kan
          motoriseras, persiennen är manuell.
        </AnswerBox>

        <Section heading="Hur de fungerar i praktiken">
          <p>
            <Link
              href="/rullgardiner-malmo/"
              className="text-ink underline decoration-ink/30 hover:decoration-ink"
            >
              Rullgardinen
            </Link>{" "}
            har två lägen i normaldrift: uppe eller nere. Det är inte en
            begränsning utan en förenkling — när ni har valt rätt väv är
            två lägen vad ni behöver. Blackout för sovrummet stoppar
            morgonljuset på sommaren. Screen i hemmakontoret tar bort
            bländningen utan att stänga rummet. Den ena väven löser ett
            problem; ni behöver inte styra mer än upp och ner.
          </p>
          <p>
            <Link
              href="/persienner-malmo/"
              className="text-ink underline decoration-ink/30 hover:decoration-ink"
            >
              Persiennen
            </Link>{" "}
            tar en annan väg. Lamellerna — 25 mm aluminium — vinklas runt
            sin axel, så att samma persienn kan släppa in ett indirekt
            takljus tio i tre och blockera bländning klockan fyra utan att
            ni hissar upp eller ner. För rum där ljuset varierar under
            dagen är det användbart. För sovrum, där rummet bara ska vara
            mörkt, är det snarare ett extra steg.
          </p>
        </Section>

        <Section heading="Jämförelsetabell">
          <div className="not-prose mt-2 rounded-premium border border-ink/10 bg-canvas-soft overflow-hidden">
            <table className="w-full text-sm md:text-base">
              <thead className="bg-canvas">
                <tr className="text-left text-xs font-medium uppercase tracking-[0.18em] text-ink-soft">
                  <th className="px-5 py-4">Egenskap</th>
                  <th className="px-5 py-4">Rullgardin</th>
                  <th className="px-5 py-4">Persienn</th>
                </tr>
              </thead>
              <tbody className="text-ink">
                <Row label="Ljuskontroll" a="Vävval — upp eller ner" b="Stegvis vinkling av lameller" />
                <Row label="Mörkläggning" a="Ja, blackout-väv" b="Begränsad — stängd lamell läcker visst ljus" />
                <Row label="Värmereduktion" a="Ja, blackout med vit baksida reflekterar" b="Viss — lamellvinkling skuggar" />
                <Row label="Motor" a="Ja — Motion eller Eve-Motion" b="Nej, manuell" />
                <Row label="Material" a="Textilväv i många varianter" b="Aluminium 25 mm, 0,18 mm tjock" />
                <Row label="Färgalternativ" a="Brett vävutbud" b="30 lamellfärger + 20 färger lina/stegband" />
                <Row label="Maxbredd" a="450 cm (Maxi)" b="ca 300 cm" />
                <Row label="Skötsel" a="Torka av väven" b="Damma lamellerna" />
                <Row label="Mellanglas" a="Inte möjlig" b="Ja — finns som mellanglasmodell" />
              </tbody>
            </table>
          </div>
        </Section>

        <Section heading="När rullgardin oftast är rätt val">
          <p>
            <strong className="font-medium text-ink">Sovrum.</strong>{" "}
            Blackout-väv stänger ute ljus. Med motor kan ni schemalägga
            uppveckling till klockan sju utan att kliva ur sängen.
          </p>
          <p>
            <strong className="font-medium text-ink">Värmeproblem på västersida.</strong>{" "}
            Blackout med vit baksida reflekterar solvärmen tillbaka mot
            glaset. Märkbart sommartid på fönster mot Öresund.
          </p>
          <p>
            <strong className="font-medium text-ink">
              Stora glaspartier.
            </strong>{" "}
            Maxi-modellen tar upp till 450 cm. Persienner blir klumpiga
            över cirka 300 cm.
          </p>
          <p>
            <strong className="font-medium text-ink">Bländskydd vid skärmarbete.</strong>{" "}
            Screen-väv löser problemet med en stilren produkt utan
            lamellstrimmor.
          </p>
        </Section>

        <Section heading="När persienn oftast är rätt val">
          <p>
            <strong className="font-medium text-ink">Rum där ljuset varierar.</strong>{" "}
            Vardagsrum, kök eller arbetsplats där solvinkeln rör sig under
            dagen. Persiennen vinklas på några sekunder utan att hela
            fönstret blockeras.
          </p>
          <p>
            <strong className="font-medium text-ink">Kopplade fönster.</strong>{" "}
            Mellanglasvarianten monteras inuti glaset — vanligt och snyggt
            i sekelskifteshus i Möllevången, Lund och centrala Malmö.
            Lamellerna blir aldrig dammiga.
          </p>
          <p>
            <strong className="font-medium text-ink">Badrum och kök.</strong>{" "}
            Aluminium tål kondens och fett. Damma av med fuktig trasa.
          </p>
          <p>
            <strong className="font-medium text-ink">Stram modern interiör.</strong>{" "}
            Tunn lamell, inget tyg, ingen veckning — passar moderna,
            avskalade rum.
          </p>
        </Section>

        <Section heading="Kombinera där det blir bäst">
          <p>
            En vanlig lösning är att blanda i samma bostad: blackout-
            rullgardin i sovrummet, mellanglaspersienn i köket,
            screen-rullgardin i hemmakontoret. Det är inte ett problem att
            ha olika produkter på olika fönster — det är ofta poängen. Vid
            hembesöket går vi rum för rum och föreslår vad som passar
            varje fönster utifrån användning, väderstreck och hur ofta
            solskyddet kommer att hanteras.
          </p>
          <p>
            Är ni osäkra hjälper{" "}
            <Link
              href="/guider/valja-ratt-solskydd-inomhus/"
              className="text-ink underline decoration-ink/30 hover:decoration-ink"
            >
              guiden för att välja rätt invändigt solskydd
            </Link>{" "}
            er smalna av valet ytterligare.
          </p>
        </Section>

        <div className="mt-20">
          <Eyebrow>Vanliga frågor</Eyebrow>
          <h2 className="heading-section text-3xl md:text-4xl mt-5 text-ink">
            Frågor om jämförelsen.
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
        eyebrow="Personlig rekommendation"
        heading="Osäker på vilken som passar?"
        body="Vi gör hembesök i Malmö med omnejd, går igenom rummens användning och föreslår rullgardin eller persienn — fönster för fönster. Hembesök, mätning och offert är gratis."
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

function Row({ label, a, b }: { label: string; a: string; b: string }) {
  return (
    <tr className="border-t border-ink/8">
      <td className="px-5 py-4 font-medium">{label}</td>
      <td className="px-5 py-4 text-ink-soft">{a}</td>
      <td className="px-5 py-4 text-ink-soft">{b}</td>
    </tr>
  );
}
