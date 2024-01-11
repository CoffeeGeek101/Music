"use client"

import React, { useEffect, useRef } from 'react';
import TrackCard from '@/component/TrackCard';
import GPlaylistCard from '@/component/_gPlaylistCard';
import { toast } from 'react-hot-toast';
import { FileHeart, Globe2 } from 'lucide-react';
import Button from '@/component/Button';
import usePrefernceModal from '@/hooks/PreferenceHook';
import queryString from 'query-string';
import { useRouter, useSearchParams } from 'next/navigation';

interface IListenNow{
    tracks : any;
    playlist : any;
    user : User
}

const ListenClient: React.FC<IListenNow>  = ({tracks, playlist, user}) => {

    const langIntervalID = useRef <React.MutableRefObject<any>>({current : null});
    const genreIntervalID = useRef <React.MutableRefObject<any>>({current : null});

    const usePrefernce = usePrefernceModal();

    useEffect(() => {
        let langInterval = langIntervalID.current.current;
        let genreInterval = genreIntervalID.current.current;
        if (user.lang.length === 0 && langInterval === null) {
          langInterval = setInterval(() => {
            toast.custom(
            <div className='bg-white/60 backdrop-blur-2xl p-5 rounded-xl shadow-lg'>
                <div className='flex flex-row justify-around items-center gap-8'>
                    <Globe2 color='#5943ff'/>
                    <div className='flex flex-col items-start'>
                        <p className='text-black font-semibold text-base'>Set your Type of Music</p>
                        <p className='text-gray-500 font-sans text-xs'>Go to preferences</p>
                    </div>
                    <Button variant='main' size='small' onClick={usePrefernce.onOpen}>
                        Preference
                    </Button>
                </div>
            </div>,
            {duration : 7000, position:'bottom-center'}
            );
            clearInterval(langInterval);
            langInterval = null;
          }, 5000);
        }
    
        if (user.genre.length === 0 && genreInterval === null) {
          genreInterval = setInterval(() => {
            toast.custom(
                <div className='bg-white/60 backdrop-blur-2xl p-5 rounded-xl shadow-lg'>
                    <div className='flex flex-row justify-around items-center gap-8'>
                        <FileHeart color='#5943ff'/>
                        <div className='flex flex-col items-start'>
                            <p className='text-black font-semibold text-base'>Set Your Music Genre</p>
                            <p className='text-gray-500 font-sans text-xs'>Go to preferences</p>
                        </div>
                        <Button variant='main' size='small' onClick={usePrefernce.onOpen}>
                            Preference
                        </Button>
                    </div>
                </div>,
                {duration : 7000, position:'bottom-center'}
            );
            clearInterval(genreInterval);
            genreInterval = null;
          }, 9000);
        }
    
        return () => {
          clearInterval(langInterval);
          clearInterval(genreInterval);
        };
      }, [user.lang, user.genre, usePrefernce.onOpen]);

      const router = useRouter();
      const params = useSearchParams();

      const handleClick = (id : string) =>{
        let currentQuery = {};

        if(params){
            currentQuery = queryString.parse(params.toString());
        }
        const updatedQuery:any = {
            ...currentQuery,
            songuid : id
        } 
        const url = queryString.stringifyUrl({
            url:'/listennow',
            query : updatedQuery  
        },{skipNull:true});

        router.push(url);
      }

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
                   tracks.slice(0,4).map((track : any)=>( 
                        <TrackCard
                        onClick = {()=>handleClick(track.id)}
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