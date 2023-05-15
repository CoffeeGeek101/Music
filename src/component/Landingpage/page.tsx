"use client"

import useLoginModal from "@/hooks/LoginHook"
import PlaylistCard from "./PlaylistCard"

interface ILandingProps{
    songs : any
}


const LandingPage : React.FC<ILandingProps> = ({
    songs
}) => {

  const useLogin = useLoginModal();

  return (
    <div className='flex flex-col'>
      <div className="flex flex-col gap-5">
        <div>
        <p className="text-3xl bg-clip-text text-transparent bg-gradient-to-br from-white to-[#899fff]">Listen Now</p>
        <p className="font-light text-slate-400 mb-2">Top picks around the world</p>
        <div className="w-full h-[1px] bg-slate-700"/>
        </div>
        <div className="flex justify-self-auto gap-8 flex-wrap">
          {
            songs.playlists.items.slice(0,4).map((playlist : any)=>(
              <PlaylistCard 
              key={playlist.id}
              imgSrc={playlist.images[0].url}
              name={playlist.name}
              des={playlist.description}
              />
            ))
          }
        </div>
      </div>
      <div className="h-[30vh] m-auto flex flex-col items-center justify-center gap-6 mt-[35px]">
        <p className="text-gray-500">Login, to get started</p>
        <button
        onClick={useLogin.onOpen}
        style={{boxShadow:'1px 1px 30px 13px #007bff3f'}}
        className="py-2 px-16 mt-[-20px] bg-blue-600 text-base md:text-xl lg:text-2xl rounded-full font-light active:scale-95">Login</button>
      </div>
    </div>
  )
}

export default LandingPage