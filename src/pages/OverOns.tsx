import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import overOnsImg from "../../over_ons_afbeelding-97eZ1EW3.png";

const values = [
  {
    title: "Hard werken",
    text: "We zetten ons graag volledig in om een mooi bedrijf neer te zetten dat echte waarde levert voor klanten en medewerkers.",
  },
  {
    title: "Ondernemend denken",
    text: "Voor ons gaat het niet alleen om het maken van een website, maar om het bouwen van iets dat echt past bij een bedrijf en bijdraagt aan groei, uitstraling en vertrouwen.",
  },
  {
    title: "Goede samenwerking",
    text: "We geloven in korte lijnen, eerlijk contact en samen toewerken naar een resultaat waar iedereen enthousiast over is.",
  },
];

export default function OverOns() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-2xl">
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Over ons</p>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] text-foreground text-balance">
                Twee broers met een grote passie voor ondernemen
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
                Wij zijn Joachim (26) en Tobias (23) van Leeuwen. We vinden het geweldig om samen iets op te bouwen en zetten ons graag volledig in om een mooi bedrijf neer te zetten dat echte waarde levert voor klanten en medewerkers.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Photo + Story */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <img
                  src={overOnsImg}
                  alt="Joachim en Tobias van Leeuwen - oprichters van Buult"
                  className="rounded-2xl shadow-card w-full object-cover object-[60%_center] aspect-[4/5]"
                  width={800}
                  height={1024}
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Joachim (26) & Tobias (23) van Leeuwen
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Wij zijn Joachim (26) en Tobias (23) van Leeuwen, twee broers met een grote passie voor ondernemen. We vinden het geweldig om samen iets op te bouwen en zetten ons graag volledig in om een mooi bedrijf neer te zetten dat echte waarde levert voor klanten en medewerkers.
                  </p>
                  <p>
                    Wat ons kenmerkt, is dat we hard werken, ondernemend denken en veel plezier halen uit het proces. We vinden een goede samenwerking enorm belangrijk, zowel intern als met onze klanten. Daarom geloven we in korte lijnen, eerlijk contact en samen toewerken naar een resultaat waar iedereen enthousiast over is.
                  </p>
                  <p>
                    Voor ons gaat het niet alleen om het maken van een website, maar om het bouwen van iets dat echt past bij een bedrijf en bijdraagt aan groei, uitstraling en vertrouwen.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
              Waar wij voor staan
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <div className="rounded-xl border border-border bg-card p-8 shadow-card">
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Benieuwd wat we voor jou kunnen betekenen?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Plan een vrijblijvende kennismaking en ontdek hoe wij jouw online aanwezigheid kunnen versterken.
              </p>
              <Link
                to="/gratis-kennismaking"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-sm hover:bg-accent transition-colors"
              >
                Neem contact op <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
