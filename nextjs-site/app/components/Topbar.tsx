import { Phone } from "lucide-react";

export default function Topbar() {
  return (
    <div className="bg-black text-white text-sm py-2 px-4 text-center" style={{ letterSpacing: "0.14px" }}>
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
        <Phone className="w-3.5 h-3.5 shrink-0" />
        <span>
          Kostnadsfritt hembesök i Malmö och omnejd —{" "}
          <a href="tel:040181100" className="underline underline-offset-2 hover:opacity-70 font-medium transition-opacity">
            Ring 040-18 11 00
          </a>
        </span>
      </div>
    </div>
  );
}
