"use client"

import React from 'react';
import TrackCard from '@/component/TrackCard';
import GPlaylistCard from '@/component/_gPlaylistCard';

interface IListenNow{
    tracks : any;
    playlist : any
}

const ListenClient: React.FC<IListenNow>  = ({tracks, playlist}) => {

    console.log(playlist)

  return (
    <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-3'>
            <div>
                <p className="text-xl bg-clip-text text-transparent bg-gradient-to-br from-white to-[#899fff]">Tracks for you</p>
                <p>Top picks based on your preferences</p>
            </div>
            <div className="w-full h-[1px] bg-slate-700"/>
            <div className='flex flex-row gap-6 flex-wrap justify-start'>
                {
                    tracks.tracks.items.map((track : any)=>(
                        <TrackCard
                        key={track.id}
                        imgSrc={track.album.images[0].url}
                        name = {track.name}
                        artist={track.artists[0].name}
                        />
                    ))
                }
            </div>
        </div>
        <div className='flex flex-col gap-4'>
            <p className="text-xl bg-clip-text text-transparent bg-gradient-to-br from-white to-[#899fff]">Playlists for you</p>
            <div className="w-full h-[1px] bg-slate-700"/>
            <div className='flex flex-row gap-7 flex-wrap'>
                {
                    playlist.playlists.items.map((list: any)=>(
                        <GPlaylistCard
                        key={list.id}
                        imgSrc={list.images[0].url}
                        name={list.name}
                        />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default ListenClient