import useLanguage from '@/hooks/LanguageHook';
import React from 'react'

interface ILanguageCard{
    user : User;
    langCode : string;
    label ?: string;
}

const LanguageCard : React.FC<ILanguageCard> = ({user,langCode,label}) => {

    const {isSelected,toggleLanguage} = useLanguage({langCode, user});

    // console.log(user.id)

  return (
    <div 
    onClick={toggleLanguage}
    className={`border-[1px] w-auto p-3 rounded-3xl cursor-pointer ${isSelected ? 'bg-blue-800 shadow-xl shadow-blue-800' : ''}`}>
        {label}
    </div>
  )
}

export default LanguageCard