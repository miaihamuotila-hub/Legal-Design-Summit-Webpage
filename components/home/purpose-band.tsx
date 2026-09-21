import { purposeStatement } from "@/lib/content/home";

// A single confident line between the content teasers and the partner wall —
// the short purpose statement, distinct from the longer version on /about.
export function PurposeBand() {
  return (
    <section className="bg-[#1a1a1a]">
      <div className="mx-auto max-w-[900px] px-5 md:px-8 py-16 md:py-20 text-center">
        <p className="font-bold text-white text-[26px] md:text-[38px] leading-[1.3] text-balance">
          {purposeStatement}
        </p>
      </div>
    </section>
  );
}
