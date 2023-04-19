import { getCurrentUser } from '@/actions/getCurrentUser';
import getGenre from '@/actions/getGenre';
import React from 'react'
import ListenClient from './ListenClient';
import { lang } from '@/lib/language';
import getTracksByPreference from '@/actions/getTracksByPreference';
import getPLaylistByPreference from '@/actions/getPlaylistbyPreference';
import FallBack from '@/component/FallBack';

const ListenNow = async () => {
  
  const user = await getCurrentUser();

  if(!user){
    return (
      <div className='flex flex-row justify-center items-center h-full'>
        <FallBack/>
      </div>
    )
  }

  const genre = await getGenre();
  const genreArray = genre.genres.map((g:string)=> g);
  const randomGenreIndex = Math.floor(Math.random() * genreArray.length);
  const randomLanguageIndex = Math.floor(Math.random() * lang.length);

  const {lang : userLang, genre : userGenre} = user;

  let qGenre = [''];
  let qLang = [''];

  if(userLang.length === 0 || userGenre.length === 0){
     qGenre = [genreArray[randomGenreIndex]];
     qLang = [lang[randomLanguageIndex].code];
  }else{
    qGenre = userLang;
    qLang = userGenre;
  }

  const prefTracks = await getTracksByPreference({qGenre,qLang,});
  const prefPlaylist = await getPLaylistByPreference({qGenre,qLang});

  return (
    <div>
      <ListenClient tracks={prefTracks} playlist={prefPlaylist}/>
    </div>
  )
}

export default ListenNow;