import { Metadata } from "next";
import Image from "next/image";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { SectionDivider } from "@/components/shared/SectionDivider";
import { ShieldCheck, Award, Factory, Users } from "lucide-react";
import { GlassCard } from "@/components/shared/GlassCard";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Delta Traders Core PSM, our 20-year legacy in UPVC & Aluminium architectural solutions across North India.",
};

const stats = [
  { icon: Factory, label: "State-of-the-art Manufacturing", value: "German Tech" },
  { icon: Users, label: "Happy Customers", value: "10,000+" },
  { icon: ShieldCheck, label: "Warranty Provider", value: "20 Years" },
  { icon: Award, label: "States Covered", value: "6+" },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-dark pt-32 pb-20 relative overflow-hidden text-center noise-overlay">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <BreadcrumbSchema items={[{ name: "About Us", href: "/about" }]} />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] text-white mt-6 mb-4">
            About Delta Traders
          </h1>
          <p className="text-lg text-white/80 font-[family-name:var(--font-body)] max-w-2xl mx-auto">
            Turning Vision Into Reality since our inception. We are North India's premier fabricator of UPVC and Aluminium systems.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <SectionDivider fill="#ffffff" position="bottom" />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-brand-dark">
                Our Legacy of Excellence
              </h2>
              <div className="prose-delta">
                <p>
                  At Delta Traders Core PSM, we believe that windows and doors are not just functional elements; they are the soul of your architecture. Based in Saharanpur, Uttar Pradesh, we have established ourselves as the region's leading experts in premium UPVC and Aluminium systems.
                </p>
                <p>
                  Our commitment to quality is absolute. We utilize advanced German engineering blended with Indian craftsmanship to deliver products that withstand the harshest weather conditions while maintaining an impeccable aesthetic appeal.
                </p>
                <p>
                  With operations spanning across Uttar Pradesh, Haryana, Punjab, Himachal Pradesh, Jammu & Kashmir, and Uttarakhand, our robust supply chain and installation network ensures that premium quality is delivered right to your doorstep.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative z-10">
                <Image
                  src="/images/hero-2.png"
                  alt="Delta Traders Manufacturing"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-brand-gold rounded-full opacity-20 blur-3xl z-0" />
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-brand-dark rounded-full opacity-10 blur-3xl z-0" />
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <GlassCard key={i} className="bg-gray-50 border border-gray-100 p-8 text-center hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-full bg-brand-dark/5 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-brand-gold" />
                  </div>
                  <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-brand-dark mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-text-muted font-medium uppercase tracking-wider font-[family-name:var(--font-label)]">
                    {stat.label}
                  </p>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
