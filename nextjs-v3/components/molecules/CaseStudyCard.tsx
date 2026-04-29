import { Badge } from "@/components/atoms/Badge";
import { cn } from "@/lib/cn";

type ProductColor =
  | "markiser"
  | "persienner"
  | "plisse"
  | "rullgardiner"
  | "zipscreen"
  | "pergola";

type CaseStudyCardProps = {
  title: string;
  location: string;
  productLabel: string;
  productColor: ProductColor;
  description: string;
  className?: string;
};

export function CaseStudyCard({
  title,
  location,
  productLabel,
  productColor,
  description,
  className,
}: CaseStudyCardProps) {
  return (
    <article
      className={cn(
        "rounded-premium border border-ink/10 bg-canvas-soft px-7 py-8 md:px-9 md:py-10 shadow-soft",
        className
      )}
    >
      <div className="flex flex-wrap items-center gap-3 mb-5">
        <Badge color={productColor}>{productLabel}</Badge>
        <span className="text-xs font-medium uppercase tracking-[0.18em] text-ink-soft">
          {location}
        </span>
      </div>
      <h3 className="heading-section text-2xl md:text-3xl text-ink mb-3">
        {title}
      </h3>
      <p className="body-copy text-ink-soft">{description}</p>
    </article>
  );
}
