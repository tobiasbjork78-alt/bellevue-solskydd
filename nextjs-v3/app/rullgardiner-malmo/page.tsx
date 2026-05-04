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

const PAGE_URL = `${SITE_URL}/rullgardiner-malmo/`;
const PAGE_TITLE =
  "Rullgardiner Malmö | Blackout, screen, motor — Bellevue Solskydd";
const PAGE_DESC =
  "Måttanpassade rullgardiner i Malmö och södra Skåne. Mini, Medi och Maxi i bredder upp till 450 cm. Blackout, screen, ljusfiltrerande — manuella eller motoriserade med Matter och HomeKit. Kostnadsfritt hembesök.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: PAGE_URL },
};

const faqs = [
  {
    question: "Hur väljer jag rätt vävtyp?",
    answer:
      "Utgå från vad rummet ska göra och vid vilken tid på dygnet. Sovrum, hemmakontor med videomöten och konferensrum vill ha blackout — en helt opak väv som dessutom reflekterar solvärme tillbaka mot glaset om baksidan är vit. Skärmarbetsplatser och vardagsrum med utsikt klarar sig oftast bra med screen, en perforerad väv som dämpar bländning utan att helt slå av utsikten. Ljusfiltrerande väv är ett mellanläge — mjukt dagsljus, ingen direkt sol, men inget mörkt rum. Vi tar med vävprover i alla tre kategorier vid hembesöket.",
  },
  {
    question: "Hur stor skillnad gör motoriserad rullgardin?",
    answer:
      "Beror på antalet rullgardiner och hur ofta de används. På ett enskilt fönster ni styr morgon och kväll är manuell kulkedja oftast helt okej. På en sovrumsvägg med två fönster, en hemmakontorsvägg med tre, eller ett vardagsrum mot väster där ni dagligen vill stänga ut eftermiddagssolen — då sparar motorn både tid och slitage. Med tidsstyrning fäller den ner sig själv när solen står som värst.",
  },
  {
    question: "Vad är skillnaden mellan Motion och Eve-Motion?",
    answer:
      "Motion-familjen styrs via Bluetooth till app eller med fjärrkontroll, och kopplas mot smart hem genom en separat Wi-Fi-brygga. Eve-Motion bygger på Thread och Matter — två öppna standarder — så rullgardinen syns direkt i Apple HomeKit, Google Home, Alexa och SmartThings utan brygga. Eve-Motion förutsätter att ni har en Thread Border Router i hemmet (ofta en Apple TV 4K, HomePod, Nest Hub eller liknande). Är ni osäkra hjälper vi er välja.",
  },
  {
    question: "Hur bred kan en rullgardin vara?",
    answer:
      "Maxi-modellen tar fönster upp till 450 cm med ett 50 mm rör — det räcker för i princip alla fasadfönster i bostäder. Medi går till 300 cm och passar de flesta standardfönster. Mini hanterar smala fönster upp till 180 cm. På riktigt breda glaspartier, över 4,5 meter, är lamellgardin oftast den praktiska vägen istället.",
  },
  {
    question: "Mörklägger en rullgardin verkligen helt?",
    answer:
      "Väven mörklägger, men en rullgardin monterad utanpå karmen får alltid en ljusspringa runt kanten. Det räcker normalt för sovrum men är inte 100 % tätning. Vill ni ha tätare passning kan kassetten kompletteras med sidoskenor som stoppar sidoljuset. Vill ni ha absolut mörkläggning är glasmonterad plissé med sidoskenor ett alternativ — där sitter väven så nära glaset att ljusspringan minimeras.",
  },
  {
    question: "Hur länge håller motorbatteriet?",
    answer:
      "Cirka 8 månader vid normal användning. Laddtiden är ungefär 6 timmar via USB. Vi installerar gärna en kabelbunden 230V-motor istället där det går — då slipper ni laddcykeln helt. Den varianten finns i Motion-familjen för bredare gardiner.",
  },
];

export default function RullgardinerMalmoPage() {
  const jsonLd = graph(
    breadcrumbSchema([
      { name: "Start", url: `${SITE_URL}/` },
      { name: "Invändigt solskydd", url: `${SITE_URL}/invandigt-solskydd/` },
      { name: "Rullgardiner Malmö", url: PAGE_URL },
    ]),
    servicePageSchema("Rullgardiner Malmö", PAGE_URL, PAGE_DESC),
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
              { name: "Rullgardiner Malmö", url: PAGE_URL },
            ]}
          />

          <div className="mt-10 mb-10">
            <Eyebrow>Invändigt solskydd</Eyebrow>
            <h1 className="heading-display text-5xl md:text-7xl mt-6 text-ink">
              Rullgardiner i Malmö
            </h1>
            <Divider className="mt-7" />
          </div>

          <AnswerBox>
            En rullgardin är en jämn vävyta som rullas upp och ner ovanifrån
            fönstret. Det enkla i konstruktionen är dess styrka — det är
            vävvalet som styr funktionen, från mörkläggande blackout till
            perforerad screen för bländskydd. Bellevue Solskydd levererar
            rullgardiner i Malmö och södra Skåne — i bredder upp till 450 cm,
            manuella eller motoriserade med smart hem-stöd.
          </AnswerBox>

          <Section heading="Det enklaste solskyddet — och ofta det bästa">
            <p>
              Rullgardinen gör en sak: den täcker fönstret eller låter det
              vara öppet. Den fasta logiken är poängen. När ni inte behöver
              tvåvägsjustering eller stegvis lamellvinkling — och det gör ni
              inte alltid — är rullgardinen den enklaste och mest stilrena
              vägen. Slät vävyta, inga lameller som lyser strimmiga, ingen
              veckad textur. Den smälter in.
            </p>
            <p>
              I moderna lägenheter i Västra Hamnen och Hyllie, där fasaderna
              ofta är glas och inredningen stram, är rullgardin standardvalet
              just för att den inte stör linjerna. På villor i Limhamn,
              Bunkeflo och Oxie där fasaden är traditionellare fungerar
              den lika bra — det är vävvalet som anpassas till rummets
              karaktär, inte tvärtom.
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

          <Section heading="Tre storlekar för olika fönster">
            <p>
              Storleken styrs av vävrörets diameter. Bredare väv kräver
              kraftigare rör för att den inte ska bukta. Vi väljer storlek
              utifrån fönstrets bredd och vävtyp — tyngre vävar (blackout,
              screen i högre densitet) drar nytta av kraftigare rör även på
              smalare fönster.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="font-medium text-ink">Mini</strong> — 28
                mm rör, fönsterbredd upp till 180 cm. Smal och diskret —
                passar nischer och smala karmar.
              </li>
              <li>
                <strong className="font-medium text-ink">Medi</strong> — 35
                eller 42 mm rör, fönsterbredd upp till 300 cm. Den vanligaste
                storleken för standardfönster i hem och kontor.
              </li>
              <li>
                <strong className="font-medium text-ink">Maxi</strong> — 50
                mm rör, fönsterbredd upp till 450 cm. Avsedd för stora
                glaspartier — vanligt i bostadsrätter med fönsterrad mot
                gata, samt på uterum och kontorslokaler.
              </li>
            </ul>
            <p>
              Höjden anpassas alltid efter fönstret och kan variera från
              cirka 30 cm upp till 285 cm.
            </p>
          </Section>

          <Section heading="Vävtyp — det val som spelar roll">
            <h3 className="heading-section text-xl md:text-2xl text-ink mt-8 mb-3">
              Blackout (mörkläggande)
            </h3>
            <p>
              Helt opak väv. Stoppar allt direkt ljus. Med vit eller ljus
              baksida reflekteras solvärmen dessutom tillbaka mot glaset —
              vilket märkbart sänker värmegenomsläppet sommartid. Mörk
              baksida har inte den effekten. Standardvalet för sovrum,
              barnrum, hemmakontor med videomöten och rum mot västersolen.
            </p>
            <h3 className="heading-section text-xl md:text-2xl text-ink mt-8 mb-3">
              Screen
            </h3>
            <p>
              Perforerad väv där öppningsgraden anges i procent. Lägre
              siffra (1–3 %) ger mer värme- och bländskydd och mindre
              utsikt; högre siffra (5–10 %) ger genomsikt på dagen. Skärm­
              arbetsplatser med fönster i synfältet drar mest nytta av
              screen — bländningen tas bort utan att rummet mörkläggs.
            </p>
            <h3 className="heading-section text-xl md:text-2xl text-ink mt-8 mb-3">
              Ljusfiltrerande
            </h3>
            <p>
              Slutet vävmönster som dämpar direktljuset utan att stoppa
              dagsljuset. Ger ett mjukt, jämnt ljus i rummet. Vanlig i
              vardagsrum och kök där man vill behålla ljuskvaliteten utan
              direktstrålarna mot soffan eller bordet.
            </p>
          </Section>

          <Section heading="Montering — fyra alternativ">
            <p>
              Rullgardin kan monteras i fönsterkarm, utanpå karm, på vägg
              eller i tak. Beslagstypen påverkar utseendet:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="font-medium text-ink">
                  Gavelkonsol
                </strong>{" "}
                — fästen sitter i ytterkant och vävrullen syns. Det enklaste
                och mest prisvärda alternativet.
              </li>
              <li>
                <strong className="font-medium text-ink">
                  Monteringslist
                </strong>{" "}
                — list bakom beslagen så att fästena kan placeras fritt
                längs hela bredden.
              </li>
              <li>
                <strong className="font-medium text-ink">Kassett</strong> —
                rullen kapslas in helt, vilket skyddar väven och ger ett
                renare utseende. Tänk på att kassetten inte i sig minskar
                ljusläckage vid sidor.
              </li>
              <li>
                <strong className="font-medium text-ink">Täcklist</strong> —
                slät list framtill som döljer rullen utan att kapsla in
                den helt.
              </li>
            </ul>
            <p>
              För bästa mörkläggning lägger vi till sidoskenor som tar bort
              sidoljuset, eller ökar överlappningen utanför karmen.
            </p>
          </Section>

          <Section heading="Manuell eller motor">
            <p>
              <strong className="font-medium text-ink">
                Kulkedja
              </strong>{" "}
              är standard — kort, smal och enkel. Bra på enskilda fönster
              som inte styrs ofta.
            </p>
            <p>
              Motor finns i två familjer som båda fungerar med fjärrkontroll
              eller app:
            </p>
            <h3 className="heading-section text-xl md:text-2xl text-ink mt-8 mb-3">
              Motion
            </h3>
            <p>
              Bluetooth-app, fjärrkontroll och smart hem via en separat
              Wi-Fi-brygga (Alexa, Google Home, SmartThings). Finns både
              som batteridrift och som kabelbunden 230V — kabelvarianten
              används till de bredaste gardinerna upp till 450 cm där
              motorn behöver mer ström.
            </p>
            <h3 className="heading-section text-xl md:text-2xl text-ink mt-8 mb-3">
              Eve-Motion
            </h3>
            <p>
              Thread och Matter direkt — gardinen syns i Apple HomeKit,
              Google Home och Alexa utan extra brygga, så länge ni har en
              Thread Border Router i hemmet (Apple TV 4K, HomePod 2:a gen
              och nyare, Nest Hub 2:a gen, Amazon Echo 4:e gen). Enbart
              batteridrift.
            </p>
            <p>
              Båda familjerna har pull-funktion på batteridrift — ett mjukt
              ryck i underkanten startar rörelsen. Batteritiden ligger på
              cirka 8 månader och USB-laddning tar omkring 6 timmar.
            </p>
          </Section>

          <Section heading="Pris och vad som påverkar det">
            <p>
              De största prisfaktorerna är fönsterbredden (storleken på
              röret), vävvalet, monteringstyp (öppen kontra kassett) och
              eventuell motor. Sidoskenor för mörkläggning och kabeldraget
              vid 230V tillkommer som tillval. Vi specificerar varje del i
              offerten — ingen klumpsumma.
            </p>
          </Section>

          <Section heading="Skötsel">
            <p>
              Slät vävyta är det enklaste underhållet av alla invändiga
              solskydd. Damma av med dammvippa eller torka av med en lätt
              fuktig trasa. Ingen tvättmaskin — vävens beläggning tål inte
              blötläggning. Punktrengöring fungerar på fläckar.
            </p>
          </Section>

          <Section heading="Andra invändiga lösningar">
            <p>
              Behöver ni tvåvägsjustering eller isolering — där rullgardin
              inte räcker — är{" "}
              <Link
                href="/plissegardiner-malmo/"
                className="text-ink underline decoration-ink/30 hover:decoration-ink"
              >
                plissé
              </Link>{" "}
              ofta bättre. För stegvis ljusstyrning är{" "}
              <Link
                href="/persienner-malmo/"
                className="text-ink underline decoration-ink/30 hover:decoration-ink"
              >
                persienner
              </Link>{" "}
              ett alternativ, och för fönster över 4,5 meter finns{" "}
              <Link
                href="/lamellgardiner-malmo/"
                className="text-ink underline decoration-ink/30 hover:decoration-ink"
              >
                lamellgardiner
              </Link>
              . För maximal värmereduktion vid stora glaspartier mot väster
              är kombinationen rullgardin invändigt och{" "}
              <Link
                href="/zip-screen-malmo/"
                className="text-ink underline decoration-ink/30 hover:decoration-ink"
              >
                zip screen
              </Link>{" "}
              utvändigt mest effektiv.
            </p>
          </Section>

          <div className="mt-20">
            <Eyebrow>Vanliga frågor</Eyebrow>
            <h2 className="heading-section text-3xl md:text-4xl mt-5 text-ink">
              Frågor om rullgardiner.
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
          eyebrow="Rullgardiner Malmö"
          heading="Boka kostnadsfritt hembesök för rullgardiner."
          body="Vi mäter på plats, visar vävprover och föreslår motorisering där det gör skillnad. Hembesök, mätning och offert är gratis — gäller hela södra Skåne."
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
