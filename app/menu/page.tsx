import type { Metadata } from "next";

import {
  ImageBand,
  MenuGrid,
  PageIntro,
  SiteFooter,
  SiteHeader,
  YelpMenuLink,
} from "../components";
import { images } from "../content";
import { menuJsonLd, pageMetadata } from "../seo";
import { StructuredData } from "../structured-data";

export const metadata: Metadata = pageMetadata({
  title: "Menu Highlights",
  description:
    "Explore Tangra Fusion menu highlights including lollipop chicken, Manchurian dishes, Hakka noodles, fried rice, soups, vegetarian plates, and seafood.",
  path: "/menu",
});

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <StructuredData data={menuJsonLd()} />
      <SiteHeader />
      <PageIntro
        eyebrow="Menu"
        image={images.tableSpread}
        title="Tangra signatures, noodles, rice, soups, and seafood."
        text="Menu highlights are previewed from Tangra Asian Fusion Cuisine's Yelp menu. Please call the restaurant for current prices and availability."
      />
      <section className="px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="scroll-reveal reveal-up mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow text-red">Highlights</p>
              <h2 className="mt-4 font-serif text-4xl font-black leading-tight sm:text-5xl">
                Built around the wok.
              </h2>
            </div>
            <YelpMenuLink />
          </div>
          <MenuGrid />
        </div>
      </section>
      <ImageBand />
      <SiteFooter />
    </main>
  );
}
