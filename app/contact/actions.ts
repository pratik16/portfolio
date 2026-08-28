"use server";

/**
 * Enquiry form submission.
 *
 * Runs on the server, so the mail credentials stay in unprefixed environment
 * variables and are never bundled into the browser. (Next.js only inlines
 * NEXT_PUBLIC_-prefixed variables into client code, so anything read here would
 * be undefined if this module were ever pulled back into a client component.)
 *
 * Delivery is Gmail SMTP via Nodemailer — free, and no custom domain needed while
 * pratikvanol.com.au is still unregistered.
 *
 * SETUP: in .env.local (and in the hosting environment):
 *   GMAIL_USER=your-address@gmail.com
 *   GMAIL_APP_PASSWORD=your-16-char-app-password
 *   CONTACT_TO_EMAIL=where-enquiries-land   # optional, defaults to GMAIL_USER
 *
 * The app password is NOT the account password: Google disabled plain-password
 * SMTP in 2022. Generate one at Google Account → Security → App passwords, which
 * requires 2-Step Verification to be switched on first.
 *
 * Once pratikvanol.com.au is verified with an email provider, swapping to Resend is
 * a change to submitEnquiry() only — the form component does not need to know.
 */

export type EnquiryState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Record<string, string>;
};

import nodemailer from "nodemailer";
import { PROJECT_TYPES } from "./project-types";

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export async function submitEnquiry(
  _prev: EnquiryState,
  formData: FormData,
): Promise<EnquiryState> {
  const get = (key: string) => String(formData.get(key) ?? "").trim();

  // Honeypot: real people leave this empty. Report success so bots do not learn.
  if (get("website")) {
    return { status: "success", message: "Thanks — your enquiry has been sent." };
  }

  const name = get("name");
  const email = get("email");
  const company = get("company");
  const phone = get("phone");
  const projectType = get("projectType");
  const problem = get("problem");
  const scope = get("scope");
  const timeline = get("timeline");
  const budget = get("budget");

  const fieldErrors: Record<string, string> = {};
  if (!name) fieldErrors.name = "Please tell me your name.";
  if (!email) fieldErrors.email = "An email address is needed to reply.";
  else if (!isEmail(email)) fieldErrors.email = "That does not look like a valid email address.";
  if (!projectType || !(PROJECT_TYPES as readonly string[]).includes(projectType)) {
    fieldErrors.projectType = "Please choose the closest match.";
  }
  if (!problem) fieldErrors.problem = "A short description of the problem helps a lot.";
  else if (problem.length < 20) {
    fieldErrors.problem = "Please add a little more detail — a couple of sentences is plenty.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      fieldErrors,
    };
  }

  const user = process.env.GMAIL_USER;
  // App passwords are displayed in groups of four; tolerate a pasted-in space.
  const pass = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "");
  const to = process.env.CONTACT_TO_EMAIL || user;

  if (!user || !pass) {
    console.error(
      "[contact] GMAIL_USER / GMAIL_APP_PASSWORD are not set. Add them to .env.local and to the hosting environment — see app/contact/actions.ts",
    );
    return {
      status: "error",
      message:
        "The contact form is not fully configured yet. Please call instead, and it will be picked up straight away.",
    };
  }

  // Flat lines so the notification email is readable at a glance.
  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "—"}`,
    `Phone: ${phone || "—"}`,
    `Project type: ${projectType}`,
    `Approximate scope: ${scope || "—"}`,
    `Timeline: ${timeline || "—"}`,
    `Budget: ${budget || "—"}`,
    "",
    "The problem:",
    problem,
  ].join("\n");

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    // Must be fully awaited: Vercel suspends background work once the response is
    // returned, which would drop an in-flight SMTP handshake without an error.
    await transporter.sendMail({
      // Gmail rewrites the sender to the authenticated account, so use it directly.
      from: `"pratikvanol.com.au enquiries" <${user}>`,
      to,
      replyTo: `"${name}" <${email}>`,
      subject: `New enquiry from ${name}${company ? ` (${company})` : ""}`,
      text: body,
    });

    return {
      status: "success",
      message: "Thanks — your enquiry has been sent.",
    };
  } catch (error) {
    console.error("[contact] submission failed", error);
    return {
      status: "error",
      message:
        "Something went wrong sending that. Please try again, or call and it will be sorted out directly.",
    };
  }
}
