"use client";

import { useState } from "react";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { SectionDivider } from "@/components/shared/SectionDivider";
import { GlassCard } from "@/components/shared/GlassCard";
import { CheckCircle2, Loader2 } from "lucide-react";

export default function GetQuotePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const city = formData.get('city') as string;
    const interest = formData.get('interest') as string;
    const message = formData.get('message') as string;
    
    const text = `*New Quote Request*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*City:* ${city}%0A*Product Interest:* ${interest}%0A*Project Details:* ${message || 'None'}`;
    const whatsappUrl = `https://wa.me/917668228828?text=${text}`;

    // Simulate small delay then redirect
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.open(whatsappUrl, '_blank');
    }, 800);
  };

  return (
    <>
      <section className="bg-brand-dark pt-32 pb-20 relative overflow-hidden text-center noise-overlay">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <BreadcrumbSchema items={[{ name: "Get a Quote", href: "/get-quote" }]} />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] text-white mt-6 mb-4">
            Request a Free Quote
          </h1>
          <p className="text-lg text-white/80 font-[family-name:var(--font-body)] max-w-2xl mx-auto">
            Fill out the form below and our experts will get back to you within 24 hours with a customized estimate.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <SectionDivider fill="#f9fafb" position="bottom" />
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <GlassCard className="p-8 md:p-12 bg-white border border-gray-100 shadow-xl">
            {isSuccess ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold font-[family-name:var(--font-heading)] text-brand-dark mb-4">
                  Request Received!
                </h2>
                <p className="text-text-mid mb-8 max-w-md mx-auto">
                  Thank you for reaching out to Delta Traders. One of our specialists will contact you shortly to discuss your project requirements.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="text-brand-gold font-bold hover:text-brand-dark transition-colors"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-brand-dark font-[family-name:var(--font-label)]">Full Name <span className="text-red-500">*</span></label>
                    <input required type="text" id="name" name="name" className="form-input" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-bold text-brand-dark font-[family-name:var(--font-label)]">Phone Number <span className="text-red-500">*</span></label>
                    <input required type="tel" id="phone" name="phone" className="form-input" placeholder="+91 98765 43210" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="city" className="text-sm font-bold text-brand-dark font-[family-name:var(--font-label)]">City <span className="text-red-500">*</span></label>
                    <input required type="text" id="city" name="city" className="form-input" placeholder="Saharanpur" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="interest" className="text-sm font-bold text-brand-dark font-[family-name:var(--font-label)]">Product Interest <span className="text-red-500">*</span></label>
                    <select required id="interest" name="interest" className="form-input appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%231a4d2e%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-no-repeat bg-[position:right_1rem_center]">
                      <option value="">Select a category</option>
                      <option value="upvc-windows">U-PVC Windows</option>
                      <option value="upvc-doors">U-PVC Doors</option>
                      <option value="aluminium">Aluminium Systems</option>
                      <option value="glass">Glass Partitions</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-brand-dark font-[family-name:var(--font-label)]">Project Details</label>
                  <textarea id="message" name="message" rows={4} className="form-input resize-none" placeholder="Tell us briefly about your project requirements..."></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold font-[family-name:var(--font-label)] bg-gradient-to-r from-brand-gold to-brand-amber text-brand-dark hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting Request...
                    </>
                  ) : (
                    "Submit Quote Request"
                  )}
                </button>
                <p className="text-xs text-center text-text-muted mt-4">
                  By submitting this form, you agree to allow Delta Traders to contact you regarding your inquiry.
                </p>
              </form>
            )}
          </GlassCard>
        </div>
      </section>
    </>
  );
}
