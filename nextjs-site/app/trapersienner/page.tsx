import type { Metadata } from "next";
import ProductPageLayout, { InlineProductImage } from "../components/ProductPageLayout";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollAnimator from "../components/ScrollAnimator";

const pageUrl = "https://bellevuesolskydd.se/trapersienner";

export const metadata: Metadata = {
  title: "Träpersienner i Malmö — premium för villor | Bellevue Solskydd",
  description:
    "Måttanpassade träpersienner i Malmö. FSC-certifierat trä, naturlig ljusreglering och stilren inredningsdetalj. Premium-segmentet för villan.",
  alternates: { canonical: pageUrl },
};

const faq = [
  {
    q: "Kan man få måttanpassade träpersienner?",
    a: "Ja, träpersiennerna måttanpassas efter dina önskemål.",
  },
  {
    q: "Passar träpersienner i premiumvillor?",
    a: "Ja. Träpersienner är ett klassiskt premium-val för villor där man vill ha en varm, naturlig inredningsdetalj — vanligt i villaområdena kring Bellevue, Limhamn och Västra Hamnen i Malmö.",
  },
  {
    q: "Är träet hållbart framställt?",
    a: "Ja. Samtliga träpersienner är FSC-certifierade. Certifieringen är godkänd av WWF och innebär att träet kommer från hållbar skogsproduktion.",
  },
  {
    q: "Vilka träslag och färger finns?",
    a: "Träpersienner finns i flera träslag och färger — från vitt och ljust naturträ till mörkare nyanser. Du väljer själv harmonierande eller kontrasterande färg på stegband och snördropp.",
  },
  {
    q: "Erbjuder ni gratis hembesök?",
    a: "Ja. Vi kommer hem till dig, går igenom fönsterförhållanden och presenterar alternativen. Erbjudandet gäller när vi är med från måttagning till montering.",
  },
  {
    q: "Hur underhåller jag träpersienner?",
    a: "Torka av med en torr eller lätt fuktad trasa. Det räcker för att hålla persiennerna fräscha över lång tid.",
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
      "areaServed": ["Malmö", "Staffanstorp", "Vellinge", "Trelleborg", "Svedala"],
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

export default function TrapersiennerPage() {
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
          title="Träpersienner i Malmö — premium för villan"
          intro="I villorna kring Bellevue, Limhamn och Västra Hamnen har träpersiennen en självklar plats. En inredningsdetalj som ger atmosfär åt rummet och samtidigt reglerar ljuset naturligt. FSC-certifierat trä i flera träslag och färger."
          faq={faq}
        >
          <section className="mb-12 space-y-8">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Träpersienner skapar atmosfär
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Träpersienner ger en atmosfär som få andra solskydd kan matcha.
                Du väljer träslag, och vi måttanpassar träpersiennerna så att de
                blir en harmonisk inredningsdetalj som samtidigt reglerar ljuset
                på ett naturligt sätt.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Hållbar och certifierad träproduktion
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Samtliga träpersienner är FSC-certifierade. Certifieringen är
                godkänd av WWF och innebär att träet kommer från hållbar
                skogsproduktion — en inredningsdetalj du kan ha kvar i
                generationer utan dåligt samvete.
              </p>
            </div>

            <InlineProductImage
              src="/images/shutterstock_172695749-1024x576-1.jpg"
              alt="Träpersienner i fönsterpartier i vardagsrum"
            />

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Teknik som fungerar
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Träpersiennerna regleras med stegband av hög kvalitet. Det gör
                att du kan reglera ljusinsläppet precis som du önskar. Eftersom
                vi måttanpassar träpersiennerna för dina fönster behöver du
                aldrig oroa dig över glipor eller sneda persienner.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Skräddarsydd design
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Vi lyssnar till dina behov och önskemål, och presenterar en
                lösning som uppfyller dem. Vi är med hela vägen — från val av
                färg på trä och stegband till montering. Tillsammans tar vi
                fram en träpersienn som matchar ditt hem.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Flera färger och träslag
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Träpersienner finns i flera olika färger — från vitt, genom
                skalan av färgat trä, över ljust till mörkt. Du väljer själv
                harmonierande eller kontrasterande färg på stegband och
                snördropp.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Enkel skötsel
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Träpersienners design gör dem enkla att rengöra och underhålla.
                Regelbunden torkning med en torr eller lätt fuktad trasa håller
                dem fräscha och nya ut över tid — ett praktiskt och långvarigt
                val.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Montering
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Vi monterar träpersiennerna som du vill ha dem — välj mellan
                vägg- eller fönsterramsmontering. Lika noggrant som vi skulle
                montera dem i vårt eget hem.
              </p>
            </div>
          </section>
        </ProductPageLayout>
      </main>
      <Footer />
    </>
  );
}
