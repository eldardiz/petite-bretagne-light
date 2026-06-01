# Image manifest — Petite Bretagne mockup

Photos are the lead's own curated set (`~/Desktop/petite-bretagne/`, 12 higher-res
Instagram photos), resized to max 1920px and recompressed (JPEG q65) with `sips`.
Replaced the earlier lower-res site scrapes on 2026-06-01.

| Slot | Source (imgi_*) | Depicts |
|---|---|---|
| `hero/placeholder.jpg` | imgi_8 | Shop interior (landscape): counter, pastry case, French shelves |
| `about/placeholder.jpg` | imgi_14 | Branded sandwich/quiche boxes on marble (Petite Bretagne stickers) |
| `location/placeholder.jpg` | imgi_52 | Coffee + pain au raisin by the window, branded cup, Mamaroneck street view |
| `cta/placeholder.jpg` | imgi_13 | Cream + chocolate crepes |
| `featured/card-01.jpg` | imgi_40 | Croissant ham & cheese sandwiches |
| `featured/card-02.jpg` | imgi_36 | Multigrain seeded loaf + slices |
| `featured/card-03.jpg` | imgi_28 | Smoked salmon baguette |
| `featured/card-04.jpg` | imgi_25 | Apple turnover |
| `showcase/panel-01.jpg` | imgi_61 | Pastry case (Viennoiserie panel) |
| `showcase/panel-02.jpg` | imgi_13 | Crepes (Crepes panel) |
| `showcase/panel-03.jpg` | imgi_50 | French grocery shelves (Coffee & Pantry panel) |
| `philosophy/01-09.jpg` | imgi_8, 61, 13, 36, 40, 23, 50, 38, 52 | 9-image lightbox set |
| `instagram/post-01-04.jpg` | imgi_40, 13, 36, 61 | Croissant, crepe, bread, pastry case |
| `petitebretagne-logo.png` | (provided) | Real logo, black hand-drawn wordmark + lighthouse, transparent. Rendered white on dark chrome via CSS invert. |
| `app/icon.png` | (from logo) | Favicon, logo padded to a white 512 square |

## Quality notes
- Much stronger than the first pass: real interior, branded lifestyle shots, real bread, pastry case.
- `showcase/panel-01` + IG post-04 use imgi_61 (pastry case), which is 640px wide (lowest res of the set) but fine at panel/card size.
- Still missing a dedicated wide storefront exterior and an owner/team photo.
- Favicon is a 2:1 wordmark on a white square; an icon-only (lighthouse) mark would be cleaner.
