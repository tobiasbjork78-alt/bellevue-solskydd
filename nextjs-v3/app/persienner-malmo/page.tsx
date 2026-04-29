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

const PAGE_URL = `${SITE_URL}/persienner-malmo/`;
const PAGE_TITLE = "Persienner Malmö | Måttanpassade persienner med montering";
const PAGE_DESC =
  "Persienner i Malmö för hem och företag. Rådgivning, måttagning och montering av lokala solskyddsexperter.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: PAGE_URL },
};

const faqs = [
  {
    question: "Vad kostar persienner i Malmö?",
    answer:
      "Priset beror på storlek, lamellbredd, material och om persiennen är manuell eller motoriserad. Ett enklare aluminiumset till ett vanligt fönster ligger ofta i lägre prissegment, medan trälamell och motorisering kostar mer. Vi mäter på plats utan kostnad och lämnar en fast offert innan något beställs.",
  },
  {
    question: "Vilka persienner passar bäst i sovrum?",
    answer:
      "I sovrum är det vanligt att välja persienner med tätare lamell eller en kombination med plissé eller mörkläggande rullgardin. Aluminiumpersienner reflekterar värme bra på söderläge, medan trä- och bambulameller ger ett mjukare ljus och mer textur.",
  },
  {
    question: "Kan ni montera i lägenheter och bostadsrätter?",
    answer:
      "Ja. Vi monterar i både villor, lägenheter och företagslokaler i Malmö, Lund, Lomma, Burlöv, Staffanstorp, Vellinge, Kävlinge, Trelleborg, Skurup, Eslöv och Svedala. För bostadsrätt kontrollerar vi att infästning sker på ett sätt som följer föreningens stadgar.",
  },
  {
    question: "Hur lång leveranstid är det på måttanpassade persienner?",
    answer:
      "Standardpersienner i lager kan oftast monteras inom någon vecka. Måttanpassade persienner med specialfärg eller motor har lite längre leveranstid. Vi anger alltid en konkret tidsplan i offerten.",
  },
  {
    question: "Vad är skillnaden mellan persienner och plissé?",
    answer:
      "Persienner har horisontella lameller som vinklas för att styra ljuset i steg. Plissé är en plisserad tygduk som dras ihop som ett dragspel och ger ett mjukare uttryck samt bättre isolering. Persienner styr ljuset mer exakt; plissé släpper igenom ett jämnare ljus.",
  },
];

export default function PersiennerMalmoPage() {
  const jsonLd = graph(
    breadcrumbSchema([
      { name: "Start", url: `${SITE_URL}/` },
      { name: "Persienner Malmö", url: PAGE_URL },
    ]),
    servicePageSchema("Persienner Malmö", PAGE_URL, PAGE_DESC),
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
              { name: "Persienner Malmö", url: PAGE_URL },
            ]}
          />

          <div className="mt-10 mb-10">
            <Eyebrow>Invändigt solskydd</Eyebrow>
            <h1 className="heading-display text-5xl md:text-7xl mt-6 text-ink">
              Persienner i Malmö
            </h1>
            <Divider className="mt-7" />
          </div>

          <AnswerBox>
            Persienner är ett invändigt solskydd där horisontella lameller
            kan vinklas för att styra ljuset i steg — från fullt öppet till
            helt stängt. Bellevue Solskydd hjälper villaägare, bostadsrätter
            och företag i Malmö med rådgivning, måttagning och montering av
            måttanpassade persienner i aluminium, trä och bambu.
          </AnswerBox>

          <Section heading="När passar persienner?">
            <p>
              Persienner är ett av de mest flexibla solskydden för rum där
              ljuset varierar under dagen. På morgonen kan lamellerna vara
              helt öppna för att släppa in dagsljuset, vid middagstid vinklas
              de för att skydda mot direkt sol och värme, och på kvällen
              stängs de helt för insynsskydd.
            </p>
            <p>
              I Malmö, där fasader ofta vetter mot söder eller väster och
              eftermiddagssolen blir stark, är persienner en praktisk
              lösning för vardagsrum, kontor och kök. För sovrum kombineras
              de gärna med plissé eller en mörkläggande rullgardin.
            </p>
          </Section>

          <Section heading="Vilka typer finns?">
            <p>
              <strong className="font-medium text-ink">Aluminiumpersienner</strong>{" "}
              är slitstarka, lätta att rengöra och fungerar bra i kök och
              badrum. Lamellerna finns i flera bredder — smalare lameller
              ger ett finare uttryck, bredare ger en lugnare yta.
            </p>
            <p>
              <strong className="font-medium text-ink">Träpersienner</strong>{" "}
              ger en varmare ton och passar väl i vardagsrum och
              representativa miljöer. Trälameller har naturlig variation och
              är vanligast i breddmått 25–50 mm.
            </p>
            <p>
              <strong className="font-medium text-ink">Bambupersienner</strong>{" "}
              är ett lättare alternativ med samma estetiska kvalitet som
              trä men med mindre vikt — bra för större fönsterpartier.
            </p>
            <p>
              Persienner kan styras manuellt med snöre och vred eller
              motoriseras för fjärrstyrning, smart hem och tidsstyrning.
            </p>
          </Section>

          <Section heading="Vad påverkar priset?">
            <p>
              Priset på en persienn styrs i huvudsak av fönstrets storlek,
              vilken lamell som väljs, om persiennen är manuell eller
              motoriserad och om den ska sitta utanpåliggande eller mellan
              karm och båge. Specialfärger, perforerade lameller och
              integration med smart hem-system tillkommer som tillval.
            </p>
            <p>
              Vi lämnar alltid en specificerad offert efter hembesök, så
              att du ser exakt vad varje fönster kostar. Det går också att
              börja med ett rum och bygga ut succesivt.
            </p>
          </Section>

          <Section heading="Så går rådgivning och montering till">
            <ol className="space-y-5 list-none counter-reset-step">
              <Step
                index="01"
                title="Kontakta oss"
                body="Du beskriver vad ni vill lösa — bländning, värme, insyn, mörkläggning — och vi bokar in ett kostnadsfritt hembesök."
              />
              <Step
                index="02"
                title="Hembesök och måttagning"
                body="Vi mäter alla fönster på plats, går igenom lamell, färg, manuell eller motoriserad styrning, och föreslår en lösning."
              />
              <Step
                index="03"
                title="Offert och beställning"
                body="Du får en specificerad offert per fönster. När den är godkänd beställs persiennerna i mått."
              />
              <Step
                index="04"
                title="Montering"
                body="Våra montörer monterar på överenskommen tid, kontrollerar funktionen och städar efter sig."
              />
            </ol>
          </Section>

          <div className="mt-20">
            <Eyebrow>Vanliga frågor</Eyebrow>
            <h2 className="heading-section text-3xl md:text-4xl mt-5 text-ink">
              Frågor om persienner.
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
          eyebrow="Persienner Malmö"
          heading="Boka kostnadsfri rådgivning för persienner."
          body="Vi mäter på plats, visar prover på lameller och föreslår en lösning som passar fönstren. Du betalar inget för hembesöket eller offerten."
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
