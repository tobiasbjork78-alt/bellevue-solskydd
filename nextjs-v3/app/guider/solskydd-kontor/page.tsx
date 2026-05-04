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

const PAGE_URL = `${SITE_URL}/guider/solskydd-kontor/`;
const PAGE_TITLE =
  "Solskydd för kontor — bländskydd och flamskyddade vävar | Bellevue Solskydd";
const PAGE_DESC =
  "Solskydd för kontorsmiljöer i Malmö — screenväv mot bländning, flamskyddade vävar för brandkrav, motoriserade lösningar för långa fönsterrader. Vi installerar för företag i hela södra Skåne.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: PAGE_URL },
};

const faqs = [
  {
    question: "Behöver vävar vara flamskyddade i ett kontor?",
    answer:
      "Beror på lokalen. Brandkraven varierar med byggnadsklass, lokalanvändning och antal personer som vistas i rummet. Ren kontorsverksamhet i klass Br3-byggnader har typiskt inga formella krav på textilier. Lokaler som tar emot publik, skolor, vårdmiljöer och hotell har striktare regler. Vi har vävar för de vanligaste klasserna och kan diskutera exakt vad er lokal kräver tillsammans med er säkerhetschef eller fastighetsägare.",
  },
  {
    question: "Vilken vävtyp är bäst för bildskärmsplatser?",
    answer:
      "Screen — en perforerad väv där öppningsgraden anges i procent. Lägre öppningsgrad (1–3 %) ger maximalt bländskydd och behåller utsikten dämpad; högre (5–10 %) ger mer genomsikt och mindre avskärmning. För kontor med skärmarbete brukar 3–5 % vara den optimala balansen. Vi tar med flera vävprover så ni kan jämföra på plats i lokalens ljus.",
  },
  {
    question: "Är motoriserade lösningar verkligen värda det på ett kontor?",
    answer:
      "På fönsterrader med fler än fyra-fem fönster — nästan alltid. Tiden personalen lägger på att justera solskydd manuellt är förlorad arbetstid. Centraliserad styrning via knappsats, tidsstyrning eller smart hem-system gör att hela raden synkroniseras med solens vinkel. Förenklar dessutom underhållet — en gemensam styrning är lättare att felsöka än fjorton individuella kedjor.",
  },
  {
    question: "Hur hanterar man insynsfrågan i konferensrum mot gata?",
    answer:
      "Två lager är vanligaste lösningen. Screen-rullgardin yttre — för dagligt bländskydd utan att rummet mörkläggs. Blackout-rullgardin inre — för videomöten där projektorn behöver kontrast eller där känsligt material ska skyddas mot insyn. Båda kan motoriseras och styras tillsammans.",
  },
  {
    question: "Vem kontaktar jag för kontorslösningar i Malmö?",
    answer:
      "Vi gör platsbesök på företag i hela södra Skåne. Ring 040-18 11 00 eller skicka ett mail till info@bellevuesolskydd.se. För större installationer brukar vi göra ett orienterande platsbesök först — gå igenom fasaden, väderstrecken och hur lokalerna används — innan vi tar fram en specificerad offert.",
  },
];

export default function SolskyddKontorGuide() {
  const jsonLd = graph(
    breadcrumbSchema([
      { name: "Start", url: `${SITE_URL}/` },
      { name: "Guider", url: `${SITE_URL}/guider/` },
      { name: "Solskydd för kontor", url: PAGE_URL },
    ]),
    articleSchema({
      url: PAGE_URL,
      headline: "Solskydd för kontor — bländskydd och flamskyddade vävar",
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
            { name: "Solskydd för kontor", url: PAGE_URL },
          ]}
        />

        <header className="mt-10 mb-10">
          <Eyebrow>Tema</Eyebrow>
          <h1 className="heading-display text-5xl md:text-7xl mt-6 text-ink">
            Solskydd för kontor
          </h1>
          <Divider className="mt-7" />
        </header>

        <AnswerBox>
          Kontorsmiljöer ställer andra krav än bostäder: bredare fönster,
          fler fönster i samma rum, ofta brandkrav på textilier och behov
          av centraliserad styrning. Tre produkter dominerar i
          kontorssegmentet — rullgardin med screenväv för bländskydd,
          lamellgardin för stora glaspartier, och persienn för rum med
          stegvis ljusstyrning. Flamskyddade vävar finns för alla
          alternativen.
        </AnswerBox>

        <Section heading="Vad gör kontor annorlunda än bostäder?">
          <p>
            Tre saker. Det första är skalan — kontorsfasader har ofta
            långa fönsterrader på samma våning där hela ytan ska styras
            samtidigt. Manuell hantering blir snabbt opraktisk vid fler än
            fem fönster. Det andra är skärmarbetet: bländningen från
            direktsol eller starka reflexer mot bildskärmar är ett
            arbetsmiljöproblem som invändigt solskydd faktiskt löser. Det
            tredje är brandkraven: textilier i lokaler med flera personer
            kan behöva uppfylla specifika brandklasser, vilket inte är
            standard i bostadssortimentet.
          </p>
          <p>
            Det betyder att vi nästan alltid kombinerar vävvalet med en
            tydlig styrlösning — manuell, kedja eller motor — och
            verifierar att vävens brandklass passar lokalen.
          </p>
        </Section>

        <Section heading="Tre produkter som dominerar i kontor">
          <h3 className="heading-section text-xl md:text-2xl text-ink mt-8 mb-3">
            Rullgardin med screenväv
          </h3>
          <p>
            <Link
              href="/rullgardiner-malmo/"
              className="text-ink underline decoration-ink/30 hover:decoration-ink"
            >
              Screen-rullgardin
            </Link>{" "}
            är förstavalet för bildskärmsplatser. Perforerad väv som
            dämpar bländning och solvärme men behåller utsikten — så
            personalen ser ut, men solen lyser inte rakt mot skärmen.
            Maxi-modellen täcker fönsterbredder upp till 450 cm, vilket
            räcker för i princip alla fasadfönster i kontorslokaler. Med
            motor och central styrning kan en hel kontorsfasad
            samordnas.
          </p>
          <h3 className="heading-section text-xl md:text-2xl text-ink mt-8 mb-3">
            Lamellgardin
          </h3>
          <p>
            <Link
              href="/lamellgardiner-malmo/"
              className="text-ink underline decoration-ink/30 hover:decoration-ink"
            >
              Lamellgardin
            </Link>{" "}
            är specialiserad på riktigt breda glaspartier — vanliga i
            kontorshus i Hyllie, Dockan och Västra Hamnen där hela
            kortväggen kan vara glas. En enda skena täcker bredden, och
            lamellerna kan vinklas för bländskydd eller dras helt åt
            sidan vid passage genom glaspartiet. Flamskyddade vävar är
            standardutbud.
          </p>
          <h3 className="heading-section text-xl md:text-2xl text-ink mt-8 mb-3">
            Persienn
          </h3>
          <p>
            <Link
              href="/persienner-malmo/"
              className="text-ink underline decoration-ink/30 hover:decoration-ink"
            >
              Persienn
            </Link>{" "}
            är användbar i mindre kontorsrum och konferensrum där exakt
            ljusstyrning är önskvärd. Vinkla lamellerna mot taket på
            morgonen för indirekt ljus, justera vinkeln när solen flyttar
            sig. På företag som värdesätter en stramare estetik är
            mellanglaspersienn — där lamellerna sitter inkapslade mellan
            fönstrets glas — ett populärt val.
          </p>
        </Section>

        <Section heading="Specifika rum">
          <p>
            <strong className="font-medium text-ink">Konferensrum.</strong>{" "}
            Mörkläggande blackout-rullgardin för projektorvisning. Eller
            kombinera screen-rullgardin (yttre) med blackout (inre) för
            växlande behov.
          </p>
          <p>
            <strong className="font-medium text-ink">
              Mötesrum mot gata
            </strong>{" "}
            — insynsproblem. Plissé tvåvägs eller vinklad persienn löser
            insynen utan att rummet mörkläggs.
          </p>
          <p>
            <strong className="font-medium text-ink">
              Tysta rum / call-rum
            </strong>{" "}
            — small fönster, bländskydd vid skärmar. Screen-rullgardin
            är ofta tillräcklig.
          </p>
          <p>
            <strong className="font-medium text-ink">Reception.</strong>{" "}
            Estetik viktig — välj produkter och färger som matchar
            interiören. Persienn i kulör som matchar logotyp eller
            corporate identity.
          </p>
          <p>
            <strong className="font-medium text-ink">Pausrum.</strong>{" "}
            Lugnare ljusbehov. Ljusfiltrerande rullgardin eller plissé
            ger ett mjukare ljus utan bländning.
          </p>
        </Section>

        <Section heading="Flamskydd — det här gäller">
          <p>
            Brandklasser på textilier (typiskt EN 13773) anger hur snabbt
            och hur mycket ett tyg brinner under standardiserade
            förhållanden. För publika lokaler, skolor, sjukhus och hotell
            i Sverige finns ofta krav på vävar som uppfyller specifika
            klasser. För rena kontorslokaler i Br3-byggnader är kraven
            ofta inte formella, men många hyresvärdar kräver ändå
            flamskyddade vävar i sina kontorshyresgästers installationer.
          </p>
          <p>
            Vi har vävar i flera flamskyddsklasser och kan dokumentera
            klassningen för säkerhetschef eller försäkringsbolag. Vid
            offerten anger vi tydligt vilken klass varje produkt
            uppfyller.
          </p>
        </Section>

        <Section heading="Centraliserad styrning">
          <p>
            För större installationer rekommenderar vi nästan alltid
            motorisering med central styrning. Antingen via knappsatser
            i rummet (typ "öppna alla", "stäng alla", "vinkla 50 %"),
            via tidsstyrning som synkroniserar med solens vinkel, eller
            via integration med befintligt fastighetssystem. Praktiskt
            även för fastighetsskötare — en gemensam panel är enklare att
            felsöka än fjorton individuella mekanismer.
          </p>
        </Section>

        <div className="mt-20">
          <Eyebrow>Vanliga frågor</Eyebrow>
          <h2 className="heading-section text-3xl md:text-4xl mt-5 text-ink">
            Frågor om kontorslösningar.
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
        eyebrow="Solskydd för företag"
        heading="Boka platsbesök för kontoret."
        body="Vi gör platsbesök hos företag i Malmö, Lund och hela södra Skåne. Mätning, vävprover på plats, dokumenterad brandklass — och specificerad offert per fönster. Kostnadsfritt."
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
