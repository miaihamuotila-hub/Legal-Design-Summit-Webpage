import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "Programme",
};

export default function ProgramPage() {
  return (
    <ComingSoon
      eyebrow="Summit"
      title="Programme"
      note="Sessions for the 2027 edition haven't been scheduled yet. The full two-day programme will appear here once it's confirmed."
    />
  );
}
