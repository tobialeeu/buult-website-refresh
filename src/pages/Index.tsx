import { Link } from "react-router-dom";
import { ArrowRight, Camera, MessageCircle, PencilRuler, ShieldCheck, TrendingUp } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import overOnsImg from "../../over_ons_afbeelding-97eZ1EW3.png";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Vertrouwen in de eerste seconden",
    description:
      "Een slechte website schaadt vaak al in de eerste seconden het vertrouwen. Onderzoek van Stanford liet zien dat mensen geloofwaardigheid van websites in sterke mate beoordelen op ontwerp en structuur.",
    iconWrapClassName: "bg-blue-50 group-hover:bg-blue-600 group-hover:rotate-6",
    iconClassName: "text-blue-600 group-hover:text-white",
  },
  {
    icon: TrendingUp,
    title: "Meer vertrouwen, meer bestellingen",
    description:
      "Mensen die je vertrouwen, besteden sneller geld. Bij veel webshops stopt 70% van de mensen nu nog vlak voor de betaling, simpelweg omdat het bestelformulier te onhandig is. Maak je het de klant makkelijker? Dan kun je tot wel 35% meer bestellingen binnenkrijgen.",
    iconWrapClassName: "bg-emerald-500/15 group-hover:bg-emerald-500 group-hover:-rotate-6",
    iconClassName: "text-emerald-600 group-hover:text-white",
  },
];

const whyBuult = [
  {
    icon: PencilRuler,
    title: "Gratis prototype",
    label: "Eerst zien, dan beslissen",
    description:
      "Je krijgt eerst een gratis prototype, volledig 100% vrijblijvend, voordat we het eindproduct opleveren.",
    iconWrapClassName: "bg-blue-50 group-hover:bg-blue-600 group-hover:rotate-6",
    iconClassName: "text-blue-600 group-hover:text-white",
  },
  {
    icon: Camera,
    title: "Gratis fotoshoot",
    label: "Sterkere uitstraling",
    description:
      "Bij je website krijg je ook een gratis fotoshoot, zodat het beeldmateriaal net zo professioneel voelt als de rest van je uitstraling.",
    iconWrapClassName: "bg-teal-50 group-hover:bg-teal-500 group-hover:-rotate-6",
    iconClassName: "text-teal-600 group-hover:text-white",
  },
  {
    icon: MessageCircle,
    title: "Snelheid + korte lijntjes",
    label: "Direct schakelen",
    description:
      "Snel geleverd werk, snelle iteraties en direct contact zodra er iets moet gebeuren.",
    iconWrapClassName: "bg-blue-50 group-hover:bg-blue-600 group-hover:rotate-6",
    iconClassName: "text-blue-600 group-hover:text-white",
  },
];

const founderPillars = ["Hard werken", "Ondernemend denken", "Korte lijnen"];

const homeShowreelSrc = "/buult-home-video.mp4";

const showHomeAboutTeaser = true;

export default function Index() {
  const prefersReducedMotion = useReducedMotion();
  const ambientSlow = { duration: 18, repeat: Infinity, repeatType: "mirror" as const, ease: "easeInOut" as const };
  const ambientMedium = { duration: 14, repeat: Infinity, repeatType: "mirror" as const, ease: "easeInOut" as const };
  const ambientFast = { duration: 10, repeat: Infinity, repeatType: "mirror" as const, ease: "easeInOut" as const };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/12 via-background to-card" />
        <motion.div
          className="absolute inset-0 hero-sheen"
          animate={prefersReducedMotion ? undefined : { opacity: [0.92, 1, 0.96], scale: [1, 1.02, 1] }}
          transition={ambientSlow}
        />
        <motion.div
          className="absolute inset-0 opacity-45 hero-grid-mask bg-[linear-gradient(to_right,rgba(30,64,175,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,64,175,0.05)_1px,transparent_1px)] bg-[size:72px_72px]"
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  backgroundPosition: [
                    "0px 0px, 0px 0px",
                    "36px 0px, 0px 18px",
                    "0px 0px, 0px 0px",
                  ],
                }
          }
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="pointer-events-none absolute inset-0 hero-beam-base opacity-80"
          animate={prefersReducedMotion ? undefined : { x: ["-4%", "5%", "-1%"], opacity: [0.4, 0.85, 0.55] }}
          transition={ambientMedium}
        />
        <motion.div
          className="pointer-events-none absolute left-[-8rem] top-10 h-[24rem] w-[24rem] rounded-full bg-sky-300/30 blur-3xl"
          animate={prefersReducedMotion ? undefined : { x: [0, 26, -12, 0], y: [0, -18, 10, 0], scale: [1, 1.08, 1.02, 1], opacity: [0.72, 0.95, 0.82, 0.72] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute right-[-10rem] top-[-4rem] h-[32rem] w-[32rem] rounded-full bg-primary/24 blur-3xl"
          animate={prefersReducedMotion ? undefined : { x: [0, -24, 12, 0], y: [0, 20, -10, 0], scale: [1, 1.05, 1.1, 1], opacity: [0.68, 0.92, 0.84, 0.68] }}
          transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute left-[8%] top-[18%] h-40 w-40 rounded-full bg-primary/18 blur-3xl"
          animate={prefersReducedMotion ? undefined : { x: [0, 10, -6, 0], y: [0, 18, -8, 0], scale: [1, 1.12, 0.98, 1], opacity: [0.32, 0.52, 0.4, 0.32] }}
          transition={ambientFast}
        />
        <div className="container relative z-10 py-20 md:py-24 lg:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_440px] lg:gap-12">
            <AnimatedSection>
              <div className="relative max-w-2xl">
                <div className="pointer-events-none absolute -left-10 top-4 h-40 w-40 rounded-full bg-white/35 blur-3xl opacity-60" />
                <h1 className="text-4xl font-extrabold leading-[1.05] text-foreground text-balance md:text-5xl lg:text-6xl">
                  Een website die jouw bedrijf echt verder brengt
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                  Buult bouwt websites die passen bij jouw bedrijf, vertrouwen wekken bij bezoekers en online groei ondersteunen. Geen standaard sjabloon, maar iets dat werkt.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link
                    to="/gratis-kennismaking"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-sm hover:bg-accent transition-colors"
                  >
                    Plan een kennismaking
                    <ArrowRight size={18} />
                  </Link>
                  <Link
                    to="/over-ons"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card/90 px-7 py-3.5 text-base font-semibold text-foreground hover:bg-secondary transition-colors"
                  >
                    Meer over ons
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.12} className="hidden lg:block lg:justify-self-end">
              <motion.div
                className="pointer-events-none"
                animate={prefersReducedMotion ? undefined : { x: [0, 8, -6, 0], y: [0, -22, 8, 0], rotate: [0, -2.4, 1, 0] }}
                transition={ambientMedium}
              >
                <div className="relative h-[360px] w-[420px] hero-bars-glow">
                  <motion.div
                    className="absolute bottom-0 right-0 flex h-24 w-[340px] items-center justify-center rounded-[30px] border border-[rgba(30,64,175,0.24)] bg-[rgba(30,64,175,0.14)] shadow-[0_30px_90px_-45px_rgba(30,64,175,0.78)] backdrop-blur-md"
                    animate={prefersReducedMotion ? undefined : { y: [0, -10, 4, 0], opacity: [0.84, 1, 0.9, 0.84] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span className="font-heading text-[28px] font-semibold tracking-tight text-[#1e40af]">
                      Buult
                    </span>
                  </motion.div>
                  <motion.div
                    className="absolute bottom-28 right-14 flex h-20 w-[250px] items-center justify-center rounded-[26px] border border-[rgba(37,99,235,0.22)] bg-[rgba(37,99,235,0.14)] shadow-[0_30px_90px_-45px_rgba(37,99,235,0.68)] backdrop-blur-md"
                    animate={prefersReducedMotion ? undefined : { y: [0, -14, 6, 0], opacity: [0.82, 1, 0.92, 0.82] }}
                    transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span className="font-heading text-[24px] font-semibold tracking-tight text-[#2563eb]">
                      are
                    </span>
                  </motion.div>
                  <motion.div
                    className="absolute bottom-52 right-24 flex h-16 w-[170px] items-center justify-center rounded-[22px] border border-[rgba(96,165,250,0.26)] bg-[rgba(96,165,250,0.18)] shadow-[0_30px_90px_-45px_rgba(96,165,250,0.52)] backdrop-blur-md"
                    animate={prefersReducedMotion ? undefined : { y: [0, -18, 8, 0], opacity: [0.8, 1, 0.94, 0.8] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span className="font-heading text-[20px] font-semibold tracking-tight text-[#60a5fa]">
                      We
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent via-background/80 to-card" />
        <div className="pointer-events-none absolute inset-x-[18%] bottom-[-5rem] h-36 rounded-full bg-primary/16 blur-3xl" />
      </section>

      {/* Waarom een betere website */}
      <section className="bg-card py-16 md:py-20">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-10">
            <AnimatedSection>
              <div className="max-w-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Onderbouwing</p>
                <h2 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">
                  Waarom een betere website?
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                  Een goede website is geen decorstuk. Hij moet vertrouwen opbouwen, frictie wegnemen en bezoekers helpen om door te gaan.
                </p>
                <Link
                  to="/studies"
                  className="mt-6 inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  Bekijk de onderzoeken <ArrowRight size={16} />
                </Link>
              </div>
            </AnimatedSection>

            <div className="grid gap-6 md:grid-cols-2">
              {reasons.map((r, i) => (
                <AnimatedSection key={r.title} delay={i * 0.1} className="h-full">
                  <div className="group flex h-full flex-col rounded-[1.75rem] border border-border/80 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover md:p-7">
                    <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${r.iconWrapClassName ?? "bg-primary/10"}`}>
                      <r.icon className={`transition-all duration-300 ${r.iconClassName ?? "text-primary"}`} size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{r.title}</h3>
                    <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{r.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="bg-card py-6 md:py-8">
        <div className="container">
          <AnimatedSection>
            <div className="mx-auto max-w-5xl">
              <div className="relative overflow-hidden rounded-[2.5rem] border border-border/70 bg-slate-950 shadow-[0_30px_90px_-50px_rgba(15,23,42,0.45)]">
                <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_35%),linear-gradient(to_bottom,rgba(15,23,42,0.02),rgba(15,23,42,0.18))]" />
                <video
                  className="aspect-[16/9] w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="/placeholder.svg"
                  aria-label="Buult introductievideo"
                >
                  <source src={homeShowreelSrc} type="video/mp4" />
                </video>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Waarom bij ons */}
      <section className="bg-card py-16 md:py-20">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-start">
              <AnimatedSection>
                <div className="max-w-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Onze aanpak</p>
                  <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                    Waarom bij ons?
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
                    Geen ruis, geen onnodige lagen en geen vaag proces. Gewoon snel schakelen en een website bouwen die klopt.
                  </p>
                  <button
                    type="button"
                    className="mt-6 inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                  >
                    Bekijk wat wij kunnen <ArrowRight size={16} />
                  </button>
                </div>
              </AnimatedSection>

              <div className="grid gap-5 md:grid-cols-3">
                {whyBuult.map((item, i) => (
                  <AnimatedSection key={item.title} delay={i * 0.08} className="h-full">
                    <div className="group h-full rounded-[2rem] border border-white bg-white/90 p-6 text-left shadow-lg shadow-slate-200/40 backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 md:p-7">
                      <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm transition-all duration-300 ${item.iconWrapClassName}`}>
                        <item.icon className={`h-7 w-7 transition-all duration-300 ${item.iconClassName ?? "text-primary"}`} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-3 leading-relaxed text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
          </div>
        </div>
      </section>

      {/* Media placeholder */}
      <section className="bg-card py-8 md:py-10">
        <div className="container">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-[2.5rem] border border-dashed border-border/80 bg-surface/80 shadow-[0_25px_70px_-55px_rgba(15,23,42,0.35)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(96,165,250,0.10),transparent_26%)]" />
              <div className="relative flex aspect-[16/8] flex-col items-center justify-center px-8 text-center md:aspect-[16/7]">
                <span className="rounded-full border border-primary/15 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary shadow-sm">
                  Placeholder
                </span>
                <h3 className="mt-5 text-2xl font-bold text-foreground md:text-3xl">
                  Ruimte voor video, animatie of fotografie
                </h3>
                <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                  Hier kan later spelende of statische media komen die meer sfeer, werk of proces laat zien.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {showHomeAboutTeaser && (
        <section className="bg-card py-16 md:py-20">
          <div className="container">
            <AnimatedSection>
              <div className="grid items-start gap-8 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-10">
                <div className="relative order-1">
                  <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-primary/10 blur-3xl opacity-70" />
                  <img
                    src={overOnsImg}
                    alt="Joachim en Tobias van Leeuwen - oprichters van Buult"
                    className="relative w-full rounded-[2rem] object-cover object-[60%_center] shadow-card aspect-[4/4.4]"
                    loading="lazy"
                    width={800}
                    height={1024}
                  />
                </div>
                <div className="order-2 flex h-full flex-col justify-start">
                  <div>
                    <p className="text-primary font-semibold text-sm uppercase tracking-[0.2em]">Over ons</p>
                    <h2 className="mt-3 text-2xl md:text-3xl font-bold text-foreground">
                      Joachim & Tobias van Leeuwen
                    </h2>
                    <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                      Wij bouwen Buult als twee broers met een passie voor ondernemen. Geen anoniem bureau, maar korte lijnen, direct contact en een website die jouw bedrijf sterker neerzet.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      {founderPillars.map((pillar) => (
                        <span
                          key={pillar}
                          className="rounded-full border border-white bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-slate-200/40 transition-all duration-300 hover:-translate-y-2 hover:bg-white"
                        >
                          {pillar}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    to="/over-ons"
                    className="mt-10 inline-flex items-center gap-2 text-primary font-semibold hover:underline lg:mt-12"
                  >
                    Lees ons verhaal <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="bg-card py-16 md:py-20">
        <div className="container">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-6 py-8 text-primary-foreground shadow-[0_30px_90px_-50px_rgba(37,99,235,0.9)] md:px-10 md:py-10">
              <div className="pointer-events-none absolute left-0 top-0 h-40 w-40 rounded-full bg-white/12 blur-3xl" />
              <div className="pointer-events-none absolute bottom-[-4rem] right-[-3rem] h-52 w-52 rounded-full bg-sky-300/30 blur-3xl" />
              <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                  Klaar om jouw bedrijf te laten groeien?
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/78 md:text-lg">
                  Laten we vrijblijvend praten over de mogelijkheden voor jouw nieuwe website. Geen gladde praatjes, gewoon eerlijk advies en snel duidelijkheid.
                </p>
                <div className="mt-8 flex justify-center">
                  <Link
                    to="/gratis-kennismaking"
                    className="inline-flex items-center justify-center rounded-full bg-white/90 px-8 py-4 text-base font-semibold text-primary shadow-sm shadow-black/10 transition-colors hover:bg-white"
                  >
                    Plan een kennismaking
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
