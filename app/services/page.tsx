import type { Metadata } from "next";
import { services } from "@/lib/data/services";
import { engagementModels } from "@/lib/data/engagement-models";
import { Container, Section, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { ServiceCard } from "@/components/service-card";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Services — Software Development, Modernisation, AI & Cloud",
  description:
    "Software development, legacy modernisation, web and API development, AI automation, and AWS cloud consulting for Australian businesses.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <Container>
        <div className="py-20 sm:py-28">
          <Reveal>
            <p className="eyebrow">Services</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] sm:text-6xl">
              What I can take responsibility for
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              Five areas, all of them things I have delivered rather than things I could
              learn. Most engagements draw on more than one — a modernisation project is
              usually also a performance project, and an AI feature still needs an API
              behind it.
            </p>
          </Reveal>
        </div>
      </Container>

      <Section bordered className="pt-0 sm:pt-0">
        <Container>
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

      {/* Engagement models — how the work is structured commercially */}
      <Section bordered tone="surface">
        <Container>
          <SectionHeading
            eyebrow="How engagements work"
            title="Four ways to work together"
            lede="Which one fits depends on what you already know about the problem. If you are not sure, the audit is usually the cheapest way to find out."
          />

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {engagementModels.map((model, i) => (
              <Reveal key={model.title} delay={i * 70} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-line bg-paper p-8 sm:p-10">
                  <h3 className="font-display text-2xl">{model.title}</h3>
                  <p className="mt-3 text-sm font-medium text-clay">{model.bestFor}</p>
                  <p className="mt-5 leading-relaxed text-muted">{model.description}</p>

                  <ul className="mt-8 space-y-2.5 border-t border-line pt-6">
                    {model.includes.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-muted">
                        <span aria-hidden="true" className="text-clay">
                          —
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-12 max-w-2xl leading-relaxed text-muted">
              Rates are not published here because a sensible number depends on what the
              work actually is. Describe the problem and you will get a clear, specific
              proposal rather than a figure pulled off a pricing page.
            </p>
          </Reveal>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
