import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Image from 'next/image';

const page = () => {
  return (
    <div className='bg-white flex h-[100vh] '>
        <div className='bg-[dodgerblue] w-[15vw] flex flex-col items-center    '>
            <div className='flex flex-col gap-60 bg-white h-[100vh] items-center'>
                <div className='flex flex-col gap-8  ml-10 mt-36'>
                    <div className='flex gap-2 hover:bg-[#411212] rounded-[15px]  cursor-pointer px-4 py-2'>
                    <p className='text-[17px] text-[#411212] hover:text-white'>New business idea    </p>
                    <MoreVertIcon className='text-white' />
                    </div>
                    <div  className='flex gap-1 hover:bg-[#411212] rounded-[15px] cursor-pointer px-4 py-2'>
                    <p className='text-[17px] text-[#411212] hover:text-white'>Business Proposals   </p>
                    <MoreVertIcon  className='text-white'/>
                    </div>
                    <div  className='flex gap-2 hover:bg-[#411212] rounded-[15px] cursor-pointer px-4 py-2'>
                    <p className='text-[17px] text-[#411212] hover:text-white'>Start ups and see..  </p>
                    <MoreVertIcon  className='text-white'/>
                    </div>
                    <div  className='flex gap-3 hover:bg-[#411212] rounded-[15px] cursor-pointer px-4 py-2'>
                    <p className='text-[17px] text-[#411212] hover:text-white'>Effectual Methods    </p>
                    <MoreVertIcon  className='text-white'/>
                    </div>
                    <div  className='flex gap-4 hover:bg-[#411212] rounded-[15px] cursor-pointer px-4 py-2'>
                    <p className='text-[17px] text-[#411212] hover:text-white'>Ideas around he...   </p>
                    <MoreVertIcon  className='text-white'/>
                    </div>
                </div>
                <div className='flex gap-36'>
                    <DeleteOutlinedIcon />
                    <AddOutlinedIcon />
                </div>
            </div>
        </div>
        <div className='flex flex-col relative h-[100vh] bg-[#411212] w-[84vw]'>
            <div  className='flex gap-2 absolute left-[990px] ml-[250px] mt-6 items-center '>
                <p className='text-white'>Akua Frims</p>
                <Image width={40} height={40} src='/Akua.png' />
            </div>
            <div className='flex flex-col items-center mt-36'>
                <Image width={90} height={90} src='/logo.png' alt='logo' />
                <p className='text-center text-white text-[30px]'>Welcome, Let's talk business! Got some ideas? <br /> Let's build on it!</p>
            </div>
            <div className='mt-[150px] flex flex-col items-center gap-4'>
                <input type="text" placeholder='Latest business trends amongst startups' className='p-4 w-[500px] bg-transparent border-[1px] border-white outline-none rounded-[30px] text-[20px] text-white'/>
                <input type="text" placeholder='Latest business trends amongst startups' className='p-4 w-[500px] bg-transparent border-[1px] border-white outline-none rounded-[30px] text-[20px] text-white'/>
            </div>
            <div className='flex  items-center gap-4 justify-center mt-24'>
                <div className='flex p-4 items-center border-[1px] border-white w-[50vw] rounded-[30px]'>
                    <Image width={30} height={30} src='/logo.png'  />
                    <input type="text" placeholder='Give me business ideas on fashion based projects' className='bg-transparent w-[50vw] border-none outline-none ml-3 text-[#ccc] text-[20px]'/>
                    <Image width={30} height={30} src='/Paper Plane.png' alt='send' className='cursor-pointer' />
                </div>
                <div>
                    <Image width={30} height={30} src='/Mic.png' className='cursor-pointer' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default page