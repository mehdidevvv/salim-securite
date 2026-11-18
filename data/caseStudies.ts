export interface CaseStudyItem {
  id: string;
  category: "city" | "enterprise";
  title: string;
  location: string;
  date: string;
  summary: string;
  image: string;
  client: string;
  metrics: { label: string; value: string }[];
  tag: string;
  slug: string;
}

export const CASE_STUDIES: CaseStudyItem[] = [
  // ÉTUDES DE CAS URBAINES (3)
  {
    id: "case-metropolis-safe-city",
    category: "city",
    title: "Modernisation Vidéosurveillance AIoT d'une Métropole de 4 Millions d'Habitants",
    location: "Métropole de Lyon, France",
    date: "14 Janvier 2025",
    summary:
      "Modernisation de la sécurité municipale avec 3 500 caméras WizMind IA et poste de commandement DSS unifié, réduisant le temps d'intervention d'urgence de 42 %.",
    image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80",
    client: "Direction de la Sécurité Urbaine Métropolitaine",
    metrics: [
      { label: "Délai d'Intervention Secours", value: "-42 %" },
      { label: "Caméras IA Déployées", value: "3 500+" },
      { label: "Taux d'Élucidation Délits", value: "+31 %" },
    ],
    tag: "Ville Intelligente",
    slug: "metropolis-safe-city",
  },
  {
    id: "case-capital-traffic-its",
    category: "city",
    title: "Réseau Autoroutier National : Déploiement du Contrôle de Trafic Haute Vitesse",
    location: "Corridors Transeuropéens A10 & A71",
    date: "28 Février 2025",
    summary:
      "Automatisation de la régulation de vitesse et détection d'accidents sur 450 km d'autoroutes, enregistrant une baisse de 28 % des collisions impliquant des poids lourds.",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80",
    client: "Société Concessionnaire d'Autoroutes",
    metrics: [
      { label: "Baisse de l'Accidentologie", value: "-28 %" },
      { label: "Précision LAPI Véhicules", value: "99.8 %" },
      { label: "Distance Autoroutière", value: "450 km" },
    ],
    tag: "Trafic Intelligent",
    slug: "capital-traffic-its",
  },
  {
    id: "case-metro-rail-transit",
    category: "city",
    title: "Réseau de Métro Souterrain : 35 Stations Sécurisées par IA en Périphérie",
    location: "Société des Transports Intercommunaux",
    date: "10 Mars 2025",
    summary:
      "Déploiement de caméras anti-vibrations EN50155, d'analyses de mouvements de foule sur les quais et de détection de colis suspects dans 35 stations de métro.",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80",
    client: "Régie des Transports Rapides Métropolitains",
    metrics: [
      { label: "Alerte Incident sur Quai", value: "< 2s" },
      { label: "Stations Équipées", value: "35 Stations" },
      { label: "Objets Égarés Retrouvés", value: "94 %" },
    ],
    tag: "Transports Publics",
    slug: "metro-rail-transit",
  },

  // ÉTUDES DE CAS ENTREPRISE (3)
  {
    id: "case-global-automotive-plant",
    category: "enterprise",
    title: "Gigafactory Automobile : Logistique LAPI Automatisée & Clôture Thermique",
    location: "Pôle Industriel de Stuttgart, Allemagne",
    date: "19 Novembre 2024",
    summary:
      "Sécurisation d'un site de production de batteries et véhicules de 180 hectares avec barrières thermiques virtuelles et affectation automatique des camions aux quais.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    client: "Constructeur Automobile Électrique International",
    metrics: [
      { label: "Rotation Camions à Quai", value: "+38 %" },
      { label: "Fausses Alarmes Clôture", value: "-96 %" },
      { label: "Superficie Usine", value: "180 Hectares" },
    ],
    tag: "Industrie 4.0",
    slug: "global-automotive-plant",
  },
  {
    id: "case-national-bank-security",
    category: "enterprise",
    title: "Forteresse Bancaire : 450 Agences Migrent vers une Sécurité IA Zero-Trust",
    location: "Réseau Bancaire & Siège Central",
    date: "05 Décembre 2024",
    summary:
      "Standardisation de l'authentification biométrique des salles des coffres et prévention des sabotages DAB sur 450 agences reliées à un centre de contrôle unique.",
    image: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&w=800&q=80",
    client: "Groupe Bancaire Commercial Européen",
    metrics: [
      { label: "Agences Centralisées", value: "450 Agences" },
      { label: "Piratages de DAB", value: "0 en 12 Mois" },
      { label: "Temps Recherche Audit", value: "3.2 Secondes" },
    ],
    tag: "Banque & Finance",
    slug: "national-bank-security",
  },
  {
    id: "case-polytechnic-university",
    category: "enterprise",
    title: "Campus Universitaire : 30 000 Étudiants Protégés par Accès Sans Contact",
    location: "Pôle Universitaire des Sciences & Technologies",
    date: "22 Janvier 2025",
    summary:
      "Installation de 120 écrans interactifs 4K DeepHub dans les amphithéâtres, couplés à des tourniquets biométriques rapides (< 0,2 s) aux entrées des bibliothèques.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    client: "Institut d'Enseignement Supérieur",
    metrics: [
      { label: "Étudiants Inscrits", value: "30 000" },
      { label: "Temps de Passage Borne", value: "< 0,2s" },
      { label: "Interactivité en Cours", value: "+45 %" },
    ],
    tag: "Éducation & Campus",
    slug: "polytechnic-university",
  },
];
