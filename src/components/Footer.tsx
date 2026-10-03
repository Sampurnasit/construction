"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteContent";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUp,
  ShieldCheck,
  Building,
  CheckCircle,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#042613] text-white border-t-2 border-[#D4A017] relative">
      {/* Top Gold Gradient Glow Line */}
      <div className="h-1 w-full bg-gradient-to-r from-[#D4A017] via-[#F2D675] to-[#8C6A0E]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-5 space-y-5">
            <Link href="#hero" className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.png"
                  alt="BSA Enterprise Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-['Montserrat',sans-serif] font-black text-2xl tracking-wider text-white">
                    BSA
                  </span>
                  <span className="font-['Montserrat',sans-serif] font-bold text-xl tracking-widest text-[#F2D675]">
                    ENTERPRISE
                  </span>
                </div>
                <span className="text-[10px] uppercase tracking-wide text-[#F2D675] font-semibold block">
                  Govt Civil Contractor &amp; General Order Supplier
                </span>
              </div>
            </Link>

            <p className="text-sm text-white/80 leading-relaxed max-w-sm">
              &ldquo;{siteConfig.company.tagline}&rdquo;. We are an established Kolkata-based civil engineering
              contractor delivering government infrastructure, arterial roadways, municipal drainage,
              and industrial project material supplies with unyielding compliance.
            </p>

            <div className="p-3.5 rounded-xl bg-[#063D1E] border border-[#D4A017]/40 flex items-center justify-between text-xs max-w-sm">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#F2D675]" />
                <span className="font-medium text-white/90">GSTIN:</span>
              </div>
              <span className="font-mono font-bold text-[#F2D675]">{siteConfig.company.gstNo}</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-['Montserrat',sans-serif] font-bold text-base text-[#F2D675] uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              {siteConfig.navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-[#F2D675] hover:translate-x-1 inline-block transition-transform duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-['Montserrat',sans-serif] font-bold text-base text-[#F2D675] uppercase tracking-wider">
              Contact &amp; Administration
            </h4>
            <div className="space-y-3 text-sm text-white/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F2D675] shrink-0 mt-0.5" />
                <span className="leading-snug">{siteConfig.company.address.street}, {siteConfig.company.address.city} - {siteConfig.company.address.pincode}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F2D675] shrink-0" />
                <a href={siteConfig.company.contact.phoneTel} className="hover:text-[#F2D675] font-semibold">
                  {siteConfig.company.contact.phoneFormatted}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F2D675] shrink-0" />
                <a href={siteConfig.company.contact.emailMailto} className="hover:text-[#F2D675] break-all">
                  {siteConfig.company.contact.email}
                </a>
              </div>

              <div className="pt-2 text-xs text-white/60">
                Founder &amp; Proprietor: <strong className="text-white">{siteConfig.company.founder}</strong>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="mt-14 pt-8 border-t border-[#D4A017]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70">
          <div>
            &copy; 2026 <strong>BSA Enterprise</strong>. All Rights Reserved. Govt Civil Contractor &amp; General Order Supplier.
          </div>

          <div className="flex items-center gap-4">
            <span>Regent Colony, Kolkata - 700040</span>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-[#063D1E] border border-[#D4A017] text-[#F2D675] hover:bg-[#D4A017] hover:text-[#063D1E] flex items-center justify-center transition-colors shadow cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
