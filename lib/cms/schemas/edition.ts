import { defineField, defineType } from "sanity";

// One record per Summit edition (2025, 2027, ...). Everything event-specific
// (sessions, workshops, partners) links back to an edition so old editions
// stay intact when a new one is created — see AI_BRIEF.md "Event lifecycle".
export default defineType({
  name: "edition",
  title: "Edition",
  type: "document",
  fields: [
    defineField({ name: "year", title: "Year", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Between editions", value: "between" },
          { title: "Announced", value: "announced" },
          { title: "Registration open", value: "registration" },
          { title: "Programme released", value: "programme" },
          { title: "Event week", value: "live" },
          { title: "Past (archived)", value: "archived" },
        ],
      },
      initialValue: "between",
    }),
    defineField({ name: "dateRangeLabel", title: "Dates (leave empty until confirmed)", type: "string" }),
    defineField({ name: "city", title: "City", type: "string" }),
    defineField({ name: "venue", title: "Venue", type: "reference", to: [{ type: "venue" }] }),
    defineField({ name: "description", title: "Approved description", type: "text" }),
    defineField({
      name: "metrics",
      title: "Confirmed metrics (e.g. attendee count)",
      type: "array",
      of: [{ type: "object", fields: [
        { name: "value", type: "string", title: "Value" },
        { name: "label", type: "string", title: "Label" },
      ] }],
    }),
    defineField({ name: "registrationUrl", title: "Registration URL (only when live)", type: "url" }),
    defineField({ name: "isArchived", title: "Archived / past edition", type: "boolean", initialValue: false }),
  ],
  preview: { select: { title: "year", subtitle: "status" } },
});
