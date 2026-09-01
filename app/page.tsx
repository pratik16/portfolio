import Link from "next/link";
import type { Metadata } from "next";
import { getFeaturedCaseStudies } from "@/lib/data/case-studies";
import { services } from "@/lib/data/services";
import { deliveryModel, differentiators, offshorePoints, problems } from "@/lib/data/home";
import { site } from "@/lib/data/site";
import {
  ArrowLink,
  Container,
  Section,
  SectionHeading,
} from "@/components/ui";
import { TrackedLink } from "@/components/tracked-link";
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

const primaryButtonClass =
  "inline-flex items-center justify-center gap-2 rounded-full bg-clay px-7 py-3.5 text-base font-medium text-paper transition-colors duration-200 hover:bg-ink";

const secondaryButtonClass =
  "inline-flex items-center justify-center gap-2 rounded-full border border-ink/25 px-7 py-3.5 text-base font-medium text-ink transition-colors duration-200 hover:border-ink hover:bg-ink hover:text-paper";

const visitorPaths = [
  {
    title: "See production proof",
    body: "Start with shipped systems, constraints, and measured outcomes.",
    href: "/case-studies",
    label: "View case studies",
    event: "View Case Studies click",
  },
  {
    title: "Match your problem",
    body: "Find the service page closest to what is slowing the business down.",
    href: "/services",
    label: "Explore services",
    event: "Homepage service path click",
  },
  {
    title: "Talk through the work",
    body: "Share the situation and get a direct read on the sensible next move.",
    href: "/contact",
    label: "Start a conversation",
    event: "Contact click",
  },
] as const;

const capabilityGroups = [
  { label: "Backend", tools: ["Laravel", "Node", "Next.js"] },
  { label: "Frontend", tools: ["React", "Angular"] },
  { label: "Cloud", tools: ["AWS", "APIs", "Databases"] },
] as const;

export default function HomePage() {
  const featured = getFeaturedCaseStudies();

  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/* Hero                                                              */}
      {/* ---------------------------------------------------------------- */}
      <Container>
        <div className="py-16 sm:py-24 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="eyebrow">
                  {site.role} · {site.location.country}
                </p>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="mt-6 font-display text-5xl leading-[1.05] sm:text-6xl">
                  Senior software engineering for Australian businesses that need the work owned, not just quoted.
                </h1>
              </Reveal>

              <Reveal delay={140}>
                <p className="mt-8 font-display text-2xl text-clay sm:text-3xl">
                  {site.shortTagline} Then keep improving it once real users arrive.
                </p>
              </Reveal>

              <Reveal delay={200}>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
                  I help businesses build new products, modernise systems that still matter,
                  and make slow software fast again across backend, frontend and cloud.
                  You work directly with the engineer making the architecture decisions
                  and taking responsibility for delivery.
                </p>
              </Reveal>

              <Reveal delay={260}>
                <div className="mt-12 flex flex-wrap items-center gap-4">
                  <TrackedLink
                    href="/contact"
                    event="Contact click"
                    properties={{ location: "hero_primary" }}
                    className={primaryButtonClass}
                  >
                    Discuss a Project
                  </TrackedLink>
                  <TrackedLink
                    href="/case-studies"
                    event="View Case Studies click"
                    properties={{ location: "hero_secondary" }}
                    className={secondaryButtonClass}
                  >
                    View case studies
                  </TrackedLink>
                </div>
              </Reveal>

              <Reveal delay={320}>
                <div className="mt-10 max-w-2xl border-y border-line py-6">
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted">
                    Common project stack
                  </p>
                  <div className="mt-4 grid gap-4 sm:grid-cols-3">
                    {capabilityGroups.map((group) => (
                      <div key={group.label}>
                        <p className="text-sm font-medium text-ink">{group.label}</p>
                        <p className="mt-1 text-sm leading-relaxed text-muted">
                          {group.tools.join(" · ")}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={360}>
                <dl className="mt-8 grid max-w-2xl gap-6 sm:grid-cols-3">
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-[0.12em] text-muted">
                      Best fit
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-ink-soft">
                      SaaS, internal tools, APIs and legacy platforms
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-[0.12em] text-muted">
                      Strength
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-ink-soft">
                      Backend architecture, full-stack delivery, cloud and AI
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-[0.12em] text-muted">
                      Engagement
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-ink-soft">
                      One responsible owner, with offshore capacity when needed
                    </dd>
                  </div>
                </dl>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={120}>
                <Portrait preload className="max-w-[20rem] lg:ml-auto lg:max-w-[22rem]" />
              </Reveal>
              <Reveal delay={180}>
                <div className="mt-6 max-w-[20rem] rounded-2xl border border-line bg-surface p-6 lg:ml-auto lg:max-w-[22rem]">
                  <p className="font-medium">{site.name}</p>
                  <p className="mt-1 text-sm text-muted">{site.role}</p>
                  <p className="mt-1 text-sm text-muted">
                    {site.location.city}, {site.location.regionCode} · Working across{" "}
                    {site.location.country}
                  </p>
                  <div className="mt-5 border-t border-line pt-5">
                    <p className="text-sm leading-relaxed text-muted">
                      Sixteen years hands-on, with a trusted offshore team available for
                      larger backend, frontend and cloud builds.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>

      <StatStrip />
      <WorkedWith />

      <Section bordered className="py-14 sm:py-16">
        <Container>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-3">
            {visitorPaths.map((path, i) => (
              <Reveal key={path.title} delay={i * 60} className="h-full">
                <TrackedLink
                  href={path.href}
                  event={path.event}
                  properties={{ location: "homepage_journey" }}
                  className="group flex h-full flex-col justify-between bg-paper p-7 transition-colors duration-300 hover:bg-surface sm:p-8"
                >
                  <div>
                    <span className="font-display text-3xl text-clay/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-4 font-display text-2xl leading-tight">
                      {path.title}
                    </h2>
                    <p className="mt-3 leading-relaxed text-muted">{path.body}</p>
                  </div>
                  <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-clay">
                    {path.label}
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </TrackedLink>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------------------------------------------------------------- */}
      {/* Problems — the visitor should recognise themselves here           */}
      {/* ---------------------------------------------------------------- */}
      <Section bordered>
        <Container>
          <SectionHeading
            eyebrow="Where people usually start"
            title="Find the version of the problem you are living with"
            lede="Most enquiries arrive as one of these. Pick the closest one and you will see what fixing it usually involves before you ever book a call."
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
                  <TrackedLink
                    href="/contact"
                    event="Contact click"
                    properties={{ location: "problem_grid" }}
                    className="group inline-flex items-center gap-1.5 text-sm font-medium text-clay transition-colors hover:text-ink"
                  >
                    Start a conversation
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </TrackedLink>
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
              title="Proof that the work holds up after launch"
              lede="Start here if you are deciding whether to keep reading. These are real systems, real constraints, and the reasoning behind the decisions."
            />
            <TrackedLink
              href="/case-studies"
              event="View Case Studies click"
              properties={{ location: "selected_work_header" }}
              className="group mb-2 inline-flex items-center gap-1.5 text-sm font-medium text-clay transition-colors hover:text-ink"
            >
              All case studies
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </TrackedLink>
          </div>

          <div className="mt-16 space-y-6">
            <Reveal>
              <CaseStudyCard study={featured[0]} featured trackingLocation="selected_work_featured" />
            </Reveal>

            <div className="grid gap-6 lg:grid-cols-3">
              {featured.slice(1, 4).map((study, i) => (
                <Reveal key={study.slug} delay={i * 70} className="h-full">
                  <CaseStudyCard study={study} trackingLocation="selected_work_grid" />
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
            title="Clear ways to start, without turning this into agency theatre"
            lede="From a focused audit to owning a product end to end. Each option points to a real engagement shape, not a vague capability list."
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
                    Sixteen years of building software across backend, frontend, cloud and
                    architecture — and still close enough to the code to own the outcome.
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
                title="Trust signals that matter before a first conversation"
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
