"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Globe,
  Search,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Shield,
  PhoneCall,
} from "lucide-react";
import { MegaMenu } from "./MegaMenu";
import { RegionModal } from "./RegionModal";
import { SearchOverlay } from "./SearchOverlay";
import { PRODUCT_CATEGORIES } from "@/data/categories";
import { ALL_SOLUTIONS } from "@/data/solutions";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [activeMegaMenu, setActiveMegaMenu] = useState<"products" | "solutions" | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRegionModalOpen, setIsRegionModalOpen] = useState(false);
  const [isSearchOverlayOpen, setIsSearchOverlayOpen] = useState(false);
  const [selectedRegionLabel, setSelectedRegionLabel] = useState("France / FR");
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setActiveMegaMenu(null);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const toggleMobileSection = (section: string) => {
    setMobileExpandedSection(mobileExpandedSection === section ? null : section);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 bg-white ${
          isScrolled
            ? "shadow-md border-b border-gray-200/80"
            : "border-b border-gray-100"
        }`}
      >
        {/* Top utility sub-bar */}
        <div className="hidden lg:block bg-brand-dark text-gray-300 text-xs py-1.5 px-6 border-b border-gray-800">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 text-gray-400">
                <Shield className="w-3.5 h-3.5 text-brand-red" />
                <span>Leader Mondial en Vidéosurveillance & Solutions Intelligentes AIoT</span>
              </span>
              <span className="text-gray-600">|</span>
              <Link href="/news" className="hover:text-white transition">
                Actualité : Nouvelle Plateforme Optique IA WizMind X Dévoilée
              </Link>
            </div>

            <div className="flex items-center gap-5">
              <Link
                href="/contact"
                className="hover:text-white flex items-center gap-1 transition"
              >
                <PhoneCall className="w-3 h-3 text-brand-red" />
                <span>Hotline 24/7</span>
              </Link>
              <button
                onClick={() => setIsRegionModalOpen(true)}
                className="hover:text-white flex items-center gap-1 transition"
              >
                <Globe className="w-3 h-3 text-brand-red" />
                <span>{selectedRegionLabel}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded bg-brand-red flex items-center justify-center text-white font-black text-lg tracking-tighter shadow-sm group-hover:bg-brand-red-hover transition">
                B
              </div>
              <span className="ml-2 font-black text-2xl tracking-wider text-brand-dark group-hover:text-brand-red transition">
                BRAND
              </span>
            </div>
            <span className="hidden sm:inline-block text-[10px] font-bold text-gray-400 tracking-widest uppercase pl-1 border-l border-gray-200">
              Sécurité AIoT
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 h-full">
            {/* Produits avec MegaMenu */}
            <div
              className="h-full flex items-center"
              onMouseEnter={() => setActiveMegaMenu("products")}
            >
              <button
                className={`px-4 py-2 font-semibold text-sm rounded-md transition flex items-center gap-1 ${
                  activeMegaMenu === "products" || pathname.startsWith("/products")
                    ? "text-brand-red bg-red-50/50"
                    : "text-brand-dark hover:text-brand-red"
                }`}
              >
                <span>Produits</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeMegaMenu === "products" ? "rotate-180 text-brand-red" : "text-gray-400"
                  }`}
                />
              </button>
            </div>

            {/* Solutions avec MegaMenu */}
            <div
              className="h-full flex items-center"
              onMouseEnter={() => setActiveMegaMenu("solutions")}
            >
              <button
                className={`px-4 py-2 font-semibold text-sm rounded-md transition flex items-center gap-1 ${
                  activeMegaMenu === "solutions" || pathname.startsWith("/solutions")
                    ? "text-brand-red bg-red-50/50"
                    : "text-brand-dark hover:text-brand-red"
                }`}
              >
                <span>Solutions</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeMegaMenu === "solutions" ? "rotate-180 text-brand-red" : "text-gray-400"
                  }`}
                />
              </button>
            </div>

            {/* Services & Support */}
            <Link
              href="/support"
              onMouseEnter={() => setActiveMegaMenu(null)}
              className={`px-4 py-2 font-semibold text-sm rounded-md transition ${
                pathname === "/support"
                  ? "text-brand-red"
                  : "text-brand-dark hover:text-brand-red"
              }`}
            >
              Services & Support
            </Link>

            {/* Partenaires */}
            <Link
              href="/partners"
              onMouseEnter={() => setActiveMegaMenu(null)}
              className={`px-4 py-2 font-semibold text-sm rounded-md transition ${
                pathname === "/partners"
                  ? "text-brand-red bg-red-50/50"
                  : "text-brand-dark hover:text-brand-red"
              }`}
            >
              Partenaires
            </Link>

            {/* À propos */}
            <Link
              href="/about"
              onMouseEnter={() => setActiveMegaMenu(null)}
              className={`px-4 py-2 font-semibold text-sm rounded-md transition ${
                pathname === "/about"
                  ? "text-brand-red"
                  : "text-brand-dark hover:text-brand-red"
              }`}
            >
              À propos
            </Link>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOverlayOpen(true)}
              aria-label="Rechercher sur le site"
              className="p-2.5 rounded-full text-gray-700 hover:text-brand-red hover:bg-gray-100 transition"
              title="Rechercher produits, technologies et solutions"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Region / Language Trigger on Mobile / Tablet */}
            <button
              onClick={() => setIsRegionModalOpen(true)}
              aria-label="Sélectionner région et langue"
              className="lg:hidden p-2 rounded-full text-gray-700 hover:text-brand-red hover:bg-gray-100 transition"
            >
              <Globe className="w-5 h-5" />
            </button>

            {/* Contact CTA button */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-brand-red text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-red-hover transition shadow-sm hover:shadow"
            >
              <span>Nous Contacter</span>
            </Link>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Ouvrir le menu mobile"
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-brand-red hover:bg-gray-100 transition"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mega Menus pour Desktop */}
        {activeMegaMenu && (
          <div onMouseLeave={() => setActiveMegaMenu(null)}>
            <MegaMenu type={activeMegaMenu} onClose={() => setActiveMegaMenu(null)} />
          </div>
        )}
      </header>

      {/* Tiroir Mobile */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-20 z-40 bg-white overflow-y-auto animate-fade-in border-t border-gray-200">
          <div className="p-6 space-y-4">
            {/* Accordéon Produits */}
            <div className="border-b border-gray-100 pb-3">
              <button
                onClick={() => toggleMobileSection("products")}
                className="w-full flex items-center justify-between py-2 text-base font-bold text-brand-dark"
              >
                <span>Produits</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    mobileExpandedSection === "products" ? "rotate-180 text-brand-red" : ""
                  }`}
                />
              </button>
              {mobileExpandedSection === "products" && (
                <div className="pl-3 pt-2 pb-1 space-y-2 text-sm text-gray-600 animate-fade-in">
                  <Link
                    href="/products"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block font-semibold text-brand-red py-1"
                  >
                    Toutes les catégories de produits &rarr;
                  </Link>
                  {PRODUCT_CATEGORIES.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/products/${cat.slug}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-1 hover:text-brand-red"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Accordéon Solutions */}
            <div className="border-b border-gray-100 pb-3">
              <button
                onClick={() => toggleMobileSection("solutions")}
                className="w-full flex items-center justify-between py-2 text-base font-bold text-brand-dark"
              >
                <span>Solutions</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    mobileExpandedSection === "solutions" ? "rotate-180 text-brand-red" : ""
                  }`}
                />
              </button>
              {mobileExpandedSection === "solutions" && (
                <div className="pl-3 pt-2 pb-1 space-y-2 text-sm text-gray-600 animate-fade-in">
                  {ALL_SOLUTIONS.map((sol) => (
                    <Link
                      key={sol.id}
                      href={`/solutions/${sol.slug}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-1 hover:text-brand-red"
                    >
                      {sol.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Services & Support */}
            <div className="border-b border-gray-100 pb-3">
              <Link
                href="/support"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-base font-bold text-brand-dark hover:text-brand-red"
              >
                Services & Support
              </Link>
            </div>

            {/* Partenaires */}
            <div className="border-b border-gray-100 pb-3">
              <Link
                href="/partners"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-base font-bold text-brand-dark hover:text-brand-red"
              >
                Partenaires & Distributeurs
              </Link>
            </div>

            {/* Actualités */}
            <div className="border-b border-gray-100 pb-3">
              <Link
                href="/news"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-base font-bold text-brand-dark hover:text-brand-red"
              >
                Actualités & Salons
              </Link>
            </div>

            {/* À propos */}
            <div className="border-b border-gray-100 pb-3">
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-base font-bold text-brand-dark hover:text-brand-red"
              >
                À propos de l'Entreprise
              </Link>
            </div>

            {/* Sélecteur de langue mobile */}
            <div className="pt-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsRegionModalOpen(true);
                }}
                className="w-full flex items-center justify-between p-3 rounded-lg bg-gray-100 text-sm font-medium text-gray-700"
              >
                <span className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-brand-red" />
                  <span>Région / Langue : {selectedRegionLabel}</span>
                </span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </button>
            </div>

            {/* Contact CTA */}
            <div className="pt-4">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center block py-3 rounded-lg bg-brand-red text-white font-bold text-sm uppercase tracking-wider"
              >
                Contacter un Conseiller Commercial
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Modale Région & Langue */}
      <RegionModal
        isOpen={isRegionModalOpen}
        onClose={() => setIsRegionModalOpen(false)}
        currentRegion={selectedRegionLabel}
        onSelectRegion={(_code, label) => setSelectedRegionLabel(label)}
      />

      {/* Overlay de Recherche Plein Écran */}
      <SearchOverlay
        isOpen={isSearchOverlayOpen}
        onClose={() => setIsSearchOverlayOpen(false)}
      />
    </>
  );
};
