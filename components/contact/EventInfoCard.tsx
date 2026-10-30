const INFO = [
    { label: "Date", value: "23 - 26 November 2026" },
    { label: "Venue", value: "NAF Conference Center, FCT Abuja, Nigeria" },
    { label: "Organiser", value: "Afmaaj Consulting Limited" },
    { label: "Partner", value: "Quantum Microfinance Bank" },
];

export default function EventInfoCard() {
    return (
        <aside
            aria-label="Event information"
            className="font-sans relative overflow-hidden rounded-3xl bg-linear-to-br from-brown-900 to-brown-600 p-8 text-white"
        >
            <span
                aria-hidden
                className="pointer-events-none absolute -top-10 right-16 h-72 w-72 rounded-full border border-gold-600/30"
            />

            <div className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">
                    Event information
                </p>

                <dl className="mt-6 space-y-5">
                    {INFO.map((i) => (
                        <div key={i.label}>
                            <dt className="text-[11px] font-bold uppercase tracking-[0.16em] text-gold-600">
                                {i.label}
                            </dt>
                            <dd className="mt-1 text-xl font-bold leading-snug">{i.value}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </aside>
    );
}