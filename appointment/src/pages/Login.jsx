import React, { useState } from 'react'

const Login = () => {

    const [state,setState] = useState('Sign Up')

    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const onSubmitHandler =async (event)=>{
      event.preventDefault()
    }

  return (

    <form className='min-h-[80vh] flex items-center '>
        <div className='flex flex-col gap-3 m-auto border border-red-400 p-6 rounded-xl shadow-xl'>
          <p className='text-2xl font-semibold'> {state === 'Sign Up' ? "Create Account" : "Login"} </p>

          <p className='my-2'>Please {state === 'Sign Up' ? 
          "sign up" : "login"} to book appointment</p>

          {
            state === 'Sign Up' &&   <div className=''>
            <p className='font-semibold my-2'>Full Name</p>
            <input className='border border-red-300 rounded-xl w-full p-2 ' type="text" onChange={(e)=> setName(e.target.name)} value = {name} required/>
          </div>
          }

        

          <div>
            <p className='font-semibold my-2'>Email</p>
            <input className='border border-red-300 rounded-xl w-full p-2 '  type="email" onChange={(e) => setEmail(e.target.email)} value = {email} required/>

          </div>

          <div>
            <p className='font-semibold my-2'>Password</p>
            <input className='border border-red-300 rounded-xl w-full p-2 '  type="password" onChange={(e)=> setPassword(e.target.password)} value={password} required/>
          </div>

              <button className='bg-red-200 rounded-xl p-2 font-semibold text-xl hover hover:bg-red-300 my-2'>
                {state === 'Sign Up' ? "Create Account" : "Log in"}
              </button>


              {
                state === 'Sign Up' ? <p>Already have an account? <span onClick ={() => setState('Login')}  className='text-blue-500 underline cursor-pointer'>Login here</span> </p> :
                <p>Create a new Account? <span onClick={()=> setState('Sign Up')} className='text-blue-500 underline cursor-pointer'>Click here</span> </p>
              }
        </div>


    </form>
  )
}

export default Login