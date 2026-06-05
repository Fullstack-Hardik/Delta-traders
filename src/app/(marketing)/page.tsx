import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { WhyDeltaSection } from "@/components/home/WhyDeltaSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <BenefitsSection />
      <ProductShowcase />
      <WhyDeltaSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
