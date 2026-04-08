import type { WebsiteShowcaseSlide } from "./index";
import { showcaseMaisonEmberStylesheetHref } from "./assetManifest.js";
import { localizeHtmlShowcase } from "./showcaseAssets";

const maisonEmberHtml = String.raw`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Maison Ember | Fine Dining</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Montserrat:wght@200;300;400;500&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        base: '#0a0a0a',
                        surface: '#121212',
                        surfaceLighter: '#1a1a1a',
                        ember: '#c45a1d',
                        emberLight: '#e07a3e',
                        textPrimary: '#f5f5f5',
                        textSecondary: '#a3a3a3',
                        textMuted: '#666666'
                    },
                    fontFamily: {
                        serif: ['"Cormorant Garamond"', 'serif'],
                        sans: ['Montserrat', 'sans-serif'],
                    },
                    backgroundImage: {
                        'hero': "url('https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2500&auto=format&fit=crop')",
                        'private-dining': "url('https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2500&auto=format&fit=crop')",
                    }
                }
            }
        }
    </script>
    <style>
        body {
            background-color: #0a0a0a;
            color: #f5f5f5;
            overflow-x: hidden;
            text-rendering: optimizeLegibility;
        }

        img {
            display: block;
            max-width: 100%;
        }

        .noise-overlay {
            display: none;
        }

        .reveal {
            opacity: 1;
            transform: none;
            transition: none;
        }

        .reveal.active {
            opacity: 1;
            transform: none;
        }

        .delay-100 { transition-delay: 100ms; }
        .delay-200 { transition-delay: 200ms; }
        .delay-300 { transition-delay: 300ms; }

        .hover-line {
            position: relative;
        }

        .hover-line::after {
            content: '';
            position: absolute;
            width: 0;
            height: 1px;
            bottom: -4px;
            left: 50%;
            background-color: #c45a1d;
            transition: all 0.4s ease;
            transform: translateX(-50%);
        }

        .hover-line:hover::after {
            width: 100%;
        }

        .parallax-bg {
            background-attachment: scroll;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }

        .img-zoom-container {
            overflow: hidden;
        }

        .img-zoom {
            transition: transform 1.5s ease;
        }

        .img-zoom-container:hover .img-zoom {
            transform: scale(1.05);
        }

        .hero-title {
            text-shadow: none;
            backface-visibility: visible;
            transform: none;
        }

        .private-dining-copy,
        .private-dining-copy .private-dining-eyebrow,
        .private-dining-copy .private-dining-body {
            color: #ffffff;
        }

        .concept-copy,
        .concept-copy p {
            color: #ffffff !important;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.28);
        }

        .concept-copy {
            position: relative;
            z-index: 10;
        }
    </style>
</head>
<body class="font-sans font-light selection:bg-ember selection:text-white">
    <div class="noise-overlay"></div>

    <nav id="navbar" class="fixed w-full z-50 transition-all duration-500 py-4 md:py-6 px-4 sm:px-6 md:px-10 lg:px-16 border-b border-white/5">
        <div class="max-w-[1600px] mx-auto flex flex-col gap-4 md:flex-row md:justify-between md:items-center relative">
            <div class="flex flex-wrap justify-center md:justify-start gap-4 md:gap-10 text-[10px] sm:text-xs tracking-[0.2em] uppercase text-textPrimary/80 order-2 md:order-1">
                <a href="#" class="hover-line hover:text-white transition-colors">Menu</a>
                <a href="#" class="hover-line hover:text-white transition-colors">Private Dining</a>
                <a href="#" class="hover-line hover:text-white transition-colors">Philosophy</a>
            </div>

            <div class="text-center order-1 md:order-2 md:absolute md:left-1/2 md:-translate-x-1/2">
                <a href="#" class="font-serif text-2xl sm:text-3xl tracking-[0.25em] sm:tracking-widest text-white">MAISON EMBER</a>
            </div>

            <div class="flex flex-col sm:flex-row items-center justify-center md:justify-end gap-3 sm:gap-6 md:gap-10 text-[10px] sm:text-xs tracking-[0.2em] uppercase text-textPrimary/80 order-3">
                <a href="#" class="hover-line hover:text-white transition-colors">Gallery</a>
                <a href="#" class="border border-ember/60 text-ember px-5 sm:px-8 py-3 hover:bg-ember hover:text-white transition-all duration-300">
                    Reservations
                </a>
            </div>
        </div>
    </nav>

    <header class="relative h-screen w-full flex items-center justify-center parallax-bg bg-hero">
        <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-base"></div>

        <div class="relative z-10 text-center flex flex-col items-center mt-16 md:mt-20 px-5 sm:px-8">
            <span class="text-ember font-sans tracking-[0.3em] uppercase text-sm mb-6 reveal">Established 2026</span>
            <h1 class="hero-title font-serif text-5xl sm:text-7xl md:text-9xl tracking-[0.12em] sm:tracking-wider text-white mb-6 md:mb-8 reveal delay-100">
                Forged in Fire.
            </h1>
            <p class="font-serif italic text-xl sm:text-2xl md:text-3xl text-textSecondary max-w-2xl mx-auto mb-10 md:mb-12 reveal delay-200">
                An exploration of smoke, wood, and time.
            </p>
            <a href="#concept" class="group flex flex-col items-center gap-4 reveal delay-300">
                <span class="text-xs font-sans tracking-[0.2em] uppercase text-textSecondary group-hover:text-ember transition-colors duration-300">Discover</span>
                <div class="w-[1px] h-16 bg-textSecondary/30 group-hover:bg-ember transition-colors duration-300 relative overflow-hidden">
                    <div class="absolute top-0 left-0 w-full h-full bg-ember transform -translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
                </div>
            </a>
        </div>
    </header>

    <section id="concept" class="py-24 md:py-40 px-5 sm:px-8 md:px-16 max-w-[1600px] mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
            <div class="md:col-span-5 reveal concept-copy">
                <span class="text-ember text-xs tracking-[0.2em] uppercase block mb-6">Our Philosophy</span>
                <h2 class="font-serif text-4xl sm:text-5xl md:text-6xl text-white mb-8 md:mb-10 leading-tight">The Alchemy <br>of the Hearth.</h2>
                <div class="font-sans space-y-5 md:space-y-6 leading-relaxed text-sm md:text-base pr-0 md:pr-8">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <a href="#" class="inline-block mt-12 text-xs tracking-[0.2em] uppercase text-white hover-line">Read Our Story</a>
            </div>

            <div class="md:col-span-7 relative h-[420px] sm:h-[540px] md:h-[800px] w-full reveal delay-200">
                <div class="absolute top-0 right-0 w-[88%] md:w-[85%] h-[76%] md:h-[90%] img-zoom-container bg-surfaceLighter">
                    <img src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1200&auto=format&fit=crop" alt="Steak on grill" class="w-full h-full object-cover img-zoom opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000">
                </div>
                <div class="absolute bottom-0 left-0 w-[52%] md:w-[50%] h-[42%] md:h-[55%] border-4 md:border-8 border-base img-zoom-container bg-surface">
                    <img src="https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=800&auto=format&fit=crop" alt="Restaurant Interior" class="w-full h-full object-cover img-zoom opacity-90">
                </div>
            </div>
        </div>
    </section>

    <section class="py-24 md:py-40 bg-surface border-y border-white/5">
        <div class="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-16 text-center mb-16 md:mb-24 reveal">
            <h2 class="font-serif text-4xl sm:text-5xl md:text-6xl text-white mb-6">The Ember Tasting</h2>
            <p class="font-serif italic text-xl text-textSecondary">A twelve-course journey through the elements.</p>
        </div>

        <div class="max-w-[1600px] mx-auto px-5 sm:px-8 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            <div class="group cursor-pointer reveal delay-100">
                <div class="w-full aspect-[4/5] overflow-hidden mb-6 bg-base">
                    <img src="https://images.unsplash.com/photo-1559314809-0d155014e29e?q=80&w=800&auto=format&fit=crop" alt="Dish 1" class="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100">
                </div>
                <div class="text-center">
                    <h3 class="font-serif text-2xl text-white mb-2">Charred Langoustine</h3>
                    <p class="text-xs font-sans text-textSecondary tracking-widest uppercase">Smoked Butter · Sea Fennel</p>
                </div>
            </div>

            <div class="group cursor-pointer reveal delay-200 md:mt-16">
                <div class="w-full aspect-[4/5] overflow-hidden mb-6 bg-base">
                    <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop" alt="Dish 2" class="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100">
                </div>
                <div class="text-center">
                    <h3 class="font-serif text-2xl text-white mb-2">Aged Venison</h3>
                    <p class="text-xs font-sans text-textSecondary tracking-widest uppercase">Pine Ash · Fermented Blackberry</p>
                </div>
            </div>

            <div class="group cursor-pointer reveal delay-300">
                <div class="w-full aspect-[4/5] overflow-hidden mb-6 bg-base">
                    <img src="https://images.unsplash.com/photo-1580828369019-2220f188ab66?q=80&w=800&auto=format&fit=crop" alt="Dish 3" class="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100">
                </div>
                <div class="text-center">
                    <h3 class="font-serif text-2xl text-white mb-2">Burnt Honey</h3>
                    <p class="text-xs font-sans text-textSecondary tracking-widest uppercase">Toasted Hay · Milk Skin</p>
                </div>
            </div>
        </div>

        <div class="text-center mt-14 md:mt-24 reveal">
            <a href="#" class="inline-block border border-white/20 px-8 sm:px-10 py-4 text-xs tracking-[0.2em] uppercase text-white hover:bg-white hover:text-base transition-colors duration-500">
                View Full Menu
            </a>
        </div>
    </section>

    <section class="py-24 md:py-40 px-5 sm:px-8 md:px-16 max-w-[1600px] mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div class="relative aspect-[3/4] img-zoom-container reveal">
                <img src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1000&auto=format&fit=crop" alt="Executive Chef" class="w-full h-full object-cover img-zoom grayscale opacity-80">
                <div class="absolute inset-0 bg-gradient-to-t from-base to-transparent opacity-60"></div>
                <div class="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                    <p class="text-white font-serif text-2xl md:text-3xl">Elias Thorne</p>
                    <p class="text-ember text-xs tracking-[0.2em] uppercase mt-2">Executive Chef</p>
                </div>
            </div>

            <div class="reveal delay-200">
                <svg class="w-12 h-12 text-ember mb-8 opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                <h2 class="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-8 md:mb-10 leading-snug">
                    "Fire is not just a cooking method; it is an ingredient. It requires respect, patience, and an understanding of its raw power."
                </h2>
                <div class="font-sans text-textSecondary space-y-6 leading-relaxed text-sm">
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                    <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section class="relative py-28 md:py-48 w-full flex items-center justify-center parallax-bg bg-private-dining border-y border-white/10">
        <div class="absolute inset-0 bg-black/70"></div>

        <div class="private-dining-copy relative z-10 text-center max-w-3xl px-8 reveal">
            <span class="private-dining-eyebrow text-xs tracking-[0.2em] uppercase block mb-6">Exclusive Events</span>
            <h2 class="font-serif text-4xl sm:text-5xl md:text-6xl text-white mb-8">The Obsidian Room</h2>
            <p class="private-dining-body font-sans leading-relaxed text-sm md:text-base mb-12">
                Elevate your next gathering in our private dining space. Tailored menus, dedicated sommeliers, and an atmosphere of unparalleled intimacy for up to 14 guests.
            </p>
            <a href="#" class="inline-block border border-ember/60 text-ember px-8 sm:px-10 py-4 text-xs tracking-[0.2em] uppercase hover:bg-ember hover:text-white transition-all duration-500">
                Inquire Now
            </a>
        </div>
    </section>

    <section class="py-24 md:py-32 bg-surfaceLighter">
        <div class="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-16">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 text-center">
                <div class="reveal">
                    <div class="flex justify-center gap-1 text-ember mb-6">
                        <span class="text-xl">★</span><span class="text-xl">★</span><span class="text-xl">★</span>
                    </div>
                    <p class="font-serif text-2xl text-white mb-4">"A masterclass in primal elegance. Maison Ember is unmatched."</p>
                    <span class="font-sans text-xs tracking-widest uppercase text-textMuted">— The Culinary Review</span>
                </div>

                <div class="reveal delay-100">
                    <div class="flex justify-center gap-1 text-ember mb-6">
                        <span class="text-xl">★</span><span class="text-xl">★</span><span class="text-xl">★</span>
                    </div>
                    <p class="font-serif text-2xl text-white mb-4">"Thorne's manipulation of smoke borders on the theatrical."</p>
                    <span class="font-sans text-xs tracking-widest uppercase text-textMuted">— City Dining Guide</span>
                </div>

                <div class="reveal delay-200">
                    <div class="flex justify-center gap-1 text-ember mb-6">
                        <span class="text-xl">★</span><span class="text-xl">★</span><span class="text-xl">★</span>
                    </div>
                    <p class="font-serif text-2xl text-white mb-4">"The best new addition to the city's fine dining landscape."</p>
                    <span class="font-sans text-xs tracking-widest uppercase text-textMuted">— Gastronomy Weekly</span>
                </div>
            </div>
        </div>
    </section>

    <section class="py-24 md:py-40 bg-base text-center px-5 sm:px-8 relative overflow-hidden">
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] md:w-[800px] md:h-[800px] bg-ember/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div class="relative z-10 reveal">
            <h2 class="font-serif text-4xl sm:text-5xl md:text-7xl text-white mb-8">Secure Your Experience</h2>
            <p class="font-sans text-textSecondary text-sm tracking-widest uppercase mb-12">Reservations open 60 days in advance.</p>
            <a href="#" class="inline-block bg-white text-base font-semibold px-8 sm:px-12 py-5 text-xs tracking-[0.2em] uppercase hover:bg-ember hover:text-white transition-all duration-500">
                Book a Table
            </a>
        </div>
    </section>

    <footer class="bg-[#050505] pt-20 md:pt-24 pb-12 px-5 sm:px-8 md:px-16 border-t border-white/5">
        <div class="max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 mb-16 md:mb-24">
            <div class="col-span-1">
                <a href="#" class="font-serif text-3xl tracking-widest text-white block mb-6">MAISON EMBER</a>
                <p class="font-sans text-xs text-textMuted leading-relaxed max-w-[250px]">
                    An exploration of smoke, wood, and time. Redefining modern dining through the ancient art of the hearth.
                </p>
            </div>

            <div class="col-span-1 font-sans text-sm text-textSecondary space-y-3">
                <h4 class="text-white text-xs tracking-[0.2em] uppercase mb-6">Contact</h4>
                <p>124 Culinary Avenue</p>
                <p>Metropolis, NY 10001</p>
                <p class="pt-4 hover:text-white transition-colors cursor-pointer">+1 (555) 019-8472</p>
                <p class="hover:text-white transition-colors cursor-pointer">reservations@maisonember.com</p>
            </div>

            <div class="col-span-1 font-sans text-sm text-textSecondary space-y-3">
                <h4 class="text-white text-xs tracking-[0.2em] uppercase mb-6">Hours</h4>
                <p class="text-white">Tuesday - Saturday</p>
                <p>Dinner: 5:30 PM - 10:30 PM</p>
                <p class="pt-4 text-white">Sunday & Monday</p>
                <p>Closed</p>
            </div>

            <div class="col-span-1">
                <h4 class="text-white text-xs tracking-[0.2em] uppercase mb-6">Newsletter</h4>
                <p class="font-sans text-xs text-textSecondary mb-6">Subscribe to receive updates on seasonal menus and exclusive events.</p>
                <form class="flex flex-col sm:flex-row gap-3 sm:gap-0 border-b border-textSecondary/30 focus-within:border-ember transition-colors">
                    <input type="email" placeholder="Your email address" class="bg-transparent text-sm w-full py-2 text-white placeholder-textMuted focus:outline-none">
                    <button type="submit" class="text-xs tracking-widest uppercase text-white hover:text-ember transition-colors">Subscribe</button>
                </form>
            </div>
        </div>

        <div class="max-w-[1600px] mx-auto flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center font-sans text-[10px] tracking-widest uppercase text-textMuted border-t border-white/5 pt-8 text-center lg:text-left">
            <p>&copy; 2026 Maison Ember. All Rights Reserved.</p>
            <div class="flex flex-wrap justify-center gap-4 sm:gap-8">
                <a href="#" class="hover:text-white transition-colors">Instagram</a>
                <a href="#" class="hover:text-white transition-colors">Facebook</a>
                <a href="#" class="hover:text-white transition-colors">Press</a>
            </div>
            <div class="flex flex-wrap justify-center gap-4 sm:gap-8">
                <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
            </div>
        </div>
    </footer>

    <script>
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-base/90', 'backdrop-blur-md', 'py-4');
                navbar.classList.remove('py-6', 'border-white/5');
            } else {
                navbar.classList.remove('bg-base/90', 'backdrop-blur-md', 'py-4');
                navbar.classList.add('py-6', 'border-white/5');
            }
        });

        const revealElements = document.querySelectorAll('.reveal');

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        });

        revealElements.forEach(el => revealObserver.observe(el));
    </script>
</body>
</html>
`;

export const maisonEmberSlide: WebsiteShowcaseSlide = {
  id: "maison-ember",
  title: "Maison Ember",
  posterSrc: "/website-showcases/posters/maison-ember.jpg",
  html: localizeHtmlShowcase(maisonEmberHtml, "maison-ember", {
    stylesheetHrefs: [showcaseMaisonEmberStylesheetHref],
    removePatterns: [
      /<script src="https:\/\/cdn\.tailwindcss\.com"><\/script>\s*/i,
      /<script>\s*tailwind\.config\s*=\s*\{[\s\S]*?<\/script>\s*/i,
    ],
  }),
  preloadPriority: 15,
};
