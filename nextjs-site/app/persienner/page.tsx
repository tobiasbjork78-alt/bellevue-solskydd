import type { Metadata } from "next";
import ProductPageLayout, { InlineProductImage } from "../components/ProductPageLayout";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollAnimator from "../components/ScrollAnimator";

const pageUrl = "https://bellevuesolskydd.se/persienner";

export const metadata: Metadata = {
  title: "Persienner i Malmö — Bäst i Test | Bellevue Solskydd",
  description:
    "Måttanpassade persienner i Malmö. Bäst i Test av Testfakta med betyg 4.6/5. Sju modeller i aluminium fritt från bly, krom och arsenik. Kostnadsfritt hembesök.",
  alternates: { canonical: pageUrl },
};

const models = [
  {
    name: "Bellevue Standard med sidoskenor",
    desc: "Vår toppsäljare. Utsedd till Bäst i Test av Testfakta med betyg 4,6 av 5. Sidoskenor håller persiennen på plats mot fönstret. Vändbar kassett som standard. Dekorlist ingår. Linlås och plexistav finns som tillval.",
  },
  {
    name: "Frihängande med designlist och sidoskenor",
    desc: "Modern persiennmodell med dekorativ designlist på överlisten och sidoskenor. Sidoskenorna gör att persiennen följer med fönstret i öppet läge. Reglagesida anges vid beställning.",
  },
  {
    name: "A-line med styrlina",
    desc: "Persiennlösning för fönster med annorlunda glaslist eller allmogeprofilering. Styrlinan gör att persiennen följer med fönstret i öppet läge. Vändbar kassett som standard. Dekorlist ingår.",
  },
  {
    name: "Objektspersienn",
    desc: "Prisvärt alternativ vid större projekt. Frihängande och lättmonterad med samma kvalitet som vår Bellevue Standard. Magnet ingår. Reglagesida anges vid beställning.",
  },
  {
    name: "Frihängande med designlist",
    desc: "Persiennmodell med dekorativ designlist på överlisten. Vändbar kassett som standard. Passar för fönster utan krav på sidoskenor.",
  },
  {
    name: "Frihängande persienn",
    desc: "Enklare persiennlösning. Vändbar kassett som standard. Monteras med tak- eller väggfäste. Dekorlist ingår. Magneter, linlås och plexistav finns som tillval.",
  },
  {
    name: "Mellanglaspersienn",
    desc: "Till kopplade fönster där utrymmet mellan glasskivorna är minst 28 mm. Prisvärd och vändbar.",
  },
];

const colors = [
  "B4 Brun", "B7 Beige", "B10 Vit/svart insida", "B13 Ljusgrå",
  "B20 Glittrig Aluminium", "B22 Svart", "B23 Grå Aluminium", "B24 Antracit Grå",
  "B25 Mellangrå", "B26 Mörkgrå", "B27 Silver Perforerad",
];

const faq = [
  {
    q: "Kan jag få persienner som är måttanpassade?",
    a: "Ja, alla persienner måttanpassas efter dina fönster. Vi levererar och monterar lösningar för hem, kontor och offentliga miljöer.",
  },
  {
    q: "Vad kostar persienner i Malmö?",
    a: "Priset varierar beroende på dimensioner, modell och materialval. Kontakta oss så tar vi fram en offert anpassad efter dina förutsättningar.",
  },
  {
    q: "Erbjuder ni kostnadsfritt hembesök?",
    a: "Ja. Vi kommer hem till dig i Malmö och södra Skåne, mäter på plats och ger rådgivning kring vilken persienn som passar. Erbjudandet gäller när Bellevue Solskydd är med från måttagning till montering.",
  },
  {
    q: "Ingår montering?",
    a: "Ja, vi levererar och monterar de måttbeställda persiennerna enligt dina önskemål så att installation och funktion blir rätt från början.",
  },
  {
    q: "Vilka typer av persienner erbjuder ni?",
    a: "Vi har ett brett sortiment — Bäst i Test-persiennen med sidoskenor, frihängande varianter, objektspersienner och mellanglaspersienner. Alla måttanpassade.",
  },
  {
    q: "Kan ni montera i kopplade fönster?",
    a: "Ja, mellanglaspersiennen är framtagen för kopplade fönster där utrymmet mellan glasskivorna är minst 28 mm.",
  },
  {
    q: "Hur rengör jag mina persienner?",
    a: "Dammsug med borstmunstycke eller använd en mjuk persiennborste. Det går också bra att spola av dem med vatten — då ska persiennen hängas upp för torkning.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HomeAndConstructionBusiness",
      "name": "Bellevue Solskydd",
      "telephone": "+46401811100",
      "email": "info@bellevuesolskydd.se",
      "url": pageUrl,
      "areaServed": ["Malmö", "Limhamn", "Staffanstorp", "Lund", "Lomma", "Löddeköpinge", "Vellinge", "Höllviken", "Ljunghusen", "Falsterbo", "Skanör", "Trelleborg"],
    },
    {
      "@type": "FAQPage",
      "mainEntity": faq.map((item) => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": { "@type": "Answer", "text": item.a },
      })),
    },
  ],
};

export default function PersiennerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollAnimator />
      <Topbar />
      <Header />
      <main>
        <ProductPageLayout
          title="Persienner i Malmö — Bäst i Test sedan 1982"
          intro="Det klassiska solskyddet för lägenheter, radhus och innerstadens fastigheter i Malmö. Hissa upp, vrid lamellerna, reglera sol och insyn i ett grepp. Bäst i Test av Testfakta med betyg 4,6 av 5."
          faq={faq}
          images={[
            { src: "/images/Persienner-img.webp", alt: "Måttanpassade persienner nedrullade" },
            { src: "/images/blinds-1-scaled.jpg", alt: "Persienner i en ljus interiör" },
            { src: "/images/shadow-of-window-blinds-on-wall-2022-12-16-11-04-06-utc-1.jpg", alt: "Skuggor från persienner mot vägg" },
          ]}
        >
          <section className="mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
              Måttbeställda persienner med montering
            </h2>
            <p className="text-mid-gray leading-relaxed">
              Persienner är enkla att hantera och reglerar snabbt hur mycket sol, ljus
              eller insyn du vill ha för tillfället. Genom den mångfald som finns i
              färger och utföranden går det att skapa en persienn som passar just
              ditt fönster — från sekelskifteslägenheten på Möllan till radhusets
              stora altandörr.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
              Den patenterade Bäst i Test-persiennen
            </h2>
            <p className="text-mid-gray leading-relaxed">
              Vår patenterade Bellevue-persienn med sidoskenor utsågs till Bäst i Test av
              Testfakta med betyg 4,6 av 5 — med kommentarer som &quot;Bäst i Test och
              mest prisvärd. Bra kvalitet, bra funktioner och mycket enkel att montera
              och demontera.&quot; Sidoskenorna sänker service- och monteringskostnader
              jämfört med konventionella modeller.
            </p>
          </section>

          <InlineProductImage
            src="/images/bellevue-vse_002.jpeg"
            alt="Bellevue-persienn monterad i fönster"
          />

          <section className="mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-6">
              7 modeller för alla behov
            </h2>
            <div className="grid gap-4">
              {models.map((m) => (
                <div key={m.name} className="bg-light-bg border border-border rounded-lg p-5">
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-charcoal mb-1">
                    {m.name}
                  </h3>
                  <p className="text-mid-gray text-sm leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
              Checklista för att välja rätt persienner
            </h2>
            <ul className="text-mid-gray leading-relaxed list-disc pl-5 space-y-2">
              <li>Mät dina fönster för att säkerställa perfekt passform.</li>
              <li>Välj mellan sidoskenor, frihängande eller mellanglas beroende på fönstertyp.</li>
              <li>Bestäm om du vill ha manuell reglering eller motor.</li>
              <li>Kontakta oss för rådgivning och offert — kostnadsfritt hembesök i Malmö.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-4">
              Mått
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-light-bg border border-border rounded-lg p-5 text-center">
                <p className="text-sm text-mid-gray mb-1">Min bredd</p>
                <p className="text-2xl font-bold text-charcoal">23 cm</p>
              </div>
              <div className="bg-light-bg border border-border rounded-lg p-5 text-center">
                <p className="text-sm text-mid-gray mb-1">Max bredd</p>
                <p className="text-2xl font-bold text-charcoal">300 cm</p>
              </div>
              <div className="bg-light-bg border border-border rounded-lg p-5 text-center">
                <p className="text-sm text-mid-gray mb-1">Max höjd</p>
                <p className="text-2xl font-bold text-charcoal">300 cm</p>
              </div>
            </div>
            <p className="text-sm text-mid-gray mt-3">
              Mät synligt glasdagermått (den synliga delen av glasrutan) i millimeter —
              från träkant till träkant på insidan. Ange bredd × höjd. Gör inga avdrag.
              För nytillverkade träfönster kan du uppge fabrikat och modellbeteckning
              i stället.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-4">
              11 standardfärger i aluminium
            </h2>
            <div className="flex flex-wrap gap-2">
              {colors.map((c) => (
                <span key={c} className="bg-light-bg border border-border rounded-md px-3 py-1.5 text-sm text-mid-gray">
                  {c}
                </span>
              ))}
            </div>
            <p className="text-sm text-mid-gray mt-3">
              Andra färgval mot pristillägg. Lamellerna är fria från bly, krom och
              arsenik.
            </p>
          </section>
        </ProductPageLayout>
      </main>
      <Footer />
    </>
  );
}
