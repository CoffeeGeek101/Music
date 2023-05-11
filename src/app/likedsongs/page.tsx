import { getCurrentUser } from '@/actions/getCurrentUser';
import { getLikedSongs } from '@/actions/getLikedSongs'
import FallBack from '@/component/FallBack';
import { isSongsLiked } from '@/lib/util';
import React from 'react'
import LikedSongClient from './LikedSongClient';

const LikedSongs = async () => {
    
    const user = await getCurrentUser();
    const likedsongs_arr : any = await getLikedSongs();

    if(!user){
      return (
          <FallBack 
          label_A='Seems like, you are not Logged in.' 
          label_B='Login to continue'
          />
      )
    }

    const willFallBack = isSongsLiked(likedsongs_arr);
  return (
    <div className='pb-[170px]'>
        { willFallBack ? 
            (<FallBack label_A='Seems like you dont have any liked songs' label_B='your liked song will appear here'/>) 
            : 
            <LikedSongClient songs={likedsongs_arr} user={user} />
            }
    </div>
  )
}

export default LikedSongs