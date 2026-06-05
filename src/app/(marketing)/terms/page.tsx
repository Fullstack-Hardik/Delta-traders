import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { SectionDivider } from "@/components/shared/SectionDivider";

export default function TermsPage() {
  return (
    <>
      <section className="bg-brand-dark pt-32 pb-20 relative overflow-hidden text-center noise-overlay">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <BreadcrumbSchema items={[{ name: "Terms of Service", href: "/terms" }]} />
          <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-white mt-6 mb-4">
            Terms of Service
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <SectionDivider fill="#ffffff" position="bottom" />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose-delta">
          <h2>1. Terms</h2>
          <p>By accessing the website at deltatraders.in, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
          
          <h2>2. Use License</h2>
          <p>Permission is granted to temporarily download one copy of the materials (information or software) on Delta Traders Core PSM's website for personal, non-commercial transitory viewing only.</p>
          
          <h2>3. Disclaimer</h2>
          <p>The materials on Delta Traders Core PSM's website are provided on an 'as is' basis. Delta Traders makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

          <p className="mt-12 text-sm text-text-muted italic">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>
    </>
  );
}
