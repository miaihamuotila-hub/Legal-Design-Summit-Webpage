// Reads Sanity project config from environment variables. All optional on
// purpose: the site must keep working from lib/content/*.ts even before a
// Sanity project exists. See lib/cms/README.md for the activation steps.
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = "2025-01-01";

export const isCmsConfigured = Boolean(projectId);
