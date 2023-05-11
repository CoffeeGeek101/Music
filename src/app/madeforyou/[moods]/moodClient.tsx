"use client"
import MoodCard from '@/component/playlist/MoodCard';
import SongHolder from '@/component/playlist/SongHolder';
import React from 'react'

interface IMoodClient{
    moody_songs : { tracks : Tracks };
    expression : ExpProps | undefined;
    user : User | null
}

export interface Tracks{
    tracks : {details : TrackDetail}[]
}

export interface TrackDetail{
    album : {images : { url : string}[]};
    name : string;
    explicit : boolean;
    id : string;
    artists : {name : string}[]
}

interface ExpProps{
    name : string;
    des : string;
    img_logo : string;
}


const MoodClient : React.FC<IMoodClient> = ({moody_songs , expression, user}) => {
    
    const moodcard = {
        name : expression?.name,
        description : expression?.des,
        image : expression?.img_logo
    }

    const tracklist = moody_songs.tracks;
    console.log(moody_songs)

    return (
    <div className='flex flex-col gap-4 lg:flex-row justify-between pb-[100px]'>
        <MoodCard mood_detail={moodcard}/>
        <SongHolder tracks={tracklist} user={user}/>
    </div>
  )
}

export default MoodClient