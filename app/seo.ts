import type { Metadata } from "next";

import { images, locations, menuSections, site } from "./content";

export const defaultTitle = "Tangra Fusion | Chinese-Indian Cuisine in Queens";

export function pageMetadata({
  description,
  path,
  title,
}: {
  description: string;
  path: string;
  title: string;
}): Metadata {
  const url = `${site.url}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      images: [
        {
          url: images.tableSpread,
          width: 1200,
          height: 630,
          alt: "Tangra Fusion Chinese-Indian dishes served family style",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [images.tableSpread],
    },
  };
}

export function restaurantJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": locations.map((location) => ({
      "@type": "Restaurant",
      "@id": `${site.url}/locations#${location.slug}`,
      name: location.name,
      url: `${site.url}/locations#${location.slug}`,
      image: `${site.url}${location.image}`,
      telephone: location.telephone,
      address: {
        "@type": "PostalAddress",
        streetAddress: location.streetAddress,
        addressLocality: location.addressLocality,
        addressRegion: location.addressRegion,
        postalCode: location.postalCode,
        addressCountry: "US",
      },
      areaServed: location.neighborhood,
      hasMap: location.mapsUrl,
      menu: site.yelpMenuUrl,
      priceRange: "$$",
      servesCuisine: ["Chinese-Indian", "Indo-Chinese", "Asian Fusion", "Halal"],
      openingHours: location.openingHours,
    })),
  };
}

export function menuJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    "@id": `${site.url}/menu#menu`,
    name: "Tangra Fusion menu",
    url: `${site.url}/menu`,
    hasMenuSection: menuSections.map((section) => ({
      "@type": "MenuSection",
      name: section.title,
      description: section.note,
      hasMenuItem: section.items.map((item) => ({
        "@type": "MenuItem",
        name: item.name,
        description: item.description,
        offers: {
          "@type": "Offer",
          price: item.price.replace("$", ""),
          priceCurrency: "USD",
        },
      })),
    })),
  };
}
