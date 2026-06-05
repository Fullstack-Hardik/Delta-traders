import { Product } from "@/lib/products";
import { ProductCard } from "./ProductCard";
import { ScrollReveal } from "../shared/ScrollReveal";

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-100">
        <p className="text-text-muted">No products found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product, index) => (
        <ScrollReveal key={product.slug} delayIndex={index % 3}>
          <ProductCard product={product} />
        </ScrollReveal>
      ))}
    </div>
  );
}
