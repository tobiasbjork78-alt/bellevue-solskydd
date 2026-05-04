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

const PAGE_URL = `${SITE_URL}/guider/solskydd-insyn/`;
const PAGE_TITLE =
  "Solskydd mot insyn — utan att tappa dagsljuset | Bellevue Solskydd";
const PAGE_DESC =
  "Insynsproblem i markplan eller mot gata? Vi går igenom hur tvåvägsplissé, persienner och ljusfiltrerande rullgardiner löser insynsfrågan utan att rummet mörkläggs. Rådgivning i Malmö.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: PAGE_URL },
};

const faqs = [
  {
    question: "Varför har just Malmö så mycket insynsproblem?",
    answer:
      "Tätbebyggelsen. Stadsdelar som Möllevången, Davidshall, Sofielund och centrala Malmö har korta avstånd mellan fasader och många våningar i markplan med fönster mot gata. Lägg till att gångvägar ofta passerar nära husväggen, och insynssituationen är annorlunda än i ett villaområde där fönstren vetter mot trädgården.",
  },
  {
    question: "Vilken är skillnaden mellan dag och kväll?",
    answer:
      "Dagtid är det ljusare ute än inne, vilket gör translucenta vävar och vinklade lameller diskreta utåt — ni ser ut, ingen ser in. Kvällstid vänds förhållandet: rummet är upplyst och utomhus är mörkt. Då blir samma vävar genomskinligare utåt än inåt. Vill ni ha insynsskydd även kvällstid behövs tätare väv eller helt mörkläggande.",
  },
  {
    question: "Är gardiner mot insyn samma sak som mörkläggning?",
    answer:
      "Nej. Mörkläggning stoppar allt ljus i båda riktningarna. Insynsskydd handlar om att kontrollera vilken information som passerar genom väven. En translucent plisséväv är inte mörkläggande — den filtrerar — men ger ändå tillräcklig avskärmning så att silhuetter inte syns klart utåt dagtid.",
  },
  {
    question: "Fungerar persienn lika bra som plissé tvåvägs?",
    answer:
      "Persiennens vinklade lameller blockerar insyn nedifrån — vinkla uppåt så ser ingen som passerar in i rummet. Skillnaden mot plissé tvåvägs är att persiennen täcker hela fönstret hela tiden; plissé kan delas så att övre halvan är helt öppen för dagsljus medan nedre är täckt. På fönster där ni vill ha klart dagsljus genom övre halvan är plissé bättre lämpad.",
  },
  {
    question: "Vilken lösning är diskretare i fönstret?",
    answer:
      "Persienner är tunnare och tar minst plats i karmen — bara cirka 4 cm bygghöjd ihopfälld. Plissé bygger 1,5–3 cm per meter fönsterhöjd vid överkanten. Båda är väldigt diskreta jämfört med gardinkappa eller traditionell vävgardin.",
  },
];

export default function SolskyddInsynGuide() {
  const jsonLd = graph(
    breadcrumbSchema([
      { name: "Start", url: `${SITE_URL}/` },
      { name: "Guider", url: `${SITE_URL}/guider/` },
      { name: "Solskydd mot insyn", url: PAGE_URL },
    ]),
    articleSchema({
      url: PAGE_URL,
      headline: "Solskydd mot insyn — utan att tappa dagsljuset",
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
            { name: "Solskydd mot insyn", url: PAGE_URL },
          ]}
        />

        <header className="mt-10 mb-10">
          <Eyebrow>Tema</Eyebrow>
          <h1 className="heading-display text-5xl md:text-7xl mt-6 text-ink">
            Solskydd mot insyn
          </h1>
          <Divider className="mt-7" />
        </header>

        <AnswerBox>
          Lösningen på insyn är inte att stänga ute ljuset — det är att
          kontrollera var i fönstret det filtreras. Tre invändiga produkter
          gör jobbet bra: plisségardin med tvåvägsjustering täcker den del
          av fönstret som behöver det, persienn vinklar lamellerna mot
          taket, och rullgardin med ljusfiltrerande väv dämpar generellt.
          Vilken som passar bäst beror på fönstret och vad ni vill se av
          omvärlden.
        </AnswerBox>

        <Section heading="Insynsfrågan i Malmö-bostäder">
          <p>
            I tätbebyggda kvarter — Möllevången, Davidshall, Sofielund,
            stora delar av centrala Malmö — har gatufasaderna korta
            avstånd till gångväg, cykelfält och motstående hus.
            Markplansfönster och låg första våning är de mest utsatta. På
            kvällen, när rummet är upplyst, syns ofta hela vardagsrummet
            från trottoaren bara meter bort.
          </p>
          <p>
            Den traditionella lösningen — en tjock gardin som dras igen —
            stänger samtidigt ute dagsljuset. Det fungerar men är onödigt
            blunt instrument. De moderna invändiga solskydden kan göra
            det här mycket mer riktat: täcka exakt den del av fönstret som
            behöver det, eller filtrera ljuset så att silhuetter inte
            framträder utåt utan att rummet förlorar i ljuskvalitet.
          </p>
        </Section>

        <Section heading="Tre lösningar som faktiskt fungerar">
          <h3 className="heading-section text-xl md:text-2xl text-ink mt-8 mb-3">
            Plisségardin med tvåvägsjustering
          </h3>
          <p>
            Det här är specialistlösningen.{" "}
            <Link
              href="/plissegardiner-malmo/"
              className="text-ink underline decoration-ink/30 hover:decoration-ink"
            >
              Tvåvägsplissé
            </Link>{" "}
            (modellerna Dualis, Optima, Velo, Atria) har två oberoende
            lister så att över- och underkant kan styras separat. Täck
            nedre halvan — där insynen sker — och lämna övre halvan öppen
            för dagsljus och utsikt mot himlen.
          </p>
          <p>
            Translucent väv förstärker effekten ytterligare: ljuset
            filtreras genom den nedre halvan så att rummet är ljust även
            när insynsskyddet är aktivt.
          </p>
          <h3 className="heading-section text-xl md:text-2xl text-ink mt-8 mb-3">
            Persienn med vinkelbara lameller
          </h3>
          <p>
            <Link
              href="/persienner-malmo/"
              className="text-ink underline decoration-ink/30 hover:decoration-ink"
            >
              Persiennen
            </Link>{" "}
            angriper insynen från ett annat håll. Vinkla lamellerna uppåt
            så att ljus släpps in via takvinkeln men siktlinjen från
            gatans höjd är blockerad. Inget täcks helt — hela fönstret är
            i bruk hela tiden — men ingen kan se in om vinkeln är rätt.
            Bra för rum där hela fönstrets storlek används som ljuskälla.
          </p>
          <h3 className="heading-section text-xl md:text-2xl text-ink mt-8 mb-3">
            Rullgardin med ljusfiltrerande väv
          </h3>
          <p>
            <Link
              href="/rullgardiner-malmo/"
              className="text-ink underline decoration-ink/30 hover:decoration-ink"
            >
              Ljusfiltrerande rullgardin
            </Link>{" "}
            är den enklaste lösningen — en väv som dimmar och avskärmar
            generellt, utan styrning av vinkel eller delar av fönstret.
            Funkar när ni inte behöver hög utsikt och bara vill ha ett
            mjukare ljus med viss avskärmning. Sämre på riktad insyn än
            de andra två.
          </p>
        </Section>

        <Section heading="Hur ni väljer">
          <p>
            <strong className="font-medium text-ink">
              Markplansfönster mot gata
            </strong>{" "}
            — plissé tvåvägs. Insynen sker nedtill. Täck där, behåll övre.
          </p>
          <p>
            <strong className="font-medium text-ink">Badrum mot gata</strong>{" "}
            — plissé tvåvägs med fukttålig väv. Eller aluminiumpersienn
            som tål kondensen.
          </p>
          <p>
            <strong className="font-medium text-ink">
              Vardagsrum med ständigt växlande ljus
            </strong>{" "}
            — persienn. Vinkelbar under dagen.
          </p>
          <p>
            <strong className="font-medium text-ink">
              Kontor i markplan
            </strong>{" "}
            — screen-rullgardin (perforerad väv, ger fortfarande utsikt) i
            kombination med ljusfiltrerande för djupare avskärmning.
          </p>
          <p>
            <strong className="font-medium text-ink">
              Rum mot innergård eller trottoar
            </strong>{" "}
            — ljusfiltrerande rullgardin är ofta tillräcklig.
          </p>
        </Section>

        <Section heading="Dagtid kontra kvällstid">
          <p>
            Det här är detaljen som överraskar många. Translucenta vävar
            och vinklade lameller fungerar bra dagtid eftersom det är
            ljusare ute än inne — silhuetter framträder inte utåt. När det
            mörknar och rummet är upplyst inifrån vänds förhållandet, och
            samma väv som var ogenomskinlig dagtid blir delvis
            genomskinlig.
          </p>
          <p>
            Vill ni ha insynsskydd dygnet runt — typiskt sovrum eller
            badrum mot gata — välj tätare väv eller helt mörkläggande.
            Mörkläggande plissé eller blackout-rullgardin blockerar insyn
            oavsett ljusförhållanden, men de släpper inte heller in
            dagsljus. För båda funktionerna i samma fönster: två lager.
          </p>
        </Section>

        <div className="mt-20">
          <Eyebrow>Vanliga frågor</Eyebrow>
          <h2 className="heading-section text-3xl md:text-4xl mt-5 text-ink">
            Frågor om insynsskydd.
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
        eyebrow="Insynsskydd Malmö"
        heading="Vi tittar på fönstret tillsammans."
        body="Vid hembesöket går vi runt fastigheten och tittar på var insynen faktiskt kommer in — gata, gångväg, motstående hus. Sedan föreslår vi den lösning som täcker exakt det området."
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
