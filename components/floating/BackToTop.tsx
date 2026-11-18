"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 left-6 z-30 w-11 h-11 rounded-full bg-white text-gray-700 hover:text-brand-red border border-gray-200/90 shadow-floating hover:shadow-card flex items-center justify-center transition-all duration-200 hover:-translate-y-1 group"
    >
      <ArrowUp className="w-5 h-5 group-hover:scale-110 transition" />
    </button>
  );
};
