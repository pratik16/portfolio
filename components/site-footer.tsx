import Link from "next/link";
import { primaryNav, site } from "@/lib/data/site";
import { Container } from "@/components/ui";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const serviceLinks = primaryNav.find((n) => n.children)?.children ?? [];

  return (
    <footer className="border-t border-line bg-surface">
      <Container>
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-8">
          {/* Identity */}
          <div className="lg:col-span-5">
            <p className="font-display text-2xl">{site.name}</p>
            <p className="mt-2 text-sm text-muted">{site.role}</p>
            <p className="mt-6 max-w-sm leading-relaxed text-muted">
              Australian-based senior software engineering and technology consulting.
              Building, modernising and scaling software for businesses across Australia.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-clay px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-ink"
              >
                Discuss a Project
              </Link>
              <a
                href={site.phone.href}
                className="rounded-full border border-ink/20 px-5 py-2.5 text-sm font-medium transition-colors hover:border-ink"
              >
                Call me: {site.phone.display}
              </a>
            </div>
            <p className="mt-3 text-sm text-muted">
              Prefer not to call?{" "}
              <Link href="/contact" className="font-medium text-clay hover:text-ink">
                Send me a message
              </Link>
            </p>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <p className="eyebrow mb-4">Services</p>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-muted transition-colors hover:text-ink">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2">
            <p className="eyebrow mb-4">Explore</p>
            <ul className="space-y-2.5">
              {[
                { label: "Case Studies", href: "/case-studies" },
                { label: "Insights", href: "/insights" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-muted transition-colors hover:text-ink">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="lg:col-span-2">
            <p className="eyebrow mb-4">Connect</p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-ink"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={site.phone.href}
                  className="text-sm text-muted transition-colors hover:text-ink"
                >
                  Call me: {site.phone.display}
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted transition-colors hover:text-ink"
                >
                  Prefer not to call? Send a message
                </Link>
              </li>
              <li>
                <a
                  href={site.products.potatoAiHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-ink"
                >
                  PotatoAIHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-line py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. Serving businesses across Australia.
          </p>
          <p>
            {site.location.city}, {site.location.regionCode} · {site.location.country}
          </p>
        </div>
      </Container>
    </footer>
  );
}
