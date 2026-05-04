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

const PAGE_URL = `${SITE_URL}/guider/motoriserat-solskydd/`;
const PAGE_TITLE =
  "Motoriserat solskydd — Motion, Eve-Motion och smart hem | Bellevue Solskydd";
const PAGE_DESC =
  "Motoriserade rullgardiner och lamellgardiner för Malmö-bostäder. Skillnaden mellan Motion och Eve-Motion (Thread/Matter), batteridrift kontra 230V, och vad en Thread Border Router gör.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: PAGE_URL },
};

const faqs = [
  {
    question: "Vilka invändiga solskydd finns med motor?",
    answer:
      "Bara två: rullgardin och lamellgardin. Plissé och persienn manövreras manuellt — för plissé hanteras båda listerna lika smidigt för hand som med motor, och för persienn är aluminiumlamellerna så lätta att motor sällan ger någon påtaglig vinst. Behöver ni motor är rullgardin eller lamellgardin valet.",
  },
  {
    question: "Vad är en Thread Border Router och behöver jag en?",
    answer:
      "Thread är ett trådlöst mesh-nätverk för smarta hem. För att Eve-Motion ska kunna prata med Apple HomeKit, Google Home eller liknande behövs en enhet i hemmet som broar Thread mot ert vanliga Wi-Fi. Vanligast är Apple TV 4K, Apple HomePod (2:a gen och nyare), HomePod mini, Google Nest Hub (2:a gen och nyare), Nest Wifi Pro, Amazon Echo (4:e gen) och Samsung SmartThings Station. Har ni redan en av dessa behöver ni inget extra.",
  },
  {
    question: "Hur ofta behöver batteriet laddas?",
    answer:
      "Cirka 8 månader vid normal användning — fall ner morgon, upp på kvällen, växla under dagen någon gång. Laddtiden är ungefär 6 timmar via USB. För dem som vill slippa laddcykeln finns kabelbunden 230V i Motion-familjen — den modellen används ofta till de bredaste rullgardinerna upp till 450 cm där motorn kräver mer ström.",
  },
  {
    question: "Kan jag styra mina rullgardiner med Apple HomeKit?",
    answer:
      "Ja, på två sätt. Eve-Motion kopplar direkt mot HomeKit via Thread/Matter — ingen extra brygga behövs så länge ni har en Thread Border Router. Motion-familjen kräver en separat Wi-Fi-brygga för att synka mot HomeKit. Båda fungerar men Eve-Motion är enklare att sätta upp om ni redan har en Apple-baserad smart hem-miljö.",
  },
  {
    question: "Är pull-funktionen bra?",
    answer:
      "Ja, fungerar bra i praktiken. Ett mjukt drag i underkanten startar motorn — så ni behöver inte hitta fjärrkontrollen eller telefonen. På batterimodellerna (både Motion och Eve-Motion) är pull standardfunktion. Praktiskt morgnar då ni passerar fönstret men inte vill stanna och fjärrstyra.",
  },
  {
    question: "Kan motoriseringen schemaläggas?",
    answer:
      "Ja — tidsstyrning är en av de mest användbara funktionerna. Schemalägg uppveckling till klockan sju, automatisk fällning när solen står i västerläge klockan femton, eller scenbaserad styrning där 'film' fäller alla rullgardiner i vardagsrummet och dimmar belysningen. Båda motorfamiljerna stödjer schemaläggning, antingen via egen app eller via integration med smart hem-systemet.",
  },
];

export default function MotoriseratSolskyddGuide() {
  const jsonLd = graph(
    breadcrumbSchema([
      { name: "Start", url: `${SITE_URL}/` },
      { name: "Guider", url: `${SITE_URL}/guider/` },
      { name: "Motoriserat solskydd", url: PAGE_URL },
    ]),
    articleSchema({
      url: PAGE_URL,
      headline: "Motoriserat solskydd — Motion, Eve-Motion och smart hem",
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
            { name: "Motoriserat solskydd", url: PAGE_URL },
          ]}
        />

        <header className="mt-10 mb-10">
          <Eyebrow>Tema</Eyebrow>
          <h1 className="heading-display text-5xl md:text-7xl mt-6 text-ink">
            Motoriserat solskydd
          </h1>
          <Divider className="mt-7" />
        </header>

        <AnswerBox>
          Motoriserade invändiga solskydd finns i två produktkategorier —
          rullgardin och lamellgardin — och i två olika motorfamiljer.
          Motion-familjen styrs via Bluetooth till app eller fjärrkontroll
          och kopplas mot smart hem genom en Wi-Fi-brygga. Eve-Motion
          använder Thread/Matter och fungerar direkt med Apple HomeKit och
          Google Home utan brygga, så länge ni har en Thread Border Router
          i hemmet.
        </AnswerBox>

        <Section heading="När motor faktiskt gör skillnad">
          <p>
            Motorisering är inte alltid värt prispåslaget. På ett enskilt
            sovrumsfönster ni styr morgon och kväll fungerar manuell
            kulkedja utmärkt och billigare. På de fönster där motorn
            faktiskt sparar tid — nedan fyra typsituationer — betalar den
            sig snabbt:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="font-medium text-ink">
                Svåråtkomliga fönster.
              </strong>{" "}
              Höga fönster över trappa, fönster bakom möbler, takfönster.
              Motor är ofta enda praktiska sättet att styra dem.
            </li>
            <li>
              <strong className="font-medium text-ink">
                Många fönster i samma rum.
              </strong>{" "}
              En vardagsrumsvägg med tre eller fyra fönster — synkroniserad
              motor sparar tid varje dag.
            </li>
            <li>
              <strong className="font-medium text-ink">Tidsstyrning.</strong>{" "}
              Schemalagd uppveckling, automatisk fällning vid solens
              vinkel. Sparar både komfort och energi.
            </li>
            <li>
              <strong className="font-medium text-ink">Kontor.</strong>{" "}
              Centraliserad styrning av en hel kontorsfasad. Personalen
              behöver inte justera individuella gardiner.
            </li>
          </ul>
        </Section>

        <Section heading="Vilka produkter finns med motor?">
          <p>
            <strong className="font-medium text-ink">
              <Link
                href="/rullgardiner-malmo/"
                className="underline decoration-ink/30 hover:decoration-ink"
              >
                Rullgardiner
              </Link>
            </strong>{" "}
            — bredaste motorutbudet. Tillgängligt på alla tre storlekar
            (Mini, Medi, Maxi). Minsta fönsterbredd för motor är cirka 56
            cm.
          </p>
          <p>
            <strong className="font-medium text-ink">
              <Link
                href="/lamellgardiner-malmo/"
                className="underline decoration-ink/30 hover:decoration-ink"
              >
                Lamellgardiner
              </Link>
            </strong>{" "}
            — finns med motoriserad rotation och dragning. Ofta använt på
            stora kontorsinstallationer.
          </p>
          <p>
            <strong className="font-medium text-ink">
              <Link
                href="/plissegardiner-malmo/"
                className="underline decoration-ink/30 hover:decoration-ink"
              >
                Plisségardiner
              </Link>
            </strong>{" "}
            — alla sex modeller är manuella.
          </p>
          <p>
            <strong className="font-medium text-ink">
              <Link
                href="/persienner-malmo/"
                className="underline decoration-ink/30 hover:decoration-ink"
              >
                Persienner
              </Link>
            </strong>{" "}
            — manuella med draglina och vridstång.
          </p>
        </Section>

        <Section heading="Två motorfamiljer">
          <h3 className="heading-section text-xl md:text-2xl text-ink mt-8 mb-3">
            Motion
          </h3>
          <p>
            Bluetooth-app, fjärrkontroll och smart hem-koppling via en
            separat Wi-Fi-brygga. Bryggan översätter Bluetooth till
            Wi-Fi så gardinerna syns i Alexa, Google Home eller
            SmartThings. Motion finns både som batteridrift och som
            kabelbunden 230V — kabelvarianten används till de bredaste
            rullgardinerna (upp till 450 cm) där motorn kräver mer ström
            än batteriet praktiskt kan leverera.
          </p>
          <p>
            Pull-funktion — ett mjukt drag i underkanten startar rörelsen
            — finns standard på batterimodellerna.
          </p>
          <h3 className="heading-section text-xl md:text-2xl text-ink mt-8 mb-3">
            Eve-Motion
          </h3>
          <p>
            Thread + Matter direkt. Gardinerna syns i Apple HomeKit,
            Google Home, Amazon Alexa och Samsung SmartThings utan extra
            brygga, så länge ni har en Thread Border Router i hemmet.
            Endast batteridrift — ingen kabelbunden variant.
          </p>
          <p>
            Pull-funktion ingår. Eve-Motion är ofta den enklare lösningen
            i hem som redan har Apple TV 4K eller motsvarande som Thread
            Border Router.
          </p>
        </Section>

        <Section heading="Jämförelse Motion vs Eve-Motion">
          <div className="not-prose mt-2 rounded-premium border border-ink/10 bg-canvas-soft overflow-hidden">
            <table className="w-full text-sm md:text-base">
              <thead className="bg-canvas">
                <tr className="text-left text-xs font-medium uppercase tracking-[0.18em] text-ink-soft">
                  <th className="px-5 py-4">Egenskap</th>
                  <th className="px-5 py-4">Motion</th>
                  <th className="px-5 py-4">Eve-Motion</th>
                </tr>
              </thead>
              <tbody className="text-ink">
                <Row label="Fjärrkontroll" a="Ja" b="Ja" />
                <Row label="App" a="Ja (Bluetooth)" b="Ja (Thread/Matter)" />
                <Row label="Smart hem-koppling kräver" a="Wi-Fi-brygga" b="Thread Border Router" />
                <Row label="Apple HomeKit" a="Via brygga" b="Direkt" />
                <Row label="Google Home" a="Via brygga" b="Direkt via Matter" />
                <Row label="Batteridrift" a="Ja (~8 mån)" b="Ja (~8 mån)" />
                <Row label="Kabelbunden 230V" a="Ja (en modell)" b="Nej" />
                <Row label="Pull-funktion" a="Ja (batteri)" b="Ja" />
                <Row label="Bästa val för" a="Hem utan smart hem-system" b="Hem med Apple TV / HomePod / Nest Hub" />
              </tbody>
            </table>
          </div>
        </Section>

        <Section heading="Kabelbunden eller batteri?">
          <p>
            Kabelbunden 230V — finns endast i Motion-familjen — är gjord
            för de bredaste rullgardinerna upp till 450 cm. Den kräver
            elinstallation och är därför vanligast vid nybygge eller
            renovering där elektrikern ändå är på plats. Fördel: ingen
            laddcykel.
          </p>
          <p>
            Batteri — båda familjerna — håller cirka 8 månader och laddas
            på 6 timmar via USB. Kan monteras var som helst utan eldragning.
            Praktiskt för befintliga bostäder där ni inte vill öppna
            väggar eller dra kabel.
          </p>
        </Section>

        <div className="mt-20">
          <Eyebrow>Vanliga frågor</Eyebrow>
          <h2 className="heading-section text-3xl md:text-4xl mt-5 text-ink">
            Frågor om motor och smart hem.
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
        eyebrow="Motoriserat solskydd"
        heading="Vi guidar er genom valet."
        body="Vid hembesöket går vi igenom vilka fönster som faktiskt drar nytta av motor, kollar om ni redan har Thread Border Router i hemmet, och föreslår motorfamilj utifrån befintligt smart hem-system."
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

function Row({ label, a, b }: { label: string; a: string; b: string }) {
  return (
    <tr className="border-t border-ink/8">
      <td className="px-5 py-4 font-medium">{label}</td>
      <td className="px-5 py-4 text-ink-soft">{a}</td>
      <td className="px-5 py-4 text-ink-soft">{b}</td>
    </tr>
  );
}
