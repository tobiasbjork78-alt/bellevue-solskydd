import { Shield } from "lucide-react";

interface GuaranteeBlockProps {
  years: 3 | 10;
  condition?: string;
}

export default function GuaranteeBlock({ years, condition }: GuaranteeBlockProps) {
  return (
    <section
      className="mb-12 bg-warm-stone p-7 sm:p-9 flex items-start gap-5 sm:gap-6"
      style={{ borderRadius: "20px" }}
    >
      <div
        className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center"
        style={{ boxShadow: "rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 4px" }}
      >
        <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-black" strokeWidth={1.5} />
      </div>
      <div>
        <h3
          className="text-black mb-2"
          style={{ fontSize: "28px", fontWeight: 300, letterSpacing: "-0.01em", lineHeight: 1.13 }}
        >
          {years} års garanti
        </h3>
        {condition && (
          <p
            className="text-dark-gray"
            style={{ fontSize: "16px", fontWeight: 400, letterSpacing: "0.16px", lineHeight: 1.6 }}
          >
            {condition}
          </p>
        )}
      </div>
    </section>
  );
}
