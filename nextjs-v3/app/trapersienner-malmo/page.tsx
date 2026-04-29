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

const PAGE_URL = `${SITE_URL}/trapersienner-malmo/`;
const PAGE_TITLE =
  "Träpersienner Malmö | Måttanpassade trä- och bambupersienner";
const PAGE_DESC =
  "Träpersienner i Malmö — basswood och bambu, lamellbredder från 25 till 50 mm. Premiumkänsla och naturmaterial för sekelskifte och funkis. Rådgivning och montering på plats.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: PAGE_URL },
};

const faqs = [
  {
    question: "Kan träpersienner sitta i kök eller badrum?",
    answer:
      "Träpersienner är inte ett självklart val i fuktutrymmen — basswood och bambu är naturmaterial som kan svälla, krympa eller missfärgas vid hög luftfuktighet. För kök kan det fungera om ventilationen är god och persiennen sitter en bit från ångkällan. I badrum rekommenderar vi istället aluminiumpersienner eller plissé med fukttålig väv.",
  },
  {
    question: "Är träpersienner tyngre än aluminium?",
    answer:
      "Ja. Träpersienner väger märkbart mer än aluminiumpersienner i samma storlek. Det märks när persiennen dras upp eller ner — och innebär också att infästningen behöver vara robust. På breda partier rekommenderar vi motorisering, dels för att slippa tyngd vid manuell drift, dels för att ge en jämnare uppdragning.",
  },
  {
    question: "Hur underhåller jag träpersienner?",
    answer:
      "Damma av lamellerna med en mjuk dammvippa eller en torr mikrofiberduk. Undvik blött damning — överskott av vatten kan förändra träets ton. Vid behov kan en lätt fuktig duk användas följt av en torr trasa. Bambu och basswood får över tid en naturligt patinerad ton, vilket många uppskattar.",
  },
  {
    question: "Hur lång leveranstid har träpersienner?",
    answer:
      "Standardstorlekar i lagerförda kulörer kan ofta levereras inom 2–3 veckor. Specialmått, specialfärger och bambu med specifik bandfärg har normalt 4–6 veckors leveranstid eftersom de tillverkas mot beställning. Vi anger en tydlig tidsplan i offerten.",
  },
];

export default function TrapersiennerMalmoPage() {
  const jsonLd = graph(
    breadcrumbSchema([
      { name: "Start", url: `${SITE_URL}/` },
      { name: "Träpersienner Malmö", url: PAGE_URL },
    ]),
    servicePageSchema("Träpersienner Malmö", PAGE_URL, PAGE_DESC),
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
              { name: "Träpersienner Malmö", url: PAGE_URL },
            ]}
          />

          <div className="mt-10 mb-10">
            <Eyebrow>Invändigt solskydd</Eyebrow>
            <h1 className="heading-display text-5xl md:text-7xl mt-6 text-ink">
              Träpersienner i Malmö
            </h1>
            <Divider className="mt-7" />
          </div>

          <AnswerBox>
            Träpersienner är persienner med lameller i naturmaterial —
            oftast basswood eller bambu. De ger en mjukare lyster än
            aluminium och blir snabbt en del av rummets karaktär.
            Bellevue Solskydd levererar måttanpassade träpersienner i
            Malmö för sekelskiftesfastigheter, funkishus och alla
            bostäder där materialvalet ska synas.
          </AnswerBox>

          <Section heading="När passar träpersienner?">
            <p>
              I Malmö finns ett bestånd av sekelskiftesfastigheter och
              funkishus där fönstren själva har en tydlig karaktär. På
              sådana fönster fungerar träpersienner ofta bättre än
              moderna alternativ — träets ton har en värme som matchar
              ekparkett, kassettak och mörkbetsade lister.
            </p>
            <p>
              I funkishusen från 30- och 40-talet, vanliga i Slottsstaden
              och delar av Limhamn, är träpersienner i en ljus basswood-ton
              ett klassiskt val. Lamellerna ger ett mjukt strecksvar i
              ljuset och passar tidens estetik.
            </p>
            <p>
              I representativa rum — vardagsrum, kontor, mottagningar —
              är träpersienner ett vanligt val även i moderna lägenheter.
              De höjer rummets ton utan att dominera.
            </p>
          </Section>

          <Section heading="Vilka typer finns?">
            <p>
              <strong className="font-medium text-ink">Basswood</strong>{" "}
              är ett ljust lövträ med jämn yta och låg vikt — det
              vanligaste materialet för träpersienner. Tar färg jämnt och
              kan både betsas och målas. Finns från ljust naturträ till
              mörkt valnötsbrunt.
            </p>
            <p>
              <strong className="font-medium text-ink">Bambu</strong>{" "}
              har en synlig ådring och något varmare ton än basswood.
              Snabbväxande och därmed mer hållbart resursmässigt. Vissa
              bambusorter har också en lite mer "rustik" textur som passar
              skandinavisk inredning.
            </p>
            <p>
              <strong className="font-medium text-ink">Lamellbredder</strong>{" "}
              är typiskt 25, 35 eller 50 mm. Smalare lameller (25 mm) ger
              ett finare uttryck och passar mindre fönster. 35 mm är den
              vanligaste bredden — bra balans mellan estetik och
              ljuskontroll. 50 mm ger en lugn yta och passar stora
              fönster och representativa rum.
            </p>
            <p>
              Bandet som lamellerna hänger på finns i kontrastfärg eller
              tonad nyans — det är ett underskattat designval som
              påverkar hur persiennen läser sig i rummet.
            </p>
          </Section>

          <Section heading="Vad påverkar priset?">
            <p>
              Material står för mycket — basswood är prismässigt
              mellannivå, bambu och vissa specialträslag ligger högre.
              Lamellbredd påverkar mindre men har ändå en effekt: bredare
              lameller är dyrare per styck men det går åt färre.
            </p>
            <p>
              Storleken styr resten av kalkylen. Manuell snöre/vred är
              standard på små och mellanstora storlekar. På breda partier
              och tunga material rekommenderas motor — både för
              användarvänlighet och för att skona persiennens mekanik.
            </p>
            <p>
              Specialfärg, exakt mot RAL eller en anpassad bets, är ett
              tillval. Vi visar färgprover på plats så att valet kan
              göras mot rummets befintliga ton.
            </p>
          </Section>

          <Section heading="Så går rådgivning och montering till">
            <ol className="space-y-5 list-none">
              <Step
                index="01"
                title="Hembesök"
                body="Vi mäter fönstren, går igenom rummens karaktär och föreslår material och lamellbredd som matchar interiören."
              />
              <Step
                index="02"
                title="Material- och färgprover"
                body="Vi visar fysiska prover på basswood, bambu och olika kulörer mot rummets ljus och inredning."
              />
              <Step
                index="03"
                title="Specificerad offert"
                body="Pris per fönster med material, lamellbredd, styrning och eventuell motor."
              />
              <Step
                index="04"
                title="Montering"
                body="Våra montörer infäster persienner mellan karm och båge eller utanpåliggande, och kontrollerar drift och balans."
              />
            </ol>
          </Section>

          <div className="mt-20">
            <Eyebrow>Vanliga frågor</Eyebrow>
            <h2 className="heading-section text-3xl md:text-4xl mt-5 text-ink">
              Frågor om träpersienner.
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
          eyebrow="Träpersienner Malmö"
          heading="Boka kostnadsfri rådgivning för träpersienner."
          body="Vi mäter på plats, visar fysiska prover på basswood och bambu och föreslår material och lamellbredd som matchar rummets karaktär. Hembesök och offert är kostnadsfria."
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
