// Brand config — the single source of truth for every site spawned from this archetype.
// All components read from here. NEVER hardcode business-specific data in components.
//
// To spin up a new mockup or production site, edit ONLY this file (and swap images
// under public/images/). The component layer should not need changes.

export const brand = {
  // ── Identity ────────────────────────────────────────────────────────────────
  identity: {
    name: "Petite Bretagne",
    legalName: "Petite Bretagne",
    tagline: "A French bakery and café in Mamaroneck",
    description: "Petite Bretagne is an authentic French and Breton bakery and café in Mamaroneck Village, New York. Fresh viennoiserie, crepes, baguettes, quiches, and Far Breton, baked daily from 6am.",
    established: "MMXXI",                  // founded 2021
    coordinates: {                         // hero corner badge geographic stamp
      lat: "40° 56′ 51″ N",
      lng: "73° 43′ 57″ W",
    },
    locale: "en" as "en" | "fr" | "de" | "es" | "it",
  },

  // ── Productization metadata ─────────────────────────────────────────────────
  // These two fields drive conditional copy/sections across the template.
  businessType: "bakery" as "restaurant" | "winery" | "bakery",
  archetype: "editorial" as "editorial" | "maison" | "atelier",

  // ── Contact ─────────────────────────────────────────────────────────────────
  contact: {
    phone: "",                // not published anywhere public — confirm with lead
    email: "hello@petitebretagneny.com",  // PLACEHOLDER — site uses a contact form; confirm real inbox
    address: "152 Mamaroneck Ave",
    cityShort: "Mamaroneck, NY",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Petite%20Bretagne%2C%20152%20Mamaroneck%20Ave%2C%20Mamaroneck%2C%20NY%2010543",
    googleMapsEmbedSrc: "https://maps.google.com/maps?q=152%20Mamaroneck%20Ave%2C%20Mamaroneck%2C%20NY%2010543&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },

  // ── Hours ───────────────────────────────────────────────────────────────────
  // Free-form strings — components don't parse, they display verbatim.
  // Source hours: Mon 6am-3pm · Tue-Fri 6am-5pm · Sat 6am-3pm · Sun 7am-3pm.
  // `full` is kept compact because it doubles as the hero corner stamp.
  hours: {
    full: "Mon to Sat from 6am, Sun from 7am",
    lunch: "",
    dinner: "",
    featured: "",
    closedOn: "",
  },

  // ── Booking / reservation ───────────────────────────────────────────────────
  // They take online orders + reservations, but no public URL was found.
  // Point the "Book" nav at the on-page contact form until a real link is supplied.
  booking: {
    system: "url" as "thefork" | "resy" | "opentable" | "tock" | "phone" | "url" | "none",
    widgetId: "",
    url: "#contact",
    ctaLabel: "Order online",
  },

  // ── Social ──────────────────────────────────────────────────────────────────
  social: {
    instagram: "petitebretagneny",        // handle unconfirmed — verify before send
    instagramUrl: "https://www.instagram.com/petitebretagneny/",
    facebook: "https://www.facebook.com/petitebretagneny",
    tripadvisor: "",
    yelp: "",
  },

  // ── Section flags ───────────────────────────────────────────────────────────
  // Toggle homepage sections on/off without touching components.
  // Names are business-agnostic; the *label* shown to the visitor adapts based on businessType.
  // Lead-gen scope: only the homepage matters. Private hire / careers were stripped from this archetype.
  sections: {
    featuredOffering: true,   // brunch (restaurant) / wine list (winery) / pastries (bakery)
    locationShowcase: true,   // terrace / tasting room / café seating / vineyard
    about: true,              // "Our story" — universal
    philosophy: true,         // "Approach" — universal
    playlist: false,          // restaurant ambiance audio — skip for most wineries/bakeries
    instagram: true,
    testimonials: true,
  },

  // ── Featured offering (signature/teaser section) ────────────────────────────
  // The headline product showcase. Adapt labels per businessType:
  //   restaurant → "Brunch" or "Signature menu"
  //   winery     → "Our wines" / "Tasting flights"
  //   bakery     → "Daily breads" / "Viennoiseries"
  featuredOffering: {
    sectionLabel: "Daily selection",   // eyebrow label
  },

  // ── Menu / catalog ──────────────────────────────────────────────────────────
  menu: {
    type: "url" as "pdf" | "photo" | "url",
    src: "",                  // no public menu URL captured yet — hidden in UI when empty
  },

  // ── Instagram feed ──────────────────────────────────────────────────────────
  instagram: {
    handle: "petitebretagneny",
    embedId: "",              // Curator.io widget ID — empty falls back to static grid
  },

  // ── Meta / analytics ────────────────────────────────────────────────────────
  meta: {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
    gaId: "",
    metaPixelId: "",
  },
} as const

// Convenience derived value — components import this when they need a localized
// "featured offering" label rather than hardcoding "Brunch" / "Wines" / etc.
export const FEATURED_OFFERING_LABEL: Record<typeof brand.businessType, string> = {
  restaurant: "Signature",
  winery: "Our wines",
  bakery: "Daily selection",
}

export const LOCATION_SHOWCASE_LABEL: Record<typeof brand.businessType, string> = {
  restaurant: "Terrace",
  winery: "Tasting room",
  bakery: "The café",
}
