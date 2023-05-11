"use client"

import LikedSongCard from '@/component/LikedSongCard'
import useLikedSongs from '@/hooks/LikedsongHook'
import { Quote } from 'lucide-react'
import React from 'react'

interface ILikedClient{
  songs : {}[];
  user : {} | null;
}

const LikedSongClient : React.FC<ILikedClient> = ({songs, user}) => {

  return (
    <div className='flex flex-col gap-4 lg:flex-row justify-between'>
          <div className='flex flex-row lg:flex-col-reverse lg:w-[400px] lg:bg-transparent bg-slate-500 bg-gradient-to-br from-[#ffffffa5] lg:from-transparent to-[#1b296b] justify-between lg:justify-start rounded-sm'>
              <div className='flex flex-col gap-4 p-4 basis-4/5 lg:basis-0 justify-between'>
                  <p className='text-[8px] lg:text-lg font-extralight z-20'><Quote className='text-[12px] lg:text-[40px]'/>Music is a higher revelation than all wisdom and philosophy. Music is the electrical soil in which the spirit lives thinks and invents.</p>
                  <p className='text-[9px] lg:text-base font-medium'>Your Liked Songs.</p>
              </div>
              <div className='flex flex-col justify-end lg:justify-center p-1'>
                  <div className='w-[50px] h-[50px] lg:w-[350px] lg:h-[350px] mb-2 lg:mb-0 basis-2/5 lg:basis-0'>
                      <p className='text-[6px] lg:text-base tracking-[2px] lg:tracking-[8px] text-right font-semibold'>LIKED</p>
                      <img src='/images/like.jpg' className='w-full h-full rounded-sm shadow-sm'/>
                  </div>
              </div>
          </div>

          <div className='h-[550px]'>
              <div className='flex flex-col gap-3 h-full p-2 overflow-x-hidden overflow-y-scroll'>
              {
                  songs.map((likedsong : any)=>(
                    <LikedSongCard key={likedsong.id} likedsong={likedsong} user={user}/>
                  ))
              }
              </div>
              <div className='flex flex-row justify-center mt-[50px]'>
                      <p className='text-[6px] text-slate-500 font-light'>© Musicque 2023 | shoumyadeep</p>
                  </div>
          </div>
    </div>
  )
}

export default LikedSongClient