// Homepage content, migrated from the real source site (see
// design-handoff/source-package/LDS_Source_Content.md) per the AI brief's
// evergreen / historical / needs-confirmation / proposed split.
// Nothing here is invented; unconfirmed 2027 fields are left empty on purpose.

export const manifesto = {
  // Evergreen — verbatim from the current homepage's <h1>.
  statement:
    "Where law meets design — and a global community turns ideas into better justice, strategic advantage, and truly human-centred legal services.",
};

// Evergreen — verbatim h3 sequence from the current homepage.
export const problemStatement = [
  { text: "Terms of Service that no one reads?", answer: "Check." },
  { text: "Contracts by lawyers, for lawyers?", answer: "Check." },
];
export const problemStatementClose = "This needs to change.";

// Historical — 2025 edition numbers. Speaker/workshop counts use the exact
// enumerable records we hold (42 profiles, 9 published workshops) rather than
// the old site's rounder marketing figures ("50+", "10"), which the brief
// flags as unreconciled. Attendee/session/day counts are preserved verbatim.
export const stats2025 = [
  { value: "600+", label: "Global attendees" },
  { value: "42", label: "Speakers" },
  { value: "20+", label: "Sessions" },
  { value: "9", label: "BrainFactory workshops" },
  { value: "2", label: "Intensive days" },
];

// Dates confirmed directly by the organiser (Mia Ihamuotila, Chair) on
// 2026-09-21. Venue confirmed as the same as 2025 — address verified against
// the source site's travel page, not re-typed from memory. Ticket details
// are still unconfirmed — left empty rather than guessed.
export const nextEdition = {
  year: "2027",
  dateRange: "9–10 September 2027",
  brainFactoryDate: "8 September 2027",
  city: "Helsinki, Finland",
  venue: "University of Helsinki Main Building",
  venueAddress: "5 Aleksanterinkatu, 00100 Helsinki, Finland",
  status: "Ticket details will be announced",
};

// Historical — real, confirmed external video (2025 BrainFactory Highlights).
// Not the full summit aftermovie; labelled accurately rather than overstated.
export const highlightsVideo = {
  label: "Watch 2025 BrainFactory highlights",
  href: "https://www.youtube.com/embed/GvknKJ2k98c",
};

// Historical — anonymous testimonial, verbatim, from the 2023 attendee page.
// No name is invented; the source itself is anonymous.
export const testimonial = {
  quote:
    "Unbelievable! From the organisation, the volunteers, the speakers and the topics covered.",
  attribution: "Anonymous attendee, 2023",
};

// Historical — real article titles (evergreen editorial content), a subset
// of the 8 migrated blog posts, selected for the homepage teaser.
export const blogTeasers = [
  {
    title: "Legal Design Summit 2025: what we learned (and what's next for the community)",
    slug: "2025-what-we-learned",
  },
  {
    title: "The Legal Design Summit: What we stand for as a global movement",
    slug: "what-we-stand-for",
  },
  {
    title: "BrainFactory 2025 – Expanding the Playground for Legal Design",
    slug: "brainfactory-2025-expanding-the-playground",
  },
];

// Historical — real Gallery projects (a subset of the 8 migrated records).
export const galleryTeasers = [
  { title: "The Legal Icon Dictionary", contributor: "Aneta Baranowska", slug: "legal-icon-dictionary" },
  {
    title: "Designing Trust: L'Oréal's Employee Privacy Policies Reimagined",
    contributor: "Laura Fauqueur & Alexandra Sabbe Ferri",
    slug: "designing-trust-loreal",
  },
  { title: "Human OversAIght: the Ops Room", contributor: "Joaquín Santuber, et al.", slug: "human-oversaight" },
];

// Historical — primary 2025 supporters, real names from the homepage link
// inventory. Logo artwork wasn't included in the source package (references
// only), so names are shown as text until brand-approved marks are supplied.
export const primaryPartners2025 = [
  "University of Helsinki",
  "Newcode.ai",
  "DLA Piper",
  "Legora",
  "EY Law",
  "Alma Insights",
  "Ilves Solutions",
  "Dot.",
  "Legal Design Journal",
];

export const collaboratorCount = "70+";

export const fourWaysIn = [
  { label: "Attend", href: "/tickets", description: "Join the community in person" },
  { label: "Speak or host", href: "/program", description: "Bring a session or workshop" },
  { label: "Volunteer", href: "/volunteer", description: "Help run the Summit" },
  { label: "Partner", href: "/partner", description: "Sponsor or collaborate" },
];
