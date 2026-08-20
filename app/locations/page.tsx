import type { Metadata } from "next";

import { LocationCards, PageIntro, SiteFooter, SiteHeader } from "../components";
import { images, locations } from "../content";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({
  title: "Queens Locations",
  description:
    "Find Tangra Fusion in Elmhurst and Sunnyside, Queens for Chinese-Indian food, Indo-Chinese signatures, halal meat, hours, calls, and directions.",
  path: "/locations",
});

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <PageIntro
        eyebrow="Locations"
        image={images.bar}
        title="Elmhurst and Sunnyside."
        text="Visit Tangra in Queens for Chinese cuisine, Indian style, halal meat, and the house signatures diners come back for."
      />
      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="scroll-reveal reveal-left max-w-3xl">
            <p className="eyebrow text-red">Visit</p>
            <h2 className="mt-4 font-serif text-4xl font-black leading-tight sm:text-5xl">
              Hours, calls, and directions.
            </h2>
          </div>
          <div className="mt-12">
            <LocationCards />
          </div>
        </div>
      </section>

      <section className="section-rise bg-cream px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          {locations.map((location, index) => (
            <article
              className={`scroll-reveal ${
                index % 2 === 0 ? "reveal-left" : "reveal-right"
              } border border-ink/12 bg-paper p-7`}
              id={location.slug}
              key={location.slug}
            >
              <p className="eyebrow text-red">{location.neighborhood}</p>
              <h2 className="mt-4 font-serif text-4xl font-black leading-tight">
                {location.seoHeading}
              </h2>
              <p className="mt-5 text-lg leading-8 text-ink/68">
                {location.seoDescription}
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {location.highlights.map((highlight) => (
                  <span className="menu-tag" key={highlight}>
                    {highlight}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a className="button button-dark" href={location.mapsUrl}>
                  Directions
                </a>
                <a className="button button-outline-dark" href={location.phoneHref}>
                  Call {location.neighborhood}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
