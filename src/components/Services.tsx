"use client";

import React from "react";
import { siteConfig } from "@/data/siteContent";
import {
  HardHat,
  PackageCheck,
  Building2,
  Handshake,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function Services() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "HardHat":
        return <HardHat className="w-8 h-8 text-[#DC2626]" />;
      case "PackageCheck":
        return <PackageCheck className="w-8 h-8 text-[#DC2626]" />;
      case "Building2":
        return <Building2 className="w-8 h-8 text-[#DC2626]" />;
      case "Handshake":
        return <Handshake className="w-8 h-8 text-[#DC2626]" />;
      default:
        return <HardHat className="w-8 h-8 text-[#DC2626]" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Background Subtle Geometry */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#EA580C_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#DC2626]/10 border border-[#EA580C]/40 px-3.5 py-1.5 rounded-full mb-3">
            <Sparkles className="w-4 h-4 text-[#EA580C]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
              Core Competencies &amp; Execution
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-['Montserrat',sans-serif] text-[#1C1917] tracking-tight">
            Our Specialized <span className="text-[#DC2626]">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#EA580C] to-transparent mx-auto mt-4 mb-5" />
          <p className="text-base sm:text-lg text-[#57534E] leading-relaxed">
            From municipal civil contracts to turnkey buildings and certified material procurement,
            BSA Enterprise provides robust execution for institutional and public projects.
          </p>
        </div>

        {/* 4 Elegant Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteConfig.services.map((service, index) => (
            <div
              key={service.id}
              className="luxury-card p-8 sm:p-10 flex flex-col justify-between group hover:border-[#EA580C] transition-all relative overflow-hidden"
            >
              {/* Corner Watermark Number */}
              <div className="absolute top-4 right-6 font-['Montserrat',sans-serif] font-black text-6xl text-[#DC2626]/5 select-none pointer-events-none group-hover:text-[#EA580C]/15 transition-colors">
                0{index + 1}
              </div>

              <div>
                {/* Top Icon & Badge Row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FACC15] via-[#EA580C] to-[#DC2626] p-0.5 shadow-md group-hover:scale-105 transition-transform">
                    <div className="w-full h-full bg-[#FFFBF5] rounded-[14px] flex items-center justify-center">
                      {getIcon(service.icon)}
                    </div>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#EA580C]/10 text-[#EA580C] border border-[#EA580C]/25">
                    {service.tag}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-2xl font-black font-['Montserrat',sans-serif] text-[#1C1917] group-hover:text-[#DC2626] transition-colors mb-3">
                  {service.title}
                </h3>

                {/* Short & Detailed Descriptions */}
                <p className="text-sm font-semibold text-[#1C1917] mb-3 leading-relaxed">
                  {service.shortDesc}
                </p>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed mb-6">
                  {service.fullDesc}
                </p>

                {/* Service Deliverables List */}
                <div className="space-y-2.5 mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1C1917] block">
                    Key Deliverables:
                  </span>
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#1C1917]/90">
                      <CheckCircle2 className="w-4 h-4 text-[#DC2626] shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Inquire Button */}
              <div className="pt-6 border-t border-[#EA580C]/20 flex items-center justify-between">
                <a
                  href={`#contact?service=${encodeURIComponent(service.title)}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#1C1917] group-hover:text-[#EA580C] transition-colors"
                >
                  <span>Inquire for {service.title}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </a>
                <span className="text-xs font-semibold text-[#57534E]">Kolkata &amp; WB</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Strip for Tender Queries */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#2B0A0A] via-[#3A0B0B] to-[#1A0505] text-white border border-[#EA580C]/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold font-['Montserrat',sans-serif] text-[#FACC15]">
              Looking for a Government Tender Bidder or Material Partner?
            </h4>
            <p className="text-xs sm:text-sm text-white/80 max-w-xl">
              We provide formal quotations, BOQ reviews, and statutory EMD documentation for government civil projects.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl text-sm font-bold btn-gold-shimmer text-white shadow-lg"
            >
              Submit Tender Spec
            </a>
            <a
              href={siteConfig.company.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl text-sm font-semibold border border-[#EA580C] text-[#FACC15] hover:bg-[#EA580C]/15 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
