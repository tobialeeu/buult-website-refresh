import { showcaseFontsStylesheetHref, showcaseReactStylesheetHref } from "./assetManifest.js";
import type { WebsiteShowcaseSlide } from "./index";
import { createBundledReactPreviewDocument } from "./reactPreview";

const novaNightsSource = String.raw`import React, { useState } from "react";

const events = [
  {
    id: 1,
    title: "Sonic Architecture",
    time: "22:00 - 04:00",
    venue: "Main Hall",
    blurb: "Immersive AV structures built from bass, steel and light.",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Digital Renaissance",
    time: "18:00 - 23:00",
    venue: "The Void",
    blurb: "Generative visuals, code-poetry and projection work inside a brutalist shell.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Haptic Visions",
    time: "20:00 - 02:00",
    venue: "Sector 7",
    blurb: "Responsive sculptures and tactile installations for night dwellers.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Algorithmic Chaos",
    time: "23:59 - 06:00",
    venue: "Warehouse B",
    blurb: "A closing set of distorted club energy, coded improvisation and raw visuals.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
  },
];

const artists = [
  "Astra Unit",
  "Monoform",
  "Hex Static",
  "Luma Riot",
  "Neon Frame",
  "Pulse Array",
  "Signal Bloom",
  "Zero District",
];

const atmosphereImages = [
  "https://images.unsplash.com/photo-1540039155732-d68a3fb70f20?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1470229722913-7c090be5c520?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1605369572399-05d8d64a0f6e?q=80&w=1000&auto=format&fit=crop",
];

const partners = ["LOREM", "IPSUM", "DOLOR", "SIT", "AMET", "CONSECTETUR"];

export default function App() {
  const [activeImage, setActiveImage] = useState(events[0].image);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050505] text-white selection:bg-[#ccff00] selection:text-black">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,0,153,0.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(0,240,255,0.18),transparent_40%)]" />

      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
          <div className="leading-none">
            <div className="text-2xl font-black uppercase tracking-tight sm:text-3xl">Nova<br />Nights</div>
            <span className="mt-2 block font-mono text-[11px] uppercase tracking-[0.35em] text-[#ccff00]">Vol. IV</span>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between lg:gap-10">
            <div className="flex flex-wrap gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-white/70 sm:gap-5">
              <a href="#" className="transition-colors hover:text-[#ccff00]">Program</a>
              <a href="#" className="transition-colors hover:text-[#ccff00]">Artists</a>
              <a href="#" className="transition-colors hover:text-[#ccff00]">Info</a>
            </div>
            <button className="inline-flex items-center justify-center rounded-full bg-[#ccff00] px-5 py-3 text-sm font-black uppercase tracking-[0.2em] text-black transition-colors hover:bg-white sm:px-7">
              Tickets
            </button>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        <section className="relative flex min-h-screen items-center overflow-hidden pt-36 pb-16">
          <div className="absolute -left-16 top-24 h-56 w-56 rounded-full bg-[#ff0099] opacity-40 blur-3xl sm:h-72 sm:w-72" />
          <div className="absolute -right-16 bottom-12 h-64 w-64 rounded-full bg-[#00f0ff] opacity-30 blur-3xl sm:h-80 sm:w-80" />

          <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:px-8">
            <div>
              <p className="mb-5 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.35em] text-white/75">
                Oct 24-27, 2026
              </p>
              <h1 className="text-[20vw] font-black uppercase leading-[0.82] tracking-[-0.08em] sm:text-[18vw] lg:text-[9rem]">
                NOVA
                <span
                  className="block pl-[10vw] sm:pl-[14vw] lg:pl-24"
                  style={{ WebkitTextStroke: "2px #ccff00", color: "transparent" }}
                >
                  NIGHTS
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/72 sm:text-lg">
                Four nights of contemporary arts, digital culture and AV performances inside the industrial heart of Metropolis.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button className="rounded-full border border-[#ccff00] bg-[#ccff00] px-6 py-4 text-sm font-black uppercase tracking-[0.24em] text-black transition-colors hover:bg-white">
                  Buy Passes
                </button>
                <button className="rounded-full border border-white/15 bg-white/5 px-6 py-4 text-sm font-mono uppercase tracking-[0.24em] text-white transition-colors hover:border-white/30 hover:bg-white/10">
                  See Program
                </button>
              </div>
            </div>

            <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur sm:p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-black/40 p-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-[#ff0099]">Location</p>
                  <p className="mt-3 text-xl font-semibold uppercase tracking-tight">Industrial Sector 7</p>
                  <p className="mt-2 text-sm text-white/60">Metropolis, adaptive reuse warehouse campus.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-black/40 p-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-[#00f0ff]">Experience</p>
                  <p className="mt-3 text-xl font-semibold uppercase tracking-tight">AV + Live Code</p>
                  <p className="mt-2 text-sm text-white/60">Installations, performances, talks and brutalist club culture.</p>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-black/50 p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-[#ccff00]">Night Index</p>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-white/70">
                  <div className="rounded-2xl border border-white/10 p-4">
                    <span className="block text-2xl font-black text-white">04</span>
                    Curated zones
                  </div>
                  <div className="rounded-2xl border border-white/10 p-4">
                    <span className="block text-2xl font-black text-white">32</span>
                    Featured artists
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative my-10 border-y-4 border-black bg-[#ccff00] py-4 text-black">
          <div className="mx-auto flex max-w-none gap-8 overflow-hidden whitespace-nowrap px-4 font-black uppercase tracking-[0.28em] sm:text-lg">
            <span className="shrink-0">Contemporary Arts</span>
            <span className="shrink-0">Digital Culture</span>
            <span className="shrink-0">AV Performances</span>
            <span className="shrink-0">Late Night Talks</span>
            <span className="shrink-0">Warehouse Installations</span>
            <span className="shrink-0">Contemporary Arts</span>
            <span className="shrink-0">Digital Culture</span>
          </div>
        </section>

        <section
          className="relative overflow-hidden border-b border-white/10 py-20 sm:py-28"
          style={{
            backgroundImage: "linear-gradient(180deg, rgba(5,5,5,0.78), rgba(5,5,5,0.94)), url(" + activeImage + ")",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 font-mono text-sm uppercase tracking-[0.35em] text-[#ccff00] sm:mb-14">
              [ Featured Program ]
            </h2>

            <div className="border-t border-white/20">
              {events.map((event) => (
                <button
                  key={event.id}
                  type="button"
                  className="group grid w-full gap-5 border-b border-white/20 py-6 text-left sm:py-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end"
                  onMouseEnter={() => setActiveImage(event.image)}
                  onFocus={() => setActiveImage(event.image)}
                >
                  <div>
                    <div className="text-4xl font-black uppercase leading-none tracking-[-0.08em] transition-transform duration-300 group-hover:text-[#ccff00] sm:text-5xl md:text-7xl">
                      {event.title}
                    </div>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">{event.blurb}</p>
                  </div>

                  <div className="grid gap-3 font-mono text-[11px] uppercase tracking-[0.26em] text-white/70 sm:grid-cols-2 md:text-right">
                    <div>
                      <span className="mb-2 block text-[#ccff00]">Time</span>
                      {event.time}
                    </div>
                    <div>
                      <span className="mb-2 block text-[#ccff00]">Venue</span>
                      {event.venue}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-white py-20 text-black sm:py-28">
          <div className="pointer-events-none absolute left-0 top-1/2 w-full -translate-y-1/2 opacity-[0.08]">
            <div
              className="text-center text-[24vw] font-black uppercase leading-none tracking-[-0.1em] sm:text-[16vw]"
              style={{ WebkitTextStroke: "1px #050505", color: "transparent" }}
            >
              LINEUP
            </div>
          </div>

          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-sm uppercase tracking-[0.35em] text-black/55">[ Phase 1 Lineup ]</p>
                <h2 className="mt-4 text-4xl font-black uppercase leading-none tracking-[-0.08em] sm:text-6xl">
                  Artists built for impact.
                </h2>
              </div>
              <button className="rounded-full border-2 border-black px-6 py-3 text-sm font-black uppercase tracking-[0.2em] transition-colors hover:bg-black hover:text-white">
                View Full Roster
              </button>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {artists.map((artist, index) => (
                <div
                  key={artist}
                  className={
                    "rounded-[1.75rem] border-2 p-5 " +
                    (index % 3 === 0
                      ? "border-black bg-black text-white"
                      : index % 3 === 1
                        ? "border-black bg-[#ff0099] text-black"
                        : "border-black bg-[#ccff00] text-black")
                  }
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.3em] opacity-70">Live set</p>
                  <div className="mt-4 text-2xl font-black uppercase leading-none tracking-[-0.06em]">{artist}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#ccff00] text-black">
          <div className="mx-auto grid max-w-6xl gap-0 md:grid-cols-[0.95fr_1.05fr]">
            <div className="border-b-4 border-black px-4 py-16 sm:px-6 lg:border-b-0 lg:border-r-4 lg:px-8 lg:py-20">
              <p className="font-mono text-sm uppercase tracking-[0.35em] text-black/65">Manifesto</p>
              <h2 className="mt-6 text-5xl font-black uppercase leading-[0.88] tracking-[-0.08em] sm:text-7xl">
                Redefining
                <br />
                the
                <br />
                <span style={{ WebkitTextStroke: "1px #050505", color: "white" }}>Void.</span>
              </h2>
              <p className="mt-6 font-mono text-sm uppercase tracking-[0.35em]">Est. 2023 // Metropolis</p>
            </div>

            <div className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
              <div className="grid gap-6 text-lg leading-relaxed text-black/80 sm:text-xl">
                <p>
                  Nova Nights exists for the in-between hours: when clubs become galleries, warehouses become stages and new work arrives louder than tradition.
                </p>
                <p>
                  It is a festival for people who want friction, brightness, distortion and a little danger, but still expect strong curation and precise craft.
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button className="rounded-full border-2 border-black px-6 py-3 text-sm font-black uppercase tracking-[0.22em] transition-colors hover:bg-black hover:text-[#ccff00]">
                  Read Manifesto
                </button>
                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-black px-4 text-center font-mono text-[11px] uppercase tracking-[0.22em] text-[#ccff00] sm:h-32 sm:w-32">
                  Nights built from signal and noise
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-sm uppercase tracking-[0.35em] text-[#ff0099]">[ Atmosphere ]</p>
                <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.08em] text-white sm:text-6xl">Feel it.</h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-white/60 sm:text-base">
                Brutalist light, sweaty air, sharp sound and moments designed to feel larger than the room itself.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
              {atmosphereImages.map((image, index) => (
                <div
                  key={image}
                  className={
                    "overflow-hidden rounded-[1.75rem] border border-white/15 " +
                    (index === 0
                      ? "col-span-2 lg:col-span-1"
                      : index === 2
                        ? "col-span-2 lg:col-span-2"
                        : "")
                  }
                >
                  <img
                    src={image}
                    alt="Nova Nights atmosphere"
                    className={
                      "h-full w-full object-cover grayscale transition duration-500 hover:scale-105 hover:grayscale-0 " +
                      (index === 1 ? "aspect-[4/5]" : index === 2 ? "aspect-[16/9]" : "aspect-[3/4]")
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#ff0099] py-20 text-center text-black sm:py-28">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-20">
            <div className="text-[28vw] font-black uppercase leading-none tracking-[-0.12em] sm:text-[16vw]">TICKETS</div>
          </div>

          <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.08em] sm:text-7xl">
              Secure
              <br />
              Your Spot
            </h2>
            <p className="mx-auto mt-6 max-w-xl font-mono text-sm font-bold uppercase tracking-[0.22em] text-black/70 sm:text-base">
              Limited passes. Late-night access. One warehouse city built for four unforgettable evenings.
            </p>
            <button className="mt-10 rounded-full bg-black px-8 py-4 text-lg font-black uppercase tracking-[0.24em] text-white transition-transform hover:scale-[1.03] hover:bg-white hover:text-black sm:px-12 sm:text-xl">
              Buy Passes Now
            </button>
          </div>
        </section>

        <section className="border-b border-white/10 bg-black py-10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h3 className="mb-6 text-center font-mono text-[11px] uppercase tracking-[0.35em] text-white/45">Supported By</h3>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xl font-black uppercase tracking-[0.28em] text-white/35 sm:text-2xl">
              {partners.map((partner) => (
                <span key={partner}>{partner}</span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="relative overflow-hidden bg-black px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.35em] text-[#ccff00]">Connect</p>
            <div className="mt-5 flex flex-col gap-3 font-mono text-sm uppercase tracking-[0.22em] text-white/75">
              <a href="#" className="transition-colors hover:text-[#ff0099]">Instagram</a>
              <a href="#" className="transition-colors hover:text-[#ff0099]">Twitter // X</a>
              <a href="#" className="transition-colors hover:text-[#ff0099]">Discord</a>
            </div>
          </div>

          <div className="md:text-right">
            <p className="font-mono text-sm uppercase tracking-[0.35em] text-[#ccff00]">Legal</p>
            <div className="mt-5 flex flex-col gap-3 font-mono text-sm uppercase tracking-[0.22em] text-white/50">
              <a href="#" className="transition-colors hover:text-white">Privacy Policy</a>
              <a href="#" className="transition-colors hover:text-white">Terms of Service</a>
              <a href="#" className="transition-colors hover:text-white">Press Kit</a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 flex max-w-6xl flex-col gap-3 border-t border-white/15 pt-6 font-mono text-[11px] uppercase tracking-[0.26em] text-white/40 md:flex-row md:items-center md:justify-between">
          <span>© 2026 Nova Nights. All rights reserved.</span>
          <span>Designed for nights of impact.</span>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-1/2 w-full -translate-x-1/2 text-center text-[22vw] font-black uppercase leading-none tracking-[-0.12em] text-white/[0.04] sm:text-[16vw]">
          NOVA
        </div>
      </footer>
    </div>
  );
}
`;

export const novaNightsSlide: WebsiteShowcaseSlide = {
  id: "nova-nights",
  title: "Nova Nights",
  posterSrc: "/website-showcases/posters/nova-nights.jpg",
  html: createBundledReactPreviewDocument({
    title: "Nova Nights",
    bundleSrc: "/website-showcases/generated/nova-nights.js",
    stylesheetHrefs: [showcaseFontsStylesheetHref, showcaseReactStylesheetHref],
  }),
  preloadPriority: 30,
};
