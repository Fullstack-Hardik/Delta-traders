"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const productCategories = [
  {
    title: "U-PVC Windows",
    href: "/products/upvc-windows",
    items: [
      { name: "Villa Window", href: "/products/upvc-windows/villa-window" },
      { name: "Casement Window", href: "/products/upvc-windows/casement-window" },
      { name: "Tilt & Turn Window", href: "/products/upvc-windows/tilt-turn-window" },
      { name: "Three Track Window", href: "/products/upvc-windows/three-track-window" },
      { name: "Fix Window", href: "/products/upvc-windows/fix-window" },
    ],
  },
  {
    title: "U-PVC Doors",
    href: "/products/upvc-doors",
    items: [
      { name: "Sliding & Fold Door", href: "/products/upvc-doors/sliding-fold-door" },
      { name: "Double Door", href: "/products/upvc-doors/double-door" },
      { name: "Villa Door", href: "/products/upvc-doors/villa-door" },
    ],
  },
  {
    title: "Aluminium Systems",
    href: "/products/aluminium",
    items: [
      { name: "Domal Windows", href: "/products/aluminium/domal-windows" },
      { name: "Telescopic Sliding Door", href: "/products/aluminium/telescopic-sliding-door" },
      { name: "Glass Railing", href: "/products/aluminium/glass-railing" },
      { name: "Modern Kitchen", href: "/products/aluminium/kitchen" },
      { name: "Aluminium Almirah", href: "/products/aluminium/almirah" },
      { name: "Louvers Gate", href: "/products/aluminium/louvers-gate" },
    ],
  },
  {
    title: "Glass & Specialty",
    href: "/products/glass-partitions",
    items: [
      { name: "Office Partition", href: "/products/glass-partitions/office-partition" },
      { name: "Shower Partition", href: "/products/glass-partitions/shower-partition" },
      { name: "Switchable Smart Glass", href: "/products/glass-partitions/switchable-film" },
      { name: "Automatic Skylight", href: "/products/specialty/skylight-system" },
      { name: "ACP Elevation", href: "/products/specialty/acp-elevation" },
      { name: "CNC Railing", href: "/products/specialty/cnc-railing" },
    ],
  },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products", hasMegaMenu: true },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        (scrolled || mobileOpen)
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Delta Traders Home">
            <div className="relative w-16 h-16 flex items-center justify-center rounded-full overflow-hidden shadow-sm border border-brand-gold/20">
              <Image src="/logo.png" alt="Delta Traders Logo" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span
                className={cn(
                  "text-lg font-bold font-[family-name:var(--font-label)] tracking-tight leading-tight transition-colors duration-300",
                  (scrolled || mobileOpen) ? "text-brand-dark" : "text-white"
                )}
              >
                Delta Traders
              </span>
              <span
                className={cn(
                  "text-[10px] font-medium uppercase tracking-[0.15em] leading-tight transition-colors duration-300",
                  (scrolled || mobileOpen) ? "text-brand-gold" : "text-brand-amber"
                )}
              >
                Core PSM
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.hasMegaMenu ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setMegaMenuOpen(true)}
                  onMouseLeave={() => setMegaMenuOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium font-[family-name:var(--font-label)] transition-all duration-200",
                      scrolled
                        ? "text-text-dark hover:bg-brand-dark/5 hover:text-brand-dark"
                        : "text-white/90 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    {link.name}
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform duration-200",
                        megaMenuOpen && "rotate-180"
                      )}
                    />
                  </Link>

                  {/* Mega Menu */}
                  <div
                    className={cn(
                      "absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200",
                      megaMenuOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    )}
                  >
                    <div className="w-[720px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 grid grid-cols-4 gap-6">
                      {productCategories.map((category) => (
                        <div key={category.title}>
                          <Link
                            href={category.href}
                            className="text-sm font-bold text-brand-dark font-[family-name:var(--font-label)] mb-3 block hover:text-brand-mid transition-colors"
                          >
                            {category.title}
                          </Link>
                          <ul className="space-y-1.5">
                            {category.items.map((item) => (
                              <li key={item.name}>
                                <Link
                                  href={item.href}
                                  className="text-sm text-text-mid hover:text-brand-dark hover:translate-x-0.5 transition-all duration-150 block py-0.5"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <div className="col-span-4 mt-2 pt-4 border-t border-gray-100">
                        <Link
                          href="/products"
                          className="text-sm font-semibold text-brand-gold hover:text-brand-dark transition-colors font-[family-name:var(--font-label)]"
                        >
                          View All Products →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium font-[family-name:var(--font-label)] transition-all duration-200",
                    scrolled
                      ? "text-text-dark hover:bg-brand-dark/5 hover:text-brand-dark"
                      : "text-white/90 hover:bg-white/10 hover:text-white"
                  )}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Right Side CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+917668228828"
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium font-[family-name:var(--font-label)] border transition-all duration-200",
                scrolled
                  ? "border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white"
                  : "border-white/40 text-white hover:bg-white/10"
              )}
            >
              <Phone className="w-4 h-4" />
              Call
            </a>
            <Link
              href="/get-quote"
              className="px-5 py-2.5 rounded-full text-sm font-bold font-[family-name:var(--font-label)] bg-gradient-to-r from-brand-gold to-brand-amber text-brand-dark hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              (scrolled || mobileOpen) ? "text-brand-dark" : "text-white"
            )}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>
    </header>

    {/* Mobile Drawer */}
    <div
      className={cn(
        "fixed inset-0 top-20 z-40 lg:hidden transition-all duration-300",
        mobileOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      )}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={() => setMobileOpen(false)}
      />

      {/* Drawer */}
      <div
        className={cn(
          "absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-300 overflow-y-auto",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-6 space-y-2 pb-24">
          {navLinks.map((link) =>
            link.hasMegaMenu ? (
              <div key={link.name}>
                <button
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-text-dark font-medium font-[family-name:var(--font-label)] hover:bg-brand-dark/5 transition-colors"
                >
                  Products
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      mobileProductsOpen && "rotate-180"
                    )}
                  />
                </button>
                {mobileProductsOpen && (
                  <div className="ml-4 mt-1 space-y-3 pb-2">
                    {productCategories.map((cat) => (
                      <div key={cat.title}>
                        <Link
                          href={cat.href}
                          onClick={() => setMobileOpen(false)}
                          className="text-xs font-bold text-brand-dark uppercase tracking-wider block px-4 py-1"
                        >
                          {cat.title}
                        </Link>
                        {cat.items.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-4 py-1.5 text-sm text-text-mid hover:text-brand-dark transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 rounded-xl text-text-dark font-medium font-[family-name:var(--font-label)] hover:bg-brand-dark/5 transition-colors"
              >
                {link.name}
              </Link>
            )
          )}

          <div className="pt-4 space-y-3 border-t border-gray-100">
            <Link
              href="/get-quote"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center px-6 py-3 rounded-full font-bold font-[family-name:var(--font-label)] bg-gradient-to-r from-brand-gold to-brand-amber text-brand-dark"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:+917668228828"
              className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full font-medium font-[family-name:var(--font-label)] border border-brand-dark text-brand-dark"
            >
              <Phone className="w-4 h-4" />
              Call Now — +91-7668228828
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
