# Legal Design Summit — website

The Legal Design Summit website, rebuilt for the 2027 edition. Built with
[Next.js](https://nextjs.org) (App Router) and Tailwind CSS.

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Where things live

- `app/` — pages and layout (Next.js App Router)
- `components/` — shared UI (header, footer, logo) and homepage sections (`components/home/`)
- `lib/content/` — the site's actual text and data (stats, quotes, nav links, etc.),
  kept separate from layout code so it's easy to find and change
- `public/brand/` — logo marks, extracted and tinted from the original brand
  assets (transparent-background unicorn icon in 4 colors, full lockups)
- `design-handoff/` — the original Claude Design wireframes, brand book, and
  the AI content-migration brief + source package this site was built from.
  Kept for reference; not part of the running site.

## Content model & future CMS

Content types follow the structure defined in
`design-handoff/source-package/AI_BRIEF.md` (Edition, Session, Person,
Workshop, Venue, Partner, Article, GalleryProject, TeamAssignment,
Testimonial, Policy). The plan is to move editing out of code and into a
proper no-code CMS once the organiser sets one up — see `lib/cms/README.md`
for the current status of that.

## Content rules worth knowing before editing

- Never invent speakers, testimonials, sponsors, attendance figures, or
  ticket terms — see the AI brief for the full list.
- Don't show a working-looking button/link unless its destination is confirmed.
- Historical (past-edition) content stays labelled with its year; it's never
  silently repurposed as current.
