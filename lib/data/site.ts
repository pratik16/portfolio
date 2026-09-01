/**
 * Single source of truth for identity, contact details and navigation.
 * Change a value here and it updates across every page, the footer,
 * the sitemap and the structured data.
 */

export const site = {
  name: "Pratik Vanol",
  role: "Senior Software Engineer & Solution Architect",
  shortTagline: "Build it. Modernise it. Scale it.",
  description:
    "Australian-based senior software engineer and solution architect. 16+ years building, modernising and scaling software for businesses — backend systems, APIs, cloud and AI.",

  // TODO(pratik): confirm the city/region to display. This feeds the footer
  // and the LocalBusiness structured data that helps Australian local search.
  location: {
    city: "Geelong",
    region: "Victoria",
    regionCode: "VIC",
    country: "Australia",
    countryCode: "AU",
  },

  phone: {
    display: "(+61) 490 916 967",
    href: "tel:+61490916967",
  },

  whatsapp: {
    label: "WhatsApp me",
    href: "https://wa.me/61490916967",
  },

  linkedin: "https://www.linkedin.com/in/pratikvan/",

  // TODO(pratik): purchase this domain and connect it in Vercel.
  url: "https://pratikvanol.com.au",

  // Products used as evidence of capability (not marketed here in their own right).
  products: {
    potatoAiHub: "https://potatoaihub.com",
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; blurb: string }[];
};

export const primaryNav: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Software Development",
        href: "/services/software-development",
        blurb: "Custom web, SaaS and backend applications built to last.",
      },
      {
        label: "Web & API Development",
        href: "/services/web-api-development",
        blurb: "Laravel, PHP and Node APIs that stay fast as data grows.",
      },
      {
        label: "Legacy Modernisation",
        href: "/services/legacy-modernisation",
        blurb: "Improve the system you have without a risky rewrite.",
      },
      {
        label: "AI & Automation",
        href: "/services/ai-automation",
        blurb: "Practical AI features and workflow automation that ship.",
      },
      {
        label: "Cloud & DevOps",
        href: "/services/cloud-devops",
        blurb: "AWS architecture, Docker and deployment pipelines.",
      },
    ],
  },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
];

export const ctaLabel = "Discuss a Project";
export const ctaHref = "/contact";
