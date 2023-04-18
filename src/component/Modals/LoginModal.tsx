"use client"
import useLoginModal from '@/hooks/LoginHook';
import React from 'react'
import Modal from './Modal';


const LoginModal = () => {

    const useLogin = useLoginModal();

    const logo = (
        <img src='/images/google.png' className='w-[30px] h-[30px]'/>
    )
    
    const body = (
        <>
        <p className='text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-br from-white to-[#899fff]'>Go passwordless!</p>
        <p className='text-center font-light text-gray-400'>Login with your Google account and take Music everywhere.</p>
        </>
    )

  return (
    <>
    <Modal 
    isOpen={useLogin.isOpen}
    onClose={useLogin.onClose}
    title='Login'
    actionLabel='Continue with Google'
    logo={logo}
    body={body}
     />
    </>
  )
}

export default LoginModal