import { defineField, defineType } from "sanity";

export default defineType({
  name: "session",
  title: "Programme session",
  type: "document",
  fields: [
    defineField({ name: "edition", title: "Edition", type: "reference", to: [{ type: "edition" }], validation: (r) => r.required() }),
    defineField({ name: "day", title: "Day / date", type: "string" }),
    defineField({ name: "startTime", title: "Start time", type: "string" }),
    defineField({ name: "endTime", title: "End time", type: "string" }),
    defineField({ name: "timezone", title: "Timezone", type: "string", initialValue: "Europe/Helsinki" }),
    defineField({ name: "track", title: "Track / theme", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "format", title: "Format", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "speakers", title: "Speakers", type: "array", of: [{ type: "reference", to: [{ type: "person" }] }] }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({
      name: "publicationStatus",
      title: "Publication status",
      type: "string",
      options: { list: ["draft", "published"] },
      initialValue: "draft",
    }),
  ],
  preview: { select: { title: "title", subtitle: "day" } },
});
