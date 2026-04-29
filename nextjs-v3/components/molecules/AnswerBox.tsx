import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type AnswerBoxProps = {
  children: ReactNode;
  className?: string;
  label?: string;
};

export function AnswerBox({ children, className, label = "Snabbsvar" }: AnswerBoxProps) {
  return (
    <aside
      className={cn(
        "rounded-premium border border-ink/10 bg-canvas-soft px-7 py-6 md:px-9 md:py-7",
        "shadow-soft",
        className
      )}
    >
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-brand-green">
        {label}
      </p>
      <div className="body-copy text-ink text-base md:text-lg">{children}</div>
    </aside>
  );
}
