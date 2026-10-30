import type { ReactNode } from "react";

export type Attendee = {
    fullName: string;
    email: string;
    phone: string;
    organisation: string;
};

export type AttendeeErrors = Partial<Record<keyof Attendee | "agreed", string>>;

export function validateAttendee(a: Attendee, agreed: boolean): AttendeeErrors {
    const e: AttendeeErrors = {};
    if (a.fullName.trim().length < 2) e.fullName = "Enter your full name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.email.trim()))
        e.email = "Enter a valid email address";
    if (a.phone.replace(/\D/g, "").length < 7)
        e.phone = "Enter a valid phone number";
    if (!agreed) e.agreed = "Please agree to the terms to continue";
    return e;
}

const inputClass =
    "h-12 w-full rounded-xl border border-border bg-white px-4 text-sm text-brown-900 outline-none placeholder:text-muted-text/70 focus:border-brown-600 focus:ring-2 focus:ring-gold-600/30";

function Field({
    id,
    label,
    error,
    children,
}: {
    id: string;
    label: string;
    error?: string;
    children: ReactNode;
}) {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={id} className="text-sm font-semibold text-brown-900">
                {label}
            </label>
            {children}
            {error && (
                <p id={`${id}-error`} role="alert" className="text-xs text-danger">
                    {error}
                </p>
            )}
        </div>
    );
}

type Props = {
    values: Attendee;
    onChange: (next: Attendee) => void;
    agreed: boolean;
    onAgreeChange: (value: boolean) => void;
    errors: AttendeeErrors;
    showErrors: boolean;
};

export default function AttendeeForm({
    values,
    onChange,
    agreed,
    onAgreeChange,
    errors,
    showErrors,
}: Props) {
    const err = (k: keyof AttendeeErrors) => (showErrors ? errors[k] : undefined);
    const set = (k: keyof Attendee) => (e: React.ChangeEvent<HTMLInputElement>) =>
        onChange({ ...values, [k]: e.target.value });

    return (
        <section
            id="attendee-details"
            className="scroll-mt-24 rounded-3xl border font-sans border-border bg-warm-white p-6 sm:p-10"
        >
            <h2 className="text-3xl font-bold text-brown-900">2. Attendee details</h2>

            <div className="mt-6 grid gap-x-5 gap-y-6 sm:grid-cols-2">
                <Field id="fullName" label="Full name" error={err("fullName")}>
                    <input
                        id="fullName"
                        type="text"
                        autoComplete="name"
                        placeholder="Your full name"
                        value={values.fullName}
                        onChange={set("fullName")}
                        aria-invalid={Boolean(err("fullName"))}
                        aria-describedby={err("fullName") ? "fullName-error" : undefined}
                        className={inputClass}
                    />
                </Field>

                <Field id="email" label="Email address" error={err("email")}>
                    <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@company.com"
                        value={values.email}
                        onChange={set("email")}
                        aria-invalid={Boolean(err("email"))}
                        aria-describedby={err("email") ? "email-error" : undefined}
                        className={inputClass}
                    />
                </Field>

                <Field id="phone" label="Phone number" error={err("phone")}>
                    <input
                        id="phone"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        placeholder="+234"
                        value={values.phone}
                        onChange={set("phone")}
                        aria-invalid={Boolean(err("phone"))}
                        aria-describedby={err("phone") ? "phone-error" : undefined}
                        className={inputClass}
                    />
                </Field>

                <Field id="organisation" label="Organisation">
                    <input
                        id="organisation"
                        type="text"
                        autoComplete="organization"
                        placeholder="Company or institution"
                        value={values.organisation}
                        onChange={set("organisation")}
                        className={inputClass}
                    />
                </Field>
            </div>

            <div className="mt-6">
                <label className="flex cursor-pointer items-start gap-3 text-sm text-muted-text">
                    <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => onAgreeChange(e.target.checked)}
                        className="mt-0.5 h-5 w-5 shrink-0 accent-brown-600"
                    />
                    I agree to the terms. Refund and cancellation policy to be published
                    once confirmed.
                </label>
                {err("agreed") && (
                    <p role="alert" className="mt-2 text-xs text-danger">
                        {err("agreed")}
                    </p>
                )}
            </div>
        </section>
    );
}