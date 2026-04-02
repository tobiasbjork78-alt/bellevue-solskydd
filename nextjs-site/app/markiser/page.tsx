import type { Metadata } from "next";
import ProductPageLayout from "../components/ProductPageLayout";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollAnimator from "../components/ScrollAnimator";

export const metadata: Metadata = {
  title: "Markiser Malmö — Sol- och vindskydd | Bellevue Solskydd",
  description:
    "Markiser i Malmö och södra Skåne. Terrassmarkiser, fönstermarkiser, korgmarkiser och Zip Screen med montering och 3 års garanti.",
};

const faq = [
  {
    q: "Kan man få måttanpassade markiser?",
    a: "Ja, markiserna måttanpassas efter dina önskemål.",
  },
  {
    q: "Erbjuder ni gratis hembesök?",
    a: "Ja, vi erbjuder kostnadsfritt hembesök i Malmö, Lund, Helsingborg och hela södra Skåne där vi mäter, rådger och lämnar offert.",
  },
  {
    q: "Ingår montering?",
    a: "Ja, vi levererar och monterar de måttbeställda markiserna efter dina önskemål.",
  },
  {
    q: "Vad kostar markiser?",
    a: "Priset varierar beroende på typ, dimensioner och materialval. Kontakta oss för en offert anpassad efter dina förutsättningar.",
  },
];

export default function MarkiserPage() {
  return (
    <>
      <ScrollAnimator />
      <Topbar />
      <Header />
      <main>
        <ProductPageLayout
          title="Markiser Malmö — sol- och vindskydd för uteplatsen"
          intro="Rätt markis kan sänka temperaturen på din uteplats med upp till 10°C. Vi levererar och monterar markiser i hela Malmö och södra Skåne — med kostnadsfritt hembesök."
          faq={faq}
        >
          <section className="mb-12 space-y-8">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Terrassmarkiser med motordrift och sensorer
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Terrassmarkiser är det populäraste valet för att skapa en skyddad uteplats.
                Med motordrift, fjärrstyrning och sensorer för sol och vind får du en smidig och
                bekväm användning. Vi anpassar markisen för allt från privata hem till
                industri- och kontorskomplex.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Fönstermarkiser — stoppar solen innan den når glaset
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Fönstermarkiser monteras utanpå fönstret och stoppar solens värme innan den
                når glaset. Det minskar temperaturen inomhus markant och ger en behagligare
                inomhusmiljö utan att behöva stänga ute ljuset helt.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Korgmarkiser — klassisk design
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Korgmarkiser har en tidlös design som passar fasader i alla stilar. Ett populärt
                val för butiker, restauranger och bostäder som vill ge sin fasad en klassisk
                och välkomnande känsla.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Zip Screen — maximalt skydd i vind
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Zip Screen hålls på plats av sidoskenor och tål vind bättre än andra solskydd.
                Ger maximalt skydd mot sol, insekter och insyn — perfekt för uteplatser som
                används hela säsongen.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Hela Öresundsregionen
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Vi levererar och monterar markiser i Malmö, Lund, Helsingborg, Vellinge,
                Staffanstorp och hela södra Skåne. Boka ett kostnadsfritt hembesök så
                kommer vi till dig.
              </p>
            </div>
          </section>
        </ProductPageLayout>
      </main>
      <Footer />
    </>
  );
}
