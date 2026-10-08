# Forno Vivo — Design

Italian pizzeria demo, web only, editorial food photography and telephone conversion. No custom API, database, accounts or forms.

## Identity
- Charcoal #171816, ivory #f5f0e7, ember #ee693b, sage #a5ac8c.
- Self-hosted Oswald for oversized condensed uppercase headings; DM Sans for readable body copy.
- Real Unsplash photography only, compressed to responsive WebP. No AI images.
- Thin rules, restrained corners, wide spacing, no generic card grid.

## Page and flows
- Single home page: asymmetrical photographic hero, ingredient strip, native category-based menu lists, pale-sage location/hours section, Google Maps, copyright.
- Primary conversion uses native tel links; mobile has one fixed full-width Chiama Ora button with safe-area padding.
- Demo number +390000000000 is intentionally a non-real placeholder and labeled as such. Maps shows Napoli only, not a fabricated business.
- Accessible keyboard navigation, category tabs, readable ingredients, reduced-motion support.

## Files
- src/web/pages/home.tsx; pages/index.tsx composition; styles.css; public/images; public/fonts; HTML metadata.
- Max width 1200px, mobile gutters 22px. Hero photograph fills right half and blends into dark left typography. Secondary image lazy-loaded. Map below hours, lazy-loaded.
