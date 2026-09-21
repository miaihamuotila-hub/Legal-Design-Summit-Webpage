import Image from "next/image";
import Link from "next/link";

const ICON_SRC: Record<"magenta" | "teal" | "white" | "black", string> = {
  magenta: "/brand/unicorn-magenta.png",
  teal: "/brand/unicorn-teal.png",
  white: "/brand/unicorn-white.png",
  black: "/brand/unicorn-black.png",
};

export function Logo({
  textColor = "#1a1a1a",
  iconColor = "magenta",
  size = "md",
  href = "/",
}: {
  textColor?: string;
  iconColor?: "magenta" | "teal" | "white" | "black";
  size?: "sm" | "md" | "lg";
  href?: string | null;
}) {
  const dims = { sm: 16, md: 20, lg: 28 }[size];
  const textSize = { sm: "text-[11px]", md: "text-[13px]", lg: "text-xl" }[size];

  const mark = (
    <span className="inline-flex items-center gap-2 whitespace-nowrap">
      <Image
        src={ICON_SRC[iconColor]}
        alt=""
        width={dims}
        height={dims}
        className="shrink-0"
        priority
      />
      <span
        className={`h-brand ${textSize}`}
        style={{ color: textColor, letterSpacing: "0.04em" }}
      >
        Legal Design Summit
      </span>
    </span>
  );

  if (!href) return mark;

  return (
    <Link href={href} aria-label="Legal Design Summit — home">
      {mark}
    </Link>
  );
}
