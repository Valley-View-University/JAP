'use client'

import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Image from 'next/image';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import axios from 'axios';


const page = () => {

    const [userInput, setUserInput] = useState('');
    const [gptResponse, setGptResponse] = useState('');
    const router = useRouter();

    const handleInputChange = (e) => setUserInput(e.target.value);
    async function handleAskGPT () {
        // Send request to your backend
        try {
            const response = await axios.post('http://localhost:4000/api/process-gpt', { userInput });
            console.log('Response from GPT:', response);
            setGptResponse(response.data.message);
        } catch (error) {
            console.error('Error:', error);
            // Handle the error appropriately
        }
    };

    const handleLogout = () => {
        // Implement logout logic
        router.push('/login');
    };

  return (
    <div className='bg-white flex h-[100vh] '>
        <div className='bg-[dodgerblue] w-[15vw] flex flex-col items-center    '>
            <div className='flex flex-col gap-60 bg-white h-[100vh] items-center'>
                <div className='flex flex-col gap-8  ml-10 mt-36'>
                    <div className='flex gap-2 hover:bg-[#411212] rounded-[15px]  cursor-pointer px-4 py-2'>
                    <button onClick={() => router.push('/dashboard')} className='nav-btn'>Home</button>
                    </div>
                    <div  className='flex gap-1 hover:bg-[#411212] rounded-[15px] cursor-pointer px-4 py-2'>
                    {/* <button onClick={() => router.push('/settings')} className='nav-btn'>Settings</button> */}
                    </div>
                    <div  className='flex gap-2 hover:bg-[#411212] rounded-[15px] cursor-pointer px-4 py-2'>
                    </div>
                    <div  className='flex gap-3 hover:bg-[#411212] rounded-[15px] cursor-pointer px-4 py-2'>
                    </div>
                    <div  className='flex gap-4 hover:bg-[#411212] rounded-[15px] cursor-pointer px-4 py-2'>
                    <button onClick={handleLogout} className='nav-btn'>Logout</button>
                    </div>
                </div>
                <div className='flex gap-36'>
                    <DeleteOutlinedIcon />
                    <AddOutlinedIcon />
                </div>
            </div>
        </div>
        <div className='flex flex-col relative h-[100vh] bg-[#411212] w-[84vw]'>
            
            <div className='flex flex-col items-center mt-36'>
                <Image width={90} height={90} src='/logo.png' alt='logo' />
                <p className='text-center text-white text-[30px]'>Welcome, Let's talk business! Got some ideas? <br /> Let's build on it!</p>
            </div>
            <div className='response-area'>
                         {gptResponse && <p className='text-white'>{gptResponse}</p>}
            </div>
             <div className='flex flex-col relative h-[100vh] bg-[#411212] w-[84vw]'>
                 <div className='mt-[150px] flex flex-col items-center gap-4'>
                     <input 
                         type="text" 
                         value={userInput} 
                         onChange={handleInputChange} 
                         placeholder='Enter your query for ChatGPT' 
                         className='input-field bg-transparent w-[50vw] border-none outline-none ml-3 text-[#ccc] text-[20px]'
                     />
                     <button onClick={handleAskGPT} className='ask-btn'>Ask GPT</button>
                 </div>
             </div>
        </div>
    </div>
  )
}

export default page;







// import { useRouter } from 'next/navigation';
// import Image from 'next/image';

// const Dashboard = () => {
//     const [userInput, setUserInput] = useState('');
//     const [gptResponse, setGptResponse] = useState('');
//     const router = useRouter();

//     const handleInputChange = (e) => setUserInput(e.target.value);
//     const handleAskGPT = () => {
//         // Send request to your backend
//         setGptResponse("Generated response from GPT based on '" + userInput + "'");
//     };
//     const handleLogout = () => {
//         // Implement logout logic
//         router.push('/login');
//     };

//     return (
//         <div className='bg-white flex h-[100vh]'>
//             {/* Sidebar */}
//             <div className='bg-[dodgerblue] w-[15vw] flex flex-col items-center'>
//                 <div className='flex flex-col gap-60 bg-white h-[100vh] items-center'>
//                     <div className='flex flex-col gap-8 ml-10 mt-36'>
//                         <button onClick={() => router.push('/dashboard')} className='nav-btn'>Home</button>
//                         <button onClick={() => router.push('/settings')} className='nav-btn'>Settings</button>
//                         <button onClick={handleLogout} className='nav-btn'>Logout</button>
//                     </div>
//                 </div>
//             </div>

//             {/* Main Content */}
//             <div className='flex flex-col relative h-[100vh] bg-[#411212] w-[84vw]'>
//                 <div className='mt-[150px] flex flex-col items-center gap-4'>
//                     <input 
//                         type="text" 
//                         value={userInput} 
//                         onChange={handleInputChange} 
//                         placeholder='Enter your query for ChatGPT' 
//                         className='input-field'
//                     />
//                     <button onClick={handleAskGPT} className='ask-btn'>Ask GPT</button>
//                     <div className='response-area'>
//                         {gptResponse && <p className='text-white'>{gptResponse}</p>}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;