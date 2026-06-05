"use client";

import { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";
import { ScrollReveal } from "../shared/ScrollReveal";
import { GlassCard } from "../shared/GlassCard";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    city: "Saharanpur",
    product: "Villa Windows & Doors",
    quote: "The quality of UPVC windows from Delta Traders is exceptional. They completely transformed the look of my house and the sound insulation is exactly as promised. Highly recommend their professional installation team.",
    rating: 5,
  },
  {
    id: 2,
    name: "Amit Sharma",
    city: "Dehradun",
    product: "Tilt & Turn Windows",
    quote: "Very impressed with the 20-year warranty they offer. The Tilt & Turn windows are incredibly smooth to operate and the premium feel is undeniable. Worth every penny.",
    rating: 5,
  },
  {
    id: 3,
    name: "Meenakshi Singh",
    city: "Chandigarh",
    product: "Aluminium Modular Kitchen",
    quote: "Got an aluminium modular kitchen done. The finish is flawless, and it's completely termite-proof. The team was punctual and completed the work well within the timeline.",
    rating: 5,
  },
  {
    id: 4,
    name: "Vikram Malhotra",
    city: "Ludhiana",
    product: "Glass Office Partitions",
    quote: "We used Delta Traders for our new office partitions. The glass quality and the aluminium framing are top-notch. It gave our workspace a very modern and open feel.",
    rating: 4,
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-light-gray relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-brand-dark mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-text-mid font-[family-name:var(--font-body)]">
            Trusted by homeowners and businesses across North India.
          </p>
        </ScrollReveal>

        <div className="relative overflow-hidden group">
          {/* Marquee Track */}
          <div className="flex animate-marquee group-hover:animate-pause w-max">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={`${testimonial.id}-${index}`} className="w-[320px] md:w-[400px] flex-shrink-0 px-4">
                <GlassCard className="h-full p-8 bg-white/60 border border-white relative shadow-sm hover:shadow-md transition-shadow">
                  <Quote className="absolute top-6 right-6 w-12 h-12 text-brand-gold/20" />
                  
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        className={cn("w-5 h-5", i < testimonial.rating ? "text-brand-gold fill-brand-gold" : "text-gray-300")} 
                      />
                    ))}
                  </div>
                  
                  <p className="text-text-mid leading-relaxed mb-8 italic font-[family-name:var(--font-heading)] text-lg min-h-[120px]">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  
                  <div className="flex flex-col border-t border-gray-100 pt-4 mt-auto">
                    <span className="font-bold text-brand-dark font-[family-name:var(--font-label)]">
                      {testimonial.name}
                    </span>
                    <span className="text-sm text-text-muted">
                      {testimonial.city} • {testimonial.product}
                    </span>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-pause {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}
