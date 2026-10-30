import type { ReactNode } from "react";

export const inputClass =
    "h-12 w-full rounded-xl border border-border bg-white px-4 text-sm text-brown-900 outline-none placeholder:text-muted-text/70 focus:border-brown-600 focus:ring-2 focus:ring-gold-600/30";

export const textareaClass =
    "min-h-36 w-full resize-y rounded-xl border border-border bg-white p-4 text-sm text-brown-900 outline-none placeholder:text-muted-text/70 focus:border-brown-600 focus:ring-2 focus:ring-gold-600/30";

export function Field({
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
        <div className="flex flex-col gap-2 font-sans">
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