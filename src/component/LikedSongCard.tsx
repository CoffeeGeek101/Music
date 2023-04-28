"use client"
import useLikedSongs from '@/hooks/LikedsongHook';
import React from 'react'
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface ISongCard{
    likedsong : any;
    user : any
}

const LikedSongCard : React.FC<ISongCard> = ({likedsong, user}) => {

    const songId = likedsong.id;
    
    const {likedSong, toggleLike} = useLikedSongs({songId, user})

  return (
    <div className='flex flex-row gap-2 items-center'>
        <img src={likedsong.album.images[0].url} className='h-[70px] w-[70px] md:h-[90px] md:w-[90px]'/>
        <div className='flex flex-col items-start'>
            <p className='text-[10px] text-base w-[130px] md:w-[320px] lg:w-[400px] truncate'>{likedsong.name}</p>
            <div className='flex flex-row gap-1 items-center'>
                {likedsong.explicit && <p className='bg-slate-600 px-[2px] rounded-sm text-[8px]'>E</p>}
                <p className='text-[9px] md:text-[12px] text-slate-500'>{likedsong.artists[0].name}</p>
            </div>
        </div>
        <div onClick={toggleLike} className='hover:cursor-pointer'>
            { likedSong ? <AiFillHeart size={25} color='#3776ff'/> : <AiOutlineHeart size={25}/>}
        </div>
    </div>
  )
}

export default LikedSongCard