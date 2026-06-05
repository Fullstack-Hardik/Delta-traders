import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ChevronRight, MessageCircle } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import { productsData, getProductBySlug } from "@/lib/products";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { SectionDivider } from "@/components/shared/SectionDivider";
import { JsonLd } from "@/components/seo/JsonLd";

interface ProductPageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      images: [{ url: product.image }],
    },
  };
}

export async function generateStaticParams() {
  return productsData.map((p) => ({
    category: p.categorySlug,
    slug: p.slug,
  }));
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: product.image,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: "Delta Traders Core PSM",
    },
    category: product.categoryName,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "LocalBusiness",
        name: "Delta Traders",
      },
    },
  };

  return (
    <>
      <JsonLd data={productSchema} />
      
      {/* Product Hero */}
      <section className="bg-white pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BreadcrumbSchema 
            items={[
              { name: "Products", href: "/products" },
              { name: product.categoryName, href: `/products/${product.categorySlug}` },
              { name: product.name, href: `/products/${product.categorySlug}/${product.slug}` }
            ]} 
          />
          
          <div className="mt-8 grid lg:grid-cols-2 gap-12 items-start">
            {/* Image Gallery */}
            <div className="space-y-4 sticky top-24">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 border border-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {product.gallery.length > 0 && (
                <div className="grid grid-cols-3 gap-4">
                  {product.gallery.slice(0, 3).map((img, i) => (
                    <div key={i} className="relative aspect-square rounded-xl overflow-hidden bg-gray-100 border border-gray-100">
                      <Image src={img} alt={`${product.name} detail`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <span className="inline-block px-3 py-1 mb-4 rounded-full bg-brand-gold/20 text-brand-dark text-xs font-bold font-[family-name:var(--font-label)] tracking-wider uppercase">
                {product.categoryName}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-brand-dark mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-text-mid font-[family-name:var(--font-body)] mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Key Features */}
              <div className="mb-10">
                <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-brand-dark mb-4">Key Features</h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-text-mid">
                      <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications */}
              <div className="mb-10 bg-off-white rounded-2xl p-6 border border-gray-100">
                <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-brand-dark mb-4">Technical Specifications</h3>
                <dl className="space-y-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-gray-200/50 last:border-0">
                      <dt className="text-text-muted font-medium">{key}</dt>
                      <dd className="text-brand-dark font-semibold text-right max-w-[60%]">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/get-quote"
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold font-[family-name:var(--font-label)] bg-gradient-to-r from-brand-gold to-brand-amber text-brand-dark hover:shadow-lg transition-all duration-300"
                >
                  Request a Quote
                </Link>
                <a
                  href={`https://wa.me/917668228828?text=Hi, I am interested in ${product.name}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold font-[family-name:var(--font-label)] border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs (if any) */}
      {product.faqs && product.faqs.length > 0 && (
        <section className="py-20 bg-light-gray relative">
          <SectionDivider fill="#ffffff" position="top" className="absolute top-0 left-0 right-0" />
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 mt-12">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-brand-dark text-center mb-10">
              Frequently Asked Questions
            </h2>
            <Accordion.Root type="single" collapsible className="space-y-4">
              {product.faqs.map((faq, i) => (
                <Accordion.Item key={i} value={`faq-${i}`} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <Accordion.Header>
                    <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left group">
                      <span className="font-semibold text-brand-dark">{faq.q}</span>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-data-[state=open]:rotate-90 transition-transform" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="px-6 pb-6 pt-0 text-text-mid">
                    {faq.a}
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>
        </section>
      )}
    </>
  );
}
