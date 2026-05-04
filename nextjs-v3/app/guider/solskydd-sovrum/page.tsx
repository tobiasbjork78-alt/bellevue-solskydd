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

const PAGE_URL = `${SITE_URL}/guider/solskydd-sovrum/`;
const PAGE_TITLE =
  "Solskydd för sovrum — så får ni det riktigt mörkt | Bellevue Solskydd";
const PAGE_DESC =
  "Mörkläggning i sovrummet utan ljusgloria runt karmen. Vi går igenom blackout-rullgardin, mörkläggande plissé och hur ni undviker att ljus läcker in vid kanterna. Rådgivning i Malmö.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: PAGE_URL },
};

const faqs = [
  {
    question: "Varför läcker det ljus runt sovrumsgardinen?",
    answer:
      "Eftersom invändiga solskydd alltid får en glipa mellan väv och karm. Hur tät passningen blir beror på monteringsmetod. Glasmonterad plissé med sidoskenor och rullgardin med U-formade sidoskenor kommer närmast hundra procent — men en helt ljustät invändig lösning finns inte. Vill ni ha absolut mörker krävs sidoskenor i kombination med utvändig avskärmning.",
  },
  {
    question: "Kan man kombinera två lösningar i samma sovrumsfönster?",
    answer:
      "Ja, det är vanligare än man tror. Vi installerar ofta blackout-rullgardin på framsidan av karmen plus en mörkläggande plissé glasmonterad på rutan — den senare tätar ljusspringan, den förra ger snyggare framsida och möjlighet till motor. Det är dubbelt så dyrt men ger dubbelt så mycket täthet.",
  },
  {
    question: "Är motoriserad sovrumsgardin verkligen värt det?",
    answer:
      "På fönster ni styr morgon och kväll dagligen — ja. Tidsstyrd uppveckling sju på morgonen är en av de funktioner som faktiskt används. Plus att ni kan stänga rullgardinen från sängen utan att gå upp. På ett enskilt sovrumsfönster ni styr två gånger per dygn är det nästan alltid värt prispåslaget jämfört med att gå till fönstret två gånger om dygnet i flera år framöver.",
  },
  {
    question: "Vilken vävtyp ger mest mörker?",
    answer:
      "På rullgardin: blackout med vit baksida (vit reflekterar dessutom solvärme). På plissé: mörkläggande isolerväv med aluminiumkärna. Båda stoppar i princip allt direktljus genom väven — det som skiljer är hur väven hanterar kanterna och om ni vill ha samtidig isolering.",
  },
  {
    question: "Hur långt ut från karmen ska blackouten sticka för bästa täthet?",
    answer:
      "Minst 5 cm per sida om rullgardinen monteras utanpå karmen utan sidoskenor. Mer är bättre — vi rekommenderar 7–10 cm där det är möjligt. Med sidoskenor räcker det att de täcker karmens sidor; då blir tätheten betydligt bättre även utan extra överhäng.",
  },
];

export default function SolskyddSovrumGuide() {
  const jsonLd = graph(
    breadcrumbSchema([
      { name: "Start", url: `${SITE_URL}/` },
      { name: "Guider", url: `${SITE_URL}/guider/` },
      { name: "Solskydd för sovrum", url: PAGE_URL },
    ]),
    articleSchema({
      url: PAGE_URL,
      headline: "Solskydd för sovrum — så får ni det riktigt mörkt",
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
            { name: "Solskydd för sovrum", url: PAGE_URL },
          ]}
        />

        <header className="mt-10 mb-10">
          <Eyebrow>Tema</Eyebrow>
          <h1 className="heading-display text-5xl md:text-7xl mt-6 text-ink">
            Solskydd för sovrum
          </h1>
          <Divider className="mt-7" />
        </header>

        <AnswerBox>
          Mörkläggning i sovrummet löser den skånska sommarens tidiga ljus
          och vintermånadernas mörka morgnar — om gardinen är vald för
          uppgiften. Två produkter dominerar i sovrumssegmentet: rullgardin
          med blackout-väv och plissé med mörkläggande isolerväv. Båda
          fungerar; valet handlar om motor, isolering och hur tätt ni vill
          ha kanterna.
        </AnswerBox>

        <Section heading="Sommarmorgonen vid Öresund">
          <p>
            Skåne ligger så långt söderut att sommardagen är längre än man
            tror — men inte så långt söderut att morgonljuset hinner
            mjukna innan klockan fyra. Resultatet är ett sovrum som blir
            ljust två-tre timmar innan ni vill vakna, vilket både
            försämrar sömnkvaliteten och stör barn som måste tillbaka till
            sömn. Rätt mörkläggning är inte komfort — det är en
            funktionsfråga.
          </p>
          <p>
            Vintertid är situationen omvänd. Långa mörka morgnar betyder
            att solskyddet snarare ska kunna släppa in dagsljus när det
            väl finns. Det här är ett av de tydligaste exemplen på varför
            motoriserad rullgardin med tidsstyrning gör verklig skillnad
            — uppvecklingen sker kvart i sju oavsett årstid.
          </p>
        </Section>

        <Section heading="Två huvudalternativ">
          <h3 className="heading-section text-xl md:text-2xl text-ink mt-8 mb-3">
            Rullgardin med blackout
          </h3>
          <p>
            <Link
              href="/rullgardiner-malmo/"
              className="text-ink underline decoration-ink/30 hover:decoration-ink"
            >
              Blackout-rullgardin
            </Link>{" "}
            är det enklaste valet och det vi installerar mest. Vävens
            beläggning stoppar allt direktljus genom väven. Med vit
            baksida reflekteras solvärmen tillbaka mot glaset — en bonus
            sommartid.
          </p>
          <p>Fördelar i sovrum:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Finns med motor — Motion eller Eve-Motion (Thread/Matter)
            </li>
            <li>
              Tidsstyrd uppveckling och fjärrkontroll från sängen
            </li>
            <li>Vit baksida sänker värmegenomsläppet sommartid</li>
            <li>Tre storlekar: Mini, Medi, Maxi (upp till 450 cm)</li>
            <li>
              Sidoskenor som tillval för täthet runt karmen
            </li>
          </ul>
          <h3 className="heading-section text-xl md:text-2xl text-ink mt-8 mb-3">
            Plissé med mörkläggande isolerväv
          </h3>
          <p>
            <Link
              href="/plissegardiner-malmo/"
              className="text-ink underline decoration-ink/30 hover:decoration-ink"
            >
              Mörkläggande plissé
            </Link>{" "}
            har en aluminiumkärna mellan tyglagren som stoppar ljus och
            reflekterar värme. Dubbelvävens luftceller dämpar
            värmeöverföring åt båda håll — en effekt som rullgardinen inte
            har.
          </p>
          <p>Fördelar i sovrum:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Mörkläggning + isolering i samma produkt
            </li>
            <li>
              Mindre kallras vintertid och svalare rum sommartid
            </li>
            <li>
              Mer kompakt än rullgardinkassett — bygger cirka 3 cm per
              meter ihopfälld
            </li>
            <li>
              Glasmonterad variant (Velo) sitter tätare mot rutan och
              minskar ljusgloria
            </li>
          </ul>
          <p>Nackdel: helt manuell, ingen motor.</p>
        </Section>

        <Section heading="Hur ni undviker ljusgloria runt karmen">
          <p>
            Det vanligaste klagomålet på sovrumsmörkläggning är att ljus
            läcker in vid sidor och underkant. Det är inte gardinens fel —
            det är monteringen. Tre saker att tänka på:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="font-medium text-ink">Sidoskenor.</strong>{" "}
              U-profiler längs karmens sidor som stoppar sidoljuset.
              Avgörande på rullgardin.
            </li>
            <li>
              <strong className="font-medium text-ink">
                Bredd över karm.
              </strong>{" "}
              Vid utanpåliggande montering — minst 5–10 cm överhäng per
              sida.
            </li>
            <li>
              <strong className="font-medium text-ink">
                Glasmonterad lösning.
              </strong>{" "}
              Plissé Velo eller rullgardin med skenor monteras direkt på
              rutan; ljusspringan i kanterna nästan försvinner.
            </li>
          </ul>
          <p>
            Inget invändigt solskydd ger 100 % tätning runt alla kanter.
            Vill ni ha det helt mörkt — typ projektorvisning vid
            middagstid — krävs antingen utvändigt skydd som komplement
            eller dubbla invändiga lager.
          </p>
        </Section>

        <Section heading="Hur ni väljer mellan dem">
          <p>
            <strong className="font-medium text-ink">
              Vill ha motor och tidsstyrning
            </strong>{" "}
            — rullgardin. Motor är inte tillgängligt i plissé.
          </p>
          <p>
            <strong className="font-medium text-ink">
              Har norrfönster med kallras
            </strong>{" "}
            — plissé isolerväv. Luftcellerna dämpar både kalla och varma
            luftströmmar.
          </p>
          <p>
            <strong className="font-medium text-ink">
              Vill slippa borra i karm
            </strong>{" "}
            — plissé glasmonterad. Sidoskenor sitter direkt på rutan.
          </p>
          <p>
            <strong className="font-medium text-ink">
              Har riktigt brett fönster
            </strong>{" "}
            — rullgardin Maxi (upp till 450 cm).
          </p>
          <p>
            <strong className="font-medium text-ink">
              Vill ha både och
            </strong>{" "}
            — kombinera: plissé i ett fönster, rullgardin med motor i ett
            annat. Eller två lager i samma fönster för maximal täthet.
          </p>
        </Section>

        <Section heading="Andra invändiga lösningar">
          <p>
            Sovrum kan vara mer än bara mörkläggning — om rummet också har
            insynsproblem mot gata fungerar plissé med tvåvägs och
            mörkläggande väv. Behöver ni mer hjälp att välja, se{" "}
            <Link
              href="/guider/plissegardin-eller-rullgardin/"
              className="text-ink underline decoration-ink/30 hover:decoration-ink"
            >
              plissé vs rullgardin
            </Link>{" "}
            eller{" "}
            <Link
              href="/guider/valja-ratt-solskydd-inomhus/"
              className="text-ink underline decoration-ink/30 hover:decoration-ink"
            >
              komplett guide för invändigt solskydd
            </Link>
            .
          </p>
        </Section>

        <div className="mt-20">
          <Eyebrow>Vanliga frågor</Eyebrow>
          <h2 className="heading-section text-3xl md:text-4xl mt-5 text-ink">
            Frågor om sovrumsmörkläggning.
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
        eyebrow="Mörkläggning sovrum"
        heading="Boka kostnadsfritt hembesök."
        body="Vi mäter sovrumsfönstret, går igenom var ljuset läcker in idag och föreslår en lösning som faktiskt mörklägger. Inkluderar motoralternativ och sidoskenor där det behövs."
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
