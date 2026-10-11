import Link from "next/link";

// Shared "not published yet" page body — used wherever content genuinely
// doesn't exist for the next edition yet (Program, Speakers). Honest status
// text instead of a padded-out placeholder, per the brief's rule against
// showing empty content dressed up as real.
export function ComingSoon({
  eyebrow,
  title,
  note,
}: {
  eyebrow: string;
  title: string;
  note: string;
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8 pt-20 pb-24 md:pt-28 md:pb-32">
        <p className="h-brand text-[11px] text-[#288F85] mb-4">{eyebrow}</p>
        <h1 className="font-bold text-[#1a1a1a] text-[13vw] leading-[1.02] md:text-[52px] md:leading-[1.05] max-w-3xl tracking-tight">
          {title}
        </h1>
        <p className="h-brand text-[13px] text-[#9C0760] mt-6">To be announced</p>
        <p className="text-[15px] text-[#4E5654] mt-4 max-w-md leading-[1.6]">{note}</p>
        <Link
          href="/#updates"
          className="h-brand inline-block text-[12px] px-6 py-3.5 bg-[#288F85] text-white tracking-wide hover:bg-[#1f6f67] transition-colors mt-8"
        >
          Get updates
        </Link>
      </div>
    </section>
  );
}
