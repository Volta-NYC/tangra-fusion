const navItems = [
  { label: "Story", href: "#story" },
  { label: "Menu", href: "#menu" },
  { label: "Locations", href: "#locations" },
];

const signatures = [
  "Lollipop Chicken",
  "Chilli Fish",
  "Manchurian Fried Rice",
  "Tangra Masala Fish",
  "Chicken Hot & Sour Soup",
];

const menuSections = [
  {
    title: "Lunch Favorites",
    items: [
      "Chicken Chili Lunch",
      "Chicken Manchurian Lunch",
      "Tangra Masala Fish Lunch",
      "Manchurian Paneer Lunch",
      "Chili Tofu Lunch",
    ],
  },
  {
    title: "Appetizers",
    items: [
      "Curry Chicken Roll",
      "Chicken Pakora",
      "Fried Spicy Chicken Wings",
      "Lollipop Chicken",
      "Tangra Masala Fish Finger",
    ],
  },
  {
    title: "Soups",
    items: [
      "Chicken Hot & Sour Soup",
      "Chicken Thai Soup",
      "Shrimp Thai Soup",
      "Chicken Manchow Soup",
      "Manchow Soup",
    ],
  },
  {
    title: "Noodles & Rice",
    items: [
      "Chicken Chow Mein",
      "Chicken Tangra Masala Chow Mein",
      "Mixed Hakka Chow Mein",
      "Chicken Fried Rice",
      "Vegetable Singapore Noodle",
    ],
  },
  {
    title: "Vegetarian",
    items: [
      "Manchurian Paneer",
      "Manchurian Eggplant",
      "Chili Tofu",
      "Sauteed Spicy String Bean",
      "Green Jade Vegetable",
    ],
  },
  {
    title: "Seafood",
    items: [
      "Tiger Prawn Tangra Masala",
      "Tiger Prawn Manchurian",
      "Spicy Salt & Pepper Tiger Prawn",
      "Fish with Hot Garlic Sauce",
      "Fish with Spicy Black Bean Sauce",
    ],
  },
];

const locations = [
  {
    name: "Tangra Masala",
    address: "87-09 Grand Avenue, Elmhurst, NY 11373",
    phone: "(718) 803-2298",
    phoneHref: "tel:7188032298",
    hours: ["Monday - Thursday: 12PM - 9:30PM", "Friday - Sunday: 1PM - 12AM"],
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=87-09+Grand+Avenue+Elmhurst+NY+11373",
  },
  {
    name: "Tangra Asian Fusion",
    address: "3923 Queens Boulevard, Sunnyside, NY 11104",
    phone: "(718) 786-8008",
    phoneHref: "tel:7187868008",
    hours: ["Sunday - Thursday: 1PM - 11PM", "Friday - Saturday: 1PM - 12AM"],
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=3923+Queens+Boulevard+Sunnyside+NY+11104",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/90 text-paper backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <a className="leading-none" href="#top" aria-label="Tangra Fusion home">
            <span className="block font-serif text-2xl font-bold tracking-wide">
              Tangra
            </span>
            <span className="mt-1 block text-[0.62rem] font-bold uppercase tracking-[0.28em] text-gold">
              Asian Fusion
            </span>
          </a>

          <nav
            className="hidden items-center gap-8 text-xs font-bold uppercase tracking-[0.18em] text-paper/70 md:flex"
            aria-label="Primary navigation"
          >
            {navItems.map((item) => (
              <a className="nav-link" href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a
            className="button button-gold"
            href="https://www.yelp.com/menu/tangra-asian-fusion-cuisine-sunnyside"
            target="_blank"
            rel="noreferrer"
          >
            View Menu
          </a>
        </div>
      </header>

      <section
        id="top"
        className="relative isolate flex min-h-screen overflow-hidden bg-ink px-5 pt-24 text-paper sm:px-8"
      >
        <div className="absolute inset-0 -z-20 bg-[url('https://www.tangrafusionnyc.com/images/1.jpg')] bg-cover bg-center opacity-45" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(23,20,16,0.96),rgba(23,20,16,0.76),rgba(23,20,16,0.22))]" />
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.72fr]">
          <div>
            <p className="eyebrow text-gold">Chinese cuisine, Indian style</p>
            <h1 className="mt-5 max-w-4xl font-serif text-6xl font-black leading-[0.9] sm:text-7xl lg:text-8xl">
              Calcutta Chinese in Queens.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-paper/76">
              Tangra serves the Chinese-Indian cooking that New Yorkers travel
              across boroughs for: halal meat, bright spice, wok heat, and the
              deep-fried signatures that made the restaurant a Queens staple.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a className="button button-gold" href="#menu">
                Explore Menu
              </a>
              <a className="button button-outline-light" href="#locations">
                Visit Us
              </a>
              <a className="button button-ghost" href="tel:7187868008">
                Call Sunnyside
              </a>
            </div>
          </div>

          <aside className="hidden lg:block">
            <div className="border border-paper/18 bg-paper/10 p-6 shadow-2xl shadow-black/40 backdrop-blur">
              <p className="eyebrow text-gold">House signatures</p>
              <div className="mt-6 grid gap-3">
                {signatures.map((item) => (
                  <div
                    className="flex items-center justify-between border-b border-paper/12 pb-3 font-serif text-2xl font-bold"
                    key={item}
                  >
                    <span>{item}</span>
                    <span className="text-gold">+</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

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

      <section id="story" className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow text-red">About Tangra</p>
            <h2 className="mt-4 font-serif text-4xl font-black leading-tight sm:text-5xl">
              A New York home for Chinese-Indian cooking.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-ink/72">
            <p>
              Tangra Masala is the Elmhurst-based granddaddy of New York
              Chinese-Indian restaurants, a destination for the particular
              brand of Chinese food adapted to the Indian palate by generations
              of ethnic-Chinese Indians.
            </p>
            <p>
              After fans traveled from Manhattan and beyond to squeeze into the
              original storefront, Tangra branched out with an ornate Sunnyside
              dining room. Chef-partner Peter Lo and team continue to anchor the
              menu around punchy, familiar signatures.
            </p>
          </div>
        </div>
      </section>

      <section id="menu" className="bg-cream px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow text-red">Menu highlights</p>
              <h2 className="mt-4 max-w-3xl font-serif text-4xl font-black leading-tight sm:text-5xl">
                Wok-fired, spicy, and built for sharing.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-ink/62">
              Previewed from Tangra Asian Fusion Cuisine's Yelp menu. Please
              call the restaurant for current prices and availability.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {menuSections.map((section, index) => (
              <article
                className="menu-card group border border-ink/12 bg-paper p-7 shadow-[8px_8px_0_rgba(23,20,16,0.08)]"
                key={section.title}
              >
                <p className="font-serif text-6xl font-black text-red/18">
                  0{index + 1}
                </p>
                <h3 className="mt-2 font-serif text-3xl font-black">
                  {section.title}
                </h3>
                <ul className="mt-6 space-y-3 text-sm font-semibold leading-6 text-ink/70">
                  {section.items.map((item) => (
                    <li className="border-t border-ink/10 pt-3" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="grid bg-ink text-paper lg:grid-cols-2">
        <div className="min-h-[28rem] bg-[url('https://www.tangrafusionnyc.com/images/2.jpg')] bg-cover bg-center" />
        <div className="flex items-center px-5 py-20 sm:px-8 lg:px-16">
          <div>
            <p className="eyebrow text-gold">Halal meat</p>
            <h2 className="mt-4 max-w-xl font-serif text-4xl font-black leading-tight sm:text-5xl">
              Familiar comfort, finished with heat.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-paper/70">
              Order the table around contrasts: crispy chicken, saucy
              Manchurian dishes, fragrant fried rice, Thai and hot-and-sour
              soups, plus seafood in Tangra masala, garlic, and black bean
              sauces.
            </p>
          </div>
        </div>
      </section>

      <section id="locations" className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="eyebrow text-red">Visit</p>
            <h2 className="mt-4 font-serif text-4xl font-black leading-tight sm:text-5xl">
              Two Queens locations.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {locations.map((location) => (
              <article
                className="border border-ink bg-cream p-7 shadow-[10px_10px_0_#171410]"
                key={location.name}
              >
                <h3 className="font-serif text-4xl font-black">
                  {location.name}
                </h3>
                <p className="mt-5 text-lg font-semibold leading-7">
                  {location.address}
                </p>
                <a
                  className="mt-2 inline-flex text-lg font-bold text-red"
                  href={location.phoneHref}
                >
                  {location.phone}
                </a>
                <div className="mt-6 space-y-2 text-sm font-semibold uppercase tracking-[0.12em] text-ink/60">
                  {location.hours.map((hour) => (
                    <p key={hour}>{hour}</p>
                  ))}
                </div>
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
        </div>
      </section>

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
              <a className="transition hover:text-paper" href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
