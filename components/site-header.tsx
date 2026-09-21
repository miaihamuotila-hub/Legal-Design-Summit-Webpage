"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { navGroups } from "@/lib/nav";

export function SiteHeader() {
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-[#e2e0db]">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="flex h-[68px] items-center justify-between">
          <Logo size="md" />

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-1"
            onMouseLeave={() => setOpenGroup(null)}
          >
            {navGroups.map((group) => (
              <div
                key={group.label}
                className="relative"
                onMouseEnter={() => setOpenGroup(group.label)}
              >
                <button
                  className={`h-brand text-[11px] px-4 py-2 tracking-wide transition-colors ${
                    openGroup === group.label
                      ? "text-[#288F85]"
                      : "text-[#4E5654] hover:text-[#1a1a1a]"
                  }`}
                  onClick={() =>
                    setOpenGroup(openGroup === group.label ? null : group.label)
                  }
                >
                  {group.label}
                </button>

                {openGroup === group.label && (
                  <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
                    <div className="w-64 bg-white border border-[#e2e0db] rounded-md shadow-lg overflow-hidden">
                      {group.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block px-4 py-3 hover:bg-[#fbfaf8] border-b border-[#f0eee9] last:border-b-0"
                          onClick={() => setOpenGroup(null)}
                        >
                          <div className="h-brand text-[12px] text-[#1a1a1a]">
                            {link.label}
                          </div>
                          {link.description && (
                            <div className="text-[11px] text-[#7D8A89] mt-0.5">
                              {link.description}
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/#updates"
              className="h-brand text-[11px] px-4 py-2.5 bg-[#288F85] text-white tracking-wide hover:bg-[#1f6f67] transition-colors"
            >
              Get updates
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden h-brand text-[11px] px-3 py-2 border border-[#e2e0db]"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            {mobileOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#e2e0db] bg-white">
          <div className="mx-auto max-w-[1240px] px-5 py-4 flex flex-col gap-5">
            {navGroups.map((group) => (
              <div key={group.label}>
                <div className="h-brand text-[10px] text-[#7D8A89] mb-2">
                  {group.label}
                </div>
                <div className="flex flex-col gap-2.5">
                  {group.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="h-brand text-[13px] text-[#1a1a1a]"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <Link
              href="/#updates"
              className="h-brand text-[11px] px-4 py-3 bg-[#288F85] text-white text-center tracking-wide"
              onClick={() => setMobileOpen(false)}
            >
              Get updates
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
