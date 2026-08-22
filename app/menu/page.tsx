import type { Metadata } from "next";

import {
  ImageBand,
  LocationMenuSections,
  PageIntro,
  SiteFooter,
  SiteHeader,
} from "../components";
import { images, locationMenus } from "../content";
import { menuJsonLd, pageMetadata } from "../seo";
import { StructuredData } from "../structured-data";

export const metadata: Metadata = pageMetadata({
  title: "Menus",
  description:
    "Explore separate Tangra Asian Fusion Sunnyside and Tangra Masala Elmhurst menus with Yelp-backed highlights, prices, dishes, and direct full-menu links.",
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
        title="Choose the Tangra menu closest to you."
        text="Sunnyside and Elmhurst have separate Yelp menus. Jump to a location, scan highlights, then call the restaurant for current availability."
      />
      <section className="px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="scroll-reveal reveal-up mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow text-red">Pick a location</p>
              <h2 className="mt-4 font-serif text-4xl font-black leading-tight sm:text-5xl">
                Low-friction menu browsing.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/68">
                The two menus are split below so guests can go straight to the
                right location without comparing every dish twice.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              {locationMenus.map((menu) => (
                <a className="button button-dark" href={`#${menu.slug}`} key={menu.slug}>
                  {menu.neighborhood} Menu
                </a>
              ))}
            </div>
          </div>
          <LocationMenuSections />
        </div>
      </section>
      <ImageBand />
      <SiteFooter />
    </main>
  );
}
