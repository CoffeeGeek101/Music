import { db } from "@/lib/db";
import axios from "axios";
import { getCurrentUser } from "./getCurrentUser";

const getSpotifyToken = async () => {

    const client_id = process.env.CLIENT_ID;
    const client_secret = process.env.CLIENT_SECRET;

    const user = await getCurrentUser();

    if(!user){
        return null;
    }

    const id = user.id;
    
    const dbAccount = await db.get(`user:account:by-user-id:${id}`) as string | null;

    if(!dbAccount){
        return null;
    }

    const spoityAccount = await db.get(dbAccount);

    if(!spoityAccount){
        return null;
    }

    //@ts-ignore
    let {access_token, expires_at, refresh_token} = spoityAccount;
    
    const now = Date.now();
    if( expires_at && expires_at < now ) {
        try {

            const res = await axios.post('https://accounts.spotify.com/api/token', null, {
                params: {
                    grant_type: 'refresh_token',
                    refresh_token,
                    client_id,
                    client_secret
                }
            }
        );
            access_token = res.data.access_token;
            expires_at = now + (res.data.expires_in * 1000) - 60;

            await db.set(dbAccount, {...spoityAccount, access_token, expires_at, refresh_token});

        }catch(error){
            console.log(error);
            return null;
        }
    }

    return {access_token, expires_at, refresh_token};

}

export default getSpotifyToken;