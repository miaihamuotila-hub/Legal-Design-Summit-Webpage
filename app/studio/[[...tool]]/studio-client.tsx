"use client";

import dynamic from "next/dynamic";
import config from "../../../sanity.config";

// Dynamically imported with ssr disabled, and kept behind this "use client"
// boundary: importing the `sanity` package from a Server Component file
// breaks under Next 16's stricter server/client module graph (it drags in
// `swr`'s React-Server-only export, which lacks the default export Sanity's
// bundle expects). Everything CMS-related must be reached only from here.
const NextStudio = dynamic(
  () => import("next-sanity/studio").then((m) => m.NextStudio),
  { ssr: false },
);

export function StudioClient() {
  return <NextStudio config={config} />;
}
