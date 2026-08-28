import Link from "next/link";
import { site } from "@/lib/data/site";
import { ButtonLink, Container, Section } from "@/components/ui";
import { Reveal } from "@/components/reveal";

/**
 * The closing call to action. Appears at the foot of every page, because
 * every page should end with an obvious next step.
 */
export function CtaBand({
  title = "Have a software problem, project or idea?",
  body = "Tell me what you are trying to achieve and where it is currently going wrong. You will get an honest read on it from someone who has built this kind of thing before — including if the answer is that you do not need what you were about to buy.",
  className = "",
}: {
  title?: string;
  body?: string;
  className?: string;
}) {
  return (
    <Section tone="surface" bordered className={className}>
      <Container>
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="font-display text-4xl leading-[1.1] sm:text-5xl">{title}</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">{body}</p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <ButtonLink href="/contact" size="lg">
                Discuss a Project
              </ButtonLink>
              <ButtonLink href={site.phone.href} variant="quiet" size="lg" external>
                Call me: {site.phone.display}
              </ButtonLink>
            </div>

            <p className="mt-4 text-sm text-muted">
              Prefer not to call?{" "}
              <Link href="/contact" className="font-medium text-clay hover:text-ink">
                Send me a message
              </Link>
            </p>

            <p className="mt-8 text-sm text-muted">
              Working with businesses across Australia — Melbourne, Sydney, Brisbane,
              Adelaide, Perth, Canberra and regional Australia.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
