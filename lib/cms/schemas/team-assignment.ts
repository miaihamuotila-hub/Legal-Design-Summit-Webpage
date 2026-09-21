import { defineField, defineType } from "sanity";

// Links a Person to a role/responsibility for a given edition or tenure,
// so we can show "current team" vs. "past volunteers" without editing the
// Person record itself.
export default defineType({
  name: "teamAssignment",
  title: "Team assignment",
  type: "document",
  fields: [
    defineField({ name: "person", title: "Person", type: "reference", to: [{ type: "person" }], validation: (r) => r.required() }),
    defineField({ name: "responsibility", title: "Responsibility / title", type: "string" }),
    defineField({ name: "editionOrTenure", title: "Edition or tenure (e.g. 2025, or 2023–2025)", type: "string" }),
    defineField({ name: "publicContact", title: "Public contact (if any)", type: "string" }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: { list: ["active", "archived"] },
      initialValue: "active",
    }),
  ],
  preview: { select: { title: "responsibility", subtitle: "editionOrTenure" } },
});
