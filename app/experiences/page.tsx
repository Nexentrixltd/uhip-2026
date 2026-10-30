import CTA from '@/components/ui/CTA'
import PageHero from '@/components/ui/PageHero'

const ExperiencesPage = () => {

    const whatYoullLearnCardData = [
        {
            step: "01",
            label: "Certification & compliance",
            desc: "Requirements and routes to Halal certification.",
        },
        {
            step: "02",
            label: "Documentation",
            desc: "The records buyers and regulators expect.",
        },
        {
            step: "03",
            label: "Halal Standards & auditing",
            desc: "How standards are applied and audited.",
        },
        {
            step: "04",
            label: "Viable Halal enterprises",
            desc: "Turning compliance into a sustainable business.",
        },
        {
            step: "05",
            label: "Global market requirements",
            desc: "What export markets ask of Halal products.",
        },
    ]

    const trainCardData = [
        {
            tag: 'CEP',
            label: 'Customized Exclusive Premium',
            desc: 'Organization-specific training tailored to your team, products and export goals.',
            format: 'Organization-specific',
            maxParts: '30',
            focus: 'Product, sector and export',
            price: '',
            buttonText: 'Request CEP →'
        },
        {
            tag: 'PCH',
            label: 'Public Class Halal',
            desc: 'An open, intensive two-day programme in practical Halal business and compliance skills.',
            format: 'Open · two-day intensive',
            maxParts: '100',
            focus: 'Certification and compliance',
            price: '',
            buttonText: 'Request CEP'
        }
    ]

    const whatParticipantsRecieveCardData = [
        {
            label: 'Certification',
            desc: 'Participants are positioned to receive certification on completion.'
        },
        {
            label: 'Networking',
            desc: 'Meet fellow Halalpreneurs, trainers and industry leaders.'
        },
        {
            label: 'Experience access',
            desc: 'Access to the  HIS, IHF  and HEE experiences on 26 November.'
        }
    ]

    const experiencesCardData = [
        {
            tag: 'INVEST',
            label: 'Halal Investment Summit (HIS)',
            desc: 'A capital-focused experience where businesses put their investment needs in front of investors, DFIs, banks, financiers and relevant agencies.',
            points: [
                'Investment deal rooms',
                'B2B / B2G meetings',
                'Financial structuring',
                'Shariah-compliant financing',
            ],
            imageLabel: 'Investment meeting',
            buttonText: 'Invest / Pitch →',
        },
        {
            tag: 'CONNECT',
            label: 'International Halalpreneurship Forum (IHF)',
            desc: 'A knowledge, policy and networking platform bringing together Halalpreneurs, industry leaders and institutions.',
            points: [
                'Plenary sessions',
                'Policy roundtables',
                'Case studies and mentorship',
                'Networking',
            ],
            imageLabel: 'Forum plenary',
            buttonText: 'Attend →',
        },
        {
            tag: 'SHOWCASE',
            label: 'Halal Economy Exhibition (HEE)',
            desc: 'A showcase where businesses and institutions display products, services and innovations to buyers, investors and partners.',
            points: [
                'Market Zone',
                'Solutions Zone',
                'Innovation Zone',
                'Institutions Zone',
            ],
            imageLabel: 'Exhibition floor',
            buttonText: 'Exhibit →',
        },
    ]


    const registrationStepsData = [
        {
            label: 'Express Your Interest',
            desc: 'Tell us your objective and preferred route:',
            options: 'Attend | Invest | Exhibit | Partner',
        },
        {
            label: 'Receive Confirmation',
            desc: 'The Afmaaj team will confirm your availability, package and joining instructions.',
        },
        {
            label: 'Attend & Connect',
            desc: 'Join us in FCT Abuja from the 23rd to the 6th of November, 2026.',
        },
    ]


    return (
        <div className='flex flex-col w-full h-full overflow-y-auto overflow-x-hidden font-sans'>
            <PageHero
                eyebrow=" CEP/PCH TRAINING + UHIP EXPERIENCES"
                title="What can you take part in?"
                eyebrowStyle="pill"
                description="Train with certified Halal experts, pitch to investors, join the policy conversation or exhibit to buyers. Pick the experience that fits your goals."
            />

            <section className="flex h-full w-full flex-col gap-10 bg-warm-white px-6 py-14 font-sans sm:gap-12 sm:px-10 sm:py-16 lg:gap-16 lg:px-20 lg:py-24 xl:px-30">
                <div className="flex flex-col gap-4 sm:gap-5">
                    <p className="text-xs font-bold text-gold-600 sm:text-sm">
                        What you'll learn
                    </p>
                    <h3 className="text-3xl font-extrabold leading-tight text-brown-900 sm:text-4xl">
                        Practical skills for Halal business
                    </h3>
                </div>
                <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:gap-6 xl:gap-8">
                    {
                        whatYoullLearnCardData.map((data, i) => (
                            <div key={i} className='bg-white group p-6 flex flex-col rounded-xl items-start gap-3 border border-border'>
                                <div className='bg-brown-900 text-gold-600 w-10 h-10 flex items-center justify-center rounded-full'>
                                    {data.step}
                                </div>
                                <h5 className='text-base font-bold'>{data.label}</h5>
                                <p className='text-muted-text text-sm'>{data.desc}</p>
                            </div>
                        ))
                    }
                </div>
            </section>

            <section className="flex h-full w-full flex-col gap-8 px-5 py-12 font-sans sm:gap-12 sm:px-10 sm:py-16 lg:gap-16 lg:px-20 lg:py-24 xl:px-30">
                <div className="flex flex-col gap-4 sm:gap-5">
                    <p className="text-sm font-bold text-gold-600">Train</p>
                    <h3 className="text-2xl font-extrabold text-brown-900 sm:text-3xl lg:text-4xl">
                        CEP & PCH Halal Training
                    </h3>
                </div>

                <div className="grid w-full grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-2 lg:gap-8">
                    {trainCardData.map((data, i) => (
                        <div
                            key={i}
                            className="group flex flex-col items-start gap-4 rounded-xl border border-border bg-warm-white p-5 sm:gap-5 sm:p-8"
                        >
                            <p className="text-xs uppercase text-brown-600">
                                {data.tag}
                            </p>

                            <h5 className="text-xl font-bold sm:text-2xl">
                                {data.label}
                            </h5>

                            <p className="text-sm text-muted-text sm:text-base">
                                {data.desc}
                            </p>

                            <div className="flex w-full flex-col gap-4 sm:gap-5">
                                <div className="flex items-start justify-between gap-4">
                                    <p className="text-sm capitalize text-muted-text sm:text-base">
                                        Format
                                    </p>
                                    <p className="text-right text-sm font-bold sm:text-base">
                                        {data.format}
                                    </p>
                                </div>

                                <div className="flex items-start justify-between gap-4">
                                    <p className="text-sm capitalize text-muted-text sm:text-base">
                                        Max Participants
                                    </p>
                                    <p className="text-right text-sm font-bold sm:text-base">
                                        {data.maxParts}
                                    </p>
                                </div>

                                <div className="flex items-start justify-between gap-4">
                                    <p className="text-sm capitalize text-muted-text sm:text-base">
                                        Focus
                                    </p>
                                    <p className="max-w-[60%] text-right text-sm font-bold sm:text-base">
                                        {data.focus}
                                    </p>
                                </div>

                                <div className="flex items-start justify-between gap-4">
                                    <p className="text-sm capitalize text-muted-text sm:text-base">
                                        Price
                                    </p>
                                    <p className="text-right text-sm font-bold sm:text-base">
                                        {data.price}
                                    </p>
                                </div>
                            </div>

                            {i === 0 ? (
                                <button className="rounded-xl border border-brown-900 px-5 py-2 text-sm font-bold font-sans hover:bg-white/10 sm:text-base">
                                    {data.buttonText}
                                </button>
                            ) : (
                                <CTA btnText="Buy PCH Ticket →" />
                            )}
                        </div>
                    ))}
                </div>
            </section>

            <section className="flex h-full w-full flex-col gap-10 bg-brown-900 px-6 py-14 font-sans sm:gap-12 sm:px-10 sm:py-16 lg:gap-16 lg:px-20 lg:py-24 xl:px-30">
                <div className='gap-5 flex flex-col'>
                    <p className='text-sm font-bold text-gold-600'>Training Benefits</p>
                    <h3 className='text-white text-4xl font-extrabold'>What participants receive</h3>
                </div>

                <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {
                        whatParticipantsRecieveCardData.map((data, i) => (
                            <div key={i} className="flex flex-col gap-4 rounded-xl border border-brown-600 bg-white/7 p-6 sm:gap-5 sm:p-8">
                                <h1 className='text-xl text-gold-600 font-bold'>{data.label}</h1>
                                <p className='text-base text-white/80'>{data.desc}</p>
                            </div>
                        ))
                    }
                </div>
            </section>

            <section className="w-full font-sans">
                {experiencesCardData.map((data, i) => (
                    <div
                        key={data.label}
                        className={`flex w-full flex-col items-center gap-8 px-5 py-10 sm:gap-10 sm:px-8 sm:py-14 md:flex-row md:gap-12 md:px-12 lg:gap-16 lg:px-20 lg:py-16 `}
                    >
                        <div
                            className={`flex w-full flex-col items-start gap-5 sm:gap-6 md:w-1/2 ${i % 2 === 1 ? "md:order-2" : "md:order-1"
                                }`}
                        >
                            <p className="text-[11px] font-bold tracking-[0.15em] text-brown-600 sm:text-xs">
                                {data.tag}
                            </p>

                            <h2 className="max-w-xl text-2xl leading-tight font-extrabold text-brown-900 sm:text-3xl md:text-4xl">
                                {data.label}
                            </h2>

                            <p className="max-w-xl text-sm leading-6 text-muted-text sm:text-base">
                                {data.desc}
                            </p>

                            <ul className="flex flex-col gap-2">
                                {data.points.map((point) => (
                                    <li
                                        key={point}
                                        className="flex items-start gap-2 text-sm leading-6 font-semibold text-brown-900 sm:text-base"
                                    >
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-600" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                type="button"
                                className="w-full rounded-lg bg-gold-600 px-5 py-3 text-sm font-bold text-brown-900 transition-colors hover:bg-gold-500 sm:w-auto"
                            >
                                {data.buttonText}
                            </button>
                        </div>

                        <div
                            className={`w-full md:w-1/2 ${i % 2 === 1 ? "md:order-1" : "md:order-2"
                                }`}
                        >
                            <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-linear-to-br from-[#76553f] via-[#453226] to-[#2c211a] sm:aspect-16/10 md:aspect-4/3">
                                <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full border border-gold-600/30 sm:-top-24 sm:-right-24 sm:h-64 sm:w-64 md:-top-28 md:-right-2 md:h-80 md:w-80" />

                                <div className="absolute -bottom-10 -left-8 h-32 w-32 rounded-full border border-gold-600/30 sm:-bottom-12 sm:h-36 sm:w-36 md:-bottom-14 md:-left-10 md:h-44 md:w-44" />

                                <span className="absolute bottom-3 left-3 rounded-full bg-white px-3 py-1 text-[10px] font-medium text-brown-900 sm:bottom-4 sm:left-4">
                                    {data.imageLabel}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            <section className="w-full bg-white px-5 py-12 font-sans sm:px-8 sm:py-14 md:px-12 lg:py-16">
                <div className="relative mx-auto flex min-h-64 w-full max-w-7xl flex-col items-center justify-center overflow-hidden rounded-2xl bg-linear-to-r from-[#2c2119] via-[#493528] to-[#76553f] px-5 py-12 text-center sm:rounded-3xl sm:px-8 sm:py-14 lg:px-12">
                    <div className="pointer-events-none absolute -right-24 -top-20 h-64 w-64 rounded-full border border-[#cda522]/30 sm:-right-10 sm:-top-28 sm:h-80 sm:w-80 md:-right-2 md:-top-32 md:h-96 md:w-96" />

                    <div className="relative z-10 flex w-full flex-col items-center gap-5">
                        <h2 className="max-w-3xl text-2xl font-normal leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
                            <span className="font-bold">Ready to take part in UHIP</span>{" "}
                            <span className="font-light">2026?</span>
                        </h2>

                        <p className="max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
                            Choose your experience and register securely with Paystack.
                        </p>

                        <div className="flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-3">
                            <CTA btnText="Buy Your Ticket →" />

                            <button
                                type="button"
                                className="w-full rounded-xl border border-white/70 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full bg-brown-900 px-5 py-12 font-sans text-white sm:px-8 sm:py-14 md:px-12 lg:py-20">
                <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 sm:gap-8">
                    <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                        How to Register
                    </h2>

                    <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {registrationStepsData.map((data, i) => (
                            <div
                                key={data.label}
                                className="flex min-h-28 flex-col items-start gap-3 rounded-2xl border border-brown-600 bg-white/[0.07] p-5 sm:p-6"
                            >
                                <h3 className="text-base font-bold text-[#d0a51e] sm:text-lg">
                                    {data.label}
                                </h3>

                                <p className="text-sm leading-6 text-white/75">
                                    {data.desc}
                                </p>

                                {data.options && (
                                    <p className="text-sm leading-6 font-semibold text-white">
                                        {data.options.split(" | ").map((option, index) => (
                                            <span key={option}>
                                                {index > 0 && " | "}
                                                {option}
                                            </span>
                                        ))}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    )
}

export default ExperiencesPage