import Link from "next/link";

import { locations, menuSections, navItems, signatures, yelpMenuUrl } from "./content";

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
    <footer className="bg-black px-5 py-10 text-paper sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-serif text-3xl font-bold">Tangra Fusion</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-paper/58">
            Chinese cuisine, Indian style. Halal meat. Elmhurst and Sunnyside,
            Queens.
          </p>
        </div>
        <div className="flex flex-wrap gap-5 text-xs font-bold uppercase tracking-[0.18em] text-paper/55">
          {navItems.map((item) => (
            <Link className="transition hover:text-paper" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
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
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="bg-ink px-5 pb-16 pt-32 text-paper sm:px-8 lg:pb-20">
      <div className="mx-auto max-w-7xl">
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
    ? [
        {
          title: "Signatures",
          items: ["Lollipop Chicken", "Chilli Fish", "Manchurian Fried Rice"],
        },
        {
          title: "Lunch",
          items: ["Chicken Chili Lunch", "Tangra Masala Fish Lunch", "Chili Tofu Lunch"],
        },
        {
          title: "Noodles",
          items: ["Chicken Chow Mein", "Mixed Hakka Chow Mein", "Chicken Fried Rice"],
        },
      ]
    : menuSections;

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {sections.map((section, index) => (
        <MenuCard index={index} items={section.items} key={section.title} title={section.title} />
      ))}
    </div>
  );
}

export function MenuCard({
  index,
  items,
  title,
}: {
  index: number;
  items: string[];
  title: string;
}) {
  return (
    <article className="menu-card border border-ink/12 bg-paper p-7 shadow-[8px_8px_0_rgba(23,20,16,0.08)]">
      <p className="font-serif text-6xl font-black text-red/18">
        {String(index + 1).padStart(2, "0")}
      </p>
      <h3 className="mt-2 font-serif text-3xl font-black">{title}</h3>
      <ul className="mt-6 space-y-3 text-sm font-semibold leading-6 text-ink/70">
        {items.map((item) => (
          <li className="border-t border-ink/10 pt-3" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function LocationCards({ compact = false }: { compact?: boolean }) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {locations.map((location) => (
        <article
          className="border border-ink bg-cream p-7 shadow-[10px_10px_0_#171410]"
          key={location.name}
        >
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
        </article>
      ))}
    </div>
  );
}

export function YelpMenuLink() {
  return (
    <a className="button button-outline-dark" href={yelpMenuUrl} rel="noreferrer" target="_blank">
      Yelp Menu
    </a>
  );
}
