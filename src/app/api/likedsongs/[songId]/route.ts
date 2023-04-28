import { getCurrentUser } from "@/actions/getCurrentUser";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

interface ILikedSongs{
    songId : string | null
}

export async function POST(request : Request, {params} : {params : ILikedSongs}){

    const {songId} = params;
    const user = await getCurrentUser();

    if(!user){
        return NextResponse.error();
    }

    if(!songId || (typeof songId !== 'string')){
        throw new Error('Invalid song id, try another one')
    }

    const dbUser : User | null = await db.get(`user:${user.id}`);

    if(!dbUser){
        throw new Error('Authorization Issue, please login')
    }

    dbUser.likedSongs = [...(dbUser.likedSongs || [])]
    dbUser.likedSongs.push(songId);

    await db.set(`user:${user.id}`,dbUser);

    return NextResponse.json(dbUser);
}

export async function DELETE(request : Request, {params} : {params : ILikedSongs}){

    const {songId} = params;

    const user = await getCurrentUser();

    if(!user){
        return NextResponse.error();
    }

    if(!songId || (typeof songId !== 'string')){
        throw new Error('Invalid song id, try another song')
    }

    const dbUser : User | null = await db.get(`user:${user.id}`);

    if(!dbUser){
        throw new Error('Authorization Issue, please login')
    }

    dbUser.likedSongs = [...(dbUser.likedSongs || [])];
    dbUser.likedSongs = dbUser.likedSongs.filter((likedsongId)=> likedsongId !== songId);

    await db.set(`user:${user.id}`,dbUser);

    return NextResponse.json(dbUser);
}