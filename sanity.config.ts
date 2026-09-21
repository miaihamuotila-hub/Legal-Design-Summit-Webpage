import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./lib/cms/schemas";
import { projectId, dataset } from "./lib/cms/env";

// Embedded Sanity Studio — served at /studio once NEXT_PUBLIC_SANITY_PROJECT_ID
// is set (see lib/cms/README.md). This is the actual no-code editing screen:
// content editors log in here and never touch code.
export default defineConfig({
  name: "legal_design_summit",
  title: "Legal Design Summit",
  projectId: projectId || "not-configured",
  dataset: dataset,
  basePath: "/studio",
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
});
