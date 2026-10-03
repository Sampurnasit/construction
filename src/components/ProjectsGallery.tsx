"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteConfig, ProjectItem } from "@/data/siteContent";
import {
  Maximize2,
  X,
  MapPin,
  CheckCircle,
  Tag,
  FolderKanban,
  ChevronRight,
} from "lucide-react";

export default function ProjectsGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeLightboxProject, setActiveLightboxProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "civil", label: "Civil Infrastructure" },
    { id: "building", label: "Building Construction" },
    { id: "materials", label: "General Order Supply" },
    { id: "municipal", label: "Municipal Works" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? siteConfig.projects
      : siteConfig.projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#0B5D2E]/10 border border-[#D4A017]/40 px-3.5 py-1.5 rounded-full mb-3">
            <FolderKanban className="w-4 h-4 text-[#0B5D2E]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#0B5D2E]">
              Portfolio &amp; Past Execution
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-['Montserrat',sans-serif] text-[#063D1E] tracking-tight">
            Featured <span className="text-[#0B5D2E]">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4A017] to-transparent mx-auto mt-4 mb-5" />
          <p className="text-base sm:text-lg text-[#52606D] leading-relaxed">
            A glimpse into our civil engineering works, municipal infrastructure upgrades, and material delivery operations.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#063D1E] text-[#F2D675] border-2 border-[#D4A017] shadow-md scale-105"
                    : "bg-[#FFFDF0] text-[#1F2933] border border-[#D4A017]/30 hover:border-[#D4A017] hover:bg-[#FAF8EA]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="luxury-card overflow-hidden group flex flex-col justify-between cursor-pointer"
              onClick={() => setActiveLightboxProject(project)}
            >
              <div>
                {/* Image Container with Hover Zoom & Overlay */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#063D1E]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#063D1E]/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Status & Category Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#063D1E]/80 backdrop-blur-md text-[#F2D675] border border-[#D4A017]/50">
                      {project.categoryLabel}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#22c55e]/90 text-white backdrop-blur-sm">
                      {project.status}
                    </span>
                  </div>

                  {/* Maximize Icon on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-[#063D1E]/30 backdrop-blur-[2px]">
                    <div className="w-12 h-12 rounded-full bg-[#D4A017] text-[#063D1E] flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Location Pill at bottom */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-xs text-white font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#F2D675] shrink-0" />
                    <span className="truncate">{project.location}</span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6">
                  <h3 className="font-['Montserrat',sans-serif] font-bold text-lg text-[#063D1E] group-hover:text-[#0B5D2E] transition-colors mb-2 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#52606D] line-clamp-2 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Specs Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.specs.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-semibold bg-[#FFFDF0] text-[#0B5D2E] border border-[#D4A017]/30 px-2 py-0.5 rounded-md"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-6 py-3.5 bg-[#FFFDF0] border-t border-[#D4A017]/20 flex items-center justify-between text-xs font-bold text-[#063D1E]">
                <span>View Full Specifications</span>
                <ChevronRight className="w-4 h-4 text-[#D4A017] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Lightbox Modal */}
      {activeLightboxProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveLightboxProject(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl border border-[#D4A017]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveLightboxProject(null)}
              className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-[#063D1E] text-[#F2D675] hover:bg-[#0B5D2E] flex items-center justify-center transition-colors shadow-lg cursor-pointer"
              aria-label="Close project preview"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[16/9] w-full bg-black">
              <Image
                src={activeLightboxProject.image}
                alt={activeLightboxProject.title}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Modal Info Details */}
            <div className="p-6 sm:p-8 bg-[#FFFDF0]">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#063D1E] text-[#F2D675]">
                    {activeLightboxProject.categoryLabel}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                    {activeLightboxProject.status}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#52606D] font-medium">
                  <MapPin className="w-4 h-4 text-[#D4A017]" />
                  <span>{activeLightboxProject.location}</span>
                </div>
              </div>

              <h3 className="font-['Montserrat',sans-serif] font-black text-xl sm:text-2xl text-[#063D1E] mb-3">
                {activeLightboxProject.title}
              </h3>
              <p className="text-sm sm:text-base text-[#1F2933] mb-5 leading-relaxed">
                {activeLightboxProject.description}
              </p>

              {/* Specs Grid */}
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#063D1E] block mb-2">
                  Project Highlights:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {activeLightboxProject.specs.map((spec, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-[#D4A017]/30 text-xs font-medium text-[#1F2933]"
                    >
                      <CheckCircle className="w-4 h-4 text-[#0B5D2E] shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action row */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#D4A017]/30">
                <div className="text-xs text-[#52606D]">
                  Executed by <strong>BSA Enterprise</strong> • Kolkata, West Bengal
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="#contact"
                    onClick={() => setActiveLightboxProject(null)}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-lg text-xs font-bold btn-gold-shimmer text-center"
                  >
                    Inquire for Similar Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
