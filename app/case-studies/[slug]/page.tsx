import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { caseStudies, getCaseStudy } from "@/lib/data/case-studies";
import { getService } from "@/lib/data/services";
import { publicFileExists } from "@/lib/assets";
import { site } from "@/lib/data/site";
import {
  ArrowLink,
  ButtonLink,
  Container,
  Prose,
  Section,
  TechList,
} from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  return {
    title: `${study.name} — ${study.headline}`,
    description: study.summary,
    alternates: { canonical: `/case-studies/${study.slug}` },
    openGraph: {
      title: `${study.name} — ${study.headline}`,
      description: study.summary,
      url: `${site.url}/case-studies/${study.slug}`,
      type: "article",
    },
  };
}

/** The four narrative sections, rendered identically for every case study. */
function StorySection({
  eyebrow,
  title,
  paragraphs,
}: {
  eyebrow: string;
  title: string;
  paragraphs: string[];
}) {
  return (
    <div className="grid gap-8 border-t border-line py-14 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-4">
        <Reveal>
          <p className="eyebrow mb-4">{eyebrow}</p>
          <h2 className="font-display text-3xl leading-tight">{title}</h2>
        </Reveal>
      </div>
      <div className="lg:col-span-8">
        <Reveal delay={80}>
          <Prose paragraphs={paragraphs} />
        </Reveal>
      </div>
    </div>
  );
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const hasImage = Boolean(study.image) && publicFileExists(study.image!);
  const currentIndex = caseStudies.findIndex((c) => c.slug === study.slug);
  const next = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <>
      {/* Hero */}
      <Container>
        <div className="py-20 sm:py-24">
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-muted">
                <li>
                  <Link href="/case-studies" className="hover:text-ink">
                    Case studies
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-ink">{study.name}</li>
              </ol>
            </nav>
          </Reveal>

          <Reveal delay={60}>
            <h1 className="max-w-4xl font-display text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
              {study.headline}
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              {study.summary}
            </p>
          </Reveal>

          {study.liveUrl && (
            <Reveal delay={160}>
              <div className="mt-8">
                <ButtonLink href={study.liveUrl} variant="secondary" external>
                  Visit {study.name} ↗
                </ButtonLink>
              </div>
            </Reveal>
          )}

          {/* Fact strip */}
          <Reveal delay={200}>
            <dl className="mt-14 grid gap-8 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Client", value: study.client },
                { label: "Sector", value: study.sector },
                { label: "Duration", value: study.duration },
                { label: "Role", value: study.role },
              ].map((f) => (
                <div key={f.label}>
                  <dt className="eyebrow mb-2">{f.label}</dt>
                  <dd className="leading-snug text-ink-soft">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Container>

      {/* Screenshot, when one has been supplied */}
      {hasImage && (
        <Container width="wide">
          <Reveal>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-line bg-surface">
              <Image
                src={study.image!}
                alt={study.imageAlt ?? `${study.name} interface`}
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover"
                priority
              />
            </div>
          </Reveal>
        </Container>
      )}

      {/* Metrics */}
      <Section tone="surface" bordered className="py-14 sm:py-16">
        <Container>
          <dl className="grid gap-10 sm:grid-cols-3">
            {study.metrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 70}>
                <div>
                  <dt className="sr-only">{m.label}</dt>
                  <dd>
                    <span className="block font-display text-4xl leading-none text-clay sm:text-5xl">
                      {m.value}
                    </span>
                    <span className="mt-3 block text-sm leading-snug text-muted">
                      {m.label}
                    </span>
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </Container>
      </Section>

      {/* Problem -> Investigation -> Solution -> Result */}
      <Container>
        <div className="pb-8 pt-4">
          <StorySection eyebrow="01 — Problem" title="What was going wrong" paragraphs={study.problem} />
          <StorySection
            eyebrow="02 — Investigation"
            title="What the evidence showed"
            paragraphs={study.investigation}
          />
          <StorySection eyebrow="03 — Solution" title="What was built" paragraphs={study.solution} />
          <StorySection eyebrow="04 — Result" title="What changed" paragraphs={study.result} />
        </div>
      </Container>

      {/* Stack + related services */}
      <Section bordered tone="surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <TechList items={study.stack} label="Technologies involved" />
            </Reveal>

            <Reveal delay={80}>
              <div>
                <p className="eyebrow mb-4">Related services</p>
                <ul className="space-y-3">
                  {study.relatedServices.map((s) => {
                    const service = getService(s);
                    if (!service) return null;
                    return (
                      <li key={s}>
                        <ArrowLink href={`/services/${service.slug}`}>
                          {service.label}
                        </ArrowLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Next case study */}
      <Section bordered>
        <Container>
          <Link href={`/case-studies/${next.slug}`} className="group block">
            <p className="eyebrow mb-4">Next case study</p>
            <h2 className="max-w-3xl font-display text-3xl leading-tight transition-colors group-hover:text-clay sm:text-4xl">
              {next.headline}
            </h2>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-clay">
              {next.name}
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </span>
          </Link>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
