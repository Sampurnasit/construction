"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteContent";
import {
  Compass,
  Target,
  ShieldCheck,
  CheckCircle,
  Quote,
  MapPin,
  Building,
  Award,
} from "lucide-react";

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-[#FFFDF0] relative overflow-hidden">
      {/* Decorative Background Accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#0B5D2E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4A017]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0B5D2E]/10 border border-[#D4A017]/40 px-3.5 py-1.5 rounded-full mb-3">
            <ShieldCheck className="w-4 h-4 text-[#0B5D2E]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#0B5D2E]">
              Corporate Profile &amp; Integrity
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-['Montserrat',sans-serif] text-[#063D1E] tracking-tight">
            About <span className="text-[#0B5D2E]">BSA Enterprise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4A017] to-transparent mx-auto mt-4 mb-5" />
          <p className="text-base sm:text-lg text-[#52606D] leading-relaxed">
            Registered civil engineering contractor and general order supplier rooted in Kolkata,
            dedicated to executing durable public and institutional infrastructure projects with statutory precision.
          </p>
        </div>

        {/* Top Split: Company Story & Key Operational Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          
          {/* Company Story Card */}
          <div className="lg:col-span-7 luxury-card p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#063D1E] flex items-center justify-center text-[#F2D675] shadow-md">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-['Montserrat',sans-serif] text-[#063D1E]">
                    Our Heritage &amp; Commitment
                  </h3>
                  <p className="text-xs text-[#52606D] font-medium">
                    Operating under GSTIN: {siteConfig.company.gstNo} • Kolkata, WB
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-[#1F2933]/90 text-sm sm:text-base leading-relaxed">
                <p>
                  Established in Kolkata, <strong className="text-[#0B5D2E]">BSA Enterprise</strong> has
                  steadily earned a reputation as a dependable government civil contractor and general
                  order supply partner. Operating from 35/D Regent Colony, we serve state departments,
                  municipal bodies, institutional developers, and commercial enterprises.
                </p>
                <p>
                  Our work spans essential arterial roadways, reinforced concrete drainage systems,
                  structural buildings, and bulk supply chains. We bridge the gap between engineering rigor
                  and administrative compliance, ensuring every project is delivered on schedule, within
                  budget, and strictly to government engineering codes.
                </p>
              </div>
            </div>

            {/* Core Verification Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 mt-6 border-t border-[#D4A017]/20">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-[#0B5D2E] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#063D1E]">Govt Specification Compliance</h4>
                  <p className="text-xs text-[#52606D]">Strict adherence to PWD &amp; CPWD code standards.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-[#0B5D2E] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#063D1E]">Transparent Billing</h4>
                  <p className="text-xs text-[#52606D]">Itemized BOQ formulation and verified GST invoicing.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-[#0B5D2E] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#063D1E]">Certified Materials</h4>
                  <p className="text-xs text-[#52606D]">Primary TMT bars &amp; batch-tested Grade 53 cement.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-[#0B5D2E] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#063D1E]">Kolkata Local Readiness</h4>
                  <p className="text-xs text-[#52606D]">Rapid fleet mobilization across South &amp; North Kolkata.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Founder Message Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#063D1E] to-[#042613] text-white rounded-2xl p-8 sm:p-10 border border-[#D4A017]/40 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <Quote className="absolute -top-4 -right-4 w-32 h-32 text-[#D4A017]/10 pointer-events-none" />

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#F2D675] shadow-lg shrink-0">
                  <Image
                    src="/founder.png"
                    alt="Sayantan Das - Founder"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#F2D675] block">
                    Leadership Statement
                  </span>
                  <h3 className="text-xl font-bold font-['Montserrat',sans-serif] text-white">
                    {siteConfig.founder.name}
                  </h3>
                  <p className="text-xs text-white/70">{siteConfig.founder.title}</p>
                </div>
              </div>

              <blockquote className="text-sm sm:text-base italic text-white/90 leading-relaxed border-l-2 border-[#D4A017] pl-4 my-4">
                &ldquo;{siteConfig.founder.statement}&rdquo;
              </blockquote>
            </div>

            <div className="pt-6 border-t border-[#D4A017]/30 mt-6">
              <div className="flex items-center justify-between text-xs text-[#F2D675]">
                <div className="flex items-center gap-1.5 font-medium">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>35/D Regent Colony, Kolkata - 700040</span>
                </div>
                <div className="flex items-center gap-1">
                  <Award className="w-3.5 h-3.5" />
                  <span className="font-semibold">Registered</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Split: Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div className="p-8 rounded-2xl bg-white border border-[#D4A017]/30 shadow-md hover:border-[#D4A017] transition-all group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#0B5D2E]/10 group-hover:bg-[#0B5D2E] text-[#0B5D2E] group-hover:text-[#F2D675] flex items-center justify-center transition-colors">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase text-[#D4A017] tracking-wider">Strategic Directive</span>
                <h3 className="text-xl font-bold font-['Montserrat',sans-serif] text-[#063D1E]">
                  Our Mission
                </h3>
              </div>
            </div>
            <p className="text-sm sm:text-base text-[#52606D] leading-relaxed">
              To provide government bodies and infrastructure clients in West Bengal with dependable,
              high-standard civil engineering execution and uncompromised general order procurement.
              We achieve this through ethical business conduct, skilled craftsmanship, adherence to statutory
              mandates, and an unwavering respect for client timelines.
            </p>
          </div>

          {/* Vision Card */}
          <div className="p-8 rounded-2xl bg-white border border-[#D4A017]/30 shadow-md hover:border-[#D4A017] transition-all group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#D4A017]/15 group-hover:bg-[#063D1E] text-[#C8961A] group-hover:text-[#F2D675] flex items-center justify-center transition-colors">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase text-[#0B5D2E] tracking-wider">Long-Term Goal</span>
                <h3 className="text-xl font-bold font-['Montserrat',sans-serif] text-[#063D1E]">
                  Our Vision
                </h3>
              </div>
            </div>
            <p className="text-sm sm:text-base text-[#52606D] leading-relaxed">
              To be recognized among the most respected and trusted infrastructure contracting enterprises
              in Eastern India. We strive to set benchmarks in civil works quality, occupational safety,
              and material supply efficiency, creating lasting public infrastructure that shapes a modern,
              resilient tomorrow.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
