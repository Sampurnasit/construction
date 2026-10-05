"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteContent";
import {
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  FileCheck,
  Building,
  Award,
  BadgeCheck,
} from "lucide-react";

export default function Credentials() {
  const [copied, setCopied] = useState(false);

  const handleCopyGST = () => {
    navigator.clipboard.writeText(siteConfig.company.gstNo);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="credentials" className="py-20 bg-[#FFFBF5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#DC2626]/10 border border-[#EA580C]/40 px-3.5 py-1.5 rounded-full mb-3">
            <BadgeCheck className="w-4 h-4 text-[#DC2626]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
              Statutory Certification &amp; Compliance
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-['Montserrat',sans-serif] text-[#1C1917] tracking-tight">
            Official <span className="text-[#DC2626]">Credentials</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#EA580C] to-transparent mx-auto mt-4 mb-5" />
          <p className="text-base sm:text-lg text-[#57534E] leading-relaxed">
            Legitimate, verifiable government registration documents ensuring seamless tender qualification and fiscal transparency.
          </p>
        </div>

        {/* Central Credentials Certificate Showcase */}
        <div className="max-w-4xl mx-auto">
          {/* Certificate-style Container */}
          <div className="relative rounded-2xl bg-white p-2 border-2 border-[#EA580C] shadow-2xl overflow-hidden">
            
            {/* Inner Border Frame */}
            <div className="border border-[#EA580C]/40 rounded-xl p-6 sm:p-10 bg-gradient-to-b from-white via-[#FFFBF5] to-white relative">
              
              {/* Decorative Corner Seals */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#EA580C]" />
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#EA580C]" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#EA580C]" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#EA580C]" />

              {/* Certificate Header */}
              <div className="text-center pb-6 border-b border-[#EA580C]/30">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#DC2626] border-2 border-[#FACC15] shadow-lg mb-3">
                  <Award className="w-8 h-8 text-[#FACC15]" />
                </div>
                <h3 className="font-['Montserrat',sans-serif] font-black text-2xl sm:text-3xl text-[#1C1917] tracking-wide uppercase">
                  Government Registered Contractor
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#EA580C] tracking-wider uppercase mt-1">
                  West Bengal Goods &amp; Services Tax Certified
                </p>
              </div>

              {/* GSTIN Spotlight Box */}
              <div className="my-8 p-5 sm:p-6 rounded-xl bg-gradient-to-r from-[#2B0A0A] via-[#3B0A0A] to-[#1A0505] text-white border border-[#EA580C] shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <span className="text-[11px] font-bold text-[#FACC15] uppercase tracking-wider block">
                    Goods &amp; Services Tax Identification Number (GSTIN)
                  </span>
                  <div className="font-mono font-bold text-2xl sm:text-3xl text-white tracking-widest mt-1">
                    {siteConfig.company.gstNo}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyGST}
                    className="px-4 py-2.5 rounded-lg bg-[#FACC15] hover:bg-[#FDE047] text-[#1A0505] font-bold text-xs flex items-center gap-2 transition-all shadow cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-[#1A0505]" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-[#1A0505]" />
                        <span>Copy GSTIN</span>
                      </>
                    )}
                  </button>

                  <a
                    href="https://services.gst.gov.in/services/searchtpbypan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2.5 rounded-lg border border-[#EA580C] text-[#FACC15] hover:bg-white/10 font-medium text-xs flex items-center gap-1.5 transition-colors"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Legal Details Table */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-8">
                <div className="p-3.5 rounded-lg bg-[#FFFBF5] border border-[#EA580C]/25 flex items-center justify-between">
                  <span className="text-xs text-[#57534E] font-medium">Legal Name:</span>
                  <span className="font-bold text-[#1C1917]">{siteConfig.company.name}</span>
                </div>

                <div className="p-3.5 rounded-lg bg-[#FFFBF5] border border-[#EA580C]/25 flex items-center justify-between">
                  <span className="text-xs text-[#57534E] font-medium">Founder / Proprietor:</span>
                  <span className="font-bold text-[#1C1917]">{siteConfig.company.founder}</span>
                </div>

                <div className="p-3.5 rounded-lg bg-[#FFFBF5] border border-[#EA580C]/25 flex items-center justify-between">
                  <span className="text-xs text-[#57534E] font-medium">Principal Place of Business:</span>
                  <span className="font-bold text-[#1C1917] text-right">35/D Regent Colony, Kolkata - 700040</span>
                </div>

                <div className="p-3.5 rounded-lg bg-[#FFFBF5] border border-[#EA580C]/25 flex items-center justify-between">
                  <span className="text-xs text-[#57534E] font-medium">State Code:</span>
                  <span className="font-bold text-[#1C1917]">19 (West Bengal)</span>
                </div>
              </div>

              {/* 4 Compliance Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#EA580C]/30">
                <div className="text-center p-3 rounded-lg bg-white border border-[#DC2626]/20 shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-[#DC2626] mx-auto mb-1" />
                  <span className="text-[11px] font-bold text-[#1C1917] block">Govt Registered</span>
                  <span className="text-[10px] text-[#57534E]">Civil Contractor</span>
                </div>

                <div className="text-center p-3 rounded-lg bg-white border border-[#DC2626]/20 shadow-sm">
                  <FileCheck className="w-6 h-6 text-[#DC2626] mx-auto mb-1" />
                  <span className="text-[11px] font-bold text-[#1C1917] block">Active GSTIN</span>
                  <span className="text-[10px] text-[#57534E]">Regular Taxpayer</span>
                </div>

                <div className="text-center p-3 rounded-lg bg-white border border-[#DC2626]/20 shadow-sm">
                  <Building className="w-6 h-6 text-[#DC2626] mx-auto mb-1" />
                  <span className="text-[11px] font-bold text-[#1C1917] block">Municipal Approved</span>
                  <span className="text-[10px] text-[#57534E]">Civil Works Code</span>
                </div>

                <div className="text-center p-3 rounded-lg bg-white border border-[#DC2626]/20 shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-[#DC2626] mx-auto mb-1" />
                  <span className="text-[11px] font-bold text-[#1C1917] block">Order Supplier</span>
                  <span className="text-[10px] text-[#57534E]">TMT &amp; Cement Ready</span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
