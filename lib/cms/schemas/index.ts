import edition from "./edition";
import venue from "./venue";
import person from "./person";
import session from "./session";
import workshop from "./workshop";
import partner from "./partner";
import article from "./article";
import galleryProject from "./gallery-project";
import teamAssignment from "./team-assignment";
import testimonial from "./testimonial";
import policy from "./policy";

// The full content model from AI_BRIEF.md ("Content model for repeatable
// editions"), as editable Sanity document types.
export const schemaTypes = [
  edition,
  venue,
  person,
  session,
  workshop,
  partner,
  article,
  galleryProject,
  teamAssignment,
  testimonial,
  policy,
];
