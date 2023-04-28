import { getCurrentUser } from '@/actions/getCurrentUser';
import { getLikedSongs } from '@/actions/getLikedSongs'
import FallBack from '@/component/FallBack';
import { isSongsLiked } from '@/lib/util';
import React from 'react'
import LikedSongClient from './LikedSongClient';

const LikedSongs = async () => {
    
    const likedsongs_arr = await getLikedSongs();
    const user = await getCurrentUser();

    const willFallBack = isSongsLiked(likedsongs_arr);

  return (
    <div>
        { willFallBack ? 
            (<FallBack label_A='Seems like you dont have any liked songs' label_B='your liked song will appear here'/>) 
            : 
            <LikedSongClient songs={likedsongs_arr} user={user} />
            }
    </div>
  )
}

export default LikedSongs