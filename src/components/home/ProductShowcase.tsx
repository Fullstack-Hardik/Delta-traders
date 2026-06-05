"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import * as Tabs from "@radix-ui/react-tabs";
import { ScrollReveal } from "../shared/ScrollReveal";

const categories = [
  { id: "upvc-windows", name: "U-PVC Windows" },
  { id: "upvc-doors", name: "U-PVC Doors" },
  { id: "aluminium", name: "Aluminium" },
  { id: "glass", name: "Glass & Partitions" },
  { id: "specialty", name: "Specialty" },
];

// Placeholder data - using local images to ensure they load and for better performance
const dummyProducts = [
  { id: 1, category: "upvc-windows", name: "Villa Window", image: "/images/hero-1.png" },
  { id: 2, category: "upvc-windows", name: "Casement Window", image: "/images/hero-2.png" },
  { id: 3, category: "upvc-windows", name: "Tilt & Turn Window", image: "/images/hero-3.png" },
  { id: 4, category: "upvc-doors", name: "Sliding Fold Door", image: "/images/hero-2.png" },
  { id: 5, category: "aluminium", name: "Domal Windows", image: "/images/hero-1.png" },
  { id: 6, category: "glass", name: "Office Partition", image: "/images/hero-3.png" },
  { id: 7, category: "specialty", name: "Automatic Skylight", image: "/images/hero-1.png" },
];

export function ProductShowcase() {
  const [activeTab, setActiveTab] = useState(categories[0].id);

  return (
    <section className="py-24 bg-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-brand-dark mb-4">
            Explore Our Collections
          </h2>
          <p className="text-lg text-text-mid font-[family-name:var(--font-body)] max-w-2xl mx-auto">
            Discover our extensive range of premium windows, doors, and architectural solutions tailored for modern living.
          </p>
        </ScrollReveal>

        <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
          <ScrollReveal delayIndex={1} className="flex justify-center mb-12 overflow-x-auto pb-4 hide-scrollbar">
            <Tabs.List className="flex gap-2 p-1.5 bg-gray-50 rounded-full border border-gray-100 mx-auto w-max">
              {categories.map((category) => (
                <Tabs.Trigger
                  key={category.id}
                  value={category.id}
                  className="px-6 py-2.5 rounded-full text-sm font-semibold font-[family-name:var(--font-label)] transition-all duration-300 data-[state=active]:bg-brand-dark data-[state=active]:text-white data-[state=active]:shadow-md text-text-mid hover:text-brand-dark"
                >
                  {category.name}
                </Tabs.Trigger>
              ))}
            </Tabs.List>
          </ScrollReveal>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Tabs.Content value={activeTab} className="outline-none">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {dummyProducts
                    .filter((p) => p.category === activeTab)
                    .map((product) => (
                      <div key={product.id} className="group relative rounded-2xl overflow-hidden bg-gray-100 aspect-[4/3] card-3d">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Content */}
                        <div className="absolute inset-0 p-6 flex flex-col justify-end">
                          <span className="inline-block px-3 py-1 mb-3 rounded-full bg-brand-gold text-brand-dark text-xs font-bold font-[family-name:var(--font-label)] w-max">
                            {categories.find(c => c.id === product.category)?.name}
                          </span>
                          <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            {product.name}
                          </h3>
                          <Link
                            href={`/products/${product.category}`}
                            className="flex items-center gap-2 text-brand-gold text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75"
                          >
                            View Details <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    ))}
                </div>
                {dummyProducts.filter((p) => p.category === activeTab).length === 0 && (
                  <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-100 text-text-muted">
                    No products found in this category. (Placeholder)
                  </div>
                )}
                
                <div className="mt-12 flex justify-center">
                   <Link
                      href="/products"
                      className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold font-[family-name:var(--font-label)] border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white transition-colors duration-300"
                    >
                      View All Products
                    </Link>
                </div>
              </Tabs.Content>
            </motion.div>
          </AnimatePresence>
        </Tabs.Root>
      </div>
    </section>
  );
}
