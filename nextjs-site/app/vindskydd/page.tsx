import type { Metadata } from "next";
import ProductPageLayout, { InlineProductImage } from "../components/ProductPageLayout";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollAnimator from "../components/ScrollAnimator";

const pageUrl = "https://bellevuesolskydd.se/vindskydd";

export const metadata: Metadata = {
  title: "Vindskydd i Malmö — balkong & uteplats | Bellevue Solskydd",
  description:
    "Måttanpassade vindskydd i Malmö. Glas- och textilpaneler för balkong, uteplats och uteservering. Havsnära lägen i Höllviken och Falsterbo. 3 års garanti.",
  alternates: { canonical: pageUrl },
};

const faq = [
  {
    q: "Kan man få måttanpassade vindskydd?",
    a: "Ja, vindskydden måttanpassas efter din balkong, uteplats eller fasad.",
  },
  {
    q: "Fungerar vindskydd vid havet?",
    a: "Vindskydd är särskilt värdefullt i havsnära lägen som Höllviken, Falsterbo och Skanör, där vinden från Öresund kan göra uteplatsen svåranvänd. Materialen tål salt och fukt.",
  },
  {
    q: "Kan vindskyddet användas som insynsskydd?",
    a: "Ja, vindskyddet fungerar även som insynsskydd — du får en avskärmad uteplats utan att släppa ljuset.",
  },
  {
    q: "Erbjuder ni gratis hembesök?",
    a: "Ja. Vi kommer hem till dig, bedömer förhållandena och ger råd om material och placering — utan köptvång.",
  },
  {
    q: "Ingår montering?",
    a: "Ja, vi levererar och monterar vindskydden efter dina önskemål.",
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

export default function VindskyddPage() {
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
          title="Vindskydd i Malmö — för balkong och uteplats"
          intro="Längs kusten i Höllviken, Falsterbo och Skanör — och på balkongerna i centrala Malmö — gör vinden från Öresund att uteplatsen ofta står oanvänd. Ett måttanpassat vindskydd förlänger säsongen och skapar en skyddad oas där du faktiskt vill sitta."
          category="utvandigt"
          faq={faq}
          images={[
            { src: "/images/shutterstock_456666382-1024x576-1.jpg", alt: "Vindskydd för uteplats — skyddat uteliv" },
          ]}
        >
          <section className="mb-12 space-y-8">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Skydd mot vind och insyn
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Våra vindskydd är både funktionella och estetiska. Oavsett om du
                behöver insynsskydd på balkongen eller vindskydd på uteplatsen
                kan de anpassas för att smälta in med fasaden. Glas- och
                textilpaneler finns i flera utföranden — från helt transparenta
                till textila varianter som ger fullständig avskärmning.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Havsnära lägen i Höllviken och Falsterbo
              </h2>
              <p className="text-mid-gray leading-relaxed">
                I de havsnära samhällena söder om Malmö är vinden en ständig
                följeslagare. Ett vindskydd gör att du kan använda uteplatsen
                från tidig vår till sen höst. Materialen tål salt, fukt och UV
                — de är gjorda för att hålla i kustklimatet.
              </p>
            </div>

            <InlineProductImage
              src="/images/shutterstock_456666382-1024x576-1.jpg"
              alt="Vindskydd som förlänger utesäsongen"
            />

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Skräddarsydda lösningar
              </h2>
              <p className="text-mid-gray leading-relaxed">
                På Bellevue Solskydd skapar vi skräddarsydda vindskydd som
                smälter samman med omgivningens estetik. Våra vindskydd är
                tillverkade av högkvalitativa material som garanterar lång
                livslängd. Vi är med hela vägen — från urval av material till
                färdig installation.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                För restauranger och uteserveringar
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Vindskydd är en investering som förlänger uteserveringssäsongen
                med flera veckor. Vi anpassar storlek, material och infästning
                efter din verksamhet. Vill du marknadsföra ditt varumärke kan
                vi integrera logotyp eller grafik i vindskyddet.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Material och hållbarhet
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Vi arbetar med vädertåliga material som klarar skånska
                förhållanden år efter år. Glasalternativ ger maximal sikt medan
                textilpaneler erbjuder mjukare avskärmning. Alla vindskydd
                måttanpassas och monteras av våra specialister.
              </p>
            </div>
          </section>
        </ProductPageLayout>
      </main>
      <Footer />
    </>
  );
}
