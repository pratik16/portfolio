/**
 * Testimonials.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * THIS ARRAY SHIPS EMPTY ON PURPOSE.
 *
 * Nothing here was written on Pratik's behalf. Every testimonial on this site
 * must be a real quote from a real person who actually said it.
 *
 * TODO(pratik): paste in genuine LinkedIn recommendations — only the ones
 * relevant to consulting work. Keep the wording exactly as written, and get
 * the person's okay before publishing their name and title.
 *
 * The <Testimonials /> component renders nothing while this array is empty,
 * so the site stays correct and credible until real quotes are added.
 * ─────────────────────────────────────────────────────────────────────────
 */

export type Testimonial = {
  /** The recommendation, in their words. Do not edit for marketing polish. */
  quote: string;
  author: string;
  /** e.g. "CTO, Squava" */
  title: string;
  /** Where it came from, e.g. "LinkedIn recommendation" */
  source?: string;
};

export const testimonials: Testimonial[] = [
  // Example of the expected shape — delete this comment block when adding real ones:
  // {
  //   quote: "…exactly as they wrote it…",
  //   author: "Full Name",
  //   title: "Role, Company",
  //   source: "LinkedIn recommendation",
  // },
];

export const hasTestimonials = testimonials.length > 0;
