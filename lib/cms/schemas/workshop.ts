import { defineField, defineType } from "sanity";

export default defineType({
  name: "workshop",
  title: "BrainFactory workshop",
  type: "document",
  fields: [
    defineField({ name: "edition", title: "Edition", type: "reference", to: [{ type: "edition" }], validation: (r) => r.required() }),
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "learningOutcomes", title: "Learning outcomes", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "level", title: "Level", type: "string", options: { list: ["beginner", "experienced", "all levels"] } }),
    defineField({ name: "facilitators", title: "Facilitators", type: "array", of: [{ type: "reference", to: [{ type: "person" }] }] }),
    defineField({ name: "timeSlot", title: "Time slot (e.g. Morning, 09:00–13:00)", type: "string" }),
    defineField({ name: "venue", title: "Venue", type: "reference", to: [{ type: "venue" }] }),
    defineField({ name: "eligibility", title: "Eligibility", type: "text" }),
    defineField({
      name: "availability",
      title: "Availability",
      type: "string",
      options: { list: ["open", "waitlist", "full"] },
      initialValue: "open",
    }),
    defineField({ name: "registrationUrl", title: "Registration route", type: "url" }),
  ],
  preview: { select: { title: "title", subtitle: "level" } },
});
