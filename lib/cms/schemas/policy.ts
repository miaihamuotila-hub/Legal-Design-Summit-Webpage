import { defineField, defineType } from "sanity";

export default defineType({
  name: "policy",
  title: "Policy / FAQ entry",
  type: "document",
  fields: [
    defineField({ name: "topic", title: "Topic / question", type: "string", validation: (r) => r.required() }),
    defineField({ name: "approvedText", title: "Approved text / answer", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "responsibleOwner", title: "Responsible owner", type: "string" }),
    defineField({ name: "applicability", title: "Applies to (e.g. Tickets page, BrainFactory FAQ)", type: "string" }),
    defineField({ name: "effectiveDate", title: "Effective date", type: "date" }),
    defineField({ name: "reviewDate", title: "Next review date", type: "date" }),
    defineField({ name: "relatedUrl", title: "Related form or page", type: "string" }),
  ],
  preview: { select: { title: "topic", subtitle: "applicability" } },
});
