import type { Metadata } from "next";
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

const PAGE_URL = `${SITE_URL}/guider/markis-eller-zip-screen/`;
const PAGE_TITLE =
  "Markis eller zip screen — vad passar bäst? | Bellevue Solskydd";
const PAGE_DESC =
  "Markis eller zip screen? Vi jämför värme, vind, utsikt och estetik och förklarar när vilket solskydd är rätt val för fasader i Malmö.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: PAGE_URL },
};

const faqs = [
  {
    question: "Vad kostar en markis jämfört med en zip screen?",
    answer:
      "En enklare manuell markis är i regel billigare än en zip screen i samma storlek. Skillnaden minskar när markisen motoriseras och får sensorer. På stora glaspartier blir zip screen ofta jämförbar i pris eftersom alternativet är en mycket bred kassettmarkis. Vi specificerar pris per enhet i offerten så det går att jämföra rakt av.",
  },
  {
    question: "Krävs styrelsens godkännande i bostadsrätt för båda?",
    answer:
      "Ja. Både markis och zip screen är fasadingrepp och kräver styrelsens godkännande i de flesta föreningar i Malmö. Vi tar fram ett underlag — modell, färg, infästning och bilder — som ni kan skicka till styrelsen.",
  },
  {
    question: "Måste zip screen alltid motoriseras?",
    answer:
      "Ja. Zip screen är konstruerad för motor eftersom storleken och kraften i sidoskenorna gör manuell drift opraktisk. Markiser kan vara manuella på mindre storlekar, men motor rekommenderas också där eftersom det förlänger livslängden och möjliggör vind-/solautomatik.",
  },
];

export default function MarkisEllerZipScreenPage() {
  const jsonLd = graph(
    breadcrumbSchema([
      { name: "Start", url: `${SITE_URL}/` },
      { name: "Guider", url: `${SITE_URL}/guider/` },
      { name: "Markis eller zip screen", url: PAGE_URL },
    ]),
    articleSchema({
      url: PAGE_URL,
      headline: "Markis eller zip screen — vad passar bäst?",
      description: PAGE_DESC,
      datePublished: "2026-04-29",
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
            { name: "Markis eller zip screen", url: PAGE_URL },
          ]}
        />

        <header className="mt-10 mb-10">
          <Eyebrow>Jämförelse</Eyebrow>
          <h1 className="heading-display text-5xl md:text-7xl mt-6 text-ink">
            Markis eller zip screen?
          </h1>
          <Divider className="mt-7" />
        </header>

        <AnswerBox>
          Båda är utvändiga solskydd, men de löser uppgiften olika. En
          markis fälls ut horisontellt och skuggar uteplatsen utanför
          glaset. En zip screen sitter vertikalt på fasaden och stoppar
          solen innan den når glaset. Markis är bättre på uteplatser, zip
          screen på stora glaspartier i västerläge.
        </AnswerBox>

        <Section heading="Hur fungerar de?">
          <p>
            En markis är en utfällbar dukkonstruktion som monteras i
            fasad eller tak ovanför ett fönster eller en uteplats. När den
            fälls ut bildar den ett tak som skuggar både glaset och ytan
            framför.
          </p>
          <p>
            En zip screen är en vertikal screenväv som rullas ner mellan
            två sidoskenor med blixtlås. Väven täcker hela glaset från
            insida-utsida och hålls helt uppspänd även i vind.
          </p>
        </Section>

        <Section heading="Värme och bländning">
          <p>
            Här vinner zip screen tydligt. Eftersom väven sitter direkt på
            fasaden stoppas solenergin innan den passerar glaset. Det
            innebär att rummet inte värms upp i samma utsträckning som med
            ett invändigt solskydd, eller med en markis som skuggar
            uteplatsen men inte täcker hela glaset.
          </p>
          <p>
            En markis hjälper också mot värmen, men främst genom att
            skugga uteplatsen och delar av glaset. På söder- och
            västerlägen i Malmö med stora fönsterpartier är effekten av
            zip screen märkbart större.
          </p>
        </Section>

        <Section heading="Vind och väder">
          <p>
            En markis är känsligare för vind. Vid blåsigt väder ska den
            rullas in, helst med vindsensor som drar in den automatiskt.
            På utsatta fasader mot Öresund kan det innebära att markisen
            inte är ute så ofta som man skulle vilja.
          </p>
          <p>
            Zip screen klarar betydligt mer vind eftersom väven är fast
            inspänd i sidoskenorna. Kvalitetsmodeller är klassade i
            vindklass 3 enligt EN 13561 — det räcker för i princip alla
            fasader i Skåne.
          </p>
        </Section>

        <Section heading="Utsikt och insyn">
          <p>
            Markisduken är opak. När markisen är utfälld skuggar den ovan
            från, men ni har fortfarande fri sikt rakt fram genom fönstret.
          </p>
          <p>
            Screenväven på en zip screen är perforerad — den finns i
            öppningsgrader från ungefär 1 till 10 procent. Lägre
            öppningsgrad = mer värmeskydd och mer privat utåt, högre = mer
            utsikt. Inifrån har ni i regel god utsikt även vid låg
            öppningsgrad. Kvällstid kan synfältet bli omvänt — då är det
            ljusare inne än ute.
          </p>
        </Section>

        <Section heading="Estetik och fasad">
          <p>
            En markis är synligare. Färgvalet på duken blir en del av
            fasadens uttryck — och rätt vald kan en markis lyfta huset.
            Klassiska radhus, äldre flerbostadshus och rena villor får
            ofta en mer levande fasad med markis.
          </p>
          <p>
            Zip screen är diskretare. Kassetten är liten och kan
            integreras med fasaden i samma kulör. Modernare arkitektur,
            kontorsfasader och stora glaspartier i nybyggen drar nytta av
            den minimalistiska linjen.
          </p>
        </Section>

        <Section heading="Kan man kombinera?">
          <p>
            Ja, det är ofta den bästa lösningen. Zip screen på de stora
            glaspartierna mot väster — markis över uteplatsen som
            sträcker sig framför. Då får ni värmeskyddet där det behövs
            och uteplatsskuggan där ni faktiskt sitter.
          </p>
        </Section>

        <Section heading="Sammanfattning">
          <div className="rounded-premium border border-ink/10 bg-canvas-soft overflow-hidden">
            <table className="w-full text-sm md:text-base">
              <thead className="bg-canvas">
                <tr className="text-left text-xs font-medium uppercase tracking-[0.18em] text-ink-soft">
                  <th className="px-5 py-4">Egenskap</th>
                  <th className="px-5 py-4">Markis</th>
                  <th className="px-5 py-4">Zip screen</th>
                </tr>
              </thead>
              <tbody className="text-ink">
                <ComparisonRow
                  label="Värmeskydd"
                  markis="Bra"
                  zip="Mycket bra"
                />
                <ComparisonRow
                  label="Vindtålighet"
                  markis="Begränsad"
                  zip="Hög"
                />
                <ComparisonRow
                  label="Utsikt utåt"
                  markis="Helt fri"
                  zip="Filtrerad genom screen"
                />
                <ComparisonRow
                  label="Estetik"
                  markis="Synlig, ger fasaduttryck"
                  zip="Diskret, integreras"
                />
                <ComparisonRow
                  label="Lämpar sig bäst för"
                  markis="Uteplatser, balkonger, fönster"
                  zip="Stora glaspartier, västerlägen"
                />
                <ComparisonRow
                  label="Pris"
                  markis="Lägre på små storlekar"
                  zip="Jämförbar på stora partier"
                />
              </tbody>
            </table>
          </div>
        </Section>

        <div className="mt-20">
          <Eyebrow>Vanliga frågor</Eyebrow>
          <h2 className="heading-section text-3xl md:text-4xl mt-5 text-ink">
            Frågor om jämförelsen.
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
        heading="Osäker på vilket som passar?"
        body="Vi besöker fasaden, går igenom väderstreck, vindexponering och hur ni vill använda uteplatsen — och föreslår en lösning som matchar just er. Hembesök och offert är kostnadsfria."
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

function ComparisonRow({
  label,
  markis,
  zip,
}: {
  label: string;
  markis: string;
  zip: string;
}) {
  return (
    <tr className="border-t border-ink/8">
      <td className="px-5 py-4 font-medium">{label}</td>
      <td className="px-5 py-4 text-ink-soft">{markis}</td>
      <td className="px-5 py-4 text-ink-soft">{zip}</td>
    </tr>
  );
}
