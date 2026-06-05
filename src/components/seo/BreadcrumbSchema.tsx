import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { JsonLd } from "./JsonLd";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schemaList = items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `https://deltatraders.in${item.href}`,
  }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: schemaList,
  };

  return (
    <>
      <JsonLd data={schema} />
      <nav aria-label="Breadcrumb" className="py-4">
        <ol className="flex items-center gap-2 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-brand-dark transition-colors flex items-center">
              <Home className="w-4 h-4" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-gray-400" />
                {isLast ? (
                  <span className="text-brand-dark font-medium font-[family-name:var(--font-label)]" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-brand-dark transition-colors font-[family-name:var(--font-label)]"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
