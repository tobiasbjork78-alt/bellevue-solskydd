import type { Metadata } from "next";
import ProductPageLayout from "../components/ProductPageLayout";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollAnimator from "../components/ScrollAnimator";

export const metadata: Metadata = {
  title: "Terrassmarkiser — Motordrift & sensorer | Bellevue Solskydd",
  description:
    "Terrassmarkiser med motordrift, sol- och vindsensorer. Utöka din uteplats och sänk temperaturen med upp till 10°C.",
};

const faq = [
  {
    q: "Kan man få måttanpassade terrassmarkiser?",
    a: "Ja, alla terrassmarkiser måttanpassas efter dina önskemål.",
  },
  {
    q: "Har markiserna motordrift?",
    a: "Ja, våra terrassmarkiser finns med motordrift, fjärrstyrning och automatiska sensorer för sol och vind.",
  },
  {
    q: "Ingår montering?",
    a: "Ja, vi levererar och monterar markiserna efter dina önskemål. 3 års garanti på produkt och montage.",
  },
];

export default function TerrassmarkiserPage() {
  return (
    <>
      <ScrollAnimator />
      <Topbar />
      <Header />
      <main>
        <ProductPageLayout
          title="Terrassmarkiser — solskydd med motordrift"
          intro="Utöka din uteplats med upp till 10°C. Motordrift med sol- och vindsensorer. Anpassas för hem och företag i hela Malmö och södra Skåne."
          faq={faq}
        >
          <section className="mb-12 space-y-8">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Motordrift och sensorer
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Våra terrassmarkiser finns med motordrift, fjärrstyrning och automatiska
                sensorer för sol och vind. Markisen fälls automatiskt ut vid stark sol och
                rullas in vid hård vind — du behöver inte tänka på det.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Design och materialval
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Välj bland många olika mönster och färger på markisväven. Vi hjälper dig
                designa en markis som harmoniserar med ditt hem och förstärker din stil.
                Varje produkt tillverkas med fokus på hållbarhet, design och kvalitet.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                För hem och företag
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Vi levererar och monterar markiser för alla behov — från det lilla fönstret
                i hemmiljö till seriekopplade installationer för industri- eller kontorskomplex.
              </p>
            </div>
          </section>
        </ProductPageLayout>
      </main>
      <Footer />
    </>
  );
}
