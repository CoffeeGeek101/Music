"use client"
import { TrackDetail, Tracks } from '@/app/madeforyou/[moods]/moodClient'
import React from 'react'
import SongCard from './SongCard'

interface ISongHolder{
    tracks : Tracks
    user : User | null
}

const SongHolder : React.FC<ISongHolder> = ({tracks,user} : any) => {
  return (
   <div className='h-[550px]'>
     <div className='flex flex-col gap-3 h-full p-2 overflow-x-hidden overflow-y-scroll'>
     {
        tracks.map((track : TrackDetail)=>(
            <SongCard key={track.id} track={track} user={user}/>
        ))
    }
     </div>
     <div className='flex flex-row justify-center mt-[50px]'>
            <p className='text-[6px] text-slate-500 font-light'>© Musicque 2023 | shoumyadeep</p>
        </div>
   </div>
  )
}

export default SongHolder