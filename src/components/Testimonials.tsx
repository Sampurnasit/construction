"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteContent";
import { Star, Quote, CheckCircle2, Building2, MapPin, ArrowRight, ShieldCheck, ThumbsUp } from "lucide-react";

export default function Testimonials() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Reviews" },
    { id: "civil", label: "Civil Infrastructure" },
    { id: "building", label: "Building Works" },
    { id: "materials", label: "General Order Supply" },
    { id: "municipal", label: "Municipal Projects" },
  ];

  const filteredTestimonials = selectedCategory === "all"
    ? siteConfig.testimonials
    : siteConfig.testimonials.filter(t => t.category === selectedCategory);

  return (
    <section id="testimonials" className="py-24 bg-[#140202] text-white relative overflow-hidden">
      {/* Decorative Background Lighting Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#DC2626]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#EA580C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#FACC15_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#DC2626]/20 text-[#FACC15] border border-[#FACC15]/30 uppercase tracking-widest mb-4">
            <ThumbsUp className="w-3.5 h-3.5 text-[#FACC15]" />
            <span>Client Endorsements &amp; Performance Record</span>
          </div>

          <h2 className="font-['Montserrat',sans-serif] text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Trusted by <span className="text-[#FACC15]">Government</span> &amp; Industry Leaders
          </h2>

          <p className="text-base sm:text-lg text-white/80 leading-relaxed font-light">
            Direct feedback from municipal project directors, institutional developers, and procurement authorities across Kolkata and West Bengal who rely on our civil execution and material supply.
          </p>
        </div>

        {/* Trust Badges Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12">
          <div className="bg-[#1E0404]/90 border border-[#EA580C]/30 rounded-xl p-4 text-center">
            <div className="font-['Montserrat',sans-serif] font-black text-2xl sm:text-3xl text-[#FACC15]">5.0 / 5</div>
            <div className="text-xs sm:text-sm text-white/80 font-medium mt-1">Average Client Rating</div>
          </div>
          <div className="bg-[#1E0404]/90 border border-[#EA580C]/30 rounded-xl p-4 text-center">
            <div className="font-['Montserrat',sans-serif] font-black text-2xl sm:text-3xl text-[#FACC15]">100%</div>
            <div className="text-xs sm:text-sm text-white/80 font-medium mt-1">Statutory &amp; GST Compliance</div>
          </div>
          <div className="bg-[#1E0404]/90 border border-[#EA580C]/30 rounded-xl p-4 text-center">
            <div className="font-['Montserrat',sans-serif] font-black text-2xl sm:text-3xl text-[#FACC15]">50+</div>
            <div className="text-xs sm:text-sm text-white/80 font-medium mt-1">Major Executions Handed Over</div>
          </div>
          <div className="bg-[#1E0404]/90 border border-[#EA580C]/30 rounded-xl p-4 text-center">
            <div className="font-['Montserrat',sans-serif] font-black text-2xl sm:text-3xl text-[#FACC15]">0 Days</div>
            <div className="text-xs sm:text-sm text-white/80 font-medium mt-1">Tender Specification Variance</div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-[#DC2626] text-white shadow-lg shadow-[#DC2626]/30 border border-[#FACC15]/60 scale-105"
                  : "bg-[#250808] text-white/70 hover:text-white hover:bg-[#350d0d] border border-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredTestimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[#200505]/90 border border-[#EA580C]/25 hover:border-[#FACC15]/60 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#DC2626]/20 group relative"
            >
              <div className="absolute top-5 right-5 text-white/10 group-hover:text-[#FACC15]/20 transition-colors">
                <Quote className="w-10 h-10" />
              </div>

              <div>
                {/* Star Rating & Verified Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-[#FACC15] text-[#FACC15]" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#FACC15] bg-[#DC2626]/30 px-2.5 py-0.5 rounded-full border border-[#FACC15]/30">
                    <CheckCircle2 className="w-3 h-3 text-[#FACC15]" /> Verified Client
                  </span>
                </div>

                {/* Project Tag */}
                <div className="mb-4">
                  <span className="inline-block text-[11px] font-semibold tracking-wider uppercase text-[#EA580C] bg-[#EA580C]/10 border border-[#EA580C]/20 px-2.5 py-1 rounded-md">
                    {t.project}
                  </span>
                </div>

                {/* Quote Content */}
                <p className="text-white/90 text-sm sm:text-base leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#DC2626] to-[#EA580C] flex items-center justify-center text-white font-black text-sm tracking-wider shadow-md shrink-0">
                  {t.name
                    .replace(/^(Er\.|Dr\.|Mr\.)\s*/, "")
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>

                <div className="overflow-hidden">
                  <h4 className="font-['Montserrat',sans-serif] font-bold text-sm text-white truncate">
                    {t.name}
                  </h4>
                  <p className="text-xs text-[#FACC15] truncate font-medium">
                    {t.designation}
                  </p>
                  <p className="text-[11px] text-white/60 truncate flex items-center gap-1 mt-0.5">
                    <Building2 className="w-3 h-3 text-[#EA580C] shrink-0" />
                    <span className="truncate">{t.organization}</span>
                  </p>
                  <p className="text-[10px] text-white/50 truncate flex items-center gap-1 mt-0.5">
                    <MapPin className="w-2.5 h-2.5 text-white/40 shrink-0" />
                    <span>{t.location}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action Banner */}
        <div className="bg-gradient-to-r from-[#2A0606] via-[#1E0404] to-[#2A0606] border border-[#EA580C]/40 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left relative z-10">
            <div className="max-w-2xl">
              <span className="text-xs font-bold text-[#FACC15] tracking-widest uppercase inline-flex items-center gap-1.5 mb-2">
                <ShieldCheck className="w-4 h-4 text-[#FACC15]" /> Official Govt Civil Contractor
              </span>
              <h3 className="font-['Montserrat',sans-serif] text-2xl sm:text-3xl font-black text-white">
                Have an Upcoming Civil Tender or Supply Requirement?
              </h3>
              <p className="text-sm text-white/80 mt-2 font-light">
                Consult directly with Founder Sayantan Das for precise BOQ estimates, certified material procurement, and verified milestone handovers.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold btn-gold-shimmer text-white shadow-xl hover:scale-105 transition-transform"
              >
                <span>Request a Free Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={siteConfig.company.contact.phoneTel}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
              >
                <span>Call {siteConfig.company.contact.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
