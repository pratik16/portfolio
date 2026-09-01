"use client";

import Link from "next/link";
import { track } from "@vercel/analytics";
import type { ReactNode } from "react";

type TrackingProperties = Record<string, string | number | boolean | null>;

export function TrackedLink({
  href,
  event,
  properties,
  children,
  className = "",
  external = false,
  ariaLabel,
}: {
  href: string;
  event: string;
  properties?: TrackingProperties;
  children: ReactNode;
  className?: string;
  external?: boolean;
  ariaLabel?: string;
}) {
  const onClick = () => track(event, properties);

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} aria-label={ariaLabel} onClick={onClick}>
      {children}
    </Link>
  );
}
