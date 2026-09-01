/**
 * Case studies. Every claim here traces to real delivered work.
 * The only hard performance number on the site is Squava's verified
 * "up to 80%" API improvement — nothing else carries an invented metric.
 */

export type Metric = {
  value: string;
  label: string;
};

export type CaseStudy = {
  slug: string;
  name: string;
  headline: string;
  client: string;
  sector: string;
  duration: string;
  /** One or two sentences. Used on cards and in listings. */
  summary: string;
  role: string;
  stack: string[];
  /** Problem -> Investigation -> Solution -> Result */
  problem: string[];
  investigation: string[];
  solution: string[];
  result: string[];
  metrics: Metric[];
  liveUrl?: string;
  image?: string;
  imageAlt?: string;
  featured: boolean;
  relatedServices: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "squava-legacy-modernisation",
    name: "Squava",
    headline: "Modernising a decade-old PHP platform without stopping the business",
    client: "Squava",
    sector: "SaaS — time tracking, invoicing and project management",
    duration: "3+ years",
    summary:
      "A ten-year-old PHP application was still earning revenue but had become slow and expensive to change. It was migrated to a modern architecture incrementally, in production, with API response times improving by up to 80%.",
    role: "Lead engineer — architecture, migration strategy, database design and delivery",
    stack: ["PHP", "Slim Framework", "PostgreSQL", "Multi-tenant architecture", "SOLID", "AWS"],
    problem: [
      "Squava is a working product with paying customers: time tracking, invoicing and project management for professional services firms. It had been running for a decade, and a decade of organic growth had left its mark.",
      "The application still did its job, but changing it had become slow and risky. Business logic had spread across the codebase without clear boundaries, so a small feature could touch code nobody wanted to touch. Performance had degraded steadily as customer data accumulated — some API calls had become slow enough for users to feel. And a single shared codebase served many tenants, which made every change a question of who else it might affect.",
      "The obvious suggestion in this situation is a rewrite. A rewrite would also have meant years without new features, a high chance of losing behaviour the business depended on, and a cutover that risked the revenue the product was already generating.",
    ],
    investigation: [
      "Before proposing any architecture, the actual bottlenecks needed to be found rather than guessed at. The slowest endpoints were profiled and traced back to their real causes.",
      "The results were informative: most of the worst performance was not the framework's fault. It came from query patterns and schema decisions that had been reasonable at a smaller data volume and no longer were — queries scanning far more than they needed, joins that had grown with the product, and indexes that no longer matched how the data was actually being read.",
      "That mattered, because it meant the performance problem and the maintainability problem could be treated separately. Speed did not have to wait for a rewrite.",
    ],
    solution: [
      "The platform was migrated to Slim incrementally, module by module, while it remained in production. Each module moved across behind stable interfaces, so the rest of the application kept working and backward compatibility was preserved throughout. There was no big-bang cutover.",
      "The multi-tenant PostgreSQL layer was redesigned and migrated to properly isolate tenant data and support the query patterns the product actually uses. Complex SQL was optimised directly, with schema and indexing changes made to match real access patterns rather than assumed ones.",
      "SOLID principles were applied to the new backend boundaries so the parts being rebuilt would be genuinely maintainable rather than a fresh layer of the same problem. Coding standards and peer review were established so quality held as more of the codebase moved across.",
    ],
    result: [
      "Many API endpoints improved by up to 80%, with the slowest paths seeing the largest gains. The improvement came from query and architecture work rather than from throwing infrastructure at the problem.",
      "Just as importantly, the migrated parts of the system became genuinely easier to change. New features stopped being archaeology.",
      "The business kept selling and supporting the product the entire time. Modernisation happened around live customers rather than instead of them.",
    ],
    metrics: [
      { value: "Up to 80%", label: "API performance improvement" },
      { value: "3+ years", label: "Continuous ownership" },
      { value: "Zero", label: "Big-bang rewrites" },
    ],
    featured: true,
    relatedServices: ["legacy-modernisation", "web-api-development", "software-development"],
  },
  {
    slug: "pepsico-data-platform",
    name: "Xplain",
    headline: "Turning scattered social and API data into something a business can read",
    client: "Xplain",
    sector: "Consumer goods — data aggregation and reporting",
    duration: "1+ year",
    summary:
      "A data-centric platform that pulls information from multiple external sources and social platforms, processes it, and presents it visually. Delivered end to end — backend, data pipelines and frontend.",
    role: "Full ownership — design through deployment, backend and frontend",
    stack: ["Laravel", "PHP", "ReactJS", "REST APIs", "Data pipelines", "Third-party integrations"],
    problem: [
      "The requirement was straightforward to state and considerably harder to build: bring together information scattered across several external platforms and APIs, and make it legible to people who need to make decisions from it.",
      "The data lived in different places, in different shapes, behind different APIs with different rules. Some of it needed collecting on a schedule. None of it arrived in a form that could be charted directly.",
      "The client team was not technical, so requirements arrived as business questions rather than specifications.",
    ],
    investigation: [
      "The first task was translating those business questions into a technical shape — working out what data was actually needed to answer them, which sources could reliably provide it, and what the platforms' APIs would and would not permit.",
      "Several third-party API platforms were researched and evaluated rather than assumed. Some sources were better served by an established provider; others needed collecting directly. Choosing correctly here determined how much of the system would be fighting rate limits later.",
    ],
    solution: [
      "Data ingestion pipelines were built to collect from multiple sources including X and Facebook, with collection and processing automated so the platform stayed current without manual intervention.",
      "API integrations with the major social platforms were developed in Laravel, designed for reliable and scalable data flow rather than one-off pulls — handling the failure modes external APIs reliably produce.",
      "The frontend was delivered in ReactJS against the same backend, so the data processing and the way it was presented were designed together rather than handed across a boundary. That is a meaningful advantage of one person owning both.",
    ],
    result: [
      "The platform aggregates data from multiple external sources and presents it graphically, giving a non-technical team a single place to see information that previously had to be gathered by hand.",
      "Owning the project end to end — design, backend, data processing, frontend and deployment — meant business requirements could be translated directly into technical decisions without a translation layer in between.",
    ],
    metrics: [
      { value: "Multiple", label: "External data sources unified" },
      { value: "End to end", label: "Design through deployment" },
      { value: "Automated", label: "Data ingestion" },
    ],
    featured: true,
    relatedServices: ["software-development", "web-api-development", "ai-automation"],
  },
  {
    slug: "digital-healthcare-platform",
    name: "Digital Healthcare Platform",
    headline: "Cutting video infrastructure costs on a platform built for doctors",
    client: "HN Healthcare",
    sector: "Healthcare — professional education and consultation",
    duration: "3+ years",
    summary:
      "A platform where doctors access video education, a social feed and peer consultation. Beyond backend delivery, a custom video transcoding service replaced a managed cloud service to bring running costs down.",
    role: "Core backend developer and product manager",
    stack: ["Laravel", "NodeJS", "WebSockets", "Video transcoding", "AWS", "REST APIs"],
    problem: [
      "The product gave doctors a single place to learn and talk to each other: a video education library, a social feed, and consultation between practitioners. Each of those carries a different technical demand.",
      "Video was the expensive one. The education library meant continuously processing video into deliverable formats, and the managed cloud transcoding service handling it had become a significant line item on the running cost of the product.",
      "At the same time, the consultation and feed features needed to feel immediate — which a conventional request-response backend does not provide on its own.",
    ],
    investigation: [
      "The video cost was examined as an engineering problem rather than accepted as a fixed cost of doing business. The question was what the managed service was actually providing that the platform needed, and how much of it was general-purpose capability this product would never use.",
      "The real-time requirements were scoped the same way: which interactions genuinely needed live updates, and which only appeared to.",
    ],
    solution: [
      "A video transcoding service was built in-house, mirroring the behaviour of the managed AWS transcoder for the specific formats and workflows the platform actually required. Purpose-built for one product's needs, it avoided paying for a general-purpose service's full surface area.",
      "Real-time features were delivered using NodeJS with socket-based communication alongside the Laravel API, so data changes reached users immediately where that mattered.",
      "The role spanned both engineering and product. Working as a core developer and product manager meant technical and product decisions were made with full knowledge of each other — including this one, where an engineering choice was driven by a commercial constraint.",
    ],
    result: [
      "The in-house transcoder brought the video processing cost of the running product down while continuing to serve the education library.",
      "Doctors got a platform where education, discussion and peer consultation worked together, with real-time behaviour where it counted.",
      "Three years of continuous ownership meant decisions were made by someone who would still be there to live with them.",
    ],
    metrics: [
      { value: "In-house", label: "Transcoder replacing managed service" },
      { value: "Real time", label: "Socket-based data updates" },
      { value: "3+ years", label: "Continuous ownership" },
    ],
    featured: true,
    relatedServices: ["software-development", "cloud-devops", "web-api-development"],
  },
  {
    slug: "potato-ai-hub",
    name: "PotatoAIHub",
    headline: "Building and running a live multi-model AI platform",
    client: "Own product",
    sector: "AI — consumer and professional platform",
    duration: "Live and in active development",
    summary:
      "A production AI platform bringing chat, image and video generation across multiple AI models into one interface. Built, deployed and operated end to end — proof that the AI work on offer here is practised, not theoretical.",
    role: "Founder and engineer — architecture, backend, integrations, infrastructure",
    stack: ["Laravel", "PHP", "Multiple LLM providers", "AWS", "Queue processing", "REST APIs"],
    liveUrl: "https://potatoaihub.com",
    image: "/images/case-studies/potatoaihub.png",
    imageAlt: "The PotatoAIHub multi-model AI platform interface",
    problem: [
      "AI capability is fragmented. Different models are better at different things, and each sits behind its own API with its own request format, failure modes, latency profile and pricing. Using several of them well is a genuine engineering problem.",
      "PotatoAIHub was built to solve that in one place — chat, image generation and video generation across multiple models behind a single interface.",
      "It is a real product with real users, which means it also has to deal with everything a demo does not: cost per request, requests that take minutes rather than milliseconds, providers that fail, and the privacy expectations that come with people sending you their prompts.",
    ],
    investigation: [
      "The central design question was how to add a new model without the application needing to know anything new. Provider APIs differ enough that naive integration produces a codebase where every model is a special case.",
      "Generation workloads also break the assumptions of a normal web request. Image and video generation take far longer than a request should be held open for, so the work had to be modelled asynchronously from the start rather than retrofitted.",
    ],
    solution: [
      "Model providers sit behind a common internal interface, so the application works against one abstraction and each provider's differences stay contained. Adding a model is an integration, not a refactor.",
      "Generation runs through queued background processing with results delivered when ready, which keeps the interface responsive regardless of how long a given model takes.",
      "The platform runs on AWS and is operated as a live product — deployment, monitoring, cost control, and the ongoing work of keeping something running rather than shipping it once.",
    ],
    result: [
      "PotatoAIHub is live at potatoaihub.com, serving multi-model chat, image and video generation in production.",
      "It is the clearest available evidence for the AI work described on this site: the same integration patterns, async processing and cost control a client's AI feature will need, already built and running.",
      "It also directly informs the advice given to clients about AI — including where AI genuinely helps, and where it is an expensive way to solve a problem that had a simpler answer.",
    ],
    metrics: [
      { value: "Live", label: "In production at potatoaihub.com" },
      { value: "Multi-model", label: "Several AI providers, one interface" },
      { value: "Chat · Image · Video", label: "Generation capabilities" },
    ],
    featured: true,
    relatedServices: ["ai-automation", "software-development", "cloud-devops"],
  },
  {
    slug: "docker-development-environments",
    name: "Development Environments",
    headline: "Making “works on my machine” stop being a sentence anyone says",
    client: "Applied across multiple engagements",
    sector: "Engineering practice",
    duration: "Ongoing practice",
    summary:
      "Standardising local development and QA environments with Docker, so that what a developer runs, what QA tests, and what production serves are genuinely the same thing.",
    role: "Engineering practice — introduced and maintained across teams",
    stack: ["Docker", "Docker Compose", "CI/CD", "Linux", "PHP", "PostgreSQL", "MySQL"],
    problem: [
      "On projects with more than one developer, environment drift is a reliable tax. Developers run slightly different language versions, slightly different database versions, slightly different extensions. QA tests something that does not quite match either. Bugs appear that nobody can reproduce, and time goes into diagnosing the environment instead of the software.",
      "New developers feel it worst. A day or more can disappear into getting a project running before any useful work happens.",
    ],
    investigation: [
      "The recurring failures were worth tracking honestly: how often a defect turned out to be environmental rather than a real bug, and how long onboarding actually took against how long everyone assumed it took.",
      "The answer is usually that the cost is larger than it looks, because it is distributed across everybody in small pieces rather than showing up as one visible problem.",
    ],
    solution: [
      "Development and QA environments were containerised with Docker so that language runtime, database and supporting services are defined in the repository rather than in each person's setup instructions.",
      "The environment definition lives alongside the code and is versioned with it, so a change to infrastructure requirements arrives with the change that needs it rather than as a message asking everyone to update.",
      "Deployment pipelines were built against the same definitions, closing the remaining gap between what was tested and what was released.",
    ],
    result: [
      "Getting a project running becomes a single command rather than a document, which changes what onboarding a developer costs.",
      "Environmental defects largely stop being a category, because there is only one environment. Reproducing a reported bug becomes a normal task rather than an investigation.",
      "It is unglamorous work with a compounding return, which is generally the kind worth doing.",
    ],
    metrics: [
      { value: "One command", label: "To a running project" },
      { value: "Versioned", label: "Environment defined in the repo" },
      { value: "Dev = QA = Prod", label: "Parity by default" },
    ],
    featured: false,
    relatedServices: ["cloud-devops", "legacy-modernisation"],
  },
];

/** Products currently being built. Deliberately no results claimed until they ship. */
export type InProgressProject = {
  name: string;
  status: string;
  description: string;
  stack: string[];
};

export const inProgress: InProgressProject[] = [
  {
    name: "PotatoChat",
    status: "Preparing production release",
    description:
      "An Android application built around AI chat, with the production release currently being prepared. It covers the mobile side of the same problem PotatoAIHub solves on the web — a conversational AI interface with a backend that has to stay responsive on a phone.",
    stack: ["Android", "AI chat", "Laravel API", "AWS"],
  },
  {
    name: "Poise",
    status: "In active development",
    description:
      "A communication application being built in React Native, with a production release planned. It is the current piece of hands-on mobile product work — React Native, interface design, API architecture, and the path to shipping on a real app store.",
    stack: ["React Native", "REST APIs", "Real-time messaging"],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((c) => c.featured);
}

export function getCaseStudiesForService(serviceSlug: string): CaseStudy[] {
  return caseStudies.filter((c) => c.relatedServices.includes(serviceSlug));
}
