import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const studies = [
  {
    title: "Baymard Institute",
    source: "Baymard Institute",
    summary:
      "Baymard Institute. (n.d.). Checkout usability: 141,429 UX performance scores benchmarked across 326 e-commerce sites. Baymard Institute.",
    takeaway:
      "Bij veel webshops stopt 70% van de mensen vlak voor de betaling, simpelweg omdat het bestelformulier te onhandig is. Maak je het de klant makkelijker? Dan kun je tot wel 35% meer bestellingen binnenkrijgen.",
    link: "https://baymard.com/research/checkout-usability",
  },
  {
    title: "Stanford Web Credibility Project",
    source: "Stanford Persuasive Technology Lab, Stanford University",
    summary:
      "Fogg, B. J., Kameda, T., Boyd, J., Marshall, J., Sethi, R., Sockol, M., & Trowbridge, T. (2002). Stanford-Makovsky Web credibility study 2002: Investigating what makes Web sites credible today.",
    takeaway:
      "Onderzoek van Stanford liet zien dat mensen de geloofwaardigheid van websites in sterke mate beoordelen op ontwerp en structuur.",
    link: "https://credibility.stanford.edu/pdf/Stanford-MakovskyWebCredStudy2002-prelim.pdf",
  },
  {
    title: "Laadtijd & bouncepercentage",
    source: "Google / Think with Google",
    summary:
      "Google's onderzoek laat zien dat 53% van de mobiele bezoekers een website verlaat als deze langer dan 3 seconden laadt. Elke extra seconde laadtijd verhoogt het bouncepercentage aanzienlijk.",
    takeaway:
      "Snelheid is geen technisch detail - het is een zakelijke prioriteit. Een snelle website houdt bezoekers vast en vergroot de kans op conversie. Buult bouwt daarom altijd met performance als uitgangspunt.",
    link: "https://www.thinkwithgoogle.com/",
  },
];

export default function Studies() {
  return (
    <Layout>
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-2xl">
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Studies & onderbouwing</p>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] text-foreground text-balance">
                Onderzoeken achter onze keuzes
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
                Op deze pagina vind je de onderzoeken uit het document, aangevuld met de extra bronnen die al op de website stonden.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-card">
        <div className="container">
          <div className="grid gap-8 max-w-4xl mx-auto">
            {studies.map((study, i) => (
              <AnimatedSection key={study.title} delay={i * 0.08}>
                <article className="rounded-xl border border-border bg-card p-8 md:p-10 shadow-card hover:shadow-card-hover transition-all duration-300">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-foreground">{study.title}</h2>
                      <p className="text-sm text-primary font-medium mt-1">{study.source}</p>
                    </div>
                    {study.link && (
                      <a
                        href={study.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                        aria-label={`Bron: ${study.source}`}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">{study.summary}</p>
                  <div className="rounded-lg bg-surface p-5">
                    <p className="text-sm font-semibold text-foreground mb-1">Wat dit betekent</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{study.takeaway}</p>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Overtuigd van het belang van goed webdesign?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Laat ons eens kijken naar jouw huidige website. We denken graag vrijblijvend met je mee.
              </p>
              <Link
                to="/gratis-kennismaking"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-sm hover:bg-accent transition-colors"
              >
                Plan een kennismaking <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
