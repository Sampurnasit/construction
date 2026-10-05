"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/data/siteContent";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Civil Contracting",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Check URL query parameters for pre-selected service
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const s = params.get("service");
      if (s) {
        setFormData((prev) => ({ ...prev, service: s }));
      }
    }
  }, []);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Contact number is required";
    } else if (!/^[0-9+\s-]{10,14}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid 10-digit mobile number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please describe your project scope or material requirement";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate submission / client feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset after showing feedback
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "Civil Contracting",
        message: "",
      });
    }, 900);
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#DC2626]/10 border border-[#EA580C]/40 px-3.5 py-1.5 rounded-full mb-3">
            <MessageSquare className="w-4 h-4 text-[#DC2626]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
              Consultation &amp; Tenders
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-['Montserrat',sans-serif] text-[#1C1917] tracking-tight">
            Connect With <span className="text-[#DC2626]">BSA Enterprise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#EA580C] to-transparent mx-auto mt-4 mb-5" />
          <p className="text-base sm:text-lg text-[#57534E] leading-relaxed">
            Reach out for official civil project tenders, private development construction, or bulk construction material delivery.
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Validated Enquiry Form */}
          <div className="lg:col-span-7 luxury-card p-8 sm:p-10 border border-[#EA580C]/30 shadow-xl">
            <div className="mb-6">
              <h3 className="font-['Montserrat',sans-serif] font-bold text-2xl text-[#1C1917]">
                Request a Free Quotation
              </h3>
              <p className="text-xs sm:text-sm text-[#57534E] mt-1">
                Fill out the specifications below. Our founder &amp; engineering desk will respond within 24 hours.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 rounded-xl bg-[#2B0A0A] text-white text-center space-y-4 border border-[#FACC15] animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#DC2626] text-[#FACC15] border-2 border-[#FACC15] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h4 className="font-['Montserrat',sans-serif] font-bold text-2xl text-[#FACC15]">
                  Enquiry Received Successfully!
                </h4>
                <p className="text-sm text-white/90 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to BSA Enterprise. Sayantan Das and our technical team will review your project details and get back to you shortly.
                </p>
                <div className="pt-3">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-lg text-xs font-bold btn-gold-shimmer text-white cursor-pointer shadow-md"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1917] mb-1.5">
                    Your Full Name / Entity *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rajesh Ghosh / Modern Infra Ltd"
                    className={`w-full px-4 py-3 rounded-lg border text-sm text-[#1C1917] bg-[#FFFBF5] focus:outline-none focus:ring-2 transition-all ${
                      errors.name
                        ? "border-red-500 focus:ring-red-400"
                        : "border-[#EA580C]/40 focus:ring-[#DC2626] focus:border-[#DC2626]"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Phone & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1917] mb-1.5">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9330967405"
                      className={`w-full px-4 py-3 rounded-lg border text-sm text-[#1C1917] bg-[#FFFBF5] focus:outline-none focus:ring-2 transition-all ${
                        errors.phone
                          ? "border-red-500 focus:ring-red-400"
                          : "border-[#EA580C]/40 focus:ring-[#DC2626] focus:border-[#DC2626]"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1917] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. contact@domain.com"
                      className={`w-full px-4 py-3 rounded-lg border text-sm text-[#1C1917] bg-[#FFFBF5] focus:outline-none focus:ring-2 transition-all ${
                        errors.email
                          ? "border-red-500 focus:ring-red-400"
                          : "border-[#EA580C]/40 focus:ring-[#DC2626] focus:border-[#DC2626]"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Service Dropdown */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1917] mb-1.5">
                    Service Required *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-[#EA580C]/40 text-sm text-[#1C1917] bg-[#FFFBF5] focus:outline-none focus:ring-2 focus:ring-[#DC2626] focus:border-[#DC2626] transition-all"
                  >
                    <option value="Civil Contracting">Civil Contracting (Roads, Drainage, Concrete)</option>
                    <option value="General Order Supply">General Order Supply (TMT Steel, Cement, Safety)</option>
                    <option value="Building Construction">Building Construction (Turnkey RCC Structures)</option>
                    <option value="Trusted Partnership">Govt Tender Bid / Institutional Partnership</option>
                    <option value="Other Inquiries">Other Infrastructure Inquiries</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1917] mb-1.5">
                    Project Scope / Delivery Requirements *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about your project location, estimated timeline, required quantities, or tender specifications..."
                    className={`w-full px-4 py-3 rounded-lg border text-sm text-[#1C1917] bg-[#FFFBF5] focus:outline-none focus:ring-2 transition-all ${
                      errors.message
                        ? "border-red-500 focus:ring-red-400"
                        : "border-[#EA580C]/40 focus:ring-[#DC2626] focus:border-[#DC2626]"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl text-sm font-bold btn-gold-shimmer text-white flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-lg"
                >
                  {isSubmitting ? (
                    <span>Processing Submission...</span>
                  ) : (
                    <>
                      <span>Submit Official Quotation Request</span>
                      <Send className="w-4 h-4 text-white" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-[#57534E] pt-1">
                  Confidential &amp; Secure. Your data is handled in strict accordance with business privacy.
                </p>
              </form>
            )}
          </div>

          {/* Right Column: Office Coordinates & Embedded Google Map */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Cards */}
            <div className="bg-[#2B0A0A] text-white p-7 sm:p-8 rounded-2xl border border-[#EA580C]/40 shadow-xl space-y-5">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FACC15] block">
                  Registered Office
                </span>
                <h4 className="font-['Montserrat',sans-serif] font-black text-xl sm:text-2xl text-white">
                  BSA Enterprise
                </h4>
                <p className="text-xs text-white/80 mt-0.5">Govt Civil Contractor &amp; General Order Supplier</p>
              </div>

              <div className="space-y-4 pt-2 border-t border-[#EA580C]/25 text-sm">
                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#1A0505] border border-[#EA580C]/40 flex items-center justify-center text-[#FACC15] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-white/70 block">Direct Telephone</span>
                    <a
                      href={siteConfig.company.contact.phoneTel}
                      className="text-base font-bold text-white hover:text-[#FACC15] transition-colors"
                    >
                      {siteConfig.company.contact.phoneFormatted}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#1A0505] border border-[#EA580C]/40 flex items-center justify-center text-[#FACC15] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-white/70 block">Official Correspondence</span>
                    <a
                      href={siteConfig.company.contact.emailMailto}
                      className="text-sm font-semibold text-white hover:text-[#FACC15] transition-colors break-all"
                    >
                      {siteConfig.company.contact.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#1A0505] border border-[#EA580C]/40 flex items-center justify-center text-[#FACC15] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-white/70 block">Office Address</span>
                    <p className="text-sm font-medium text-white/95 leading-relaxed">
                      {siteConfig.company.address.street}, {siteConfig.company.address.city} - {siteConfig.company.address.pincode}
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#1A0505] border border-[#EA580C]/40 flex items-center justify-center text-[#FACC15] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-white/70 block">Working Hours</span>
                    <p className="text-xs text-white/90">{siteConfig.company.contact.workingHours}</p>
                    <p className="text-[11px] text-[#FACC15] mt-0.5">{siteConfig.company.contact.sundayNote}</p>
                  </div>
                </div>
              </div>

              {/* Certification Badge */}
              <div className="pt-4 border-t border-[#EA580C]/25 flex items-center justify-between text-xs">
                <span className="text-white/70">Legal Entity</span>
                <span className="font-semibold text-[#FACC15]">Govt Registered Civil Contractor</span>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-2xl overflow-hidden border-2 border-[#EA580C]/40 shadow-xl bg-[#2B0A0A]">
              <div className="p-3 bg-[#1A0505] border-b border-[#EA580C]/30 flex items-center justify-between text-xs text-[#FACC15] font-bold">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#EA580C]" />
                  <span>Regent Colony, Kolkata - 700040</span>
                </div>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    "35/D Regent Colony, Kolkata - 700040"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-[11px] text-[#FACC15]"
                >
                  Open in Maps ↗
                </a>
              </div>
              <iframe
                title="BSA Enterprise Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.0827255150965!2d88.3563113!3d22.4925008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0270e5d429a1b7%3A0xb3a22830e060db9f!2sRegent%20Colony%2C%20Kolkata%2C%20West%20Bengal%20700040!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
