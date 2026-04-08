import { showcaseFontsStylesheetHref, showcaseReactStylesheetHref } from "./assetManifest.js";
import type { WebsiteShowcaseSlide } from "./index";
import { createBundledReactPreviewDocument } from "./reactPreview";

const wildKinSource = String.raw`import React from "react";
import { ArrowRight, Compass, Tent, BookOpen, ChevronRight, MapPin, Wind, Anchor } from "lucide-react";

const journeys = [
  {
    title: "The Patagonian Frontier",
    meta: "14 Days • Strenuous • Oct-Mar",
    price: "From $4,200",
    image: "https://images.unsplash.com/photo-1518182170546-0766de6b6aa5?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Nordic Fjords & Highlands",
    meta: "9 Days • Moderate • Jun-Sep",
    price: "From $3,800",
    image: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Saharan Solitude",
    meta: "7 Days • Easy • Nov-Feb",
    price: "From $2,100",
    image: "https://images.unsplash.com/photo-1504221507732-5246c045949b?auto=format&fit=crop&q=80&w=1200",
  },
];

const gearItems = [
  {
    title: "The Canvas Rucksack",
    body: "Heavyweight waxed cotton, brass hardware.",
    price: "$285",
    image: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?auto=format&fit=crop&q=80&w=400",
  },
  {
    title: "Heritage Trail Boots",
    body: "Vibram sole, full-grain leather upper.",
    price: "$340",
    image: "https://images.unsplash.com/photo-1520699697851-3dc68aa3a474?auto=format&fit=crop&q=80&w=400",
  },
  {
    title: "Expedition Parka",
    body: "Weather-resistant, ethically sourced down.",
    price: "$520",
    image: "https://images.unsplash.com/photo-1588623565506-6556e4ebce4e?auto=format&fit=crop&q=80&w=400",
  },
];

const stories = [
  {
    eyebrow: "Expedition Report • 5 Min Read",
    title: "Chasing the Midnight Sun: A Month in Svalbard",
    body: "A field dispatch on silence, stamina and the strange generosity of the Arctic summer.",
    image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80&w=1600",
  },
  {
    eyebrow: "Field Notes • 3 Min Read",
    title: "The Art of Foraging in the Pacific Northwest",
    body: "Simple rituals for reading the forest slowly and responsibly.",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800",
  },
  {
    eyebrow: "Interviews • 8 Min Read",
    title: "In Conversation with Mountain Guide Elena Rostova",
    body: "On route-finding, leadership and why humility matters more than bravado.",
  },
];

const testimonials = [
  {
    quote: "Traveling with Wild Kin wasn't just a vacation; it was a profound reset. The attention to detail and authentic connection to nature is unmatched.",
    name: "Sarah Jenkins",
    role: "Patagonia Expedition",
  },
  {
    quote: "Their field gear is the only equipment I trust when I'm miles away from civilization. Built with purpose and undeniably beautiful.",
    name: "Marcus Thorne",
    role: "Professional Photographer",
  },
  {
    quote: "I found more than just a travel company; I found a community of individuals who respect the earth and seek true adventure.",
    name: "Elena Rodriguez",
    role: "Saharan Sands",
  },
];

const footerColumns = [
  {
    title: "Expeditions",
    links: ["View All Trips", "The Americas", "Europe & Nordics", "Africa & Asia", "Custom Journeys"],
  },
  {
    title: "Field Gear",
    links: ["Apparel", "Packs & Bags", "Camp Essentials", "Footwear", "Care & Repair"],
  },
  {
    title: "The Brand",
    links: ["Our Story", "Sustainability", "The Journal", "Ambassadors", "Careers"],
  },
  {
    title: "Support",
    links: ["Contact Us", "FAQ", "Shipping & Returns", "Size Guide"],
  },
];

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F4F1EA] text-[#2C302E] selection:bg-[#C46D4D] selection:text-white">
      <header className="relative flex min-h-screen flex-col justify-between overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2400"
            alt="Moody Mountain Landscape"
            className="h-full w-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/15 to-black/70" />
        </div>

        <nav className="relative z-10 px-4 py-6 text-white sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-6xl flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-4 text-[11px] uppercase tracking-[0.28em] sm:gap-8">
              <a href="#" className="transition-colors hover:text-[#D4C9A8]">Expeditions</a>
              <a href="#" className="transition-colors hover:text-[#D4C9A8]">Field Gear</a>
              <a href="#" className="transition-colors hover:text-[#D4C9A8]">The Journal</a>
            </div>

            <div className="text-3xl font-serif uppercase tracking-[0.25em] sm:text-4xl">Wild Kin</div>

            <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.28em] sm:gap-6">
              <a href="#" className="transition-colors hover:text-[#D4C9A8]">Our Story</a>
              <a href="#" className="transition-colors hover:text-[#D4C9A8]">Log In</a>
              <button className="rounded-full border border-white/30 bg-white/10 px-5 py-3 text-[11px] transition-colors hover:bg-white hover:text-black">
                Join the Movement
              </button>
            </div>
          </div>
        </nav>

        <div className="relative z-10 px-4 pb-14 pt-10 sm:px-6 lg:px-8 lg:pb-24">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="max-w-3xl text-white">
              <p className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.32em] text-white/80">
                <Compass size={14} /> Curated Nature Trips
              </p>
              <h1 className="text-6xl font-serif font-medium leading-[0.88] sm:text-7xl lg:text-8xl">
                Return to the
                <br />
                <i className="font-light">Untamed</i>.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                Curated expeditions, premium field gear and stories from the edge of the world, created for people who feel most alive off the paved road.
              </p>
              <button className="group mt-8 inline-flex items-center gap-4 border-b border-white pb-2 text-sm uppercase tracking-[0.24em] transition-colors hover:border-[#D4C9A8] hover:text-[#D4C9A8]">
                Explore Journeys
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-2" />
              </button>
            </div>

            <div className="grid gap-4 rounded-[2rem] border border-white/20 bg-white/10 p-5 text-white backdrop-blur-md sm:p-6">
              <div className="rounded-[1.5rem] border border-white/15 bg-black/20 p-5">
                <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-[#D4C9A8]">
                  <MapPin size={14} />
                  Season Preview
                </div>
                <div className="mt-4 grid gap-3 text-sm uppercase tracking-[0.24em] text-white/75 sm:grid-cols-3 sm:text-right">
                  <div className="sm:text-left">01 Patagonia</div>
                  <div>02 Nordics</div>
                  <div>03 Sahara</div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/15 bg-black/20 p-5">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[#D4C9A8]">Built Around</p>
                  <p className="mt-3 text-2xl font-serif">Immersion</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/15 bg-black/20 p-5">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[#D4C9A8]">Field Standard</p>
                  <p className="mt-3 text-2xl font-serif">Quiet Luxury</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <Wind className="mb-6 text-[#C46D4D]" size={32} />
            <h2 className="max-w-4xl text-3xl font-serif leading-tight sm:text-4xl lg:text-5xl">
              We believe in the restorative power of nature. Wild Kin is less a brand than an invitation to step off the road and reconnect with the earth.
            </h2>
            <p className="mt-6 max-w-2xl text-base font-light leading-relaxed text-[#6A6D6B] sm:text-lg">
              Slow travel, thoughtful equipment and meaningful field stories for people who prefer depth over volume and intention over spectacle.
            </p>
          </div>
        </section>

        <section className="bg-[#EBE7DF] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex flex-col gap-4 border-b border-[#2C302E]/20 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="text-[11px] uppercase tracking-[0.28em] text-[#6A6D6B]">Curated Expeditions</h3>
                <h2 className="mt-3 text-4xl font-serif sm:text-5xl">Featured Journeys</h2>
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.16em] transition-colors hover:text-[#C46D4D]">
                View All <ChevronRight size={16} />
              </a>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {journeys.map((journey, index) => (
                <article
                  key={journey.title}
                  className={
                    "group cursor-pointer " +
                    (index === 1 ? "lg:translate-y-10" : "")
                  }
                >
                  <div className="mb-5 overflow-hidden rounded-[2rem] bg-[#D8D2C6]">
                    <img src={journey.image} alt={journey.title} className="aspect-[4/5] h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h4 className="text-2xl font-serif transition-colors group-hover:text-[#C46D4D]">{journey.title}</h4>
                      <p className="mt-2 text-sm font-light text-[#6A6D6B]">{journey.meta}</p>
                    </div>
                    <span className="text-sm font-medium">{journey.price}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-40 w-40 rounded-full bg-[#EBE7DF] opacity-70 blur-3xl sm:h-56 sm:w-56" />
              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src="https://images.unsplash.com/photo-1504280650346-76472f10b805?auto=format&fit=crop&q=80&w=1200"
                  alt="Premium Outdoor Gear"
                  className="h-[420px] w-full object-cover sm:h-[560px] lg:h-[760px]"
                />
              </div>

              <div className="mt-5 rounded-[1.75rem] bg-white p-6 shadow-xl lg:absolute lg:-bottom-8 lg:right-6 lg:mt-0 lg:max-w-sm">
                <Tent className="mb-4 text-[#C46D4D]" size={24} />
                <h4 className="text-2xl font-serif">Built for the Elements</h4>
                <p className="mt-3 text-sm leading-relaxed text-[#6A6D6B]">
                  Gear made to age well, travel hard and stay beautiful after years in the field.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-[11px] uppercase tracking-[0.28em] text-[#6A6D6B]">Field Essentials</h3>
              <h2 className="mt-4 text-4xl font-serif sm:text-5xl">Equip Your Journey</h2>

              <div className="mt-8 space-y-6">
                {gearItems.map((item) => (
                  <div key={item.title} className="flex flex-col gap-4 border-b border-[#2C302E]/10 pb-6 sm:flex-row sm:items-center">
                    <div className="h-24 w-24 overflow-hidden rounded-[1.25rem] bg-[#EBE7DF]">
                      <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 hover:scale-110" />
                    </div>
                    <div className="flex-1">
                      <h5 className="text-xl font-serif">{item.title}</h5>
                      <p className="mt-1 text-sm text-[#6A6D6B]">{item.body}</p>
                    </div>
                    <div className="text-sm font-medium">{item.price}</div>
                  </div>
                ))}
              </div>

              <button className="group mt-8 inline-flex items-center gap-4 border-b border-[#2C302E] pb-2 text-sm uppercase tracking-[0.24em] transition-colors hover:border-[#C46D4D] hover:text-[#C46D4D]">
                Shop All Gear
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-2" />
              </button>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-20 text-center text-white sm:py-28">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=2400"
              alt="Deep Forest"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#1C1F1D]/82" />
          </div>

          <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
            <Anchor className="mx-auto mb-6 text-[#D4C9A8]" size={32} />
            <h2 className="text-4xl font-serif leading-tight sm:text-5xl lg:text-6xl">
              "Wildness reminds us what it means to be human, whole and fully engaged with the world."
            </h2>
            <p className="mt-6 text-[11px] uppercase tracking-[0.28em] text-[#D4C9A8]">Our Sustainability Commitment</p>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex flex-col gap-4 border-b border-[#2C302E]/20 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="text-[11px] uppercase tracking-[0.28em] text-[#6A6D6B]">Dispatches from the Field</h3>
                <h2 className="mt-3 text-4xl font-serif sm:text-5xl">The Journal</h2>
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.16em] transition-colors hover:text-[#C46D4D]">
                Read All Stories <ChevronRight size={16} />
              </a>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <article className="group cursor-pointer">
                <div className="overflow-hidden rounded-[2rem]">
                  <img src={stories[0].image} alt={stories[0].title} className="aspect-[16/10] h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="mt-6 max-w-3xl">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C46D4D]">{stories[0].eyebrow}</p>
                  <h3 className="mt-4 text-3xl font-serif transition-colors group-hover:text-[#C46D4D] sm:text-4xl">{stories[0].title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-[#6A6D6B] sm:text-lg">{stories[0].body}</p>
                  <span className="mt-6 inline-flex items-center gap-2 border-b border-[#2C302E] pb-1 text-sm uppercase tracking-[0.24em]">
                    <BookOpen size={16} />
                    Read Dispatch
                  </span>
                </div>
              </article>

              <div className="flex flex-col gap-8">
                <article className="group cursor-pointer">
                  <div className="overflow-hidden rounded-[2rem]">
                    <img src={stories[1].image} alt={stories[1].title} className="aspect-[4/3] h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                  <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C46D4D]">{stories[1].eyebrow}</p>
                  <h3 className="mt-3 text-2xl font-serif transition-colors group-hover:text-[#C46D4D]">{stories[1].title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#6A6D6B]">{stories[1].body}</p>
                </article>

                <article className="cursor-pointer border-t border-[#2C302E]/20 pt-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C46D4D]">{stories[2].eyebrow}</p>
                  <h3 className="mt-3 text-2xl font-serif transition-colors hover:text-[#C46D4D]">{stories[2].title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#6A6D6B]">{stories[2].body}</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#2C302E] px-4 py-16 text-center text-[#F4F1EA] sm:px-6 lg:px-8 lg:py-24">
          <h3 className="mb-10 text-[11px] uppercase tracking-[0.28em] text-white/50">Words from the Kin</h3>
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="flex flex-col items-center rounded-[2rem] border border-white/10 bg-white/5 p-6">
                <p className="font-serif text-2xl italic leading-relaxed">{item.quote}</p>
                <p className="mt-6 text-[11px] uppercase tracking-[0.28em] text-[#C46D4D]">{item.name}</p>
                <p className="mt-1 text-xs text-white/55">{item.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#C46D4D] px-4 py-16 text-[#F4F1EA] sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-serif sm:text-5xl">Join the Expedition</h2>
            <p className="mt-4 text-base font-light leading-relaxed text-white/90 sm:text-lg">
              Subscribe for early access to new trips, exclusive gear drops and dispatches from the wild.
            </p>
            <form className="mt-10 flex flex-col gap-4 border-b border-white/50 pb-3 sm:flex-row sm:items-center">
              <input
                type="email"
                placeholder="Enter your email address"
                className="min-w-0 flex-1 bg-transparent text-lg font-light text-[#F4F1EA] outline-none placeholder:text-[#F4F1EA]/60"
              />
              <button type="button" className="text-sm uppercase tracking-[0.24em] font-medium transition-colors hover:text-white">
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-left text-xs text-white/60">By subscribing, you agree to our terms and privacy policy.</p>
          </div>
        </section>
      </main>

      <footer className="bg-[#1C1F1D] px-4 pb-10 pt-16 text-[#F4F1EA] sm:px-6 lg:px-8 lg:pt-24">
        <div className="mx-auto grid max-w-6xl gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_repeat(4,minmax(0,1fr))]">
          <div className="pr-0 lg:pr-10">
            <h2 className="text-4xl font-serif uppercase tracking-[0.25em]">Wild Kin</h2>
            <p className="mt-5 max-w-xs text-sm font-light leading-relaxed text-white/60">
              Curated nature trips, premium outdoor gear and expedition stories for those who seek kinship in the wild.
            </p>
            <div className="mt-6 flex gap-3">
              {["In", "Tw", "Fb"].map((label) => (
                <div key={label} className="flex h-10 w-10 items-center justify-center border border-white/20 text-xs transition-colors hover:bg-white/10">
                  {label}
                </div>
              ))}
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4 className="mb-5 text-[11px] uppercase tracking-[0.28em] text-white/40">{column.title}</h4>
              <ul className="space-y-3 text-sm font-light text-white/80">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="transition-colors hover:text-white">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-8 flex max-w-6xl flex-col gap-3 text-xs font-light text-white/40 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Wild Kin. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <a href="#" className="transition-colors hover:text-white">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
`;

export const wildKinSlide: WebsiteShowcaseSlide = {
  id: "wild-kin",
  title: "Wild Kin",
  posterSrc: "/website-showcases/posters/wild-kin.jpg",
  html: createBundledReactPreviewDocument({
    title: "Wild Kin",
    bundleSrc: "/website-showcases/generated/wild-kin.js",
    stylesheetHrefs: [showcaseFontsStylesheetHref, showcaseReactStylesheetHref],
  }),
  preloadPriority: 30,
};
