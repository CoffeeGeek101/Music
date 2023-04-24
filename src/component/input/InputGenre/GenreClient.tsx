import useGenre from '@/hooks/GenreHook';
import React from 'react'

interface IGenreCard{
    user : User;
    genre : string;
}

const GenreClient : React.FC<IGenreCard> = ({user,genre}) => {

    const {isGenre_selected,toggleGenre} = useGenre({genre, user});

    // console.log(user.id)

  return (
    <div 
    onClick={toggleGenre}
    className={`border-[1px] w-auto p-3 rounded-3xl cursor-pointer ${isGenre_selected ? 'bg-blue-800 shadow-xl shadow-blue-800' : ''}`}>
        {genre}
    </div>
  )
}

export default GenreClient