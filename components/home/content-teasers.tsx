import Link from "next/link";
import { blogTeasers, galleryTeasers } from "@/lib/content/home";

export function ContentTeasers() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8 py-16 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-14">
        <div>
          <div className="flex items-baseline justify-between mb-6">
            <p className="h-brand text-[11px] text-[#7D8A89]">From the Gallery</p>
            <Link href="/gallery" className="h-brand text-[10px] text-[#288F85]">
              Browse work &rarr;
            </Link>
          </div>
          <div className="flex flex-col gap-5">
            {galleryTeasers.map((g) => (
              <Link
                key={g.slug}
                href={`/gallery/${g.slug}`}
                className="group flex gap-4 items-start"
              >
                <div className="h-16 w-16 shrink-0 bg-[#FCBDE3] group-hover:bg-[#DD7EB7] transition-colors" />
                <div>
                  <div className="h-brand text-[13px] text-[#1a1a1a] normal-case leading-snug">
                    {g.title}
                  </div>
                  <div className="text-[12px] text-[#7D8A89] mt-1">{g.contributor}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-baseline justify-between mb-6">
            <p className="h-brand text-[11px] text-[#7D8A89]">From the blog</p>
            <Link href="/blog" className="h-brand text-[10px] text-[#288F85]">
              Read more &rarr;
            </Link>
          </div>
          <div className="flex flex-col gap-5">
            {blogTeasers.map((b) => (
              <Link
                key={b.slug}
                href={`/blog/${b.slug}`}
                className="group flex gap-4 items-start"
              >
                <div className="h-16 w-16 shrink-0 bg-[#AEEAE4] group-hover:bg-[#7DDAD0] transition-colors" />
                <div className="h-brand text-[13px] text-[#1a1a1a] normal-case leading-snug">
                  {b.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
