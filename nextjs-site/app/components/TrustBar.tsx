import { Clock, Award, Home, Ruler, Hammer, Shield } from "lucide-react";

interface TrustBarProps {
  variant?: "default" | "product";
  guaranteeYears?: 10 | 3;
}

export default function TrustBar({ variant = "default", guaranteeYears = 3 }: TrustBarProps) {
  const items = variant === "default"
    ? [
        { icon: Clock, text: "Sedan 1982" },
        { icon: Award, text: "Persienner: Bäst i Test – Testfakta" },
        { icon: Shield, text: "Upp till 10 års garanti" },
        { icon: Home, text: "Kostnadsfritt hembesök" },
        { icon: Ruler, text: "Måttanpassat" },
        { icon: Hammer, text: "Egen montering" },
      ]
    : [
        { icon: Clock, text: "Sedan 1982" },
        { icon: Shield, text: `${guaranteeYears} års garanti` },
        { icon: Home, text: "Kostnadsfritt hembesök" },
        { icon: Ruler, text: "Måttanpassat" },
        { icon: Hammer, text: "Egen montering" },
      ];

  return (
    <section
      className="bg-white"
      style={{ borderTop: "1px solid rgba(0,0,0,0.05)", borderBottom: "1px solid rgba(0,0,0,0.05)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <item.icon className="w-4 h-4 text-black shrink-0" strokeWidth={1.5} />
              <span
                className="text-dark-gray"
                style={{ fontSize: "14px", fontWeight: 400, letterSpacing: "0.14px" }}
              >
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
