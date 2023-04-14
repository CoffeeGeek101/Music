"use client"

import React from 'react'

interface ILandingProps{
    songs : {}
}

const LandingPage : React.FC<ILandingProps> = ({
    songs
}) => {

    console.log(songs)

  return (
    <div>LandingPage</div>
  )
}

export default LandingPage