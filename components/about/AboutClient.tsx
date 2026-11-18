"use client";

import React from "react";
import Link from "next/link";
import {
  Shield,
  Target,
  Leaf,
  Cpu,
  Globe,
  ChevronRight,
  Award,
  CheckCircle2,
  Microscope,
  FileCheck2,
  Recycle,
  Lightbulb,
} from "lucide-react";
import {
  COMPANY_STATS,
  COMPANY_VALUES,
  COMPANY_MILESTONES,
  GLOBAL_OFFICES,
} from "@/data/company";

const VALUE_ICONS: Record<string, React.ReactNode> = {
  Target: <Target className="w-6 h-6 text-brand-red" />,
  Shield: <Shield className="w-6 h-6 text-brand-red" />,
  Leaf: <Leaf className="w-6 h-6 text-brand-red" />,
  Cpu: <Cpu className="w-6 h-6 text-brand-red" />,
};

const CERTIFICATIONS_DATA = [
  {
    code: "ISO/IEC 27001",
    name: "Sécurité des Systèmes d'Information",
    desc: "Garantit la gestion proactive des risques cyber, la protection des firmwares et le chiffrement des données.",
  },
  {
    code: "ISO/IEC 27701",
    name: "Management de la Vie Privée (RGPD)",
    desc: "Démontre la conformité stricte aux exigences de protection des données personnelles et de la vie privée.",
  },
  {
    code: "ISO 9001",
    name: "Management de la Qualité",
    desc: "Certification des processus industriels de conception, d'assemblage et de contrôle qualité unitaire.",
  },
  {
    code: "ISO 14001",
    name: "Management Environnemental",
    desc: "Engagement dans la décarbonation de nos usines et la réduction des déchets industriels.",
  },
  {
    code: "CE & CPR EN54",
    name: "Conformité Européenne & Incendie",
    desc: "Homologation officielle pour l'installation d'équipements de sécurité dans les ERP et bâtiments publics.",
  },
  {
    code: "RoHS & WEEE",
    name: "Directive Éco-Responsable",
    desc: "Élimination des substances dangereuses (plomb, mercure) et filière de recyclage des composants.",
  },
];

const RD_LABS_DATA = [
  {
    title: "Laboratoire Vision Computationnelle & Micro-Optique",
    desc: "Conception de blocs optiques à très grande ouverture (F1.0), revêtements antireflets nanométriques et capteurs multi-spectraux fusionnant lumière visible et infrarouge.",
    metric: "180+ Chercheurs Optiques",
  },
  {
    title: "Centre Algorithmique Deep Learning & Puces NPU",
    desc: "Développement de réseaux neuronaux convolutifs ultralégers (WizMind X) exécutables localement sur puce ASIC avec une consommation inférieure à 3 Watts.",
    metric: "400+ Ingénieurs IA & Big Data",
  },
  {
    title: "Centre de Cybersécurité & Laboratoire Red Team (PSIRT)",
    desc: "Tests de pénétration permanents, audits de code source automatisés, durcissement des piles réseau et veille mondiale sur les vulnérabilités CVE.",
    metric: "Certification ISO/IEC 27001",
  },
  {
    title: "Laboratoire d'Essais Climatiques & Mécaniques",
    desc: "Bancs d'essais simulant le brouillard salin, les vibrations ferroviaires (EN50155), les impacts IK10 et des températures extrêmes de -50 °C à +85 °C.",
    metric: "24/7 Tests de Vie Accélérée",
  },
];

export const AboutClient: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <div className="relative bg-brand-dark text-white py-20 px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Link href="/" className="hover:text-white transition">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
            <span className="text-brand-red font-medium">À propos</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight max-w-3xl">
            Bâtir une Société Plus Sûre et Plus Intelligente
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            En tant que leader mondial des solutions IoT intelligentes centrées sur la vidéo, BRAND Corporation déploie des technologies de pointe en perception optique, processeurs neuronaux et architectures cloud ouvertes dans plus de 180 pays.
          </p>
        </div>
      </div>

      {/* Chiffres Clés */}
      <div className="bg-brand-light py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
              Envergure & Présence Mondiale
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-brand-dark mt-1">
              Chiffres Clés de l'Entreprise
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {COMPANY_STATS.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-soft space-y-1"
              >
                <div className="text-2xl sm:text-3xl font-black text-brand-red font-mono">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-brand-dark pt-1">
                  {stat.label}
                </div>
                <p className="text-[11px] text-gray-500 leading-tight pt-1">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-red">
                Notre Raison d'Être
              </span>
              <h2 className="text-3xl font-black text-brand-dark mt-1">
                Innover pour la Sécurité et l'Efficacité Humaine
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Fondée sur la conviction que la vidéo est le capteur de réalité le plus complet et intuitif, l'entreprise investit chaque année plus de 10 % de ses revenus en R&D depuis plus de deux décennies.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Nos puces neuronales embarquées, nos optiques multi-spectre et notre protocole de sécurité zero-trust permettent aux métropoles, aux entreprises du Fortune 500 et aux commerces de proximité d'exercer leurs activités en toute sérénité.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="px-6 py-3 rounded-lg bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold uppercase tracking-wider transition shadow-sm"
              >
                Explorer nos Technologies
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-lg border border-gray-300 hover:border-brand-dark text-brand-dark text-xs font-bold uppercase tracking-wider transition"
              >
                Contacter l'Agence Régionale
              </Link>
            </div>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden shadow-card border border-gray-200">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
              alt="Collaboration des ingénieurs R&D"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 4 Pôles R&D */}
        <div className="mt-24 pt-16 border-t border-gray-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-red">
              Laboratoires d'Ingénierie de Pointe
            </span>
            <h2 className="text-3xl font-black text-brand-dark mt-1">
              Les 4 Pôles Mondiaux de R&D
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Plus de 50 % de nos effectifs conçoivent les algorithmes neuronaux, puces ASIC et optiques de nouvelle génération.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RD_LABS_DATA.map((lab, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-3xl border border-gray-200 shadow-soft space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-brand-red flex items-center justify-center">
                    <Microscope className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold font-mono text-brand-red bg-red-50 px-2.5 py-1 rounded-md">
                    {lab.metric}
                  </span>
                </div>
                <h3 className="text-base font-bold text-brand-dark">{lab.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{lab.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Internationales */}
        <div className="mt-24 pt-16 border-t border-gray-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-red">
              Conformité & Reconnaissance Mondiale
            </span>
            <h2 className="text-3xl font-black text-brand-dark mt-1">
              Certifications & Homologations Officielles
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Chaque produit BRAND est soumis à des tests d'homologation stricts auprès des organismes de certification accrédités.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATIONS_DATA.map((cert, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-2"
              >
                <div className="flex items-center gap-2 text-brand-red font-bold text-sm">
                  <Award className="w-4 h-4" />
                  <span>{cert.code}</span>
                </div>
                <h4 className="font-bold text-sm text-brand-dark">{cert.name}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Engagements RSE & Green Tech */}
        <div className="mt-24 pt-16 border-t border-gray-200">
          <div className="bg-brand-dark text-white rounded-3xl p-8 sm:p-12 border border-gray-800 space-y-8">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-red">
                Développement Durable & RSE
              </span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                Pionniers de la Sécurité Décarbonée & Éco-Conçue
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Parce que protéger la société implique aussi de préserver notre planète, nous appliquons une démarche environnementale globale à toutes les étapes du cycle de vie de nos produits.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-green-500/20 text-green-400 flex items-center justify-center">
                  <Leaf className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-white">Efficacité Énergétique -30%</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Nos puces neuronales 7nm consomment 30% d'électricité en moins, réduisant considérablement la facture énergétique des datacenters.
                </p>
              </div>

              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-green-500/20 text-green-400 flex items-center justify-center">
                  <Recycle className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-white">100% Emballages Sans Plastique</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Suppression intégrale du polystyrène expansé remplacé par du carton kraft certifié FSC issu de forêts durables.
                </p>
              </div>

              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-green-500/20 text-green-400 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-white">Gamme Solaire Autonome</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Caméras 4G alimentées par panneaux solaires pour sécuriser les parcs naturels et chantiers sans aucun raccordement réseau électrique.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Valeurs Fondamentales */}
        <div className="mt-24 pt-16 border-t border-gray-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-red">
              Ce Qui Nous Anime
            </span>
            <h2 className="text-3xl font-black text-brand-dark mt-1">
              Nos 4 Valeurs Fondamentales
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_VALUES.map((val, idx) => {
              const icon = VALUE_ICONS[val.iconName] || <Target className="w-6 h-6 text-brand-red" />;
              return (
                <div
                  key={idx}
                  className="bg-gray-50/70 p-6 rounded-2xl border border-gray-200 space-y-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center border border-gray-200 shadow-2xs">
                    {icon}
                  </div>
                  <h3 className="text-base font-bold text-brand-dark">
                    {val.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Frise Historique */}
        <div className="mt-24 pt-16 border-t border-gray-200">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-red">
              Plus de 20 Ans d'Innovation Continue
            </span>
            <h2 className="text-3xl font-black text-brand-dark mt-1">
              Les Grandes Étapes Historiques
            </h2>
          </div>

          <div className="relative border-l-2 border-gray-200 ml-4 md:ml-32 space-y-10">
            {COMPANY_MILESTONES.map((m, idx) => (
              <div key={idx} className="relative pl-8 group">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-brand-red group-hover:scale-125 transition" />

                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                  <span className="text-sm font-mono font-bold text-brand-red">
                    {m.year}
                  </span>
                  <h3 className="text-lg font-bold text-brand-dark">
                    {m.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-2xl">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bureaux Mondiaux */}
        <div className="mt-24 pt-16 border-t border-gray-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-red">
              Réseau International
            </span>
            <h2 className="text-3xl font-black text-brand-dark mt-1">
              Sièges Régionaux & Centres de Formation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GLOBAL_OFFICES.map((office) => (
              <div
                key={office.id}
                className="bg-white p-6 rounded-2xl border border-gray-200 shadow-soft space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase text-brand-red">
                    {office.country}
                  </span>
                  <Globe className="w-4 h-4 text-gray-400" />
                </div>
                <h3 className="text-base font-bold text-brand-dark">
                  {office.name}
                </h3>
                <p className="text-xs text-gray-500">{office.address}</p>

                <div className="pt-2 text-xs text-gray-600 space-y-1 border-t border-gray-100">
                  <p><strong>Tél :</strong> {office.phone}</p>
                  <p><strong>Email :</strong> {office.email}</p>
                  <p className="text-[11px] text-gray-400 italic pt-1">{office.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
