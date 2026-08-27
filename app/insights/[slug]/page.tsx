import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { formatDate, getAllInsights, getInsight } from "@/lib/insights";
import { site } from "@/lib/data/site";
import { Container, Pill, Section } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllInsights().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getInsight(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/insights/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `${site.url}/insights/${article.slug}`,
      type: "article",
      publishedTime: article.date,
      authors: [site.name],
    },
  };
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const article = await getInsight(slug);
  if (!article) notFound();

  const others = getAllInsights().filter((a) => a.slug !== slug).slice(0, 2);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    author: { "@type": "Person", name: site.name, url: site.url },
    publisher: { "@type": "Person", name: site.name, url: site.url },
    mainEntityOfPage: `${site.url}/insights/${article.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Container width="prose">
        <div className="py-16 sm:py-24">
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-8">
              <Link href="/insights" className="text-sm text-muted hover:text-ink">
                ← Insights
              </Link>
            </nav>
          </Reveal>

          <Reveal delay={60}>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
              <time dateTime={article.date}>{formatDate(article.date)}</time>
              {article.readingTime ? (
                <>
                  <span aria-hidden="true">·</span>
                  <span>{article.readingTime}</span>
                </>
              ) : null}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 font-display text-4xl leading-[1.1] sm:text-5xl">
              {article.title}
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
              {article.description}
            </p>
          </Reveal>

          {article.topics.length > 0 && (
            <Reveal delay={180}>
              <ul className="mt-8 flex flex-wrap gap-2">
                {article.topics.map((t) => (
                  <li key={t}>
                    <Pill>{t}</Pill>
                  </li>
                ))}
              </ul>
            </Reveal>
          )}

          <hr className="mt-12 border-line" />

          {/* Rendered from Markdown at build time. */}
          <div
            className="article mt-12"
            dangerouslySetInnerHTML={{ __html: article.html }}
          />

          {/* Byline */}
          <div className="mt-16 border-t border-line pt-8">
            <p className="text-sm text-muted">
              Written by{" "}
              <Link href="/about" className="font-medium text-ink hover:text-clay">
                {site.name}
              </Link>
              , {site.role.toLowerCase()} based in {site.location.country}.
            </p>
          </div>
        </div>
      </Container>

      {/* Further reading */}
      {others.length > 0 && (
        <Section bordered tone="surface">
          <Container>
            <p className="eyebrow mb-10">Further reading</p>
            <ul className="grid gap-6 md:grid-cols-2">
              {others.map((a, i) => (
                <li key={a.slug}>
                  <Reveal delay={i * 70}>
                    <Link
                      href={`/insights/${a.slug}`}
                      className="group block h-full rounded-2xl border border-line bg-paper p-8 transition-colors hover:border-ink/25"
                    >
                      <time className="text-sm text-muted" dateTime={a.date}>
                        {formatDate(a.date)}
                      </time>
                      <h2 className="mt-3 font-display text-2xl leading-snug transition-colors group-hover:text-clay">
                        {a.title}
                      </h2>
                      <p className="mt-3 leading-relaxed text-muted">{a.description}</p>
                    </Link>
                  </Reveal>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      )}

      <CtaBand />
    </>
  );
}
