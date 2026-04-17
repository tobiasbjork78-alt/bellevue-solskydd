import { Phone } from "lucide-react";

export default function Hembesok() {
  return (
    <section id="hembesok" className="bg-teal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-6">
            Kostnadsfritt hembesök — utan köptvång
          </h2>
          <p className="text-lg text-white/85 leading-relaxed mb-10">
            Vi kommer hem till dig i Malmö, Burlöv, Lomma, Staffanstorp,
            Vellinge, Svedala, Kävlinge, Trelleborg, Skurup och Eslöv.
            Mäter, rådger och presenterar rätt alternativ för just ditt hem.
            Du bestämmer om du vill gå vidare.
          </p>
          <a
            href="tel:040181100"
            className="inline-flex items-center gap-3 bg-white text-teal-dark hover:bg-light-bg px-8 py-4 rounded-md text-lg font-bold transition-colors"
          >
            <Phone className="w-5 h-5" />
            Ring 040-18 11 00
          </a>
          <p className="mt-5 text-white/60 text-sm">
            Eller fyll i formuläret nedan — vi hör av oss inom 24h
          </p>
        </div>
      </div>
    </section>
  );
}
