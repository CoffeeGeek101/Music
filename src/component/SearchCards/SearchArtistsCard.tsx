"use client"

import React from 'react'

interface ISearchArtist{
    artist : {};
    onClick : ()=>void;
}

const SearchArtistsCard : React.FC<ISearchArtist> = ({artist, onClick} : any) => {
  console.log(artist)
  return (
    <div 
    onClick={onClick}
    className='flex flex-row gap-2 items-center hover:cursor-pointer rounded-l-full hover:bg-gradient-to-l from-slate-100/0 to-blue-600/50'>
    <img src={artist?.images[0]?.url} className='h-[80px] w-[80px] md:h-[90px] md:w-[90px] object-cover rounded-full'/>
    <div className='flex flex-col items-start'>
        <p className='text-[10px] md:text-base lg:text-base w-[130px] md:w-[320px] lg:w-[400px] truncate'>{artist.name}</p>
        <p className='text-[8px] text-gray-500'>Artist</p>
    </div>
    </div>
  )
}

export default SearchArtistsCard