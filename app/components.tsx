import Link from "next/link";

import {
  galleryImages,
  locations,
  menuSections,
  navItems,
  signatures,
  site,
} from "./content";

type MenuItem = (typeof menuSections)[number]["items"][number];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/90 text-paper backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link className="leading-none" href="/" aria-label="Tangra Fusion home">
          <span className="block font-serif text-2xl font-bold tracking-wide">
            Tangra
          </span>
          <span className="mt-1 block text-[0.62rem] font-bold uppercase tracking-[0.28em] text-gold">
            Asian Fusion
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 text-xs font-bold uppercase tracking-[0.18em] text-paper/70 md:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <Link className="nav-link" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="button button-gold button-fit" href="/menu">
          View Menu
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-black px-5 py-14 text-paper sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.6fr_1fr]">
        <div className="reveal-on-scroll">
          <p className="font-serif text-4xl font-bold">{site.name}</p>
          <p className="mt-4 max-w-xl text-sm leading-6 text-paper/58">
            {site.description}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link className="button button-gold" href="/menu">
              View Menu
            </Link>
            <a className="button button-outline-light" href={locations[1].phoneHref}>
              Call Sunnyside
            </a>
          </div>
        </div>

        <div className="reveal-on-scroll reveal-delay-1">
          <h3 className="footer-title">Explore</h3>
          <div className="mt-5 grid gap-3 text-sm text-paper/62">
            {navItems.map((item) => (
              <Link className="transition hover:text-paper" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            <a className="transition hover:text-paper" href={site.yelpMenuUrl}>
              Yelp Menu
            </a>
          </div>
        </div>

        <div className="reveal-on-scroll reveal-delay-2">
          <h3 className="footer-title">Visit</h3>
          <div className="mt-5 grid gap-5 text-sm leading-6 text-paper/62 sm:grid-cols-2 lg:grid-cols-1">
            {locations.map((location) => (
              <div key={location.name}>
                <p className="font-bold text-paper">{location.name}</p>
                <p>{location.address}</p>
                <a className="transition hover:text-paper" href={location.phoneHref}>
                  {location.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-4 border-t border-paper/10 pt-6 text-xs uppercase tracking-[0.18em] text-paper/42 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Tangra Fusion. All rights reserved.</p>
        <p>
          Created by{" "}
          <a className="volta-link" href={site.voltaUrl} rel="noreferrer" target="_blank">
            Volta
          </a>
        </p>
      </div>
    </footer>
  );
}

export function SignatureTicker() {
  return (
    <section className="overflow-hidden border-y border-ink bg-red py-4 text-paper">
      <div className="ticker-track flex min-w-max gap-8 text-sm font-black uppercase tracking-[0.22em]">
        {[...signatures, ...signatures, ...signatures].map((item, index) => (
          <span className="flex items-center gap-8" key={`${item}-${index}`}>
            {item}
            <span className="h-2 w-2 rounded-full bg-gold" />
          </span>
        ))}
      </div>
    </section>
  );
}

export function PageIntro({
  eyebrow,
  image,
  title,
  text,
}: {
  eyebrow: string;
  image?: string;
  title: string;
  text: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink px-5 pb-16 pt-32 text-paper sm:px-8 lg:pb-20">
      {image && (
        <>
          <div
            className="absolute inset-0 -z-20 bg-cover bg-center opacity-[0.24]"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(23,20,16,0.98),rgba(23,20,16,0.82),rgba(23,20,16,0.48))]" />
        </>
      )}
      <div className="reveal-on-scroll mx-auto max-w-7xl">
        <p className="eyebrow text-gold">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl font-serif text-5xl font-black leading-[0.94] sm:text-7xl">
          {title}
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-paper/72">{text}</p>
      </div>
    </section>
  );
}

export function MenuGrid({ compact = false }: { compact?: boolean }) {
  const sections = compact
    ? menuSections.slice(0, 3).map((section) => ({
        ...section,
        items: section.items.slice(0, 3),
      }))
    : menuSections;

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {sections.map((section, index) => (
        <MenuCard
          index={index}
          items={section.items}
          key={section.title}
          note={section.note}
          title={section.title}
        />
      ))}
    </div>
  );
}

export function MenuCard({
  index,
  items,
  note,
  title,
}: {
  index: number;
  items: MenuItem[];
  note?: string;
  title: string;
}) {
  return (
    <article className="menu-card reveal-on-scroll border border-ink/12 bg-paper p-7 shadow-[8px_8px_0_rgba(23,20,16,0.08)]">
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="font-serif text-6xl font-black text-red/18">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-2 font-serif text-3xl font-black">{title}</h3>
        </div>
        {note && (
          <p className="hidden max-w-[11rem] text-right text-xs font-semibold leading-5 text-ink/46 sm:block">
            {note}
          </p>
        )}
      </div>

      <ul className="mt-6 space-y-5">
        {items.map((item) => (
          <li className="border-t border-ink/10 pt-4" key={item.name}>
            <div className="flex items-baseline justify-between gap-4">
              <h4 className="text-base font-black leading-tight">{item.name}</h4>
              <span className="shrink-0 font-serif text-xl font-black text-red">
                {item.price}
              </span>
            </div>
            <p className="mt-2 text-sm font-medium leading-6 text-ink/60">
              {item.description}
            </p>
            {item.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span className="menu-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function ImageBand() {
  return (
    <section className="grid bg-black sm:grid-cols-2 lg:grid-cols-4">
      {galleryImages.map((image, index) => (
        <figure
          className={`image-tile reveal-on-scroll ${
            index % 2 === 0 ? "" : "reveal-delay-1"
          }`}
          key={image.src}
        >
          <img alt={image.alt} src={image.src} />
          <figcaption>{image.label}</figcaption>
        </figure>
      ))}
    </section>
  );
}

export function LocationCards({ compact = false }: { compact?: boolean }) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {locations.map((location, index) => (
        <article
          className="location-card reveal-on-scroll overflow-hidden border border-ink bg-cream shadow-[10px_10px_0_#171410]"
          key={location.name}
        >
          <div className="relative min-h-64 overflow-hidden bg-ink">
            <img
              alt={location.imageAlt}
              className="h-full min-h-64 w-full object-cover transition duration-700 hover:scale-105"
              src={location.image}
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.58),rgba(0,0,0,0.08))]" />
            <p className="absolute bottom-5 left-5 eyebrow text-gold">
              {index === 0 ? "Elmhurst" : "Sunnyside"}
            </p>
          </div>
          <div className="p-7">
            <h3 className="font-serif text-4xl font-black">{location.name}</h3>
            <p className="mt-5 text-lg font-semibold leading-7">{location.address}</p>
            <a className="mt-2 inline-flex text-lg font-bold text-red" href={location.phoneHref}>
              {location.phone}
            </a>
            {!compact && (
              <div className="mt-6 space-y-2 text-sm font-semibold uppercase tracking-[0.12em] text-ink/60">
                {location.hours.map((hour) => (
                  <p key={hour}>{hour}</p>
                ))}
              </div>
            )}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a className="button button-dark" href={location.mapsUrl}>
                Directions
              </a>
              <a className="button button-outline-dark" href={location.phoneHref}>
                Call
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function YelpMenuLink() {
  return (
    <a className="button button-outline-dark" href={site.yelpMenuUrl} rel="noreferrer" target="_blank">
      Yelp Menu
    </a>
  );
}
