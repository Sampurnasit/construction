"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteContent";
import { Phone, Menu, X, ArrowUpRight, ShieldCheck, Mail } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const sections = siteConfig.navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Notification Bar for Govt Contractor Trust - Deep Red with Yellow & Orange highlights */}
      <div className="bg-[#1A0505] text-[#FACC15] text-xs py-2 px-4 border-b border-[#EA580C]/30 transition-all">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="inline-flex items-center gap-1 bg-[#DC2626] text-white text-[11px] font-semibold px-2 py-0.5 rounded-full border border-[#FACC15]/50">
              <ShieldCheck className="w-3 h-3 text-[#FACC15]" /> Govt Registered
            </span>
            <span className="text-white/90 font-medium hidden md:inline">
              Govt Civil Contractor &amp; General Order Supplier
            </span>
            <span className="text-[#EA580C] hidden md:inline">•</span>
            <span className="text-white/80">Regent Colony, Kolkata - 700040</span>
          </div>

          <div className="flex items-center gap-4 text-[12px]">
            <a
              href={siteConfig.company.contact.phoneTel}
              className="flex items-center gap-1.5 text-white hover:text-[#FACC15] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#FACC15]" />
              <span className="font-semibold">{siteConfig.company.contact.phoneFormatted}</span>
            </a>
            <span className="text-[#EA580C]/50 hidden sm:inline">|</span>
            <a
              href={siteConfig.company.contact.emailMailto}
              className="hidden sm:flex items-center gap-1.5 text-white/90 hover:text-[#FACC15] transition-colors"
            >
              <Mail className="w-3 h-3 text-[#FACC15]" />
              <span>{siteConfig.company.contact.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar - Dark Crimson Red with Golden Yellow & Orange Accents */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
            ? "bg-[#200505]/95 backdrop-blur-md shadow-xl py-2.5 border-b border-[#EA580C]/40"
            : "bg-[#200505] py-3.5 border-b border-[#EA580C]/25"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <Link
              href="#hero"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#FACC15] rounded-lg p-1"
            >
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 transition-transform group-hover:scale-105">
                <Image
                  src="/bsa-logo.png"
                  alt="BSA Enterprise Logo"
                  fill
                  className="object-contain"
                  priority
                  unoptimized
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-['Montserrat',sans-serif] font-black text-xl sm:text-2xl tracking-wider text-white">
                    BSA
                  </span>
                  <span className="font-['Montserrat',sans-serif] font-bold text-lg sm:text-xl tracking-widest text-[#FACC15]">
                    ENTERPRISE
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-medium tracking-wide text-white/80 uppercase">
                  Govt Civil Contractor &amp; General Order Supplier
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {siteConfig.navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${isActive
                        ? "text-[#FACC15] bg-[#DC2626]/80 border-b-2 border-[#FACC15] shadow-sm font-semibold"
                        : "text-white/90 hover:text-[#FACC15] hover:bg-white/10"
                      }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold btn-gold-shimmer text-white shadow-lg"
              >
                <span>Get a Quote</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </a>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-[#FACC15] hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#FACC15]"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-7 h-7" />
                ) : (
                  <Menu className="w-7 h-7" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#200505] border-t border-[#EA580C]/30 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top duration-300">
            <div className="grid grid-cols-2 gap-2 pt-1 pb-2 border-b border-[#EA580C]/20">
              <div className="bg-[#1A0505] p-2.5 rounded-lg border border-[#EA580C]/30 text-center">
                <span className="text-[10px] text-[#FACC15] font-semibold block uppercase">Govt Contractor</span>
                <span className="text-xs text-white font-semibold">Civil &amp; Supply</span>
              </div>
              <div className="bg-[#1A0505] p-2.5 rounded-lg border border-[#EA580C]/30 text-center">
                <span className="text-[10px] text-[#FACC15] font-semibold block uppercase">Founder</span>
                <span className="text-xs text-white font-semibold">{siteConfig.company.founder}</span>
              </div>
            </div>

            <nav className="flex flex-col space-y-1">
              {siteConfig.navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-base font-medium text-white hover:text-[#FACC15] hover:bg-[#DC2626]/40 transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-[#EA580C]">→</span>
                </Link>
              ))}
            </nav>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-lg text-sm font-bold btn-gold-shimmer text-white"
              >
                Request a Free Quotation
              </a>
              <a
                href={siteConfig.company.contact.phoneTel}
                className="w-full text-center py-2.5 rounded-lg text-sm font-semibold border border-[#EA580C] text-[#FACC15] hover:bg-[#EA580C]/15 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call {siteConfig.company.contact.phoneFormatted}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
