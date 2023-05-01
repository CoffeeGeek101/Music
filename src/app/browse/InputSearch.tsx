"use client"
import FallBack from '@/component/FallBack';
import SeachHistoryCards from '@/component/SearchCards/SeachHistoryCards';
import useSearchHistory from '@/hooks/SearchHistoryHook';
import { BASE_URL } from '@/lib/util';
import axios from 'axios';
import { CornerDownLeft, Keyboard } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import SearchResult from './SearchResult';

interface InputProps{
  token : string
}

const InputSearch: React.FC<InputProps> = ({token}) => {

  const [search, setSearch] = useState<string>('');
  const [data, setData] = useState(null);

  const {searchHistory,getSearchHistory,listDresser} = useSearchHistory({searchterm : search});

  const onSearch = async( e : React.FormEvent) =>{
      e.preventDefault();

      const res = await axios.get(`${BASE_URL}/search?q=${search}&type=track,artist&limit=5`,{
          headers : {
              'Authorization' : `Bearer ${token}`
          }
      })
      setData(res.data);
      listDresser();
  }

  useEffect(()=>{
    getSearchHistory();
  },[])

  const handleHistoryCick = async(history : string) =>{

    const res = await axios.get(`${BASE_URL}/search?q=${history}&type=track,artist&limit=5`,{
        headers : {
            'Authorization' : `Bearer ${token}`
        }
    })
    setData(res.data);
  }

  return (
    <div>
      <form
      onSubmit={onSearch}
      className='flex flex-row justify-start p-2 relative w-full lg:w-[40vw] m-auto'>
          <input
            placeholder='Search...'
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            className='text-black py-3 px-5 w-full m-auto rounded-full focus:outline-none focus:border-[#5182ff76] focus:ring-1 focus:ring-[#5182ff] bg-blue-100 focus:bg-gradient-to-br from-blue-900 to-slate-200 focus:text-[#fff] focus:placeholder:text-zinc-100/50'
          />
          <div className='absolute bg-slate-400 rounded-full py-1 px-2 flex flex-row items-center gap-1 right-5 top-[18px]'>
            <CornerDownLeft size={18}/>
            <Keyboard size={15} color='#c9c9c9'/>
          </div>
      </form>
      {
        data ? <SearchResult searchRes={data} search={search}/> 
        : 
        (
        <div className='flex justify-center w-full'>
          {
            searchHistory.length === 0 ? (<FallBack label_A='Start Seaching' label_B='you can search for songs and artists'/>) 
            : 
            (
            <div className='flex flex-col gap-0 h-auto w-full lg:w-[65vh] bg-slate-950/40 bg-gradient-to-br from-blue-600/10 to-blue-700 py-4  rounded-2xl'>
                {
                  searchHistory.map((searchHistory : string)=>(
                    <SeachHistoryCards key={searchHistory} onClick={()=>handleHistoryCick(searchHistory)} searchHistories={searchHistory}/>
                  )
                  )
                }
            </div>
            )
          }
        </div>
        )
      }
    </div>
  )
}

export default InputSearch