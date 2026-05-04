import type { Metadata } from "next";
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
  servicePageSchema,
  faqSchema,
  breadcrumbSchema,
} from "@/lib/schema";

const PAGE_URL = `${SITE_URL}/invandigt-solskydd/`;
const PAGE_TITLE =
  "Invändigt solskydd Malmö | Plissé, rullgardiner, persienner, lamellgardiner — Bellevue Solskydd";
const PAGE_DESC =
  "Måttanpassat invändigt solskydd för bostäder och kontor i Malmö och södra Skåne. Plissé, rullgardiner, persienner och lamellgardiner — kostnadsfritt hembesök hos er.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: PAGE_URL },
};

const faqs = [
  {
    question: "Vilken typ av invändigt solskydd är vanligast i Malmö?",
    answer:
      "Det varierar tydligt med bostadstyp. I bostadsrätter och hyresrätter — där borrning i karm ofta inte är tillåten — väljer många glasmonterad plissé eller persienn med manövrering i listen. I villor i Limhamn eller Bunkeflostrand är rullgardin med motor vanligare, eftersom man har full frihet att dra elledningar. För nyproducerade lägenheter i Hyllie och Västra Hamnen, med långa fönsterrader, är lamellgardin eller motorrullgardin standardvalet.",
  },
  {
    question: "Måste man ha BRF-godkännande för invändigt solskydd?",
    answer:
      "Nej, normalt inte. Eftersom inget syns på fasaden räknas det som inredning. Det undantag som finns är om föreningen har enhetlig fasadgardin eller om ni vill borra i originalkarmar i en kulturmärkt fastighet. Vi kollar igenom föreningens stadgar tillsammans med er om det är osäkert.",
  },
  {
    question: "Finns det invändigt solskydd som dämpar både värme och kyla?",
    answer:
      "Ja, plissé med isolerande dubbelväv. Två tyglager med slutna luftceller emellan håller kylan ute på vintern och solvärmen ute på sommaren. På söder- och västerlägen mot Öresund märks effekten tydligast under julimånader, men effekten åt motsatt håll — minskat kallras vid stora fönster — är nästan lika viktig under skånska vintrar.",
  },
  {
    question: "Hur går ett hembesök till — och vad kostar det?",
    answer:
      "Hembesöket är gratis, även om ni inte beställer. Vi kommer ut, mäter alla aktuella fönster, lyssnar igenom hur ni använder rummen, visar vävprover i det ljus ni faktiskt har och lämnar en specificerad offert per fönster på plats. Vi gör hembesök i Malmö, Lund, Staffanstorp, Vellinge, Lomma, Kävlinge, Trelleborg och Skanör-Falsterbo.",
  },
  {
    question: "Hur lång leveranstid är det?",
    answer:
      "För standardsortiment ligger vi typiskt på 2–4 veckor från beställning till montering. Specialfärger och motoriserade lösningar med smart hem-integration kan ta något längre. Vi anger alltid ett konkret datumintervall i offerten — inga öppna löften.",
  },
];

const products = [
  {
    title: "Plisségardiner",
    href: "/plissegardiner-malmo/",
    body: "Veckad väv som kan parkeras var som helst i fönstret. Tvåvägsjustering på de flesta modeller — täck nedre halvan mot insyn, behåll dagsljus ovanför. Isolerväv med luftceller dämpar både kyla och värme. Glasmonterad variant kräver ingen borrning.",
  },
  {
    title: "Rullgardiner",
    href: "/rullgardiner-malmo/",
    body: "Slät väv som rullas ner ovanifrån. Vävvalet styr funktionen — screen för bländskydd, blackout för sovrum, ljusfiltrerande för vardagsrum. Finns i bredder upp till 450 cm och med motor — antingen via app eller direkt mot Apple HomeKit och Google Home.",
  },
  {
    title: "Persienner",
    href: "/persienner-malmo/",
    body: "Aluminiumlameller som vinklas stegvis så att ljuset kan styras i riktning, inte bara i mängd. Trettio färgval på lameller, mellanglasvarianten sitter inkapslad mellan glasen i kopplade fönster och slipper damm helt.",
  },
  {
    title: "Lamellgardiner",
    href: "/lamellgardiner-malmo/",
    body: "Vertikala lameller på en skena ovanför glaset. Hela paketet kan dras åt sidan — bra vid altandörrar och skjutpartier — eller vinklas öppet för bländskydd vid skärmarbete. En enskild skena täcker även mycket breda fasadpartier.",
  },
];

export default function InvandigtSolskyddPage() {
  const jsonLd = graph(
    breadcrumbSchema([
      { name: "Start", url: `${SITE_URL}/` },
      { name: "Invändigt solskydd", url: PAGE_URL },
    ]),
    servicePageSchema(
      "Invändigt solskydd Malmö",
      PAGE_URL,
      PAGE_DESC
    ),
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
              { name: "Invändigt solskydd", url: PAGE_URL },
            ]}
          />

          <div className="mt-10 mb-10">
            <Eyebrow>Översikt</Eyebrow>
            <h1 className="heading-display text-5xl md:text-7xl mt-6 text-ink">
              Invändigt solskydd
            </h1>
            <Divider className="mt-7" />
          </div>

          <AnswerBox>
            Invändigt solskydd är allt som monteras innanför fönstret för att
            styra ljus, värme och insyn — plissé, rullgardiner, persienner och
            lamellgardiner. Bellevue Solskydd hjälper er välja och installera
            rätt typ för bostaden eller kontoret. Vi gör mätbesöket i Malmö med
            omnejd kostnadsfritt och offererar fönster för fönster.
          </AnswerBox>

          <Section heading="Lokalt anpassat för Malmö och södra Skåne">
            <p>
              Bostadsbeståndet i Malmö är lika varierat som det är gammalt på
              vissa håll och splitternytt på andra. Sekelskiftet i Möllevången
              har djupa karmar och kopplade fönster där en mellanglaspersienn
              ofta sitter perfekt. Funkislägenheterna i Limhamn har relativt
              enkla, höga fönster där rullgardin med kassett ger ett stramt
              uttryck. Nyproduktionen i Hyllie och Västra Hamnen har breda
              glasfasader där lamellgardiner eller stora rullgardiner i
              Maxi-utförande är de praktiska valen.
            </p>
            <p>
              Vi rör oss dagligen i hela det här spannet — från radhus i
              Bunkeflo till bostadsrätter i Davidshall — och vet vad som
              fungerar i respektive fönstertyp. Vid hembesöket går vi igenom
              ert specifika fönster på plats och föreslår produkten som
              passar tekniskt och estetiskt.
            </p>
            <p>
              Telefon: <strong className="text-ink">040-18 11 00</strong>{" "}
              · E-post:{" "}
              <a
                href="mailto:info@bellevuesolskydd.se"
                className="text-ink underline decoration-ink/30 hover:decoration-ink"
              >
                info@bellevuesolskydd.se
              </a>
            </p>
          </Section>

          <Section heading="Fyra typer av invändigt solskydd">
            <p>
              Varje typ löser sin uppgift på sitt sätt. Skillnaden ligger i hur
              de styr ljuset, hur de monteras och vilka vävalternativ som är
              möjliga. Klicka vidare på kategorin för djupare information om
              modeller, vävar och prisbild.
            </p>
            <div className="not-prose mt-8 grid gap-4 md:grid-cols-2">
              {products.map((product) => (
                <Link
                  key={product.href}
                  href={product.href}
                  className="group block rounded-premium border border-ink/10 bg-canvas-soft px-7 py-7 transition-all duration-500 ease-premium hover:-translate-y-1 hover:shadow-lift hover:border-ink/15"
                >
                  <h3 className="heading-section text-2xl text-ink mb-3">
                    {product.title}
                  </h3>
                  <p className="body-copy text-ink-soft text-sm mb-5">
                    {product.body}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-ink">
                    Läs mer
                    <ArrowRight
                      size={14}
                      strokeWidth={1.6}
                      className="transition-transform duration-300 ease-premium group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </Section>

          <Section heading="Hur väljer man rätt?">
            <p>
              Tre frågor brukar räcka för att smalna av valet. Vad ska
              solskyddet göra först och främst — mörklägga, dämpa bländning,
              dölja insyn, eller jämna ut temperaturen vid fönstret? Hur ser
              fönstret ut — standardmått, mellanglas, takfönster, eller långt
              glasparti? Och vilken typ av styrning föredrar ni — manuell
              eller motoriserad?
            </p>
            <div className="not-prose mt-8 rounded-premium border border-ink/10 bg-canvas-soft overflow-hidden">
              <table className="w-full text-sm md:text-base">
                <thead className="bg-canvas">
                  <tr className="text-left text-xs font-medium uppercase tracking-[0.18em] text-ink-soft">
                    <th className="px-5 py-4">Egenskap</th>
                    <th className="px-5 py-4">Plissé</th>
                    <th className="px-5 py-4">Rullgardin</th>
                    <th className="px-5 py-4">Persienn</th>
                    <th className="px-5 py-4">Lamellgardin</th>
                  </tr>
                </thead>
                <tbody className="text-ink">
                  <ComparisonRow
                    label="Mörkläggning"
                    cells={[
                      "Ja — isolerväv med aluminiumkärna",
                      "Ja — blackout-väv",
                      "Begränsad",
                      "Ja — tät väv",
                    ]}
                  />
                  <ComparisonRow
                    label="Isolering"
                    cells={["Ja — luftceller", "Nej", "Nej", "Nej"]}
                  />
                  <ComparisonRow
                    label="Värmereduktion"
                    cells={[
                      "Ja",
                      "Ja — vit baksida",
                      "Begränsad",
                      "Ja — tät väv",
                    ]}
                  />
                  <ComparisonRow
                    label="Motor"
                    cells={["Nej", "Ja", "Nej", "Ja"]}
                  />
                  <ComparisonRow
                    label="Tvåvägs"
                    cells={["Ja (4 av 6 modeller)", "Nej", "Nej", "Nej"]}
                  />
                  <ComparisonRow
                    label="Bäst för"
                    cells={[
                      "Insyn + dagsljus, isolering",
                      "Bredaste fönster, motor",
                      "Stegvis ljuskontroll",
                      "Stora glaspartier, dörrar",
                    ]}
                  />
                </tbody>
              </table>
            </div>
            <p className="mt-8">
              Tabellen är en utgångspunkt — i verkligheten är det ofta en
              kombination som blir bäst. Plissé i sovrummet, rullgardin med
                screen i hemmakontoret, persienn i köket. Vi går igenom rum för
              rum vid hembesöket.
            </p>
          </Section>

          <Section heading="Så går det till">
            <ol className="space-y-5 list-none">
              <Step
                index="01"
                title="Boka hembesök"
                body="Ni väljer en tid som funkar — kvällar och helger fungerar lika bra som vardagar. Vi kommer ut till adressen i Malmö, Lund, Staffanstorp, Vellinge, Lomma, Kävlinge, Trelleborg eller Skanör-Falsterbo."
              />
              <Step
                index="02"
                title="Mätbesök och rådgivning"
                body="Vi mäter fönstren, går igenom vävprover i det ljus ni faktiskt har, och pratar igenom vad ni vill att solskyddet ska lösa. Inga säljmöten — bara fakta och alternativ."
              />
              <Step
                index="03"
                title="Specificerad offert på plats"
                body="Innan vi går får ni en specificerad offert: pris per fönster, vald väv, manövrering, och leveranstid. Inga klumpsummor och inga dolda kostnader."
              />
              <Step
                index="04"
                title="Leverans och montering"
                body="När ni är redo beställer vi mått, levererar och monterar. Vi går igenom skötsel och garanti — och plockar med oss förpackningar och eventuellt det gamla solskyddet."
              />
            </ol>
          </Section>

          <div className="mt-20">
            <Eyebrow>Vanliga frågor</Eyebrow>
            <h2 className="heading-section text-3xl md:text-4xl mt-5 text-ink">
              Frågor om invändigt solskydd.
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
          eyebrow="Invändigt solskydd Malmö"
          heading="Boka kostnadsfritt hembesök."
          body="Vi mäter på plats, visar vävprover i det ljus ni har, och offererar fönster för fönster. Hembesöket är gratis även om ni väljer att inte beställa — och täcker hela södra Skåne."
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

function ComparisonRow({
  label,
  cells,
}: {
  label: string;
  cells: string[];
}) {
  return (
    <tr className="border-t border-ink/8">
      <td className="px-5 py-4 font-medium">{label}</td>
      {cells.map((cell, index) => (
        <td key={index} className="px-5 py-4 text-ink-soft">
          {cell}
        </td>
      ))}
    </tr>
  );
}
