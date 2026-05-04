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

const PAGE_URL = `${SITE_URL}/guider/valja-ratt-solskydd-inomhus/`;
const PAGE_TITLE =
  "Välja rätt invändigt solskydd — komplett guide | Bellevue Solskydd";
const PAGE_DESC =
  "Tre frågor avgör vilket invändigt solskydd som passar bäst: fönstertyp, vad ni vill uppnå och om ni vill ha motor. Komplett guide för bostäder och kontor i Malmö.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: PAGE_URL },
};

const faqs = [
  {
    question: "Hur lång tid tar det från beställning till färdigt monterat?",
    answer:
      "För standardsortiment ligger leveranstiden typiskt på 2–4 veckor från beställning till montering. Specialvävar och motoriserade lösningar kan ta något längre. Vi anger alltid ett konkret datumintervall i offerten — inga öppna löften.",
  },
  {
    question: "Kan man kombinera olika produkter i samma rum?",
    answer:
      "Ja, det är ofta den bästa lösningen. Olika fönster har olika förutsättningar — väderstreck, höjd, insyn, ljusbehov — och skillnaden i pris mellan att blanda två produkter och att tvinga en lösning på alla fönster är oftast marginell. Vid hembesöket går vi rum för rum.",
  },
  {
    question: "Är invändigt eller utvändigt solskydd bäst mot värme?",
    answer:
      "Utvändigt slår invändigt på ren värmereduktion eftersom värmen stoppas innan den når glaset. På söder- och västerfasader mot Öresund där eftermiddagssolen är intensiv är kombinationen — utvändig zip screen eller markis tillsammans med invändig rullgardin eller plissé — den mest effektiva lösningen.",
  },
  {
    question: "Vad kostar ett komplett solskyddspaket för en lägenhet?",
    answer:
      "Det varierar för mycket för att ge ett rakt svar — antalet fönster, storlekar, vävval och eventuell motor påverkar kraftigt. För en standardlägenhet med 5–7 fönster ligger paketen typiskt i ett spann från enkla rullgardiner i lägre prisklass till motoriserade specialvävar i högre. Vi specificerar fönster för fönster så ni ser vad varje del kostar.",
  },
  {
    question: "Får man borra i karmen i hyresrätt?",
    answer:
      "I de flesta fall nej. För hyresrätter och bostadsrätter där borrning är förbjuden — eller där ni helt enkelt vill undvika åverkan — finns glasmonterad plissé (Velo) som sitter direkt på rutan, eller persienn Klassisk LV där all manövrering är samlad i överlisten utan karmfästen.",
  },
];

export default function ValjaRattSolskyddGuide() {
  const jsonLd = graph(
    breadcrumbSchema([
      { name: "Start", url: `${SITE_URL}/` },
      { name: "Guider", url: `${SITE_URL}/guider/` },
      { name: "Välja rätt invändigt solskydd", url: PAGE_URL },
    ]),
    articleSchema({
      url: PAGE_URL,
      headline: "Välja rätt invändigt solskydd — komplett guide",
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
            { name: "Välja rätt invändigt solskydd", url: PAGE_URL },
          ]}
        />

        <header className="mt-10 mb-10">
          <Eyebrow>Översikt</Eyebrow>
          <h1 className="heading-display text-5xl md:text-7xl mt-6 text-ink">
            Välja rätt invändigt solskydd
          </h1>
          <Divider className="mt-7" />
        </header>

        <AnswerBox>
          Tre frågor brukar räcka för att smalna av valet. Vad har ni för
          fönstertyp? Vad ska solskyddet primärt göra — mörklägga, dölja
          insyn, dämpa värme eller filtrera ljus? Vill ni ha motor? Svaren
          pekar nästan alltid mot ett av fyra alternativ: plisségardin,
          rullgardin, persienn eller lamellgardin.
        </AnswerBox>

        <Section heading="Steg 1 — börja med fönstret">
          <p>
            Fönstertypen avgränsar direkt vilka produkter som är möjliga.
            På standardrektangulära fönster kan ni i princip välja fritt.
            På avvikande fönster är vissa lösningar uteslutna från start.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="font-medium text-ink">
                Standard rektangulärt fönster
              </strong>{" "}
              — alla fyra produkter fungerar. Välj utifrån steg 2 och 3.
            </li>
            <li>
              <strong className="font-medium text-ink">
                Brett glasparti eller skjutdörr
              </strong>{" "}
              —{" "}
              <Link
                href="/lamellgardiner-malmo/"
                className="text-ink underline decoration-ink/30 hover:decoration-ink"
              >
                lamellgardin
              </Link>{" "}
              täcker bredden på en skena och kan dras åt sidan vid
              passage. Eller{" "}
              <Link
                href="/rullgardiner-malmo/"
                className="text-ink underline decoration-ink/30 hover:decoration-ink"
              >
                rullgardin Maxi
              </Link>{" "}
              upp till 450 cm.
            </li>
            <li>
              <strong className="font-medium text-ink">
                Hyresrätt eller BRF där karmen inte får borras
              </strong>{" "}
              — glasmonterad plissé (Velo) eller persienn Klassisk LV.
            </li>
            <li>
              <strong className="font-medium text-ink">
                Kopplade fönster i sekelskifteshus
              </strong>{" "}
              — mellanglaspersienn monterad mellan glasen.
            </li>
            <li>
              <strong className="font-medium text-ink">
                Inglasad balkong
              </strong>{" "}
              — plissé Atria, 16 mm djup, gjord för balkongprofilernas
              smala glas.
            </li>
            <li>
              <strong className="font-medium text-ink">
                Takfönster (Velux och liknande)
              </strong>{" "}
              — plissé i takfönsterutförande där väven löper i sidoskenor.
            </li>
          </ul>
        </Section>

        <Section heading="Steg 2 — vad ska solskyddet göra?">
          <h3 className="heading-section text-xl md:text-2xl text-ink mt-8 mb-3">
            Mörkläggning
          </h3>
          <p>
            <strong className="font-medium text-ink">
              Rullgardin med blackout
            </strong>{" "}
            är enklaste vägen och kan motoriseras.{" "}
            <strong className="font-medium text-ink">
              Plissé med mörkläggande isolerväv
            </strong>{" "}
            (aluminiumkärna mellan tyglagren) ger samtidigt isolering — men
            är manuell. Vill ni schemalägga uppveckling: rullgardin. Vill
            ni jämna ut temperaturen vid fönstret året om: plissé.
          </p>
          <h3 className="heading-section text-xl md:text-2xl text-ink mt-8 mb-3">
            Insynsskydd med dagsljus
          </h3>
          <p>
            <strong className="font-medium text-ink">
              Plissé med tvåvägsjustering
            </strong>{" "}
            är gjord för det här. Täck nedre halvan, behåll övre öppen.
            Markplansfönster mot gata blir användbart utan att rummet
            mörkläggs.{" "}
            <strong className="font-medium text-ink">Persienn</strong>{" "}
            fungerar också — vinkla lamellerna uppåt så ljus släpps in
            indirekt men insyn nedifrån blockeras.
          </p>
          <h3 className="heading-section text-xl md:text-2xl text-ink mt-8 mb-3">
            Värmereduktion
          </h3>
          <p>
            <strong className="font-medium text-ink">
              Plissé med isolerväv
            </strong>{" "}
            (luftceller) är den invändiga produkt som bäst dämpar värme­
            överföring. För enbart sommarvärme räcker rullgardin med
            blackout och vit baksida. För året-runt-effekt — kallras
            vintertid och solvärme sommartid — är plissé överlägsen.
          </p>
          <h3 className="heading-section text-xl md:text-2xl text-ink mt-8 mb-3">
            Bländskydd vid skärmarbete
          </h3>
          <p>
            <strong className="font-medium text-ink">
              Rullgardin med screen
            </strong>{" "}
            är standardvalet för hemmakontor och kontor. Perforerad väv
            som dämpar bländning utan att slå av rummet.{" "}
            <strong className="font-medium text-ink">Persienn</strong>{" "}
            fungerar med vinklad lamell men kräver justering under dagen.
          </p>
        </Section>

        <Section heading="Steg 3 — motor eller manuell?">
          <p>
            Bara två av de fyra produkttyperna finns med motor:{" "}
            <strong className="font-medium text-ink">rullgardin</strong>{" "}
            och{" "}
            <strong className="font-medium text-ink">lamellgardin</strong>.
            Plissé och persienn manövreras alltid manuellt. Det är inte en
            brist — aluminiumlamellen är så lätt att motor sällan ger någon
            märkbar vinst, och plisséns två lister hanteras lika smidigt
            för hand som med motor.
          </p>
          <p>
            Är motor viktigt — på höga fönster, många fönster i samma rum,
            eller om ni vill schemalägga — landar valet i rullgardin eller
            lamellgardin. Är det inte avgörande är alla fyra produkter
            kandidater.
          </p>
        </Section>

        <Section heading="Snabbguide">
          <div className="not-prose mt-2 rounded-premium border border-ink/10 bg-canvas-soft overflow-hidden">
            <table className="w-full text-sm md:text-base">
              <thead className="bg-canvas">
                <tr className="text-left text-xs font-medium uppercase tracking-[0.18em] text-ink-soft">
                  <th className="px-5 py-4">Vad ni vill</th>
                  <th className="px-5 py-4">Lösning</th>
                </tr>
              </thead>
              <tbody className="text-ink">
                <Row label="Mörklägga sovrum" cell="Rullgardin blackout (gärna med motor)" />
                <Row label="Mörklägga + isolera fönstret" cell="Plissé mörkläggande isolerväv" />
                <Row label="Insynsskydd + dagsljus" cell="Plissé tvåvägs" />
                <Row label="Stegvis ljuskontroll" cell="Persienn" />
                <Row label="Stort glasparti" cell="Lamellgardin eller rullgardin Maxi" />
                <Row label="Motor & smart hem" cell="Rullgardin (Motion eller Eve-Motion)" />
                <Row label="Slippa borra i karm" cell="Plissé Velo (glasmonterad) eller persienn Klassisk LV" />
                <Row label="Året-runt klimatkomfort" cell="Plissé isolerväv (dubbelväv)" />
                <Row label="Badrum" cell="Plissé fukttålig väv eller aluminiumpersienn" />
                <Row label="Mellanglas i kopplade fönster" cell="Mellanglaspersienn" />
                <Row label="Inglasad balkong" cell="Plissé Atria" />
                <Row label="Bländskydd skärmarbete" cell="Rullgardin screen eller lamellgardin" />
              </tbody>
            </table>
          </div>
        </Section>

        <Section heading="Vanliga rumsupplägg i Malmö-bostäder">
          <p>
            <strong className="font-medium text-ink">Sovrum:</strong>{" "}
            blackout-rullgardin (gärna motor) eller plissé mörkläggande
            isolerväv.
          </p>
          <p>
            <strong className="font-medium text-ink">Badrum:</strong>{" "}
            plissé fukttålig med tvåvägs eller mellanglaspersienn i
            kopplade fönster.
          </p>
          <p>
            <strong className="font-medium text-ink">Vardagsrum:</strong>{" "}
            ljusfiltrerande rullgardin eller persienn för stegvis vinkling.
          </p>
          <p>
            <strong className="font-medium text-ink">Hemmakontor:</strong>{" "}
            screen-rullgardin eller lamellgardin på breda fönster.
          </p>
          <p>
            <strong className="font-medium text-ink">
              Stor glasvägg mot terrass:
            </strong>{" "}
            lamellgardin (med skjutdörr) eller stor rullgardin Maxi.
          </p>
        </Section>

        <Section heading="Vill ni jämföra två specifika produkter?">
          <p>
            Vi har dedikerade jämförelser för de vanligaste valen:{" "}
            <Link
              href="/guider/rullgardin-eller-persienn/"
              className="text-ink underline decoration-ink/30 hover:decoration-ink"
            >
              rullgardin eller persienn
            </Link>
            ,{" "}
            <Link
              href="/guider/plissegardin-eller-rullgardin/"
              className="text-ink underline decoration-ink/30 hover:decoration-ink"
            >
              plissé eller rullgardin
            </Link>{" "}
            och — för utvändigt — guiden{" "}
            <Link
              href="/guider/markis-eller-zip-screen/"
              className="text-ink underline decoration-ink/30 hover:decoration-ink"
            >
              markis eller zip screen
            </Link>
            .
          </p>
        </Section>

        <div className="mt-20">
          <Eyebrow>Vanliga frågor</Eyebrow>
          <h2 className="heading-section text-3xl md:text-4xl mt-5 text-ink">
            Frågor om att välja.
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
        heading="Vi hjälper er välja per fönster."
        body="Vid hembesöket går vi igenom alla fönster, lyssnar på hur rummen används och föreslår produkter rum för rum. Hembesöket är gratis."
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

function Row({ label, cell }: { label: string; cell: string }) {
  return (
    <tr className="border-t border-ink/8">
      <td className="px-5 py-4 font-medium">{label}</td>
      <td className="px-5 py-4 text-ink-soft">{cell}</td>
    </tr>
  );
}
