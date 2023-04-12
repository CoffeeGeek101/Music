import { Album, Heart, Mic2, User } from 'lucide-react'
import React from 'react'

const Library = () => {
  return (
    <div className='flex flex-col gap-6 items-center'>
    <p className='hidden text-shadow-lg bg-clip-text text-transparent bg-gradient-to-br from-white to-[#899fff] lg:block lg:text-2xl' 
    style={{textShadow:'0px 5px 20px #0073ff'}}>
        Library.
    </p>
    <div className='flex flex-col gap-10 lg:gap-2'>
        <div className='flex flex-row gap-2 items-center py-2 lg:px-8 rounded-full hover:cursor-pointer lg:hover:bg-gradient-to-r from-[#88e7ff00] to-[#224affa9] hover:shadow-xl'>
            <Heart size={20} color='#d9edff'/>
            <p className='hidden lg:block font-light bg-clip-text text-transparent bg-gradient-to-br from-white to-[#899fff]'>Liked Songs</p>
        </div>
        <div className='flex flex-row gap-2 items-center py-2 lg:px-8 rounded-full hover:cursor-pointer lg:hover:bg-gradient-to-r from-[#88e7ff00] to-[#224affa9] hover:shadow-xl'>
            <User size={20} color='#d9edff'/>
            <p className='hidden lg:whitespace-nowrap lg:text-ellipsis lg:block font-light bg-clip-text text-transparent bg-gradient-to-br from-white to-[#899fff]'>Made for you</p>
        </div>
        <div className='flex flex-row gap-2 items-center py-2 lg:px-8 rounded-full hover:cursor-pointer lg:hover:bg-gradient-to-r from-[#88e7ff00] to-[#224affa9] hover:shadow-xl'>
            <Mic2 size={20} color='#d9edff'/>
            <p className='hidden lg:block font-light bg-clip-text text-transparent bg-gradient-to-br from-white to-[#899fff]'>Artists</p>
        </div>
        <div className='flex flex-row gap-2 items-center py-2 lg:px-8 rounded-full hover:cursor-pointer lg:hover:bg-gradient-to-r from-[#88e7ff00] to-[#224affa9] hover:shadow-xl'>
            <Album size={20} color='#d9edff'/>
            <p className='hidden lg:block font-light bg-clip-text text-transparent bg-gradient-to-br from-white to-[#899fff]'>Albums</p>
        </div>
    </div>
</div>
  )
}

export default Library