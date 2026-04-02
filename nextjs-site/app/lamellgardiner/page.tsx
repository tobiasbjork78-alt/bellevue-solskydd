import type { Metadata } from "next";
import ProductPageLayout from "../components/ProductPageLayout";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollAnimator from "../components/ScrollAnimator";

export const metadata: Metadata = {
  title: "Lamellgardiner — Ljusstyrning för stora ytor | Bellevue Solskydd",
  description:
    "Lamellgardiner för kontor och hem. Enkel styrning av ljus och insyn. Måttanpassade med montering och 3 års garanti.",
};

const faq = [
  {
    q: "Kan man få måttanpassade lamellgardiner?",
    a: "Ja, alla lamellgardiner måttanpassas efter dina önskemål.",
  },
  {
    q: "Passar lamellgardiner för kontor?",
    a: "Ja, lamellgardiner är ett populärt val för kontorsmiljöer tack vare enkel styrning av ljus och insyn, samt ett diskret och professionellt utseende.",
  },
  {
    q: "Ingår montering?",
    a: "Ja, vi levererar och monterar de måttbeställda lamellgardinerna efter dina önskemål.",
  },
];

export default function LamellgardinerPage() {
  return (
    <>
      <ScrollAnimator />
      <Topbar />
      <Header />
      <main>
        <ProductPageLayout
          title="Lamellgardiner — klassisk ljusstyrning"
          intro="Reglera ljusinsläppet, stäng ute solstrålar och skapa elegant insynsskydd. Lamellgardiner är klassiska, funktionella och passar både kontor och hem."
          faq={faq}
        >
          <section className="mb-12 space-y-8">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Enkel styrning av ljus och insyn
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Lamellgardiner ger dig full kontroll över ljusinsläppet med en enkel vridmekanism.
                Vrid lamellerna för att släppa in precis så mycket ljus som du vill, eller stäng
                helt för maximalt insynsskydd. Passar utmärkt för större glaspartier och skjutdörrar.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                För hem och företag
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Lamellgardiner är ett av de mest populära solskydden för kontorsmiljöer tack vare
                sitt diskreta utseende och enkla hantering. De fungerar lika bra i hemmet —
                särskilt vid stora fönsterpartier och altandörrar.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Färger och material
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Välj bland ett brett utbud av vävar i olika färger och transparens.
                Från ljusfiltrerande till mörkläggande — vi hjälper dig hitta rätt material
                för just ditt utrymme.
              </p>
            </div>
          </section>
        </ProductPageLayout>
      </main>
      <Footer />
    </>
  );
}
