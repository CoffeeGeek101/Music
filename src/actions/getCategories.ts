import getValid_token from "@/lib/SpotityClient";
import { BASE_URL } from "@/lib/util";
import axios from "axios";

export default async function getCatgeory() {
    
    const token = await getValid_token();
    const languageCode = 'en-IN';

    try{
        const res = await axios.get(
            `${BASE_URL}/browse/categories`,
            {
                headers : {
                    'Accept-Language': languageCode,
                    'Authorization': `Bearer ${token}`
                }
            }
        )
        return res.data

    }catch(error){
        console.log(error);
    }
}