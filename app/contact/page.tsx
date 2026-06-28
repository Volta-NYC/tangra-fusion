import { LocationCards, PageIntro, SiteFooter, SiteHeader } from "../components";
import { images, locations } from "../content";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <PageIntro
        eyebrow="Contact"
        image={images.tableSpread}
        title="Call, visit, or send Tangra a note."
        text="Reach either Queens location for hours, directions, takeout questions, group dining, or general inquiries."
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

          <form className="scroll-reveal reveal-right border border-ink bg-cream p-6 shadow-[10px_10px_0_#171410] sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="form-field">
                <span>Name</span>
                <input type="text" name="name" placeholder="Your name" />
              </label>
              <label className="form-field">
                <span>Phone</span>
                <input type="tel" name="phone" placeholder="(718) 000-0000" />
              </label>
              <label className="form-field sm:col-span-2">
                <span>Email</span>
                <input type="email" name="email" placeholder="you@example.com" />
              </label>
              <label className="form-field sm:col-span-2">
                <span>Location</span>
                <select name="location" defaultValue="">
                  <option value="" disabled>
                    Choose a location
                  </option>
                  {locations.map((location) => (
                    <option key={location.name} value={location.name}>
                      {location.name}
                    </option>
                  ))}
                </select>
              </label>
              <label className="form-field sm:col-span-2">
                <span>Message</span>
                <textarea name="message" placeholder="How can we help?" rows={6} />
              </label>
            </div>
            <button className="button button-dark mt-6" type="button">
              Send Message
            </button>
            <p className="mt-4 text-sm leading-6 text-ink/58">
              This form is ready for a backend or form service. For immediate
              requests, please call the restaurant.
            </p>
          </form>
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
