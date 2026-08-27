"use server";

/**
 * Enquiry form submission.
 *
 * Posts to Web3Forms, which relays the enquiry to Pratik's inbox. Web3Forms was
 * chosen because it needs only an access key and works without a verified
 * sending domain — the domain has not been purchased yet.
 *
 * SETUP: get a free key at https://web3forms.com and put it in .env.local as
 *   WEB3FORMS_ACCESS_KEY=your-key-here
 *
 * Once pratikvanol.com.au exists and is verified, swapping to Resend is a
 * change to submitEnquiry() only — the form component does not need to know.
 */

export type EnquiryState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Record<string, string>;
};

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

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    console.error(
      "[contact] WEB3FORMS_ACCESS_KEY is not set. Add it to .env.local — see app/contact/actions.ts",
    );
    return {
      status: "error",
      message:
        "The contact form is not fully configured yet. Please call instead, and it will be picked up straight away.",
    };
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New enquiry from ${name}${company ? ` (${company})` : ""}`,
        from_name: "pratikvanol.com.au",
        replyto: email,
        // Flat fields so the notification email is readable.
        Name: name,
        Email: email,
        Company: company || "—",
        Phone: phone || "—",
        "Project type": projectType,
        "The problem": problem,
        "Approximate scope": scope || "—",
        Timeline: timeline || "—",
        Budget: budget || "—",
      }),
    });

    if (!response.ok) {
      console.error("[contact] Web3Forms responded", response.status);
      return {
        status: "error",
        message:
          "Something went wrong sending that. Please try again, or call and it will be sorted out directly.",
      };
    }

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
