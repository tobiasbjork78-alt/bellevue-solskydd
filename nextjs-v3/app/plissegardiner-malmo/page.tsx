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

const PAGE_URL = `${SITE_URL}/plissegardiner-malmo/`;
const PAGE_TITLE =
  "Plisségardiner Malmö | Tvåvägs, isolerväv & glasmontering — Bellevue Solskydd";
const PAGE_DESC =
  "Måttanpassade plisségardiner i Malmö och södra Skåne. Sex modeller från glasmonterad utan borrning till linspänd för stora fönster. Tvåvägs, isolerande dubbelväv och fukttåliga vävar — kostnadsfritt hembesök.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: PAGE_URL },
};

const faqs = [
  {
    question: "Vad är skillnaden mellan en plissé och en rullgardin?",
    answer:
      "En rullgardin har bara två lägen i praktiken — uppe eller nere — eftersom väven rullas runt en stång ovanför fönstret. En plissé består av en veckad väv som hänger mellan en överlist och en underlist, och eftersom listerna kan parkeras var som helst i fönstret kan ni ha den uppe halvvägs, nere halvvägs, eller bara täcka mitten. På modeller med tvåvägsjustering går det att styra båda listerna oberoende av varandra. Det är den principiella skillnaden — fri positionering jämfört med en upp/ner-rörelse.",
  },
  {
    question: "Är dubbelväv (honeycomb) verkligen värt prispåslaget?",
    answer:
      "På fönster där värme- eller kylproblemet är märkbart, ja. Dubbelvävens slutna luftceller fungerar som ett stillastående luftlager mellan väv och glas. På söder- och västerlägen mot Öresund där eftermiddagssolen står hårt blir skillnaden tydlig under sommaren — rummet håller sig svalare. Vintertid minskar kallraset vid stora glasytor mot norr. På små fönster i mellanrum är effekten mindre uppenbar och då räcker enkelvävens prisbild ofta bättre.",
  },
  {
    question: "Kan plissé monteras utan att man borrar i fönsterkarmen?",
    answer:
      "Ja. Velo-modellen sitter med sidoskenor fästa direkt på rutan, så ingen åverkan görs på karmen. Det är en vanlig lösning i hyresrätter och bostadsrätter där man inte vill — eller får — borra i originalkarmar. Tvåvägsjustering ingår även i Velo, så ni får både den enkla monteringen och den fria positioneringen i samma modell.",
  },
  {
    question: "Funkar plissé i badrum trots fukten?",
    answer:
      "Ja, så länge ni väljer en fukttålig väv. De vanliga vävarna är inte avsedda för en miljö som duschas i, men det finns vävar som tål kondens och som kan torkas av med en fuktig trasa. Vi tar med vävprover för fukttålig kategori vid hembesöket och visar skillnaden mot standardvävarna.",
  },
  {
    question: "Hur breda kan plisségardiner göras?",
    answer:
      "Det beror på modellen. Optima — den linspända modellen med förstärkta lister — går i regel upp till cirka 200 cm bred med enkelväv och något smalare (150–180 cm) med isolerväv, eftersom dubbelväven väger mer. Frihängande Liora hanterar bredare fönster. För riktigt breda partier — typ kortväggsfönster i nyproduktion — är det ofta bättre att dela upp i flera plisségardiner sida vid sida än att tvinga fram en ovanligt bred enhet.",
  },
  {
    question: "Tvättas vävarna i tvättmaskin?",
    answer:
      "Nej. Veckningen är permanent men inte tvättmaskinssäker — vecket riskerar att deformeras. Damma av med dammvippa eller dammsugare på låg effekt med mjukt munstycke. Punktrengöring med fuktig svamp och milt rengöringsmedel går bra på fläckar. Låt alltid väven torka helt utdragen innan ni fäller ihop den igen.",
  },
];

export default function PlissegardinerMalmoPage() {
  const jsonLd = graph(
    breadcrumbSchema([
      { name: "Start", url: `${SITE_URL}/` },
      { name: "Invändigt solskydd", url: `${SITE_URL}/invandigt-solskydd/` },
      { name: "Plisségardiner Malmö", url: PAGE_URL },
    ]),
    servicePageSchema("Plisségardiner Malmö", PAGE_URL, PAGE_DESC),
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
              { name: "Plisségardiner Malmö", url: PAGE_URL },
            ]}
          />

          <div className="mt-10 mb-10">
            <Eyebrow>Invändigt solskydd</Eyebrow>
            <h1 className="heading-display text-5xl md:text-7xl mt-6 text-ink">
              Plisségardiner i Malmö
            </h1>
            <Divider className="mt-7" />
          </div>

          <AnswerBox>
            En plisségardin är en permanent veckad väv som hänger mellan två
            lister och som kan parkeras var som helst i fönstret — uppifrån,
            nedifrån eller från båda håll samtidigt. Bellevue Solskydd
            levererar plissé i sex modeller — från diskret glasmonterad utan
            borrning till linspänd för stora fönster — och hjälper er välja
            väv utifrån hur fönstret används.
          </AnswerBox>

          <Section heading="Varför plissé fungerar så bra i Malmö-bostäder">
            <p>
              Två förutsättningar gör plissé särskilt användbar här. Den
              första är de många äldre fastigheterna i Möllevången,
              Slottsstaden och centrum — där fönstren ofta är kopplade,
              djupa och har avvikande mått. En linspänd plissé spänns mellan
              karmens fyra hörn och följer fönstrets faktiska form, vilket
              är enklare att lyckas med än att hitta en standardrullgardin
              som inte ser klumpig ut.
            </p>
            <p>
              Den andra är insynssituationen. Bostadsrätter i markplan eller
              på låga våningar mot gata — vanligt i hela inre Malmö — har
              insyn nedtill men vill behålla dagsljuset uppifrån. Tvåvägs­-
              justeringen, där över- och underlist går att styra var för
              sig, är gjord för precis det här. Ni täcker nedre halvan,
              släpper in ljus genom övre, och kan justera under dagen utan
              att hela fönstret blockeras.
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

          <Section heading="Sex modeller — välj utifrån fönstret">
            <p>
              Sortimentet är uppdelat efter monteringsprincip. Frihängande
              för enklare uppdrag, linspänd för exakt passform, och
              glasmonterad där karmen inte får röras.
            </p>
            <h3 className="heading-section text-xl md:text-2xl text-ink mt-8 mb-3">
              Frihängande
            </h3>
            <p>
              <strong className="font-medium text-ink">Liora</strong> är
              grundutförandet — envägsjustering, draglina i sidan och
              utanpåliggande montering på karmen. Praktisk för stora,
              regelbundna fönster där tvåvägsjusteringen inte tillför något.
            </p>
            <h3 className="heading-section text-xl md:text-2xl text-ink mt-8 mb-3">
              Linspänd
            </h3>
            <p>
              <strong className="font-medium text-ink">Mono</strong> är
              envägs och styrs med ett mittmonterat handtag på underlisten.
              Linorna spänns mellan karmens hörn och håller väven helt jämn
              även vid lutande fönster.
            </p>
            <p>
              <strong className="font-medium text-ink">Dualis</strong> ger
              tvåvägsjustering med handtag på både över- och underlist och
              magneter som klickar fast positionen. Bra för standardstora
              fönster där insyn nedtill är problemet.
            </p>
            <p>
              <strong className="font-medium text-ink">Optima</strong>{" "}
              är linspänd tvåvägs med förstärkta lister som motverkar
              bananeffekt — den tendens som lister kan få att svaja vid
              breda fönster eller mörkläggande väv. Maxbredd cirka 200 cm
              med enkelväv, något smalare med isolerväv.
            </p>
            <h3 className="heading-section text-xl md:text-2xl text-ink mt-8 mb-3">
              Glasmonterad
            </h3>
            <p>
              <strong className="font-medium text-ink">Velo</strong> sitter
              med sidoskenor direkt på glaset utan att karmen behöver borras
              i. Tvåvägs ingår. Den vanligaste lösningen vi installerar i
              bostadsrätter där föreningen inte tillåter karmingrepp.
            </p>
            <p>
              <strong className="font-medium text-ink">Atria</strong>{" "}
              är specialvarianten för inglasade balkonger. Bygger 16 mm i
              djup och passar de smala glasprofilerna på balkongsystem som
              vanlig plissé inte rår på.
            </p>
          </Section>

          <Section heading="Tvåvägsjustering i praktiken">
            <p>
              Tvåvägsjustering är inte en gimmick — det är hela skillnaden
              mellan plissé och rullgardin för insynsfönster. Med två
              oberoende lister kan ni ge fönstret tre olika lägen utan att
              bygga om något:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Nedre halvan täckt, övre öppen — insynsskydd dagtid med ljus
                ovanifrån. Klassiskt val för kök eller hall mot gata.
              </li>
              <li>
                Övre halvan täckt, nedre öppen — solavskärmning på
                eftermiddagen utan att utsikten i ögonhöjd försvinner.
              </li>
              <li>
                Båda halvorna inåt mitten — en band-formad öppning i mitten
                där solen står lågt på vintern och ändå behöver släppas in.
              </li>
            </ul>
            <p>
              Av sex modeller har fyra tvåvägs (Dualis, Optima, Velo,
              Atria). De två kvarvarande — Liora och Mono — är ren
              envägslösning för fönster där tvåvägsfunktionen inte tillför
              något.
            </p>
          </Section>

          <Section heading="Vävvalet styr funktionen">
            <p>
              Konstruktionen är samma oavsett modell — vävvalet avgör vad
              gardinen faktiskt ska göra. Vill ni ha morgonljus i sovrummet
              eller helt mörkt? Vill ni dämpa solvärme eller bara bländning?
            </p>
            <h3 className="heading-section text-xl md:text-2xl text-ink mt-8 mb-3">
              Enkelväv
            </h3>
            <p>
              Ett tyglager. Finns i hela skalan från transparent
              (silhuettverkan) till ljusfiltrerande och helt mörkläggande.
              Den ihopfällda enkelväven bygger cirka 1,5 cm per meter
              fönsterhöjd — knappt synlig vid överlisten.
            </p>
            <h3 className="heading-section text-xl md:text-2xl text-ink mt-8 mb-3">
              Isolerväv (dubbelväv / honeycomb)
            </h3>
            <p>
              Två tyglager med slutna luftceller emellan. Luftcellerna
              skapar ett stillastående luftlager och dämpar värmeöverföring
              åt båda håll — solvärme på sommaren, kallras på vintern.
              Bygger cirka 3 cm per meter fönsterhöjd ihopfälld. Den
              mörkläggande varianten har dessutom en aluminiumkärna mellan
              tyglagren som stoppar allt ljus och reflekterar värme — den
              mest effektiva mörkläggningen i vårt sortiment.
            </p>
            <p>
              Vävarna finns i många färger och flera funktionsklasser —
              fukttåliga vävar för badrum, flamskyddade för kontor och
              offentliga lokaler. Vi visar prover i ert ljus vid
              hembesöket.
            </p>
          </Section>

          <Section heading="Var fungerar plissé bäst?">
            <h3 className="heading-section text-xl md:text-2xl text-ink mt-8 mb-3">
              Sovrum
            </h3>
            <p>
              Mörkläggande isolerväv med aluminiumkärna stänger ute den
              tidiga sommarmorgonen och dämpar samtidigt kallraset vintertid.
              På större sovrumsfönster är Optima ett bättre val än Dualis —
              de förstärkta listerna håller väven slät även med tyngre väv.
            </p>
            <h3 className="heading-section text-xl md:text-2xl text-ink mt-8 mb-3">
              Badrum
            </h3>
            <p>
              Fukttålig väv som inte mörknar av kondens. Tvåvägs ger
              insynsskydd nedtill samtidigt som dagsljuset behålls — ett
              vanligt badrumsfönster mot gata blir användbart utan att man
              behöver hänga ned hela fönstret.
            </p>
            <h3 className="heading-section text-xl md:text-2xl text-ink mt-8 mb-3">
              Vardagsrum mot gata
            </h3>
            <p>
              Markplansfönster i Davidshall, Möllevången eller Sofielund har
              ofta insyn från gata och gångväg. Tvåvägs translucent väv ger
              en jämn dagsljuskvalitet inomhus utan att rummet exponeras.
            </p>
            <h3 className="heading-section text-xl md:text-2xl text-ink mt-8 mb-3">
              Inglasade balkonger
            </h3>
            <p>
              Atria är konstruerad för balkongsystem med smala glasprofiler
              och 16 mm bygghöjd. Vanlig plissé får inte plats — den här
              gör det.
            </p>
            <h3 className="heading-section text-xl md:text-2xl text-ink mt-8 mb-3">
              Kontor
            </h3>
            <p>
              Flamskyddade vävar finns för lokaler där brandkrav är
              tillämpliga. Plissé tar mycket lite plats — även med
              isolerväv bygger den sammanlagda paketet bara cirka 3 cm per
              meter — vilket är märkbart mindre än en rullgardinkassett.
            </p>
          </Section>

          <Section heading="Manövrering">
            <p>
              Plisségardiner är manuella — det finns ingen motoriserad
              plissé i sortimentet. Det betyder också att det inte finns
              något batteri att ladda eller någon elektronik att felsöka.
              Manövreringen sker beroende på modell:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="font-medium text-ink">Draglina</strong>{" "}
                med linlås (Liora) — drag i sidan, lås i önskad höjd.
              </li>
              <li>
                <strong className="font-medium text-ink">
                  Mittmonterat handtag
                </strong>{" "}
                (Mono, Dualis) — flytta listen direkt med handen.
              </li>
              <li>
                <strong className="font-medium text-ink">
                  Magnethandtag eller spår
                </strong>{" "}
                (Optima, Velo, Atria) — magneter klickar fast i exakt
                position varje gång.
              </li>
            </ul>
            <p>
              På tvåvägsmodellerna sitter handtag eller spår på båda
              listerna så över- och underkant kan styras separat.
            </p>
          </Section>

          <Section heading="Pris och vad som påverkar det">
            <p>
              Slutpriset bestäms av fönstrets storlek, valet mellan enkelväv
              och dubbelväv, modellens monteringsprincip och om det är en
              specialväv som flamskyddad eller fukttålig. Mörkläggande
              isolerväv med aluminiumkärna är dyraste vävvalet eftersom
              både dubbelvävskonstruktionen och aluminiumlagret kostar att
              tillverka.
            </p>
            <p>
              Plissé fungerar bra att etappinstallera. Många kunder börjar
              med sovrum och badrum — där tvåvägs och mörkläggning gör mest
              skillnad — och utökar till resten av bostaden senare. Vi
              specificerar pris per fönster i offerten.
            </p>
          </Section>

          <Section heading="Montering och skötsel">
            <p>
              Vi monterar plissé i karmen, mellan båge och karm, eller med
              sidoskenor direkt på glaset — beroende på modell. Beslagen
              är diskreta och både fönstret och plissén lämnas i fungerande
              skick innan vi går.
            </p>
            <p>
              Skötseln är minimal: damma av med dammvippa eller dammsugare
              på låg effekt med mjukt munstycke. Fläckar tas bort med en
              fuktig svamp. Inget tvättmaskin — låt alltid väven torka
              utdragen.
            </p>
          </Section>

          <Section heading="Andra invändiga lösningar">
            <p>
              Plissé är inte alltid det rätta valet — vi pekar gärna på
              alternativen om vi tror det passar bättre. För riktigt breda
              fönster är{" "}
              <Link
                href="/rullgardiner-malmo/"
                className="text-ink underline decoration-ink/30 hover:decoration-ink"
              >
                rullgardin Maxi
              </Link>{" "}
              ofta enklare. För kopplade fönster i sekelskifteshus kan en{" "}
              <Link
                href="/persienner-malmo/"
                className="text-ink underline decoration-ink/30 hover:decoration-ink"
              >
                mellanglaspersienn
              </Link>{" "}
              vara mindre synlig. Och för fönsterpartier i storlekar över
              tre meter brukar{" "}
              <Link
                href="/lamellgardiner-malmo/"
                className="text-ink underline decoration-ink/30 hover:decoration-ink"
              >
                lamellgardiner
              </Link>{" "}
              vara den smidigare lösningen.
            </p>
          </Section>

          <div className="mt-20">
            <Eyebrow>Vanliga frågor</Eyebrow>
            <h2 className="heading-section text-3xl md:text-4xl mt-5 text-ink">
              Frågor om plisségardiner.
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
          eyebrow="Plisségardiner Malmö"
          heading="Boka kostnadsfritt hembesök för plissé."
          body="Vi mäter, visar vävprover i ert ljus och föreslår modell utifrån fönstret. Hembesök, mätning och offert är gratis — gäller hela södra Skåne."
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
