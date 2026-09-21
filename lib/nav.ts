// Primary navigation, per the AI brief's proposed information architecture
// (design-handoff/source-package/AI_BRIEF.md, "Proposed new site structure").
// Groups existing content into four buckets instead of the old 11-item flat nav.

export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  href?: string;
  links: NavLink[];
};

export const navGroups: NavGroup[] = [
  {
    label: "Summit",
    links: [
      { label: "Overview", href: "/", description: "The next edition, at a glance" },
      { label: "Programme", href: "/program", description: "Sessions across both days" },
      { label: "Speakers", href: "/speakers", description: "42 voices from past editions" },
      { label: "BrainFactory", href: "/brainfactory", description: "Hands-on workshops" },
      { label: "Tickets", href: "/tickets", description: "Registration & terms" },
      { label: "Travel & venue", href: "/travel", description: "Getting there, staying there" },
    ],
  },
  {
    label: "Community",
    links: [
      { label: "Who attends", href: "/attending", description: "The people in the room" },
      { label: "Volunteer", href: "/volunteer", description: "Help make it happen" },
      { label: "Partner with us", href: "/partner", description: "Sponsor & collaborate" },
    ],
  },
  {
    label: "Explore",
    links: [
      { label: "The Gallery", href: "/gallery", description: "Legal design work, showcased" },
      { label: "Blog", href: "/blog", description: "Essays & testimonials" },
      { label: "Past summits", href: "/archive", description: "2016 — today" },
    ],
  },
  {
    label: "About",
    links: [
      { label: "Our story", href: "/about", description: "How this started" },
      { label: "Values & code of conduct", href: "/values", description: "What we expect from each other" },
      { label: "Team & contact", href: "/team", description: "Who's behind this" },
    ],
  },
];
