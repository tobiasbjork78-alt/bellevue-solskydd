import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, graph } from "@/lib/schema";

type Crumb = {
  name: string;
  url: string;
};

type BreadcrumbsProps = {
  items: Crumb[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Brödsmulor"
      className="text-sm text-ink-soft body-copy"
    >
      <JsonLd data={graph(breadcrumbSchema(items))} />
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.url} className="flex items-center gap-2">
              {isLast ? (
                <span className="text-ink" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.url}
                  className="hover:text-ink transition-colors"
                >
                  {item.name}
                </Link>
              )}
              {!isLast && (
                <span aria-hidden className="text-ink-muted">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
