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

const PAGE_URL = `${SITE_URL}/guider/solskydd-varme/`;
const PAGE_TITLE =
  "Solskydd mot värme — sänk temperaturen vid fönstret | Bellevue Solskydd";
const PAGE_DESC =
  "För varmt inomhus sommartid? Vi går igenom hur isolerväv, blackout med vit baksida och utvändigt skydd dämpar värmen. Tips för västersolens påverkan på Malmö-fasader.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: PAGE_URL },
};

const faqs = [
  {
    question: "Räcker invändigt solskydd mot värme?",
    answer:
      "Det hjälper men ger aldrig samma effekt som utvändigt. Invändiga produkter dämpar värme som redan passerat glaset — utvändiga stoppar den innan. På söder- och västerfasader mot Öresund med stora glasytor är skillnaden mätbar. För enklare situationer — mindre fönster, mindre exponering — kan invändigt räcka. För kraftig västersol är kombinationen alltid bättre.",
  },
  {
    question: "Är vit baksida på blackout-rullgardin en gimmick?",
    answer:
      "Nej, det är fysik. En vit yta reflekterar solspektrum betydligt mer än en mörk. När blackout-väven sitter med vit baksida mot rutan studsar solljuset tillbaka mot glaset istället för att absorberas i väven och stråla ut värme i rummet. Mörk baksida absorberar ljuset och blir varm — där tappar ni effekten.",
  },
  {
    question: "Hur fungerar honeycomb-strukturen i isolerväv?",
    answer:
      "Två tyglager med slutna luftceller (sexkantiga, som en honungskaka) emellan. Stillastående luft är en dålig värmeledare — det är den principen som gör att dubbelglas isolerar bättre än enkelglas. Plisséns dubbelväv skapar samma effekt på en mindre skala genom luftcellerna mellan tyglagren. Effekten fungerar åt båda håll: mindre kallras vintertid och mindre solvärme sommartid.",
  },
  {
    question: "När gör utvändigt solskydd störst skillnad?",
    answer:
      "På fönster mot väster med eftermiddagssol och stora glasytor — typiskt vardagsrum eller kök i nyproducerade lägenheter och villor mot Öresund. Där når en zip screen eller markis verklig effekt eftersom solenergin stoppas helt innan glaset värms upp. På norrfönster eller små fönster mot innergård är effekten mindre påtaglig.",
  },
  {
    question: "Är isolerväv värd det också vintertid?",
    answer:
      "Ja, ofta tydligare än man tror. Vid stora glasytor mot kall vind — Limhamn mot havet, Hyllie mot öppen mark — är kallraset från glaset märkbart. Plisséns luftceller dämpar konvektionen mellan kall glasruta och varm rumsluft, så det upplevs varmare vid fönstret. Det är inte ersättning för bra fönster, men det jämnar ut temperaturupplevelsen i rummet.",
  },
];

export default function SolskyddVarmeGuide() {
  const jsonLd = graph(
    breadcrumbSchema([
      { name: "Start", url: `${SITE_URL}/` },
      { name: "Guider", url: `${SITE_URL}/guider/` },
      { name: "Solskydd mot värme", url: PAGE_URL },
    ]),
    articleSchema({
      url: PAGE_URL,
      headline: "Solskydd mot värme — sänk temperaturen vid fönstret",
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
            { name: "Solskydd mot värme", url: PAGE_URL },
          ]}
        />

        <header className="mt-10 mb-10">
          <Eyebrow>Tema</Eyebrow>
          <h1 className="heading-display text-5xl md:text-7xl mt-6 text-ink">
            Solskydd mot värme
          </h1>
          <Divider className="mt-7" />
        </header>

        <AnswerBox>
          Sommarvärme inomhus — särskilt på fasader mot Öresund — är
          oftast inte ett ventilations- eller AC-problem utan ett
          glasproblem. Stora glasytor mot väster släpper in solenergi som
          värmer rummet under hela eftermiddagen. Lösningen är att stoppa
          eller reflektera ljuset innan det blir värme i rummet — och de
          mest effektiva produkterna är plissé med dubbelväv invändigt
          plus zip screen eller markis utvändigt.
        </AnswerBox>

        <Section heading="Varför Malmö är annorlunda">
          <p>
            Två omständigheter gör värmefrågan extra påtaglig i Malmö
            jämfört med inlandsorter. Det första är västersolen mot
            Öresund — fasaderna mot havet får eftermiddagssol utan
            naturlig avskärmning från träd eller berg. Den andra är
            nyproduktionens stora glasytor: i Hyllie, Västra Hamnen och
            Dockan är fönsterpartier på fyra meter och uppåt vanliga, och
            varje extra kvadratmeter glas är en extra kvadratmeter där
            solenergi kommer in.
          </p>
          <p>
            Det betyder inte att alla bostäder behöver kraftiga åtgärder.
            En vanlig lägenhet i Möllevången med mindre fönster mot
            innergård klarar sig oftast med en blackout-rullgardin i
            sovrummet. En etagevåning i Västra Hamnen med fönsterrad mot
            väster är en helt annan situation — där betalar sig
            kombinationsskydd snabbt i komfort under sommarmånaderna.
          </p>
        </Section>

        <Section heading="Tre invändiga lösningar">
          <h3 className="heading-section text-xl md:text-2xl text-ink mt-8 mb-3">
            Plissé med isolerande dubbelväv
          </h3>
          <p>
            Den invändiga produkt som dämpar värme effektivast.{" "}
            <Link
              href="/plissegardiner-malmo/"
              className="text-ink underline decoration-ink/30 hover:decoration-ink"
            >
              Dubbelvävens
            </Link>{" "}
            slutna luftceller skapar ett stillastående luftlager mellan
            väv och glas — samma princip som dubbelglas. Effekten fungerar
            åt båda håll, så ni får både värmedämpning sommartid och
            mindre kallras vintertid. Mörkläggande variant med
            aluminiumkärna mellan tyglagren reflekterar dessutom värme.
          </p>
          <h3 className="heading-section text-xl md:text-2xl text-ink mt-8 mb-3">
            Rullgardin med blackout och vit baksida
          </h3>
          <p>
            <Link
              href="/rullgardiner-malmo/"
              className="text-ink underline decoration-ink/30 hover:decoration-ink"
            >
              Blackout-väv med vit baksida
            </Link>{" "}
            reflekterar solspektrum tillbaka mot glaset istället för att
            absorbera och stråla ut värme i rummet. Effektivt sommartid.
            Skillnaden mot plissé isolerväv är att rullgardinen inte
            isolerar mot kallras vintertid — och att den finns med motor.
          </p>
          <h3 className="heading-section text-xl md:text-2xl text-ink mt-8 mb-3">
            Persienn med vinklade lameller
          </h3>
          <p>
            <Link
              href="/persienner-malmo/"
              className="text-ink underline decoration-ink/30 hover:decoration-ink"
            >
              Persienn
            </Link>{" "}
            avskärmar direktstrålarna när lamellerna är stängda eller
            vinklade. Effekten mot värme är mer begränsad än isolerväv
            och blackout — men bättre än inget skydd, och kombinerar väl
            med ett utvändigt zip screen för rum där ni vill behålla
            fönstret som ljuskälla men ta bort den värsta
            eftermiddagssolen.
          </p>
        </Section>

        <Section heading="Utvändigt slår invändigt">
          <p>
            Den enkla fysiken är att invändigt solskydd hanterar värme som
            redan passerat glaset; utvändigt stoppar den innan. På fönster
            där värmen är ett verkligt problem — söder- och västerlägen
            mot Öresund med stora glasytor — är en{" "}
            <Link
              href="/zip-screen-malmo/"
              className="text-ink underline decoration-ink/30 hover:decoration-ink"
            >
              zip screen
            </Link>{" "}
            eller en{" "}
            <Link
              href="/markiser-malmo/"
              className="text-ink underline decoration-ink/30 hover:decoration-ink"
            >
              markis
            </Link>{" "}
            mer effektiv än vilken invändig produkt som helst.
          </p>
          <p>
            Den optimala lösningen är att kombinera. Utvändigt skydd
            stoppar solvärmen; invändigt skydd reglerar ljus, insyn och
            estetik. På stora västerfasader installerar vi typiskt zip
            screen plus rullgardin med screenväv — utvändigt mot värmen,
            invändigt för bländning vid skärmar och vid kvällsljus.
          </p>
        </Section>

        <Section heading="Praktiska tips">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="font-medium text-ink">
                Fäll ned tidigt.
              </strong>{" "}
              Det är lättare att hålla ett svalt rum svalt än att kyla
              ned ett varmt. Tidsstyrd motor på rullgardin kan göra
              fällningen automatiskt vid solens vinkel.
            </li>
            <li>
              <strong className="font-medium text-ink">
                Välj ljus baksida.
              </strong>{" "}
              På blackout-väv: vit eller ljus baksida reflekterar mer än
              mörk.
            </li>
            <li>
              <strong className="font-medium text-ink">
                Isolerväv är investering.
              </strong>{" "}
              Effekten finns året om. Ger jämnare temperatur vid fönstret
              också vintertid — inte bara mot sommarvärme.
            </li>
            <li>
              <strong className="font-medium text-ink">
                Kombinera utvändigt och invändigt på de värsta fönstren.
              </strong>{" "}
              Inte alla — bara där det faktiskt är problem.
            </li>
          </ul>
        </Section>

        <div className="mt-20">
          <Eyebrow>Vanliga frågor</Eyebrow>
          <h2 className="heading-section text-3xl md:text-4xl mt-5 text-ink">
            Frågor om värmedämpning.
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
        eyebrow="Solskydd mot värme"
        heading="Vi tittar på de varma fönstren tillsammans."
        body="Hembesöket är gratis. Vi går runt fasaden, identifierar vilka fönster som faktiskt är värmeproblem, och föreslår en kombination av invändigt och utvändigt skydd där det behövs."
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
