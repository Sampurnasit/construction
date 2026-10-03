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
      {/* Top Notification Bar for Govt Contractor Trust */}
      <div className="bg-[#042613] text-[#F2D675] text-xs py-2 px-4 border-b border-[#D4A017]/30 transition-all">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="inline-flex items-center gap-1 bg-[#0B5D2E] text-[#FFFDF0] text-[11px] font-semibold px-2 py-0.5 rounded-full border border-[#D4A017]/50">
              <ShieldCheck className="w-3 h-3 text-[#F2D675]" /> Govt Registered
            </span>
            <span className="text-[#FFFDF0]/90 font-medium hidden md:inline">
              Govt Civil Contractor &amp; General Order Supplier
            </span>
            <span className="text-[#D4A017]/70 hidden md:inline">•</span>
            <span className="text-[#FFFDF0]/80">Regent Colony, Kolkata - 700040</span>
          </div>

          <div className="flex items-center gap-4 text-[12px]">
            <a
              href={siteConfig.company.contact.phoneTel}
              className="flex items-center gap-1.5 text-[#FFFDF0] hover:text-[#F2D675] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#F2D675]" />
              <span className="font-semibold">{siteConfig.company.contact.phoneFormatted}</span>
            </a>
            <span className="text-[#D4A017]/40 hidden sm:inline">|</span>
            <a
              href={siteConfig.company.contact.emailMailto}
              className="hidden sm:flex items-center gap-1.5 text-[#FFFDF0]/90 hover:text-[#F2D675] transition-colors"
            >
              <Mail className="w-3 h-3 text-[#F2D675]" />
              <span>{siteConfig.company.contact.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#063D1E]/95 backdrop-blur-md shadow-xl py-2.5 border-b border-[#D4A017]/40"
            : "bg-[#063D1E] py-3.5 border-b border-[#D4A017]/20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <Link
              href="#hero"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#D4A017] rounded-lg p-1"
            >
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 transition-transform group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="BSA Enterprise Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-['Montserrat',sans-serif] font-black text-xl sm:text-2xl tracking-wider text-white">
                    BSA
                  </span>
                  <span className="font-['Montserrat',sans-serif] font-bold text-lg sm:text-xl tracking-widest text-[#F2D675]">
                    ENTERPRISE
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-medium tracking-wide text-white/80 uppercase">
                  Govt Civil Contractor & General Order Supplier
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
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-[#F2D675] bg-[#0B5D2E]/80 border-b-2 border-[#D4A017] shadow-sm font-semibold"
                        : "text-white/85 hover:text-[#F2D675] hover:bg-white/5"
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
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold btn-gold-shimmer"
              >
                <span>Get a Quote</span>
                <ArrowUpRight className="w-4 h-4 text-[#063D1E]" />
              </a>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-[#F2D675] hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#D4A017]"
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
          <div className="lg:hidden bg-[#063D1E] border-t border-[#D4A017]/30 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top duration-300">
            <div className="grid grid-cols-2 gap-2 pt-1 pb-2 border-b border-[#D4A017]/20">
              <div className="bg-[#042613] p-2.5 rounded-lg border border-[#D4A017]/30 text-center">
                <span className="text-[10px] text-[#F2D675] font-semibold block uppercase">Govt Contractor</span>
                <span className="text-xs text-white font-semibold">Civil &amp; Supply</span>
              </div>
              <div className="bg-[#042613] p-2.5 rounded-lg border border-[#D4A017]/30 text-center">
                <span className="text-[10px] text-[#F2D675] font-semibold block uppercase">Founder</span>
                <span className="text-xs text-white font-semibold">{siteConfig.company.founder}</span>
              </div>
            </div>

            <nav className="flex flex-col space-y-1">
              {siteConfig.navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-base font-medium text-white hover:text-[#F2D675] hover:bg-[#0B5D2E]/50 transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-[#D4A017]">→</span>
                </Link>
              ))}
            </nav>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-lg text-sm font-bold btn-gold-shimmer"
              >
                Request a Free Quotation
              </a>
              <a
                href={siteConfig.company.contact.phoneTel}
                className="w-full text-center py-2.5 rounded-lg text-sm font-semibold border border-[#D4A017] text-[#F2D675] hover:bg-[#D4A017]/10 flex items-center justify-center gap-2"
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
