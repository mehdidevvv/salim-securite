"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Download,
  Check,
  Search,
  SlidersHorizontal,
  Eye,
  X,
} from "lucide-react";
import { PRODUCT_CATEGORIES, ProductCategory } from "@/data/categories";
import { ALL_PRODUCTS, ProductItem } from "@/data/products";

interface CategoryClientProps {
  currentCategory: ProductCategory;
  categoryProducts: ProductItem[];
}

export const CategoryClient: React.FC<CategoryClientProps> = ({
  currentCategory,
  categoryProducts,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFormFactor, setSelectedFormFactor] = useState<string>("all");
  const [selectedProductForModal, setSelectedProductForModal] = useState<ProductItem | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filter products by search & form factor
  const filteredProducts = categoryProducts.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tagline.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesForm =
      selectedFormFactor === "all" || product.formFactor.toLowerCase().includes(selectedFormFactor.toLowerCase());

    return matchesSearch && matchesForm;
  });

  const formFactors = Array.from(new Set(categoryProducts.map((p) => p.formFactor)));

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage) || 1;
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-brand-light min-h-screen">
      {/* Category Hero Banner */}
      <div className="relative bg-brand-dark text-white py-14 px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('${currentCategory.image}')` }}
        />
        <div className="relative z-10 max-w-7xl mx-auto space-y-3">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Link href="/" className="hover:text-white transition">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
            <Link href="/products" className="hover:text-white transition">Produits</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
            <span className="text-brand-red font-medium">{currentCategory.name}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            {currentCategory.name}
          </h1>
          <p className="text-gray-300 text-sm max-w-2xl leading-relaxed">
            {currentCategory.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {currentCategory.highlightSpecs.map((spec, i) => (
              <span
                key={i}
                className="text-xs bg-white/10 text-white px-3 py-1 rounded-full border border-white/20 font-medium"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-72 shrink-0 space-y-6">
            {/* Quick Search */}
            <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-xs">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">
                Rechercher dans {currentCategory.name}
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Référence ou mot-clé (ex: 8MP)..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-9 pr-3 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:border-brand-red"
                />
              </div>
            </div>

            {/* Form Factor Filter */}
            {formFactors.length > 0 && (
              <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-xs">
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center justify-between">
                  <span>Facteur de Forme</span>
                  <SlidersHorizontal className="w-3.5 h-3.5 text-brand-red" />
                </h4>
                <div className="space-y-1.5">
                  <button
                    onClick={() => {
                      setSelectedFormFactor("all");
                      setCurrentPage(1);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition flex items-center justify-between ${
                      selectedFormFactor === "all"
                        ? "bg-brand-red text-white font-semibold"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <span>Tous les Formats</span>
                    <span>({categoryProducts.length})</span>
                  </button>

                  {formFactors.map((form) => {
                    const count = categoryProducts.filter((p) => p.formFactor === form).length;
                    return (
                      <button
                        key={form}
                        onClick={() => {
                          setSelectedFormFactor(form);
                          setCurrentPage(1);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition flex items-center justify-between ${
                          selectedFormFactor === form
                            ? "bg-brand-red text-white font-semibold"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        <span>{form}</span>
                        <span className="text-[10px] opacity-70">({count})</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Other Categories Links */}
            <div className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-xs">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                Autres Catégories
              </h4>
              <div className="space-y-1.5">
                {PRODUCT_CATEGORIES.filter((c) => c.slug !== currentCategory.slug)
                  .slice(0, 6)
                  .map((other) => (
                    <Link
                      key={other.id}
                      href={`/products/${other.slug}`}
                      className="block text-xs text-gray-600 hover:text-brand-red hover:underline py-1"
                    >
                      {other.name}
                    </Link>
                  ))}
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="flex-1">
            {/* Top Toolbar */}
            <div className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-xs flex items-center justify-between mb-6">
              <div className="text-xs text-gray-500">
                <strong className="text-brand-dark">{filteredProducts.length}</strong> produits trouvés
              </div>
              <div className="text-xs text-gray-400">
                Page {currentPage} sur {totalPages}
              </div>
            </div>

            {/* Products Cards */}
            {paginatedProducts.length === 0 ? (
              <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center text-gray-500">
                <p className="text-base">Aucun produit ne correspond à vos critères de recherche.</p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedFormFactor("all");
                  }}
                  className="mt-3 text-xs text-brand-red font-bold underline"
                >
                  Effacer les filtres
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between"
                  >
                    {/* Image Area */}
                    <div className="relative h-48 w-full bg-gray-50 p-4 flex items-center justify-center overflow-hidden border-b border-gray-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-h-full max-w-full object-contain group-hover:scale-108 transition duration-500"
                      />

                      {/* Badge */}
                      {product.badge && (
                        <span className="absolute top-3 left-3 bg-brand-red text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                          {product.badge}
                        </span>
                      )}

                      {/* Quick Details Button */}
                      <button
                        onClick={() => setSelectedProductForModal(product)}
                        title="Voir la fiche technique"
                        className="absolute bottom-3 right-3 p-2 rounded-full bg-white/90 hover:bg-brand-red hover:text-white text-gray-700 shadow transition"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        {/* SKU Reference */}
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-brand-red">
                            {product.sku}
                          </span>
                          <span className="text-[10px] text-gray-400 uppercase">
                            {product.formFactor}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-sm font-bold text-brand-dark group-hover:text-brand-red transition line-clamp-1">
                          {product.name}
                        </h3>

                        {/* Subtitle / Description */}
                        <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                          {product.description}
                        </p>

                        {/* Key Specs Pills */}
                        <div className="pt-2 space-y-1">
                          {product.specs.slice(0, 3).map((spec, sIdx) => (
                            <div
                              key={sIdx}
                              className="text-[11px] text-gray-600 flex items-center justify-between border-b border-gray-50 pb-1"
                            >
                              <span className="text-gray-400">{spec.label} :</span>
                              <span className="font-medium text-gray-800 text-right truncate pl-2 max-w-[150px]">
                                {spec.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Actions */}
                      <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between gap-2">
                        <button
                          onClick={() => setSelectedProductForModal(product)}
                          className="text-xs font-bold text-brand-dark hover:text-brand-red transition"
                        >
                          Détails & Specs
                        </button>

                        <button
                          onClick={() =>
                            alert(`Téléchargement de la fiche technique PDF pour ${product.sku}...`)
                          }
                          className="p-1.5 rounded-lg bg-gray-100 hover:bg-brand-red hover:text-white text-gray-600 transition flex items-center gap-1 text-[11px]"
                          title="Télécharger la fiche technique"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">Datasheet</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-10 flex items-center justify-center gap-2">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  className="px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-xs font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                >
                  Précédent
                </button>
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentPage(idx + 1)}
                    className={`w-8 h-8 rounded-lg text-xs font-bold transition ${
                      currentPage === idx + 1
                        ? "bg-brand-red text-white"
                        : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  className="px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-xs font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                >
                  Suivant
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Product Specification Modal */}
      {selectedProductForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-floating p-6 overflow-y-auto max-h-[90vh] text-gray-800"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProductForModal(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-full sm:w-48 h-48 bg-gray-50 rounded-xl border border-gray-200 p-3 flex items-center justify-center shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedProductForModal.image}
                  alt={selectedProductForModal.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="space-y-2 flex-1">
                <span className="text-xs font-mono font-bold text-brand-red">
                  {selectedProductForModal.sku}
                </span>
                <h3 className="text-xl font-bold text-brand-dark">
                  {selectedProductForModal.name}
                </h3>
                <p className="text-xs text-gray-500">
                  {selectedProductForModal.description}
                </p>

                <div className="pt-2">
                  <span className="text-xs font-bold text-gray-700 uppercase block mb-1">
                    Fonctionnalités Principales :
                  </span>
                  <ul className="space-y-1 text-xs text-gray-600">
                    {selectedProductForModal.keyFeatures.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-brand-red shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Specifications Table */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
                Spécifications Techniques Complètes
              </h4>
              <div className="border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-100 text-xs">
                {selectedProductForModal.specs.map((s, idx) => (
                  <div key={idx} className="flex py-2.5 px-4 bg-white even:bg-gray-50">
                    <span className="w-1/3 text-gray-500 font-medium">{s.label}</span>
                    <span className="w-2/3 text-gray-900 font-semibold">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between">
              <button
                onClick={() =>
                  alert(`Téléchargement de la fiche technique PDF pour ${selectedProductForModal.sku}...`)
                }
                className="px-5 py-2.5 rounded-lg bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold uppercase tracking-wider transition flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Télécharger la Fiche Technique (PDF)</span>
              </button>

              <Link
                href="/contact"
                className="px-4 py-2.5 rounded-lg border border-gray-300 hover:border-brand-dark text-xs font-bold text-gray-700 transition"
              >
                Demander un Devis
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
