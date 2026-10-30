const ITEMS = [
    {
        letter: "E",
        label: "Email",
        lines: [{ text: "info@afmaajgroup.com", href: "mailto:info@afmaajgroup.com" }],
    },
    {
        letter: "P",
        label: "Phone",
        lines: [
            { text: "+234 701 949 4848", href: "tel:+2347019494848" },
            { text: "+234 817 748 4848", href: "tel:+2348177484848" },
        ],
    },
    {
        letter: "O",
        label: "Organisation",
        lines: [{ text: "Afmaaj Consulting Limited" }],
    },
    {
        letter: "W",
        label: "Website",
        lines: [
            { text: "www.afmaajgroup.com", href: "https://www.afmaajgroup.com", external: true },
        ],
    },
] as const;

export default function ContactCards() {
    return (
        <section className="mx-auto w-full font-sans max-w-360 px-6 py-12 md:px-16 md:py-16">
            <div className="grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                {ITEMS.map((item) => (
                    <div key={item.label} className="rounded-3xl bg-sage-50 p-7">
                        <span
                            aria-hidden
                            className="flex h-11 w-11 items-center justify-center rounded-full bg-brown-900 text-sm font-bold text-gold-600"
                        >
                            {item.letter}
                        </span>
                        <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.16em] text-brown-600">
                            {item.label}
                        </p>
                        <div className="mt-2 space-y-1">
                            {item.lines.map((line) =>
                                "href" in line ? (
                                    <a
                                        key={line.text}
                                        href={line.href}
                                        {...("external" in line
                                            ? { target: "_blank", rel: "noopener noreferrer" }
                                            : {})}
                                        className="block wrap-break-word text-base font-semibold text-brown-900 hover:underline"
                                    >
                                        {line.text}
                                    </a>
                                ) : (
                                    <p key={line.text} className="text-base font-semibold text-brown-900">
                                        {line.text}
                                    </p>
                                )
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}