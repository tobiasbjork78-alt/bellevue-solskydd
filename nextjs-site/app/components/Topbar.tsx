import { Phone } from "lucide-react";

export default function Topbar() {
  return (
    <div className="bg-charcoal text-white text-sm py-2 px-4 text-center">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
        <Phone className="w-3.5 h-3.5 shrink-0" />
        <span>
          Kostnadsfritt hembesök i Malmö och omnejd —{" "}
          <a href="tel:040181100" className="underline hover:text-teal font-medium">
            Ring 040-18 11 00
          </a>
        </span>
      </div>
    </div>
  );
}
