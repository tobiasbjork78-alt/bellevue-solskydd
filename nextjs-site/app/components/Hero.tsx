import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-white min-h-[480px] sm:min-h-[540px] lg:min-h-[600px] flex items-center bg-black">
      <Image
        src="/images/hero/hero-persienner.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36 lg:py-44 text-center w-full">
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl mb-8 text-white"
          style={{ fontWeight: 200, letterSpacing: "-0.02em", lineHeight: 1.08 }}
        >
          Solskydd i Malmö och södra Skåne
        </h1>
        <p
          className="text-lg sm:text-xl text-white/80 mb-12 max-w-2xl mx-auto"
          style={{ fontWeight: 400, letterSpacing: "0.18px", lineHeight: 1.6 }}
        >
          Måttanpassade markiser, persienner och gardiner — med montering och kostnadsfritt hembesök.
        </p>
        <a href="/kontakt" className="btn-warm-pill">
          Boka kostnadsfritt hembesök →
        </a>
      </div>
    </section>
  );
}
