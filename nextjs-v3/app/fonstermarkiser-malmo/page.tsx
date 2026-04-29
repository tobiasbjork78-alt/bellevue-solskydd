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

const PAGE_URL = `${SITE_URL}/fonstermarkiser-malmo/`;
const PAGE_TITLE =
  "Fönstermarkiser Malmö | Utvändig markis direkt på fönstret";
const PAGE_DESC =
  "Fönstermarkiser i Malmö — utvändig markis som stoppar värmen innan den når glaset. Kompakt lösning för söderfasader, flerfamiljshus och bostadsrätter.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: PAGE_URL },
};

const faqs = [
  {
    question: "Vad är skillnaden mellan fönstermarkis och zip screen?",
    answer:
      "En fönstermarkis fälls ut snett ner från fasaden över fönstret — den skuggar både glaset och utsikten ovanifrån. En zip screen rullas ner vertikalt direkt på glaset och täcker hela rutan. Fönstermarkis är diskretare i utvikt läge, billigare och vanligare i klassiska fasader. Zip screen är effektivare mot värme på riktigt stora glaspartier och tål mer vind.",
  },
  {
    question: "Krävs styrelsens godkännande i bostadsrätt?",
    answer:
      "Ja. Fönstermarkis är ett fasadingrepp och kräver godkännande av styrelsen i de flesta föreningar i Malmö. Många föreningar har även en gemensam färgskala för markiser så att huset behåller en samordnad fasad. Vi tar fram underlag — modell, färg, infästning och bilder — som ni kan skicka till styrelsen.",
  },
  {
    question: "Kan fönstermarkiserna sitta uppe på vintern?",
    answer:
      "Modern fönstermarkis är konstruerad för året-runt-bruk. Med kassettmodell skyddas väven helt när markisen är indragen, vilket förlänger livslängden i kustklimat. Manuella, öppna fällarmsmodeller bör tas in om de inte används — fukt under en upprullad väv är den vanligaste orsaken till mögelangrepp.",
  },
  {
    question: "Behöver fönstermarkis motoriseras?",
    answer:
      "Inte alltid. På små och mellanstora storlekar fungerar manuell vev bra och är ekonomiskt. På större fönstermarkiser och när ni har många i samma fastighet rekommenderar vi motor med vindsensor — det skyddar markisen vid plötslig blåst och gör daglig drift enklare.",
  },
];

export default function FonstermarkiserMalmoPage() {
  const jsonLd = graph(
    breadcrumbSchema([
      { name: "Start", url: `${SITE_URL}/` },
      { name: "Fönstermarkiser Malmö", url: PAGE_URL },
    ]),
    servicePageSchema("Fönstermarkiser Malmö", PAGE_URL, PAGE_DESC),
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
              { name: "Fönstermarkiser Malmö", url: PAGE_URL },
            ]}
          />

          <div className="mt-10 mb-10">
            <Eyebrow>Utvändigt solskydd</Eyebrow>
            <h1 className="heading-display text-5xl md:text-7xl mt-6 text-ink">
              Fönstermarkiser i Malmö
            </h1>
            <Divider className="mt-7" />
          </div>

          <AnswerBox>
            En fönstermarkis sitter direkt på fönstret och stoppar solen
            innan värmen når glaset. Den är kompaktare än en
            terrassmarkis och är vanligast på söderfasader, flerfamiljshus
            och i bostadsrätter där föreningen har en gemensam färgskala.
            Bellevue Solskydd levererar fönstermarkiser i Malmö med
            rådgivning, måttagning och montering.
          </AnswerBox>

          <Section heading="När passar fönstermarkis?">
            <p>
              Fönstermarkis är förstahandsvalet när ni vill ha utvändigt
              solskydd som syns men inte dominerar. På klassiska
              flerfamiljshus i centrala Malmö är fönstermarkiser ofta en
              del av fasadens identitet — fönsterrad efter fönsterrad
              med markiser i samma färg.
            </p>
            <p>
              I bostadsrättsföreningar regleras färg och modell ofta i
              en gemensam standard. Det betyder att ni inte behöver välja
              fritt — vi hjälper er hitta en modell som matchar
              föreningens regler och fönstrets storlek.
            </p>
            <p>
              På söderfasader är effekten mot värme tydlig. En vanlig
              markisduk reducerar solinstrålningen med 70–90 procent på
              det fönster den täcker.
            </p>
          </Section>

          <Section heading="Vilka typer finns?">
            <p>
              <strong className="font-medium text-ink">Fällarmsmarkis</strong>{" "}
              är den klassiska modellen — markisen fälls ut snett ner med
              hjälp av två armar. Enkel konstruktion, passar de flesta
              fönsterstorlekar och är förstahandsval på äldre fasader.
            </p>
            <p>
              <strong className="font-medium text-ink">Korgmarkis</strong>{" "}
              har en avrundad, halvcirkelformad form. Vanlig vid
              entrédörrar och butiker — ger mer skugga ovanför
              fönstret/dörren och har ett mer dekorativt uttryck.
            </p>
            <p>
              <strong className="font-medium text-ink">Screenmarkis</strong>{" "}
              använder en perforerad screenväv istället för traditionell
              markisduk. Ni behåller mer av utsikten genom väven samtidigt
              som värmen stoppas. Något modernare uttryck.
            </p>
          </Section>

          <Section heading="Vad påverkar priset?">
            <p>
              Storlek är den största prisfaktorn — bredd och utfall styr
              både vävyta och armens kraft. Manuell vev är standard på de
              flesta storlekar och håller priset nere; motorisering med
              eventuell vindsensor tillkommer.
            </p>
            <p>
              Vävkvaliteten är värd att tänka på i Malmös kustklimat. En
              akrylväv med UV- och smutsbehandling håller färg, form och
              tålighet längre än billiga alternativ. Kassett som skyddar
              väven när markisen är inrullad förlänger livslängden ytterligare.
            </p>
          </Section>

          <Section heading="Så går rådgivning och montering till">
            <ol className="space-y-5 list-none">
              <Step
                index="01"
                title="Hembesök"
                body="Vi mäter fönsterpartierna, går igenom fasadens läge och vilka regler som gäller för bostadsrätten eller fastigheten."
              />
              <Step
                index="02"
                title="Förslag och vävprover"
                body="Vi visar vävprover mot fasaden och föreslår modell utifrån storlek, färgkrav och vindexponering."
              />
              <Step
                index="03"
                title="Specificerad offert"
                body="Pris per markis med modell, väv, eventuell motor och vindsensor — inga oklarheter."
              />
              <Step
                index="04"
                title="Montering"
                body="Våra montörer infäster markisen säkert i fasaden, kalibrerar manuellt eller motoriserat och städar efter sig."
              />
            </ol>
          </Section>

          <div className="mt-20">
            <Eyebrow>Vanliga frågor</Eyebrow>
            <h2 className="heading-section text-3xl md:text-4xl mt-5 text-ink">
              Frågor om fönstermarkiser.
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
          eyebrow="Fönstermarkiser Malmö"
          heading="Boka kostnadsfri rådgivning för fönstermarkiser."
          body="Vi besöker fasaden, går igenom föreningens regler och föreslår en lösning som passar både fönstret och fastigheten. Hembesök och offert är kostnadsfria."
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
