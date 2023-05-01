"use client"
import axios from "axios";

interface ISongHistoryHook{
    songhistoryId : string
}

const useSongHistory = ({songhistoryId} : ISongHistoryHook) =>{

    const recordHistory = async () =>{
       try{
         await axios.post(`/api/songHistory/${songhistoryId}`);
       }catch(error){
        console.log(error);
       }
    }

    return {recordHistory}

}

export default useSongHistory;