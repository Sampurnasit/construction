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
        return <HardHat className="w-8 h-8 text-[#063D1E]" />;
      case "PackageCheck":
        return <PackageCheck className="w-8 h-8 text-[#063D1E]" />;
      case "Building2":
        return <Building2 className="w-8 h-8 text-[#063D1E]" />;
      case "Handshake":
        return <Handshake className="w-8 h-8 text-[#063D1E]" />;
      default:
        return <HardHat className="w-8 h-8 text-[#063D1E]" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Background Subtle Geometry */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0B5D2E_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0B5D2E]/10 border border-[#D4A017]/40 px-3.5 py-1.5 rounded-full mb-3">
            <Sparkles className="w-4 h-4 text-[#C8961A]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#0B5D2E]">
              Core Competencies &amp; Execution
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-['Montserrat',sans-serif] text-[#063D1E] tracking-tight">
            Our Specialized <span className="text-[#0B5D2E]">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4A017] to-transparent mx-auto mt-4 mb-5" />
          <p className="text-base sm:text-lg text-[#52606D] leading-relaxed">
            From municipal civil contracts to turnkey buildings and certified material procurement,
            BSA Enterprise provides robust execution for institutional and public projects.
          </p>
        </div>

        {/* 4 Elegant Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteConfig.services.map((service, index) => (
            <div
              key={service.id}
              className="luxury-card p-8 sm:p-10 flex flex-col justify-between group hover:border-[#D4A017] transition-all relative overflow-hidden"
            >
              {/* Corner Watermark Number */}
              <div className="absolute top-4 right-6 font-['Montserrat',sans-serif] font-black text-6xl text-[#0B5D2E]/5 select-none pointer-events-none group-hover:text-[#D4A017]/10 transition-colors">
                0{index + 1}
              </div>

              <div>
                {/* Top Icon & Badge Row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F2D675] to-[#C8961A] p-0.5 shadow-md group-hover:scale-105 transition-transform">
                    <div className="w-full h-full bg-[#FFFDF0] rounded-[14px] flex items-center justify-center">
                      {getIcon(service.icon)}
                    </div>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#0B5D2E]/10 text-[#0B5D2E] border border-[#0B5D2E]/20">
                    {service.tag}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-2xl font-black font-['Montserrat',sans-serif] text-[#063D1E] group-hover:text-[#0B5D2E] transition-colors mb-3">
                  {service.title}
                </h3>

                {/* Short & Detailed Descriptions */}
                <p className="text-sm font-semibold text-[#1F2933] mb-3 leading-relaxed">
                  {service.shortDesc}
                </p>
                <p className="text-xs sm:text-sm text-[#52606D] leading-relaxed mb-6">
                  {service.fullDesc}
                </p>

                {/* Service Deliverables List */}
                <div className="space-y-2.5 mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#063D1E] block">
                    Key Deliverables:
                  </span>
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#1F2933]/90">
                      <CheckCircle2 className="w-4 h-4 text-[#0B5D2E] shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Inquire Button */}
              <div className="pt-6 border-t border-[#D4A017]/20 flex items-center justify-between">
                <a
                  href={`#contact?service=${encodeURIComponent(service.title)}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#063D1E] group-hover:text-[#C8961A] transition-colors"
                >
                  <span>Inquire for {service.title}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </a>
                <span className="text-xs font-semibold text-[#52606D]">Kolkata &amp; WB</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Strip for Tender Queries */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#063D1E] text-white border border-[#D4A017]/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold font-['Montserrat',sans-serif] text-[#F2D675]">
              Looking for a Government Tender Bidder or Material Partner?
            </h4>
            <p className="text-xs sm:text-sm text-white/80 max-w-xl">
              We provide formal quotations, BOQ reviews, and statutory EMD documentation for government civil projects.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl text-sm font-bold btn-gold-shimmer"
            >
              Submit Tender Spec
            </a>
            <a
              href={siteConfig.company.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl text-sm font-semibold border border-[#D4A017] text-[#F2D675] hover:bg-[#D4A017]/15 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
