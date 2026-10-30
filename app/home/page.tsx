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
            <section className='w-full flex h-full relative bg-linear-to-r from-brown-900 to-brown-600 px-20 py-40'>
                <span className='w-175 h-175 border border-gold-600 rounded-full absolute -top-50 -right-20' />
                <div className="flex-1 flex flex-col gap-12">
                    <div className='border border-gold-600 w-max px-3 py-1 rounded-2xl text-sm text-gold-600 font-sans'>
                        UHIP 2026 · AFMAAJ CONSULTING
                    </div>
                    <div className=' flex flex-col gap-5 max-w-160'>
                        <h1 className='text-white text-6xl tracking-wide font-extrabold font-sans'>Connecting Nigeria to the Global Halal Economy</h1>
                        <p className='text-white/70 text-lg font-san'> <span className='font-bold'>Unlocking Halal & Halalpreneurship Investments Programme (UHIP 2026)</span> brings Nigerian businesses, investors and institutions together to train, invest, connect and showcase.</p>
                    </div>

                    <div className="flex gap-5">
                        <CTA btnText='Buy Your Ticket' />

                        <button className='px-5 border border-white text-white py-3 font-sans rounded-xl hover:bg-white/10'>
                            Explore UHIP
                        </button>
                    </div>

                    <div className='flex text-gold-600 font-bold gap-2 text-base font-sans'>
                        <p>Let's grow.</p>
                        <p>Let's export.</p>
                        <p>Let's lead.</p>
                    </div>

                </div>
                <div className="flex-1">
                    <div className="w-130 h-130"></div>
                </div>
            </section>

            <section className='bg-warm-white px-17.5 py-8 font-sans flex justify-between'>
                <div className='flex flex-col gap-1'>
                    <p className='uppercase text-muted-text text-xs'>Date</p>
                    <p className='font-bold text-base'>23 - 26 November 2026</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <p className='uppercase text-muted-text text-xs'>Venue</p>
                    <p className='font-bold text-base'>NAF Conference Center,  FCT Abuja, Nigeria</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <p className='uppercase text-muted-text text-xs'>Organizer</p>
                    <p className='font-bold text-base'>Afmaaj Consulting Limited</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <p className='uppercase text-muted-text text-xs'>FORMAT</p>
                    <p className='font-bold text-base'>Training · Summit · Forum · Exhibition</p>
                </div>
            </section>

            <section className='w-full flex flex-col'>
                <Countdown />

                <div className="w-full flex px-30 py-20 font-sans">
                    <div className="flex w-full">
                        <div className="flex-1 items-start justify-center flex flex-col gap-5">
                            <p className='text-sm text-brown-600 uppercase font-semibold tracking-wider'>About UHIP</p>

                            <h2 className='text-4xl font-extrabold font-sans max-w-xl'>A platform built to move Nigerian Halal businesses onto the global stage</h2>
                        </div>

                        <div className="flex-1 flex flex-col items-start justify-center max-w-140 gap-5">
                            <p className='text-brown-900'>UHIP 2026 is the official event and participation platform of Afmaaj Consulting Limited. It connects Halal businesses, entrepreneurs, investors, policymakers and certifiers to opportunities in the global Halal economy.</p>
                            <p className='text-muted-text'>Choose the route that fits you: get trained, put capital to work, join the policy conversation, or put your products in front of buyers.</p>
                            <button className='text-brown-600 font-bold hover:text-brown-900'>Explore the experiences</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className='px-30 py-20 w-full h-full bg-brown-900 font-sans flex flex-col gap-20'>
                <div className='gap-5 flex flex-col'>
                    <p className='text-sm font-bold text-gold-600'>Why the halal ecomnomy?</p>
                    <h3 className='text-white text-4xl font-extrabold'>A fast-growing market with room for Nigerian businesses to lead</h3>
                </div>

                <div className="w-full grid grid-cols-3 gap-8">
                    {
                        statCardData.map((data, i) => (
                            <div key={i} className='bg-white/7 p-8 flex flex-col rounded-xl items-start gap-3 border border-[#C9B89C]'>
                                <h4 className='text-gold-600 text-6xl'>{data.digit}</h4>
                                <p className='text-base text-white font-bold'>{data.label}</p>
                                <p className='text-white/60 text-sm'>{data.desc}</p>
                            </div>
                        ))
                    }
                </div>
            </section>

            <section className="px-30 py-20 w-full h-full bg-warm-white font-sans gap-20 flex flex-col">
                <div className='gap-5 flex flex-col'>
                    <p className='text-sm font-bold text-gold-600'>The Four Experiences</p>
                    <h3 className='text-brown-900 text-4xl font-extrabold'>One programme, four ways to take part</h3>
                </div>

                <div className="w-full grid grid-cols-4 gap-8">
                    {
                        fourExperiencesCardData.map((data, i) => (
                            <Link key={i} href="/register" className='bg-white group p-8 flex flex-col rounded-xl items-start gap-6 border border-border'>
                                <div className='bg-brown-900 text-gold-600 py-2 px-3 rounded-full'>
                                    {data.step}
                                </div>

                                <p className='text-gold-600 uppercase font-bold text-xs'>{data.title}</p>
                                <h5 className='text-3xl font-bold'>{data.label}</h5>
                                <p className='text-muted-text font-display'>{data.desc}</p>
                                <button className='text-brown-600 group-hover:text-brown-900 font-bold'>{data.action}</button>
                            </Link>
                        ))
                    }
                </div>
            </section>

            <section className="px-30 py-20 w-full h-full font-sans gap-20 flex flex-col">
                <div className='gap-5 flex flex-col'>
                    <p className='text-sm font-bold text-gold-600'>Who should attend?</p>
                    <h3 className='text-brown-900 text-4xl font-extrabold'>There is a place here for you</h3>
                </div>

                <div className="w-full grid grid-cols-4 gap-8">
                    {
                        attendanceCardData.map((data, i) => (
                            <Link key={i} href="/register" className={` ${data?.ctaText ? 'bg-brown-900 justify-between' : 'bg-warm-white'} group p-6 flex flex-col rounded-xl items-start gap-3`}>
                                <h6 className={`${data?.ctaText ? "text-white" : "text-brown-900"} font-bold text-lg`}>{data.label}</h6>
                                <p className='text-muted-text text-sm'>{data.desc}</p>

                                {
                                    !data?.ctaText && (
                                        <div className='bg-white px-3 py-1 text-xs text-brown-600 font-bold rounded-xl'>
                                            {data.pillText}
                                        </div>
                                    )
                                }

                                {
                                    data?.ctaText && (
                                        <button className='text-gold-600 font-bold text-sm'>{data?.ctaText}</button>
                                    )
                                }

                            </Link>
                        ))
                    }
                </div>
            </section>

            <section className="px-30 py-20 w-full h-full bg-warm-white font-sans gap-20 flex flex-col">
                <div className='gap-5 flex flex-col'>
                    <p className='text-sm font-bold text-gold-600'>Participation Routes</p>
                    <h3 className='text-brown-900 text-4xl font-extrabold'>Choose how you take part</h3>
                </div>

                <div className="w-full grid grid-cols-4 gap-8">
                    {
                        participationRoutesCardData.map((data, i) => (
                            <div key={i} className={`${i === 0 ? "bg-brown-900" : "bg-white"} group p-6 flex flex-col rounded-xl items-start gap-4 border border-border`}>
                                <h1 className={`${i === 0 ? 'text-gold-600' : 'text-brown-900'} font-bold text-2xl`}>{data.label}</h1>
                                <p className={`${i === 0 ? 'text-white' : 'text-muted-text'}`}>{data.desc}</p>

                                <button className={`${i === 0 ? "text-gold-600" : "text-brown-600 group-hover:text-brown-900"} text-base font-bold`}>{data.action}</button>
                            </div>
                        ))
                    }
                </div>
            </section>

            <section className="px-30 py-20 w-full h-full font-sans flex items-center justify-center">
                <div className='w-full relative bg-linear-to-r from-brown-900 to-brown-600 flex flex-col items-center overflow-hidden justify-center gap-8 py-20 rounded-xl'>
                    <span className='w-[600] h-[600] border border-gold-600 opacity-25 rounded-full absolute -top-60 -right-20' />
                    <h2 className='z-100 text-5xl font-bold text-white'>Secure your place at UHIP <span className='font-display font-normal'>2026</span> </h2>
                    <p className='text-lg max-w-2xl text-center text-white font-medium'>Bring Your Knowledge. Bring Your Organisation. Bring Your Next Opportunity.
                        <span className='font-bold'><br/>Let’s grow. Let’s export. Let’s lead</span>
                    </p>

                    <div className='flex gap-4'>
                        <CTA btnText='Buy Your Ticket →' />
                        <button className='px-5 border border-white text-white py-2 font-sans rounded-xl hover:bg-white/10'>
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home