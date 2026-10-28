"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteContent";
import { Phone, Menu, X, ArrowUpRight } from "lucide-react";

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

  // Prevent body scrolling when mobile drawer is open on phones
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Main Sticky Navbar - Dark Crimson Red with Golden Yellow & Orange Accents */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 w-full ${isScrolled
            ? "bg-[#200505]/95 backdrop-blur-md shadow-xl py-2 border-b border-[#EA580C]/50"
            : "bg-[#200505] py-2.5 sm:py-3.5 border-b border-[#EA580C]/30"
          }`}
      >
        <div className="w-full max-w-[1600px] mx-auto px-3 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Brand Logo & Name - flexible container to prevent squishing or overflow */}
            <Link
              href="#hero"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-[#FACC15] rounded-lg p-1 min-w-0 max-w-[calc(100%-60px)] sm:max-w-none"
            >
              <div className="relative w-9 h-9 xs:w-11 xs:h-11 sm:w-13 sm:h-13 transition-transform group-hover:scale-105 shrink-0">
                <Image
                  src="/bsa-logo.png"
                  alt="BSA Enterprise Logo"
                  fill
                  className="object-contain"
                  priority
                  unoptimized
                />
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1 sm:gap-1.5 leading-tight">
                  <span className="font-['Montserrat',sans-serif] font-black text-lg xs:text-xl sm:text-2xl tracking-wide text-white">
                    BSA
                  </span>
                  <span className="font-['Montserrat',sans-serif] font-bold text-base xs:text-lg sm:text-xl tracking-wider text-[#FACC15]">
                    ENTERPRISE
                  </span>
                </div>
                <span className="text-[8.5px] xs:text-[10px] sm:text-[11px] font-medium tracking-wide text-white/80 uppercase truncate block">
                  <span className="sm:hidden">Govt Civil Contractor &amp; Supplier</span>
                  <span className="hidden sm:inline">Govt Civil Contractor &amp; General Order Supplier</span>
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-2 mr-3 lg:mr-6">
              {siteConfig.navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`px-2 xl:px-3 py-1.5 rounded-md text-xs xl:text-sm font-medium whitespace-nowrap transition-all duration-200 ${isActive
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
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-2 px-4 lg:px-5 py-2.5 rounded-lg text-xs lg:text-sm font-bold btn-gold-shimmer text-white shadow-lg whitespace-nowrap"
              >
                <span>Get a Quote</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </a>

              {/* Mobile Menu Button - Prominent, high-contrast and easy to tap */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-[#2B0A0A] border-2 border-[#EA580C] text-[#FACC15] hover:bg-[#EA580C]/20 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#FACC15] transition-all shadow-md shrink-0 cursor-pointer"
                aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 stroke-[2.5]" />
                ) : (
                  <Menu className="w-6 h-6 stroke-[2.5]" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <div
              className="fixed inset-0 top-[57px] xs:top-[65px] bg-black/60 backdrop-blur-xs z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Drawer Container */}
            <div className="relative z-50 lg:hidden bg-[#200505] border-t border-[#EA580C]/40 px-4 pt-3 pb-6 space-y-3 shadow-2xl max-h-[calc(100dvh-4.25rem)] overflow-y-auto overscroll-contain animate-in slide-in-from-top-2 duration-200">
              <div className="grid grid-cols-2 gap-2 pt-1 pb-2 border-b border-[#EA580C]/25">
                <div className="bg-[#1A0505] p-2.5 rounded-xl border border-[#EA580C]/30 text-center">
                  <span className="text-[10px] text-[#FACC15] font-bold block uppercase tracking-wider">Govt Contractor</span>
                  <span className="text-xs text-white font-semibold">Civil &amp; Supply</span>
                </div>
                <div className="bg-[#1A0505] p-2.5 rounded-xl border border-[#EA580C]/30 text-center">
                  <span className="text-[10px] text-[#FACC15] font-bold block uppercase tracking-wider">Founder</span>
                  <span className="text-xs text-white font-semibold">{siteConfig.company.founder}</span>
                </div>
              </div>

              <nav className="flex flex-col space-y-1 py-1">
                {siteConfig.navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`px-3.5 py-3 rounded-xl text-base font-medium transition-colors flex items-center justify-between ${
                        isActive
                          ? "bg-[#DC2626]/40 text-[#FACC15] font-bold border-l-4 border-[#FACC15]"
                          : "text-white/95 hover:text-[#FACC15] hover:bg-white/5 active:bg-white/10"
                      }`}
                    >
                      <span className="whitespace-nowrap">{link.label}</span>
                      <span className="text-sm text-[#FACC15] font-bold">→</span>
                    </Link>
                  );
                })}
              </nav>

              <div className="pt-2 flex flex-col gap-2.5 border-t border-[#EA580C]/25">
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center py-3.5 rounded-xl text-sm font-bold btn-gold-shimmer text-white shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Request a Free Quotation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.company.contact.phoneTel}
                  className="w-full text-center py-3 rounded-xl text-sm font-bold border-2 border-[#EA580C] text-[#FACC15] bg-[#1A0505] hover:bg-[#EA580C]/20 active:bg-[#EA580C]/30 flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#FACC15]" />
                  <span>Call {siteConfig.company.contact.phoneFormatted}</span>
                </a>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
}
