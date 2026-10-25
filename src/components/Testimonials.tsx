"use client";

import React, { useState } from "react";
import { siteConfig, TestimonialItem } from "@/data/siteContent";
import {
  Star,
  Quote,
  CheckCircle2,
  Building2,
  MapPin,
  ArrowRight,
  ShieldCheck,
  ThumbsUp,
  PenLine,
  Send,
  MessageSquarePlus,
  Sparkles,
  Check,
  AlertCircle,
  MessageCircle,
  RotateCcw
} from "lucide-react";

export default function Testimonials() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [reviewsList, setReviewsList] = useState<TestimonialItem[]>(siteConfig.testimonials);

  // Review Form State
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    organization: "",
    category: "civil" as 'civil' | 'building' | 'materials' | 'municipal',
    project: "",
    location: "",
    quote: "",
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submittedName, setSubmittedName] = useState<string>("");

  const categories = [
    { id: "all", label: "All Reviews" },
    { id: "civil", label: "Civil Infrastructure" },
    { id: "building", label: "Building Works" },
    { id: "materials", label: "General Order Supply" },
    { id: "municipal", label: "Municipal Projects" },
  ];

  const ratingLabels: Record<number, string> = {
    5: "5.0 - Outstanding & Flawless Execution",
    4: "4.0 - Very Good & Reliable Quality",
    3: "3.0 - Satisfactory Performance",
    2: "2.0 - Fair Delivery",
    1: "1.0 - Needs Improvement",
  };

  const filteredTestimonials = selectedCategory === "all"
    ? reviewsList
    : reviewsList.filter(t => t.category === selectedCategory);

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Please enter your name";
    if (!formData.designation.trim()) errors.designation = "Please enter your designation or title";
    if (!formData.organization.trim()) errors.organization = "Please enter your organization or department";
    if (!formData.project.trim()) errors.project = "Please mention the project name or work nature";
    if (!formData.quote.trim()) errors.quote = "Please share a few sentences about your experience";
    else if (formData.quote.trim().length < 20) errors.quote = "Review must be at least 20 characters long";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newReview: TestimonialItem = {
      id: `rev-${Date.now()}`,
      name: formData.name.trim(),
      designation: formData.designation.trim(),
      organization: formData.organization.trim(),
      project: formData.project.trim(),
      location: formData.location.trim() || "Kolkata, West Bengal",
      quote: formData.quote.trim(),
      rating,
      category: formData.category,
    };

    // Prepend new review so it appears instantly at the top
    setReviewsList([newReview, ...reviewsList]);
    setSubmittedName(formData.name.trim());
    setIsSubmitted(true);

    // Reset form fields
    setFormData({
      name: "",
      designation: "",
      organization: "",
      category: "civil",
      project: "",
      location: "",
      quote: "",
    });
    setFormErrors({});
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setRating(5);
  };

  const scrollToReviewForm = () => {
    const el = document.getElementById("write-review");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-[#140202] text-white relative overflow-hidden">
      {/* Decorative Background Lighting Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#DC2626]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#EA580C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#FACC15_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Quick Write-A-Review Button */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#DC2626]/20 text-[#FACC15] border border-[#FACC15]/30 uppercase tracking-widest mb-4">
            <ThumbsUp className="w-3.5 h-3.5 text-[#FACC15]" />
            <span>Client Endorsements &amp; Performance Record</span>
          </div>

          <h2 className="font-['Montserrat',sans-serif] text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Trusted by <span className="text-[#FACC15]">Government</span> &amp; Industry Leaders
          </h2>

          <p className="text-base sm:text-lg text-white/80 leading-relaxed font-light mb-6">
            Direct feedback from municipal project directors, institutional developers, and procurement authorities across Kolkata and West Bengal who rely on our civil execution and material supply.
          </p>

          <div className="flex items-center justify-center gap-3">
            <button
              onClick={scrollToReviewForm}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-[#DC2626] to-[#EA580C] hover:from-[#EA580C] hover:to-[#FACC15] text-white shadow-lg hover:shadow-[#DC2626]/40 transition-all cursor-pointer"
            >
              <PenLine className="w-4 h-4 text-[#FACC15]" />
              <span>Write a Client Review</span>
            </button>
          </div>
        </div>

        {/* Trust Badges Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12">
          <div className="bg-[#1E0404]/90 border border-[#EA580C]/30 rounded-xl p-4 text-center">
            <div className="font-['Montserrat',sans-serif] font-black text-2xl sm:text-3xl text-[#FACC15]">5.0 / 5</div>
            <div className="text-xs sm:text-sm text-white/80 font-medium mt-1">Average Client Rating</div>
          </div>
          <div className="bg-[#1E0404]/90 border border-[#EA580C]/30 rounded-xl p-4 text-center">
            <div className="font-['Montserrat',sans-serif] font-black text-2xl sm:text-3xl text-[#FACC15]">100%</div>
            <div className="text-xs sm:text-sm text-white/80 font-medium mt-1">Statutory &amp; GST Compliance</div>
          </div>
          <div className="bg-[#1E0404]/90 border border-[#EA580C]/30 rounded-xl p-4 text-center">
            <div className="font-['Montserrat',sans-serif] font-black text-2xl sm:text-3xl text-[#FACC15]">50+</div>
            <div className="text-xs sm:text-sm text-white/80 font-medium mt-1">Major Executions Handed Over</div>
          </div>
          <div className="bg-[#1E0404]/90 border border-[#EA580C]/30 rounded-xl p-4 text-center">
            <div className="font-['Montserrat',sans-serif] font-black text-2xl sm:text-3xl text-[#FACC15]">0 Days</div>
            <div className="text-xs sm:text-sm text-white/80 font-medium mt-1">Tender Specification Variance</div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-[#DC2626] text-white shadow-lg shadow-[#DC2626]/30 border border-[#FACC15]/60 scale-105"
                    : "bg-[#250808] text-white/70 hover:text-white hover:bg-[#350d0d] border border-white/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="text-xs sm:text-sm text-[#FACC15] font-semibold flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#FACC15]" />
            <span>Showing {filteredTestimonials.length} Endorsement{filteredTestimonials.length !== 1 ? "s" : ""}</span>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredTestimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[#200505]/90 border border-[#EA580C]/25 hover:border-[#FACC15]/60 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#DC2626]/20 group relative"
            >
              <div className="absolute top-5 right-5 text-white/10 group-hover:text-[#FACC15]/20 transition-colors">
                <Quote className="w-10 h-10" />
              </div>

              <div>
                {/* Star Rating & Verified Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-[#FACC15] text-[#FACC15]" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#FACC15] bg-[#DC2626]/30 px-2.5 py-0.5 rounded-full border border-[#FACC15]/30">
                    <CheckCircle2 className="w-3 h-3 text-[#FACC15]" /> Verified Client
                  </span>
                </div>

                {/* Project Tag */}
                <div className="mb-4">
                  <span className="inline-block text-[11px] font-semibold tracking-wider uppercase text-[#EA580C] bg-[#EA580C]/10 border border-[#EA580C]/20 px-2.5 py-1 rounded-md">
                    {t.project}
                  </span>
                </div>

                {/* Quote Content */}
                <p className="text-white/90 text-sm sm:text-base leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#DC2626] to-[#EA580C] flex items-center justify-center text-white font-black text-sm tracking-wider shadow-md shrink-0">
                  {t.name
                    .replace(/^(Er\.|Dr\.|Mr\.)\s*/, "")
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>

                <div className="overflow-hidden">
                  <h4 className="font-['Montserrat',sans-serif] font-bold text-sm text-white truncate">
                    {t.name}
                  </h4>
                  <p className="text-xs text-[#FACC15] truncate font-medium">
                    {t.designation}
                  </p>
                  <p className="text-[11px] text-white/60 truncate flex items-center gap-1 mt-0.5">
                    <Building2 className="w-3 h-3 text-[#EA580C] shrink-0" />
                    <span className="truncate">{t.organization}</span>
                  </p>
                  <p className="text-[10px] text-white/50 truncate flex items-center gap-1 mt-0.5">
                    <MapPin className="w-2.5 h-2.5 text-white/40 shrink-0" />
                    <span>{t.location}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ------------------------------------------------------------- */}
        {/* WRITE A REVIEW SECTION */}
        {/* ------------------------------------------------------------- */}
        <div
          id="write-review"
          className="scroll-mt-28 bg-[#1A0505] border-2 border-[#EA580C]/50 rounded-3xl p-6 sm:p-10 lg:p-12 mb-16 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Ambient Red Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#DC2626]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FACC15]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#DC2626]/20 text-[#FACC15] border border-[#FACC15]/30 mb-3">
                <MessageSquarePlus className="w-4 h-4 text-[#FACC15]" />
                <span>Your Voice Matters</span>
              </div>
              <h3 className="font-['Montserrat',sans-serif] text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                Write a <span className="text-[#FACC15]">Review</span>
              </h3>
              <p className="text-sm sm:text-base text-white/80 mt-2 font-light">
                Have you partnered with BSA Enterprise on a civil works contract, municipal project, or bulk material supply? Share your experience with prospective clients and government committees.
              </p>
            </div>

            {isSubmitted ? (
              /* Success Celebration State */
              <div className="max-w-xl mx-auto text-center py-10 px-6 bg-[#250707] border border-[#FACC15]/40 rounded-2xl shadow-xl animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#DC2626] to-[#FACC15] flex items-center justify-center mx-auto mb-5 shadow-lg">
                  <Check className="w-8 h-8 text-[#140202] stroke-[3]" />
                </div>
                <h4 className="font-['Montserrat',sans-serif] text-2xl font-bold text-white mb-2">
                  Thank You, {submittedName}!
                </h4>
                <p className="text-sm sm:text-base text-white/80 mb-6 leading-relaxed">
                  Your review has been successfully submitted and appended to our live client endorsements list above. We deeply appreciate your honest partnership and endorsement.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={handleResetForm}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4 text-[#FACC15]" />
                    <span>Submit Another Review</span>
                  </button>

                  <a
                    href={`https://wa.me/919330967405?text=Hello%20Sayantan%20Das%2C%20I%20just%20submitted%20a%20client%20review%20for%20BSA%20Enterprise%20from%20${encodeURIComponent(submittedName)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-md transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Notify Founder via WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              /* Interactive Review Form */
              <form onSubmit={handleSubmitReview} className="max-w-3xl mx-auto space-y-6">
                {/* 1. Star Rating Selector */}
                <div className="bg-[#220606] border border-[#EA580C]/30 rounded-2xl p-5 text-center">
                  <label className="block text-xs uppercase tracking-wider font-bold text-[#FACC15] mb-2">
                    Overall Experience Rating *
                  </label>
                  <div className="flex items-center justify-center gap-2 sm:gap-3 py-1">
                    {[1, 2, 3, 4, 5].map((starValue) => {
                      const isActive = (hoverRating || rating) >= starValue;
                      return (
                        <button
                          key={starValue}
                          type="button"
                          onClick={() => setRating(starValue)}
                          onMouseEnter={() => setHoverRating(starValue)}
                          onMouseLeave={() => setHoverRating(0)}
                          className="p-1 sm:p-2 rounded-lg transition-transform hover:scale-125 focus:outline-none cursor-pointer"
                          aria-label={`${starValue} star rating`}
                        >
                          <Star
                            className={`w-7 h-7 sm:w-9 sm:h-9 transition-colors ${
                              isActive
                                ? "fill-[#FACC15] text-[#FACC15] drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]"
                                : "text-white/25 hover:text-white/50"
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-[#FACC15] mt-2">
                    {ratingLabels[hoverRating || rating]}
                  </div>
                </div>

                {/* 2. Grid Inputs: Name, Designation, Organization, Category */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-white/90 uppercase tracking-wide mb-1.5">
                      Full Name / Authority *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Er. Rajesh Banerjee"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-[#240808] border ${
                        formErrors.name ? "border-red-500 focus:border-red-400" : "border-[#EA580C]/40 focus:border-[#FACC15]"
                      } text-white placeholder-white/40 text-sm focus:outline-none focus:ring-1 focus:ring-[#FACC15] transition-colors`}
                    />
                    {formErrors.name && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {formErrors.name}
                      </p>
                    )}
                  </div>

                  {/* Designation */}
                  <div>
                    <label className="block text-xs font-semibold text-white/90 uppercase tracking-wide mb-1.5">
                      Designation / Role *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Executive Engineer / Project Lead"
                      value={formData.designation}
                      onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-[#240808] border ${
                        formErrors.designation ? "border-red-500 focus:border-red-400" : "border-[#EA580C]/40 focus:border-[#FACC15]"
                      } text-white placeholder-white/40 text-sm focus:outline-none focus:ring-1 focus:ring-[#FACC15] transition-colors`}
                    />
                    {formErrors.designation && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {formErrors.designation}
                      </p>
                    )}
                  </div>

                  {/* Organization */}
                  <div>
                    <label className="block text-xs font-semibold text-white/90 uppercase tracking-wide mb-1.5">
                      Organization / Department *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Municipal Corporation / Infrastructure Ltd"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-[#240808] border ${
                        formErrors.organization ? "border-red-500 focus:border-red-400" : "border-[#EA580C]/40 focus:border-[#FACC15]"
                      } text-white placeholder-white/40 text-sm focus:outline-none focus:ring-1 focus:ring-[#FACC15] transition-colors`}
                    />
                    {formErrors.organization && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {formErrors.organization}
                      </p>
                    )}
                  </div>

                  {/* Project Category */}
                  <div>
                    <label className="block text-xs font-semibold text-white/90 uppercase tracking-wide mb-1.5">
                      Service / Project Category *
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                      className="w-full px-4 py-3 rounded-xl bg-[#240808] border border-[#EA580C]/40 text-white text-sm focus:outline-none focus:border-[#FACC15] focus:ring-1 focus:ring-[#FACC15] transition-colors cursor-pointer"
                    >
                      <option value="civil" className="bg-[#1A0505] text-white">Civil Infrastructure</option>
                      <option value="building" className="bg-[#1A0505] text-white">Building Construction</option>
                      <option value="materials" className="bg-[#1A0505] text-white">General Order Supply</option>
                      <option value="municipal" className="bg-[#1A0505] text-white">Municipal Projects</option>
                    </select>
                  </div>

                  {/* Project Name */}
                  <div>
                    <label className="block text-xs font-semibold text-white/90 uppercase tracking-wide mb-1.5">
                      Project Name / Scope of Work *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Arterial RCC Pavement & Box Culverts"
                      value={formData.project}
                      onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-[#240808] border ${
                        formErrors.project ? "border-red-500 focus:border-red-400" : "border-[#EA580C]/40 focus:border-[#FACC15]"
                      } text-white placeholder-white/40 text-sm focus:outline-none focus:ring-1 focus:ring-[#FACC15] transition-colors`}
                    />
                    {formErrors.project && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {formErrors.project}
                      </p>
                    )}
                  </div>

                  {/* Project Location */}
                  <div>
                    <label className="block text-xs font-semibold text-white/90 uppercase tracking-wide mb-1.5">
                      Location / Region (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., South Kolkata / New Town"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#240808] border border-[#EA580C]/40 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#FACC15] focus:ring-1 focus:ring-[#FACC15] transition-colors"
                    />
                  </div>
                </div>

                {/* 3. Review Textarea */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-semibold text-white/90 uppercase tracking-wide">
                      Your Detailed Review / Performance Feedback *
                    </label>
                    <span className="text-[11px] text-white/50">
                      {formData.quote.length} characters
                    </span>
                  </div>
                  <textarea
                    rows={4}
                    placeholder="Share specific insights about BSA Enterprise's execution punctuality, IS code compliance, material grade verification, machinery deployment, or supervision under Founder Sayantan Das..."
                    value={formData.quote}
                    onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-[#240808] border ${
                      formErrors.quote ? "border-red-500 focus:border-red-400" : "border-[#EA580C]/40 focus:border-[#FACC15]"
                    } text-white placeholder-white/40 text-sm focus:outline-none focus:ring-1 focus:ring-[#FACC15] transition-colors resize-y`}
                  />
                  {formErrors.quote && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {formErrors.quote}
                    </p>
                  )}
                </div>

                {/* 4. Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-white/70">
                    <CheckCircle2 className="w-4 h-4 text-[#FACC15] shrink-0" />
                    <span>Your review will appear immediately in the endorsements gallery above.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold btn-gold-shimmer text-white shadow-xl hover:scale-105 transition-transform cursor-pointer"
                  >
                    <span>Submit Client Review</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Call to Action Banner */}
        <div className="bg-gradient-to-r from-[#2A0606] via-[#1E0404] to-[#2A0606] border border-[#EA580C]/40 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left relative z-10">
            <div className="max-w-2xl">
              <span className="text-xs font-bold text-[#FACC15] tracking-widest uppercase inline-flex items-center gap-1.5 mb-2">
                <ShieldCheck className="w-4 h-4 text-[#FACC15]" /> Official Govt Civil Contractor
              </span>
              <h3 className="font-['Montserrat',sans-serif] text-2xl sm:text-3xl font-black text-white">
                Have an Upcoming Civil Tender or Supply Requirement?
              </h3>
              <p className="text-sm text-white/80 mt-2 font-light">
                Consult directly with Founder Sayantan Das for precise BOQ estimates, certified material procurement, and verified milestone handovers.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold btn-gold-shimmer text-white shadow-xl hover:scale-105 transition-transform"
              >
                <span>Request a Free Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={siteConfig.company.contact.phoneTel}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
              >
                <span>Call {siteConfig.company.contact.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
