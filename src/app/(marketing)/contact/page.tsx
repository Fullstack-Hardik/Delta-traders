import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { SectionDivider } from "@/components/shared/SectionDivider";
import { Phone, Mail, MapPin } from "lucide-react";
import { GlassCard } from "@/components/shared/GlassCard";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Delta Traders for premium UPVC and Aluminium solutions in North India.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-dark pt-32 pb-20 relative overflow-hidden text-center noise-overlay">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <BreadcrumbSchema items={[{ name: "Contact", href: "/contact" }]} />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] text-white mt-6 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-white/80 font-[family-name:var(--font-body)] max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <SectionDivider fill="#ffffff" position="bottom" />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Details */}
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-bold font-[family-name:var(--font-heading)] text-brand-dark mb-6">
                  Our Office
                </h2>
                <p className="text-text-mid mb-8 font-[family-name:var(--font-body)]">
                  Visit our showroom to experience the quality of our UPVC and Aluminium profiles first-hand.
                </p>
              </div>

              <div className="space-y-6">
                <GlassCard className="p-6 bg-gray-50 flex gap-4 items-start border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex shrink-0 items-center justify-center">
                    <MapPin className="w-6 h-6 text-brand-dark" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark font-[family-name:var(--font-label)] mb-1">Address</h3>
                    <p className="text-text-mid">Near Manviklan Bus Stand, Opp. Paramount City, Delhi Road, Saharanpur, UP 247001</p>
                  </div>
                </GlassCard>
                
                <GlassCard className="p-6 bg-gray-50 flex gap-4 items-start border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex shrink-0 items-center justify-center">
                    <Phone className="w-6 h-6 text-brand-dark" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark font-[family-name:var(--font-label)] mb-1">Phone</h3>
                    <div className="flex flex-col gap-1">
                      <a href="tel:+917668228828" className="text-text-mid hover:text-brand-dark">+91-7668228828</a>
                      <a href="tel:+917462852123" className="text-text-mid hover:text-brand-dark">+91-7462852123</a>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="p-6 bg-gray-50 flex gap-4 items-start border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex shrink-0 items-center justify-center">
                    <Mail className="w-6 h-6 text-brand-dark" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark font-[family-name:var(--font-label)] mb-1">Email</h3>
                    <a href="mailto:tradersd091@gmail.com" className="text-text-mid hover:text-brand-dark">tradersd091@gmail.com</a>
                  </div>
                </GlassCard>
              </div>
            </div>

            {/* Map */}
            <div className="relative aspect-square lg:aspect-auto bg-gray-200 rounded-2xl overflow-hidden card-3d">
              {/* Note: In production, replace with actual Google Maps Embed Iframe */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110196.40113854378!2d77.47895123019888!3d29.969622955097402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e955539ddc1dd%3A0xc6a827cf6bcba7c7!2sSaharanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1709210000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
