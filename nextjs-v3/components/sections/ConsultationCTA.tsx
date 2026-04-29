import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Button } from "@/components/atoms/Button";
import { Divider } from "@/components/atoms/Divider";

type ConsultationCTAProps = {
  eyebrow?: string;
  heading?: string;
  body?: string;
  cta?: string;
  href?: string;
};

export function ConsultationCTA({
  eyebrow = "Lokal rådgivning",
  heading = "Kostnadsfri rådgivning i hela Malmö.",
  body = "Vi kommer hem till er, mäter på plats och föreslår en lösning som passar fönstren, ljuset och budgeten. Inga övertramp, inga säljmöten.",
  cta = "Boka rådgivning",
  href = "/kontakt/",
}: ConsultationCTAProps) {
  return (
    <section className="bg-brand-green text-ink-inverse">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Eyebrow tone="inverse" className="text-brand-brass">
              {eyebrow}
            </Eyebrow>
            <h2 className="heading-section text-4xl md:text-5xl lg:text-6xl mt-5 text-ink-inverse">
              {heading}
            </h2>
            <Divider tone="inverse" className="bg-brand-brass mt-7" />
          </div>
          <div className="md:col-span-5 md:pl-8">
            <p className="body-copy text-ink-inverse/80 mb-8">{body}</p>
            <Button
              href={href}
              size="lg"
              className="bg-ink-inverse text-ink hover:bg-ink-inverse/90"
            >
              {cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
