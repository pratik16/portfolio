import Image from "next/image";
import { publicFileExists } from "@/lib/assets";
import { site } from "@/lib/data/site";

/**
 * TODO(pratik): drop your headshot in at this path and it appears everywhere
 * automatically — home page, about page, nothing else to change.
 */
export const PORTRAIT_SRC = "/images/pratik/pratik-vanol.jpg";

export function Portrait({
  className = "",
  preload = false,
}: {
  className?: string;
  /**
   * Preload as the LCP image. Next 16 deprecated `priority` in favour of this.
   * Only set it on one image per page.
   */
  preload?: boolean;
}) {
  const hasPhoto = publicFileExists(PORTRAIT_SRC);

  return (
    <div
      className={`relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface-2 ${className}`}
    >
      {hasPhoto ? (
        <Image
          src={PORTRAIT_SRC}
          alt={`${site.name}, ${site.role}`}
          fill
          preload={preload}
          sizes="(max-width: 1024px) 100vw, 420px"
          className="object-cover"
        />
      ) : (
        // Deliberate placeholder rather than a broken image.
        <div className="flex h-full w-full items-center justify-center">
          <span
            aria-hidden="true"
            className="font-display text-6xl text-ink/15 sm:text-7xl"
          >
            PV
          </span>
          <span className="sr-only">Portrait of {site.name}</span>
        </div>
      )}
    </div>
  );
}
