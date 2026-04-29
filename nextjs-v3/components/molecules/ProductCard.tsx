import Link from "next/link";
import { cn } from "@/lib/cn";

type ProductColor =
  | "markiser"
  | "persienner"
  | "plisse"
  | "rullgardiner"
  | "zipscreen"
  | "pergola";

type ProductCardProps = {
  title: string;
  description: string;
  href: string;
  color: ProductColor;
  className?: string;
};

const accentClasses: Record<ProductColor, string> = {
  markiser: "bg-product-markiser",
  persienner: "bg-product-persienner",
  plisse: "bg-product-plisse",
  rullgardiner: "bg-product-rullgardiner",
  zipscreen: "bg-product-zipscreen",
  pergola: "bg-product-pergola",
};

export function ProductCard({
  title,
  description,
  href,
  color,
  className,
}: ProductCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "reveal group block rounded-premium bg-canvas-soft border border-ink/10",
        "px-7 py-8 md:px-8 md:py-10",
        "transition-all duration-500 ease-premium",
        "hover:-translate-y-1 hover:shadow-lift hover:border-ink/15",
        className
      )}
    >
      <span
        aria-hidden
        className={cn("block h-px w-12 mb-6", accentClasses[color])}
      />
      <h3 className="heading-section text-2xl md:text-3xl text-ink mb-3">
        {title}
      </h3>
      <p className="body-copy text-ink-soft text-sm md:text-base mb-6">
        {description}
      </p>
      <span className="inline-flex items-center gap-2 text-sm font-medium text-ink">
        Läs mer
        <span
          aria-hidden
          className="inline-block transition-transform duration-300 ease-premium group-hover:translate-x-1"
        >
          →
        </span>
      </span>
    </Link>
  );
}
