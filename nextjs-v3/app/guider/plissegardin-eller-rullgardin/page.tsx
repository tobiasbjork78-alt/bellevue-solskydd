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

const PAGE_URL = `${SITE_URL}/guider/plissegardin-eller-rullgardin/`;
const PAGE_TITLE =
  "Plisségardin eller rullgardin — vad ska du välja? | Bellevue Solskydd";
const PAGE_DESC =
  "Plisségardin eller rullgardin? Vi jämför positioneringsfrihet, isolering, motorisering och pris — och pekar ut vilken som är rätt val för olika rum i Malmö.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: PAGE_URL },
};

const faqs = [
  {
    question: "Vilken ger bäst klimatkomfort vid fönstret?",
    answer:
      "Plissé med dubbelväv. Luftcellerna mellan tyglagren skapar ett stillastående luftlager som dämpar både kallras vintertid och solvärme sommartid. Rullgardin med blackout och vit baksida reflekterar solvärme effektivt — men isolerar inte i kall riktning. För året-runt-effekt är plissé överlägsen; för enbart sommarvärmen är båda alternativen rimliga.",
  },
  {
    question: "Vilken är smidigast i sovrum med små barn?",
    answer:
      "Rullgardin med motor — fjärrkontroll eller tidsstyrning. Inga snören att haka i, inga lameller som lockar att leka med. Plissé manövreras med handtag eller magneter, vilket också är säkert ur barnsynpunkt, men kräver att ni är vid fönstret för att justera. Båda går alltså att göra säkra; rullgardin med motor är minst arbete i vardagen.",
  },
  {
    question: "Hur stor är skillnaden i bygghöjd?",
    answer:
      "På fönstrets ovankant märks skillnaden tydligast. En enkelvävs plissé ihopfälld bygger cirka 1,5 cm per meter fönsterhöjd; en isolerande dubbelväv cirka 3 cm per meter. En rullgardinkassett bygger 7–10 cm beroende på storlek på röret. På låga, breda fönster där överkanten är synlig kan plissé därför vara visuellt diskretare.",
  },
  {
    question: "Kan båda monteras utan att man borrar i karm?",
    answer:
      "Plissé har en dedikerad glasmonterad modell — Velo — där sidoskenor sätts direkt på rutan utan ingrepp i karmen. Rullgardin saknar motsvarande lösning; den behöver fästen i karm, vägg eller tak. För hyresrätter och bostadsrätter där karmingrepp inte tillåts är plissé alltså det smidigare alternativet.",
  },
  {
    question: "Vilken är billigast i grundutförande?",
    answer:
      "Beror på storlek. På standardfönster ligger en enkel rullgardin med kulkedja och en enkelvävs frihängande plissé i samma prisklass. Skillnaden uppstår vid tillval — motorisering driver upp rullgardinens pris, isolerväv eller mörkläggande dubbelväv driver upp plisséns. Vi specificerar alltid pris per fönster i offerten så ni kan jämföra direkt.",
  },
];

export default function PlissegardinEllerRullgardinGuide() {
  const jsonLd = graph(
    breadcrumbSchema([
      { name: "Start", url: `${SITE_URL}/` },
      { name: "Guider", url: `${SITE_URL}/guider/` },
      { name: "Plisségardin eller rullgardin", url: PAGE_URL },
    ]),
    articleSchema({
      url: PAGE_URL,
      headline: "Plisségardin eller rullgardin — vad ska du välja?",
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
            { name: "Plisségardin eller rullgardin", url: PAGE_URL },
          ]}
        />

        <header className="mt-10 mb-10">
          <Eyebrow>Jämförelse</Eyebrow>
          <h1 className="heading-display text-5xl md:text-7xl mt-6 text-ink">
            Plisségardin eller rullgardin?
          </h1>
          <Divider className="mt-7" />
        </header>

        <AnswerBox>
          Plissé och rullgardin är två av de vanligaste invändiga
          solskydden — och de väljs ofta efter olika prioriteringar.
          Plissé ger fri positionering i fönstret, tvåvägsjustering och
          riktig isolering med dubbelväv. Rullgardinen ger motorisering,
          de bredaste fönstren (upp till 450 cm) och en helt slät vävyta
          i sovrummet. Valet handlar mest om vilket av dessa som är
          viktigast för er.
        </AnswerBox>

        <Section heading="De principiella skillnaderna">
          <p>
            En{" "}
            <Link
              href="/plissegardiner-malmo/"
              className="text-ink underline decoration-ink/30 hover:decoration-ink"
            >
              plissé
            </Link>{" "}
            har en veckad väv mellan en överlist och en underlist. Båda
            listerna kan parkeras var som helst i fönstret. På fyra av sex
            modeller går de dessutom att styra oberoende av varandra —
            tvåvägsjustering — så att ni kan täcka nedre eller övre halvan
            utan att hela fönstret blockeras.
          </p>
          <p>
            En{" "}
            <Link
              href="/rullgardiner-malmo/"
              className="text-ink underline decoration-ink/30 hover:decoration-ink"
            >
              rullgardin
            </Link>{" "}
            har en jämn vävyta som rullas upp och ner från ett rör i
            överkanten. I praktiken används den i två lägen: uppe eller
            nere. Vävvalet — blackout, screen, ljusfiltrerande — bestämmer
            vad gardinen gör när den är nere.
          </p>
          <p>
            Båda är invändiga produkter. Båda finns i många färger och
            funktionsvävar. Skillnaden ligger i hur de styr ljuset, om de
            kan motoriseras och hur de hanterar isolering.
          </p>
        </Section>

        <Section heading="Jämförelsetabell">
          <div className="not-prose mt-2 rounded-premium border border-ink/10 bg-canvas-soft overflow-hidden">
            <table className="w-full text-sm md:text-base">
              <thead className="bg-canvas">
                <tr className="text-left text-xs font-medium uppercase tracking-[0.18em] text-ink-soft">
                  <th className="px-5 py-4">Egenskap</th>
                  <th className="px-5 py-4">Plissé</th>
                  <th className="px-5 py-4">Rullgardin</th>
                </tr>
              </thead>
              <tbody className="text-ink">
                <Row label="Positionering" a="Fri — tvåvägs på fyra av sex modeller" b="Upp eller ner från överkanten" />
                <Row label="Isolering" a="Ja — dubbelväv med luftceller" b="Nej" />
                <Row label="Värmereduktion" a="Ja — luftceller" b="Ja — blackout med vit baksida" />
                <Row label="Mörkläggning" a="Ja — isolerväv med aluminiumkärna" b="Ja — blackout-väv" />
                <Row label="Motor" a="Nej — manuell" b="Ja — Motion eller Eve-Motion" />
                <Row label="Maxbredd" a="ca 200 cm linspänd, mer på frihängande" b="450 cm (Maxi)" />
                <Row label="Bygghöjd ihopfälld" a="1,5–3 cm per meter fönsterhöjd" b="Kassett 7–10 cm" />
                <Row label="Glasmontering utan borrning" a="Ja (Velo)" b="Nej" />
                <Row label="Inglasade balkonger" a="Ja (Atria, 16 mm djup)" b="Sällan praktiskt" />
              </tbody>
            </table>
          </div>
        </Section>

        <Section heading="Plissé är oftast rätt val när">
          <p>
            <strong className="font-medium text-ink">Insynsskydd kombineras med dagsljus.</strong>{" "}
            Tvåvägsjusteringen är konstruerad för det här. Markplansfönster
            mot gata i Möllevången, Davidshall eller Sofielund — täck
            nedre halvan, behåll övre öppen. Rullgardin kan inte göra det.
          </p>
          <p>
            <strong className="font-medium text-ink">Klimatkomfort vid fönstret är ett problem.</strong>{" "}
            Dubbelväv med luftceller dämpar både kallras vintertid och
            solvärme sommartid. På norrfönster med kallras eller söder­
            fönster med eftermiddagssol är effekten tydlig.
          </p>
          <p>
            <strong className="font-medium text-ink">Karmen inte får borras i.</strong>{" "}
            Velo-modellen sitter glasmonterad — vanligt val i hyresrätter
            och BRF där styrelsen säger nej till karmingrepp.
          </p>
          <p>
            <strong className="font-medium text-ink">
              Fönstret har ovanlig form eller sitter på inglasad balkong.
            </strong>{" "}
            Linspänd plissé följer karmens form. Atria är gjord för balkong­
            systemens smala glasprofiler.
          </p>
        </Section>

        <Section heading="Rullgardin är oftast rätt val när">
          <p>
            <strong className="font-medium text-ink">Motor önskas.</strong>{" "}
            Två motorfamiljer finns — Motion (Bluetooth + brygga för smart
            hem) och Eve-Motion (Thread/Matter direkt mot HomeKit och
            Google Home). Plissé kan inte motoriseras.
          </p>
          <p>
            <strong className="font-medium text-ink">Fönstret är riktigt brett.</strong>{" "}
            Maxi-modellen tar upp till 450 cm. Plissé når sällan över
            cirka 200 cm utan att förlora i smidighet.
          </p>
          <p>
            <strong className="font-medium text-ink">
              Sovrumsmörkläggning kombineras med tidsstyrning.
            </strong>{" "}
            Blackout-rullgardin med motor — schemalägg uppveckling till
            klockan sju och slipp morgondiscussioner med solljuset.
          </p>
          <p>
            <strong className="font-medium text-ink">
              Rummet ska ha screen mot bländning.
            </strong>{" "}
            Screenväv är en rullgardinsspecifik produkt och har ingen
            motsvarighet i plissésortimentet.
          </p>
        </Section>

        <Section heading="Det vanligaste — kombinationen">
          <p>
            Vi installerar oftast både och i samma bostad. Plissé i
            sovrummet (för isolering och tvåvägs i hörn med insyn).
            Rullgardin med motor i vardagsrummet (för bredden och
            bekvämligheten). Plissé med fukttålig väv och tvåvägs i
            badrummet. Rullgardin med screen i hemmakontoret. Det är
            ingen kompromiss att ha olika produkter på olika fönster — det
            är ofta den bäst optimerade lösningen.
          </p>
        </Section>

        <div className="mt-20">
          <Eyebrow>Vanliga frågor</Eyebrow>
          <h2 className="heading-section text-3xl md:text-4xl mt-5 text-ink">
            Frågor om jämförelsen.
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
        eyebrow="Personlig rekommendation"
        heading="Vi hjälper er välja per rum."
        body="Vid hembesöket går vi igenom alla fönster och föreslår plissé eller rullgardin utifrån användning, väderstreck och budget. Hembesök, mätning och offert kostar inget."
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

function Row({ label, a, b }: { label: string; a: string; b: string }) {
  return (
    <tr className="border-t border-ink/8">
      <td className="px-5 py-4 font-medium">{label}</td>
      <td className="px-5 py-4 text-ink-soft">{a}</td>
      <td className="px-5 py-4 text-ink-soft">{b}</td>
    </tr>
  );
}
