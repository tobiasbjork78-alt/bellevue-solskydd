import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
  tone?: "green" | "inverse";
};

export function Eyebrow({ children, className, tone = "green" }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-block uppercase text-xs font-medium tracking-[0.22em]",
        tone === "green" ? "text-brand-green" : "text-ink-inverse/70",
        className
      )}
    >
      {children}
    </span>
  );
}
