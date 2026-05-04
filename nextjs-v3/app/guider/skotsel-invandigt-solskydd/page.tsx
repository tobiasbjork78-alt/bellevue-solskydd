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

const PAGE_URL = `${SITE_URL}/guider/skotsel-invandigt-solskydd/`;
const PAGE_TITLE =
  "Skötsel av invändigt solskydd — så håller det längre | Bellevue Solskydd";
const PAGE_DESC =
  "Praktisk skötsel av rullgardiner, plisségardiner, persienner och lamellgardiner. Vad ni får göra, vad ni absolut ska undvika, och hur ni laddar batteriet på motoriserad rullgardin.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: PAGE_URL },
};

const faqs = [
  {
    question: "Får man tvätta vävar i tvättmaskin?",
    answer:
      "Nej. Inga av sortimentets vävar är tvättmaskinsavsedda. Plisséveckningen är permanent men inte tvättmaskinsbeständig — det riskerar att deformera. Rullgardinens beläggning skadas av blötläggning. Lamellgardinens vävar har viktfördelning som rubbas av tvätt. Punktrengöring med fuktig svamp och milt rengöringsmedel är det som fungerar i alla fall.",
  },
  {
    question: "Hur ofta bör jag damma av lamellerna?",
    answer:
      "Varannan vecka räcker normalt — då hinner inte damm sätta sig. I dammigare miljöer (kontor, lokaler nära byggarbete, bostäder med husdjur) oftare. Lamellerna i mellanglaspersienn behöver inte dammas alls — de sitter inkapslade i fönsterglaset.",
  },
  {
    question: "Hur laddar man batteriet på motoriserad rullgardin?",
    answer:
      "Via USB-kabel. Laddaren följer med vid leverans. Laddtiden är cirka 6 timmar för full laddning, och en full laddning räcker normalt 8 månader. Batteriet sitter ofta åtkomligt i slutet av rullen så ni inte behöver ta ned hela rullgardinen för laddning.",
  },
  {
    question: "Vad gör jag om en lamell på lamellgardinen går sönder?",
    answer:
      "Hör av er — vi kan i regel byta enskilda lameller. Varje lamell hänger i sin egen klädnypa under skenan och kan lyftas av eller ersättas separat. Det är hela poängen med konstruktionen. Ni behöver inte byta hela installationen för att en lamell skadats.",
  },
  {
    question: "Tar dammsugare bort fläckar eller behöver jag använda fuktig trasa?",
    answer:
      "Damm — dammsugare på låg effekt eller dammvippa. Fett, fingeravtryck och fläckar — fuktig trasa eller svamp med milt diskmedel. På plissé och rullgardin: alltid lätt fuktig, aldrig blöt. På aluminiumlameller: tål mer fukt eftersom aluminium varken absorberar eller deformeras.",
  },
];

export default function SkotselGuide() {
  const jsonLd = graph(
    breadcrumbSchema([
      { name: "Start", url: `${SITE_URL}/` },
      { name: "Guider", url: `${SITE_URL}/guider/` },
      { name: "Skötsel av invändigt solskydd", url: PAGE_URL },
    ]),
    articleSchema({
      url: PAGE_URL,
      headline: "Skötsel av invändigt solskydd — så håller det längre",
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
            { name: "Skötsel av invändigt solskydd", url: PAGE_URL },
          ]}
        />

        <header className="mt-10 mb-10">
          <Eyebrow>Tema</Eyebrow>
          <h1 className="heading-display text-5xl md:text-7xl mt-6 text-ink">
            Skötsel av invändigt solskydd
          </h1>
          <Divider className="mt-7" />
        </header>

        <AnswerBox>
          Invändigt solskydd kräver minimalt underhåll. En lätt avdamning
          varannan vecka och punktrengöring vid behov är allt som behövs
          för de allra flesta produkter. Den största risken för skada är
          felaktig rengöring — starka rengöringsmedel, blötläggning eller
          tvättmaskin. Den här guiden går igenom vad som faktiskt
          fungerar, produkt för produkt.
        </AnswerBox>

        <Section heading="Plisségardin">
          <p>
            <Link
              href="/plissegardiner-malmo/"
              className="text-ink underline decoration-ink/30 hover:decoration-ink"
            >
              Plissé
            </Link>{" "}
            har veckad väv som faktiskt samlar mindre damm än släta ytor —
            dammet hamnar i veckens kanter och lossnar lätt vid avdammning.
          </p>
          <p>
            <strong className="font-medium text-ink">Gör så här:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Damma av med dammvippa eller dammsugare på låg effekt</li>
            <li>Punktrengör fläckar med fuktig svamp och milt diskmedel</li>
            <li>Låt alltid väven torka fullt utdragen innan ihopfällning</li>
          </ul>
          <p>
            <strong className="font-medium text-ink">Undvik:</strong>{" "}
            Tvättmaskin, blötläggning, starka rengöringsmedel, hård
            pressning av vecken.
          </p>
        </Section>

        <Section heading="Rullgardin">
          <p>
            <Link
              href="/rullgardiner-malmo/"
              className="text-ink underline decoration-ink/30 hover:decoration-ink"
            >
              Rullgardiner
            </Link>{" "}
            har slät vävyta — det enklaste underhållet av alla invändiga
            solskydd.
          </p>
          <p>
            <strong className="font-medium text-ink">Gör så här:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Torka av med lätt fuktig trasa — väven kan vara nedrullad
              och tas i sin position
            </li>
            <li>Damma av vid behov</li>
          </ul>
          <p>
            <strong className="font-medium text-ink">Undvik:</strong>{" "}
            Tvättmaskin, blötläggning, starka rengöringsmedel.
          </p>
          <p>
            <strong className="font-medium text-ink">Motorvård.</strong>{" "}
            Batteridriven motor laddas via USB. Laddtid cirka 6 timmar.
            Vid normal användning räcker laddningen cirka 8 månader. Är
            laddningen kortare än så — kontakta oss, det kan tyda på fel
            i motorn eller på en gardin som är för bred för
            batterimodellen.
          </p>
        </Section>

        <Section heading="Persienn">
          <p>
            <Link
              href="/persienner-malmo/"
              className="text-ink underline decoration-ink/30 hover:decoration-ink"
            >
              Aluminiumpersienner
            </Link>{" "}
            tål mer än de andra produkterna eftersom aluminium varken
            absorberar fukt eller deformeras.
          </p>
          <p>
            <strong className="font-medium text-ink">Gör så här:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Stäng lamellerna helt och damma över med mjuk trasa eller
              plym — då nås hela ytan i ett svep
            </li>
            <li>
              Aluminium tål lätt fuktig trasa om det blivit fett eller
              fingeravtryck
            </li>
            <li>
              Mellanglaspersienn behöver ingen rengöring alls — lamellerna
              sitter inkapslade i fönsterglaset
            </li>
          </ul>
          <p>
            <strong className="font-medium text-ink">Undvik:</strong>{" "}
            Att böja eller pressa lamellerna — aluminium återtar inte sin
            form. Hissa alltid med draglina, dra inte i lamellerna direkt.
          </p>
        </Section>

        <Section heading="Lamellgardin">
          <p>
            <Link
              href="/lamellgardiner-malmo/"
              className="text-ink underline decoration-ink/30 hover:decoration-ink"
            >
              Lamellgardiner
            </Link>{" "}
            har vertikala tyglameller där varje lamell kan hanteras
            separat.
          </p>
          <p>
            <strong className="font-medium text-ink">Gör så här:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Damma med mjuk trasa eller dammsugare på låg effekt — en
              lamell i taget
            </li>
            <li>Punktrengör fläckar med lätt fuktig trasa</li>
            <li>
              Vid behov — lyft av enskild lamell, hängd upp i full längd
              och låt torka innan den sätts tillbaka
            </li>
          </ul>
          <p>
            <strong className="font-medium text-ink">Undvik:</strong>{" "}
            Att dra lamellerna i sidled med handen — använd alltid snöret
            eller kedjan för dragning, kedjan eller staven för vridning.
            Pressa eller vrid inte mekanismen utöver dess normala
            rörelseomfång.
          </p>
          <p>
            <strong className="font-medium text-ink">
              Lamellbyte:
            </strong>{" "}
            Skadad enskild lamell kan i regel bytas ut separat. Ni behöver
            inte byta hela skenan eller hela lamellsetet.
          </p>
        </Section>

        <Section heading="Generella tips">
          <p>
            <strong className="font-medium text-ink">Regelbundenhet.</strong>{" "}
            En kort avdamning varannan vecka tar bort det mesta innan
            smutsen sätter sig. Det här är skillnaden mellan en gardin
            som ser ny ut efter fem år och en som inte gör det.
          </p>
          <p>
            <strong className="font-medium text-ink">
              Undvik alltid:
            </strong>{" "}
            Starka rengöringsmedel, blekmedel, lösningsmedel — alla kan
            skada vävens beläggning eller färg.
          </p>
          <p>
            <strong className="font-medium text-ink">Mekanismer.</strong>{" "}
            Använd alltid avsedd manövrering — draglina, kedja, motor
            eller magnetlist. Tvinga aldrig en mekanism som tar emot;
            kontakta oss istället så undersöker vi vad som hänt.
          </p>
          <p>
            <strong className="font-medium text-ink">
              Reservdelar och garanti.
            </strong>{" "}
            Vi tillhandahåller reservdelar och hanterar garantiärenden.
            Spara fakturan så vi snabbt kan slå upp installationen vid
            kontakt.
          </p>
        </Section>

        <div className="mt-20">
          <Eyebrow>Vanliga frågor</Eyebrow>
          <h2 className="heading-section text-3xl md:text-4xl mt-5 text-ink">
            Frågor om skötsel.
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
        eyebrow="Service och reservdelar"
        heading="Frågor om skötsel? Kontakta oss."
        body="Vi hjälper befintliga kunder med skötselråd, reservdelar och garantiärenden. Ring 040-18 11 00 eller mejla info@bellevuesolskydd.se så slår vi upp er installation."
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
