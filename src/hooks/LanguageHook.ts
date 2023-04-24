"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import useLoginModal from "./LoginHook";

interface ILanguageHook{
    langCode : string;
    user : User;
}

const useLanguage = ({langCode : code, user}:ILanguageHook) => {

    const loginModal = useLoginModal();
    const router = useRouter();

    const selectedLanguage = () =>{
        const languageCodes = user.lang;
        return languageCodes.includes(code);
    }

    const isSelected = selectedLanguage();

    const toggleLanguage = async (e : React.MouseEvent<HTMLDivElement>)=>{
        e.stopPropagation();

        if(!user){
            return loginModal.onOpen();
        }
        try{

            const languageToDelete = user.lang.find((marketCode) => marketCode !== code);
            if (languageToDelete) {
                await axios.delete(`/api/lang/${languageToDelete}`);
              }

            let req;

            if(isSelected){
                req = () => axios.delete(`/api/lang/${code}`);
            }else{
                req = () => axios.post(`/api/lang/${code}`);
            }
            await req();
            toast.success('Preference updated, sucessfully!');
            router.refresh();

        }
        catch(error){
            console.log(error);
            toast.error('something went wrong');
        }
    }

    return {isSelected, toggleLanguage};

}

export default useLanguage;

