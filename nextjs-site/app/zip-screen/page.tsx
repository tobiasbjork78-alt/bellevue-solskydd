import type { Metadata } from "next";
import ProductPageLayout from "../components/ProductPageLayout";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollAnimator from "../components/ScrollAnimator";

export const metadata: Metadata = {
  title: "Zip Screen — Maximalt sol- och vindskydd | Bellevue Solskydd",
  description:
    "Zip Screen hålls på plats av sidoskenor även i vind. Skyddar mot sol, insekter och insyn. Perfekt för uteplatser.",
};

const faq = [
  {
    q: "Tål Zip Screen vind?",
    a: "Ja, Zip Screen hålls på plats av sidoskenor och tål vind betydligt bättre än konventionella markiser.",
  },
  {
    q: "Skyddar Zip Screen mot insekter?",
    a: "Ja, Zip Screen ger fullständigt skydd mot insekter samtidigt som den skyddar mot sol och insyn.",
  },
  {
    q: "Ingår montering?",
    a: "Ja, vi levererar och monterar Zip Screen efter dina önskemål. 3 års garanti på produkt och montage.",
  },
  {
    q: "Kan jag få kostnadsfritt hembesök?",
    a: "Ja, vi erbjuder kostnadsfritt hembesök i hela Malmö och södra Skåne.",
  },
];

export default function ZipScreenPage() {
  return (
    <>
      <ScrollAnimator />
      <Topbar />
      <Header />
      <main>
        <ProductPageLayout
          title="Zip Screen — maximalt sol- och vindskydd"
          intro="Zip Screen hålls på plats av sidoskenor även i vind. Skyddar mot sol, insekter och insyn — perfekt för uteplatser som används hela säsongen."
          faq={faq}
        >
          <section className="mb-12 space-y-8">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Sidoskenor som håller
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Till skillnad från vanliga markiser sitter Zip Screen fast i sidoskenor som
                håller duken på plats även i blåsigt väder. Det ger ett stabilt och pålitligt
                solskydd som fungerar i alla väderförhållanden.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Trippelt skydd
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Zip Screen ger dig tre skydd i ett: solskydd, insektsskydd och insynsskydd.
                Perfekt för uteplatser, altaner och balkonger där du vill kunna njuta av
                utomhuslivet utan störande insekter eller insyn.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Motoriserad styrning
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Zip Screen finns med motoriserad styrning för enkel hantering. Fäll ut och
                rulla in med fjärrkontroll eller knapp.
              </p>
            </div>
          </section>
        </ProductPageLayout>
      </main>
      <Footer />
    </>
  );
}
