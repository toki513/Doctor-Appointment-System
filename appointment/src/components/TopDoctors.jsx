/* eslint-disable react/jsx-key */
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {

    const navigate = useNavigate()
    const {doctors} = useContext(AppContext)
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-700 md:mx-10'>
        <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
        <p className='text-lg text-center'>Simply browse through our extensive list of trusted doctor</p>

        <div className='w-full mx-16 grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
            {doctors.slice(0,10).map((item,index) =>(
                <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-blue-300 rounded-xl overflow-hidden cursor-pointer '>
                    <img className='bg-gray-100' src={item.image} alt="" />
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                            <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                        </div>
                        <p className='font-semibold text-lg'>{item.name}</p>
                        <p>{item.speciality}</p>
                    </div>
                </div>

            ))}
        </div>
            <button onClick={()=> {navigate('/doctors'); scrollTo(0,0)}} className='bg-blue-300 py-4 px-8 rounded-xl text-lg font-semibold my-6'>More</button>

    </div>
  )
}

export default TopDoctors