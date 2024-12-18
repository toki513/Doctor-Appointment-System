import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppointments = () => {

  const {doctors} = useContext(AppContext)


  return (
    <div>
    <p className='font-semibold text-xl mb-4'>My Appointments</p>  
    <hr />
      
      <div>
        {doctors.slice(0,3).map((item , index) =>(
          <div className='grid grid-cols-[1fr_2fr]gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>

            <div >
              <img className='w-32 bg-slate-50' src={item.image} alt="" />
            </div>

            <div className='flex-1 text-sm'>
              <p className='font-semibold'>{item.name}</p>
              <p>{item.speciality}</p>
              <p className='my-2 font-semibold'>Address:</p>
              <p>Sector 10</p>
              <p>Uttara, Dhaka</p>
              <p className='mt-2'><span className=''>Date & Time : </span> 27 December, 2024</p>
            </div>

            <div></div>
            <div>
            <button className="btn sm:mr-4 bg-green-300 hover:bg-green-600">Pay Online</button>
            <button className="btn btn-error bg-red-400 hover:bg-red-600">Cancel Appointment</button>
            </div>
          </div>
        ))}
      </div>
      
      
      </div>
  )
}

export default MyAppointments