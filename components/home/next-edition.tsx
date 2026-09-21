import Link from "next/link";
import { nextEdition } from "@/lib/content/home";

export function NextEdition() {
  return (
    <section className="bg-[#fbfaf8] border-y border-[#e2e0db]">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8 py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="h-brand text-[11px] text-[#288F85] mb-3">
              Next edition &middot; {nextEdition.year}
            </p>
            <p className="font-bold text-[34px] md:text-[48px] leading-none text-[#1a1a1a]">
              {nextEdition.dateRange}
            </p>
            <p className="h-brand text-[12px] text-[#9C0760] mt-3">
              BrainFactory &middot; {nextEdition.brainFactoryDate}
            </p>
            <p className="text-[15px] text-[#1a1a1a] mt-4 font-medium">
              {nextEdition.city} &mdash; {nextEdition.venue}
            </p>
            <p className="text-[13px] text-[#7D8A89] mt-1">{nextEdition.venueAddress}</p>
            <p className="text-[15px] text-[#4E5654] mt-4 max-w-md">
              {nextEdition.status} as soon as they&rsquo;re confirmed &mdash;
              we&rsquo;d rather tell you nothing than tell you something wrong.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link
              href="/#updates"
              className="h-brand text-[12px] px-6 py-3.5 bg-[#288F85] text-white tracking-wide hover:bg-[#1f6f67] transition-colors"
            >
              Get updates
            </Link>
            <Link
              href="/archive"
              className="h-brand text-[12px] px-6 py-3.5 border border-[#1a1a1a] text-[#1a1a1a] tracking-wide hover:bg-[#1a1a1a] hover:text-white transition-colors"
            >
              See past editions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
