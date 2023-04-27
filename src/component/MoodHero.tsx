"use client"
import React from 'react'

const MoodHero = () => {
  return (
    <div className='absolute right-0 h-[80vh]'>
        <div className='w-full h-[full] relative bg-gradient-to-br from-slate-600 to-black md:rounded-tl-[20px] lg:rounded-tl-[30px]'>
            <img 
            className='w-[full] h-[763px] lg:w-[500px] lg:h-[80vh] object-cover mix-blend-overlay md:rounded-tl-[20px] lg:rounded-tl-[30px]'
            src='/images/hero.jpg'
            />
            <div className='absolute bottom-48 left-10 md:bottom-60 lg:top-80 lg:left-[-280px] text-center lg:text-right text-2xl md:text-[55px] lg:text-[75px] font-base'>
                <p className='lg:mb-6'>Listen to the beats of</p>
                <p>your own <span 
                style={{textShadow:'1px 1px 20px #ffffff'}}
                className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-light text-2xl md:text-[50px] lg:text-[85px]'>emotions</span>.</p>
            </div>
            <div className='absolute bottom-40 right-10 md:bottom-52 md:right-40 lg:bottom-20 lg:right-10 text-right text-xs lg:text-[40px] lg:w-[350px] font-semibold'>
                <p className='text-blue-500'>mood-based music <span style={{textShadow:'1px -2px 2px #000000'}} className='font-extralight text-blue-100'>recommendations</span>.</p>
            </div>
        </div>
    </div>
  )
}

export default MoodHero