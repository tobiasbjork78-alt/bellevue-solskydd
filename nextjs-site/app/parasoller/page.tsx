import type { Metadata } from "next";
import ProductPageLayout, { InlineProductImage } from "../components/ProductPageLayout";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollAnimator from "../components/ScrollAnimator";

const pageUrl = "https://bellevuesolskydd.se/parasoller";

export const metadata: Metadata = {
  title: "Parasoller i Malmö & Trelleborg — uteservering & trädgård | Bellevue Solskydd",
  description:
    "Parasoller för uteserveringar, terrasser och trädgårdar i Malmö och Trelleborg. Från 2×2 m till 12×12 m. Specialtryck, belysning, värmare och värmetillval.",
  alternates: { canonical: pageUrl },
};

const faq = [
  {
    q: "Kan man få måttanpassade parasoller?",
    a: "Ja, parasollerna måttanpassas efter dina önskemål — storlek, form, färg och tillval.",
  },
  {
    q: "Passar parasollerna för uteserveringar?",
    a: "Ja. Parasoller är en populär lösning på uteserveringar i Malmös city och längs kusten vid Trelleborg. De kan kopplas samman för att täcka större ytor och tryckas med logotyp för att matcha varumärket.",
  },
  {
    q: "Hur stora parasoller finns?",
    a: "Våra premiumparasoller finns från 2×2 meter upp till 12×12 meter, i kvadratisk, rektangulär eller rund form.",
  },
  {
    q: "Klarar parasollerna stark vind?",
    a: "Ja. Vindstarka parasoller — TS/TSX/TX-serien — är framtagna för utsatta lägen och fungerar på strandterrasser och kustnära restauranger.",
  },
  {
    q: "Går det att få belysning och värmare i parasollen?",
    a: "Ja. Parasollerna kan utrustas med belysning, värmare, högtalare och/eller TV-skärm. Vi går igenom tillvalen vid hembesöket.",
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

export default function ParasollerPage() {
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
          title="Parasoller i Malmö och Trelleborg — uteservering och trädgård"
          intro="På uteserveringarna i Malmös city och vid kustrestaurangerna i Trelleborg levererar vi parasoller för de mest utsatta lägena. Även för villaterrassen och trädgården — från klassiska runda till vindstarka premiummodeller upp till 12×12 m."
          faq={faq}
          images={[
            { src: "/images/parasoll-1.png", alt: "Parasoll — klassisk modell" },
            { src: "/images/parasoll-2.png", alt: "Parasoll över uteplats" },
            { src: "/images/sun-bath-with-sun-loungers-and-parasol-3d-renderi-2022-06-01-23-59-17-utc-1.webp", alt: "Parasoll med solstolar" },
          ]}
        >
          <section className="mb-12 space-y-8">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Specialtillverkade för företag och privat
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Välj parasoll utifrån vindtålighet, storlek, form, vävkvalitet
                och färg. Utöver standardsortimentet erbjuder vi speciallösningar
                — möjlighet att koppla ihop parasollen till en större yta, eller
                utrusta dem med belysning, värmare, högtalare och/eller TV-skärm.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Många storlekar och färger
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Vill du ha parasoll som täcker stora ytor men ändå är stormsäkra
                är premiumparasollen ett bra val. Storlekar från 2×2 meter upp
                till 12×12 meter. Välj mellan kvadratisk, rektangulär och rund
                form. Parasollerna kan fås i den färg du önskar för att matcha
                exteriören eller stärka varumärket.
              </p>
            </div>

            <InlineProductImage
              src="/images/parasoll_pool.png"
              alt="Parasoll vid poolkant"
            />

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Klassiska parasoller i stort urval
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Den klassiska modellen finns i många storlekar och färger —
                elegant, starkt och enkelt att hantera. Fungerar lika bra
                kommersiellt som privat, från trädgårdens matbord till
                restaurangens uteservering.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Sammankopplade parasoller för stora ytor
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Vår TLX-serie är designad för att ge skugga över stora ytor —
                upp till 78 kvm. Både runda och rektangulära parasoller kan
                kopplas samman med stuprör för skydd i alla väder. Robust
                material som ändå är enkelt att manövrera — passar kommersiella
                och offentliga utemiljöer.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                Vindstarka parasoller för utsatta lägen
              </h2>
              <p className="text-mid-gray leading-relaxed">
                TS/TSX/TX-parasoller har oöverträffad styrka och passar där
                vinden tar i ordentligt — strandrestauranger, strandterrasser,
                kustnära uteserveringar. En kategori för dig som behöver
                solskydd på särskilt utsatta platser.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-3">
                För alla behov
              </h2>
              <p className="text-mid-gray leading-relaxed">
                Parasoller för uteserveringar, hotell, barer, trädgårdar,
                terrasser och uteplatser. Vi arbetar med kvalitetssäkrade
                tillverkare för att kunna erbjuda stormsäkra, hållbara parasoll
                som matchar ditt varumärke eller din hemmiljö.
              </p>
            </div>
          </section>
        </ProductPageLayout>
      </main>
      <Footer />
    </>
  );
}
