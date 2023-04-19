"use client"

import { Music } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import Discover from '../Discover'
import Library from '../Library'

const Sidebar = () => {

  const router = useRouter();

  return (
    <div className='basis-auto border-r-[1px] border-slate-400/25 shadow-md shadow-black h-[100vh] fixed top-0 left-0 p-4 lg:p-10 transition-all'>
        <div className='flex flex-col items-center justify-start gap-14'>
        <div
        onClick={()=>router.push('/')}
        className=' flex flex-row gap-2 items-baseline hover:cursor-pointer'>
            <Music size={30} color='#d9edff' className='hidden lg:block animate-bounce transition-all' />
            <p className='text-sm lg:text-5xl text-shadow-lg bg-clip-text text-transparent bg-gradient-to-br from-white to-[#899fff]' style={{textShadow:'-20px 5px 40px #5ea7ff'}}>Music.</p>
        </div>
        <Discover/>
        <Library/>
        <div className='flex flex-row items-center gap-3 mt-14'>
          <p className='bg-clip-text text-transparent bg-gradient-to-br from-white to-[#899fff] hidden lg:block'>Made with love</p>
          <p className='mt-1'>🇮🇳</p>
          </div>
        </div>
    </div>
  )
}

export default Sidebar