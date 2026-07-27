# GiardDesign

A pixel-perfect, animated recreation of a Figma landing page for **GiardDesign** — a garden design & landscaping studio — built as a recruitment test project for [adRespect](https://adrespect.pl).

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=next.js) ![React](https://img.shields.io/badge/React-19-149ECA?logo=react) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?logo=tailwindcss)

## ✨ Overview

The brief asked for two things: an exact reproduction of the Figma design, and a site that feels *alive*. This project delivers both — a fully responsive, component-driven Next.js site with a deliberate layer of motion (scroll reveals, a Ken Burns hero slider, micro-interactions) that never compromises the pixel-accuracy of the original design.

## 🧩 Sections

- **Header** — sticky navigation with a dropdown "Oferta" mega-menu (hover on desktop, click on mobile), an expanding search input, and a full-screen mobile menu
- **Hero** — auto-playing image/content slider with a Ken Burns zoom effect, pausing on hover, manual prev/next controls
- **Oferta** — service cards with icon micro-interactions, staggered scroll-reveal entrance
- **O firmie** — split image/content layout with directional reveal animation
- **Realizacje** — a masonry photo gallery (via `masonry-layout` + `imagesloaded`) with an expandable grid and a keyboard-navigable lightbox
- **Instagram CTA** — a call-to-action banner
- **Footer** — contact details and social links

## 🎬 Motion & animation

- A reusable `useInView` hook + `<Reveal>` component drive fade/translate entrance animations on scroll, with direction (`up` / `left` / `right`) and stagger delay support
- Hero slides auto-advance every 6s, pause on hover, and animate with a subtle Ken Burns zoom + fade/translate content transition
- Interactive elements (nav links, CTA buttons, offer card icons, gallery items) get deliberate hover/active micro-interactions rather than blanket transitions
- The lightbox fades and scales in on open
- All motion respects `prefers-reduced-motion`

## 🛠️ Tech stack

| | |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| UI library | [React 19](https://react.dev) |
| Language | TypeScript |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) (`@theme`, `@utility`) |
| Fonts | `next/font/google` — Inter (body) & Montserrat (headings) |
| Masonry gallery | `masonry-layout` + `imagesloaded` |
| Linting / formatting | ESLint, Prettier |

## 📁 Project structure

```
app/                    # App Router entry, global styles, layout
components/
  navigation/           # Header, desktop/mobile nav, dropdown, search
  hero/                 # Hero slider, content, image, navigation
  offer/                # Services section + cards
  about/                # "O firmie" split section
  realizations/         # Masonry gallery + lightbox
  instagram/            # Instagram CTA banner
  footer/                # Footer sections
  ui/                    # Shared primitives: CtaLink, SectionHeader, Icon, Reveal
hooks/                  # useSlider, useMasonry, useLightbox, useMobileMenu, useInView
lib/                    # config.ts — single source of truth for site content
public/
  images/               # Hero, about & project photos
  icons/                # Service icons
```

Content, copy, links and navigation items are centralized in `lib/config.ts`, keeping components free of hardcoded strings.

## 🚀 Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # run ESLint
```

## 📱 Responsiveness & accessibility

- Fully responsive from mobile up, with breakpoint-tuned typography, spacing, and layout (`sm:` / `lg:` / `xl:`)
- Keyboard support in the lightbox (Escape, arrow keys) and visible focus states throughout
- `aria-label`s on icon-only controls (menu, search, slider navigation, lightbox)

## 📝 Notes

Built with a component-per-concern architecture: every section is split into small, single-responsibility components, with shared logic extracted into custom hooks and shared UI primitives reused across sections.
