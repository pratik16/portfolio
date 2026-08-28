/**
 * How Pratik engages. Deliberately no pricing figures — this positions
 * seniority and pre-qualifies the enquiry without anchoring on a number.
 */

export type EngagementModel = {
  title: string;
  bestFor: string;
  description: string;
  includes: string[];
};

export const engagementModels: EngagementModel[] = [
  {
    title: "Project delivery",
    bestFor: "You know what needs building and want one person accountable for delivering it.",
    description:
      "A defined piece of work taken from requirements through to production. Scope, approach and milestones agreed up front, with architecture and delivery owned end to end. Where a project needs more parallel capacity than one engineer, it is built by my own offshore engineering team — while technical decisions and your point of contact stay with me.",
    includes: [
      "Requirements and solution design",
      "Architecture and data modelling",
      "Development and delivery",
      "Deployment to production",
      "Handover, or continued support",
    ],
  },
  {
    title: "Technical audit",
    bestFor: "You need to know what you actually have before deciding what to spend.",
    description:
      "A focused assessment of an existing system — architecture, code quality, performance, security exposure and the real risks — delivered as findings you can make a decision from. Frequently the most valuable first engagement, because it turns a vague worry into a specific, costed set of options. Including, where it applies, the option of doing nothing.",
    includes: [
      "Architecture and code review",
      "Performance profiling and bottleneck analysis",
      "Database and query assessment",
      "Security and dependency exposure",
      "Prioritised, costed recommendations",
    ],
  },
  {
    title: "Ongoing engineering",
    bestFor: "You need reliable senior capacity on a continuing basis.",
    description:
      "A retained arrangement covering continued development, maintenance and improvement of your systems. Suited to businesses whose software needs steady attention but not a full-time hire, and to teams needing dependable senior depth alongside them.",
    includes: [
      "Continued feature development",
      "Maintenance and dependency upgrades",
      "Performance and cost monitoring",
      "Availability for urgent issues",
      "Technical guidance as things come up",
    ],
  },
  {
    title: "Technical leadership",
    bestFor: "You have a team, or are building one, and need senior technical direction.",
    description:
      "Acting as technical lead or solution architect alongside your existing people — setting architecture, reviewing decisions, mentoring developers, and providing the senior judgement that is expensive to hire full time. Includes working with an existing in-house or outsourced team rather than replacing it.",
    includes: [
      "Architecture and technology decisions",
      "Code review and engineering standards",
      "Mentoring and knowledge transfer",
      "Working alongside existing or outsourced teams",
      "Technology strategy and planning",
    ],
  },
];
