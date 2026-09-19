# Aakash Chauhan — Portfolio

A single-page portfolio built with Next.js (App Router) and Tailwind CSS. Dark
base, acid-lime accent, heavy condensed display type, monospace labels.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

Node 18.18 or newer.

## Structure

```
app/
  layout.jsx      fonts (Archivo / Inter / JetBrains Mono) + metadata
  globals.css     design tokens, .display / .label / .btn-* component classes
  page.jsx        composes the eight sections in order
components/
  Nav.jsx         sticky header, mobile menu
  Hero.jsx        01 — headline, stats, marquee
  CodeWindow.jsx       faux editor used inside the hero
  About.jsx       02
  Stack.jsx       03 — five skill groups
  Projects.jsx    04 — project cards
  Lab.jsx         05 — interactive stack-layer preview
  Experience.jsx  06
  Focus.jsx       07
  Contact.jsx     08 — lime block + form
  Footer.jsx
  Section.jsx     shared section shell, eyebrow, two-line title
  Icons.jsx       inline SVG icon set
lib/data.js       every piece of copy and content on the page
```

## Editing content

Almost everything lives in `lib/data.js`: your name, role, email, social links,
resume path, stats, skill groups, projects, timeline entries and the Build Lab
layers. Edit there rather than in the components.

## Before deploying

1. Replace the Unsplash image URLs in `lib/data.js` with real project shots. If
   you move them into `public/`, use paths like `/projects/a1.png` and drop the
   `remotePatterns` entry in `next.config.mjs`.
2. Add your CV at `public/aakash-chauhan-resume.pdf`, or change `resumeUrl`.
3. Set the real `email`, `github` and `linkedin` values in `profile`.
4. The contact form currently opens the visitor's mail client. For real
   submissions, point `handleSubmit` in `components/Contact.jsx` at Formspree,
   Resend, or a route handler at `app/api/contact/route.js`.

## Theming

Colours and fonts are Tailwind theme tokens in `tailwind.config.js`
(`ink`, `panel`, `surface`, `hairline`, `muted`, `lime`). Changing `lime` there
restyles the whole site. Headline sizing lives in the `.display-*` classes in
`app/globals.css`.

## Notes

- Deploys to Vercel with no configuration.
- Respects `prefers-reduced-motion`; the marquee, cursor blink and lab
  auto-rotation all stop.
- Keyboard focus is visible throughout, and the Build Lab tabs use proper
  `tablist` / `tab` / `tabpanel` roles.
