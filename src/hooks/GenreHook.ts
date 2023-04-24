import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import useLoginModal from "./LoginHook";

interface IGenre{
    user : User;
    genre : string;
}

const useGenre = ({user,genre}:IGenre) => {

    const loginModal = useLoginModal();
    const router = useRouter();

    const checkGenre = () =>{
        const userGen_List = user.genre;
        return userGen_List.includes(genre);
    }

    const isGenre_selected = checkGenre();

    const toggleGenre = async(e : React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();

        if(!user){
            return loginModal.onOpen();
        }    

        try{
            let req;
            if(isGenre_selected){
                req = () => axios.delete(`/api/genres/${genre}`);
            }else{
                req = () => axios.post(`/api/genres/${genre}`);
            }

            await req();
            toast.success('Genre updated sucessfully');
            router.refresh();

        }catch(error){
            console.log(error);
        }

    }

    return {isGenre_selected,toggleGenre}

};

export default useGenre;