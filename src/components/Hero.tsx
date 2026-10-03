"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteContent";
import { ShieldCheck, ArrowRight, Award, FileCheck2, Building2, CheckCircle2, PhoneCall } from "lucide-react";

// Animated counter helper
function CounterItem({
  value,
  suffix = "",
  label,
  subtext,
}: {
  value: number;
  suffix: string;
  label: string;
  subtext: string;
}) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1600; // ms
          const steps = 40;
          const stepTime = duration / steps;
          let current = 0;
          const increment = value / steps;

          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, stepTime);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div
      ref={elementRef}
      className="p-4 sm:p-5 rounded-xl bg-[#042613]/80 border border-[#D4A017]/30 hover:border-[#F2D675]/60 transition-all text-center group"
    >
      <div className="font-['Montserrat',sans-serif] text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F2D675] tracking-tight flex items-center justify-center gap-0.5">
        <span>{hasAnimated ? count : 0}</span>
        <span className="text-[#D4A017]">{suffix}</span>
      </div>
      <div className="text-sm font-bold text-white mt-1 group-hover:text-[#F2D675] transition-colors">
        {label}
      </div>
      <div className="text-xs text-white/70 mt-0.5">{subtext}</div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative hero-skyline-bg overflow-hidden text-white pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Decorative Golden Ambient Glows */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#D4A017]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-5 w-80 h-80 bg-[#0E7339]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Brand Badges, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Government Contractor Badge */}
            <div className="inline-flex items-center gap-2 bg-[#042613]/90 border border-[#D4A017]/60 px-4 py-2 rounded-full shadow-lg backdrop-blur-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] animate-ping" />
              <ShieldCheck className="w-4 h-4 text-[#F2D675]" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#F2D675]">
                Govt Registered Civil Contractor • GST: {siteConfig.company.gstNo}
              </span>
            </div>

            {/* Main Authority Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-['Montserrat',sans-serif] tracking-tight leading-[1.1] text-white">
                Building a <span className="gold-gradient-text">Better Tomorrow</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl font-medium text-[#F2D675] tracking-wide">
                Trusted Government Civil Contractor &amp; General Order Supplier
              </p>
            </div>

            {/* Sub-headline / Brand Value Proposition */}
            <p className="text-base sm:text-lg text-white/85 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              BSA Enterprise delivers high-precision civil engineering, robust municipal infrastructure,
              and turnkey building construction across Kolkata and West Bengal. Certified material procurement
              backed by unwavering compliance and transparent execution.
            </p>

            {/* Key Trust Checkmarks */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 pt-2 text-xs sm:text-sm font-medium text-white/90">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-[#F2D675] shrink-0" />
                <span>Govt Tender Ready</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-[#F2D675] shrink-0" />
                <span>100% Tax Compliant</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-[#F2D675] shrink-0" />
                <span>Prompt Material Dispatch</span>
              </div>
            </div>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-extrabold btn-gold-shimmer text-[#063D1E] flex items-center justify-center gap-2.5 shadow-xl"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-5 h-5 text-[#063D1E]" />
              </a>

              <a
                href="#services"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold btn-gold-outline flex items-center justify-center gap-2"
              >
                <span>Our Services</span>
              </a>

              <a
                href={siteConfig.company.contact.phoneTel}
                className="w-full sm:w-auto px-5 py-4 rounded-xl text-base font-bold text-white/90 hover:text-[#F2D675] transition-colors flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-[#F2D675]" />
                <span className="text-sm font-semibold">{siteConfig.company.contact.phoneFormatted}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Framed Founder Portrait with Gold Bezel */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer Golden Glow Border Frame */}
              <div className="relative p-2 rounded-2xl bg-gradient-to-b from-[#F2D675] via-[#C8961A] to-[#8C6A0E] shadow-2xl">
                
                {/* Inner Dark Bezel Container */}
                <div className="relative rounded-xl overflow-hidden bg-gradient-to-b from-[#063D1E] to-[#042613] p-1.5">
                  
                  {/* Portrait Image */}
                  <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden bg-gradient-to-b from-[#094825] to-[#042613]">
                    <Image
                      src="/founder.png"
                      alt="Sayantan Das - Founder & Managing Director of BSA Enterprise"
                      fill
                      className="object-cover object-top hover:scale-105 transition-transform duration-700"
                      priority
                    />

                    {/* Gradient Overlay for bottom text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#042613] via-transparent to-transparent opacity-80" />

                    {/* Founder Designation Floating Badge */}
                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[#063D1E]/90 backdrop-blur-md border border-[#D4A017]/60 shadow-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#F2D675] block">
                            Founder &amp; Proprietor
                          </span>
                          <span className="text-lg font-extrabold text-white font-['Montserrat',sans-serif]">
                            {siteConfig.founder.name}
                          </span>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-[#0B5D2E] border border-[#F2D675] flex items-center justify-center shadow-md">
                          <Award className="w-5 h-5 text-[#F2D675]" />
                        </div>
                      </div>
                      <div className="text-[11px] text-white/80 font-medium mt-1 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                        <span>Govt Registered Contractor • Kolkata</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Trust Pill */}
              <div className="absolute -top-3 -left-3 sm:-left-5 bg-[#0B5D2E] border-2 border-[#F2D675] text-white px-3.5 py-1.5 rounded-full shadow-xl flex items-center gap-2 text-xs font-bold animate-float-slow">
                <FileCheck2 className="w-4 h-4 text-[#F2D675]" />
                <span>GST: 19DQYPD2942H1ZC</span>
              </div>

              {/* Tagline Ribbon */}
              <div className="absolute -bottom-3 -right-2 sm:-right-4 bg-gradient-to-r from-[#D4A017] to-[#C8961A] text-[#063D1E] px-4 py-1.5 rounded-full shadow-xl text-xs font-black tracking-wider uppercase">
                Building A Better Tomorrow
              </div>
            </div>
          </div>
        </div>

        {/* Skyline Silhouette Motif Overlay */}
        <div className="mt-14 pt-8 border-t border-[#D4A017]/20">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F2D675]">
              Key Performance &amp; Compliance Indicators
            </span>
          </div>

          {/* Trust Strip Animated Counters */}
          {/* [CLIENT NOTE]: The values below are configured in src/data/siteContent.ts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {siteConfig.stats.map((stat, idx) => (
              <CounterItem
                key={idx}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                subtext={stat.subtext}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Subtle Skyline Architectural Silhouette Vector */}
      <div className="w-full absolute bottom-0 left-0 right-0 h-10 sm:h-14 opacity-15 pointer-events-none overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full text-[#F2D675] fill-current"
        >
          <path d="M0,120 L0,90 L40,90 L40,65 L70,65 L70,90 L110,90 L110,40 L140,40 L140,90 L180,90 L180,50 L210,50 L210,90 L260,90 L260,30 L290,30 L290,90 L340,90 L340,70 L370,70 L370,90 L420,90 L420,20 L450,20 L450,90 L510,90 L510,60 L540,60 L540,90 L600,90 L600,35 L640,35 L640,90 L700,90 L700,55 L730,55 L730,90 L790,90 L790,25 L830,25 L830,90 L880,90 L880,65 L910,65 L910,90 L960,90 L960,40 L1000,40 L1000,90 L1060,90 L1060,70 L1100,70 L1100,90 L1150,90 L1150,50 L1200,50 L1200,120 Z" />
        </svg>
      </div>
    </section>
  );
}
