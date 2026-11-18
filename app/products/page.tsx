import type { Metadata } from "next";
import { ProductsClient } from "@/components/products/ProductsClient";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Catalogue Produits & Matériels AIoT | Caméras Réseau, NVR & Contrôle d'Accès",
  description:
    "Explorez notre catalogue complet de sécurité électronique et vidéosurveillance AIoT : caméras IPC WizMind 4K, enregistreurs NVR, interphonie vidéo, tourniquets et switchs PoE industriels.",
  alternates: {
    canonical: "https://brand-aiot.com/products",
  },
  openGraph: {
    title: "Catalogue Produits & Matériels AIoT | BRAND Sécurité",
    description:
      "Gamme complète de caméras optiques, contrôle d'accès biométrique et solutions d'enregistrement vidéo haute fidélité.",
    url: "https://brand-aiot.com/products",
  },
};

export default function ProductsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", item: "https://brand-aiot.com" },
          { name: "Catalogue Produits", item: "https://brand-aiot.com/products" },
        ]}
      />
      <ProductsClient />
    </>
  );
}
