import getRecomendation from '@/actions/getReccomendation';
import { mood } from '@/lib/moods';
import React from 'react'
import MoodClient from './moodClient';

interface IMoods{
    moods ?:string;
}

const page = async ({params}:{params : IMoods}) => {

    const {moods} = params;

    const rec_song = await getRecomendation({moods})
    const mood_expressions = mood.find((m)=>m.name === moods)
  return (
    <div>
        <MoodClient moody_songs={rec_song} expression={mood_expressions}/>
    </div>
  )
}

export default page