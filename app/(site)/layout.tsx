import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

// Header/footer apply to all marketing pages, but not to /studio (which sits
// outside this route group and needs the full viewport to itself).
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </>
  );
}
