import Link from "next/link";
import type { Metadata } from "next";
import { getFeaturedCaseStudies } from "@/lib/data/case-studies";
import { services } from "@/lib/data/services";
import { deliveryModel, differentiators, offshorePoints, problems } from "@/lib/data/home";
import { site } from "@/lib/data/site";
import {
  ArrowLink,
  ButtonLink,
  Container,
  Section,
  SectionHeading,
} from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { StatStrip, WorkedWith } from "@/components/stat-strip";
import { CaseStudyCard } from "@/components/case-study-card";
import { ServiceCard } from "@/components/service-card";
import { Portrait } from "@/components/portrait";
import { Testimonials } from "@/components/testimonials";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: `Software Development & Technology Consulting Australia | ${site.name}`,
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const featured = getFeaturedCaseStudies();

  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/* Hero                                                              */}
      {/* ---------------------------------------------------------------- */}
      <Container>
        <div className="py-20 sm:py-28 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="eyebrow">
                  {site.role} · {site.location.country}
                </p>
              </Reveal>

              <Reveal delay={80}>
                {/* Capped at 6xl rather than 7xl: the portrait column now takes
                    five of twelve, and 7xl wraps to five ragged lines in what
                    is left. */}
                <h1 className="mt-6 font-display text-5xl leading-[1.05] sm:text-6xl">
                  Software engineering and technology consulting for Australian businesses
                </h1>
              </Reveal>

              <Reveal delay={140}>
                <p className="mt-8 font-display text-2xl text-clay sm:text-3xl">
                  {site.shortTagline}
                </p>
              </Reveal>

              <Reveal delay={200}>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
                  Sixteen years building, modernising and scaling software — backend systems,
                  APIs, cloud infrastructure and AI. You work directly with the engineer doing
                  the work, not an account manager between you and it.
                </p>
              </Reveal>

              <Reveal delay={260}>
                <div className="mt-12 flex flex-wrap items-center gap-4">
                  <ButtonLink href="/contact" size="lg">
                    Discuss a Project
                  </ButtonLink>
                  <ButtonLink href="/case-studies" variant="secondary" size="lg">
                    View case studies
                  </ButtonLink>
                </div>
              </Reveal>
            </div>

            {/* The face is the trust signal for a one-person consultancy, so it
                sits above the fold rather than halfway down the page. Falls back
                to a deliberate placeholder until the photo file exists — see
                components/portrait.tsx. */}
            <div className="lg:col-span-5">
              <Reveal delay={120}>
                <Portrait preload className="max-w-[20rem] lg:ml-auto lg:max-w-[22rem]" />
              </Reveal>
              <Reveal delay={180}>
                <div className="mt-6 max-w-[20rem] border-t border-line pt-6 lg:ml-auto lg:max-w-[22rem]">
                  <p className="font-medium">{site.name}</p>
                  <p className="mt-1 text-sm text-muted">{site.role}</p>
                  <p className="mt-1 text-sm text-muted">
                    {site.location.city}, {site.location.regionCode} · Working across{" "}
                    {site.location.country}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>

      <StatStrip />
      <WorkedWith />

      {/* ---------------------------------------------------------------- */}
      {/* Problems — the visitor should recognise themselves here           */}
      {/* ---------------------------------------------------------------- */}
      <Section bordered>
        <Container>
          <SectionHeading
            eyebrow="Where people usually start"
            title="What is actually going wrong?"
            lede="Most enquiries arrive as one of these. If one of them sounds like your situation, the relevant page goes into what fixing it involves."
          />

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {problems.map((problem, i) => (
              <Reveal key={problem.question} delay={i * 60} className="h-full">
                <div className="flex h-full flex-col justify-between bg-paper p-8 sm:p-10">
                  <div>
                    <h3 className="font-display text-2xl leading-tight">{problem.question}</h3>
                    <p className="mt-4 leading-relaxed text-muted">{problem.body}</p>
                  </div>
                  <div className="mt-8">
                    <ArrowLink href={problem.href}>{problem.linkLabel}</ArrowLink>
                  </div>
                </div>
              </Reveal>
            ))}

            {/* Fills the grid and doubles as a soft CTA */}
            <Reveal delay={problems.length * 60} className="h-full">
              <div className="flex h-full flex-col justify-between bg-surface p-8 sm:p-10">
                <div>
                  <h3 className="font-display text-2xl leading-tight">Something else?</h3>
                  <p className="mt-4 leading-relaxed text-muted">
                    Most real problems do not arrive neatly categorised. Describe it in
                    your own words and you will get a straight answer on whether it is
                    something worth working on together.
                  </p>
                </div>
                <div className="mt-8">
                  <ArrowLink href="/contact">Start a conversation</ArrowLink>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Selected work                                                     */}
      {/* ---------------------------------------------------------------- */}
      <Section bordered tone="surface">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Selected work"
              title="Software that is running in production"
              lede="Real systems, real constraints, and the reasoning behind the decisions. Every figure below is measured, not estimated."
            />
            <ArrowLink href="/case-studies" className="mb-2">
              All case studies
            </ArrowLink>
          </div>

          <div className="mt-16 space-y-6">
            <Reveal>
              <CaseStudyCard study={featured[0]} featured />
            </Reveal>

            <div className="grid gap-6 lg:grid-cols-3">
              {featured.slice(1, 4).map((study, i) => (
                <Reveal key={study.slug} delay={i * 70} className="h-full">
                  <CaseStudyCard study={study} />
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Services                                                          */}
      {/* ---------------------------------------------------------------- */}
      <Section bordered>
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="What I can take responsibility for"
            lede="From a single audit to owning a product end to end. Each of these is a real engagement type, not a capability list."
          />

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 60} className="h-full">
                <div className="h-full">
                  <ServiceCard service={service} index={i} />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Why work with Pratik — includes the portrait                      */}
      {/* ---------------------------------------------------------------- */}
      <Section bordered tone="surface">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <Portrait className="max-w-[22rem]" />
              </Reveal>
              <Reveal delay={80}>
                <div className="mt-8 max-w-sm">
                  <p className="font-display text-2xl">{site.name}</p>
                  <p className="mt-1 text-sm text-muted">{site.role}</p>
                  <p className="mt-5 leading-relaxed text-muted">
                    Sixteen years of building software, most of it deep in backend
                    systems, databases and architecture — and still writing the code.
                  </p>
                  <div className="mt-6">
                    <ArrowLink href="/about">More about how I work</ArrowLink>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <SectionHeading
                eyebrow="Why work with me"
                title="Why an Australian business would trust me with this"
              />

              <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
                {differentiators.map((d, i) => (
                  <Reveal key={d.title} delay={i * 60}>
                    <div>
                      <h3 className="text-base font-semibold">{d.title}</h3>
                      <p className="mt-2.5 leading-relaxed text-muted">{d.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Delivery model — local accountability, offshore capacity          */}
      {/* ---------------------------------------------------------------- */}
      <Section bordered>
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow mb-5">{deliveryModel.eyebrow}</p>
                <h2 className="font-display text-4xl leading-[1.1] sm:text-5xl">
                  {deliveryModel.title}
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={80}>
                <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
                  {deliveryModel.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <div className="mt-10">
                  <ArrowLink href="/about">How engagements are structured</ArrowLink>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
            {offshorePoints.map((point, i) => (
              <Reveal key={point.title} delay={i * 60} className="h-full">
                <div className="h-full bg-paper p-8 sm:p-10">
                  <h3 className="font-display text-2xl leading-tight">{point.title}</h3>
                  <p className="mt-4 leading-relaxed text-muted">{point.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Testimonials />

      {/* ---------------------------------------------------------------- */}
      {/* Insights teaser                                                   */}
      {/* ---------------------------------------------------------------- */}
      <Section bordered tone="surface">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Insights"
              title="Writing about the work"
              lede="Notes on modernisation, performance, cloud and AI — written from projects actually delivered rather than assembled from search terms."
            />
            <Link
              href="/insights"
              className="mb-2 inline-flex items-center gap-1.5 text-sm font-medium text-clay hover:text-ink"
            >
              Read insights <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
