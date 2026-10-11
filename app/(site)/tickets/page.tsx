import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "Tickets",
};

export default function TicketsPage() {
  return (
    <ComingSoon
      eyebrow="Summit"
      title="Tickets"
      note="Ticket sales for the 2027 edition haven't opened yet. Be the first to know — sign up for our mailing list and we'll tell you the moment they're live."
      ctaLabel="Get updates"
    />
  );
}
