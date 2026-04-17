import { Clock, Award, Home, Ruler, Hammer } from "lucide-react";

const items = [
  { icon: Clock, text: "Sedan 1982" },
  { icon: Award, text: "Bäst i Test – Testfakta 4.6/5" },
  { icon: Home, text: "Kostnadsfritt hembesök" },
  { icon: Ruler, text: "Måttanpassat" },
  { icon: Hammer, text: "Egen montering" },
];

export default function TrustBar() {
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
