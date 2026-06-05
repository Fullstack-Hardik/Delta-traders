import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Product } from "@/lib/products";
import { Card3D } from "../shared/Card3D";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card3D className="group relative rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm flex flex-col h-full">
      {/* Image Section */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-brand-dark text-xs font-bold font-[family-name:var(--font-label)] shadow-sm">
            {product.categoryName}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-brand-dark mb-2 group-hover:text-brand-mid transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-text-muted mb-6 flex-1 line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Action */}
        <div className="mt-auto pt-4 border-t border-gray-100">
          <Link
            href={`/products/${product.categorySlug}/${product.slug}`}
            className="flex items-center justify-between text-sm font-bold font-[family-name:var(--font-label)] text-brand-dark group-hover:text-brand-gold transition-colors"
          >
            Explore Product
            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-brand-gold/10 group-hover:translate-x-1 transition-all duration-300">
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </div>
    </Card3D>
  );
}
