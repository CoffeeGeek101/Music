interface User {
    id : string;
    name : string | null | undefined,
    email : string | null | undefined,
    image : string | null | undefined,
    lang : language[],
    genre : genre[],
    likedSongs : songs[]
}

type songs = string;
type genre = string;
type language = string;
