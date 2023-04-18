import React from 'react'
import Image from 'next/image'

interface IAvatar{
  avi : string | null | undefined
}


const Avatar: React.FC<IAvatar> = ({avi}) => {
  return (
    <Image
    alt='deafault'
    width={30}
    height={30}
    src={avi ? `${avi}` : '/images/php_logo.png'}
    className='rounded-full'
    />
  )
}

export default Avatar