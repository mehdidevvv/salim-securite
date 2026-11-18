import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCT_CATEGORIES } from "@/data/categories";
import { ALL_PRODUCTS } from "@/data/products";
import { CategoryClient } from "@/components/products/CategoryClient";
import { BreadcrumbJsonLd, ItemListJsonLd } from "@/components/seo/JsonLd";

interface Props {
  params: { category: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = PRODUCT_CATEGORIES.find((c) => c.slug === params.category);

  if (!category) {
    return {
      title: "Catégorie Introuvable",
      description: "La catégorie de produits demandée n'existe pas.",
    };
  }

  return {
    title: `${category.name} | Gamme Sécurité AIoT`,
    description: `${category.tagline}. ${category.description}`,
    alternates: {
      canonical: `https://brand-aiot.com/products/${category.slug}`,
    },
    openGraph: {
      title: `${category.name} | Gamme Sécurité & Surveillance AIoT`,
      description: category.description,
      url: `https://brand-aiot.com/products/${category.slug}`,
      images: [
        {
          url: category.image,
          width: 1200,
          height: 630,
          alt: category.name,
        },
      ],
    },
  };
}

export default function CategoryPage({ params }: Props) {
  const currentCategory = PRODUCT_CATEGORIES.find((c) => c.slug === params.category);

  if (!currentCategory) {
    notFound();
  }

  const categoryProducts = ALL_PRODUCTS.filter((p) => p.categorySlug === params.category);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", item: "https://brand-aiot.com" },
          { name: "Produits", item: "https://brand-aiot.com/products" },
          {
            name: currentCategory.name,
            item: `https://brand-aiot.com/products/${currentCategory.slug}`,
          },
        ]}
      />
      <ItemListJsonLd
        name={currentCategory.name}
        description={currentCategory.description}
        items={categoryProducts.map((p) => ({
          name: p.name,
          sku: p.sku,
          description: p.description,
          image: p.image,
          url: `https://brand-aiot.com/products/${currentCategory.slug}#${p.sku}`,
        }))}
      />
      <CategoryClient
        currentCategory={currentCategory}
        categoryProducts={categoryProducts}
      />
    </>
  );
}
