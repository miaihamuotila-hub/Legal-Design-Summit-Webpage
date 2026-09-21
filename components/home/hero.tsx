"use client";

import { useState } from "react";
import Link from "next/link";
import { manifesto, highlightsVideo } from "@/lib/content/home";

// Manifesto-first hero, with the event-first direction's video treatment
// folded in: a muted, looping ambient video plays behind the statement
// instead of a flat dark panel. The real site already serves a background
// video the same way (images/video/summit-footage.mp4 — autoplay/loop/muted/
// playsinline); we don't have that binary yet, so this degrades to a dark
// brand gradient until it's supplied at /video/hero-loop.mp4.
export function Hero() {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section className="relative min-h-[88vh] flex items-end overflow-hidden bg-[#1a1a1a]">
      {!videoFailed && (
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-45"
          autoPlay
          loop
          muted
          playsInline
          onError={() => setVideoFailed(true)}
        >
          <source src="/video/hero-loop.mp4" type="video/mp4" />
        </video>
      )}

      {/* Brand gradient — always present, doubles as the fallback when no video file exists yet */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 100% at 15% 100%, rgba(40,143,133,0.35), transparent 60%), radial-gradient(90% 80% at 90% 0%, rgba(156,7,96,0.35), transparent 55%), #1a1a1a",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent" />

      <div className="relative mx-auto max-w-[1240px] w-full px-5 md:px-8 pb-16 pt-40">
        <p className="h-brand text-[11px] text-[#7DDAD0] mb-5 tracking-widest">
          Legal Design Summit &middot; 9&ndash;10 September 2027
        </p>
        <h1 className="font-bold text-white text-[10vw] leading-[1.05] md:text-[52px] md:leading-[1.08] max-w-4xl tracking-tight">
          {manifesto.statement}
        </h1>
        <p className="h-brand text-[13px] md:text-[15px] text-[#7DDAD0] mt-6 tracking-wide">
          Designing evolution, leading revolution
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Link
            href="/#updates"
            className="h-brand text-[12px] px-6 py-3.5 bg-[#7DDAD0] text-[#1a1a1a] tracking-wide hover:bg-white transition-colors"
          >
            Get updates
          </Link>
          <a
            href={highlightsVideo.href}
            target="_blank"
            rel="noopener noreferrer"
            className="h-brand text-[12px] px-6 py-3.5 border border-white/40 text-white tracking-wide hover:border-white transition-colors"
          >
            {highlightsVideo.label}
          </a>
        </div>
      </div>
    </section>
  );
}
