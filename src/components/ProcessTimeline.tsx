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
        return <FileText className="w-6 h-6 text-[#063D1E]" />;
      case 1:
        return <MapPin className="w-6 h-6 text-[#063D1E]" />;
      case 2:
        return <Calculator className="w-6 h-6 text-[#063D1E]" />;
      case 3:
        return <HardHat className="w-6 h-6 text-[#063D1E]" />;
      case 4:
        return <CheckCircle2 className="w-6 h-6 text-[#063D1E]" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-[#063D1E]" />;
    }
  };

  return (
    <section id="process" className="py-20 bg-[#FFFDF0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0B5D2E]/10 border border-[#D4A017]/40 px-3.5 py-1.5 rounded-full mb-3">
            <Workflow className="w-4 h-4 text-[#0B5D2E]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#0B5D2E]">
              Systematic Workflow
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-['Montserrat',sans-serif] text-[#063D1E] tracking-tight">
            Our Proven <span className="text-[#0B5D2E]">Process</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4A017] to-transparent mx-auto mt-4 mb-5" />
          <p className="text-base sm:text-lg text-[#52606D] leading-relaxed">
            Every civil contract and material supply mandate follows an orderly, accountable 5-stage lifecycle.
          </p>
        </div>

        {/* Desktop Connected Horizontal Timeline */}
        <div className="hidden lg:block relative my-12">
          {/* Continuous Gold Connecting Line */}
          <div className="absolute top-1/2 left-10 right-10 -translate-y-8 h-1 bg-gradient-to-r from-[#D4A017] via-[#F2D675] to-[#8C6A0E] z-0 opacity-70" />

          <div className="grid grid-cols-5 gap-6 relative z-10">
            {siteConfig.process.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                {/* Step Circle with Icon */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#C8961A] to-[#F2D675] p-1 shadow-xl group-hover:scale-110 transition-transform">
                    <div className="w-full h-full rounded-full bg-[#FFFDF0] flex items-center justify-center border-2 border-[#0B5D2E]">
                      {getStepIcon(idx)}
                    </div>
                  </div>
                  {/* Step Number Badge */}
                  <span className="absolute -top-1 -right-1 bg-[#063D1E] text-[#F2D675] text-xs font-black px-2 py-0.5 rounded-full border border-[#D4A017] shadow-md">
                    {step.step}
                  </span>
                </div>

                {/* Content Box */}
                <div className="luxury-card p-5 w-full min-h-[170px] flex flex-col justify-start group-hover:border-[#D4A017] transition-all">
                  <h3 className="font-['Montserrat',sans-serif] font-bold text-base text-[#063D1E] mb-2 group-hover:text-[#0B5D2E] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#52606D] leading-relaxed">
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
              className="luxury-card p-6 flex items-start gap-4 hover:border-[#D4A017] transition-all relative overflow-hidden"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F2D675] to-[#C8961A] p-0.5 shrink-0 shadow-md">
                <div className="w-full h-full bg-[#FFFDF0] rounded-[14px] flex items-center justify-center">
                  {getStepIcon(idx)}
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-['Montserrat',sans-serif] font-bold text-lg text-[#063D1E]">
                    {step.title}
                  </h3>
                  <span className="text-xs font-black text-[#D4A017] bg-[#063D1E] px-2.5 py-0.5 rounded-full">
                    Step {step.step}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#52606D] leading-relaxed">
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
