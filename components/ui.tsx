import Link from "next/link";
import type { ReactNode } from "react";

/* ------------------------------------------------------------------ */
/* Layout primitives                                                    */
/* ------------------------------------------------------------------ */

export function Container({
  children,
  className = "",
  width = "default",
}: {
  children: ReactNode;
  className?: string;
  width?: "default" | "wide" | "prose";
}) {
  const widths = {
    default: "max-w-6xl",
    wide: "max-w-7xl",
    prose: "max-w-[42rem]",
  };
  return (
    <div className={`mx-auto w-full px-6 sm:px-8 ${widths[width]} ${className}`}>{children}</div>
  );
}

export function Section({
  children,
  className = "",
  bordered = false,
  tone = "paper",
  id,
}: {
  children: ReactNode;
  className?: string;
  /** Hairline rule on top — the main structural device of the design. */
  bordered?: boolean;
  tone?: "paper" | "surface";
  id?: string;
}) {
  return (
    <section
      id={id}
      className={[
        "py-20 sm:py-28",
        bordered ? "border-t border-line" : "",
        tone === "surface" ? "bg-surface" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Typography                                                           */
/* ------------------------------------------------------------------ */

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow mb-5">{children}</p>;
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={[
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
        className,
      ].join(" ")}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="font-display text-4xl leading-[1.1] sm:text-5xl">{title}</h2>
      {lede ? (
        <p className="mt-5 text-lg leading-relaxed text-muted sm:text-xl">{lede}</p>
      ) : null}
    </div>
  );
}

/** Long-form body copy: case study sections, about page, service pages. */
export function Prose({
  paragraphs,
  className = "",
}: {
  paragraphs: string[];
  className?: string;
}) {
  return (
    <div className={`space-y-5 text-lg leading-relaxed text-ink-soft ${className}`}>
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Actions                                                              */
/* ------------------------------------------------------------------ */

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-colors duration-200";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "quiet";
  size?: "md" | "lg";
  external?: boolean;
  className?: string;
}) {
  const variants = {
    primary: "bg-clay text-paper hover:bg-ink",
    secondary: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-paper",
    quiet: "border border-line bg-paper text-ink hover:border-ink/40",
  };
  const sizes = {
    md: "px-5 py-2.5",
    lg: "px-7 py-3.5 text-base",
  };
  const cls = `${buttonBase} ${variants[variant]} ${sizes[size]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/** Understated text link with a moving arrow. Used heavily instead of more buttons. */
export function ArrowLink({
  href,
  children,
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
}) {
  const cls = `group inline-flex items-center gap-1.5 text-sm font-medium text-clay transition-colors hover:text-ink ${className}`;
  const inner = (
    <>
      {children}
      <span
        aria-hidden="true"
        className="transition-transform duration-200 group-hover:translate-x-1"
      >
        →
      </span>
    </>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* Small pieces                                                         */
/* ------------------------------------------------------------------ */

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-line bg-paper px-3 py-1 text-xs font-medium text-muted">
      {children}
    </span>
  );
}

export function TechList({ items, label }: { items: readonly string[]; label?: string }) {
  return (
    <div>
      {label ? <p className="eyebrow mb-3">{label}</p> : null}
      <ul className="flex flex-wrap gap-2">
        {items.map((t) => (
          <li key={t}>
            <Pill>{t}</Pill>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Numbered list used for "how the work runs" sections. */
export function NumberedList({
  items,
}: {
  items: { title: string; body: string }[];
}) {
  return (
    <ol className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
      {items.map((item, i) => (
        <li key={item.title} className="bg-paper p-7 sm:p-8">
          <span className="font-display text-3xl text-clay/40">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-3 text-base font-semibold">{item.title}</h3>
          <p className="mt-2.5 leading-relaxed text-muted">{item.body}</p>
        </li>
      ))}
    </ol>
  );
}
