import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { SectionDivider } from "../shared/SectionDivider";

export function CTASection() {
  return (
    <section className="relative bg-brand-dark pt-16 pb-24 overflow-hidden">
      {/* Wave Divider at Top */}
      <div className="absolute top-0 left-0 right-0">
        <SectionDivider fill="#f0ede0" position="top" />
      </div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNEwzNiA1Mkw1MiA1Mkw1MiAzNFozTTYgNkwwIDZMMCAyNEw2IDI0Wk00MiA2TDM2IDZMMzYgMjRMNDIgMjRaTTU0IDhMNDggOEw0OCAyNkw1NCAyNlpNMTggMzRMMTIgMzRMMTIgNTJMMTggNTJaTTE4IDZMMTIgNkwxMiAyNEwxOCAyNFpNMzAgMTZMMjQgMTZMMjQgMzRMMzAgMzRaIiBmaWxsPSIjYzkhMjI3IiBmaWxsLW9wYWNpdHk9IjAuMDUiLz48L2c+PC9zdmc+')] opacity-20 pointer-events-none" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 text-center mt-12">
        <h2 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-heading)] text-white mb-6">
          Ready to Transform Your Home?
        </h2>
        <p className="text-xl text-white/80 font-[family-name:var(--font-body)] mb-12 max-w-2xl mx-auto">
          Get in touch with our experts today for a free consultation and customized quote for your property.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/get-quote"
            className="w-full sm:w-auto group flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold font-[family-name:var(--font-label)] bg-gradient-to-r from-brand-gold to-brand-amber text-brand-dark hover:shadow-[0_0_20px_rgba(201,162,39,0.4)] hover:scale-105 transition-all duration-300"
          >
            Get a Free Quote
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <a
            href="tel:+917668228828"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold font-[family-name:var(--font-label)] border-2 border-white/30 text-white hover:bg-white hover:text-brand-dark transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            +91-7668228828
          </a>
        </div>
      </div>
    </section>
  );
}
