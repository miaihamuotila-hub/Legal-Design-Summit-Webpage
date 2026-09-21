import type { Metadata } from "next";
import { purposeStatementLong } from "@/lib/content/about";

export const metadata: Metadata = {
  title: "Our Story",
};

// Placeholder page: holds the long purpose statement while the organiser
// drafts the full story/history/values content separately. Intentionally
// minimal rather than padded out — no invented history, no dead links to
// team/values sections that don't exist yet.
export default function AboutPage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8 pt-20 pb-4 md:pt-28">
          <p className="h-brand text-[11px] text-[#288F85] mb-4">About</p>
          <h1 className="font-bold text-[#1a1a1a] text-[13vw] leading-[1.02] md:text-[52px] md:leading-[1.05] max-w-3xl tracking-tight">
            Our story
          </h1>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8 py-16 md:py-24">
          <p className="font-bold text-[#1a1a1a] text-[24px] md:text-[34px] leading-[1.35] max-w-3xl text-balance">
            {purposeStatementLong}
          </p>
        </div>
      </section>

      <section className="bg-[#fbfaf8] border-t border-[#e2e0db]">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8 py-10">
          <p className="text-[13px] text-[#7D8A89] max-w-md">
            The rest of this page &mdash; our full history, values, and the people
            behind the Summit &mdash; is still being written. Check back soon.
          </p>
        </div>
      </section>
    </>
  );
}
