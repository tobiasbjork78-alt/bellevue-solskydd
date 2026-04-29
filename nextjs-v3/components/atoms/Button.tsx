import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  ComponentPropsWithoutRef<"button"> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
} & Omit<ComponentPropsWithoutRef<"a">, "href">;

type ButtonProps = ButtonAsButton | ButtonAsLink;

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-base",
};

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand-green text-ink-inverse rounded-full hover:bg-brand-green/90 transition-colors duration-300 ease-premium",
  secondary:
    "border border-ink/15 rounded-full text-ink hover:bg-ink/5 transition-colors duration-300 ease-premium",
  ghost: "underline text-ink-soft hover:text-ink transition-colors",
};

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children } = props;

  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-medium",
    variantClasses[variant],
    variant === "ghost" ? "" : sizeClasses[size],
    className
  );

  if ("href" in props && props.href) {
    const { href, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, href: _h, ...rest } =
    props as ButtonAsButton;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
