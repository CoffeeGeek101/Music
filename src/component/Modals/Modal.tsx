"use client"

import React, { useState } from 'react'
import {XCircle} from 'lucide-react'
import Button from '../Button';

interface IModal{
    isOpen : boolean;
    onClose : () => void;
    onSubmit ?: () => void;
    actionLabel ?: string;
    disabled ?: boolean;
    secondaryAction ?: () => void;
    secondaryActionLabel ?: () => void;
    title : string;
    body ?: React.ReactElement;
    logo ?: React.ReactElement;
}   


const Modal : React.FC<IModal> = ({
    isOpen,
    onClose,
    onSubmit,
    actionLabel,
    disabled,
    secondaryAction,
    secondaryActionLabel,
    title,
    body,
    logo
}) => {

    const [showModal, setShowModal] = useState(isOpen);

    const handleClose = () =>{
        if(disabled){
            return;
        }
        onClose();
    }

    const handleSubmit = () => {
        if(disabled || !onSubmit){
            return;
        }
        onSubmit();
    }

    const handleSecondaryActions = () => {
        if(disabled || !secondaryAction){
            return;
        }
        secondaryAction();
    }

    if(!isOpen){
        return null;
    }


  return (
    <div className='w-[100vw] h-[100vh] fixed top-0 left-0 z-50 backdrop-blur-[1px] bg-gradient-to-t from-slate-800/30 to-slate-500 flex items-end md:items-center lg:items-center'>
        <div 
        style={{boxShadow:'1px 0px 20px 5px #00000080'}}
        className='w-full h-auto md:w-2/4 lg:w-3/6  bg-slate-950/60 backdrop-blur-[20px] m-auto rounded-xl p-5'>
            <div className='w-full h-full flex flex-col gap-4 items-start justify-start'>
                
                {/* header */}
                
                <div className='w-full relative py-2'>
                    <XCircle className='absolute left-1 top-1 hover:cursor-pointer hover:text-rose-500 transition-all' onClick={onClose}/>
                    <p
                    style={{textShadow:'1px 1px 10px #ffffff73'}}
                    className='text-center text-xl md:text-2xl lg:text-3xl'>
                    {title}
                    </p>
                </div>
                <div className='flex flex-col items-center justify-start m-auto py-4'>
                    {body}
                </div>
                <div className='w-full flex flex-col justify-center'>
                    <Button size='modal' variant='auth' className='flex items-center justify-center gap-1'>
                        {logo}
                        {actionLabel}
                    </Button>
                    <p className='text-center mt-[40px] text-xs font-thin text-gray-500'>© coffeeGeek101 | shoumyadeep </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal