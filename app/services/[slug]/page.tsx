import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getService, services } from "@/lib/data/services";
import { getCaseStudiesForService } from "@/lib/data/case-studies";
import { site } from "@/lib/data/site";
import {
  ArrowLink,
  ButtonLink,
  Container,
  NumberedList,
  Section,
  SectionHeading,
  TechList,
} from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { CaseStudyCard } from "@/components/case-study-card";
import { CtaBand } from "@/components/cta-band";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${site.url}/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const relatedCaseStudies = getCaseStudiesForService(service.slug).slice(0, 3);
  const otherServices = services.filter((s) => s.slug !== service.slug);

  // FAQ structured data — these questions genuinely match what people search.
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <Container>
        <div className="py-20 sm:py-28">
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-muted">
                <li>
                  <Link href="/services" className="hover:text-ink">
                    Services
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-ink">{service.label}</li>
              </ol>
            </nav>
          </Reveal>

          <Reveal delay={60}>
            <h1 className="max-w-4xl font-display text-5xl leading-[1.05] sm:text-6xl">
              {service.title}
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              {service.lede}
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <ButtonLink href="/contact" size="lg">
                Discuss a Project
              </ButtonLink>
              <ButtonLink href="/case-studies" variant="secondary" size="lg">
                See related work
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Container>

      {/* Signs — help the visitor self-identify */}
      <Section bordered tone="surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow mb-5">Does this sound familiar?</p>
                <h2 className="font-display text-4xl leading-[1.1]">
                  You are probably here because of one of these
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <ul className="space-y-px overflow-hidden rounded-2xl border border-line bg-line">
                {service.signs.map((sign, i) => (
                  <li key={sign} className="bg-paper">
                    <Reveal delay={i * 50}>
                      <div className="flex gap-4 p-6 sm:p-7">
                        <span
                          aria-hidden="true"
                          className="mt-1 font-display text-sm text-clay"
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="leading-relaxed text-ink-soft">{sign}</p>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Capabilities */}
      <Section bordered>
        <Container>
          <SectionHeading
            eyebrow="What this covers"
            title="The work itself"
            lede="Not a capability list — these are the specific things an engagement in this area actually involves."
          />

          <div className="mt-16 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {service.capabilities.map((cap, i) => (
              <Reveal key={cap.title} delay={i * 60}>
                <div className="border-t border-line pt-6">
                  <h3 className="text-base font-semibold">{cap.title}</h3>
                  <p className="mt-2.5 leading-relaxed text-muted">{cap.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-16 border-t border-line pt-10">
              <TechList items={service.technologies} label="Typically involves" />
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Approach */}
      <Section bordered tone="surface">
        <Container>
          <SectionHeading
            eyebrow="How the work runs"
            title="The approach"
            lede="Consistent across engagements, because the order these things happen in is usually what determines whether a project goes well."
          />
          <div className="mt-16">
            <Reveal>
              <NumberedList items={service.approach} />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Related case studies */}
      {relatedCaseStudies.length > 0 && (
        <Section bordered>
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                eyebrow="Evidence"
                title="Where this has been done"
                lede="Real projects involving this work, with the reasoning and the results."
              />
              <ArrowLink href="/case-studies" className="mb-2">
                All case studies
              </ArrowLink>
            </div>

            <div className="mt-16 grid gap-6 lg:grid-cols-3">
              {relatedCaseStudies.map((study, i) => (
                <Reveal key={study.slug} delay={i * 70} className="h-full">
                  <CaseStudyCard study={study} />
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* FAQ */}
      <Section bordered tone="surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="eyebrow mb-5">Questions</p>
                <h2 className="font-display text-4xl leading-[1.1]">
                  What people usually ask
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <dl className="space-y-px overflow-hidden rounded-2xl border border-line bg-line">
                {service.faq.map((item, i) => (
                  <div key={item.question} className="bg-paper p-7 sm:p-8">
                    <Reveal delay={i * 50}>
                      <dt className="font-display text-xl leading-snug">{item.question}</dt>
                      <dd className="mt-3 leading-relaxed text-muted">{item.answer}</dd>
                    </Reveal>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </Section>

      {/* Other services */}
      <Section bordered>
        <Container>
          <p className="eyebrow mb-8">Other services</p>
          <ul className="flex flex-wrap gap-x-8 gap-y-4">
            {otherServices.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="font-display text-2xl text-muted transition-colors hover:text-ink sm:text-3xl"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
