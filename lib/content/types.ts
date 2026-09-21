// The site's content model, per design-handoff/source-package/AI_BRIEF.md
// ("Content model for repeatable editions"). Both today's static content
// (lib/content/*.ts) and tomorrow's Sanity CMS (lib/cms/schemas/) conform to
// these shapes, so switching the data source later doesn't touch page code.

export type ConfirmationStatus = "confirmed" | "needs confirmation";

export type Edition = {
  year: string;
  status: string;
  dateRangeLabel: string | null;
  city: string | null;
  venue: Venue | null;
  description: string | null;
  metrics: { value: string; label: string }[];
  registrationUrl: string | null;
  isArchived: boolean;
};

export type Venue = {
  name: string;
  address: string | null;
  mapUrl: string | null;
  arrivalInfo: string | null;
  accessInfo: string | null;
  contact: string | null;
  lastChecked: string | null;
};

export type Person = {
  name: string;
  roleOrganisation: string | null;
  bio: string | null;
  portraitUrl: string | null;
  portraitAlt: string | null;
  linkedin: string | null;
  appearances: { editionYear: string; day: string; sessionTitle: string }[];
  consentStatus: ConfirmationStatus;
};

export type Session = {
  editionYear: string;
  day: string;
  startTime: string | null;
  endTime: string | null;
  timezone: string;
  track: string | null;
  title: string;
  format: string | null;
  description: string | null;
  speakerNames: string[];
  location: string | null;
  publicationStatus: "draft" | "published";
};

export type Workshop = {
  editionYear: string;
  title: string;
  description: string | null;
  learningOutcomes: string[];
  level: "beginner" | "experienced" | "all levels" | null;
  facilitatorNames: string[];
  timeSlot: string | null;
  venueName: string | null;
  eligibility: string | null;
  availability: "open" | "waitlist" | "full";
  registrationUrl: string | null;
};

export type Partner = {
  name: string;
  logoUrl: string | null;
  logoAlt: string | null;
  url: string | null;
  category: "primary supporter" | "collaborator";
  editionYears: string[];
  order: number | null;
  publicationStatus: "draft" | "published";
};

export type Article = {
  title: string;
  slug: string;
  authorCredits: string | null;
  originalDate: string | null;
  tags: string[];
  relatedEditionYear: string | null;
  oldUrlPath: string | null;
};

export type GalleryProject = {
  title: string;
  slug: string;
  contributors: string;
  summary: string | null;
  impact: string | null;
  keyLearnings: string | null;
  acknowledgements: string | null;
  tags: string[];
  year: string | null;
  resourceLinks: string[];
  relatedEditionYear: string | null;
};

export type TeamAssignment = {
  personName: string;
  responsibility: string | null;
  editionOrTenure: string | null;
  publicContact: string | null;
  status: "active" | "archived";
};

export type Testimonial = {
  kind: "testimonial" | "metric";
  quoteOrValue: string;
  attribution: string | null;
  year: string | null;
  scope: string | null;
  hasPermission: boolean;
  confirmationStatus: ConfirmationStatus;
};

export type Policy = {
  topic: string;
  responsibleOwner: string | null;
  applicability: string | null;
  effectiveDate: string | null;
  reviewDate: string | null;
  relatedUrl: string | null;
};
