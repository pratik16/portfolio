/**
 * The five service pages. All rendered by app/services/[slug]/page.tsx from
 * this data, so page structure stays consistent and content lives in one place.
 *
 * Writing rule: lead with the business problem, not the technology list.
 */

export type Service = {
  slug: string;
  /** Short label used in navigation and cards. */
  label: string;
  /** The page H1. */
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  /** Hero paragraph. Two or three sentences maximum. */
  lede: string;
  /** Card summary on the services hub and home page. */
  cardSummary: string;
  /** "You might be reading this because..." — symptoms in business language. */
  signs: string[];
  /** What the engagement actually covers. */
  capabilities: { title: string; body: string }[];
  /** How the work runs, in order. */
  approach: { title: string; body: string }[];
  faq: { question: string; answer: string }[];
  /** Technologies, shown as a quiet footnote rather than a logo wall. */
  technologies: string[];
};

export const services: Service[] = [
  {
    slug: "software-development",
    label: "Software Development",
    title: "Custom software development for Australian businesses",
    metaTitle: "Custom Software Development Australia | Pratik Vanol",
    metaDescription:
      "Custom software development for Australian businesses. Web applications, SaaS products, APIs and backend systems, built and delivered by a senior engineer with 16+ years of experience.",
    eyebrow: "Software Development",
    lede:
      "Some problems do not have a product you can buy. When the software your business needs has to be built, it should be built by someone who will still understand it in three years — and who will be accountable for whether it works.",
    cardSummary:
      "Web applications, SaaS products, APIs and backend systems — designed, built and delivered end to end.",
    signs: [
      "A core part of your business runs on spreadsheets, email and manual steps that should have been software years ago.",
      "You have evaluated off-the-shelf products and none of them fit the way your business actually operates.",
      "You have an idea for a product and need someone who can take it from a conversation to something real.",
      "A previous developer or agency delivered something that does not work, and you need someone to assess it honestly before spending more.",
      "You need a technical person who will ask what the business is trying to achieve before writing any code.",
    ],
    capabilities: [
      {
        title: "Web applications",
        body: "Internal tools, customer portals, booking and workflow systems, admin platforms — applications that hold real business process and have to be reliable because people depend on them daily.",
      },
      {
        title: "SaaS products",
        body: "Multi-tenant products built to be sold, with the architecture that implies: tenant isolation, billing integration, onboarding, and a data model that will still work at a hundred times the current volume.",
      },
      {
        title: "APIs and backend systems",
        body: "The part nobody sees and everything depends on. Well-designed APIs, sound data models and backend services built to stay fast as data accumulates.",
      },
      {
        title: "Integrations",
        body: "Connecting the systems you already run — accounting, CRM, payments, logistics, third-party APIs — so data moves automatically instead of being re-keyed by someone.",
      },
      {
        title: "Mobile applications",
        body: "Applications where the phone is the product rather than an afterthought, backed by an API designed for mobile constraints from the beginning.",
      },
    ],
    approach: [
      {
        title: "Understand the business first",
        body: "The first conversations are about what the business is trying to achieve and where the current process breaks, not about technology. A surprising number of software projects fail because this step was skipped in favour of building something quickly.",
      },
      {
        title: "Design the smallest thing that is genuinely useful",
        body: "Scope is where software budgets go to die. The aim is to identify the smallest version that delivers real value, get it into use, and then extend it based on what people actually do with it rather than what everyone predicted they would.",
      },
      {
        title: "Build it properly",
        body: "Clear architecture, sound data modelling, code written to be read by whoever comes next. Speed now that creates a mess later is not speed, it is a loan.",
      },
      {
        title: "Deploy and stay involved",
        body: "Getting to production is part of the job, not a separate phase. So is being available afterwards, when the real feedback arrives.",
      },
    ],
    faq: [
      {
        question: "How large a project can you take on?",
        answer:
          "Small and mid-sized projects are delivered personally. When a project needs more parallel capacity than one engineer, delivery is scaled with trusted engineering resources while architecture, technical decisions and your point of contact stay with me. You do not get handed to an account manager.",
      },
      {
        question: "Can you work with our existing development team?",
        answer:
          "Yes. Working alongside an in-house team — as a senior engineer, technical lead or architect — is a common arrangement, and often the most useful one when a team is capable but needs depth in a specific area.",
      },
      {
        question: "Do you work with businesses outside your local area?",
        answer:
          "Yes. Clients across Australia are served remotely, which is how most software work is delivered now. Being in the same timezone and the same business culture matters considerably more than being in the same city.",
      },
    ],
    technologies: ["PHP", "Laravel", "NodeJS", "React", "PostgreSQL", "MySQL", "AWS", "Docker"],
  },
  {
    slug: "web-api-development",
    label: "Web & API Development",
    title: "Web, backend and API development",
    metaTitle: "Web & API Development Australia | Pratik Vanol",
    metaDescription:
      "Laravel, PHP and Node API development for Australian businesses. Backend systems and REST APIs designed to stay fast as your data grows. 16+ years of backend engineering experience.",
    eyebrow: "Web & API Development",
    lede:
      "An API is a contract. Get it right and everything built on top of it is easier for years. Get it wrong and every client application spends its life working around it.",
    cardSummary:
      "Laravel and PHP backend depth, plus Node and React — APIs designed to stay fast as data grows.",
    signs: [
      "Your API works fine in testing and slows down badly against production data volumes.",
      "Your mobile app or frontend is slow, and the backend is the actual reason.",
      "You need to expose your data to a partner, a customer, or your own second application, and want it done properly the first time.",
      "Your database has grown to the point where queries that were instant are now noticeably not.",
      "You need someone with genuine depth in Laravel and PHP rather than passing familiarity.",
    ],
    capabilities: [
      {
        title: "REST API design and development",
        body: "APIs designed around what clients actually need, with consistent conventions, sensible error handling, versioning that lets you change things later, and documentation someone can build against without asking questions.",
      },
      {
        title: "Laravel and PHP backend engineering",
        body: "Eight or more years working in Laravel specifically, and sixteen in PHP broadly — including Slim, Zend and plain PHP. Deep enough to know when the framework's way is right and when it is the reason something is slow.",
      },
      {
        title: "Database design and query optimisation",
        body: "Schema design, indexing strategy and SQL optimisation across PostgreSQL, MySQL and MongoDB. Most performance problems described as scaling problems are query problems, and they are usually fixable without buying larger servers.",
      },
      {
        title: "Performance investigation",
        body: "Profiling to find where time is genuinely going, rather than optimising the part that looks slow. Findings come with measurements, not opinions.",
      },
      {
        title: "Node and real-time features",
        body: "Socket-based real-time functionality where data needs to reach users immediately, delivered alongside a Laravel API rather than as a competing system.",
      },
      {
        title: "Frontend delivery",
        body: "React and modern JavaScript when the same person owning both sides produces a better result — which, for data-heavy interfaces, it usually does.",
      },
    ],
    approach: [
      {
        title: "Measure before changing anything",
        body: "Performance work starts with profiling. There is no point optimising code that is not the bottleneck, and the bottleneck is very often not where the team assumes it is.",
      },
      {
        title: "Fix the cause, not the symptom",
        body: "Caching something slow makes it fast until the cache misses. Where a query or a schema is the real problem, that is what gets addressed.",
      },
      {
        title: "Design for the data volume you will have",
        body: "Schemas and queries are designed against realistic future volumes, because the difference between working and not working is usually data growth rather than traffic.",
      },
      {
        title: "Keep it changeable",
        body: "Versioning and clear boundaries so the API can evolve without breaking everything built on it.",
      },
    ],
    faq: [
      {
        question: "Our API is slow. Can it be fixed without rebuilding it?",
        answer:
          "Usually, yes. On a decade-old platform the largest gains came from query and schema optimisation rather than rewriting — some endpoints improved by up to 80% without the application architecture changing at all. It is worth measuring before assuming a rebuild is required.",
      },
      {
        question: "Do you work in frameworks other than Laravel?",
        answer:
          "Yes — Slim, Zend and plain PHP across sixteen years, plus NodeJS for real-time work. Laravel is where the depth is greatest, which is genuinely useful when a problem needs someone who knows the framework's internals rather than just its documentation.",
      },
      {
        question: "Can you take over an existing codebase?",
        answer:
          "Yes, and it is common work. Taking on a system someone else wrote — from a departed developer or a previous agency — starts with an honest assessment of what is there before anything is changed.",
      },
    ],
    technologies: ["Laravel", "PHP", "Slim", "NodeJS", "React", "PostgreSQL", "MySQL", "MongoDB", "REST"],
  },
  {
    slug: "legacy-modernisation",
    label: "Legacy Modernisation",
    title: "Modernise your existing software without starting from scratch",
    metaTitle: "Legacy Software Modernisation Australia | Pratik Vanol",
    metaDescription:
      "Legacy software and Laravel modernisation for Australian businesses. Improve performance, maintainability and architecture of the system you already have — without a risky full rewrite.",
    eyebrow: "Legacy Modernisation",
    lede:
      "The system holding your business together is old, slow and difficult to change. It is also working, paid for, and full of business rules nobody has written down anywhere else. A rewrite is not the only option, and it is rarely the best one.",
    cardSummary:
      "Improve the performance, architecture and maintainability of the system you already have — incrementally, in production.",
    signs: [
      "Every change takes longer than it should, and nobody can confidently say what else it might break.",
      "The application has become slow as your data has grown, and it is getting worse.",
      "The developer who built it has left, and what remains is difficult for anyone else to work on.",
      "You have been quoted for a full rewrite and the number, and the timeline, are alarming.",
      "You are running an old PHP or Laravel version and are starting to worry about security and support.",
      "Deployments are manual, nerve-racking, and done outside business hours.",
    ],
    capabilities: [
      {
        title: "Technical assessment",
        body: "An honest read of what you have: architecture, code quality, security exposure, performance characteristics and the real risks. Delivered as findings you can make a decision from, including the option of doing nothing if that is genuinely the right answer.",
      },
      {
        title: "Incremental migration",
        body: "Moving a system to a modern architecture module by module, behind stable interfaces, while it stays in production. This is how a decade-old PHP platform was migrated to Slim without a big-bang cutover.",
      },
      {
        title: "Performance recovery",
        body: "Finding and fixing the queries, schema decisions and architectural choices that have made the system slow. Often the fastest path to a system that feels new, at a fraction of the cost of building one.",
      },
      {
        title: "Framework and version upgrades",
        body: "Bringing PHP and Laravel versions up to date, including the dependency and breaking-change work that makes teams put it off until it becomes urgent.",
      },
      {
        title: "Architecture and refactoring",
        body: "Introducing genuine boundaries into code that has grown without them, so the parts you change most often stop being the parts you dread.",
      },
      {
        title: "Database modernisation",
        body: "Schema redesign, migration and multi-tenant restructuring, done in stages against a live system with data intact.",
      },
    ],
    approach: [
      {
        title: "Assess honestly",
        body: "Understand what is actually there and what is actually wrong. Sometimes the answer is that the system is fine and one specific thing is broken. That is a good outcome and worth finding out cheaply.",
      },
      {
        title: "Separate the urgent from the structural",
        body: "Performance problems and maintainability problems have different causes and different fixes. Treating them separately means you can get faster this month without waiting for an architectural programme to finish.",
      },
      {
        title: "Migrate incrementally, in production",
        body: "Move one module at a time behind stable interfaces, preserving backward compatibility, with the product live throughout. Value arrives continuously instead of at the end, and the risk at any moment stays small.",
      },
      {
        title: "Leave it maintainable",
        body: "Clear boundaries, coding standards and review, so the modernised parts do not become the next legacy system in five years.",
      },
    ],
    faq: [
      {
        question: "Should we rewrite or modernise?",
        answer:
          "Modernise, in most cases. A working system contains years of accumulated business rules that exist nowhere else, and a rewrite means rediscovering all of them while shipping nothing. Rewrites are occasionally right — but the case has to be made, not assumed. That assessment is the first thing worth paying for.",
      },
      {
        question: "Can this happen while the system stays live?",
        answer:
          "Yes, and it should. A ten-year-old platform serving paying customers was migrated module by module while remaining in production, with backward compatibility maintained throughout. Incremental work is lower risk than a cutover, not higher.",
      },
      {
        question: "How much improvement is realistic?",
        answer:
          "It depends entirely on what is wrong, which is why the assessment comes first. As one real data point: query and architecture optimisation on a legacy platform produced up to 80% improvement on many API endpoints. Any number offered before looking at your system would be a guess.",
      },
      {
        question: "What if our documentation is non-existent?",
        answer:
          "That is the normal case, not the exception. Understanding an undocumented system that someone else wrote is a core part of this work.",
      },
    ],
    technologies: ["PHP", "Laravel", "Slim", "PostgreSQL", "MySQL", "Docker", "AWS", "CI/CD"],
  },
  {
    slug: "ai-automation",
    label: "AI & Automation",
    title: "Practical AI development and business automation",
    metaTitle: "AI Development & Automation Australia | Pratik Vanol",
    metaDescription:
      "Practical AI development and automation for Australian businesses. LLM integration, AI features in existing applications, and workflow automation — built by an engineer running a live AI platform.",
    eyebrow: "AI & Automation",
    lede:
      "Most businesses do not need an AI strategy. They need one or two specific things done automatically that are currently done by a person, and an honest answer about which of their ideas are worth building.",
    cardSummary:
      "LLM integration, AI features in existing products, and workflow automation — informed by running a live AI platform.",
    signs: [
      "Your team spends hours on work that is essentially reading, summarising, classifying or extracting information from documents.",
      "You want to add AI features to an existing product but do not know where they would genuinely help.",
      "You have tried an AI tool, seen it work in a demo, and found it unreliable on your actual data.",
      "You are being quoted large sums for AI capability and want a second opinion from someone who has actually shipped it.",
      "You are concerned about what happens to your data when it goes to an AI provider — reasonably so.",
    ],
    capabilities: [
      {
        title: "AI features in existing applications",
        body: "Adding genuinely useful AI capability to software you already run — search that understands intent, document processing, summarisation, classification, drafting — integrated into the existing system rather than bolted alongside it.",
      },
      {
        title: "LLM integration",
        body: "Working with multiple model providers behind a clean internal interface, so you are not locked into one vendor and can change as the models change. This is the architecture running PotatoAIHub in production today.",
      },
      {
        title: "Workflow automation",
        body: "Automating multi-step business processes, with AI used for the steps that genuinely need judgement and ordinary code for the steps that do not — which is usually most of them, and considerably cheaper.",
      },
      {
        title: "AI product development",
        body: "Building products where AI is the core rather than a feature: asynchronous generation, queue processing, cost control per request, and handling providers that fail.",
      },
      {
        title: "Honest assessment",
        body: "Sometimes the answer is that AI is an expensive way to solve a problem that had a simpler solution. You will be told that, because a project that should not have been built helps neither of us.",
      },
    ],
    approach: [
      {
        title: "Start from the task, not the technology",
        body: "The useful question is which specific, repeated, expensive task you want handled — not where AI could be applied. AI projects that begin from the technology tend to produce demonstrations rather than value.",
      },
      {
        title: "Test against your real data",
        body: "AI features behave very differently on curated examples than on the messy data a business actually holds. Viability gets tested early against the real thing, before significant money is committed.",
      },
      {
        title: "Design for cost and failure from the start",
        body: "Every request costs money and any provider can fail. Both are architectural concerns, not operational surprises — as running a live AI platform makes unavoidably clear.",
      },
      {
        title: "Keep a human where judgement matters",
        body: "Automating a decision is different from automating the work of preparing it. Which of the two you want should be a deliberate choice, not a side effect of how the system was built.",
      },
    ],
    faq: [
      {
        question: "What actually qualifies you on AI?",
        answer:
          "PotatoAIHub — a live multi-model AI platform at potatoaihub.com, serving chat, image and video generation in production. It was built and is operated end to end, which means the integration patterns, async processing and cost control offered to clients are already running in something real rather than described from documentation.",
      },
      {
        question: "Will our data be sent to AI providers?",
        answer:
          "That depends on the architecture, and it is a decision to make deliberately rather than discover afterwards. What data leaves your systems, which providers see it, what they retain, and what can be kept local are all design questions worth settling before anything is built.",
      },
      {
        question: "Is AI right for our problem?",
        answer:
          "Sometimes not. A rules engine, a better database query or a fixed process is often a cheaper and more reliable answer. Working out which situation you are in is a legitimate first engagement and does not require committing to a build.",
      },
    ],
    technologies: ["LLM APIs", "Laravel", "PHP", "Queue processing", "AWS", "Vector search", "REST"],
  },
  {
    slug: "cloud-devops",
    label: "Cloud & DevOps",
    title: "Cloud, AWS and DevOps engineering",
    metaTitle: "AWS, Cloud & DevOps Consulting Australia | Pratik Vanol",
    metaDescription:
      "AWS architecture, Docker and CI/CD consulting for Australian businesses. Cloud infrastructure, deployment pipelines and cost optimisation from a senior engineer who builds the applications too.",
    eyebrow: "Cloud & DevOps",
    lede:
      "Infrastructure decisions made by people who do not maintain the application tend to produce infrastructure the application has to work around. These are the same hands that write the code.",
    cardSummary:
      "AWS architecture, Docker environments, deployment pipelines and cloud cost optimisation.",
    signs: [
      "Deployment is a manual process that one person knows how to do, performed nervously and out of hours.",
      "Your AWS bill has grown faster than your business and nobody can fully explain why.",
      "Bugs appear in production that cannot be reproduced locally, and time disappears into the difference.",
      "Onboarding a developer takes a day or more before they can run the project.",
      "Your infrastructure was set up years ago by someone who has since left.",
      "You need to scale and are not confident the current architecture will take it.",
    ],
    capabilities: [
      {
        title: "AWS architecture",
        body: "Designing and improving infrastructure across EC2, S3, RDS, Lambda, ECS and CloudFront — sized for the load you actually have, with a clear path to the load you expect.",
      },
      {
        title: "Docker and environment standardisation",
        body: "Containerised development and QA environments defined in the repository, so that what a developer runs, what QA tests and what production serves are the same thing.",
      },
      {
        title: "CI/CD pipelines",
        body: "Automated build, test and deployment, so releasing is a routine event rather than one requiring a specific person and a quiet evening.",
      },
      {
        title: "Cloud cost optimisation",
        body: "Finding where the bill actually goes and reducing it. On a healthcare platform this meant replacing a managed transcoding service with a purpose-built one, because the managed service was charging for a great deal the product never used.",
      },
      {
        title: "Deployment and release process",
        body: "Zero-downtime deployment, sane rollback, and environment configuration handled properly rather than through files nobody is allowed to touch.",
      },
      {
        title: "Linux and operational depth",
        body: "Comfortable at the command line where infrastructure problems actually get diagnosed, rather than only in a console.",
      },
    ],
    approach: [
      {
        title: "Understand the application first",
        body: "Infrastructure serves an application. Designing it without understanding how the application behaves under load produces something technically impressive and practically wrong.",
      },
      {
        title: "Automate the thing done most often",
        body: "Deployment is usually the highest-value automation, because its manual cost is paid repeatedly and its failure cost is paid publicly.",
      },
      {
        title: "Make environments identical",
        body: "Most of the mystery in software comes from environments differing in ways nobody has documented. Removing that difference removes a whole category of problem.",
      },
      {
        title: "Right-size deliberately",
        body: "Cloud costs grow by default and shrink only on purpose. Architecture matched to real usage is usually both cheaper and simpler than architecture matched to imagined usage.",
      },
    ],
    faq: [
      {
        question: "Do you only work with AWS?",
        answer:
          "AWS is where the depth is — EC2, S3, RDS, Lambda, ECS and CloudFront across many years — with GCP exposure as well. The underlying principles transfer, but you should expect AWS-specific advice to be the strongest.",
      },
      {
        question: "Can you help reduce our cloud bill?",
        answer:
          "Often, yes. It usually starts with working out where the money actually goes, which is frequently not where the team expects. Sometimes it is right-sizing; sometimes it is an architectural decision that made sense once and no longer does.",
      },
      {
        question: "Do you offer infrastructure work without application work?",
        answer:
          "Yes, though the most valuable engagements are usually the ones covering both — because the largest infrastructure improvements tend to require an application change, and vice versa.",
      },
    ],
    technologies: ["AWS", "EC2", "S3", "RDS", "Lambda", "ECS", "CloudFront", "Docker", "CI/CD", "Linux"],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
