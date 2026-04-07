import { Link } from "react-router-dom";
import { Activity, ArrowRight, Check, Globe, ShoppingCart, type LucideIcon } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type PricingPlan = {
  title: string;
  price: string;
  pricePrefix?: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  cta: string;
  href: string;
  popular: boolean;
};

const pricingPlans: PricingPlan[] = [
  {
    title: "Website Quickscan",
    price: "€ 99,-",
    description: "Een uitgebreide analyse van je huidige website met concrete verbeterpunten.",
    icon: Activity,
    features: [
      "Uitgebreide analyse van je huidige site",
      "Concrete verbeterpunten voor structuur en vertrouwen",
      "Snel inzicht in gemiste online kansen",
      "Heldere rapportage in PDF",
      "Videocall om de uitkomsten samen door te nemen",
    ],
    cta: "Vraag quickscan aan",
    href: "/contact?pakket=website-quickscan",
    popular: false,
  },
  {
    title: "Complete Website",
    price: "€ 799,-",
    pricePrefix: "vanaf",
    description: "Een op maat gemaakte, snelle en converterende website voor jouw bedrijf.",
    icon: Globe,
    features: [
      "Op maat gemaakt design",
      "Snel en volledig responsief",
      "Conversiegericht ingericht",
      "SEO-geoptimaliseerde basis",
      "Gratis eerste versie voordat je beslist",
    ],
    cta: "Vraag gratis eerste versie aan",
    href: "/contact?pakket=complete-website",
    popular: true,
  },
  {
    title: "Complete Webshop",
    price: "€ 3499,-",
    pricePrefix: "vanaf",
    description: "Een professionele webshop, klaar voor de verkoop en gebouwd om te groeien.",
    icon: ShoppingCart,
    features: [
      "Alles van de Complete Website",
      "Veilige betaalmethodes zoals iDEAL",
      "Voorraad- en orderbeheer",
      "Klaar om direct te verkopen",
      "Gratis eerste versie voordat je beslist",
    ],
    cta: "Vraag gratis eerste versie aan",
    href: "/contact?pakket=complete-webshop",
    popular: false,
  },
];


export default function Tarieven() {
  return (
    <Layout>
      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/10 py-12 md:py-16">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">Tarieven</p>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] text-foreground text-balance">
                Een oplossing voor <span className="text-primary">ieder budget</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Of je nu net begint of al jaren onderneemt, we hebben een pakket dat past bij jouw fase.
                We werken met vaste projectprijzen, zodat je vooraf weet waar je aan toe bent.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-card py-16 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <AnimatedSection key={plan.title} className="flex h-full" delay={index * 0.08}>
                <Card
                  className={`relative flex w-full flex-col rounded-[2rem] border bg-white/95 transition-all duration-300 hover:-translate-y-2 ${
                    plan.popular
                      ? "border-primary shadow-[0_30px_90px_-55px_rgba(37,99,235,0.7)]"
                      : "border-border/80 shadow-card hover:shadow-card-hover"
                  }`}
                >
                  {plan.popular ? (
                    <Badge className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 px-3 py-1">
                      Meest gekozen
                    </Badge>
                  ) : null}

                  <CardHeader className="space-y-4 p-7 pb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                      <plan.icon className="h-7 w-7 text-primary" />
                    </div>

                    <div>
                      <CardTitle className="text-2xl text-foreground">{plan.title}</CardTitle>
                      <div className="mt-4 flex min-h-[4.5rem] items-end">
                        {plan.pricePrefix ? (
                          <div className="flex flex-col">
                            <span className="text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">
                              {plan.pricePrefix}
                            </span>
                            <span className="text-4xl font-extrabold tracking-tight text-foreground">
                              {plan.price}
                            </span>
                          </div>
                        ) : (
                          <span className="text-4xl font-extrabold tracking-tight text-foreground">{plan.price}</span>
                        )}
                      </div>
                    </div>

                    <CardDescription className="text-base leading-relaxed text-muted-foreground">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1 px-7 pb-6 pt-0">
                    <ul className="space-y-4">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                            <Check className="h-4 w-4 text-primary" />
                          </span>
                          <span className="leading-relaxed text-slate-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="p-7 pt-0">
                    <Button
                      asChild
                      className="w-full rounded-xl py-6 text-base font-semibold"
                      variant={plan.popular ? "default" : "outline"}
                    >
                      <Link to={plan.href}>
                        {plan.cta}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card pb-20 md:pb-24">
        <div className="container">
          <AnimatedSection delay={0.2}>
            <div className="mx-auto max-w-3xl rounded-[2rem] border border-border/80 bg-slate-50 px-6 py-8 text-center shadow-card md:px-10 md:py-10">
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">Heb je specifieke wensen?</h2>
              <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                De exacte prijs hangt af van jouw wensen, inhoud en functionaliteiten. We denken graag met je mee
                en maken een voorstel dat past bij je bedrijf.
              </p>

              <div className="mt-8 flex justify-center">
                <Button asChild size="lg" className="rounded-xl px-8">
                  <Link to="/contact?pakket=offerte-op-maat">
                    Vraag een vrijblijvende offerte aan
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <p className="mt-5 text-sm italic text-muted-foreground">
                Heldere prijsafspraken, zonder verrassingen achteraf.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
