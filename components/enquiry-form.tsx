"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitEnquiry, type EnquiryState } from "@/app/contact/actions";
import {
  BUDGET_OPTIONS,
  PROJECT_TYPES,
  SCOPE_OPTIONS,
} from "@/app/contact/project-types";

const initialState: EnquiryState = { status: "idle", message: "" };

const fieldClass =
  "w-full rounded-xl border border-line bg-paper px-4 py-3 text-base text-ink transition-colors placeholder:text-muted/60 focus:border-clay focus:outline-none";

function Label({
  htmlFor,
  children,
  optional = false,
}: {
  htmlFor: string;
  children: React.ReactNode;
  optional?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium">
      {children}
      {optional && <span className="ml-1.5 font-normal text-muted">(optional)</span>}
    </label>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-2 text-sm text-clay" role="alert">
      {message}
    </p>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center rounded-full bg-clay px-8 py-4 text-base font-medium text-paper transition-colors hover:bg-ink disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Sending…" : "Send enquiry"}
    </button>
  );
}

export function EnquiryForm() {
  const [state, formAction] = useActionState(submitEnquiry, initialState);

  if (state.status === "success") {
    return (
      <div
        className="rounded-2xl border border-line bg-surface p-10 text-center sm:p-14"
        role="status"
      >
        <p className="font-display text-3xl">Thanks — that has come through.</p>
        <p className="mx-auto mt-5 max-w-md leading-relaxed text-muted">
          You will get a reply from me personally, usually within one business day. If
          it is urgent, calling is always faster.
        </p>
      </div>
    );
  }

  const errors = state.fieldErrors ?? {};

  return (
    <form action={formAction} className="space-y-6" noValidate>
      {/* Honeypot — hidden from people, attractive to bots. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Do not fill this in</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Your name</Label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={fieldClass}
            aria-invalid={Boolean(errors.name)}
          />
          <FieldError message={errors.name} />
        </div>

        <div>
          <Label htmlFor="company" optional>
            Company
          </Label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="email">Email</Label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
            aria-invalid={Boolean(errors.email)}
          />
          <FieldError message={errors.email} />
        </div>

        <div>
          <Label htmlFor="phone" optional>
            Phone
          </Label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="projectType">What is this about?</Label>
        <select
          id="projectType"
          name="projectType"
          required
          defaultValue=""
          className={fieldClass}
          aria-invalid={Boolean(errors.projectType)}
        >
          <option value="" disabled>
            Choose the closest match…
          </option>
          {PROJECT_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        <FieldError message={errors.projectType} />
      </div>

      <div>
        <Label htmlFor="problem">What are you trying to achieve, and what is going wrong?</Label>
        <textarea
          id="problem"
          name="problem"
          required
          rows={6}
          className={`${fieldClass} resize-y`}
          placeholder="A couple of sentences is plenty. The more specific the problem, the more useful the reply will be."
          aria-invalid={Boolean(errors.problem)}
        />
        <FieldError message={errors.problem} />
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        <div>
          <Label htmlFor="scope" optional>
            Scope
          </Label>
          <select id="scope" name="scope" defaultValue="" className={fieldClass}>
            <option value="">Choose…</option>
            {SCOPE_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <Label htmlFor="timeline" optional>
            Timeline
          </Label>
          <input
            id="timeline"
            name="timeline"
            type="text"
            placeholder="e.g. next quarter"
            className={fieldClass}
          />
        </div>

        <div>
          <Label htmlFor="budget" optional>
            Budget
          </Label>
          <select id="budget" name="budget" defaultValue="" className={fieldClass}>
            <option value="">Choose…</option>
            {BUDGET_OPTIONS.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      {state.status === "error" && state.message && (
        <p className="rounded-xl border border-clay/30 bg-clay-wash px-5 py-4 text-sm text-clay" role="alert">
          {state.message}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-6 pt-2">
        <SubmitButton />
        <p className="text-sm text-muted">
          Your details go to me directly and are not shared with anyone.
        </p>
      </div>
    </form>
  );
}
