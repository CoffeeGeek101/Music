import React from 'react'
import Image from 'next/image'


const Avatar = () => {
  return (
    <Image
    alt='deafault'
    width={30}
    height={30}
    src='/images/php_logo.png'
    />
  )
}

export default Avatar