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

const PAGE_URL = `${SITE_URL}/lamellgardiner-malmo/`;
const PAGE_TITLE =
  "Lamellgardiner Malmö | Vertikala lameller med montering";
const PAGE_DESC =
  "Lamellgardiner i Malmö för stora glaspartier, skjutdörrar och kontor. Vertikala lameller i tyg, plast eller aluminium — rådgivning och montering på plats.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: PAGE_URL },
};

const faqs = [
  {
    question: "Hur breda kan lamellgardiner göras?",
    answer:
      "Lamellgardiner skalar bra på bredd eftersom varje lamell hängs separat i en gemensam skena. Bredder över 4 meter i ett stycke är vanliga och ovanliga partier upp till 6 meter går att lösa med längre skena. För mycket breda partier delas systemet i två sektioner som möts på mitten — vanligt vid skjutdörrar.",
  },
  {
    question: "Kan jag kombinera lamellgardiner med andra solskydd?",
    answer:
      "Ja. En vanlig kombination är lamellgardiner på det stora glaspartiet och rullgardiner eller plissé på övriga fönster i samma rum. På söder- och västerlägen kan utvändigt zip screen också kombineras — utvändigt skydd mot värme, lamellgardiner invändigt för insynsstyrning och estetik.",
  },
  {
    question: "Hur rengörs lamellerna?",
    answer:
      "Tygvävda lameller dammsugs med mjukt munstycke; vid behov kan enskilda lameller lyftas av och tvättas med milt rengöringsmedel. Plast- och aluminiumlameller torkas av med en lätt fuktig trasa. Eftersom varje lamell är fristående är det enkelt att byta en enskild om den skulle gå sönder, utan att hela gardinen måste göras om.",
  },
  {
    question: "Går lamellgardiner att motorisera?",
    answer:
      "Ja. På breda partier är motoriserade lamellgardiner ofta ett naturligt val — både för rotation av lamellerna och för dragning åt sidan. Motorerna är tysta och kan integreras med smart hem-system och tidsstyrning. På kontor och skolor är centralt styrda lamellgardiner standard.",
  },
];

export default function LamellgardinerMalmoPage() {
  const jsonLd = graph(
    breadcrumbSchema([
      { name: "Start", url: `${SITE_URL}/` },
      { name: "Lamellgardiner Malmö", url: PAGE_URL },
    ]),
    servicePageSchema("Lamellgardiner Malmö", PAGE_URL, PAGE_DESC),
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
              { name: "Lamellgardiner Malmö", url: PAGE_URL },
            ]}
          />

          <div className="mt-10 mb-10">
            <Eyebrow>Invändigt solskydd</Eyebrow>
            <h1 className="heading-display text-5xl md:text-7xl mt-6 text-ink">
              Lamellgardiner i Malmö
            </h1>
            <Divider className="mt-7" />
          </div>

          <AnswerBox>
            Lamellgardiner består av vertikala lameller som dras åt sidan
            som en gardin och vrids individuellt för att styra ljuset.
            Bellevue Solskydd levererar lamellgardiner i Malmö för stora
            fönster, glaspartier och skjutdörrar — i tyg, plast eller
            aluminium, manuella eller motoriserade.
          </AnswerBox>

          <Section heading="När passar lamellgardiner?">
            <p>
              Lamellgardiner är förmodligen den smidigaste lösningen för
              riktigt stora ytor. På fönsterpartier som täcker hela
              kortväggen — vanligt i moderna lägenheter i Hyllie och Västra
              Hamnen — är en lamellgardin enklare att hantera än flera
              parallella rullgardiner.
            </p>
            <p>
              Också i kontorsmiljöer och i skolor är lamellgardiner det
              traditionella valet. Lamellerna kan vinklas så att ljuset
              dämpas men dagsljuset behålls — rätt vinkel mot fasaden gör
              att man slipper bländning vid skärmarbete utan att behöva
              tända elljus.
            </p>
            <p>
              Vid skjutdörrar mot uteplats är lamellgardin praktisk
              eftersom den kan dras åt sidan helt — då blockerar den inte
              passagen.
            </p>
          </Section>

          <Section heading="Vilka typer finns?">
            <p>
              <strong className="font-medium text-ink">Tygvävda lameller</strong>{" "}
              är det vanligaste valet i hem och kontor. Tygets väv styr
              ljusgenomsläppet — från transparent screen-kvalitet till
              tätt, ljusfiltrerande tyg.
            </p>
            <p>
              <strong className="font-medium text-ink">Plastlameller</strong>{" "}
              är slittåliga, lätta att rengöra och tål fukt. Vanliga i
              kök, badrum och industrimiljöer. Finns i flera nyanser och
              några blanknivåer.
            </p>
            <p>
              <strong className="font-medium text-ink">Aluminiumlameller</strong>{" "}
              är slimmade, robusta och reflekterar värme effektivt. Bra
              i serverrum, undervisningsmiljöer och utsatta lokaler.
            </p>
            <p>
              Standardbredder är 89 mm och 127 mm. Smalare lameller ger
              ett finare uttryck och bättre styrkontroll; bredare ger en
              lugnare yta och färre rörliga delar.
            </p>
          </Section>

          <Section heading="Vad påverkar priset?">
            <p>
              Bredd är den största prisfaktorn — antalet lameller ökar
              direkt med bredden. Materialet kommer därefter: enkla
              plast- eller akrylhängande lameller är billigast, dimmade
              tyglameller mellanpriset, och premium-tyger eller speciellt
              kapade aluminiumlameller högst upp.
            </p>
            <p>
              Manuell drift (kedja för rotation, snöre för draglängd) är
              standard. Motorisering är ett tillval som lönar sig på
              kontor, breda partier och i hem där partiet styrs ofta. Alla
              priser specificeras per system i offerten.
            </p>
          </Section>

          <Section heading="Så går rådgivning och montering till">
            <ol className="space-y-5 list-none">
              <Step
                index="01"
                title="Hembesök"
                body="Vi mäter glaspartiet, går igenom väderstreck och hur ytan används — bostad, kontor eller skola."
              />
              <Step
                index="02"
                title="Material- och vävprover"
                body="Vi visar lamellprover i olika material och tygvävar, så ni ser hur ljuset filtreras i ert specifika rum."
              />
              <Step
                index="03"
                title="Specificerad offert"
                body="Pris per system med material, manövrering och eventuell motor — inga klumpsummor."
              />
              <Step
                index="04"
                title="Montering"
                body="Vi sätter upp skenan i tak eller vägg, hänger lamellerna och kontrollerar rotation och dragning."
              />
            </ol>
          </Section>

          <div className="mt-20">
            <Eyebrow>Vanliga frågor</Eyebrow>
            <h2 className="heading-section text-3xl md:text-4xl mt-5 text-ink">
              Frågor om lamellgardiner.
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
          eyebrow="Lamellgardiner Malmö"
          heading="Boka kostnadsfri rådgivning för lamellgardiner."
          body="Vi mäter på plats, visar lamellprover i ert ljus och föreslår en lösning som passar ytan. Hembesök och offert är kostnadsfria — gäller hem, kontor och skolor."
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
