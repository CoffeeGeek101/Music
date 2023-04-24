import getValid_token from "@/lib/SpotityClient";
import { BASE_URL } from "@/lib/util";
import axios from "axios";

interface IgetTracks{
    qGenre :  string[];
    qLang :  string[];
}

export default async function getPLaylistByPreference( {qLang:lang, qGenre:genre}:IgetTracks ){

    const token = await getValid_token();

    const genres = genre;
    const type = 'playlist';
    const limit = '10';
    const market = lang.join(',');

    const genreQuery = genres.map(genre => `${genre}`).join(' OR ');    

    try{
    const res = await axios.get(
        `${BASE_URL}/search?q=${genreQuery}&type=${type}&market-${market}&limit=${limit}`,
        {
            headers : {
                'Authorization' : `Bearer ${token}`
            }
        }
    )
    return res.data;

    }catch(error){
        console.log(error);
    }
}