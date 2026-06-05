"use client";

import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { SectionDivider } from "@/components/shared/SectionDivider";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Why should I choose UPVC over Aluminium or Wood?",
    a: "UPVC (Unplasticized Polyvinyl Chloride) is highly durable, termite-proof, corrosion-resistant, and requires practically zero maintenance. Unlike wood, it won't rot or warp. Unlike standard aluminium, it offers superior thermal and acoustic insulation, keeping your home cooler and quieter."
  },
  {
    q: "What does your 20-year warranty cover?",
    a: "Our industry-leading 20-year warranty covers the UPVC profiles against fading, discoloration, warping, and cracking under normal weather conditions. Hardware and glass are covered under separate standard warranties as per manufacturer guidelines."
  },
  {
    q: "Do you manufacture the windows yourselves?",
    a: "Yes! We fabricate all our UPVC and Aluminium systems in-house at our state-of-the-art facility in Saharanpur using premium Core PSM profiles and German engineering techniques."
  },
  {
    q: "How long does installation take?",
    a: "Once your custom windows and doors are manufactured (usually 2-3 weeks from final measurement), the actual installation at the site is remarkably fast. Most residential projects are completely installed within 1 to 3 days depending on the scope of work."
  },
  {
    q: "Is UPVC fire resistant?",
    a: "Yes, UPVC is naturally flame retardant throughout its product life. It will not cause, support, or enhance the development of accidental fire, unlike timber."
  },
  {
    q: "Can UPVC windows be customized in color?",
    a: "Absolutely. While classic white is the most popular, we offer premium lamination in various wood-grain finishes like Golden Oak, Dark Oak, and Mahogany to match your home's aesthetic."
  }
];

export default function FAQPage() {
  return (
    <>
      <section className="bg-brand-dark pt-32 pb-20 relative overflow-hidden text-center noise-overlay">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <BreadcrumbSchema items={[{ name: "FAQ", href: "/faq" }]} />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] text-white mt-6 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-white/80 font-[family-name:var(--font-body)] max-w-2xl mx-auto">
            Everything you need to know about our UPVC & Aluminium systems, warranty, and installation process.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <SectionDivider fill="#f9fafb" position="bottom" />
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Accordion.Root type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <Accordion.Item
                key={index}
                value={`item-${index}`}
                className="bg-white border border-gray-100 rounded-xl overflow-hidden data-[state=open]:shadow-md transition-all duration-300"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left group">
                    <span className="text-lg font-bold font-[family-name:var(--font-heading)] text-brand-dark pr-8">
                      {faq.q}
                    </span>
                    <ChevronDown className="w-5 h-5 text-brand-gold shrink-0 group-data-[state=open]:rotate-180 transition-transform duration-300" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden text-text-mid text-base leading-relaxed px-6 pb-6 pt-0 data-[state=closed]:animate-[accordionUp_300ms_ease] data-[state=open]:animate-[accordionDown_300ms_ease]">
                  {faq.a}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes accordionDown {
          from { height: 0 }
          to { height: var(--radix-accordion-content-height) }
        }
        @keyframes accordionUp {
          from { height: var(--radix-accordion-content-height) }
          to { height: 0 }
        }
      `}} />
    </>
  );
}
