import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonial / metric",
  type: "document",
  fields: [
    defineField({ name: "kind", title: "Kind", type: "string", options: { list: ["testimonial", "metric"] } }),
    defineField({ name: "quoteOrValue", title: "Exact quote or value", type: "text", validation: (r) => r.required() }),
    defineField({ name: "attribution", title: "Attribution (leave blank if source is anonymous)", type: "string" }),
    defineField({ name: "year", title: "Year", type: "string" }),
    defineField({ name: "scope", title: "Scope (e.g. all attendees, BrainFactory only)", type: "string" }),
    defineField({ name: "hasPermission", title: "Permission to publish confirmed", type: "boolean", initialValue: false }),
    defineField({
      name: "confirmationStatus",
      title: "Confirmation status",
      type: "string",
      options: { list: ["confirmed", "needs confirmation"] },
      initialValue: "needs confirmation",
    }),
  ],
  preview: { select: { title: "quoteOrValue", subtitle: "attribution" } },
});
