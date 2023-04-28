import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const BASE_URL = 'https://api.spotify.com/v1';

export function cn(...inputs : ClassValue[]){
    return twMerge(clsx(inputs));
}

export function getGoogleIds(){
    const client_id = process.env.GOOGLE_CLIENT_ID;
    const client_secret = process.env.GOOGLE_CLIENT_SECRET;

    if(!client_id || client_id.length === 0){
        throw new Error('Missing Google client ID');
    }
    if(!client_secret || client_secret.length === 0){
        throw new Error('Missing Google client secret');
    }
    return {client_id, client_secret}
}

export function isSongsLiked(song_arr : any[]){
    if(song_arr.length === 0){
        return true
    }
    return false
}