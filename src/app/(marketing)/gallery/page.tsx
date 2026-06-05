import { Metadata } from "next";
import Image from "next/image";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { SectionDivider } from "@/components/shared/SectionDivider";

export const metadata: Metadata = {
  title: "Project Gallery",
  description: "View our recent installations of UPVC windows, doors, aluminium kitchens, and glass partitions across North India.",
};

const images = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506059612708-99d6c258160e?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542361345-89e58247f2d5?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
];

export default function GalleryPage() {
  return (
    <>
      <section className="bg-brand-dark pt-32 pb-20 relative overflow-hidden text-center noise-overlay">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <BreadcrumbSchema items={[{ name: "Gallery", href: "/gallery" }]} />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] text-white mt-6 mb-4">
            Our Installations
          </h1>
          <p className="text-lg text-white/80 font-[family-name:var(--font-body)] max-w-2xl mx-auto">
            A showcase of our finest UPVC and Aluminium installations across residential and commercial projects.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <SectionDivider fill="#ffffff" position="bottom" />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {images.map((src, index) => (
              <div key={index} className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 group cursor-pointer card-3d">
                <Image
                  src={src}
                  alt={`Delta Traders Installation ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-bold font-[family-name:var(--font-label)] tracking-wider">View Project</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
