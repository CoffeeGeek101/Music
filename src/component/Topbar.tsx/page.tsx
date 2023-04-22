"use client"

import { getCurrentUser } from '@/actions/getCurrentUser';
import useLoginModal from '@/hooks/LoginHook';
import usePrefernceModal from '@/hooks/PreferenceHook';
import { AlignJustify } from 'lucide-react';
import { signOut } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import Avatar from './Avatar';
import UserItem from './UserItem';

interface ITopbarProps{
    user : User | null
}

const Topbar:React.FC<ITopbarProps> = ({user}) => {

    // console.log(user)

    const useLogin = useLoginModal();
    const usePreference = usePrefernceModal();

    const [wish, setWish] = useState<string>();
    let hour = new Date().getHours();

    useEffect(()=>{
        if(hour > 3 && hour < 12){
            setWish('Good Morning');
        }else if (hour >= 12 && hour < 18){
            setWish('Good Afternoon');
        }else{
            setWish('Good Evening');
        }
    },[hour]);

    const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div 
    onClick={() => setIsOpen(!isOpen)}
    className='flex flex-row justify-between items-center'>
        <div>
            <p className='text-xl lg:text-6xl py-1 bg-clip-text text-transparent bg-gradient-to-br from-white to-[#899fff]'
            style={{textShadow:'0px 7px 40px #0073ff'}}
            >{wish}.</p>
            <p className='text-xs lg:text-base ml-3 font-light text-[#d9edff]'>have a good time.</p>
        </div>
        <div className='flex flex-row gap-2 items-center relative shadow-sm shadow-blue-600 px-2 py-[8px] rounded-full hover:cursor-pointer'>
            {
            !user && <div className='absolute h-3 w-3 bg-blue-700 rounded-full top-0 right-0'>
                            <div className='animate-ping h-full w-full bg-blue-400 rounded-full'></div>
                        </div>
            }
            <Avatar avi={user?.image}/>
            <p className='text-[#d9edff] font-thin'>|</p>
            <AlignJustify color='#d9edff'/>
            {
                isOpen && (
                    <div className=' w-[100px] lg:w-[200px] flex flex-col h-auto bg-slate-800 absolute top-[50px] right-1 rounded-lg transition-all'>
                        <UserItem onClick={()=>{}} label={'About us'}/>
                        <UserItem onClick={()=>{}} label={'Guide'}/>
                        {user && (<UserItem label='My Preferences' onClick={()=>usePreference.onOpen()}/>)}
                       { user ? (<UserItem label={'Logout'} onClick={()=>signOut()}/>) : (<UserItem onClick={useLogin.onOpen} label={'Login'}/>) }
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Topbar