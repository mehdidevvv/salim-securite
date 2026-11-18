"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Phone,
  Send,
  CheckCircle2,
  Building2,
  ShieldCheck,
} from "lucide-react";
import { GLOBAL_OFFICES } from "@/data/company";

export const ContactClient: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    inquiryType: "Vente & Devis Projet",
    region: "Europe",
    message: "",
    agree: true,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedOfficeId, setSelectedOfficeId] = useState(GLOBAL_OFFICES[0].id);

  const selectedOffice =
    GLOBAL_OFFICES.find((o) => o.id === selectedOfficeId) || GLOBAL_OFFICES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitted(true);
  };

  return (
    <div className="bg-brand-light min-h-screen">
      {/* Hero Banner */}
      <div className="relative bg-brand-dark text-white py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Link href="/" className="hover:text-white transition">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
            <span className="text-brand-red font-medium">Contact & Support</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Contact Commercial & Assistance Technique
          </h1>
          <p className="text-gray-300 max-w-2xl text-sm sm:text-base leading-relaxed">
            Échangez avec nos consultants techniques certifiés, demandez une cotation de projet, identifiez un distributeur agréé ou déclarez un retour SAV.
          </p>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-gray-200/90 shadow-soft">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-red">
                Formulaire de Contact
              </span>
              <h2 className="text-2xl font-black text-brand-dark mt-1">
                Étude de Projet & Support Client
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Notre équipe technique régionale répond généralement en moins de 4 heures ouvrées.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 bg-green-50/70 border border-green-200 rounded-2xl text-center space-y-4 animate-fade-in">
                <CheckCircle2 className="w-14 h-14 text-green-500 mx-auto" />
                <h3 className="text-xl font-bold text-green-900">
                  Message Transmis avec Succès !
                </h3>
                <p className="text-xs sm:text-sm text-green-700 max-w-md mx-auto">
                  Merci, <strong className="font-semibold">{formData.name}</strong>. Votre demande a été enregistrée et transmise à l'équipe commerciale <strong className="font-semibold">{formData.region}</strong>. Un email de confirmation a été expédié à <strong className="font-semibold font-mono">{formData.email}</strong>.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      company: "",
                      inquiryType: "Vente & Devis Projet",
                      region: "Europe",
                      message: "",
                      agree: true,
                    });
                  }}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-brand-red text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-red-hover transition"
                >
                  Envoyer une Autre Demande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Nom complet */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Nom et Prénom *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="ex : Jean Dupont"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs sm:text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-brand-red transition"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Email Professionnel *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="ex : contact@entreprise.fr"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs sm:text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-brand-red transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Société */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Société / Organisation
                    </label>
                    <input
                      type="text"
                      placeholder="ex : Sécurité Systèmes SAS"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs sm:text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-brand-red transition"
                    />
                  </div>

                  {/* Région */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Zone Géographique
                    </label>
                    <select
                      value={formData.region}
                      onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs sm:text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-brand-red bg-white"
                    >
                      <option value="Europe">France & Europe de l'Ouest</option>
                      <option value="Amériques">Amériques (USA, Canada, LATAM)</option>
                      <option value="Asie-Pacifique">Asie-Pacifique</option>
                      <option value="Moyen-Orient & Afrique">Moyen-Orient & Afrique</option>
                      <option value="Global">Siège Mondial Direct</option>
                    </select>
                  </div>
                </div>

                {/* Type de demande */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Nature de la Demande
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs sm:text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-brand-red bg-white"
                  >
                    <option value="Vente & Devis Projet">
                      Vente & Cotation de Projet
                    </option>
                    <option value="Support Technique & Dépannage">
                      Support Technique & Dépannage
                    </option>
                    <option value="Candidature Distributeur / Partenaire">
                      Candidature Distributeur / Partenaire
                    </option>
                    <option value="Demande d'Intégration API & SDK">
                      Demande d'Intégration API & SDK
                    </option>
                    <option value="Retour SAV, Garantie & Réparation">
                      Retour SAV, Garantie & Réparation (RMA)
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Détails du Projet ou Question *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Précisez votre besoin : nombre de caméras, type d'infrastructure, intégration VMS ou questions techniques..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 text-xs sm:text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-brand-red transition"
                  />
                </div>

                {/* Consentement RGPD */}
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <input
                    type="checkbox"
                    id="contact-agree"
                    checked={formData.agree}
                    onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                    required
                    className="rounded text-brand-red focus:ring-brand-red"
                  />
                  <label htmlFor="contact-agree">
                    J'accepte le traitement de mes données professionnelles conformément au RGPD et aux normes de confidentialité ISO 27001.
                  </label>
                </div>

                {/* Bouton envoi */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-brand-red hover:bg-brand-red-hover text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition shadow-card flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Envoyer la Demande</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Information & Offices (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick 24/7 Hotline card */}
            <div className="bg-brand-dark text-white p-6 sm:p-8 rounded-3xl border border-gray-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-red flex items-center justify-center text-white">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base">Assistance Technique 24h/24 & 7j/7</h3>
                  <p className="text-xs text-gray-400">Escalade directe aux ingénieurs</p>
                </div>
              </div>

              <div className="pt-2 space-y-2 text-xs sm:text-sm text-gray-300">
                <p className="flex items-center gap-2">
                  <strong className="text-white">France & Europe :</strong> +33 (0)1 48 63 78 00
                </p>
                <p className="flex items-center gap-2">
                  <strong className="text-white">Siège Mondial :</strong> +86 571 8768 8883
                </p>
                <p className="flex items-center gap-2">
                  <strong className="text-white">Amériques :</strong> +1 (877) 606-1590
                </p>
                <p className="flex items-center gap-2">
                  <strong className="text-white">Email SAV :</strong> support@brand-aiot.com
                </p>
              </div>

              <div className="pt-4 border-t border-gray-800 flex items-center gap-2 text-xs text-green-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Garantie de réponse SLA Entreprise Niveau 3</span>
              </div>
            </div>

            {/* Interactive Office Location Selector */}
            <div className="bg-white p-6 rounded-3xl border border-gray-200/90 shadow-soft space-y-4">
              <h3 className="font-bold text-base text-brand-dark flex items-center gap-2">
                <Building2 className="w-4 h-4 text-brand-red" />
                <span>Agences Régionales & Showrooms</span>
              </h3>

              {/* Selector buttons */}
              <div className="flex flex-wrap gap-1.5">
                {GLOBAL_OFFICES.map((off) => (
                  <button
                    key={off.id}
                    onClick={() => setSelectedOfficeId(off.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                      selectedOfficeId === off.id
                        ? "bg-brand-red text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {off.city}
                  </button>
                ))}
              </div>

              {/* Selected Office Card */}
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 space-y-2 text-xs">
                <span className="text-[10px] font-bold uppercase text-brand-red">
                  {selectedOffice.country}
                </span>
                <h4 className="font-bold text-sm text-brand-dark">
                  {selectedOffice.name}
                </h4>
                <p className="text-gray-500">{selectedOffice.address}</p>
                <p className="text-gray-700 pt-1">
                  <strong>Tél :</strong> {selectedOffice.phone}
                </p>
                <p className="text-gray-700">
                  <strong>Email :</strong> {selectedOffice.email}
                </p>
                <p className="text-[11px] text-gray-400 italic pt-1">
                  {selectedOffice.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
