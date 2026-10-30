type Props = {
    eyebrow: string;
    title: string;
    description: string;
    eyebrowStyle?: "text" | "pill";
};

export default function PageHero({
    eyebrow,
    title,
    description,
    eyebrowStyle = "text",
}: Props) {
    return (
        <section className="relative w-full font-sans overflow-hidden bg-linear-to-r from-brown-900 to-brown-600 px-6 pt-32 pb-14 md:px-16 md:pb-20">
            <span
                aria-hidden
                className="pointer-events-none absolute -top-40 right-0 h-125 w-125 rounded-full border border-gold-600/30 md:right-16"
            />
            <span
                aria-hidden
                className="pointer-events-none absolute -right-24 top-12 hidden h-100 w-100 rounded-full border border-gold-600/30 md:block"
            />

            <div className="relative mx-auto w-full max-w-360">
                <p
                    className={
                        eyebrowStyle === "pill"
                            ? "inline-block rounded-full border border-gold-600 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-gold-600"
                            : "text-xs font-bold uppercase tracking-[0.18em] text-gold-600"
                    }
                >
                    {eyebrow}
                </p>
                <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
                    {title}
                </h1>
                <p className="mt-4 max-w-2xl text-lg text-white/90">{description}</p>
            </div>
        </section>
    );
}