import { useState, FormEvent } from "react";
import { Phone, Mail, Linkedin } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { toast } from "sonner";

export default function Contact() {
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agreed) {
      toast.error("Ga akkoord met het privacybeleid om het formulier te versturen.");
      return;
    }
    toast.success("Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op.");
    (e.target as HTMLFormElement).reset();
    setAgreed(false);
  };

  return (
    <Layout>
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-2xl">
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Contact</p>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] text-foreground text-balance">
                Laten we kennismaken
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
                Benieuwd wat Buult voor jouw bedrijf kan betekenen? Neem vrijblijvend contact op - we denken graag met je mee.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-card">
        <div className="container">
          <div className="grid md:grid-cols-5 gap-12 lg:gap-20">
            {/* Form */}
            <AnimatedSection className="md:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Naam *</label>
                    <input
                      type="text"
                      required
                      maxLength={100}
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Je naam"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">E-mailadres *</label>
                    <input
                      type="email"
                      required
                      maxLength={255}
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="je@email.nl"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Telefoonnummer</label>
                    <input
                      type="tel"
                      maxLength={20}
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="06 12345678"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Bedrijfsnaam</label>
                    <input
                      type="text"
                      maxLength={100}
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Je bedrijf"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Bericht *</label>
                  <textarea
                    required
                    maxLength={1000}
                    rows={5}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Vertel kort waar we je mee kunnen helpen..."
                  />
                </div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-input text-primary focus:ring-ring"
                  />
                  <span className="text-sm text-muted-foreground">
                    Ik ga akkoord met het{" "}
                    <a href="/privacy" className="text-primary underline hover:no-underline">privacybeleid</a>.
                  </span>
                </label>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-sm hover:bg-accent transition-colors"
                >
                  Verstuur bericht
                </button>
              </form>
            </AnimatedSection>

            {/* Sidebar */}
            <AnimatedSection delay={0.15} className="md:col-span-2">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-6">Direct contact</h3>
                  <div className="space-y-5">
                    <a href="tel:0637439994" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Phone size={18} className="text-primary" />
                      </div>
                      <span>06 37 43 99 94</span>
                    </a>
                    <a href="mailto:tobiasvanleeuwen@outlook.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Mail size={18} className="text-primary" />
                      </div>
                      <span className="break-all">tobiasvanleeuwen@outlook.com</span>
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-6">LinkedIn</h3>
                  <div className="space-y-4">
                    <a
                      href="https://www.linkedin.com/in/tobias-van-leeuwen-583511263/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Linkedin size={18} className="text-primary" />
                      </div>
                      <span>Tobias van Leeuwen</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/joachimvanleeuwen/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Linkedin size={18} className="text-primary" />
                      </div>
                      <span>Joachim van Leeuwen</span>
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
}
