import { Metadata } from "next";
import Image from "next/image";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { SectionDivider } from "@/components/shared/SectionDivider";

export const metadata: Metadata = {
  title: "360 Virtual Tour & Showroom Views",
  description: "Explore the Delta Traders uPVC Windows & Doors showroom in Saharanpur with our immersive 360-degree virtual tours.",
};

export default function VirtualTourPage() {
  return (
    <>
      <section className="bg-brand-dark pt-32 pb-20 relative overflow-hidden text-center noise-overlay">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <BreadcrumbSchema items={[{ name: "360 Views", href: "/360-views" }]} />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] text-white mt-6 mb-4">
            Showroom 360° Virtual Tour
          </h1>
          <p className="text-lg text-white/80 font-[family-name:var(--font-body)] max-w-2xl mx-auto">
            Step inside our Saharanpur showroom and explore our premium uPVC windows, doors, and aluminium systems from the comfort of your home.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <SectionDivider fill="#f9fafb" position="bottom" />
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Tour 1 */}
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold font-[family-name:var(--font-heading)] text-brand-dark mb-2">Showroom Interior View 1</h2>
              <p className="text-text-mid">Explore our exclusive uPVC sliding and casement window displays.</p>
            </div>
            <a href="https://www.google.com/local/place/fid/0x390e951bc3f583c7:0x6910a321c40bee48/photosphere?iu=https://lh3.googleusercontent.com/gps-cs-s/APNQkAEeZWV6Z86elUMmfh2TKKYWsqKgtEOAvRVUg7C5wpKadgFSQINBNHFYScki5neMny7dOKujutsnP9xHoDmc2J6IrLmK-PNNq8cyMHDtIJ17uHBTyAYobKPXnKlF_BJiKlBc9EJBu7kAw3F2%3Dw160-h106-k-no-pi-0-ya103.21-ro-0-fo100&ik=CAoSHENJQUJJaEJ0UzhLSTB3dU1yWThoOGJFVUU2bjY%3D" target="_blank" rel="noopener noreferrer" className="block w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden shadow-xl border border-gray-200 relative group cursor-pointer">
              <Image src="/images/hero-1.png" alt="Showroom View 1" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                 <div className="w-20 h-20 rounded-full bg-brand-gold/90 text-brand-dark flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                   <svg className="w-10 h-10 ml-1" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M8 5v14l11-7z" />
                   </svg>
                 </div>
                 <span className="px-8 py-3 rounded-full font-bold font-[family-name:var(--font-label)] bg-white text-brand-dark shadow-xl group-hover:bg-brand-gold transition-colors">
                   Click to Open 360° Virtual Tour
                 </span>
              </div>
            </a>
          </div>

          {/* Tour 2 */}
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold font-[family-name:var(--font-heading)] text-brand-dark mb-2">Showroom Interior View 2</h2>
              <p className="text-text-mid">Experience our premium uPVC doors and specialized architectural solutions.</p>
            </div>
            <a href="https://www.google.com/local/place/fid/0x390e951bc3f583c7:0x6910a321c40bee48/photosphere?iu=https://lh3.googleusercontent.com/gps-cs-s/APNQkAHPX4J-xXbUnO7EZzvr-K_XxCY9a_QN6PehSJLgouCukvIU_GpnBZdE5e_tP0W3xPuGIXIzJMXPpvZSOPzkD6lfGeWCpYkmFgiYkzlLi0W5d0_7fxVA7jO6CqnztbvpaO90kx7JfLQGlweV%3Dw160-h106-k-no-pi-20-ya266.16-ro-0-fo100&ik=CAoSHENJQUJJaEJrRkhyUUdXel9LX25Mbm9wOGVSV3c%3D" target="_blank" rel="noopener noreferrer" className="block w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden shadow-xl border border-gray-200 relative group cursor-pointer">
              <Image src="/images/hero-2.png" alt="Showroom View 2" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                 <div className="w-20 h-20 rounded-full bg-brand-gold/90 text-brand-dark flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                   <svg className="w-10 h-10 ml-1" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M8 5v14l11-7z" />
                   </svg>
                 </div>
                 <span className="px-8 py-3 rounded-full font-bold font-[family-name:var(--font-label)] bg-white text-brand-dark shadow-xl group-hover:bg-brand-gold transition-colors">
                   Click to Open 360° Virtual Tour
                 </span>
              </div>
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
