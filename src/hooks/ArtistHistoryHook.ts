"use client"

import axios from "axios";

interface IArtistHistoryHook{
    artistId : string
}

const useArtistHistory = ({artistId} : IArtistHistoryHook) =>{

    const recordHistory = async () =>{
       try{
         await axios.post(`/api/artistHistory/${artistId}`);
       }catch(error){
        console.log(error);
       }
    }

    return {recordHistory}

}

export default useArtistHistory;