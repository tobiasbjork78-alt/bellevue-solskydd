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

const PAGE_URL = `${SITE_URL}/markiser-malmo/`;
const PAGE_TITLE =
  "Markiser Malmö | Terrass-, fönster- och balkongmarkiser med montering";
const PAGE_DESC =
  "Markiser i Malmö för terrass, fasad och balkong. Lokal rådgivning, måttagning och montering anpassad för västersol och vind från Öresund.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: PAGE_URL },
};

const faqs = [
  {
    question: "Hur tål markiser blåsten i Malmö?",
    answer:
      "Vid kuststäder som Malmö är vinden från Öresund en faktor att räkna med. Utfällbara markiser klassas i vindklass 0–3 enligt EN 13561. Vi väljer markisarm, fästen och eventuell vindsensor utifrån fasadens läge och hur exponerat partiet är. På utsatta lägen rekommenderar vi automatisk vindsensor som drar in markisen vid en inställd vindstyrka.",
  },
  {
    question: "Är det värt att motorisera markisen?",
    answer:
      "På allt utom de minsta fönstermarkiserna är motor det vi rekommenderar. Det förlänger livslängden eftersom markisen alltid dras in jämnt och hela vägen, och det möjliggör vind- och solautomatik. Motoriserade markiser kan integreras med smart hem-system för tidsstyrning.",
  },
  {
    question: "Hur underhåller jag markisen?",
    answer:
      "En modern markisväv är behandlad mot smuts och mögel. Spola av väven en gång per år, helst i utvikt läge så den får torka. Mekaniken behöver i regel ingen smörjning. Vid säsongsslut, dra alltid in markisen torr — fukt under upprullad väv är den vanligaste orsaken till problem.",
  },
  {
    question: "Behöver jag tillstånd från bostadsrättsföreningen?",
    answer:
      "Ja, en utvändig markis räknas som fasadingrepp och kräver styrelsens godkännande i de flesta föreningar. Vi har vana att ta fram underlag — modell, färg, infästning och bilder — som styrelsen kan utgå från. Bygglov krävs sällan i Malmö för standardmarkiser, men kontrollera alltid fastighetens detaljplan.",
  },
  {
    question: "Vilken leveranstid har ni?",
    answer:
      "En standardmarkis i lagerförd färg kan ofta monteras inom 2–3 veckor. Måttanpassade markiser med specialväv eller kassettmodell ligger på 4–6 veckor. Vi anger en konkret tidsplan i offerten och bokar montering så snart väven är inkommen.",
  },
];

export default function MarkiserMalmoPage() {
  const jsonLd = graph(
    breadcrumbSchema([
      { name: "Start", url: `${SITE_URL}/` },
      { name: "Markiser Malmö", url: PAGE_URL },
    ]),
    servicePageSchema("Markiser Malmö", PAGE_URL, PAGE_DESC),
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
              { name: "Markiser Malmö", url: PAGE_URL },
            ]}
          />

          <div className="mt-10 mb-10">
            <Eyebrow>Utvändigt solskydd</Eyebrow>
            <h1 className="heading-display text-5xl md:text-7xl mt-6 text-ink">
              Markiser i Malmö
            </h1>
            <Divider className="mt-7" />
          </div>

          <AnswerBox>
            En markis monteras utvändigt och stoppar solen innan värmen når
            fönstret. Bellevue Solskydd hjälper villaägare, bostadsrätter
            och företag i Malmö med terrassmarkiser, fönstermarkiser och
            balkongmarkiser — anpassade för västersol och vinden från
            Öresund. Vi sköter rådgivning, måttagning och montering på plats.
          </AnswerBox>

          <Section heading="Markiser i kustklimat">
            <p>
              Malmö ligger så pass nära havet att vinden alltid är en del av
              ekvationen. På fasader som vetter mot Öresund — i Limhamn,
              Västra Hamnen och Bellevue — slår vinden direkt mot huset, och
              på söder- och västerlägen blir eftermiddagssolen kraftig.
            </p>
            <p>
              Det betyder att en markis inte bara ska skydda mot solen utan
              också tåla vinden. Vi väljer arm, fäste och styrning utifrån
              hur utsatt fasaden är. På utsatta lägen ingår vindsensor som
              standard — markisen rullas in automatiskt om det blåser för
              hårt.
            </p>
          </Section>

          <Section heading="Vilka typer av markiser finns?">
            <p>
              <strong className="font-medium text-ink">Terrassmarkis</strong>{" "}
              är den klassiska utfällbara markisen. Den fästs i fasad eller
              tak ovanför uteplatsen och fälls ut horisontellt. Modeller med
              kassett skyddar väven när markisen är indragen och förlänger
              livslängden i kustklimat.
            </p>
            <p>
              <strong className="font-medium text-ink">Fönstermarkis</strong>{" "}
              monteras direkt över fönstret och fälls ut snett ner. Den
              skuggar fönstret utan att hindra utsikten och är vanlig på
              fasader där terrassmarkis inte ryms.
            </p>
            <p>
              <strong className="font-medium text-ink">Korgmarkis</strong>{" "}
              har en avrundad, halvcirkelformad form som påminner om
              klassiska butiksmarkiser. Vanlig vid entrédörrar, butiker
              och i stadsmiljö.
            </p>
            <p>
              <strong className="font-medium text-ink">Balkongmarkis</strong>{" "}
              är en mindre variant som monteras på balkongräcket eller
              ovanför, och ger lä och skugga utan stort åtkomstbehov i
              fasaden.
            </p>
          </Section>

          <Section heading="Vad påverkar priset?">
            <p>
              Storlek är den största enskilda prisfaktorn — bredd och utfall
              styr både vävyta och kraft i armen. Därefter kommer
              motorisering: en manuell markis är billigare i inköp, men
              motorlösningen återbetalar sig genom enkelhet, livslängd och
              möjlighet till vind-/solsensor.
            </p>
            <p>
              Vävkvaliteten spelar stor roll i kustklimat. Akrylvävar med UV-
              och smutsbehandling håller färg och form längre än billiga
              alternativ. Tillval som kassett, LED-belysning och
              hemautomation tillkommer. Vi specificerar varje del i offerten
              så det är tydligt vad som kostar vad.
            </p>
          </Section>

          <Section heading="Så går rådgivning och montering till">
            <ol className="space-y-5 list-none">
              <Step
                index="01"
                title="Hembesök"
                body="Vi kommer hem till er i Malmö, mäter fasaden och går igenom vindexponering, väderstreck och hur uteplatsen används."
              />
              <Step
                index="02"
                title="Förslag och vävprover"
                body="Vi visar vävprover i dagsljus mot fasaden, så ni ser hur färgerna fungerar i verklig miljö."
              />
              <Step
                index="03"
                title="Specificerad offert"
                body="Pris per markis med modell, väv, motor och eventuell sensor — inga klumpsummor."
              />
              <Step
                index="04"
                title="Montering"
                body="Våra montörer infäster markisen säkert i fasad eller tak, kalibrerar motor och sensor, och städar efter sig."
              />
            </ol>
          </Section>

          <div className="mt-20">
            <Eyebrow>Vanliga frågor</Eyebrow>
            <h2 className="heading-section text-3xl md:text-4xl mt-5 text-ink">
              Frågor om markiser.
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
          eyebrow="Markiser Malmö"
          heading="Boka kostnadsfri rådgivning för markiser."
          body="Vi mäter fasaden, går igenom vind- och solförhållanden och föreslår en markislösning som matchar både hus och klimat. Hembesök och offert är kostnadsfria."
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
