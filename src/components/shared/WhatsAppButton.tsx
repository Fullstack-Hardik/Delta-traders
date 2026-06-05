"use client";

import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "917668228828";
const DEFAULT_MESSAGE = encodeURIComponent(
  "Hi! I am interested in your UPVC windows/doors. Please share details."
);

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${DEFAULT_MESSAGE}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group animate-pulse-gold"
    >
      <MessageCircle className="w-7 h-7 fill-current" />
      <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-gray-900 text-white text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chat with us
      </span>
    </a>
  );
}
