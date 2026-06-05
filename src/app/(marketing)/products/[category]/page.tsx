import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductsByCategory, getAllCategories } from "@/lib/products";
import { ProductGrid } from "@/components/products/ProductGrid";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { SectionDivider } from "@/components/shared/SectionDivider";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const categories = getAllCategories();
  const categoryData = categories.find((c) => c.slug === category);

  if (!categoryData) {
    return { title: "Category Not Found" };
  }

  return {
    title: `${categoryData.name} Solutions`,
    description: `Explore our premium range of ${categoryData.name.toLowerCase()}. Engineered for Indian conditions with a 20-year warranty.`,
  };
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((c) => ({
    category: c.slug,
  }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const products = getProductsByCategory(category);
  const categories = getAllCategories();
  const categoryData = categories.find((c) => c.slug === category);

  if (!categoryData || products.length === 0) {
    notFound();
  }

  return (
    <>
      <section className="bg-brand-dark pt-32 pb-20 relative overflow-hidden text-center noise-overlay">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <BreadcrumbSchema 
            items={[
              { name: "Products", href: "/products" },
              { name: categoryData.name, href: `/products/${category}` }
            ]} 
          />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] text-white mt-6 mb-4">
            {categoryData.name}
          </h1>
          <p className="text-lg text-white/80 font-[family-name:var(--font-body)] max-w-2xl mx-auto">
            Discover our premium selection of {categoryData.name.toLowerCase()} tailored for modern living spaces.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <SectionDivider fill="#ffffff" position="bottom" />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProductGrid products={products} />
        </div>
      </section>
    </>
  );
}
