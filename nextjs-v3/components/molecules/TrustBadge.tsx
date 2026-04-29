import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

type TrustBadgeProps = {
  icon: LucideIcon;
  title: string;
  description?: string;
  className?: string;
  tone?: "light" | "dark";
};

export function TrustBadge({
  icon: Icon,
  title,
  description,
  className,
  tone = "light",
}: TrustBadgeProps) {
  return (
    <div
      className={cn(
        "flex items-start gap-4 rounded-soft px-5 py-4",
        tone === "light"
          ? "bg-canvas-soft border border-ink/8"
          : "bg-ink-inverse/5 border border-ink-inverse/10",
        className
      )}
    >
      <span
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
          tone === "light"
            ? "bg-brand-green/10 text-brand-green"
            : "bg-brand-brass/15 text-brand-brass"
        )}
      >
        <Icon size={18} strokeWidth={1.6} />
      </span>
      <div>
        <p
          className={cn(
            "font-medium leading-tight",
            tone === "light" ? "text-ink" : "text-ink-inverse"
          )}
        >
          {title}
        </p>
        {description && (
          <p
            className={cn(
              "mt-1 text-sm",
              tone === "light" ? "text-ink-soft" : "text-ink-inverse/70"
            )}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
