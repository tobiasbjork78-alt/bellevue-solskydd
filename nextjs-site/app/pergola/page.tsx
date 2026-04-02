import type { Metadata } from "next";
import ProductPageLayout from "../components/ProductPageLayout";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollAnimator from "../components/ScrollAnimator";

export const metadata: Metadata = {
  title: "Pergola — Tak till din terrass | Bellevue Solskydd",
  description:
    "Pergola ger regnskydd och solskydd i ett. Fristående eller väggmonterad. Installation i hela södra Skåne.",
};

const faq = [
  {
    q: "Kan en pergola vara fristående?",
    a: "Ja, vi erbjuder både fristående och väggmonterade pergolor. Vi anpassar efter din uteplats.",
  },
  {
    q: "Tål en pergola regn?",
    a: "Ja, en pergola ger fullständigt regnskydd och solskydd i ett.",
  },
  {
    q: "Ingår montering?",
    a: "Ja, vi levererar och monterar pergolan efter dina önskemål. 3 års garanti på produkt och montage.",
  },
  {
    q: "Erbjuder ni hembesök?",
    a: "Ja, vi erbjuder kostnadsfritt hembesök i hela Malmö och södra Skåne där vi mäter och rådger.",
  },
];

export default function PergolaPage() {
  return (
    <>
      <ScrollAnimator />
      <Topbar />
      <Header />
      <main>
        <ProductPageLayout
          title="Pergola — tak till din terrass"
          intro="En pergola ger dig regnskydd och solskydd i ett. Välj fristående eller väggmonterad. Vi anpassar efter din uteplats och installerar i hela södra Skåne."
          faq={faq}
        >
          <section className="mb-12 space-y-8">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Regn- och solskydd i ett
              </h2>
              <p className="text-mid-gray leading-relaxed">
                En pergola förlänger utelivssäsongen genom att ge dig ett permanent tak över
                terrassen. Njut av din uteplats oavsett väder — skyddad från både sol och regn.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Fristående eller väggmonterad
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Vi erbjuder pergolor i olika utföranden. Välj en väggmonterad pergola som
                ansluter direkt till husfasaden, eller en fristående modell som kan placeras
                var som helst i trädgården.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Anpassad efter din uteplats
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Varje pergola anpassas efter dina mått och önskemål. Vi kommer hem till dig,
                mäter och presenterar en lösning som passar just din uteplats. Installation
                i hela Malmö, Lund, Helsingborg och södra Skåne.
              </p>
            </div>
          </section>
        </ProductPageLayout>
      </main>
      <Footer />
    </>
  );
}
