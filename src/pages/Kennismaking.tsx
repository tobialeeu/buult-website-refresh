import { FormEvent } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { toast } from "sonner";

export default function Kennismaking() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Bedankt! We bellen je zo snel mogelijk terug.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-2xl">
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Gratis kennismaking</p>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] text-foreground text-balance">
                Plan een gratis kennismakingsgesprek
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
                Vul je contact- en bedrijfsgegevens in, dan bellen we je kort terug om te kijken of er een match is.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-card">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-xl mx-auto rounded-2xl border border-border bg-card p-8 md:p-10 shadow-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-foreground mb-2">
                      Bedrijfsnaam *
                    </label>
                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      required
                      maxLength={100}
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Je bedrijf"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      E-mailadres *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      maxLength={255}
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="je@email.nl"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Telefoonnummer *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      maxLength={20}
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="06 12345678"
                    />
                  </div>

                  <div>
                    <label htmlFor="bestCallTime" className="block text-sm font-medium text-foreground mb-2">
                      Beste tijd om te bellen *
                    </label>
                    <input
                      id="bestCallTime"
                      name="bestCallTime"
                      type="text"
                      required
                      maxLength={100}
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Bijv. morgen tussen 10:00 en 12:00"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-sm hover:bg-accent transition-colors"
                >
                  Bel mij terug
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
