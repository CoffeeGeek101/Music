import { getCurrentUser } from "@/actions/getCurrentUser";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

interface IGenreProp{
    genre : string;
}

export async function POST(request : Request, {params}:{params : IGenreProp}){

    const user = await getCurrentUser();

    if(!user){
        return NextResponse.error();
    }

    const {genre} = params;

    if(!genre || (typeof genre !== 'string')){
        throw new Error('Invalid genre');
    }

    const dbUser : User | null = await db.get(`user:${user.id}`);

    if(!dbUser){
        throw new Error('No authorized user')
    }

    dbUser.genre = [...(dbUser.genre || [])];
    dbUser.genre.push(genre);

    await db.set(`user:${user.id}`,dbUser);
    // console.log(dbUser);

    return NextResponse.json(dbUser);

}

export async function DELETE(request : Request, {params}: {params : IGenreProp}){

    const user = await getCurrentUser();

    if(!user){
        return NextResponse.error();
    }

    const {genre} = params;

    if(!genre || (typeof genre !== 'string')){
        throw new Error('Inavlid genre')
    }

    const dbUser : User | null = await db.get(`user:${user.id}`);

    if(!dbUser){
        throw new Error('No authroized user');
    }
    dbUser.genre = [...(dbUser.genre || [])]
    dbUser.genre = dbUser.genre.filter((gen)=> gen !== genre);

    await db.set(`user:${user.id}`, dbUser);

    return NextResponse.json(dbUser);

}