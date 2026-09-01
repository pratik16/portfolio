/**
 * Home page content. Kept here so the page component stays structural
 * and the words that do the selling live in one editable place.
 */

export type Stat = {
  value: string;
  label: string;
};

/** Every figure here is real and traceable. Nothing invented. */
export const stats: Stat[] = [
  { value: "16+", label: "Years engineering software" },
  { value: "Full-stack", label: "Backend, frontend and cloud delivery" },
  { value: "Up to 80%", label: "API performance recovered on a legacy platform" },
  { value: "Live", label: "AI platform built, shipped and operated" },
];

export type Problem = {
  question: string;
  body: string;
  href: string;
  linkLabel: string;
};

/** Business language, not technology language. The visitor should recognise themselves. */
export const problems: Problem[] = [
  {
    question: "You need something built",
    body: "A web application, a SaaS product, an API or an internal tool — and you want one experienced person accountable for it working, not a team you never meet.",
    href: "/services/software-development",
    linkLabel: "Software development",
  },
  {
    question: "Your system is ageing badly",
    body: "It still runs the business, but every change is slow and risky, and someone has quoted you for a full rewrite. There is usually a better answer than starting again.",
    href: "/services/legacy-modernisation",
    linkLabel: "Legacy modernisation",
  },
  {
    question: "It has become slow",
    body: "What was fast when you launched is not fast now that the data has grown. The cause is usually queries and architecture, and it is usually fixable without larger servers.",
    href: "/services/web-api-development",
    linkLabel: "Web & API development",
  },
  {
    question: "You want to use AI properly",
    body: "Not an AI strategy — one or two specific things done automatically that a person does today, plus an honest answer on which of your ideas are actually worth building.",
    href: "/services/ai-automation",
    linkLabel: "AI & automation",
  },
  {
    question: "Deploying makes you nervous",
    body: "Releases are manual, environments differ, the cloud bill keeps climbing, and the person who set it all up has left the company.",
    href: "/services/cloud-devops",
    linkLabel: "Cloud & DevOps",
  },
];

export type Differentiator = {
  title: string;
  body: string;
};

export const differentiators: Differentiator[] = [
  {
    title: "Sixteen years, still writing code",
    body: "Long enough to have seen how decisions age, and still hands-on enough to implement them. Not a strategist who stopped building a decade ago, and not a developer who has only seen one way of doing things.",
  },
  {
    title: "One point of accountability",
    body: "You talk to the person doing the engineering. No account manager translating your problem into a ticket, and no gap between the person who understood the requirement and the person writing the code.",
  },
  {
    title: "Depth where it matters",
    body: "Backend architecture, databases and performance — the areas where a wrong decision is expensive and hard to reverse later. Plus the frontend, cloud and product work needed to actually finish a project.",
  },
  {
    title: "Products that are live, not slides",
    body: "PotatoAIHub is a real AI platform in production, built and operated end to end. The AI, architecture and cloud advice offered here is practised rather than researched.",
  },
  {
    title: "An honest read on your problem",
    body: "Including when the answer is that you do not need the thing you were about to buy. A project that should not have been built helps neither of us.",
  },
  {
    title: "It can scale when the project does",
    body: "Small work is delivered personally. Larger work is built by my offshore engineering team, while architecture, decisions and responsibility stay with me.",
  },
];

/**
 * Text wordmarks rather than logo images: reproducing client trademarks on a
 * personal consulting site implies endorsement. This reads better anyway.
 */
export const workedWith: string[] = [
  "Squava",
  "Xplain",
  "HN Healthcare",
  "Emxcel Travel Solutions",
  "Gateway Technolabs",
];

export const deliveryModel = {
  eyebrow: "How delivery works",
  title: "One responsible owner across your stack. Offshore capacity when the project needs it.",
  body: [
    "You work with me as the single responsible person for the outcome. I own requirements, architecture, technical decisions, review and delivery leadership, whether the project uses my usual stack, your existing technology, or a mix of both.",
    "For bigger builds, I can bring in my offshore engineering team — people I have worked with and led for years. They add capacity across backend, frontend and delivery work while the technical direction and accountability stay with me.",
    "That means you do not have to coordinate a remote team, translate requirements across layers, or wonder who is responsible when something needs a decision. You get the speed of a larger team with one senior person answerable for the result.",
    "The stack is chosen around the project, not around one favourite tool. Laravel, Node, Next.js, React, Angular and AWS are common choices, but the work can also fit around the technology your business already has.",
  ],
};

export type OffshorePoint = {
  title: string;
  body: string;
};

/**
 * Supports the delivery model section above. Deliberately qualitative on team
 * size — the rest of this file only carries figures that are real and
 * traceable, so no headcount goes in until there is a number worth standing on.
 *
 * TODO(pratik): the ABN itself is not printed anywhere on the site. Putting it
 * in the footer is a cheap, checkable trust signal for Australian buyers —
 * add it to `site` in lib/data/site.ts when you want it shown.
 */
export const offshorePoints: OffshorePoint[] = [
  {
    title: "One contract, one owner",
    body: "You contract with an Australian business, ABN registered here in Geelong, invoiced in AUD. The delivery arrangement behind it is mine to manage, and I stay responsible for the work.",
  },
  {
    title: "A team when needed",
    body: "For larger scopes, trusted offshore engineers can work under my direction across backend, frontend and implementation while I stay the point of accountability.",
  },
  {
    title: "Stack-aware delivery",
    body: "Laravel, Node, Next.js, React, Angular and AWS are common choices, but existing platforms and other technologies can be assessed, improved and extended when that is the right commercial path.",
  },
  {
    title: "Cost that matches the scope",
    body: "Senior architecture where a wrong decision is expensive to reverse, and cost-effective delivery capacity where the work needs more hands.",
  },
];
