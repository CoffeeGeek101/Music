import { getCurrentUser } from '@/actions/getCurrentUser';
import getRecomendation from '@/actions/getReccomendation';
import FallBack from '@/component/FallBack';
import { mood } from '@/lib/moods';
import React from 'react'
import MoodClient from './moodClient';

interface IMoods{
    moods ?:string;
}

const page = async ({params}:{params : IMoods}) => {

    const {moods} = params;
    const user = await getCurrentUser();
    const rec_song = await getRecomendation({moods})
    const mood_expressions = mood.find((m)=>m.name === moods)

    if(!user){
      return (
          <FallBack 
          label_A='Seems like, you are not Logged in.' 
          label_B='Login to continue'
          />
      )
    }

  return (
    <div>
        <MoodClient moody_songs={rec_song} expression={mood_expressions} user={user}/>
    </div>
  )
}

export default page