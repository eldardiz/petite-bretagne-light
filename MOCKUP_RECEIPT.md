# Mockup Receipt — Petite Bretagne

Speculative Axamo revamp mockup, spawned from the **Editorial · Warm** archetype.
Built 2026-06-01.

## Live

- **Production URL:** https://petite-bretagne.vercel.app
- **Repo:** https://github.com/eldardiz/petite-bretagne
- **Vercel project:** eldardizs-projects/petite-bretagne
- **Local:** `vibe-coding/mockups/petite-bretagne/` (`npm run dev`)

## Lead

- **Business:** Petite Bretagne, authentic French / Breton bakery and café
- **City:** Mamaroneck Village, NY (152 Mamaroneck Ave, Mamaroneck NY 10543)
- **Founded:** 2021
- **Existing site:** https://www.petitebretagneny.com (SkyTab / s4shops ordering site)
- **Archetype:** Editorial · Warm (deep-red palette kept, no token swap)

## Decisions (locked with Eldar)

- **Base template:** Editorial · Warm ("template 01", Passage descendant). Overrode the default bakery→Fresh rec at the lead's request; fits the refined positioning.
- **Language:** English UI (`locale: "en"`). Translated the archetype's French chrome (nav "Suivez-nous"/"Adresse", legal page) and rewrote all section copy as English bakery content. French *vocabulary* kept (viennoiserie, Far Breton, croque monsieur).
- **Heading font:** Full swap to **Instrument Serif** (400 regular + italic) on every display heading. Reused the `--font-cormorant` variable so no downstream CSS broke. `.ital` accents now read via slant (Instrument has no 300 weight). Loosened display/hero tracking + line-height for Instrument's narrower metrics.
- **Palette:** Kept the archetype deep Editorial red. No `figma-tokens.css` change.
- **Photos:** Scraped 9 real photos from the live site, compressed (max 1920px, JPEG q62), distributed across 24 slots. See `docs/image-manifest.md`.

## What changed vs the archetype

- `app/layout.tsx` — Cormorant → Instrument Serif
- `styles/claude-design.css` — `.ital` weight 300→400, display tracking/line-height eased, hero tagline gap + mobile metadata size bumped (post-visual-review polish)
- `lib/brand.ts` — full Petite Bretagne data, `businessType: "bakery"`, `locale: "en"`
- `components/layout/Navbar.tsx` — French → English, social list repointed to Instagram + Facebook
- `app/mentions-legales/page.tsx` — French legal page rewritten in English (US bakery, no RGPD/SIRET)
- All homepage sections — real bakery copy (About heritage story, Philosophy, Featured cards, Menu showcase, Location, marquee, Instagram captions, testimonials)
- `app/page.tsx` — removed PlaylistSection (music section, wrong for a bakery; `sections.playlist: false`)
- `public/images/` — stale Le Passage photos deleted, replaced with Petite Bretagne photos

## Verified

- `npm run build` clean (Next 16.2.4, 3 static routes)
- Production alias HTTP 200
- Instrument Serif loads + renders on all headings (visual review, desktop + mobile)
- Hero not cramped; all images load; no layout breakage (visual review)
- Zero French strings in nav/footer/legal/sections; `og:locale` = en_US
- No em dashes in prose copy (only the template's decorative "— 0X" section/nav numbering remains, which is intentional design)

---

## ⚠️ Before sending to the lead — fields that need REAL values

These are placeholders or assumptions. Confirm with the client:

1. **Phone** — none is published anywhere public. `contact.phone` is empty (the "Call us" button and phone lines auto-hide). Get a real number.
2. **Email** — `hello@petitebretagneny.com` is a **guessed placeholder** (their site only has a contact form). Confirm the real inbox or it will bounce.
3. **Instagram handle** — assumed `@petitebretagneny`; **not verified**. Confirm the real handle (drives the nav link, Instagram section, and IG URL).
4. **Facebook URL** — `facebook.com/petitebretagneny` assumed, unverified.
5. **Online ordering / reservation URL** — none captured. The "Order online" / "Book" nav currently points at the on-page contact form (`#contact`). Wire the real SkyTab ordering or reservation link.
6. **Menu link** — `menu.src` is empty. Add their real menu (PDF or URL) if they want a menu link.
7. **Instagram feed** — `instagram.embedId` is empty, so the IG section shows a **static 4-image grid**, not a live feed. Add a Curator.io widget id for a live feed.
8. **Testimonials** — the 3 reviews are **illustrative placeholders** (attributed to "A regular"). Swap for real Google / Yelp quotes with real names before send.
9. **Contact form** — posts to `/api/contact`, which does not exist in this archetype (lead-gen scope). Submitting does nothing. Wire a real handler (Resend/Formspree) or swap the form for a mailto/ordering CTA before the client relies on it.

## Photo quality flags (see docs/image-manifest.md)

- All sources are phone photos from their ordering site. Decent, not pro-grade.
- `about` (storefront) + `location` (interior) are portrait shots cropped into wide frames.
- Hero is 1600×1200 (slightly soft full-bleed on retina).
- No real **Far Breton**, plain **baguette**, or **owner/team** photo existed; cards/captions were named to match the photos available.
- To upgrade: ask the lead for a wide hero, a plain croissant, a Far Breton, a baguette, and owner/team shots.

## Notes for mockup #2 (process)

- The archetype's `public/images/` ships Le Passage photos under folder names (`food/`, `ambiance/`, `hero/exterior-wide.jpg`) that **do not match** the paths the code references (`hero/placeholder.jpg`, `philosophy/01.jpg`, `featured/card-0X.jpg`). Every rendered slot 404s until repopulated. Worth fixing the archetype to ship neutral placeholders at the referenced paths, or documenting the 24-slot list.
- `PlaylistSection` renders unconditionally in `app/page.tsx` and ignores `brand.sections.playlist`. Had to remove it from the page manually. Consider gating it on the flag in the archetype.
