import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { SectionDivider } from "@/components/shared/SectionDivider";

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-brand-dark pt-32 pb-20 relative overflow-hidden text-center noise-overlay">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <BreadcrumbSchema items={[{ name: "Privacy Policy", href: "/privacy-policy" }]} />
          <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-white mt-6 mb-4">
            Privacy Policy
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <SectionDivider fill="#ffffff" position="bottom" />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose-delta">
          <h2>1. Introduction</h2>
          <p>At Delta Traders Core PSM, we respect your privacy and are committed to protecting your personal data. This privacy policy informs you about how we look after your personal data when you visit our website.</p>
          
          <h2>2. Data Collection</h2>
          <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows: Identity Data, Contact Data, and Usage Data.</p>
          
          <h2>3. Data Usage</h2>
          <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to perform the contract we are about to enter into or have entered into with you.</p>

          <p className="mt-12 text-sm text-text-muted italic">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>
    </>
  );
}
