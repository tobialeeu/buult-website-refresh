import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import buultLogo from "@/assets/buult-logo.svg";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Hoe werken wij?", to: "/hoe-werken-wij" },
  { label: "Studies", to: "/studies" },
  { label: "Contact", to: "/contact" },
  { label: "Over ons", to: "/over-ons" },
];

const footerNavItems = [
  ...navItems.filter((item) => item.to !== "/"),
  { label: "Privacy", to: "/privacy" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-3 font-heading text-2xl font-extrabold tracking-tight text-foreground">
          <img
            src={buultLogo}
            alt=""
            aria-hidden="true"
            className="h-9 w-9 md:h-10 md:w-10"
          />
          <span>Buult</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === item.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/gratis-kennismaking"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-accent transition-colors"
          >
            Plan een kennismaking
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-border overflow-hidden"
          >
            <nav className="container flex flex-col gap-4 py-6">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={`text-base font-medium transition-colors ${
                    location.pathname === item.to ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/gratis-kennismaking"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground mt-2"
              >
                Plan een kennismaking
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-surface-dark text-surface-dark-foreground">
      <div className="container py-8 md:py-10">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <Link to="/" className="inline-flex items-center gap-3 font-heading text-xl font-bold">
              <img
                src={buultLogo}
                alt=""
                aria-hidden="true"
                className="h-7 w-7"
              />
              <span>Buult.</span>
            </Link>

            <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 md:justify-end">
              {footerNavItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-sm text-surface-dark-foreground/65 transition-colors hover:text-surface-dark-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="h-px w-full bg-surface-dark-foreground/8" />

          <div className="flex flex-col gap-2 text-xs text-surface-dark-foreground/45 md:flex-row md:items-center md:justify-between">
            <p>(c) {new Date().getFullYear()} Buult. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 md:pt-20">{children}</main>
      <Footer />
    </div>
  );
}
