import getValid_token from "@/lib/SpotityClient"
import { BASE_URL } from "@/lib/util";
import axios from "axios";
import { NextResponse } from "next/server";
import { getCurrentUser } from "./getCurrentUser";

export const getLikedSongs = async() => {
    
    const token = await getValid_token();
    const user = await getCurrentUser();

    if(!user){
        return NextResponse.error();
    }

    const likedsong = user.likedSongs;

    const batch = 50;

    const tracks = [];

    for(let i=0; i < likedsong.length; i+=batch){

        const current_batch = likedsong.slice(i, i+batch);
        const working_batch = current_batch.join(',');

        try{
            const res = await axios.get(`${BASE_URL}/tracks?ids=${working_batch}`,
                {
                    headers : {
                        "Authorization" : `Bearer ${token}`
                    }
                }
            )
            const batch_data = res.data?.tracks;
            tracks.push(...batch_data);
        }
        catch(error){
            console.log(error)
        }
    }
    return tracks;
}
