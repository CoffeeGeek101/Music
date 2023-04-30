"use client"

import axios from "axios";
import { useState } from "react";

interface ISearchHistoryHook{
    searchterm : string;
}

const useSearchHistory = ({searchterm} : ISearchHistoryHook) => {

    const [searchHistory, setSearchHistory] = useState<string[]>([]);

    const getSearchHistory = async() =>{
        try{
            const res = await axios.get(`/api/SearchHistoryq`);
            setSearchHistory(res.data.searchHistory);
        }catch(error){
            console.log(error)
        }
    }

    const listDresser = async()=>{
        try{
            await axios.post(`/api/searchhistory/${searchterm}`);
            setSearchHistory((prevHistory)=>[...prevHistory, searchterm])
        }catch(error){
            console.log(error)
        }
    }

    return {getSearchHistory, listDresser, searchHistory}

}

export default useSearchHistory;