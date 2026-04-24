import { Shield } from "lucide-react";

interface GuaranteeBlockProps {
  years: 3 | 10;
  condition?: string;
}

export default function GuaranteeBlock({ years, condition }: GuaranteeBlockProps) {
  return (
    <section className="mb-12 bg-teal-light border border-teal/20 rounded-lg p-6 sm:p-8 flex items-start gap-4 sm:gap-5">
      <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-teal/15 flex items-center justify-center">
        <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-teal-dark" strokeWidth={2} />
      </div>
      <div>
        <h3 className="font-[family-name:var(--font-heading)] text-xl sm:text-2xl font-bold text-charcoal mb-1">
          {years} års garanti
        </h3>
        {condition && (
          <p className="text-mid-gray leading-relaxed">{condition}</p>
        )}
      </div>
    </section>
  );
}
