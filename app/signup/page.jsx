'use client'
import React from 'react'
import Image from 'next/image'

const page = () => {
    const route = () => {
        window.location.href = '/dashboard'
    }
  return (
    <div className='min-h-screen flex bg-white h-[100vh]'>
        <div className='flex flex-col gap-10 items-center mt-24 w-[50vw]'>
            <div className='flex flex-col '>
                <label htmlFor="" className='text-[#411212] text-[24px] font-semibold'>E-mail</label>
                <input type="email" placeholder='akuadufie@gmail.com' className='border-[1px] p-4  w-[35vw] rounded-[25px] border-[#411212]' />
            </div>
            <div className='flex flex-col '>
                <label htmlFor="" className='text-[#411212] text-[24px] font-semibold'>Password</label>
                <input type="password" placeholder='*****************' className='border-[1px] p-4  w-[35vw] rounded-[25px] border-[#411212]' />
            </div>
            <div className='flex flex-col '>
                <label htmlFor="" className='text-[#411212] text-[24px] font-semibold'>Comfirm Password</label>
                <input type="password" placeholder='*****************' className='border-[1px] p-4  w-[35vw] rounded-[25px] border-[#411212]' />
            </div>

            <div className='mt-8 flex flex-col gap-8 items-center'>
                <button className='bg-[#411212] w-[35vw] p-3 rounded-[25px] text-white text-[25px] font-semibold' onClick={() => route()}>LOG IN</button>
                <p className='text-[#411212]'>or sign up with:</p>
            </div>
            <div className='flex gap-2 mt-2'>
                <Image width={50} height={50} src='/google.png' className='cursor-pointer' />
                <Image width={50} height={50} src='/apple.png' className='cursor-pointer'/>
            </div>


        </div>
        <div className='bg-[#411212] w-[50vw] sign '>
            <div className='flex flex-col items-center mt-72 gap-4'>
                <Image width={100} height={100} src='/logo.png'/>
                <p className='text-center text-[25px] text-white'>Welcome to JAP, <br /> New User? Create your account?</p>
            </div>
        </div>
    </div>
  )
}

export default page