import { Metadata } from "next";
import { productsData, getAllCategories } from "@/lib/products";
import { ProductGrid } from "@/components/products/ProductGrid";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { SectionDivider } from "@/components/shared/SectionDivider";

export const metadata: Metadata = {
  title: "Premium UPVC & Aluminium Products",
  description: "Explore Delta Traders' comprehensive range of UPVC windows, doors, aluminium systems, and glass partitions. Designed for Indian homes.",
};

export default function ProductsPage() {
  const categories = getAllCategories();

  return (
    <>
      {/* Hero Header */}
      <section className="bg-brand-dark pt-32 pb-20 relative overflow-hidden text-center noise-overlay">
        <div className="absolute inset-0 pointer-events-none">
           <svg className="absolute top-0 right-0 opacity-5 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <BreadcrumbSchema 
            items={[
              { name: "Products", href: "/products" }
            ]} 
          />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] text-white mt-6 mb-4">
            Our Premium Collections
          </h1>
          <p className="text-lg text-white/80 font-[family-name:var(--font-body)] max-w-2xl mx-auto">
            Discover architectural solutions engineered for durability, designed for elegance, and built to last.
          </p>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <SectionDivider fill="#ffffff" position="bottom" />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-24">
            {categories.map((category) => {
              const categoryProducts = productsData.filter(p => p.categorySlug === category.slug);
              
              if (categoryProducts.length === 0) return null;

              return (
                <div key={category.slug} id={category.slug} className="scroll-mt-32">
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-gray-100 gap-4">
                    <div>
                      <h2 className="text-3xl font-bold font-[family-name:var(--font-heading)] text-brand-dark">
                        {category.name}
                      </h2>
                      <p className="text-text-muted mt-2">
                        {categoryProducts.length} Premium {categoryProducts.length === 1 ? 'Product' : 'Products'}
                      </p>
                    </div>
                    <a 
                      href={`/products/${category.slug}`} 
                      className="text-sm font-bold font-[family-name:var(--font-label)] text-brand-gold hover:text-brand-dark transition-colors whitespace-nowrap"
                    >
                      View All in Category →
                    </a>
                  </div>
                  
                  <ProductGrid products={categoryProducts} />
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}
