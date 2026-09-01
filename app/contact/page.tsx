import type { Metadata } from "next";
import { site } from "@/lib/data/site";
import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { EnquiryForm } from "@/components/enquiry-form";

export const metadata: Metadata = {
  title: "Discuss Your Software Project",
  description:
    "Talk directly to an Australian-based senior software engineer about your project. Software development, legacy modernisation, performance, AI and cloud consulting.",
  alternates: { canonical: "/contact" },
};

const expectations = [
  {
    title: "You talk to me, not a sales process",
    body: "The person who replies is the person who would do the work. There is no qualification call before you get to speak to someone technical.",
  },
  {
    title: "A straight answer",
    body: "Including when the answer is that you do not need what you were about to buy, or that someone else would serve you better. A project that should not have been built helps neither of us.",
  },
  {
    title: "Usually within one business day",
    body: "If it is urgent, calling is faster than any form. The number is on this page and it reaches me.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Container>
        <div className="py-20 sm:py-28">
          <Reveal>
            <p className="eyebrow">Contact</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] sm:text-6xl">
              Have a software project? Let&rsquo;s talk.
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              Tell me what you want to build, improve or explore. A few practical details
              are enough to start a useful conversation.
            </p>
          </Reveal>
        </div>
      </Container>

      <Section bordered className="pt-14 sm:pt-16">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            {/* Form */}
            <div id="enquiry-form" className="lg:col-span-7">
              <EnquiryForm />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-5">
              <Reveal delay={80}>
                <div className="rounded-2xl border border-line bg-surface p-8 sm:p-10">
                  <p className="eyebrow mb-5">Prefer to call?</p>
                  <a
                    href={site.phone.href}
                    className="font-display text-3xl transition-colors hover:text-clay sm:text-4xl"
                  >
                    Call me: {site.phone.display}
                  </a>
                  <p className="mt-5 leading-relaxed text-muted">
                    Straight through to me. If you are weighing something up and would
                    rather think out loud than write it down, this is usually the quicker
                    route.
                  </p>
                  <p className="mt-4 text-sm text-muted">
                    Prefer not to call?{" "}
                    <a href="#enquiry-form" className="font-medium text-clay hover:text-ink">
                      Send me a message
                    </a>
                  </p>

                  <div className="mt-8 border-t border-line pt-6">
                    <a
                      href={site.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-clay hover:text-ink"
                    >
                      Connect on LinkedIn
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={140}>
                <div className="mt-10 space-y-8">
                  {expectations.map((e) => (
                    <div key={e.title} className="border-t border-line pt-6">
                      <h2 className="text-base font-semibold">{e.title}</h2>
                      <p className="mt-2.5 leading-relaxed text-muted">{e.body}</p>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="mt-10 border-t border-line pt-6">
                  <p className="eyebrow mb-3">Working across Australia</p>
                  <p className="leading-relaxed text-muted">
                    Based in {site.location.city}, {site.location.regionCode}, working
                    remotely with businesses in Melbourne, Sydney, Brisbane, Adelaide,
                    Perth, Canberra, Hobart and regional Australia.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
