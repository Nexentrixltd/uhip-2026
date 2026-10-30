import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='w-full bg-[#15100D] p-15 font-sans text-white'>
            <div className='grid grid-cols-3'>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-xl text-white font-bold'>UHIP <span className='font-display font-medium'>2026</span></h1>
                    <p className='text-base text-white/60'>Connecting Nigeria to the Global Halal Economy.</p>
                </div>

                <div className="flex flex-col">
                    <h2 className='text-gold-600 uppercase text-xs mb-2'>contact</h2>
                    <p className='text-sm text-white/80 mb-1'>Afmaaj Consulting Limited</p>
                    <p className='text-sm text-white/80 mb-1'>info@afmaajgroup.com</p>
                    <p className='text-sm text-white/80 mb-1'>+234 701 949 4848 / +234 817 748 4848</p>
                    <p className='text-sm text-white/80 mb-1'>www.afmaajgroup.com</p>
                </div>

                <div className="flex flex-col">
                    <h2 className='text-gold-600 uppercase text-xs mb-2'>Explore</h2>
                    <Link href="/home" className='text-sm text-white/80 mb-1'>Home</Link>
                    <Link href="/experiences" className='text-sm text-white/80 mb-1'>Experiences</Link>
                    <Link href="/register" className='text-sm text-white/80 mb-1'>Register</Link>
                    <Link href="/contact" className='text-sm text-white/80 mb-1'>Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer