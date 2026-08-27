/**
 * About page content. Written as a story rather than a CV — the career
 * facts are real and traceable to Pratik's résumé, but arranged to answer
 * "why would I trust this person with my software project?"
 */

export const aboutIntro: string[] = [
  "I have been building software professionally since 2009. Sixteen years is long enough to have made most of the mistakes, watched a lot of decisions age, and developed reasonably strong opinions about which ones matter.",
  "The short version: eight years in a client-services company working across a wide variety of projects, then five years inside product companies where I lived with the consequences of my own decisions instead of handing them over. Breadth first, then depth. I think that order matters — it is hard to know what good architecture looks like until you have seen a lot of systems, and hard to take architecture seriously until you have had to maintain one for years.",
  "These days I work with businesses across Australia as an independent engineer and consultant, taking on the software problems that need someone senior rather than someone available.",
];

export type Principle = {
  title: string;
  body: string;
};

/** Each of these is visible in the case studies. They are not slogans. */
export const principles: Principle[] = [
  {
    title: "Measure before changing anything",
    body: "Performance work starts with profiling, not opinions. On a legacy platform I inherited, the assumption was that the framework was the problem. It was not — it was query patterns and schema decisions that had been fine at a smaller data volume. Optimising what looks slow instead of what is slow wastes a great deal of money.",
  },
  {
    title: "Incremental beats big-bang",
    body: "A rewrite promises a clean system and delivers years of no new features and a risky cutover. Migrating module by module behind stable interfaces, with the product live throughout, is slower to describe and considerably faster to benefit from.",
  },
  {
    title: "Understand the business, not just the ticket",
    body: "Much of my work has been with non-technical clients who described what they needed in business terms. Translating that into a technical solution — and pushing back when the request would not achieve the goal — is most of the value a senior engineer adds.",
  },
  {
    title: "Backward compatibility is a feature",
    body: "Every system with users has behaviour someone depends on, including behaviour nobody documented. Preserving it deliberately is how you modernise something without breaking the business that runs on it.",
  },
  {
    title: "Cost is an engineering concern",
    body: "On a healthcare platform, video processing was a significant running cost. Rather than accept it, I built a transcoder that did only what the product needed. Infrastructure spend is usually an architecture decision that nobody revisited.",
  },
  {
    title: "Leave it maintainable",
    body: "Someone will work on this after me — possibly me in three years, having forgotten everything. Clear boundaries, sane naming and standards that are actually enforced are not perfectionism. They are what stops today's system becoming the legacy problem in the next brief.",
  },
];

export type CareerEntry = {
  period: string;
  role: string;
  organisation: string;
  note: string;
};

export const career: CareerEntry[] = [
  {
    period: "2024 — present",
    role: "Independent consultant",
    organisation: "Australia",
    note: "Consulting and delivery for businesses needing senior engineering, architecture and modernisation work.",
  },
  {
    period: "2021 — 2024",
    role: "Lead Engineer",
    organisation: "Bacancy Technology",
    note: "Led delivery on Squava and the PepsiCo data platform. Legacy migration, multi-tenant PostgreSQL, performance optimisation and full end-to-end ownership.",
  },
  {
    period: "2021",
    role: "Lead Engineer",
    organisation: "Emxcel Travel Solutions",
    note: "Backend engineering leadership on travel technology systems.",
  },
  {
    period: "2018 — 2021",
    role: "Lead Engineer",
    organisation: "HN HealthCare",
    note: "Core developer and product manager on a digital healthcare platform. Built an in-house video transcoder to reduce running costs, and real-time features on NodeJS.",
  },
  {
    period: "2017 — 2018",
    role: "Freelance engineer",
    organisation: "Independent",
    note: "Independent project delivery across a range of clients.",
  },
  {
    period: "2010 — 2017",
    role: "Senior Analyst Programmer",
    organisation: "Gateway Technolabs",
    note: "Seven years across a wide variety of client projects — the breadth that makes it possible to recognise a familiar problem in an unfamiliar system.",
  },
  {
    period: "2009 — 2010",
    role: "Senior Programmer",
    organisation: "Dream Technologies",
    note: "Where it started.",
  },
];

export const workingTogether: string[] = [
  "Most engagements begin with a conversation about what is actually going wrong, which is often not the thing the enquiry was about. That conversation is free and frequently the most useful part.",
  "From there the shape depends on the problem. Sometimes it is an audit that gives you options and a cost. Sometimes it is a defined project delivered end to end. Sometimes it is ongoing senior capacity alongside a team you already have.",
  "What does not change is that you talk to me. I do the architecture, I make the technical decisions, and I answer for the result. When a project needs more built in parallel than one person can build, I scale delivery with engineering resources I have worked with and led for years — but the relationship, the architecture and the accountability stay with me. That is the entire point of hiring a senior engineer instead of an agency.",
];
