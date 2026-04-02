import type { Metadata } from "next";
import ProductPageLayout from "../components/ProductPageLayout";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollAnimator from "../components/ScrollAnimator";

export const metadata: Metadata = {
  title: "Persienner — Bäst i Test | Bellevue Solskydd",
  description:
    "Bäst i Test-persienn med patent och mönsterskydd. 7 modeller, aluminium fritt från bly och krom. Tillverkad i Malmö sedan 1982.",
};

const models = [
  {
    name: "VST — Bellevue Standard",
    desc: "Vår toppsäljare och Bäst i Test-persienn med betyg 4.6/5 av Testfakta. Patenterade sidoskenor. Vändbar kassett som standard. Dekorlist ingår.",
  },
  {
    name: "VSE — Frihängande med designlist och sidoskenor",
    desc: "Modern modell med dekorativ designlist på överlisten samt sidoskenor. Persiennen följer med fönstret i öppet läge.",
  },
  {
    name: "V-A — A-line med styrlina",
    desc: "Persiennlösning för fönster med annorlunda glaslist eller allmogeprofilering. Styrlinan gör att persiennen följer fönstret.",
  },
  {
    name: "OV — Objektspersienn",
    desc: "Billigare alternativ vid större projekt. Frihängande och lättmonterad med samma höga kvalitet som Bellevue Standard.",
  },
  {
    name: "V-E — Frihängande med designlist",
    desc: "Modern modell med dekorativ designlist. Sidoskenorna gör att persiennen följer med fönstret i öppet läge.",
  },
  {
    name: "V-B/V-F — Frihängande",
    desc: "Enklare persiennlösning. Vändbar kassett som standard. Monteras med tak- eller väggfäste. Dekorlist ingår.",
  },
  {
    name: "V-M — Mellanglaspersienn",
    desc: "Till kopplade fönster där utrymmet mellan glasskivorna är minst 28mm. Prisvärd och vändbar.",
  },
];

const colors = [
  "B4 Brun", "B7 Beige", "B10 Vit/svart insida", "B13 Ljusgrå",
  "B20 Glittrig Aluminium", "B22 Svart", "B23 Grå Aluminium", "B24 Antracit Grå",
  "B25 Mellangrå", "B26 Mörkgrå", "B27 Silver Perforerad",
];

const faq = [
  {
    q: "Vad kostar persienner?",
    a: "Priset varierar beroende på dimensioner, modell och materialval. Kontakta oss för en offert anpassad efter dina förutsättningar.",
  },
  {
    q: "Gör ni hembesök?",
    a: "Ja, vi erbjuder kostnadsfritt hembesök i Malmö, Lund, Helsingborg och hela södra Skåne. Vi mäter, rådger och lämnar offert på plats — utan köptvång.",
  },
  {
    q: "Hur länge tar montering?",
    a: "Montering av persienner tar vanligtvis mellan 15–30 minuter per fönster beroende på modell och förutsättningar.",
  },
  {
    q: "Kan ni montera i kopplade fönster?",
    a: "Ja, vår mellanglaspersienn (V-M) är specifikt designad för kopplade fönster med minst 28mm utrymme mellan glasskivorna.",
  },
];

export default function PersiennerPage() {
  return (
    <>
      <ScrollAnimator />
      <Topbar />
      <Header />
      <main>
        <ProductPageLayout
          title="Persienner — Bäst i Test sedan 1982"
          intro="Vår persienn är certifierad Bäst i Test av Testfakta med betyg 4.6/5. Patenterad sidoskena och mönsterskyddat system. Tillverkad i aluminium fritt från bly, krom och arsenik."
          faq={faq}
        >
          {/* 7 modeller */}
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

          {/* Mått */}
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
          </section>

          {/* Färger */}
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
              Andra färgval mot pristillägg. Alla lameller är fria från bly, krom och arsenik.
            </p>
          </section>
        </ProductPageLayout>
      </main>
      <Footer />
    </>
  );
}
