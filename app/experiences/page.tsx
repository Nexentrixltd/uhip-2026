import CTA from '@/components/ui/CTA'
import React from 'react'

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
            <section className='relative flex w-full overflow-hidden bg-linear-to-r from-brown-900 to-brown-600 px-6 pt-32 pb-20 md:px-20'>
                <span className='absolute -top-32 -right-16 h-125 w-125 rounded-full border border-gold-600 opacity-25' />
                <span className='absolute -bottom-32 right-0 h-95 w-95 rounded-full border border-gold-600 opacity-25' />
                <div className="flex flex-1 flex-col gap-8">
                    <div className='w-max rounded-2xl border border-gold-600 px-3 py-1 font-sans text-sm text-gold-600'>
                        CEP/PCH TRAINING + UHIP EXPERIENCES
                    </div>
                    <div className='flex max-w-170 flex-col gap-4'>
                        <h1 className='font-sans text-5xl font-extrabold tracking-tight text-white'>
                            What can you take part in?
                        </h1>
                        <p className='font-sans text-lg text-white/70'>
                            Train with certified Halal experts, pitch to investors, join the policy conversation or exhibit to buyers. Pick the experience that fits your goals.
                        </p>
                    </div>
                </div>
            </section>

            <section className="px-30 py-20 w-full h-full bg-warm-white font-sans gap-20 flex flex-col">
                <div className='gap-5 flex flex-col'>
                    <p className='text-sm font-bold text-gold-600'>What you'll learn</p>
                    <h3 className='text-brown-900 text-4xl font-extrabold'>Practical skills for Halal business</h3>
                </div>

                <div className="w-full grid grid-cols-5 gap-8">
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

            <section className="px-30 py-20 w-full h-full font-sans gap-20 flex flex-col">
                <div className='gap-5 flex flex-col'>
                    <p className='text-sm font-bold text-gold-600'>Train</p>
                    <h3 className='text-brown-900 text-4xl font-extrabold'>CEP & PCH Halal Training</h3>
                </div>

                <div className="w-full grid grid-cols-2 gap-8">
                    {
                        trainCardData.map((data, i) => (
                            <div key={i} className='bg-warm-white group p-8 flex flex-col rounded-xl items-start gap-5 border border-border'>
                                <p className='text-brown-600 uppercase text-xs'>{data.tag}</p>
                                <h5 className='text-2xl font-bold'>{data.label}</h5>
                                <p className='text-muted-text text-base'>{data.desc}</p>

                                <div className='flex flex-col gap-5 w-full'>
                                    <div className="flex items-center justify-between ">
                                        <p className='text-base text-muted-text capitalize'>format</p>
                                        <p className='font-bold text-base'>{data.format}</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className='text-base text-muted-text capitalize'>Max Participants</p>
                                        <p className='font-bold text-base'>{data.maxParts}</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className='text-base text-muted-text capitalize'>Focus</p>
                                        <p className='font-bold text-base'>{data.focus}</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className='text-base text-muted-text capitalize'>Price</p>
                                        <p className='font-bold text-base'>{data.price}</p>
                                    </div>
                                </div>

                                {
                                    i === 0 ? (
                                        <button className='px-5 border border-brown-900 text-base font-bold py-2 font-sans rounded-xl hover:bg-white/10'>
                                            {data.buttonText}
                                        </button>
                                    ) : (
                                        <CTA btnText='Buy PCH Ticket →' />
                                    )
                                }
                            </div>
                        ))
                    }
                </div>
            </section>

            <section className='px-30 py-20 w-full h-full font-sans gap-15 flex flex-col bg-brown-900'>
                <div className='gap-5 flex flex-col'>
                    <p className='text-sm font-bold text-gold-600'>Training Benefits</p>
                    <h3 className='text-white text-4xl font-extrabold'>What participants receive</h3>
                </div>

                <div className="w-full grid grid-cols-3 gap-8">
                    {
                        whatParticipantsRecieveCardData.map((data, i) => (
                            <div key={i} className='bg-white/7 p-8 flex flex-col gap-5 border-brown-600 rounded-xl border'>
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
                        className={`flex w-full flex-col items-center gap-10 px-6 py-12 md:flex-row md:gap-16 md:px-12 lg:px-20 lg:py-16 ${i % 2 === 1
                            ? 'bg-warm-white'
                            : 'bg-white'
                            }`}
                    >
                        <div
                            className={`flex w-full flex-col items-start gap-6 md:w-1/2 ${i % 2 === 1
                                ? 'md:order-2'
                                : 'md:order-1'
                                }`}
                        >
                            <p className="text-xs font-bold tracking-[0.15em] text-brown-600">
                                {data.tag}
                            </p>

                            <h2 className="max-w-xl text-2xl font-extrabold leading-tight text-brown-900 md:text-4xl">
                                {data.label}
                            </h2>

                            <p className="max-w-xl text-base leading-6 text-muted-text">
                                {data.desc}
                            </p>

                            <ul className="flex flex-col gap-2">
                                {data.points.map((point) => (
                                    <li
                                        key={point}
                                        className="flex items-start gap-2 text-base font-semibold text-brown-900"
                                    >
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-600" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                type="button"
                                className="rounded-lg bg-gold-600 px-4 py-2.5 text-sm font-bold text-brown-900 transition-colors hover:bg-gold-500"
                            >
                                {data.buttonText}
                            </button>
                        </div>

                        <div
                            className={`w-full md:w-1/2 ${i % 2 === 1
                                ? 'md:order-1'
                                : 'md:order-2'
                                }`}
                        >
                            <div className="relative h-105 w-[560] overflow-hidden rounded-2xl bg-linear-to-br from-[#76553f] via-[#453226] to-[#2c211a] ">
                                <div className="absolute -right-5 -top-24 h-64 w-64 rounded-full border border-gold-600/30 md:-right-2 md:-top-28 md:h-80 md:w-80" />
                                <div className="absolute -bottom-12 -left-8 h-36 w-36 rounded-full border border-gold-600/30 md:-bottom-14 md:-left-10 md:h-44 md:w-44" />
                                <span className="absolute bottom-3 left-3 rounded-full bg-white px-3 py-1 text-[10px] font-medium text-brown-900">
                                    {data.imageLabel}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </section>


            <section className="w-full bg-white px-6 py-12 font-sans md:px-12 lg:px-12 lg:py-16">
                <div className="relative mx-auto flex min-h-64 w-full max-w-7xl flex-col items-center justify-center overflow-hidden rounded-3xl bg-linear-to-r from-[#2c2119] via-[#493528] to-[#76553f] px-6 py-12 text-center">
                    <div className="pointer-events-none absolute -right-10 -top-28 h-80 w-80 rounded-full border border-[#cda522]/30 md:-right-2 md:-top-32 md:h-96 md:w-96" />

                    <div className="relative z-10 flex flex-col items-center gap-5">
                        <h2 className="text-3xl font-normal tracking-tight text-white md:text-4xl">
                            <span className="font-bold">Ready to take part in UHIP</span>{' '}
                            <span className="font-light">2026?</span>
                        </h2>

                        <p className="text-sm text-white/75 md:text-base">
                            Choose your experience and register securely with Paystack.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-3">
                            <CTA btnText="Buy Your Ticket →" />

                            <button
                                type="button"
                                className="rounded-xl border border-white/70 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full bg-brown-900 px-6 py-16 font-sans text-white md:px-12 lg:px-12 lg:py-20">
                <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                        How to Register
                    </h2>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                        {registrationStepsData.map((data, i) => (
                            <div
                                key={data.label}
                                className="flex min-h-28 flex-col items-start gap-3 rounded-2xl border border-brown-600 bg-white/[0.07] p-6"
                            >
                                <h3 className="text-base font-bold text-[#d0a51e] md:text-lg">
                                    {data.label}
                                </h3>

                                <p className="text-sm leading-6 text-white/75">
                                    {data.desc}
                                </p>

                                {data.options && (
                                    <p className="text-sm leading-6 text-white font-semibold">
                                        {data.options.split(' | ').map((option, index) => (
                                            <span key={option}>
                                                {index > 0 && ' | '}
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