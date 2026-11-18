import { Metadata } from "next";
import { ContactClient } from "@/components/contact/ContactClient";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Contact & Support Technique 24/7 | Agences Mondiales | BRAND Sécurité AIoT",
  description:
    "Contactez nos équipes d'ingénieurs et commerciaux certifiés : demande de devis projet de sécurité, support technique 24/7, hotline mondiale, partenariats et distributeurs.",
  keywords: [
    "contact sécurité aiot",
    "support technique vidéosurveillance",
    "devis vidéosurveillance entreprise",
    "hotline dahua brand",
    "distributeur sécurité france",
    "rma sav vidéosurveillance",
  ],
  alternates: {
    canonical: "https://brand-aiot.com/contact",
  },
  openGraph: {
    title: "Contact & Assistance Technique 24/7 | BRAND AIoT",
    description:
      "Formulaire de demande d'étude de projet, coordonnées de nos filiales régionales et assistance technique 24/7.",
    url: "https://brand-aiot.com/contact",
    siteName: "BRAND AIoT Security",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Siège et Agences BRAND Sécurité",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & Support 24/7 | BRAND Sécurité AIoT",
    description: "Échangez avec nos équipes techniques pour vos projets de vidéoprotection et AIoT.",
    images: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"],
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", item: "https://brand-aiot.com" },
          { name: "Contact & Support", item: "https://brand-aiot.com/contact" },
        ]}
      />
      <ContactClient />
    </>
  );
}
