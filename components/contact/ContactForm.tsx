"use client";

import { useMemo, useState, type FormEvent } from "react";
import {
    INTERESTS,
    validateEnquiry,
    type Enquiry,
    type EnquiryErrors,
} from "@/lib/contact";
import { Field, inputClass, textareaClass } from "../ui/Form";

const EMPTY: Enquiry = {
    fullName: "",
    email: "",
    phone: "",
    organisation: "",
    interest: "",
    message: "",
};

const ORDER: (keyof EnquiryErrors)[] = [
    "fullName",
    "email",
    "phone",
    "interest",
    "message",
    "agreed",
];

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
    const [values, setValues] = useState<Enquiry>(EMPTY);
    const [agreed, setAgreed] = useState(false);
    const [honeypot, setHoneypot] = useState("");
    const [showErrors, setShowErrors] = useState(false);
    const [status, setStatus] = useState<Status>("idle");

    const errors = useMemo(() => validateEnquiry(values, agreed), [values, agreed]);
    const err = (k: keyof EnquiryErrors) => (showErrors ? errors[k] : undefined);

    const set =
        (k: keyof Enquiry) =>
            (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
                setValues((v) => ({ ...v, [k]: e.target.value }));

    async function onSubmit(e: FormEvent) {
        e.preventDefault();
        setShowErrors(true);

        const first = ORDER.find((k) => errors[k]);
        if (first) {
            document.getElementById(first)?.focus();
            return;
        }

        setStatus("sending");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...values, agreed, website: honeypot }),
            });
            if (!res.ok) throw new Error("Request failed");
            setStatus("sent");
        } catch {
            setStatus("error");
        }
    }

    function reset() {
        setValues(EMPTY);
        setAgreed(false);
        setShowErrors(false);
        setStatus("idle");
    }

    if (status === "sent") {
        return (
            <div className="py-10 text-center" role="status">
                <span
                    aria-hidden
                    className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brown-600 text-2xl font-bold text-white"
                >
                    ✓
                </span>
                <h2 className="mt-5 text-2xl font-bold text-brown-900">Thank you</h2>
                <p className="mx-auto mt-2 max-w-sm text-sm text-muted-text">
                    Your enquiry has been sent. The Afmaaj Consulting team will get back to you
                    shortly.
                </p>
                <button
                    type="button"
                    onClick={reset}
                    className="mt-6 rounded-lg border border-brown-900 px-5 py-2.5 text-sm font-semibold text-brown-900"
                >
                    Send another enquiry
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={onSubmit} noValidate className="font-sans">
            <h2 className="text-3xl font-bold text-brown-900">Send an Enquiry</h2>

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

            <div className="mt-6 space-y-6">
                <Field id="interest" label="I’m interested in" error={err("interest")}>
                    <select
                        id="interest"
                        value={values.interest}
                        onChange={set("interest")}
                        aria-invalid={Boolean(err("interest"))}
                        aria-describedby={err("interest") ? "interest-error" : undefined}
                        className={`${inputClass} ${values.interest ? "" : "text-muted-text/70"}`}
                    >
                        <option value="" disabled>
                            Select: Attend · Invest · Exhibit · Partner
                        </option>
                        {INTERESTS.map((i) => (
                            <option key={i} value={i} className="text-brown-900">
                                {i}
                            </option>
                        ))}
                    </select>
                </Field>

                <Field id="message" label="Message" error={err("message")}>
                    <textarea
                        id="message"
                        placeholder="How can we help?"
                        value={values.message}
                        onChange={set("message")}
                        aria-invalid={Boolean(err("message"))}
                        aria-describedby={err("message") ? "message-error" : undefined}
                        className={textareaClass}
                    />
                </Field>

                <div aria-hidden className="absolute -left-2499.75 h-0 w-0 overflow-hidden opacity-0">
                    <label>
                        Website
                        <input
                            type="text"
                            name="website"
                            tabIndex={-1}
                            autoComplete="off"
                            value={honeypot}
                            onChange={(e) => setHoneypot(e.target.value)}
                        />
                    </label>
                </div>

                <div>
                    <label className="flex cursor-pointer items-start gap-3 text-sm text-muted-text">
                        <input
                            id="agreed"
                            type="checkbox"
                            checked={agreed}
                            onChange={(e) => setAgreed(e.target.checked)}
                            className="mt-0.5 h-5 w-5 shrink-0 accent-brown-600"
                        />
                        I agree to be contacted about UHIP 2026.
                    </label>
                    {err("agreed") && (
                        <p role="alert" className="mt-2 text-xs text-danger">
                            {err("agreed")}
                        </p>
                    )}
                </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                    type="submit"
                    disabled={status === "sending"}
                    className="rounded-xl bg-gold-600 px-7 py-4 text-sm font-bold text-brown-900 transition hover:brightness-95 disabled:opacity-60"
                >
                    {status === "sending" ? "Sending…" : "Send Enquiry →"}
                </button>

                {status === "error" && (
                    <p role="alert" className="text-sm text-danger">
                        Something went wrong. Please try again, or email info@afmaajgroup.com.
                    </p>
                )}
            </div>
        </form>
    );
}