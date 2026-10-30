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
        <div className="w-full bg-warm-white">
            <p className="sr-only" role="status" aria-live="polite">
                {announcement}
            </p>

            <ol
                aria-label="Registration progress"
                className="mx-auto flex w-full max-w-360 items-center gap-1 px-3 py-5 sm:gap-2 sm:px-6 md:gap-4 md:px-16"
            >
                {STEPS.map((label, i) => {
                    const n = i + 1;
                    const done = n < current || allDone;
                    const active = n === current && !allDone;
                    const last = i === STEPS.length - 1;
                    const showLabel = active || (allDone && last);

                    return (
                        <li
                            key={label}
                            aria-current={active ? "step" : undefined}
                            className={`flex min-w-0 items-center gap-1 sm:gap-2 md:gap-4 font-sans ${last ? "shrink-0" : "flex-1"
                                }`}
                        >
                            <span className="flex shrink-0 items-center gap-1.5 sm:gap-2 md:gap-3">
                                <span
                                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[10px] font-bold transition-colors duration-300 sm:h-8 sm:w-8 sm:text-xs ${done || active
                                            ? "border-brown-900 bg-brown-900 text-gold-600"
                                            : "border-border bg-white text-muted-text"
                                        }`}
                                >
                                    {done ? "✓" : n}
                                </span>

                                <span
                                    className={`text-xs transition-colors hidden md:block duration-300 sm:text-sm ${showLabel
                                            ? "font-bold text-brown-900"
                                            : "hidden text-muted-text lg:inline"
                                        }`}
                                >
                                    {label}
                                </span>
                            </span>

                            {!last && (
                                <span
                                    aria-hidden="true"
                                    className={`h-px min-w-2 flex-1 transition-colors duration-300 sm:min-w-4 ${done ? "bg-brown-600" : "bg-border"
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