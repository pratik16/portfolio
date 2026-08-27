import type { MetadataRoute } from "next";
import { site } from "@/lib/data/site";
import { services } from "@/lib/data/services";
import { caseStudies } from "@/lib/data/case-studies";
import { getAllInsights } from "@/lib/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { path: "", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/case-studies", priority: 0.9 },
    { path: "/about", priority: 0.8 },
    { path: "/insights", priority: 0.7 },
    { path: "/contact", priority: 0.9 },
  ].map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: r.priority,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${site.url}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const caseStudyRoutes = caseStudies.map((c) => ({
    url: `${site.url}/case-studies/${c.slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  const insightRoutes = getAllInsights().map((a) => ({
    url: `${site.url}/insights/${a.slug}`,
    lastModified: a.date ? new Date(a.date) : now,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...caseStudyRoutes, ...insightRoutes];
}
