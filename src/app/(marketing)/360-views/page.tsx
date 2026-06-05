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
            <div className="w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-gray-200 relative">
              <iframe
                src="https://www.google.com/local/place/fid/0x390e951bc3f583c7:0x6910a321c40bee48/photosphere?iu=https://lh3.googleusercontent.com/gps-cs-s/APNQkAEeZWV6Z86elUMmfh2TKKYWsqKgtEOAvRVUg7C5wpKadgFSQINBNHFYScki5neMny7dOKujutsnP9xHoDmc2J6IrLmK-PNNq8cyMHDtIJ17uHBTyAYobKPXnKlF_BJiKlBc9EJBu7kAw3F2%3Dw160-h106-k-no-pi-0-ya103.21-ro-0-fo100&ik=CAoSHENJQUJJaEJ0UzhLSTB3dU1yWThoOGJFVUU2bjY%3D"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 z-10"
              ></iframe>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-0">
                 <p className="text-brand-dark mb-4">If the virtual tour doesn't load automatically, please click below.</p>
                 <a href="https://www.google.com/local/place/fid/0x390e951bc3f583c7:0x6910a321c40bee48/photosphere?iu=https://lh3.googleusercontent.com/gps-cs-s/APNQkAEeZWV6Z86elUMmfh2TKKYWsqKgtEOAvRVUg7C5wpKadgFSQINBNHFYScki5neMny7dOKujutsnP9xHoDmc2J6IrLmK-PNNq8cyMHDtIJ17uHBTyAYobKPXnKlF_BJiKlBc9EJBu7kAw3F2%3Dw160-h106-k-no-pi-0-ya103.21-ro-0-fo100&ik=CAoSHENJQUJJaEJ0UzhLSTB3dU1yWThoOGJFVUU2bjY%3D" target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-full font-bold font-[family-name:var(--font-label)] bg-gradient-to-r from-brand-gold to-brand-amber text-brand-dark hover:shadow-lg transition-all z-20 relative">Open Virtual Tour 1</a>
              </div>
            </div>
          </div>

          {/* Tour 2 */}
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold font-[family-name:var(--font-heading)] text-brand-dark mb-2">Showroom Interior View 2</h2>
              <p className="text-text-mid">Experience our premium uPVC doors and specialized architectural solutions.</p>
            </div>
            <div className="w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-gray-200 relative">
              <iframe
                src="https://www.google.com/local/place/fid/0x390e951bc3f583c7:0x6910a321c40bee48/photosphere?iu=https://lh3.googleusercontent.com/gps-cs-s/APNQkAHPX4J-xXbUnO7EZzvr-K_XxCY9a_QN6PehSJLgouCukvIU_GpnBZdE5e_tP0W3xPuGIXIzJMXPpvZSOPzkD6lfGeWCpYkmFgiYkzlLi0W5d0_7fxVA7jO6CqnztbvpaO90kx7JfLQGlweV%3Dw160-h106-k-no-pi-20-ya266.16-ro-0-fo100&ik=CAoSHENJQUJJaEJrRkhyUUdXel9LX25Mbm9wOGVSV3c%3D"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 z-10"
              ></iframe>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-0">
                 <p className="text-brand-dark mb-4">If the virtual tour doesn't load automatically, please click below.</p>
                 <a href="https://www.google.com/local/place/fid/0x390e951bc3f583c7:0x6910a321c40bee48/photosphere?iu=https://lh3.googleusercontent.com/gps-cs-s/APNQkAHPX4J-xXbUnO7EZzvr-K_XxCY9a_QN6PehSJLgouCukvIU_GpnBZdE5e_tP0W3xPuGIXIzJMXPpvZSOPzkD6lfGeWCpYkmFgiYkzlLi0W5d0_7fxVA7jO6CqnztbvpaO90kx7JfLQGlweV%3Dw160-h106-k-no-pi-20-ya266.16-ro-0-fo100&ik=CAoSHENJQUJJaEJrRkhyUUdXel9LX25Mbm9wOGVSV3c%3D" target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-full font-bold font-[family-name:var(--font-label)] bg-gradient-to-r from-brand-gold to-brand-amber text-brand-dark hover:shadow-lg transition-all z-20 relative">Open Virtual Tour 2</a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
