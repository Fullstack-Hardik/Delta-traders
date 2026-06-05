import { Metadata } from "next";
import Image from "next/image";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { SectionDivider } from "@/components/shared/SectionDivider";
import { Ruler, Wrench, Truck, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services",
  description: "End-to-end UPVC and Aluminium services from consultation to installation and maintenance.",
};

const services = [
  {
    icon: Ruler,
    title: "Free Consultation & Measurement",
    desc: "Our experts visit your site to understand your requirements, suggest the best systems, and take precise millimeter-accurate measurements.",
    image: "/images/hero-1.png"
  },
  {
    icon: Wrench,
    title: "Custom Fabrication",
    desc: "Using state-of-the-art machinery, we fabricate your windows and doors to exact specifications, ensuring perfect joints and structural integrity.",
    image: "/images/hero-2.png"
  },
  {
    icon: Truck,
    title: "Safe Delivery & Installation",
    desc: "Our trained in-house installation team ensures that products are delivered safely and installed with specialized sealants for zero leakage.",
    image: "/images/hero-3.png"
  },
  {
    icon: ShieldAlert,
    title: "Post-Sales Service",
    desc: "With our 20-year warranty, we are always just a call away. We provide routine maintenance and prompt service for any hardware adjustments.",
    image: "/images/hero-1.png"
  }
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-brand-dark pt-32 pb-20 relative overflow-hidden text-center noise-overlay">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <BreadcrumbSchema items={[{ name: "Services", href: "/services" }]} />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] text-white mt-6 mb-4">
            End-to-End Solutions
          </h1>
          <p className="text-lg text-white/80 font-[family-name:var(--font-body)] max-w-2xl mx-auto">
            From the first measurement to the final polish, we handle everything in-house.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <SectionDivider fill="#f9fafb" position="bottom" />
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 !== 0;
              return (
                <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
                  <div className="flex-1 space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-brand-gold/20 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-brand-dark" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-brand-dark">
                      {service.title}
                    </h2>
                    <p className="text-lg text-text-mid leading-relaxed font-[family-name:var(--font-body)]">
                      {service.desc}
                    </p>
                  </div>
                  <div className="flex-1 w-full">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg card-3d">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
