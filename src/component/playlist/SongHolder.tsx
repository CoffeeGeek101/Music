"use client"
import React from 'react'
import SongCard from './SongCard'

interface ISongHolder{
    tracks : {}
}

const SongHolder : React.FC<ISongHolder> = ({tracks} : any) => {
  return (
   <div className='h-[550px]'>
     <div className='flex flex-col gap-3 h-full p-2 overflow-x-hidden overflow-y-scroll'>
     {
        tracks.map((track : any)=>(
            <SongCard key={track.id} track={track}/>
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