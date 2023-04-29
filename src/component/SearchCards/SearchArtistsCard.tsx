import React from 'react'

interface ISearchArtist{
    artist : {}
}

const SearchArtistsCard : React.FC<ISearchArtist> = ({artist} : any) => {
  return (
    <div className='flex flex-row gap-2 items-center'>
    <img src={artist.images[0].url} className='h-[80px] w-[80px] md:h-[90px] md:w-[90px] object-cover rounded-full'/>
    <div className='flex flex-col items-start'>
        <p className='text-[10px] w-[130px] md:w-[320px] lg:w-[400px] truncate'>{artist.name}</p>
        <p className='text-[8px] text-gray-500'>Artist</p>
    </div>
    </div>
  )
}

export default SearchArtistsCard