import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-white min-h-[480px] sm:min-h-[540px] lg:min-h-[600px] flex items-center bg-charcoal">
      {/* Foto-bakgrund */}
      <Image
        src="/images/hero/hero-persienner.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Mörk overlay för läsbarhet */}
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 text-center w-full">
        <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
          Solskydd i Malmö och södra Skåne
        </h1>
        <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
          Måttanpassade markiser, persienner och gardiner — med montering och kostnadsfritt hembesök.
        </p>
        <a
          href="/kontakt"
          className="inline-flex items-center justify-center bg-teal hover:bg-teal-dark text-white px-8 py-4 rounded-md text-base font-semibold transition-colors"
        >
          Boka kostnadsfritt hembesök →
        </a>
      </div>
    </section>
  );
}
