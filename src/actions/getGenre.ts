import getValid_token from "@/lib/SpotityClient";
import { BASE_URL } from "@/lib/util";
import axios from "axios";

export default async function getGenre(){
    const token = await getValid_token();

    try{
        const res = await axios.get(
            `${BASE_URL}/recommendations/available-genre-seeds`,
            {
                headers : {
                    'Authorization' : `Bearer ${token}`
                }
            }
        )
        return res.data;
        
    }catch(error){
        console.log(error)
    }
}