import { cn } from "@/lib/cn";

type DividerProps = {
  className?: string;
  tone?: "brass" | "ink" | "inverse";
};

export function Divider({ className, tone = "brass" }: DividerProps) {
  const toneClass =
    tone === "brass"
      ? "bg-brand-brass"
      : tone === "ink"
        ? "bg-ink/20"
        : "bg-ink-inverse/30";

  return (
    <span
      aria-hidden
      className={cn("block h-px w-16", toneClass, className)}
    />
  );
}
