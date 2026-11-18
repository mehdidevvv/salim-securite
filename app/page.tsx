import React from "react";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { ProductCategoriesGrid } from "@/components/home/ProductCategoriesGrid";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { SuccessCaseSection } from "@/components/home/SuccessCaseSection";
import { VideoBanner } from "@/components/home/VideoBanner";
import { WhatsNewSection } from "@/components/home/WhatsNewSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      {/* 1. Hero Carousel: 4-5 full screen banners */}
      <HeroCarousel />

      {/* 2. Products: Grid of category cards */}
      <ProductCategoriesGrid />

      {/* 3. Solutions: 3 tabs (City, Enterprise, SMB) */}
      <SolutionsSection />

      {/* 4. Success Case: 2 tabs (City Business / Enterprise Business) */}
      <SuccessCaseSection />

      {/* 5. Video Banner: "Creating a sustainable future through advanced technologies" */}
      <VideoBanner />

      {/* 6. What's New: 3 columns (News, Blogs, Events) */}
      <WhatsNewSection />

      {/* 7. Newsletter: email input + Subscribe button */}
      <NewsletterSection />
    </div>
  );
}
