# JMOTO premium website structure

Recommended route model (Next.js App Router):
- /en and /pt locale roots (or equivalent existing locale system)
- Home
- About
- Services overview
  - Electrical
  - Solar
  - CCTV & Security
  - Inverters
  - Batteries
  - Electronics & Electrical Supply
  - Maintenance & Repairs
- Projects
- Training
- Service Areas
- Shop (preserve if currently functional; do not remove silently)
- Quote
- Contact

Homepage flow:
1. Slim utility bar: SA + Mozambique contacts, EN/PT switch
2. Floating/sticky premium navbar
3. Full-viewport cinematic hero with GSAP intro
4. Services rail with animated media cards
5. "Power Flow" interactive section connecting solar > inverter > battery > home/business
6. Why JMOTO trust section, using only verified claims
7. Project gallery preview with category filtering
8. South Africa + Mozambique coverage story
9. Training centre preview
10. Quote CTA with WhatsApp alternative
11. Premium bilingual footer

Interactive concepts:
- SVG cable/power path draws as visitor scrolls
- Service cards reveal technical imagery with red scan-line accents
- Solar panel hover reflection (desktop only)
- Inverter/battery exploded-lite parallax using layered 2D assets, not heavy WebGL by default
- Project gallery lightbox with keyboard/swipe support
- Region switch SA/MZ updates phone/location CTA
- Language switch preserves equivalent route and section where possible
- Quote form service selector with contextual fields
- Reduced-motion fallback
