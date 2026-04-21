"use client";

import Link from "next/link";

type EvatrixLogoSize = "landing" | "auth" | "dashboard" | "small";

type EvatrixSiteLogoProps = {
  className?: string;
  href?: string;
  size?: EvatrixLogoSize;
};

const SIZE_MAP: Record<EvatrixLogoSize, string> = {
  landing: "w-[260px] md:w-[340px]",
  auth: "w-[240px] md:w-[300px]",
  dashboard: "w-[140px] md:w-[260px]",
  small: "w-[240px] md:w-[300px]",
};

export default function EvatrixSiteLogo({
  className = "",
  href = "/",
  size = "auth",
}: EvatrixSiteLogoProps) {
  return (
    <Link
      href={href}
      aria-label="Go to homepage"
      className={`inline-flex items-center justify-center shrink-0 ${className}`}
    >
      <img
        src="/brand/1000151293.png"
        alt="Evatrix"
        draggable={false}
        className={`${SIZE_MAP[size]} h-auto object-contain select-none`}
      />
    </Link>
  );
}