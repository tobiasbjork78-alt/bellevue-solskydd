import type { Metadata } from "next";
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
  servicePageSchema,
  faqSchema,
  breadcrumbSchema,
} from "@/lib/schema";

const PAGE_URL = `${SITE_URL}/plissegardiner-malmo/`;
const PAGE_TITLE =
  "Plisségardiner Malmö | Måttanpassade plissé med montering";
const PAGE_DESC =
  "Plisségardiner i Malmö för moderna fönster och äldre fastigheter. Energibesparande dubbelväv, top-down/bottom-up och takfönsterlösningar — rådgivning och montering på plats.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: PAGE_URL },
};

const faqs = [
  {
    question: "Fungerar plissé i kök och badrum?",
    answer:
      "Ja. Det finns plissévävar som är behandlade för fuktiga miljöer och som klarar både kondens och rengöring. För badrum och kök rekommenderar vi väv med fukttålig beläggning och spännvajrar i material som inte korroderar. Vi går igenom vävvalet utifrån fönstrets placering.",
  },
  {
    question: "Hur mycket isolerar plissé egentligen?",
    answer:
      "En enkelvikt plissé sänker värmeförlusten i fönstret märkbart genom det stillastående luftlagret mellan väv och glas. En dubbelväv av honeycomb-typ skapar slutna luftceller och är betydligt mer effektiv — typiskt 30–40 procent reducerad värmeförlust på fönstret jämfört med utan plissé. Det märks framför allt på äldre fönster med sämre U-värde.",
  },
  {
    question: "Vad är skillnaden mellan plissé och persienner?",
    answer:
      "Persienner har horisontella lameller som vinklas i steg — de styr ljuset mer exakt och släpper igenom ett strimmigt ljus. Plissé är en plisserad tygduk som ger ett mjukare, jämnare ljus och bättre isolering. Plissé är också tystare i drift och passar bättre på små eller specialformade fönster.",
  },
  {
    question: "Hur rengör jag plissén?",
    answer:
      "Damma av väven regelbundet med dammvippa eller dammsugare med mjukt munstycke. Fläckar tas bort med en lätt fuktig svamp och milt rengöringsmedel — undvik blötläggning. För djuprengöring kan plissén tas ner och spolas försiktigt. Vi visar avmonteringen vid leverans.",
  },
  {
    question: "Klarar ni specialformade fönster?",
    answer:
      "Ja. Plissé är ett av de få solskydd som lämpar sig för triangulära, halvcirkelformade och snedställda fönster — vanligt i äldre fastigheter och nybyggda etagevåningar i Malmö. Vi måttar fönster med ovanlig form på plats och beställer en fast eller manuell plissé som följer formen.",
  },
];

export default function PlissegardinerMalmoPage() {
  const jsonLd = graph(
    breadcrumbSchema([
      { name: "Start", url: `${SITE_URL}/` },
      { name: "Plisségardiner Malmö", url: PAGE_URL },
    ]),
    servicePageSchema("Plisségardiner Malmö", PAGE_URL, PAGE_DESC),
    faqSchema(faqs)
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
              { name: "Plisségardiner Malmö", url: PAGE_URL },
            ]}
          />

          <div className="mt-10 mb-10">
            <Eyebrow>Invändigt solskydd</Eyebrow>
            <h1 className="heading-display text-5xl md:text-7xl mt-6 text-ink">
              Plisségardiner i Malmö
            </h1>
            <Divider className="mt-7" />
          </div>

          <AnswerBox>
            En plissé är en plisserad tygduk som dras ihop som ett dragspel
            och kan placeras precis där du vill ha den i fönstret. Bellevue
            Solskydd hjälper er i Malmö med plissé för moderna lägenheter,
            äldre fastigheter och fönster med ovanlig form — med fokus på
            isolering, ljus och stilrent uttryck.
          </AnswerBox>

          <Section heading="När passar plissé?">
            <p>
              Plissé är förmodligen det mest mångsidiga invändiga
              solskyddet. Den följer fönstrets form, släpper igenom ett
              jämnt ljus utan strimmor och kan dras både uppifrån och
              nerifrån — bra när ni vill ha insynsskydd nedtill men ändå
              släppa in ljuset upptill.
            </p>
            <p>
              I Malmös äldre fastigheter — i Möllevången, Slottsstaden och
              centrala lägenheter — sitter ofta original- eller
              kopplade fönster med oregelbundna mått. Där är plissé ofta en
              enklare lösning än rullgardin eller persienn, eftersom den
              kan måttanpassas helt och spänns mellan vajrar.
            </p>
          </Section>

          <Section heading="Vilka typer finns?">
            <p>
              <strong className="font-medium text-ink">Enkelvikt plissé</strong>{" "}
              är grundutförandet — en plisserad väv som dras ihop när den
              inte används. Lätt, prisvärd och passar de flesta vanliga
              fönster.
            </p>
            <p>
              <strong className="font-medium text-ink">Dubbelväv (honeycomb)</strong>{" "}
              har två tyglager som bildar slutna luftceller, ungefär som en
              honungskaka. Det skapar en isolerande luftbarriär mellan väv
              och glas och är märkbart effektivt mot värmeförluster — bra
              på kalla skånska vintrar.
            </p>
            <p>
              <strong className="font-medium text-ink">Top-down/bottom-up</strong>{" "}
              kan styras både uppifrån och nedifrån. Praktiskt för
              gatuvåningar där ni vill släppa in dagsljus upptill men
              skärma av insyn nedtill.
            </p>
            <p>
              <strong className="font-medium text-ink">Takfönster-plissé</strong>{" "}
              är en variant där plissén löper i sidoskenor och spänns ut.
              Vanlig för Velux och andra takfönster i sovloft.
            </p>
          </Section>

          <Section heading="Vad påverkar priset?">
            <p>
              För plissé styrs priset av fönstrets storlek, vävtypen och
              hur plissén ska manövreras — handtag, snöre, kedja eller
              motor. Honeycomb-väv kostar mer än enkelvikt men ger
              isoleringseffekt som ofta tjänas in på lägre uppvärmnings-
              och kylkostnader.
            </p>
            <p>
              Plissé är ett solskydd där det är vanligt att börja med ett
              eller två rum och utöka till resten av bostaden i etapper.
              Det fungerar bra eftersom varje plissé är fristående, både
              i pris och installation.
            </p>
          </Section>

          <Section heading="Så går rådgivning och montering till">
            <ol className="space-y-5 list-none">
              <Step
                index="01"
                title="Hembesök"
                body="Vi kommer hem till er, mäter alla fönster — inklusive specialformer — och går igenom hur rummen används."
              />
              <Step
                index="02"
                title="Vävprover"
                body="Vi visar vävprover med olika ljusgenomsläpp så att ni kan välja från transparent till mörkläggande."
              />
              <Step
                index="03"
                title="Specificerad offert"
                body="Pris per fönster med vävtyp, manövrering och eventuell motor — inga oklarheter."
              />
              <Step
                index="04"
                title="Montering"
                body="Plissén monteras med diskreta beslag mellan karm och båge, eller utanpåliggande där det krävs."
              />
            </ol>
          </Section>

          <div className="mt-20">
            <Eyebrow>Vanliga frågor</Eyebrow>
            <h2 className="heading-section text-3xl md:text-4xl mt-5 text-ink">
              Frågor om plisségardiner.
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
        </div>

        <ConsultationCTA
          eyebrow="Plisségardiner Malmö"
          heading="Boka kostnadsfri rådgivning för plissé."
          body="Vi mäter på plats, visar vävprover och föreslår en plissélösning som passar fönstren — även de med ovanlig form. Hembesök och offert kostar inget."
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
