import getValid_token from "@/lib/SpotityClient";
import { BASE_URL } from "@/lib/util";
import axios from "axios";

export default async function getPlaylists(){
    
    const token = await getValid_token();
    const category_id = "toplists";

    try{
        const res = await axios.get(
        `${BASE_URL}/browse/categories/${category_id}/playlists`,
        {
            headers : {
                'Authorization': `Bearer ${token}`
            }
        }
    )
    return res.data;
    }
    catch(error){
        console.log(error)
    }

}
