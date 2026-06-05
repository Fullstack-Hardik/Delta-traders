"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, Star, MapPin, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { ScrollReveal } from "../shared/ScrollReveal";
const reasons = [
  {
    id: "item-1",
    title: "Premium Core PSM Profile",
    icon: Star,
    content: "We use only the highest quality Core PSM profiles for our UPVC products, ensuring maximum strength, durability, and resistance to harsh weather conditions. Our profiles are engineered to last a lifetime.",
  },
  {
    id: "item-2",
    title: "Pan-North India Presence",
    icon: MapPin,
    content: "With operations across Uttar Pradesh, Haryana, Punjab, Himachal Pradesh, Jammu & Kashmir, and Uttarakhand, our local expertise and widespread network guarantee timely delivery and professional installation.",
  },
  {
    id: "item-3",
    title: "20-Year Comprehensive Warranty",
    icon: ShieldCheck,
    content: "We stand firmly behind the quality of our products. Every Delta Traders installation comes with an industry-leading 20-year warranty, giving you complete peace of mind for decades to come.",
  },
];

export function WhyDeltaSection() {
  return (
    <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-20 pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text Content */}
          <div>
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-brand-gold mb-4">
                India&apos;s Trusted UPVC Specialist
              </h2>
              <p className="text-lg text-white/80 font-[family-name:var(--font-body)] mb-10">
                Experience the perfect blend of German engineering and Indian craftsmanship. 
                We don&apos;t just build windows; we create lasting value for your home.
              </p>
            </ScrollReveal>

            <ScrollReveal delayIndex={1}>
              <Accordion.Root type="single" defaultValue="item-1" collapsible className="space-y-4">
                {reasons.map((reason) => {
                  const Icon = reason.icon;
                  return (
                    <Accordion.Item
                      key={reason.id}
                      value={reason.id}
                      className="bg-white/5 border border-white/10 rounded-xl overflow-hidden data-[state=open]:bg-white/10 transition-colors duration-300"
                    >
                      <Accordion.Header>
                        <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left group">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-lg bg-brand-gold/20 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-dark transition-colors duration-300">
                              <Icon className="w-5 h-5" />
                            </div>
                            <span className="text-lg font-semibold font-[family-name:var(--font-heading)] text-white">
                              {reason.title}
                            </span>
                          </div>
                          <ChevronDown className="w-5 h-5 text-brand-gold group-data-[state=open]:rotate-180 transition-transform duration-300" />
                        </Accordion.Trigger>
                      </Accordion.Header>
                      <Accordion.Content className="overflow-hidden text-white/70 text-base leading-relaxed px-6 pb-6 pt-0 data-[state=closed]:animate-[accordionUp_300ms_ease] data-[state=open]:animate-[accordionDown_300ms_ease]">
                        {reason.content}
                      </Accordion.Content>
                    </Accordion.Item>
                  );
                })}
              </Accordion.Root>
            </ScrollReveal>
          </div>

          {/* Right Illustration/Image area */}
          <div className="relative h-[500px] hidden lg:block">
            <ScrollReveal delayIndex={2} className="h-full w-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/20 to-transparent rounded-3xl border border-brand-gold/20 overflow-hidden shadow-2xl">
                <Image src="/images/hero-1.png" alt="Delta Traders UPVC Specialist" fill className="object-cover" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
      
      {/* Required keyframes for Radix Accordion */}
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
    </section>
  );
}
