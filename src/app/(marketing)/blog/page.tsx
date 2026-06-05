"use client";

import { useState } from "react";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { SectionDivider } from "@/components/shared/SectionDivider";

const blogPosts = [
  {
    id: 1,
    title: "Why Choose uPVC Windows in Saharanpur? A Comprehensive Guide",
    excerpt: "Discover why uPVC windows are replacing traditional wooden frames in Saharanpur. From extreme weather resistance to exceptional energy efficiency, learn how the best uPVC windows near you can transform your home.",
    content: (
      <div className="space-y-4 text-text-mid mt-2 text-base leading-relaxed">
        <p>Traditional wooden frames have been the standard in Saharanpur for decades, but with changing weather patterns and an increased focus on energy efficiency, uPVC is quickly taking over. Unplasticized Polyvinyl Chloride (uPVC) is an extremely durable and rigid material that offers unmatched benefits.</p>
        <h3 className="text-xl font-bold text-brand-dark pt-2">1. Weather Resistance</h3>
        <p>Saharanpur experiences intense summers and heavy monsoons. Unlike wood, which warps and rots, or aluminium, which conducts heat, uPVC remains stable. It doesn't fade under harsh UV rays and is completely water-resistant.</p>
        <h3 className="text-xl font-bold text-brand-dark pt-2">2. Energy Efficiency</h3>
        <p>Our Core PSM uPVC profiles have multi-chambered designs that trap air, acting as excellent insulators. When combined with double glazing, they significantly reduce your AC bills in summer and heating costs in winter.</p>
        <h3 className="text-xl font-bold text-brand-dark pt-2">3. Low Maintenance</h3>
        <p>Say goodbye to regular painting and polishing. A simple wipe with soapy water is all it takes to keep uPVC windows looking brand new for decades.</p>
      </div>
    ),
    date: "May 15, 2026",
    category: "uPVC Windows",
    slug: "why-choose-upvc-windows-saharanpur",
  },
  {
    id: 2,
    title: "Soundproof uPVC Windows: The Ultimate Solution for Noisy Streets",
    excerpt: "Living near a busy road? Soundproof uPVC windows and doors might be exactly what you need. Learn how our premium casement and sliding uPVC windows dramatically reduce outside noise.",
    content: (
      <div className="space-y-4 text-text-mid mt-2 text-base leading-relaxed">
        <p>Noise pollution is a growing concern in urban areas. Whether it's traffic noise, construction, or neighborhood commotion, chronic noise exposure can severely impact your sleep and overall health.</p>
        <h3 className="text-xl font-bold text-brand-dark pt-2">How Soundproofing Works</h3>
        <p>Delta Traders' uPVC windows achieve superior acoustic insulation through three key factors:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Multi-Chambered Profiles:</strong> The internal chambers disrupt sound waves as they pass through the frame.</li>
          <li><strong>Double/Triple Glazing:</strong> Two panes of glass separated by an argon gas layer significantly deaden low-frequency noises like traffic hums.</li>
          <li><strong>Hermetic Sealing:</strong> Precision engineering and dual EPDM gaskets ensure there are no air gaps for sound to leak through.</li>
        </ul>
        <p>Customers have reported up to a 40dB reduction in outside noise after upgrading to our soundproof casement windows.</p>
      </div>
    ),
    date: "April 28, 2026",
    category: "Soundproof Solutions",
    slug: "soundproof-upvc-windows-solution",
  },
  {
    id: 3,
    title: "Sliding vs. French uPVC Doors: Which is Right for Your Home?",
    excerpt: "Both sliding uPVC doors and French doors offer elegance and functionality. We break down the pros and cons of each to help you choose the best uPVC doors for your balcony or patio in Saharanpur.",
    content: (
      <div className="space-y-4 text-text-mid mt-2 text-base leading-relaxed">
        <p>Choosing the right patio or balcony door is crucial for maximizing natural light, ventilation, and space utilization in your home.</p>
        <h3 className="text-xl font-bold text-brand-dark pt-2">Sliding uPVC Doors</h3>
        <p>Sliding doors operate on horizontal tracks, meaning they don't require any swing space. This makes them perfect for compact rooms or balconies where space is at a premium.</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Pros:</strong> Space-saving, large unbroken glass areas for unobstructed views, easy operation.</li>
          <li><strong>Cons:</strong> You can only open half the door area at a time.</li>
        </ul>
        <h3 className="text-xl font-bold text-brand-dark pt-2">French uPVC Doors</h3>
        <p>French doors consist of two hinged panels that swing open from the center, offering a classic and elegant aesthetic.</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Pros:</strong> Offers 100% opening width, superior ventilation, traditional aesthetic charm.</li>
          <li><strong>Cons:</strong> Requires clear floor space for the doors to swing open.</li>
        </ul>
        <p>If you have a spacious patio, French doors make a grand statement. For modern apartments with compact balconies, sliding doors are the practical choice.</p>
      </div>
    ),
    date: "March 10, 2026",
    category: "uPVC Doors",
    slug: "sliding-vs-french-upvc-doors",
  }
];

export default function BlogPage() {
  const [expandedPost, setExpandedPost] = useState<number | null>(null);

  return (
    <>
      <section className="bg-brand-dark pt-32 pb-20 relative overflow-hidden text-center noise-overlay">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <BreadcrumbSchema items={[{ name: "Blog", href: "/blog" }]} />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] text-white mt-6 mb-4">
            Delta Traders Blog & Insights
          </h1>
          <p className="text-lg text-white/80 font-[family-name:var(--font-body)] max-w-2xl mx-auto">
            Expert advice, tips, and news about premium uPVC and Aluminium architectural solutions in Saharanpur.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <SectionDivider fill="#f9fafb" position="bottom" />
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-brand-gold/10 text-brand-dark text-xs font-bold rounded-full font-[family-name:var(--font-label)]">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500 font-medium">
                      {post.date}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-brand-dark mb-4 leading-tight">
                    {post.title}
                  </h2>
                  
                  {expandedPost !== post.id ? (
                    <>
                      <p className="text-text-mid mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <button 
                        onClick={() => setExpandedPost(post.id)}
                        className="inline-flex items-center text-brand-dark font-bold font-[family-name:var(--font-label)] hover:text-brand-gold transition-colors"
                      >
                        Read Article 
                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </>
                  ) : (
                    <>
                      <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                        {post.content}
                      </div>
                      <button 
                        onClick={() => setExpandedPost(null)}
                        className="mt-8 inline-flex items-center px-4 py-2 bg-brand-dark text-white rounded-lg font-bold font-[family-name:var(--font-label)] hover:bg-brand-mid transition-colors"
                      >
                        <svg className="w-4 h-4 mr-2 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                        Show Less
                      </button>
                    </>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
