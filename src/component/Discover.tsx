"use client"

import React from 'react'
import {PlayCircle, LayoutGrid} from 'lucide-react'
import { useRouter } from 'next/navigation'


const Discover = () => {

    const router = useRouter();

  return (
    <div className='flex flex-col gap-6 items-center'>
        <p className='hidden text-shadow-lg bg-clip-text text-transparent bg-gradient-to-br from-white to-[#899fff] lg:block lg:text-2xl' 
        style={{textShadow:'0px 5px 20px #0073ff'}}>
            Discover.
        </p>
        <div className='flex flex-col gap-10 lg:gap-2'>
            <div className='flex flex-row gap-2 items-center py-2 lg:px-8 rounded-full hover:cursor-pointer lg:hover:bg-gradient-to-r from-[#88e7ff00] to-[#224affa9] hover:shadow-xl'>
                <PlayCircle size={20} color='#d9edff'/>
                <p 
                onClick={()=>router.push('/listennow')}
                className='hidden md:hidden lg:block font-light bg-clip-text text-transparent bg-gradient-to-br from-white to-[#899fff]'>
                    Listen Now
                </p>
            </div>
            <div className='flex flex-row gap-2 items-center py-2 lg:px-8 rounded-full hover:cursor-pointer lg:hover:bg-gradient-to-r from-[#88e7ff00] to-[#224affa9] hover:shadow-xl'>
                <LayoutGrid size={20} color='#d9edff'/>
                <p 
                onClick={()=>router.push('/browse')}
                className='hidden md:hidden lg:block font-light bg-clip-text text-transparent bg-gradient-to-br from-white to-[#899fff]'>
                    Browse
                </p>
            </div>
        </div>
    </div>
  )
}

export default Discover