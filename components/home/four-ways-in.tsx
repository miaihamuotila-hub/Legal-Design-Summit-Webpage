import Link from "next/link";
import { fourWaysIn } from "@/lib/content/home";

export function FourWaysIn() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8 py-16 md:py-20">
        <p className="h-brand text-[11px] text-[#7D8A89] mb-8">Four ways in</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {fourWaysIn.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group border border-[#e2e0db] p-6 flex flex-col gap-3 hover:border-[#288F85] transition-colors"
            >
              <div className="h-brand text-[15px] text-[#1a1a1a] group-hover:text-[#288F85] transition-colors">
                {item.label}
              </div>
              <p className="text-[13px] text-[#7D8A89]">{item.description}</p>
              <div className="h-brand text-[10px] text-[#288F85] mt-auto pt-2">
                Learn more &rarr;
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
