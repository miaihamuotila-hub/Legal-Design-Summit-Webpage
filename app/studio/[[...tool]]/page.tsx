import { isCmsConfigured } from "@/lib/cms/env";
import { StudioClient } from "./studio-client";

export const dynamic = "force-static";

// Not-yet-configured placeholder: keeps /studio from trying (and failing) to
// connect to a Sanity project that doesn't exist yet. Swap in automatically
// once NEXT_PUBLIC_SANITY_PROJECT_ID is set — see lib/cms/README.md.
export default function StudioPage() {
  if (!isCmsConfigured) {
    return (
      <div style={{ fontFamily: "system-ui", padding: 48, maxWidth: 560 }}>
        <h1 style={{ fontSize: 20, fontWeight: 700 }}>Studio not connected yet</h1>
        <p style={{ color: "#555", lineHeight: 1.5 }}>
          This will become the content editing screen once a Sanity project
          is connected. See <code>lib/cms/README.md</code> for the two
          remaining setup steps (create a free account, add the project ID).
        </p>
      </div>
    );
  }

  return <StudioClient />;
}
