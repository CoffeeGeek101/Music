import getValid_token from "@/lib/SpotityClient";
import axios from "axios";

export default async function getTracks(){
    
    const token = await getValid_token();
    const id = "4aawyAB9vmqN3uQ7FjRGTy";

    try{
        const res = await axios.get(
        `https://api.spotify.com/v1/albums/${id}`,
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
