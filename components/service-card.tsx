import Link from "next/link";
import type { Service } from "@/lib/data/services";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col justify-between bg-paper p-8 transition-colors duration-300 hover:bg-surface sm:p-10"
    >
      <div>
        <span className="font-display text-2xl text-clay/40">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="mt-4 font-display text-2xl leading-tight">{service.label}</h3>
        <p className="mt-3 leading-relaxed text-muted">{service.cardSummary}</p>
      </div>

      <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-clay">
        Learn more
        <span
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-1"
        >
          →
        </span>
      </span>
    </Link>
  );
}
