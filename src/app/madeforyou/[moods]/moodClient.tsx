"use client"
import MoodCard from '@/component/playlist/MoodCard';
import SongHolder from '@/component/playlist/SongHolder';
import React from 'react'

interface IMoodClient{
    moody_songs : {};
    expression : {} | undefined;
}


const MoodClient : React.FC<IMoodClient> = ({moody_songs , expression} : any) => {
    
    const moodcard = {
        name : expression.name,
        description : expression.des,
        image : expression.img_logo
    }

    const tracklist = moody_songs.tracks;
    console.log(tracklist)

    return (
    <div className='flex flex-col gap-4 lg:flex-row justify-between'>
        <MoodCard mood_detail={moodcard}/>
        <SongHolder tracks={tracklist}/>
    </div>
  )
}

export default MoodClient