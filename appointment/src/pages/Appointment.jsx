import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const Appointment = () => {

    const { docId } = useParams()
    const { doctors } = useContext(AppContext)
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI','SAT'
    ]

    const [docInfo, setDocInfo] = useState(null)
    const [docSlots, setDocSlots] = useState([])
    const [slotIndex,setSlotIndex] = useState(0)
    const [slotTime, setSlotTime] = useState('')

    const fetchDocInfo = async () => {
        const docInfo = doctors.find(doc => doc._id === docId)
        setDocInfo(docInfo)
   
    }

    const getAvailableSlots = async() =>{

      setDocSlots([])

      let today = new Date()

      for(let i=0;i<7;i++){
        let currentDate = new Date(today)
        currentDate.setDate(today.getDate()+i)

        let endTime = new Date()
        endTime.setDate(today.getDate() + i)
        endTime.setHours(21,0,0,0)

        if(today.getDate() === currentDate.getDate()){
          currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
          currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
        }

        else{
          currentDate.setHours(10)
          currentDate.setMinutes(0)
        }

        let timeSlots = []
        while (currentDate <endTime){
          let formattedTime = currentDate.toLocaleDateString([], {hour : '2-digit', minute : '2-digit'})

          timeSlots.push({
            datetime:new Date(currentDate),
            time:formattedTime
          })

          currentDate.setMinutes(currentDate.getMinutes() + 30)
        }

        setDocSlots(prev => ([...prev,timeSlots]))

      }

    }



    useEffect(()=>{
        fetchDocInfo()
    },[doctors, docId])

    useEffect(()=>{
      getAvailableSlots()
    }, [docInfo]
     )

    return docInfo && (
        <div>
          <div className='flex flex-col sm:flex-row gap-4'>
            <div>
              <img className='bg-gray-300 w-full  rounded-xl sm:max-w-72' src={docInfo.image} alt="" />
            </div>

            <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 mx-2'>
              <p className='flex items-center gap-2 text-2xl font-medium'>
                {docInfo.name}
                <img className='w-5 ml-2' src={assets.verified_icon} alt="" />
              </p>

              <div className='flex items-center gap-4 my-2 '>
                <p>{docInfo.degree}-{docInfo.speciality}</p>
                <button>{docInfo.experience}</button>
              </div>

              <div>
                <p className='my-2 font-semibold '>About <img className=' my-2' src={assets.info_icon} alt="" /></p>
                <p className=''>{docInfo.about}</p>
              </div>
              <p className='mt-2 font-semibold'>Appointment Fee - 1200 tk</p>
            </div>
          </div>

          <div className='sm:ml-72 sm:pl-4 mt-4 font-medium'>
            <p>Booking Slots</p>

            <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
              {
                docSlots.length && docSlots.map((item,index)=>(
                  <div onClick={()=> setSlotIndex(index)} className={`text-center min-w-16 rounded-full cursor-pointer py-6  ${slotIndex === index ?'bg-yellow-300 text-white': 'border border-blue-300' } `} key = {index}>
                    <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>

                    <p>{item[0] && item[0].datetime.getDate()}</p>
                  </div>

                ))
              }
            </div>

            <div className='flex items-center gap3 w-full overflow-scroll mt-4'>
              {docSlots.length && docSlots[slotIndex].map((item,index) =>(
                <p onClick={()=>setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-yellow-300 ' : 'text-gray-400 border border-gray-600'}`} key={index}>
                    {item.time.toLowerCase()}
                </p>
              ))}
            </div>

            <button className='mt-4 border border-yellow-300 p-4 rounded-xl bg-gray-300'>Book Appointment</button>
          </div>
        </div>
    )
}

export default Appointment
