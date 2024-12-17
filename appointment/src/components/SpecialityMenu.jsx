import React from 'react'
import {assets, specialityData} from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
        <h1 className='text-3xl font-bold'>Find By Speciality</h1>
        <p className='text-lg font-semibold items-center  text-center py-4'>Simply browse through our extensive list of trusted doctors, schedule your <br /> appointment hassle-free</p>

        <div className='flex gap-6 sm:justify-center pt-5 w-full overflow-scroll cursor-pointer'>
            {specialityData.map((item, index) =>(
                <Link onClick={() => scrollTo(0,0)} key={index} to={`/doctors/${item.speciality}`}>
                <img className='bg-yellow-300 rounded-3xl' src={item.image} alt="" />
                <p className='text-center mt-2 font-semibold'>{item.speciality}</p>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default SpecialityMenu