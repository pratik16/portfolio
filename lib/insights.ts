import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

/**
 * Insights articles.
 *
 * Adding an article means adding one Markdown file to content/insights/.
 * Nothing else to register. Frontmatter shape:
 *
 *   ---
 *   title: "How to ..."
 *   description: "One sentence for search results and the listing card."
 *   date: "2026-08-27"
 *   readingTime: "8 min read"
 *   topics: ["Legacy modernisation", "Laravel"]
 *   draft: false
 *   ---
 *
 * Set `draft: true` to keep a file out of the build entirely.
 */

const INSIGHTS_DIR = path.join(process.cwd(), "content", "insights");

export type InsightMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  topics: string[];
};

export type Insight = InsightMeta & {
  /** Rendered HTML body. */
  html: string;
};

export type ExternalInsight = {
  title: string;
  description: string;
  date: string;
  readingTime: string;
  topics: string[];
  source: string;
  href: string;
};

export const externalInsights: ExternalInsight[] = [
  {
    title: "Laravel 8 Events and Listeners With Example",
    description:
      "A practical Laravel tutorial showing how to register events and listeners, define the listener logic, and dispatch an event in a small demo application.",
    date: "2026-02-05",
    readingTime: "6 min read",
    topics: ["Laravel", "PHP", "Backend architecture"],
    source: "Bacancy Technology",
    href: "https://www.bacancytechnology.com/blog/laravel-8-events-and-listeners",
  },
];

function readDir(): string[] {
  try {
    return fs.readdirSync(INSIGHTS_DIR).filter((f) => f.endsWith(".md"));
  } catch {
    return [];
  }
}

function parseFile(filename: string) {
  const slug = filename.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(INSIGHTS_DIR, filename), "utf8");
  const { data, content } = matter(raw);
  return { slug, data, content };
}

export function getAllInsights(): InsightMeta[] {
  return readDir()
    .map((filename) => {
      const { slug, data } = parseFile(filename);
      return {
        slug,
        title: String(data.title ?? slug),
        description: String(data.description ?? ""),
        date: String(data.date ?? ""),
        readingTime: String(data.readingTime ?? ""),
        topics: Array.isArray(data.topics) ? data.topics.map(String) : [],
        draft: Boolean(data.draft),
      };
    })
    .filter((a) => !a.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map(({ ...meta }) => meta);
}

export async function getInsight(slug: string): Promise<Insight | null> {
  const filename = `${slug}.md`;
  if (!fs.existsSync(path.join(INSIGHTS_DIR, filename))) return null;

  const { data, content } = parseFile(filename);
  if (data.draft) return null;

  const processed = await remark().use(remarkGfm).use(remarkHtml).process(content);

  // Wrap tables so a wide one scrolls inside itself instead of forcing the
  // whole page to scroll sideways on a phone. remark emits a bare <table>.
  const html = processed
    .toString()
    .replace(/<table>/g, '<div class="table-wrap"><table>')
    .replace(/<\/table>/g, "</table></div>");

  return {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ""),
    date: String(data.date ?? ""),
    readingTime: String(data.readingTime ?? ""),
    topics: Array.isArray(data.topics) ? data.topics.map(String) : [],
    html,
  };
}

export function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
