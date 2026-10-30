const STEPS = [
    "Choose ticket",
    "Attendee details",
    "Review order",
    "Pay",
    "Confirmation",
];

export default function Stepper({ current }: { current: number }) {
    const allDone = current > STEPS.length;
    const announcement = allDone
        ? "Registration complete"
        : `Step ${current} of ${STEPS.length}: ${STEPS[current - 1]}`;

    return (
        <div className="bg-warm-white">
            <p className="sr-only" role="status" aria-live="polite">
                {announcement}
            </p>

            <ol
                aria-label="Registration progress"
                className="mx-auto flex w-full max-w-360 items-center gap-2 px-6 py-5 md:gap-4 md:px-16"
            >
                {STEPS.map((label, i) => {
                    const n = i + 1;
                    const done = n < current;
                    const active = n === current;
                    const last = i === STEPS.length - 1;
                    const showLabel = active || (allDone && last);

                    return (
                        <li
                            key={label}
                            aria-current={active ? "step" : undefined}
                            className={`flex items-center gap-2 md:gap-4 font-sans ${last ? "" : "flex-1"}`}
                        >
                            <span className="flex shrink-0 items-center gap-2 md:gap-3">
                                <span
                                    className={`flex h-8 w-8 items-center justify-center rounded-full border text-xs font-bold transition-colors duration-300 ${done || active
                                            ? "border-brown-900 bg-brown-900 text-gold-600"
                                            : "border-border bg-white text-muted-text"
                                        }`}
                                >
                                    {done ? "✓" : n}
                                </span>
                                <span
                                    className={`text-sm transition-colors duration-300 ${showLabel
                                            ? "font-bold text-brown-900"
                                            : "hidden text-muted-text lg:inline"
                                        }`}
                                >
                                    {label}
                                </span>
                            </span>

                            {!last && (
                                <span
                                    aria-hidden
                                    className={`h-px flex-1 transition-colors duration-300 ${done ? "bg-brown-600" : "bg-border"
                                        }`}
                                />
                            )}
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}