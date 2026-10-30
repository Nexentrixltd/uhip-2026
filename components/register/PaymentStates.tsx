const STATES = [
    {
        key: "processing",
        label: "Processing",
        title: "Processing your payment",
        body: "Secure payment in progress. Please do not close this window.",
        icon: "…",
        iconClass: "bg-brown-600",
        progress: true,
        actions: [],
    },
    {
        key: "success",
        label: "Success",
        title: "Payment successful",
        body: "Your registration is confirmed. Reference: UHIP-2026-000000",
        icon: "✓",
        iconClass: "bg-brown-600",
        progress: false,
        actions: [
            { label: "Download Ticket", variant: "gold" },
            { label: "Add to Calendar", variant: "outline" },
        ],
    },
    {
        key: "failed",
        label: "Failed",
        title: "Payment not completed",
        body: "Your registration is not confirmed and you have not been charged.",
        icon: "!",
        iconClass: "bg-danger",
        progress: false,
        actions: [{ label: "Try Again", variant: "dark", href: "#checkout" }],
    },
    {
        key: "cancelled",
        label: "Cancelled",
        title: "Payment cancelled",
        body: "Your ticket was not purchased. Your details are saved.",
        icon: "×",
        iconClass: "bg-sage-700",
        progress: false,
        actions: [{ label: "Return to Checkout", variant: "dark", href: "#checkout" }],
    },
] as const;

const VARIANTS = {
    gold: "bg-gold-600 text-brown-900",
    outline: "border border-brown-900 bg-white text-brown-900",
    dark: "bg-brown-900 text-white",
} as const;

export default function PaymentStates() {
    return (
        <section className="bg-warm-white font-sans">
            <div className="mx-auto w-full max-w-360 px-6 py-16 md:px-16 md:py-20">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brown-600">
                    Payment states
                </p>
                <h2 className="mt-3 text-4xl font-bold tracking-tight text-brown-900 md:text-5xl">
                    Every outcome is clear
                </h2>

                <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {STATES.map((s) => (
                        <article
                            key={s.key}
                            className="flex flex-col rounded-2xl border border-border bg-white p-6"
                        >
                            <span
                                aria-hidden
                                className={`flex h-12 w-12 items-center justify-center rounded-full text-xl font-bold text-white ${s.iconClass}`}
                            >
                                {s.icon}
                            </span>

                            <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.16em] text-muted-text">
                                {s.label}
                            </p>
                            <h3 className="mt-2 text-xl font-bold text-brown-900">{s.title}</h3>
                            <p className="mt-3 text-sm text-muted-text">{s.body}</p>

                            {s.progress && (
                                <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-border">
                                    <div className="h-full w-2/5 rounded-full bg-brown-600" />
                                </div>
                            )}

                            {s.actions.length > 0 && (
                                <div className="mt-5 flex flex-col items-start gap-3">
                                    {s.actions.map((a) => {
                                        const cls = `rounded-lg px-4 py-2.5 text-sm font-semibold ${VARIANTS[a.variant]}`;
                                        return "href" in a ? (
                                            <a key={a.label} href={a.href} className={cls}>
                                                {a.label}
                                            </a>
                                        ) : (
                                            <button key={a.label} type="button" className={cls}>
                                                {a.label}
                                            </button>
                                        );
                                    })}
                                </div>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}