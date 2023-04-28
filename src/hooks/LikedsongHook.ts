"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import useLoginModal from "./LoginHook";

interface ILikedSongHook{
    songId : string;
    user : User;
}

const useLikedSongs = ({songId, user} : ILikedSongHook) =>{

    const LoginModal = useLoginModal();
    const router = useRouter();

    const isLiked = () =>{
        const likedsong_arr = user.likedSongs
        return likedsong_arr.includes(songId);
    }
    
    const likedSong = isLiked();

    const toggleLike = async ( e : React.MouseEvent<HTMLDivElement>) =>{
        e.stopPropagation();

        if(!user){
            return LoginModal.onOpen();
        }

        try{

            let req

            if(likedSong){
                req = () => axios.delete(`/api/likedsongs/${songId}`)
            }else{
                req = () => axios.post(`/api/likedsongs/${songId}`)
            }

            await req();
            toast.success('Liked songs list updated');
            router.refresh();
        }
        catch(error){
            console.log(error)
        }
    }

    return {likedSong, toggleLike}

}

export default useLikedSongs