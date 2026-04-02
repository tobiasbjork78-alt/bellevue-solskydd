import type { Metadata } from "next";
import ProductPageLayout from "../components/ProductPageLayout";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollAnimator from "../components/ScrollAnimator";

export const metadata: Metadata = {
  title: "Rullgardiner — Ljusfilter till mörkläggning | Bellevue Solskydd",
  description:
    "Rullgardiner från lätt ljusfilter till fullständig mörkläggning. Kulkedja, fjädermekanism eller inbyggd motor med smart hem-integration.",
};

const faq = [
  {
    q: "Kan man få måttanpassade rullgardiner?",
    a: "Ja, alla rullgardiner måttanpassas efter dina önskemål.",
  },
  {
    q: "Erbjuder ni gratis hembesök?",
    a: "Ja, vi erbjuder kostnadsfritt hembesök i Malmö, Lund, Helsingborg och hela södra Skåne där vi mäter, rådger och lämnar offert.",
  },
  {
    q: "Ingår montering?",
    a: "Ja, vi levererar och monterar de måttbeställda rullgardinerna efter dina önskemål.",
  },
  {
    q: "Kan jag styra rullgardinerna med mobilen?",
    a: "Ja, med motoriserade rullgardiner kan du integrera med smart hem-system och styra via app, röstkommando eller tidsinställning.",
  },
];

export default function RullgardinerPage() {
  return (
    <>
      <ScrollAnimator />
      <Topbar />
      <Header />
      <main>
        <ProductPageLayout
          title="Rullgardiner — från ljusfilter till mörkläggning"
          intro="Välj exakt hur mycket ljus du vill ha. Rullgardinen finns från transparenta ljusfiltrerande tyger till fullständig mörkläggning — med manuell eller motoriserad styrning."
          faq={faq}
        >
          <section className="mb-12 space-y-8">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Styrning
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { title: "Kulkedja", desc: "Klassisk manuell styrning. Enkel och driftsäker." },
                  { title: "Fjädermekanism", desc: "Smidig upp- och nerrullning med fjäderdriven mekanism." },
                  { title: "Inbyggd motor", desc: "Motoriserad styrning med möjlighet till fjärrkontroll och smart hem-integration." },
                ].map((item) => (
                  <div key={item.title} className="bg-light-bg border border-border rounded-lg p-5">
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-charcoal mb-1">{item.title}</h3>
                    <p className="text-sm text-mid-gray">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Smart hem
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Med motoriserade rullgardiner kan du integrera med ditt smart hem-system.
                Styr via röstkommando, app eller tidsinställning. Modern teknologi som ger
                dig full kontroll över ljuset i ditt hem.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Montering
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Rullgardinerna kan monteras på väggen, i fönsterkarmen eller i taket.
                Välj bland en mängd olika färger, mönster och material — från transparent
                ljusfilter till fullständig mörkläggning i flera färger.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                3 års garanti
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Alla rullgardiner levereras med 3 års garanti på både produkt och montage.
                Bellevue Solskydds unika system gör upp- och nerrullningen stabil och tålig.
              </p>
            </div>
          </section>
        </ProductPageLayout>
      </main>
      <Footer />
    </>
  );
}
