import { defineField, defineType } from "sanity";

export default defineType({
  name: "galleryProject",
  title: "Gallery project",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "contributors", title: "Contributors (full credit, don't shorten)", type: "string" }),
    defineField({ name: "summary", title: "Summary", type: "text" }),
    defineField({ name: "about", title: "About / full write-up", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "impact", title: "Impact", type: "text" }),
    defineField({ name: "keyLearnings", title: "Key learnings", type: "text" }),
    defineField({ name: "acknowledgements", title: "Acknowledgements", type: "text" }),
    defineField({ name: "tags", title: "Tags", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "year", title: "Year", type: "string" }),
    defineField({ name: "images", title: "Images", type: "array", of: [{ type: "image" }] }),
    defineField({ name: "resourceLinks", title: "Resource links", type: "array", of: [{ type: "url" }] }),
    defineField({ name: "relatedEdition", title: "Related edition", type: "reference", to: [{ type: "edition" }] }),
  ],
  preview: { select: { title: "title", subtitle: "contributors" } },
});
