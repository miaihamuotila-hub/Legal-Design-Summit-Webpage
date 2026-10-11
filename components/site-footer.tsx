import Link from "next/link";
import { Logo } from "@/components/logo";
import { navGroups } from "@/lib/nav";
import { nextEdition } from "@/lib/content/home";

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/legaldesignsummit/" },
  { label: "Instagram", href: "https://www.instagram.com/legaldesignsummit/" },
  { label: "Facebook", href: "https://www.facebook.com/legaldesignsummit/" },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Updates strip — real social channels, not a mock email form:
          no confirmed newsletter provider yet, so we don't collect addresses we can't act on. */}
      <div id="updates" className="border-b border-white/10 scroll-mt-20">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="h-brand text-xl md:text-2xl">Stay in the loop</div>
            <p className="text-[13px] text-[#A9B1B1] mt-1.5 max-w-md">
              {nextEdition.dateRange} in {nextEdition.city}. Ticket details
              aren&rsquo;t confirmed yet &mdash; follow along and you&rsquo;ll be first
              to know when they are.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="h-brand text-[11px] px-4 py-2.5 border border-white/25 hover:border-[#7DDAD0] hover:text-[#7DDAD0] transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1240px] px-5 md:px-8 py-12 grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="col-span-2">
          <Logo size="md" iconColor="teal" textColor="#ffffff" href={null} />
          <p className="text-[12px] font-medium text-[#7DDAD0] mt-4 italic">
            Designing evolution, leading revolution.
          </p>
        </div>

        {navGroups.map((group) => (
          <div key={group.label}>
            <div className="h-brand text-[10px] text-[#7D8A89] mb-3">
              {group.label}
            </div>
            <div className="flex flex-col gap-2">
              {group.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[12px] text-[#e2e0db] hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8 py-6 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-[11px] text-[#7D8A89]">
          <div>&copy; {new Date().getFullYear()} Legal Design Finland ry (3017417-5)</div>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="mailto:info@legaldesignsummit.com" className="hover:text-white">
              info@legaldesignsummit.com
            </a>
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/privacy-recruitment" className="hover:text-white">
              Recruitment privacy
            </Link>
            <a
              href="https://forms.gle/yFSxNdMBgnmbwZdWA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Whistleblower form
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
