"use client";

import { useRef, useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/cn";

type FAQItemProps = {
  question: string;
  answer: string;
  defaultOpen?: boolean;
};

export function FAQItem({ question, answer, defaultOpen = false }: FAQItemProps) {
  const [open, setOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const contentHeight = contentRef.current?.scrollHeight ?? 0;

  return (
    <div className="border-b border-ink/10">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="heading-section text-xl md:text-2xl text-ink">
          {question}
        </span>
        <span
          aria-hidden
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-full",
            "border border-ink/15 text-ink",
            "transition-transform duration-500 ease-premium",
            open ? "rotate-45 bg-brand-green text-ink-inverse border-brand-green" : ""
          )}
        >
          <Plus size={16} strokeWidth={1.6} />
        </span>
      </button>
      <div
        style={{ maxHeight: open ? `${contentHeight}px` : "0px" }}
        className="overflow-hidden transition-[max-height] duration-500 ease-premium"
      >
        <div ref={contentRef} className="pb-6 pr-12 body-copy text-ink-soft">
          {answer}
        </div>
      </div>
    </div>
  );
}
