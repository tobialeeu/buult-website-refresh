import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

export default function Privacy() {
  return (
    <Layout>
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] text-foreground">
                Privacybeleid
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Buult hecht waarde aan de privacy van haar bezoekers en klanten. In dit privacybeleid leggen wij uit welke persoonsgegevens wij verzamelen, waarom en hoe wij daarmee omgaan.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto prose-custom">
            <AnimatedSection>
              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Bedrijfsgegevens</h2>
                  <div className="text-muted-foreground leading-relaxed space-y-1">
                    <p>Buult</p>
                    <p>Zevenenderdrift 14, Laren</p>
                    <p>E-mail: tobiasvanleeuwen@outlook.com</p>
                    <p>KVK-nummer: <span className="italic text-muted-foreground/60">[wordt aangevuld]</span></p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Welke gegevens verzamelen wij?</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Wij verzamelen uitsluitend persoonsgegevens die je zelf aan ons verstrekt, bijvoorbeeld via het contactformulier op onze website. Dit betreft:
                  </p>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    <li>Naam</li>
                    <li>E-mailadres</li>
                    <li>Telefoonnummer</li>
                    <li>Bedrijfsnaam</li>
                    <li>Inhoud van je bericht</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Waarom verwerken wij deze gegevens?</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Wij gebruiken je gegevens uitsluitend om contact met je op te nemen naar aanleiding van je vraag of aanvraag, om een offerte of voorstel op te stellen, en om onze dienstverlening te kunnen uitvoeren. We gebruiken je gegevens niet voor marketingdoeleinden zonder jouw toestemming.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Bewaartermijn</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Wij bewaren je persoonsgegevens niet langer dan noodzakelijk voor het doel waarvoor ze zijn verzameld. Contactgegevens worden na afronding van het project of de aanvraag maximaal 2 jaar bewaard, tenzij wettelijke verplichtingen een langere bewaartermijn vereisen.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Delen met derden</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Buult deelt je persoonsgegevens niet met derden, tenzij dit noodzakelijk is voor de uitvoering van onze dienstverlening (bijvoorbeeld hosting) of wanneer wij hiertoe wettelijk verplicht zijn. Wij verkopen je gegevens nooit aan derden.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Cookies</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Onze website maakt gebruik van functionele cookies die noodzakelijk zijn voor het goed functioneren van de website. Wij plaatsen geen tracking- of marketingcookies zonder jouw uitdrukkelijke toestemming.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Jouw rechten</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Op grond van de Algemene Verordening Gegevensbescherming (AVG) heb je het recht om:
                  </p>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    <li>Inzage te vragen in je persoonsgegevens</li>
                    <li>Je gegevens te laten corrigeren of verwijderen</li>
                    <li>Bezwaar te maken tegen de verwerking van je gegevens</li>
                    <li>Je gegevens over te laten dragen (dataportabiliteit)</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    Neem voor vragen of verzoeken contact op via{" "}
                    <a href="mailto:tobiasvanleeuwen@outlook.com" className="text-primary underline hover:no-underline">
                      tobiasvanleeuwen@outlook.com
                    </a>.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Wijzigingen</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Buult behoudt zich het recht voor om dit privacybeleid te wijzigen. De meest actuele versie is altijd beschikbaar op deze pagina. Laatst bijgewerkt: maart 2026.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
}
