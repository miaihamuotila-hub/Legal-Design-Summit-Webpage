import type { Metadata } from "next";
import { nextEdition } from "@/lib/content/home";
import { mapUrl, venueDetail, gettingThere, accommodation, explore, tips } from "@/lib/content/travel";

export const metadata: Metadata = {
  title: "Travel & Venue",
};

export default function TravelPage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8 pt-20 pb-8 md:pt-28">
          <p className="h-brand text-[11px] text-[#288F85] mb-4">Summit</p>
          <h1 className="font-bold text-[#1a1a1a] text-[13vw] leading-[1.02] md:text-[48px] md:leading-[1.05] max-w-3xl tracking-tight">
            Travel &amp; Venue
          </h1>
          <p className="text-[17px] text-[#4E5654] mt-5 max-w-xl leading-[1.5]">
            Plan your trip to Helsinki for the {nextEdition.year} Legal Design Summit,{" "}
            {nextEdition.dateRange}.
          </p>
        </div>
      </section>

      <section className="bg-[#fbfaf8] border-y border-[#e2e0db]">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8 py-12 md:py-16">
          <p className="h-brand text-[11px] text-[#7D8A89] mb-3">Summit venue</p>
          <h2 className="font-bold text-[#1a1a1a] text-[22px] md:text-[28px] mb-1">
            {nextEdition.venue}
          </h2>
          <p className="text-[15px] text-[#4E5654]">{nextEdition.venueAddress}</p>
          <div className="mt-5 max-w-2xl flex flex-col gap-3">
            <p className="text-[15px] text-[#4E5654] leading-[1.6]">
              The venue is {venueDetail.area}. {venueDetail.access}
            </p>
            <p className="text-[15px] text-[#4E5654] leading-[1.6]">{venueDetail.transit}</p>
          </div>
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-brand inline-block text-[11px] text-[#288F85] mt-5"
          >
            View in Google Maps &rarr;
          </a>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8 py-12 md:py-16">
          <p className="h-brand text-[11px] text-[#7D8A89] mb-6">Getting there</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gettingThere.map((g) => (
              <div key={g.method}>
                <div className="h-brand text-[13px] text-[#1a1a1a] mb-2">{g.method}</div>
                <p className="text-[14px] text-[#4E5654] leading-[1.6]">{g.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf8] border-y border-[#e2e0db]">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8 py-12 md:py-16">
          <p className="h-brand text-[11px] text-[#7D8A89] mb-2">Accommodation</p>
          <p className="text-[13px] text-[#A9B1B1] mb-6 max-w-lg">
            A few options within walking distance of the venue &mdash; not official
            partners, just handy to know about. Worth reconfirming rates and
            availability closer to {nextEdition.year}.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {accommodation.map((h) => (
              <a
                key={h.name}
                href={h.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-[#e2e0db] bg-white p-5 hover:border-[#288F85] transition-colors"
              >
                <div className="h-brand text-[9px] text-[#9C0760] mb-2">{h.tier}</div>
                <div className="font-bold text-[16px] text-[#1a1a1a]">{h.name}</div>
                <div className="text-[12px] text-[#7D8A89] mt-1">
                  {h.address} &middot; {h.walk}
                </div>
                <p className="text-[13px] text-[#4E5654] mt-2 leading-[1.5]">{h.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8 py-12 md:py-16">
          <p className="h-brand text-[11px] text-[#7D8A89] mb-6">While you&rsquo;re here</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {explore.map((e) => (
              <div key={e.name}>
                <div className="h-brand text-[13px] text-[#1a1a1a] mb-1">{e.name}</div>
                <p className="text-[13px] text-[#4E5654] leading-[1.6]">{e.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1a1a1a]">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8 py-12 md:py-16">
          <p className="h-brand text-[11px] text-[#7D8A89] mb-6">Travel tips</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {tips.map((t) => (
              <div key={t.label}>
                <div className="h-brand text-[11px] text-[#7DDAD0] mb-2">{t.label}</div>
                <p className="text-[13px] text-[#A9B1B1] leading-[1.6]">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
