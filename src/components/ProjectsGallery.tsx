"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { siteConfig, GalleryImage } from "@/data/siteContent";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Play,
  Pause,
  Images,
  ArrowRight,
  Camera,
} from "lucide-react";

export default function ProjectsGallery() {
  const images: GalleryImage[] = siteConfig.galleryImages || [];
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const thumbnailStripRef = useRef<HTMLDivElement>(null);
  const slideContainerRef = useRef<HTMLDivElement>(null);

  const total = images.length;

  const goToSlide = useCallback((index: number) => {
    if (total === 0) return;
    const newIdx = (index + total) % total;
    setCurrentIndex(newIdx);
  }, [total]);

  const nextSlide = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  // Autoplay timer
  useEffect(() => {
    if (!isPlaying || isLightboxOpen || total === 0) return;
    const timer = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPlaying, isLightboxOpen, currentIndex, goToSlide, total]);

  // Keep active thumbnail visible in the scrollable thumbnail strip WITHOUT scrolling the window
  useEffect(() => {
    if (thumbnailStripRef.current) {
      const container = thumbnailStripRef.current;
      const activeThumb = container.children[currentIndex] as HTMLElement;
      if (activeThumb) {
        const thumbLeft = activeThumb.offsetLeft;
        const thumbWidth = activeThumb.offsetWidth;
        const containerWidth = container.offsetWidth;
        container.scrollTo({
          left: thumbLeft - containerWidth / 2 + thumbWidth / 2,
          behavior: "smooth",
        });
      }
    }
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      } else if (e.key === "Escape" && isLightboxOpen) {
        setIsLightboxOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide, isLightboxOpen]);

  // Touch Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 45;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  if (total === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <section id="gallery" className="py-20 bg-white relative overflow-hidden scroll-mt-20">
      {/* Fallback anchor for backward compatibility */}
      <span id="projects" className="absolute -top-24" />

      {/* Subtle decorative background gradient circles */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#DC2626]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#EA580C]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#DC2626]/10 border border-[#EA580C]/40 px-4 py-1.5 rounded-full mb-3 shadow-sm">
            <Images className="w-4 h-4 text-[#DC2626]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
              Real On-Site Work Showcase
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-['Montserrat',sans-serif] text-[#1C1917] tracking-tight">
            Our Work &amp; Project <span className="text-[#DC2626]">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#EA580C] to-transparent mx-auto mt-4 mb-4" />
          <p className="text-base sm:text-lg text-[#57534E] leading-relaxed">
            A real-world visual tour of our active civil engineering works, road infrastructure, drainage solutions, and logistics operations.
          </p>
        </div>

        {/* Main Sliding Interface Container */}
        <div className="max-w-5xl mx-auto">
          <div
            ref={slideContainerRef}
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#1A0505] shadow-2xl border-2 border-[#EA580C]/40 group select-none"
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Ambient Blurred Background of current image for seamless glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
              <Image
                src={currentImage.src}
                alt=""
                fill
                className="object-cover blur-2xl scale-110 transition-all duration-700 ease-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0505] via-[#1A0505]/60 to-[#1A0505]/40" />
            </div>

            {/* Main Image Display Viewport - Fixed height across all screens to guarantee zero layout shifts */}
            <div
              className="relative w-full h-[380px] sm:h-[460px] md:h-[520px] lg:h-[560px] flex items-center justify-center cursor-pointer overflow-hidden"
              onClick={() => setIsLightboxOpen(true)}
              title="Click to view full screen"
            >
              <Image
                key={currentImage.src}
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
                className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                priority
              />

              {/* Top Controls Overlay */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
                {/* Counter Pill with fixed digit width */}
                <div className="pointer-events-auto flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A0505]/80 backdrop-blur-md border border-[#EA580C]/50 text-white text-xs font-bold shadow-md">
                  <Camera className="w-3.5 h-3.5 text-[#FACC15]" />
                  <span>
                    Photo <strong className="text-[#FACC15]">{String(currentIndex + 1).padStart(2, "0")}</strong> of {String(total).padStart(2, "0")}
                  </span>
                </div>

                {/* Autoplay & Fullscreen Action Buttons */}
                <div className="pointer-events-auto flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsPlaying((prev) => !prev);
                    }}
                    className="w-9 h-9 rounded-full bg-[#1A0505]/80 hover:bg-[#DC2626] text-white flex items-center justify-center backdrop-blur-md border border-[#EA580C]/50 transition-colors shadow-md cursor-pointer"
                    aria-label={isPlaying ? "Pause auto-slide" : "Start auto-slide"}
                    title={isPlaying ? "Pause auto-slide" : "Play auto-slide"}
                  >
                    {isPlaying ? <Pause className="w-4 h-4 text-[#FACC15]" /> : <Play className="w-4 h-4 text-[#FACC15] ml-0.5" />}
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsLightboxOpen(true);
                    }}
                    className="w-9 h-9 rounded-full bg-[#1A0505]/80 hover:bg-[#DC2626] text-white flex items-center justify-center backdrop-blur-md border border-[#EA580C]/50 transition-colors shadow-md cursor-pointer"
                    aria-label="View fullscreen image"
                    title="View fullscreen"
                  >
                    <Maximize2 className="w-4 h-4 text-[#FACC15]" />
                  </button>
                </div>
              </div>

              {/* Side Navigation Buttons (Prev / Next) */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#1A0505]/80 hover:bg-[#DC2626] text-white flex items-center justify-center backdrop-blur-md border border-[#EA580C]/60 hover:border-[#FACC15] transition-all duration-200 shadow-xl cursor-pointer hover:scale-110 active:scale-95"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-[#FACC15]" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#1A0505]/80 hover:bg-[#DC2626] text-white flex items-center justify-center backdrop-blur-md border border-[#EA580C]/60 hover:border-[#FACC15] transition-all duration-200 shadow-xl cursor-pointer hover:scale-110 active:scale-95"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-[#FACC15]" />
              </button>

              {/* Bottom Subtle Overlay with Dots */}
              <div className="absolute bottom-4 inset-x-0 flex items-center justify-center gap-1.5 z-20 pointer-events-none">
                <div className="pointer-events-auto flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1A0505]/75 backdrop-blur-md border border-white/10">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        goToSlide(idx);
                      }}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        currentIndex === idx
                          ? "w-6 bg-gradient-to-r from-[#FACC15] to-[#EA580C]"
                          : "w-2 bg-white/40 hover:bg-white/80"
                      }`}
                      aria-label={`Jump to photo ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnail Strip with Horizontal Slide Track */}
          <div className="mt-6 relative w-full max-w-full">
            <div className="flex items-center justify-between mb-2 px-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#57534E]">
                All Site Photos ({total})
              </span>
              <span className="text-xs text-[#DC2626] font-semibold flex items-center gap-1">
                Slide or tap thumbnail to view
              </span>
            </div>

            <div
              ref={thumbnailStripRef}
              className="flex items-center gap-3 overflow-x-auto pb-3 pt-1 px-1 w-full max-w-full scrollbar-thin scrollbar-thumb-[#EA580C]/40 scrollbar-track-transparent"
              style={{ scrollBehavior: "smooth" }}
            >
              {images.map((img, idx) => {
                const isActive = currentIndex === idx;
                return (
                  <button
                    key={img.id}
                    onClick={() => goToSlide(idx)}
                    className={`relative shrink-0 w-20 h-14 sm:w-24 sm:h-16 rounded-xl overflow-hidden cursor-pointer transition-all duration-200 border-2 ${
                      isActive
                        ? "border-[#FACC15] ring-2 ring-[#DC2626] scale-105 shadow-lg opacity-100"
                        : "border-stone-200/50 opacity-60 hover:opacity-100 hover:scale-102"
                    }`}
                    aria-label={`Thumbnail ${idx + 1}`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <span className="absolute bottom-1 right-1 text-[9px] font-bold px-1 rounded bg-[#1A0505]/80 text-[#FACC15]">
                      {idx + 1}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Clean Contact Action Callout */}
          <div className="mt-10 p-6 rounded-2xl bg-[#FFFBF5] border border-[#EA580C]/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div>
              <h4 className="font-['Montserrat',sans-serif] font-bold text-base text-[#1C1917]">
                Require Civil Execution or Material Supply for Your Project?
              </h4>
              <p className="text-xs sm:text-sm text-[#57534E] mt-0.5">
                BSA Enterprise is a certified government civil contractor headquartered in Kolkata.
              </p>
            </div>
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-xl text-xs font-bold btn-gold-shimmer text-white shrink-0 flex items-center gap-2 shadow-md hover:scale-105 transition-transform"
            >
              <span>Request Quotation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      {/* High-Resolution Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/92 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-4 right-4 z-50 w-11 h-11 rounded-full bg-[#1A0505] text-[#FACC15] hover:bg-[#DC2626] hover:text-white flex items-center justify-center transition-colors shadow-2xl border border-[#EA580C]/50 cursor-pointer"
            aria-label="Close fullscreen preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Lightbox Navigation Buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-[#1A0505]/85 text-[#FACC15] hover:bg-[#DC2626] hover:text-white flex items-center justify-center transition-all border border-[#EA580C]/50 shadow-2xl cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-[#1A0505]/85 text-[#FACC15] hover:bg-[#DC2626] hover:text-white flex items-center justify-center transition-all border border-[#EA580C]/50 shadow-2xl cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          {/* Fullscreen Photo Container */}
          <div
            className="relative w-full max-w-6xl h-[80vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              className="object-contain"
              priority
            />

            {/* Bottom Info Bar inside Lightbox */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#1A0505]/85 border border-[#EA580C]/50 text-white text-xs font-semibold backdrop-blur-md shadow-lg flex items-center gap-3">
              <span>Photo <strong>{currentIndex + 1}</strong> of {total}</span>
              <span className="text-stone-400">•</span>
              <span className="text-[#FACC15]">BSA Enterprise Real Site Work</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
