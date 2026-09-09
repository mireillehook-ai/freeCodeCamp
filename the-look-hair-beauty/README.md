# The Look Hair & Beauty — Website Redesign

A complete, modern redesign of the frontend for The Look Hair & Beauty, Gibraltar's
unisex hair and beauty salon group (est. 2003). This is a standalone project and is
not part of, and does not modify, the freeCodeCamp curriculum/platform in this
repository.

## Stack

- [Vite](https://vite.dev) + React 19 + TypeScript
- [React Router](https://reactrouter.com) for client-side routing
- [Tailwind CSS v4](https://tailwindcss.com) for styling, driven by a small set of
  design tokens in `src/index.css`
- No backend — this is a static frontend. The contact form composes a `mailto:`
  link; wire it to a real booking/CRM endpoint before launch.

## Design system

- **Palette** — warm ivory/paper neutrals, near-black ink, and a brushed-bronze
  accent used sparingly, with a clay/terracotta secondary tone for bridal content.
- **Type** — Fraunces (serif, editorial) for headings, Inter for body/UI text.
- **Spacing** — generous, fluid section padding and a 90rem max-width container.
- **Motion** — a scroll-reveal primitive (`useReveal` + `[data-reveal]`) and a
  looping marquee, both disabled under `prefers-reduced-motion`.
- **Imagery** — every photo slot is a designed placeholder "plate"
  (`src/components/ui/Plate.tsx`): a duotone gradient with a grain overlay and a
  numbered caption, styled like an editorial lookbook. Swap these for the salon's
  own photography — search each page for `<Plate` to find every slot.

## Content

Business facts (name, founding year, the three salon locations and phone numbers,
the bridal specialism) are drawn from public listings for thelookhair.com. Hours,
the service menu, and testimonials are representative placeholder copy — replace
with the salon's real price list, hours and reviews in `src/data/salon.ts` before
launch.

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check and build for production
npm run lint      # oxlint
```

## Structure

```
src/
  data/salon.ts        business content (locations, services, bridal, testimonials)
  hooks/                useReveal, useScrolled, useScrollToTop
  components/
    layout/             Header, Footer, Layout, PageIntro, StickyBookBar
    ui/                 Button, Plate, Reveal, SectionHeading, Marquee, TestimonialSlider
    home/               homepage-only sections (Hero, Intro, BridalFeature, ...)
  pages/                Home, About, Services, Bridal, Gallery, Contact
```
