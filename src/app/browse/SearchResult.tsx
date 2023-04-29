"use client"
import SearchArtistsCard from '@/component/SearchCards/SearchArtistsCard';
import SearchSongCard from '@/component/SearchCards/SearchSongCard';
import React from 'react'

interface ISearchresult{
    searchRes : {} | null;
    search : string
}

const SearchResult : React.FC<ISearchresult> = ({searchRes, search} : any) => {
    const {artists} = searchRes;
    const {tracks} = searchRes;

    console.log(artists)

  return (
    <div className='p-5 h-[610px] bg-slate-950/20 bg-gradient-to-r from-slate-900 to-blue-900/50 mt-5 rounded-tl-lg overflow-y-scroll overflow-x-hidden flex flex-col gap-5'>
       <div className='h-auto w-full flex flex-col gap-3'>
        <div className='p-3'>
            <p className='text-sm'>Songs related to <span className='font-medium'>{search}</span></p>
        </div>
        <hr/>
        {
            tracks.items.slice(0,5).map((track : any)=>(
                <SearchSongCard key={track.id} track={track}/>
            ))
        }
       </div>

       <div className='h-auto w-full flex flex-col gap-3'>
        <div className='p-3'>
            <p className='text-sm'>Artist related to <span className='font-medium'>{search}</span></p>
        </div>
        <hr/>
        {
            artists.items.slice(0,4).map((artist : any)=>(
                <SearchArtistsCard key={artist.id} artist={artist}/>
            ))
        }
       </div>
    </div>
  )
}

export default SearchResult