export interface HeroBanner {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  image: string;
  theme: "dark" | "light";
}

export const HERO_BANNERS: HeroBanner[] = [
  {
    id: "banner-1",
    tag: "ÉVÉNEMENT MONDIAL MAJEUR",
    title: "Sommet Mondial AIoT 2025 : Bâtir une Société Plus Sûre et Intelligente",
    subtitle: "L'Intelligence Visuelle Nouvelle Génération & Informatique en Périphérie",
    description:
      "Explorez les avancées majeures en analyse sensorielle multidimensionnelle, matrices vidéo cloud sans latence et architectures de sécurité écoresponsables.",
    ctaText: "Découvrir le Sommet",
    ctaLink: "/news",
    secondaryCtaText: "Voir la Vidéo",
    secondaryCtaLink: "/solutions/smart-city",
    image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1920&q=80",
    theme: "dark",
  },
  {
    id: "banner-2",
    tag: "NOUVEAUTÉ TECHNOLOGIQUE",
    title: "WizMind X : L'Intelligence Artificielle Multi-Spectre Autonome",
    subtitle: "Classification Prédictive Précise en Conditions Extrêmes",
    description:
      "Alliant réseaux neuronaux profonds et fusion dynamique thermique/optique. Détectez véhicules, piétons et anomalies d'infrastructure avec 99,8 % de précision.",
    ctaText: "Explorer WizMind X",
    ctaLink: "/products/cctv",
    secondaryCtaText: "Télécharger le Livre Blanc",
    secondaryCtaLink: "/contact",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80",
    theme: "dark",
  },
  {
    id: "banner-3",
    tag: "INNOVATION PRODUIT",
    title: "Full-Color 4.0 : La Clarté du Plein Jour au Cœur de la Nuit",
    subtitle: "Super Ouverture F1.0 & Double Capteur ISP Assisté par IA",
    description:
      "Finie la surveillance infrarouge monochrome et floue. Capturez les détails colorés précis et les plaques d'immatriculation même dans l'obscurité totale à 0,0005 Lux.",
    ctaText: "Voir la Gamme Caméras",
    ctaLink: "/products/cctv",
    secondaryCtaText: "Démonstration Interactive",
    secondaryCtaLink: "/products",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80",
    theme: "dark",
  },
  {
    id: "banner-4",
    tag: "SOLUTION URBAINE INTELLIGENTE",
    title: "Système de Trafic Intelligent (ITS) Nouvelle Génération",
    subtitle: "Fluidification des Congestions, Feux Adaptatifs & Sécurité Routière",
    description:
      "Équiper les centres de contrôle métropolitains avec la détection automatique d'incidents en temps réel, les couloirs d'urgence prioritaires et le contrôle de vitesse.",
    ctaText: "Découvrir la Solution Trafic",
    ctaLink: "/solutions/traffic-management",
    secondaryCtaText: "Études de Cas",
    secondaryCtaLink: "/solutions/smart-city",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1920&q=80",
    theme: "dark",
  },
  {
    id: "banner-5",
    tag: "ÉCOLOGIE & DÉVELOPPEMENT DURABLE",
    title: "Sécurité IA Autonome 4G Alimentée par Énergie Solaire",
    subtitle: "Résilience Hors Réseau pour Infrastructures Isolées & Énergie",
    description:
      "Stations de sécurité 100 % autonomes sans câblage avec batterie lithium-fer-phosphate intégrée, suivi solaire à haut rendement et transmission 4G sécurisée.",
    ctaText: "En Savoir Plus",
    ctaLink: "/solutions/energy",
    secondaryCtaText: "Demander un Devis",
    secondaryCtaLink: "/contact",
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1920&q=80",
    theme: "dark",
  },
];
