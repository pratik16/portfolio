import { stats } from "@/lib/data/home";
import { workedWith } from "@/lib/data/home";
import { Container } from "@/components/ui";
import { Reveal } from "@/components/reveal";

/** Four real, traceable figures. No invented metrics. */
export function StatStrip() {
  return (
    <div className="border-y border-line bg-surface">
      <Container>
        <dl className="grid grid-cols-2 gap-x-8 gap-y-10 py-14 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 70}>
              <div>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-4xl leading-none sm:text-5xl">
                    {stat.value}
                  </span>
                  <span className="mt-3 block text-sm leading-snug text-muted">
                    {stat.label}
                  </span>
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </Container>
    </div>
  );
}

/**
 * Text wordmarks, not logo images — reproducing client trademarks on a personal
 * consulting site implies endorsement they have not given.
 */
export function WorkedWith() {
  return (
    <Container>
      <div className="py-14">
        <p className="eyebrow mb-8">Selected companies and products worked with</p>
        <ul className="flex flex-wrap items-center gap-x-10 gap-y-5">
          {workedWith.map((name, i) => (
            <li key={name}>
              <Reveal delay={i * 50}>
                <span className="font-display text-xl text-muted sm:text-2xl">{name}</span>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
