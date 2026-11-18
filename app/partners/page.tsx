import { Metadata } from "next";
import { PartnersClient } from "@/components/partners/PartnersClient";

export const metadata: Metadata = {
  title: "Programme Partenaires & Distributeurs Officiels | BRAND Sécurité AIoT",
  description:
    "Rejoignez l'écosystème officiel BRAND Sécurité AIoT : distributeurs agréés, intégrateurs certifiés, installateurs et alliances logicielles ISV. Remises projets protégées, formations BCE et support avant-vente prioritaire.",
  keywords: [
    "programme partenaires vidéosurveillance",
    "devenir distributeur sécurité",
    "installateur certifié cctv",
    "partenaire intégrateur brand",
    "deal registration vidéosurveillance",
    "formation cctv bce",
    "alliance technologique vms",
    "grossiste matériel sécurité électronique",
  ],
  alternates: {
    canonical: "https://brand-aiot.com/partners",
  },
  openGraph: {
    title: "Programme Partenaires BRAND Sécurité AIoT | Distributeurs & Intégrateurs",
    description:
      "Accédez à nos programmes d'accréditation Silver, Gold et Platinum. Protection des projets, remises exclusives et formations certifiantes.",
    url: "https://brand-aiot.com/partners",
    siteName: "BRAND Sécurité AIoT",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Programme Partenaires BRAND Sécurité AIoT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Programme Partenaires & Distributeurs | BRAND Sécurité AIoT",
    description:
      "Protection des affaires, matériels de démonstration NFR et support ingénierie N3 pour distributeurs et intégrateurs.",
    images: ["https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80"],
  },
};

export default function PartnersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Programme Partenaires BRAND Sécurité AIoT",
    description:
      "Réseau mondial de distributeurs, intégrateurs certifiés et partenaires technologiques pour les solutions de sécurité électronique AIoT.",
    publisher: {
      "@type": "Organization",
      name: "BRAND Sécurité AIoT",
      url: "https://brand-aiot.com",
    },
    url: "https://brand-aiot.com/partners",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PartnersClient />
    </>
  );
}
