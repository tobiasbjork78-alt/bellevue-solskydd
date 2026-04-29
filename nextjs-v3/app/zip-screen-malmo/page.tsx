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

const PAGE_URL = `${SITE_URL}/zip-screen-malmo/`;
const PAGE_TITLE =
  "Zip screen Malmö | Vindstabil utvändig screen med montering";
const PAGE_DESC =
  "Zip screen i Malmö — utvändig screen som stoppar värmen innan den når glaset. Vindstabil lösning för stora glaspartier och västerfasader. Rådgivning och montering på plats.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: PAGE_URL },
};

const faqs = [
  {
    question: "Vad är skillnaden mellan zip screen och en markis?",
    answer:
      "En markis fälls ut horisontellt och skuggar ovanifrån. En zip screen sitter vertikalt direkt på fasaden och täcker hela glaset. Det betyder att zip screen stoppar solen innan strålarna träffar glaset, medan en markis skuggar uteplatsen utanför glaset. Zip screen är mer effektiv mot värmeinstrålning på stora fönsterpartier; markis är bättre om ni vill skapa skugga ute.",
  },
  {
    question: "Hur tål zip screen blåsten?",
    answer:
      "Bra. Zip screen är vindstabil eftersom väven löper i sidoskenor med blixtlås (dragkedja på engelska — därav namnet) som låser fast väven längs hela kanten. Det gör att väven inte kan flaxa eller blåsa ut. Kvalitetsprodukter klassas i vindklass 3 enligt EN 13561, vilket är tillräckligt för de flesta fasader i Malmö, även mot Öresund.",
  },
  {
    question: "Hur är insynen genom screenväven?",
    answer:
      "Screenväv finns i olika öppningsgrad — typiskt 1, 3, 5 eller 10 procent. Lägre öppningsgrad = mer privat utåt och mer värmeskydd. Högre = mer utsikt. Inifrån och ut har ni i regel god utsikt dagtid, medan insyn utifrån begränsas. Kvällstid när det är ljusare inne än ute blir förhållandet det omvända — då rekommenderar vi en innanför sittande mörkläggning för insynsskydd.",
  },
  {
    question: "Kan zip screen sitta uppe på vintern?",
    answer:
      "Ja. Zip screen är konstruerad för att sitta monterad året runt. Många använder den även vintertid, dels som vindskydd för uteplatsen, dels för att minska kallras vid stora glaspartier. Om ni inte använder zip screen på vintern kan den helt enkelt rullas in — väven sitter skyddad i kassetten.",
  },
  {
    question: "Behöver jag tillstånd från brf eller bygglov?",
    answer:
      "I bostadsrätt krävs styrelsens godkännande eftersom zip screen är ett fasadingrepp. Bygglov krävs sällan i Malmö för standardinstallationer på enskilda bostäder, men på bevarandeklassade fastigheter eller större partier kan det krävas — vi går igenom det fall för fall. Vi tar gärna fram underlag som ni kan skicka till föreningen.",
  },
];

export default function ZipScreenMalmoPage() {
  const jsonLd = graph(
    breadcrumbSchema([
      { name: "Start", url: `${SITE_URL}/` },
      { name: "Zip screen Malmö", url: PAGE_URL },
    ]),
    servicePageSchema("Zip screen Malmö", PAGE_URL, PAGE_DESC),
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
              { name: "Zip screen Malmö", url: PAGE_URL },
            ]}
          />

          <div className="mt-10 mb-10">
            <Eyebrow>Utvändigt solskydd</Eyebrow>
            <h1 className="heading-display text-5xl md:text-7xl mt-6 text-ink">
              Zip screen i Malmö
            </h1>
            <Divider className="mt-7" />
          </div>

          <AnswerBox>
            En zip screen är en utvändig screen som monteras direkt på
            fasaden och stoppar solens värme innan den når glaset. Bellevue
            Solskydd levererar måttanpassade zip screen-lösningar i Malmö
            för stora glaspartier, västerfasader mot Öresund och nybyggen
            där energieffektivitet är avgörande.
          </AnswerBox>

          <Section heading="Stora glaspartier — och västersolen">
            <p>
              I Västra Hamnen, Hyllie och nybyggda områden i Limhamn är
              stora glaspartier mot söder och väster en standard-detalj.
              Det ger ljus och utsikt — men också kraftig värmeinstrålning
              under eftermiddagen. En invändig rullgardin eller persienn
              dämpar ljuset, men värmen är redan inne.
            </p>
            <p>
              Zip screen löser problemet på utsidan. Eftersom väven sitter
              utanför glaset stoppas både solenergin och uppvärmningen av
              glaset självt. Resultatet märks på rumstemperaturen och på
              kostnaden för komfortkyla under sommarhalvåret.
            </p>
          </Section>

          <Section heading="Hur fungerar zip screen?">
            <p>
              Väven består av en perforerad screen som rullas ner mellan
              två sidoskenor. Längs vävens kanter sitter ett blixtlås som
              låser fast i sidoskenorna — det är därifrån namnet kommer.
              Resultatet är att väven hålls helt uppspänd och varken
              flaxar eller blåser ut, även i hård vind.
            </p>
            <p>
              Zip screen är alltid motoriserad eftersom storleken och
              vindkraften kräver styrning av motor. Ofta kombineras den
              med vindsensor och solsensor — screenen rullas automatiskt
              upp eller ner beroende på väderlek.
            </p>
          </Section>

          <Section heading="Vad påverkar priset?">
            <p>
              Storlek är den största prisfaktorn — höga och breda
              glaspartier kräver kraftigare rörsystem och kassetter. Väven
              kommer i flera öppningsgrader: en tätare väv ger bättre
              värmeskydd och mer privatliv, en glesare ger mer utsikt.
              Färgvalet på kassett och sidoskenor brukar inte påverka
              priset nämnvärt.
            </p>
            <p>
              Tillval som vind- och solsensor, integration med smart hem
              och tidsstyrning tillkommer. Vid stora partier ingår dessa
              ofta som standard eftersom det är så zip screen är tänkt att
              fungera.
            </p>
          </Section>

          <Section heading="Så går rådgivning och montering till">
            <ol className="space-y-5 list-none">
              <Step
                index="01"
                title="Hembesök"
                body="Vi besöker fasaden, mäter glaspartier och bedömer infästningsmöjligheter och el-dragning till motor."
              />
              <Step
                index="02"
                title="Vävprover och öppningsgrad"
                body="Vi visar väv i olika öppningsgrad mot ert glas så ni ser både utsikt och skuggning i verklig miljö."
              />
              <Step
                index="03"
                title="Specificerad offert"
                body="Pris per zip screen med vävtyp, motor, sensorer och eventuell smart hem-integration."
              />
              <Step
                index="04"
                title="Montering"
                body="Våra montörer infäster kassett och sidoskenor, drar fram el till motor och kalibrerar styrning och sensorer."
              />
            </ol>
          </Section>

          <div className="mt-20">
            <Eyebrow>Vanliga frågor</Eyebrow>
            <h2 className="heading-section text-3xl md:text-4xl mt-5 text-ink">
              Frågor om zip screen.
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
          eyebrow="Zip screen Malmö"
          heading="Boka kostnadsfri rådgivning för zip screen."
          body="Vi besöker fasaden, går igenom värmeinstrålning och vindexponering och föreslår en zip screen-lösning som matchar glasets storlek. Hembesök och offert är kostnadsfria."
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
