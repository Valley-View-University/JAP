'use client'
import Image from 'next/image'
import React from 'react'

const Intro = () => {
    const login = () => {
        window.location.href = '/login'
    }
    const signup = () => {
        window.location.href = '/signup'
    }
  return (
    <div className='flex flex-col gap-6 items-center h-[100vh] justify-center  Intro '>
            <div>
                <Image  
                width={150}
                height={150}
                src='/logo.png'
                />
            </div>
            <div>
                <p className='text-center text-[25px] text-white '>The business AI that you need to bridge the gap <br /> in the business industry!</p>
            </div>
            <div className='flex gap-8 mt-16'>
                <button className='bg-white text-[#411212] font-semibold text-[25px] py-2 px-14 rounded-xl' onClick={() => login()}>LOG IN</button>
                <button className='bg-white text-[#411212] font-semibold text-[25px] px-14 rounded-xl' onClick={() => signup()}>SIGN UP</button>
            </div>
            <div>
                <p className='text-white text-[15px] mt-36'>Copy right @ JAP, 2023 </p>
            </div>
    </div>
  )
}

export default Intro