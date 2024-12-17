import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (

    <div>


    <div className='text-center my-8 font-bold text-2xl'>About Us</div>

    <div className='flex md:flex-row flex-col py-6'>
       <div className='flex justify-center mb-6'>
          <img className='md:w-full sm:w-2/4  px-6  ' src={assets.about_image} alt="" />
       </div>

       <div>
            <p className='leading-7 md:mt-0 sm:mt-6 md:mx-6'>
            Welcome to Chanel, your trusted partner in managing your healthcare needs conveniently and efficiently. At Chanel, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
            </p>
            
            <p className='leading-7 sm:mt-6 md:mx-6'>
            Chanel is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you booking your first appointment or managing ongoing care, Chanel is here to support you every step of the way.
            </p>

            <p className='leading-7 sm:mt-6 md:mx-6'>
              
              Our vision at Chanel is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
            </p>
       </div>

    </div>

    </div>
  )
}

export default About