"use client";

import React from "react";
import { siteConfig } from "@/data/siteContent";
import {
  FileText,
  MapPin,
  Calculator,
  HardHat,
  CheckCircle2,
  Workflow,
} from "lucide-react";

export default function ProcessTimeline() {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <FileText className="w-6 h-6 text-[#DC2626]" />;
      case 1:
        return <MapPin className="w-6 h-6 text-[#DC2626]" />;
      case 2:
        return <Calculator className="w-6 h-6 text-[#DC2626]" />;
      case 3:
        return <HardHat className="w-6 h-6 text-[#DC2626]" />;
      case 4:
        return <CheckCircle2 className="w-6 h-6 text-[#DC2626]" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-[#DC2626]" />;
    }
  };

  return (
    <section id="process" className="py-20 bg-[#FFFBF5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#DC2626]/10 border border-[#EA580C]/40 px-3.5 py-1.5 rounded-full mb-3">
            <Workflow className="w-4 h-4 text-[#DC2626]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
              Systematic Workflow
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-['Montserrat',sans-serif] text-[#1C1917] tracking-tight">
            Our Proven <span className="text-[#DC2626]">Process</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#EA580C] to-transparent mx-auto mt-4 mb-5" />
          <p className="text-base sm:text-lg text-[#57534E] leading-relaxed">
            Every civil contract and material supply mandate follows an orderly, accountable 5-stage lifecycle.
          </p>
        </div>

        {/* Desktop Connected Horizontal Timeline */}
        <div className="hidden lg:block relative my-12">
          {/* Continuous Red-Orange-Yellow Connecting Line */}
          <div className="absolute top-1/2 left-10 right-10 -translate-y-8 h-1 bg-gradient-to-r from-[#DC2626] via-[#EA580C] to-[#FACC15] z-0 opacity-80" />

          <div className="grid grid-cols-5 gap-6 relative z-10">
            {siteConfig.process.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                {/* Step Circle with Icon */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#EA580C] to-[#FACC15] p-1 shadow-xl group-hover:scale-110 transition-transform">
                    <div className="w-full h-full rounded-full bg-[#FFFBF5] flex items-center justify-center border-2 border-[#DC2626]">
                      {getStepIcon(idx)}
                    </div>
                  </div>
                  {/* Step Number Badge */}
                  <span className="absolute -top-1 -right-1 bg-[#2B0A0A] text-[#FACC15] text-xs font-black px-2 py-0.5 rounded-full border border-[#EA580C] shadow-md">
                    {step.step}
                  </span>
                </div>

                {/* Content Box */}
                <div className="luxury-card p-5 w-full min-h-[170px] flex flex-col justify-start group-hover:border-[#EA580C] transition-all">
                  <h3 className="font-['Montserrat',sans-serif] font-bold text-base text-[#1C1917] mb-2 group-hover:text-[#DC2626] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#57534E] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet Vertical Timeline */}
        <div className="lg:hidden space-y-6">
          {siteConfig.process.map((step, idx) => (
            <div
              key={idx}
              className="luxury-card p-6 flex items-start gap-4 hover:border-[#EA580C] transition-all relative overflow-hidden"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FACC15] to-[#EA580C] p-0.5 shrink-0 shadow-md">
                <div className="w-full h-full bg-[#FFFBF5] rounded-[14px] flex items-center justify-center">
                  {getStepIcon(idx)}
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-['Montserrat',sans-serif] font-bold text-lg text-[#1C1917]">
                    {step.title}
                  </h3>
                  <span className="text-xs font-black text-[#FACC15] bg-[#2B0A0A] px-2.5 py-0.5 rounded-full border border-[#EA580C]/40">
                    Step {step.step}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
