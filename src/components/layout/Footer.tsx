import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "360 Views", href: "/360-views" },
  { name: "Contact", href: "/contact" },
  { name: "Get a Quote", href: "/get-quote" },
];

const productCategories = [
  { name: "U-PVC Windows", href: "/products/upvc-windows" },
  { name: "U-PVC Doors", href: "/products/upvc-doors" },
  { name: "Aluminium Systems", href: "/products/aluminium" },
  { name: "Glass Partitions", href: "/products/glass-partitions" },
  { name: "Specialty & Premium", href: "/products/specialty" },
];

export function Footer() {
  return (
    <footer className="bg-[#0d2b1a] text-white pt-20 pb-8 relative overflow-hidden">
      {/* Watermark Logo */}
      <div className="absolute right-0 bottom-0 pointer-events-none opacity-[0.03] translate-x-1/4 translate-y-1/4 w-[500px] h-[500px] rounded-full overflow-hidden">
        <Image src="/logo.png" alt="Delta Traders Logo Watermark" fill className="object-cover" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand & Social */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold font-[family-name:var(--font-display)] text-brand-gold">Delta Traders</span>
              <span className="block text-xs uppercase tracking-widest text-brand-amber">Core PSM</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Turning Vision Into Reality — Switch to Smart UPVC Window & Door Systems. Premium architectural solutions with a 20-year warranty.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-gold hover:text-brand-dark transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-gold hover:text-brand-dark transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-gold hover:text-brand-dark transition-colors" aria-label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)] mb-6 text-brand-gold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-brand-amber transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/50 group-hover:bg-brand-amber transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)] mb-6 text-brand-gold">Our Products</h3>
            <ul className="space-y-3">
              {productCategories.map((category) => (
                <li key={category.name}>
                  <Link href={category.href} className="text-sm text-white/70 hover:text-brand-amber transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/50 group-hover:bg-brand-amber transition-colors" />
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)] mb-6 text-brand-gold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-white/70">
                <MapPin className="w-5 h-5 shrink-0 text-brand-amber" />
                <span>Near Manviklan Bus Stand, Opp. Paramount City, Delhi Road, Saharanpur, Uttar Pradesh</span>
              </li>
              <li className="flex gap-3 text-sm text-white/70">
                <Phone className="w-5 h-5 shrink-0 text-brand-amber" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+917668228828" className="hover:text-brand-amber transition-colors">+91-7668228828</a>
                  <a href="tel:+917462852123" className="hover:text-brand-amber transition-colors">+91-7462852123</a>
                </div>
              </li>
              <li className="flex gap-3 text-sm text-white/70">
                <Mail className="w-5 h-5 shrink-0 text-brand-amber" />
                <a href="mailto:tradersd091@gmail.com" className="hover:text-brand-amber transition-colors">tradersd091@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p>© {new Date().getFullYear()} Delta Traders. All Rights Reserved | Saharanpur, U.P.</p>
            <p className="text-brand-amber font-semibold tracking-wider">GSTIN: 09BBVPA0036RTZ6</p>
          </div>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
