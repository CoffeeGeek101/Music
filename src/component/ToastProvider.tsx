"use client"
import React, { ReactNode } from 'react'
import { Toaster } from 'react-hot-toast';

interface IToastProvider{
    children : ReactNode;
}

const ToastProvider: React.FC<IToastProvider> = ({children}) => {
  return (
    <>
    <Toaster reverseOrder={false} position='top-center'/>
    {children}
    </>
  )
}

export default ToastProvider