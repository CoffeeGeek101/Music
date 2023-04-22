import getValid_token from "@/lib/SpotityClient";
import { BASE_URL } from "@/lib/util";
import axios from "axios";

interface IgetTracks{
    qGenre :  string[];
    qLang :  string[];
}

export default async function getTracksByPreference( {qGenre:genre, qLang:lang}:IgetTracks ){

    const token = await getValid_token();

    const genres = genre;
    const type = 'track';
    const limit = '30';
    const market = lang.join(',');

    
    const genreQuery = genres.map(genre => `genre:${genre}`).join(' OR ');
   


    const query = `${genreQuery}`;
    console.log(query)

    try{
    const res = await axios.get(
        `${BASE_URL}/search?q=${query}&type=${type}&market=${market}&limit=${limit}`,
        {
            headers : {
                'Authorization' : `Bearer ${token}`
            }
        }
    )
    console.log(res.data)
    return res.data;

    }catch(error){
        console.log(error);
    }
}