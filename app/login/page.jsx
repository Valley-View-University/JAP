'use client'
import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if (!email || !password) {
            alert('Please enter both email and password');
            return;
        }
        try {
            const response = await axios.post('http://localhost:4000/api/users/login', {
                email,
                password,
            });
            console.log("Login response:", response.data);

            if (response.data.token) {
                window.location.href = '/dashboard';
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error("Login error:", error.response);
            console.error('Login failed:', error);
            alert('Login failed');
        }
    };

    return (
        <div className='min-h-screen h-[100vh] bg-white flex'>
            <div className='flex flex-col bg-[#411212] w-[50vw] gap-6 items-center log '>
                <div className='mt-40'>
                    <Image 
                    width={150}
                    height={150}
                    src='/logo.png'
                    alt='logo of '
                    />
                </div>
                <div>
                    <p className='text-white text-[30px] text-center'>You've got something business <br /> related? Come on, let's get to it!</p>
                </div>
            </div>
            <div className='flex flex-col w-[50vw] items-center mt-20'>
                <div>
                    <p className='text-[#411212] text-center text-[25px] font-semibold'>Welcome to JAP, <br /> sign into your account!</p>
                </div>
                <div className='mt-10 flex flex-col gap-10'>
                    <div className='flex flex-col'>
                        <label htmlFor="email" className='text-[#411212] text-[24px] font-semibold'>E-mail</label>
                        <input 
                            id="email"
                            type="email" 
                            placeholder='akuadufie@gmail.com' 
                            className='border-[1px] p-4  w-[35vw] rounded-[25px] border-[#411212]'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="password" className='text-[#411212] text-[24px] font-semibold'>Password</label>
                        <input 
                            id="password"
                            type="password" 
                            placeholder='**********' 
                            className='border-[1px] p-4 w-[35vw] rounded-[25px] border-[#411212]'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className='mt-8 flex flex-col gap-8 items-center'>
                    <button 
                        className='bg-[#411212] w-[35vw] p-3 rounded-[25px] text-white font-semibold' 
                        onClick={handleLogin}
                    >
                        LOG IN
                    </button>
                    {/* ... (rest of your JSX code for third-party login options) */}
                </div>
                <div className='flex gap-2 mt-20'>
                    <p className='text-[#411212]'>Don't have an account?</p>
                    <p className='text-[dodgerblue] cursor-pointer' onClick={() => window.location.href = '/signup'}>Sign up!</p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;


























// 'use client'
// import React from 'react'
// import Image from 'next/image'

// const page = () => {
//     const route = () => {
//         window.location.href = '/dashboard'
//     }
//     const signup = () => {
//         window.location.href = '/signup'
//     }
//   return (
//     <div className='min-h-screen h-[100vh] bg-white flex'>
//         <div className='flex flex-col bg-[#411212] w-[50vw] gap-6 items-center log '>
//             <div className='mt-40'>
//                 <Image 
//                 width={150}
//                 height={150}
//                 src='/logo.png'
//                 alt='logo of '
//                 />
//             </div>
//             <div>
//                 <p className='text-white text-[30px] text-center'>You've got something business <br /> related? Come on, let's get to it!</p>
//             </div>
//         </div>
//         <div className='flex flex-col w-[50vw] items-center mt-20 '>
//             <div>
//                 <p className='text-[#411212] text-center text-[25px] font-semibold '>Welcome to JAP, <br /> sign into your account!</p>
//             </div>
//             <div className=' mt-10 flex flex-col gap-10'>
//                 <div className='flex flex-col'>
//                     <label htmlFor="" className='text-[#411212] text-[24px] font-semibold'> E-mail</label>
//                     <input type="email" placeholder='akuadufie@gmail.com' className='border-[1px] p-4  w-[35vw] rounded-[25px] border-[#411212]' />
//                 </div>
//                 <div className='flex flex-col '>
//                     <label htmlFor="" className='text-[#411212] text-[24px] font-semibold'> Password</label>
//                     <input type="password" placeholder='**********' className='border-[1px] p-4 w-[35vw] rounded-[25px] border-[#411212]' />
//                 </div>
//             </div>
//             <div className='mt-8 flex flex-col gap-8 items-center'>
//                 <button className='bg-[#411212] w-[35vw] p-3 rounded-[25px] text-white font-semibold' onClick={() => route()}>LOG IN</button>
//                 <p className='text-[#411212]'>or sign in with:</p>
//             </div>
//             <div className='flex gap-2 mt-8'>
//                 <Image width={50} height={50} src='/google.png' />
//                 <Image width={50} height={50} src='/apple.png'/>
//             </div>
//             <div className='flex gap-2 mt-20'>
//                 <p className='text-[#411212]'>Don't have an account?</p>
//                 <p className='text-[dodgerblue] cursor-pointer' onClick={() => signup()}>Sign up!</p>
//             </div>
          
//         </div>
//     </div>
//   )
// }

// export default page