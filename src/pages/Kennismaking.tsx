import { FormEvent, useState } from "react";
import { useLocation } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import TurnstileField from "@/components/TurnstileField";
import { getLeadFormConfig, submitLead } from "@/lib/leadSubmission";
import { toast } from "sonner";

export default function Kennismaking() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileResetKey, setTurnstileResetKey] = useState(0);
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bestCallTime, setBestCallTime] = useState("");
  const location = useLocation();
  const { turnstileSiteKey } = getLeadFormConfig();
  const isTurnstilePending = Boolean(turnstileSiteKey) && !turnstileToken;

  const kennismakingMessage = [
    "Aanvraag gratis kennismakingsgesprek.",
    company ? `Bedrijfsnaam: ${company}` : "",
    email ? `E-mailadres: ${email}` : "",
    phone ? `Telefoonnummer: ${phone}` : "",
    bestCallTime ? `Beste tijd om te bellen: ${bestCallTime}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (isTurnstilePending) {
      toast.error("Rond eerst de spamcontrole af voordat je het formulier verstuurt.");
      return;
    }

    setIsSubmitting(true);

    const result = await submitLead({
      form,
      turnstileToken,
      extraFields: {
        company,
        best_call_time: bestCallTime,
        message: kennismakingMessage,
      },
    });

    setIsSubmitting(false);

    if (!result.ok) {
      toast.error(result.message);
      return;
    }

    toast.success("Bedankt! We bellen je zo snel mogelijk terug.");
    form.reset();
    setCompany("");
    setEmail("");
    setPhone("");
    setBestCallTime("");
    setTurnstileToken("");
    setTurnstileResetKey((currentValue) => currentValue + 1);
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
                <input type="hidden" name="form_type" value="kennismaking" />
                <input type="hidden" name="source_path" value={location.pathname} />
                <input type="hidden" name="message" value={kennismakingMessage} />
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-foreground mb-2">
                      Bedrijfsnaam *
                    </label>
                    <input
                      id="companyName"
                      name="company"
                      type="text"
                      required
                      maxLength={100}
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
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
                      name="best_call_time"
                      type="text"
                      required
                      maxLength={100}
                      value={bestCallTime}
                      onChange={(e) => setBestCallTime(e.target.value)}
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Bijv. morgen tussen 10:00 en 12:00"
                    />
                  </div>
                </div>
                {turnstileSiteKey ? (
                  <TurnstileField
                    siteKey={turnstileSiteKey}
                    resetKey={turnstileResetKey}
                    onTokenChange={setTurnstileToken}
                  />
                ) : null}
                {isTurnstilePending ? (
                  <p className="text-sm text-muted-foreground">
                    Wacht heel even tot de spamcontrole klaar is. Verschijnt er een controle, rond die dan eerst af.
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={isSubmitting || isTurnstilePending}
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Bezig met versturen..." : "Bel mij terug"}
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
