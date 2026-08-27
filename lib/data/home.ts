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
  { value: "8+", label: "Years in Laravel specifically" },
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
    body: "Backend architecture, databases and performance — the areas where a wrong decision is expensive and hard to reverse later. Plus the cloud and frontend work needed to actually finish a project.",
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
    body: "Small work is delivered personally. Larger work scales with trusted engineering capacity — while architecture, decisions and your point of contact stay exactly where they were.",
  },
];

/**
 * Text wordmarks rather than logo images: reproducing client trademarks on a
 * personal consulting site implies endorsement. This reads better anyway.
 */
export const workedWith: string[] = [
  "Squava",
  "PepsiCo",
  "HN Healthcare",
  "Emxcel Travel Solutions",
  "Gateway Technolabs",
];

export const deliveryModel = {
  eyebrow: "How delivery works",
  title: "Australian-led. Flexible engineering capacity.",
  body: [
    "You work directly with me on requirements, architecture, technical decisions and delivery leadership. That does not change at any project size — it is the whole point of hiring a senior engineer rather than an agency.",
    "When a project needs more built in parallel than one person can build, delivery scales with trusted engineering resources I have worked with and led for years. You still have one technical person who understands your business, owns the architecture, and answers for the outcome.",
    "The alternative — being sold to by one person, handed to another, and then to a team you never speak to — is how most software projects lose the thread between what the business needed and what got built.",
  ],
};
