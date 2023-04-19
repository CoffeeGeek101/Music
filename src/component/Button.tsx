import { cn } from '@/lib/util'
import { cva, VariantProps } from 'class-variance-authority'
import React, { ButtonHTMLAttributes } from 'react'

const ButtonVariantProps = cva(
    'active:scale-95 rounded-full hover:cursor-pointer shadow-lg shadow-[#507fff7e] disabled:bg-blue-950 disabled:text-slate-50 disabled:cursor-not-allowed',
    {
        variants : {
            variant : {
                main : 'bg-blue-500',
                auth : 'bg-white text-black hover:bg-blue-200',
                backy : 'bg-white'
            },
            size :{
                free : 'px-20 py-3',
                modal : 'w-full py-3 text-center'
            }
        },
        defaultVariants :{
            variant : 'main',
            size : 'free'
        }
    }
)

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof ButtonVariantProps>{
    loading ?: boolean
}

const Button : React.FC<IButton> = ({className, variant, size, children, loading, ...props}) => {
  return (
    <button
    className={cn(ButtonVariantProps({variant, size, className}))}
    {...props}
    disabled={loading}
    >
    {children}
    </button>
  )
}

export default Button