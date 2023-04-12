"use client"

import { ChevronRight } from 'lucide-react';
import React from 'react'

interface IUserItem{
    onClick : (e : React.MouseEvent<HTMLDivElement>) => void;
    label : string
}

const UserItem : React.FC<IUserItem> = ({
    onClick,
    label
}) => {
  return (
    <div
    onClick={onClick}
    className='py-2 px-4 whitespace-nowrap text-ellipsis hover:bg-slate-600 rounded-lg flex flex-row items-center sm:hover:gap-0 lg:hover:gap-1 lg:hover:transition-all'>
        {label}
    </div>
  )
}

export default UserItem