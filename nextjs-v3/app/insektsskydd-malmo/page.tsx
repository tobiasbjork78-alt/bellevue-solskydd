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

const PAGE_URL = `${SITE_URL}/insektsskydd-malmo/`;
const PAGE_TITLE =
  "Insektsskydd Malmö | Insektsnät för fönster och dörrar";
const PAGE_DESC =
  "Insektsskydd i Malmö — fasta nät, rullbara och plissé för dörrar. Ventilation utan mygg och knott i havsnära läge. Rådgivning och montering på plats.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: PAGE_URL },
};

const faqs = [
  {
    question: "Får jag montera insektsskydd i hyresrätt?",
    answer:
      "I de flesta hyresrätter är insektsskydd som monteras invändigt utan ingrepp i fasad eller fönster tillåtet. Vi använder gärna spännlister eller lättborttagbara fästen som inte skadar karm eller fönsterbåge. Vid tveksamhet rekommenderar vi att kontrollera med hyresvärden — vi kan ta fram en kort beskrivning av infästningen om det krävs.",
  },
  {
    question: "Kan insektsskydd kombineras med persienn eller plissé?",
    answer:
      "Ja. Insektsskydd monteras i fönsterkarmen — utanpåliggande eller inom karmen — medan persienner, plissé och rullgardiner sitter på insidan. De stör inte varandra. Den vanligaste kombinationen i Malmö är insektsskydd för luftning sommartid, med plissé eller rullgardin för ljusstyrning året runt.",
  },
  {
    question: "Hur tas mått för fönster och dörrar?",
    answer:
      "För fasta ramar mäts fönsteröppningens innermått när fönstret är öppet. För rullbara insektsskydd och plissédörrar krävs lite mer detaljerade mått — höjd, bredd och eventuell snedställning. Vid hembesök mäter vi alla öppningar samtidigt så att lösningen sitter exakt rätt.",
  },
  {
    question: "Hur rengörs insektsnätet?",
    answer:
      "Damma av nätet med dammsugare på lägsta inställning eller spola av med ljummet vatten — undvik högtryckstvätt eller hårda borstar som kan deformera väven. För rullbara modeller drar man bara ut nätet och spolar av; det torkar snabbt. En enkel årlig rengöring brukar räcka.",
  },
];

export default function InsektsskyddMalmoPage() {
  const jsonLd = graph(
    breadcrumbSchema([
      { name: "Start", url: `${SITE_URL}/` },
      { name: "Insektsskydd Malmö", url: PAGE_URL },
    ]),
    servicePageSchema("Insektsskydd Malmö", PAGE_URL, PAGE_DESC),
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
              { name: "Insektsskydd Malmö", url: PAGE_URL },
            ]}
          />

          <div className="mt-10 mb-10">
            <Eyebrow>Tillbehör</Eyebrow>
            <h1 className="heading-display text-5xl md:text-7xl mt-6 text-ink">
              Insektsskydd i Malmö
            </h1>
            <Divider className="mt-7" />
          </div>

          <AnswerBox>
            Insektsskydd är ett finmaskigt nät som monteras i fönster
            eller dörrar och stoppar mygg, flugor och knott utan att
            blockera luftflödet. I Malmös havsnära läge är det ofta en
            förutsättning för att kunna vädra på sommaren, särskilt nära
            kanaler, dammar och Öresund.
          </AnswerBox>

          <Section heading="När passar insektsskydd?">
            <p>
              Hela Malmö ligger nära vatten, och nära vatten finns mygg
              och knott. På bottenvåningar nära kanalerna i centrum, vid
              Pildammsparken och nära Ribersborg märks insekterna som
              mest under skymning på sommaren.
            </p>
            <p>
              Insektsskydd är också vanligt i sovrum oavsett område —
              för att kunna ha fönstret öppet hela natten under varma
              perioder utan att vakna med insekter i rummet. För
              barnfamiljer är det praktiskt eftersom barnen kan ha fönster
              öppet utan att man måste ha persienn eller rullgardin nere.
            </p>
          </Section>

          <Section heading="Vilka typer finns?">
            <p>
              <strong className="font-medium text-ink">Fasta ramar</strong>{" "}
              monteras i fönsterkarmen och sitter kvar hela sommaren. Tas
              av inför vintern och förvaras plant. Robust och billigast.
              Lämpar sig för fönster som inte används som passage.
            </p>
            <p>
              <strong className="font-medium text-ink">Rullbara insektsskydd</strong>{" "}
              dras ner från en kassett ovanför fönstret och rullas in
              automatiskt när det inte används. Sitter kvar året runt och
              är diskret när insektsskyddet inte är aktivt.
            </p>
            <p>
              <strong className="font-medium text-ink">Plissé för dörrar</strong>{" "}
              är en plisserad nätduk som dras åt sidan som ett dragspel.
              Vanlig vid altandörrar och balkongdörrar där man passerar
              ofta — nätet öppnar sig snabbt och dras ihop när det inte
              används.
            </p>
            <p>
              <strong className="font-medium text-ink">Pendeldörr</strong>{" "}
              är en gångjärnsmonterad nätdörr med fjäder. Den passar dörrar
              som används mycket — t.ex. mellan kök och uteplats — och
              stänger sig själv när någon gått ut eller in.
            </p>
          </Section>

          <Section heading="Vad påverkar priset?">
            <p>
              Storlek är grundpriset, och typ avgör resten. Fasta ramar
              är billigast eftersom konstruktionen är enkel. Rullbara
              modeller och plissédörrar är dyrare på grund av kassetten
              respektive plisseringen, men ger mer användarvänlighet.
            </p>
            <p>
              Vid hembesök räknar vi gärna ihop ett komplett pris för
              hela bostaden — det blir oftast lägre per fönster när
              alla mått samlas in samtidigt och flera enheter beställs
              i samma omgång.
            </p>
          </Section>

          <Section heading="Så går rådgivning och montering till">
            <ol className="space-y-5 list-none">
              <Step
                index="01"
                title="Hembesök"
                body="Vi mäter alla fönster och dörrar där insektsskydd ska sitta. Går igenom om ni vill ha fast eller rullbar lösning."
              />
              <Step
                index="02"
                title="Förslag"
                body="Vi föreslår en kombination av lösningar — exempelvis fasta ramar i sovrum, plissé vid altandörren."
              />
              <Step
                index="03"
                title="Specificerad offert"
                body="Pris per fönster och dörr. Vid större installationer kan vi paketera priset."
              />
              <Step
                index="04"
                title="Montering"
                body="Vi sätter upp ramar och kassetter. Hyresrätter får skadefri infästning där det är möjligt."
              />
            </ol>
          </Section>

          <div className="mt-20">
            <Eyebrow>Vanliga frågor</Eyebrow>
            <h2 className="heading-section text-3xl md:text-4xl mt-5 text-ink">
              Frågor om insektsskydd.
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
          eyebrow="Insektsskydd Malmö"
          heading="Boka kostnadsfri rådgivning för insektsskydd."
          body="Vi mäter på plats och föreslår en kombination som passar bostaden — fasta ramar, rullbara, plissédörrar eller en blandning. Hembesök och offert är kostnadsfria."
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
