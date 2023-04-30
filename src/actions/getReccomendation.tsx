import { db } from "@/lib/db";
import { mood } from "@/lib/moods";
import getValid_token from "@/lib/SpotityClient";
import { BASE_URL } from "@/lib/util";
import { getCurrentUser } from "./getCurrentUser";

interface IReccomendation{
    moods ?: string;
}

export default async function getRecomendation(params : IReccomendation){
    
    const {moods} = params;

    const mood_settings = mood.find((moody)=>moody.name === moods);
    const token = await getValid_token();
    const user = await getCurrentUser();

    const genre = mood_settings?.genres.join(',');
    const target_tempo = mood_settings?.target_tempo;
    const max_tempo = mood_settings?.max_tempo;
    const target_valence = mood_settings?.target_valence;
    const max_valence = mood_settings?.max_valence;
    const target_loudness = mood_settings?.target_loudness;
    const max_loudness = mood_settings?.max_loudness;
    const market = user?.lang.join(',')

    const songlist = await db.lrange(`user:${user?.id}:songHistory`, 0, -1);
    const seed_tracks = songlist.join(',');
    const track_length = seed_tracks.length;
    const artistlist = await db.lrange(`user:${user?.id}:artistHistory`,0,-1);
    const seed_artists = artistlist.join(',');
    const artist_length = seed_artists.length;


    try{
        const res = await fetch(
            `${BASE_URL}/recommendations?${artist_length === 0 ? '' : `seed_artists=${seed_artists}&`}${track_length === 0 ? '' : `seed_tracks=${seed_tracks}&`}${track_length === 0 && artist_length === 0 ? `seed_genres=${genre}&` : ''}market=${market}&target_tempo=${target_tempo}&max_tempo=${max_tempo}&target_valence=${target_valence}&max_valence=${max_valence}&target_loudness=${target_loudness}&max_loudness=${max_loudness}`,
            {
                headers : {
                    'Authorization' : `Bearer ${token}`
                },
                next : {
                    revalidate : 3600
                }
            }
        )
        const songs = await res.json();
        // console.log(songs);
        return songs;

    }catch(error){
        console.log('im error')
    }
}

