import { defineField, defineType } from "sanity";

export default defineType({
  name: "venue",
  title: "Venue",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "address", title: "Address", type: "text" }),
    defineField({ name: "mapUrl", title: "Map link", type: "url" }),
    defineField({ name: "arrivalInfo", title: "Getting there", type: "text" }),
    defineField({ name: "accessInfo", title: "Accessibility info", type: "text" }),
    defineField({ name: "contact", title: "Venue contact", type: "string" }),
    defineField({ name: "lastChecked", title: "Last verified on", type: "date" }),
  ],
});
