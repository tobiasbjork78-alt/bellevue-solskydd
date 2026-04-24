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
    <section className="bg-light-bg border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <item.icon className="w-4 h-4 text-teal shrink-0" />
              <span className="text-sm text-mid-gray">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
