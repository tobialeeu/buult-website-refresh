import {
  CalendarDays,
  Camera,
  CheckCircle2,
  Code2,
  FileText,
  MessageCircle,
  Users,
  type LucideIcon,
} from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import FinalCtaSection from "@/components/FinalCtaSection";

type ProcessStep = {
  title: string;
  description: string;
  icon: LucideIcon;
  colorClasses: {
    bg: string;
    icon: string;
    number: string;
  };
};

const processSteps: ProcessStep[] = [
  {
    title: "Kennismaking inplannen",
    description: "Inplannen kennismaking + invullen bedrijfsgegevens voor eerste versie website.",
    icon: CalendarDays,
    colorClasses: { bg: "bg-blue-50", icon: "text-blue-600", number: "text-blue-200" },
  },
  {
    title: "Kennismaking + eerste opzet",
    description: "Kennismaking + presentatie eerste opzet bedrijf.",
    icon: FileText,
    colorClasses: { bg: "bg-amber-50", icon: "text-amber-600", number: "text-amber-200" },
  },
  {
    title: "Verdiepende meeting",
    description: "In 2+ uur zetten we in één sessie de richting voor je website scherp.",
    icon: Users,
    colorClasses: { bg: "bg-teal-50", icon: "text-teal-600", number: "text-teal-200" },
  },
  {
    title: "Fotoshoot",
    description: "Optioneel: fotoshoot.",
    icon: Camera,
    colorClasses: { bg: "bg-rose-50", icon: "text-rose-600", number: "text-rose-200" },
  },
  {
    title: "Ontwikkeling website",
    description: "We bouwen de website uit op basis van de gekozen richting en inhoud.",
    icon: Code2,
    colorClasses: { bg: "bg-violet-50", icon: "text-violet-600", number: "text-violet-200" },
  },
  {
    title: "Feedback sessie",
    description: "We lopen alles samen door en scherpen de laatste onderdelen aan.",
    icon: MessageCircle,
    colorClasses: { bg: "bg-orange-50", icon: "text-orange-600", number: "text-orange-200" },
  },
  {
    title: "Eindproduct",
    description: "Eindproduct met verwerkte feedback.",
    icon: CheckCircle2,
    colorClasses: { bg: "bg-emerald-50", icon: "text-emerald-600", number: "text-emerald-200" },
  },
];

export default function HoeWerkenWij() {
  return (
    <Layout>
      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/10 py-12 md:py-16">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">Hoe werken wij?</p>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] text-foreground text-balance">
                Een helder traject van eerste gesprek tot <span className="text-primary">eindproduct</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                We houden het proces overzichtelijk en direct. Eerst scherp krijgen wat jij nodig hebt, daarna
                uitwerken, bouwen en afronden zonder ruis.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="stappenplan" className="bg-card py-16 md:py-20">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Stappenplan</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                Zo werken we jouw website stap voor stap uit
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
                Elke fase heeft een duidelijk doel: afstemmen, verdiepen, bouwen, aanscherpen en netjes opleveren.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === processSteps.length - 1;

              return (
                <AnimatedSection
                  key={step.title}
                  delay={index * 0.05}
                  className={isLast ? "md:col-span-2 md:max-w-[calc(50%-0.625rem)] md:mx-auto" : ""}
                >
                  <article className="relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white px-6 py-6 shadow-[0_22px_60px_-48px_rgba(15,23,42,0.42)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-50px_rgba(15,23,42,0.45)] md:px-7 md:py-7">
                    <span className={`absolute right-4 top-3 text-5xl font-black leading-none select-none ${step.colorClasses.number}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${step.colorClasses.bg}`}>
                      <Icon size={24} strokeWidth={1.8} className={step.colorClasses.icon} />
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-slate-900 md:text-[1.4rem] leading-snug pr-12">
                      {step.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-slate-600">
                      {step.description}
                    </p>
                  </article>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </Layout>
  );
}
