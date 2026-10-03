"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteContent";
import { HelpCircle, ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#FFFDF0] relative overflow-hidden border-t border-[#D4A017]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#0B5D2E]/10 border border-[#D4A017]/40 px-3.5 py-1.5 rounded-full mb-3">
            <HelpCircle className="w-4 h-4 text-[#0B5D2E]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#0B5D2E]">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-['Montserrat',sans-serif] text-[#063D1E] tracking-tight">
            Client &amp; Tender <span className="text-[#0B5D2E]">Inquiries</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4A017] to-transparent mx-auto mt-4 mb-4" />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {siteConfig.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="luxury-card overflow-hidden transition-all duration-200 border border-[#D4A017]/30"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-['Montserrat',sans-serif] font-bold text-base sm:text-lg text-[#063D1E]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#D4A017] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#0B5D2E]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#52606D] leading-relaxed border-t border-[#D4A017]/15 animate-in fade-in slide-in-from-top-1 duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
