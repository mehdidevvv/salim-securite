"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Award,
  Users,
  Building,
  Wrench,
  Cpu,
  Truck,
  ArrowRight,
  Send,
  Phone,
  Mail,
  HelpCircle,
  Box,
  GraduationCap,
  Headphones,
} from "lucide-react";
import {
  PARTNER_PROGRAMS,
  PARTNER_TIERS,
  PARTNER_ADVANTAGES,
} from "@/data/partners";

export const PartnersClient: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    country: "France",
    partnerType: "integrator",
    certifications: "",
    annualVolume: "15k-50k",
    message: "",
    agree: true,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName || !formData.email || !formData.contactName) return;
    setIsSubmitted(true);
  };

  return (
    <div className="bg-brand-light min-h-screen">
      {/* Hero Banner */}
      <div className="relative bg-brand-dark text-white py-16 sm:py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 space-y-4">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Link href="/" className="hover:text-white transition">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
            <span className="text-brand-red font-medium">Programme Partenaires</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-brand-red/20 text-brand-red border border-brand-red/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Écosystème Mondial de Croissance</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight max-w-3xl">
            Rejoignez le Réseau Officiel des Partenaires BRAND Sécurité AIoT
          </h1>

          <p className="text-gray-300 max-w-2xl text-sm sm:text-base leading-relaxed">
            Distributeurs agréés, intégrateurs certifiés ou éditeurs technologiques : accédez à des remises projets protégées, des formations diplômantes et l'appui direct de nos ingénieurs système.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <a
              href="#formulaire"
              className="px-6 py-3 rounded-xl bg-brand-red hover:bg-brand-red-hover text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition shadow-card flex items-center gap-2"
            >
              <span>Devenir Partenaire Certifié</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#niveaux"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition border border-white/20"
            >
              Voir les Niveaux & Remises
            </a>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 py-14 space-y-20">
        {/* Section 1: Three Partner Tracks */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-red">
              Filières de Coopération
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-brand-dark mt-2">
              Un Programme Adapté à Votre Métier
            </h2>
            <p className="text-gray-600 text-sm mt-3">
              Que vous assuriez la distribution logistique régionale, l'intégration technique de terrain ou le développement de solutions logicielles, découvrez votre filière dédiée.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PARTNER_PROGRAMS.map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-2xl border border-gray-200/90 p-8 shadow-soft hover:shadow-card transition flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-brand-red flex items-center justify-center mb-6">
                    {program.id === "distributors" && <Truck className="w-6 h-6" />}
                    {program.id === "integrators" && <Wrench className="w-6 h-6" />}
                    {program.id === "technology" && <Cpu className="w-6 h-6" />}
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                    {program.subtitle}
                  </span>
                  <h3 className="text-xl font-black text-brand-dark mt-1 mb-3">
                    {program.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                    {program.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-gray-100">
                    <span className="text-xs font-bold text-brand-dark block">
                      Avantages Inclus :
                    </span>
                    {program.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-gray-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-red shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-6">
                  <a
                    href="#formulaire"
                    onClick={() => setFormData({ ...formData, partnerType: program.id })}
                    className="w-full py-2.5 rounded-xl border border-gray-200 hover:border-brand-red hover:bg-brand-red hover:text-white text-brand-dark text-xs font-bold uppercase tracking-wider transition text-center block"
                  >
                    Postuler pour cette filière
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Key Advantages Grid */}
        <div className="bg-white rounded-3xl border border-gray-200/90 p-8 sm:p-12 shadow-soft">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-red">
              Valeur Ajoutée
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-brand-dark mt-1">
              Pourquoi Choisir le Partenariat BRAND ?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PARTNER_ADVANTAGES.map((adv, idx) => (
              <div key={idx} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-brand-red text-white flex items-center justify-center">
                  {adv.icon === "ShieldCheck" && <ShieldCheck className="w-5 h-5" />}
                  {adv.icon === "Box" && <Box className="w-5 h-5" />}
                  {adv.icon === "GraduationCap" && <GraduationCap className="w-5 h-5" />}
                  {adv.icon === "Headphones" && <Headphones className="w-5 h-5" />}
                </div>
                <h4 className="font-bold text-sm text-brand-dark">{adv.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Tier Comparison */}
        <div id="niveaux">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-red">
              Progression & Niveaux
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-brand-dark mt-1">
              Niveaux d'Accréditation & Privilèges
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              Évoluez à travers nos paliers certifiés pour maximiser votre rentabilité et votre soutien technique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PARTNER_TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`rounded-3xl p-8 border transition flex flex-col justify-between ${
                  tier.popular
                    ? "bg-brand-dark text-white border-brand-red shadow-xl relative"
                    : "bg-white text-brand-dark border-gray-200/90 shadow-soft"
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-red text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow">
                    Le Plus Plébiscité
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded ${
                      tier.popular ? "bg-white/10 text-brand-red" : "bg-gray-100 text-gray-600"
                    }`}>
                      {tier.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black">{tier.name}</h3>
                  <p className={`text-xs mt-2 leading-relaxed ${tier.popular ? "text-gray-300" : "text-gray-600"}`}>
                    {tier.description}
                  </p>

                  {/* Prérequis */}
                  <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800 space-y-2">
                    <span className={`text-[11px] font-bold uppercase tracking-wider ${
                      tier.popular ? "text-gray-400" : "text-gray-500"
                    }`}>
                      Prérequis d'Accès :
                    </span>
                    {tier.requirements.map((req, i) => (
                      <div key={i} className={`flex items-start gap-2 text-xs ${
                        tier.popular ? "text-gray-300" : "text-gray-700"
                      }`}>
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0 mt-1.5" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>

                  {/* Avantages */}
                  <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800 space-y-2">
                    <span className={`text-[11px] font-bold uppercase tracking-wider ${
                      tier.popular ? "text-gray-400" : "text-gray-500"
                    }`}>
                      Avantages Inclus :
                    </span>
                    {tier.benefits.map((ben, i) => (
                      <div key={i} className={`flex items-start gap-2 text-xs ${
                        tier.popular ? "text-gray-300" : "text-gray-700"
                      }`}>
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-red shrink-0 mt-0.5" />
                        <span>{ben}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <a
                    href="#formulaire"
                    className={`w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider block text-center transition ${
                      tier.popular
                        ? "bg-brand-red hover:bg-brand-red-hover text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                    }`}
                  >
                    Rejoindre au rang {tier.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Application Form */}
        <div id="formulaire" className="bg-white rounded-3xl border border-gray-200/90 p-8 sm:p-12 shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Form Info Left */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-red">
                  Candidature Partenaire
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-brand-dark mt-1">
                  Déposez Votre Dossier d'Agrément
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                  Remplissez ce formulaire confidentiel. Notre responsable partenariats prendra contact avec vous sous 24 à 48 heures pour organiser un entretien d'évaluation.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-gray-100 text-xs sm:text-sm text-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-brand-red flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-brand-dark">Ligne Dédiée Partenaires :</strong>
                    <span>+33 (0)1 48 63 78 15 (Lun-Ven 8h30-18h00)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-brand-red flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-brand-dark">Email Équipe Alliances :</strong>
                    <span>partenaires@brand-aiot.com</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-brand-red flex items-center justify-center shrink-0">
                    <Building className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-brand-dark">Centre de Certification France :</strong>
                    <span>Paris Nord 2, 93420 Villepinte, France</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 text-xs text-gray-500">
                <p className="font-semibold text-gray-700 mb-1">Protection Commerciale Garantie</p>
                Vos coordonnées d'entreprise ne sont jamais transmises à des tiers. Les déclarations de projets sont strictement protégées par accord de non-divulgation (NDA).
              </div>
            </div>

            {/* Form Inputs Right */}
            <div className="lg:col-span-7">
              {isSubmitted ? (
                <div className="p-10 bg-green-50/70 border border-green-200 rounded-3xl text-center space-y-4 animate-fade-in">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
                  <h4 className="text-2xl font-bold text-green-900">
                    Candidature Enregistrée avec Succès !
                  </h4>
                  <p className="text-xs sm:text-sm text-green-700 max-w-md mx-auto leading-relaxed">
                    Merci <strong className="font-semibold">{formData.contactName}</strong>. Le dossier de votre société <strong className="font-semibold">{formData.companyName}</strong> a été transmis à la direction des partenariats régionaux. Un accusé de réception a été envoyé à <strong className="font-mono">{formData.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        companyName: "",
                        contactName: "",
                        email: "",
                        phone: "",
                        country: "France",
                        partnerType: "integrator",
                        certifications: "",
                        annualVolume: "15k-50k",
                        message: "",
                        agree: true,
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-brand-red text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-red-hover transition"
                  >
                    Envoyer une Nouvelle Demande
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Société */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Raison Sociale de l'Entreprise *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="ex : Sûreté Réseaux SARL"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-4 py-2.5 text-xs sm:text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-brand-red"
                      />
                    </div>

                    {/* Contact */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Nom & Prénom du Référent *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="ex : Marc Delorme"
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        className="w-full px-4 py-2.5 text-xs sm:text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-brand-red"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Email Professionnel *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="ex : m.delorme@entreprise.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 text-xs sm:text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-brand-red"
                      />
                    </div>

                    {/* Téléphone */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Téléphone Direct
                      </label>
                      <input
                        type="tel"
                        placeholder="ex : +33 6 12 34 56 78"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 text-xs sm:text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-brand-red"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Type de Partenariat */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Type de Partenariat Visé
                      </label>
                      <select
                        value={formData.partnerType}
                        onChange={(e) => setFormData({ ...formData, partnerType: e.target.value })}
                        className="w-full px-4 py-2.5 text-xs sm:text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-brand-red bg-white"
                      >
                        <option value="integrator">Intégrateur & Installateur Systèmes</option>
                        <option value="distributor">Distributeur Grossiste Régional</option>
                        <option value="technology">Alliance Technologique / Éditeur VMS</option>
                        <option value="bureau-etudes">Bureau d'Études & Prescripteur</option>
                      </select>
                    </div>

                    {/* Volume Annuel Estimé */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                        Volume d'Achat Annuel Estimé
                      </label>
                      <select
                        value={formData.annualVolume}
                        onChange={(e) => setFormData({ ...formData, annualVolume: e.target.value })}
                        className="w-full px-4 py-2.5 text-xs sm:text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-brand-red bg-white"
                      >
                        <option value="15k-50k">15 000 € à 50 000 € (Niveau Silver)</option>
                        <option value="50k-150k">50 000 € à 150 000 € (Niveau Gold)</option>
                        <option value="150k+">&gt; 150 000 € (Niveau Platinum)</option>
                        <option value="nouveau">Démarrage d'activité / Premier projet</option>
                      </select>
                    </div>
                  </div>

                  {/* Message / Présentation */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Présentation de Votre Activité & Projets Cibles
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Précisez votre zone d'intervention, vos spécialités (tertiaire, industrie, voirie...) et vos attentes..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs sm:text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-brand-red"
                    />
                  </div>

                  {/* Consentement */}
                  <div className="flex items-center gap-2 text-xs text-gray-500 pt-1">
                    <input
                      type="checkbox"
                      id="partner-agree"
                      checked={formData.agree}
                      onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                      required
                      className="rounded text-brand-red focus:ring-brand-red"
                    />
                    <label htmlFor="partner-agree">
                      J'accepte que les informations saisies soient traitées par BRAND dans le cadre de ma candidature partenaire conformément au RGPD.
                    </label>
                  </div>

                  {/* Bouton envoi */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-brand-red hover:bg-brand-red-hover text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition shadow-card flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Soumettre ma Candidature Partenaire</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Section 5: Partner FAQ */}
        <div className="bg-white rounded-3xl border border-gray-200/90 p-8 sm:p-12 shadow-soft">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-red">
              Questions Fréquentes
            </span>
            <h3 className="text-2xl font-black text-brand-dark mt-1">
              Foire Aux Questions Partenaires
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
              <h4 className="font-bold text-brand-dark flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-brand-red shrink-0" />
                <span>Comment fonctionne l'enregistrement de projet (Deal Registration) ?</span>
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Dès que vous identifiez une opportunité d'envergure, enregistrez-la sur votre espace partenaire. Une fois validée par nos équipes, vous bénéficiez d'une remise exclusive protégée, vous garantissant le meilleur tarif face à tout autre intermédiaire.
              </p>
            </div>

            <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
              <h4 className="font-bold text-brand-dark flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-brand-red shrink-0" />
                <span>Les certifications techniques sont-elles payantes ?</span>
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Les modules d'initiation en ligne BCA (BRAND Certified Associate) sont 100 % gratuits pour tous nos partenaires agréés. Les sessions pratiques en présentiel pour le titre BCE bénéficient de vouchers de prise en charge inclus dès le palier Gold.
              </p>
            </div>

            <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
              <h4 className="font-bold text-brand-dark flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-brand-red shrink-0" />
                <span>Quel est le délai moyen de validation d'un dossier ?</span>
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Après soumission de votre dossier, notre responsable régional vous recontacte sous 24 à 48 heures ouvrées. L'ouverture de votre compte B2B et l'accès aux tarifs partenaires s'effectuent généralement en moins de 4 jours ouvrés.
              </p>
            </div>

            <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
              <h4 className="font-bold text-brand-dark flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-brand-red shrink-0" />
                <span>Comment commander du matériel de démonstration NFR ?</span>
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Les partenaires Silver, Gold et Platinum ont droit à un quota annuel d'unités Not For Resale (NFR) avec une remise de 40 % à 50 %. Les demandes se font directement depuis l'espace B2B avec livraison sous 3 à 5 jours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
