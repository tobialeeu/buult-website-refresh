import { Link } from "react-router-dom";
import { ArrowRight, Camera, Eye, MessageCircle, TrendingUp } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import overOnsImg from "../../over_ons_afbeelding-97eZ1EW3.png";

const reasons = [
  {
    icon: Eye,
    title: "Vertrouwen in de eerste seconden",
    description:
      "Een slechte website schaadt vaak al in de eerste seconden het vertrouwen. Onderzoek van Stanford liet zien dat mensen geloofwaardigheid van websites in sterke mate beoordelen op ontwerp en structuur.",
  },
  {
    icon: TrendingUp,
    title: "Meer vertrouwen, meer bestellingen",
    description:
      "Mensen die je vertrouwen, besteden sneller geld. Bij veel webshops stopt 70% van de mensen nu nog vlak voor de betaling, simpelweg omdat het bestelformulier te onhandig is. Maak je het de klant makkelijker? Dan kun je tot wel 35% meer bestellingen binnenkrijgen.",
    iconWrapClassName: "bg-emerald-500/15",
    iconClassName: "text-emerald-600",
  },
];

const whyBuult = [
  {
    icon: Eye,
    title: "Gratis prototype",
    description:
      "Je krijgt eerst een gratis prototype, volledig 100% vrijblijvend, voordat we het eindproduct opleveren.",
    iconWrapClassName: "bg-blue-50 group-hover:bg-blue-600 group-hover:rotate-6",
    iconClassName: "text-blue-600 group-hover:text-white",
  },
  {
    icon: Camera,
    title: "Gratis fotoshoot",
    description:
      "Bij je website krijg je ook een gratis fotoshoot, zodat het beeldmateriaal net zo professioneel voelt als de rest van je uitstraling.",
    iconWrapClassName: "bg-teal-50 group-hover:bg-teal-500 group-hover:-rotate-6",
    iconClassName: "text-teal-600 group-hover:text-white",
    offsetClassName: "md:translate-y-10",
  },
  {
    icon: MessageCircle,
    title: "Snelheid + korte lijntjes",
    description:
      "Snel geleverd werk, snelle iteraties en direct contact zodra er iets moet gebeuren.",
    iconWrapClassName: "bg-blue-50 group-hover:bg-blue-600 group-hover:rotate-6",
    iconClassName: "text-blue-600 group-hover:text-white",
    offsetClassName: "md:translate-y-20",
  },
];

const showHomeAboutTeaser = false;

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
        <motion.div
          className="pointer-events-none absolute right-[6%] top-24 hidden lg:block"
          animate={prefersReducedMotion ? undefined : { x: [0, 8, -6, 0], y: [0, -22, 8, 0], rotate: [0, -2.4, 1, 0] }}
          transition={ambientMedium}
        >
          <div className="relative h-[360px] w-[420px] hero-bars-glow">
            <motion.div
              className="absolute bottom-0 right-0 flex h-24 w-[340px] items-center justify-center rounded-[30px] border border-[rgba(30,64,175,0.16)] bg-[rgba(30,64,175,0.10)] shadow-[0_30px_90px_-45px_rgba(30,64,175,0.8)] backdrop-blur-md"
              animate={prefersReducedMotion ? undefined : { y: [0, -10, 4, 0], opacity: [0.84, 1, 0.9, 0.84] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="font-heading text-[28px] font-semibold tracking-tight text-[rgba(30,64,175,0.72)]">
                Buult
              </span>
            </motion.div>
            <motion.div
              className="absolute bottom-28 right-14 flex h-20 w-[250px] items-center justify-center rounded-[26px] border border-[rgba(37,99,235,0.16)] bg-[rgba(37,99,235,0.10)] shadow-[0_30px_90px_-45px_rgba(37,99,235,0.7)] backdrop-blur-md"
              animate={prefersReducedMotion ? undefined : { y: [0, -14, 6, 0], opacity: [0.82, 1, 0.92, 0.82] }}
              transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="font-heading text-[24px] font-semibold tracking-tight text-[rgba(37,99,235,0.68)]">
                are
              </span>
            </motion.div>
            <motion.div
              className="absolute bottom-52 right-24 flex h-16 w-[170px] items-center justify-center rounded-[22px] border border-[rgba(96,165,250,0.18)] bg-[rgba(96,165,250,0.14)] shadow-[0_30px_90px_-45px_rgba(96,165,250,0.6)] backdrop-blur-md"
              animate={prefersReducedMotion ? undefined : { y: [0, -18, 8, 0], opacity: [0.8, 1, 0.94, 0.8] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="font-heading text-[20px] font-semibold tracking-tight text-[rgba(59,130,246,0.68)]">
                We
              </span>
            </motion.div>
          </div>
        </motion.div>

        <div className="container relative z-10 py-24 md:py-36 lg:py-44">
          <div className="max-w-2xl relative">
            <div className="pointer-events-none absolute -left-10 top-4 h-40 w-40 rounded-full bg-white/35 blur-3xl opacity-60" />
            <AnimatedSection>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-foreground text-balance">
                Een website die jouw bedrijf echt verder brengt
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Buult bouwt websites die passen bij jouw bedrijf, vertrouwen wekken bij bezoekers en online groei ondersteunen. Geen standaard sjabloon, maar iets dat werkt.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/gratis-kennismaking"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-sm hover:bg-accent transition-colors"
                >
                  Plan een kennismaking
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/over-ons"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-7 py-3.5 text-base font-semibold text-foreground hover:bg-secondary transition-colors"
                >
                  Meer over ons
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent via-background/80 to-card" />
        <div className="pointer-events-none absolute inset-x-[18%] bottom-[-5rem] h-36 rounded-full bg-primary/16 blur-3xl" />
      </section>

      {/* Waarom een betere website */}
      <section className="bg-card py-20 md:py-28">
        <div className="container">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Waarom een betere website?
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {reasons.map((r, i) => (
              <AnimatedSection key={r.title} delay={i * 0.1} className="h-full">
                <div className="group h-full rounded-xl border border-border bg-card p-8 shadow-card hover:shadow-card-hover transition-all duration-300">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 ${r.iconWrapClassName ?? "bg-primary/10"}`}>
                    <r.icon className={r.iconClassName ?? "text-primary"} size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{r.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{r.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.2}>
            <div className="mt-10 text-center">
              <Link
                to="/studies"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                Klik hier om de onderzoeken te bekijken. <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Waarom bij ons */}
      <section className="bg-card py-24 md:py-32">
        <div className="container">
          <div className="relative overflow-hidden rounded-[2.75rem] bg-slate-50 px-6 py-12 md:px-10 md:py-16 lg:px-12">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-200/24 blur-[100px]" />
            <div className="relative z-10">
              <AnimatedSection>
                <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
                  <h2 className="mb-6 text-2xl font-bold tracking-tight leading-tight text-slate-900 md:text-3xl">
                    Waarom bij ons?
                  </h2>
                  <p className="text-lg leading-relaxed text-slate-600">
                    Geen ruis, geen onnodige lagen en geen vaag proces. Gewoon snel schakelen en een website bouwen die klopt.
                  </p>
                </div>
              </AnimatedSection>

              <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3 md:items-start">
                {whyBuult.map((item, i) => (
                  <AnimatedSection
                    key={item.title}
                    delay={i * 0.08}
                    className={`h-full ${item.offsetClassName ?? ""}`}
                  >
                    <div className="group h-full rounded-[2.5rem] border border-white bg-white/80 p-8 text-left shadow-lg shadow-slate-200/40 backdrop-blur-lg transition-all duration-300 hover:-translate-y-3 md:p-10">
                      <div className="mb-8">
                        <div className={`flex h-16 w-16 items-center justify-center rounded-2xl shadow-sm transition-all duration-300 ${item.iconWrapClassName}`}>
                          <item.icon className={`h-8 w-8 transition-all duration-300 ${item.iconClassName ?? "text-primary"}`} />
                        </div>
                      </div>
                      <h3 className="mb-4 text-xl font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="leading-relaxed text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {showHomeAboutTeaser && (
        <section className="py-20 md:py-28 bg-card">
          <div className="container">
            <AnimatedSection>
              <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="order-2 md:order-1">
                  <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Over ons</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Joachim (26) en Tobias (23) van Leeuwen
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                    Wij zijn Joachim (26) en Tobias (23) van Leeuwen, twee broers met een grote passie voor ondernemen. We vinden het geweldig om samen iets op te bouwen en zetten ons graag volledig in om een mooi bedrijf neer te zetten dat echte waarde levert voor klanten en medewerkers.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Voor ons gaat het niet alleen om het maken van een website, maar om het bouwen van iets dat echt past bij een bedrijf en bijdraagt aan groei, uitstraling en vertrouwen.
                  </p>
                  <Link
                    to="/over-ons"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                  >
                    Lees ons verhaal <ArrowRight size={16} />
                  </Link>
                </div>
                <div className="order-1 md:order-2">
                  <img
                    src={overOnsImg}
                    alt="Joachim en Tobias van Leeuwen - oprichters van Buult"
                    className="rounded-2xl shadow-card w-full object-cover aspect-[4/5]"
                    loading="lazy"
                    width={800}
                    height={1024}
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-20 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Klaar om jouw bedrijf te laten groeien?
              </h2>
              <p className="max-w-2xl mx-auto text-primary-foreground/75 text-base md:text-lg leading-relaxed mb-10">
                Laten we vrijblijvend praten over de mogelijkheden voor jouw nieuwe website. Geen gladde praatjes, gewoon eerlijk advies.
              </p>
              <Link
                to="/gratis-kennismaking"
                className="inline-flex items-center justify-center rounded-full bg-white/80 px-8 py-4 text-base font-semibold text-primary shadow-sm shadow-black/10 transition-colors hover:bg-white"
              >
                Plan een kennismaking
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
