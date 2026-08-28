import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/data/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Software Development & Technology Consulting Australia | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "software development Australia",
    "software consultant Australia",
    "Laravel developer Australia",
    "legacy software modernisation",
    "AI development Australia",
    "AWS consultant Australia",
    "solution architect Australia",
    "custom software development",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: site.url,
    siteName: site.name,
    title: `Software Engineering & Technology Consulting for Australian Businesses`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Software Engineering & Technology Consulting`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "/" },
};

/**
 * Structured data. Person establishes the individual; ProfessionalService
 * with areaServed: Australia is what helps this surface in AU search.
 */
function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${site.url}/#person`,
        name: site.name,
        jobTitle: site.role,
        description: site.description,
        url: site.url,
        telephone: site.phone.display,
        sameAs: [site.linkedin, site.products.potatoAiHub],
        knowsAbout: [
          "Software architecture",
          "PHP",
          "Laravel",
          "API development",
          "Legacy system modernisation",
          "AWS",
          "Docker",
          "AI and LLM integration",
          "PostgreSQL",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: site.location.city,
          addressRegion: site.location.regionCode,
          addressCountry: site.location.countryCode,
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${site.url}/#service`,
        name: site.name,
        description: site.description,
        url: site.url,
        telephone: site.phone.display,
        founder: { "@id": `${site.url}/#person` },
        areaServed: { "@type": "Country", name: "Australia" },
        address: {
          "@type": "PostalAddress",
          addressLocality: site.location.city,
          addressRegion: site.location.regionCode,
          addressCountry: site.location.countryCode,
        },
        serviceType: [
          "Custom software development",
          "Legacy software modernisation",
          "Web and API development",
          "AI development and automation",
          "Cloud and DevOps consulting",
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body className="min-h-screen bg-paper antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:text-paper"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <StructuredData />
        <Analytics />
      </body>
    </html>
  );
}
