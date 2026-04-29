import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Button } from "@/components/atoms/Button";
import { Divider } from "@/components/atoms/Divider";

export function HeroArchitectural() {
  return (
    <section className="relative isolate overflow-hidden bg-canvas-deep text-ink-inverse min-h-screen flex items-center">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, rgba(255,255,255,0.6) 0px, rgba(255,255,255,0.6) 1px, transparent 1px, transparent 22px)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.6) 0px, rgba(255,255,255,0.6) 1px, transparent 1px, transparent 64px)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-32 md:py-40">
        <div className="max-w-4xl">
          <div className="reveal">
            <Eyebrow tone="inverse" className="text-brand-brass">
              Solskydd i Malmö
            </Eyebrow>
          </div>
          <h1 className="reveal heading-display text-5xl md:text-7xl lg:text-8xl mt-8 text-ink-inverse">
            Ljus. Skugga.
            <br />
            <span className="text-brand-brass">På dina villkor.</span>
          </h1>
          <div className="reveal mt-10">
            <Divider tone="inverse" className="bg-brand-brass" />
          </div>
          <p className="reveal mt-8 body-copy text-base md:text-lg text-ink-inverse/75 max-w-xl">
            Bellevue Solskydd är lokala specialister på markiser, persienner,
            plissé, rullgardiner, zip screen och pergola. Rådgivning på plats,
            måttagning och montering i Malmö med omnejd.
          </p>
          <div className="reveal mt-10 flex flex-col sm:flex-row gap-3">
            <Button href="/kontakt/" size="lg">
              Boka kostnadsfri rådgivning
            </Button>
            <Button
              href="#produkter"
              variant="secondary"
              size="lg"
              className="border-ink-inverse/30 text-ink-inverse hover:bg-ink-inverse/5"
            >
              Utforska produkter
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
