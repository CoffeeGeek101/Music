import React from 'react'

const FallBack = () => {
  return (
    <div className='flex flex-col items-center'>
        <p 
        style={{textShadow:'1px 1px 20px rgba(0, 110, 255, 0.805)'}}
        className='text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-[#899fff]'>Seems like, you are not Logged in.</p>
        <p className='text-lg text-gray-500'>Login to continue</p>
    </div>
  )
}

export default FallBack