import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "Speakers",
};

export default function SpeakersPage() {
  return (
    <ComingSoon
      eyebrow="Summit"
      title="Speakers"
      note="The 2027 speaker lineup hasn't been confirmed yet. Once it is, profiles will appear here — alongside the 42 speakers from past editions."
    />
  );
}
