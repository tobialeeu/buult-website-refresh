import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, HelpCircle, Layers, MessageCircle, PencilRuler, Phone, ShieldOff, Users } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import ShowcaseCrack from "@/components/ShowcaseCrack";
import homeShowcaseImg from "@/assets/buult-home-showcase.jpg";
import overOnsImg from "@/assets/over-ons-founders.jpg";
import softwareResendLogo from "@/assets/software-resend.svg";
import softwareGoogleCloudLogo from "@/assets/software-google-cloud.svg";
import softwareSupabaseLogo from "@/assets/software-supabase.svg";
import softwareCloudflareLogo from "@/assets/software-cloudflare.svg";
import softwareNextJsLogo from "@/assets/software-nextjs.svg";

const loadWebsiteShowcaseCarousel = () => import("@/components/WebsiteShowcaseCarousel");
const WebsiteShowcaseCarousel = lazy(loadWebsiteShowcaseCarousel);

const homeProblems = [
  { text: "Je beantwoordt steeds dezelfde basisvragen", icon: HelpCircle, bg: "bg-blue-50", color: "text-blue-600" },
  { text: "Klanten twijfelen aan je professionaliteit", icon: ShieldOff, bg: "bg-amber-50", color: "text-amber-600" },
  { text: "Je verliest klanten buiten openingstijden", icon: Clock, bg: "bg-rose-50", color: "text-rose-600" },
  { text: "Je bent afhankelijk van bellen en WhatsApp", icon: Phone, bg: "bg-teal-50", color: "text-teal-600" },
  { text: "Mond-tot-mondreclame werkt minder goed", icon: Users, bg: "bg-violet-50", color: "text-violet-600" },
];

const whyBuult = [
  {
    icon: PencilRuler,
    title: "Gratis eerste versie",
    label: "Eerst zien, dan beslissen",
    description:
      "Je krijgt eerst een gratis versie van je website, volledig vrijblijvend, voordat je beslist.",
    iconWrapClassName: "bg-blue-50 group-hover:bg-blue-600 group-hover:rotate-6",
    iconClassName: "text-blue-600 group-hover:text-white",
  },
  {
    icon: Layers,
    title: "1 partij die alles fixt",
    label: "Geen gedoe",
    description:
      "Website, tekst, hosting. Alles via ons, geen losse partijen bij elkaar zoeken.",
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

const softwareStack = [
  {
    name: "Supabase",
    src: softwareSupabaseLogo,
    alt: "Supabase logo",
  },
  {
    name: "Cloudflare",
    src: softwareCloudflareLogo,
    alt: "Cloudflare logo",
  },
  {
    name: "NextJS",
    src: softwareNextJsLogo,
    alt: "NextJS logo",
  },
  {
    name: "Resend",
    src: softwareResendLogo,
    alt: "Resend logo",
  },
  {
    name: "Google Cloud",
    src: softwareGoogleCloudLogo,
    alt: "Google Cloud logo",
  },
] as const;

function getCarouselSlot(index: number, activeIndex: number, total: number) {
  return (index - activeIndex + total) % total;
}

const showHomeAboutTeaser = true;

function scheduleIdlePrefetch(callback: () => void) {
  if (typeof window === "undefined") {
    const timeoutId = setTimeout(callback, 0);
    return () => clearTimeout(timeoutId);
  }

  if ("requestIdleCallback" in window) {
    const idleId = window.requestIdleCallback(() => callback(), { timeout: 1500 });
    return () => window.cancelIdleCallback(idleId);
  }

  const timeoutId = window.setTimeout(callback, 220);
  return () => window.clearTimeout(timeoutId);
}

function WebsiteShowcaseFallback() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Website showcase</p>
        <h2 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">Wat kunnen wij maken?</h2>
      </div>
      <div className="rounded-[2rem] border border-white/12 bg-white/[0.04] p-4 shadow-[0_35px_90px_-60px_rgba(15,23,42,0.18)] md:p-4">
        <div className="flex items-center justify-between gap-4 border-b border-border/70 px-2 pb-3 text-slate-500 md:px-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="h-8 w-40 animate-pulse rounded-full bg-slate-200/80" />
          <div className="h-4 w-12 animate-pulse rounded bg-slate-200/80" />
        </div>
        <div className="mt-4 overflow-hidden rounded-[1.5rem] border border-border/70 bg-slate-950/80">
          <div className="h-[320px] animate-pulse bg-slate-200/70 md:h-[380px]" />
        </div>
      </div>
    </div>
  );
}

function DeferredWebsiteShowcase() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoadShowcase, setShouldLoadShowcase] = useState(false);

  useEffect(() => {
    const cancelIdlePrefetch = scheduleIdlePrefetch(() => {
      void loadWebsiteShowcaseCarousel();
    });

    return cancelIdlePrefetch;
  }, []);

  useEffect(() => {
    if (shouldLoadShowcase) {
      return;
    }

    const node = sectionRef.current;

    if (!node || typeof IntersectionObserver === "undefined") {
      setShouldLoadShowcase(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoadShowcase(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "900px 0px",
        threshold: 0.01,
      },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [shouldLoadShowcase]);

  return (
    <div ref={sectionRef}>
      {shouldLoadShowcase ? (
        <Suspense fallback={<WebsiteShowcaseFallback />}>
          <WebsiteShowcaseCarousel />
        </Suspense>
      ) : (
        <WebsiteShowcaseFallback />
      )}
    </div>
  );
}

export default function Index() {
  const prefersReducedMotion = useReducedMotion();
  const [activeSoftwareLogo, setActiveSoftwareLogo] = useState(1);
  const previousActiveSoftwareLogo = useRef(activeSoftwareLogo);
  const ambientSlow = { duration: 18, repeat: Infinity, repeatType: "mirror" as const, ease: "easeInOut" as const };
  const ambientMedium = { duration: 14, repeat: Infinity, repeatType: "mirror" as const, ease: "easeInOut" as const };
  const ambientFast = { duration: 10, repeat: Infinity, repeatType: "mirror" as const, ease: "easeInOut" as const };

  useEffect(() => {
    previousActiveSoftwareLogo.current = activeSoftwareLogo;
  }, [activeSoftwareLogo]);

  useEffect(() => {
    if (prefersReducedMotion || typeof window === "undefined") {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveSoftwareLogo((current) => (current + 1) % softwareStack.length);
    }, 2800);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [prefersReducedMotion]);

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
                  Je ziet je website al voordat je 'ja' zegt
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                  We bouwen een gratis versie van je website. Pas als je het ziet en het klopt, ga je verder. Directe lijnen, vaste prijs, geen verrassingen.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <Link
                    to="/gratis-kennismaking"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-sm hover:bg-accent transition-colors"
                  >
                    Plan een kennismaking
                    <ArrowRight size={18} />
                  </Link>
                  <Link
                    to="/tarieven"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card/90 px-7 py-3.5 text-base font-semibold text-foreground hover:bg-secondary transition-colors"
                  >
                    Bekijk tarieven
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
        <div className="pointer-events-none absolute inset-x-[18%] bottom-0 h-24 rounded-full bg-primary/10 blur-3xl" />
      </section>

      {/* Waarom Buult */}
      <section className="bg-card py-16 md:py-20">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-start">
            <AnimatedSection>
              <div className="max-w-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Onze aanpak</p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                  Waarom Buult?
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
                  Geen ruis, geen onnodige lagen en geen vaag proces. Gewoon snel schakelen en een website bouwen die klopt.
                </p>
                <Link
                  to="/hoe-werken-wij"
                  className="mt-6 inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  Kijk hoe wij te werk gaan <ArrowRight size={16} />
                </Link>
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

      {/* Showcase crack animation — image splits open revealing "Herken je dit?" + cards */}
      <ShowcaseCrack
        imageSrc={homeShowcaseImg}
        imageAlt="Buult website getoond op een desktop, tablet en telefoon"
        revealContent={
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Herken je dit?</p>
            <h2 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">
              Zonder goede website loop je klanten mis
            </h2>
          </div>
        }
      >
        <div className="space-y-5">
          <div className="mx-auto max-w-2xl space-y-3">
            {homeProblems.map((problem) => {
              const Icon = problem.icon;
              return (
                <div
                  key={problem.text}
                  className="flex flex-col items-center justify-center gap-3 rounded-[1.75rem] border border-slate-200/80 bg-white px-5 py-4 text-center shadow-[0_22px_60px_-48px_rgba(15,23,42,0.42)] md:px-6"
                >
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${problem.bg}`}>
                    <Icon size={20} strokeWidth={1.8} className={problem.color} />
                  </div>
                  <p className="max-w-[28ch] text-base font-semibold text-slate-900 md:text-lg">{problem.text}</p>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center">
            <Link
              to="/studies"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              Lees meer <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </ShowcaseCrack>

      {/* Media placeholder */}
      <section className="bg-card py-8 md:py-10">
        <div className="container">
          <AnimatedSection>
            <DeferredWebsiteShowcase />
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
                  decoding="async"
                  fetchPriority="low"
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

      {/* Software strip */}
      <section className="bg-card py-8 md:py-10">
        <div className="container">
          <AnimatedSection>
            <div className="relative py-2">
              <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">Tooling</p>
                <h2 className="mt-2 text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
                  Deze software gebruiken wij
                </h2>
              </div>

              <div className="relative mx-auto mt-8 h-28 max-w-5xl overflow-hidden md:h-32">
                {softwareStack.map((tool, index) => {
                  const slot = getCarouselSlot(index, activeSoftwareLogo, softwareStack.length);
                  const previousSlot = getCarouselSlot(index, previousActiveSoftwareLogo.current, softwareStack.length);
                  const isVisibleSlot = slot === 0 || slot === 1 || slot === softwareStack.length - 1;
                  const shouldTeleportToHidden = previousSlot === softwareStack.length - 1 && !isVisibleSlot;
                  const slotStyles =
                    slot === 0
                      ? { left: "50%", opacity: 1, scale: 1, filter: "blur(0px) saturate(1)", zIndex: 4 }
                      : slot === 1
                        ? { left: "78%", opacity: 0.28, scale: 0.8, filter: "grayscale(0.15) blur(0.8px) saturate(0.45)", zIndex: 2 }
                        : slot === softwareStack.length - 1
                          ? { left: "22%", opacity: 0.28, scale: 0.8, filter: "grayscale(0.15) blur(0.8px) saturate(0.45)", zIndex: 2 }
                          : { left: "108%", opacity: 0, scale: 0.64, filter: "grayscale(0.35) blur(1.2px) saturate(0.28)", zIndex: 1 };

                  return (
                    <div
                      key={tool.name}
                      className="absolute top-1/2 flex w-[5.75rem] -translate-x-1/2 -translate-y-1/2 justify-center transition-[left] duration-700 md:w-[8.75rem] lg:w-[10.5rem]"
                      style={{
                        left: slotStyles.left,
                        zIndex: slotStyles.zIndex,
                        transitionDuration: prefersReducedMotion || shouldTeleportToHidden ? "0ms" : "850ms",
                        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                      }}
                    >
                      <motion.div
                        className="w-full transition-[filter] duration-700"
                        initial={false}
                        animate={{
                          opacity: slotStyles.opacity,
                          scale: slotStyles.scale,
                        }}
                        transition={
                          prefersReducedMotion
                            ? { duration: 0 }
                            : { duration: 0.85, ease: [0.22, 1, 0.36, 1] }
                        }
                        style={{
                          filter: slotStyles.filter,
                        }}
                      >
                        <img
                          src={tool.src}
                          alt={tool.alt}
                          className="h-auto w-full object-contain"
                          loading="lazy"
                          decoding="async"
                        />
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

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
