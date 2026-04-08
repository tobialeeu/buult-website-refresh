import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";

type FinalCtaSectionProps = {
  sectionClassName?: string;
};

export default function FinalCtaSection({ sectionClassName = "py-16 md:py-20" }: FinalCtaSectionProps) {
  return (
    <section className={`bg-card ${sectionClassName}`}>
      <div className="container">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-6 py-8 text-primary-foreground shadow-[0_30px_90px_-50px_rgba(37,99,235,0.9)] md:px-10 md:py-10">
            <div className="pointer-events-none absolute left-0 top-0 h-40 w-40 rounded-full bg-white/12 blur-3xl" />
            <div className="pointer-events-none absolute bottom-[-4rem] right-[-3rem] h-52 w-52 rounded-full bg-sky-300/30 blur-3xl" />
            <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-white/78">
                Volgende stap
              </p>
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
  );
}
