"use client";

import { ScrollReveal } from "../shared/ScrollReveal";
import { GlassCard } from "../shared/GlassCard";
import { AnimatedCounter } from "../shared/AnimatedCounter";

const stats = [
  { label: "Products", value: 30, suffix: "+", delay: 0 },
  { label: "States Covered", value: 6, suffix: "", delay: 1 },
  { label: "Year Warranty", value: 20, suffix: "", delay: 2 },
  { label: "Years Experience", value: 15, suffix: "+", delay: 3 },
];

export function StatsSection() {
  return (
    <section className="py-20 bg-brand-dark bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-dark/90" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat) => (
            <ScrollReveal key={stat.label} delayIndex={stat.delay}>
              <GlassCard className="p-8 text-center h-full flex flex-col justify-center items-center gap-2 group hover:-translate-y-2 transition-transform duration-300">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-gold group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-white/80 font-medium font-[family-name:var(--font-label)] tracking-wider uppercase text-sm mt-2">
                  {stat.label}
                </p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
