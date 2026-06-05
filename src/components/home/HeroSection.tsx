"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FloatingBadge } from "../shared/FloatingBadge";

const heroImages = [
  { src: "/images/hero-1.png", alt: "Premium UPVC Sliding Window" },
  { src: "/images/hero-2.png", alt: "Grand UPVC French Door" },
  { src: "/images/hero-3.png", alt: "Modern Villa Exterior with UPVC Windows" },
];

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex items-center pt-20 overflow-hidden bg-brand-dark">
      {/* Background Image Slider */}
      {heroImages.map((img, index) => (
        <div
          key={img.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            priority={index === 0}
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-transparent" />
        </div>
      ))}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 lg:py-0 mt-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="max-w-2xl text-center lg:text-left">
            <h1 className="text-white mb-6 animate-[fadeUp_0.8s_ease_forwards]">
              <span className="block text-lg md:text-xl font-bold font-[family-name:var(--font-heading)] text-brand-gold mb-3 tracking-wider uppercase">
                Best UPVC Windows in Saharanpur
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Turning Vision Into Reality
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl mx-auto lg:mx-0 font-[family-name:var(--font-body)] animate-[fadeUp_0.8s_ease_0.2s_forwards] opacity-0">
              Transform your living spaces with premium architectural solutions. 
              Engineered for durability, designed for elegance, and backed by our 20-year warranty across North India.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-[fadeUp_0.8s_ease_0.4s_forwards] opacity-0">
              <Link
                href="/products"
                className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold font-[family-name:var(--font-label)] bg-gradient-to-r from-brand-gold to-brand-amber text-brand-dark hover:shadow-[0_0_20px_rgba(201,162,39,0.4)] hover:scale-105 transition-all duration-300"
              >
                Explore Products
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/get-quote"
                className="flex items-center justify-center px-8 py-4 rounded-full font-bold font-[family-name:var(--font-label)] border-2 border-white/40 text-white hover:bg-white hover:text-brand-dark transition-all duration-300 backdrop-blur-sm"
              >
                Get Free Quote
              </Link>
            </div>
          </div>

          {/* Right Area for Floating Badges (Replacing SVG) */}
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full hidden sm:block animate-[fadeUp_1s_ease_0.6s_forwards] opacity-0">
            {/* Floating Badges overlaid on the background */}
            <FloatingBadge className="top-[20%] left-[10%] backdrop-blur-md bg-white/10 border-white/20 text-white" delayIndex={1}>
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
              20 Year Warranty
            </FloatingBadge>
            
            <FloatingBadge className="bottom-[30%] right-[10%] backdrop-blur-md bg-white/10 border-white/20 text-white" delayIndex={2}>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              UPVC Near Me
            </FloatingBadge>
            
            <FloatingBadge className="top-[50%] right-[20%] backdrop-blur-md bg-white/10 border-white/20 text-white" delayIndex={3}>
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Termite Proof
            </FloatingBadge>
          </div>
        </div>
      </div>

      {/* Marquee Bottom Strip */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-black/50 backdrop-blur-md border-t border-white/10 flex items-center z-20">
        <div className="marquee-container w-full">
          <div className="marquee-content text-brand-gold font-[family-name:var(--font-label)] text-sm tracking-widest uppercase">
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i} className="mx-4">
                Termite Proof • Corrosion Free • 100% UV Resistant • 20 Year Warranty • Sound Insulation • Maintenance Free • Eco Friendly • Fire Resistant • 
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
