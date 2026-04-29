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

const PAGE_URL = `${SITE_URL}/rullgardiner-malmo/`;
const PAGE_TITLE =
  "Rullgardiner Malmö | Måttanpassade rullgardiner med montering";
const PAGE_DESC =
  "Rullgardiner i Malmö för lägenheter, villor och kontor. Transparent, ljusfiltrerande, mörkläggande och dubbelrullgardin — rådgivning och montering på plats.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: PAGE_URL },
};

const faqs = [
  {
    question: "Hur mörklägger jag ett sovrum bäst?",
    answer:
      "En mörkläggande rullgardin med sidoskenor är den mest effektiva enskilda lösningen. Sidoskenorna stoppar ljuset från att läcka in vid karmen — det är där en vanlig rullgardin släpper igenom ljus på sommarmorgnar. För sovrum mot starkt ljus rekommenderar vi blackout-väv tillsammans med sidoskena.",
  },
  {
    question: "Är motoriserade rullgardiner värt prispåslaget?",
    answer:
      "På breda partier, höga fönster och i tak är motor i regel ett bättre val än manuell drift. Det är också skönt på platser där ni dagligen styr många gardiner samtidigt — vardagsrum med fönsterrad, kontor, samlade fönsterpartier. Motor kan integreras med smart hem-system och tidsstyras.",
  },
  {
    question: "Hur tvättas och rengörs rullgardinen?",
    answer:
      "De flesta rullgardinsvävar tål dammsugning med mjukt munstycke och torkas av med en lätt fuktig trasa. Tvättbara tygvävar kan rullas ner och avtorkas i sin position. Screen- och blackout-vävar bör inte blötläggas — vi rekommenderar punktrengöring vid behov.",
  },
  {
    question: "Hur breda kan rullgardiner göras?",
    answer:
      "Standardrullgardiner går i regel upp till cirka 2,8–3 meter bred i ett stycke. För bredare partier delas rullgardinen i två eller tre sektioner som möts kant i kant. På riktigt stora partier är zip screen eller motoriserad multi-rullgardin oftast en bättre lösning. Vi mäter och föreslår uppdelning vid behov.",
  },
  {
    question: "Kan jag kombinera rullgardin med persienn?",
    answer:
      "Ja, det är vanligt. En transparent rullgardin dagtid plus en mörkläggande nattetid (dubbelrullgardin) är en lösning. En annan är persienner för att styra ljus och insyn på dagen, plus en mörkläggande rullgardin innanför för natten. Vi går igenom kombinationer som passar rummets användning.",
  },
];

export default function RullgardinerMalmoPage() {
  const jsonLd = graph(
    breadcrumbSchema([
      { name: "Start", url: `${SITE_URL}/` },
      { name: "Rullgardiner Malmö", url: PAGE_URL },
    ]),
    servicePageSchema("Rullgardiner Malmö", PAGE_URL, PAGE_DESC),
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
              { name: "Rullgardiner Malmö", url: PAGE_URL },
            ]}
          />

          <div className="mt-10 mb-10">
            <Eyebrow>Invändigt solskydd</Eyebrow>
            <h1 className="heading-display text-5xl md:text-7xl mt-6 text-ink">
              Rullgardiner i Malmö
            </h1>
            <Divider className="mt-7" />
          </div>

          <AnswerBox>
            En rullgardin är ett av de mest stilrena invändiga solskydden:
            en jämn väv som rullas upp eller ner. Bellevue Solskydd levererar
            måttanpassade rullgardiner i Malmö för lägenheter, villor och
            kontor — från transparenta screenvävar till helt mörkläggande
            blackout, manuella eller motoriserade.
          </AnswerBox>

          <Section heading="När passar rullgardiner?">
            <p>
              Rullgardin är förstahandsvalet när ni vill ha ett rent
              uttryck och en sammanhängande väv utan lameller eller
              plisseringar. I moderna lägenheter och kontor i Västra Hamnen,
              Hyllie och Dockan är rullgardiner ofta valet eftersom de
              smälter in i en stram inredning.
            </p>
            <p>
              Eftersom väven är slät kan ett rum ha samma rullgardin på
              flera fönster utan att uttrycket bryts upp. Ett rum med en
              fönsterrad får ett tydligt, lugnt utseende med samma
              rullgardin överallt.
            </p>
          </Section>

          <Section heading="Vilka typer finns?">
            <p>
              <strong className="font-medium text-ink">Transparent / screen</strong>{" "}
              är en glesvävd rullgardin som släpper igenom ljus och tonad
              utsikt utåt, samtidigt som insyn dämpas på dagtid. Bra för
              vardagsrum och kontor där ni vill behålla utsikten.
            </p>
            <p>
              <strong className="font-medium text-ink">Ljusfiltrerande</strong>{" "}
              har en tätare väv som dimmer ljuset utan att helt mörklägga.
              Ger en mjuk dagsljuskvalitet och fungerar bra i vardagsrum
              och kök.
            </p>
            <p>
              <strong className="font-medium text-ink">Mörkläggande (blackout)</strong>{" "}
              är en helt opak väv. I sovrum kombineras den ofta med
              sidoskenor som stoppar ljusläckage längs karmen.
            </p>
            <p>
              <strong className="font-medium text-ink">Dubbelrullgardin</strong>{" "}
              kombinerar två vävar i samma rullsystem — typiskt en screen
              för dagen och en mörkläggande för natten. Smidigt i sovrum
              och vardagsrum där behoven växlar under dygnet.
            </p>
          </Section>

          <Section heading="Vad påverkar priset?">
            <p>
              Bredd, vävtyp och om rullgardinen ska sitta öppet eller i
              kassett är de tre största prisfaktorerna. En kassett skyddar
              väven när den är upprullad och ger ett mer integrerat uttryck
              — men kostar mer än öppen montering.
            </p>
            <p>
              Motorisering är ett tillval som lönar sig på höga fönster,
              breda partier och flerrumsstyrning. Sidoskenor för
              mörkläggning och kedjelås för säkerhet är andra tillval. Vi
              specificerar varje del i offerten.
            </p>
          </Section>

          <Section heading="Så går rådgivning och montering till">
            <ol className="space-y-5 list-none">
              <Step
                index="01"
                title="Hembesök"
                body="Vi mäter på plats och går igenom rummens användning, ljusriktningar och eventuell mörkläggningsnivå."
              />
              <Step
                index="02"
                title="Vävprover i ljus"
                body="Vävprover hålls upp mot fönstret så ni ser hur ljuset filtreras i verklig miljö."
              />
              <Step
                index="03"
                title="Specificerad offert"
                body="Pris per fönster med vävtyp, kassett, sidoskenor och eventuell motor."
              />
              <Step
                index="04"
                title="Montering"
                body="Rullgardinen monteras med diskreta fästen i karm, vägg eller tak. Vi kontrollerar drift och städar efter oss."
              />
            </ol>
          </Section>

          <div className="mt-20">
            <Eyebrow>Vanliga frågor</Eyebrow>
            <h2 className="heading-section text-3xl md:text-4xl mt-5 text-ink">
              Frågor om rullgardiner.
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
          eyebrow="Rullgardiner Malmö"
          heading="Boka kostnadsfri rådgivning för rullgardiner."
          body="Vi mäter på plats, visar vävprover med olika ljusgenomsläpp och föreslår en lösning per rum. Hembesök och offert är kostnadsfria."
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
