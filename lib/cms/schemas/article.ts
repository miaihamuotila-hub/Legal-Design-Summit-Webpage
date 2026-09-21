import { defineField, defineType } from "sanity";

export default defineType({
  name: "article",
  title: "Blog article",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "authorCredits", title: "Author credit(s)", type: "string" }),
    defineField({ name: "body", title: "Body", type: "array", of: [{ type: "block" }, { type: "image" }] }),
    defineField({ name: "originalDate", title: "Original publish date (if known)", type: "date" }),
    defineField({ name: "tags", title: "Tags", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "relatedEdition", title: "Related edition", type: "reference", to: [{ type: "edition" }] }),
    defineField({ name: "oldUrlPath", title: "Old URL path (for redirect mapping)", type: "string" }),
  ],
  preview: { select: { title: "title", subtitle: "authorCredits" } },
});
