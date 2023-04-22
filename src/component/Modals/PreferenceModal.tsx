"use client"

import usePrefernceModal from '@/hooks/PreferenceHook'
import { genres } from '@/lib/genre'
import { lang } from '@/lib/language'
import React, { useState } from 'react'
import GenreClient from '../input/InputGenre/GenreClient'
import GenreInput from '../input/InputGenre/GenreInput'
import LanguageInput from '../input/InputMarket/MarketInput'
import Modal from './Modal' 

interface IPreferenceModal{
  user : User;
}

const PreferenceModal: React.FC<IPreferenceModal> = ({user}) => {

  const prefModal = usePrefernceModal();
  const lang_array = lang;
  const genre_array = genres;

  enum STEPS{
    LANGUAGE,
    GENRE,
    ALLSET
  }

  const[step, setStep] = useState(STEPS.LANGUAGE);

  const onBack = () => {
    setStep((prevValue) => prevValue - 1);
  }
  const onNext = () => {
    setStep((prevValue)=>prevValue + 1);
  }

  const actionLabel = () =>{
    if(step === STEPS.ALLSET){
      return 'Contine'
    }
    return 'Next'
  }

  const secondaryActionLabel = () => {
    if(step === STEPS.LANGUAGE){
      return undefined;
    }
    return 'Back';
  }

  const submit_handler = () => {
    if(step === STEPS.ALLSET){
      return prefModal.onClose();
    }
    return onNext();
  }

  const secondaryAction = () => {
    if(step === STEPS.LANGUAGE){
      return undefined
    }
    return onBack();
  }

  let title = 'Select Region';

  let body = (
    <div className='flex flex-col items-center gap-5'>
      <div className='flex flex-col items-center'>
      <p className='text-xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-[#899fff]'>Select your cult.</p>
      <p className='text-sm text-gray-500 font-light'>we'll let you know what people are listing.</p>
      </div>
      <div className='flex flex-row w-full h-auto flex-wrap items-center justify-center gap-4'>
        <LanguageInput user={user} language={lang_array}/>
      </div>
    </div>
  )

  if(step === STEPS.GENRE){
   
    title = 'Select your favorite Genres'
   
    body = (
      <div className='flex flex-col items-center gap-5'>
      <div className='flex flex-col items-center'>
      <p className='text-xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-[#899fff]'>Select your genres</p>
      <p className='text-sm text-gray-500 font-light'>listen to music that lifts you</p>
      </div>
      <div className='flex flex-row w-full h-auto flex-wrap items-center justify-center gap-4'>
        <GenreInput user={user} genre={genre_array}/>
      </div>
    </div>
    )
  }

  if(step === STEPS.ALLSET){
      title = 'Your Preferences'

      body = (
        <div>
          Your are all set
        </div>
      )
  }

  return (
    <Modal
     isOpen={prefModal.isOpen}
     title={title}
     onClose={prefModal.onClose}
     body={body}
     actionLabel={actionLabel()}
     onSubmit={submit_handler}
     secondaryActionLabel={secondaryActionLabel()}
     secondaryAction={secondaryAction}
    />
  )
}

export default PreferenceModal