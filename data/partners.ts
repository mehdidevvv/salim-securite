export interface PartnerTier {
  id: string;
  name: string;
  badge: string;
  description: string;
  requirements: string[];
  benefits: string[];
  popular?: boolean;
}

export interface PartnerProgram {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  description: string;
  features: string[];
}

export const PARTNER_PROGRAMS: PartnerProgram[] = [
  {
    id: "distributors",
    title: "Distributeurs Officiels Agréés",
    subtitle: "Réseau de distribution logistique et commerciale",
    iconName: "Truck",
    description:
      "Destiné aux distributeurs régionaux et grossistes spécialisés en matériel de sécurité électronique, courant faible et télécoms. Bénéficiez d'une exclusivité territoriale de stock, de remises grossistes et d'un support logistique prioritaire.",
    features: [
      "Approvisionnement direct d'usine et stocks tampons régionaux",
      "Garantie constructeur standard 3 à 5 ans avec échange anticipé (RMA)",
      "Co-financement des showrooms et catalogues distributeurs (fonds MDF)",
      "Account Manager dédié et réunions de planification trimestrielles",
    ],
  },
  {
    id: "integrators",
    title: "Intégrateurs & Installateurs Certifiés",
    subtitle: "Professionnels du déploiement terrain et de la maintenance",
    iconName: "Wrench",
    description:
      "Pour les entreprises d'intégration en sécurité, électricité industrielle et informatique. Obtenez la certification officielle BRAND, débloquez des remises projets protégées et bénéficiez de l'accompagnement avant-vente de nos ingénieurs système.",
    features: [
      "Protection et enregistrement officiel des affaires (Deal Registration)",
      "Accès aux équipements de prêt et remises de démonstration NFR (50 %)",
      "Assistance avant-vente pour le dimensionnement d'architecture (VMS, stockage)",
      "Formations certifiantes gratuites BRAND Certified Engineer (BCE)",
    ],
  },
  {
    id: "technology",
    title: "Alliances Technologiques & Éditeurs ISV",
    subtitle: "Écosystème logiciel ouvert et interopérabilité logicielle",
    iconName: "Cpu",
    description:
      "Conçu pour les éditeurs de VMS, constructeurs de contrôle d'accès, éditeurs de logiciels PSIM et spécialistes de l'IA. Intégrez nos caméras et capteurs grâce à nos protocoles ouverts, notre conformité ONVIF et nos SDKs avancés.",
    features: [
      "Accès complet aux SDKs matériels, API RESTful et documentation développeur",
      "Compatibilité native validée avec Milestone, Genetec, Network Optix",
      "Laboratoire d'intégration et tests de validation d'interopérabilité conjoints",
      "Co-marketing et visibilité sur notre catalogue mondial d'alliances",
    ],
  },
];

export const PARTNER_TIERS: PartnerTier[] = [
  {
    id: "silver",
    name: "Partenaire Silver",
    badge: "Entrée Certifiée",
    description: "Pour les installateurs débutant leur collaboration avec les solutions BRAND.",
    requirements: [
      "1 technicien certifié BCA (BRAND Certified Associate)",
      "Engagement de conformité commerciale et RGPD",
      "Volume annuel minimum : 15 000 €",
    ],
    benefits: [
      "Accès au portail B2B Partenaires 24/7",
      "Support technique standard par ticket et téléphone",
      "Catalogue de prix partenaires de niveau 1",
      "Accès aux fiches techniques et firmwares complets",
    ],
  },
  {
    id: "gold",
    name: "Partenaire Gold",
    badge: "Recommandé Intégrateurs",
    description: "Pour les intégrateurs réguliers menant des projets tertiaires et industriels.",
    requirements: [
      "2 techniciens certifiés BCE (BRAND Certified Engineer)",
      "Enregistrement régulier d'affaires sur le portail",
      "Volume annuel minimum : 60 000 €",
    ],
    benefits: [
      "Tous les avantages Silver inclus",
      "Protection et enregistrement prioritaire de projets",
      "Remise tarifaire de niveau 2 sur l'ensemble du catalogue",
      "Support technique téléphonique N2 direct",
      "Matériel de démonstration NFR avec 40 % de réduction",
    ],
    popular: true,
  },
  {
    id: "platinum",
    name: "Partenaire Platinum",
    badge: "Excellence Régionale",
    description: "Pour les grands intégrateurs et distributeurs référents sur les marchés complexes.",
    requirements: [
      "4 techniciens certifiés BCP (BRAND Certified Professional)",
      "Showroom équipé ou valise de démonstration active",
      "Volume annuel minimum : 200 000 €",
    ],
    benefits: [
      "Tous les avantages Gold inclus",
      "Ingénieur avant-vente dédié pour les réponses aux appels d'offres",
      "Remise tarifaire maximale niveau 3 sur mesure",
      "Support technique d'urgence 24/7 avec SLA sous 1h",
      "Fonds de développement marketing (MDF) de 2 % du volume",
      "Accès anticipé aux bêtas de firmwares et prototypes",
    ],
  },
];

export const PARTNER_ADVANTAGES = [
  {
    title: "Enregistrement de Projets Garanti",
    description: "Sécurisez vos efforts commerciaux : enregistrez vos opportunités sur le portail pour bénéficier d'une remise exclusive protégée face à la concurrence.",
    icon: "ShieldCheck",
  },
  {
    title: "Matériel de Démonstration (NFR)",
    description: "Testez nos dernières caméras WizMind, thermiques et écrans interactifs dans vos showrooms grâce à des tarifs réduits jusqu'à 50 %.",
    icon: "Box",
  },
  {
    title: "Centre de Formation & Certifications",
    description: "Formez vos équipes techniques et commerciales en présentiel ou en e-learning pour valoriser vos compétences auprès de vos clients finaux.",
    icon: "GraduationCap",
  },
  {
    title: "Support Avant-Vente & Ingénierie",
    description: "Nos spécialistes vous assistent pour l'étude de couverture, le calcul de bande passante et le dimensionnement de stockage sur vos dossiers complexes.",
    icon: "Headphones",
  },
];
