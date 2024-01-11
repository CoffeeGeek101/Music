"use client"
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import PlayerClient from './PlayerClient';

interface IPlayer{
    token : string;
    lastSong ?: string | null;
    appToken ?: string;
}

const Player:React.FC<IPlayer> = ({token}) => {
    console.log('Rendering Player Parent');
    const params = useSearchParams();
    const songid = params?.get('songuid');
    const [selectedsong, setSelectedsong] = useState<string | null>(null);
    
    useEffect(()=>{
        if(songid){
            setSelectedsong(songid);
        }
        return ()=>{
        }
    },[songid]);

    

    return (
        <div className='flex justify-start w-full'>
            {
               <PlayerClient key={selectedsong} songid={selectedsong} token={token} /> 
            }
        </div>
    )
}

export default Player