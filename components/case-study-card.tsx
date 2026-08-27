import Link from "next/link";
import type { CaseStudy } from "@/lib/data/case-studies";

export function CaseStudyCard({
  study,
  featured = false,
}: {
  study: CaseStudy;
  /** Featured cards span the full width and carry more detail. */
  featured?: boolean;
}) {
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="group flex h-full flex-col justify-between rounded-2xl border border-line bg-paper p-8 transition-all duration-300 hover:border-ink/25 hover:shadow-[0_20px_50px_-30px_rgba(26,25,23,0.35)] sm:p-10"
    >
      <div>
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <span className="font-display text-2xl">{study.name}</span>
          <span className="text-sm text-muted">{study.duration}</span>
        </div>

        <h3
          className={`mt-5 font-display leading-[1.15] ${
            featured ? "text-3xl sm:text-4xl" : "text-2xl"
          }`}
        >
          {study.headline}
        </h3>

        <p className="mt-4 leading-relaxed text-muted">{study.summary}</p>
      </div>

      <div className="mt-8">
        <dl className="flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-6">
          {study.metrics.slice(0, featured ? 3 : 2).map((m) => (
            <div key={m.label}>
              <dt className="sr-only">{m.label}</dt>
              <dd>
                <span className="block font-display text-xl text-clay">{m.value}</span>
                <span className="mt-1 block text-xs leading-snug text-muted">{m.label}</span>
              </dd>
            </div>
          ))}
        </dl>

        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-clay">
          Read the case study
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-1"
          >
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
