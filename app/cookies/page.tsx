import type { Metadata } from "next";
import { CookiesClient } from "@/components/cookies/CookiesClient";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Gestion des Cookies & Préférences de Confidentialité | BRAND AIoT",
  description:
    "Gérez vos préférences de consentement pour les cookies essentiels, fonctionnels et analytiques utilisés sur le site BRAND Sécurité AIoT.",
  alternates: {
    canonical: "https://brand-aiot.com/cookies",
  },
  openGraph: {
    title: "Politique d'Utilisation des Cookies | BRAND",
    description: "Transparence et gestion du consentement des cookies sur le site officiel BRAND.",
    url: "https://brand-aiot.com/cookies",
  },
};

export default function CookiesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", item: "https://brand-aiot.com" },
          { name: "Gestion des Cookies", item: "https://brand-aiot.com/cookies" },
        ]}
      />
      <CookiesClient />
    </>
  );
}
