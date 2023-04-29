import React from 'react'

interface ISearchSongs{
    track : {}
}

const SearchSongCard : React.FC<ISearchSongs> = ({track} : any) => {
  return (
    <div className='flex flex-row gap-2 items-center'>
        <img src={track.album.images[0].url} className='h-[70px] w-[70px] md:h-[90px] md:w-[90px]'/>
        <div className='flex flex-col items-start'>
            <p className='text-[10px] text-base w-[130px] md:w-[320px] lg:w-[400px] truncate'>{track.name}</p>
            <div className='flex flex-row gap-1 items-center'>
                {track.explicit && <p className='bg-slate-600 px-[2px] rounded-sm text-[8px]'>E</p>}
                <p className='text-[9px] md:text-[12px] text-slate-500'>{track.artists[0].name}</p>
            </div>
        </div>
    </div>
  )
}

export default SearchSongCard