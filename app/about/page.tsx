import type { Metadata } from "next";
import { aboutIntro, career, principles, workingTogether } from "@/lib/data/about";
import { engagementModels } from "@/lib/data/engagement-models";
import { site } from "@/lib/data/site";
import {
  ArrowLink,
  ButtonLink,
  Container,
  Prose,
  Section,
  SectionHeading,
  TechList,
} from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { Portrait } from "@/components/portrait";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: `About ${site.name} — Software Engineer & Solution Architect Australia`,
  description:
    "Pratik Vanol is an Australian-based senior software engineer and solution architect with 16+ years building, modernising and scaling software — PHP, Laravel, AWS, databases and AI.",
  alternates: { canonical: "/about" },
};

const capabilities = [
  "PHP",
  "Laravel",
  "Slim",
  "NodeJS",
  "React",
  "React Native",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "AWS",
  "Docker",
  "CI/CD",
  "Linux",
  "LLM integration",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Container>
        <div className="grid gap-14 py-20 sm:py-28 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow">About</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-display text-5xl leading-[1.05] sm:text-6xl">
                Senior software engineer and solution architect
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-10">
                <Prose paragraphs={aboutIntro} />
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <ButtonLink href="/contact">Discuss a Project</ButtonLink>
                <ButtonLink href={site.linkedin} variant="secondary" external>
                  LinkedIn ↗
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={120}>
              <Portrait priority />
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-6 border-t border-line pt-6">
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
      </Container>

      {/* Principles */}
      <Section bordered tone="surface">
        <Container>
          <SectionHeading
            eyebrow="How I approach the work"
            title="Six things I actually believe"
            lede="Not values on a wall — each of these shows up in the case studies, and each one has cost me something to learn."
          />

          <div className="mt-16 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <div className="border-t border-line pt-6">
                  <h3 className="text-base font-semibold">{p.title}</h3>
                  <p className="mt-2.5 leading-relaxed text-muted">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Career */}
      <Section bordered>
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="eyebrow mb-5">Background</p>
                <h2 className="font-display text-4xl leading-[1.1]">Sixteen years, briefly</h2>
                <p className="mt-6 leading-relaxed text-muted">
                  The full detail is on LinkedIn. This is the shape of it.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <ol className="space-y-px overflow-hidden rounded-2xl border border-line bg-line">
                {career.map((entry, i) => (
                  <li key={`${entry.period}-${entry.organisation}`} className="bg-paper">
                    <Reveal delay={i * 40}>
                      <div className="grid gap-2 p-6 sm:grid-cols-12 sm:gap-6 sm:p-7">
                        <p className="text-sm text-muted sm:col-span-3">{entry.period}</p>
                        <div className="sm:col-span-9">
                          <p className="font-medium">
                            {entry.role}
                            <span className="text-muted"> · {entry.organisation}</span>
                          </p>
                          <p className="mt-1.5 leading-relaxed text-muted">{entry.note}</p>
                        </div>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ol>

              <Reveal>
                <div className="mt-10 border-t border-line pt-8">
                  <TechList items={capabilities} label="Work regularly with" />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Working together */}
      <Section bordered tone="surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow mb-5">Working together</p>
                <h2 className="font-display text-4xl leading-[1.1]">
                  What it is actually like to hire me
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={80}>
                <Prose paragraphs={workingTogether} />
              </Reveal>
            </div>
          </div>

          {/* Engagement models */}
          <div className="mt-20 grid gap-6 md:grid-cols-2">
            {engagementModels.map((model, i) => (
              <Reveal key={model.title} delay={i * 60} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-line bg-paper p-8">
                  <h3 className="font-display text-xl">{model.title}</h3>
                  <p className="mt-2.5 text-sm font-medium text-clay">{model.bestFor}</p>
                  <p className="mt-4 leading-relaxed text-muted">{model.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-10">
              <ArrowLink href="/services">See what each service covers</ArrowLink>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Products */}
      <Section bordered>
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow mb-5">Outside client work</p>
                <h2 className="font-display text-4xl leading-[1.1]">
                  I build and run my own products
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={80}>
                <Prose
                  paragraphs={[
                    "PotatoAIHub is a live multi-model AI platform — chat, image and video generation across several providers behind one interface. I built it, I deployed it, and I operate it, which means the AI and cloud advice I give clients comes from running something real rather than reading about it.",
                    "PotatoChat, an Android AI chat application, is being prepared for release. Poise, a communication app in React Native, is in active development. Neither has shipped yet, so I make no claims about their results — but building products continuously is the most honest way I know to stay current.",
                    "It also keeps me honest about cost, failure and the gap between a demo that works and a product that holds up.",
                  ]}
                />
                <div className="mt-8 flex flex-wrap gap-6">
                  <ArrowLink href="/case-studies/potato-ai-hub">
                    Read the PotatoAIHub case study
                  </ArrowLink>
                  <ArrowLink href={site.products.potatoAiHub} external>
                    Visit potatoaihub.com
                  </ArrowLink>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Think I might be the right person for your project?"
        body="Tell me what you are trying to build, fix or decide. You will get a direct answer from me — not a sales process."
      />
    </>
  );
}
