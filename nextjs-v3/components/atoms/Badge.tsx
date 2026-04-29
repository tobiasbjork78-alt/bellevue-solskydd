import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ProductColor =
  | "markiser"
  | "persienner"
  | "plisse"
  | "rullgardiner"
  | "zipscreen"
  | "pergola";

type BadgeProps = {
  color?: ProductColor;
  children: ReactNode;
  className?: string;
};

const colorClasses: Record<ProductColor, string> = {
  markiser: "bg-product-markiser/10 text-product-markiser",
  persienner: "bg-product-persienner/15 text-product-persienner",
  plisse: "bg-product-plisse/15 text-product-plisse",
  rullgardiner: "bg-product-rullgardiner/15 text-product-rullgardiner",
  zipscreen: "bg-product-zipscreen/10 text-product-zipscreen",
  pergola: "bg-product-pergola/10 text-product-pergola",
};

export function Badge({ color = "persienner", children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.16em]",
        colorClasses[color],
        className
      )}
    >
      {children}
    </span>
  );
}
