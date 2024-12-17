import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate = useNavigate()
  return (
    <div className='flex border-gray-400 bg-gray-400 rounded-xl '>
        <div className='flex-1 py-8 sm:py-10 md:py-25 sm:pl-10 lg:pl-20 leading-10'>
        <h1 className="font-bold text-xl lg:text-5xl lg:my-10 gap-8 leading-10">Book Appointment</h1>
        <h1  className="font-bold text-xl lg:text-5xl lg:my-10 gap-8 leading-10">With 50+ Trusted Doctors</h1>

        <button onClick={()=>{navigate('/login'); scrollTo(0,0)}} className='bg-blue-400 rounded-xl px-2 py-4 font-semibold mt-2'>Create account</button>
        </div>

        <div className="">
            <img className='w-2/4' src={assets.appointment_img} alt="" />
        </div>

    </div>
  )
}

export default Banner