"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, Play, Pause } from "lucide-react";
import { HERO_BANNERS, HeroBanner } from "@/data/heroBanners";

export const HeroCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % HERO_BANNERS.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + HERO_BANNERS.length) % HERO_BANNERS.length);
  };

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  const currentBanner = HERO_BANNERS[currentIndex];

  return (
    <section
      aria-label="Hero flagship banners"
      className="relative w-full h-[620px] sm:h-[680px] lg:h-[740px] bg-brand-dark overflow-hidden select-none"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Background Slides */}
      {HERO_BANNERS.map((banner, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Background Image with Zoom animation */}
            <div
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-[7000ms] ease-out ${
                isActive ? "scale-105" : "scale-100"
              }`}
              style={{
                backgroundImage: `url('${banner.image}')`,
              }}
            />

            {/* Gradient Overlays for tech corporate look */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-black/30" />

            {/* Content Container */}
            <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
              <div className="max-w-2xl text-white space-y-4 md:space-y-6">
                {/* Tag */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/90 text-white text-xs font-bold tracking-widest uppercase">
                  <span>{banner.tag}</span>
                </div>

                {/* Main Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight drop-shadow-sm">
                  {banner.title}
                </h1>

                {/* Subtitle */}
                <p className="text-lg sm:text-xl font-medium text-gray-200">
                  {banner.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed line-clamp-3">
                  {banner.description}
                </p>

                {/* CTA Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    href={banner.ctaLink}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-brand-red hover:bg-brand-red-hover text-white text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-card hover:translate-x-0.5"
                  >
                    <span>{banner.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  {banner.secondaryCtaText && banner.secondaryCtaLink && (
                    <Link
                      href={banner.secondaryCtaLink}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-bold tracking-wider transition duration-200"
                    >
                      <span>{banner.secondaryCtaText}</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/40 hover:bg-brand-red text-white flex items-center justify-center backdrop-blur-sm transition border border-white/10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/40 hover:bg-brand-red text-white flex items-center justify-center backdrop-blur-sm transition border border-white/10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Bottom Controls Bar (Pagination, Play/Pause, Progress) */}
      <div className="absolute bottom-8 left-0 right-0 z-30 max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Indicators */}
        <div className="flex items-center gap-2 sm:gap-3">
          {HERO_BANNERS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 transition-all duration-300 rounded-full ${
                idx === currentIndex
                  ? "w-8 sm:w-12 bg-brand-red"
                  : "w-2.5 sm:w-3 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* Counter and Play/Pause */}
        <div className="flex items-center gap-4 text-white text-xs font-mono">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
          <span>
            0{currentIndex + 1} / 0{HERO_BANNERS.length}
          </span>
        </div>
      </div>
    </section>
  );
};
