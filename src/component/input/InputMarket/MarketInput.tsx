import React from 'react'
import LanguageCard from './MarketCard';

interface ILanguageInput {
  user : User;
  language ?: { code : string, name : string}[]
}

const LanguageInput : React.FC<ILanguageInput> = ({user, language}) => {
  return (
    <>
    {
      language?.map((lan)=>(
        <LanguageCard key={lan.name} user={user} langCode={lan.code} label={lan.name}/>
      ))  
    }
    </>
  )
}

export default LanguageInput