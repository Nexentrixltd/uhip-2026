import Countdown from '@/components/countdown'
import CTA from '@/components/ui/CTA'
import Link from 'next/link'
import React from 'react'

const Home = () => {

    const statCardData = [
        {
            digit: "$7–8T*",
            label: "Global Halal market",
            desc: "Annual spend across food, finance, fashion, pharma and more."
        },
        {
            digit: "$180B*",
            label: "Nigeria opportunity",
            desc: "Estimated scale of Halal-relevant trade and investment."
        },
        {
            digit: "5B+",
            label: "Halal-conscious Consumers",
            desc: "Approx. number of Muslim and Halal-conscious Consumers in the market."
        }
    ]

    const fourExperiencesCardData = [
        {
            step: "01",
            title: "train",
            label: "CEP & PCH Halal Training",
            desc: "Skills and practical knowledge for certification, compliance and export readiness.",
            action: "Buy / Request →"
        },
        {
            step: "02",
            title: "invest",
            label: "Halal Investment Summit",
            desc: "Deal rooms and B2B/B2G meetings with investors, DFIs, banks and financiers.",
            action: "Invest / Pitch →"
        },
        {
            step: "03",
            title: "connect",
            label: "Int’l Halalpreneurship Forum",
            desc: "Plenaries, policy roundtables, case studies, mentorship and networking.",
            action: "Attend →"
        },
        {
            step: "04",
            title: "showcase",
            label: "Halal Economy Exhibition",
            desc: "Market, Solutions, Innovation and Institutions zones for buyers and partners.",
            action: "Exhibit →"
        },
    ]

    const attendanceCardData = [
        {
            label: "Entrepreneurs & MSMEs",
            desc: "Skills, visibility and mentorship",
            pillText: "Attend / PCH"
        },
        {
            label: "Manufacturers & Exporters",
            desc: "Buyers and market opportunities",
            pillText: "Exhibit"
        },
        {
            label: "Investors, DFIs & Banks",
            desc: "Vetted Halal ventures and deals",
            pillText: "Invest"
        },
        {
            label: "Government & Certifiers",
            desc: "Policy dialogue and collaboration",
            pillText: "Attend / Partner"
        },
        {
            label: "Universities & Researchers",
            desc: "Knowledge and industry links",
            pillText: "Attend / PCH"
        },
        {
            label: "Buyers & Distributors",
            desc: "Reliable Halal-ready suppliers",
            pillText: "Attend"
        },
        {
            label: "Professionals & Aspiring Halalpreneurs",
            desc: "Practical skills and networks",
            pillText: "Attend / PCH"
        },
        {
            label: "Not sure where you fit?",
            ctaText: "Talk to the Afmaaj team →"
        },
    ]

    const participationRoutesCardData = [
        {
            label: "Attend",
            desc: "Join the forum, training and networking sessions.",
            action: 'Select →'
        },
        {
            label: "Invest",
            desc: "Meet vetted Halal ventures in deal rooms.",
            action: 'Select →'
        },
        {
            label: "Exhibit",
            desc: "Showcase products and solutions to buyers.",
            action: 'Select →'
        },
        {
            label: "Partner",
            desc: "Gain sector-level visibility through programme collaboration.",
            action: 'Select →'
        },
    ]

    return (
        <div className='flex flex-col w-full h-full overflow-y-auto overflow-x-hidden'>
            <section className="relative flex min-h-screen w-full flex-col overflow-hidden bg-linear-to-r from-brown-900 to-brown-600 px-6 py-28 sm:px-10 sm:py-32 lg:flex-row lg:items-center lg:px-16 lg:py-40 xl:px-20">

                <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-24 -top-20 h-80 w-80 rounded-full border border-gold-600 sm:-right-20 sm:-top-32 sm:h-125 sm:w-125 lg:-right-20 lg:-top-50 lg:h-175 lg:w-175"
                />

                <div className="relative z-10 flex w-full flex-col gap-8 sm:gap-10 lg:flex-1 lg:gap-12">
                    <div className="w-fit rounded-2xl border border-gold-600 px-3 py-1 font-sans text-xs text-gold-600 sm:text-sm">
                        UHIP 2026 · AFMAAJ CONSULTING
                    </div>

                    <div className="flex max-w-160 flex-col gap-5">
                        <h1 className="font-sans text-4xl font-extrabold tracking-wide text-white sm:text-5xl lg:text-6xl">
                            Connecting Nigeria to the Global Halal Economy
                        </h1>

                        <p className="font-sans text-base leading-relaxed text-white/70 sm:text-lg">
                            <span className="font-bold">
                                Unlocking Halal & Halalpreneurship Investments Programme (UHIP 2026)
                            </span>{" "}
                            brings Nigerian businesses, investors and institutions together to train, invest, connect and showcase.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
                        <CTA btnText="Buy Your Ticket" />

                        <button
                            type="button"
                            className="rounded-xl border border-white px-5 py-3 font-sans text-white transition-colors hover:bg-white/10"
                        >
                            Explore UHIP
                        </button>
                    </div>

                    <div className="flex flex-wrap gap-x-3 gap-y-2 font-sans text-sm font-bold text-gold-600 sm:text-base">
                        <p>Let's grow.</p>
                        <p>Let's export.</p>
                        <p>Let's lead.</p>
                    </div>

                </div>

                <div className="relativem hidden z-10 mt-12 w-full items-center justify-center sm:mt-16 lg:mt-0 lg:flex-1 lg:pl-10">
                    <div className="aspect-square w-full max-w-80 sm:max-w-100 lg:max-w-130">
                        {/* Add your hero image or visual here */}
                    </div>
                </div>

            </section>

            <section className="grid grid-cols-1 gap-6 bg-warm-white px-6 py-8 font-sans sm:grid-cols-2 sm:gap-y-8 sm:px-10 lg:grid-cols-4 lg:gap-8 lg:px-17.5">

                <div className="flex flex-col gap-1">
                    <p className="text-xs uppercase text-muted-text">Date</p>
                    <p className="text-base font-bold">23 - 26 November 2026</p>
                </div>

                <div className="flex flex-col gap-1">
                    <p className="text-xs uppercase text-muted-text">Venue</p>
                    <p className="text-base font-bold">
                        NAF Conference Center, FCT Abuja, Nigeria
                    </p>
                </div>

                <div className="flex flex-col gap-1">
                    <p className="text-xs uppercase text-muted-text">Organizer</p>
                    <p className="text-base font-bold">Afmaaj Consulting Limited</p>
                </div>

                <div className="flex flex-col gap-1">
                    <p className="text-xs uppercase text-muted-text">Format</p>
                    <p className="text-base font-bold">
                        Training · Summit · Forum · Exhibition
                    </p>
                </div>

            </section>

            <section className='w-full flex flex-col'>
                <Countdown />

                <section className="w-full px-6 py-14 font-sans sm:px-10 sm:py-16 lg:px-20 lg:py-24 xl:px-30">
                    <div className="flex w-full flex-col gap-8 md:flex-row md:items-center md:gap-12 lg:gap-16">

                        <div className="flex flex-1 flex-col items-start justify-center gap-5">
                            <p className="text-xs font-semibold uppercase tracking-wider text-brown-600 sm:text-sm">
                                About UHIP
                            </p>

                            <h2 className="max-w-xl text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                                A platform built to move Nigerian Halal businesses onto the global stage
                            </h2>
                        </div>

                        <div className="flex w-full flex-1 flex-col items-start justify-center gap-5 md:max-w-140">
                            <p className="leading-relaxed text-brown-900">
                                UHIP 2026 is the official event and participation platform of Afmaaj Consulting Limited. It connects Halal businesses, entrepreneurs, investors, policymakers and certifiers to opportunities in the global Halal economy.
                            </p>

                            <p className="leading-relaxed text-muted-text">
                                Choose the route that fits you: get trained, put capital to work, join the policy conversation, or put your products in front of buyers.
                            </p>

                            <button className="font-bold text-brown-600 transition-colors hover:text-brown-900">
                                Explore the experiences
                            </button>
                        </div>

                    </div>
                </section>
            </section>

            <section className="flex h-full w-full flex-col gap-10 bg-brown-900 px-6 py-14 font-sans sm:gap-12 sm:px-10 sm:py-16 lg:gap-16 lg:px-20 lg:py-24 xl:px-30">
                <div className="flex flex-col gap-4 sm:gap-5">
                    <p className="text-xs font-bold text-gold-600 sm:text-sm">
                        Why the halal economy?
                    </p>

                    <h3 className="max-w-4xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                        A fast-growing market with room for Nigerian businesses to lead
                    </h3>
                </div>

                <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:gap-8">
                    {statCardData.map((data, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-start gap-3 rounded-xl border border-[#C9B89C] bg-white/7 p-6 sm:p-8"
                        >
                            <h4 className="text-5xl font-bold text-gold-600 sm:text-6xl">
                                {data.digit}
                            </h4>

                            <p className="text-base font-bold text-white">
                                {data.label}
                            </p>

                            <p className="text-sm leading-relaxed text-white/60">
                                {data.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="flex h-full w-full flex-col gap-10 bg-warm-white px-6 py-14 font-sans sm:gap-12 sm:px-10 sm:py-16 lg:gap-16 lg:px-20 lg:py-24 xl:px-30">
                <div className="flex flex-col gap-4 sm:gap-5">
                    <p className="text-xs font-bold text-gold-600 sm:text-sm">
                        The Four Experiences
                    </p>

                    <h3 className="text-3xl font-extrabold leading-tight text-brown-900 sm:text-4xl">
                        One programme, four ways to take part
                    </h3>
                </div>

                <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 xl:gap-8">
                    {fourExperiencesCardData.map((data, i) => (
                        <Link
                            key={i}
                            href="/register"
                            className="group flex flex-col items-start gap-5 rounded-xl border border-border bg-white p-6 transition-transform hover:-translate-y-1 sm:gap-6 sm:p-7 lg:p-6 xl:p-8"
                        >
                            <div className="rounded-full bg-brown-900 px-3 py-2 text-gold-600">
                                {data.step}
                            </div>

                            <p className="text-xs font-bold uppercase text-gold-600">
                                {data.title}
                            </p>

                            <h5 className="text-2xl font-bold leading-tight text-brown-900 sm:text-3xl">
                                {data.label}
                            </h5>

                            <p className="flex-1 font-display leading-relaxed text-muted-text">
                                {data.desc}
                            </p>

                            <span className="text-sm font-bold text-brown-600 transition-colors group-hover:text-brown-900 sm:text-base">
                                {data.action}
                            </span>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="flex h-full w-full flex-col gap-10 px-6 py-14 font-sans sm:gap-12 sm:px-10 sm:py-16 lg:gap-16 lg:px-20 lg:py-24 xl:px-30">
                <div className="flex flex-col gap-4 sm:gap-5">
                    <p className="text-xs font-bold text-gold-600 sm:text-sm">
                        Who should attend?
                    </p>

                    <h3 className="text-3xl font-extrabold leading-tight text-brown-900 sm:text-4xl">
                        There is a place here for you
                    </h3>
                </div>

                <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 xl:gap-8">
                    {attendanceCardData.map((data, i) => (
                        <Link
                            key={i}
                            href="/register"
                            className={`${data?.ctaText
                                    ? "justify-between bg-brown-900"
                                    : "bg-warm-white"
                                } group flex flex-col items-start gap-3 rounded-xl p-5 transition-transform hover:-translate-y-1 sm:p-6`}
                        >
                            <h6
                                className={`${data?.ctaText ? "text-white" : "text-brown-900"
                                    } text-base font-bold sm:text-lg`}
                            >
                                {data.label}
                            </h6>

                            <p className="text-sm leading-relaxed text-muted-text">
                                {data.desc}
                            </p>

                            {!data?.ctaText && (
                                <div className="mt-1 rounded-xl bg-white px-3 py-1 text-xs font-bold text-brown-600">
                                    {data.pillText}
                                </div>
                            )}

                            {data?.ctaText && (
                                <span className="mt-2 text-sm font-bold text-gold-600">
                                    {data.ctaText}
                                </span>
                            )}
                        </Link>
                    ))}
                </div>
            </section>

            <section className="flex h-full w-full flex-col gap-10 bg-warm-white px-6 py-14 font-sans sm:gap-12 sm:px-10 sm:py-16 lg:gap-16 lg:px-20 lg:py-24 xl:px-30">
                <div className="flex flex-col gap-4 sm:gap-5">
                    <p className="text-xs font-bold text-gold-600 sm:text-sm">
                        Participation Routes
                    </p>

                    <h3 className="text-3xl font-extrabold leading-tight text-brown-900 sm:text-4xl">
                        Choose how you take part
                    </h3>
                </div>

                <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 xl:gap-8">
                    {participationRoutesCardData.map((data, i) => (
                        <div
                            key={i}
                            className={`${i === 0 ? "bg-brown-900" : "bg-white"
                                } group flex flex-col items-start gap-4 rounded-xl border border-border p-5 sm:p-6`}
                        >
                            <h3
                                className={`${i === 0 ? "text-gold-600" : "text-brown-900"
                                    } text-xl font-bold sm:text-2xl`}
                            >
                                {data.label}
                            </h3>

                            <p
                                className={`${i === 0 ? "text-white" : "text-muted-text"
                                    } flex-1 leading-relaxed`}
                            >
                                {data.desc}
                            </p>

                            <button
                                className={`${i === 0
                                        ? "text-gold-600"
                                        : "text-brown-600 group-hover:text-brown-900"
                                    } text-left text-sm font-bold transition-colors sm:text-base`}
                            >
                                {data.action}
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            <section className="flex h-full w-full items-center justify-center px-6 py-14 font-sans sm:px-10 sm:py-16 lg:px-20 lg:py-24 xl:px-30">
                <div className="relative flex w-full flex-col items-center justify-center gap-6 overflow-hidden rounded-xl bg-linear-to-r from-brown-900 to-brown-600 px-5 py-14 sm:gap-8 sm:px-8 sm:py-16 lg:py-20">
                    <span className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-gold-600 opacity-25 sm:-right-20 sm:-top-60 sm:h-125 sm:w-125" />

                    <h2 className="z-10 max-w-3xl text-center text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                        Secure your place at UHIP{" "}
                        <span className="font-display font-normal">2026</span>
                    </h2>

                    <p className="z-10 max-w-2xl text-center text-sm font-medium leading-relaxed text-white sm:text-base lg:text-lg">
                        Bring Your Knowledge. Bring Your Organisation. Bring Your Next Opportunity.
                        <span className="block font-bold">
                            Let’s grow. Let’s export. Let’s lead
                        </span>
                    </p>

                    <div className="z-10 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
                        <CTA btnText="Buy Your Ticket →" />

                        <button className="w-full rounded-xl border border-white px-5 py-2 font-sans text-white transition-colors hover:bg-white/10 sm:w-auto">
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home