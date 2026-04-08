import type { WebsiteShowcaseSlide } from "./index";
import { showcaseFixFastFontsStylesheetHref } from "./assetManifest.js";
import { localizeHtmlShowcase } from "./showcaseAssets";

const fixFastHtml = String.raw`<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FixFast Loodgieters - Frontpage Preview</title>
    <meta name="description" content="Betrouwbare loodgieter in Utrecht en omgeving. Hulp bij lekkages, verstoppingen, CV onderhoud en spoedklussen. Snel ter plaatse en duidelijke prijzen.">

    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700,800&family=Roboto:wght@400;500;700&display=swap');

        :root {
            --primary-blue: #003366;
            --primary-blue-light: #004c99;
            --accent-orange: #fca311;
            --text-dark: #14213d;
            --text-light: #6c757d;
            --background-main: #fdfdfd;
            --background-light: #f8f9fa;
            --white: #ffffff;
            --border-color: #dee2e6;
            --shadow-lg: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            --shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
            --font-heading: 'Montserrat', sans-serif;
            --font-body: 'Roboto', sans-serif;
            --border-radius: 12px;
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
            font-family: var(--font-body);
            color: var(--text-dark);
            background-color: var(--background-main);
            line-height: 1.7;
            font-size: 16px;
        }
        img { display: block; max-width: 100%; }
        .container { width: min(1140px, 100%); margin: 0 auto; padding: 0 20px; }
        section { padding: 90px 0; overflow: hidden; }
        i[class^="bi"], i[class*=" bi-"] {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            line-height: 1;
        }

        .text-center { text-align: center; }
        .section-title { font-family: var(--font-heading); font-size: 2.5rem; color: var(--primary-blue); margin-bottom: 1rem; }
        .section-subtitle { font-size: 1.15rem; color: var(--text-light); max-width: 600px; margin: 0 auto 50px auto; }
        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 14px 32px;
            font-family: var(--font-body);
            font-weight: 700;
            text-decoration: none;
            border-radius: var(--border-radius);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: pointer;
            border: 2px solid transparent;
        }
        .btn-primary { background-color: var(--accent-orange); color: var(--text-dark); box-shadow: 0 4px 14px rgba(252, 163, 17, 0.3); }
        .btn-primary:hover { background-color: #e8920a; transform: translateY(-3px); box-shadow: 0 6px 20px rgba(252, 163, 17, 0.4); }
        .btn-secondary { background-color: rgba(255,255,255,0.1); backdrop-filter: blur(5px); color: var(--white); border-color: var(--white); }
        .btn-secondary:hover { background-color: var(--white); color: var(--text-dark); transform: translateY(-3px); }

        .fade-in { opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease-out, transform 0.8s ease-out; }
        .fade-in.visible { opacity: 1; transform: translateY(0); }

        .main-header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1000;
            background-color: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            box-shadow: var(--shadow-sm);
            padding: 15px 0;
            transition: all 0.3s ease;
        }
        .main-header .container { display: flex; justify-content: space-between; align-items: center; }
        .logo { font-family: var(--font-heading); font-weight: 800; font-size: 1.8rem; color: var(--primary-blue); text-decoration: none; }
        .main-nav ul { display: flex; list-style: none; }
        .main-nav li { margin-left: 30px; }
        .main-nav a { text-decoration: none; color: var(--text-dark); font-weight: 500; transition: color 0.3s ease; position: relative; }
        .main-nav a::after {
            content: ''; position: absolute; width: 0; height: 2px; bottom: -4px; left: 0; background-color: var(--accent-orange); transition: width 0.3s ease;
        }
        .main-nav a:hover::after, .main-nav a.active::after { width: 100%; }
        .main-nav a:hover, .main-nav a.active { color: var(--accent-orange); }

        .hero {
            background: linear-gradient(to right, rgba(0, 51, 102, 0.9), rgba(20, 33, 61, 0.7)), url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1920') no-repeat center center/cover;
            color: var(--white);
            padding: 220px 0 160px 0;
            text-align: center;
        }
        .hero h1 { font-family: var(--font-heading); font-weight: 800; font-size: clamp(2.75rem, 7vw, 4rem); color: var(--white); margin-bottom: 1rem; line-height: 1.1; }
        .hero .subtitle { font-size: 1.25rem; max-width: 700px; margin: 0 auto 40px auto; opacity: 0.9; line-height: 1.6; }
        .typing-effect-container { min-height: 35px; font-size: clamp(1rem, 2.8vw, 1.35rem); color: var(--accent-orange); font-weight: 500; margin-bottom: 30px; }
        .hero .cta-buttons { display: flex; justify-content: center; gap: 20px; }

        .trust-bar { background-color: var(--white); padding: 40px 0; border-bottom: 1px solid var(--border-color); position: relative; z-index: 10; margin-top: -30px; box-shadow: var(--shadow-md); border-radius: var(--border-radius); max-width: 1100px; margin-left: auto; margin-right: auto; }
        .trust-bar .container { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; text-align: center; }
        .trust-item { font-weight: 500; display: flex; flex-direction: column; align-items: center; gap: 10px; color: var(--text-dark); }
        .trust-item i { color: var(--primary-blue); font-size: 1.8rem; }
        .trust-item strong { color: var(--accent-orange); }

        .intro-section { padding-top: 120px; }
        .intro-section .container { display: flex; align-items: center; gap: 60px; }
        .intro-text, .intro-image { flex: 1; }
        .intro-image { position: relative; }
        .intro-image::before {
            content: '';
            position: absolute;
            top: -20px; left: -20px;
            width: 100%; height: 100%;
            background-color: var(--primary-blue);
            border-radius: var(--border-radius);
            z-index: -1;
        }
        .intro-image img { width: 100%; height: 450px; object-fit: cover; border-radius: var(--border-radius); box-shadow: var(--shadow-lg); }

        .services-section { background-color: var(--background-light); }
        .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
        .service-card {
            background-color: var(--white);
            border-radius: var(--border-radius);
            box-shadow: var(--shadow-md);
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            display: flex;
            flex-direction: column;
        }
        .service-card:hover { transform: translateY(-10px); box-shadow: var(--shadow-lg); }
        .service-card .img-wrapper { height: 200px; overflow: hidden; position: relative; }
        .service-card img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
        .service-card:hover img { transform: scale(1.05); }

        .service-card .icon-badge {
            position: absolute;
            bottom: -20px; right: 20px;
            width: 50px; height: 50px;
            background-color: var(--accent-orange);
            color: var(--white);
            border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
            font-size: 1.5rem;
            box-shadow: 0 4px 10px rgba(0,0,0,0.15);
        }

        .service-content { padding: 30px; text-align: left; flex-grow: 1; }
        .service-card h3 { font-size: 1.35rem; margin-bottom: 0.75rem; color: var(--primary-blue); }
        .service-card p { color: var(--text-light); margin-bottom: 20px; }
        .service-link { color: var(--primary-blue); font-weight: 700; text-decoration: none; display: inline-flex; align-items: center; gap: 5px; transition: color 0.2s; }
        .service-link:hover { color: var(--accent-orange); }

        .why-us-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; }
        .why-us-item { display: flex; align-items: flex-start; gap: 20px; padding: 20px; border-radius: var(--border-radius); transition: background-color 0.3s; }
        .why-us-item:hover { background-color: var(--background-light); }
        .why-us-item .icon { font-size: 2.2rem; color: var(--primary-blue); background-color: rgba(0, 51, 102, 0.05); width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; border-radius: 50%; flex-shrink: 0; }
        .why-us-item h3 { font-size: 1.25rem; margin-bottom: 0.5rem; color: var(--text-dark); }
        .why-us-item p { color: var(--text-light); }

        .reviews-section { background-color: var(--primary-blue); color: var(--white); }
        .reviews-section .section-title { color: var(--white); }
        .review-card {
            background-color: var(--white);
            color: var(--text-dark);
            border-radius: var(--border-radius);
            padding: 35px;
            box-shadow: var(--shadow-lg);
            position: relative;
        }
        .review-card::before {
            content: '\201D';
            position: absolute; top: 10px; right: 20px;
            font-size: 5rem; color: rgba(252, 163, 17, 0.15);
            font-family: Georgia, serif; line-height: 1;
        }
        .review-stars { color: var(--accent-orange); margin-bottom: 15px; font-size: 1.1rem; }
        .review-card p { font-style: italic; margin-bottom: 20px; font-size: 1.05rem; position: relative; z-index: 1; }

        .reviewer-info { display: flex; align-items: center; gap: 15px; border-top: 1px solid var(--border-color); padding-top: 15px; }
        .reviewer-avatar { width: 50px; height: 50px; border-radius: 50%; object-fit: cover; }
        .reviewer-details h4 { font-size: 1rem; color: var(--primary-blue); margin-bottom: 0; }
        .reviewer-details span { font-size: 0.85rem; color: var(--text-light); }

        .final-cta {
            background: linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-blue-light) 100%);
            color: var(--white);
            padding: 80px 40px;
            border-radius: var(--border-radius);
            text-align: center;
            box-shadow: var(--shadow-lg);
            position: relative;
            overflow: hidden;
        }
        .final-cta::after {
            content: ''; position: absolute; width: 300px; height: 300px;
            background-color: rgba(255,255,255,0.05); border-radius: 50%;
            top: -100px; right: -50px; pointer-events: none;
        }
        .final-cta h2 { color: var(--white); font-size: 2.2rem; }
        .final-cta p { color: rgba(255,255,255,0.8); font-size: 1.1rem; margin-bottom: 30px; }

        .main-footer {
            background-color: #0f172a;
            color: #cbd5e1;
            padding: 70px 0 20px 0;
        }
        .footer-grid { display: grid; grid-template-columns: 2fr 1fr 2fr 1fr; gap: 40px; margin-bottom: 50px; }
        .footer-col h5 { font-family: var(--font-heading); font-size: 1.2rem; color: var(--accent-orange); margin-bottom: 1.5rem; }
        .footer-col a { text-decoration: none; color: #cbd5e1; transition: color 0.3s; }
        .footer-col a:hover { color: var(--white); padding-left: 5px; }
        .footer-col ul { list-style: none; }
        .footer-col li { margin-bottom: 0.8rem; display: flex; align-items: center; gap: 10px; }
        .footer-col i { color: var(--accent-orange); }
        .footer-bottom { border-top: 1px solid rgba(255,255,255,0.1); padding-top: 25px; text-align: center; font-size: 0.9rem; }

        @media (max-width: 860px) {
            body { font-size: 15px; }
            .container { padding: 0 16px; }
            section { padding: 72px 0; }
            .section-title { font-size: 2rem; }
            .section-subtitle { font-size: 1rem; margin-bottom: 32px; }
            .btn { width: 100%; padding: 14px 22px; }
            .main-header { padding: 12px 0; }
            .main-header .container { flex-wrap: wrap; justify-content: center; gap: 14px; }
            .logo { font-size: 1.55rem; }
            .main-nav { width: 100%; }
            .main-nav ul { flex-wrap: wrap; justify-content: center; gap: 10px 15px; margin: 4px 0; }
            .main-nav li { margin-left: 0; }
            .hero { padding: 210px 0 92px 0; }
            .hero .subtitle { font-size: 1rem; margin-bottom: 28px; }
            .typing-effect-container { min-height: 56px; margin-bottom: 24px; }
            .hero .cta-buttons { flex-direction: column; gap: 14px; }
            .trust-bar { border-radius: 0; margin-top: 0; padding: 24px 0; }
            .trust-bar .container { gap: 18px; grid-template-columns: repeat(2, minmax(0, 1fr)); }
            .intro-section { padding-top: 88px; }
            .intro-section .container { flex-direction: column; gap: 32px; }
            .intro-image::before { display: none; }
            .intro-image img { height: 320px; }
            .services-grid,
            .why-us-grid { grid-template-columns: 1fr; gap: 22px; }
            .service-content { padding: 24px; }
            .why-us-item { padding: 0; gap: 16px; }
            .review-card { padding: 28px 24px; }
            .review-card::before { font-size: 4rem; top: 12px; right: 14px; }
            .final-cta { padding: 56px 24px; }
            .final-cta h2 { font-size: 1.9rem; }
            .final-cta p { font-size: 1rem; }
            .footer-grid { grid-template-columns: 1fr; gap: 30px; }
        }

        @media (max-width: 520px) {
            .main-header { position: sticky; top: 0; }
            .hero { padding-top: 176px; }
            .hero h1 { font-size: 2.2rem; }
            .logo { font-size: 1.4rem; }
            .main-nav a { font-size: 0.92rem; }
            .trust-bar .container { grid-template-columns: 1fr; }
            .why-us-item { flex-direction: column; }
            .why-us-item .icon { width: 52px; height: 52px; font-size: 1.75rem; }
            .reviewer-info { align-items: flex-start; }
        }
    </style>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
</head>
<body>

    <header class="main-header">
        <div class="container">
            <a href="#none" class="logo">FixFast</a>
            <nav class="main-nav">
                <ul>
                    <li><a href="#none" class="active">Home</a></li>
                    <li><a href="#none">Over ons</a></li>
                    <li><a href="#none">Diensten</a></li>
                    <li><a href="#none">Contact</a></li>
                </ul>
            </nav>
            <a href="#none" class="btn btn-primary">
                <i class="bi bi-telephone-fill"></i> 06 - 12 34 56 78
            </a>
        </div>
    </header>

    <main>
        <section class="hero">
            <div class="container">
                <h1>Problemen met uw Loodgieterswerk?</h1>
                <div class="typing-effect-container">
                    <span>Wij lossen het op: </span><span id="typing-effect"></span>
                </div>
                <p class="subtitle">FixFast Loodgieters helpt particulieren en bedrijven met lekkages, verstoppingen, onderhoud en spoedklussen. Snel ter plaatse, duidelijke afspraken en vakwerk waar u op kunt rekenen.</p>
                <div class="cta-buttons">
                    <a href="#none" class="btn btn-primary btn-lg"><i class="bi bi-telephone-fill"></i> Bel direct voor spoed</a>
                    <a href="#none" class="btn btn-secondary btn-lg">Vraag een offerte aan</a>
                </div>
            </div>
        </section>

        <section class="trust-bar">
            <div class="container">
                <div class="trust-item fade-in">
                    <i class="bi bi-clock-history"></i>
                    <span><strong>24/7</strong> Spoedservice</span>
                </div>
                <div class="trust-item fade-in" style="transition-delay: 0.1s;">
                    <i class="bi bi-truck"></i>
                    <span>Binnen <strong>24 uur</strong> op locatie</span>
                </div>
                <div class="trust-item fade-in" style="transition-delay: 0.2s;">
                    <i class="bi bi-tag"></i>
                    <span>Transparante <strong>prijsafspraken</strong></span>
                </div>
                <div class="trust-item fade-in" style="transition-delay: 0.3s;">
                    <i class="bi bi-people"></i>
                    <span>Meer dan <strong>500+</strong> tevreden klanten</span>
                </div>
            </div>
        </section>

        <section class="intro-section fade-in">
            <div class="container">
                <div class="intro-text">
                    <h2 class="section-title">Jouw betrouwbare loodgieter voor elke klus in Utrecht.</h2>
                    <p>Een lekkage, verstopte afvoer of kapotte kraan komt nooit gelegen. Daarom wil je snel iemand spreken die weet wat hij doet. Bij FixFast krijg je geen ingewikkeld verhaal, maar duidelijke communicatie, een eerlijke prijs en een oplossing die gewoon goed wordt uitgevoerd.</p>
                    <p>Onze ervaren monteurs staan dag en nacht klaar voor zowel gepland onderhoud als acute noodgevallen.</p>
                    <a href="#none" class="btn btn-primary mt-3" style="margin-top: 15px;">Lees meer over ons</a>
                </div>
                <div class="intro-image">
                    <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800" alt="Vriendelijke monteur van FixFast aan het werk">
                </div>
            </div>
        </section>

        <section class="services-section fade-in">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-title">Onze Diensten</h2>
                    <p class="section-subtitle">Van spoedreparaties tot installatiewerk en onderhoud: FixFast helpt je snel en vakkundig verder.</p>
                </div>
                <div class="services-grid mt-4">
                    <div class="service-card">
                        <div class="img-wrapper">
                            <img src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=600" alt="Lekdetectie">
                            <div class="icon-badge"><i class="bi bi-water"></i></div>
                        </div>
                        <div class="service-content">
                            <h3>Lekdetectie</h3>
                            <p>We sporen lekkages snel op met moderne apparatuur en repareren het probleem vakkundig om waterschade te voorkomen.</p>
                            <a href="#none" class="service-link">Lees meer <i class="bi bi-arrow-right"></i></a>
                        </div>
                    </div>
                    <div class="service-card">
                        <div class="img-wrapper">
                            <img src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&q=80&w=600" alt="Verstoppingen">
                            <div class="icon-badge"><i class="bi bi-x-circle"></i></div>
                        </div>
                        <div class="service-content">
                            <h3>Verstoppingen</h3>
                            <p>Last van een verstopte afvoer, wc of gootsteen? Wij reinigen de leidingen grondig zodat alles weer vlekkeloos doorloopt.</p>
                            <a href="#none" class="service-link">Lees meer <i class="bi bi-arrow-right"></i></a>
                        </div>
                    </div>
                    <div class="service-card">
                        <div class="img-wrapper">
                            <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600" alt="CV Onderhoud">
                            <div class="icon-badge"><i class="bi bi-gear-wide-connected"></i></div>
                        </div>
                        <div class="service-content">
                            <h3>CV Onderhoud</h3>
                            <p>Voor een warm en comfortabel huis verzorgen wij het onderhoud, de snelle reparatie en de vervanging van CV-systemen.</p>
                            <a href="#none" class="service-link">Lees meer <i class="bi bi-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="why-us-section fade-in">
            <div class="container">
                 <div class="text-center">
                    <h2 class="section-title">Waarom Klanten Voor FixFast Kiezen</h2>
                    <p class="section-subtitle">We combineren technisch vakmanschap met ouderwetse service en duidelijkheid.</p>
                </div>
                <div class="why-us-grid mt-5">
                    <div class="why-us-item">
                        <div class="icon"><i class="bi bi-rocket-takeoff"></i></div>
                        <div>
                            <h3>Snel Geholpen</h3>
                            <p>Loodgietersproblemen zijn vaak urgent. Daarom schakelen we snel, plannen we direct in en zijn we bij spoed binnen 24 uur aanwezig.</p>
                        </div>
                    </div>
                    <div class="why-us-item">
                         <div class="icon"><i class="bi bi-chat-quote"></i></div>
                        <div>
                            <h3>Duidelijke Communicatie</h3>
                            <p>U weet vooraf precies waar u aan toe bent. Geen verrassingen achteraf, maar eerlijke prijzen en een heldere uitleg van de werkzaamheden.</p>
                        </div>
                    </div>
                    <div class="why-us-item">
                        <div class="icon"><i class="bi bi-shield-check"></i></div>
                       <div>
                           <h3>Ervaren Vakmensen</h3>
                           <p>Onze monteurs zijn gecertificeerd, beschikken over jarenlange ervaring en gebruiken uitsluitend hoogwaardige materialen.</p>
                       </div>
                   </div>
                </div>
            </div>
        </section>

        <section class="reviews-section fade-in">
             <div class="container">
                <div class="text-center">
                    <h2 class="section-title">Wat Klanten Over Ons Zeggen</h2>
                    <p style="color: rgba(255,255,255,0.8); margin-bottom: 40px;">Echte ervaringen van mensen uit de regio Utrecht.</p>
                </div>
                <div class="services-grid">
                    <div class="review-card">
                        <div class="review-stars">
                            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                        </div>
                        <p>"Super snel geholpen bij een lekkage in de keuken. Fijne communicatie en alles werd netjes en vakkundig opgelost. Aanrader!"</p>
                        <div class="reviewer-info">
                            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Mark" class="reviewer-avatar">
                            <div class="reviewer-details">
                                <h4>Mark S.</h4>
                                <span>Particulier uit Utrecht</span>
                            </div>
                        </div>
                    </div>
                    <div class="review-card">
                        <div class="review-stars">
                            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                        </div>
                        <p>"Onze wc was volledig verstopt en FixFast kon dezelfde dag nog langskomen. Binnen no-time was het probleem verholpen. Heel tevreden!"</p>
                        <div class="reviewer-info">
                            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sanne" class="reviewer-avatar">
                            <div class="reviewer-details">
                                <h4>Sanne de J.</h4>
                                <span>Particulier uit Nieuwegein</span>
                            </div>
                        </div>
                    </div>
                    <div class="review-card">
                        <div class="review-stars">
                            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i>
                        </div>
                        <p>"Eerlijke prijs, duidelijke uitleg en een ontzettend vriendelijke monteur. Mocht er weer iets zijn, zou ik ze zeker opnieuw bellen."</p>
                        <div class="reviewer-info">
                            <img src="https://randomuser.me/api/portraits/men/68.jpg" alt="David" class="reviewer-avatar">
                            <div class="reviewer-details">
                                <h4>David v/d V.</h4>
                                <span>Particulier uit Zeist</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="final-cta-section fade-in">
            <div class="container">
                <div class="final-cta">
                    <h2>Direct een loodgieter nodig?</h2>
                    <p>Wacht niet langer met uw loodgietersprobleem. Neem direct contact op en we helpen u zo snel mogelijk weer op weg.</p>
                    <a href="#none" class="btn btn-primary btn-lg" style="margin-top: 10px;">
                        <i class="bi bi-telephone-fill"></i> Bel Nu Voor Directe Hulp
                    </a>
                </div>
            </div>
        </section>
    </main>

    <footer class="main-footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-col">
                    <a href="#none" class="logo" style="color: var(--white); font-size: 1.8rem; margin-bottom: 15px; display: block;">FixFast</a>
                    <p>Uw betrouwbare, snelle en vakkundige loodgieter voor Utrecht en omstreken. Voor spoed en projecten.</p>
                </div>
                <div class="footer-col">
                    <h5>Navigatie</h5>
                    <ul>
                        <li><a href="#none">Home</a></li>
                        <li><a href="#none">Over ons</a></li>
                        <li><a href="#none">Onze Diensten</a></li>
                        <li><a href="#none">Contact opnemen</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h5>Contact Informatie</h5>
                    <ul>
                        <li><i class="bi bi-telephone"></i> <a href="#none">030 - 123 45 67</a></li>
                        <li><i class="bi bi-phone"></i> <a href="#none">06 - 12 34 56 78 (Spoed)</a></li>
                        <li><i class="bi bi-envelope"></i> <a href="#none">info@fixfast.nl</a></li>
                        <li><i class="bi bi-geo-alt"></i> Voorbeeldstraat 12, Utrecht</li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                &copy; 2026 FixFast Loodgieters. Alle rechten voorbehouden.
            </div>
        </div>
    </footer>

    <script>
        document.addEventListener("DOMContentLoaded", function() {
            const sections = document.querySelectorAll('.fade-in');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });
            sections.forEach(section => observer.observe(section));

            const typingElement = document.getElementById('typing-effect');
            if (typingElement) {
                const words = ["Lekkages", "Verstoppingen", "CV problemen", "Sanitair installaties"];
                let wordIndex = 0;
                let letterIndex = 0;
                let currentWord = "";
                let isDeleting = false;

                function type() {
                    const speed = isDeleting ? 100 : 200;
                    currentWord = words[wordIndex];

                    if (isDeleting) {
                        letterIndex--;
                    } else {
                        letterIndex++;
                    }

                    typingElement.textContent = currentWord.substring(0, letterIndex);

                    if (!isDeleting && letterIndex === currentWord.length) {
                        setTimeout(() => isDeleting = true, 2000);
                    } else if (isDeleting && letterIndex === 0) {
                        isDeleting = false;
                        wordIndex = (wordIndex + 1) % words.length;
                    }

                    setTimeout(type, speed);
                }

                type();
            }
        });
    </script>
</body>
</html>
`;

export const fixFastSlide: WebsiteShowcaseSlide = {
  id: "fixfast",
  title: "FixFast",
  posterSrc: "/website-showcases/posters/fixfast.jpg",
  html: localizeHtmlShowcase(fixFastHtml, "fixfast", {
    stylesheetHrefs: [showcaseFixFastFontsStylesheetHref],
  }),
  preloadPriority: 12,
};
