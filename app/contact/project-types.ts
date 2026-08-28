/**
 * Shared between the form UI and the server action's validation, so the
 * options a visitor can pick and the values the server accepts cannot drift.
 * Kept out of actions.ts because a "use server" module may only export
 * async functions.
 */
export const PROJECT_TYPES = [
  "New software / product build",
  "Legacy system modernisation",
  "Performance or database problem",
  "AI feature or automation",
  "Cloud, AWS or DevOps",
  "Technical audit or second opinion",
  "Ongoing engineering capacity",
  "Dedicated engineers / team extension",
  "Something else",
] as const;

export const SCOPE_OPTIONS = [
  "Not sure yet",
  "A focused piece of work — days to a few weeks",
  "A defined project — one to three months",
  "A substantial build — three months or more",
  "Ongoing / retained",
] as const;

export const BUDGET_OPTIONS = [
  "Prefer not to say",
  "Not yet determined",
  "Under $10k",
  "$10k – $30k",
  "$30k – $75k",
  "$75k+",
] as const;
