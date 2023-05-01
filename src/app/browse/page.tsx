import getValid_token from '@/lib/SpotityClient'
import React from 'react'
import InputSearch from './InputSearch';

const BrowsePage = async () => {

  const token = await getValid_token();

  return (
    <div>
      <InputSearch token={token}/>
    </div>
  )
}

export default BrowsePage