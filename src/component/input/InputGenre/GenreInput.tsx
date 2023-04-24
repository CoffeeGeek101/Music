import React from 'react'
import GenreClient from './GenreClient';


interface IGenreInput {
  user : User;
  genre ?: string[]
}

const GenreInput : React.FC<IGenreInput> = ({user, genre}) => {
  return (
    <>
    {
      genre?.map((gen)=>(
        <GenreClient key={gen} user={user} genre={gen}/>
      ))  
    }
    </>
  )
}

export default GenreInput