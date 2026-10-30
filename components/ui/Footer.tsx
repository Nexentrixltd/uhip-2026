import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="w-full bg-[#15100D] px-6 py-12 font-sans text-white sm:px-10 sm:py-14 lg:px-20 lg:py-16 xl:px-30">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
                <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1 lg:gap-5">
                    <h1 className="text-xl font-bold text-white">
                        UHIP <span className="font-display font-medium">2026</span>
                    </h1>

                    <p className="max-w-xs text-sm leading-relaxed text-white/60 sm:text-base">
                        Connecting Nigeria to the Global Halal Economy.
                    </p>
                </div>

                <div className="flex flex-col items-start">
                    <h2 className="mb-3 text-xs uppercase text-gold-600">
                        Contact
                    </h2>

                    <p className="mb-2 text-sm text-white/80">
                        Afmaaj Consulting Limited
                    </p>

                    <a
                        href="mailto:info@afmaajgroup.com"
                        className="mb-2 break-all text-sm text-white/80 transition-colors hover:text-gold-600"
                    >
                        info@afmaajgroup.com
                    </a>

                    <a
                        href="tel:+2347019494848"
                        className="mb-2 text-sm text-white/80 transition-colors hover:text-gold-600"
                    >
                        +234 701 949 4848
                    </a>

                    <a
                        href="tel:+2348177484848"
                        className="mb-2 text-sm text-white/80 transition-colors hover:text-gold-600"
                    >
                        +234 817 748 4848
                    </a>

                    <a
                        href="https://www.afmaajgroup.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white/80 transition-colors hover:text-gold-600"
                    >
                        www.afmaajgroup.com
                    </a>
                </div>

                <div className="flex flex-col items-start">
                    <h2 className="mb-3 text-xs uppercase text-gold-600">
                        Explore
                    </h2>

                    <Link href="/home" className="mb-2 text-sm text-white/80 transition-colors hover:text-gold-600">
                        Home
                    </Link>

                    <Link href="/experiences" className="mb-2 text-sm text-white/80 transition-colors hover:text-gold-600">
                        Experiences
                    </Link>

                    <Link href="/register" className="mb-2 text-sm text-white/80 transition-colors hover:text-gold-600">
                        Register
                    </Link>

                    <Link href="/contact" className="text-sm text-white/80 transition-colors hover:text-gold-600">
                        Contact
                    </Link>
                </div>

            </div>
        </footer>
    )
}

export default Footer