import type { Metadata } from "next";
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

const PAGE_URL = `${SITE_URL}/pergola-malmo/`;
const PAGE_TITLE =
  "Pergola Malmö | Lamellpergola och pergola med markisväv — montering";
const PAGE_DESC =
  "Pergola i Malmö — fast konstruktion med justerbara lameller eller markisväv. Skugga, regnskydd och förlängd uteplatssäsong i skånskt klimat. Rådgivning och montering på plats.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: PAGE_URL },
};

const faqs = [
  {
    question: "Krävs bygglov för pergola i Malmö?",
    answer:
      "Det beror på storlek, placering och om pergolan är fristående eller väggmonterad. På en- och tvåbostadshus krävs i regel inget bygglov för en pergola eftersom den inte är ett tak i bygglagens mening — men reglerna kan skilja sig om pergolan har tätt tak, om den ligger nära tomtgräns eller om fastigheten har detaljplan med särskilda begränsningar. Vi går igenom det med Malmö stads kontakt vid behov.",
  },
  {
    question: "Hur tål pergolan vinden i Malmö?",
    answer:
      "En kvalitetspergola är dimensionerad för svenskt kustklimat. Lamellpergolor i aluminium är robusta och deras lameller kan stängas så att vinden tar mindre fart genom konstruktionen. Vid utsatta lägen mot Öresund kompletterar vi gärna med vindstabila sidor — zip screen eller glasade sidoväggar — för att förlänga säsongen även i blåsigt väder.",
  },
  {
    question: "Kan pergolan användas på vintern?",
    answer:
      "Lamellpergolor håller året runt och deras tak är konstruerat för att klara snölast. Med belysning och eluttag inbyggt kan ni använda uteplatsen även under den mörka delen av året. Pergolor med markisväv tas vanligen in eller rullas in inför vintern för att skona tyget — men själva stommen står kvar.",
  },
  {
    question: "Hur underhålls en pergola?",
    answer:
      "Aluminiumprofiler kräver minimalt underhåll — spola av en eller två gånger per år så det inte ackumuleras pollen och saltavlagringar nära kusten. Mekaniken i lamellsystemet är kapslad och behöver i regel ingen smörjning. Vid markisvävspergola behandlas väven som en vanlig markis — håll den ren och dra in den torr.",
  },
  {
    question: "Vad är skillnaden mellan pergola och terrassmarkis?",
    answer:
      "En terrassmarkis är en utfällbar väv som monteras i fasad eller tak — kortlivad solskydd som dras in när det blåser eller regnar. En pergola är en fast konstruktion: stolpar, balkar och ett justerbart tak (lameller eller väv) som står året runt. Pergola är mer av en uteplatsutbyggnad; markis är mer av ett solskydd. Många kombinerar dem.",
  },
];

export default function PergolaMalmoPage() {
  const jsonLd = graph(
    breadcrumbSchema([
      { name: "Start", url: `${SITE_URL}/` },
      { name: "Pergola Malmö", url: PAGE_URL },
    ]),
    servicePageSchema("Pergola Malmö", PAGE_URL, PAGE_DESC),
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
              { name: "Pergola Malmö", url: PAGE_URL },
            ]}
          />

          <div className="mt-10 mb-10">
            <Eyebrow>Utvändigt solskydd</Eyebrow>
            <h1 className="heading-display text-5xl md:text-7xl mt-6 text-ink">
              Pergola i Malmö
            </h1>
            <Divider className="mt-7" />
          </div>

          <AnswerBox>
            En pergola är en fast konstruktion av stolpar och balkar med
            ett tak som antingen består av justerbara lameller eller en
            markisväv. Bellevue Solskydd levererar pergolor i Malmö som
            ger skugga, regnskydd och en plats att stanna ute på även när
            vädret växlar — designade för skånska förhållanden.
          </AnswerBox>

          <Section heading="Förläng uteplatssäsongen">
            <p>
              Skånskt sommarväder är fint men nyckfullt — sol, vind och
              snabba regnskurar kan avlösa varandra på en eftermiddag.
              En pergola gör det möjligt att stanna ute oavsett. Med ett
              justerbart tak väljer ni mellan öppen himmel, dämpad skugga
              eller helt slutet — på samma sätt som ni styr en persienn
              med vinklar.
            </p>
            <p>
              Det gör att uteplatsen blir användbar i april och september,
              inte bara i juli. Med belysning och en vindstabil sida kan
              den också användas på kvällar då temperaturen sjunker.
            </p>
          </Section>

          <Section heading="Vilka typer finns?">
            <p>
              <strong className="font-medium text-ink">Lamellpergola</strong>{" "}
              har ett tak av aluminium-lameller som vrids individuellt
              eller samlat. Lamellerna kan stå öppna för luft och ljus,
              vinklas för dämpad skugga eller stängas helt för regnskydd.
              Vatten leds bort i integrerade rännor.
            </p>
            <p>
              <strong className="font-medium text-ink">Pergola med markisväv</strong>{" "}
              har ett tak av rörlig duk som dras ut eller in över
              konstruktionen. Mer estetiskt mjuk och billigare än
              lamellpergola — men mindre robust mot regn och vind. Tas
              vanligen in på vintern.
            </p>
            <p>
              <strong className="font-medium text-ink">Fristående eller väggmonterad</strong>{" "}
              är en grundval för platsen. En väggmonterad pergola sparar
              en stolprad och blir en naturlig förlängning av huset. En
              fristående pergola står på egna ben och kan placeras längre
              bort i trädgården, t.ex. över en grillplats.
            </p>
          </Section>

          <Section heading="Vad påverkar priset?">
            <p>
              Storlek styr huvuddelen av priset — bredd, djup och
              takhöjd avgör hur mycket aluminium, lameller eller väv som
              krävs. Materialvalet påverkar därefter: pulverlackerad
              aluminium är standard, specialfärg och anodisering kostar
              mer.
            </p>
            <p>
              Tillval gör en stor skillnad: integrerad LED-belysning,
              värmare, vindstabila sidoväggar (zip screen, glas eller
              markisväv) och inbyggd ljudanläggning. Många bygger ut sin
              pergola etappvis — först grundkonstruktionen, sedan
              tillvalen som höjer användningen.
            </p>
          </Section>

          <Section heading="Så går rådgivning och montering till">
            <ol className="space-y-5 list-none">
              <Step
                index="01"
                title="Hembesök"
                body="Vi besöker uteplatsen, mäter och pratar igenom hur ni vill använda ytan — sittplats, matgrupp, hela året eller säsong."
              />
              <Step
                index="02"
                title="Förslag och materialval"
                body="Vi tar fram förslag på storlek, takkonstruktion, färg och eventuella tillval — sidoväggar, belysning, värmare."
              />
              <Step
                index="03"
                title="Specificerad offert"
                body="Pris för stomme, tak och tillval listade var för sig. Vi hjälper med bygglovskontakt om det krävs."
              />
              <Step
                index="04"
                title="Montering"
                body="Våra montörer reser stolpar, monterar takkonstruktionen, drar el till motor och belysning, och funktionstestar lamellsystemet."
              />
            </ol>
          </Section>

          <div className="mt-20">
            <Eyebrow>Vanliga frågor</Eyebrow>
            <h2 className="heading-section text-3xl md:text-4xl mt-5 text-ink">
              Frågor om pergola.
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
          eyebrow="Pergola Malmö"
          heading="Boka kostnadsfri rådgivning för pergola."
          body="Vi besöker uteplatsen, mäter ytan och föreslår en pergolalösning som passar tomten, väderstrecket och hur ni vill använda platsen. Hembesök och offert är kostnadsfria."
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

function Step({
  index,
  title,
  body,
}: {
  index: string;
  title: string;
  body: string;
}) {
  return (
    <li className="flex gap-5">
      <span className="font-display text-2xl text-brand-brass tracking-tight w-12 shrink-0">
        {index}
      </span>
      <div>
        <h3 className="font-medium text-ink mb-1">{title}</h3>
        <p className="body-copy text-ink-soft">{body}</p>
      </div>
    </li>
  );
}
