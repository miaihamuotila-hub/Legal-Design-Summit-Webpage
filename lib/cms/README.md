# CMS status

**Chosen tool: [Sanity](https://sanity.io)** — a hosted, no-code content
editor. Non-technical team members log into a web dashboard (no git, no
code) to add/edit speakers, sessions, workshops, partners, articles, gallery
projects, and policy text. Free tier covers a project this size.

Why Sanity over the alternatives: it models structured, linked content
(a Session references a Person, a Workshop references an Edition, etc.)
which is exactly the shape `AI_BRIEF.md`'s content model needs — a flat
"pages and text boxes" CMS (e.g. a git-based one) would fight that structure.
It also supports multiple editor accounts with roles, which a git-based CMS
doesn't do well for a volunteer team.

## What's already built (no action needed)

- The full content model as editable schemas: `lib/cms/schemas/` — one file
  per type (Edition, Person, Session, Workshop, Venue, Partner, Article,
  GalleryProject, TeamAssignment, Testimonial, Policy)
- The embedded editing screen at `/studio`, wired to those schemas
- A guard (`lib/cms/env.ts`) so the whole site keeps working normally even
  before a Sanity project exists — nothing breaks by having this in place

## What's left — two steps, only the organiser can do these

1. **Create a free Sanity account** at [sanity.io](https://sanity.io) and a
   new project (a couple of minutes, just an email signup).
2. **Give me the project ID** it generates (or add it yourself as the
   environment variable `NEXT_PUBLIC_SANITY_PROJECT_ID`).

Once that's done, `/studio` becomes a real login screen, and the next piece
of work is migrating today's content (currently in `lib/content/*.ts`) into
Sanity documents, and pointing the pages at Sanity instead of those static
files. That's a contained follow-up change — it won't require touching the
page designs again.
