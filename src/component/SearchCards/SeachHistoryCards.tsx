"use client"
import { History } from 'lucide-react';
import React from 'react'

interface ISearchHistory{
    searchHistories : string;
    onClick : () => void
}

const SeachHistoryCards : React.FC<ISearchHistory> = ({searchHistories, onClick}) => {

  return (
    <div onClick={onClick} className='flex flex-row items-center text-start px-2 py-4 border-b-[0.5px] border-blue-500/30 hover:cursor-pointer hover:bg-blue-600/50 hover:shadow-md hover:shadow-blue-900 transition-all active:scale-95'>
        <History size={16} className='ml-2' color='#6171ffe7'/>
        <p className='font-light hover:scale-105 hover:font-medium transition-all px-5'>{searchHistories}</p>
    </div>
  )
}

export default SeachHistoryCards