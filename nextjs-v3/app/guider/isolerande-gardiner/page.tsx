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

const PAGE_URL = `${SITE_URL}/guider/isolerande-gardiner/`;
const PAGE_TITLE =
  "Isolerande gardiner — så fungerar plissé med dubbelväv | Bellevue Solskydd";
const PAGE_DESC =
  "Isolerande gardiner med honeycomb-väv: hur dubbelvävens luftceller dämpar både kallras vintertid och solvärme sommartid. Praktiska tips för fönster i Malmö och södra Skåne.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: PAGE_URL },
};

const faqs = [
  {
    question: "Hur stor är energibesparingen i kronor?",
    answer:
      "Det går inte att ange exakt eftersom det beror på fönsterkvalitet, byggnadens isolering, uppvärmningsform och hur kallt det blir. Det vi kan säga är att effekten finns och är märkbar — särskilt på äldre fönster och stora glasytor mot kall riktning. Vi anger inte besparingssiffror i offerten eftersom de skulle vara baserade på antaganden snarare än mätningar i er specifika bostad.",
  },
  {
    question: "Funkar isolervävens effekt verkligen åt båda håll?",
    answer:
      "Ja. Värmeöverföring genom konvektion (luftrörelse) och ledning genom material — som tyget och glaset — dämpas av ett stillastående luftlager mellan väv och glas. Den fysiska principen bryr sig inte om åt vilket håll temperaturskillnaden går. Vintertid stoppar luftcellerna kallras från glaset; sommartid stoppar de solvärmen från att stråla in.",
  },
  {
    question: "Räcker enkelvävens isolering eller behöver jag dubbelväv?",
    answer:
      "En enkelvävs plissé skapar ändå ett stillastående luftlager mellan väv och glas — det ger en viss isolerande effekt. Dubbelväven (honeycomb) är märkbart effektivare eftersom den har två tyglager med slutna luftceller, vilket multiplicerar effekten. På fönster där isolering är ett huvudskäl till köpet är dubbelväv värd prispåslaget. På fönster där ni främst vill ha utseende eller ljusreglering räcker enkelväv.",
  },
  {
    question: "Är mörkläggande isolerväv samma sak som dubbelväv?",
    answer:
      "Mörkläggande isolerväv är en specifik dubbelvävstyp med en aluminiumkärna mellan tyglagren. Aluminiumet stoppar allt ljus och reflekterar dessutom värme — vilket adderar en strålningseffekt utöver luftcellernas konvektionseffekt. Det gör mörkläggande isolerväv till den mest effektiva mörkläggningen i sortimentet, men också den dyraste vävvarianten.",
  },
  {
    question: "Är det bara plissé som isolerar, eller finns det fler alternativ?",
    answer:
      "Plissé med dubbelväv är det enda invändiga solskyddet med konstruktion specifikt för isolering. Rullgardin med blackout och vit baksida ger värmereduktion sommartid via reflektion, men isolerar inte mot kallras vintertid. Persienner och lamellgardiner ger ljus- och insynsstyrning men ingen isoleringseffekt att tala om.",
  },
];

export default function IsolerandeGardinerGuide() {
  const jsonLd = graph(
    breadcrumbSchema([
      { name: "Start", url: `${SITE_URL}/` },
      { name: "Guider", url: `${SITE_URL}/guider/` },
      { name: "Isolerande gardiner", url: PAGE_URL },
    ]),
    articleSchema({
      url: PAGE_URL,
      headline: "Isolerande gardiner — så fungerar plissé med dubbelväv",
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
            { name: "Isolerande gardiner", url: PAGE_URL },
          ]}
        />

        <header className="mt-10 mb-10">
          <Eyebrow>Tema</Eyebrow>
          <h1 className="heading-display text-5xl md:text-7xl mt-6 text-ink">
            Isolerande gardiner
          </h1>
          <Divider className="mt-7" />
        </header>

        <AnswerBox>
          Av alla invändiga solskydd är det bara plissé med dubbelväv —
          ofta kallad honeycomb-gardin på grund av sin sexkantsstruktur —
          som faktiskt isolerar fönstret. De slutna luftcellerna mellan
          tyglagren skapar ett stillastående luftlager som dämpar
          värmeöverföring åt båda håll. Vintertid: mindre kallras från
          glaset. Sommartid: mindre solvärme in.
        </AnswerBox>

        <Section heading="Fönstret är husets svaga punkt">
          <p>
            Energimässigt är ett fönster betydligt sämre än väggen runt
            omkring. Ett bra modernt treglasfönster har ett U-värde på
            omkring 1,0 W/m²K. En välisolerad yttervägg ligger på 0,15
            eller lägre. Skillnaden är dramatisk — ungefär en
            tiopotensstörre värmeförlust per kvadratmeter glas än per
            kvadratmeter vägg.
          </p>
          <p>
            På större glasytor — ett fönster på 2 × 2 meter — är effekten
            mätbar. Vintertid drar fönstret värme ut, vilket märks som
            kallras längs glaset (kall luft sjunker, varm stiger). Sommartid
            strålar solenergi in. Mellan väv och glas på en plissé skapas
            ett luftlager som bromsar konvektionen — den fysiska principen
            bakom dubbelglas, fast på en mindre skala.
          </p>
        </Section>

        <Section heading="Honeycomb-strukturen">
          <p>
            Dubbelvävens namn kommer från sexkantsstrukturen. Två tyglager
            är fästa vid varandra så att de bildar slutna celler — en lång
            rad av sexkanter sett från sidan, som en honungskaka. Inuti
            varje cell står luften stilla. Stillastående luft är en dålig
            värmeledare; det är vad som gör isolering till isolering.
          </p>
          <p>
            På en fullt utdragen plissé radas dessa celler upp över hela
            fönstrets höjd, så att hela glasytan har en luftbarriär framför
            sig. Effekten skalar med fönstrets storlek — större fönster ger
            mer barriär, vilket är logiskt eftersom större fönster också är
            de som har störst värmeförlust att dämpa.
          </p>
        </Section>

        <Section heading="Två varianter">
          <h3 className="heading-section text-xl md:text-2xl text-ink mt-8 mb-3">
            Translucent isolerväv
          </h3>
          <p>
            Filtrerar dagsljus mjukt genom dubbelväven samtidigt som
            luftcellerna isolerar. Bra på vardagsrum och kök där rummet
            ska vara ljust — ni får isoleringen utan att förlora ljuskvalitet.
          </p>
          <h3 className="heading-section text-xl md:text-2xl text-ink mt-8 mb-3">
            Mörkläggande isolerväv
          </h3>
          <p>
            Aluminiumkärna mellan tyglagren stoppar allt ljus och
            reflekterar dessutom värme. Konvektionseffekt från luftcellerna
            plus strålningseffekt från aluminiumlagret — det här är den
            mest effektiva enskilda invändiga lösningen. Passar sovrum och
            rum som behöver både mörker och klimatkomfort.
          </p>
        </Section>

        <Section heading="Plissé isolerväv vs blackout-rullgardin">
          <p>
            Det vanligaste alternativvalet — och de fungerar olika bra på
            olika fronter:
          </p>
          <div className="not-prose mt-4 rounded-premium border border-ink/10 bg-canvas-soft overflow-hidden">
            <table className="w-full text-sm md:text-base">
              <thead className="bg-canvas">
                <tr className="text-left text-xs font-medium uppercase tracking-[0.18em] text-ink-soft">
                  <th className="px-5 py-4">Situation</th>
                  <th className="px-5 py-4">Plissé isolerväv</th>
                  <th className="px-5 py-4">Blackout vit baksida</th>
                </tr>
              </thead>
              <tbody className="text-ink">
                <Row label="Solvärme sommartid" a="Ja — luftceller" b="Ja — reflektion" />
                <Row label="Kallras vintertid" a="Ja — luftceller" b="Nej" />
                <Row label="Mörkläggning" a="Ja (aluminiumkärna)" b="Ja" />
                <Row label="Motor" a="Nej" b="Ja" />
              </tbody>
            </table>
          </div>
          <p>
            Vill ni ha året-runt-effekt — plissé. Vill ni främst stoppa
            sommarvärme och ha motor — blackout-rullgardin med vit baksida.
            Båda fungerar; svaret beror på vilken funktion som väger
            tyngst.
          </p>
        </Section>

        <Section heading="Var isolerväv gör störst skillnad">
          <p>
            <strong className="font-medium text-ink">Äldre fönster.</strong>{" "}
            Sämre U-värde betyder större värmeförlust — och därför mer
            nytta av att lägga till en barriär. Vanligt i Malmös
            sekelskiftesbestånd och i fastigheter från 60- och 70-talet.
          </p>
          <p>
            <strong className="font-medium text-ink">Norrfönster.</strong>{" "}
            Kallras märks tydligt vintertid på fönster som inte värms av
            sol. Plissé isolerväv minskar känslan av kallras vid fönstret.
          </p>
          <p>
            <strong className="font-medium text-ink">
              Stora glaspartier.
            </strong>{" "}
            Mer glas = mer värmeöverföring. Vanligt i nyproducerade
            lägenheter i Hyllie och Västra Hamnen där hela kortväggen kan
            vara glas.
          </p>
          <p>
            <strong className="font-medium text-ink">Sovrum.</strong>{" "}
            Mörkläggande isolerväv ger både mörker och jämnare temperatur
            — bra för sömnkvalitet året runt.
          </p>
        </Section>

        <Section heading="Kompakt trots dubbla lager">
          <p>
            Dubbelvävens hopvecklade höjd är cirka 3 cm per meter
            fönsterhöjd — jämfört med 1,5 cm för enkelväv. Ett 200 cm högt
            fönster ger ett vävpaket på ungefär 6 cm vid överkanten. Det
            är fortfarande betydligt mindre än en rullgardinkassett (7–10
            cm) och knappast synligt om man inte tittar specifikt efter
            det.
          </p>
        </Section>

        <div className="mt-20">
          <Eyebrow>Vanliga frågor</Eyebrow>
          <h2 className="heading-section text-3xl md:text-4xl mt-5 text-ink">
            Frågor om isolerande gardiner.
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

        <Section heading="Andra invändiga lösningar">
          <p>
            Är ni mest oroade för värmen sommartid kan{" "}
            <Link
              href="/guider/solskydd-varme/"
              className="text-ink underline decoration-ink/30 hover:decoration-ink"
            >
              guiden om solskydd mot värme
            </Link>{" "}
            ge mer kontext. För hjälp med val mellan produkter, se{" "}
            <Link
              href="/guider/valja-ratt-solskydd-inomhus/"
              className="text-ink underline decoration-ink/30 hover:decoration-ink"
            >
              komplett guide för invändigt solskydd
            </Link>
            .
          </p>
        </Section>
      </article>

      <ConsultationCTA
        eyebrow="Isolerande gardiner"
        heading="Vi visar dubbelväven på plats."
        body="Vid hembesöket har vi med oss prov på både enkelväv och dubbelväv så ni kan se skillnaden i hand. Plus en lampa för att visa hur mörkläggande isolerväv stoppar ljus."
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
