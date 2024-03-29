import { getCurrentUser } from '@/actions/getCurrentUser';
import React from 'react'
import ListenClient from './ListenClient';
import { lang } from '@/lib/language';
import getTracksByPreference from '@/actions/getTracksByPreference';
import getPLaylistByPreference from '@/actions/getPlaylistbyPreference';
import FallBack from '@/component/FallBack';
import { genres } from '@/lib/genre';
import { toast } from 'react-hot-toast';

const ListenNow = async () => {
  
  const user = await getCurrentUser();

  if(!user){
    return (
        <FallBack 
        label_A='Seems like, you are not Logged in.' 
        label_B='Login to continue'
        />
    )
  }
  const genreArray = genres;
  const randomGenreIndex = Math.floor(Math.random() * genreArray.length);
  const randomLanguageIndex = Math.floor(Math.random() * lang.length);

  const {lang : userLang, genre : userGenre} = user;

  let qGenre = userGenre;
  let qLang = userLang;

  if(userLang.length === 0 ){
    qLang = [lang[randomLanguageIndex].code];
  }

  if(userGenre.length === 0){
    qGenre = [genreArray[randomGenreIndex]];
  }

  const prefTracks = await getTracksByPreference({qGenre,qLang,});
  const prefPlaylist = await getPLaylistByPreference({qGenre,qLang});

  const tracks = prefTracks?.tracks.items.sort(()=> Math.random() - 0.5);

  return (
    <div className='pb-[150px]'>
      <ListenClient user={user} tracks={tracks} playlist={prefPlaylist}/>
    </div>
  )
}

export default ListenNow;