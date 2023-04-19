import getValid_token from "@/lib/SpotityClient";
import { BASE_URL } from "@/lib/util";
import axios from "axios";

interface IgetTracks{
    qGenre ?:  string[];
    qLang :  string[];
}

export default async function getPLaylistByPreference( {qLang:lang}:IgetTracks ){

    const token = await getValid_token();

    const locale = lang.join(',');
    const type = 'playlist';
    const market = 'IN';
    const limit = '10'

    
    const genreQuery = 'pop';

    try{
    const res = await axios.get(
        `${BASE_URL}/search?q=${genreQuery}&type=${type}&market=${market}&locale=${locale}&limit=${limit}`,
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