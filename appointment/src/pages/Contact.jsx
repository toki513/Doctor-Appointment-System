import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>

      <div className='text-center my-8 font-bold text-2xl'>Contact Us</div>

      <div className='flex md:flex-row flex-col'>

        <div className='flex justify-center my-8'>
          <img className='w-2/4 md:w-2/4' src={assets.contact_image} alt="" />
        </div>

        <div className='text-center md:my-8'>
          <h1 className='font-semibold mb-6 text-xl'>Our Office</h1>

          <p className=''>Sector 7, Uttara</p>
          <p className='mb-6'>Dhaka</p>

          <p>Tel: +8801974848</p>
          <p>Email : chanel@gmail.com</p>
        </div>

      </div>

    </div>
  )
}

export default Contact