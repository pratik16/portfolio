"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ctaHref, ctaLabel, primaryNav, site } from "@/lib/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  // Close everything on navigation. Adjusting during render rather than in an
  // effect — this is state derived from a changing value, not a subscription,
  // and it avoids a second render pass showing the menu over the new page.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMobileOpen(false);
    setServicesOpen(false);
  }

  // Hairline + backdrop only once the page has moved. The initial read is
  // deferred to the next frame so it runs after paint — the server cannot know
  // the scroll position, so reading it synchronously here would both risk a
  // hydration mismatch and force an immediate re-render.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const frame = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Escape closes; outside click closes the services dropdown.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  // Prevent background scroll while the mobile panel is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || mobileOpen
          ? "border-b border-line bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] w-full max-w-6xl items-center justify-between px-6 sm:px-8">
        <Link
          href="/"
          className="font-display text-xl tracking-tight"
          aria-label={`${site.name} — home`}
        >
          {site.name}
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {primaryNav.map((item) =>
            item.children ? (
              <div key={item.href} ref={servicesRef} className="relative">
                <button
                  type="button"
                  onClick={() => setServicesOpen((v) => !v)}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  className={`flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm transition-colors ${
                    isActive(item.href) ? "text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`text-[0.6rem] transition-transform duration-200 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {servicesOpen && (
                  <div className="absolute left-1/2 top-full z-50 mt-2 w-[26rem] -translate-x-1/2 overflow-hidden rounded-2xl border border-line bg-paper shadow-[0_20px_50px_-20px_rgba(26,25,23,0.25)]">
                    <ul className="p-2">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block rounded-xl px-4 py-3 transition-colors hover:bg-surface"
                          >
                            <span className="block text-sm font-medium">{child.label}</span>
                            <span className="mt-0.5 block text-sm leading-snug text-muted">
                              {child.blurb}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="border-t border-line bg-surface px-4 py-3">
                      <Link
                        href="/services"
                        className="text-sm font-medium text-clay hover:text-ink"
                      >
                        All services →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3.5 py-2 text-sm transition-colors ${
                  isActive(item.href) ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            ),
          )}

          <Link
            href={ctaHref}
            className="ml-3 rounded-full bg-clay px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-ink"
          >
            {ctaLabel}
          </Link>
        </nav>

        {/* Mobile trigger */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line lg:hidden"
        >
          <span className="relative block h-3 w-4" aria-hidden="true">
            <span
              className={`absolute left-0 block h-px w-full bg-ink transition-transform duration-200 ${
                mobileOpen ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-px w-full bg-ink transition-opacity duration-200 ${
                mobileOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-px w-full bg-ink transition-transform duration-200 ${
                mobileOpen ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="h-[calc(100dvh-4.5rem)] overflow-y-auto bg-paper lg:hidden"
        >
          <nav className="px-6 py-6 sm:px-8" aria-label="Mobile">
            <ul className="space-y-1">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block border-b border-line py-3.5 font-display text-2xl"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="mt-1 space-y-1 pb-2 pl-4">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block py-2 text-sm text-muted"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            <Link
              href={ctaHref}
              className="mt-8 flex w-full items-center justify-center rounded-full bg-clay px-6 py-4 font-medium text-paper"
            >
              {ctaLabel}
            </Link>

            <a
              href={site.phone.href}
              className="mt-3 flex w-full items-center justify-center rounded-full border border-line px-6 py-4 font-medium"
            >
              Call me: {site.phone.display}
            </a>
            <a
              href={site.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex w-full items-center justify-center rounded-full border border-line px-6 py-4 font-medium"
            >
              {site.whatsapp.label}
            </a>
            <p className="mt-3 text-center text-sm text-muted">
              Prefer to write instead?{" "}
              <Link href={ctaHref} className="font-medium text-clay hover:text-ink">
                Send me a message
              </Link>
            </p>
          </nav>
        </div>
      )}
    </header>
  );
}
