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
    const [ loading, isLoading] = useState<boolean>(false)
    
    const body = (
        <>
        <p className='text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-br from-white to-[#899fff]'>Go passwordless!</p>
        <p className='text-center font-light text-gray-400'>Login with your Google account and take Music everywhere.</p>
        </>
    )

    const handleLogin = async() => {
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

    const footer = (
      <Button 
      loading={loading}
      onClick={handleLogin}
      size='modal' variant='auth' className='flex items-center justify-center gap-1'>
      { loading ? (<Loader2 className='animate-spin text-blue-100'/>):(<img src='/images/google.png' className='w-[30px] h-[30px]'/>)}
      <p>Continue with Google</p>
      </Button>
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