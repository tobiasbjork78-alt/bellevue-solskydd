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

const PAGE_URL = `${SITE_URL}/lamellgardiner-malmo/`;
const PAGE_TITLE =
  "Lamellgardiner Malmö | Stora glaspartier & skjutdörrar — Bellevue Solskydd";
const PAGE_DESC =
  "Måttanpassade lamellgardiner i Malmö och södra Skåne. Vertikala lameller på 89 mm eller 127 mm för stora fönster, skjutdörrar och kontor. Flamskydd och motor finns. Kostnadsfritt hembesök.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: PAGE_URL },
};

const faqs = [
  {
    question: "Vad är skillnaden mellan en lamellgardin och en persienn?",
    answer:
      "Riktning. En persienn har horisontella lameller som dras uppåt och vinklas runt sin vågräta axel. En lamellgardin är samma princip men vridna 90 grader: vertikala lameller som dras åt sidan och vinklas runt sin lodräta axel. Det enkla skiftet förändrar vad de passar för. Persienner är optimerade för standardfönster i ögonhöjd. Lamellgardiner är optimerade för breda partier, skjutdörrar och fasader där hela kortväggen är glas.",
  },
  {
    question: "Hur är det att gå igenom en altandörr med lamellgardin?",
    answer:
      "Lättare än med rullgardin eller plissé — de behöver fällas upp för att ni ska kunna passera. Lamellerna kan istället dras helt åt sidan och stapla sig i ena eller andra änden av skenan. Vill ni att de ska delas på mitten — så att passagen sker rakt fram — kan skenan beställas i den konfigurationen. Praktiskt på altandörrar mot västerläge där solen ändå inte når in på morgonen.",
  },
  {
    question: "Är 89 mm eller 127 mm bäst?",
    answer:
      "127 mm — den bredare lamellen — ger en lugnare yta och färre rörliga delar att hantera. Den passar moderna interiörer och stora ytor där en stram linje önskas. 89 mm — den smalare — ger en finare detaljnivå, mer flexibilitet i hur ljus släpps in, och passar bättre i traditionella miljöer eller där väggen inte är extremt bred. Vi visar bägge storlekar bredvid varandra vid hembesöket.",
  },
  {
    question: "Kan en enskild lamell bytas om den skulle skadas?",
    answer:
      "Ja, det är en av poängerna med konstruktionen. Varje lamell hänger i sin egen klädnypa under skenan och kan lyftas av eller bytas separat. Om ett barn hakar i en lamell vid skjutdörren behöver ni inte byta hela gardinen — bara den enda lamell som tagit stryk.",
  },
  {
    question: "Krävs flamskyddade vävar i en kontorsmiljö?",
    answer:
      "Det beror på lokalen och verksamheten. Brandkrav på textilier varierar med byggnadsklass, antal personer i lokalen och eventuell publik verksamhet. För många kontorsytor finns inga formella krav, men för skolor, förskolor, sjukhus och hotell är flamskydd standard. Vi har vävar som uppfyller de vanligaste klasserna och kan diskutera vad just er verksamhet behöver.",
  },
  {
    question: "Kan lamellgardin ersätta en rumsavdelare?",
    answer:
      "Ja, det fungerar förvånansvärt bra. En skena monterad i tak — utan koppling till ett fönster — fungerar som flexibel rumsavdelare som kan dras igen vid behov och sedan dras bort helt. Smartare än en fast vägg om rummet ibland behöver vara öppet. Vi får ibland frågan från hemmakontor som behöver kunna stänga av en del av rummet vid videomöten.",
  },
];

export default function LamellgardinerMalmoPage() {
  const jsonLd = graph(
    breadcrumbSchema([
      { name: "Start", url: `${SITE_URL}/` },
      { name: "Invändigt solskydd", url: `${SITE_URL}/invandigt-solskydd/` },
      { name: "Lamellgardiner Malmö", url: PAGE_URL },
    ]),
    servicePageSchema("Lamellgardiner Malmö", PAGE_URL, PAGE_DESC),
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
              { name: "Lamellgardiner Malmö", url: PAGE_URL },
            ]}
          />

          <div className="mt-10 mb-10">
            <Eyebrow>Invändigt solskydd</Eyebrow>
            <h1 className="heading-display text-5xl md:text-7xl mt-6 text-ink">
              Lamellgardiner i Malmö
            </h1>
            <Divider className="mt-7" />
          </div>

          <AnswerBox>
            En lamellgardin består av vertikala tyglameller som hänger från
            en gemensam skena ovanför fönstret. Lamellerna kan vridas
            individuellt för att styra ljus och vinkel, eller dras helt åt
            sidan för fri passage. Bellevue Solskydd levererar
            lamellgardiner i Malmö och södra Skåne — för stora glaspartier,
            altandörrar och kontorsmiljöer.
          </AnswerBox>

          <Section heading="När en lamellgardin är rätt verktyg">
            <p>
              Det finns några specifika situationer där lamellgardin är
              överlägset andra invändiga solskydd. Den första — och
              vanligaste — är riktigt breda fönster eller fönsterrader som
              täcker en hel kortvägg. Vanligt i Malmös nyproduktion i
              Hyllie och Västra Hamnen, där bostadsrätter och kontor båda
              har glasfasader på över tre meter. En enda skena med
              lamellgardin täcker hela bredden utan synliga skarvar.
            </p>
            <p>
              Den andra är fönsterpartier med en altandörr eller skjutdörr
              som behöver kunna passeras. Lamellerna dras åt sidan och
              stapas i ena änden — passagen är fri. Ingen rullgardin
              behöver fällas upp, ingen plissé skjutas tillbaka.
            </p>
            <p>
              Den tredje är kontor och offentliga miljöer. Lamellgardiner
              har länge varit standardlösningen i kontorslandskap eftersom
              vinkeln kan justeras för att blockera bländning vid
              skärmarbete utan att tända elljus. Flamskyddade vävar är
              standardutbud.
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
              Skenan monteras ovanför fönstret eller i taket. Från skenan
              hänger lamellerna i klädnypor, en lamell per nypa, så att de
              kan vrida sig runt sin lodräta axel. En kedja styr vridningen
              — sluten gardin, halvöppen, fullt öppen — och en separat
              dragstav eller snöre drar ihop hela paketet åt sidan.
            </p>
            <p>
              Två standardbredder finns: 89 mm och 127 mm. Det är samma
              produkt — bara vald i olika lamellbredd. Smalare lamell ger
              fler rörliga delar och en finare detaljnivå; bredare lamell
              ger en lugnare yta och färre delar att underhålla. Vi visar
              båda i fysiska prover så ni kan jämföra direkt.
            </p>
          </Section>

          <Section heading="Var lamellgardiner passar">
            <h3 className="heading-section text-xl md:text-2xl text-ink mt-8 mb-3">
              Stora glaspartier
            </h3>
            <p>
              En enda skena täcker breda fönster utan att brytas upp i
              flera enheter. Vi har gjort installationer på upp till sex
              meter sammanhängande skena — vanligt i bostadsrätter mot
              Öresund eller mot stadens kortväggar.
            </p>
            <h3 className="heading-section text-xl md:text-2xl text-ink mt-8 mb-3">
              Altandörrar och skjutpartier
            </h3>
            <p>
              Lamellerna dras åt sidan så att passagen är fri. På dörrar
              med ofta passerande trafik — typiskt köksdelens uteplatsdörr
              — slipper ni hela rörelsen att lyfta upp en gardin för att
              ta sig ut.
            </p>
            <h3 className="heading-section text-xl md:text-2xl text-ink mt-8 mb-3">
              Kontor och konferensrum
            </h3>
            <p>
              Vinkelbara lameller blockerar direkt sol och bländning vid
              skärmar utan att stänga ute dagsljuset. Flamskyddade vävar
              för kontor med brandkrav. Motoriserad styrning lönar sig på
              långa fönsterrader där en knapp eller fjärrkontroll täcker
              hela ytan.
            </p>
            <h3 className="heading-section text-xl md:text-2xl text-ink mt-8 mb-3">
              Rumsavdelare
            </h3>
            <p>
              En takmonterad skena utan koppling till fönster fungerar som
              flexibel avskärmning. Bra på öppen-planlösningar där en del
              av rummet ibland behöver kunna stängas av — exempelvis ett
              hemmakontorshörn vid videomöten.
            </p>
          </Section>

          <Section heading="Vävalternativ">
            <p>
              Vävvalet styr ljusgenomsläppet på samma sätt som hos
              rullgardiner — från ljusfiltrerande till tätt mörkläggande.
              Skillnaden ligger i att lamellgardinens väv kan vinklas och
              dras åt sidan, så vävvalet samverkar med vridningen istället
              för att vara den enda funktionsstyrningen.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="font-medium text-ink">
                  Ljusfiltrerande
                </strong>{" "}
                — släpper igenom ett mjukt dagsljus. Vanlig i vardagsrum
                och kontor.
              </li>
              <li>
                <strong className="font-medium text-ink">
                  Mörkläggande
                </strong>{" "}
                — tät väv för konferensrum med projektor och rum med
                västersol.
              </li>
              <li>
                <strong className="font-medium text-ink">
                  Flamskyddade vävar
                </strong>{" "}
                — uppfyller branschens vanligaste brandklasser. Standard i
                kontor, skolor, vårdmiljöer och offentliga lokaler.
              </li>
            </ul>
          </Section>

          <Section heading="Manövrering">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="font-medium text-ink">
                  Snöre eller kedja
                </strong>{" "}
                drar lamellpaketet åt sidan. Det här är dragläget.
              </li>
              <li>
                <strong className="font-medium text-ink">
                  Vridkedja eller vridstav
                </strong>{" "}
                styr vinkeln. Det här är vridläget.
              </li>
              <li>
                <strong className="font-medium text-ink">
                  Dragstav
                </strong>{" "}
                — ett alternativ utan synliga snören som ger ett renare
                utseende.
              </li>
              <li>
                <strong className="font-medium text-ink">
                  Motoriserad
                </strong>{" "}
                styrning finns och är ett naturligt val på riktigt breda
                installationer eller där flera fönster ska styras
                samtidigt. Praktiskt på kontor.
              </li>
            </ul>
          </Section>

          <Section heading="Pris och vad som påverkar det">
            <p>
              Bredd är största prisfaktorn — antalet lameller skalar med
              bredden. Vävvalet kommer därefter (flamskyddade vävar är
              dyrare än standard) och om systemet ska motoriseras.
              Specialfärger och lamellbredd 89 mm jämfört med 127 mm
              påverkar marginellt. Vi specificerar varje del i offerten.
            </p>
          </Section>

          <Section heading="Montering och skötsel">
            <p>
              Skenan monteras antingen i taket eller på väggen ovanför
              fönstret. Vi tar mått, monterar fästen, hänger skenan och
              installerar lamellerna en och en. Funktionstest av både
              dragning och vridning innan vi går.
            </p>
            <p>
              Skötseln är enkel: damma med en mjuk trasa eller dammsugare
              på låg effekt, en lamell i taget i stängt läge. Tygvävda
              lameller går att lyfta av och tvätta för punktfläckar — men
              låt dem alltid hänga upp i full längd och torka innan de
              monteras tillbaka, så vävens tyngdfördelning är den
              ursprungliga.
            </p>
          </Section>

          <Section heading="Andra invändiga lösningar">
            <p>
              Lamellgardiner är specialiserade på breda fönster och
              dörrpartier. För standardfönster är{" "}
              <Link
                href="/rullgardiner-malmo/"
                className="text-ink underline decoration-ink/30 hover:decoration-ink"
              >
                rullgardin
              </Link>
              ,{" "}
              <Link
                href="/plissegardiner-malmo/"
                className="text-ink underline decoration-ink/30 hover:decoration-ink"
              >
                plissé
              </Link>{" "}
              eller{" "}
              <Link
                href="/persienner-malmo/"
                className="text-ink underline decoration-ink/30 hover:decoration-ink"
              >
                persienn
              </Link>{" "}
              oftast bättre lämpade. Behöver ni absolut mörkläggning är
              plissé med isolerväv eller rullgardin med blackout det rätta
              valet — lamellgardinens vertikala springor släpper alltid
              igenom lite ljus oavsett vävtyp.
            </p>
          </Section>

          <div className="mt-20">
            <Eyebrow>Vanliga frågor</Eyebrow>
            <h2 className="heading-section text-3xl md:text-4xl mt-5 text-ink">
              Frågor om lamellgardiner.
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
          eyebrow="Lamellgardiner Malmö"
          heading="Boka kostnadsfritt hembesök för lamellgardiner."
          body="Vi mäter på plats, visar lamell- och vävprover, och föreslår skenkonfiguration utifrån fönstret. Hembesök, mätning och offert är gratis — gäller hem, kontor och skolor i hela södra Skåne."
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
