import { defineField, defineType } from "sanity";

export default defineType({
  name: "partner",
  title: "Partner / collaborator",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "logo", title: "Logo", type: "image" }),
    defineField({ name: "logoAlt", title: "Logo alt text", type: "string" }),
    defineField({ name: "url", title: "Link", type: "url" }),
    defineField({
      name: "category",
      title: "Relationship category",
      type: "string",
      options: { list: ["primary supporter", "collaborator"] },
      initialValue: "collaborator",
    }),
    defineField({ name: "editions", title: "Applicable editions", type: "array", of: [{ type: "reference", to: [{ type: "edition" }] }] }),
    defineField({ name: "order", title: "Display order", type: "number" }),
    defineField({
      name: "publicationStatus",
      title: "Publication status",
      type: "string",
      options: { list: ["draft", "published"] },
      initialValue: "draft",
    }),
  ],
  preview: { select: { title: "name", subtitle: "category", media: "logo" } },
});
