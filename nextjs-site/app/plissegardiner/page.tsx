import type { Metadata } from "next";
import ProductPageLayout from "../components/ProductPageLayout";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollAnimator from "../components/ScrollAnimator";

export const metadata: Metadata = {
  title: "Plissegardiner — Elegant solskydd | Bellevue Solskydd",
  description:
    "Plissegardiner för alla fönstertyper — även takfönster och snedtak. Montering mot vägg, fönsterram eller tak. Kraftig draglina med låsmekanism.",
};

const faq = [
  {
    q: "Kan man få måttanpassade plissegardiner?",
    a: "Ja, alla plissegardiner måttanpassas efter dina önskemål.",
  },
  {
    q: "Erbjuder ni hembesök?",
    a: "Ja, vi erbjuder kostnadsfritt hembesök i Malmö, Lund, Helsingborg och hela södra Skåne. En solskyddsexpert ger tips och råd kring plissegardiner och hur de passar ditt hem.",
  },
  {
    q: "Ingår montering?",
    a: "Ja, vi levererar och monterar de måttbeställda plisségardinerna efter dina önskemål.",
  },
  {
    q: "Vad kostar plissegardiner?",
    a: "Priset varierar beroende på val av väv och antal gardiner. Kontakta oss för en offert anpassad efter dina förutsättningar.",
  },
];

export default function PlissegardinerPage() {
  return (
    <>
      <ScrollAnimator />
      <Topbar />
      <Header />
      <main>
        <ProductPageLayout
          title="Plissegardiner — elegant solskydd för alla fönster"
          intro="Plissegardinen är det eleganta valet för hem som vill ha mjukt ljus och diskret insyn. Passar alla fönstertyper — även snedtak och takfönster."
          faq={faq}
        >
          <section className="mb-12 space-y-8">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Montering
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Bellevue Solskydd måttanpassar dina plissegardiner så att de sitter perfekt.
                Montering mot vägg, fönsterram eller tak — vi anpassar efter dina önskemål.
                Plissegardinen kan vara ett alternativ till persienner när du vill ha ett mjukare intryck.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Kraftig draglina med låsmekanism
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Plissegardinen hissas och regleras med en kraftig draglina. En smart mekanism låser
                gardinen i det läge du vill ha den. Du kan avskärma ljuset från botten, toppen eller
                över hela fönstret.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Kvalitetssäkring
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Varje plisségardin kvalitetssäkras i våra egna lokaler före leverans. Vi erbjuder en
                mängd olika kvaliteter på väv och i många färger och nyanser, så att du alltid kan
                matcha din miljö och övrig inredning.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Plisségardin vs rullgardin vs draperier
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Plissegardiner ger insynsskydd utan mörkläggande effekt — en perfekt balans mellan
                ljusreglering och privatliv. Rullgardiner erbjuder allt från transparent ljusfilter till
                fullständig mörkläggning. Draperier ger en textil känsla med mer volym. Kontakta oss
                så hjälper vi dig välja rätt för just dina fönster.
              </p>
            </div>
          </section>
        </ProductPageLayout>
      </main>
      <Footer />
    </>
  );
}
