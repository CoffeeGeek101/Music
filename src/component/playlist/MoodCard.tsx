"use client"
import { LucideQuote, Quote, QuoteIcon } from 'lucide-react'
import React from 'react'

interface IMoodCard{
    mood_detail : detail
}

interface detail{
    name : any,
    description : any,
    image : any
}

const MoodCard : React.FC<IMoodCard> = ({mood_detail}) => {

    let name = mood_detail.name.toUpperCase();
    return (
    <div className='flex flex-row lg:flex-col-reverse lg:w-[400px] lg:bg-transparent bg-slate-500 bg-gradient-to-br from-[#ffffffa5] lg:from-transparent to-[#1b296b] justify-between lg:justify-start rounded-sm'>
        <div className='flex flex-col gap-4 p-4 basis-4/5 lg:basis-0 justify-between'>
            <p className='text-[8px] lg:text-lg font-extralight'><Quote className='text-[12px] lg:text-[40px]'/>{mood_detail.description}</p>
            <p className='text-[9px] lg:text-base font-medium'>Here are some music for you.</p>
        </div>
        <div className='flex flex-col justify-end lg:justify-center p-1'>
            <div className='w-[50px] h-[50px] lg:w-[350px] lg:h-[350px] mb-2 lg:mb-0 basis-2/5 lg:basis-0'>
                <p className='text-[6px] lg:text-base tracking-[2px] lg:tracking-[8px] text-right font-semibold'>{name}</p>
                <img src={mood_detail.image} className='w-full h-full rounded-sm shadow-sm'/>
            </div>
        </div>
    </div>
  )
}

export default MoodCard