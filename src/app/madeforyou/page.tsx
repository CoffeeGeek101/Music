"use client"

import { mood } from '@/lib/moods';
import { useRouter } from 'next/navigation'
import React from 'react'
import MoodHero from '@/component/MoodHero';



const page = () => {
  const router = useRouter();
    const mood_arr = mood;
  return (
    <div className='flex lg:flex-row w-[full] justify-between h-[80vh] overflow-hidden'>
      <div className='z-50 flex flex-col gap-5 p-6'>
            <div>
                <p className='text-2xl md:text-4xl lg:text-4xl font-medium bg-clip-text text-transparent bg-gradient-to-br from-white to-[#899fff] lg:pb-2'>How you feeling?</p>
            </div>
            <div className='flex flex-col gap-3 w-[180px] md:w-[220px] lg:w-[220px]'>
                { 
                
                mood_arr.map((moody) => (
                        <div
                        className='flex flex-row items-center border-[1px] border-white/50 w-full h-[54px] text-center rounded-md hover:cursor-pointer active:scale-95 hover:bg-blue-400/50 hover:h-[65px] transition-all backdrop-blur-md overflow-hidden'
                        key={moody.name}
                        onClick={() => router.push(`/madeforyou/${moody.name}`)}
                        >
                            <img className='basis-14 overflow-hidden h-full object-cover' src={moody.img_logo}/>
                            <p className='basis-full text-center'>{moody.name}</p>
                        </div>
                ))}
            </div>
      </div>
      <MoodHero/>
    </div>
  );
};

export default page