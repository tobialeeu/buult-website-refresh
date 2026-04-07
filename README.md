# Buult website refresh

## Formulierconfiguratie

Zet voor lokale of productie-omgevingen deze variabelen:

- `VITE_FORMSPREE_ENDPOINT`: het Formspree form endpoint, bijvoorbeeld `https://formspree.io/f/abc123xy`
- `VITE_TURNSTILE_SITE_KEY`: de publieke Cloudflare Turnstile site key

De code verwacht dat Formspree op het dashboard is ingesteld met:

- notificaties naar de gewenste inboxen
- domeinrestrictie voor het productiedomein
- Cloudflare Turnstile ingeschakeld met de bijbehorende secret key
