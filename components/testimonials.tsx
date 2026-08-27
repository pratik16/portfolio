import { testimonials } from "@/lib/data/testimonials";
import { Container, Section, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/reveal";

/**
 * Renders nothing while lib/data/testimonials.ts is empty — which it is, by
 * design. The site stays credible with no testimonials rather than fabricated
 * ones. Add real quotes to that file and this section appears automatically.
 */
export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <Section bordered>
      <Container>
        <SectionHeading eyebrow="In their words" title="What people who have worked with me say" />

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 80}>
              <figure className="flex h-full flex-col justify-between rounded-2xl border border-line bg-paper p-8 sm:p-10">
                <blockquote className="text-lg leading-relaxed text-ink-soft">
                  <p>&ldquo;{t.quote}&rdquo;</p>
                </blockquote>
                <figcaption className="mt-8 border-t border-line pt-6">
                  <span className="block font-medium">{t.author}</span>
                  <span className="mt-0.5 block text-sm text-muted">{t.title}</span>
                  {t.source ? (
                    <span className="mt-2 block text-xs text-muted/70">{t.source}</span>
                  ) : null}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
