import type { Metadata } from "next";
import { caseStudies, inProgress } from "@/lib/data/case-studies";
import { Container, Pill, Section, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { CaseStudyCard } from "@/components/case-study-card";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Software Development Case Studies",
  description:
    "Selected software engineering work: legacy PHP modernisation with up to 80% API performance gains, AI workflows, data platforms, healthcare systems, and a live multi-model AI platform.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  const [lead, ...rest] = caseStudies;

  return (
    <>
      <Container>
        <div className="py-20 sm:py-28">
          <Reveal>
            <p className="eyebrow">Case studies</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] sm:text-6xl">
              Selected work
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              Each of these follows the same structure — the problem, what investigation
              revealed, what was actually built, and what changed as a result. The
              reasoning matters more than the technology, so that is what gets the space.
            </p>
          </Reveal>
        </div>
      </Container>

      <Section bordered className="pt-0 sm:pt-0">
        <Container>
          <div className="mt-16 space-y-6">
            <Reveal>
              <CaseStudyCard study={lead} featured />
            </Reveal>

            <div className="grid gap-6 md:grid-cols-2">
              {rest.map((study, i) => (
                <Reveal key={study.slug} delay={i * 60} className="h-full">
                  <CaseStudyCard study={study} />
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* In development — honest framing, no results claimed */}
      <Section bordered tone="surface">
        <Container>
          <SectionHeading
            eyebrow="Currently building"
            title="In development"
            lede="Products being built right now. They are listed here because ongoing product work is the most current evidence of capability — but they have not shipped, so no results are claimed for them yet."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {inProgress.map((project, i) => (
              <Reveal key={project.name} delay={i * 70} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-dashed border-line bg-paper p-8 sm:p-10">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-2xl">{project.name}</h3>
                    <Pill>{project.status}</Pill>
                  </div>
                  <p className="mt-5 leading-relaxed text-muted">{project.description}</p>
                  <ul className="mt-8 flex flex-wrap gap-2 border-t border-line pt-6">
                    {project.stack.map((t) => (
                      <li key={t}>
                        <Pill>{t}</Pill>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Want the version of this for your own system?"
        body="The case studies above started as a conversation about something that was not working. Describe yours and you will get an honest read on what is actually going on and what fixing it would involve."
      />
    </>
  );
}
