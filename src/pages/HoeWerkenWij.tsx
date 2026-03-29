import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  Camera,
  CheckCircle2,
  Code2,
  FileText,
  MessageCircle,
  Users,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

type ProcessStep = {
  title: string;
  description: string;
  focus: string;
  icon: LucideIcon;
  optional?: boolean;
};

const processSteps: ProcessStep[] = [
  {
    title: "Kennismaking inplannen",
    description: "Inplannen kennismaking + invullen bedrijfsgegevens voor eerste versie website.",
    focus: "Planning & input",
    icon: CalendarDays,
  },
  {
    title: "Kennismaking + eerste opzet",
    description: "Kennismaking + presentatie eerste opzet bedrijf.",
    focus: "Richting bepalen",
    icon: FileText,
  },
  {
    title: "Verdiepende meeting",
    description: "Meeting van 2+ uur voor het bespreken van hoe jij je website wil.",
    focus: "Wensen uitwerken",
    icon: Users,
  },
  {
    title: "Fotoshoot",
    description: "Optioneel: fotoshoot.",
    focus: "Beeldmateriaal",
    icon: Camera,
    optional: true,
  },
  {
    title: "Ontwikkeling website",
    description: "We bouwen de website uit op basis van de gekozen richting en inhoud.",
    focus: "Bouw & uitwerking",
    icon: Code2,
  },
  {
    title: "Feedback sessie",
    description: "We lopen alles samen door en scherpen de laatste onderdelen aan.",
    focus: "Aanscherpen",
    icon: MessageCircle,
  },
  {
    title: "Eindproduct",
    description: "Eindproduct met verwerkte feedback.",
    focus: "Oplevering",
    icon: CheckCircle2,
  },
];

const trajectoryHighlights = [
  {
    label: "7 stappen",
    value: "Van kennismaking tot eindproduct",
  },
  {
    label: "2+ uur",
    value: "Ruimte om de site goed uit te denken",
  },
  {
    label: "1 traject",
    value: "Ontwerp, bouw en feedback in een vaste lijn",
  },
];

const expectations = [
  {
    title: "Eerst afstemmen",
    text: "We beginnen met de juiste input verzamelen en snel een eerste richting neerzetten.",
  },
  {
    title: "Daarna verdiepen",
    text: "In een uitgebreide sessie scherpen we structuur, uitstraling en inhoud samen aan.",
  },
  {
    title: "Dan afronden",
    text: "Na de feedbacksessie leveren we de website op met de laatste punten verwerkt.",
  },
];

export default function HoeWerkenWij() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Layout>
      <section className="relative isolate overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-card" />
        <motion.div
          className="pointer-events-none absolute inset-0 hero-sheen"
          animate={prefersReducedMotion ? undefined : { opacity: [0.82, 1, 0.88], scale: [1, 1.02, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute left-[-7rem] top-6 h-[24rem] w-[24rem] rounded-full bg-sky-300/25 blur-3xl"
          animate={prefersReducedMotion ? undefined : { x: [0, 22, -10, 0], y: [0, -16, 8, 0], opacity: [0.68, 0.92, 0.72, 0.68] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute right-[-10rem] top-[-4rem] h-[30rem] w-[30rem] rounded-full bg-primary/20 blur-3xl"
          animate={prefersReducedMotion ? undefined : { x: [0, -22, 12, 0], y: [0, 18, -8, 0], opacity: [0.64, 0.88, 0.74, 0.64] }}
          transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container relative z-10 py-20 md:py-24 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center">
            <AnimatedSection>
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Hoe werken wij?</p>
                <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] text-foreground text-balance md:text-5xl lg:text-6xl">
                  Een helder traject van eerste gesprek tot eindproduct
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                  We houden het proces overzichtelijk en direct. Eerst scherp krijgen wat jij nodig hebt, daarna uitwerken, bouwen en afronden zonder ruis.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {trajectoryHighlights.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-full border border-white/80 bg-white/90 px-4 py-2 text-sm shadow-lg shadow-slate-200/40 backdrop-blur"
                    >
                      <span className="font-semibold text-slate-900">{item.label}</span>
                      <span className="ml-2 text-slate-500">{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link
                    to="/gratis-kennismaking"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-sm hover:bg-accent transition-colors"
                  >
                    Plan een kennismaking
                    <ArrowRight size={18} />
                  </Link>
                  <a
                    href="#stappenplan"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card/90 px-7 py-3.5 text-base font-semibold text-foreground hover:bg-secondary transition-colors"
                  >
                    Bekijk het stappenplan
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.12}>
              <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-[linear-gradient(160deg,rgba(255,255,255,0.96),rgba(239,246,255,0.92))] p-6 shadow-[0_28px_90px_-58px_rgba(15,23,42,0.42)] md:p-7">
                <div className="pointer-events-none absolute inset-x-10 top-0 h-24 rounded-full bg-primary/10 blur-3xl" />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">Trajectoverzicht</p>
                  <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
                    Eerst richting, daarna pas bouwen
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Zo blijft elke stap logisch: input verzamelen, samen verdiepen, bouwen en afronden met feedback verwerkt.
                  </p>

                  <div className="mt-6 grid gap-4">
                    <div className="rounded-[1.6rem] bg-slate-950 px-5 py-5 text-white shadow-[0_24px_60px_-36px_rgba(15,23,42,0.75)]">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200/80">Start</p>
                      <p className="mt-3 text-xl font-semibold leading-tight">
                        Kennismaking, bedrijfsgegevens en een eerste opzet
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-white/72">
                        We starten niet met losse ideeën, maar met een duidelijke basis waarop de rest van het traject kan bouwen.
                      </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-[1.35rem] border border-slate-200/80 bg-white/88 p-4 shadow-[0_18px_45px_-32px_rgba(15,23,42,0.35)]">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">Verdieping</p>
                        <p className="mt-2 text-base font-semibold text-slate-900">2+ uur om alles goed scherp te krijgen</p>
                      </div>
                      <div className="rounded-[1.35rem] border border-slate-200/80 bg-white/88 p-4 shadow-[0_18px_45px_-32px_rgba(15,23,42,0.35)]">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">Afronding</p>
                        <p className="mt-2 text-base font-semibold text-slate-900">Feedback verwerkt tot een net eindproduct</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent via-background/85 to-card" />
      </section>

      <section id="stappenplan" className="bg-card py-16 md:py-20">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-10">
            <AnimatedSection>
              <div className="lg:sticky lg:top-28">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Stappenplan</p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                  Zo werken we jouw website stap voor stap uit
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
                  Elke fase heeft een duidelijk doel: afstemmen, verdiepen, bouwen, aanscherpen en netjes opleveren.
                </p>

                <div className="mt-6 space-y-3">
                  {expectations.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[1.4rem] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(248,250,252,0.96))] p-4 shadow-[0_18px_45px_-32px_rgba(15,23,42,0.35)]"
                    >
                      <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <div className="relative">
              <div className="absolute bottom-5 left-5 top-5 hidden w-px bg-gradient-to-b from-primary/50 via-primary/18 to-primary/5 md:block" />
              <div className="space-y-5">
                {processSteps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <AnimatedSection key={step.title} delay={index * 0.06}>
                      <article className="relative overflow-hidden rounded-[1.8rem] border border-white bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(241,245,249,0.94))] p-6 shadow-[0_24px_70px_-46px_rgba(15,23,42,0.42)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-46px_rgba(15,23,42,0.46)] md:p-7 md:pl-24">
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-primary/0 via-primary/35 to-primary/0" />

                        <div className="mb-5 flex items-start gap-4 md:hidden">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-sky-400 text-white shadow-[0_18px_35px_-18px_rgba(37,99,235,0.75)]">
                            <Icon size={20} />
                          </div>
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-white text-sm font-bold text-primary shadow-sm">
                            {String(index + 1).padStart(2, "0")}
                          </div>
                        </div>

                        <div className="hidden md:block">
                          <div className="absolute left-0 top-1/2 flex -translate-y-1/2 items-center gap-4">
                            <div className="ml-0.5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-sky-400 text-white shadow-[0_18px_35px_-18px_rgba(37,99,235,0.75)] ring-4 ring-card">
                              <Icon size={20} />
                            </div>
                            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 bg-white text-sm font-bold text-primary shadow-sm">
                              {String(index + 1).padStart(2, "0")}
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-3">
                              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
                                Stap {String(index + 1).padStart(2, "0")}
                              </p>
                              {step.optional && (
                                <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                                  Optioneel
                                </span>
                              )}
                            </div>
                            <h3 className="mt-3 text-xl font-bold text-slate-900 md:text-2xl">
                              {step.title}
                            </h3>
                            <p className="mt-3 max-w-2xl leading-relaxed text-slate-600">
                              {step.description}
                            </p>
                          </div>

                          <div className="rounded-[1.25rem] border border-slate-200/80 bg-white/92 px-4 py-3 shadow-[0_18px_40px_-34px_rgba(15,23,42,0.38)] md:min-w-[168px]">
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/70">Focus</p>
                            <p className="mt-2 text-sm font-semibold text-slate-900">{step.focus}</p>
                          </div>
                        </div>
                      </article>
                    </AnimatedSection>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card py-16 md:py-20">
        <div className="container">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-surface-dark px-6 py-8 text-surface-dark-foreground shadow-[0_30px_90px_-48px_rgba(15,23,42,0.9)] md:px-10 md:py-10">
              <div className="pointer-events-none absolute left-0 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
              <div className="pointer-events-none absolute bottom-[-4rem] right-[-3rem] h-52 w-52 rounded-full bg-sky-300/20 blur-3xl" />
              <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-100/80">Volgende stap</p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                  Klaar om dit traject samen te starten?
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/76 md:text-lg">
                  Plan een kennismaking en we zetten de eerste stap meteen goed neer: helder, direct en zonder onnodige omwegen.
                </p>
                <div className="mt-8 flex justify-center">
                  <Link
                    to="/gratis-kennismaking"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white/92 px-8 py-4 text-base font-semibold text-primary shadow-sm shadow-black/10 transition-colors hover:bg-white"
                  >
                    Plan een kennismaking
                    <ArrowRight size={18} />
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
