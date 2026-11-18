import type { Metadata } from "next";
import { AboutClient } from "@/components/about/AboutClient";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "À Propos de BRAND Sécurité AIoT | Leader Mondial & Innovation Vidéo",
  description:
    "Découvrez l'histoire, les chiffres clés, les valeurs et les engagements RSE de BRAND Sécurité AIoT. Plus de 20 ans d'innovations optiques, 23 000 salariés et présence dans 180 pays.",
  alternates: {
    canonical: "https://brand-aiot.com/about",
  },
  openGraph: {
    title: "À Propos de BRAND Sécurité AIoT | Histoire & Valeurs",
    description:
      "Plus de deux décennies d'excellence en vidéosurveillance, recherche et développement, puces neuronales et responsabilité sociétale.",
    url: "https://brand-aiot.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", item: "https://brand-aiot.com" },
          { name: "À Propos de BRAND", item: "https://brand-aiot.com/about" },
        ]}
      />
      <AboutClient />
    </>
  );
}
