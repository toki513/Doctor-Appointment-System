import {useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {assets} from '../assets/assets'
import chanel from '../assets/chanel.webp';


const Navbar = () => {

    const navigate = useNavigate()
    
    const [showMenu, setShowMenu] = useState(false)
    const [token, setToken] = useState(true)

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-200'>
         <img onClick={()=> navigate('/')} className='w-44 cursor-pointer ' src={chanel} alt="Protea" />

        <ul className='flex items-start gap-5 font-medium'>
            <NavLink to={'/'} >
                <li className='py-1 text-xl'>Home</li>
                <hr className='border-none outline-none h-0.5 bg-gray-300 w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to={'/doctors'}>
                <li className='py-1 text-xl'>All Doctors</li>
                <hr className='border-none outline-none bg-gray-300 mx-auto w-3/5 h-0.5 hidden' />
            </NavLink>
            <NavLink to={'/about'}>
                <li className='py-1 text-xl '>About</li>
                <hr className='border-none outline-none bg-gray-300 mx-auto w-3/5 h-0.5 hidden'/>
            </NavLink>
            <NavLink to={'/contact'}>
                <li className='py-1 text-xl'>Contact</li>
                <hr className='border-none outline-none bg-gray-300 mx-auto w-3/5 h-0.5 hidden' />
            </NavLink>

        </ul>
        <div className='flex items-center gap-4'>

            {
                token? 
                <div className='flex items-center cursor-pointer group relative'>
                    <img className='w-8 rounded-full mr-2' src={assets.profile_pic} alt="" />

                    <img className='w-2.5' src={assets.dropdown_icon} alt="" />

                    <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-700 z-20 hidden group-hover:block'>
                        <div className='min-w-48 rounded flex flex-col gap-4 p-4 bg-stone-200'>
                            <p onClick={()=>navigate('my-profile')} className='hover:text-black cursor-pointer' >My Profile</p>
                            <p onClick={()=> navigate('my-appointments')}  className='hover:text-black cursor-pointer'>My Appointment</p>
                            <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                        </div>
                    </div>
                </div>
                : <button onClick={()=>navigate('/login')} className='bg-gray-300 rounded-xl text-black px-8  py-3 m-auto hidden font-semibold md:block ' >Create Account</button>
            }

           
        </div>

    </div>
  )
}

export default Navbar