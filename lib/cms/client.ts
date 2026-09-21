import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion, isCmsConfigured } from "./env";

// `null` until a Sanity project ID is configured — callers must check
// `isCmsConfigured` (or handle `null`) before using this, which is what lets
// the rest of the app keep working unmodified while the CMS isn't live yet.
export const sanityClient = isCmsConfigured
  ? createClient({ projectId, dataset, apiVersion, useCdn: true })
  : null;
