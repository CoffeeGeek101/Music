import axios from "axios";

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
let access_token = {token:'', expires_at :0};

async function getAccessToken(force_token = false){

    if(!force_token && access_token.token && access_token.expires_at > Math.floor(Date.now()/1000)){
        return access_token;
    }

    const options = {
        method: 'POST',
        url : 'https://accounts.spotify.com/api/token',
        headers: {
        'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64'))
        },
        data: 'grant_type=client_credentials&scope=streaming user-read-email user-read-private',
        json: true
    };

    try{

        const accessToken = await axios.request(options)
        const token = accessToken.data.access_token;
        const expiresIn = accessToken.data.expires_in;
        const now = Math.floor(Date.now()/1000)
        access_token = {token, expires_at : now + (expiresIn - 60)};
        return access_token;

    }catch(error){
        console.log(error)
    }
}

export default async function getValid_token(force_token = true){
    const now = Math.floor(Date.now()/1000);
    if(!access_token.token || now >= access_token.expires_at){
        await getAccessToken(force_token);
    }
    return access_token.token;
}


