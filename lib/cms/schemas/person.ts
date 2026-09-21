import { defineField, defineType } from "sanity";

// Speakers, facilitators, team members — one record per real person, shared
// across editions via `appearances`. Never create a Person record without a
// named source; see AI_BRIEF.md "Never invent speakers...".
export default defineType({
  name: "person",
  title: "Person",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "roleOrganisation", title: "Role / organisation", type: "string" }),
    defineField({ name: "bio", title: "Bio", type: "text" }),
    defineField({ name: "portrait", title: "Portrait", type: "image", options: { hotspot: true } }),
    defineField({ name: "portraitAlt", title: "Portrait alt text", type: "string" }),
    defineField({ name: "linkedin", title: "LinkedIn URL", type: "url" }),
    defineField({
      name: "appearances",
      title: "Edition appearances",
      type: "array",
      of: [{ type: "object", fields: [
        { name: "edition", type: "reference", to: [{ type: "edition" }] },
        { name: "day", type: "string", title: "Day" },
        { name: "sessionTitle", type: "string", title: "Session title" },
      ] }],
    }),
    defineField({
      name: "consentStatus",
      title: "Consent / review status",
      type: "string",
      options: { list: ["confirmed", "needs confirmation"] },
      initialValue: "needs confirmation",
    }),
  ],
  preview: { select: { title: "name", subtitle: "roleOrganisation", media: "portrait" } },
});
