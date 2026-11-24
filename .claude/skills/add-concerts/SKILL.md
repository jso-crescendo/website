---
name: add-concerts
description: Add concerts to the JSO Crescendo website — concert data files, images, index registration, verification. Use when adding upcoming or one-off concerts from a leaflet / program preview (Vorschau) / external event page.
---

# Adding Concerts

## Ask the user first — do not guess

The user explicitly prefers being asked over being guessed at. Before writing
data, resolve (only when the source is silent or ambiguous):

1. **Missing time** → dates-only entry or traditional time? Past spring
   Sunday times changed (17:00 in 2023/24, 16:00 in 2025/26) — NEVER
   invent a time; ask. Dates-only: `dateString: '10. April 2027'`,
   `dateISO: '2027-04-10'` (valid, sorts fine, JSON-LD accepts).
2. **`showOnHomepage`** → default NO for recurring small concerts
   (Offenes Singen, Weihnachtsgottesdienst have never been shown).
   Spring/autumn concerts historically have it. Ask.
3. **Description** → minimal (no description) or a short text? Ask for
   new/one-off events.
4. **Third-party image** → key visual/poster (recommended, flyer-like) or
   logo? Ask.

Include only what the source says; confirm before adding anything.

## Data model

```
src/data/concerts/
  index.ts             # Concert type, ALL_CONCERTS, CONCERTS, PAST_CONCERTS, getConcert
  <year>/<slug>/
    index.ts(x)        # export const <NAME>_<YY>: Concert (e.g. OFFENES_SINGEN_26)
    assets/*.webp      # WebP only; <name>_sm.webp (640px) and/or <name>_lg.webp (1920px)
```

- `id` = folder slug (kebab-case) = URL `/konzerte/<id>`.
- Year folder = year of the FIRST date (April 2027 concert → `2027/`).
- `image_sm` required; `image_lg` optional.
- `dates[]`: `{location, googleMapsLink?, dateString, dateISO}`.
- `program[]`: `{name, subtitle?, composer, subComposer?}` — renders
  "name - composer [subComposer]".
- Description is a mutually exclusive union: `description: string`
  (rendered inline on the card) OR `seoDescription` + `descriptionElement`
  (enables the "Details ansehen" link; empty `<></>` is an accepted pattern).
  A concert with neither still gets a working detail page + sitemap entry.
- `showOnHomepage` requires `image_lg` AND `seoDescription` (homepage
  renders both).
- `lastChange?` (ISO) → sitemap lastModified; omit for new entries.

## Conventions (learned, easy to get wrong)

- `dateString`: Swiss German, weekdays omitted: `'7. November 2026 19:30 Uhr'`
  (jugendeurythmiefestival-26 is the only weekday exception — follow the
  majority).
- `dateISO`: always `+01:00` offset — even in April (established convention;
  do not "correct" it to `+02:00`).
- `location`: follow the site's existing wording for a recurring venue, not
  the leaflet's (site: `Grossmünster Zürich`, leaflet: `Grossmünster, Zürich`).
- Reused images: `cp` the previous year's file into the new folder
  (karfreitagskonzert-25 kept the name `karfreitag_24_sm.webp`; simplifying
  the name is also fine).
- `index.ts` unless the file contains JSX (`descriptionElement` → `.tsx`).
- `src/data/concerts/index.ts`: imports grouped by year ascending;
  `ALL_CONCERTS` entries grouped by year descending (order is cosmetic —
  the array is sorted by first `dateISO` at build).
- Filtering is build-time (SSG): `PAST_CONCERTS` = all dates before now;
  `CONCERTS` = the rest. Sitemap contains `CONCERTS` only.

## Images

- WebP only (next.config + `.gitattributes` `*.webp binary`).
- `scripts/image.js <folder>` converts jpg/png to `_sm`(640)/`_md`(1280)/
  `_lg`(1920)/`_xl`(3840). Delete the unneeded sizes and the source file
  afterwards.
- **The script stamps EXIF `© <year> Alle Rechte vorbehalten JSO Crescendo`**
  — right for JSO photos, WRONG for third-party artwork (festival key
  visuals etc.). For third-party images convert directly instead:

  ```bash
  node -e "const sharp=require('sharp');(async()=>{for(const [w,s] of [[640,'sm'],[1920,'lg']]){await sharp('in.jpg').resize(w).webp().toFile('out_'+s+'.webp')}})()"
  ```

- `image_sm` renders in cards as `aspect-3/2 object-cover` (landscape
  posters get top/bottom cropped — keep key content centered);
  `image_lg` renders `object-contain` on the detail page.

## Research sources

- External/festival sites: verify dates, times, venue, and find the image.
  - SPA sites (homepage HTML only has meta tags): the program data lives in
    the JS bundle — get `/assets/index-*.js` from the HTML and grep it for
    artist names/times. og-image meta URL yields the share key visual
    (usable as `image_lg`, usually 1920×1080).
- Verify weekdays: `date -j -f "%Y-%m-%d" <date> "+%A %Y-%m-%d"` (macOS).

## Steps

1. Read `Concert` type in `src/data/concerts/index.ts` and one entry from the
   previous year of each recurring concert (template for naming/location).
2. Resolve open questions with the user (see top).
3. Per concert: create `<year>/<slug>/assets/`, fetch/copy/convert images,
   write `index.ts(x)`.
4. Register: add imports (year-ascending position) + `ALL_CONCERTS` entries
   (year-descending group) in `src/data/concerts/index.ts`.
5. Verify (below).

## Verification

No tests exist in this repo — do not add any. **No git commands.**

1. `bun run lint` — must pass (Biome). Pitfall: piping through `head`/`tail`
   hides the exit code — read the real output.
2. `bun run build` — must succeed; new `/konzerte/<id>` SSG routes appear.
3. Smoke test with `bun run start` (port 3000), then curl:
   - `/konzerte`: each new `id="<id>"` present + its date strings; card order
     is chronological (first date).
   - `/konzerte/<id>`: HTTP 200 + venue/name/program content.
   - `/sitemap.xml`: upcoming concerts listed (new ones in; past ones out).
   - Images: extract `src="/_next/image?..."` from the HTML — it is
     HTML-escaped (`&amp;`), UNESCAPE before curling; expect 200 + image type.
   - Detail-page JSON-LD (`application/ld+json`): startDate/location correct
     (dates-only concerts emit `xsd:date`-style dates — fine).
   - Visually inspect third-party images (`read` the WebP — it decodes
     inline) to confirm the right artwork.
4. Kill the server afterwards.
