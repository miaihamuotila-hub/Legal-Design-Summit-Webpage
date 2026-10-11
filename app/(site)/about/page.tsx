import type { Metadata } from "next";
import Link from "next/link";
import { manifesto } from "@/lib/content/home";
import { pageTitle, sections, values, closing } from "@/lib/content/about";

export const metadata: Metadata = {
  title: "About",
};

const VALUE_ACCENTS = ["#288F85", "#9C0760", "#7DDAD0", "#DD7EB7"];

export default function AboutPage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8 pt-20 pb-8 md:pt-28">
          <p className="h-brand text-[11px] text-[#288F85] mb-4">About</p>
          <h1 className="font-bold text-[#1a1a1a] text-[11vw] leading-[1.02] md:text-[48px] md:leading-[1.05] max-w-3xl tracking-tight">
            {pageTitle}
          </h1>
          <p className="text-[17px] md:text-[20px] text-[#4E5654] mt-6 max-w-2xl leading-[1.5]">
            {manifesto.full}
          </p>
        </div>
      </section>

      {sections.map((section, i) => (
        <section key={section.heading} className={i % 2 === 1 ? "bg-[#fbfaf8]" : "bg-white"}>
          <div className="mx-auto max-w-[1240px] px-5 md:px-8 py-12 md:py-16">
            <h2 className="font-bold text-[#1a1a1a] text-[24px] md:text-[30px] leading-[1.25] max-w-2xl mb-6 text-balance">
              {section.heading}
            </h2>
            <div className="flex flex-col gap-4 max-w-2xl">
              {section.paragraphs.map((p, idx) => (
                <p key={idx} className="text-[15px] md:text-[16px] text-[#4E5654] leading-[1.65]">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-[#1a1a1a]">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8 py-16 md:py-20">
          <p className="h-brand text-[11px] text-[#7D8A89] mb-8">The values we put into practice</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
            {values.map((v, i) => (
              <div key={v.name} className="border-t-2 pt-4" style={{ borderColor: VALUE_ACCENTS[i] }}>
                <div className="h-brand text-[16px] text-white mb-2">{v.name}</div>
                <p className="text-[14px] text-[#A9B1B1] leading-[1.6]">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8 py-16 md:py-24">
          <div className="max-w-2xl flex flex-col gap-4">
            {closing.paragraphs.map((p, idx) => (
              <p key={idx} className="text-[15px] md:text-[16px] text-[#4E5654] leading-[1.65]">
                {p}
              </p>
            ))}
            <p className="font-bold text-[#1a1a1a] text-[22px] md:text-[28px] leading-[1.3] mt-2 text-balance">
              {closing.boldLine}
            </p>
          </div>
          <Link
            href="/#updates"
            className="h-brand inline-block text-[12px] px-6 py-3.5 bg-[#288F85] text-white tracking-wide hover:bg-[#1f6f67] transition-colors mt-8"
          >
            Get updates
          </Link>
        </div>
      </section>
    </>
  );
}
