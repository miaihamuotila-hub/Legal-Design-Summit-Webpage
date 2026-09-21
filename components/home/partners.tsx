import { primaryPartners2025, collaboratorCount } from "@/lib/content/home";

export function Partners() {
  return (
    <section className="bg-[#fbfaf8] border-t border-[#e2e0db]">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8 py-16 md:py-20">
        <p className="h-brand text-[11px] text-[#7D8A89] mb-2">
          Made possible by &mdash; 2025 edition
        </p>
        <p className="text-[12px] text-[#A9B1B1] mb-8 max-w-lg">
          Logo artwork wasn&rsquo;t part of this migration, so names are shown as text
          for now. Next edition&rsquo;s supporters will be confirmed separately.
        </p>
        <div className="flex flex-wrap gap-x-8 gap-y-4">
          {primaryPartners2025.map((name) => (
            <span
              key={name}
              className="h-brand text-[14px] text-[#4E5654]"
            >
              {name}
            </span>
          ))}
        </div>
        <p className="text-[12px] text-[#7D8A89] mt-8">
          &plus; {collaboratorCount} collaborating organisations across research,
          education and legal-tech.
        </p>
      </div>
    </section>
  );
}
