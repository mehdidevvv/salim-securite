import { Metadata } from "next";
import { SupportClient } from "@/components/support/SupportClient";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Centre de Support Technique, FAQ & Outils Téléchargeables | BRAND AIoT",
  description:
    "Accédez au centre de téléchargement (ConfigTool, SmartPSS), vérifiez votre garantie matériel constructeur, consultez la FAQ technique et déclarez un retour RMA en direct.",
  keywords: [
    "support technique vidéosurveillance",
    "télécharger configtool dahua brand",
    "smartpss lite telechargement",
    "faq camera wizmind",
    "garantie rma vidéosurveillance",
    "firmware camera ip",
  ],
  alternates: {
    canonical: "https://brand-aiot.com/support",
  },
  openGraph: {
    title: "Support Technique, Téléchargements & FAQ | BRAND Sécurité AIoT",
    description:
      "Base de connaissances complète, guides de configuration réseau, utilitaires et portail de vérification de garantie RMA.",
    url: "https://brand-aiot.com/support",
    images: [
      {
        url: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Support Technique BRAND AIoT",
      },
    ],
  },
};

const FAQ_SNIPPETS = [
  {
    question: "Quelle est la différence entre la technologie Full-Color 4.0 et l'infrarouge classique ?",
    answer: "Contrairement aux caméras infrarouges qui basculent en noir et blanc la nuit, les caméras Full-Color intègrent une très grande ouverture F1.0 et un capteur CMOS ultra-sensible avec IA pour garantir des couleurs fidèles 24h/24.",
  },
  {
    question: "Comment fonctionne la protection périmétrique IA WizMind ?",
    answer: "Elle utilise des réseaux de neurones profonds pour classifier les humains et véhicules en temps réel, filtrant 98% des fausses alarmes causées par la météo ou les animaux.",
  },
  {
    question: "Quelle est la distance de transmission PoE étendue ePoE ?",
    answer: "La technologie ePoE permet de transmettre le flux vidéo et l'alimentation jusqu'à 800 mètres à 10 Mbps sur câble RJ45 standard sans répéteur intermédiaire.",
  },
  {
    question: "Combien de temps dure la garantie constructeur BRAND AIoT ?",
    answer: "Nos équipements professionnels de sécurité bénéficient d'une garantie constructeur de 3 à 5 ans avec prise en charge RMA et échange anticipé sous contrat SLA.",
  },
];

export default function SupportPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", item: "https://brand-aiot.com" },
          { name: "Services & Support", item: "https://brand-aiot.com/support" },
        ]}
      />
      <FaqJsonLd items={FAQ_SNIPPETS} />
      <SupportClient />
    </>
  );
}
