import type { Metadata } from "next";
import Link from "next/link";
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

const PAGE_URL = `${SITE_URL}/persienner-malmo/`;
const PAGE_TITLE =
  "Persienner Malmö | Aluminium, mellanglas, 30 färger — Bellevue Solskydd";
const PAGE_DESC =
  "Måttanpassade aluminiumpersienner i Malmö och södra Skåne. Frihängande och mellanglas för kopplade fönster. 30 lamellfärger, 20 färger på lina och stegband. Kostnadsfritt hembesök.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: PAGE_URL },
};

const faqs = [
  {
    question: "Hur många färgkombinationer finns det?",
    answer:
      "På Klassisk, Klassisk LV och Mellanglas finns 30 lamellfärger och 20 färger på lina och stegband — vilket ger ett stort antal kombinationer. På Elegant-modellen är allt vitt: lameller, lister och detaljer. Vi tar med färgprover så ni kan se kulörerna i ert ljus och mot er fönsterkarm innan ni bestämmer.",
  },
  {
    question: "Vad är fördelen med en mellanglaspersienn?",
    answer:
      "Persiennen sitter inkapslad mellan glasen i kopplade fönster eller i fönster med delbart isolerglas. Lamellerna blir aldrig dammiga eftersom de aldrig är i kontakt med rumsluften. Det är en stor fördel i sekelskifteshus och funkislägenheter där mellanglas är vanligt — och ett bra val i kök där fett annars sätter sig på alla ytor.",
  },
  {
    question: "Vad är skillnaden mellan Klassisk och Klassisk LV?",
    answer:
      "Båda är samma persienn rent funktionsmässigt. Skillnaden ligger i manövreringen. Klassisk har draglina och vridstång monterade i karmen, vilket ger snabb och van handling men kräver att ni borrar i karmen för fästena. Klassisk LV har all manövrering samlad i överlisten — inget som behöver fästas i karmen — och passar därför hyresrätter, bostadsrätter och föreningar med strikta regler.",
  },
  {
    question: "Behöver persienner motoriseras?",
    answer:
      "Nej, persienner i sortimentet manövreras manuellt. Aluminium är så lätt att även stora persienner går smidigt att hissa med draglina. Vill ni motorisera ljusstyrning är rullgardin eller lamellgardin de produkter som har motoralternativ.",
  },
  {
    question: "Tål aluminium fukten i ett badrum?",
    answer:
      "Ja. Aluminium rostar inte och är okänsligt för kondens, så badrum och kök är inga problem. Det ena tillvalet vi rekommenderar i öppningsbara fönster är magnet i underlisten — den håller persiennen still mot karmen så att den inte slamrar mot glaset när fönstret öppnas.",
  },
  {
    question: "Hur dammar man av lamellerna?",
    answer:
      "Stäng lamellerna helt och torka över med en mjuk trasa eller en plym — då når ni hela lamellytan. Aluminium tål en lätt fuktig trasa om det blivit fett eller fingeravtryck. Mellanglasvarianten är ett undantag: lamellerna sitter mellan glasen och behöver aldrig dammas.",
  },
];

export default function PersiennerMalmoPage() {
  const jsonLd = graph(
    breadcrumbSchema([
      { name: "Start", url: `${SITE_URL}/` },
      { name: "Invändigt solskydd", url: `${SITE_URL}/invandigt-solskydd/` },
      { name: "Persienner Malmö", url: PAGE_URL },
    ]),
    servicePageSchema("Persienner Malmö", PAGE_URL, PAGE_DESC),
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
              {
                name: "Invändigt solskydd",
                url: `${SITE_URL}/invandigt-solskydd/`,
              },
              { name: "Persienner Malmö", url: PAGE_URL },
            ]}
          />

          <div className="mt-10 mb-10">
            <Eyebrow>Invändigt solskydd</Eyebrow>
            <h1 className="heading-display text-5xl md:text-7xl mt-6 text-ink">
              Persienner i Malmö
            </h1>
            <Divider className="mt-7" />
          </div>

          <AnswerBox>
            En persienn ger en typ av ljuskontroll som varken rullgardin
            eller plissé kan: lamellerna vrids stegvis och styr exakt hur
            mycket ljus som släpps in och från vilken vinkel. Bellevue
            Solskydd levererar måttanpassade aluminiumpersienner i Malmö och
            hela södra Skåne — frihängande för moderna fönster och
            mellanglas för kopplade fönster i sekelskifteshus.
          </AnswerBox>

          <Section heading="När persienner är rätt val">
            <p>
              Persiennen lägger ett extra steg mellan "öppet" och "stängt".
              Vinkla lamellerna lätt uppåt och solen reflekteras i taket
              istället för rakt mot skärmen — bra på dagar då rummet ändå
              ska vara ljust. Vinkla nedåt så blockeras insynen från gatan
              men ljus kommer in via takvinkeln. Hissa upp helt och fönstret
              är fritt. Tre lägen i samma produkt utan att något byts ut.
            </p>
            <p>
              I Malmö passar persienner särskilt bra i två
              fönstersituationer. Den första är de många fastigheter med
              kopplade fönster — vanligt i Möllevången, Slottsstaden, Lund
              och i funkislägenheterna i Limhamn — där mellanglasvarianten
              kan monteras inuti glaset och därmed slipper damm helt. Den
              andra är badrum, tvättstugor och kök där aluminium är tåligt
              mot fukt och fett.
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

          <Section heading="Konstruktion">
            <p>
              Lamellerna är 25 mm breda, 0,18 mm tjocka och lackerade
              aluminium. De hålls samman av en lina (för hissning) och ett
              stegband (som vrider lamellerna). Vridmekanismen är antingen
              en separat vridstång på karmen eller en glasstav som
              överförsätter rörelsen via en växel i överlisten — beroende
              på modell. Hela persiennen kan dras upp till fönstrets
              överkant där lamellerna staplas under överlisten.
            </p>
            <p>
              Aluminium är lätt och styvt — det är därför persienner kan
              göras stora utan att bli klumpiga, och det är därför de inte
              behöver motoriseras för att vara smidiga att använda. En
              vertikal variant av samma princip — där lamellerna är
              uppställda och dras åt sidan istället för uppåt — finns som{" "}
              <Link
                href="/lamellgardiner-malmo/"
                className="text-ink underline decoration-ink/30 hover:decoration-ink"
              >
                lamellgardin
              </Link>
              .
            </p>
          </Section>

          <Section heading="Fyra modeller">
            <h3 className="heading-section text-xl md:text-2xl text-ink mt-8 mb-3">
              Klassisk
            </h3>
            <p>
              Den mest flexibla modellen vad gäller montering. Fyra
              beslagsalternativ — takbeslag, väggbeslag, takbeslag med
              snäppfäste och gavelbeslag — gör att den kan monteras i tak,
              på vägg eller direkt i karm. Manövrering med draglina och
              vridstång på karmen. Fullt färgsortiment: 30 lamellfärger,
              20 färger på lina och stegband.
            </p>
            <h3 className="heading-section text-xl md:text-2xl text-ink mt-8 mb-3">
              Klassisk LV
            </h3>
            <p>
              Samma byggnad som Klassisk men med all manövrering samlad i
              överlisten — glasstav och lina hänger fritt framför rutan, så
              ingen åverkan görs på karmen. Det här är modellen vi
              installerar mest i bostadsrätter och hyresrätter där borrning
              i karmen inte är godkänd.
            </p>
            <h3 className="heading-section text-xl md:text-2xl text-ink mt-8 mb-3">
              Elegant
            </h3>
            <p>
              Gavelbeslag med täcklist döljer hela mekanismen och ger en
              renare överlist. Designen kompenserar för att modellen
              endast finns i vit kulör — lamell, lister och detaljer. Max
              cirka 200 cm bred. Passar moderna interiörer där man vill
              minimera synliga detaljer.
            </p>
            <h3 className="heading-section text-xl md:text-2xl text-ink mt-8 mb-3">
              Mellanglas
            </h3>
            <p>
              Persiennen monteras inuti fönstret — mellan glasen i ett
              fönster med delbart isolerglas eller i kopplade fönster.
              Lamellerna kommer aldrig i kontakt med rumsluft och blir
              aldrig dammiga. Styrningen sker via draglina och vridstång
              som går genom hål i fönsterbågen. Samma färgpalett som
              Klassisk: 30 lamellfärger.
            </p>
          </Section>

          <Section heading="Manövrering">
            <p>
              Persienner i sortimentet är manuella — det är ingen brist
              utan en konsekvens av att aluminium är så lätt att en motor
              sällan ger någon påtaglig vinst. Manövreringen sker beroende
              på modell:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="font-medium text-ink">
                  Draglina med linlås
                </strong>{" "}
                — drar persiennen upp eller ner. Linlåset håller den i
                önskat läge.
              </li>
              <li>
                <strong className="font-medium text-ink">Vridstång</strong>{" "}
                — kort stång på karmen (Klassisk, Elegant) som vrids för
                att vinkla lamellerna stegvis.
              </li>
              <li>
                <strong className="font-medium text-ink">Glasstav</strong>{" "}
                — stav som hänger framför rutan (Klassisk LV) och vrider
                lamellerna via en växel i överlisten. Ingen åverkan på
                karmen.
              </li>
            </ul>
            <p>
              På mellanglasmodellen går både draglina och vridstång genom
              hål i fönsterbågen så att manövreringen sker utanför glaset.
            </p>
          </Section>

          <Section heading="Färger">
            <p>
              30 lamellfärger på Klassisk, Klassisk LV och Mellanglas — från
              vit och silver i traditionella kulörer till mättade
              kontorsfärger och dämpade Skanör-toner som matchar äldre
              fasader. 20 färger på lina och stegband ger en extra
              detaljnivå för den som vill matcha exakt mot inredningen, och
              listerna finns i vit, brun, svart och silver beroende på
              modell.
            </p>
            <p>
              Elegant är ett medvetet undantag — modellen finns enbart i
              helvit utförande där lamell, lister och alla synliga detaljer
              har samma kulör. Det är en designval, inte en begränsning.
            </p>
          </Section>

          <Section heading="Tillval">
            <p>
              <strong className="font-medium text-ink">
                Magnet i underlisten
              </strong>{" "}
              — håller underlisten mot karmen så att persiennen inte
              slamrar mot glaset när ett öppningsbart fönster vädras. Lägg
              till på alla persienner som monteras vid fönster ni vädrar
              ofta.
            </p>
            <p>
              <strong className="font-medium text-ink">Sidoskenor</strong>{" "}
              — håller persiennen på plats i sidled och tar bort sidoljus
              vid mörkläggning. Finns i vit och brun. Användbart i
              sovrum och hemmakontor med projektor där sidoljuset annars
              läcker in.
            </p>
          </Section>

          <Section heading="Pris och vad som påverkar det">
            <p>
              Storleken är största prisfaktorn — lamellantalet och linans
              längd ökar med fönsterhöjden. Modellvalet kommer därefter:
              Mellanglas är typiskt något dyrare på grund av den
              specialiserade monteringen i fönsterbågen. Tillval som
              magneter och sidoskenor läggs till per fönster. Vi
              specificerar varje del i offerten.
            </p>
          </Section>

          <Section heading="Montering och skötsel">
            <p>
              Vi monterar i tak, på vägg, på karm, på fönsterbåge eller
              mellan glasen — beroende på modell och fönstertyp. Mätningen
              sker på plats vid hembesöket och vi bedömer själva vilken
              monteringstyp som ger bäst resultat utifrån fönstrets
              förutsättningar.
            </p>
            <p>
              Aluminium är ett av de mest underhållsfria materialen i
              sortimentet. Damma av lamellerna i stängd position med en
              mjuk trasa eller en plym; aluminium tål en lätt fuktig trasa
              om det krävs. Mellanglasmodellen kräver inget underhåll alls
              — lamellerna är inkapslade i glaset.
            </p>
          </Section>

          <Section heading="Andra invändiga lösningar">
            <p>
              Persienner ger stegvis ljusstyrning men är inte alltid bästa
              valet för stora glaspartier eller för sovrum där absolut
              mörkläggning krävs. För stora ytor är{" "}
              <Link
                href="/lamellgardiner-malmo/"
                className="text-ink underline decoration-ink/30 hover:decoration-ink"
              >
                lamellgardiner
              </Link>{" "}
              ofta enklare. För mörkläggning är{" "}
              <Link
                href="/rullgardiner-malmo/"
                className="text-ink underline decoration-ink/30 hover:decoration-ink"
              >
                rullgardin med blackout
              </Link>{" "}
              eller{" "}
              <Link
                href="/plissegardiner-malmo/"
                className="text-ink underline decoration-ink/30 hover:decoration-ink"
              >
                plissé med isolerväv
              </Link>{" "}
              bättre lämpade.
            </p>
          </Section>

          <div className="mt-20">
            <Eyebrow>Vanliga frågor</Eyebrow>
            <h2 className="heading-section text-3xl md:text-4xl mt-5 text-ink">
              Frågor om persienner.
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
          eyebrow="Persienner Malmö"
          heading="Boka kostnadsfritt hembesök för persienner."
          body="Vi mäter på plats, visar färgprover och föreslår modell utifrån fönstret — frihängande eller mellanglas. Hembesök, mätning och offert är gratis i hela södra Skåne."
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
