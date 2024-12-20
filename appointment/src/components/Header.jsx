import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-gray-300 rounded-xl px-6 md:px-10'>
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-20px]'>
            <p className='text-3xl md:text-5xl font-semibold leading-tight md:leading-tight'>Book Appointment <br />
            With Trusted Doctors</p>

            <div className='' >
                <img className='w-28' src={assets.group_profiles} alt="" />
                <p className='mt-4 text-lg  '>Simply browse through our extensive list of trusted doctors, <br /> schedule your appointment hassle-free.</p>
            </div>

            <a href="#speciality" className='flex  items-center gap-2 bg-blue-400 rounded-xl p-4 mt-6 text-lg'>Book Appointment <img className='w-4' src={assets.arrow_icon} alt="" /></a>

        </div>

        <div className='md:w-1/2 relative'>

                <img className='w-full md:absolute bottom-0 rounded-lg h-auto' src={assets.header_img} alt="" />
        </div>
    </div>
  )
}

export default Header