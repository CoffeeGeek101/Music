import React from 'react'

interface IFallBack{
  label_A : string;
  label_B : string;
}

const FallBack : React.FC<IFallBack> = ({label_A,label_B}) => {
  return (
    <div className='flex flex-row justify-center items-center h-[70vh]'>
      <div className='flex flex-col items-center'>
          <p 
          style={{textShadow:'1px 1px 20px rgba(0, 110, 255, 0.805)'}}
          className='text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-[#899fff]'>{label_A}</p>
          <p className='text-lg text-gray-500'>{label_B}</p>
      </div>
    </div>
  )
}

export default FallBack