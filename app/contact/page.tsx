import { LocationCards, PageIntro, SiteFooter, SiteHeader } from "../components";
import { images, locations } from "../content";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <PageIntro
        eyebrow="Contact"
        image={images.tableSpread}
        title="Call Tangra directly."
        text="Reach either Queens location for hours, directions, takeout questions, group dining, or anything that needs a quick answer."
      />

      <section className="section-rise px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="scroll-reveal reveal-left">
            <p className="eyebrow text-red">Reach us</p>
            <h2 className="mt-4 font-serif text-4xl font-black leading-tight sm:text-5xl">
              For fastest service, call the location directly.
            </h2>
            <div className="mt-8 grid gap-4">
              {locations.map((location) => (
                <article className="border border-ink/12 bg-cream p-5" key={location.name}>
                  <h3 className="font-serif text-2xl font-black">{location.name}</h3>
                  <p className="mt-2 text-sm font-semibold text-ink/62">{location.address}</p>
                  <a className="mt-3 inline-flex text-lg font-black text-red" href={location.phoneHref}>
                    {location.phone}
                  </a>
                </article>
              ))}
            </div>
          </div>

          <aside className="scroll-reveal reveal-right border border-ink bg-cream p-6 shadow-[10px_10px_0_#171410] sm:p-8">
            <p className="eyebrow text-red">Call only</p>
            <h2 className="mt-4 font-serif text-4xl font-black leading-tight sm:text-5xl">
              Pick the location closest to you.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-ink/68">
              Tangra handles the practical stuff best over the phone: table
              availability, takeout timing, catering questions, and same-day
              requests.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {locations.map((location) => (
                <a
                  className="group border border-ink/14 bg-paper p-5 transition duration-300 hover:-translate-y-1 hover:border-red hover:bg-white"
                  href={location.phoneHref}
                  key={location.name}
                >
                  <span className="eyebrow text-red">{location.name}</span>
                  <span className="mt-5 block font-serif text-3xl font-black leading-none">
                    {location.phone}
                  </span>
                  <span className="mt-4 block text-sm font-bold leading-6 text-ink/58">
                    Tap to call this location.
                  </span>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-cream px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="scroll-reveal reveal-up max-w-3xl">
            <p className="eyebrow text-red">Locations</p>
            <h2 className="mt-4 font-serif text-4xl font-black leading-tight sm:text-5xl">
              Find Tangra in Queens.
            </h2>
          </div>
          <div className="mt-12">
            <LocationCards />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
