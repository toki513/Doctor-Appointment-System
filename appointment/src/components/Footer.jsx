import React from 'react'
import chanel from '../assets/chanel.webp';

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex mt-40 flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm'>

                <div>
                    <img className='mb-5 w-40' src={chanel} alt="" />
                    <p className='text-sm ml-10'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, <br />necessitatibus inventore! Pariatur, dolore perferendis <br />blanditiis voluptatum accusamus iusto unde sed.
                    </p>

                </div>
                <div className=''>


                        <h1 className='font-semibold text-2xl py-12'>Company</h1>
                    <ul className='leading-8 ml-2 cursor-pointer'>
                        <li >Home</li>
                        <li>About</li>
                        <li>Contact us</li>
                        <li>Privacy</li>
                     </ul>

                </div>

                <div>

                    <p className='font-semibold text-2xl py-12'>Get in Touch</p>
                    <ul className='leading-8 ml-2 cursor-pointer'>
                        <li>+880 194848330</li>
                        <li>chanel@gmail.com</li>
                    </ul>
                </div>




        </div>
            <div>
                <hr />
                <p className='text-center text-sm py-4'>Copyright © 2024 Chanel - All Right Reserved.</p>
            </div>

    </div>
  )
}

export default Footer