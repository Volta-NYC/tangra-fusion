import Link from "next/link";

import {
  LocationCards,
  MenuGrid,
  SignatureTicker,
  SiteFooter,
  SiteHeader,
} from "./components";
import { signatures } from "./content";

export default function Home() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <SiteHeader />

      <section className="relative isolate flex min-h-screen overflow-hidden bg-ink px-5 pt-24 text-paper sm:px-8">
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
              <Link className="button button-gold" href="/menu">
                Explore Menu
              </Link>
              <Link className="button button-outline-light" href="/locations">
                Visit Us
              </Link>
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

      <SignatureTicker />

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow text-red">About Tangra</p>
            <h2 className="mt-4 font-serif text-4xl font-black leading-tight sm:text-5xl">
              A New York home for Chinese-Indian cooking.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-ink/72">
              Tangra is a destination for the Chinese food adapted to the
              Indian palate by generations of ethnic-Chinese Indians. The
              original Elmhurst restaurant grew into a Sunnyside dining room
              built for family meals, banquets, and spicy house signatures.
            </p>
            <Link className="button button-dark mt-8" href="/story">
              Read Story
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow text-red">Menu preview</p>
              <h2 className="mt-4 max-w-3xl font-serif text-4xl font-black leading-tight sm:text-5xl">
                Wok-fired, spicy, and built for sharing.
              </h2>
            </div>
            <Link className="button button-dark shrink-0" href="/menu">
              Full Menu
            </Link>
          </div>
          <div className="mt-12">
            <MenuGrid compact />
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
              Manchurian dishes, fragrant fried rice, soups, and seafood in
              Tangra masala, garlic, and black bean sauces.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow text-red">Visit</p>
              <h2 className="mt-4 font-serif text-4xl font-black leading-tight sm:text-5xl">
                Two Queens locations.
              </h2>
            </div>
            <Link className="button button-dark shrink-0" href="/locations">
              Hours & Directions
            </Link>
          </div>
          <div className="mt-12">
            <LocationCards compact />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
