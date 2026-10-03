"use client";

import React from "react";
import { siteConfig } from "@/data/siteContent";
import {
  Award,
  Clock,
  ReceiptIndianRupee,
  ShieldCheck,
  Users,
  FlameKindling,
  CheckCircle,
  Building,
} from "lucide-react";

export default function WhyChooseUs() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Award":
        return <Award className="w-7 h-7 text-[#F2D675]" />;
      case "Clock":
        return <Clock className="w-7 h-7 text-[#F2D675]" />;
      case "ReceiptIndianRupee":
        return <ReceiptIndianRupee className="w-7 h-7 text-[#F2D675]" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-7 h-7 text-[#F2D675]" />;
      case "Users":
        return <Users className="w-7 h-7 text-[#F2D675]" />;
      case "FlameKindling":
        return <FlameKindling className="w-7 h-7 text-[#F2D675]" />;
      default:
        return <ShieldCheck className="w-7 h-7 text-[#F2D675]" />;
    }
  };

  return (
    <section id="why-us" className="py-20 bg-gradient-to-b from-[#063D1E] via-[#0B5D2E] to-[#042613] text-white relative overflow-hidden">
      {/* Ambient Metallic Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#D4A017]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#F2D675]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#042613] border border-[#D4A017]/50 px-3.5 py-1.5 rounded-full mb-3 shadow-md">
            <ShieldCheck className="w-4 h-4 text-[#F2D675]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#F2D675]">
              Proven Reliability &amp; Standards
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-['Montserrat',sans-serif] tracking-tight">
            Why Choose <span className="gold-gradient-text">BSA Enterprise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#F2D675] to-transparent mx-auto mt-4 mb-5" />
          <p className="text-base sm:text-lg text-white/85 leading-relaxed">
            We adhere to unyielding standards in engineering precision, transparent billing,
            and strict government compliance to turn complex infrastructure concepts into enduring reality.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.whyChooseUs.map((item, idx) => (
            <div
              key={idx}
              className="luxury-card-green p-7 sm:p-8 flex flex-col justify-between group hover:border-[#F2D675] transition-all"
            >
              <div>
                {/* Icon in gold accent circle */}
                <div className="w-14 h-14 rounded-2xl bg-[#042613] border border-[#D4A017]/40 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-[#F2D675] transition-all shadow-lg">
                  {getIcon(item.icon)}
                </div>

                <h3 className="text-xl font-bold font-['Montserrat',sans-serif] text-white group-hover:text-[#F2D675] transition-colors mb-2.5">
                  {item.title}
                </h3>

                <p className="text-sm text-white/80 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Indicator Pill */}
              <div className="pt-5 mt-5 border-t border-[#D4A017]/20 flex items-center justify-between text-xs text-[#F2D675]">
                <span className="font-semibold">Standard 0{idx + 1}</span>
                <CheckCircle className="w-4 h-4 text-[#F2D675]" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Quote Bar */}
        <div className="mt-14 p-6 sm:p-7 rounded-2xl bg-[#042613]/90 border border-[#D4A017]/40 max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
          <div className="w-14 h-14 rounded-full bg-[#0B5D2E] border border-[#F2D675] flex items-center justify-center shrink-0 shadow-md">
            <Building className="w-7 h-7 text-[#F2D675]" />
          </div>
          <div className="flex-1">
            <h4 className="text-base font-bold text-white font-['Montserrat',sans-serif]">
              Government Civil Contractor • Kolkata &amp; West Bengal
            </h4>
            <p className="text-xs sm:text-sm text-white/75 mt-0.5">
              Available for municipal tender bids, PWD subcontracts, and high-volume construction material supplies across West Bengal.
            </p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-lg text-xs font-bold btn-gold-shimmer shrink-0"
          >
            Initiate Contact
          </a>
        </div>

      </div>
    </section>
  );
}
