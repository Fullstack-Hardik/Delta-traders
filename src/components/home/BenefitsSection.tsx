"use client";

import { ScrollReveal } from "../shared/ScrollReveal";
import { Card3D } from "../shared/Card3D";
import { Shield, Droplets, Sun, Wind, Zap, Recycle, VolumeX, ThermometerSun, Leaf, Wrench, Clock, CheckCircle2, Factory, Home } from "lucide-react";

const benefits = [
  { icon: Shield, title: "Termite Proof", desc: "Immune to termites and wood-boring insects." },
  { icon: Droplets, title: "Corrosion Proof", desc: "Resists rot, rust, and salt corrosion." },
  { icon: Wrench, title: "Maintenance Free", desc: "No painting or varnishing required." },
  { icon: VolumeX, title: "Sound Insulation", desc: "Reduces external noise significantly." },
  { icon: Factory, title: "Strength & Durable", desc: "Built with Core PSM for maximum rigidity." },
  { icon: Leaf, title: "Eco Friendly", desc: "Environmentally safe manufacturing process." },
  { icon: Sun, title: "Fire Resistant", desc: "Self-extinguishing, won't support combustion." },
  { icon: ThermometerSun, title: "100% UV Resistance", desc: "Won't fade or yellow under harsh sun." },
  { icon: Home, title: "Elegant Looks", desc: "Premium aesthetic for modern homes." },
  { icon: Zap, title: "Saves Energy", desc: "Reduces AC and heating costs." },
  { icon: Wind, title: "Pollution Insulation", desc: "Seals out dust and airborne pollutants." },
  { icon: ThermometerSun, title: "Thermal Insulation", desc: "Keeps interiors comfortable year-round." },
  { icon: Clock, title: "Easy to Install", desc: "Quick and hassle-free fitting process." },
  { icon: Recycle, title: "100% Recyclable", desc: "Fully recyclable at the end of its life." },
  { icon: CheckCircle2, title: "Cost Benefit", desc: "Excellent return on investment." },
];

export function BenefitsSection() {
  return (
    <section className="py-24 bg-off-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-brand-dark mb-4">
              Why Choose U-PVC?
            </h2>
            <p className="text-lg text-text-mid font-[family-name:var(--font-body)]">
              15 Reasons Your Next Window Should Be UPVC
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <ScrollReveal key={benefit.title} delayIndex={index % 5}>
                <Card3D className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full flex flex-col items-center text-center group hover:border-brand-gold/50">
                  <div className="w-14 h-14 rounded-xl bg-brand-dark/5 flex items-center justify-center mb-5 group-hover:bg-brand-gold/10 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-brand-dark group-hover:text-brand-gold transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] text-brand-dark mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {benefit.desc}
                  </p>
                </Card3D>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
