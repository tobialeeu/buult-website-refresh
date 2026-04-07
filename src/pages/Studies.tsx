import { Link } from "react-router-dom";
import {
  ArrowRight,
  HelpCircle,
  ShieldOff,
  Clock,
  Phone,
  Users,
  type LucideIcon,
} from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

type Problem = {
  title: string;
  description: string;
  icon: LucideIcon;
  colorClasses: {
    bg: string;
    icon: string;
    number: string;
  };
};

const problems: Problem[] = [
  {
    title: "Je beantwoordt steeds dezelfde basisvragen",
    description:
      "Je website zou die vragen moeten beantwoorden, niet jij.",
    icon: HelpCircle,
    colorClasses: {
      bg: "bg-blue-50",
      icon: "text-blue-600",
      number: "text-blue-200",
    },
  },
  {
    title: "Klanten twijfelen aan je professionaliteit",
    description:
      "Mensen beoordelen je bedrijf op hoe je website eruitziet.",
    icon: ShieldOff,
    colorClasses: {
      bg: "bg-amber-50",
      icon: "text-amber-600",
      number: "text-amber-200",
    },
  },
  {
    title: "Je verliest klanten buiten openingstijden",
    description:
      "Mensen zoeken 's avonds en in het weekend. Zonder goede website ben je dan onzichtbaar.",
    icon: Clock,
    colorClasses: {
      bg: "bg-rose-50",
      icon: "text-rose-600",
      number: "text-rose-200",
    },
  },
  {
    title: "Je bent afhankelijk van bellen en WhatsApp",
    description:
      "Elk nieuw contact loopt via jou persoonlijk. Dat schaalt niet.",
    icon: Phone,
    colorClasses: {
      bg: "bg-teal-50",
      icon: "text-teal-600",
      number: "text-teal-200",
    },
  },
  {
    title: "Mond-tot-mondreclame werkt minder goed",
    description:
      "Mensen zoeken je eerst online op. Als je website niet overtuigt, verlies je ze alsnog.",
    icon: Users,
    colorClasses: {
      bg: "bg-violet-50",
      icon: "text-violet-600",
      number: "text-violet-200",
    },
  },
];

export default function Studies() {
  return (
    <Layout>
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-2xl">
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Herken je dit?</p>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] text-foreground text-balance">
                Zonder goede website loop je <span className="text-primary">klanten mis</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
                Dit zijn de problemen die we bij bijna elk bedrijf tegenkomen. Herkenbaar? Dan is het tijd voor een website die voor je werkt.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-card">
        <div className="container">
          <div className="mx-auto max-w-5xl grid grid-cols-1 gap-5 md:grid-cols-2">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              const isLast = index === problems.length - 1;

              return (
                <AnimatedSection
                  key={problem.title}
                  delay={index * 0.06}
                  className={isLast ? "md:col-span-2 md:max-w-[calc(50%-0.625rem)] md:mx-auto" : ""}
                >
                  <article className="relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white px-6 py-6 shadow-[0_22px_60px_-48px_rgba(15,23,42,0.42)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-50px_rgba(15,23,42,0.45)] md:px-7 md:py-7">
                    <span className={`absolute right-4 top-3 text-5xl font-black leading-none select-none ${problem.colorClasses.number}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${problem.colorClasses.bg}`}>
                      <Icon size={24} strokeWidth={1.8} className={problem.colorClasses.icon} />
                    </div>

                    <h2 className="mt-5 text-xl font-bold text-slate-900 md:text-[1.4rem] leading-snug pr-12">
                      {problem.title}
                    </h2>
                    <p className="mt-2 leading-relaxed text-slate-600">
                      {problem.description}
                    </p>
                  </article>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-card">
        <div className="container">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-surface-dark px-6 py-8 text-surface-dark-foreground shadow-[0_30px_90px_-48px_rgba(15,23,42,0.9)] md:px-10 md:py-10">
              <div className="pointer-events-none absolute left-0 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
              <div className="pointer-events-none absolute bottom-[-4rem] right-[-3rem] h-52 w-52 rounded-full bg-sky-300/20 blur-3xl" />
              <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
                <p className="text-sm font-semibold uppercase tracking-wider text-sky-100/80">Volgende stap</p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                  Herkenbaar? Laten we kijken wat er beter kan.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/76 md:text-lg">
                  Plan een kennismaking en we laten je zien hoe jouw website deze problemen kan oplossen.
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
