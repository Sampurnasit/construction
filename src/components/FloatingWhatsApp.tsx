"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteContent";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip on hover */}
      {isHovered && (
        <div className="hidden sm:block bg-[#2B0A0A] text-[#FACC15] text-xs font-bold py-1.5 px-3.5 rounded-full border border-[#EA580C] shadow-xl animate-in fade-in slide-in-from-right duration-200">
          Chat with BSA Enterprise
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={siteConfig.company.contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        aria-label="Contact BSA Enterprise on WhatsApp"
      >
        {/* Pulse Ripple Effect */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 fill-white stroke-[#25D366] relative z-10" />
      </a>
    </div>
  );
}
