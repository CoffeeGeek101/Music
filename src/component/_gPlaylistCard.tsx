import React from 'react'

interface IPlaylistCard{
    imgSrc : string;
    name : string;
    des ?: string;
}

const GPlaylistCard : React.FC<IPlaylistCard> = ({
    imgSrc,
    name,
    des,
}) => {
  return (
    <div className='flex flex-col justify-start w-[300px] md:w-[200px] lg:w-[180px] lg:h-[180px] gap-2'>
        <div className='h-full w-full'>
          <img
          src={imgSrc}
          alt='playlists'
          className='rounded-md shadow-lg shadow-[#4171ff55] w-full h-full object-cover'
          />
          <p className='text-lg font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-[#899fff]'>{name}</p>
          {<p className='text-xs font-light text-slate-400 mt-[-5px]'>{des}</p>}
        </div>
    </div>
  )
}

export default GPlaylistCard;