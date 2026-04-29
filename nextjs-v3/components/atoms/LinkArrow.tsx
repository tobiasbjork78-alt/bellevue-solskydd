import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type LinkArrowProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function LinkArrow({ href, children, className }: LinkArrowProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 text-ink font-medium",
        "transition-colors duration-300 ease-premium hover:text-brand-green",
        className
      )}
    >
      <span>{children}</span>
      <span
        aria-hidden
        className="inline-block transition-transform duration-300 ease-premium group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}
