import type { Metadata } from "next";
import Link from "next/link";
import { externalInsights, formatDate, getAllInsights } from "@/lib/insights";
import { Container, Pill, Section } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Insights — Software Engineering & Technology Notes",
  description:
    "Practical writing on legacy modernisation, API performance, cloud architecture and AI — based on real projects delivered for Australian and international businesses.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  const articles = getAllInsights();

  return (
    <>
      <Container>
        <div className="py-20 sm:py-28">
          <Reveal>
            <p className="eyebrow">Insights</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] sm:text-6xl">
              Writing about the work
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              Notes on modernisation, performance, cloud and AI — written from projects
              actually delivered, not assembled from search terms. Fewer articles, each
              one worth the read.
            </p>
          </Reveal>
        </div>
      </Container>

      <Section bordered className="pt-0 sm:pt-0">
        <Container>
          {articles.length === 0 ? (
            <p className="mt-16 text-muted">Articles are on the way.</p>
          ) : (
            <ul className="mt-16 space-y-px overflow-hidden rounded-2xl border border-line bg-line">
              {articles.map((article, i) => (
                <li key={article.slug} className="bg-paper">
                  <Reveal delay={i * 50}>
                    <Link
                      href={`/insights/${article.slug}`}
                      className="group block p-8 transition-colors hover:bg-surface sm:p-10"
                    >
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
                        <time dateTime={article.date}>{formatDate(article.date)}</time>
                        {article.readingTime ? (
                          <>
                            <span aria-hidden="true">·</span>
                            <span>{article.readingTime}</span>
                          </>
                        ) : null}
                      </div>

                      <h2 className="mt-4 max-w-3xl font-display text-2xl leading-snug transition-colors group-hover:text-clay sm:text-3xl">
                        {article.title}
                      </h2>

                      <p className="mt-3 max-w-2xl leading-relaxed text-muted">
                        {article.description}
                      </p>

                      {article.topics.length > 0 && (
                        <ul className="mt-6 flex flex-wrap gap-2">
                          {article.topics.map((t) => (
                            <li key={t}>
                              <Pill>{t}</Pill>
                            </li>
                          ))}
                        </ul>
                      )}
                    </Link>
                  </Reveal>
                </li>
              ))}
            </ul>
          )}
        </Container>
      </Section>

      <Section bordered tone="surface">
        <Container>
          <Reveal>
            <p className="eyebrow mb-5">Published elsewhere</p>
            <h2 className="max-w-3xl font-display text-4xl leading-[1.1] sm:text-5xl">
              External technical writing
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              Articles and tutorials published with engineering teams outside this site.
            </p>
          </Reveal>

          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {externalInsights.map((article, i) => (
              <li key={article.href}>
                <Reveal delay={i * 70}>
                  <a
                    href={article.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block h-full rounded-2xl border border-line bg-paper p-8 transition-colors hover:border-ink/25"
                  >
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
                      <span>{article.source}</span>
                      <span aria-hidden="true">·</span>
                      <time dateTime={article.date}>{formatDate(article.date)}</time>
                      {article.readingTime ? (
                        <>
                          <span aria-hidden="true">·</span>
                          <span>{article.readingTime}</span>
                        </>
                      ) : null}
                    </div>

                    <h3 className="mt-4 font-display text-2xl leading-snug transition-colors group-hover:text-clay">
                      {article.title}
                    </h3>

                    <p className="mt-3 leading-relaxed text-muted">{article.description}</p>

                    {article.topics.length > 0 && (
                      <ul className="mt-6 flex flex-wrap gap-2">
                        {article.topics.map((topic) => (
                          <li key={topic}>
                            <Pill>{topic}</Pill>
                          </li>
                        ))}
                      </ul>
                    )}

                    <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-clay transition-colors group-hover:text-ink">
                      Read on Bacancy
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </span>
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaBand
        title="Have a problem one of these describes?"
        body="These articles come from real projects. If one of them sounds like your situation, the conversation about your specific version of it is usually short and useful."
      />
    </>
  );
}
