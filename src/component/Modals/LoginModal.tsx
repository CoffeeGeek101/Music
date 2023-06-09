"use client"
import useLoginModal from '@/hooks/LoginHook';
import { Loader2 } from 'lucide-react';
import React, { useState } from 'react'
import Button from '../Button';
import Modal from './Modal';
import {signIn} from 'next-auth/react'
import { toast } from 'react-hot-toast';


const LoginModal = () => {

    const useLogin = useLoginModal();
    const [ loading, isLoading] = useState<boolean>(false);
    const [ spotifyLoading, isSpotifyLoading] = useState<boolean>(false);
    
    const body = (
        <>
        <p className='text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-br from-white to-[#899fff]'>Go passwordless!</p>
        <p className='text-center font-light text-gray-400'>Login with your Google or Spotify account and take Music everywhere.</p>
        </>
    )

    const handleGoogleLogin = async() => {
        isLoading(true);
      try{
        await signIn('google');
      }catch(error){
          toast.error('something went wrong')
      }
      finally{
        isLoading(false);
        useLogin.onClose();
      }
    }

    const handleSpotifyLogin = async() => {
      isSpotifyLoading(true);
      try{
        await signIn('spotify');
      }catch(error){
        toast.error('something went wrong');
      }
      finally{
        isSpotifyLoading(false);
        useLogin.onClose();
      }
    }

    const footer = (
      <div className='flex flex-col gap-3'>
      <Button 
      loading={loading}
      onClick={handleGoogleLogin}
      size='modal' variant='auth' className='flex items-center justify-center gap-1'>
      { loading ? (<Loader2 className='animate-spin text-blue-100'/>):(<img src='/images/google.png' className='w-[30px] h-[30px]'/>)}
      <p>Continue with Google</p>
      </Button>
      
      <Button 
      loading={spotifyLoading}
      onClick={handleSpotifyLogin}
      size='modal' variant='auth' className='flex items-center justify-center gap-1 bg-green-500 hover:bg-green-700 text-#fff'>
      { loading ? (<Loader2 className='animate-spin text-blue-100'/>):(<img style={{boxShadow:'1px 2px 5px #060606a1000'}} src='/images/spotify.png' className='w-[30px] h-[30px]'/>)}
      <p>Continue with Spotify <span className='text-xs font-semibold'>recommended</span></p>
      </Button>
      </div>
    )

  return (
    <>
    <Modal 
    isOpen={useLogin.isOpen}
    onClose={useLogin.onClose}
    title='Login'
    body={body}
    footer={footer}
     />
    </>
  )
}

export default LoginModal